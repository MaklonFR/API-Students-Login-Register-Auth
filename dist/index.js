"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var app = express();
require('dotenv').config();
var db = require("././config/database");
var auth = require("././middleware/auth");
var port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Auth Routes

// Register
app.post('/api/auth/register', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, username, email, password, _yield$db$query, _yield$db$query2, existingUsers, hashedPassword, _yield$db$query3, _yield$db$query4, result, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password; // Validate input
          if (!(!username || !email || !password)) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: 'All fields are required'
          }));
        case 1:
          _context.n = 2;
          return db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);
        case 2:
          _yield$db$query = _context.v;
          _yield$db$query2 = _slicedToArray(_yield$db$query, 1);
          existingUsers = _yield$db$query2[0];
          if (!(existingUsers.length > 0)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: 'Username or email already exists'
          }));
        case 3:
          _context.n = 4;
          return bcrypt.hash(password, 10);
        case 4:
          hashedPassword = _context.v;
          _context.n = 5;
          return db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
        case 5:
          _yield$db$query3 = _context.v;
          _yield$db$query4 = _slicedToArray(_yield$db$query3, 1);
          result = _yield$db$query4[0];
          res.status(201).json({
            message: 'User registered successfully',
            userId: result.insertId
          });
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          console.error(_t);
          res.status(500).json({
            error: 'Error registering user'
          });
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Login
app.post('/api/auth/login', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body2, username, password, _yield$db$query5, _yield$db$query6, users, user, isValidPassword, token, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password; // Validate input
          if (!(!username || !password)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            error: 'Username and password are required'
          }));
        case 1:
          _context2.n = 2;
          return db.query('SELECT * FROM users WHERE username = ?', [username]);
        case 2:
          _yield$db$query5 = _context2.v;
          _yield$db$query6 = _slicedToArray(_yield$db$query5, 1);
          users = _yield$db$query6[0];
          if (!(users.length === 0)) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(401).json({
            error: 'Invalid credentials'
          }));
        case 3:
          user = users[0]; // Check password
          _context2.n = 4;
          return bcrypt.compare(password, user.password);
        case 4:
          isValidPassword = _context2.v;
          if (isValidPassword) {
            _context2.n = 5;
            break;
          }
          return _context2.a(2, res.status(401).json({
            error: 'Invalid credentials'
          }));
        case 5:
          // Generate token
          token = jwt.sign({
            userId: user.id,
            username: user.username
          }, process.env.JWT_SECRET, {
            expiresIn: '24h'
          });
          res.json({
            token: token
          });
          _context2.n = 7;
          break;
        case 6:
          _context2.p = 6;
          _t2 = _context2.v;
          console.error(_t2);
          res.status(500).json({
            error: 'Error logging in'
          });
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Student Routes

// GET all students
app.get('/api/students', auth, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _yield$db$query7, _yield$db$query8, students, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return db.query('SELECT * FROM students');
        case 1:
          _yield$db$query7 = _context3.v;
          _yield$db$query8 = _slicedToArray(_yield$db$query7, 1);
          students = _yield$db$query8[0];
          res.json(students);
          _context3.n = 3;
          break;
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error(_t3);
          res.status(500).json({
            error: 'Error fetching students'
          });
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// GET student by ID
app.get('/api/students/:id', auth, /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _yield$db$query9, _yield$db$query0, students, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return db.query('SELECT * FROM students WHERE student_id = ?', [req.params.id]);
        case 1:
          _yield$db$query9 = _context4.v;
          _yield$db$query0 = _slicedToArray(_yield$db$query9, 1);
          students = _yield$db$query0[0];
          if (!(students.length === 0)) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            error: 'Student not found'
          }));
        case 2:
          res.json(students[0]);
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t4 = _context4.v;
          console.error(_t4);
          res.status(500).json({
            error: 'Error fetching student'
          });
        case 4:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Validation middleware
var validateStudent = function validateStudent(req, res, next) {
  var _req$body3 = req.body,
    name = _req$body3.name,
    studentId = _req$body3.studentId,
    email = _req$body3.email;
  if (!name || !studentId || !email) {
    return res.status(400).json({
      error: 'Name, studentId, and email are required fields'
    });
  }
  if (typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({
      error: 'Name must be a non-empty string'
    });
  }
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    return res.status(400).json({
      error: 'Invalid email format'
    });
  }
  next();
};

