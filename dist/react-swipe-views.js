!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react")):"function"==typeof define&&define.amd?define(["classnames","react"],t):"object"==typeof exports?exports.ReactSwipeViews=t(require("classnames"),require("react")):e.ReactSwipeViews=t(e.classnames,e.react)}(this,function(e,t){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(7),r=i(o),s=n(6),a=i(s);e.exports={ReactSwipeViews:r.default,ReactSwipeViewsInfinite:a.default}},function(e,t,n){!function(t,i){e.exports=i(n(5))}(this,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o);t.default=r.default},function(e,t,n){(function(e){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(t){function a(e){n(this,a);var t=i(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state=t.initialState(),t}return o(a,t),s(a,[{key:"initialState",value:function(){return{x:null,y:null,swiping:!1,start:0}}},{key:"calculatePos",value:function(e){var t=void 0,n=void 0;e.changedTouches?(t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY):(t=e.clientX,n=e.clientY);var i=this.state.x-t,o=this.state.y-n,r=Math.abs(i),s=Math.abs(o),a=Date.now()-this.state.start,p=Math.sqrt(r*r+s*s)/a;return{deltaX:i,deltaY:o,absX:r,absY:s,velocity:p}}},{key:"eventStart",value:function(e){if(!(e.touches&&e.touches.length>1)){var t=e.touches;t||(t=[{clientX:e.clientX,clientY:e.clientY}]),this.props.stopPropagation&&e.stopPropagation(),this.setState({start:Date.now(),x:t[0].clientX,y:t[0].clientY,swiping:!1})}}},{key:"eventMove",value:function(e){if(this.state.x&&this.state.y&&!(e.touches&&e.touches.length>1)){var t=!1,n=this.calculatePos(e);n.absX<this.props.delta&&n.absY<this.props.delta||(this.props.stopPropagation&&e.stopPropagation(),this.props.onSwiping&&this.props.onSwiping(e,n.deltaX,n.deltaY,n.absX,n.absY,n.velocity),n.absX>n.absY?n.deltaX>0?(this.props.onSwipingLeft||this.props.onSwipedLeft)&&(this.props.onSwipingLeft&&this.props.onSwipingLeft(e,n.absX),t=!0):(this.props.onSwipingRight||this.props.onSwipedRight)&&(this.props.onSwipingRight&&this.props.onSwipingRight(e,n.absX),t=!0):n.deltaY>0?(this.props.onSwipingUp||this.props.onSwipedUp)&&(this.props.onSwipingUp&&this.props.onSwipingUp(e,n.absY),t=!0):(this.props.onSwipingDown||this.props.onSwipedDown)&&(this.props.onSwipingDown&&this.props.onSwipingDown(e,n.absY),t=!0),this.setState({swiping:!0}),t&&this.props.preventDefaultTouchmoveEvent&&e.preventDefault())}}},{key:"eventEnd",value:function(e){if(this.state.swiping){var t=this.calculatePos(e);this.props.stopPropagation&&e.stopPropagation();var n=t.velocity>this.props.flickThreshold;this.props.onSwiped&&this.props.onSwiped(e,t.deltaX,t.deltaY,n,t.velocity),t.absX>t.absY?t.deltaX>0?this.props.onSwipedLeft&&this.props.onSwipedLeft(e,t.deltaX,n):this.props.onSwipedRight&&this.props.onSwipedRight(e,t.deltaX,n):t.deltaY>0?this.props.onSwipedUp&&this.props.onSwipedUp(e,t.deltaY,n):this.props.onSwipedDown&&this.props.onSwipedDown(e,t.deltaY,n)}this.setState(this.initialState())}},{key:"render",value:function(){var t=r({},this.props,{onTouchStart:this.eventStart.bind(this),onTouchMove:this.eventMove.bind(this),onTouchEnd:this.eventEnd.bind(this),onMouseDown:this.props.trackMouse&&this.eventStart.bind(this),onMouseMove:this.props.trackMouse&&this.eventMove.bind(this),onMouseUp:this.props.trackMouse&&this.eventEnd.bind(this)});return delete t.onSwiped,delete t.onSwiping,delete t.onSwipingUp,delete t.onSwipingRight,delete t.onSwipingDown,delete t.onSwipingLeft,delete t.onSwipedUp,delete t.onSwipedRight,delete t.onSwipedDown,delete t.onSwipedLeft,delete t.flickThreshold,delete t.delta,delete t.preventDefaultTouchmoveEvent,delete t.stopPropagation,delete t.nodeName,delete t.children,delete t.trackMouse,e.createElement(this.props.nodeName,t,this.props.children)}}]),a}(e.Component);a.propTypes={onSwiped:e.PropTypes.func,onSwiping:e.PropTypes.func,onSwipingUp:e.PropTypes.func,onSwipingRight:e.PropTypes.func,onSwipingDown:e.PropTypes.func,onSwipingLeft:e.PropTypes.func,onSwipedUp:e.PropTypes.func,onSwipedRight:e.PropTypes.func,onSwipedDown:e.PropTypes.func,onSwipedLeft:e.PropTypes.func,flickThreshold:e.PropTypes.number,delta:e.PropTypes.number,preventDefaultTouchmoveEvent:e.PropTypes.bool,stopPropagation:e.PropTypes.bool,nodeName:e.PropTypes.string,trackMouse:e.PropTypes.bool},a.defaultProps={flickThreshold:.6,delta:10,preventDefaultTouchmoveEvent:!0,stopPropagation:!1,nodeName:"div"},t.default=a}).call(t,n(2))},function(t,n){t.exports=e}])})},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.id,i,""]]);n(10)(i,{});i.locals&&(e.exports=i.locals)},function(t,n){t.exports=e},function(e,t,n){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(2);var p=n(3),u=i(p),l=n(1),c=i(l),h={},f=function(t){function n(e){o(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={unit:e.unit,animate:e.animate,duration:e.duration,items:e.items,itemTemplate:e.itemTemplate,activeIndex:e.activeIndex,translate:0,bound:{}},t}return s(n,t),a(n,null,[{key:"getInstance",value:function(e){return h[e]||null}}]),a(n,[{key:"componentWillMount",value:function(){this.toIndex()}},{key:"componentDidMount",value:function(){this.setState({bound:this.refs.root.getBoundingClientRect()}),this.props.delegateHandle&&(h[this.props.delegateHandle]=this)}},{key:"play",value:function(e){this._index=e+this._boundary.min,this.slide(),this.syncState()}},{key:"slide",value:function(){this.setState({duration:this.props.duration,translate:"-"+100*this._index/this.props.items.length+"%"})}},{key:"toIndex",value:function(){}},{key:"updateIndex",value:function(){}},{key:"syncState",value:function(){this.setState({activeIndex:this._index-this._boundary.min})}},{key:"next",value:function(e){this._index++,this.toIndex()}},{key:"prev",value:function(e){this._index--,this.toIndex()}},{key:"onSwipingNext",value:function(e,t){var n=this._index*this.state.bound[this.state.unit];this.setState({duration:0,translate:-n-t+"px"})}},{key:"onSwipingPrev",value:function(e,t){var n=this._index*this.state.bound[this.state.unit];this.setState({duration:0,translate:-n+t+"px"})}},{key:"render",value:function(){return e.createElement("div",{ref:"root",className:(0,u.default)("react-swipe-views","react-swipe-views-"+this.state.unit,this.props.cssClass)},"width"===this.state.unit&&e.createElement(c.default,{flickThreshold:.2,delta:10,preventDefaultTouchmoveEvent:!0,className:"react-swipe-views-wrapper",onSwipingLeft:this.onSwipingNext.bind(this),onSwipingRight:this.onSwipingPrev.bind(this),onSwipedLeft:this.next.bind(this),onSwipedRight:this.prev.bind(this),style:{width:this.state.bound.width+"px"}},e.createElement("div",{className:"react-swipe-views-scroller",style:{width:100*this._length+"%",transition:"transform "+this.state.duration+"s "+this.state.animate,WebkitTransition:"transform "+this.state.duration+"s "+this.state.animate,transform:"translate("+this.state.translate+",0)",WebkitTransform:"translate("+this.state.translate+",0)"}},this.props.items.map(function(t,n){return e.createElement("div",{className:"react-swipe-views-item",key:n,style:{width:100/this._length+"%"}},this.props.itemTemplate?this.props.itemTemplate(t,n):t)}.bind(this)))),"height"===this.state.unit&&e.createElement(c.default,{flickThreshold:.2,delta:10,preventDefaultTouchmoveEvent:!0,className:"react-swipe-views-wrapper",onSwipingUp:this.onSwipingNext.bind(this),onSwipingDown:this.onSwipingPrev.bind(this),onSwipedUp:this.next.bind(this),onSwipedDown:this.prev.bind(this),style:{height:this.state.bound.height+"px"}},e.createElement("div",{className:"react-swipe-views-scroller",style:{height:100*this._length+"%",transition:"transform "+this.state.duration+"s "+this.state.animate,WebkitTransition:"transform "+this.state.duration+"s "+this.state.animate,transform:"translate(0,"+this.state.translate+")",WebkitTransform:"translate(0,"+this.state.translate+")"}},this.props.items.map(function(t,n){return e.createElement("div",{className:"react-swipe-views-item",key:n,style:{height:100/this._length+"%"}},this.props.itemTemplate?this.props.itemTemplate(t,n):t)}.bind(this)))))}}]),n}(e.Component);f.propTypes={cssClass:e.PropTypes.string,delegateHandle:e.PropTypes.string,unit:e.PropTypes.string,animate:e.PropTypes.string,duration:e.PropTypes.number,items:e.PropTypes.array,itemTemplate:e.PropTypes.func,activeIndex:e.PropTypes.number},f.defaultProps={unit:"width",animate:"linear",duration:.3,items:[],itemTemplate:null,activeIndex:0},t.default=f}).call(t,n(5))},function(e,n){e.exports=t},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(2);var p=n(3),u=(i(p),n(1)),l=(i(u),n(4)),c=i(l),h=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.processItems(),n._length=e.items.length,n._boundary={min:1,max:n._length-2},n}return s(t,e),a(t,[{key:"processItems",value:function(){var e=this.props.items,t=e[0],n=e[e.length-1];e.push(t),e.unshift(n),this._index=this.props.activeIndex+1}},{key:"toIndex",value:function(){this.slide(),this.updateIndex(),this.syncState()}},{key:"updateIndex",value:function(){this._index>this._boundary.max&&(this._index=this._boundary.min),this._index<this._boundary.min&&(this._index=this._boundary.max)}}]),t}(c.default);t.default=h},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(2);var p=n(3),u=(i(p),n(1)),l=(i(u),n(4)),c=i(l),h=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._index=n.props.activeIndex,n._length=e.items.length,n._boundary={min:0,max:n._length-1},n}return s(t,e),a(t,[{key:"toIndex",value:function(){this.updateIndex(),this.slide(),this.syncState()}},{key:"updateIndex",value:function(){this._index>this._boundary.max&&(this._index=this._boundary.max),this._index<this._boundary.min&&(this._index=this._boundary.min)}}]),t}(c.default);t.default=h},function(e,t,n){t=e.exports=n(9)(),t.push([e.id,'.react-swipe-views{position:relative;background:#eee}.react-swipe-views,.react-swipe-views *{box-sizing:border-box}.react-swipe-views-item,.react-swipe-views-scroller,.react-swipe-views-wrapper{height:100%}.react-swipe-views-wrapper{border:1px solid red;position:relative;overflow:hidden}.react-swipe-views-scroller:after{clear:both;content:"\\200B";display:block;height:0}.react-swipe-views-item{float:left}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=f[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(u(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(u(i.parts[r],t));f[i.id]={id:i.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],a=o[2],p=o[3],u={css:s,media:a,sourceMap:p};n[r]?n[r].parts.push(u):t.push(n[r]={id:r,parts:[u]})}return t}function r(e,t){var n=y(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function p(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function u(e,t){var n,i,o;if(t.singleton){var r=b++;n=w||(w=a(t)),i=l.bind(null,n,r,!1),o=l.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=p(t),i=h.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=c.bind(null,n),o=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function l(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function c(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var f={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=d(function(){return document.head||document.getElementsByTagName("head")[0]}),w=null,b=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],p=f[a.id];p.refs--,r.push(p)}if(e){var u=o(e);i(u,t)}for(var s=0;s<r.length;s++){var p=r[s];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete f[p.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}])});
//# sourceMappingURL=react-swipe-views.js.map