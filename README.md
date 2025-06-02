# Student Management API: Secure REST API for Student Data Management

This Express.js-based REST API provides a secure and efficient system for managing student data with authentication. The API enables user registration, authentication, and comprehensive CRUD operations for student records while maintaining data security through JWT-based authentication.

The system features robust user authentication with password hashing and JWT token generation, along with complete student management capabilities including creation, retrieval, updating, and deletion of student records. It implements input validation, error handling, and database persistence using MySQL, making it suitable for educational institutions requiring a secure student management system.

## Repository Structure
```
student-api/
├── config/                 # Configuration files directory
│   ├── database.js        # MySQL database connection configuration
│   └── schema.sql         # Database schema definitions
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── index.js               # Main application entry point with route definitions
├── package.json           # Project dependencies and scripts
└── test.js               # API endpoint tests using Jest and Supertest
```

## Usage Instructions
### Prerequisites
- Node.js (v14 or higher)
- MySQL Server (v8.0 or higher)
- npm (Node Package Manager)

Required environment variables:
```
PORT=3000
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_database_name
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd student-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
# Log into MySQL
mysql -u root -p

# Create database and tables
mysql> source config/schema.sql
```

4. Create a `.env` file in the project root with the required environment variables.

5. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### Quick Start

1. Register a new user:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "email": "test@example.com", "password": "password123"}'
```

2. Login to get JWT token:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "password123"}'
```

3. Create a new student (using JWT token):
```bash
curl -X POST http://localhost:3000/api/students \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "studentId": "ST001", "email": "john.doe@example.com"}'
```

### More Detailed Examples

1. Get all students:
```bash
curl -X GET http://localhost:3000/api/students \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

2. Get student by ID:
```bash
curl -X GET http://localhost:3000/api/students/ST001 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

3. Update student:
```bash
curl -X PUT http://localhost:3000/api/students/ST001 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "John Smith", "studentId": "ST001", "email": "john.smith@example.com"}'
```

### Troubleshooting

Common Issues:

1. Authentication Errors
- Error: "Authentication required"
  - Ensure JWT token is included in Authorization header
  - Check token format: `Bearer <token>`
  - Verify token has not expired

2. Database Connection Issues
- Error: "Error connecting to database"
  - Verify MySQL server is running
  - Check database credentials in .env file
  - Ensure database and tables exist

3. Validation Errors
- Error: "Student ID already exists"
  - Use unique student ID when creating/updating students
- Error: "Invalid email format"
  - Ensure email follows standard format (example@domain.com)

## Data Flow

The API processes requests through authentication, validation, and database operations to manage student data securely.

```ascii
Client Request → JWT Auth → Input Validation → Database Operation → Response
     ↑                                                                 |
     |_________________________________________________________________|
```

Key Component Interactions:
1. Client sends authenticated request with JWT token
2. Auth middleware validates token and extracts user information
3. Input validation middleware checks request payload
4. Database operations execute through connection pool
5. Response returns with appropriate status and data
6. Error handling occurs at each step with appropriate responses

## Result

### Register Testing
![image](https://github.com/user-attachments/assets/f61840b4-ba3f-45d1-8137-f42cea668436)

### Login Testing
![image](https://github.com/user-attachments/assets/cef33767-71ec-4282-b6cf-9770f197cba0)

### GET-Students Testing
![image](https://github.com/user-attachments/assets/29aa2ff2-5a95-41c2-a2c4-2d139108621b)

### POST-Student Testing
![image](https://github.com/user-attachments/assets/6550dd29-9d8d-42c1-87ae-76d075348cad)


