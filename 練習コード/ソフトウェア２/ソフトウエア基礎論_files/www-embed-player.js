(function(){var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={pa:!0},ia={};try{ia.__proto__=ha;fa=ia.pa;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function n(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function na(){na=function(){};
la.Symbol||(la.Symbol=oa)}
var oa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function pa(){na();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(aa(this))}});
pa=function(){}}
function qa(a){pa();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function p(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)p(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||ra});
ma("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){p(a,f)||ka(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(v){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!p(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return p(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return p(a,f)&&p(a[f],this.b)};
b.prototype["delete"]=function(a){return p(a,f)&&p(a[f],this.b)?delete a[f][this.b]:!1};
return b});
ma("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return qa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&p(a.f,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,o:k}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(ca){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ma("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
pa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ma("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ma("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=da(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var q=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function u(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var sa=/^[\w+/_-]+[=]{0,2}$/,ta=null;function w(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ua(){}
function va(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function wa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){return"array"==wa(a)}
function xa(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ya(a){return"function"==wa(a)}
function y(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var za="closure_uid_"+(1E9*Math.random()>>>0),Aa=0;function Ba(a,b,c){return a.call.apply(a.bind,arguments)}
function Ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=Ba:z=Ca;return z.apply(null,arguments)}
function Da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var A=Date.now||function(){return+new Date};
function B(a,b){u(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ea=document,D=window;function E(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(E,Error);E.prototype.name="CustomError";var Fa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ga=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];
b.call(void 0,k,g,a)&&(d[e++]=k)}return d},Ha=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ia=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Ja(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function Ka(a,b){var c=Fa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function La(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ma(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Na=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Oa(a){if(!Pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ta,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ua,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Va,"&#0;"));return a}
var Qa=/&/g,Ra=/</g,Sa=/>/g,Ta=/"/g,Ua=/'/g,Va=/\x00/g,Pa=/[\x00&<>"']/;function Wa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Xa;a:{var Ya=q.navigator;if(Ya){var Za=Ya.userAgent;if(Za){Xa=Za;break a}}Xa=""}function G(a){return-1!=Xa.indexOf(a)}
;function $a(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ab(a,b){var c=xa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function bb(a){var b=cb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function db(a){for(var b in a)return!1;return!0}
function eb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function fb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function gb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var hb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ib(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<hb.length;f++)c=hb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function jb(a){jb[" "](a);return a}
jb[" "]=ua;var kb=G("Opera"),lb=G("Trident")||G("MSIE"),mb=G("Edge"),nb=G("Gecko")&&!(-1!=Xa.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),ob=-1!=Xa.toLowerCase().indexOf("webkit")&&!G("Edge");function pb(){var a=q.document;return a?a.documentMode:void 0}
var qb;a:{var rb="",sb=function(){var a=Xa;if(nb)return/rv:([^\);]+)(\)|;)/.exec(a);if(mb)return/Edge\/([\d\.]+)/.exec(a);if(lb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ob)return/WebKit\/(\S+)/.exec(a);if(kb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
sb&&(rb=sb?sb[1]:"");if(lb){var tb=pb();if(null!=tb&&tb>parseFloat(rb)){qb=String(tb);break a}}qb=rb}var ub=qb,vb;var wb=q.document;vb=wb&&lb?pb()||("CSS1Compat"==wb.compatMode?parseInt(ub,10):5):void 0;var xb=null,yb=null;function zb(a){this.b=a||{cookie:""}}
h=zb.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(A()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Na(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Na(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ab=new zb("undefined"==typeof document?null:document);function Bb(a){var b=w("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(t(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||q.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Cb[b]?b=Cb[b]:(b=String(b),Cb[b]||(c=/function\s+([^\(]+)/m.exec(b),Cb[b]=c?c[1]:"[Anonymous]"),b=Cb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Cb={};function Db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Eb=!lb||9<=Number(vb);function Fb(){this.b="";this.f=Gb}
Fb.prototype.J=!0;Fb.prototype.I=function(){return this.b};
Fb.prototype.ba=!0;Fb.prototype.Y=function(){return 1};
function Hb(a){return a instanceof Fb&&a.constructor===Fb&&a.f===Gb?a.b:"type_error:TrustedResourceUrl"}
var Gb={};function H(){this.b="";this.f=Ib}
H.prototype.J=!0;H.prototype.I=function(){return this.b};
H.prototype.ba=!0;H.prototype.Y=function(){return 1};
function Jb(a){return a instanceof H&&a.constructor===H&&a.f===Ib?a.b:"type_error:SafeUrl"}
var Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Lb(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);Kb.test(a)||(a="about:invalid#zClosurez");return Mb(a)}
var Ib={};function Mb(a){var b=new H;b.b=a;return b}
Mb("about:blank");function Nb(){this.b="";this.g=Ob;this.f=null}
Nb.prototype.ba=!0;Nb.prototype.Y=function(){return this.f};
Nb.prototype.J=!0;Nb.prototype.I=function(){return this.b};
var Ob={};function Pb(a,b){var c=new Nb;c.b=a;c.f=b;return c}
Pb("<!DOCTYPE html>",0);Pb("",0);Pb("<br>",0);function Qb(a,b){var c=b instanceof H?b:Lb(b);a.href=Jb(c)}
function Rb(a,b){a.src=Hb(b);if(null===ta)b:{var c=q.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&sa.test(c)){ta=c;break b}ta=""}c=ta;c&&a.setAttribute("nonce",c)}
;function Sb(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
h=Sb.prototype;h.clone=function(){return new Sb(this.x,this.y)};
h.equals=function(a){return a instanceof Sb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Tb(a,b){this.width=a;this.height=b}
h=Tb.prototype;h.clone=function(){return new Tb(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ub(a){var b=document;return t(a)?b.getElementById(a):a}
function Vb(a,b){$a(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Wb.hasOwnProperty(d)?a.setAttribute(Wb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Wb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Xb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Eb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Oa(g.name),'"');if(g.type){f.push(' type="',Oa(g.type),'"');var k={};ib(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:x(g)?f.className=g.join(" "):Vb(f,g));2<d.length&&Yb(e,f,d);return f}
function Yb(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!xa(f)||y(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(y(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ya(f)){g="function"==typeof f.item;break a}}g=!1}F(g?La(f):f,d)}}}
function Zb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function $b(a){ac();var b=new Fb;b.b=a;return b}
var ac=ua;function bc(){var a=cc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{jb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function dc(a){var b=ec;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function fc(){var a=[];dc(function(b){a.push(b)});
return a}
var ec={Ra:"allow-forms",Sa:"allow-modals",Ta:"allow-orientation-lock",Ua:"allow-pointer-lock",Va:"allow-popups",Wa:"allow-popups-to-escape-sandbox",Xa:"allow-presentation",Ya:"allow-same-origin",Za:"allow-scripts",ab:"allow-top-navigation",bb:"allow-top-navigation-by-user-activation"},gc=Db(function(){return fc()});
function hc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};F(gc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function ic(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var jc=!!window.google_async_iframe_id,cc=jc&&window.parent||window;var kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a.match(kc)}
function lc(a){return a?decodeURI(a):a}
function mc(a,b,c){if(x(b))for(var d=0;d<b.length;d++)mc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function nc(a){var b=[],c;for(c in a)mc(c,a[c],b);return b.join("&")}
function oc(a,b){var c=nc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var pc=null;function qc(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):A()}
function rc(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null}
;function sc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var J=q.performance,tc=!!(J&&J.mark&&J.measure&&J.clearMarks),uc=Db(function(){var a;if(a=tc){var b;if(null===pc){pc="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(pc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=pc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function vc(){var a=wc;this.events=[];this.f=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=uc()||(null!=b?b:1>Math.random())}
vc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(uc()&&F(this.events,xc),this.events.length=0)};
function xc(a){a&&J&&uc()&&(J.clearMarks("goog_"+a.uniqueId+"_start"),J.clearMarks("goog_"+a.uniqueId+"_end"))}
vc.prototype.start=function(a,b){if(!this.b)return null;var c=rc()||qc();c=new sc(a,b,c);var d="goog_"+c.uniqueId+"_start";J&&uc()&&J.mark(d);return c};
vc.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=rc()||qc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";J&&uc()&&J.mark(b);this.b&&this.events.push(a)}};if(jc&&!bc()){var yc="."+Ea.domain;try{for(;2<yc.split(".").length&&!bc();)Ea.domain=yc=yc.substr(yc.indexOf(".")+1),cc=window.parent}catch(a){}bc()||(cc=window)}var wc=cc,zc=new vc;if("complete"==wc.document.readyState)wc.google_measure_js_timing||zc.disable();else if(zc.b){var Ac=function(){wc.google_measure_js_timing||zc.disable()},Bc=wc;
Bc.addEventListener&&Bc.addEventListener("load",Ac,!1)};var Cc=(new Date).getTime();function Dc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ec(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;v=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=k^d&(f^k);var v=1518500249}else m=d^f^k,v=1859775393;else 60>c?(m=d&f|k&(d|f),v=2400959708):(m=d^f^k,v=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+v+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64;for(;d<c;)if(f[m++]=a[d++],v++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64}
function d(){var a=[],d=8*v;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,v;a();return{reset:a,update:c,digest:d,ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Fc(a,b,c){var d=[],e=[];if(1==(x(c)?2:1))return e=[b,a],F(d,function(a){e.push(a)}),Gc(e.join(" "));
var f=[],g=[];F(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(a){e.push(a)});
a=Gc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Gc(a){var b=Ec();b.update(a);return b.ra().toLowerCase()}
;function Hc(a){var b=Dc(String(q.location.href)),c=q.__OVERRIDE_SID;null==c&&(c=(new zb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,null==b&&(b=(new zb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&b&&c?[c,Fc(Dc(d),b,a||null)].join(" "):null}return null}
;function Ic(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Ic.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Jc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Kc(a){q.setTimeout(function(){throw a;},0)}
var Lc;
function Mc(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=z(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.ga;c.ga=null;a()}};
return function(a){d.next={ga:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}}
;function Nc(){this.f=this.b=null}
var Pc=new Ic(function(){return new Oc},function(a){a.reset()});
Nc.prototype.add=function(a,b){var c=Pc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Nc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Oc(){this.next=this.scope=this.b=null}
Oc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Oc.prototype.reset=function(){this.next=this.scope=this.b=null};function Qc(a,b){Rc||Sc();Tc||(Rc(),Tc=!0);Uc.add(a,b)}
var Rc;function Sc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);Rc=function(){a.then(Vc)}}else Rc=function(){var a=Vc;
!ya(q.setImmediate)||q.Window&&q.Window.prototype&&!G("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(Lc||(Lc=Mc()),Lc(a)):q.setImmediate(a)}}
var Tc=!1,Uc=new Nc;function Vc(){for(var a;a=Uc.remove();){try{a.b.call(a.scope)}catch(b){Kc(b)}Jc(Pc,a)}Tc=!1}
;function Wc(){this.f=-1}
;function Xc(){this.f=64;this.b=[];this.j=[];this.u=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
C(Xc,Wc);Xc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function Yc(a,b,c){c||(c=0);var d=a.u;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],k=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+l&4294967295}
Xc.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)Yc(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Yc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Yc(this,e);f=0;break}}this.g=f;this.i+=b}};
Xc.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;Yc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function K(){this.f=this.f;this.u=this.u}
K.prototype.f=!1;K.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function Zc(a,b){a.f?r(void 0)?b.call(void 0):b():(a.u||(a.u=[]),a.u.push(r(void 0)?z(b,void 0):b))}
K.prototype.l=function(){if(this.u)for(;this.u.length;)this.u.shift()()};
function $c(a){a&&"function"==typeof a.dispose&&a.dispose()}
function ad(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];xa(d)?ad.apply(null,d):$c(d)}}
;function bd(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function cd(a,b){if(a.classList)var c=a.classList.contains(b);else c=bd(a),c=0<=Fa(c,b);return c}
function dd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):cd(a,"inverted-hdpi")&&(a.className=Ga(bd(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var ed="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function fd(){}
fd.prototype.next=function(){throw ed;};
fd.prototype.F=function(){return this};
function gd(a){if(a instanceof fd)return a;if("function"==typeof a.F)return a.F(!1);if(xa(a)){var b=0,c=new fd;c.next=function(){for(;;){if(b>=a.length)throw ed;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function hd(a,b){if(xa(a))try{F(a,b,void 0)}catch(c){if(c!==ed)throw c;}else{a=gd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ed)throw c;}}}
function id(a){if(xa(a))return La(a);a=gd(a);var b=[];hd(a,function(a){b.push(a)});
return b}
;function jd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof jd)for(c=kd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function kd(a){ld(a);return a.b.concat()}
h=jd.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||md;ld(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function md(a,b){return a===b}
h.isEmpty=function(){return 0==this.f};
h.clear=function(){this.g={};this.h=this.f=this.b.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&ld(this),!0):!1};
function ld(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
h.forEach=function(a,b){for(var c=kd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new jd(this)};
h.F=function(a){ld(this);var b=0,c=this.h,d=this,e=new fd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw ed;var e=d.b[b++];return a?e:d.g[e]};
return e};function nd(a){var b=[];od(new pd,a,b);return b.join("")}
function pd(){}
function od(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(x(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),od(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qd(d,c),c.push(":"),od(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var rd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function qd(a,b){b.push('"',a.replace(sd,function(a){var b=rd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),rd[a]=b);return b}),'"')}
;function td(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function L(a){this.b=0;this.u=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=ua)try{var b=this;a.call(void 0,function(a){ud(b,2,a)},function(a){ud(b,3,a)})}catch(c){ud(this,3,c)}}
function vd(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
vd.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var wd=new Ic(function(){return new vd},function(a){a.reset()});
function xd(a,b,c){var d=wd.get();d.f=a;d.onRejected=b;d.context=c;return d}
function yd(a){return new L(function(b,c){c(a)})}
L.prototype.then=function(a,b,c){return zd(this,ya(a)?a:null,ya(b)?b:null,c)};
L.prototype.$goog_Thenable=!0;function Ad(a,b){return zd(a,null,b,void 0)}
L.prototype.cancel=function(a){0==this.b&&Qc(function(){var b=new Bd(a);Dd(this,b)},this)};
function Dd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Dd(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Ed(c),Fd(c,e,3,b)))}a.g=null}else ud(a,3,b)}
function Gd(a,b){a.f||2!=a.b&&3!=a.b||Hd(a);a.h?a.h.next=b:a.f=b;a.h=b}
function zd(a,b,c,d){var e=xd(null,null,null);e.b=new L(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof Bd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Gd(a,e);return e.b}
L.prototype.w=function(a){this.b=0;ud(this,2,a)};
L.prototype.B=function(a){this.b=0;ud(this,3,a)};
function ud(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof L){Gd(d,xd(e||ua,f||null,a));var g=!0}else if(td(d))d.then(e,f,a),g=!0;else{if(y(d))try{var k=d.then;if(ya(k)){Id(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.u=c,a.b=b,a.g=null,Hd(a),3!=b||c instanceof Bd||Jd(a,c))}}
function Id(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Hd(a){a.j||(a.j=!0,Qc(a.m,a))}
function Ed(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
L.prototype.m=function(){for(var a;a=Ed(this);)Fd(this,a,this.b,this.u);this.j=!1};
function Fd(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Kd(b,c,d);else try{b.g?b.f.call(b.context):Kd(b,c,d)}catch(e){Ld.call(null,e)}Jc(wd,b)}
function Kd(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Jd(a,b){a.i=!0;Qc(function(){a.i&&Ld.call(null,b)})}
var Ld=Kc;function Bd(a){E.call(this,a)}
C(Bd,E);Bd.prototype.name="cancel";function M(a){K.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
C(M,K);h=M.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Md(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ja(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
h.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=ua):(c&&Ka(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Nd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function Nd(a,b,c){Qc(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
h.l=function(){M.A.l.call(this);this.clear();this.h.length=0};function Od(a){this.b=a}
Od.prototype.set=function(a,b){r(b)?this.b.set(a,nd(b)):this.b.remove(a)};
Od.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Od.prototype.remove=function(a){this.b.remove(a)};function Pd(a){this.b=a}
C(Pd,Od);function Qd(a){this.data=a}
function Rd(a){return!r(a)||a instanceof Qd?a:new Qd(a)}
Pd.prototype.set=function(a,b){Pd.A.set.call(this,a,Rd(b))};
Pd.prototype.f=function(a){a=Pd.A.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function N(a){this.b=a}
C(N,Pd);N.prototype.set=function(a,b,c){if(b=Rd(b)){if(c){if(c<A()){N.prototype.remove.call(this,a);return}b.expiration=c}b.creation=A()}N.A.set.call(this,a,b)};
N.prototype.f=function(a){var b=N.A.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<A()||c&&c>A())N.prototype.remove.call(this,a);else return b}};function Sd(a){this.b=a}
C(Sd,N);function Td(){}
;function Ud(){}
C(Ud,Td);Ud.prototype.clear=function(){var a=id(this.F(!0)),b=this;F(a,function(a){b.remove(a)})};function Vd(a){this.b=a}
C(Vd,Ud);h=Vd.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.F=function(a){var b=0,c=this.b,d=new fd;d.next=function(){if(b>=c.length)throw ed;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function Wd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
C(Wd,Vd);function Xd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
C(Xd,Vd);function Yd(a,b){this.f=a;this.b=null;if(lb&&!(9<=Number(vb))){Zd||(Zd=new jd);this.b=Zd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Zd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
C(Yd,Ud);var $d={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Zd=null;function ae(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return $d[a]})}
h=Yd.prototype;h.isAvailable=function(){return!!this.b};
h.set=function(a,b){this.b.setAttribute(ae(a),b);be(this)};
h.get=function(a){a=this.b.getAttribute(ae(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeAttribute(ae(a));be(this)};
h.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new fd;d.next=function(){if(b>=c.length)throw ed;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);be(this)};
function be(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ce(a,b){this.f=a;this.b=b+"::"}
C(ce,Ud);ce.prototype.set=function(a,b){this.f.set(this.b+a,b)};
ce.prototype.get=function(a){return this.f.get(this.b+a)};
ce.prototype.remove=function(a){this.f.remove(this.b+a)};
ce.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new fd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function de(){this.f=[];this.b=-1}
de.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
de.prototype.get=function(a){return!!this.f[a]};
function ee(a){-1==a.b&&(a.b=Ia(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function fe(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var ge=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",ge,void 0);function P(a){fe(ge,arguments)}
function Q(a,b){return a in ge?ge[a]:b}
function he(a){return Q(a,void 0)}
function ie(){return Q("PLAYER_CONFIG",{})}
;function je(){var a=ke;w("yt.ads.biscotti.getId_")||u("yt.ads.biscotti.getId_",a,void 0)}
function le(a){u("yt.ads.biscotti.lastId_",a,void 0)}
;function me(a){var b=ne;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(oe(b),pe(b));b.ca_type="image";a&&(b.bid=a);return b}
function oe(a){var b={};b.dt=Cc;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?D:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!D.navigator&&"unknown"!==typeof D.navigator.javaEnabled&&!!D.navigator.javaEnabled&&D.navigator.javaEnabled();D.screen&&(b.u_h=D.screen.height,b.u_w=D.screen.width,b.u_ah=D.screen.availHeight,b.u_aw=D.screen.availWidth,b.u_cd=D.screen.colorDepth);
D.navigator&&D.navigator.plugins&&(b.u_nplug=D.navigator.plugins.length);D.navigator&&D.navigator.mimeTypes&&(b.u_nmime=D.navigator.mimeTypes.length);return b}
function pe(a){var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(ca){}try{var e=b.outerWidth;var f=b.outerHeight}catch(ca){}try{var g=b.innerWidth;var k=b.innerHeight}catch(ca){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.b.top;try{var l=(c||window).document,m="CSS1Compat"==l.compatMode?l.documentElement:l.body;var v=(new Tb(m.clientWidth,m.clientHeight)).round()}catch(ca){v=new Tb(-12245933,-12245933)}l=v;v={};m=new de;q.SVGElement&&
q.document.createElementNS&&m.set(0);c=hc();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);q.crypto&&q.crypto.subtle&&m.set(3);m=ee(m);v.bc=m;v.bih=l.height;v.biw=l.width;v.brdim=b.join();a=a.f;return v.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,v.wgl=!!D.WebGLRenderingContext,v}
var ne=new function(){var a=window.document;this.b=window;this.f=a};A();function qe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function re(a){R(a,"WARNING",void 0,void 0,void 0)}
;function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;var se=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function te(){if(!se)return null;var a=se();return"open"in a?a:null}
function ue(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){ya(a)&&(a=qe(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;function ve(a){var b=[];$a(a,function(a,d){var c=encodeURIComponent(String(d)),f;x(a)?f=a:f=[a];F(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function we(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?x(b[f])?Ma(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function xe(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=we(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return oc(a,e)+d}
;var ye={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ze="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ae=!1;
function Be(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=I(a)[1]||null,e=lc(I(a)[3]||null);d&&e?(d=c,c=I(a),d=I(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?lc(I(c)[3]||null)==e&&(Number(I(c)[4]||null)||null)==(Number(I(a)[4]||null)||null):!0;d=!!S("web_ajax_ignore_global_headers_if_set");for(var f in ye)e=Q(ye[f]),!e||!c&&!Ce(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ce(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();S("pass_biscotti_id_in_header_ajax")&&(c||
Ce(a,"X-YouTube-Ad-Signals"))&&(f=me(void 0),b["X-YouTube-Ad-Signals"]=ve(f));return b}
function De(a){var b=we(window.location.search),c={};F(ze,function(a){b[a]&&(c[a]=b[a])});
return xe(a,c||{},!1)}
function Ce(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=lc(I(a)[3]||null);return d?(c=c[d])?0<=Fa(c,b):!1:!0}
function Ee(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Fe(a,b);var d=Ge(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&U(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||q;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ia&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ia.call(b.context||q))},b.timeout))}else He(a,b)}
function He(a,b){var c=b.format||"JSON";a=Fe(a,b);var d=Ge(a,b),e=!1,f,g=Ie(a,function(a){if(!e){e=!0;f&&U(f);var d=ue(a),g=null,k=400<=a.status&&500>a.status,ca=500<=a.status&&600>a.status;if(d||k||ca)g=Je(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};k=b.context||q;d?b.onSuccess&&b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.ea&&b.ea.call(k,a,g)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.M.call(b.context||q,g))},b.timeout));
return g}
function Fe(a,b){b.wa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=xe(a,d||{},!0));return a}
function Ge(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=he("XSRF_FIELD_NAME"),k;b.headers&&(k=b.headers["Content-Type"]);b.ib||lc(I(a)[3]||null)&&!b.withCredentials&&lc(I(a)[3]||null)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=we(e),ib(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):nc(e));f=e||f&&!db(f);!Ae&&f&&"POST"!=b.method&&(Ae=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Je(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ke(b):null)d={},F(b.getElementsByTagName("*"),function(a){d[a.tagName]=Le(a)})}c&&Me(d);
return d}
function Me(a){if(y(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Pb(a[b],null);a[c]=d}else Me(a[b])}}
function Ke(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Le(a){var b="";F(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ne(a,b){b.method="POST";b.C||(b.C={});He(a,b)}
function Ie(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&qe(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=te();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=De(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Be(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Oe={},Pe=0;
function Qe(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Xa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),Kb.test(a)||(a="about:invalid#zClosurez"),a=Mb(a)),b=Jb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Nb?a=b:(d="object"==typeof b,a=null,d&&b.ba&&(a=b.Y()),b=Oa(d&&b.J?b.I():String(b)),a=Pb(b,a)),a=encodeURIComponent(String(nd(a instanceof Nb&&a.constructor===Nb&&a.g===Ob?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=
Xb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ie(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ie(a,b,"GET","",d):Re(a,b))}
function Re(a,b){var c=new Image,d=""+Pe++;Oe[d]=c;c.onload=c.onerror=function(){b&&Oe[d]&&b();delete Oe[d]};
c.src=a}
;var Se={},Te=0;
function Ue(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Te||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500)),a=Bb(a),c=c||a.stack,e=a.lineNumber.toString(),isNaN(e)||isNaN(d)||(e=e+":"+d),window.yterr&&ya(window.yterr)&&window.yterr(a),
Se[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},C:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.C.stack=c);for(var g in f)b.C["client."+g]=f[g];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var k in g)b.C[k]=g[k];He(Q("ECATCHER_REPORT_HOST","")+"/error_204",b);Se[a.message]=
!0;Te++}}
;var Ve=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",Ve,void 0);function We(a){fe(Ve,arguments)}
;function Xe(a){a&&(a.dataset?a.dataset[Ye("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ze(a,b){return a?a.dataset?a.dataset[Ye(b)]:a.getAttribute("data-"+b):null}
var $e={};function Ye(a){return $e[a]||($e[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var af=w("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.L;M.prototype.publish=M.prototype.K;M.prototype.clear=M.prototype.clear;u("ytPubsubPubsubInstance",af,void 0);var bf=w("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",bf,void 0);var cf=w("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",cf,void 0);var df=w("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",df,void 0);
function ef(a,b){var c=ff();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){bf[d]&&b.apply(window,c)};
try{df[a]?f():T(f,0)}catch(g){R(g)}},void 0);
bf[d]=!0;cf[a]||(cf[a]=[]);cf[a].push(d);return d}return 0}
function gf(a){var b=ff();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),F(a,function(a){b.unsubscribeByKey(a);delete bf[a]}))}
function hf(a,b){var c=ff();c&&c.publish.apply(c,arguments)}
function jf(a){var b=ff();if(b)if(b.clear(a),a)kf(a);else for(var c in cf)kf(c)}
function ff(){return w("ytPubsubPubsubInstance")}
function kf(a){cf[a]&&(a=cf[a],F(a,function(a){bf[a]&&delete bf[a]}),a.length=0)}
;var lf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function nf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lf,""),c=c.replace(mf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else of(a,b,c)}
function of(a,b,c){c=void 0===c?null:c;var d=pf(a),e=document.getElementById(d),f=e&&Ze(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=ef(d,b),b=""+(b[za]||(b[za]=++Aa)),qf[b]=f),g||(e=rf(a,d,function(){Ze(e,"loaded")||(Xe(e),hf(d),T(Da(jf,d),0))},c)))}
function rf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Rb(e,$b(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function sf(a){a=pf(a);var b=document.getElementById(a);b&&(jf(a),b.parentNode.removeChild(b))}
function tf(a,b){if(a&&b){var c=""+(b[za]||(b[za]=++Aa));(c=qf[c])&&gf(c)}}
function pf(a){var b=document.createElement("a");Qb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Wa(a)}
var qf={};function uf(){}
function vf(a,b){return wf(a,1,b)}
;function xf(){}
n(xf,uf);function wf(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function yf(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
xf.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
xf.prototype.pause=function(){var a=w("yt.scheduler.instance.pause");a&&a()};
va(xf);xf.getInstance();var zf=[],Af=!1;function Bf(){if("1"!=ab(ie(),"args","privembed")){var a=function(){Af=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
nf("//static.doubleclick.net/instream/ad_status.js",a);zf.push(vf(function(){Af||"google_ad_status"in window||(tf("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},5E3))}}
function Cf(){return parseInt(Q("DCLKSTAT",0),10)}
;function Df(){this.f=!1;this.b=null}
Df.prototype.initialize=function(a,b,c,d,e){b?(this.f=!0,nf(b,function(){this.f=!1;window.botguard?Ef(this,c,d):(sf(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this),e)):a&&(eval(a),window.botguard?Ef(this,c,d):R(Error("Unable to load Botguard from JS"),"WARNING"))};
function Ef(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){re(d)}c&&c(b)}
Df.prototype.invoke=function(a){a=void 0===a?{}:a;return this.b?this.b.invoke(void 0,void 0,a):null};
Df.prototype.dispose=function(){this.b=null};var Ff=new Df,Gf=!1,Hf=0,If="";function Jf(a){S("botguard_periodic_refresh")?Hf=O():S("botguard_always_refresh")&&(If=a)}
function Kf(a){if(a){if(Ff.f)return!1;if(S("botguard_periodic_refresh"))return 72E5<O()-Hf;if(S("botguard_always_refresh"))return If!=a}else return!1;return!Gf}
function Lf(){return null!==Ff.b}
function Mf(a){a=void 0===a?{}:a;return Ff.invoke(a)}
;var Nf=0;u("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++Nf},void 0);var Of={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Pf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Of||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Qf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Pf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Pf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Pf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var cb=w("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",cb,void 0);var Rf=w("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",Rf,void 0);
function Sf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return bb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=y(e[4])&&y(d)&&fb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Tf=Db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Sf(a,b,c,d);if(e)return e;e=++Rf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Pf(d);if(!Zb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Pf(b);
b.currentTarget=a;return c.call(a,b)};
g=qe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Tf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);cb[e]=[a,b,c,g,d];return e}
function Uf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(a){if(a in cb){var b=cb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Tf()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete cb[a]}}))}
;function Vf(a){this.w=a;this.b=null;this.i=0;this.m=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.D=V(window,"mousemove",z(this.G,this));a=z(this.B,this);ya(a)&&(a=qe(a));this.H=window.setInterval(a,25)}
C(Vf,K);Vf.prototype.G=function(a){r(a.b)||Qf(a);var b=a.b;r(a.f)||Qf(a);this.b=new Sb(b,a.f)};
Vf.prototype.B=function(){if(this.b){var a=O();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.w();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
Vf.prototype.l=function(){window.clearInterval(this.H);Uf(this.D)};var Wf={};function Xf(a){var b=void 0===a?{}:a;a=void 0===b.b?!0:b.b;b=void 0===b.f?!1:b.f;if(null==w("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?A()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&Yf();V(document,"keydown",Yf);V(document,"keyup",Yf);V(document,"mousedown",Yf);V(document,"mouseup",Yf);a&&(b?V(window,"touchmove",function(){Zf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Zf("resize",200)}),V(window,"scroll",function(){Zf("scroll",200)})));
new Vf(function(){Zf("mouse",100)});
V(document,"touchstart",Yf,{passive:!0});V(document,"touchend",Yf,{passive:!0})}}
function Zf(a,b){Wf[a]||(Wf[a]=!0,vf(function(){Yf();Wf[a]=!1},b))}
function Yf(){null==w("_lact",window)&&Xf();var a=A();u("_lact",a,window);-1==w("_fact",window)&&u("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function $f(){var a=w("_lact",window);return null==a?-1:Math.max(A()-a,0)}
;var ag=Math.pow(2,16)-1,bg=null,cg=0,dg={log_event:"events",log_interaction:"interactions"},eg=Object.create(null);eg.log_event="GENERIC_EVENT_LOGGING";eg.log_interaction="INTERACTION_LOGGING";var fg=new Set(["log_event"]),gg={},hg=0,ig=0,W=w("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",W,void 0);var jg=w("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",jg,void 0);var kg=w("ytLoggingTransportDispatchedStats_")||{};
u("ytLoggingTransportDispatchedStats_",kg,void 0);u("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{},void 0);function lg(){U(hg);U(ig);ig=0;if(!db(W)){for(var a in W){var b=gg[a];b&&(mg(a,b),delete W[a])}db(W)||ng()}}
function ng(){S("web_gel_timeout_cap")&&!ig&&(ig=T(lg,3E4));U(hg);hg=T(lg,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function og(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function mg(a,b){var c=dg[a],d=kg[a]||{};kg[a]=d;var e=Math.round(O());for(m in W[a]){var f=b.b;f={client:{hl:f.za,gl:f.ya,clientName:f.xa,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(f.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f={context:f};f[c]=og(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=jg[m])a:{var k=
m;if(g.videoId)var l="VIDEO";else if(g.playlistId)l="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:l}]}delete jg[m];f.requestTimeMs=e;if(g=he("EVENT_ID"))l=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>ag&&(l=1),P("BATCH_CLIENT_COUNTER",l),g={serializedEventId:g,clientCounter:l},f.serializedClientEventId=g,bg&&cg&&S("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:bg,
roundtripMs:cg}),bg=g,cg=0;pg(b,a,f,{retry:fg.has(a),onSuccess:qg.bind(this,O())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function qg(a){cg=Math.round(O()-a)}
;function rg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||O());f[a]=b;f.context={lastActivityMs:String(d?-1:$f())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),jg[e.token]=a,e=og("log_event",e.token)):e=og("log_event");e.push(f);c&&(gg.log_event=new c);e.length>=(Number(S("web_logging_max_batch")||0)||20)?lg():ng()}
;function sg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.eb||Q("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().cb:b=Hc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function tg(a){a=Object.assign({},a);delete a.Authorization;var b=Hc();if(b){var c=new Xc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!xb)for(xb={},yb={},c=0;65>c;c++)xb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),yb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=yb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,k=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,v=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<2|m>>
6;m&=63;l||(m=64,g||(k=64));d.push(c[v],c[f],c[k],c[m])}a.hash=d.join("")}return a}
;function ug(a,b,c,d){Ab.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function vg(){var a=new Wd;(a=a.isAvailable()?new ce(a,"yt.innertube"):null)||(a=new Yd("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new N(a):null;this.f=document.domain||window.location.hostname}
vg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,A()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(nd(b))}catch(f){return}else e=escape(b);ug(a,e,c,this.f)};
vg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Ab.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
vg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Ab.remove(""+a,"/",void 0===b?"youtube.com":b)};var wg=new vg;function xg(a,b,c,d){if(d)return null;d=wg.get("nextId",!0)||1;var e=wg.get("requests",!0)||{};e[d]={method:a,request:b,authState:tg(c),requestTime:Math.round(O())};wg.set("nextId",d+1,86400,!0);wg.set("requests",e,86400,!0);return d}
function yg(a){var b=wg.get("requests",!0)||{};delete b[a];wg.set("requests",b,86400,!0)}
function zg(a){var b=wg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=tg(sg(!1));fb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),pg(a,d.method,e,{}));delete b[c]}}wg.set("requests",b,86400,!0)}}
;function Ag(a){var b=this;this.b=a||{innertubeApiKey:he("INNERTUBE_API_KEY"),innertubeApiVersion:he("INNERTUBE_API_VERSION"),xa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:he("INNERTUBE_CONTEXT_CLIENT_VERSION"),za:he("INNERTUBE_CONTEXT_HL"),ya:he("INNERTUBE_CONTEXT_GL"),Aa:he("INNERTUBE_HOST_OVERRIDE")||"",Ba:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};wf(function(){zg(b)},0,5E3)}
function pg(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ja:"JSON",M:function(){d.M()},
ia:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ha:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Aa;g&&(f=g);g=a.b.Ba||!1;var k=sg(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=xg(b,c,k,g))){var v=e.onSuccess,ca=e.ha;e.onSuccess=function(a,b){yg(m);v(a,b)};
c.ha=function(a,b){yg(m);ca(a,b)}}try{S("use_fetch_for_op_xhr")?Ee(l,e):Ne(l,e)}catch(Cd){if("InvalidAccessError"==Cd)m&&(yg(m),m=0),R(Error("An extension is blocking network request."),"WARNING");
else throw Cd;}m&&wf(function(){zg(a)},0,5E3)}
;var Bg=A().toString();
function Cg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=A();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Bg)for(a=1,b=0;b<Bg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Bg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Dg=w("ytLoggingTimeDocumentNonce_")||Cg();u("ytLoggingTimeDocumentNonce_",Dg,void 0);function Eg(a){this.b=a}
function Fg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Fg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Gg=1;function Hg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Ig(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Jg(a){return Q(Ig(void 0===a?0:a),void 0)}
u("yt.logging.screen.getRootVeType",Jg,void 0);function Kg(){var a=Jg(0),b;a?b=new Eg({veType:a,youtubeData:void 0}):b=null;return b}
function Lg(a){a=void 0===a?0:a;var b=Q(Hg(a));b||0!=a||(b=Q("EVENT_ID"));return b?b:null}
u("yt.logging.screen.getCurrentCsn",Lg,void 0);function Mg(a,b,c){c=void 0===c?0:c;if(a!==Q(Hg(c))||b!==Q(Ig(c)))P(Hg(c),a),P(Ig(c),b),0==c&&(b=function(){setTimeout(function(){a&&rg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Dg,clientScreenNonce:a},Ag)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
u("yt.logging.screen.setCurrentScreen",Mg,void 0);function Ng(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=lc(I(window.location.href)[3]||null);f&&e.push(f);f=lc(I(d)[3]||null);if(0<=Fa(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Qb(e,d),d=e.href),d){f=I(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Lg();if(k){var k=parseInt(k,10);isFinite(k)&&0<k&&(d="ST-"+Wa(d).toString(36),b=b?nc(b):"",ug(d,b,k||5))}else k="ST-"+Wa(d).toString(36),b=b?nc(b):"",ug(k,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var v=void 0===v?window:v;c=v.location;a=oc(a,l)+m;a=a instanceof H?a:Lb(a);c.href=Jb(a)}return!0}
;function Og(a,b,c){a={csn:a,parentVe:Fg(b),childVes:Ha(c,function(a){return Fg(a)})};
rg("visualElementAttached",a,Ag)}
;function Pg(a){a=a||{};this.url=a.url||"";this.args=a.args||gb(Qg);this.assets=a.assets||{};this.attrs=a.attrs||gb(Rg);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Qg={enablejsapi:1},Rg={};Pg.prototype.clone=function(){var a=new Pg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==wa(c)?gb(c):c}return a};function Sg(){K.call(this);this.b=[]}
n(Sg,K);Sg.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}K.prototype.l.call(this)};var Tg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ug(a){a=a||"";if(window.spf){var b=a.match(Tg);spf.style.load(a,b?b[1]:"",void 0)}else Vg(a)}
function Vg(a){var b=Wg(a),c=document.getElementById(b),d=c&&Ze(c,"loaded");d||c&&!d||(c=Xg(a,b,function(){Ze(c,"loaded")||(Xe(c),hf(b),T(Da(jf,b),0))}))}
function Xg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=$b(a);d.rel="stylesheet";d.href=Hb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Wg(a){var b=document.createElement("A");a=Mb(a);Qb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Wa(b)}
;function Yg(a,b){K.call(this);this.j=this.T=a;this.D=b;this.m=!1;this.api={};this.P=this.B=null;this.G=new M;Zc(this,Da($c,this.G));this.h={};this.N=this.R=this.g=this.X=this.b=null;this.H=!1;this.i=this.w=null;this.U={};this.na=["onReady"];this.W=null;this.fa=NaN;this.O={};Zg(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Da.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ea.bind(this));this.V("onAdAnnounce",this.qa.bind(this));this.oa=new Sg(this);Zc(this,Da($c,this.oa))}
n(Yg,K);h=Yg.prototype;
h.da=function(a){if(!this.f){a instanceof Pg||(a=new Pg(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.D,this.b.attrs.id=this.D);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.D;this.R||(this.R=$g(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=ic(Number(a)||a);if(a=this.b.attrs.height)this.j.style.height=ic(Number(a)||
a);ah(this);this.m&&bh(this)}};
h.ta=function(){return this.X};
function bh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function ch(a){var b=!0,c=dh(a);c&&a.b&&(a=a.b,b=Ze(c,"version")==a.assets.js);return b&&!!w("yt.player.Application.create")}
function ah(a){if(!a.f&&!a.H){var b=ch(a);if(b&&"html5"==(dh(a)?"html5":null))a.N="html5",a.m||eh(a);else if(fh(a),a.N="html5",b&&a.i)a.T.appendChild(a.i),eh(a);else{a.b.loaded=!0;var c=!1;a.w=function(){c=!0;var b=a.b.clone();w("yt.player.Application.create")(a.T,b);eh(a)};
a.H=!0;b?a.w():(nf(a.b.assets.js,a.w),Ug(a.b.assets.css),gh(a)&&!c&&u("yt.player.Application.create",null,void 0))}}}
function dh(a){var b=Ub(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function eh(a){if(!a.f){var b=dh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.H=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||hh(a)):a.fa=T(function(){eh(a)},50)}}
function hh(a){Zg(a);a.m=!0;var b=dh(a);b.addEventListener&&(a.B=ih(a,b,"addEventListener"));b.removeEventListener&&(a.P=ih(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ih(a,b,e))}for(var f in a.h)a.B(f,a.h[f]);bh(a);a.R&&a.R(a.api);a.G.K("onReady",a.api)}
function ih(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,re(e))}}}
function Zg(a){a.m=!1;if(a.P)for(var b in a.h)a.P(b,a.h[b]);for(var c in a.O)U(parseInt(c,10));a.O={};a.B=null;a.P=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Ha.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ua.bind(a);a.api.getPlayerType=a.va.bind(a);a.api.getCurrentVideoConfig=a.ta.bind(a);a.api.loadNewVideoConfig=a.da.bind(a);a.api.isReady=a.Ca.bind(a)}
h.Ca=function(){return this.m};
h.V=function(a,b){var c=this,d=$g(this,b);if(d){if(!(0<=Fa(this.na,a)||this.h[a])){var e=jh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.m&&T(function(){d(c.api)},0)}};
h.Ha=function(a,b){if(!this.f){var c=$g(this,b);c&&Md(this.G,a,c)}};
function $g(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var a=w(b);a&&a.apply(q,arguments)};
a.U[b]=c}return c?c:null}
function jh(a,b){var c="ytPlayer"+b+a.D;a.h[b]=c;q[c]=function(c){var d=T(function(){if(!a.f){a.G.K(b,c);var e=a.O,g=String(d);g in e&&delete e[g]}},0);
eb(a.O,String(d))};
return c}
h.qa=function(a){hf("a11y-announce",a)};
h.Da=function(a){hf("WATCH_LATER_VIDEO_ADDED",a)};
h.Ea=function(a){hf("WATCH_LATER_VIDEO_REMOVED",a)};
h.va=function(){return this.N||(dh(this)?"html5":null)};
h.ua=function(){return this.W};
function fh(a){a.cancel();Zg(a);a.N=null;a.b&&(a.b.loaded=!1);var b=dh(a);b&&(ch(a)||!gh(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
h.cancel=function(){this.w&&tf(this.b.assets.js,this.w);U(this.fa);this.H=!1};
h.l=function(){fh(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){R(b)}this.U=null;for(var a in this.h)q[this.h[a]]=null;this.X=this.b=this.api=null;delete this.T;delete this.j;K.prototype.l.call(this)};
function gh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var kh={},lh="player_uid_"+(1E9*Math.random()>>>0);function mh(a){var b="player";b=t(b)?Ub(b):b;var c=lh+"_"+(b[za]||(b[za]=++Aa)),d=kh[c];if(d)return d.da(a),d.api;d=new Yg(b,c);kh[c]=d;hf("player-added",d.api);Zc(d,Da(nh,d));T(function(){d.da(a)},0);
return d.api}
function nh(a){delete kh[a.D]}
;function oh(){var a=ph(),b=qh();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!t(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!t(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var qh=Db(function(){var a=new Wd;return a.isAvailable()?new Sd(a):null}),ph=Db(function(){var a=new Xd;
return a.isAvailable()?new Sd(a):null});function rh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function sh(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return th(a)}
function th(a,b,c){if(y(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function uh(a,b,c,d){if(y(a)&&!x(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function vh(a){var b=a.video_id||a.videoId;if(t(b)){var c=oh()||{},d=oh()||{};r(void 0)?d[b]=void 0:delete d[b];var e=A()+3E5,f=qh();if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function wh(a,b,c){var d=Ag;Q("ytLoggingEventsDefaultDisabled",!1)&&Ag==Ag&&(d=null);rg(a,b,d,c,void 0)}
;var xh=w("ytLoggingLatencyUsageStats_")||{};u("ytLoggingLatencyUsageStats_",xh,void 0);var yh=0;function zh(a){xh[a]=xh[a]||{count:0};var b=xh[a];b.count++;b.time=O();yh||(yh=wf(Ah,0,5E3));return 10<b.count?(11==b.count&&Ue(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function Ah(){var a=O(),b;for(b in xh)6E4<a-xh[b].time&&delete xh[b];yh=0}
;function Bh(a,b){this.version=a;this.args=b}
;function Ch(a){this.topic=a}
Ch.prototype.toString=function(){return this.topic};var Dh=w("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.L;M.prototype.publish=M.prototype.K;M.prototype.clear=M.prototype.clear;u("ytPubsub2Pubsub2Instance",Dh,void 0);u("ytPubsub2Pubsub2SubscribedKeys",w("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);u("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Eh(a,b){var c=w("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Fh(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function Gh(){var a=Fh(),b;for(b in a)yf(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function Hh(a,b){Bh.call(this,1,arguments)}
n(Hh,Bh);function Ih(a,b){Bh.call(this,1,arguments)}
n(Ih,Bh);var Jh=new Ch("aft-recorded"),Kh=new Ch("timing-sent");var Lh={vc:!0},Y={},Mh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr="prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",
Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Nh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Oh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),Ph={},Qh=(Ph.yt_vst="VIDEO_STREAM_TYPE_",Ph),Rh=!1;
function Sh(){var a=Th().info.yt_lt="hot_bg";Uh().info_yt_lt=a;if(Vh())if("yt_lt"in Mh){var b=Mh.yt_lt;0<=Fa(Oh,b)&&(a=!!a);"yt_lt"in Qh&&(a=Qh.yt_lt+a.toUpperCase());var c=a;if(Vh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Wh();b=Object.keys(a).join("");zh("info_"+b+"_"+c)||(a.clientActionNonce=c,wh("latencyActionInfo",a))}}else 0<=Fa(Nh,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function Xh(){var a=Yh();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
z(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ua,X);function Wh(){var a=Th().nonce;a||(a=Cg(),Th().nonce=a);return a}
function Yh(){return Th().tick}
function Uh(){var a=Th();"gel"in a||(a.gel={});return a.gel}
function Th(){var a;(a=w("ytcsi.data_"))||(a={tick:{},info:{}},B("ytcsi.data_",a));return a}
function Zh(){var a=Yh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Th().info.yt_pvis}
function Vh(){return!!S("csi_on_gel")||!!Th().useGel}
function $h(){Gh();if(!Vh()){var a=Yh(),b=Th().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&x(a[f])){var d=f.slice(1);if(d in Lh){var e=Ha(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}e=Q("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:Q("TIMING_ACTION",void 0)};d=Sh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+w("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=Xh();Zh()&&"youtube"==e&&(Sh(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var k in b)"_"!=k.charAt(0)&&(f[k]=b[k]);a.ps=O();k={};e=[];for(var l in a)"_"!=
l.charAt(0)&&(g=Math.round(a[l]-c),k[l]=g,e.push(l+"."+g));f.rt=e.join(",");(a=w("ytdebug.logTiming"))&&a(f,k);ai(f,!!b.ap);Eh(Kh,new Ih(k.aft+(d||0),void 0))}}
function ai(a,b){if(S("debug_csi_data")){var c=w("yt.timing.csiData");c||(c=[],u("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(d,e)||Qe(d,void 0,void 0,void 0,e)}catch(f){Qe(d,void 0,void 0,void 0,e)}}else Qe(d);B("yt.timing.pingSent_",!0)}
;function bi(a){K.call(this);this.b=a;this.b.subscribe("command",this.ka,this);this.g={};this.i=!1}
C(bi,K);h=bi.prototype;h.start=function(){this.i||this.f||(this.i=!0,ci(this.b,"RECEIVING"))};
h.ka=function(a,b,c){if(this.i&&!this.f){var d=b||{};switch(a){case "addEventListener":t(d.event)&&(a=d.event,a in this.g||(c=z(this.Ja,this,a),this.g[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":t(d.event)&&di(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=ei(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=fi(a,c))&&this.i&&!this.f&&ci(this.b,a,c))}}};
h.Ja=function(a,b){this.i&&!this.f&&ci(this.b,a,this.Z(a,b))};
h.Z=function(a,b){if(null!=b)return{value:b}};
function di(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
h.l=function(){var a=this.b;a.f||Md(a.b,"command",this.ka,this);this.b=null;for(var b in this.g)di(this,b);bi.A.l.call(this)};function gi(a,b){bi.call(this,b);this.h=a;this.start()}
C(gi,bi);gi.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
gi.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function ei(a,b){switch(a){case "loadVideoById":return b=th(b),vh(b),[b];case "cueVideoById":return b=th(b),vh(b),[b];case "loadVideoByPlayerVars":return vh(b),[b];case "cueVideoByPlayerVars":return vh(b),[b];case "loadPlaylist":return b=uh(b),vh(b),[b];case "cuePlaylist":return b=uh(b),vh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function fi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
gi.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return gi.A.Z.call(this,a,b)};
gi.prototype.l=function(){gi.A.l.call(this);delete this.h};function hi(a,b,c,d){K.call(this);this.g=b||null;this.w="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=z(this.B,this);window.addEventListener("message",this.m)}
n(hi,K);hi.prototype.B=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&t(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.w=a.origin);this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Fa(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
hi.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=nd(a);c.postMessage(d,this.w)}catch(e){R(e,"WARNING")}}};
hi.prototype.l=function(){window.removeEventListener("message",this.m);K.prototype.l.call(this)};function ii(a,b,c){hi.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(ii,hi);function ji(){var a=this.f=new ii(!!Q("WIDGET_ID_ENFORCE")),b=z(this.Ga,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
h=ji.prototype;h.Ga=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,ki(this,a)),this.i[a]=!0)):this.ma(a,b,c)};
h.ma=function(){};
function ki(a,b){return z(function(a){this.sendMessage(b,a)},a)}
h.addEventListener=function(){};
h.sa=function(){this.j=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");F(this.h,this.la,this);this.h=[]};
h.aa=function(){return null};
function li(a,b){a.sendMessage("infoDelivery",b)}
h.la=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
h.sendMessage=function(a,b){this.la({event:a,info:void 0==b?null:b})};
h.dispose=function(){this.f=null};function mi(a){ji.call(this);this.b=a;this.g=[];this.addEventListener("onReady",z(this.Fa,this));this.addEventListener("onVideoProgress",z(this.Na,this));this.addEventListener("onVolumeChange",z(this.Oa,this));this.addEventListener("onApiChange",z(this.Ia,this));this.addEventListener("onPlaybackQualityChange",z(this.Ka,this));this.addEventListener("onPlaybackRateChange",z(this.La,this));this.addEventListener("onStateChange",z(this.Ma,this));this.addEventListener("onWebglSettingsChanged",z(this.Pa,
this))}
C(mi,ji);h=mi.prototype;h.ma=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&rh(a)){var d=b;if(y(d[0])&&!x(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=th.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=sh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=uh.apply(window,d)}d=e}vh(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);rh(a)&&li(this,this.aa())}};
h.Fa=function(){var a=z(this.sa,this);this.f.b=a};
h.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
h.aa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ka(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=A()/1E3;return b};
h.Ma=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoUrl&&(a.videoUrl=
this.b.getVideoUrl());this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getPlaylist&&(a.playlist=this.b.getPlaylist());this.b.getPlaylistIndex&&(a.playlistIndex=this.b.getPlaylistIndex());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());li(this,a)};
h.Ka=function(a){li(this,{playbackQuality:a})};
h.La=function(a){li(this,{playbackRate:a})};
h.Ia=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
h.Oa=function(){li(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
h.Na=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());li(this,a)};
h.Pa=function(){var a={sphericalProperties:this.b.getSphericalProperties()};li(this,a)};
h.dispose=function(){mi.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function ni(a){a=void 0===a?!1:a;K.call(this);this.b=new M(a);Zc(this,Da($c,this.b))}
C(ni,K);ni.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
ni.prototype.i=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function oi(a,b,c){ni.call(this);this.g=a;this.h=b;this.j=c}
C(oi,ni);function ci(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(nd(a),d.h))}}
oi.prototype.l=function(){this.h=this.g=null;oi.A.l.call(this)};function pi(a,b,c){K.call(this);this.b=a;this.h=c;this.i=V(window,"message",z(this.j,this));this.g=new oi(this,a,b);Zc(this,Da($c,this.g))}
C(pi,K);pi.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,t(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.g,c.f||c.i("command",b.command,b.data,a.origin))}};
pi.prototype.l=function(){Uf(this.i);this.b=null;pi.A.l.call(this)};function qi(){var a=gb(ri),b;return Ad(new L(function(c,d){a.onSuccess=function(a){ue(a)?c(a):d(new si("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new si("Unknown request error","net.unknown",a))};
a.M=function(a){d(new si("Request timed out","net.timeout",a))};
b=He("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Bd&&b.abort();
return yd(a)})}
function si(a,b){E.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(si,E);function ti(){this.f=0;this.b=null}
ti.prototype.then=function(a,b,c){return 1===this.f&&a?(a=a.call(c,this.b),td(a)?a:ui(a)):2===this.f&&b?(a=b.call(c,this.b),td(a)?a:vi(a)):this};
ti.prototype.getValue=function(){return this.b};
ti.prototype.$goog_Thenable=!0;function vi(a){var b=new ti;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function ui(a){var b=new ti;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function wi(a){E.call(this,a.message||a.description||a.name);this.isMissing=a instanceof xi;this.isTimeout=a instanceof si&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Bd}
n(wi,E);wi.prototype.name="BiscottiError";function xi(){E.call(this,"Biscotti ID is missing from server")}
n(xi,E);xi.prototype.name="BiscottiMissingError";var ri={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},yi=null;function ke(){if("1"===ab(ie(),"args","privembed"))return yd(Error("Biscotti ID is not available in private embed mode"));yi||(yi=Ad(qi().then(zi),function(a){return Ai(2,a)}));
return yi}
function zi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new xi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new xi;a=a.id;le(a);yi=ui(a);Bi(18E5,2);return a}
function Ai(a,b){var c=new wi(b);le("");yi=vi(c);0<a&&Bi(12E4,a-1);throw c;}
function Bi(a,b){T(function(){Ad(qi().then(zi,function(a){return Ai(b,a)}),ua)},a)}
function Ci(){try{var a=w("yt.ads.biscotti.getId_");return a?a():ke()}catch(b){return yd(b)}}
;function Di(a){if("1"!==ab(ie(),"args","privembed")){a&&je();try{Ci().then(function(a){a=me(a);a.bsq=Ei++;Ne("//www.youtube.com/ad_data_204",{wa:!1,C:a,withCredentials:!0})},function(){}),T(Di,18E5)}catch(b){R(b)}}}
var Ei=0;var Z=w("ytglobal.prefsUserPrefsPrefs_")||{};u("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Fi(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Ab.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
h=Fi.prototype;h.get=function(a,b){Gi(a);Hi(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){Gi(a);Hi(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
h.remove=function(a){Gi(a);Hi(a);delete Z[a]};
h.save=function(){ug(this.b,this.dump(),63072E3)};
h.clear=function(){for(var a in Z)delete Z[a]};
h.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Hi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Gi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ii(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
va(Fi);var Ji=null,Ki=null,Li=null,Mi={};function Ni(a){var b=a.id;a=a.ve_type;var c=Gg++;a=new Eg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Mi[b]=a;b=Lg();c=Kg();b&&c&&Og(b,c,[a])}
function Oi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Mg(b,a),a=Kg()))for(var c in Mi){var d=Mi[c];d&&Og(b,a,[d])}}
function Pi(a){Mi[a.id]=new Eg({trackingParams:a.tracking_params})}
function Qi(a){var b=Lg();a=Mi[a.id];b&&a&&rg("visualElementGestured",{csn:b,ve:Fg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},Ag)}
function Ri(a){a=a.ids;var b=Lg();if(b)for(var c=0;c<a.length;c++){var d=Mi[a[c]];d&&rg("visualElementShown",{csn:b,ve:Fg(d),eventType:1},Ag)}}
function Si(){var a=Ji;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;u("yt.setConfig",P,void 0);u("yt.config.set",P,void 0);u("yt.setMsg",We,void 0);u("yt.msgs.set",We,void 0);u("yt.logging.errors.log",Ue,void 0);
u("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Di(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&vh(a.args);Ji=a=mh(a);a.addEventListener("onScreenChanged",Oi);a.addEventListener("onLogClientVeCreated",Ni);a.addEventListener("onLogServerVeCreated",Pi);a.addEventListener("onLogVeClicked",
Qi);a.addEventListener("onLogVesShown",Ri);a.addEventListener("onReady",Si);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Li=new mi(a):Q("ENABLE_POST_API")&&t(b)&&t(c)&&(Ki=new pi(window.parent,b,c),Li=new gi(a,Ki.g));c=he("BG_P");Kf(c)&&(Q("BG_I")||Q("BG_IU"))&&(Gf=!0,Ff.initialize(Q("BG_I",null),Q("BG_IU",null),c,Jf,void 0));Bf()},void 0);
u("yt.www.watch.ads.restrictioncookie.spr",function(a){Qe(a+"mac_204?action_fcts=1");return!0},void 0);
var Ti=qe(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Yh();var b=O();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=Fh();if(b=a.ol)yf(b),a.ol=0;Uh().tick_ol=void 0;O();Vh()?(a=Wh(),zh("tick_ol_"+a)||wh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},void 0),a=!0):a=!1;if(a=!a)a=!w("yt.timing.pingSent_");if(a&&(b=Q("TIMING_ACTION",void 0),a=Yh(),w("ytglobal.timingready_")&&b&&a._start&&(b=Xh()))){Rh||(Eh(Jh,new Hh(Math.round(b-a._start),void 0)),
Rh=!0);b=!0;var c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&$h()}a=Fi.getInstance();c=!!((Ii("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&cd(document.body,"exp-invert-logo")&&(b&&!cd(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):cd(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&cd(document.body,"inverted-hdpi")&&dd());
c!=b&&(c="f"+(Math.floor(119/31)+1),d=Ii(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:Z[c]=d.toString(16).toString(),a.save())}),Ui=qe(function(){var a=Ji;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Ff.dispose();a=0;for(var b=zf.length;a<b;a++)yf(zf[a]);zf.length=0;sf("//static.doubleclick.net/instream/ad_status.js");Af=!1;P("DCLKSTAT",0);ad(Li,Ki);if(a=Ji)a.removeEventListener("onScreenChanged",Oi),a.removeEventListener("onLogClientVeCreated",Ni),a.removeEventListener("onLogServerVeCreated",Pi),a.removeEventListener("onLogVeClicked",Qi),a.removeEventListener("onLogVesShown",Ri),a.removeEventListener("onReady",Si),a.destroy();Mi=
{}});
window.addEventListener?(window.addEventListener("load",Ti),window.addEventListener("unload",Ui)):window.attachEvent&&(window.attachEvent("onload",Ti),window.attachEvent("onunload",Ui));B("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||Lf);B("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||Mf);B("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||Cf);B("yt.player.exports.navigate",w("yt.player.exports.navigate")||Ng);
B("yt.util.activity.init",w("yt.util.activity.init")||Xf);B("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||$f);B("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||Yf);}).call(this);
