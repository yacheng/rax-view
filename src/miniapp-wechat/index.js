'use strict';

var _fmtEvent = _interopRequireDefault(require('./fmtEvent'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  data: {},
  properties: {
    className: {
      type: String,
      value: ''
    },
    styleSheet: {
      type: String,
      value: ''
    },
    defaultStyle: {
      type: String,
      value: 'border:0 solid black;display:flex;flex-direction:column;align-content:flex-start;flex-shrink:0;box-sizing:border-box;'
    },
    animation: {
      type: Object,
      value: null
    }
  },
  options: {
    styleIsolation: 'apply-shared'
  },
  didMount: function didMount() {},
  methods: {
    onClick: function onClick(e) {
      var event = (0, _fmtEvent.default)(this.props, e);
      this.triggerEvent('onClick', event);
    },
    onLongPress: function onLongpress(e) {
      var event = (0, _fmtEvent.default)(this.props, e);
      this.triggerEvent('onLongPress', event);
    },
    onTouchStart: function onTouchStart(e) {
      var event = (0, _fmtEvent.default)(this.props, e);
      this.triggerEvent('onTouchStart', event);
    },
    onTouchMove: function onTouchMove(e) {
      var event = (0, _fmtEvent.default)(this.props, e);
      this.triggerEvent('onTouchMove', event);
    },
    onTouchEnd: function onTouchEnd(e) {
      var event = (0, _fmtEvent.default)(this.props, e);
      this.triggerEvent('onTouchEnd', event);
    },
    onTouchCancel: function onTouchCancel(e) {
      var event = (0, _fmtEvent.default)(this.props, e);
      this.triggerEvent('onTouchCancel', event);
    }
  }
});
