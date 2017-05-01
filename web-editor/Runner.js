var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)if(e.hasOwnProperty(r))t[r]=e[r]};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n["throw"](t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,u)}s((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=o[a[0]&2?"return":a[0]?"throw":"next"])&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[0,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};(function(t){if(typeof module==="object"&&typeof module.exports==="object"){var e=t(require,exports);if(e!==undefined)module.exports=e}else if(typeof define==="function"&&define.amd){define(["require","exports","@dojo/core/Evented","./project"],t)}})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});var r=t("@dojo/core/Evented");var n=t("./project");var o={cldrjs:"{ name: 'cldr', location: 'https://unpkg.com/cldrjs@^0.4.6/dist/cldr', main: '../cldr' }",globalize:"{ name: 'globalize', main: '/dist/globalize' }",maquette:"{ name: 'maquette', main: '/dist/maquette.min' }",pepjs:"{ name: 'pepjs', main: 'dist/pep' }",tslib:"{ name: 'tslib', location: 'https://unpkg.com/tslib@^1.6.0/', main: 'tslib' }"};function i(t,e,r,n,o,i,a,u){var s=t[0],c=t[1],l=t[2],d=t[3],f=t[4],p=t[5],v=t[6],h=t.slice(7);var m=[];for(var b in i){m.push("'"+b+"': 'https://unpkg.com/"+b+"@"+i[b]+"'")}var y="{\n\t\t\t\t\t\t\t"+m.join(",\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t}";var j="[\n\t\t\t\t\t\t\t"+a.join(",\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t]";var _="var cache = {\n";for(var q in u){_+="\t'"+q+"': function () {\n"+u[q]+"\n},\n"}_+="};\nrequire.cache(cache);\n/* workaround for dojo/loader#124 */\nrequire.cache({});\n";var w=r.map(function(t){var e=t.name,r=t.text;var n=r.replace(/url\(['"]?(.*?)["']?\)/gi,function(t,e){return"url('"+encodeURI(e)+"')"});return"<style>\n/* from: "+e+" */\n\n"+n+"\n</style>"}).join("\n");var g="";e.forEach(function(t){g+='<script src="'+t+'"><\/script>\n\t'});var x="";for(var P in n){x+=' $[attr]="'+n[P]+'"'}return s+g+c+w+l+x+d+o+f+y+p+j+v+_+h.join("\n")}function a(t){var e=[];Object.keys(o).forEach(function(r){if(r in t&&r!=="tslib"){e.push(o[r])}});e.push(o["tslib"]);return e}function u(t){var e=new DOMParser;var r=e.parseFromString(t,"text/html");var n=r.querySelectorAll("script");var o=[];for(var i=0;i<n.length;i++){var a=n[i];a.parentElement&&a.parentElement.removeChild(a);if(a.src&&/^http(?:s)?:\/{2}/.test(a.src)){o.push(a.src)}}var u=[];var s=r.querySelectorAll("style");for(var i=0;i<s.length;i++){var c=s[i];if(c.textContent){u.push(c.textContent)}}return{css:u.join("\n"),body:r.body&&r.body.innerHTML||"",scripts:o}}function s(t,e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){return[2,new Promise(function(r){function n(){t.contentWindow.document.write(e);t.contentWindow.document.close();t.removeEventListener("load",n);r()}t.addEventListener("load",n);t.contentWindow.location.reload()})]})})}var c=function(t){__extends(e,t);function e(e){var r=t.call(this)||this;r._iframe=e;return r}e.prototype.getDoc=function(t){var e=t.css,r=e===void 0?[]:e,n=t.bodyAttributes,o=n===void 0?{}:n,u=t.dependencies,s=t.html,c=s===void 0?"":s,l=t.modules,d=t.scripts,f=d===void 0?[]:d;return p=["<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t","\n\t\t\t\t","\n\t\t\t</head>\n\t\t\t<body",">\n\t\t\t\t",'\n\t\t\t\t<script src="https://unpkg.com/@dojo/loader/loader.min.js"><\/script>\n\t\t\t\t<script>\n\t\t\t\t\trequire.config({\n\t\t\t\t\t\tpaths: ',",\n\t\t\t\t\t\tpackages: ","\n\t\t\t\t\t});\n\t\t\t\t\t","\n\t\t\t\t\trequire([ 'tslib', '@dojo/core/request', '/js/web-editor/support/providers/amdRequire' ], function () {\n\t\t\t\t\t\tvar request = require('@dojo/core/request').default;\n\t\t\t\t\t\tvar getProvider = require('/js/web-editor/support/providers/amdRequire').default;\n\t\t\t\t\t\trequest.setDefaultProvider(getProvider(require));\n\t\t\t\t\t\trequire([ 'src/main' ], function () { });\n\t\t\t\t\t});\n\t\t\t\t<\/script>\n\t\t\t</body>\n\t\t\t</html>"],p.raw=["<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t","\n\t\t\t\t","\n\t\t\t</head>\n\t\t\t<body",">\n\t\t\t\t",'\n\t\t\t\t<script src="https://unpkg.com/@dojo/loader/loader.min.js"><\/script>\n\t\t\t\t<script>\n\t\t\t\t\trequire.config({\n\t\t\t\t\t\tpaths: ',",\n\t\t\t\t\t\tpackages: ","\n\t\t\t\t\t});\n\t\t\t\t\t","\n\t\t\t\t\trequire([ 'tslib', '@dojo/core/request', '/js/web-editor/support/providers/amdRequire' ], function () {\n\t\t\t\t\t\tvar request = require('@dojo/core/request').default;\n\t\t\t\t\t\tvar getProvider = require('/js/web-editor/support/providers/amdRequire').default;\n\t\t\t\t\t\trequest.setDefaultProvider(getProvider(require));\n\t\t\t\t\t\trequire([ 'src/main' ], function () { });\n\t\t\t\t\t});\n\t\t\t\t<\/script>\n\t\t\t</body>\n\t\t\t</html>"],i(p,f,r,o,c,u,a(u),l);var p};e.prototype.run=function(){return __awaiter(this,void 0,void 0,function(){var t,e,r,o,i,a,c,l,d;return __generator(this,function(f){switch(f.label){case 0:if(!n.default.isLoaded()){throw new Error("Project not loaded.")}return[4,n.default.emit()];case 1:t=f.sent();e=t.filter(function(t){var e=t.type;return e===4}).reduce(function(t,e){var r=e.name,n=e.text;t[r.replace(/\.js$/,"")]=n;return t},{});r=t.filter(function(t){var e=t.type;return e===5}).map(function(t){var e=t.name,r=t.text;return{name:e,text:r}});o=n.default.getDependencies();i=u(n.default.getIndexHtml()),a=i.css,c=i.body,l=i.scripts;if(a){r.unshift({name:"project index",text:a})}d=this.getDoc({css:r,html:c,dependencies:o,modules:e,scripts:l});return[4,s(this._iframe,d)];case 2:f.sent();return[2]}})})};return e}(r.default);e.default=c});