// POST new student
app.post('/api/students', [auth, validateStudent], /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$body4, name, studentId, email, _yield$db$query1, _yield$db$query10, existingStudents, _yield$db$query11, _yield$db$query12, result, _yield$db$query13, _yield$db$query14, newStudent, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.p = 0;
          _req$body4 = req.body, name = _req$body4.name, studentId = _req$body4.studentId, email = _req$body4.email; // Check if student ID already exists
          _context5.n = 1;
          return db.query('SELECT * FROM students WHERE student_id = ?', [studentId]);
        case 1:
          _yield$db$query1 = _context5.v;
          _yield$db$query10 = _slicedToArray(_yield$db$query1, 1);
          existingStudents = _yield$db$query10[0];
          if (!(existingStudents.length > 0)) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, res.status(400).json({
            error: 'Student ID already exists'
          }));
        case 2:
          _context5.n = 3;
          return db.query('INSERT INTO students (name, student_id, email) VALUES (?, ?, ?)', [name, studentId, email]);
        case 3:
          _yield$db$query11 = _context5.v;
          _yield$db$query12 = _slicedToArray(_yield$db$query11, 1);
          result = _yield$db$query12[0];
          _context5.n = 4;
          return db.query('SELECT * FROM students WHERE id = ?', [result.insertId]);
        case 4:
          _yield$db$query13 = _context5.v;
          _yield$db$query14 = _slicedToArray(_yield$db$query13, 1);
          newStudent = _yield$db$query14[0];
          res.status(201).json(newStudent[0]);
          _context5.n = 6;
          break;
        case 5:
          _context5.p = 5;
          _t5 = _context5.v;
          console.error(_t5);
          res.status(500).json({
            error: 'Error creating student'
          });
        case 6:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return function (_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}());

// PUT update student
app.put('/api/students/:id', [auth, validateStudent], /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var _req$body5, name, studentId, email, _yield$db$query15, _yield$db$query16, existingStudents, _yield$db$query17, _yield$db$query18, conflictingStudents, _yield$db$query19, _yield$db$query20, updatedStudent, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.p = 0;
          _req$body5 = req.body, name = _req$body5.name, studentId = _req$body5.studentId, email = _req$body5.email; // Check if student exists
          _context6.n = 1;
          return db.query('SELECT * FROM students WHERE student_id = ?', [req.params.id]);
        case 1:
          _yield$db$query15 = _context6.v;
          _yield$db$query16 = _slicedToArray(_yield$db$query15, 1);
          existingStudents = _yield$db$query16[0];
          if (!(existingStudents.length === 0)) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, res.status(404).json({
            error: 'Student not found'
          }));
        case 2:
          if (!(studentId !== req.params.id)) {
            _context6.n = 4;
            break;
          }
          _context6.n = 3;
          return db.query('SELECT * FROM students WHERE student_id = ?', [studentId]);
        case 3:
          _yield$db$query17 = _context6.v;
          _yield$db$query18 = _slicedToArray(_yield$db$query17, 1);
          conflictingStudents = _yield$db$query18[0];
          if (!(conflictingStudents.length > 0)) {
            _context6.n = 4;
            break;
          }
          return _context6.a(2, res.status(400).json({
            error: 'Student ID already exists'
          }));
        case 4:
          _context6.n = 5;
          return db.query('UPDATE students SET name = ?, student_id = ?, email = ? WHERE student_id = ?', [name, studentId, email, req.params.id]);
        case 5:
          _context6.n = 6;
          return db.query('SELECT * FROM students WHERE student_id = ?', [studentId]);
        case 6:
          _yield$db$query19 = _context6.v;
          _yield$db$query20 = _slicedToArray(_yield$db$query19, 1);
          updatedStudent = _yield$db$query20[0];
          res.json(updatedStudent[0]);
          _context6.n = 8;
          break;
        case 7:
          _context6.p = 7;
          _t6 = _context6.v;
          console.error(_t6);
          res.status(500).json({
            error: 'Error updating student'
          });
        case 8:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function (_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}());

// DELETE student
app["delete"]('/api/students/:id', auth, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _yield$db$query21, _yield$db$query22, result, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return db.query('DELETE FROM students WHERE student_id = ?', [req.params.id]);
        case 1:
          _yield$db$query21 = _context7.v;
          _yield$db$query22 = _slicedToArray(_yield$db$query21, 1);
          result = _yield$db$query22[0];
          if (!(result.affectedRows === 0)) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, res.status(404).json({
            error: 'Student not found'
          }));
        case 2:
          res.status(204).send();
          _context7.n = 4;
          break;
        case 3:
          _context7.p = 3;
          _t7 = _context7.v;
          console.error(_t7);
          res.status(500).json({
            error: 'Error deleting student'
          });
        case 4:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

// Start server
app.listen(port, function () {
  console.log("Student API server running on port ".concat(port));
});
module.exports = app; // Export for testing