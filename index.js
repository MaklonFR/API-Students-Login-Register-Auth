const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();

const db = require('././config/database');
const auth = require('././middleware/auth');

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Auth Routes

// Register
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if user already exists
        const [existingUsers] = await db.query(
            'SELECT * FROM users WHERE username = ? OR email = ?',
            [username, email]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'Username or email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        const [result] = await db.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        res.status(201).json({
            message: 'User registered successfully',
            userId: result.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Find user
        const [users] = await db.query(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );

        if (users.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = users[0];

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging in' });
    }
});

// Student Routes

// GET all students
app.get('/api/students', auth, async (req, res) => {
    try {
        const [students] = await db.query('SELECT * FROM students');
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching students' });
    }
});

// GET student by ID
app.get('/api/students/:id', auth, async (req, res) => {
    try {
        const [students] = await db.query(
            'SELECT * FROM students WHERE student_id = ?',
            [req.params.id]
        );

        if (students.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(students[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching student' });
    }
});

// Validation middleware
const validateStudent = (req, res, next) => {
    const { name, studentId, email } = req.body;
    if (!name || !studentId || !email) {
        return res.status(400).json({ error: 'Name, studentId, and email are required fields' });
    }
    if (typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ error: 'Name must be a non-empty string' });
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }
    next();
};

// POST new student
app.post('/api/students', [auth, validateStudent], async (req, res) => {
    try {
        const { name, studentId, email } = req.body;

        // Check if student ID already exists
        const [existingStudents] = await db.query(
            'SELECT * FROM students WHERE student_id = ?',
            [studentId]
        );

        if (existingStudents.length > 0) {
            return res.status(400).json({ error: 'Student ID already exists' });
        }

        const [result] = await db.query(
            'INSERT INTO students (name, student_id, email) VALUES (?, ?, ?)',
            [name, studentId, email]
        );

        const [newStudent] = await db.query(
            'SELECT * FROM students WHERE id = ?',
            [result.insertId]
        );

        res.status(201).json(newStudent[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating student' });
    }
});

// PUT update student
app.put('/api/students/:id', [auth, validateStudent], async (req, res) => {
    try {
        const { name, studentId, email } = req.body;

        // Check if student exists
        const [existingStudents] = await db.query(
            'SELECT * FROM students WHERE student_id = ?',
            [req.params.id]
        );

        if (existingStudents.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Check if new studentId conflicts with existing ones
        if (studentId !== req.params.id) {
            const [conflictingStudents] = await db.query(
                'SELECT * FROM students WHERE student_id = ?',
                [studentId]
            );

            if (conflictingStudents.length > 0) {
                return res.status(400).json({ error: 'Student ID already exists' });
            }
        }

        await db.query(
            'UPDATE students SET name = ?, student_id = ?, email = ? WHERE student_id = ?',
            [name, studentId, email, req.params.id]
        );

        const [updatedStudent] = await db.query(
            'SELECT * FROM students WHERE student_id = ?',
            [studentId]
        );

        res.json(updatedStudent[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating student' });
    }
});

// DELETE student
app.delete('/api/students/:id', auth, async (req, res) => {
    try {
        const [result] = await db.query(
            'DELETE FROM students WHERE student_id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting student' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
    console.log(`Student API server running on port ${port}`);
});

module.exports = app; // Export for testing