var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Square(props) {

  if (props.value == 'BACK' || props.value == 'C') return React.createElement(
    'button',
    { type: 'button', className: 'squareB btn btn-dark', onClick: props.onClick },
    props.value
  );

  return React.createElement(
    'button',
    { type: 'button', className: 'square btn btn-basic', onClick: props.onClick },
    props.value
  );
}

function Area(props) {
  return React.createElement(
    'h1',
    { className: 'areaa bg-light' },
    props.value
  );
}

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {
      val: null,
      exp: []
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'renderArea',
    value: function renderArea() {
      return React.createElement(Area, { value: this.state.exp });
    }
  }, {
    key: 'renderSquare',
    value: function renderSquare(i) {
      var _this2 = this;

      return React.createElement(Square, { value: i, onClick: function onClick() {
          if (i === '=') {
            return _this2.Calculation(_this2.state.exp);
          } else if (i === 'BACK') {
            _this2.state.exp.pop();
            return _this2.handleClick();
          } else if (i === 'C') {
            _this2.state.exp = [];
            return _this2.handleClick();
          }
          _this2.state.exp.push(i), _this2.handleClick();
        }
      });
    }
  }, {
    key: 'Calculation',
    value: function Calculation() {
      var st = eval(this.state.exp.join(''));
      return this.setState({ exp: st });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      return this.setState({
        exp: this.state.exp
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container bg-danger' },
        React.createElement(
          'div',
          { className: 'board' },
          React.createElement(
            'div',
            { className: 'row' },
            this.renderArea(this.state.val)
          ),
          React.createElement(
            'div',
            { className: 'row' },
            this.renderSquare(1),
            this.renderSquare(2),
            this.renderSquare(3),
            this.renderSquare('+')
          ),
          React.createElement(
            'div',
            { className: 'row' },
            this.renderSquare(4),
            this.renderSquare(5),
            this.renderSquare(6),
            this.renderSquare('-')
          ),
          React.createElement(
            'div',
            { className: 'row' },
            this.renderSquare(7),
            this.renderSquare(8),
            this.renderSquare(9),
            this.renderSquare('*')
          ),
          React.createElement(
            'div',
            { className: 'row' },
            this.renderSquare('='),
            this.renderSquare(0),
            this.renderSquare('.'),
            this.renderSquare('/')
          ),
          React.createElement(
            'div',
            { className: 'row' },
            this.renderSquare('BACK'),
            this.renderSquare('C')
          )
        )
      );
    }
  }]);

  return Board;
}(React.Component);

ReactDOM.render(React.createElement(Board, null), document.getElementById('root'));