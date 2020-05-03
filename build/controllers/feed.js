'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeeds = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFeeds = exports.getFeeds = function getFeeds(req, res) {
  _axios2.default.get('https://api.flickr.com/services/feeds/photos_public.gne').then(function (response) {
    return _xml2js2.default.parseString(response.data, function (error, result) {
      res.status(200).json({
        success: true,
        data: (0, _lodash.map)(result.feed.entry, function (data) {
          return {
            author: {
              name: data.author[0].name[0],
              avatar: data.author[0]['flickr:buddyicon'][0],
              url: data.author[0].uri[0]
            },
            content: {
              image: (0, _lodash.find)(data.link, function (link) {
                return link.$.rel === 'enclosure';
              }).$.href,
              source: (0, _lodash.find)(data.link, function (link) {
                return link.$.rel === 'alternate';
              }).$.href
            },
            title: data.title[0],
            published_date: data.published[0],
            updated_date: data.updated[0]
          };
        })
      });
    });
  }).catch(function () {
    res.status(500).json({
      success: false,
      message: 'Server Error!'
    });
  });
}; /* eslint-disable import/prefer-default-export */
//# sourceMappingURL=feed.js.map