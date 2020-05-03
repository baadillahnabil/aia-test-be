'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _feed = require('../controllers/feed');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('', function (req, res) {
  res.status(200).send('<p>Test API!</p>');
});

// [GET] /feed
router.get('/feed', _feed.getFeeds);

exports.default = router;
//# sourceMappingURL=index.js.map