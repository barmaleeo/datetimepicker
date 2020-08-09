"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _Month = _interopRequireDefault(require("./Month"));

var _Timepicker = _interopRequireDefault(require("./Timepicker"));

var _reactScrollbar = _interopRequireDefault(require("react-scrollbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  .dtp-floating{\n    position: absolute;\n    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.506);\n    background: #fff;\n    border: 1px solid #ccc;\n    border-bottom-color:  #bbb;\n    color: #333;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    padding: 8px;\n//    padding-left: 0;\n    padding-top: 2px;\n    z-index: 9999;\n    box-sizing: border-box;\n    display: flex;\n    display: none;\n    >div:last-child{\n      margin-left: 8px;\n    }\n  }\n  &:hover{\n    .dtp-floating{\n      display: flex;\n    }\n  }\n\n  \n  .dtp-img-btn{\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0NBRjI1NjM0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NBRjI1NjQ0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQ0FGMjU2MTQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0FGMjU2MjQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoNEP54AAAIOSURBVHja7Jq9TsMwEMcxrZD4WpBYeKUCe+kTMCACHZh4BFfHO/AAIHZGFhYkBBsSEqxsLCAgXKhbXYOTxh9pfJVP+qutnZ5s/5Lz2Y5I03QhWji2GIcgAokWgfCxNvcOCCGKqiSqhUp0laHOne05vdEyGMfkdxJDVjgwDlEQgYQBgx+ULJaWSXXS6r/ER5FBVR8VfGftTKcITNs+a1XpcFoExREIDF14AVIFxgQUS+h520cdud6wNkC0UBw6BCO/HoCYwBhD8QCkQ/x1mwDyD4plh4D6DDV0TAGyo4HcawLIBBSLDkHeH0Mg2yVP3l4TQMZQDDsEOl/MgHQqhMNuE0D+oBh0CIr8MAKyazBH9WyBuKxDWgbXfjNf32TZ1KWm/Ap1oSk/R53UtQ5xTh3LUlMmT8gt6g51Q9p+SobxgJQ/qmsfZhWywGFSl0yBjCLJCMgXail3b7+rumdVJ2YRss4cN+r6qAHDkPWjPjdJCF4n9RmAD/V9A/Wp4NQassDjwlB6XBiCxcJQWmZZb8THFilfy/lfrTvLghq2TqTHrRMTKNJ0sIhdo15RT+RpyWwFdY96UZ/LdQKBGjcXpcc1AlSFEfLmouD+1knuxBDUVrvOBmoOC/rEcN7OQxKVeJTCiAdUzUJhA2Oez9QTkp72OTVcxDcXY8iKNkxGAJXmJCOQwOa6dhyXsOa6XwEGAKdeb5ET3rQdAAAAAElFTkSuQmCC);\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0 none;\n    cursor: pointer;\n    display: block;\n    height: 30px;\n    opacity: 0.5;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    outline: medium none;\n    overflow: hidden;\n    padding: 0;\n    position: relative;\n    text-indent: 100%;\n    white-space: nowrap;\n    width: 20px;\n    min-width: 0;\n    &.b-prev{\n      background-position: -20px 0;\n    }\n    &.b-caret{\n      background-position: -92px -19px;\n      display: inline-block;\n      width: 9px;\n      height: 20px;\n      vertical-align: middle;\n    }\n    &.b-home{\n      background-position: -70px 0;\n    }\n    &:hover{\n      opacity: 1;\n    }\n    \n  }\n  .dtp-header{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    .f-label{\n      position: relative;\n      padding: 5px 3px;\n      line-height: 20px;\n      font-weight: bold;\n      color: rgb(51,51,51);\n      cursor: pointer;\n      &.h-month{\n        flex:1;\n        text-align: right;\n      }\n      .f-l-scrolling{\n        display: none;\n        position: absolute;\n        background: #fff;\n        width: 100%;\n        height: 155px;\n        z-index: 10;\n        padding-right: 10px;\n        padding-bottom: 10px;\n        border: 1px solid #ccc;\n        box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.506);\n        .s-option{\n          padding: 2px 10px 2px 5px;\n\n          &:hover{\n            color: #fff !important;\n            background: #ff8000 !important;\n            box-shadow: none !important;\n          }\n          &.i-current{\n            background: #33aaff;\n            box-shadow: #178fe5 0 1px 3px 0 inset;\n            color: #fff;\n            font-weight: 700;\n          }\n        }\n      }\n      &:hover{\n        text-decoration: underline;\n        .dtp-img-btn{\n          opacity: 1.0;\n        }\n        .f-l-scrolling{\n          display: block;\n        }\n      }\n    }\n  }\n  .dtp-body{\n    display: flex;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DatetimepickerStyled = _styledComponents.default.div(_templateObject());

var Datetimepicker = /*#__PURE__*/function (_Component) {
  _inherits(Datetimepicker, _Component);

  var _super = _createSuper(Datetimepicker);

  function Datetimepicker() {
    var _this;

    _classCallCheck(this, Datetimepicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: null,
      year: 0,
      month: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (val) {
      var value;

      switch (_this.props.format) {
        case 'mysql':
          value = val.format('YYYY-MM-DD HH:mm:ss');
          break;

        case undefined:
          value = val;
          break;

        default:
          value = val.format(_this.props.format);
      }

      _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickHome", function () {
      _this.setState({
        selected: Datetimepicker.getHomeDate(_this.state.value)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonthItem", function (i, n) {
      var itemClass = 's-option';

      if (i.isSame(_this.state.selected, 'month')) {
        itemClass += ' i-current';
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: n,
        className: itemClass,
        onClick: function onClick(e) {
          _this.setState({
            selected: i
          });
        }
      }, i.format('MMMM'));
    });

    _defineProperty(_assertThisInitialized(_this), "renderYearItem", function (i, n) {
      var itemClass = 's-option';

      if (i.isSame(_this.state.selected, 'year')) {
        itemClass += ' i-current';
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: n,
        className: itemClass,
        onClick: function onClick(e) {
          _this.setState({
            selected: i
          });
        }
      }, i.format('YYYY'));
    });

    return _this;
  }

  _createClass(Datetimepicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('did update');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var p = this.props;
      var s = this.state;
      var months = [];

      for (var i = 0; i < 12; i++) {
        months.push((0, _moment.default)(s.selected).month(i));
      }

      var years = [];

      for (var _i = s.selected.year() - 50; _i < s.selected.year() + 50; _i++) {
        years.push((0, _moment.default)(s.selected).year(_i));
      }

      return /*#__PURE__*/_react.default.createElement(DatetimepickerStyled, {
        className: 'input-group' + (p.sm ? ' input-group-sm' : '')
      }, /*#__PURE__*/_react.default.createElement("input", _extends({}, p.inputProps, {
        value: p.displayFormat ? s.value.format(p.displayFormat) : s.value.toString()
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "dtp-floating"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "dtp-f-date"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "dtp-header"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "dtp-img-btn b-prev",
        onClick: function onClick(e) {
          _this2.setState({
            selected: (0, _moment.default)(s.selected).subtract(1, 'month')
          });
        }
      }), /*#__PURE__*/_react.default.createElement("button", {
        className: "dtp-img-btn b-home",
        onClick: this.onClickHome
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "f-label h-month"
      }, /*#__PURE__*/_react.default.createElement("span", null, s.selected.format('MMMM')), /*#__PURE__*/_react.default.createElement("i", {
        className: "dtp-img-btn b-caret"
      }), /*#__PURE__*/_react.default.createElement(_reactScrollbar.default, {
        className: "f-l-scrolling h-months"
      }, months.map(this.renderMonthItem))), /*#__PURE__*/_react.default.createElement("div", {
        className: "f-label f-year"
      }, /*#__PURE__*/_react.default.createElement("span", null, s.selected.format('YYYY')), /*#__PURE__*/_react.default.createElement("i", {
        className: "dtp-img-btn b-caret"
      }), /*#__PURE__*/_react.default.createElement(_reactScrollbar.default, {
        className: "f-l-scrolling h-months"
      }, years.map(this.renderYearItem))), /*#__PURE__*/_react.default.createElement("button", {
        className: "dtp-img-btn b-next",
        onClick: function onClick(e) {
          _this2.setState({
            selected: (0, _moment.default)(s.selected).add(1, 'month')
          });
        }
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "dtp-body"
      }, /*#__PURE__*/_react.default.createElement(_Month.default, {
        value: s.value,
        selected: s.selected,
        min: p.min,
        max: p.max,
        onChange: this.onChange
      }))), /*#__PURE__*/_react.default.createElement(_Timepicker.default, {
        value: s.value,
        selected: s.value,
        rows: 6,
        dateMin: p.min,
        dateMax: p.max,
        min: p.timeMin,
        max: p.timeMax,
        step: p.timeStep,
        onChange: this.onChange
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var ns = {}; //ns.selected = moment(ns.value).hour(0).minute(0).second(0).millisecond(0);

      var nextValue = nextProps.data[nextProps.name];

      if (nextValue !== prevState.value) {
        if (!nextValue) {
          ns.value = (0, _moment.default)().hour(12).minute(15).second(0).millisecond(0);
        } else {
          ns.value = (0, _moment.default)(nextValue);
        }
      }

      if (!prevState.selected) {
        ns.selected = Datetimepicker.getHomeDate(ns.value);
      }

      if (ns !== {}) {
        return ns;
      } else {
        return null;
      }
    }
  }]);

  return Datetimepicker;
}(_react.Component);

exports.default = Datetimepicker;

_defineProperty(Datetimepicker, "getHomeDate", function (value) {
  return (0, _moment.default)(value).hour(0).minute(0).second(0).millisecond(0);
});