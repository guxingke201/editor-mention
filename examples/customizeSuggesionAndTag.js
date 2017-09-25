webpackJsonp([10],{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(39);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcEditorMention = __webpack_require__(19);

var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Nav = _rcEditorMention2['default'].Nav; // use jsx to render html, do not modify simple.html

var Tag = function Tag(props) {
  var data = props.data;

  return _react2['default'].createElement(
    'span',
    { contentEditable: false },
    _react2['default'].createElement('img', { src: data.avatar_url, className: 'tag-avatar' }),
    props.children
  );
};

Tag.propTypes = {
  data: _propTypes2['default'].object,
  children: _propTypes2['default'].any
};

var MentionEditor = _react2['default'].createClass({
  displayName: 'MentionEditor',
  getInitialState: function getInitialState() {
    return {
      contributors: [],
      suggestions: []
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    fetch('./contributors.json').then(function (resp) {
      return resp.json();
    }).then(function (contributors) {
      return _this.setState({ contributors: contributors });
    });
  },
  onSearchChange: function onSearchChange(value) {
    var searchValue = value.toLowerCase();
    var filtered = this.state.contributors.filter(function (contributor) {
      return contributor.login.toLowerCase().indexOf(searchValue) !== -1;
    });
    var suggestions = filtered.map(function (suggestion) {
      return _react2['default'].createElement(
        Nav,
        { style: { height: 34 }, value: suggestion.login, data: suggestion },
        _react2['default'].createElement('img', { src: suggestion.avatar_url, className: 'avatar' }),
        _react2['default'].createElement(
          'span',
          { className: 'meta' },
          suggestion.login
        ),
        _react2['default'].createElement(
          'span',
          { style: { float: 'right', color: 'green' } },
          suggestion.contributions
        )
      );
    });
    this.setState({
      suggestions: suggestions
    });
  },
  render: function render() {
    var suggestions = this.state.suggestions;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_rcEditorMention2['default'], { style: { width: 300 },
        onSearchChange: this.onSearchChange,
        notFoundContent: '',
        mode: 'mutable',
        suggestions: suggestions,
        tag: Tag
      })
    );
  }
});

_reactDom2['default'].render(_react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'p',
    null,
    ' you can mention one of ant-design ',
    _react2['default'].createElement(
      'a',
      { href: 'https://github.com/ant-design/ant-design/graphs/contributors', target: 'blank' },
      'contributors'
    )
  ),
  _react2['default'].createElement(MentionEditor, null)
), document.getElementById('__react-content'));

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(243);


/***/ })

},[602]);
//# sourceMappingURL=customizeSuggesionAndTag.js.map