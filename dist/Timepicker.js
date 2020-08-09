"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _reactScrollbar = _interopRequireDefault(require("react-scrollbar"));

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .dtp-img-btn{\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0NBRjI1NjM0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NBRjI1NjQ0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQ0FGMjU2MTQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0FGMjU2MjQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoNEP54AAAIOSURBVHja7Jq9TsMwEMcxrZD4WpBYeKUCe+kTMCACHZh4BFfHO/AAIHZGFhYkBBsSEqxsLCAgXKhbXYOTxh9pfJVP+qutnZ5s/5Lz2Y5I03QhWji2GIcgAokWgfCxNvcOCCGKqiSqhUp0laHOne05vdEyGMfkdxJDVjgwDlEQgYQBgx+ULJaWSXXS6r/ER5FBVR8VfGftTKcITNs+a1XpcFoExREIDF14AVIFxgQUS+h520cdud6wNkC0UBw6BCO/HoCYwBhD8QCkQ/x1mwDyD4plh4D6DDV0TAGyo4HcawLIBBSLDkHeH0Mg2yVP3l4TQMZQDDsEOl/MgHQqhMNuE0D+oBh0CIr8MAKyazBH9WyBuKxDWgbXfjNf32TZ1KWm/Ap1oSk/R53UtQ5xTh3LUlMmT8gt6g51Q9p+SobxgJQ/qmsfZhWywGFSl0yBjCLJCMgXail3b7+rumdVJ2YRss4cN+r6qAHDkPWjPjdJCF4n9RmAD/V9A/Wp4NQassDjwlB6XBiCxcJQWmZZb8THFilfy/lfrTvLghq2TqTHrRMTKNJ0sIhdo15RT+RpyWwFdY96UZ/LdQKBGjcXpcc1AlSFEfLmouD+1knuxBDUVrvOBmoOC/rEcN7OQxKVeJTCiAdUzUJhA2Oez9QTkp72OTVcxDcXY8iKNkxGAJXmJCOQwOa6dhyXsOa6XwEGAKdeb5ET3rQdAAAAAElFTkSuQmCC);\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: 0 none;\n    cursor: pointer;\n    display: block;\n    height: 30px;\n    opacity: 0.5;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    outline: medium none;\n    overflow: hidden;\n    padding: 0;\n    position: relative;\n    text-indent: 100%;\n    white-space: nowrap;\n    width: 20px;\n    min-width: 0;\n    &.b-prev{\n      background-position: -20px 0;\n    }\n    &.b-caret{\n      background-position: -92px -19px;\n      display: inline-block;\n      width: 9px;\n      height: 20px;\n      vertical-align: middle;\n    }\n    &.b-home{\n      background-position: -70px 0;\n    }\n    &.b-top{\n      float: none;\n      height: 15px;\n      width: 30px;\n      display: block;\n      //margin-left: 14px;\n      background-position: -40px 0;\n      margin-bottom: 7px;\n      margin-top: 9px;\n    }\n    &.b-bottom{\n      float: none;\n      background-position: -40px -15px;\n      height: 15px;\n      width: 30px;\n      display: block;\n      margin-bottom: 4px;\n      margin-top: 7px;\n    }\n    &:hover{\n      opacity: 1;\n    } \n  }\n  .tp-scroll{\n    width: 56px;\n  }\n  .tp-item{\n    background: #f5f5f5;\n    border-top: 1px solid #ddd;\n    color: #666;\n    font-size: 12px;\n    text-align: center;\n    border-collapse: collapse;\n    cursor: pointer;\n    border-bottom-width: 0;\n    height: 25px;\n    line-height: 25px;\n    &.i-current{\n      background: #33aaff;\n      box-shadow: #178fe5 0 1px 3px 0 inset;\n      color: #fff;\n      font-weight: 700;\n    }\n    &.i-disabled{\n      opacity: 0.5;\n      cursor: default;\n    }\n    &:hover{\n      color: #fff !important;\n      background: #ff8000 !important;\n      box-shadow: none !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TimepickerStyled = _styledComponents.default.div(_templateObject());

var Timepicker = /*#__PURE__*/function (_Component) {
  _inherits(Timepicker, _Component);

  var _super = _createSuper(Timepicker);

  function Timepicker() {
    var _this;

    _classCallCheck(this, Timepicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "current", 0);

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (i, n) {
      var itemClass = 'tp-item';

      var onClick = _this.props.onChange.bind(_assertThisInitialized(_this), i);

      if (_this.props.value.isSame(i)) {
        itemClass += ' i-current';
        _this.current = n;
      }

      if (_this.props.dateMin && i.isBefore(_this.props.dateMin)) {
        itemClass += ' i-disabled';
        onClick = null;
      } else if (_this.props.dateMax && i.isAfter(_this.props.dateMax)) {
        itemClass += ' i-disabled';
        onClick = null;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: n,
        className: itemClass,
        onClick: onClick
      }, i.format('HH:mm'));
    });

    return _this;
  }

  _createClass(Timepicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollRef.content.children[this.current].scrollIntoView({
        block: 'center'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var p = this.props;
      var times = [];
      var minParts = p.min ? p.min.split(':') : [];
      var time = (0, _moment.default)(p.selected);

      if (minParts[0] >= 0) {
        time.hour(minParts[0]);
      } else {
        time.hour(0);
      }

      if (minParts[1] >= 0) {
        time.minute(minParts[1]);
      } else {
        time.minute(0);
      }

      if (minParts[2] >= 0) {
        time.second(minParts[2]);
      } else {
        time.second(0);
      }

      time.millisecond(0);
      var maxParts = p.max ? p.max.split(':') : [];
      var maxTime = (0, _moment.default)(p.selected).hour(maxParts[0] >= 0 ? maxParts[0] : 23).minute(maxParts[1] >= 0 ? maxParts[1] : 59).second(maxParts[2] >= 0 ? maxParts[2] : 59).millisecond(999);

      while (time.isSameOrBefore(maxTime)) {
        times.push(time);
        time = (0, _moment.default)(time).add(p.step > 0 ? p.step : 60, 'minutes');
      }

      return /*#__PURE__*/_react.default.createElement(TimepickerStyled, {
        className: ""
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "dtp-img-btn b-top"
      }), /*#__PURE__*/_react.default.createElement(_reactScrollbar.default, {
        className: "tp-scroll",
        ref: function ref(e) {
          _this2.scrollRef = window.scrollRef = e;
        },
        style: {
          maxHeight: p.rows * 26 - 1 + 'px'
        },
        horisontal: false,
        speed: 0.8
      }, times.map(this.renderItem)), /*#__PURE__*/_react.default.createElement("button", {
        className: "dtp-img-btn b-bottom"
      }));
    }
  }]);

  return Timepicker;
}(_react.Component);

exports.default = Timepicker;