'use strict';

var _dotenv = require('dotenv');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _ = require('./routes/404');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Handle CORS
app.use((0, _cors2.default)());

app.use('/', _routes2.default);
app.use(_2.default);

(0, _dotenv.config)();
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=index.js.map