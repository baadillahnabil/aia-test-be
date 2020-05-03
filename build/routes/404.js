'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path3 = require('../utils/path');

var _path4 = _interopRequireDefault(_path3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(function (req, res) {
  res.status(404).sendFile(_path2.default.join(_path4.default, 'views', '404.html'));
});

exports.default = router;
//# sourceMappingURL=404.js.map