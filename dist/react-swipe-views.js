!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames")):"function"==typeof define&&define.amd?define(["react","classnames"],t):"object"==typeof exports?exports.ReactSwipeViews=t(require("react"),require("classnames")):e.ReactSwipeViews=t(e.react,e.classnames)}(this,function(e,t){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=i(o);t.default=r.default},function(t,n){t.exports=e},function(e,t,n){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(7);var p=n(8),u=i(p),l=n(5),c=i(l),f=function(t){function n(e){o(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.fomratItems(),t.state={activeIndex:e.activeIndex,dimensions:{},translateX:0,duration:e.duration},t}return s(n,t),a(n,[{key:"componentWillMount",value:function(){this.toIndex(this.state.activeIndex+1)}},{key:"componentDidMount",value:function(){var e=this._root=this.refs.root;this._bound=e.getBoundingClientRect()}},{key:"fomratItems",value:function(){var e=this.props.items,t=e[0],n=e[e.length-1];e.push(t),e.unshift(n)}},{key:"toIndex",value:function(e){var t=this.getAbsIndex(e);this.setState({activeIndex:t,duration:this.props.duration,translateX:"-"+100*e/this.props.items.length+"%"})}},{key:"_onSwipedLeft",value:function(e){var t=this.state.activeIndex+1;this.toIndex(t)}},{key:"_onSwipedRight",value:function(e){var t=this.state.activeIndex-1;this.toIndex(t)}},{key:"_onSwipingLeft",value:function(e,t){var n=this.state.activeIndex*this._bound.width;this.setState({duration:0,translateX:"-"+(n+t)+"px"})}},{key:"_onSwipingRight",value:function(e,t){var n=this.state.activeIndex*this._bound.width;this.setState({duration:0,translateX:"-"+(n-t)+"px"})}},{key:"_onTransitionEnd",value:function(){var e=this.getAbsIndex(this.state.activeIndex);this.setState({activeIndex:e,duration:0,translateX:"-"+100*e/this.props.items.length+"%"})}},{key:"getAbsIndex",value:function(e){var t=e,n=this.props.items.length,i=n-1;return 0==t&&(t=i-1),t==i&&(t=1),t}},{key:"render",value:function(){return e.createElement("div",{ref:"root",className:(0,u.default)("react-swipe-views",this.props.cssClass)},e.createElement(c.default,{flickThreshold:.2,delta:10,preventDefaultTouchmoveEvent:!0,className:"react-swipe-views-wrapper",onSwipingLeft:this._onSwipingLeft.bind(this),onSwipingRight:this._onSwipingRight.bind(this),onSwipedLeft:this._onSwipedLeft.bind(this),onSwipedRight:this._onSwipedRight.bind(this)},e.createElement("div",{className:"react-swipe-views-scroller",style:{width:100*this.props.items.length+"%",transition:"transform "+this.state.duration+"s "+this.props.animate,transform:"translateX("+this.state.translateX+")"}},this.props.items.map(function(t,n){return e.createElement("div",{className:"react-swipe-views-item",key:n,style:{width:100/this.props.items.length+"%"}},this.props.itemTemplate(t,n))}.bind(this)))))}}]),n}(e.Component);f.propTypes={cssClass:e.PropTypes.string,items:e.PropTypes.array,duration:e.PropTypes.number,animate:e.PropTypes.string,itemTemplate:e.PropTypes.func},f.defaultProps={items:[],duration:.3,animate:"linear",activeIndex:0,itemTemplate:function(t,n){return e.createElement("div",null,t)}},t.default=f}).call(t,n(1))},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,'.react-swipe-views{position:relative;height:220px;background:#eee}.react-swipe-views,.react-swipe-views *{box-sizing:border-box}.react-swipe-views-item,.react-swipe-views-scroller,.react-swipe-views-wrapper{height:100%}.react-swipe-views-wrapper{border:1px solid red;position:relative;overflow:hidden}.react-swipe-views-scroller:after{clear:both;content:"\\200B";display:block;height:0}.react-swipe-views-item{float:left}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){!function(t,i){e.exports=i(n(1))}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o);t.default=r.default},function(e,t,n){(function(e){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(t){function a(e){n(this,a);var t=i(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state=t.initialState(),t}return o(a,t),s(a,[{key:"initialState",value:function(){return{x:null,y:null,swiping:!1,start:0}}},{key:"calculatePos",value:function(e){var t=void 0,n=void 0;e.changedTouches?(t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY):(t=e.clientX,n=e.clientY);var i=this.state.x-t,o=this.state.y-n,r=Math.abs(i),s=Math.abs(o),a=Date.now()-this.state.start,p=Math.sqrt(r*r+s*s)/a;return{deltaX:i,deltaY:o,absX:r,absY:s,velocity:p}}},{key:"eventStart",value:function(e){if(!(e.touches&&e.touches.length>1)){var t=e.touches;t||(t=[{clientX:e.clientX,clientY:e.clientY}]),this.props.stopPropagation&&e.stopPropagation(),this.setState({start:Date.now(),x:t[0].clientX,y:t[0].clientY,swiping:!1})}}},{key:"eventMove",value:function(e){if(this.state.x&&this.state.y&&!(e.touches&&e.touches.length>1)){var t=!1,n=this.calculatePos(e);n.absX<this.props.delta&&n.absY<this.props.delta||(this.props.stopPropagation&&e.stopPropagation(),this.props.onSwiping&&this.props.onSwiping(e,n.deltaX,n.deltaY,n.absX,n.absY,n.velocity),n.absX>n.absY?n.deltaX>0?(this.props.onSwipingLeft||this.props.onSwipedLeft)&&(this.props.onSwipingLeft&&this.props.onSwipingLeft(e,n.absX),t=!0):(this.props.onSwipingRight||this.props.onSwipedRight)&&(this.props.onSwipingRight&&this.props.onSwipingRight(e,n.absX),t=!0):n.deltaY>0?(this.props.onSwipingUp||this.props.onSwipedUp)&&(this.props.onSwipingUp&&this.props.onSwipingUp(e,n.absY),t=!0):(this.props.onSwipingDown||this.props.onSwipedDown)&&(this.props.onSwipingDown&&this.props.onSwipingDown(e,n.absY),t=!0),this.setState({swiping:!0}),t&&this.props.preventDefaultTouchmoveEvent&&e.preventDefault())}}},{key:"eventEnd",value:function(e){if(this.state.swiping){var t=this.calculatePos(e);this.props.stopPropagation&&e.stopPropagation();var n=t.velocity>this.props.flickThreshold;this.props.onSwiped&&this.props.onSwiped(e,t.deltaX,t.deltaY,n,t.velocity),t.absX>t.absY?t.deltaX>0?this.props.onSwipedLeft&&this.props.onSwipedLeft(e,t.deltaX,n):this.props.onSwipedRight&&this.props.onSwipedRight(e,t.deltaX,n):t.deltaY>0?this.props.onSwipedUp&&this.props.onSwipedUp(e,t.deltaY,n):this.props.onSwipedDown&&this.props.onSwipedDown(e,t.deltaY,n)}this.setState(this.initialState())}},{key:"render",value:function(){var t=r({},this.props,{onTouchStart:this.eventStart.bind(this),onTouchMove:this.eventMove.bind(this),onTouchEnd:this.eventEnd.bind(this),onMouseDown:this.props.trackMouse&&this.eventStart.bind(this),onMouseMove:this.props.trackMouse&&this.eventMove.bind(this),onMouseUp:this.props.trackMouse&&this.eventEnd.bind(this)});return delete t.onSwiped,delete t.onSwiping,delete t.onSwipingUp,delete t.onSwipingRight,delete t.onSwipingDown,delete t.onSwipingLeft,delete t.onSwipedUp,delete t.onSwipedRight,delete t.onSwipedDown,delete t.onSwipedLeft,delete t.flickThreshold,delete t.delta,delete t.preventDefaultTouchmoveEvent,delete t.stopPropagation,delete t.nodeName,delete t.children,delete t.trackMouse,e.createElement(this.props.nodeName,t,this.props.children)}}]),a}(e.Component);a.propTypes={onSwiped:e.PropTypes.func,onSwiping:e.PropTypes.func,onSwipingUp:e.PropTypes.func,onSwipingRight:e.PropTypes.func,onSwipingDown:e.PropTypes.func,onSwipingLeft:e.PropTypes.func,onSwipedUp:e.PropTypes.func,onSwipedRight:e.PropTypes.func,onSwipedDown:e.PropTypes.func,onSwipedLeft:e.PropTypes.func,flickThreshold:e.PropTypes.number,delta:e.PropTypes.number,preventDefaultTouchmoveEvent:e.PropTypes.bool,stopPropagation:e.PropTypes.bool,nodeName:e.PropTypes.string,trackMouse:e.PropTypes.bool},a.defaultProps={flickThreshold:.6,delta:10,preventDefaultTouchmoveEvent:!0,stopPropagation:!1,nodeName:"div"},t.default=a}).call(t,n(2))},function(t,n){t.exports=e}])})},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=d[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(u(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(u(i.parts[r],t));d[i.id]={id:i.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],a=o[2],p=o[3],u={css:s,media:a,sourceMap:p};n[r]?n[r].parts.push(u):t.push(n[r]={id:r,parts:[u]})}return t}function r(e,t){var n=w(),i=b[b.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function p(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function u(e,t){var n,i,o;if(t.singleton){var r=y++;n=g||(g=a(t)),i=l.bind(null,n,r,!1),o=l.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=p(t),i=f.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=c.bind(null,n),o=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function l(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function c(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),w=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],p=d[a.id];p.refs--,r.push(p)}if(e){var u=o(e);i(u,t)}for(var s=0;s<r.length;s++){var p=r[s];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete d[p.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.id,i,""]]);n(6)(i,{});i.locals&&(e.exports=i.locals)},function(e,n){e.exports=t}])});
//# sourceMappingURL=react-swipe-views.js.map