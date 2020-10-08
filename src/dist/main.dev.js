"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _http = _interopRequireDefault(require("../http"));

require("./assets/reset.css");

require("./assets/iconfont/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ES6 module
_vue["default"].prototype.$http = _http["default"]; // 屏蔽开发环境的提示

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');