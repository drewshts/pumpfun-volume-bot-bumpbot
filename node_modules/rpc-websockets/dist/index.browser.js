"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _websocket = _interopRequireDefault(require("./lib/client/websocket.browser"));
var _client = _interopRequireDefault(require("./lib/client"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Client = exports.Client = /*#__PURE__*/function (_CommonClient) {
  function Client() {
    var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ws://localhost:8080";
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$autoconnect = _ref.autoconnect,
      autoconnect = _ref$autoconnect === void 0 ? true : _ref$autoconnect,
      _ref$reconnect = _ref.reconnect,
      reconnect = _ref$reconnect === void 0 ? true : _ref$reconnect,
      _ref$reconnect_interv = _ref.reconnect_interval,
      reconnect_interval = _ref$reconnect_interv === void 0 ? 1000 : _ref$reconnect_interv,
      _ref$max_reconnects = _ref.max_reconnects,
      max_reconnects = _ref$max_reconnects === void 0 ? 5 : _ref$max_reconnects;
    var generate_request_id = arguments.length > 2 ? arguments[2] : undefined;
    (0, _classCallCheck2["default"])(this, Client);
    return _callSuper(this, Client, [_websocket["default"], address, {
      autoconnect: autoconnect,
      reconnect: reconnect,
      reconnect_interval: reconnect_interval,
      max_reconnects: max_reconnects
    }, generate_request_id]);
  }
  (0, _inherits2["default"])(Client, _CommonClient);
  return (0, _createClass2["default"])(Client);
}(_client["default"]);