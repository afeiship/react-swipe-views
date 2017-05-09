!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("object-assign"),require("react"),require("react-swipeable"),require("react-swipeable-views")):"function"==typeof define&&define.amd?define(["classnames","object-assign","react","react-swipeable","react-swipeable-views"],t):"object"==typeof exports?exports.ReactSwipeViews=t(require("classnames"),require("object-assign"),require("react"),require("react-swipeable"),require("react-swipeable-views")):e.ReactSwipeViews=t(e.classnames,e["object-assign"],e.react,e["react-swipeable"],e["react-swipeable-views"])}(this,function(e,t,n,r,i){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(1),s=r(i),o=n(3),a=r(o),u=n(2),c=r(u);e.exports={ReactSwipeViewsBase:s.default,ReactSwipeViews:a.default,ReactSwipeViewsInfinite:c.default}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(7);var l=n(10),f=r(l),p=n(11),h=r(p),d=n(12),b=r(d),v=n(8),y=r(v),w=n(9),m=r(w),g=function(e){function t(e){s(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.processItems(e),n}return a(t,e),c(t,[{key:"componentWillReceiveProps",value:function(e,t){e.children!==this.props.children&&(this.processItems(e),this.setState((0,m.default)({translate:"-"+100*this._index/this._length+"%"},e)))}},{key:"toIndex",value:function(){this.slide(),this.updateIndex(),this.syncState()}},{key:"getStyles",value:function(){switch(this.state.unit){case"width":return{width:100*this._length+"%",transition:"transform "+this.state.duration+"s "+this.state.animate,WebkitTransition:"transform "+this.state.duration+"s "+this.state.animate,transform:"translate("+this.state.translate+",0)",WebkitTransform:"translate("+this.state.translate+",0)"};case"height":return{height:100*this._length+"%",transition:"transform "+this.state.duration+"s "+this.state.animate,WebkitTransition:"transform "+this.state.duration+"s "+this.state.animate,transform:"translate(0,"+this.state.translate+")",WebkitTransform:"translate(0,"+this.state.translate+")"}}}},{key:"getEvents",value:function(){switch(this.state.unit){case"width":return{onSwipingLeft:this.onSwipingNext.bind(this),onSwipingRight:this.onSwipingPrev.bind(this),onSwipedLeft:this.next.bind(this),onSwipedRight:this.prev.bind(this)};case"height":return{onSwipingUp:this.onSwipingNext.bind(this),onSwipingDown:this.onSwipingPrev.bind(this),onSwipedUp:this.next.bind(this),onSwipedDown:this.prev.bind(this)}}}},{key:"render",value:function(){var e=this,t=this.state.unit;return f.default.createElement("div",{ref:"root",className:(0,y.default)("react-swipe-views","react-swipe-views-"+this.state.unit,this.props.className)},f.default.createElement(h.default,u({flickThreshold:.2,delta:10,preventDefaultTouchmoveEvent:!0,className:"react-swipe-views-wrapper"},this.getEvents(),{style:i({},t,this.state.bound[t]+"px")}),f.default.createElement("div",{className:"react-swipe-views-scroller",style:this.getStyles()},l.Children.map(this.props.children,function(n,r){return f.default.createElement("div",{className:"react-swipe-views-item",key:r,style:i({},t,100/e._length+"%")},n)}))))}}]),t}(b.default);g.propTypes={className:l.PropTypes.string},t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),l=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"processItems",value:function(e){var t=e.children,n=t[0],r=t[t.length-1];t.push(n),t.unshift(r),this._index=e.activeIndex+1,this._length=e.children.length,this._boundary={min:1,max:this._length-2}}},{key:"updateIndex",value:function(){this._index>this._boundary.max&&(this._index=this._boundary.min),this._index<this._boundary.min&&(this._index=this._boundary.max)}}]),t}(c.default);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),l=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"processItems",value:function(e){this._index=e.activeIndex,this._length=e.children.length,this._boundary={min:0,max:this._length-1}}},{key:"updateIndex",value:function(){this._index>this._boundary.max&&(this._index=this._boundary.max),this._index<this._boundary.min&&(this._index=this._boundary.min)}}]),t}(c.default);t.default=l},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".react-swipe-views{position:relative;background:#eee}.react-swipe-views,.react-swipe-views *{box-sizing:border-box}.react-swipe-views-item,.react-swipe-views-scroller,.react-swipe-views-wrapper{height:100%}.react-swipe-views-wrapper{position:relative;overflow:hidden}.react-swipe-views-item{float:left}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=h[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(c(r.parts[s],t))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(c(r.parts[s],t));h[r.id]={id:r.id,refs:1,parts:o}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],s=i[0],o=i[1],a=i[2],u=i[3],c={css:o,media:a,sourceMap:u};n[s]?n[s].parts.push(c):t.push(n[s]={id:s,parts:[c]})}return t}function s(e,t){var n=v(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var s=w++;n=y||(y=a(t)),r=l.bind(null,n,s,!1),i=l.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var h={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,w=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var s=[],o=0;o<n.length;o++){var a=n[o],u=h[a.id];u.refs--,s.push(u)}if(e){var c=i(e);r(c,t)}for(var o=0;o<s.length;o++){var u=s[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete h[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(6)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-swipe-views.js.map