!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:e})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=12)}([function(n,r){n.exports="images/k_right@2x.png?29ba88221ce9ce7a693888ff99788989"},function(n,r,t){var e={},o=function(n){var r;return function(){return void 0===r&&(r=n.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var r={};return function(n){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}}(),a=null,s=0,c=[],l=t(9);function p(n,r){for(var t=0;t<n.length;t++){var o=n[t],i=e[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],r))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(h(o.parts[a],r));e[o.id]={id:o.id,refs:1,parts:s}}}}function f(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(s):t.push(e[a]={id:a,parts:[s]})}return t}function u(n,r){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=c[c.length-1];if("top"===n.insertAt)e?e.nextSibling?t.insertBefore(r,e.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),c.push(r);else if("bottom"===n.insertAt)t.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(n.insertInto+" "+n.insertAt.before);t.insertBefore(r,o)}}function d(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=c.indexOf(n);r>=0&&c.splice(r,1)}function b(n){var r=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),g(r,n.attrs),u(n,r),r}function g(n,r){Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})}function h(n,r){var t,e,o,i;if(r.transform&&n.css){if(!(i=r.transform(n.css)))return function(){};n.css=i}if(r.singleton){var c=s++;t=a||(a=b(r)),e=x.bind(null,t,c,!1),o=x.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(r,n.attrs),u(n,r),r}(r),e=function(n,r,t){var e=t.css,o=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(e=l(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([e],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,r),o=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(r),e=function(n,r){var t=r.css,e=r.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){d(t)});return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=f(n,r);return p(t,r),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i];(s=e[a.id]).refs--,o.push(s)}n&&p(f(n,r),r);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete e[s.id]}}}};var m=function(){var n=[];return function(r,t){return n[r]=t,n.filter(Boolean).join("\n")}}();function x(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=m(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}},function(n,r){n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(e),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(e[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&e[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),r.push(a))}},r}},function(n,r,t){"use strict";function e(n){var r=$(n).attr("data");$(n).fadeIn(100),$("#"+r).fadeOut(100)}function o(){if("3"==window.devicePixelRatio)for(var n=document.getElementsByTagName("img"),r=0;r<n.length;r++){var t=n[r].getAttribute("data-src");console.log(t),n[r].setAttribute("src",t)}}t.r(r),t.d(r,"roleChooseFun",function(){return e}),t.d(r,"autoDeviceImgFun",function(){return o})},function(n,r){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAABsAQMAAACVRJpzAAAABlBMVEUAAAAqiPmnhiICAAAAAXRSTlMAQObYZgAAABBJREFUCNdjeACGwwmAfQQAN/YFQXcFa54AAAAASUVORK5CYII="},function(n,r){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABICAYAAADcdSQuAAAAAXNSR0IArs4c6QAAAB1JREFUKBVj1Or4+Z8BCJhAxCgYDQF6hAAjRqoDAOiOBVtUMp5dAAAAAElFTkSuQmCC"},function(n,r){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,r,t){var e=t(6);(n.exports=t(2)(!1)).push([n.i,"/*公共margin左右24px*/\r\n.benefit-margin{\r\n\t    margin: 0 19px 0 24px;\r\n}\r\n/*公共内容文字样式*/\r\n.benefit-word-com{\r\n\tfont-family: PingFangSC-Regular;\r\n\tfont-size: 15px;\r\n\tcolor: #595959;\r\n\tletter-spacing: 0;\r\n\tline-height: 24px;\r\n}\r\n/*公共内容title文字样式*/\r\n.bennefit-title-word{\r\n\tfont-family: PingFangSC-Medium;\r\n\tfont-size: 17px;\r\n\tcolor: #595959;\r\n\tletter-spacing: 0;\r\n\tline-height: 30px;\r\n\tfont-weight: bold;\r\n}\r\n/*公共蓝色标题文字样式*/\r\n.benefit-blue-title{\r\n\tfont-family: PingFangSC-Semibold;\r\n\tfont-size: 20px;\r\n\tcolor: #2A88F9;\r\n\tletter-spacing: 0;\r\n}\r\n/*公共蓝色箭头处文字样式*/\r\n.benefit-arror-word{\r\n\tfont-family: PingFangSC-Medium;\r\n\tfont-size: 16px;\r\n\tcolor: #2A88F9;\r\n\tletter-spacing: 0;\r\n\tline-height: 30px;\r\n}\r\n\r\n/* 高清显示屏(设备像素比例大于等于2)使用2倍图  */\r\n@media only screen and (-webkit-min-device-pixel-ratio:2){\r\n    /*公共box*/\r\n    .wx-step-tit-name{\r\n        height: 36px;\r\n        background: url("+e(t(5))+") repeat-x center;\r\n    }\r\n    .wx-step-tit-bot{\r\n    \theight: 36px;\r\n    \twidth: 18px;\r\n        background: url("+e(t(0))+") no-repeat center;\r\n    }\r\n\r\n\r\n}\r\n/* 高清显示屏(设备像素比例大于等于3)使用3倍图  */\r\n@media only screen and (-webkit-min-device-pixel-ratio:3){\r\n    .wx-step-title{\r\n        height: 36px;\r\n        background: url("+e(t(4))+") repeat-x center;\r\n    }\r\n    .wx-step-tit-bot{\r\n    \theight: 36px;\r\n    \twidth: 18px;\r\n        background: url("+e(t(0))+") no-repeat center;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n.benefit-parent{\r\n\tpadding-bottom: 90px;\r\n\tposition: relative;\r\n}\r\n/*banner*/\r\n.benefit-banner{\r\n\tpadding-bottom: 50px;\r\n\tbackground: linear-gradient(#cdeafb, #f2f9fe);\r\n\tbackground: -webkit-linear-gradient(#cdeafb, #f2f9fe);\r\n\tbackground: -moz-linear-gradient(#cdeafb, #f2f9fe);\r\n\tbackground: -ms-linear-gradient(#cdeafb, #f2f9fe);\r\n\tbackground: -o-linear-gradient(#cdeafb, #f2f9fe);\r\n}\r\n.benefit-banner,.benefit-banner > img{\r\n\twidth: 100%\r\n}\r\n\r\n/*列表问题*/\r\n.benefit-step-list{\r\n\tmargin-bottom: 50px;\r\n}\r\n.benefit-step-list .benefit-blue-title{\r\n\tmargin-top: -10px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 13px;\r\n}\r\n/*角色选择*/\r\n.benefit-choose-role{\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n\tmargin: 0 24px 0;\r\n}\r\n.benefit-role-list{\r\n\tfloat: left;\r\n\twidth: 50%;\r\n\theight: 44px;\r\n\tline-height: 44px;\r\n\tfont-family: PingFangSC-Regular;\r\n\tfont-size: 18px;\r\n\tcolor: #9A9A9A;\r\n\tletter-spacing: 0;\r\n\ttext-align: center;\r\n}\r\n.benefit-role-list-choose{\r\n\tcolor: #2A88F9;\r\n\tborder-bottom: 3px solid #2a88f9;\r\n}\r\n/**/\r\n.wx-step-tit-name{\r\n\tpadding: 0 15px 0 24px;\r\n}\r\n.wx-step-tit-name,.wx-step-tit-bot{\r\n\t/*display: inline-block;*/\r\n\tfloat: left;\r\n\tbackground-size: 100% 100%;\r\n\tline-height: 36px;\r\n}\r\n/*承接人板块*/\r\n.wx-step-title{\r\n\toverflow: hidden;\r\n\tmargin-top: 30px;\r\n}\r\n.wx-step-cont{\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n}\r\n.wx-step-tip{\r\n\tmargin: 16px 0 20px;\r\n}\r\n/*注意事项*/\r\n\r\n.wx-step-attention{\r\n\tfont-family: PingFangSC-Regular;\r\n\tfont-size: 13px;\r\n\tcolor: #F85C70;\r\n\tletter-spacing: 0;\r\n\ttext-align: left;\r\n\tmargin-bottom: 10px;\r\n}\r\n/*问题中心*/\r\n.ques-title{\r\n\tmargin:12px 0 8px;\r\n}\r\n.ques-cont{\r\n\tpadding-left: 24px;\r\n}\r\n\r\n/*公共icon位置*/\r\n.benefit-icon{\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n/*step-container-left-icon*/\r\n.step-container-left-icon{\r\n\tleft: 0;\r\n\tbottom: 0;\r\n}\r\n.step-container-right-icon{\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n.step-container-icon-04{\r\n\tright: 0;\r\n\tbottom: 908px;\r\n}\r\n.step-container-icon-03{\r\n\tleft: 0;\r\n\ttop: 1970px;\r\n}\r\n.step-container-icon-02{\r\n\tright: 0;\r\n\ttop: 1280px;\r\n}\r\n.step-container-icon-01{\r\n\tleft: 0;\r\n\ttop: 490px;\r\n}\r\n/*公共隐藏*/\r\n.banefit-hide{\r\n\tdisplay: none\r\n}\r\n/*图片样式*/\r\n.benefit-img{\r\n\tposition: relative;\r\n\twidth: 20px;\r\n\ttop: -2px;\r\n}",""])},function(n,r,t){var e=t(7);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=r.protocol+"//"+r.host,e=t+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,r,t){(n.exports=t(2)(!1)).push([n.i,'html {\r\n    font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;\r\n    -ms-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-size: 1.4rem;\r\n    line-height: 1.5;\r\n    background-color: white;\r\n    height: 100%;\r\n    overflow-x: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection,\r\nsummary {\r\n    display: block;\r\n}\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n    display: inline-block;\r\n    vertical-align: baseline;\r\n}\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n[hidden],\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\nsvg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n\r\na {\r\n    background: transparent;\r\n    text-decoration: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n    color: #0088cc;\r\n}\r\n\r\na:active {\r\n    outline: 0;\r\n}\r\n\r\na:active {\r\n    color: #006699;\r\n}\r\n\r\nabbr[title] {\r\n    border-bottom: 1px dotted;\r\n}\r\n\r\nb,\r\nstrong {\r\n    font-weight: bold;\r\n}\r\n\r\ndfn {\r\n    font-style: italic;\r\n}\r\n\r\nmark {\r\n    background: #ff0;\r\n    color: #000;\r\n}\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\nhr {\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n    height: 0;\r\n}\r\n\r\npre {\r\n    overflow: auto;\r\n    white-space: pre;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    font-size: 1em;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    color: inherit;\r\n    font: inherit;\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\nbutton,\r\nhtml input[type="button"],\r\ninput[type="reset"],\r\ninput[type="submit"] {\r\n    -webkit-appearance: button;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\ninput[type="checkbox"],\r\ninput[type="radio"] {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\ninput[type="number"]::-webkit-inner-spin-button,\r\ninput[type="number"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\ninput[type="search"] {\r\n    -webkit-appearance: textfield;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\nlegend {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    resize: vertical;\r\n}\r\n\r\noptgroup {\r\n    font-weight: bold;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n    padding: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nfigure,\r\nform,\r\nblockquote {\r\n    margin: 0;\r\n}\r\n\r\nul,\r\nol,\r\nli,\r\ndl,\r\ndd {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul,\r\nol {\r\n    list-style: none outside none;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n    line-height: 2;\r\n    font-weight: normal;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.8rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 1.6rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.4rem;\r\n}\r\n\r\ninput::-moz-placeholder,\r\ntextarea::-moz-placeholder {\r\n    color: #cccccc;\r\n}\r\n\r\ninput:-ms-input-placeholder,\r\ntextarea:-ms-input-placeholder {\r\n    color: #cccccc;\r\n}\r\n\r\ninput::-webkit-input-placeholder,\r\ntextarea::-webkit-input-placeholder {\r\n    color: #cccccc;\r\n}\r\n\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}',""])},function(n,r,t){var e=t(10);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){"use strict";t.r(r);t(11),t(8);console.log(window.devicePixelRatio),window.roleChooseFuns=function(n,r,t,e){$("#"+n).fadeIn(100),$("#"+r).fadeOut(100),$("#"+t).addClass("benefit-role-list-choose"),$("#"+e).removeClass("benefit-role-list-choose")},t(3).autoDeviceImgFun()}]);