webpackJsonp([1,4],{5:function(t,e,r){(function(t,n){/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
"use strict";function i(){function t(){}try{var e=new Uint8Array(1);return e.foo=function(){return 42},e.constructor=t,42===e.foo()&&e.constructor===t&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(r){return!1}}function o(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function t(e){return this instanceof t?(t.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof e?a(this,e):"string"==typeof e?s(this,e,arguments.length>1?arguments[1]:"utf8"):u(this,e)):arguments.length>1?new t(e,arguments[1]):new t(e)}function a(e,r){if(e=g(e,0>r?0:0|w(r)),!t.TYPED_ARRAY_SUPPORT)for(var n=0;r>n;n++)e[n]=0;return e}function s(t,e,r){"string"==typeof r&&""!==r||(r="utf8");var n=0|y(e,r);return t=g(t,n),t.write(e,r),t}function u(e,r){if(t.isBuffer(r))return f(e,r);if(K(r))return c(e,r);if(null==r)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(r.buffer instanceof ArrayBuffer)return h(e,r);if(r instanceof ArrayBuffer)return l(e,r)}return r.length?p(e,r):d(e,r)}function f(t,e){var r=0|w(e.length);return t=g(t,r),e.copy(t,0,0,r),t}function c(t,e){var r=0|w(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function h(t,e){var r=0|w(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function l(e,r){return t.TYPED_ARRAY_SUPPORT?(r.byteLength,e=t._augment(new Uint8Array(r))):e=h(e,new Uint8Array(r)),e}function p(t,e){var r=0|w(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function d(t,e){var r,n=0;"Buffer"===e.type&&K(e.data)&&(r=e.data,n=0|w(r.length)),t=g(t,n);for(var i=0;n>i;i+=1)t[i]=255&r[i];return t}function g(e,r){t.TYPED_ARRAY_SUPPORT?(e=t._augment(new Uint8Array(r)),e.__proto__=t.prototype):(e.length=r,e._isBuffer=!0);var n=0!==r&&r<=t.poolSize>>>1;return n&&(e.parent=Q),e}function w(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function v(e,r){if(!(this instanceof v))return new v(e,r);var n=new t(e,r);return delete n.parent,n}function y(t,e){"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"binary":case"raw":case"raws":return r;case"utf8":case"utf-8":return j(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return X(t).length;default:if(n)return j(t).length;e=(""+e).toLowerCase(),n=!0}}function E(t,e,r){var n=!1;if(e=0|e,r=void 0===r||r===1/0?this.length:0|r,t||(t="utf8"),0>e&&(e=0),r>this.length&&(r=this.length),e>=r)return"";for(;;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return U(this,e,r);case"ascii":return P(this,e,r);case"binary":return T(this,e,r);case"base64":return R(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=e.length;if(o%2!==0)throw new Error("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;n>a;a++){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))throw new Error("Invalid hex string");t[r+a]=s}return a}function A(t,e,r,n){return Z(j(e,t.length-r),t,r,n)}function m(t,e,r,n){return Z(q(e),t,r,n)}function I(t,e,r,n){return m(t,e,r,n)}function B(t,e,r,n){return Z(X(e),t,r,n)}function _(t,e,r,n){return Z(J(e,t.length-r),t,r,n)}function R(t,e,r){return 0===e&&r===t.length?G.fromByteArray(t):G.fromByteArray(t.slice(e,r))}function U(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;r>i;){var o=t[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(r>=i+s){var u,f,c,h;switch(s){case 1:128>o&&(a=o);break;case 2:u=t[i+1],128===(192&u)&&(h=(31&o)<<6|63&u,h>127&&(a=h));break;case 3:u=t[i+1],f=t[i+2],128===(192&u)&&128===(192&f)&&(h=(15&o)<<12|(63&u)<<6|63&f,h>2047&&(55296>h||h>57343)&&(a=h));break;case 4:u=t[i+1],f=t[i+2],c=t[i+3],128===(192&u)&&128===(192&f)&&128===(192&c)&&(h=(15&o)<<18|(63&u)<<12|(63&f)<<6|63&c,h>65535&&1114112>h&&(a=h))}}null===a?(a=65533,s=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=s}return S(n)}function S(t){var e=t.length;if(V>=e)return String.fromCharCode.apply(String,t);for(var r="",n=0;e>n;)r+=String.fromCharCode.apply(String,t.slice(n,n+=V));return r}function P(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(127&t[i]);return n}function T(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(t[i]);return n}function L(t,e,r){var n=t.length;(!e||0>e)&&(e=0),(!r||0>r||r>n)&&(r=n);for(var i="",o=e;r>o;o++)i+=z(t[o]);return i}function x(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function Y(t,e,r){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function k(e,r,n,i,o,a){if(!t.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(r>o||a>r)throw new RangeError("value is out of bounds");if(n+i>e.length)throw new RangeError("index out of range")}function C(t,e,r,n){0>e&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);o>i;i++)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function M(t,e,r,n){0>e&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);o>i;i++)t[r+i]=e>>>8*(n?i:3-i)&255}function D(t,e,r,n,i,o){if(e>i||o>e)throw new RangeError("value is out of bounds");if(r+n>t.length)throw new RangeError("index out of range");if(0>r)throw new RangeError("index out of range")}function O(t,e,r,n,i){return i||D(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),H.write(t,e,r,n,23,4),r+4}function F(t,e,r,n,i){return i||D(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),H.write(t,e,r,n,52,8),r+8}function N(t){if(t=$(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function $(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function z(t){return 16>t?"0"+t.toString(16):t.toString(16)}function j(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],a=0;n>a;a++){if(r=t.charCodeAt(a),r>55295&&57344>r){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(56320>r){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,128>r){if((e-=1)<0)break;o.push(r)}else if(2048>r){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(65536>r){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(1114112>r))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function q(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e}function J(t,e){for(var r,n,i,o=[],a=0;a<t.length&&!((e-=2)<0);a++)r=t.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function X(t){return G.toByteArray(N(t))}function Z(t,e,r,n){for(var i=0;n>i&&!(i+r>=e.length||i>=t.length);i++)e[i+r]=t[i];return i}var G=r(22),H=r(23),K=r(24);e.Buffer=t,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50,t.poolSize=8192;var Q={};t.TYPED_ARRAY_SUPPORT=void 0!==n.TYPED_ARRAY_SUPPORT?n.TYPED_ARRAY_SUPPORT:i(),t.TYPED_ARRAY_SUPPORT?(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array):(t.prototype.length=void 0,t.prototype.parent=void 0),t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(e,r){if(!t.isBuffer(e)||!t.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(e===r)return 0;for(var n=e.length,i=r.length,o=0,a=Math.min(n,i);a>o&&e[o]===r[o];)++o;return o!==a&&(n=e[o],i=r[o]),i>n?-1:n>i?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,r){if(!K(e))throw new TypeError("list argument must be an Array of Buffers.");if(0===e.length)return new t(0);var n;if(void 0===r)for(r=0,n=0;n<e.length;n++)r+=e[n].length;var i=new t(r),o=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(i,o),o+=a.length}return i},t.byteLength=y,t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?U(this,0,t):E.apply(this,arguments)},t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===t.compare(this,e)},t.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?0:t.compare(this,e)},t.prototype.indexOf=function(e,r){function n(t,e,r){for(var n=-1,i=0;r+i<t.length;i++)if(t[r+i]===e[-1===n?0:i-n]){if(-1===n&&(n=i),i-n+1===e.length)return r+n}else n=-1;return-1}if(r>2147483647?r=2147483647:-2147483648>r&&(r=-2147483648),r>>=0,0===this.length)return-1;if(r>=this.length)return-1;if(0>r&&(r=Math.max(this.length+r,0)),"string"==typeof e)return 0===e.length?-1:String.prototype.indexOf.call(this,e,r);if(t.isBuffer(e))return n(this,e,r);if("number"==typeof e)return t.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,r):n(this,[e],r);throw new TypeError("val must be string, number or Buffer")},t.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},t.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},t.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e=0|e,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0);else{var i=n;n=e,e=0|r,r=i}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(0>r||0>e)||e>this.length)throw new RangeError("attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":return m(this,t,e,r);case"binary":return I(this,t,e,r);case"base64":return B(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,e,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var V=4096;t.prototype.slice=function(e,r){var n=this.length;e=~~e,r=void 0===r?n:~~r,0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),0>r?(r+=n,0>r&&(r=0)):r>n&&(r=n),e>r&&(r=e);var i;if(t.TYPED_ARRAY_SUPPORT)i=t._augment(this.subarray(e,r));else{var o=r-e;i=new t(o,void 0);for(var a=0;o>a;a++)i[a]=this[a+e]}return i.length&&(i.parent=this.parent||this),i},t.prototype.readUIntLE=function(t,e,r){t=0|t,e=0|e,r||Y(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},t.prototype.readUIntBE=function(t,e,r){t=0|t,e=0|e,r||Y(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},t.prototype.readUInt8=function(t,e){return e||Y(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,e){return e||Y(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,e){return e||Y(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,e){return e||Y(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,e){return e||Y(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,e,r){t=0|t,e=0|e,r||Y(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},t.prototype.readIntBE=function(t,e,r){t=0|t,e=0|e,r||Y(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},t.prototype.readInt8=function(t,e){return e||Y(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},t.prototype.readInt16LE=function(t,e){e||Y(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt16BE=function(t,e){e||Y(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt32LE=function(t,e){return e||Y(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,e){return e||Y(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,e){return e||Y(t,4,this.length),H.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,e){return e||Y(t,4,this.length),H.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,e){return e||Y(t,8,this.length),H.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,e){return e||Y(t,8,this.length),H.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||k(this,t,e,r,Math.pow(2,8*r),0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},t.prototype.writeUIntBE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||k(this,t,e,r,Math.pow(2,8*r),0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},t.prototype.writeUInt8=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,1,255,0),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[r]=255&e,r+1},t.prototype.writeUInt16LE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):C(this,e,r,!0),r+2},t.prototype.writeUInt16BE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):C(this,e,r,!1),r+2},t.prototype.writeUInt32LE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=255&e):M(this,e,r,!0),r+4},t.prototype.writeUInt32BE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):M(this,e,r,!1),r+4},t.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);k(this,t,e,r,i-1,-i)}var o=0,a=1,s=0>t?1:0;for(this[e]=255&t;++o<r&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+r},t.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);k(this,t,e,r,i-1,-i)}var o=r-1,a=1,s=0>t?1:0;for(this[e+o]=255&t;--o>=0&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+r},t.prototype.writeInt8=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,1,127,-128),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[r]=255&e,r+1},t.prototype.writeInt16LE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):C(this,e,r,!0),r+2},t.prototype.writeInt16BE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):C(this,e,r,!1),r+2},t.prototype.writeInt32LE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24):M(this,e,r,!0),r+4},t.prototype.writeInt32BE=function(e,r,n){return e=+e,r=0|r,n||k(this,e,r,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):M(this,e,r,!1),r+4},t.prototype.writeFloatLE=function(t,e,r){return O(this,t,e,!0,r)},t.prototype.writeFloatBE=function(t,e,r){return O(this,t,e,!1,r)},t.prototype.writeDoubleLE=function(t,e,r){return F(this,t,e,!0,r)},t.prototype.writeDoubleBE=function(t,e,r){return F(this,t,e,!1,r)},t.prototype.copy=function(e,r,n,i){if(n||(n=0),i||0===i||(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&n>i&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(0>r)throw new RangeError("targetStart out of bounds");if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-n&&(i=e.length-r+n);var o,a=i-n;if(this===e&&r>n&&i>r)for(o=a-1;o>=0;o--)e[o+r]=this[o+n];else if(1e3>a||!t.TYPED_ARRAY_SUPPORT)for(o=0;a>o;o++)e[o+r]=this[o+n];else e._set(this.subarray(n,n+a),r);return a},t.prototype.fill=function(t,e,r){if(t||(t=0),e||(e=0),r||(r=this.length),e>r)throw new RangeError("end < start");if(r!==e&&0!==this.length){if(0>e||e>=this.length)throw new RangeError("start out of bounds");if(0>r||r>this.length)throw new RangeError("end out of bounds");var n;if("number"==typeof t)for(n=e;r>n;n++)this[n]=t;else{var i=j(t.toString()),o=i.length;for(n=e;r>n;n++)this[n]=i[n%o]}return this}},t.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;for(var e=new Uint8Array(this.length),r=0,n=e.length;n>r;r+=1)e[r]=this[r];return e.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var W=t.prototype;t._augment=function(e){return e.constructor=t,e._isBuffer=!0,e._set=e.set,e.get=W.get,e.set=W.set,e.write=W.write,e.toString=W.toString,e.toLocaleString=W.toString,e.toJSON=W.toJSON,e.equals=W.equals,e.compare=W.compare,e.indexOf=W.indexOf,e.copy=W.copy,e.slice=W.slice,e.readUIntLE=W.readUIntLE,e.readUIntBE=W.readUIntBE,e.readUInt8=W.readUInt8,e.readUInt16LE=W.readUInt16LE,e.readUInt16BE=W.readUInt16BE,e.readUInt32LE=W.readUInt32LE,e.readUInt32BE=W.readUInt32BE,e.readIntLE=W.readIntLE,e.readIntBE=W.readIntBE,e.readInt8=W.readInt8,e.readInt16LE=W.readInt16LE,e.readInt16BE=W.readInt16BE,e.readInt32LE=W.readInt32LE,e.readInt32BE=W.readInt32BE,e.readFloatLE=W.readFloatLE,e.readFloatBE=W.readFloatBE,e.readDoubleLE=W.readDoubleLE,e.readDoubleBE=W.readDoubleBE,e.writeUInt8=W.writeUInt8,e.writeUIntLE=W.writeUIntLE,e.writeUIntBE=W.writeUIntBE,e.writeUInt16LE=W.writeUInt16LE,e.writeUInt16BE=W.writeUInt16BE,e.writeUInt32LE=W.writeUInt32LE,e.writeUInt32BE=W.writeUInt32BE,e.writeIntLE=W.writeIntLE,e.writeIntBE=W.writeIntBE,e.writeInt8=W.writeInt8,e.writeInt16LE=W.writeInt16LE,e.writeInt16BE=W.writeInt16BE,e.writeInt32LE=W.writeInt32LE,e.writeInt32BE=W.writeInt32BE,e.writeFloatLE=W.writeFloatLE,e.writeFloatBE=W.writeFloatBE,e.writeDoubleLE=W.writeDoubleLE,e.writeDoubleBE=W.writeDoubleBE,e.fill=W.fill,e.inspect=W.inspect,e.toArrayBuffer=W.toArrayBuffer,e};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(5).Buffer,function(){return this}())},22:function(t,e,r){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===a||e===h?62:e===s||e===l?63:u>e?-1:u+10>e?e-u+26+26:c+26>e?e-c:f+26>e?e-f+26:void 0}function r(t){function r(t){f[h++]=t}var n,i,a,s,u,f;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=t.length;u="="===t.charAt(c-2)?2:"="===t.charAt(c-1)?1:0,f=new o(3*t.length/4-u),a=u>0?t.length-4:t.length;var h=0;for(n=0,i=0;a>n;n+=4,i+=3)s=e(t.charAt(n))<<18|e(t.charAt(n+1))<<12|e(t.charAt(n+2))<<6|e(t.charAt(n+3)),r((16711680&s)>>16),r((65280&s)>>8),r(255&s);return 2===u?(s=e(t.charAt(n))<<2|e(t.charAt(n+1))>>4,r(255&s)):1===u&&(s=e(t.charAt(n))<<10|e(t.charAt(n+1))<<4|e(t.charAt(n+2))>>2,r(s>>8&255),r(255&s)),f}function i(t){function e(t){return n.charAt(t)}function r(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,a,s=t.length%3,u="";for(i=0,a=t.length-s;a>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=r(o);switch(s){case 1:o=t[t.length-1],u+=e(o>>2),u+=e(o<<4&63),u+="==";break;case 2:o=(t[t.length-2]<<8)+t[t.length-1],u+=e(o>>10),u+=e(o>>4&63),u+=e(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="+".charCodeAt(0),s="/".charCodeAt(0),u="0".charCodeAt(0),f="a".charCodeAt(0),c="A".charCodeAt(0),h="-".charCodeAt(0),l="_".charCodeAt(0);t.toByteArray=r,t.fromByteArray=i}(e)},23:function(t,e){e.read=function(t,e,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,f=u>>1,c=-7,h=r?i-1:0,l=r?-1:1,p=t[e+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=s;c>0;o=256*o+t[e+h],h+=l,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=n;c>0;a=256*a+t[e+h],h+=l,c-=8);if(0===o)o=1-f;else{if(o===u)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),o-=f}return(p?-1:1)*a*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var a,s,u,f=8*o-i-1,c=(1<<f)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),e+=a+h>=1?l/u:l*Math.pow(2,1-h),e*u>=2&&(a++,u/=2),a+h>=c?(s=0,a=c):a+h>=1?(s=(e*u-1)*Math.pow(2,i),a+=h):(s=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[r+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;t[r+p]=255&a,p+=d,a/=256,f-=8);t[r+p-d]|=128*g}},24:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},35:function(t,e,r){var n,i;r(76),n=r(86),i=r(98),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},75:function(t,e){},76:function(t,e){},78:function(t,e){},83:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(20),o=n(i);e["default"]={props:["content"],attached:function(){$("img",this.$el).one("error",function(t){var e=t.currentTarget,r=e.src;r&&o["default"].fetchImgData(r).done(function(t){var r=t.headers,n=t.data.data,i=r["content-type"]||"image/jpeg",o=new Uint8Array(n),a=new Blob([o],{type:i}),s=window.URL||window.webkitURL,u=s.createObjectURL(a);e.src=u})})}}},86:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(93),o=(n(i),r(20)),a=n(o),s=r(34),u=(n(s),r(102)),f=n(u),c=r(21),h=n(c);r(75),e["default"]={components:{ArticleContent:f["default"]},props:["args"],data:function(){return{article:this.args.article,showSettings:!1,hideCtlPanel:!1,fontBase:0}},computed:{index:function(){return this.args.index},id:function(){return this.args.id},htmlId:function(){return this.args.htmlId},fontSize:function(){return this.fontBase+parseFloat(this.fontSelect)+"px"},isDarkTheme:{get:function(){return h["default"].isDarkTheme},set:function(t){h["default"].isDarkTheme=t}},fontSelect:{get:function(){return h["default"].fontSelect},set:function(t){h["default"].fontSelect=t}}},ready:function(){var t=this;this.fontBase=parseFloat($(this.$el).css("font-size"))||20,$(this.$el).css("font-size",this.fontSize),this.$watch("fontSelect",function(e,r){$(t.$el).css("font-size",t.fontSize)}),this.$watch("args.article",function(e,r){t.article=t.args.article,t.article||t.fetchArticle(t.id)}),this.$watch("args.id",function(e,r){t.fetchArticle(t.id)}),this.article||this.fetchArticle(this.id)},methods:{fetchArticle:function(t){var e=this;a["default"].getArticle(t).done(function(t){e.article=t})},onOriginLinkClick:function(){var t=this.article.url;t?this.$dispatch("loadCustomPage","原文",t,this.index,this.id):$.toast("原文链接丢失")},onBackClick:function(){$.router.back()},onMoreClick:function(){this.showSettings=!0},onClosePopup:function(){this.showSettings=!1},onScroll:function(t){var e=t.currentTarget.scrollTop;void 0!==this.lastScrollTop&&(this.hideCtlPanel=e-this.lastScrollTop>0),this.lastScrollTop=e}}}},93:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(6),o=n(i),a=r(7),s=n(a),u=function(){function t(){(0,o["default"])(this,t)}return(0,s["default"])(t,null,[{key:"getLocation",value:function(t){var e=t.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)?(\?[^#]*|)(#.*|)$/),r={};if(e[6]){var n=e[6].slice(1).split("&");n.forEach(function(t){var e=t.split("=");r[e[0]]=e[1]})}return e&&{protocol:e[1],host:e[2],hostname:e[3],port:e[4],pathname:e[5],search:e[6],hash:e[7],query:r}}}]),t}();e["default"]=u},95:function(t,e){t.exports="<div class=article-content>{{{ content }}}</div>"},98:function(t,e){t.exports='<div class=page id="{{ htmlId }}"> <header v-if=false class="bar bar-nav"> <a class="button button-link button-nav pull-left back" href=# data-transition=slide-out> <span class="icon icon-left"></span> 返回 </a> <a @click=onMoreClick class="icon myicon myicon-more pull-right"></a> <h1 class=title>正文</h1> </header> <div v-if=article @scroll=onScroll($event) class="content full-article"> <h2>{{ article.title }}</h2> <div class=article-info> <span class=article-info-from>{{ article.feed_title }}</span> <span class=article-info-time>{{ article.time }}</span> </div> <article-content :content=article.content></article-content> <span @click=onOriginLinkClick class="button button-big button-round article-origin">查看原文</span> </div> <div v-else class="infinite-scroll-preloader my-loading"> <div class=preloader></div> </div> <div v-if=!hideCtlPanel class="bar bar-footer ctl-group pull-right" transition=ctl-group-fade> <i @click=onBackClick class="myicon myicon-back"></i> <i @click=onMoreClick class="myicon myicon-more"></i> </div> <div class="popup-settings actions-modal" :class="[showSettings ? \'modal-in\' : \'modal-out\']"> <div class=list-block> <li class=item-content> <div class=item-inner> <div class=item-title>字体大小</div> <div class="item-after buttons-row"> <label class="label-checkbox button" :class="{\'active\': fontSelect == -2}"> <input type=radio name=my-radio value=-2 v-model=fontSelect> <span>较小</span> </label> <label class="label-checkbox button" :class="{\'active\': fontSelect == 0}"> <input type=radio name=my-radio value=0 v-model=fontSelect> <span>中等</span> </label> <label class="label-checkbox button" :class="{\'active\': fontSelect == 2}"> <input type=radio name=my-radio value=2 v-model=fontSelect> <span>较大</span> </label> <label class="label-checkbox button" :class="{\'active\': fontSelect == 4}"> <input type=radio name=my-radio value=4 v-model=fontSelect> <span>最大</span> </label> </div> </div> </li> <li class=item-content> <div class=item-inner> <div class=item-title>夜间模式</div> <div class=item-after> <label class=label-switch> <input type=checkbox v-model=isDarkTheme> <div class=checkbox></div> </label> </div> </div> </li> </div> </div> <div @click=onClosePopup class=modal-overlay :class="{\'modal-overlay-visible\': showSettings}"></div> </div>'},102:function(t,e,r){var n,i;r(78),n=r(83),i=r(95),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}});