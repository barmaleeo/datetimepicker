"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 14.2857142%;\n    background: #f5f5f5;\n    border: 1px solid #ddd;\n    color: #666;\n    font-size: 12px;\n    text-align: right;\n    vertical-align: middle;\n    padding: 0 5px 0 0;\n    border-collapse: collapse;\n    cursor: pointer;\n    height: 25px;\n    opacity: 0.5;\n    &.d-disabled{\n      opacity: 0.2;\n      cursor: default;\n    }\n    &.m-same{\n      opacity: 1;\n      &.d-disabled{\n        opacity: 0.5;\n      }\n    }\n    &.d-same{\n       background: #33aaff;\n       box-shadow: #178fe5 0 1px 3px 0 inset;\n       color: #fff;\n       font-weight: 700;\n    }\n    &:hover{\n      color: #fff !important;\n      background: #ff8000 !important;\n      box-shadow: none !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DayStyled = _styledComponents.default.td(_templateObject());

var Day = /*#__PURE__*/function (_Component) {
  _inherits(Day, _Component);

  var _super = _createSuper(Day);

  function Day() {
    var _this;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var p = _this.props;
      var date = (0, _moment.default)(p.value).year(p.day.year()).month(p.day.month()).date(p.day.date());

      if (p.min && date.isBefore(p.min)) {
        date = p.min;
      } else if (p.max && date.isAfter(p.max)) {
        date = p.max;
      }

      p.onChange(date, e);
    });

    return _this;
  }

  _createClass(Day, [{
    key: "render",
    value: function render() {
      var p = this.props;
      var dayClass = '';
      var delimiter = '';

      if (p.day.isSame(p.value, 'month')) {
        dayClass += delimiter + 'm-same';
        delimiter = ' ';
      }

      if (p.day.isSame(p.value, 'day')) {
        dayClass += delimiter + 'd-same';
        delimiter = ' ';
      }

      var onClick = this.onChange;

      if (p.min && p.day.isBefore(p.min, 'day') || p.max && p.day.isAfter(p.max, 'day')) {
        dayClass += delimiter + 'd-disabled';
        onClick = null; //delimiter = ' ';
      }

      return /*#__PURE__*/_react.default.createElement(DayStyled, {
        className: dayClass,
        onClick: onClick
      }, p.day.date());
    }
  }]);

  return Day;
}(_react.Component);

exports.default = Day;