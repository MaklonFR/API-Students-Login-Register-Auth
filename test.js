const request = require('supertest');
const app = require('./index');
const db = require('./config/database');

describe('Auth and Student API', () => {
    let testUser, testStudent, authToken;

    beforeAll(async () => {
        // Clear database tables
        await db.query('DELETE FROM users');
        await db.query('DELETE FROM students');

        testUser = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
        };

        testStudent = {
            name: 'John Doe',
            studentId: 'ST001',
            email: 'john.doe@example.com'
        };
    });

    describe('Authentication', () => {
        it('should register a new user', async () => {
            const res = await request(app)
                .post('/api/auth/register')
                .send(testUser);
            
            expect(res.statusCode).toBe(201);
            expect(res.body.message).toBe('User registered successfully');
            expect(res.body.userId).toBeDefined();
        });

        it('should not register user with duplicate username', async () => {
            const res = await request(app)
                .post('/api/auth/register')
                .send(testUser);
            
            expect(res.statusCode).toBe(400);
            expect(res.body.error).toBe('Username or email already exists');
        });

        it('should login user and return token', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    username: testUser.username,
                    password: testUser.password
                });
            
            expect(res.statusCode).toBe(200);
            expect(res.body.token).toBeDefined();
            authToken = res.body.token;
        });

        it('should not login with incorrect password', async () => {
            const res = await request(app)
                .post('/api/auth/login')
                .send({
                    username: testUser.username,
                    password: 'wrongpassword'
                });
            
            expect(res.statusCode).toBe(401);
            expect(res.body.error).toBe('Invalid credentials');
        });
    });

    describe('Student API with Authentication', () => {
        it('should create a new student with auth token', async () => {
            const res = await request(app)
                .post('/api/students')
                .set('Authorization', `Bearer ${authToken}`)
                .send(testStudent);
            
            expect(res.statusCode).toBe(201);
            expect(res.body.name).toBe(testStudent.name);
            expect(res.body.student_id).toBe(testStudent.studentId);
            expect(res.body.email).toBe(testStudent.email);
        });

        it('should not create student without auth token', async () => {
            const res = await request(app)
                .post('/api/students')
                .send(testStudent);
            
            expect(res.statusCode).toBe(401);
            expect(res.body.error).toBe('Authentication required');
        });

        it('should get all students with auth token', async () => {
            const res = await request(app)
                .get('/api/students')
                .set('Authorization', `Bearer ${authToken}`);
            
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBeTruthy();
            expect(res.body.length).toBeGreaterThan(0);
        });

        it('should get student by ID with auth token', async () => {
            const res = await request(app)
                .get(`/api/students/${testStudent.studentId}`)
                .set('Authorization', `Bearer ${authToken}`);
            
            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe(testStudent.name);
        });

        it('should update student with auth token', async () => {
            const updatedData = {
                ...testStudent,
                name: 'Jane Doe'
            };

            const res = await request(app)
                .put(`/api/students/${testStudent.studentId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updatedData);
            
            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe('Jane Doe');
        });

        it('should delete student with auth token', async () => {
            const res = await request(app)
                .delete(`/api/students/${testStudent.studentId}`)
                .set('Authorization', `Bearer ${authToken}`);
            
            expect(res.statusCode).toBe(204);

            // Verify student was deleted
            const getRes = await request(app)
                .get(`/api/students/${testStudent.studentId}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(getRes.statusCode).toBe(404);
        });
    });

    afterAll(async () => {
        // Clean up database
        await db.query('DELETE FROM users');
        await db.query('DELETE FROM students');
        await db.end();
    });
});