this["require"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.state = {
	      id: '',
	      name: '',
	      price1: '',
	      price2: '',
	      price3: ''
	      // productName: '',
	    };
	
	    // this.getInfo = this.getInfo.bind(this);
	    // this.updateState = this.updateState.bind(this);
	    return _this;
	  }
	  // updateState(data) {
	  //   this.setState({
	  //     dataItem: data
	  //   });
	
	  // }
	
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      // this.getInfo();
	      var path = window.location.href;
	      console.log(path);
	      var price1Id = path.substring(path.indexOf("=") + 1);
	      if (price1Id === "") {
	        price1Id = 1;
	      }
	      $.ajax({
	        type: "GET",
	        url: "/id/?id=" + price1Id,
	        success: function success(data) {
	          console.log(data);
	          that.setState({
	            id: data.id,
	            name: data.name,
	            price1: data.dprice,
	            price2: data.pprice,
	            price3: data.sprice
	
	          });
	          console.log(that.state);
	        },
	        error: function error(_request, _status, _error) {
	          console.log(_error);
	        }
	      });
	    }
	    ///////////
	    // getInfo() {
	    // var that = this;
	
	
	    // }
	
	  }, {
	    key: 'changeType',
	    value: function changeType(e) {
	      e.target.type = "date";
	    }
	  }, {
	    key: 'changeingone',
	    value: function changeingone(e) {
	      console.log(this.state.name);
	
	      e.target.style = "box-shadow: inset 2px 2px #548f35, inset -2px -2px #548f35;";
	      $("#descrip").text("Bouquet will be delivered approximately as pictured.");
	      $("#h4").text("$" + this.state.price1);
	    }
	  }, {
	    key: 'changeingtwo',
	    value: function changeingtwo() {
	      $("#descrip").text("Additional flowers will be added to enhance the bouquet.");
	      $("#h4").text("$" + this.state.price2);
	    }
	  }, {
	    key: 'changeingthree',
	    value: function changeingthree() {
	      $("#h4").text("$" + this.state.price3);
	      $("#descrip").text("We will add more blooms and select the highest quality flowers we offer in this style.");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      // if(this.state. !==  0){
	      //  var  myData =this.state;
	      // }
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: ' up float  order-container col-xs-12 col-sm-6 col-md-6' },
	          React.createElement(
	            'div',
	            { id: 'orderForm' },
	            React.createElement(
	              'h1',
	              { 'class': 'order-header', name: 'name' },
	              this.state.name
	            ),
	            React.createElement('br', null),
	            React.createElement(
	              'div',
	              { 'class': 'orderForm-arrangement_size' },
	              React.createElement(
	                'div',
	                { className: 'text-align paddingBut' },
	                React.createElement(
	                  'h4',
	                  { 'class': ' orderForm-price modification_price js-price', id: 'h4' },
	                  '$',
	                  this.state.price1
	                ),
	                React.createElement(
	                  'div',
	                  { className: ' btn btn-large btn-order-size btn-order-size--standard col-xs-4 col-sm-4 col-md-4 col-lg-4 js-btnOrderSize', 'class': 'up-sell-list options-list price-size-box clearfix' },
	                  React.createElement(
	                    'button',
	                    { className: 'btn', name: ' price1', id: 'standard', onClick: this.changeingone.bind(this) },
	                    'Standard '
	                  ),
	                  React.createElement(
	                    'button',
	                    { className: 'btntwo btn', name: ' price2', id: 'deluxe', onClick: this.changeingtwo.bind(this) },
	                    'Deluxe   '
	                  ),
	                  React.createElement(
	                    'button',
	                    { className: 'btntwo btn', name: ' price3', id: 'premium', onClick: this.changeingthree.bind(this) },
	                    'Premium'
	                  )
	                )
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'devdes' },
	            React.createElement(
	              'div',
	              { className: 'up-sell', id: 'descrip' },
	              'Bouquet will be delivered approximately as pictured.'
	            ),
	            React.createElement('br', null),
	            React.createElement(
	              'div',
	              { className: 'up-selll' },
	              'Add a zip code for delivery details'
	            )
	          ),
	          React.createElement('br', null),
	          React.createElement('br', null),
	          React.createElement(
	            'div',
	            { className: 'dates' },
	            React.createElement('input', { className: 'inputs', placeholder: 'CHOOSE A DELIVERY DATE', type: 'text', onFocus: this.changeType.bind(this) })
	          ),
	          React.createElement(
	            'div',
	            { className: 'dates' },
	            React.createElement(
	              'button',
	              { className: 'colorbtn' },
	              'Order Now'
	            )
	          )
	        ),
	        React.createElement('div', null)
	      );
	    }
	  }]);
	
	  return App;
	}(React.Component);
	
	ReactDOM.render(React.createElement(App, null), document.getElementById('Flowers4002'));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map