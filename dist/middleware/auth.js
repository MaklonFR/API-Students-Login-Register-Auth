"use strict";

var jwt = require('jsonwebtoken');
var auth = function auth(req, res, next) {
  try {
    var _req$header;
    var token = (_req$header = req.header('Authorization')) === null || _req$header === void 0 ? void 0 : _req$header.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({
        error: 'Authentication required'
      });
    }
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Invalid token'
    });
  }
};
module.exports = auth;