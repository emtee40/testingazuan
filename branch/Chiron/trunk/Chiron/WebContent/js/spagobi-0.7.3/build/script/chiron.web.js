if(!window.qxsettings)qxsettings={};
if(qxsettings["qx.resourceUri"]==undefined)qxsettings["qx.resourceUri"]="../js/spagobi/build/resource/qx";
if(qxsettings["spagobi.resourceUri"]==undefined)qxsettings["spagobi.resourceUri"]="..";
if(qxsettings["qx.theme"]==undefined)qxsettings["qx.theme"]="qx.theme.ClassicRoyale";
if(qxsettings["qx.minLogLevel"]==undefined)qxsettings["qx.minLogLevel"]=200;
if(qxsettings["qx.logAppender"]==undefined)qxsettings["qx.logAppender"]="qx.log.appender.Native";
if(qxsettings["qx.application"]==undefined)qxsettings["qx.application"]="spagobi.app.Chiron";
if(qxsettings["qx.version"]==undefined)qxsettings["qx.version"]="0.7.3 ";
if(qxsettings["qx.isSource"]==undefined)qxsettings["qx.isSource"]=false;
if(!window.qxvariants)qxvariants={};
qxvariants["qx.deprecationWarnings"]="off";
qxvariants["qx.debug"]="off";
qxvariants["qx.compatibility"]="on";
qxvariants["qx.aspects"]="off";



/* ID: qx.core.Bootstrap */
qx={Class:{createNamespace:function($0,
$1){var $2=$0.split(".");
var $3=window;
var $4=$2[0];
for(var $5=0,
$6=$2.length-1;$5<$6;$5++,
$4=$2[$5]){if(!$3[$4]){$3=$3[$4]={};
}else{$3=$3[$4];
}}$3[$4]=$1;
return $4;
},
define:function($0,
$1){if(!$1){var $1={statics:{}};
}this.createNamespace($0,
$1.statics);
if($1.defer){$1.defer($1.statics);
}qx.core.Bootstrap.__registry[$0]=$1.statics;
}}};
qx.Class.define("qx.core.Bootstrap",
{statics:{LOADSTART:new Date,
time:function(){return new Date().getTime();
},
since:function(){return this.time()-this.LOADSTART;
},
__registry:{}}});




/* ID: qx.lang.Core */
qx.Class.define("qx.lang.Core");
if(!Error.prototype.toString||Error.prototype.toString()=="[object Error]"){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function($0,
$1){if($1==null){$1=0;
}else if($1<0){$1=Math.max(0,
this.length+$1);
}
for(var $2=$1;$2<this.length;$2++){if(this[$2]===$0){return $2;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function($0,
$1){if($1==null){$1=this.length-1;
}else if($1<0){$1=Math.max(0,
this.length+$1);
}
for(var $2=$1;$2>=0;$2--){if(this[$2]===$0){return $2;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function($0,
$1){var $2=this.length;
for(var $3=0;$3<$2;$3++){$0.call($1,
this[$3],
$3,
this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function($0,
$1){var $2=this.length;
var $3=[];
for(var $4=0;$4<$2;$4++){if($0.call($1,
this[$4],
$4,
this)){$3.push(this[$4]);
}}return $3;
};
}
if(!Array.prototype.map){Array.prototype.map=function($0,
$1){var $2=this.length;
var $3=[];
for(var $4=0;$4<$2;$4++){$3.push($0.call($1,
this[$4],
$4,
this));
}return $3;
};
}
if(!Array.prototype.some){Array.prototype.some=function($0,
$1){var $2=this.length;
for(var $3=0;$3<$2;$3++){if($0.call($1,
this[$3],
$3,
this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function($0,
$1){var $2=this.length;
for(var $3=0;$3<$2;$3++){if(!$0.call($1,
this[$3],
$3,
this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return '"'+this.replace(/\\/g,
"\\\\").replace(/\"/g,
"\\\"")+'"';
};
}




/* ID: qx.lang.Generics */
qx.Class.define("qx.lang.Generics",
{statics:{__map:{"Array":["join",
"reverse",
"sort",
"push",
"pop",
"shift",
"unshift",
"splice",
"concat",
"slice",
"indexOf",
"lastIndexOf",
"forEach",
"map",
"filter",
"some",
"every"],
"String":["quote",
"substring",
"toLowerCase",
"toUpperCase",
"charAt",
"charCodeAt",
"indexOf",
"lastIndexOf",
"toLocaleLowerCase",
"toLocaleUpperCase",
"localeCompare",
"match",
"search",
"replace",
"split",
"substr",
"concat",
"slice"]},
__wrap:function($0,
$1){return function($2){return $0.prototype[$1].apply($2,
Array.prototype.slice.call(arguments,
1));
};
},
__init:function(){var $0=qx.lang.Generics.__map;
for(var $1 in $0){var $2=window[$1];
var $3=$0[$1];
for(var $4=0,
$5=$3.length;$4<$5;$4++){var $6=$3[$4];
if(!$2[$6]){$2[$6]=qx.lang.Generics.__wrap($2,
$6);
}}}}},
defer:function($0){$0.__init();
}});




/* ID: qx.core.Setting */
qx.Class.define("qx.core.Setting",
{statics:{__settings:{},
define:function($0,
$1){if($1===undefined){throw new Error('Default value of setting "'+$0+'" must be defined!');
}
if(!this.__settings[$0]){this.__settings[$0]={};
}else if(this.__settings[$0].defaultValue!==undefined){throw new Error('Setting "'+$0+'" is already defined!');
}this.__settings[$0].defaultValue=$1;
},
get:function($0){var $1=this.__settings[$0];
if($1===undefined){throw new Error('Setting "'+$0+'" is not defined.');
}
if($1.value!==undefined){return $1.value;
}return $1.defaultValue;
},
__init:function(){if(window.qxsettings){for(var $0 in qxsettings){if(($0.split(".")).length<2){throw new Error('Malformed settings key "'+$0+'". Must be following the schema "namespace.key".');
}
if(!this.__settings[$0]){this.__settings[$0]={};
}this.__settings[$0].value=qxsettings[$0];
}window.qxsettings=undefined;
try{delete window.qxsettings;
}catch(ex){}this.__loadUrlSettings();
}},
__loadUrlSettings:function(){if(this.get("qx.allowUrlSettings")!=true){return;
}var $0=document.location.search.slice(1).split("&");
for(var $1=0;$1<$0.length;$1++){var $2=$0[$1].split(":");
if($2.length!=3||$2[0]!="qxsetting"){continue;
}var $3=$2[1];
if(!this.__settings[$3]){this.__settings[$3]={};
}this.__settings[$3].value=decodeURIComponent($2[2]);
}}},
defer:function($0){$0.define("qx.allowUrlSettings",
false);
$0.define("qx.allowUrlVariants",
false);
$0.define("qx.resourceUri",
"./resource");
$0.define("qx.isSource",
true);
$0.__init();
}});




/* ID: qx.lang.Array */
qx.Class.define("qx.lang.Array",
{statics:{fromArguments:function($0){return Array.prototype.slice.call($0,
0);
},
fromCollection:function($0){return Array.prototype.slice.call($0,
0);
},
fromShortHand:function($0){var $1=$0.length;
if($1>4||$1==0){this.error("Invalid number of arguments!");
}var $2=qx.lang.Array.copy($0);
switch($1){case 1:$2[1]=$2[2]=$2[3]=$2[0];
break;
case 2:$2[2]=$2[0];
case 3:$2[3]=$2[1];
}return $2;
},
copy:function($0){return $0.concat();
},
clone:function($0){return $0.concat();
},
getLast:function($0){return $0[$0.length-1];
},
getFirst:function($0){return $0[0];
},
insertAt:function($0,
$1,
$2){$0.splice($2,
0,
$1);
return $0;
},
insertBefore:function($0,
$1,
$2){var $3=$0.indexOf($2);
if($3==-1){$0.push($1);
}else{$0.splice($3,
0,
$1);
}return $0;
},
insertAfter:function($0,
$1,
$2){var $3=$0.indexOf($2);
if($3==-1||$3==($0.length-1)){$0.push($1);
}else{$0.splice($3+1,
0,
$1);
}return $0;
},
removeAt:function($0,
$1){return $0.splice($1,
1)[0];
},
removeAll:function($0){return $0.length=0;
},
append:function($0,
$1){{};
Array.prototype.push.apply($0,
$1);
return $0;
},
remove:function($0,
$1){var $2=$0.indexOf($1);
if($2!=-1){$0.splice($2,
1);
return $1;
}},
contains:function($0,
$1){return $0.indexOf($1)!=-1;
},
equals:function($0,
$1){if($0.length!==$1.length){return false;
}
for(var $2=0,
$3=$0.length;$2<$3;$2++){if($0[$2]!==$1[$2]){return false;
}}return true;
}}});




/* ID: qx.core.Variant */
qx.Class.define("qx.core.Variant",
{statics:{__variants:{},
__cache:{},
compilerIsSet:function(){return true;
},
define:function($0,
$1,
$2){{};
if(!this.__variants[$0]){this.__variants[$0]={};
}else{}this.__variants[$0].allowedValues=$1;
this.__variants[$0].defaultValue=$2;
},
get:function($0){var $1=this.__variants[$0];
{};
if($1.value!==undefined){return $1.value;
}return $1.defaultValue;
},
__init:function(){if(window.qxvariants){for(var $0 in qxvariants){{};
if(!this.__variants[$0]){this.__variants[$0]={};
}this.__variants[$0].value=qxvariants[$0];
}window.qxvariants=undefined;
try{delete window.qxvariants;
}catch(ex){}this.__loadUrlVariants(this.__variants);
}},
__loadUrlVariants:function(){if(qx.core.Setting.get("qx.allowUrlVariants")!=true){return;
}var $0=document.location.search.slice(1).split("&");
for(var $1=0;$1<$0.length;$1++){var $2=$0[$1].split(":");
if($2.length!=3||$2[0]!="qxvariant"){continue;
}var $3=$2[1];
if(!this.__variants[$3]){this.__variants[$3]={};
}this.__variants[$3].value=decodeURIComponent($2[2]);
}},
select:function($0,
$1){{};
for(var $2 in $1){if(this.isSet($0,
$2)){return $1[$2];
}}
if($1["default"]!==undefined){return $1["default"];
}{};
},
isSet:function($0,
$1){var $2=$0+"$"+$1;
if(this.__cache[$2]!==undefined){return this.__cache[$2];
}var $3=false;
if($1.indexOf("|")<0){$3=this.get($0)===$1;
}else{var $4=$1.split("|");
for(var $5=0,
$6=$4.length;$5<$6;$5++){if(this.get($0)===$4[$5]){$3=true;
break;
}}}this.__cache[$2]=$3;
return $3;
},
__isValidArray:function($0){return typeof $0==="object"&&$0!==null&&$0 instanceof Array;
},
__isValidObject:function($0){return typeof $0==="object"&&$0!==null&&!($0 instanceof Array);
},
__arrayContains:function($0,
$1){for(var $2=0,
$3=$0.length;$2<$3;$2++){if($0[$2]==$1){return true;
}}return false;
}},
defer:function($0){$0.define("qx.debug",
["on",
"off"],
"on");
$0.define("qx.compatibility",
["on",
"off"],
"on");
$0.define("qx.eventMonitorNoListeners",
["on",
"off"],
"off");
$0.define("qx.aspects",
["on",
"off"],
"off");
$0.define("qx.deprecationWarnings",
["on",
"off"],
"on");
$0.__init();
}});




/* ID: qx.core.Aspect */
qx.Class.define("qx.core.Aspect",
{statics:{__registry:[],
wrap:function($0,
$1,
$2){if(!qx.core.Setting.get("qx.enableAspect")){return $1;
}var $3=[];
var $4=[];
for(var $5=0;$5<this.__registry.length;$5++){var $6=this.__registry[$5];
if($0.match($6.re)&&($2==$6.type||$6.type=="*")){var $7=$6.pos;
if($7=="before"){$3.push($6.fcn);
}else{$4.push($6.fcn);
}}}
if($3.length==0&&$4.length==0){return $1;
}var $8=function(){for(var $5=0;$5<$3.length;$5++){$3[$5].call(this,
$0,
$1,
$2,
arguments);
}var $9=$1.apply(this,
arguments);
for(var $5=0;$5<$4.length;$5++){$4[$5].call(this,
$0,
$1,
$2,
arguments,
$9);
}return $9;
};
if($2!="static"){$8.self=$1.self;
$8.base=$1.base;
}$1.wrapper=$8;
return $8;
},
addAdvice:function($0,
$1,
$2,
$3){if($0!="before"&&$0!="after"){throw new Error("Unknown position: '"+$0+"'");
}this.__registry.push({pos:$0,
type:$1,
re:$2,
fcn:$3});
}},
defer:function(){qx.core.Setting.define("qx.enableAspect",
false);
}});




/* ID: qx.core.Client */
qx.Class.define("qx.core.Client",
{statics:{__init:function(){var $0=window.location.protocol==="file:";
var $1=navigator.userAgent;
var $2=navigator.vendor;
var $3=navigator.product;
var $4=navigator.platform;
var $5=false;
var $6;
var $7=null;
var $8=null;
var $9=0;
var $a=0;
var $b=0;
var $c=0;
var $d=null;
var $e=null;
var $f;
if(window.opera&&/Opera[\s\/]([0-9\.]*)/.test($1)){$7="opera";
$8=RegExp.$1;
$6="opera";
$8=$8.substring(0,
3)+"."+$8.substring(3);
$d=$1.indexOf("MSIE")!==-1?"mshtml":$1.indexOf("Mozilla")!==-1?"gecko":null;
}else if(typeof $2==="string"&&$2==="KDE"&&/KHTML\/([0-9-\.]*)/.test($1)){$7="khtml";
$6="konqueror";
$8=RegExp.$1;
}else if($1.indexOf("AppleWebKit")!=-1&&/AppleWebKit\/([^ ]+)/.test($1)){$7="webkit";
$8=RegExp.$1;
$e=$8.indexOf("+")!=-1;
var $g=RegExp("[^\\.0-9]").exec($8);
if($g){$8=$8.slice(0,
$g.index);
}
if($1.indexOf("Safari")!=-1){$6="safari";
}else if($1.indexOf("OmniWeb")!=-1){$6="omniweb";
}else if($1.indexOf("Shiira")!=-1){$6="shiira";
}else if($1.indexOf("NetNewsWire")!=-1){$6="netnewswire";
}else if($1.indexOf("RealPlayer")!=-1){$6="realplayer";
}else{$6="other webkit";
}
if($e){$6+=" (nightly)";
}}else if(window.controllers&&typeof $3==="string"&&$3==="Gecko"&&/rv\:([^\);]+)(\)|;)/.test($1)){$7="gecko";
$8=RegExp.$1;
if($1.indexOf("Firefox")!=-1){$6="firefox";
}else if($1.indexOf("Camino")!=-1){$6="camino";
}else if($1.indexOf("Galeon")!=-1){$6="galeon";
}else{$6="other gecko";
}}else if(/MSIE\s+([^\);]+)(\)|;)/.test($1)){$7="mshtml";
$8=RegExp.$1;
$6="explorer";
$5=!window.external;
}
if($8){$f=$8.split(".");
$9=$f[0]||0;
$a=$f[1]||0;
$b=$f[2]||0;
$c=$f[3]||0;
}var $h=[];
switch($7){case "gecko":$h.push("-moz-box-sizing");
break;
case "khtml":$h.push("-khtml-box-sizing");
break;
case "webkit":$h.push("-khtml-box-sizing");
$h.push("-webkit-box-sizing");
break;
case "mshtml":break;
default:break;
}$h.push("box-sizing");
var $i=document.compatMode!=="CSS1Compat";
var $j="en";
var $k=($7=="mshtml"?navigator.userLanguage:navigator.language).toLowerCase();
var $l=null;
var $m=$k.indexOf("-");
if($m!=-1){$l=$k.substr($m+1);
$k=$k.substr(0,
$m);
}var $n="none";
var $o=false;
var $p=false;
var $q=false;
var $r=false;
if($4.indexOf("Windows")!=-1||$4.indexOf("Win32")!=-1||$4.indexOf("Win64")!=-1){$o=true;
$n="win";
}else if($4.indexOf("Macintosh")!=-1||$4.indexOf("MacPPC")!=-1||$4.indexOf("MacIntel")!=-1){$p=true;
$n="mac";
}else if($4.indexOf("X11")!=-1||$4.indexOf("Linux")!=-1||$4.indexOf("BSD")!=-1){$q=true;
$n="unix";
}else{$r=true;
$n="other";
}var $s=false;
var $t=false;
var $u=false;
var $v=false;
if($7=="mshtml"){$s=true;
}if(document.implementation&&document.implementation.hasFeature){if(document.implementation.hasFeature("org.w3c.dom.svg",
"1.0")){$t=$u=true;
}}this._runsLocally=$0;
this._engineName=$7;
this._engineNameMshtml=$7==="mshtml";
this._engineNameGecko=$7==="gecko";
this._engineNameOpera=$7==="opera";
this._engineNameKhtml=$7==="khtml";
this._engineNameWebkit=$7==="webkit";
this._engineVersion=parseFloat($8);
this._engineVersionMajor=parseInt($9);
this._engineVersionMinor=parseInt($a);
this._engineVersionRevision=parseInt($b);
this._engineVersionBuild=parseInt($c);
this._engineQuirksMode=$i;
this._engineBoxSizingAttributes=$h;
this._engineEmulation=$d;
this._browserName=$6;
this._defaultLocale=$j;
this._browserPlatform=$n;
this._browserPlatformWindows=$o;
this._browserPlatformMacintosh=$p;
this._browserPlatformUnix=$q;
this._browserPlatformOther=$r;
this._browserModeHta=$5;
this._browserLocale=$k;
this._browserLocaleVariant=$l;
this._gfxVml=$s;
this._gfxSvg=$t;
this._gfxSvgBuiltin=$u;
this._gfxSvgPlugin=$v;
this._fireBugActive=(window.console&&console.log&&console.debug&&console.assert);
this._supportsTextContent=(document.documentElement.textContent!==undefined);
this._supportsInnerText=(document.documentElement.innerText!==undefined);
this._supportsXPath=!!document.evaluate;
this._supportsElementExtensions=!!window.HTMLElement;
},
getRunsLocally:function(){return this._runsLocally;
},
getEngine:function(){return this._engineName;
},
getBrowser:function(){return this._browserName;
},
getVersion:function(){return this._engineVersion;
},
getMajor:function(){return this._engineVersionMajor;
},
getMinor:function(){return this._engineVersionMinor;
},
getRevision:function(){return this._engineVersionRevision;
},
getBuild:function(){return this._engineVersionBuild;
},
getEmulation:function(){return this._engineEmulation;
},
isMshtml:function(){return this._engineNameMshtml;
},
isGecko:function(){return this._engineNameGecko;
},
isOpera:function(){return this._engineNameOpera;
},
isKhtml:function(){return this._engineNameKhtml;
},
isWebkit:function(){return this._engineNameWebkit;
},
isSafari2:function(){return this._engineNameWebkit&&(this._engineVersion<420);
},
isInQuirksMode:function(){return this._engineQuirksMode;
},
getLocale:function(){return this._browserLocale;
},
getLocaleVariant:function(){return this._browserLocaleVariant;
},
getDefaultLocale:function(){return this._defaultLocale;
},
usesDefaultLocale:function(){return this._browserLocale===this._defaultLocale;
},
getEngineBoxSizingAttributes:function(){return this._engineBoxSizingAttributes;
},
getPlatform:function(){return this._browserPlatform;
},
runsOnWindows:function(){return this._browserPlatformWindows;
},
runsOnMacintosh:function(){return this._browserPlatformMacintosh;
},
runsOnUnix:function(){return this._browserPlatformUnix;
},
supportsVml:function(){return this._gfxVml;
},
supportsSvg:function(){return this._gfxSvg;
},
usesSvgBuiltin:function(){return this._gfxSvgBuiltin;
},
usesSvgPlugin:function(){return this._gfxSvgPlugin;
},
isFireBugActive:function(){return this._fireBugActive;
},
supportsTextContent:function(){return this._supportsTextContent;
},
supportsInnerText:function(){return this._supportsInnerText;
},
getInstance:function(){return this;
}},
defer:function($0,
$1,
$2){$0.__init();
qx.core.Variant.define("qx.client",
["gecko",
"mshtml",
"opera",
"webkit",
"khtml"],
qx.core.Client.getInstance().getEngine());
}});




/* ID: qx.lang.Object */
qx.Class.define("qx.lang.Object",
{statics:{isEmpty:function($0){for(var $1 in $0){return false;
}return true;
},
hasMinLength:function($0,
$1){var $2=0;
for(var $3 in $0){if((++$2)>=$1){return true;
}}return false;
},
getLength:function($0){var $1=0;
for(var $2 in $0){$1++;
}return $1;
},
_shadowedKeys:["isPrototypeOf",
"hasOwnProperty",
"toLocaleString",
"toString",
"valueOf"],
getKeys:qx.core.Variant.select("qx.client",
{"mshtml":function($0){var $1=[];
for(var $2 in $0){$1.push($2);
}for(var $3=0,
$4=this._shadowedKeys,
$5=$4.length;$3<$5;$3++){if($0.hasOwnProperty($4[$3])){$1.push($4[$3]);
}}return $1;
},
"default":function($0){var $1=[];
for(var $2 in $0){$1.push($2);
}return $1;
}}),
getKeysAsString:function($0){var $1=qx.lang.Object.getKeys($0);
if($1.length==0){return "";
}return '"'+$1.join('\", "')+'"';
},
getValues:function($0){var $1=[];
for(var $2 in $0){$1.push($0[$2]);
}return $1;
},
mergeWith:function($0,
$1,
$2){if($2===undefined){$2=true;
}
for(var $3 in $1){if($2||$0[$3]===undefined){$0[$3]=$1[$3];
}}return $0;
},
carefullyMergeWith:function($0,
$1){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.lang.Object.mergeWith($0,
$1,
false);
},
merge:function($0,
$1){var $2=arguments.length;
for(var $3=1;$3<$2;$3++){qx.lang.Object.mergeWith($0,
arguments[$3]);
}return $0;
},
copy:function($0){var $1={};
for(var $2 in $0){$1[$2]=$0[$2];
}return $1;
},
invert:function($0){var $1={};
for(var $2 in $0){$1[$0[$2].toString()]=$2;
}return $1;
},
getKeyFromValue:function($0,
$1){for(var $2 in $0){if($0[$2]===$1){return $2;
}}return null;
},
select:function($0,
$1){return $1[$0];
},
fromArray:function($0){var $1={};
for(var $2=0,
$3=$0.length;$2<$3;$2++){{};
$1[$0[$2].toString()]=true;
}return $1;
}}});




/* ID: qx.Class */
qx.Class.define("qx.Class",
{statics:{define:function($0,
$1){if(!$1){var $1={};
}if($1.include&&!($1.include instanceof Array)){$1.include=[$1.include];
}if($1.implement&&!($1.implement instanceof Array)){$1.implement=[$1.implement];
}if(!$1.hasOwnProperty("extend")&&!$1.type){$1.type="static";
}{};
var $2=this.__createClass($0,
$1.type,
$1.extend,
$1.statics,
$1.construct,
$1.destruct);
if($1.extend){if($1.properties){this.__addProperties($2,
$1.properties,
true);
}if($1.members){this.__addMembers($2,
$1.members,
true,
true);
}if($1.events){this.__addEvents($2,
$1.events,
true);
}if($1.include){for(var $3=0,
$4=$1.include.length;$3<$4;$3++){this.__addMixin($2,
$1.include[$3],
false);
}}}if($1.settings){for(var $5 in $1.settings){qx.core.Setting.define($5,
$1.settings[$5]);
}}if($1.variants){for(var $5 in $1.variants){qx.core.Variant.define($5,
$1.variants[$5].allowedValues,
$1.variants[$5].defaultValue);
}}if($1.defer){$1.defer.self=$2;
$1.defer($2,
$2.prototype,
{add:function($0,
$1){var $6={};
$6[$0]=$1;
qx.Class.__addProperties($2,
$6,
true);
}});
}if($1.implement){for(var $3=0,
$4=$1.implement.length;$3<$4;$3++){this.__addInterface($2,
$1.implement[$3]);
}}},
createNamespace:function($0,
$1){var $2=$0.split(".");
var $3=window;
var $4=$2[0];
for(var $5=0,
$6=$2.length-1;$5<$6;$5++,
$4=$2[$5]){if(!$3[$4]){$3=$3[$4]={};
}else{$3=$3[$4];
}}{};
$3[$4]=$1;
return $4;
},
isDefined:function($0){return this.getByName($0)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
getByName:function($0){return this.__registry[$0];
},
include:function($0,
$1){{};
qx.Class.__addMixin($0,
$1,
false);
},
patch:function($0,
$1){{};
qx.Class.__addMixin($0,
$1,
true);
},
isSubClassOf:function($0,
$1){if(!$0){return false;
}
if($0==$1){return true;
}
if($0.prototype instanceof $1){return true;
}return false;
},
getPropertyDefinition:function($0,
$1){while($0){if($0.$$properties&&$0.$$properties[$1]){return $0.$$properties[$1];
}$0=$0.superclass;
}return null;
},
getByProperty:function($0,
$1){while($0){if($0.$$properties&&$0.$$properties[$1]){return $0;
}$0=$0.superclass;
}return null;
},
hasProperty:function($0,
$1){return !!this.getPropertyDefinition($0,
$1);
},
getEventType:function($0,
$1){var $0=$0.constructor;
while($0.superclass){if($0.$$events&&$0.$$events[$1]!==undefined){return $0.$$events[$1];
}$0=$0.superclass;
}return null;
},
supportsEvent:function($0,
$1){return !!this.getEventType($0,
$1);
},
hasOwnMixin:function($0,
$1){return $0.$$includes&&$0.$$includes.indexOf($1)!==-1;
},
getByMixin:function($0,
$1){var $2,
$3,
$4;
while($0){if($0.$$includes){$2=$0.$$flatIncludes;
for($3=0,
$4=$2.length;$3<$4;$3++){if($2[$3]===$1){return $0;
}}}$0=$0.superclass;
}return null;
},
getMixins:function($0){var $1=[];
while($0){if($0.$$includes){$1.push.apply($1,
$0.$$flatIncludes);
}$0=$0.superclass;
}return $1;
},
hasMixin:function($0,
$1){return !!this.getByMixin($0,
$1);
},
hasOwnInterface:function($0,
$1){return $0.$$implements&&$0.$$implements.indexOf($1)!==-1;
},
getByInterface:function($0,
$1){var $2,
$3,
$4;
while($0){if($0.$$implements){$2=$0.$$flatImplements;
for($3=0,
$4=$2.length;$3<$4;$3++){if($2[$3]===$1){return $0;
}}}$0=$0.superclass;
}return null;
},
getInterfaces:function($0){var $1=[];
while($0){if($0.$$implements){$1.push.apply($1,
$0.$$flatImplements);
}$0=$0.superclass;
}return $1;
},
hasInterface:function($0,
$1){return !!this.getByInterface($0,
$1);
},
implementsInterface:function($0,
$1){if(this.hasInterface($0,
$1)){return true;
}
try{qx.Interface.assert($0,
$1,
false);
return true;
}catch(ex){}return false;
},
getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},
genericToString:function(){return "[Class "+this.classname+"]";
},
__registry:qx.core.Bootstrap.__registry,
__allowedKeys:null,
__staticAllowedKeys:null,
__validateConfig:function(){},
__createClass:function($0,
$1,
$2,
$3,
$4,
$5){var $6;
if(!$2&&true){$6=$3||{};
}else{$6={};
if($2){if(!$4){$4=this.__createDefaultConstructor();
}$6=this.__wrapConstructor($4,
$0,
$1);
}if($3){var $7;
for(var $8=0,
$9=qx.lang.Object.getKeys($3),
$a=$9.length;$8<$a;$8++){$7=$9[$8];
{$6[$7]=$3[$7];
};
var $b;
}}}var $c=this.createNamespace($0,
$6,
false);
$6.name=$6.classname=$0;
$6.basename=$c;
if(!$6.hasOwnProperty("toString")){$6.toString=this.genericToString;
}
if($2){var $d=$2.prototype;
var $e=this.__createEmptyFunction();
$e.prototype=$d;
var $f=new $e;
$6.prototype=$f;
$f.name=$f.classname=$0;
$f.basename=$c;
$4.base=$6.superclass=$2;
$4.self=$6.constructor=$f.constructor=$6;
if($5){{};
$6.$$destructor=$5;
}}{qx.Clazz=$6;
qx.Proto=$f||null;
qx.Super=$2||null;
};
this.__registry[$0]=$6;
return $6;
},
__addEvents:function($0,
$1,
$2){var $3,
$3;
if($0.$$events){for(var $3 in $1){$0.$$events[$3]=$1[$3];
}}else{$0.$$events=$1;
}},
__addProperties:function($0,
$1,
$2){var $3;
if($2===undefined){$2=false;
}var $4=!!$0.$$propertiesAttached;
for(var $5 in $1){$3=$1[$5];
{};
$3.name=$5;
if(!$3.refine){if($0.$$properties===undefined){$0.$$properties={};
}$0.$$properties[$5]=$3;
}if($3.init!==undefined){$0.prototype["__init$"+$5]=$3.init;
}if($3.event!==undefined){var $6={};
$6[$3.event]="qx.event.type.ChangeEvent";
this.__addEvents($0,
$6,
$2);
}if($3.inheritable){qx.core.Property.$$inheritable[$5]=true;
}if($4){qx.core.Property.attachMethods($0,
$5,
$3);
}if($3._fast){qx.core.LegacyProperty.addFastProperty($3,
$0.prototype);
}else if($3._cached){qx.core.LegacyProperty.addCachedProperty($3,
$0.prototype);
}else if($3._legacy){qx.core.LegacyProperty.addProperty($3,
$0.prototype);
}}},
__validateProperty:null,
__addMembers:function($0,
$1,
$2,
$3){var $4=$0.prototype;
var $5,
$6;
for(var $7=0,
$8=qx.lang.Object.getKeys($1),
$9=$8.length;$7<$9;$7++){$5=$8[$7];
$6=$1[$5];
{};
if($3!==false&&$6 instanceof Function){if($4[$5]){$6.base=$4[$5];
}$6.self=$0;
{};
}$4[$5]=$6;
}},
__addInterface:function($0,
$1){{};
var $2=qx.Interface.flatten([$1]);
if($0.$$implements){$0.$$implements.push($1);
$0.$$flatImplements.push.apply($0.$$flatImplements,
$2);
}else{$0.$$implements=[$1];
$0.$$flatImplements=$2;
}},
__addMixin:function($0,
$1,
$2){{};
var $3=qx.Mixin.flatten([$1]);
var $4;
for(var $5=0,
$6=$3.length;$5<$6;$5++){$4=$3[$5];
if($4.$$events){this.__addEvents($0,
$4.$$events,
$2);
}if($4.$$properties){this.__addProperties($0,
$4.$$properties,
$2);
}if($4.$$members){this.__addMembers($0,
$4.$$members,
$2,
false);
}}if($0.$$includes){$0.$$includes.push($1);
$0.$$flatIncludes.push.apply($0.$$flatIncludes,
$3);
}else{$0.$$includes=[$1];
$0.$$flatIncludes=$3;
}},
__createDefaultConstructor:function(){function $0(){arguments.callee.base.apply(this,
arguments);
}return $0;
},
__createEmptyFunction:function(){return function(){};
},
__wrapConstructor:function($0,
$1,
$2){var $3=[];
$3.push('var clazz=arguments.callee.constructor;');
{};
$3.push('if(!clazz.$$propertiesAttached)qx.core.Property.attach(clazz);');
$3.push('var retval=clazz.$$original.apply(this,arguments);');
$3.push('if(clazz.$$includes){var mixins=clazz.$$flatIncludes;');
$3.push('for(var i=0,l=mixins.length;i<l;i++){');
$3.push('if(mixins[i].$$constructor){mixins[i].$$constructor.apply(this,arguments);}}}');
$3.push('if(this.classname===',
$1,
'.classname)this.$$initialized=true;');
$3.push('return retval;');
var $4=new Function($3.join(""));
var $5;
if($2==="singleton"){$4.getInstance=this.getInstance;
}$4.$$original=$0;
$0.wrapper=$4;
return $4;
}},
defer:function($0){var $1;
}});




/* ID: qx.Mixin */
qx.Class.define("qx.Mixin",
{statics:{define:function($0,
$1){if($1){if($1.include&&!($1.include instanceof Array)){$1.include=[$1.include];
}{};
var $2=$1.statics?$1.statics:{};
for(var $3 in $2){$2[$3].mixin=$2;
}if($1.construct){$2.$$constructor=$1.construct;
}
if($1.include){$2.$$includes=$1.include;
}
if($1.properties){$2.$$properties=$1.properties;
}
if($1.members){$2.$$members=$1.members;
}
for(var $3 in $2.$$members){if($2.$$members[$3] instanceof Function){$2.$$members[$3].mixin=$2;
}}
if($1.events){$2.$$events=$1.events;
}
if($1.destruct){$2.$$destructor=$1.destruct;
}}else{var $2={};
}$2.$$type="Mixin";
$2.name=$0;
$2.toString=this.genericToString;
$2.basename=qx.Class.createNamespace($0,
$2);
this.__registry[$0]=$2;
return $2;
},
checkCompatibility:function($0){var $1=this.flatten($0);
var $2=$1.length;
if($2<2){return true;
}var $3={};
var $4={};
var $5={};
var $6;
for(var $7=0;$7<$2;$7++){$6=$1[$7];
for(var $8 in $6.events){if($5[$8]){throw new Error('Conflict between mixin "'+$6.name+'" and "'+$5[$8]+'" in member "'+$8+'"!');
}$5[$8]=$6.name;
}
for(var $8 in $6.properties){if($3[$8]){throw new Error('Conflict between mixin "'+$6.name+'" and "'+$3[$8]+'" in property "'+$8+'"!');
}$3[$8]=$6.name;
}
for(var $8 in $6.members){if($4[$8]){throw new Error('Conflict between mixin "'+$6.name+'" and "'+$4[$8]+'" in member "'+$8+'"!');
}$4[$8]=$6.name;
}}return true;
},
isCompatible:function($0,
$1){var $2=qx.Class.getMixins($1);
$2.push($0);
return qx.Mixin.checkCompatibility($2);
},
getByName:function($0){return this.__registry[$0];
},
isDefined:function($0){return this.getByName($0)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
flatten:function($0){if(!$0){return [];
}var $1=$0.concat();
for(var $2=0,
$3=$0.length;$2<$3;$2++){if($0[$2].$$includes){$1.push.apply($1,
this.flatten($0[$2].$$includes));
}}return $1;
},
genericToString:function(){return "[Mixin "+this.name+"]";
},
__registry:{},
__allowedKeys:null,
__validateConfig:function(){}}});




/* ID: qx.Interface */
qx.Class.define("qx.Interface",
{statics:{define:function($0,
$1){if($1){if($1.extend&&!($1.extend instanceof Array)){$1.extend=[$1.extend];
}{};
var $2=$1.statics?$1.statics:{};
if($1.extend){$2.$$extends=$1.extend;
}
if($1.properties){$2.$$properties=$1.properties;
}
if($1.members){$2.$$members=$1.members;
}
if($1.events){$2.$$events=$1.events;
}}else{var $2={};
}$2.$$type="Interface";
$2.name=$0;
$2.toString=this.genericToString;
$2.basename=qx.Class.createNamespace($0,
$2);
qx.Interface.__registry[$0]=$2;
return $2;
},
getByName:function($0){return this.__registry[$0];
},
isDefined:function($0){return this.getByName($0)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
flatten:function($0){if(!$0){return [];
}var $1=$0.concat();
for(var $2=0,
$3=$0.length;$2<$3;$2++){if($0[$2].$$extends){$1.push.apply($1,
this.flatten($0[$2].$$extends));
}}return $1;
},
assert:function($0,
$1,
$2){var $3=$1.$$members;
if($3){var $4=$0.prototype;
for(var $5 in $3){if(typeof $3[$5]==="function"){if(typeof $4[$5]!=="function"){throw new Error('Implementation of method "'+$5+'" is missing in class "'+$0.classname+'" required by interface "'+$1.name+'"');
}if($2===true&&!qx.Class.hasInterface($0,
$1)){$4[$5]=this.__wrapInterfaceMember($1,
$4[$5],
$5,
$3[$5]);
}}else{if(typeof $4[$5]===undefined){if(typeof $4[$5]!=="function"){throw new Error('Implementation of member "'+$5+'" is missing in class "'+$0.classname+'" required by interface "'+$1.name+'"');
}}}}}if($1.$$properties){for(var $5 in $1.$$properties){if(!qx.Class.hasProperty($0,
$5)){throw new Error('The property "'+$5+'" is not supported by Class "'+$0.classname+'"!');
}}}if($1.$$events){for(var $5 in $1.$$events){if(!qx.Class.supportsEvent($0,
$5)){throw new Error('The event "'+$5+'" is not supported by Class "'+$0.classname+'"!');
}}}var $6=$1.$$extends;
if($6){for(var $7=0,
$8=$6.length;$7<$8;$7++){this.assert($0,
$6[$7],
$2);
}}},
genericToString:function(){return "[Interface "+this.name+"]";
},
__registry:{},
__wrapInterfaceMember:function(){},
__allowedKeys:null,
__validateConfig:function(){}}});




/* ID: qx.locale.MTranslation */
qx.Mixin.define("qx.locale.MTranslation",
{members:{tr:function($0,
$1){var $2=qx.locale.Manager;
if($2){return $2.tr.apply($2,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
trn:function($0,
$1,
$2,
$3){var $4=qx.locale.Manager;
if($4){return $4.trn.apply($4,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
marktr:function($0){var $1=qx.locale.Manager;
if($1){return $1.marktr.apply($1,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});




/* ID: qx.log.MLogging */
qx.Mixin.define("qx.log.MLogging",
{members:{getLogger:function(){if(qx.log.Logger){return qx.log.Logger.getClassLogger(this.constructor);
}throw new Error("To enable logging please include qx.log.Logger into your build!");
},
debug:function($0,
$1){this.getLogger().debug($0,
this.toHashCode(),
$1);
},
info:function($0,
$1){this.getLogger().info($0,
this.toHashCode(),
$1);
},
warn:function($0,
$1){this.getLogger().warn($0,
this.toHashCode(),
$1);
},
error:function($0,
$1){this.getLogger().error($0,
this.toHashCode(),
$1);
},
printStackTrace:function(){this.getLogger().printStackTrace();
}}});




/* ID: qx.core.MUserData */
qx.Mixin.define("qx.core.MUserData",
{members:{setUserData:function($0,
$1){if(!this.__userData){this.__userData={};
}this.__userData[$0]=$1;
},
getUserData:function($0){if(!this.__userData){return null;
}return this.__userData[$0];
}},
destruct:function(){this._disposeFields("__userData");
}});




/* ID: qx.core.LegacyProperty */
qx.Class.define("qx.core.LegacyProperty",
{statics:{getSetterName:function($0){return qx.core.Property.$$method.set[$0];
},
getGetterName:function($0){return qx.core.Property.$$method.get[$0];
},
getResetterName:function($0){return qx.core.Property.$$method.reset[$0];
},
addFastProperty:function($0,
$1){var $2=$0.name;
var $3=qx.lang.String.toFirstUp($2);
var $4="_value"+$3;
var $5="get"+$3;
var $6="set"+$3;
var $7="_compute"+$3;
$1[$4]=typeof $0.defaultValue!=="undefined"?$0.defaultValue:null;
if($0.noCompute){$1[$5]=function(){return this[$4];
};
}else{$1[$5]=function(){return this[$4]==null?this[$4]=this[$7]():this[$4];
};
}$1[$5].self=$1.constructor;
if($0.setOnlyOnce){$1[$6]=function($8){this[$4]=$8;
this[$6]=null;
return $8;
};
}else{$1[$6]=function($8){return this[$4]=$8;
};
}$1[$6].self=$1.constructor;
if(!$0.noCompute){$1[$7]=function(){return null;
};
$1[$7].self=$1.constructor;
}},
addCachedProperty:function($0,
$1){var $2=$0.name;
var $3=qx.lang.String.toFirstUp($2);
var $4="_cached"+$3;
var $5="_compute"+$3;
var $6="_change"+$3;
if(typeof $0.defaultValue!=="undefined"){$1[$4]=$0.defaultValue;
}$1["get"+$3]=function(){if(this[$4]==null){this[$4]=this[$5]();
}return this[$4];
};
$1["_invalidate"+$3]=function(){if(this[$4]!=null){this[$4]=null;
if($0.addToQueueRuntime){this.addToQueueRuntime($0.name);
}}};
$1["_recompute"+$3]=function(){var $7=this[$4];
var $8=this[$5]();
if($8!=$7){this[$4]=$8;
this[$6]($8,
$7);
return true;
}return false;
};
$1[$6]=function($8,
$7){};
$1[$5]=function(){return null;
};
$1["get"+$3].self=$1.constructor;
$1["_invalidate"+$3].self=$1.constructor;
$1["_recompute"+$3].self=$1.constructor;
},
addProperty:function($0,
$1){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Legacy properties are deprecated");
if(typeof $0!=="object"){throw new Error("AddProperty: Param should be an object!");
}
if(typeof $0.name!=="string"){throw new Error("AddProperty: Malformed input parameters: name needed!");
}if($0.dispose===undefined&&($0.type=="function"||$0.type=="object")){$0.dispose=true;
}$0.method=qx.lang.String.toFirstUp($0.name);
$0.implMethod=$0.impl?qx.lang.String.toFirstUp($0.impl):$0.method;
if($0.defaultValue==undefined){$0.defaultValue=null;
}$0.allowNull=$0.allowNull!==false;
$0.allowMultipleArguments=$0.allowMultipleArguments===true;
if(typeof $0.type==="string"){$0.hasType=true;
}else if(typeof $0.type!=="undefined"){throw new Error("AddProperty: Invalid type definition for property "+$0.name+": "+$0.type);
}else{$0.hasType=false;
}
if(typeof $0.instance==="string"){$0.hasInstance=true;
}else if(typeof $0.instance!=="undefined"){throw new Error("AddProperty: Invalid instance definition for property "+$0.name+": "+$0.instance);
}else{$0.hasInstance=false;
}
if(typeof $0.classname==="string"){$0.hasClassName=true;
}else if(typeof $0.classname!=="undefined"){throw new Error("AddProperty: Invalid classname definition for property "+$0.name+": "+$0.classname);
}else{$0.hasClassName=false;
}$0.hasConvert=$0.convert!=null;
$0.hasPossibleValues=$0.possibleValues!=null;
$0.addToQueue=$0.addToQueue||false;
$0.addToQueueRuntime=$0.addToQueueRuntime||false;
$0.up=$0.name.toUpperCase();
var $2=qx.core.Property.$$store.user[$0.name]="__user$"+$0.name;
var $3="change"+$0.method;
var $4="_modify"+$0.implMethod;
var $5="_check"+$0.implMethod;
var $6=qx.core.Property.$$method;
if(!$6.set[$0.name]){$6.set[$0.name]="set"+$0.method;
$6.get[$0.name]="get"+$0.method;
$6.reset[$0.name]="reset"+$0.method;
}$1[$2]=$0.defaultValue;
$1["get"+$0.method]=function(){return this[$2];
};
$1["force"+$0.method]=function($7){return this[$2]=$7;
};
$1["reset"+$0.method]=function(){return this["set"+$0.method]($0.defaultValue);
};
if($0.type==="boolean"){$1["toggle"+$0.method]=function($7){return this["set"+$0.method](!this[$2]);
};
}
if($0.allowMultipleArguments||$0.hasConvert||$0.hasInstance||$0.hasClassName||$0.hasPossibleValues||$0.hasUnitDetection||$0.addToQueue||$0.addToQueueRuntime||$0.addToStateQueue){$1["set"+$0.method]=function($7){if($0.allowMultipleArguments&&arguments.length>1){$7=qx.lang.Array.fromArguments(arguments);
}if($0.hasConvert){try{$7=$0.convert.call(this,
$7,
$0);
}catch(ex){throw new Error("Attention! Could not convert new value for "+$0.name+": "+$7+": "+ex);
}}var $8=this[$2];
if($7===$8){return $7;
}
if(!($0.allowNull&&$7==null)){if($0.hasType&&typeof $7!==$0.type){throw new Error("Attention! The value \""+$7+"\" is an invalid value for the property \""+$0.name+"\" which must be typeof \""+$0.type+"\" but is typeof \""+typeof $7+"\"!");
}
if(qx.Class.getByName($0.instance)){if($0.hasInstance&&!($7 instanceof qx.Class.getByName($0.instance))){throw new Error("Attention! The value \""+$7+"\" is an invalid value for the property \""+$0.name+"\" which must be an instance of \""+$0.instance+"\"!");
}}else{if($0.hasInstance&&!($7 instanceof qx.OO.classes[$0.instance])){throw new Error("Attention! The value \""+$7+"\" is an invalid value for the property \""+$0.name+"\" which must be an instance of \""+$0.instance+"\"!");
}}
if($0.hasClassName&&$7.classname!=$0.classname){throw new Error("Attention! The value \""+$7+"\" is an invalid value for the property \""+$0.name+"\" which must be an object with the classname \""+$0.classname+"\"!");
}
if($0.hasPossibleValues&&$7!=null&&!qx.lang.Array.contains($0.possibleValues,
$7)){throw new Error("Failed to save value for "+$0.name+". '"+$7+"' is not a possible value!");
}}if(this[$5]){try{$7=this[$5]($7,
$0);
if($7===$8){return $7;
}}catch(ex){return this.error("Failed to check property "+$0.name,
ex);
}}this[$2]=$7;
if(this[$4]){try{this[$4]($7,
$8,
$0);
}catch(ex){return this.error("Modification of property \""+$0.name+"\" failed with exception",
ex);
}}if($0.addToQueue){this.addToQueue($0.name);
}
if($0.addToQueueRuntime){this.addToQueueRuntime($0.name);
}if($0.addToStateQueue){this.addToStateQueue();
}if(this.hasEventListeners&&this.hasEventListeners($3)){try{this.createDispatchDataEvent($3,
$7);
}catch(ex){throw new Error("Property "+$0.name+" modified: Failed to dispatch change event: "+ex);
}}return $7;
};
}else{$1["set"+$0.method]=function($7){var $8=this[$2];
if($7===$8){return $7;
}
if(!($0.allowNull&&$7==null)){if($0.hasType&&typeof $7!==$0.type){throw new Error("Attention! The value \""+$7+"\" is an invalid value for the property \""+$0.name+"\" which must be typeof \""+$0.type+"\" but is typeof \""+typeof $7+"\"!");
}}if(this[$5]){try{$7=this[$5]($7,
$0);
if($7===$8){return $7;
}}catch(ex){return this.error("Failed to check property "+$0.name,
ex);
}}this[$2]=$7;
if(this[$4]){try{this[$4]($7,
$8,
$0);
}catch(ex){var $9=new String($7).substring(0,
50);
this.error("Setting property \""+$0.name+"\" to \""+$9+"\" failed with exception",
ex);
}}if(this.hasEventListeners&&this.hasEventListeners($3)){var $a=new qx.event.type.DataEvent($3,
$7,
$8,
false);
$a.setTarget(this);
try{this.dispatchEvent($a,
true);
}catch(ex){throw new Error("Property "+$0.name+" modified: Failed to dispatch change event: "+ex);
}}return $7;
};
}$1["set"+$0.method].self=$1.constructor;
if(typeof $0.getAlias==="string"){$1[$0.getAlias]=$1["get"+$0.method];
}if(typeof $0.setAlias==="string"){$1[$0.setAlias]=$1["set"+$0.method];
}}}});




/* ID: qx.core.Property */
qx.Class.define("qx.core.Property",
{statics:{__checks:{"Boolean":'typeof value === "boolean"',
"String":'typeof value === "string"',
"NonEmptyString":'typeof value === "string" && value.length > 0',
"Number":'typeof value === "number" && isFinite(value)',
"Integer":'typeof value === "number" && isFinite(value) && value%1 === 0',
"Float":'typeof value === "number" && isFinite(value)',
"Double":'typeof value === "number" && isFinite(value)',
"Error":'value instanceof Error',
"RegExp":'value instanceof RegExp',
"Object":'value !== null && typeof value === "object"',
"Array":'value instanceof Array',
"Map":'value !== null && typeof value === "object" && !(value instanceof Array) && !(value instanceof qx.core.Object)',
"Function":'value instanceof Function',
"Date":'value instanceof Date',
"Node":'value !== null && value.nodeType !== undefined',
"Element":'value !== null && value.nodeType === 1 && value.attributes',
"Document":'value !== null && value.nodeType === 9 && value.documentElement',
"Window":'value !== null && window.document',
"Event":'value !== null && value.type !== undefined',
"Class":'value !== null && value.$$type === "Class"',
"Mixin":'value !== null && value.$$type === "Mixin"',
"Interface":'value !== null && value.$$type === "Interface"',
"Theme":'value !== null && value.$$type === "Theme"',
"Color":'typeof value === "string" && qx.util.ColorUtil.isValid(value)',
"Border":'value !== null && qx.theme.manager.Border.getInstance().isDynamic(value)',
"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',
"Label":'value !== null && (qx.locale.Manager.getInstance().isDynamic(value) || typeof value === "string")'},
__dispose:{"Object":true,
"Array":true,
"Map":true,
"Function":true,
"Date":true,
"Node":true,
"Element":true,
"Document":true,
"Window":true,
"Event":true,
"Class":true,
"Mixin":true,
"Interface":true,
"Theme":true,
"Border":true,
"Font":true},
$$inherit:"inherit",
$$idcounter:0,
$$store:{user:{},
theme:{},
inherit:{},
init:{},
useinit:{}},
$$method:{get:{},
set:{},
reset:{},
init:{},
refresh:{},
style:{},
unstyle:{}},
$$allowedKeys:{name:"string",
dispose:"boolean",
inheritable:"boolean",
nullable:"boolean",
themeable:"boolean",
refine:"boolean",
init:null,
apply:"string",
event:"string",
check:null,
transform:"string"},
$$allowedGroupKeys:{name:"string",
group:"object",
mode:"string",
themeable:"boolean"},
$$inheritable:{},
refresh:function($0){var $1=$0.getParent();
if($1){var $2=$0.constructor;
var $3=this.$$store.inherit;
var $4=this.$$method.refresh;
var $5;
{};
while($2){$5=$2.$$properties;
if($5){for(var $6 in this.$$inheritable){if($5[$6]&&$0[$4[$6]]){{};
$0[$4[$6]]($1[$3[$6]]);
}}}$2=$2.superclass;
}}},
attach:function($0){var $1=$0.$$properties;
if($1){for(var $2 in $1){this.attachMethods($0,
$2,
$1[$2]);
}}$0.$$propertiesAttached=true;
},
attachMethods:function($0,
$1,
$2){if($2._legacy||$2._fast||$2._cached){return;
}var $3,
$4;
if($1.charAt(0)==="_"){if($1.charAt(1)==="_"){$3="__";
$4=qx.lang.String.toFirstUp($1.substring(2));
}else{$3="_";
$4=qx.lang.String.toFirstUp($1.substring(1));
}}else{$3="";
$4=qx.lang.String.toFirstUp($1);
}$2.group?this.__attachGroupMethods($0,
$2,
$3,
$4):this.__attachPropertyMethods($0,
$2,
$3,
$4);
},
__attachGroupMethods:function($0,
$1,
$2,
$3){var $4=$0.prototype;
var $5=$1.name;
var $6=$1.themeable===true;
{};
var $7=[];
var $8=[];
if($6){var $9=[];
var $a=[];
}var $b="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
$7.push($b);
if($6){$9.push($b);
}
if($1.mode=="shorthand"){var $c="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
$7.push($c);
if($6){$9.push($c);
}}
for(var $d=0,
$e=$1.group,
$f=$e.length;$d<$f;$d++){{};
$7.push("this.",
this.$$method.set[$e[$d]],
"(a[",
$d,
"]);");
$8.push("this.",
this.$$method.reset[$e[$d]],
"();");
if($6){{};
$9.push("this.",
this.$$method.style[$e[$d]],
"(a[",
$d,
"]);");
$a.push("this.",
this.$$method.unstyle[$e[$d]],
"();");
}}this.$$method.set[$5]=$2+"set"+$3;
$4[this.$$method.set[$5]]=new Function($7.join(""));
this.$$method.reset[$5]=$2+"reset"+$3;
$4[this.$$method.reset[$5]]=new Function($8.join(""));
if($6){this.$$method.style[$5]=$2+"style"+$3;
$4[this.$$method.style[$5]]=new Function($9.join(""));
this.$$method.unstyle[$5]=$2+"unstyle"+$3;
$4[this.$$method.unstyle[$5]]=new Function($a.join(""));
}},
__attachPropertyMethods:function($0,
$1,
$2,
$3){var $4=$0.prototype;
var $5=$1.name;
{};
if($1.dispose===undefined&&typeof $1.check==="string"){$1.dispose=this.__dispose[$1.check]||qx.Class.isDefined($1.check)||qx.Interface.isDefined($1.check);
}var $6=this.$$method;
var $7=this.$$store;
$7.user[$5]="__user$"+$5;
$7.theme[$5]="__theme$"+$5;
$7.init[$5]="__init$"+$5;
$7.inherit[$5]="__inherit$"+$5;
$7.useinit[$5]="__useinit$"+$5;
$6.get[$5]=$2+"get"+$3;
$4[$6.get[$5]]=function(){return qx.core.Property.executeOptimizedGetter(this,
$0,
$5,
"get");
};
$6.set[$5]=$2+"set"+$3;
$4[$6.set[$5]]=function($8){return qx.core.Property.executeOptimizedSetter(this,
$0,
$5,
"set",
arguments);
};
$6.reset[$5]=$2+"reset"+$3;
$4[$6.reset[$5]]=function(){return qx.core.Property.executeOptimizedSetter(this,
$0,
$5,
"reset");
};
if($1.inheritable||$1.apply||$1.event){$6.init[$5]=$2+"init"+$3;
$4[$6.init[$5]]=function($8){return qx.core.Property.executeOptimizedSetter(this,
$0,
$5,
"init",
arguments);
};
}
if($1.inheritable){$6.refresh[$5]=$2+"refresh"+$3;
$4[$6.refresh[$5]]=function($8){return qx.core.Property.executeOptimizedSetter(this,
$0,
$5,
"refresh",
arguments);
};
}
if($1.themeable){$6.style[$5]=$2+"style"+$3;
$4[$6.style[$5]]=function($8){return qx.core.Property.executeOptimizedSetter(this,
$0,
$5,
"style",
arguments);
};
$6.unstyle[$5]=$2+"unstyle"+$3;
$4[$6.unstyle[$5]]=function(){return qx.core.Property.executeOptimizedSetter(this,
$0,
$5,
"unstyle");
};
}
if($1.check==="Boolean"){$4[$2+"toggle"+$3]=new Function("return this."+$6.set[$5]+"(!this."+$6.get[$5]+"())");
$4[$2+"is"+$3]=new Function("return this."+$6.get[$5]+"()");
}},
__errors:{0:'Could not change or apply init value after constructing phase!',
1:'Requires exactly one argument!',
2:'Undefined value is not allowed!',
3:'Does not allow any arguments!',
4:'Null value is not allowed!',
5:'Is invalid!'},
error:function($0,
$1,
$2,
$3,
$4){var $5=$0.constructor.classname;
var $6="Error in property "+$2+" of class "+$5+" in method "+this.$$method[$3][$2]+" with incoming value '"+$4+"': ";
$0.printStackTrace();
$0.error($6+(this.__errors[$1]||"Unknown reason: "+$1));
throw new Error($6+(this.__errors[$1]||"Unknown reason: "+$1));
},
__unwrapFunctionFromCode:function($0,
$1,
$2,
$3,
$4,
$5){var $6=this.$$method[$3][$2];
{$1[$6]=new Function("value",
$4.join(""));
};
{};
if($5===undefined){return $0[$6]();
}else{return $0[$6]($5[0]);
}},
executeOptimizedGetter:function($0,
$1,
$2,
$3){var $4=$1.$$properties[$2];
var $5=$1.prototype;
var $6=[];
if($4.inheritable){$6.push('if(this.',
this.$$store.inherit[$2],
'!==undefined)');
$6.push('return this.',
this.$$store.inherit[$2],
';');
$6.push('else ');
}$6.push('if(this.',
this.$$store.user[$2],
'!==undefined)');
$6.push('return this.',
this.$$store.user[$2],
';');
if($4.themeable){$6.push('else if(this.',
this.$$store.theme[$2],
'!==undefined)');
$6.push('return this.',
this.$$store.theme[$2],
';');
}
if($4.deferredInit&&$4.init===undefined){$6.push('else if(this.',
this.$$store.init[$2],
'!==undefined)');
$6.push('return this.',
this.$$store.init[$2],
';');
}$6.push('else ');
if($4.init!==undefined){$6.push('return this.',
this.$$store.init[$2],
';');
}else if($4.inheritable||$4.nullable){$6.push('return null;');
}else{$6.push('throw new Error("Property ',
$2,
' of an instance of ',
$1.classname,
' is not (yet) ready!");');
}return this.__unwrapFunctionFromCode($0,
$5,
$2,
$3,
$6);
},
executeOptimizedSetter:function($0,
$1,
$2,
$3,
$4){var $5=$1.$$properties[$2];
var $6=$1.prototype;
var $7=[];
var $8=$3==="set"||$3==="style"||($3==="init"&&$5.init===undefined);
var $9=$3==="reset"||$3==="unstyle";
var $a=$5.apply||$5.event||$5.inheritable;
if($3==="style"||$3==="unstyle"){var $b=this.$$store.theme[$2];
}else if($3==="init"){var $b=this.$$store.init[$2];
}else{var $b=this.$$store.user[$2];
}{if(!$5.nullable||$5.check||$5.inheritable){$7.push('var prop=qx.core.Property;');
}if($3==="set"){$7.push('if(value===undefined)prop.error(this,2,"'+$2+'","'+$3+'",value);');
}};
if($8){if($5.transform){$7.push('value=this.',
$5.transform,
'(value);');
}}if($a){if($8){$7.push('if(this.',
$b,
'===value)return value;');
}else if($9){$7.push('if(this.',
$b,
'===undefined)return;');
}}if($5.inheritable){$7.push('var inherit=prop.$$inherit;');
}if($8&&(false||$3==="set")){if(!$5.nullable){$7.push('if(value===null)prop.error(this,4,"'+$2+'","'+$3+'",value);');
}if($5.check!==undefined){if($5.nullable){$7.push('if(value!==null)');
}if($5.inheritable){$7.push('if(value!==inherit)');
}$7.push('if(');
if(this.__checks[$5.check]!==undefined){$7.push('!(',
this.__checks[$5.check],
')');
}else if(qx.Class.isDefined($5.check)){$7.push('!(value instanceof ',
$5.check,
')');
}else if(qx.Interface.isDefined($5.check)){$7.push('!(value && qx.Class.hasInterface(value.constructor, ',
$5.check,
'))');
}else if(typeof $5.check==="function"){$7.push('!',
$1.classname,
'.$$properties.',
$2);
$7.push('.check.call(this, value)');
}else if(typeof $5.check==="string"){$7.push('!(',
$5.check,
')');
}else if($5.check instanceof Array){$5.checkMap=qx.lang.Object.fromArray($5.check);
$7.push($1.classname,
'.$$properties.',
$2);
$7.push('.checkMap[value]===undefined');
}else{throw new Error("Could not add check to property "+$2+" of class "+$1.classname);
}$7.push(')prop.error(this,5,"'+$2+'","'+$3+'",value);');
}}
if(!$a){if($3==="set"){$7.push('this.',
this.$$store.user[$2],
'=value;');
}else if($3==="reset"){$7.push('if(this.',
this.$$store.user[$2],
'!==undefined)');
$7.push('delete this.',
this.$$store.user[$2],
';');
}else if($3==="style"){$7.push('this.',
this.$$store.theme[$2],
'=value;');
}else if($3==="unstyle"){$7.push('if(this.',
this.$$store.theme[$2],
'!==undefined)');
$7.push('delete this.',
this.$$store.theme[$2],
';');
}else if($3==="init"&&$8){$7.push('this.',
this.$$store.init[$2],
'=value;');
}}else{if($5.inheritable){$7.push('var computed, old=this.',
this.$$store.inherit[$2],
';');
}else{$7.push('var computed, old;');
}$7.push('if(this.',
this.$$store.user[$2],
'!==undefined){');
if($3==="set"){if(!$5.inheritable){$7.push('old=this.',
this.$$store.user[$2],
';');
}$7.push('computed=this.',
this.$$store.user[$2],
'=value;');
}else if($3==="reset"){if(!$5.inheritable){$7.push('old=this.',
this.$$store.user[$2],
';');
}$7.push('delete this.',
this.$$store.user[$2],
';');
$7.push('if(this.',
this.$$store.theme[$2],
'!==undefined)');
$7.push('computed=this.',
this.$$store.theme[$2],
';');
$7.push('else if(this.',
this.$$store.init[$2],
'!==undefined){');
$7.push('computed=this.',
this.$$store.init[$2],
';');
$7.push('this.',
this.$$store.useinit[$2],
'=true;');
$7.push('}');
}else{if($5.inheritable){$7.push('computed=this.',
this.$$store.user[$2],
';');
}else{$7.push('old=computed=this.',
this.$$store.user[$2],
';');
}if($3==="style"){$7.push('this.',
this.$$store.theme[$2],
'=value;');
}else if($3==="unstyle"){$7.push('delete this.',
this.$$store.theme[$2],
';');
}else if($3==="init"&&$8){$7.push('this.',
this.$$store.init[$2],
'=value;');
}}$7.push('}');
if($5.themeable){$7.push('else if(this.',
this.$$store.theme[$2],
'!==undefined){');
if(!$5.inheritable){$7.push('old=this.',
this.$$store.theme[$2],
';');
}
if($3==="set"){$7.push('computed=this.',
this.$$store.user[$2],
'=value;');
}else if($3==="style"){$7.push('computed=this.',
this.$$store.theme[$2],
'=value;');
}else if($3==="unstyle"){$7.push('delete this.',
this.$$store.theme[$2],
';');
$7.push('if(this.',
this.$$store.init[$2],
'!==undefined){');
$7.push('computed=this.',
this.$$store.init[$2],
';');
$7.push('this.',
this.$$store.useinit[$2],
'=true;');
$7.push('}');
}else if($3==="init"){if($8){$7.push('this.',
this.$$store.init[$2],
'=value;');
}$7.push('computed=this.',
this.$$store.theme[$2],
';');
}else if($3==="refresh"){$7.push('computed=this.',
this.$$store.theme[$2],
';');
}$7.push('}');
}$7.push('else if(this.',
this.$$store.useinit[$2],
'){');
if(!$5.inheritable){$7.push('old=this.',
this.$$store.init[$2],
';');
}
if($3==="init"){if($8){$7.push('computed=this.',
this.$$store.init[$2],
'=value;');
}else{$7.push('computed=this.',
this.$$store.init[$2],
';');
}}else if($3==="set"||$3==="style"||$3==="refresh"){$7.push('delete this.',
this.$$store.useinit[$2],
';');
if($3==="set"){$7.push('computed=this.',
this.$$store.user[$2],
'=value;');
}else if($3==="style"){$7.push('computed=this.',
this.$$store.theme[$2],
'=value;');
}else if($3==="refresh"){$7.push('computed=this.',
this.$$store.init[$2],
';');
}}$7.push('}');
if($3==="set"||$3==="style"||$3==="init"){$7.push('else{');
if($3==="set"){$7.push('computed=this.',
this.$$store.user[$2],
'=value;');
}else if($3==="style"){$7.push('computed=this.',
this.$$store.theme[$2],
'=value;');
}else if($3==="init"){if($8){$7.push('computed=this.',
this.$$store.init[$2],
'=value;');
}else{$7.push('computed=this.',
this.$$store.init[$2],
';');
}$7.push('this.',
this.$$store.useinit[$2],
'=true;');
}$7.push('}');
}}
if($5.inheritable){$7.push('if(computed===undefined||computed===inherit){');
if($3==="refresh"){$7.push('computed=value;');
}else{$7.push('var pa=this.getParent();if(pa)computed=pa.',
this.$$store.inherit[$2],
';');
}$7.push('if((computed===undefined||computed===inherit)&&');
$7.push('this.',
this.$$store.init[$2],
'!==undefined&&');
$7.push('this.',
this.$$store.init[$2],
'!==inherit){');
$7.push('computed=this.',
this.$$store.init[$2],
';');
$7.push('this.',
this.$$store.useinit[$2],
'=true;');
$7.push('}else{');
$7.push('delete this.',
this.$$store.useinit[$2],
';}');
$7.push('}');
$7.push('if(old===computed)return value;');
$7.push('if(computed===inherit){');
$7.push('computed=undefined;delete this.',
this.$$store.inherit[$2],
';');
$7.push('}');
$7.push('else if(computed===undefined)');
$7.push('delete this.',
this.$$store.inherit[$2],
';');
$7.push('else this.',
this.$$store.inherit[$2],
'=computed;');
$7.push('var backup=computed;');
$7.push('if(computed===undefined)computed=null;');
$7.push('if(old===undefined)old=null;');
}else if($a){if($3!=="set"&&$3!=="style"){$7.push('if(computed===undefined)computed=null;');
}$7.push('if(old===computed)return value;');
$7.push('if(old===undefined)old=null;');
}if($a){if($5.apply){$7.push('this.',
$5.apply,
'(computed, old);');
}if($5.event){$7.push('this.createDispatchChangeEvent("',
$5.event,
'", computed, old);');
}if($5.inheritable&&$6.getChildren){$7.push('var a=this.getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
$7.push('if(a[i].',
this.$$method.refresh[$2],
')a[i].',
this.$$method.refresh[$2],
'(backup);');
$7.push('}');
}}if($8){$7.push('return value;');
}return this.__unwrapFunctionFromCode($0,
$6,
$2,
$3,
$7,
$4);
}},
settings:{"qx.propertyDebugLevel":0}});




/* ID: qx.lang.String */
qx.Class.define("qx.lang.String",
{statics:{toCamelCase:function($0){return $0.replace(/\-([a-z])/g,
function($1,
$2){return $2.toUpperCase();
});
},
trimLeft:function($0){return $0.replace(/^\s+/,
"");
},
trimRight:function($0){return $0.replace(/\s+$/,
"");
},
trim:function($0){return $0.replace(/^\s+|\s+$/g,
"");
},
startsWith:function($0,
$1){return !$0.indexOf($1);
},
startsWithAlternate:function($0,
$1){return $0.substring(0,
$1.length)===$1;
},
endsWith:function($0,
$1){return $0.lastIndexOf($1)===$0.length-$1.length;
},
endsWithAlternate:function($0,
$1){return $0.substring($0.length-$1.length,
$0.length)===$1;
},
pad:function($0,
$1,
$2,
$3){if(typeof $2==="undefined"){$2="0";
}var $4="";
for(var $5=$0.length;$5<$1;$5++){$4+=$2;
}
if($3==true){return $0+$4;
}else{return $4+$0;
}},
toFirstUp:function($0){return $0.charAt(0).toUpperCase()+$0.substr(1);
},
toFirstLower:function($0){return $0.charAt(0).toLowerCase()+$0.substr(1);
},
addListItem:function($0,
$1,
$2){if($0==$1||$0==""){return $1;
}
if($2==null){$2=",";
}var $3=$0.split($2);
if($3.indexOf($1)==-1){$3.push($1);
return $3.join($2);
}else{return $0;
}},
removeListItem:function($0,
$1,
$2){if($0==$1||$0==""){return "";
}else{if($2==null){$2=",";
}var $3=$0.split($2);
var $4=$3.indexOf($1);
if($4===-1){return $0;
}
do{$3.splice($4,
1);
}while(($4=$3.indexOf($1))!=-1);
return $3.join($2);
}},
contains:function($0,
$1){return $0.indexOf($1)!=-1;
},
format:function($0,
$1){var $2=$0;
for(var $3=0;$3<$1.length;$3++){$2=$2.replace(new RegExp("%"+($3+1),
"g"),
$1[$3]);
}return $2;
},
escapeRegexpChars:function($0){return $0.replace(/([\\\.\(\)\[\]\{\}\^\$\?\+\*])/g,
"\\$1");
},
toArray:function($0){return $0.split(/\B|\b/g);
}}});




/* ID: qx.core.Object */
qx.Class.define("qx.core.Object",
{extend:Object,
include:[qx.locale.MTranslation,
qx.log.MLogging,
qx.core.MUserData],
construct:function(){this._hashCode=qx.core.Object.__availableHashCode++;
if(this._autoDispose){this.__dbKey=qx.core.Object.__db.length;
qx.core.Object.__db.push(this);
}},
statics:{__availableHashCode:0,
__db:[],
__disposeAll:false,
$$type:"Object",
toHashCode:function($0){if($0._hashCode!=null){return $0._hashCode;
}return $0._hashCode=this.__availableHashCode++;
},
getDb:function(){return this.__db;
},
dispose:function($0){if(this.__disposed){return;
}this.__disposed=true;
this.__unload=$0||false;
var $1;
var $2,
$3=this.__db;
for(var $4=$3.length-1;$4>=0;$4--){$2=$3[$4];
if($2&&$2.__disposed===false){try{$2.dispose();
}catch(ex){{};
}}}var $5,
$4,
$6,
$7,
$8,
$9;
},
inGlobalDispose:function(){return this.__disposed||false;
},
isPageUnload:function(){return this.__unload||false;
}},
members:{_autoDispose:true,
toHashCode:function(){return this._hashCode;
},
toString:function(){if(this.classname){return "[object "+this.classname+"]";
}return "[object Object]";
},
base:function($0,
$1){if(arguments.length===1){return $0.callee.base.call(this);
}else{return $0.callee.base.apply(this,
Array.prototype.slice.call(arguments,
1));
}},
self:function($0){return $0.callee.self;
},
getDbKey:function(){return this.__dbKey;
},
set:function($0,
$1){var $2=qx.core.Property.$$method.set;
if(typeof $0==="string"){{};
return this[$2[$0]]($1);
}else{for(var $3 in $0){{};
this[$2[$3]]($0[$3]);
}return this;
}},
get:function($0){var $1=qx.core.Property.$$method.get;
{};
return this[$1[$0]]();
},
reset:function($0){var $1=qx.core.Property.$$method.reset;
{};
this[$1[$0]]();
},
__disposed:false,
getDisposed:function(){return this.__disposed;
},
isDisposed:function(){return this.__disposed;
},
dispose:function(){if(this.__disposed){return;
}this.__disposed=true;
{};
var $0=this.constructor;
var $1;
while($0.superclass){if($0.$$destructor){$0.$$destructor.call(this);
}if($0.$$includes){$1=$0.$$flatIncludes;
for(var $2=0,
$3=$1.length;$2<$3;$2++){if($1[$2].$$destructor){$1[$2].$$destructor.call(this);
}}}$0=$0.superclass;
}var $4,
$5;
},
_disposeFields:function($0){var $1;
for(var $2=0,
$3=arguments.length;$2<$3;$2++){var $1=arguments[$2];
if(this[$1]==null){continue;
}
if(!this.hasOwnProperty($1)){{};
continue;
}this[$1]=null;
}},
_disposeObjects:function($0){var $1;
for(var $2=0,
$3=arguments.length;$2<$3;$2++){var $1=arguments[$2];
if(this[$1]==null){continue;
}
if(!this.hasOwnProperty($1)){{};
continue;
}
if(!this[$1].dispose){throw new Error(this.classname+" has no own object "+$1);
}this[$1].dispose();
this[$1]=null;
}},
_disposeObjectDeep:function($0,
$1){var $0;
if(this[$0]==null){return;
}
if(!this.hasOwnProperty($0)){{};
return;
}{};
this.__disposeObjectsDeepRecurser(this[$0],
$1||0);
this[$0]=null;
},
__disposeObjectsDeepRecurser:function($0,
$1){if($0 instanceof qx.core.Object){{};
$0.dispose();
}else if($0 instanceof Array){for(var $2=0,
$3=$0.length;$2<$3;$2++){var $4=$0[$2];
if($4==null){continue;
}
if(typeof $4=="object"){if($1>0){{};
this.__disposeObjectsDeepRecurser($4,
$1-1);
}{};
$0[$2]=null;
}else if(typeof $4=="function"){{};
$0[$2]=null;
}}}else if($0 instanceof Object){for(var $5 in $0){if($0[$5]==null||!$0.hasOwnProperty($5)){continue;
}var $4=$0[$5];
if(typeof $4=="object"){if($1>0){{};
this.__disposeObjectsDeepRecurser($4,
$1-1);
}{};
$0[$5]=null;
}else if(typeof $4=="function"){{};
$0[$5]=null;
}}}}},
settings:{"qx.disposerDebugLevel":0},
destruct:function(){var $0=this.constructor;
var $1;
var $2=qx.core.Property.$$store;
var $3=$2.user;
var $4=$2.theme;
var $5=$2.inherit;
var $6=$2.useinit;
var $7=$2.init;
while($0){$1=$0.$$properties;
if($1){for(var $8 in $1){if($1[$8].dispose){this[$3[$8]]=this[$4[$8]]=this[$5[$8]]=this[$6[$8]]=this[$7[$8]]=undefined;
}}}$0=$0.superclass;
}if(this.__dbKey!=null){if(qx.core.Object.__disposeAll){qx.core.Object.__db[this.__dbKey]=null;
}else{delete qx.core.Object.__db[this.__dbKey];
}}}});




/* ID: qx.core.Log */
qx.Class.define("qx.core.Log",
{statics:{log:function($0){this._logFormatted(arguments,
"");
},
debug:function($0){this._logFormatted(arguments,
"debug");
},
info:function($0){this._logFormatted(arguments,
"info");
},
warn:function($0){this._logFormatted(arguments,
"warn");
},
error:function($0){this._logFormatted(arguments,
"error");
},
assert:function($0,
$1,
$2){if(!$0){var $3=[];
for(var $4=1;$4<arguments.length;++$4)$3.push(arguments[$4]);
this._logFormatted($3.length?$3:["Assertion Failure"],
"error");
throw $1?$1:"Assertion Failure";
}},
dir:function($0){var $1=[];
var $2=[];
for(var $3 in $0){try{$2.push([$3,
$0[$3]]);
}catch(exc){}}$2.sort(function($4,
$5){return $4[0]<$5[0]?-1:1;
});
$1.push('<table>');
for(var $6=0;$6<$2.length;++$6){var $3=$2[$6][0],
$7=$2[$6][1];
$1.push('<tr>',
'<td class="propertyNameCell"><span class="propertyName">',
this._escapeHTML($3),
'</span></td>',
'<td><span class="propertyValue">');
this._appendObject($7,
$1);
$1.push('</span></td></tr>');
}$1.push('</table>');
this._logRow($1,
"dir");
},
dirxml:function($0){var $1=[];
this._appendNode($0,
$1);
this._logRow($1,
"dirxml");
},
time:function($0){this._timeMap[$0]=(new Date()).getTime();
},
timeEnd:function($0){if($0 in this._timeMap){var $1=(new Date()).getTime()-this._timeMap[$0];
this._logFormatted([$0+":",
$1+"ms"]);
delete this._timeMap[$0];
}},
clear:function(){this._consoleLog.innerHTML="";
},
trace:function(){if(qx.dev&&qx.dev.StackTrace){var $0=qx.dev.StackTrace.getStackTrace();
this.debug("Current stack trace: ");
for(var $1=1,
$2=$0.length;$1<$2;$1++){this.debug("  - "+$0[$1]);
}}else{this.warn("Stacktraces are not support by your build!");
}},
_consoleLog:null,
_commandLine:null,
_messageQueue:[],
_timeMap:{},
_clPrefix:">>> ",
_consoleShortcuts:{log:"qx.core.Log.log",
info:"qx.core.Log.info",
debug:"qx.core.Log.debug",
warn:"qx.core.Log.warn",
error:"qx.core.Log.error",
assert:"qx.core.Log.assert",
dir:"qx.core.Log.dir",
dirxml:"qx.core.Log.dirxml",
time:"qx.core.Log.time",
timeEnd:"qx.core.Log.timeEnd",
clear:"qx.core.Log.clear"},
_focusCommandLine:function(){if(this._commandLine){this._commandLine.focus();
}},
_initializeWindow:function(){if(this._consoleWindow){return;
}if(qx.core.Setting){var $0=qx.core.Setting.get("qx.resourceUri")+"/static/log/log.html";
this._consoleWindow=window.open($0,
"win",
"width=500,height=250,dependent=yes,resizable=yes,status=no,location=no,menubar=no,toolbar=no,scrollbars=no");
}},
_onLogReady:function($0){var $1=$0.document;
this._consoleWindow=$0;
this._consoleDocument=$1;
this._consoleLog=$1.getElementById("log");
this._commandLine=$1.getElementById("commandLine");
this._onUnloadWrapped=qx.lang.Function.bind(this._onUnload,
this);
this._onResizeWrapped=qx.lang.Function.bind(this._onResize,
this);
this._onCommandLineKeyDownWrapped=qx.lang.Function.bind(this._onCommandLineKeyDown,
this);
this._addEvent(window,
"unload",
this._onUnloadWrapped);
this._addEvent($0,
"unload",
this._onUnloadWrapped);
this._addEvent($0,
"resize",
this._onResizeWrapped);
this._addEvent(this._commandLine,
"keydown",
this._onCommandLineKeyDownWrapped);
this._syncLayout();
this._flush();
},
_syncLayout:function(){this._consoleLog.style.height=(qx.bom.Viewport.getHeight(this._consoleWindow)-42)+"px";
},
_evalCommandLine:function(){var $0=this._commandLine.value;
this._commandLine.value="";
this._logRow([this._clPrefix,
$0],
"command");
var $1=/^([a-z]+)\(/;
var $2=$1.exec($0);
if($2!=null){if(this._consoleShortcuts[$2[1]]){$0=this._consoleShortcuts[$2[1]]+$0.substring($2[1].length);
}}var $3;
try{$3=eval($0);
}catch(ex){this.error(ex);
}
if($3!==undefined){this.log($3);
}},
_logRow:function($0,
$1){if(this._consoleLog){this._writeMessage($0,
$1);
}else{this._messageQueue.push([$0,
$1]);
this._initializeWindow();
}},
_flush:function(){var $0=this._messageQueue;
this._messageQueue=[];
for(var $1=0;$1<$0.length;++$1){this._writeMessage($0[$1][0],
$0[$1][1]);
}},
_writeMessage:function($0,
$1){var $2=this._consoleLog.scrollTop+this._consoleLog.offsetHeight>=this._consoleLog.scrollHeight;
this._writeRow($0,
$1);
if($2){this._consoleLog.scrollTop=this._consoleLog.scrollHeight-this._consoleLog.offsetHeight;
}},
_appendRow:function($0){this._consoleLog.appendChild($0);
},
_writeRow:function($0,
$1){var $2=this._consoleLog.ownerDocument.createElement("div");
$2.className="logRow"+($1?" logRow-"+$1:"");
$2.innerHTML=$0.join("");
this._appendRow($2);
},
_logFormatted:function($0,
$1){if(window.__firebug__&&window.console){return window.console[$1].apply(window.console,
$0);
}var $2=[];
var $3=$0[0];
var $4=0;
if(typeof ($3)!="string"){$3="";
$4=-1;
}var $5=this._parseFormat($3);
for(var $6=0;$6<$5.length;++$6){var $7=$5[$6];
if($7&&typeof ($7)=="object"){var $8=$0[++$4];
$7.appender($8,
$2);
}else this._appendText($7,
$2);
}
for(var $6=$4+1;$6<$0.length;++$6){this._appendText(" ",
$2);
var $8=$0[$6];
if(typeof ($8)=="string")this._appendText($8,
$2);
else this._appendObject($8,
$2);
}this._logRow($2,
$1);
},
_parseFormat:function($0){var $1=[];
var $2=/((^%|[^\\]%)(\d+)?(\.)([a-zA-Z]))|((^%|[^\\]%)([a-zA-Z]))/;
var $3={s:this._appendText,
d:this._appendInteger,
i:this._appendInteger,
f:this._appendFloat};
for(var $4=$2.exec($0);$4;$4=$2.exec($0)){var $5=$4[8]?$4[8]:$4[5];
var $6=$5 in $3?$3[$5]:this._appendObject;
var $7=$4[3]?parseInt($4[3]):($4[4]=="."?-1:0);
$1.push($0.substr(0,
$4[0][0]=="%"?$4.index:$4.index+1));
$1.push({appender:$6,
precision:$7});
$0=$0.substr($4.index+$4[0].length);
}$1.push($0);
return $1;
},
_escapeHTML:function($0){function $1($2){switch($2){case "<":return "&lt;";
case ">":return "&gt;";
case "&":return "&amp;";
case "'":return "&#39;";
case '"':return "&quot;";
}return "?";
}return String($0).replace(/[<>&"']/g,
$1);
},
_objectToString:function($0){try{return $0+"";
}catch(exc){return null;
}},
_appendText:function($0,
$1){$1.push(this._escapeHTML(this._objectToString($0)));
},
_appendNull:function($0,
$1){$1.push('<span class="objectBox-null">',
this._escapeHTML(this._objectToString($0)),
'</span>');
},
_appendString:function($0,
$1){$1.push('<span class="objectBox-string">&quot;',
this._escapeHTML(this._objectToString($0)),
'&quot;</span>');
},
_appendInteger:function($0,
$1){$1.push('<span class="objectBox-number">',
this._escapeHTML(this._objectToString($0)),
'</span>');
},
_appendFloat:function($0,
$1){$1.push('<span class="objectBox-number">',
this._escapeHTML(this._objectToString($0)),
'</span>');
},
_appendFunction:function($0,
$1){var $2=/function ?(.*?)\(/;
var $3=$2.exec(this._objectToString($0));
var $4=$3?$3[1]:"function";
$1.push('<span class="objectBox-function">',
this._escapeHTML($4),
'()</span>');
},
_appendObject:function($0,
$1){try{if($0==undefined)this._appendNull("undefined",
$1);
else if($0==null)this._appendNull("null",
$1);
else if(typeof $0=="string")this._appendString($0,
$1);
else if(typeof $0=="number")this._appendInteger($0,
$1);
else if($0.toString)this._appendText($0.toString(),
$1);
else if(typeof $0=="function")this._appendFunction($0,
$1);
else if($0.nodeType==1)this._appendSelector($0,
$1);
else if(typeof $0=="object")this._appendObjectFormatted($0,
$1);
else this._appendText($0,
$1);
}catch(exc){}},
_appendObjectFormatted:function($0,
$1){var $2=this._objectToString($0);
var $3=/\[object (.*?)\]/;
var $4=$3.exec($2);
$1.push('<span class="objectBox-object">',
$4?$4[1]:$2,
'</span>');
},
_appendSelector:function($0,
$1){$1.push('<span class="objectBox-selector">');
$1.push('<span class="selectorTag">',
this._escapeHTML($0.nodeName.toLowerCase()),
'</span>');
if($0.id)$1.push('<span class="selectorId">#',
this._escapeHTML($0.id),
'</span>');
if($0.className)$1.push('<span class="selectorClass">.',
this._escapeHTML($0.className),
'</span>');
$1.push('</span>');
},
_appendNode:function($0,
$1){if($0.nodeType==1){$1.push('<div class="objectBox-element">',
'&lt;<span class="nodeTag">',
$0.nodeName.toLowerCase(),
'</span>');
for(var $2=0;$2<$0.attributes.length;++$2){var $3=$0.attributes[$2];
if(!$3.specified)continue;
$1.push('&nbsp;<span class="nodeName">',
$3.nodeName.toLowerCase(),
'</span>=&quot;<span class="nodeValue">',
this._escapeHTML($3.nodeValue),
'</span>&quot;');
}
if($0.firstChild){$1.push('&gt;</div><div class="nodeChildren">');
for(var $4=$0.firstChild;$4;$4=$4.nextSibling)this._appendNode($4,
$1);
$1.push('</div><div class="objectBox-element">&lt;/<span class="nodeTag">',
$0.nodeName.toLowerCase(),
'&gt;</span></div>');
}else $1.push('/&gt;</div>');
}else if($0.nodeType==3){$1.push('<div class="nodeText">',
this._escapeHTML($0.nodeValue),
'</div>');
}},
_addEvent:function($0,
$1,
$2){if(document.all)$0.attachEvent("on"+$1,
$2);
else $0.addEventListener($1,
$2,
false);
},
_removeEvent:function($0,
$1,
$2){if(document.all)$0.detachEvent("on"+$1,
$2);
else $0.removeEventListener($1,
$2,
false);
},
_cancelEvent:function($0){if(document.all)$0.cancelBubble=true;
else $0.stopPropagation();
},
_onCommandLineKeyDown:function($0){if($0.keyCode==13)this._evalCommandLine();
else if($0.keyCode==27)this._commandLine.value="";
},
_onResize:function($0){this._syncLayout();
},
_onUnload:function($0){var $1=this._consoleWindow;
var $2=this._commandLine;
this._consoleWindow=null;
this._consoleDocument=null;
this._consoleLog=null;
this._commandLine=null;
this._removeEvent(window,
"unload",
this._onUnloadWrapped);
if($1){try{$1.close();
}catch(ex){}this._removeEvent($1,
"unload",
this._onUnloadWrapped);
this._removeEvent($1,
"resize",
this._onResizeWrapped);
}
if($2){this._removeEvent($2,
"keydown",
this._onCommandLineKeyDownWrapped);
}}}});




/* ID: qx.lang.Function */
qx.Class.define("qx.lang.Function",
{statics:{globalEval:function($0){if(window.execScript){window.execScript($0);
}else{eval.call(window,
$0);
}},
returnTrue:function(){return true;
},
returnFalse:function(){return false;
},
returnNull:function(){return null;
},
returnThis:function(){return this;
},
returnInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
},
returnZero:function(){return 0;
},
returnNegativeIndex:function(){return -1;
},
bind:function($0,
$1,
$2){{};
if(arguments.length>2){var $3=Array.prototype.slice.call(arguments,
2);
var $4=function(){$0.context=$1;
var $5=$0.apply($1,
$3.concat(qx.lang.Array.fromArguments(arguments)));
$0.context=null;
return $5;
};
}else{var $4=function(){$0.context=$1;
var $5=$0.apply($1,
arguments);
$0.context=null;
return $5;
};
}$4.self=$0.self?$0.self.constructor:$1;
return $4;
},
bindEvent:function($0,
$1){{};
var $2=function($3){$0.context=$1;
var $4=$0.call($1,
$3||window.event);
$0.context=null;
return $4;
};
$2.self=$0.self?$0.self.constructor:$1;
return $2;
},
getCaller:function($0){return $0.caller?$0.caller.callee:$0.callee.caller;
}}});




/* ID: qx.bom.Viewport */
qx.Class.define("qx.bom.Viewport",
{statics:{getWidth:qx.core.Variant.select("qx.client",
{"opera":function($0){return ($0||window).document.body.clientWidth;
},
"webkit":function($0){return ($0||window).innerWidth;
},
"default":function($0){var $1=($0||window).document;
return $1.compatMode==="CSS1Compat"?$1.documentElement.clientWidth:$1.body.clientWidth;
}}),
getHeight:qx.core.Variant.select("qx.client",
{"opera":function($0){return ($0||window).document.body.clientHeight;
},
"webkit":function($0){return ($0||window).innerHeight;
},
"default":function($0){var $1=($0||window).document;
return $1.compatMode==="CSS1Compat"?$1.documentElement.clientHeight:$1.body.clientHeight;
}}),
getScrollLeft:qx.core.Variant.select("qx.client",
{"mshtml":function($0){var $1=($0||window).document;
return $1.documentElement.scrollLeft||$1.body.scrollLeft;
},
"default":function($0){return ($0||window).pageXOffset;
}}),
getScrollTop:qx.core.Variant.select("qx.client",
{"mshtml":function($0){var $1=($0||window).document;
return $1.documentElement.scrollTop||$1.body.scrollTop;
},
"default":function($0){return ($0||window).pageYOffset;
}})}});




/* ID: qx.Theme */
qx.Class.define("qx.Theme",
{statics:{define:function($0,
$1){if(!$1){var $1={};
}
if($1.include&&!($1.include instanceof Array)){$1.include=[$1.include];
}{};
var $2={$$type:"Theme",
name:$0,
title:$1.title,
toString:this.genericToString};
if($1.extend){$2.supertheme=$1.extend;
}$2.basename=qx.Class.createNamespace($0,
$2);
this.__convert($2,
$1);
this.__registry[$0]=$2;
if($1.include){for(var $3=0,
$4=$1.include,
$5=$4.length;$3<$5;$3++){this.include($2,
$4[$3]);
}}},
getAll:function(){return this.__registry;
},
getByName:function($0){return this.__registry[$0];
},
isDefined:function($0){return this.getByName($0)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
genericToString:function(){return "[Theme "+this.name+"]";
},
__extractType:function($0){for(var $1=0,
$2=this.__inheritableKeys,
$3=$2.length;$1<$3;$1++){if($0[$2[$1]]){return $2[$1];
}}},
__convert:function($0,
$1){var $2=this.__extractType($1);
if($1.extend&&!$2){$2=$1.extend.type;
}$0.type=$2||"other";
if(!$2){return;
}var $3=function(){};
if($1.extend){$3.prototype=new $1.extend.$$clazz;
}var $4=$3.prototype;
var $5=$1[$2];
for(var $6 in $5){$4[$6]=$5[$6];
if($4[$6].base){{};
$4[$6].base=$1.extend;
}}$0.$$clazz=$3;
$0[$2]=new $3;
},
__registry:{},
__inheritableKeys:["colors",
"borders",
"fonts",
"icons",
"widgets",
"appearances",
"meta"],
__allowedKeys:null,
__metaKeys:null,
__validateConfig:function(){},
patch:function($0,
$1){var $2=this.__extractType($1);
if($2!==this.__extractType($0)){throw new Error("The mixins '"+$0.name+"' are not compatible '"+$1.name+"'!");
}var $3=$1[$2];
var $4=$0[$2];
for(var $5 in $3){$4[$5]=$3[$5];
}},
include:function($0,
$1){var $2=$1.type;
if($2!==$0.type){throw new Error("The mixins '"+$0.name+"' are not compatible '"+$1.name+"'!");
}var $3=$1[$2];
var $4=$0[$2];
for(var $5 in $3){if($4[$5]!==undefined){throw new Error("It is not allowed to overwrite the key '"+$5+"' of theme '"+$0.name+"' by mixin theme '"+$1.name+"'.");
}$4[$5]=$3[$5];
}}}});




/* ID: qx.core.Target */
qx.Class.define("qx.core.Target",
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
members:{addEventListener:function($0,
$1,
$2){if(this.getDisposed()){return;
}{};
if(this.__listeners===undefined){this.__listeners={};
}
if(this.__listeners[$0]===undefined){this.__listeners[$0]={};
}var $3="event"+qx.core.Object.toHashCode($1)+($2?"$"+qx.core.Object.toHashCode($2):"");
this.__listeners[$0][$3]={handler:$1,
object:$2};
},
removeEventListener:function($0,
$1,
$2){if(this.getDisposed()){return;
}var $3=this.__listeners;
if(!$3||$3[$0]===undefined){return;
}
if(typeof $1!=="function"){throw new Error("qx.core.Target: removeEventListener("+$0+"): '"+$1+"' is not a function!");
}var $4="event"+qx.core.Object.toHashCode($1)+($2?"$"+qx.core.Object.toHashCode($2):"");
delete this.__listeners[$0][$4];
},
hasEventListeners:function($0){return this.__listeners&&this.__listeners[$0]!==undefined&&!qx.lang.Object.isEmpty(this.__listeners[$0]);
},
createDispatchEvent:function($0){if(this.hasEventListeners($0)){this.dispatchEvent(new qx.event.type.Event($0),
true);
}},
createDispatchDataEvent:function($0,
$1){if(this.hasEventListeners($0)){this.dispatchEvent(new qx.event.type.DataEvent($0,
$1),
true);
}},
createDispatchChangeEvent:function($0,
$1,
$2){if(this.hasEventListeners($0)){this.dispatchEvent(new qx.event.type.ChangeEvent($0,
$1,
$2),
true);
}},
dispatchEvent:function($0,
$1){if(this.getDisposed()){return;
}
if($0.getTarget()==null){$0.setTarget(this);
}
if($0.getCurrentTarget()==null){$0.setCurrentTarget(this);
}this._dispatchEvent($0,
$1);
var $2=$0.getDefaultPrevented();
$1&&$0.dispose();
return !$2;
},
_dispatchEvent:function($0){var $1=this.__listeners;
if($1){$0.setCurrentTarget(this);
var $2=$1[$0.getType()];
if($2){var $3,
$4;
for(var $5 in $2){$3=$2[$5].handler;
$4=$2[$5].object||this;
$3.call($4,
$0);
}}}if($0.getBubbles()&&!$0.getPropagationStopped()&&typeof (this.getParent)=="function"){var $6=this.getParent();
if($6&&!$6.getDisposed()&&$6.getEnabled()){$6._dispatchEvent($0);
}}}},
destruct:function(){this._disposeObjectDeep("__listeners",
2);
}});




/* ID: qx.event.type.Event */
qx.Class.define("qx.event.type.Event",
{extend:qx.core.Object,
construct:function($0){arguments.callee.base.call(this);
this.setType($0);
},
properties:{type:{_fast:true,
setOnlyOnce:true},
originalTarget:{_fast:true,
setOnlyOnce:true},
target:{_fast:true,
setOnlyOnce:true},
relatedTarget:{_fast:true,
setOnlyOnce:true},
currentTarget:{_fast:true},
bubbles:{_fast:true,
defaultValue:false,
noCompute:true},
propagationStopped:{_fast:true,
defaultValue:true,
noCompute:true},
defaultPrevented:{_fast:true,
defaultValue:false,
noCompute:true}},
members:{_autoDispose:false,
preventDefault:function(){this.setDefaultPrevented(true);
},
stopPropagation:function(){this.setPropagationStopped(true);
}},
destruct:function(){this._disposeFields("_valueOriginalTarget",
"_valueTarget",
"_valueRelatedTarget",
"_valueCurrentTarget");
}});




/* ID: qx.event.type.DataEvent */
qx.Class.define("qx.event.type.DataEvent",
{extend:qx.event.type.Event,
construct:function($0,
$1){arguments.callee.base.call(this,
$0);
this.setData($1);
},
properties:{propagationStopped:{_fast:true,
defaultValue:false},
data:{_fast:true}},
destruct:function(){this._disposeFields("_valueData");
}});




/* ID: qx.event.type.ChangeEvent */
qx.Class.define("qx.event.type.ChangeEvent",
{extend:qx.event.type.Event,
construct:function($0,
$1,
$2){arguments.callee.base.call(this,
$0);
this.setValue($1);
this.setOldValue($2);
},
properties:{value:{_fast:true},
oldValue:{_fast:true}},
members:{getData:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use getValue() instead!");
return this.getValue();
}},
destruct:function(){this._disposeFields("_valueValue",
"_valueOldValue");
}});




/* ID: qx.log.Filter */
qx.Class.define("qx.log.Filter",
{extend:qx.core.Object,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
statics:{ACCEPT:1,
DENY:2,
NEUTRAL:3},
members:{decide:function($0){throw new Error("decide is abstract");
}}});




/* ID: qx.log.DefaultFilter */
qx.Class.define("qx.log.DefaultFilter",
{extend:qx.log.Filter,
construct:function(){arguments.callee.base.call(this);
},
properties:{enabled:{check:"Boolean",
init:true},
minLevel:{check:"Number",
nullable:true}},
members:{decide:function($0){var $1=qx.log.Filter;
if(!this.getEnabled()){return $1.DENY;
}else if(this.getMinLevel()==null){return $1.NEUTRAL;
}else{return ($0.level>=this.getMinLevel())?$1.ACCEPT:$1.DENY;
}}}});




/* ID: qx.log.LogEventProcessor */
qx.Class.define("qx.log.LogEventProcessor",
{extend:qx.core.Object,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
members:{addFilter:function($0){if(this._filterArr==null){this._filterArr=[];
}this._filterArr.push($0);
},
clearFilters:function(){this._filterArr=null;
},
getHeadFilter:function(){return (this._filterArr==null||this._filterArr.length==0)?null:this._filterArr[0];
},
_getDefaultFilter:function(){var $0=this.getHeadFilter();
if(!($0 instanceof qx.log.DefaultFilter)){this.clearFilters();
$0=new qx.log.DefaultFilter();
this.addFilter($0);
}return $0;
},
setEnabled:function($0){this._getDefaultFilter().setEnabled($0);
},
setMinLevel:function($0){this._getDefaultFilter().setMinLevel($0);
},
decideLogEvent:function($0){var $1=qx.log.Filter.NEUTRAL;
if(this._filterArr!=null){for(var $2=0;$2<this._filterArr.length;$2++){var $3=this._filterArr[$2].decide($0);
if($3!=$1){return $3;
}}}return $1;
},
handleLogEvent:function($0){throw new Error("handleLogEvent is abstract");
}},
destruct:function(){this._disposeFields("_filterArr");
}});




/* ID: qx.log.appender.Abstract */
qx.Class.define("qx.log.appender.Abstract",
{extend:qx.log.LogEventProcessor,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
properties:{useLongFormat:{check:"Boolean",
init:true}},
members:{handleLogEvent:function($0){if(this.decideLogEvent($0)!=qx.log.Filter.DENY){this.appendLogEvent($0);
}},
appendLogEvent:function($0){throw new Error("appendLogEvent is abstract");
},
formatLogEvent:function($0){var $1=qx.log.Logger;
var $2="";
var $3=new String(new Date().getTime()-qx.core.Bootstrap.LOADSTART);
while($3.length<6){$3="0"+$3;
}$2+=$3;
if(this.getUseLongFormat()){switch($0.level){case $1.LEVEL_DEBUG:$2+=" DEBUG: ";
break;
case $1.LEVEL_INFO:$2+=" INFO:  ";
break;
case $1.LEVEL_WARN:$2+=" WARN:  ";
break;
case $1.LEVEL_ERROR:$2+=" ERROR: ";
break;
case $1.LEVEL_FATAL:$2+=" FATAL: ";
break;
}}else{$2+=": ";
}var $4="";
for(var $5=0;$5<$0.indent;$5++){$4+="  ";
}$2+=$4;
if(this.getUseLongFormat()){$2+=$0.logger.getName();
if($0.instanceId!=null){$2+="["+$0.instanceId+"]";
}$2+=": ";
}if(typeof $0.message=="string"){$2+=$0.message;
}else{var $6=$0.message;
if($6==null){$2+="Object is null";
}else{$2+="--- Object: "+$6+" ---\n";
var $7=new Array();
try{for(var $8 in $6){$7.push($8);
}}catch(exc){$2+=$4+"  [not readable: "+exc+"]\n";
}$7.sort();
for(var $5=0;$5<$7.length;$5++){try{$2+=$4+"  "+$7[$5]+"="+$6[$7[$5]]+"\n";
}catch(exc){$2+=$4+"  "+$7[$5]+"=[not readable: "+exc+"]\n";
}}$2+=$4+"--- End of object ---";
}}if($0.throwable!=null){var $9=$0.throwable;
if($9.name==null){$2+=": "+$9;
}else{$2+=": "+$9.name;
}
if($9.message!=null){$2+=" - "+$9.message;
}
if($9.number!=null){$2+=" (#"+$9.number+")";
}var $a=qx.dev.StackTrace.getStackTraceFromError($9);
}
if($0.trace){var $a=$0.trace;
}
if($a&&$a.length>0){$2+="\n";
for(var $5=0;$5<$a.length;$5++){$2+="  at "+$a[$5]+"\n";
}}return $2;
}}});




/* ID: qx.log.appender.Window */
qx.Class.define("qx.log.appender.Window",
{extend:qx.log.appender.Abstract,
construct:function($0){arguments.callee.base.call(this);
this._id=qx.log.appender.Window.register(this);
this._name=$0;
if(this._name==null){var $1=window.location.href;
var $2=0;
for(var $3=0;$3<$1.length;$3++){$2=($2+$1.charCodeAt($3))%10000000;
}this._name="qx_log_"+$2;
}this._errorsPreventingAutoCloseCount=0;
this._divDataSets=[];
this._filterTextWords=[];
this._filterText="";
},
statics:{_nextId:1,
_registeredAppenders:{},
register:function($0){var $1=qx.log.appender.Window;
var $2=$1._nextId++;
$1._registeredAppenders[$2]=$0;
return $2;
},
getAppender:function($0){return qx.log.appender.Window._registeredAppenders[$0];
}},
properties:{maxMessages:{check:"Integer",
init:500},
popUnder:{check:"Boolean",
init:false},
autoCloseWithErrors:{check:"Boolean",
init:true,
apply:"_applyAutoCloseWithErrors"},
windowWidth:{check:"Integer",
init:600},
windowHeight:{check:"Integer",
init:350},
windowLeft:{check:"Integer",
nullable:true},
windowTop:{check:"Integer",
nullable:true}},
members:{openWindow:function(){if(this._inLogWindowCallback){return;
}this._inLogWindowCallback=true;
if(this._logWindow&&!this._logWindow.closed){return ;
}var $0=this.getWindowWidth();
var $1=this.getWindowHeight();
var $2=this.getWindowLeft();
if($2===null){$2=window.screen.width-$0;
}var $3=this.getWindowTop();
if($3===null){$3=window.screen.height-$1;
}var $4="toolbar=no,scrollbars=no,resizable=yes,"+"width="+$0+",height="+$1+",left="+$2+",top="+$3;
this._logWindow=window.open("",
this._name,
$4);
qx.client.Timer.once(this._openWindowCallback,
this,
200);
},
_openWindowCallback:function(){delete this._inLogWindowCallback;
if(!this._logWindow||this._logWindow.closed){if(this._popupBlockerWarning){return;
}alert("Could not open log window. Please disable your popup blocker!");
this._popupBlockerWarning=true;
return;
}this._popupBlockerWarning=false;
if(this.getPopUnder()){this._logWindow.blur();
window.focus();
}var $0=this._logWindow.document;
var $1=qx.core.Variant.isSet("qx.client",
"mshtml")?'#lines { width: 100%; height: expression((document.body.offsetHeight - 30) + "px"); }':'';
$0.open();
$0.write("<html><head><title>"+this._name+"</title></head>"+'<body onload="qx = opener.qx;" onunload="try{qx.log.WindowAppender._registeredAppenders['+this._id+']._autoCloseWindow()}catch(e){}">'+'  <style type="text/css">'+'    html, body, input, pre{ font-size: 11px; font-family: Tahoma, sans-serif; line-height : 1 }'+'    html, body{ padding: 0; margin: 0; border : 0 none; }'+'    * { box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box }'+'    #lines{ top: 30px; left: 0; right: 0; bottom: 0; position: absolute; overflow: auto; }'+'    #control { top: 0; left: 0; right: 0; padding: 4px 8px; background: #eee; border-bottom: 1px solid #ccc; height: 30px }'+'    pre { margin: 0; padding: 4px 8px; font-family: Consolas, "Bitstream Vera Sans Mono", monospace; }'+'    hr { border: 0 none; border-bottom: 1px solid #ccc; margin: 8px 0; padding: 0; height: 1px }'+$1+'  </style>'+'  <div id="control">'+'    <input id="marker" type="button" value="Add divider"/> &#160; &#160; Filter: <input name="filter" id="filter" type="text" value="'+this._filterText+'">'+'  </div>'+'  <div id="lines">'+'    <pre id="log" wrap="wrap"></pre>'+'  </div>'+'</body></html>');
$0.close();
this._logElem=$0.getElementById("log");
this._markerBtn=$0.getElementById("marker");
this._filterInput=$0.getElementById("filter");
this._logLinesDiv=$0.getElementById("lines");
var $2=this;
this._markerBtn.onclick=function(){$2._showMessageInLog("<hr/>");
};
this._filterInput.onkeyup=function(){$2.setFilterText($2._filterInput.value);
};
if(this._logEventQueue!=null){for(var $3=0;$3<this._logEventQueue.length;$3++){this.appendLogEvent(this._logEventQueue[$3]);
}this._logEventQueue.length=0;
}},
closeWindow:function(){if(this._logWindow!=null){this._logWindow.close();
this._logWindow=null;
this._logElem=null;
}},
_autoCloseWindow:function(){if(this.getAutoCloseWithErrors()||this._errorsPreventingAutoCloseCount==0){this.closeWindow();
}else{this._showMessageInLog("Log window message: <b>Note: "+this._errorsPreventingAutoCloseCount+" errors have been recorded, keeping log window open.</b>");
}},
_showMessageInLog:function($0){var $1={message:$0,
isDummyEventForMessage:true};
this.appendLogEvent($1);
},
appendLogEvent:function($0){if(!this._logWindow||this._logWindow.closed){if(!this._logEventQueue){this._logEventQueue=[];
}this._logEventQueue.push($0);
this.openWindow();
}else if(this._logElem==null){this._logEventQueue.push($0);
}else{var $1=this._logWindow.document.createElement("div");
if($0.level>=qx.log.Logger.LEVEL_ERROR){$1.style.backgroundColor="#FFEEEE";
if(!this.getAutoCloseWithErrors()){this._errorsPreventingAutoCloseCount+=1;
}}else if($0.level==qx.log.Logger.LEVEL_DEBUG){$1.style.color="gray";
}var $2;
if($0.isDummyEventForMessage){$2=$0.message;
}else{$2=qx.html.String.fromText(this.formatLogEvent($0));
}$1.innerHTML=$2;
this._logElem.appendChild($1);
var $3={txt:$2.toUpperCase(),
elem:$1};
this._divDataSets.push($3);
this._setDivVisibility($3);
while(this._logElem.childNodes.length>this.getMaxMessages()){this._logElem.removeChild(this._logElem.firstChild);
if(this._removedMessageCount==null){this._removedMessageCount=1;
}else{this._removedMessageCount++;
}}
if(this._removedMessageCount!=null){this._logElem.firstChild.innerHTML="("+this._removedMessageCount+" messages removed)";
}this._logLinesDiv.scrollTop=this._logLinesDiv.scrollHeight;
}},
setFilterText:function($0){if($0==null){$0="";
}this._filterText=$0;
$0=$0.toUpperCase();
this._filterTextWords=$0.split(" ");
for(var $1=0;$1<this._divDataSets.length;$1++){this._setDivVisibility(this._divDataSets[$1]);
}},
_setDivVisibility:function($0){var $1=true;
for(var $2=0;$1&&($2<this._filterTextWords.length);$2++){$1=$0.txt.indexOf(this._filterTextWords[$2])>=0;
}$0.elem.style["display"]=($1?"":"none");
},
_applyAutoCloseWithErrors:function($0,
$1){if(!$0&&$1){this._errorsPreventingAutoCloseCount=0;
this._showMessageInLog("Log window message: Starting error recording, any errors below this line will prevent the log window from closing");
}else if($0&&!$1){this._showMessageInLog("Log window message: Stopping error recording, discarding "+this._errorsPreventingAutoCloseCount+" errors.");
}}},
destruct:function(){try{if(this._markerBtn){this._markerBtn.onclick=null;
}
if(this._filterInput){this._filterInput.onkeyup=null;
}}catch(ex){}this._autoCloseWindow();
this._disposeFields("_markerBtn",
"_filterInput",
"_logLinesDiv",
"_logEventQueue",
"_filterTextWords",
"_divDataSets");
}});




/* ID: qx.client.Timer */
qx.Class.define("qx.client.Timer",
{extend:qx.core.Target,
construct:function($0){arguments.callee.base.call(this);
this.setEnabled(false);
if($0!=null){this.setInterval($0);
}this.__oninterval=qx.lang.Function.bind(this._oninterval,
this);
},
events:{"interval":"qx.event.type.Event"},
statics:{once:function($0,
$1,
$2){var $3=new qx.client.Timer($2);
$3.addEventListener("interval",
function($4){$3.dispose();
$0.call($1,
$4);
$1=null;
},
$1);
$3.start();
}},
properties:{enabled:{init:true,
check:"Boolean",
apply:"_applyEnabled"},
interval:{check:"Integer",
init:1000,
apply:"_applyInterval"}},
members:{__intervalHandler:null,
_applyInterval:function($0,
$1){if(this.getEnabled()){this.restart();
}},
_applyEnabled:function($0,
$1){if($1){window.clearInterval(this.__intervalHandler);
this.__intervalHandler=null;
}else if($0){this.__intervalHandler=window.setInterval(this.__oninterval,
this.getInterval());
}},
start:function(){this.setEnabled(true);
},
startWith:function($0){this.setInterval($0);
this.start();
},
stop:function(){this.setEnabled(false);
},
restart:function(){this.stop();
this.start();
},
restartWith:function($0){this.stop();
this.startWith($0);
},
_oninterval:function(){if(this.getEnabled()){this.createDispatchEvent("interval");
}}},
destruct:function(){if(this.__intervalHandler){window.clearInterval(this.__intervalHandler);
}this._disposeFields("__intervalHandler",
"__oninterval");
}});




/* ID: qx.log.appender.FireBug */
qx.Class.define("qx.log.appender.FireBug",
{extend:qx.log.appender.Abstract,
construct:function(){arguments.callee.base.call(this);
},
members:{appendLogEvent:function($0){if(typeof console!='undefined'){var $1=qx.log.Logger;
var $2=this.formatLogEvent($0);
switch($0.level){case $1.LEVEL_DEBUG:if(console.debug){console.debug($2);
}break;
case $1.LEVEL_INFO:if(console.info){console.info($2);
}break;
case $1.LEVEL_WARN:if(console.warn){console.warn($2);
}break;
default:if(console.error){console.error($2);
}break;
}if($0.level>=$1.LEVEL_WARN&&(!$0.throwable||!$0.throwable.stack)&&console.trace){console.trace();
}}}}});




/* ID: qx.log.appender.Native */
qx.Class.define("qx.log.appender.Native",
{extend:qx.log.appender.Abstract,
construct:function(){arguments.callee.base.call(this);
if(typeof console!='undefined'&&console.debug&&!console.emu){this._appender=new qx.log.appender.FireBug;
}else{this._appender=new qx.log.appender.Window;
}},
members:{appendLogEvent:function($0){if(this._appender){return this._appender.appendLogEvent($0);
}}},
destruct:function(){this._disposeObjects("_appender");
}});




/* ID: qx.log.Logger */
qx.Class.define("qx.log.Logger",
{extend:qx.log.LogEventProcessor,
construct:function($0,
$1){arguments.callee.base.call(this);
this._name=$0;
this._parentLogger=$1;
},
statics:{deprecatedMethodWarning:function($0,
$1){var $2,
$3,
$4;
},
deprecatedClassWarning:function($0,
$1){var $2,
$3;
},
getClassLogger:function($0){var $1=$0._logger;
if($1==null){var $2=$0.classname;
var $3=$2.split(".");
var $4=window;
var $5="";
var $6=qx.log.Logger.ROOT_LOGGER;
for(var $7=0;$7<$3.length-1;$7++){$4=$4[$3[$7]];
$5+=(($7!=0)?".":"")+$3[$7];
if($4._logger==null){$4._logger=new qx.log.Logger($5,
$6);
}$6=$4._logger;
}$1=new qx.log.Logger($2,
$6);
$0._logger=$1;
}return $1;
},
_indent:0,
LEVEL_ALL:0,
LEVEL_DEBUG:200,
LEVEL_INFO:500,
LEVEL_WARN:600,
LEVEL_ERROR:700,
LEVEL_FATAL:800,
LEVEL_OFF:1000,
ROOT_LOGGER:null},
members:{getName:function(){return this._name;
},
getParentLogger:function(){return this._parentLogger;
},
indent:function(){qx.log.Logger._indent++;
},
unindent:function(){qx.log.Logger._indent--;
},
addAppender:function($0){if(this._appenderArr==null){this._appenderArr=[];
}this._appenderArr.push($0);
},
removeAppender:function($0){if(this._appenderArr!=null){this._appenderArr.remove($0);
}},
removeAllAppenders:function(){this._appenderArr=null;
},
handleLogEvent:function($0){var $1=qx.log.Filter;
var $2=$1.NEUTRAL;
var $3=this;
while($2==$1.NEUTRAL&&$3!=null){$2=$3.decideLogEvent($0);
$3=$3.getParentLogger();
}
if($2!=$1.DENY){this.appendLogEvent($0);
}},
appendLogEvent:function($0){if(this._appenderArr!=null&&this._appenderArr.length!=0){for(var $1=0;$1<this._appenderArr.length;$1++){this._appenderArr[$1].handleLogEvent($0);
}}else if(this._parentLogger!=null){this._parentLogger.appendLogEvent($0);
}},
log:function($0,
$1,
$2,
$3,
$4){var $5={logger:this,
level:$0,
message:$1,
throwable:$3,
trace:$4,
indent:qx.log.Logger._indent,
instanceId:$2};
this.handleLogEvent($5);
},
debug:function($0,
$1,
$2){this.log(qx.log.Logger.LEVEL_DEBUG,
$0,
$1,
$2);
},
info:function($0,
$1,
$2){this.log(qx.log.Logger.LEVEL_INFO,
$0,
$1,
$2);
},
warn:function($0,
$1,
$2){this.log(qx.log.Logger.LEVEL_WARN,
$0,
$1,
$2);
},
error:function($0,
$1,
$2){this.log(qx.log.Logger.LEVEL_ERROR,
$0,
$1,
$2);
},
fatal:function($0,
$1,
$2){this.log(qx.log.Logger.LEVEL_FATAL,
$0,
$1,
$2);
},
measureReset:function(){if(this._totalMeasureTime!=null){this.debug("Measure reset. Total measure time: "+this._totalMeasureTime+" ms");
}this._lastMeasureTime=null;
this._totalMeasureTime=null;
},
measure:function($0,
$1,
$2){if(this._lastMeasureTime==null){$0="(measure start) "+$0;
}else{var $3=new Date().getTime()-this._lastMeasureTime;
if(this._totalMeasureTime==null){this._totalMeasureTime=0;
}this._totalMeasureTime+=$3;
$0="(passed time: "+$3+" ms) "+$0;
}this.debug($0,
$1,
$2);
this._lastMeasureTime=new Date().getTime();
},
printStackTrace:function(){var $0=qx.dev.StackTrace.getStackTrace();
qx.lang.Array.removeAt($0,
0);
this.log(qx.log.Logger.LEVEL_DEBUG,
"Current stack trace",
"",
null,
$0);
}},
settings:{"qx.logAppender":"qx.log.appender.Native",
"qx.minLogLevel":200},
defer:function($0){$0.ROOT_LOGGER=new $0("root",
null);
$0.ROOT_LOGGER.setMinLevel(qx.core.Setting.get("qx.minLogLevel"));
$0.ROOT_LOGGER.addAppender(new (qx.Class.getByName(qx.core.Setting.get("qx.logAppender"))));
},
destruct:function(){this._disposeFields("_parentLogger",
"_appenderArr");
}});




/* ID: qx.dev.StackTrace */
qx.Class.define("qx.dev.StackTrace",
{statics:{getStackTrace:qx.core.Variant.select("qx.client",
{"gecko":function(){try{throw new Error();
}catch(e){var $0=this.getStackTraceFromError(e);
qx.lang.Array.removeAt($0,
0);
var $1=this.getStackTraceFromCaller(arguments);
var $2=$1.length>$0.length?$1:$0;
for(var $3=0;$3<Math.min($1.length,
$0.length);$3++){var $4=$1[$3];
if($4.indexOf("anonymous")>=0){continue;
}var $5=$4.split(":");
if($5.length!=2){continue;
}var $6=$5[0];
var $7=$5[1];
var $8=$0[$3];
var $9=$8.split(":");
var $a=$9[0];
var $b=$9[1];
if(qx.Class.getByName($a)){var $c=$a;
}else{$c=$6;
}var $d=$c+":";
if($7){$d+=$7+":";
}$d+=$b;
$2[$3]=$d;
}return $2;
}},
"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},
"opera":function(){var $0;
try{$0.bar();
}catch(e){var $1=this.getStackTraceFromError(e);
qx.lang.Array.removeAt($1,
0);
return $1;
}return [];
}}),
getStackTraceFromCaller:qx.core.Variant.select("qx.client",
{"opera":function($0){return [];
},
"default":function($0){var $1=[];
var $2=qx.lang.Function.getCaller($0);
var $3={};
while($2){var $4=this.getFunctionName($2);
$1.push($4);
try{$2=$2.caller;
}catch(e){break;
}
if(!$2){break;
}var $5=qx.core.Object.toHashCode($2);
if($3[$5]){$1.push("...");
break;
}$3[$5]=$2;
}return $1;
}}),
getStackTraceFromError:qx.core.Variant.select("qx.client",
{"gecko":function($0){if(!$0.stack){return [];
}var $1=/@(.+):(\d+)$/gm;
var $2;
var $3=[];
while(($2=$1.exec($0.stack))!=null){var $4=$2[1];
var $5=$2[2];
var $6=this.__fileNameToClassName($4);
$3.push($6+":"+$5);
}return $3;
},
"webkit":function($0){if($0.sourceURL&&$0.line){return [this.__fileNameToClassName($0.sourceURL)+":"+$0.line];
}},
"opera":function($0){if($0.message.indexOf("Backtrace:")<0){return [];
}var $1=[];
var $2=qx.lang.String.trim($0.message.split("Backtrace:")[1]);
var $3=$2.split("\n");
for(var $4=0;$4<$3.length;$4++){var $5=$3[$4].match(/\s*Line ([0-9]+) of.* (\S.*)/);
if($5&&$5.length>=2){var $6=$5[1];
var $7=this.__fileNameToClassName($5[2]);
$1.push($7+":"+$6);
}}return $1;
},
"default":function(){return [];
}}),
getFunctionName:function($0){if($0.$$original){return $0.classname+":constructor wrapper";
}
if($0.wrapper){return $0.wrapper.classname+":constructor";
}
if($0.classname){return $0.classname+":constructor";
}
if($0.mixin){for(var $1 in $0.mixin.$$members){if($0.mixin.$$members[$1]==$0){return $0.mixin.name+":"+$1;
}}for(var $1 in $0.mixin){if($0.mixin[$1]==$0){return $0.mixin.name+":"+$1;
}}}
if($0.self){var $2=$0.self.constructor;
if($2){for(var $1 in $2.prototype){if($2.prototype[$1]==$0){return $2.classname+":"+$1;
}}for(var $1 in $2){if($2[$1]==$0){return $2.classname+":"+$1;
}}}}var $3=$0.toString().match(/(function\s*\w*\(.*?\))/);
if($3&&$3.length>=1&&$3[1]){return $3[1];
}var $3=$0.toString().match(/(function\s*\(.*?\))/);
if($3&&$3.length>=1&&$3[1]){return "anonymous: "+$3[1];
}return 'anonymous';
},
__fileNameToClassName:function($0){var $1="/source/class/";
var $2=$0.indexOf($1);
var $3=($2==-1)?$0:$0.substring($2+$1.length).replace(/\//g,
".").replace(/\.js$/,
"");
return $3;
}}});




/* ID: qx.html.String */
qx.Class.define("qx.html.String",
{statics:{escape:function($0){return qx.dom.String.escapeEntities($0,
qx.html.Entity.FROM_CHARCODE);
},
unescape:function($0){return qx.dom.String.unescapeEntities($0,
qx.html.Entity.TO_CHARCODE);
},
fromText:function($0){return qx.html.String.escape($0).replace(/(  |\n)/g,
function($1){var $2={"  ":" &nbsp;",
"\n":"<br>"};
return $2[$1]||$1;
});
},
toText:function($0){return qx.html.String.unescape($0.replace(/\s+|<([^>])+>/gi,
function($1){if(/\s+/.test($1)){return " ";
}else if(/^<BR|^<br/gi.test($1)){return "\n";
}else{return "";
}}));
}}});




/* ID: qx.dom.String */
qx.Class.define("qx.dom.String",
{statics:{escapeEntities:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){var $2,
$3=[];
for(var $4=0,
$5=$0.length;$4<$5;$4++){var $6=$0.charAt($4);
var $7=$6.charCodeAt(0);
if($1[$7]){$2="&"+$1[$7]+";";
}else{if($7>0x7F){$2="&#"+$7+";";
}else{$2=$6;
}}$3[$3.length]=$2;
}return $3.join("");
},
"default":function($0,
$1){var $2,
$3="";
for(var $4=0,
$5=$0.length;$4<$5;$4++){var $6=$0.charAt($4);
var $7=$6.charCodeAt(0);
if($1[$7]){$2="&"+$1[$7]+";";
}else{if($7>0x7F){$2="&#"+$7+";";
}else{$2=$6;
}}$3+=$2;
}return $3;
}}),
unescapeEntities:function($0,
$1){return $0.replace(/&[#\w]+;/gi,
function($2){var $3=$2;
var $2=$2.substring(1,
$2.length-1);
var $4=$1[$2];
if($4){$3=String.fromCharCode($4);
}else{if($2.charAt(0)=='#'){if($2.charAt(1).toUpperCase()=='X'){$4=$2.substring(2);
if($4.match(/^[0-9A-Fa-f]+$/gi)){$3=String.fromCharCode(parseInt("0x"+$4));
}}else{$4=$2.substring(1);
if($4.match(/^\d+$/gi)){$3=String.fromCharCode(parseInt($4));
}}}}return $3;
});
},
stripTags:function($0){return $0.replace(/<\/?[^>]+>/gi,
"");
}}});




/* ID: qx.html.Entity */
qx.Class.define("qx.html.Entity",
{statics:{TO_CHARCODE:{"quot":34,
"amp":38,
"lt":60,
"gt":62,
"nbsp":160,
"iexcl":161,
"cent":162,
"pound":163,
"curren":164,
"yen":165,
"brvbar":166,
"sect":167,
"uml":168,
"copy":169,
"ordf":170,
"laquo":171,
"not":172,
"shy":173,
"reg":174,
"macr":175,
"deg":176,
"plusmn":177,
"sup2":178,
"sup3":179,
"acute":180,
"micro":181,
"para":182,
"middot":183,
"cedil":184,
"sup1":185,
"ordm":186,
"raquo":187,
"frac14":188,
"frac12":189,
"frac34":190,
"iquest":191,
"Agrave":192,
"Aacute":193,
"Acirc":194,
"Atilde":195,
"Auml":196,
"Aring":197,
"AElig":198,
"Ccedil":199,
"Egrave":200,
"Eacute":201,
"Ecirc":202,
"Euml":203,
"Igrave":204,
"Iacute":205,
"Icirc":206,
"Iuml":207,
"ETH":208,
"Ntilde":209,
"Ograve":210,
"Oacute":211,
"Ocirc":212,
"Otilde":213,
"Ouml":214,
"times":215,
"Oslash":216,
"Ugrave":217,
"Uacute":218,
"Ucirc":219,
"Uuml":220,
"Yacute":221,
"THORN":222,
"szlig":223,
"agrave":224,
"aacute":225,
"acirc":226,
"atilde":227,
"auml":228,
"aring":229,
"aelig":230,
"ccedil":231,
"egrave":232,
"eacute":233,
"ecirc":234,
"euml":235,
"igrave":236,
"iacute":237,
"icirc":238,
"iuml":239,
"eth":240,
"ntilde":241,
"ograve":242,
"oacute":243,
"ocirc":244,
"otilde":245,
"ouml":246,
"divide":247,
"oslash":248,
"ugrave":249,
"uacute":250,
"ucirc":251,
"uuml":252,
"yacute":253,
"thorn":254,
"yuml":255,
"fnof":402,
"Alpha":913,
"Beta":914,
"Gamma":915,
"Delta":916,
"Epsilon":917,
"Zeta":918,
"Eta":919,
"Theta":920,
"Iota":921,
"Kappa":922,
"Lambda":923,
"Mu":924,
"Nu":925,
"Xi":926,
"Omicron":927,
"Pi":928,
"Rho":929,
"Sigma":931,
"Tau":932,
"Upsilon":933,
"Phi":934,
"Chi":935,
"Psi":936,
"Omega":937,
"alpha":945,
"beta":946,
"gamma":947,
"delta":948,
"epsilon":949,
"zeta":950,
"eta":951,
"theta":952,
"iota":953,
"kappa":954,
"lambda":955,
"mu":956,
"nu":957,
"xi":958,
"omicron":959,
"pi":960,
"rho":961,
"sigmaf":962,
"sigma":963,
"tau":964,
"upsilon":965,
"phi":966,
"chi":967,
"psi":968,
"omega":969,
"thetasym":977,
"upsih":978,
"piv":982,
"bull":8226,
"hellip":8230,
"prime":8242,
"Prime":8243,
"oline":8254,
"frasl":8260,
"weierp":8472,
"image":8465,
"real":8476,
"trade":8482,
"alefsym":8501,
"larr":8592,
"uarr":8593,
"rarr":8594,
"darr":8595,
"harr":8596,
"crarr":8629,
"lArr":8656,
"uArr":8657,
"rArr":8658,
"dArr":8659,
"hArr":8660,
"forall":8704,
"part":8706,
"exist":8707,
"empty":8709,
"nabla":8711,
"isin":8712,
"notin":8713,
"ni":8715,
"prod":8719,
"sum":8721,
"minus":8722,
"lowast":8727,
"radic":8730,
"prop":8733,
"infin":8734,
"ang":8736,
"and":8743,
"or":8744,
"cap":8745,
"cup":8746,
"int":8747,
"there4":8756,
"sim":8764,
"cong":8773,
"asymp":8776,
"ne":8800,
"equiv":8801,
"le":8804,
"ge":8805,
"sub":8834,
"sup":8835,
"sube":8838,
"supe":8839,
"oplus":8853,
"otimes":8855,
"perp":8869,
"sdot":8901,
"lceil":8968,
"rceil":8969,
"lfloor":8970,
"rfloor":8971,
"lang":9001,
"rang":9002,
"loz":9674,
"spades":9824,
"clubs":9827,
"hearts":9829,
"diams":9830,
"OElig":338,
"oelig":339,
"Scaron":352,
"scaron":353,
"Yuml":376,
"circ":710,
"tilde":732,
"ensp":8194,
"emsp":8195,
"thinsp":8201,
"zwnj":8204,
"zwj":8205,
"lrm":8206,
"rlm":8207,
"ndash":8211,
"mdash":8212,
"lsquo":8216,
"rsquo":8217,
"sbquo":8218,
"ldquo":8220,
"rdquo":8221,
"bdquo":8222,
"dagger":8224,
"Dagger":8225,
"permil":8240,
"lsaquo":8249,
"rsaquo":8250,
"euro":8364}},
defer:function($0,
$1,
$2){$0.FROM_CHARCODE=qx.lang.Object.invert($0.TO_CHARCODE);
}});




/* ID: qx.html.EventRegistration */
qx.Class.define("qx.html.EventRegistration",
{statics:{addEventListener:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1,
$2){$0.attachEvent("on"+$1,
$2);
},
"default":function($0,
$1,
$2){$0.addEventListener($1,
$2,
false);
}}),
removeEventListener:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1,
$2){$0.detachEvent("on"+$1,
$2);
},
"default":function($0,
$1,
$2){$0.removeEventListener($1,
$2,
false);
}})}});




/* ID: qx.core.Init */
qx.Class.define("qx.core.Init",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._onloadWrapped=qx.lang.Function.bind(this._onload,
this);
this._onbeforeunloadWrapped=qx.lang.Function.bind(this._onbeforeunload,
this);
this._onunloadWrapped=qx.lang.Function.bind(this._onunload,
this);
qx.html.EventRegistration.addEventListener(window,
"load",
this._onloadWrapped);
qx.html.EventRegistration.addEventListener(window,
"beforeunload",
this._onbeforeunloadWrapped);
qx.html.EventRegistration.addEventListener(window,
"unload",
this._onunloadWrapped);
},
events:{"load":"qx.event.type.Event",
"beforeunload":"qx.event.type.Event",
"unload":"qx.event.type.Event"},
properties:{application:{nullable:true,
check:function($0){if(typeof $0=="function"){throw new Error("The application property takes an application instance as parameter "+"and no longer a class/constructor. You may have to fix your 'index.html'.");
}return $0&&qx.Class.hasInterface($0.constructor,
qx.application.IApplication);
}}},
members:{_autoDispose:false,
_onload:function($0){if(this._onloadDone){return;
}this._onloadDone=true;
this.createDispatchEvent("load");
this.debug("qooxdoo "+qx.core.Version.toString());
{this.debug("loaded "+qx.lang.Object.getLength(qx.OO.classes)+" old classes");
};
this.debug("loaded "+qx.Class.getTotalNumber()+" classes");
this.debug("loaded "+qx.Interface.getTotalNumber()+" interfaces");
this.debug("loaded "+qx.Mixin.getTotalNumber()+" mixins");
if(qx.Theme){this.debug("loaded "+qx.Theme.getTotalNumber()+" themes");
}
if(qx.locale&&qx.locale.Manager){this.debug("loaded "+qx.locale.Manager.getInstance().getAvailableLocales().length+" locales");
}var $1=qx.core.Client.getInstance();
this.debug("client: "+$1.getEngine()+"-"+$1.getMajor()+"."+$1.getMinor()+"/"+$1.getPlatform()+"/"+$1.getLocale());
this.debug("browser: "+$1.getBrowser()+"/"+($1.supportsSvg()?"svg":$1.supportsVml()?"vml":"none"));
{};
if(!this.getApplication()){var $2=qx.Class.getByName(qx.core.Setting.get("qx.application"));
if($2){this.setApplication(new $2(this));
}}
if(!this.getApplication()){return;
}this.debug("application: "+this.getApplication().classname+"["+this.getApplication().toHashCode()+"]");
var $3=new Date;
this.getApplication().main();
this.info("main runtime: "+(new Date-$3)+"ms");
},
_onbeforeunload:function($0){this.createDispatchEvent("beforeunload");
if(this.getApplication()){var $1=this.getApplication().close();
if($1!=null){$0.returnValue=$1;
}}},
_onunload:function($0){this.createDispatchEvent("unload");
if(this.getApplication()){this.getApplication().terminate();
}qx.core.Object.dispose(true);
}},
settings:{"qx.application":"qx.application.Gui"},
destruct:function(){qx.html.EventRegistration.removeEventListener(window,
"load",
this._onloadWrapped);
qx.html.EventRegistration.removeEventListener(window,
"beforeunload",
this._onbeforeunloadWrapped);
qx.html.EventRegistration.removeEventListener(window,
"unload",
this._onunloadWrapped);
},
defer:function($0,
$1,
$2){$0.getInstance();
}});




/* ID: qx.application.IApplication */
qx.Interface.define("qx.application.IApplication",
{members:{main:function(){return true;
},
close:function(){return true;
},
terminate:function(){return true;
}}});




/* ID: qx.core.Version */
qx.Class.define("qx.core.Version",
{statics:{major:0,
minor:0,
revision:0,
state:"",
svn:0,
folder:"",
toString:function(){return this.major+"."+this.minor+(this.revision==0?"":"."+this.revision)+(this.state==""?"":"-"+this.state)+(this.svn==0?"":" (r"+this.svn+")")+(this.folder==""?"":" ["+this.folder+"]");
},
__init:function(){var $0=qx.core.Setting.get("qx.version").split(" ");
var $1=$0.shift();
var $2=$0.join(" ");
if(/([0-9]+)\.([0-9]+)(\.([0-9]))?(-([a-z0-9]+))?/.test($1)){this.major=(RegExp.$1!=""?parseInt(RegExp.$1):0);
this.minor=(RegExp.$2!=""?parseInt(RegExp.$2):0);
this.revision=(RegExp.$4!=""?parseInt(RegExp.$4):0);
this.state=typeof RegExp.$6=="string"?RegExp.$6:"";
}
if(/(\(r([0-9]+)\))?(\s\[([a-zA-Z0-9_-]+)\])?/.test($2)){this.svn=(RegExp.$2!=""?parseInt(RegExp.$2):0);
this.folder=typeof RegExp.$4=="string"?RegExp.$4:"";
}}},
settings:{"qx.version":"0.0"},
defer:function($0){$0.__init();
}});




/* ID: qx.OO */
{qx.Class.define("qx.OO",
{statics:{classes:{},
defineClass:function($0,
$1,
$2){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use qx.Class.define instead");
var $3=$0.split(".");
var $4=$3.length-1;
var $5=window;
for(var $6=0;$6<$4;$6++){if(typeof $5[$3[$6]]==="undefined"){$5[$3[$6]]={};
}$5=$5[$3[$6]];
}if(typeof $1==="undefined"){if(typeof $2!=="undefined"){throw new Error("SuperClass is undefined, but constructor was given for class: "+$0);
}qx.Clazz=$5[$3[$6]]={};
qx.Proto=null;
qx.Super=null;
}else if(typeof $2==="undefined"){qx.Clazz=$5[$3[$6]]=$1;
qx.Proto=null;
qx.Super=$1;
}else{qx.Clazz=$5[$3[$6]]=$2;
var $7=function(){};
$7.prototype=$1.prototype;
qx.Proto=$2.prototype=new $7;
qx.Super=$2.superclass=$1;
qx.Proto.classname=$2.classname=$0;
qx.Proto.constructor=$2;
}qx.OO.classes[$0]=qx.Class;
},
isAvailable:function($0){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.OO.classes[$0]!=null;
},
addFastProperty:function($0){{};
return qx.core.LegacyProperty.addFastProperty($0,
qx.Proto);
},
addCachedProperty:function($0){{};
return qx.core.LegacyProperty.addCachedProperty($0,
qx.Proto);
},
addPropertyGroup:function($0){{};
return qx.Class.addPropertyGroup($0,
qx.Proto);
},
removeProperty:function($0){{};
return qx.core.LegacyProperty.removeProperty($0,
qx.Proto);
},
changeProperty:function($0){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.core.LegacyProperty.addProperty($0,
qx.Proto);
},
addProperty:function($0){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.core.LegacyProperty.addProperty($0,
qx.Proto);
}}});
};




/* ID: qx.theme.classic.color.Royale */
qx.Theme.define("qx.theme.classic.color.Royale",
{title:"Windows Royale",
colors:{"background":[235,
233,
237],
"border-light":"white",
"border-light-shadow":[220,
223,
228],
"border-dark":[133,
135,
140],
"border-dark-shadow":[167,
166,
170],
"effect":[254,
200,
60],
"selected":[51,
94,
168],
"text":"black",
"text-disabled":[167,
166,
170],
"text-selected":"white",
"tooltip":[255,
255,
225],
"tooltip-text":"black",
"menu":"white",
"list":"white",
"field":"white",
"button":[235,
233,
237],
"button-hover":[246,
245,
247],
"button-abandoned":[235,
233,
237],
"window-active-caption-text":[255,
255,
255],
"window-inactive-caption-text":[255,
255,
255],
"window-active-caption":[51,
94,
168],
"window-inactive-caption":[111,
161,
217],
"button-view-pane":[250,
251,
254],
"button-view-bar":[225,
238,
255],
"tab-view-pane":[250,
251,
254],
"tab-view-border":[145,
165,
189],
"tab-view-button":[225,
238,
255],
"tab-view-button-hover":[250,
251,
254],
"tab-view-button-checked":[250,
251,
254],
"radio-view-pane":[250,
251,
254],
"radio-view-bar":[225,
238,
255],
"radio-view-button-checked":[250,
251,
254],
"list-view":"white",
"list-view-border":[167,
166,
170],
"list-view-header":[242,
242,
242],
"list-view-header-border":[214,
213,
217],
"list-view-header-cell-hover":"white",
"date-chooser":"white",
"date-chooser-title":[98,
133,
186],
"table-pane":"white",
"table-header":[242,
242,
242],
"table-header-border":[214,
213,
217],
"table-header-cell":[235,
234,
219],
"table-header-cell-hover":[255,
255,
255],
"table-focus-indicator":[179,
217,
255],
"table-row-background-focused-selected":[90,
138,
211],
"table-row-background-focused":[221,
238,
255],
"table-row-background-selected":[51,
94,
168],
"table-row-background-even":[250,
248,
243],
"table-row-background-odd":[255,
255,
255],
"table-row-selected":[255,
255,
255],
"table-row":[0,
0,
0]}});




/* ID: qx.theme.classic.Border */
qx.Theme.define("qx.theme.classic.Border",
{title:"Classic",
borders:{"black":{width:1,
color:"black"},
"white":{width:1,
color:"white"},
"dark-shadow":{width:1,
color:"border-dark-shadow"},
"light-shadow":{width:1,
color:"border-light-shadow"},
"light":{width:1,
color:"border-light"},
"dark":{width:1,
color:"border-dark"},
"tooltip":{width:1,
color:"tooltip-text"},
"inset":{width:2,
color:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"],
innerColor:["border-dark",
"border-light-shadow",
"border-light-shadow",
"border-dark"]},
"outset":{width:2,
color:["border-light-shadow",
"border-dark",
"border-dark",
"border-light-shadow"],
innerColor:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"]},
"groove":{width:2,
color:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"],
innerColor:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"]},
"ridge":{width:2,
color:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"],
innerColor:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"]},
"inset-thin":{width:1,
color:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"]},
"outset-thin":{width:1,
color:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"]},
"resizer":{width:[1,
3,
3,
1],
color:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"],
innerColor:["border-light-shadow",
"border-dark",
"border-dark",
"border-light-shadow"]},
"line-left":{widthLeft:1,
colorLeft:"border-dark-shadow"},
"line-right":{widthRight:1,
colorRight:"border-dark-shadow"},
"line-top":{widthTop:1,
colorTop:"border-dark-shadow"},
"line-bottom":{widthBottom:1,
colorBottom:"border-dark-shadow"},
"divider-vertical":{widthTop:1,
colorTop:"border-dark-shadow"},
"divider-horizontal":{widthLeft:1,
colorLeft:"border-dark-shadow"}}});




/* ID: qx.theme.classic.font.Default */
qx.Theme.define("qx.theme.classic.font.Default",
{title:"Classic",
fonts:{"default":{size:11,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Liberation Sans",
"Bitstream Vera Sans"]},
"bold":{size:11,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Liberation Sans",
"Bitstream Vera Sans"],
bold:true},
"large":{size:13,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Liberation Sans",
"Bitstream Vera Sans"]},
"bold-large":{size:13,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Liberation Sans",
"Bitstream Vera Sans"],
bold:true},
"monospace":{size:11,
family:["Consolas",
"Liberation Sans Mono",
"Bitstream Vera Sans Mono",
"Courier New",
"monospace"]}}});




/* ID: qx.util.manager.Value */
qx.Class.define("qx.util.manager.Value",
{type:"abstract",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._registry={};
this._dynamic={};
},
members:{connect:function($0,
$1,
$2){{};
var $3="v"+$1.toHashCode()+"$"+qx.core.Object.toHashCode($0);
var $4=this._registry;
if($2!==null&&this._preprocess){$2=this._preprocess($2);
}if(this.isDynamic($2)){$4[$3]={callback:$0,
object:$1,
value:$2};
}else if($4[$3]){delete $4[$3];
}$0.call($1,
this.resolveDynamic($2)||$2);
},
resolveDynamic:function($0){return this._dynamic[$0];
},
isDynamic:function($0){return this._dynamic[$0]!==undefined;
},
_updateObjects:function(){var $0=this._registry;
var $1;
for(var $2 in $0){$1=$0[$2];
$1.callback.call($1.object,
this.resolveDynamic($1.value));
}}},
destruct:function(){this._disposeFields("_registry",
"_dynamic");
}});




/* ID: qx.io.Alias */
qx.Class.define("qx.io.Alias",
{type:"singleton",
extend:qx.util.manager.Value,
construct:function(){arguments.callee.base.call(this);
this._aliases={};
this.add("static",
qx.core.Setting.get("qx.resourceUri")+"/static");
},
members:{_preprocess:function($0){var $1=this._dynamic;
if($1[$0]===false){return $0;
}else if($1[$0]===undefined){if($0.charAt(0)==="/"||$0.charAt(0)==="."||$0.indexOf("http://")===0||$0.indexOf("https://")==="0"||$0.indexOf("file://")===0){$1[$0]=false;
return $0;
}var $2=$0.substring(0,
$0.indexOf("/"));
var $3=this._aliases[$2];
if($3!==undefined){$1[$0]=$3+$0.substring($2.length);
}}return $0;
},
add:function($0,
$1){this._aliases[$0]=$1;
var $2=this._dynamic;
var $3=this._registry;
var $4;
var $5={};
for(var $6 in $2){if($6.substring(0,
$6.indexOf("/"))===$0){$2[$6]=$1+$6.substring($0.length);
$5[$6]=true;
}}for(var $7 in $3){$4=$3[$7];
if($5[$4.value]){$4.callback.call($4.object,
$2[$4.value]);
}}},
remove:function($0){delete this._aliases[$0];
},
resolve:function($0){if($0!==null){$0=this._preprocess($0);
}return this._dynamic[$0]||$0;
}},
destruct:function(){this._disposeFields("_aliases");
}});




/* ID: qx.theme.classic.Widget */
qx.Theme.define("qx.theme.classic.Widget",
{title:"Windows",
widgets:{uri:qx.core.Setting.get("qx.resourceUri")+"/widget/Windows"}});




/* ID: qx.theme.classic.Appearance */
qx.Theme.define("qx.theme.classic.Appearance",
{title:"Classic",
appearances:{"empty":{},
"widget":{},
"image":{},
"atom":{},
"popup":{},
"cursor-dnd-move":{style:function($0){return {source:"widget/cursors/move.gif"};
}},
"cursor-dnd-copy":{style:function($0){return {source:"widget/cursors/copy.gif"};
}},
"cursor-dnd-alias":{style:function($0){return {source:"widget/cursors/alias.gif"};
}},
"cursor-dnd-nodrop":{style:function($0){return {source:"widget/cursors/nodrop.gif"};
}},
"label":{style:function($0){return {textColor:$0.disabled?"text-disabled":"undefined"};
}},
"client-document":{style:function($0){return {backgroundColor:"background",
textColor:"text",
font:"default"};
}},
"client-document-blocker":{style:function($0){return {cursor:"default",
backgroundImage:"static/image/blank.gif"};
}},
"tool-tip":{include:"popup",
style:function($0){return {backgroundColor:"tooltip",
textColor:"tooltip-text",
border:"tooltip",
padding:[1,
3,
2,
3]};
}},
"iframe":{style:function($0){return {border:"inset"};
}},
"check-box":{style:function($0){return {padding:[2,
3]};
}},
"radio-button":{include:"check-box"},
"button":{style:function($0){if($0.pressed||$0.checked||$0.abandoned){var $1="inset";
}else{var $1="outset";
}
if($0.pressed||$0.abandoned){var $2=[4,
3,
2,
5];
}else{var $2=[3,
4];
}return {backgroundColor:$0.abandoned?"button-abandoned":$0.over?"button-hover":"button",
border:$1,
padding:$2};
}},
"toolbar":{style:function($0){return {border:"outset-thin",
backgroundColor:"background"};
}},
"toolbar-part":{},
"toolbar-part-handle":{style:function($0){return {width:10};
}},
"toolbar-part-handle-line":{style:function($0){return {top:2,
left:3,
bottom:2,
width:4,
border:"outset-thin"};
}},
"toolbar-separator":{style:function($0){return {width:8};
}},
"toolbar-separator-line":{style:function($0){return {top:2,
left:3,
width:"auto",
bottom:2,
border:"divider-horizontal"};
}},
"toolbar-button":{style:function($0){if($0.pressed||$0.checked||$0.abandoned){var $1="inset-thin";
var $2=[3,
2,
1,
4];
}else if($0.over){var $1="outset-thin";
var $2=[2,
3];
}else{var $1="undefined";
var $2=[3,
4];
}return {cursor:"default",
spacing:4,
width:"auto",
border:$1,
padding:$2,
verticalChildrenAlign:"middle",
backgroundColor:$0.abandoned?"button-abandoned":"button",
backgroundImage:$0.checked&&!$0.over?"static/image/dotted_white.gif":null};
}},
"button-view":{style:function($0){return {border:"dark-shadow"};
}},
"button-view-pane":{style:function($0){return {backgroundColor:"button-view-pane",
padding:10};
}},
"button-view-page":{},
"button-view-bar":{style:function($0){var $1="undefined";
var $2="undefined";
var $3=qx.ui.core.Border;
if($0.barTop){$1=[1,
0];
$2=$3.fromConfig({bottom:[1,
"solid",
"border-dark-shadow"]});
}else if($0.barBottom){$1=[1,
0];
$2=$3.fromConfig({top:[1,
"solid",
"border-dark-shadow"]});
}else if($0.barLeft){$1=[0,
1];
$2=$3.fromConfig({right:[1,
"solid",
"border-dark-shadow"]});
}else if($0.barRight){$1=[0,
1];
$2=$3.fromConfig({left:[1,
"solid",
"border-dark-shadow"]});
}return {backgroundColor:"button-view-bar",
padding:$1||"undefined",
border:$2||"undefined"};
}},
"button-view-button":{style:function($0){var $1,
$2,
$3,
$4,
$5;
if($0.checked||$0.over){$5=new qx.ui.core.Border(1,
"solid",
"border-dark-shadow");
if($0.barTop){$5.setBottom(3,
"solid",
"effect");
$4=[3,
6,
1,
6];
}else if($0.barBottom){$5.setTop(3,
"solid",
"effect");
$4=[1,
6,
3,
6];
}else if($0.barLeft){$5.setRight(3,
"solid",
"effect");
$4=[3,
4,
3,
6];
}else{$5.setLeft(3,
"solid",
"effect");
$4=[3,
6,
3,
4];
}}else{$5="undefined";
$4=[4,
7];
}
if($0.barTop||$0.barBottom){$1=[0,
1];
$2="auto";
$3=null;
}else{$1=[1,
0];
$3="auto";
$2=null;
}return {backgroundColor:$0.checked?"button-view-pane":"undefined",
iconPosition:"top",
margin:$1,
width:$2,
height:$3,
border:$5,
padding:$4||"undefined"};
}},
"tab-view":{style:function($0){return {spacing:-1};
}},
"tab-view-bar":{},
"tab-view-pane":{style:function($0){return {backgroundColor:"tab-view-pane",
border:new qx.ui.core.Border(1,
"solid",
"tab-view-border"),
padding:10};
}},
"tab-view-page":{},
"tab-view-button":{style:function($0){var $1,
$2,
$3,
$4;
var $5,
$6,
$7,
$8;
var $9,
$a;
$5=0;
$6=0;
$a=new qx.ui.core.Border(1,
"solid",
"tab-view-border");
if($0.checked){$1=2;
$2=4;
$3=7;
$4=8;
$7=-1;
$8=-2;
$9="tab-view-button-checked";
if($0.barTop){$a.setWidthBottom(0);
$a.setTop(3,
"solid",
"effect");
}else{$a.setWidthTop(0);
$a.setBottom(3,
"solid",
"effect");
}
if($0.alignLeft){if($0.firstChild){$3=6;
$4=7;
$8=0;
}}else{if($0.lastChild){$3=8;
$4=5;
$7=0;
}}}else{$1=2;
$2=2;
$3=5;
$4=6;
$7=1;
$8=0;
$9=$0.over?"tab-view-button-hover":"tab-view-button";
if($0.barTop){$a.setWidthBottom(0);
$5=3;
$6=1;
}else{$a.setWidthTop(0);
$5=1;
$6=3;
}
if($0.alignLeft){if($0.firstChild){$3=6;
$4=5;
}}else{if($0.lastChild){$3=6;
$4=5;
$7=0;
}}}return {padding:[$1,
$4,
$2,
$3],
margin:[$5,
$7,
$6,
$8],
border:$a,
backgroundColor:$9};
}},
"radio-view":{include:"button-view"},
"radio-view-pane":{style:function($0){return {backgroundColor:"radio-view-pane"};
}},
"radio-view-page":{},
"radio-view-bar":{style:function($0){return {backgroundColor:"radio-view-bar",
padding:[1,
0],
border:$0.barTop?qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"border-dark-shadow"]}):qx.ui.core.Border.fromConfig({top:[1,
"solid",
"border-dark-shadow"]})};
}},
"radio-view-button":{style:function($0){var $1,
$2;
if($0.checked||$0.over){$1=new qx.ui.core.Border(1,
"solid",
"border-dark-shadow");
$1.setLeft(3,
"solid",
"effect");
$2=[2,
6,
2,
4];
}else{$1="undefined";
$2=[3,
7];
}return {backgroundColor:$0.checked?"radio-view-button-checked":"undefined",
iconPosition:"left",
margin:[0,
1],
width:"auto",
opacity:$0.checked?1.0:0.3,
border:$1,
padding:$2};
}},
"window":{style:function($0){return {backgroundColor:"background",
padding:1,
border:$0.maximized?"undefined":"outset"};
}},
"window-captionbar":{style:function($0){return {padding:[1,
2,
2],
verticalChildrenAlign:"middle",
backgroundColor:$0.active?"window-active-caption":"window-inactive-caption",
textColor:$0.active?"window-active-caption-text":"window-inactive-caption-text"};
}},
"window-resize-frame":{style:function($0){return {border:"dark-shadow"};
}},
"window-captionbar-icon":{style:function($0){return {marginRight:2};
}},
"window-captionbar-title":{style:function($0){return {cursor:"default",
font:"bold",
marginRight:2};
}},
"window-captionbar-button":{include:"button",
style:function($0){return {padding:$0.pressed||$0.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window-captionbar-minimize-button":{include:"window-captionbar-button",
style:function($0){return {icon:"widget/window/minimize.gif"};
}},
"window-captionbar-restore-button":{include:"window-captionbar-button",
style:function($0){return {icon:"widget/window/restore.gif"};
}},
"window-captionbar-maximize-button":{include:"window-captionbar-button",
style:function($0){return {icon:"widget/window/maximize.gif"};
}},
"window-captionbar-close-button":{include:"window-captionbar-button",
style:function($0){return {marginLeft:2,
icon:"widget/window/close.gif"};
}},
"window-statusbar":{style:function($0){return {border:"inset-thin"};
}},
"window-statusbar-text":{style:function($0){return {padding:[1,
4]};
}},
"color-popup":{style:function($0){return {padding:4,
border:"outset",
backgroundColor:"background"};
}},
"resizer":{style:function($0){return {border:"outset"};
}},
"resizer-frame":{style:function($0){return {border:"dark-shadow"};
}},
"menu":{style:function($0){return {backgroundColor:"menu",
border:"outset",
padding:1};
}},
"menu-layout":{},
"menu-button":{style:function($0){return {spacing:2,
padding:[2,
4],
verticalChildrenAlign:"middle",
backgroundColor:$0.over?"selected":"undefined",
textColor:$0.over?"text-selected":"undefined"};
}},
"menu-button-arrow":{style:function($0){return {source:"widget/arrows/next.gif"};
}},
"menu-check-box":{include:"menu-button",
style:function($0){return {icon:$0.checked?"widget/menu/checkbox.gif":"static/image/blank.gif"};
}},
"menu-radio-button":{include:"menu-button",
style:function($0){return {icon:$0.checked?"widget/menu/radiobutton.gif":"static/image/blank.gif"};
}},
"menu-separator":{style:function($0){return {marginTop:3,
marginBottom:2,
paddingLeft:3,
paddingRight:3};
}},
"menu-separator-line":{style:function($0){return {right:0,
left:0,
height:"auto",
border:"divider-vertical"};
}},
"list":{style:function($0){return {border:"inset-thin",
backgroundColor:"list"};
}},
"list-item":{style:function($0){return {horizontalChildrenAlign:"left",
verticalChildrenAlign:"middle",
spacing:4,
padding:[3,
5],
backgroundColor:$0.selected?"selected":"undefined",
textColor:$0.selected?"text-selected":"undefined"};
}},
"text-field":{style:function($0){return {border:"inset",
padding:[1,
3],
textColor:$0.disabled?"text-disabled":"undefined",
backgroundColor:"field"};
}},
"text-area":{include:"text-field"},
"combo-box":{style:function($0){return {border:"inset",
backgroundColor:"field"};
}},
"combo-box-list":{include:"list",
style:function($0){return {border:"undefined",
overflow:"scrollY"};
}},
"combo-box-popup":{include:"list",
style:function($0){return {maxHeight:150,
border:"dark-shadow"};
}},
"combo-box-text-field":{include:"text-field",
style:function($0){return {border:"undefined",
backgroundColor:"transparent"};
}},
"combo-box-button":{include:"button",
style:function($0){return {padding:[0,
3,
0,
2],
icon:"widget/arrows/down.gif"};
}},
"combo-box-ex":{style:function($0){return {border:"inset",
backgroundColor:"field"};
}},
"combo-box-ex-list":{include:"list",
style:function($0){return {border:"undefined",
edge:0};
}},
"combo-box-ex-text-field":{include:"text-field",
style:function($0){return {border:"undefined",
minWidth:30,
width:100,
backgroundColor:"transparent"};
}},
"combo-box-ex-popup":{include:"list",
style:function($0){return {border:"resizer"};
}},
"combo-box-ex-button":{include:"combo-box-button"},
"treevirtual-focus-indicator":{include:"empty"},
"tree-element":{style:function($0){return {height:16,
verticalChildrenAlign:"middle"};
}},
"tree-element-icon":{style:function($0){return {width:16,
height:16};
}},
"tree-element-label":{include:"label",
style:function($0){return {marginLeft:3,
height:15,
padding:2,
backgroundColor:$0.selected?"selected":"undefined",
textColor:$0.disabled?"text-disabled":($0.selected?"text-selected":"undefined")};
}},
"tree-folder":{include:"tree-element"},
"tree-folder-icon":{include:"tree-element-icon"},
"tree-folder-label":{include:"tree-element-label"},
"tree":{include:"tree-folder"},
"tree-icon":{include:"tree-folder-icon"},
"tree-label":{include:"tree-folder-label"},
"list-view":{style:function($0){return {border:new qx.ui.core.Border(1,
"solid",
"list-view-border"),
backgroundColor:"list-view"};
}},
"list-view-pane":{style:function($0){return {horizontalSpacing:1};
}},
"list-view-header":{style:function($0){return {border:qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"list-view-header-border"]}),
backgroundColor:"list-view-header"};
}},
"list-view-header-cell":{style:function($0){return {padding:[2,
6],
spacing:4,
backgroundColor:$0.over?"list-view-header-cell-hover":"undefined",
paddingBottom:$0.over?0:2,
border:$0.over?new qx.ui.core.Border.fromConfig({bottom:[2,
"solid",
"effect"]}):"undefined"};
}},
"list-view-header-cell-arrow-up":{style:function($0){return {source:"widget/arrows/up.gif"};
}},
"list-view-header-cell-arrow-down":{style:function($0){return {source:"widget/arrows/down.gif"};
}},
"list-view-header-separator":{style:function($0){return {backgroundColor:"list-view-header-border",
width:1,
marginTop:1,
marginBottom:1};
}},
"list-view-content-cell":{style:function($0){return {cursor:"default",
backgroundColor:$0.selected?"selected":"undefined",
textColor:$0.selected?"text-selected":"undefined",
border:$0.lead&&
!$0.selected?
new qx.ui.core.Border.fromConfig({top:[1,
"solid",
"effect"],
bottom:[1,
"solid",
"effect"]}):"undefined",
marginTop:$0.lead&&!$0.selected?0:1,
marginBottom:$0.lead&&!$0.selected?0:1};
}},
"list-view-content-cell-image":{include:"list-view-content-cell",
style:function($0){return {paddingLeft:6,
paddingRight:6};
}},
"list-view-content-cell-text":{include:"list-view-content-cell",
style:function($0){return {overflow:"hidden",
paddingLeft:6,
paddingRight:6};
}},
"list-view-content-cell-html":{include:"list-view-content-cell-text"},
"list-view-content-cell-icon-html":{include:"list-view-content-cell-text"},
"list-view-content-cell-link":{include:"list-view-content-cell-text"},
"group-box":{style:function($0){return {backgroundColor:"background"};
}},
"group-box-legend":{style:function($0){return {location:[10,
1],
backgroundColor:"background",
paddingRight:3,
paddingLeft:4,
marginRight:10};
}},
"group-box-frame":{style:function($0){return {edge:[8,
0,
0],
padding:[12,
9],
border:"groove"};
}},
"check-box-group-box-legend":{style:function($0){return {location:[10,
1],
backgroundColor:"background",
paddingRight:3};
}},
"radio-button-group-box-legend":{include:"check-box-group-box-legend"},
"spinner":{style:function($0){return {border:"inset",
backgroundColor:"field"};
}},
"spinner-text-field":{include:"text-field",
style:function($0){return {backgroundColor:"transparent"};
}},
"spinner-button":{style:function($0){return {width:16,
backgroundColor:"background",
paddingLeft:3,
border:$0.pressed||$0.checked||$0.abandoned?"inset":"outset"};
}},
"spinner-button-up":{include:"spinner-button",
style:function($0){return {source:"widget/arrows/up_small.gif"};
}},
"spinner-button-down":{include:"spinner-button",
style:function($0){return {paddingTop:1,
source:"widget/arrows/down_small.gif"};
}},
"colorselector":{style:function($0){return {backgroundColor:"background",
border:"outset"};
}},
"datechooser-toolbar-button":{style:function($0){var $1={backgroundColor:$0.abandoned?"button-abandoned":"button",
backgroundImage:($0.checked&&!$0.over)?"static/image/dotted_white.gif":null,
spacing:4,
width:"auto",
verticalChildrenAlign:"middle"};
if($0.pressed||$0.checked||$0.abandoned){$1.border="inset-thin";
}else if($0.over){$1.border="outset-thin";
}else{$1.border="undefined";
}
if($0.pressed||$0.checked||$0.abandoned){$1.padding=[2,
0,
0,
2];
}else if($0.over){$1.padding=1;
}else{$1.padding=2;
}return $1;
}},
"datechooser-monthyear":{style:function($0){return {font:"large",
textAlign:"center",
verticalAlign:"middle"};
}},
"datechooser-datepane":{style:function($0){return {border:new qx.ui.core.Border(1,
"solid",
"gray"),
backgroundColor:"date-chooser"};
}},
"datechooser-weekday":{style:function($0){var $1=qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"gray"]});
return {border:$1,
font:"bold-large",
textAlign:"center",
textColor:$0.weekend?"date-chooser-title":"date-chooser",
backgroundColor:$0.weekend?"date-chooser":"date-chooser-title"};
}},
"datechooser-day":{style:function($0){return {textAlign:"center",
verticalAlign:"middle",
border:$0.today?"black":"undefined",
textColor:$0.selected?"text-selected":$0.otherMonth?"text-disabled":"undefined",
backgroundColor:$0.selected?"selected":"undefined",
padding:[2,
4]};
}},
"datechooser-week":{style:function($0){if($0.header){var $1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"gray"],
bottom:[1,
"solid",
"gray"]});
}else{var $1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"gray"]});
}return {textAlign:"center",
textColor:"date-chooser-title",
padding:[2,
4],
border:$1};
}},
"table-focus-statusbar":{style:function($0){return {border:qx.ui.core.Border.fromConfig({top:[1,
"solid",
"border-dark-shadow"]}),
paddingLeft:2,
paddingRight:2};
}},
"table-focus-indicator":{style:function($0){return {border:new qx.ui.core.Border(2,
"solid",
"table-focus-indicator")};
}},
"table-editor-textfield":{include:"text-field",
style:function($0){return {border:"undefined",
padding:[0,
2]};
}},
"table-pane":{style:function($0){return {backgroundColor:"table-pane"};
}},
"table-header":{style:function($0){return {border:qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"table-header-border"]}),
backgroundColor:"table-header"};
}},
"table-menubar-button":{style:function($0){if($0.pressed||$0.checked||$0.abandoned){var $1="inset-thin";
var $2=[3,
2,
1,
4];
}else if($0.over){var $1="outset-thin";
var $2=[2,
3];
}else{var $1="undefined";
var $2=[3,
4];
}return {cursor:"default",
spacing:4,
width:"auto",
border:$1,
padding:$2,
verticalChildrenAlign:"middle",
backgroundColor:$0.abandoned?"button-abandoned":"button",
icon:"widget/table/selectColumnOrder.png"};
}},
"table-header-cell":{style:function($0){var $1,
$2,
$3;
if($0.mouseover){$1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"table-header-border"],
bottom:[2,
"solid",
"effect"]});
$3=0;
$2="table-header-cell-hover";
}else{$1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"table-header-border"]});
$3=2;
$2="table-header-cell";
}return {paddingLeft:2,
paddingRight:2,
paddingBottom:$3,
spacing:2,
overflow:"hidden",
iconPosition:"right",
verticalChildrenAlign:"middle",
border:$1,
backgroundColor:$2,
icon:$0.sorted?($0.sortedAscending?"widget/table/ascending.png":"widget/table/descending.png"):null,
horizontalChildrenAlign:"left"};
}},
"splitpane":{style:function($0){return {overflow:"hidden",
splitterSize:8,
backgroundColor:"background"};
}},
"splitpane-splitter":{style:function($0){return {cursor:$0.horizontal?"col-resize":"row-resize"};
}},
"splitpane-slider":{style:function($0){return {opacity:0.5,
backgroundColor:"background"};
}},
"splitpane-knob":{style:function($0){if($0.horizontal){return {opacity:$0.dragging?0.5:1.0,
top:"50%",
left:"50%",
cursor:"col-resize",
source:"widget/splitpane/knob-horizontal.png",
marginLeft:-2,
marginTop:-7};
}else{return {opacity:$0.dragging?0.5:1.0,
top:"50%",
left:"50%",
source:"widget/splitpane/knob-vertical.png",
marginTop:-2,
marginLeft:-7,
cursor:"row-resize"};
}}},
"scrollbar-blocker":{style:function($0){return {backgroundColor:"black",
opacity:0.2};
}}}});




/* ID: qx.theme.icon.Nuvola */
qx.Theme.define("qx.theme.icon.Nuvola",
{title:"Nuvola",
icons:{uri:qx.core.Setting.get("qx.resourceUri")+"/icon/Nuvola"}});




/* ID: qx.theme.ClassicRoyale */
qx.Theme.define("qx.theme.ClassicRoyale",
{title:"Classic Royale",
meta:{color:qx.theme.classic.color.Royale,
border:qx.theme.classic.Border,
font:qx.theme.classic.font.Default,
widget:qx.theme.classic.Widget,
appearance:qx.theme.classic.Appearance,
icon:qx.theme.icon.Nuvola}});




/* ID: qx.application.Gui */
qx.Class.define("qx.application.Gui",
{extend:qx.core.Target,
implement:qx.application.IApplication,
properties:{uiReady:{check:"Boolean",
init:false}},
members:{main:function(){qx.ui.core.Widget.initScrollbarWidth();
qx.theme.manager.Meta.getInstance().initialize();
qx.event.handler.EventHandler.getInstance();
qx.ui.core.ClientDocument.getInstance();
qx.client.Timer.once(this._preload,
this,
0);
},
close:function(){},
terminate:function(){},
_preload:function(){this.debug("preloading visible images...");
this.__preloader=new qx.io.image.PreloaderSystem(qx.io.image.Manager.getInstance().getVisibleImages(),
this._preloaderDone,
this);
this.__preloader.start();
},
_preloaderDone:function(){this.setUiReady(true);
this.__preloader.dispose();
this.__preloader=null;
var $0=(new Date).valueOf();
qx.ui.core.Widget.flushGlobalQueues();
this.info("render runtime: "+(new Date-$0)+"ms");
qx.event.handler.EventHandler.getInstance().attachEvents();
qx.client.Timer.once(this._postload,
this,
100);
},
_postload:function(){this.debug("preloading hidden images...");
this.__postloader=new qx.io.image.PreloaderSystem(qx.io.image.Manager.getInstance().getHiddenImages(),
this._postloaderDone,
this);
this.__postloader.start();
},
_postloaderDone:function(){this.__postloader.dispose();
this.__postloader=null;
}}});




/* ID: qx.ui.core.Widget */
qx.Class.define("qx.ui.core.Widget",
{extend:qx.core.Target,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
this._layoutChanges={};
if(qx.core.Setting.get("qx.widgetDebugId")){this._generateHtmlId();
}},
events:{"beforeAppear":"qx.event.type.Event",
"appear":"qx.event.type.Event",
"beforeDisappear":"qx.event.type.Event",
"disappear":"qx.event.type.Event",
"beforeInsertDom":"qx.event.type.Event",
"insertDom":"qx.event.type.Event",
"beforeRemoveDom":"qx.event.type.Event",
"removeDom":"qx.event.type.Event",
"create":"qx.event.type.Event",
"execute":"qx.event.type.Event",
"mouseover":"qx.event.type.MouseEvent",
"mousemove":"qx.event.type.MouseEvent",
"mouseout":"qx.event.type.MouseEvent",
"mousedown":"qx.event.type.MouseEvent",
"mouseup":"qx.event.type.MouseEvent",
"mousewheel":"qx.event.type.MouseEvent",
"click":"qx.event.type.MouseEvent",
"dblclick":"qx.event.type.MouseEvent",
"contextmenu":"qx.event.type.MouseEvent",
"keydown":"qx.event.type.KeyEvent",
"keypress":"qx.event.type.KeyEvent",
"keyinput":"qx.event.type.KeyEvent",
"keyup":"qx.event.type.KeyEvent",
"focusout":"qx.event.type.FocusEvent",
"focusin":"qx.event.type.FocusEvent",
"blur":"qx.event.type.FocusEvent",
"focus":"qx.event.type.FocusEvent",
"dragdrop":"qx.event.type.DragEvent",
"dragout":"qx.event.type.DragEvent",
"dragover":"qx.event.type.DragEvent",
"dragmove":"qx.event.type.DragEvent",
"dragstart":"qx.event.type.DragEvent",
"dragend":"qx.event.type.DragEvent"},
statics:{create:function($0,
$1){$0._appearance=$1;
return new $0;
},
SCROLLBAR_SIZE:null,
_autoFlushTimeout:null,
_initAutoFlush:function(){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._autoFlushTimeout=window.setTimeout(qx.ui.core.Widget._autoFlushHelper,
0);
}},
_removeAutoFlush:function(){if(qx.ui.core.Widget._autoFlushTimeout!=null){window.clearTimeout(qx.ui.core.Widget._autoFlushTimeout);
qx.ui.core.Widget._autoFlushTimeout=null;
}},
_autoFlushHelper:function(){qx.ui.core.Widget._autoFlushTimeout=null;
if(!qx.core.Object.inGlobalDispose()){qx.ui.core.Widget.flushGlobalQueues();
}},
flushGlobalQueues:function(){if(qx.ui.core.Widget._autoFlushTimeout!=null){qx.ui.core.Widget._removeAutoFlush();
}
if(qx.ui.core.Widget._inFlushGlobalQueues){return;
}var $0=qx.core.Init.getInstance().getApplication();
if($0.getUiReady&&!$0.getUiReady()){return;
}qx.ui.core.Widget._inFlushGlobalQueues=true;
qx.ui.core.Widget.flushGlobalWidgetQueue();
qx.ui.core.Widget.flushGlobalStateQueue();
qx.ui.core.Widget.flushGlobalElementQueue();
qx.ui.core.Widget.flushGlobalJobQueue();
qx.ui.core.Widget.flushGlobalLayoutQueue();
qx.ui.core.Widget.flushGlobalDisplayQueue();
delete qx.ui.core.Widget._inFlushGlobalQueues;
},
_globalWidgetQueue:[],
addToGlobalWidgetQueue:function($0){if(!$0._isInGlobalWidgetQueue&&$0._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalWidgetQueue.push($0);
$0._isInGlobalWidgetQueue=true;
}},
removeFromGlobalWidgetQueue:function($0){if($0._isInGlobalWidgetQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalWidgetQueue,
$0);
delete $0._isInGlobalWidgetQueue;
}},
flushGlobalWidgetQueue:function(){var $0=qx.ui.core.Widget._globalWidgetQueue,
$1,
$2;
while(($1=$0.length)>0){for(var $3=0;$3<$1;$3++){$2=$0[$3];
$2.flushWidgetQueue();
delete $2._isInGlobalWidgetQueue;
}$0.splice(0,
$1);
}},
_globalElementQueue:[],
addToGlobalElementQueue:function($0){if(!$0._isInGlobalElementQueue&&$0._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalElementQueue.push($0);
$0._isInGlobalElementQueue=true;
}},
removeFromGlobalElementQueue:function($0){if($0._isInGlobalElementQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalElementQueue,
$0);
delete $0._isInGlobalElementQueue;
}},
flushGlobalElementQueue:function(){var $0=qx.ui.core.Widget._globalElementQueue,
$1,
$2;
while(($1=$0.length)>0){for(var $3=0;$3<$1;$3++){$2=$0[$3];
$2._createElementImpl();
delete $2._isInGlobalElementQueue;
}$0.splice(0,
$1);
}},
_globalStateQueue:[],
addToGlobalStateQueue:function($0){if(!$0._isInGlobalStateQueue&&$0._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalStateQueue.push($0);
$0._isInGlobalStateQueue=true;
}},
removeFromGlobalStateQueue:function($0){if($0._isInGlobalStateQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalStateQueue,
$0);
delete $0._isInGlobalStateQueue;
}},
flushGlobalStateQueue:function(){var $0=qx.ui.core.Widget._globalStateQueue,
$1,
$2;
while(($1=$0.length)>0){for(var $3=0;$3<$1;$3++){$2=$0[$3];
$2._renderAppearance();
delete $2._isInGlobalStateQueue;
}$0.splice(0,
$1);
}},
_globalJobQueue:[],
addToGlobalJobQueue:function($0){if(!$0._isInGlobalJobQueue&&$0._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalJobQueue.push($0);
$0._isInGlobalJobQueue=true;
}},
removeFromGlobalJobQueue:function($0){if($0._isInGlobalJobQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalJobQueue,
$0);
delete $0._isInGlobalJobQueue;
}},
flushGlobalJobQueue:function(){var $0=qx.ui.core.Widget._globalJobQueue,
$1,
$2;
while(($1=$0.length)>0){for(var $3=0;$3<$1;$3++){$2=$0[$3];
$2._flushJobQueue($2._jobQueue);
delete $2._isInGlobalJobQueue;
}$0.splice(0,
$1);
}},
_globalLayoutQueue:[],
addToGlobalLayoutQueue:function($0){if(!$0._isInGlobalLayoutQueue&&$0._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalLayoutQueue.push($0);
$0._isInGlobalLayoutQueue=true;
}},
removeFromGlobalLayoutQueue:function($0){if($0._isInGlobalLayoutQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalLayoutQueue,
$0);
delete $0._isInGlobalLayoutQueue;
}},
flushGlobalLayoutQueue:function(){var $0=qx.ui.core.Widget._globalLayoutQueue,
$1,
$2;
while(($1=$0.length)>0){for(var $3=0;$3<$1;$3++){$2=$0[$3];
$2._flushChildrenQueue();
delete $2._isInGlobalLayoutQueue;
}$0.splice(0,
$1);
}},
_fastGlobalDisplayQueue:[],
_lazyGlobalDisplayQueues:{},
addToGlobalDisplayQueue:function($0){if(!$0._isInGlobalDisplayQueue&&$0._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}var $1=$0.getParent();
if($1.isSeeable()){var $2=$1.toHashCode();
if(qx.ui.core.Widget._lazyGlobalDisplayQueues[$2]){qx.ui.core.Widget._lazyGlobalDisplayQueues[$2].push($0);
}else{qx.ui.core.Widget._lazyGlobalDisplayQueues[$2]=[$0];
}}else{qx.ui.core.Widget._fastGlobalDisplayQueue.push($0);
}$0._isInGlobalDisplayQueue=true;
}},
removeFromGlobalDisplayQueue:function($0){},
flushGlobalDisplayQueue:function(){var $0,
$1,
$2,
$3;
var $4=qx.ui.core.Widget._fastGlobalDisplayQueue;
var $5=qx.ui.core.Widget._lazyGlobalDisplayQueues;
for(var $6=0,
$7=$4.length;$6<$7;$6++){$2=$4[$6];
$2.getParent()._getTargetNode().appendChild($2.getElement());
}if(qx.Class.isDefined("qx.ui.basic.Inline")){for($0 in $5){$1=$5[$0];
for(var $6=0;$6<$1.length;$6++){$2=$1[$6];
if($2 instanceof qx.ui.basic.Inline){$2._beforeInsertDom();
try{document.getElementById($2.getInlineNodeId()).appendChild($2.getElement());
}catch(ex){$2.debug("Could not append to inline id: "+$2.getInlineNodeId(),
ex);
}$2._afterInsertDom();
$2._afterAppear();
qx.lang.Array.remove($1,
$2);
$6--;
delete $2._isInGlobalDisplayQueue;
}}}}for($0 in $5){$1=$5[$0];
if(document.createDocumentFragment&&$1.length>=3){$3=document.createDocumentFragment();
for(var $6=0,
$7=$1.length;$6<$7;$6++){$2=$1[$6];
$2._beforeInsertDom();
$3.appendChild($2.getElement());
}$1[0].getParent()._getTargetNode().appendChild($3);
for(var $6=0,
$7=$1.length;$6<$7;$6++){$2=$1[$6];
$2._afterInsertDom();
}}else{for(var $6=0,
$7=$1.length;$6<$7;$6++){$2=$1[$6];
$2._beforeInsertDom();
$2.getParent()._getTargetNode().appendChild($2.getElement());
$2._afterInsertDom();
}}}for($0 in $5){$1=$5[$0];
for(var $6=0,
$7=$1.length;$6<$7;$6++){$2=$1[$6];
if($2.getVisibility()){$2._afterAppear();
}delete $2._isInGlobalDisplayQueue;
}delete $5[$0];
}for(var $6=0,
$7=$4.length;$6<$7;$6++){delete $4[$6]._isInGlobalDisplayQueue;
}qx.lang.Array.removeAll($4);
},
getActiveSiblingHelperIgnore:function($0,
$1){for(var $2=0;$2<$0.length;$2++){if($1 instanceof $0[$2]){return true;
}}return false;
},
getActiveSiblingHelper:function($0,
$1,
$2,
$3,
$4){if(!$3){$3=[];
}var $5=$1.getChildren();
var $6=$4==null?$5.indexOf($0)+$2:$4==="first"?0:$5.length-1;
var $7=$5[$6];
while($7&&(!$7.getEnabled()||qx.ui.core.Widget.getActiveSiblingHelperIgnore($3,
$7))){$6+=$2;
$7=$5[$6];
if(!$7){return null;
}}return $7;
},
__initApplyMethods:function($0){var $1="_renderRuntime";
var $2="_resetRuntime";
var $3="this._style.";
var $4="=((v==null)?0:v)+'px'";
var $5="v";
var $6=["left",
"right",
"top",
"bottom",
"width",
"height",
"minWidth",
"maxWidth",
"minHeight",
"maxHeight"];
var $7=["Left",
"Right",
"Top",
"Bottom",
"Width",
"Height",
"MinWidth",
"MaxWidth",
"MinHeight",
"MaxHeight"];
var $8=$1+"Margin";
var $9=$2+"Margin";
var $a=$3+"margin";
for(var $b=0;$b<4;$b++){$0[$8+$7[$b]]=new Function($5,
$a+$7[$b]+$4);
$0[$9+$7[$b]]=new Function($a+$7[$b]+"=''");
}var $c=$1+"Padding";
var $d=$2+"Padding";
var $e=$3+"padding";
if(qx.core.Variant.isSet("qx.client",
"gecko")){for(var $b=0;$b<4;$b++){$0[$c+$7[$b]]=new Function($5,
$e+$7[$b]+$4);
$0[$d+$7[$b]]=new Function($e+$7[$b]+"=''");
}}else{for(var $b=0;$b<4;$b++){$0[$c+$7[$b]]=new Function($5,
"this.setStyleProperty('padding"+$7[$b]+"', ((v==null)?0:v)+'px')");
$0[$d+$7[$b]]=new Function("this.removeStyleProperty('padding"+$7[$b]+"')");
}}for(var $b=0;$b<$6.length;$b++){$0[$1+$7[$b]]=new Function($5,
$3+$6[$b]+$4);
$0[$2+$7[$b]]=new Function($3+$6[$b]+"=''");
}},
TYPE_NULL:0,
TYPE_PIXEL:1,
TYPE_PERCENT:2,
TYPE_AUTO:3,
TYPE_FLEX:4,
layoutPropertyTypes:{},
__initLayoutProperties:function($0){var $1=["width",
"height",
"minWidth",
"maxWidth",
"minHeight",
"maxHeight",
"left",
"right",
"top",
"bottom"];
for(var $2=0,
$3=$1.length,
$4,
$5,
$6;$2<$3;$2++){$4=$1[$2];
$5="_computed"+qx.lang.String.toFirstUp($4);
$6=$5+"Type";
$0.layoutPropertyTypes[$4]={dataType:$6,
dataParsed:$5+"Parsed",
dataValue:$5+"Value",
typePixel:$6+"Pixel",
typePercent:$6+"Percent",
typeAuto:$6+"Auto",
typeFlex:$6+"Flex",
typeNull:$6+"Null"};
}},
initScrollbarWidth:function(){var $0=document.createElement("div");
var $1=$0.style;
$1.height=$1.width="100px";
$1.overflow="scroll";
document.body.appendChild($0);
var $2=qx.html.Dimension.getScrollBarSizeRight($0);
qx.ui.core.Widget.SCROLLBAR_SIZE=$2?$2:16;
document.body.removeChild($0);
},
_idCounter:0},
properties:{enabled:{init:"inherit",
check:"Boolean",
inheritable:true,
apply:"_applyEnabled",
event:"changeEnabled"},
parent:{check:"qx.ui.core.Parent",
nullable:true,
event:"changeParent",
apply:"_applyParent"},
element:{check:"Element",
nullable:true,
apply:"_applyElement",
event:"changeElement"},
visibility:{check:"Boolean",
init:true,
apply:"_applyVisibility",
event:"changeVisibility"},
display:{check:"Boolean",
init:true,
apply:"_applyDisplay",
event:"changeDisplay"},
anonymous:{check:"Boolean",
init:false,
event:"changeAnonymous"},
horizontalAlign:{check:["left",
"center",
"right"],
themeable:true,
nullable:true},
verticalAlign:{check:["top",
"middle",
"bottom"],
themeable:true,
nullable:true},
allowStretchX:{check:"Boolean",
init:true},
allowStretchY:{check:"Boolean",
init:true},
zIndex:{check:"Number",
apply:"_applyZIndex",
event:"changeZIndex",
themeable:true,
nullable:true,
init:null},
backgroundColor:{nullable:true,
init:null,
check:"Color",
apply:"_applyBackgroundColor",
event:"changeBackgroundColor",
themeable:true},
textColor:{nullable:true,
init:"inherit",
check:"Color",
apply:"_applyTextColor",
event:"changeTextColor",
themeable:true,
inheritable:true},
border:{nullable:true,
init:null,
apply:"_applyBorder",
event:"changeBorder",
check:"Border",
themeable:true},
font:{nullable:true,
init:"inherit",
apply:"_applyFont",
check:"Font",
event:"changeFont",
themeable:true,
inheritable:true},
opacity:{check:"Number",
apply:"_applyOpacity",
themeable:true,
nullable:true,
init:null},
cursor:{check:"String",
apply:"_applyCursor",
themeable:true,
nullable:true,
init:null},
backgroundImage:{check:"String",
nullable:true,
apply:"_applyBackgroundImage",
themeable:true},
backgroundRepeat:{check:"String",
nullable:true,
apply:"_applyBackgroundRepeat",
themeable:true},
overflow:{check:["hidden",
"auto",
"scroll",
"scrollX",
"scrollY"],
nullable:true,
apply:"_applyOverflow",
event:"changeOverflow",
themeable:true,
init:null},
clipLeft:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
clipTop:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
clipWidth:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
clipHeight:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
tabIndex:{check:"Integer",
nullable:true,
init:null,
apply:"_applyTabIndex",
event:"changeTabIndex"},
hideFocus:{check:"Boolean",
init:false,
apply:"_applyHideFocus",
themeable:true},
enableElementFocus:{check:"Boolean",
init:true},
focused:{check:"Boolean",
init:false,
apply:"_applyFocused",
event:"changeFocused"},
selectable:{check:"Boolean",
init:null,
nullable:true,
apply:"_applySelectable"},
toolTip:{check:"qx.ui.popup.ToolTip",
nullable:true},
contextMenu:{check:"qx.ui.menu.Menu",
nullable:true},
capture:{check:"Boolean",
init:false,
apply:"_applyCapture",
event:"changeCapture"},
dropDataTypes:{nullable:true,
dispose:true},
command:{check:"qx.client.Command",
nullable:true,
apply:"_applyCommand"},
appearance:{check:"String",
init:"widget",
apply:"_applyAppearance",
event:"changeAppearance"},
supportsDropMethod:{check:"Function",
nullable:true,
init:null},
marginTop:{check:"Number",
apply:"_applyMarginTop",
nullable:true,
themeable:true},
marginRight:{check:"Number",
apply:"_applyMarginRight",
nullable:true,
themeable:true},
marginBottom:{check:"Number",
apply:"_applyMarginBottom",
nullable:true,
themeable:true},
marginLeft:{check:"Number",
apply:"_applyMarginLeft",
nullable:true,
themeable:true},
paddingTop:{check:"Number",
apply:"_applyPaddingTop",
nullable:true,
themeable:true},
paddingRight:{check:"Number",
apply:"_applyPaddingRight",
nullable:true,
themeable:true},
paddingBottom:{check:"Number",
apply:"_applyPaddingBottom",
nullable:true,
themeable:true},
paddingLeft:{check:"Number",
apply:"_applyPaddingLeft",
nullable:true,
themeable:true},
left:{apply:"_applyLeft",
event:"changeLeft",
nullable:true,
themeable:true,
init:null},
right:{apply:"_applyRight",
event:"changeRight",
nullable:true,
themeable:true,
init:null},
width:{apply:"_applyWidth",
event:"changeWidth",
nullable:true,
themeable:true,
init:null},
minWidth:{apply:"_applyMinWidth",
event:"changeMinWidth",
nullable:true,
themeable:true,
init:null},
maxWidth:{apply:"_applyMaxWidth",
event:"changeMaxWidth",
nullable:true,
themeable:true,
init:null},
top:{apply:"_applyTop",
event:"changeTop",
nullable:true,
themeable:true,
init:null},
bottom:{apply:"_applyBottom",
event:"changeBottom",
nullable:true,
themeable:true,
init:null},
height:{apply:"_applyHeight",
event:"changeHeight",
nullable:true,
themeable:true,
init:null},
minHeight:{apply:"_applyMinHeight",
event:"changeMinHeight",
nullable:true,
themeable:true,
init:null},
maxHeight:{apply:"_applyMaxHeight",
event:"changeMaxHeight",
nullable:true,
themeable:true,
init:null},
location:{group:["left",
"top"],
themeable:true},
dimension:{group:["width",
"height"],
themeable:true},
space:{group:["left",
"width",
"top",
"height"],
themeable:true},
edge:{group:["top",
"right",
"bottom",
"left"],
themeable:true,
mode:"shorthand"},
padding:{group:["paddingTop",
"paddingRight",
"paddingBottom",
"paddingLeft"],
mode:"shorthand",
themeable:true},
margin:{group:["marginTop",
"marginRight",
"marginBottom",
"marginLeft"],
mode:"shorthand",
themeable:true},
heights:{group:["minHeight",
"height",
"maxHeight"],
themeable:true},
widths:{group:["minWidth",
"width",
"maxWidth"],
themeable:true},
align:{group:["horizontalAlign",
"verticalAlign"],
themeable:true},
clipLocation:{group:["clipLeft",
"clipTop"]},
clipDimension:{group:["clipWidth",
"clipHeight"]},
clip:{group:["clipLeft",
"clipTop",
"clipWidth",
"clipHeight"]},
innerWidth:{_cached:true,
defaultValue:null},
innerHeight:{_cached:true,
defaultValue:null},
boxWidth:{_cached:true,
defaultValue:null},
boxHeight:{_cached:true,
defaultValue:null},
outerWidth:{_cached:true,
defaultValue:null},
outerHeight:{_cached:true,
defaultValue:null},
frameWidth:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
frameHeight:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
preferredInnerWidth:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
preferredInnerHeight:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
preferredBoxWidth:{_cached:true,
defaultValue:null},
preferredBoxHeight:{_cached:true,
defaultValue:null},
hasPercentX:{_cached:true,
defaultValue:false},
hasPercentY:{_cached:true,
defaultValue:false},
hasAutoX:{_cached:true,
defaultValue:false},
hasAutoY:{_cached:true,
defaultValue:false},
hasFlexX:{_cached:true,
defaultValue:false},
hasFlexY:{_cached:true,
defaultValue:false}},
members:{_computedLeftValue:null,
_computedLeftParsed:null,
_computedLeftType:null,
_computedLeftTypeNull:true,
_computedLeftTypePixel:false,
_computedLeftTypePercent:false,
_computedLeftTypeAuto:false,
_computedLeftTypeFlex:false,
_computedRightValue:null,
_computedRightParsed:null,
_computedRightType:null,
_computedRightTypeNull:true,
_computedRightTypePixel:false,
_computedRightTypePercent:false,
_computedRightTypeAuto:false,
_computedRightTypeFlex:false,
_computedTopValue:null,
_computedTopParsed:null,
_computedTopType:null,
_computedTopTypeNull:true,
_computedTopTypePixel:false,
_computedTopTypePercent:false,
_computedTopTypeAuto:false,
_computedTopTypeFlex:false,
_computedBottomValue:null,
_computedBottomParsed:null,
_computedBottomType:null,
_computedBottomTypeNull:true,
_computedBottomTypePixel:false,
_computedBottomTypePercent:false,
_computedBottomTypeAuto:false,
_computedBottomTypeFlex:false,
_computedWidthValue:null,
_computedWidthParsed:null,
_computedWidthType:null,
_computedWidthTypeNull:true,
_computedWidthTypePixel:false,
_computedWidthTypePercent:false,
_computedWidthTypeAuto:false,
_computedWidthTypeFlex:false,
_computedMinWidthValue:null,
_computedMinWidthParsed:null,
_computedMinWidthType:null,
_computedMinWidthTypeNull:true,
_computedMinWidthTypePixel:false,
_computedMinWidthTypePercent:false,
_computedMinWidthTypeAuto:false,
_computedMinWidthTypeFlex:false,
_computedMaxWidthValue:null,
_computedMaxWidthParsed:null,
_computedMaxWidthType:null,
_computedMaxWidthTypeNull:true,
_computedMaxWidthTypePixel:false,
_computedMaxWidthTypePercent:false,
_computedMaxWidthTypeAuto:false,
_computedMaxWidthTypeFlex:false,
_computedHeightValue:null,
_computedHeightParsed:null,
_computedHeightType:null,
_computedHeightTypeNull:true,
_computedHeightTypePixel:false,
_computedHeightTypePercent:false,
_computedHeightTypeAuto:false,
_computedHeightTypeFlex:false,
_computedMinHeightValue:null,
_computedMinHeightParsed:null,
_computedMinHeightType:null,
_computedMinHeightTypeNull:true,
_computedMinHeightTypePixel:false,
_computedMinHeightTypePercent:false,
_computedMinHeightTypeAuto:false,
_computedMinHeightTypeFlex:false,
_computedMaxHeightValue:null,
_computedMaxHeightParsed:null,
_computedMaxHeightType:null,
_computedMaxHeightTypeNull:true,
_computedMaxHeightTypePixel:false,
_computedMaxHeightTypePercent:false,
_computedMaxHeightTypeAuto:false,
_computedMaxHeightTypeFlex:false,
_applyLeft:function($0,
$1){this._unitDetectionPixelPercent("left",
$0);
this.addToQueue("left");
},
_applyRight:function($0,
$1){this._unitDetectionPixelPercent("right",
$0);
this.addToQueue("right");
},
_applyTop:function($0,
$1){this._unitDetectionPixelPercent("top",
$0);
this.addToQueue("top");
},
_applyBottom:function($0,
$1){this._unitDetectionPixelPercent("bottom",
$0);
this.addToQueue("bottom");
},
_applyWidth:function($0,
$1){this._unitDetectionPixelPercentAutoFlex("width",
$0);
this.addToQueue("width");
},
_applyMinWidth:function($0,
$1){this._unitDetectionPixelPercentAuto("minWidth",
$0);
this.addToQueue("minWidth");
},
_applyMaxWidth:function($0,
$1){this._unitDetectionPixelPercentAuto("maxWidth",
$0);
this.addToQueue("maxWidth");
},
_applyHeight:function($0,
$1){this._unitDetectionPixelPercentAutoFlex("height",
$0);
this.addToQueue("height");
},
_applyMinHeight:function($0,
$1){this._unitDetectionPixelPercentAuto("minHeight",
$0);
this.addToQueue("minHeight");
},
_applyMaxHeight:function($0,
$1){this._unitDetectionPixelPercentAuto("maxHeight",
$0);
this.addToQueue("maxHeight");
},
isMaterialized:function(){var $0=this._element;
return (this._initialLayoutDone&&this._isDisplayable&&qx.html.Style.getStyleProperty($0,
"display")!="none"&&qx.html.Style.getStyleProperty($0,
"visibility")!="hidden"&&$0.offsetWidth>0&&$0.offsetHeight>0);
},
pack:function(){this.setWidth(this.getPreferredBoxWidth());
this.setHeight(this.getPreferredBoxHeight());
},
auto:function(){this.setWidth("auto");
this.setHeight("auto");
},
getChildren:qx.lang.Function.returnNull,
getChildrenLength:qx.lang.Function.returnZero,
hasChildren:qx.lang.Function.returnFalse,
isEmpty:qx.lang.Function.returnTrue,
indexOf:qx.lang.Function.returnNegativeIndex,
contains:qx.lang.Function.returnFalse,
getVisibleChildren:qx.lang.Function.returnNull,
getVisibleChildrenLength:qx.lang.Function.returnZero,
hasVisibleChildren:qx.lang.Function.returnFalse,
isVisibleEmpty:qx.lang.Function.returnTrue,
_hasParent:false,
_isDisplayable:false,
isDisplayable:function(){return this._isDisplayable;
},
_checkParent:function($0,
$1){if(this.contains($0)){throw new Error("Could not insert myself into a child "+$0+"!");
}return $0;
},
_applyParent:function($0,
$1){if($1){var $2=$1.getChildren().indexOf(this);
this._computedWidthValue=this._computedMinWidthValue=this._computedMaxWidthValue=this._computedLeftValue=this._computedRightValue=null;
this._computedHeightValue=this._computedMinHeightValue=this._computedMaxHeightValue=this._computedTopValue=this._computedBottomValue=null;
this._cachedBoxWidth=this._cachedInnerWidth=this._cachedOuterWidth=null;
this._cachedBoxHeight=this._cachedInnerHeight=this._cachedOuterHeight=null;
qx.lang.Array.removeAt($1.getChildren(),
$2);
$1._invalidateVisibleChildren();
$1._removeChildFromChildrenQueue(this);
$1.getLayoutImpl().updateChildrenOnRemoveChild(this,
$2);
$1.addToJobQueue("removeChild");
$1._invalidatePreferredInnerDimensions();
this._oldParent=$1;
}
if($0){this._hasParent=true;
if(typeof this._insertIndex=="number"){qx.lang.Array.insertAt($0.getChildren(),
this,
this._insertIndex);
delete this._insertIndex;
}else{$0.getChildren().push(this);
}}else{this._hasParent=false;
}qx.core.Property.refresh(this);
return this._handleDisplayable("parent");
},
_applyDisplay:function($0,
$1){return this._handleDisplayable("display");
},
_handleDisplayable:function($0){var $1=this._computeDisplayable();
if(this._isDisplayable==$1&&!($1&&$0=="parent")){return true;
}this._isDisplayable=$1;
var $2=this.getParent();
if($2){$2._invalidateVisibleChildren();
$2._invalidatePreferredInnerDimensions();
}if($0&&this._oldParent&&this._oldParent._initialLayoutDone){var $3=this.getElement();
if($3){if(this.getVisibility()){this._beforeDisappear();
}this._beforeRemoveDom();
try{this._oldParent._getTargetNode().removeChild($3);
}catch(e){}this._afterRemoveDom();
if(this.getVisibility()){this._afterDisappear();
}}delete this._oldParent;
}if($1){if($2._initialLayoutDone){$2.getLayoutImpl().updateChildrenOnAddChild(this,
$2.getChildren().indexOf(this));
$2.addToJobQueue("addChild");
}this.addToLayoutChanges("initial");
this.addToCustomQueues($0);
if(this.getVisibility()){this._beforeAppear();
}if(!this._isCreated){qx.ui.core.Widget.addToGlobalElementQueue(this);
}qx.ui.core.Widget.addToGlobalStateQueue(this);
if(!qx.lang.Object.isEmpty(this._jobQueue)){qx.ui.core.Widget.addToGlobalJobQueue(this);
}
if(!qx.lang.Object.isEmpty(this._childrenQueue)){qx.ui.core.Widget.addToGlobalLayoutQueue(this);
}}else{qx.ui.core.Widget.removeFromGlobalElementQueue(this);
qx.ui.core.Widget.removeFromGlobalStateQueue(this);
qx.ui.core.Widget.removeFromGlobalJobQueue(this);
qx.ui.core.Widget.removeFromGlobalLayoutQueue(this);
this.removeFromCustomQueues($0);
if($2&&$0){if(this.getVisibility()){this._beforeDisappear();
}if($2._initialLayoutDone&&this._initialLayoutDone){$2.getLayoutImpl().updateChildrenOnRemoveChild(this,
$2.getChildren().indexOf(this));
$2.addToJobQueue("removeChild");
this._beforeRemoveDom();
var $4=this.getElement().parentNode;
if($4){$4.removeChild(this.getElement());
if($4&&$4!==$2._getTargetNode()){this.warn("Unexpected parent node: "+$4);
}}this._afterRemoveDom();
}$2._removeChildFromChildrenQueue(this);
if(this.getVisibility()){this._afterDisappear();
}}}this._handleDisplayableCustom($1,
$2,
$0);
return true;
},
addToCustomQueues:qx.lang.Function.returnTrue,
removeFromCustomQueues:qx.lang.Function.returnTrue,
_handleDisplayableCustom:qx.lang.Function.returnTrue,
_computeDisplayable:function(){return this.getDisplay()&&this.getParent()&&this.getParent()._isDisplayable?true:false;
},
_beforeAppear:function(){this.createDispatchEvent("beforeAppear");
},
_afterAppear:function(){this._isSeeable=true;
this.createDispatchEvent("appear");
},
_beforeDisappear:function(){this.removeState("over");
if(qx.Class.isDefined("qx.ui.form.Button")){this.removeState("pressed");
this.removeState("abandoned");
}this.createDispatchEvent("beforeDisappear");
},
_afterDisappear:function(){this._isSeeable=false;
this.createDispatchEvent("disappear");
},
_isSeeable:false,
isSeeable:function(){return this._isSeeable;
},
isAppearRelevant:function(){return this.getVisibility()&&this._isDisplayable;
},
_beforeInsertDom:function(){this.createDispatchEvent("beforeInsertDom");
},
_afterInsertDom:function(){this.createDispatchEvent("insertDom");
},
_beforeRemoveDom:function(){this.createDispatchEvent("beforeRemoveDom");
},
_afterRemoveDom:function(){this.createDispatchEvent("removeDom");
},
_applyVisibility:function($0,
$1){if($0){if(this._isDisplayable){this._beforeAppear();
}this.removeStyleProperty("display");
if(this._isDisplayable){this._afterAppear();
}}else{if(this._isDisplayable){this._beforeDisappear();
}this.setStyleProperty("display",
"none");
if(this._isDisplayable){this._afterDisappear();
}}},
show:function(){this.setVisibility(true);
this.setDisplay(true);
},
hide:function(){this.setVisibility(false);
},
connect:function(){this.setDisplay(true);
},
disconnect:function(){this.setDisplay(false);
},
_isCreated:false,
_getTargetNode:qx.core.Variant.select("qx.client",
{"gecko":function(){return this._element;
},
"default":function(){return this._borderElement||this._element;
}}),
addToDocument:function(){qx.ui.core.ClientDocument.getInstance().add(this);
},
isCreated:function(){return this._isCreated;
},
_createElementImpl:function(){this.setElement(this.getTopLevelWidget().getDocumentElement().createElement("div"));
},
_applyElement:function($0,
$1){this._isCreated=$0!=null;
if($1){$1.qx_Widget=null;
}
if($0){$0.qx_Widget=this;
$0.style.position="absolute";
this._element=$0;
this._style=$0.style;
this._applyStyleProperties($0);
this._applyHtmlProperties($0);
this._applyHtmlAttributes($0);
this._applyElementData($0);
this.createDispatchEvent("create");
this.addToStateQueue();
}else{this._element=this._style=null;
}},
addToJobQueue:function($0){if(this._hasParent){qx.ui.core.Widget.addToGlobalJobQueue(this);
}
if(!this._jobQueue){this._jobQueue={};
}this._jobQueue[$0]=true;
return true;
},
_flushJobQueue:function($0){try{var $1=this._jobQueue;
var $2=this.getParent();
if(!$2||qx.lang.Object.isEmpty($1)){return;
}var $3=this instanceof qx.ui.core.Parent?this.getLayoutImpl():null;
if($3){$3.updateSelfOnJobQueueFlush($1);
}}catch(ex){this.error("Flushing job queue (prechecks#1) failed",
ex);
}try{var $4=false;
var $5=$1.marginLeft||$1.marginRight;
var $6=$1.marginTop||$1.marginBottom;
var $7=$1.frameWidth;
var $8=$1.frameHeight;
var $9=($1.frameWidth||$1.preferredInnerWidth)&&this._recomputePreferredBoxWidth();
var $a=($1.frameHeight||$1.preferredInnerHeight)&&this._recomputePreferredBoxHeight();
if($9){var $b=this.getPreferredBoxWidth();
if(this._computedWidthTypeAuto){this._computedWidthValue=$b;
$1.width=true;
}
if(this._computedMinWidthTypeAuto){this._computedMinWidthValue=$b;
$1.minWidth=true;
}
if(this._computedMaxWidthTypeAuto){this._computedMaxWidthValue=$b;
$1.maxWidth=true;
}}
if($a){var $b=this.getPreferredBoxHeight();
if(this._computedHeightTypeAuto){this._computedHeightValue=$b;
$1.height=true;
}
if(this._computedMinHeightTypeAuto){this._computedMinHeightValue=$b;
$1.minHeight=true;
}
if(this._computedMaxHeightTypeAuto){this._computedMaxHeightValue=$b;
$1.maxHeight=true;
}}
if(($1.width||$1.minWidth||$1.maxWidth||$1.left||$1.right)&&this._recomputeBoxWidth()){$5=$7=true;
}
if(($1.height||$1.minHeight||$1.maxHeight||$1.top||$1.bottom)&&this._recomputeBoxHeight()){$6=$8=true;
}}catch(ex){this.error("Flushing job queue (recompute#2) failed",
ex);
}try{if(($5&&this._recomputeOuterWidth())||$9){$2._invalidatePreferredInnerWidth();
$2.getLayoutImpl().updateSelfOnChildOuterWidthChange(this);
$4=true;
}
if(($6&&this._recomputeOuterHeight())||$a){$2._invalidatePreferredInnerHeight();
$2.getLayoutImpl().updateSelfOnChildOuterHeightChange(this);
$4=true;
}
if($4){$2._flushJobQueue();
}}catch(ex){this.error("Flushing job queue (parentsignals#3) failed",
ex);
}try{$2._addChildToChildrenQueue(this);
for(var $c in $1){this._layoutChanges[$c]=true;
}}catch(ex){this.error("Flushing job queue (addjobs#4) failed",
ex);
}try{if(this instanceof qx.ui.core.Parent&&($1.paddingLeft||$1.paddingRight||$1.paddingTop||$1.paddingBottom)){var $d=this.getChildren(),
$e=$d.length;
if($1.paddingLeft){for(var $c=0;$c<$e;$c++){$d[$c].addToLayoutChanges("parentPaddingLeft");
}}
if($1.paddingRight){for(var $c=0;$c<$e;$c++){$d[$c].addToLayoutChanges("parentPaddingRight");
}}
if($1.paddingTop){for(var $c=0;$c<$e;$c++){$d[$c].addToLayoutChanges("parentPaddingTop");
}}
if($1.paddingBottom){for(var $c=0;$c<$e;$c++){$d[$c].addToLayoutChanges("parentPaddingBottom");
}}}
if($7){this._recomputeInnerWidth();
}
if($8){this._recomputeInnerHeight();
}
if(this._initialLayoutDone){if($3){$3.updateChildrenOnJobQueueFlush($1);
}}}catch(ex){this.error("Flushing job queue (childrensignals#5) failed",
ex);
}delete this._jobQueue;
},
_isWidthEssential:qx.lang.Function.returnTrue,
_isHeightEssential:qx.lang.Function.returnTrue,
_computeBoxWidthFallback:function(){return 0;
},
_computeBoxHeightFallback:function(){return 0;
},
_computeBoxWidth:function(){var $0=this.getParent().getLayoutImpl();
return Math.max(0,
qx.lang.Number.limit($0.computeChildBoxWidth(this),
this.getMinWidthValue(),
this.getMaxWidthValue()));
},
_computeBoxHeight:function(){var $0=this.getParent().getLayoutImpl();
return Math.max(0,
qx.lang.Number.limit($0.computeChildBoxHeight(this),
this.getMinHeightValue(),
this.getMaxHeightValue()));
},
_computeOuterWidth:function(){return Math.max(0,
(this.getMarginLeft()+this.getBoxWidth()+this.getMarginRight()));
},
_computeOuterHeight:function(){return Math.max(0,
(this.getMarginTop()+this.getBoxHeight()+this.getMarginBottom()));
},
_computeInnerWidth:function(){return Math.max(0,
this.getBoxWidth()-this.getFrameWidth());
},
_computeInnerHeight:function(){return Math.max(0,
this.getBoxHeight()-this.getFrameHeight());
},
getNeededWidth:function(){var $0=this.getParent().getLayoutImpl();
return Math.max(0,
$0.computeChildNeededWidth(this));
},
getNeededHeight:function(){var $0=this.getParent().getLayoutImpl();
return Math.max(0,
$0.computeChildNeededHeight(this));
},
_recomputeFlexX:function(){if(!this.getHasFlexX()){return false;
}
if(this._computedWidthTypeFlex){this._computedWidthValue=null;
this.addToLayoutChanges("width");
}return true;
},
_recomputeFlexY:function(){if(!this.getHasFlexY()){return false;
}
if(this._computedHeightTypeFlex){this._computedHeightValue=null;
this.addToLayoutChanges("height");
}return true;
},
_recomputePercentX:function(){if(!this.getHasPercentX()){return false;
}
if(this._computedWidthTypePercent){this._computedWidthValue=null;
this.addToLayoutChanges("width");
}
if(this._computedMinWidthTypePercent){this._computedMinWidthValue=null;
this.addToLayoutChanges("minWidth");
}
if(this._computedMaxWidthTypePercent){this._computedMaxWidthValue=null;
this.addToLayoutChanges("maxWidth");
}
if(this._computedLeftTypePercent){this._computedLeftValue=null;
this.addToLayoutChanges("left");
}
if(this._computedRightTypePercent){this._computedRightValue=null;
this.addToLayoutChanges("right");
}return true;
},
_recomputePercentY:function(){if(!this.getHasPercentY()){return false;
}
if(this._computedHeightTypePercent){this._computedHeightValue=null;
this.addToLayoutChanges("height");
}
if(this._computedMinHeightTypePercent){this._computedMinHeightValue=null;
this.addToLayoutChanges("minHeight");
}
if(this._computedMaxHeightTypePercent){this._computedMaxHeightValue=null;
this.addToLayoutChanges("maxHeight");
}
if(this._computedTopTypePercent){this._computedTopValue=null;
this.addToLayoutChanges("top");
}
if(this._computedBottomTypePercent){this._computedBottomValue=null;
this.addToLayoutChanges("bottom");
}return true;
},
_recomputeRangeX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this._computedLeftTypeNull||this._computedRightTypeNull){return false;
}this.addToLayoutChanges("width");
return true;
},
"default":function(){return !(this._computedLeftTypeNull||this._computedRightTypeNull);
}}),
_recomputeRangeY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this._computedTopTypeNull||this._computedBottomTypeNull){return false;
}this.addToLayoutChanges("height");
return true;
},
"default":function(){return !(this._computedTopTypeNull||this._computedBottomTypeNull);
}}),
_recomputeStretchingX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this.getAllowStretchX()&&this._computedWidthTypeNull){this._computedWidthValue=null;
this.addToLayoutChanges("width");
return true;
}return false;
},
"default":function(){if(this.getAllowStretchX()&&this._computedWidthTypeNull){return true;
}return false;
}}),
_recomputeStretchingY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this.getAllowStretchY()&&this._computedHeightTypeNull){this._computedHeightValue=null;
this.addToLayoutChanges("height");
return true;
}return false;
},
"default":function(){if(this.getAllowStretchY()&&this._computedHeightTypeNull){return true;
}return false;
}}),
_computeValuePixel:function($0){return Math.round($0);
},
_computeValuePixelLimit:function($0){return Math.max(0,
this._computeValuePixel($0));
},
_computeValuePercentX:function($0){return Math.round(this.getParent().getInnerWidthForChild(this)*$0*0.01);
},
_computeValuePercentXLimit:function($0){return Math.max(0,
this._computeValuePercentX($0));
},
_computeValuePercentY:function($0){return Math.round(this.getParent().getInnerHeightForChild(this)*$0*0.01);
},
_computeValuePercentYLimit:function($0){return Math.max(0,
this._computeValuePercentY($0));
},
getWidthValue:function(){if(this._computedWidthValue!=null){return this._computedWidthValue;
}
switch(this._computedWidthType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedWidthParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedWidthParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedWidthValue=this.getPreferredBoxWidth();
case qx.ui.core.Widget.TYPE_FLEX:if(this.getParent().getLayoutImpl().computeChildrenFlexWidth===undefined){throw new Error("Widget "+this+": having horizontal flex size (width="+this.getWidth()+") but parent layout "+this.getParent()+" does not support it");
}this.getParent().getLayoutImpl().computeChildrenFlexWidth();
return this._computedWidthValue=this._computedWidthFlexValue;
}return null;
},
getMinWidthValue:function(){if(this._computedMinWidthValue!=null){return this._computedMinWidthValue;
}
switch(this._computedMinWidthType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedMinWidthParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedMinWidthParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMinWidthValue=this.getPreferredBoxWidth();
}return null;
},
getMaxWidthValue:function(){if(this._computedMaxWidthValue!=null){return this._computedMaxWidthValue;
}
switch(this._computedMaxWidthType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedMaxWidthParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedMaxWidthParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMaxWidthValue=this.getPreferredBoxWidth();
}return null;
},
getLeftValue:function(){if(this._computedLeftValue!=null){return this._computedLeftValue;
}
switch(this._computedLeftType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedLeftValue=this._computeValuePixel(this._computedLeftParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedLeftValue=this._computeValuePercentX(this._computedLeftParsed);
}return null;
},
getRightValue:function(){if(this._computedRightValue!=null){return this._computedRightValue;
}
switch(this._computedRightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedRightValue=this._computeValuePixel(this._computedRightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedRightValue=this._computeValuePercentX(this._computedRightParsed);
}return null;
},
getHeightValue:function(){if(this._computedHeightValue!=null){return this._computedHeightValue;
}
switch(this._computedHeightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedHeightValue=this._computeValuePixelLimit(this._computedHeightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedHeightValue=this._computeValuePercentYLimit(this._computedHeightParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedHeightValue=this.getPreferredBoxHeight();
case qx.ui.core.Widget.TYPE_FLEX:if(this.getParent().getLayoutImpl().computeChildrenFlexHeight===undefined){throw new Error("Widget "+this+": having vertical flex size (height="+this.getHeight()+") but parent layout "+this.getParent()+" does not support it");
}this.getParent().getLayoutImpl().computeChildrenFlexHeight();
return this._computedHeightValue=this._computedHeightFlexValue;
}return null;
},
getMinHeightValue:function(){if(this._computedMinHeightValue!=null){return this._computedMinHeightValue;
}
switch(this._computedMinHeightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedMinHeightValue=this._computeValuePixelLimit(this._computedMinHeightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedMinHeightValue=this._computeValuePercentYLimit(this._computedMinHeightParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMinHeightValue=this.getPreferredBoxHeight();
}return null;
},
getMaxHeightValue:function(){if(this._computedMaxHeightValue!=null){return this._computedMaxHeightValue;
}
switch(this._computedMaxHeightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedMaxHeightValue=this._computeValuePixelLimit(this._computedMaxHeightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedMaxHeightValue=this._computeValuePercentYLimit(this._computedMaxHeightParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMaxHeightValue=this.getPreferredBoxHeight();
}return null;
},
getTopValue:function(){if(this._computedTopValue!=null){return this._computedTopValue;
}
switch(this._computedTopType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedTopValue=this._computeValuePixel(this._computedTopParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedTopValue=this._computeValuePercentY(this._computedTopParsed);
}return null;
},
getBottomValue:function(){if(this._computedBottomValue!=null){return this._computedBottomValue;
}
switch(this._computedBottomType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedBottomValue=this._computeValuePixel(this._computedBottomParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedBottomValue=this._computeValuePercentY(this._computedBottomParsed);
}return null;
},
_computeFrameWidth:function(){var $0=this._cachedBorderLeft+this.getPaddingLeft()+this.getPaddingRight()+this._cachedBorderRight;
switch(this.getOverflow()){case "scroll":case "scrollY":$0+=qx.ui.core.Widget.SCROLLBAR_SIZE;
break;
case "auto":break;
}return $0;
},
_computeFrameHeight:function(){var $0=this._cachedBorderTop+this.getPaddingTop()+this.getPaddingBottom()+this._cachedBorderBottom;
switch(this.getOverflow()){case "scroll":case "scrollX":$0+=qx.ui.core.Widget.SCROLLBAR_SIZE;
break;
case "auto":break;
}return $0;
},
_invalidateFrameDimensions:function(){this._invalidateFrameWidth();
this._invalidateFrameHeight();
},
_invalidatePreferredInnerDimensions:function(){this._invalidatePreferredInnerWidth();
this._invalidatePreferredInnerHeight();
},
_computePreferredBoxWidth:function(){try{return Math.max(0,
this.getPreferredInnerWidth()+this.getFrameWidth());
}catch(ex){this.error("_computePreferredBoxWidth failed",
ex);
}},
_computePreferredBoxHeight:function(){try{return Math.max(0,
this.getPreferredInnerHeight()+this.getFrameHeight());
}catch(ex){this.error("_computePreferredBoxHeight failed",
ex);
}},
_initialLayoutDone:false,
addToLayoutChanges:function($0){if(this._isDisplayable){this.getParent()._addChildToChildrenQueue(this);
}return this._layoutChanges[$0]=true;
},
addToQueue:function($0){this._initialLayoutDone?this.addToJobQueue($0):this.addToLayoutChanges($0);
},
addToQueueRuntime:function($0){return !this._initialLayoutDone||this.addToJobQueue($0);
},
_computeHasPercentX:function(){return (this._computedLeftTypePercent||this._computedWidthTypePercent||this._computedMinWidthTypePercent||this._computedMaxWidthTypePercent||this._computedRightTypePercent);
},
_computeHasPercentY:function(){return (this._computedTopTypePercent||this._computedHeightTypePercent||this._computedMinHeightTypePercent||this._computedMaxHeightTypePercent||this._computedBottomTypePercent);
},
_computeHasAutoX:function(){return (this._computedWidthTypeAuto||this._computedMinWidthTypeAuto||this._computedMaxWidthTypeAuto);
},
_computeHasAutoY:function(){return (this._computedHeightTypeAuto||this._computedMinHeightTypeAuto||this._computedMaxHeightTypeAuto);
},
_computeHasFlexX:function(){return this._computedWidthTypeFlex;
},
_computeHasFlexY:function(){return this._computedHeightTypeFlex;
},
_evalUnitsPixelPercentAutoFlex:function($0){switch($0){case "auto":return qx.ui.core.Widget.TYPE_AUTO;
case Infinity:case -Infinity:return qx.ui.core.Widget.TYPE_NULL;
}
switch(typeof $0){case "number":return isNaN($0)?qx.ui.core.Widget.TYPE_NULL:qx.ui.core.Widget.TYPE_PIXEL;
case "string":return $0.indexOf("%")!=-1?qx.ui.core.Widget.TYPE_PERCENT:$0.indexOf("*")!=-1?qx.ui.core.Widget.TYPE_FLEX:qx.ui.core.Widget.TYPE_NULL;
}return qx.ui.core.Widget.TYPE_NULL;
},
_evalUnitsPixelPercentAuto:function($0){switch($0){case "auto":return qx.ui.core.Widget.TYPE_AUTO;
case Infinity:case -Infinity:return qx.ui.core.Widget.TYPE_NULL;
}
switch(typeof $0){case "number":return isNaN($0)?qx.ui.core.Widget.TYPE_NULL:qx.ui.core.Widget.TYPE_PIXEL;
case "string":return $0.indexOf("%")!=-1?qx.ui.core.Widget.TYPE_PERCENT:qx.ui.core.Widget.TYPE_NULL;
}return qx.ui.core.Widget.TYPE_NULL;
},
_evalUnitsPixelPercent:function($0){switch($0){case Infinity:case -Infinity:return qx.ui.core.Widget.TYPE_NULL;
}
switch(typeof $0){case "number":return isNaN($0)?qx.ui.core.Widget.TYPE_NULL:qx.ui.core.Widget.TYPE_PIXEL;
case "string":return $0.indexOf("%")!=-1?qx.ui.core.Widget.TYPE_PERCENT:qx.ui.core.Widget.TYPE_NULL;
}return qx.ui.core.Widget.TYPE_NULL;
},
_unitDetectionPixelPercentAutoFlex:function($0,
$1){var $2=qx.ui.core.Widget.layoutPropertyTypes[$0];
var $3=$2.dataType;
var $4=$2.dataParsed;
var $5=$2.dataValue;
var $6=$2.typePixel;
var $7=$2.typePercent;
var $8=$2.typeAuto;
var $9=$2.typeFlex;
var $a=$2.typeNull;
var $b=this[$7];
var $c=this[$8];
var $d=this[$9];
switch(this[$3]=this._evalUnitsPixelPercentAutoFlex($1)){case qx.ui.core.Widget.TYPE_PIXEL:this[$6]=true;
this[$7]=this[$8]=this[$9]=this[$a]=false;
this[$4]=this[$5]=Math.round($1);
break;
case qx.ui.core.Widget.TYPE_PERCENT:this[$7]=true;
this[$6]=this[$8]=this[$9]=this[$a]=false;
this[$4]=parseFloat($1);
this[$5]=null;
break;
case qx.ui.core.Widget.TYPE_AUTO:this[$8]=true;
this[$6]=this[$7]=this[$9]=this[$a]=false;
this[$4]=this[$5]=null;
break;
case qx.ui.core.Widget.TYPE_FLEX:this[$9]=true;
this[$6]=this[$7]=this[$8]=this[$a]=false;
this[$4]=parseFloat($1);
this[$5]=null;
break;
default:this[$a]=true;
this[$6]=this[$7]=this[$8]=this[$9]=false;
this[$4]=this[$5]=null;
break;
}
if($b!=this[$7]){switch($0){case "minWidth":case "maxWidth":case "width":case "left":case "right":this._invalidateHasPercentX();
break;
case "maxHeight":case "minHeight":case "height":case "top":case "bottom":this._invalidateHasPercentY();
break;
}}if($c!=this[$8]){switch($0){case "minWidth":case "maxWidth":case "width":this._invalidateHasAutoX();
break;
case "minHeight":case "maxHeight":case "height":this._invalidateHasAutoY();
break;
}}if($d!=this[$9]){switch($0){case "width":this._invalidateHasFlexX();
break;
case "height":this._invalidateHasFlexY();
break;
}}},
_unitDetectionPixelPercentAuto:function($0,
$1){var $2=qx.ui.core.Widget.layoutPropertyTypes[$0];
var $3=$2.dataType;
var $4=$2.dataParsed;
var $5=$2.dataValue;
var $6=$2.typePixel;
var $7=$2.typePercent;
var $8=$2.typeAuto;
var $9=$2.typeNull;
var $a=this[$7];
var $b=this[$8];
switch(this[$3]=this._evalUnitsPixelPercentAuto($1)){case qx.ui.core.Widget.TYPE_PIXEL:this[$6]=true;
this[$7]=this[$8]=this[$9]=false;
this[$4]=this[$5]=Math.round($1);
break;
case qx.ui.core.Widget.TYPE_PERCENT:this[$7]=true;
this[$6]=this[$8]=this[$9]=false;
this[$4]=parseFloat($1);
this[$5]=null;
break;
case qx.ui.core.Widget.TYPE_AUTO:this[$8]=true;
this[$6]=this[$7]=this[$9]=false;
this[$4]=this[$5]=null;
break;
default:this[$9]=true;
this[$6]=this[$7]=this[$8]=false;
this[$4]=this[$5]=null;
break;
}
if($a!=this[$7]){switch($0){case "minWidth":case "maxWidth":case "width":case "left":case "right":this._invalidateHasPercentX();
break;
case "minHeight":case "maxHeight":case "height":case "top":case "bottom":this._invalidateHasPercentY();
break;
}}if($b!=this[$8]){switch($0){case "minWidth":case "maxWidth":case "width":this._invalidateHasAutoX();
break;
case "minHeight":case "maxHeight":case "height":this._invalidateHasAutoY();
break;
}}},
_unitDetectionPixelPercent:function($0,
$1){var $2=qx.ui.core.Widget.layoutPropertyTypes[$0];
var $3=$2.dataType;
var $4=$2.dataParsed;
var $5=$2.dataValue;
var $6=$2.typePixel;
var $7=$2.typePercent;
var $8=$2.typeNull;
var $9=this[$7];
switch(this[$3]=this._evalUnitsPixelPercent($1)){case qx.ui.core.Widget.TYPE_PIXEL:this[$6]=true;
this[$7]=this[$8]=false;
this[$4]=this[$5]=Math.round($1);
break;
case qx.ui.core.Widget.TYPE_PERCENT:this[$7]=true;
this[$6]=this[$8]=false;
this[$4]=parseFloat($1);
this[$5]=null;
break;
default:this[$8]=true;
this[$6]=this[$7]=false;
this[$4]=this[$5]=null;
break;
}
if($9!=this[$7]){switch($0){case "minWidth":case "maxWidth":case "width":case "left":case "right":this._invalidateHasPercentX();
break;
case "minHeight":case "maxHeight":case "height":case "top":case "bottom":this._invalidateHasPercentY();
break;
}}},
getTopLevelWidget:function(){return this._hasParent?this.getParent().getTopLevelWidget():null;
},
moveSelfBefore:function($0){this.getParent().addBefore(this,
$0);
},
moveSelfAfter:function($0){this.getParent().addAfter(this,
$0);
},
moveSelfToBegin:function(){this.getParent().addAtBegin(this);
},
moveSelfToEnd:function(){this.getParent().addAtEnd(this);
},
getPreviousSibling:function(){var $0=this.getParent();
if($0==null){return null;
}var $1=$0.getChildren();
return $1[$1.indexOf(this)-1];
},
getNextSibling:function(){var $0=this.getParent();
if($0==null){return null;
}var $1=$0.getChildren();
return $1[$1.indexOf(this)+1];
},
getPreviousVisibleSibling:function(){if(!this._hasParent){return null;
}var $0=this.getParent().getVisibleChildren();
return $0[$0.indexOf(this)-1];
},
getNextVisibleSibling:function(){if(!this._hasParent){return null;
}var $0=this.getParent().getVisibleChildren();
return $0[$0.indexOf(this)+1];
},
getPreviousActiveSibling:function($0){var $1=qx.ui.core.Widget.getActiveSiblingHelper(this,
this.getParent(),
-1,
$0,
null);
return $1?$1:this.getParent().getLastActiveChild();
},
getNextActiveSibling:function($0){var $1=qx.ui.core.Widget.getActiveSiblingHelper(this,
this.getParent(),
1,
$0,
null);
return $1?$1:this.getParent().getFirstActiveChild();
},
isFirstChild:function(){return this._hasParent&&this.getParent().getFirstChild()==this;
},
isLastChild:function(){return this._hasParent&&this.getParent().getLastChild()==this;
},
isFirstVisibleChild:function(){return this._hasParent&&this.getParent().getFirstVisibleChild()==this;
},
isLastVisibleChild:function(){return this._hasParent&&this.getParent().getLastVisibleChild()==this;
},
hasState:function($0){return this.__states&&this.__states[$0]?true:false;
},
addState:function($0){if(!this.__states){this.__states={};
}
if(!this.__states[$0]){this.__states[$0]=true;
if(this._hasParent){qx.ui.core.Widget.addToGlobalStateQueue(this);
}}},
removeState:function($0){if(this.__states&&this.__states[$0]){delete this.__states[$0];
if(this._hasParent){qx.ui.core.Widget.addToGlobalStateQueue(this);
}}},
_styleFromMap:function($0){var $1=qx.core.Property.$$method.style;
var $2=qx.core.Property.$$method.unstyle;
var $3;
var $4;
for(var $4 in $0){$3=$0[$4];
$3==="undefined"?this[$2[$4]]():this[$1[$4]]($3);
}},
_unstyleFromArray:function($0){var $1=qx.core.Property.$$method.unstyle;
var $2,
$3;
for(var $2=0,
$3=$0.length;$2<$3;$2++){this[$1[$0[$2]]]();
}},
_renderAppearance:function(){if(!this.__states){this.__states={};
}this._applyStateStyleFocus(this.__states);
var $0=this.getAppearance();
if($0){try{var $1=qx.theme.manager.Appearance.getInstance().styleFrom($0,
this.__states);
if($1){this._styleFromMap($1);
}}catch(ex){this.error("Could not apply state appearance",
ex);
}}},
_resetAppearanceThemeWrapper:function($0,
$1){var $2=this.getAppearance();
if($2){var $3=qx.theme.manager.Appearance.getInstance();
var $4=$3.styleFromTheme($1,
$2,
this.__states);
var $5=$3.styleFromTheme($0,
$2,
this.__states);
var $6=[];
for(var $7 in $4){if($5[$7]===undefined){$6.push($7);
}}this._unstyleFromArray($6);
this._styleFromMap($5);
}},
_applyStateStyleFocus:qx.core.Variant.select("qx.client",
{"mshtml":function($0){},
"gecko":function($0){if($0.focused){if(!qx.event.handler.FocusHandler.mouseFocus&&!this.getHideFocus()){this.setStyleProperty("MozOutline",
"1px dotted invert");
}}else{this.removeStyleProperty("MozOutline");
}},
"default":function($0){if($0.focused){if(!qx.event.handler.FocusHandler.mouseFocus&&!this.getHideFocus()){this.setStyleProperty("outline",
"1px dotted invert");
}}else{this.removeStyleProperty("outline");
}}}),
addToStateQueue:function(){qx.ui.core.Widget.addToGlobalStateQueue(this);
},
recursiveAddToStateQueue:function(){this.addToStateQueue();
},
_applyAppearance:function($0,
$1){if(!this.__states){this.__states={};
}var $2=qx.theme.manager.Appearance.getInstance();
if($0){var $3=$2.styleFrom($0,
this.__states)||{};
}
if($1){var $4=$2.styleFrom($1,
this.__states)||{};
var $5=[];
for(var $6 in $4){if(!$3||!($6 in $3)){$5.push($6);
}}}
if($5){this._unstyleFromArray($5);
}
if($3){this._styleFromMap($3);
}},
_recursiveAppearanceThemeUpdate:function($0,
$1){try{this._resetAppearanceThemeWrapper($0,
$1);
}catch(ex){this.error("Failed to update appearance theme",
ex);
}},
_applyElementData:function($0){},
setHtmlProperty:function($0,
$1){if(!this._htmlProperties){this._htmlProperties={};
}this._htmlProperties[$0]=$1;
if(this._isCreated&&this.getElement()[$0]!=$1){this.getElement()[$0]=$1;
}return true;
},
removeHtmlProperty:qx.core.Variant.select("qx.client",
{"mshtml":function($0){if(!this._htmlProperties){return;
}delete this._htmlProperties[$0];
if(this._isCreated){this.getElement().removeAttribute($0);
}return true;
},
"default":function($0){if(!this._htmlProperties){return;
}delete this._htmlProperties[$0];
if(this._isCreated){this.getElement().removeAttribute($0);
delete this.getElement()[$0];
}return true;
}}),
getHtmlProperty:function($0){if(!this._htmlProperties){return "";
}return this._htmlProperties[$0]||"";
},
_applyHtmlProperties:function($0){var $1=this._htmlProperties;
if($1){var $2;
for($2 in $1){$0[$2]=$1[$2];
}}},
_generateHtmlId:function(){var $0=this.classname+"."+qx.ui.core.Widget._idCounter++;
this.debug("setting autogenerated HTML id to "+$0);
this.setHtmlProperty("id",
$0);
},
setHtmlAttribute:function($0,
$1){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use setHtmlProperty instead");
if(!this._htmlAttributes){this._htmlAttributes={};
}this._htmlAttributes[$0]=$1;
if(this._isCreated){this.getElement().setAttribute($0,
$1);
}return true;
},
removeHtmlAttribute:function($0){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use removeHtmlProperty instead");
if(!this._htmlAttributes){return;
}delete this._htmlAttributes[$0];
if(this._isCreated){this.getElement().removeAttribute($0);
}return true;
},
getHtmlAttribute:function($0){if(!this._htmlAttributes){return "";
}return this._htmlAttributes[$0]||"";
},
_applyHtmlAttributes:function($0){var $1=this._htmlAttributes;
if($1){var $2;
for($2 in $1){$0.setAttribute($2,
$1[$2]);
}}},
getStyleProperty:function($0){if(!this._styleProperties){return "";
}return this._styleProperties[$0]||"";
},
__outerElementStyleProperties:{cursor:true,
zIndex:true,
filter:true,
display:true,
visibility:true},
setStyleProperty:function($0,
$1){if(!this._styleProperties){this._styleProperties={};
}this._styleProperties[$0]=$1;
if(this._isCreated){var $2=this.__outerElementStyleProperties[$0]?this.getElement():this._getTargetNode();
if($2){$2.style[$0]=($1==null)?"":$1;
}}},
removeStyleProperty:function($0){if(!this._styleProperties){return;
}delete this._styleProperties[$0];
if(this._isCreated){var $1=this.__outerElementStyleProperties[$0]?this.getElement():this._getTargetNode();
if($1){$1.style[$0]="";
}}},
_applyStyleProperties:function($0){var $1=this._styleProperties;
if(!$1){return;
}var $2;
var $3=$0;
var $4=this._getTargetNode();
var $0;
var $5;
for($2 in $1){$0=this.__outerElementStyleProperties[$2]?$3:$4;
$5=$1[$2];
$0.style[$2]=($5==null)?"":$5;
}},
_applyEnabled:function($0,
$1){if($0===false){this.addState("disabled");
this.removeState("over");
if(qx.Class.isDefined("qx.ui.form.Button")){this.removeState("abandoned");
this.removeState("pressed");
}}else{this.removeState("disabled");
}},
isFocusable:function(){return this.getEnabled()&&this.isSeeable()&&this.getTabIndex()>=0&&this.getTabIndex()!=null;
},
isFocusRoot:function(){return false;
},
getFocusRoot:function(){if(this._hasParent){return this.getParent().getFocusRoot();
}return null;
},
getActiveChild:function(){var $0=this.getFocusRoot();
if($0){return $0.getActiveChild();
}return null;
},
_ontabfocus:qx.lang.Function.returnTrue,
_applyFocused:function($0,
$1){if(!this.isCreated()){return;
}var $2=this.getFocusRoot();
if($2){if($0){$2.setFocusedChild(this);
this._visualizeFocus();
}else{if($2.getFocusedChild()==this){$2.setFocusedChild(null);
}this._visualizeBlur();
}}},
_applyHideFocus:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){this.setHtmlProperty("hideFocus",
$0);
},
"default":qx.lang.Function.returnTrue}),
_visualizeBlur:function(){if(this.getEnableElementFocus()&&(!this.getFocusRoot().getFocusedChild()||(this.getFocusRoot().getFocusedChild()&&this.getFocusRoot().getFocusedChild().getEnableElementFocus()))){try{this.getElement().blur();
}catch(ex){}}this.removeState("focused");
},
_visualizeFocus:function(){if(!qx.event.handler.FocusHandler.mouseFocus&&this.getEnableElementFocus()){try{this.getElement().focus();
}catch(ex){}}this.addState("focused");
},
focus:function(){delete qx.event.handler.FocusHandler.mouseFocus;
this.setFocused(true);
},
blur:function(){delete qx.event.handler.FocusHandler.mouseFocus;
this.setFocused(false);
},
_applyCapture:function($0,
$1){var $2=qx.event.handler.EventHandler.getInstance();
if($1){$2.setCaptureWidget(null);
}else if($0){$2.setCaptureWidget(this);
}},
_applyZIndex:function($0,
$1){if($0==null){this.removeStyleProperty("zIndex");
}else{this.setStyleProperty("zIndex",
$0);
}},
_applyTabIndex:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){this.setHtmlProperty("tabIndex",
$0<0?-1:1);
},
"gecko":function($0,
$1){this.setStyleProperty("MozUserFocus",
($0<0?"ignore":"normal"));
},
"default":function($0,
$1){this.setStyleProperty("userFocus",
($0<0?"ignore":"normal"));
this.setHtmlProperty("tabIndex",
$0<0?-1:1);
}}),
_applySelectable:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){},
"gecko":function($0,
$1){if($0){this.removeStyleProperty("MozUserSelect");
}else{this.setStyleProperty("MozUserSelect",
"none");
}},
"webkit":function($0,
$1){if($0){this.removeStyleProperty("WebkitUserSelect");
}else{this.setStyleProperty("WebkitUserSelect",
"none");
}},
"khtml":function($0,
$1){if($0){this.removeStyleProperty("KhtmlUserSelect");
}else{this.setStyleProperty("KhtmlUserSelect",
"none");
}},
"default":function($0,
$1){if($0){return this.removeStyleProperty("userSelect");
}else{this.setStyleProperty("userSelect",
"none");
}}}),
_applyOpacity:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){if($0==null||$0>=1||$0<0){this.removeStyleProperty("filter");
}else{this.setStyleProperty("filter",
("Alpha(Opacity="+Math.round($0*100)+")"));
}},
"default":function($0,
$1){if($0==null||$0>1){if(qx.core.Variant.isSet("qx.client",
"gecko")){this.removeStyleProperty("MozOpacity");
}else if(qx.core.Variant.isSet("qx.client",
"khtml")){this.removeStyleProperty("KhtmlOpacity");
}this.removeStyleProperty("opacity");
}else{$0=qx.lang.Number.limit($0,
0,
1);
if(qx.core.Variant.isSet("qx.client",
"gecko")){this.setStyleProperty("MozOpacity",
$0);
}else if(qx.core.Variant.isSet("qx.client",
"khtml")){this.setStyleProperty("KhtmlOpacity",
$0);
}this.setStyleProperty("opacity",
$0);
}}}),
__cursorMap:qx.core.Variant.select("qx.client",
{"mshtml":{"cursor":"hand",
"ew-resize":"e-resize",
"ns-resize":"n-resize",
"nesw-resize":"ne-resize",
"nwse-resize":"nw-resize"},
"opera":{"col-resize":"e-resize",
"row-resize":"n-resize",
"ew-resize":"e-resize",
"ns-resize":"n-resize",
"nesw-resize":"ne-resize",
"nwse-resize":"nw-resize"},
"default":{}}),
_applyCursor:function($0,
$1){if($0){this.setStyleProperty("cursor",
this.__cursorMap[$0]||$0);
}else{this.removeStyleProperty("cursor");
}},
_applyCommand:function($0,
$1){},
_applyBackgroundImage:function($0,
$1){var $2=qx.io.image.Manager.getInstance();
var $3=qx.io.Alias.getInstance();
if($1){$2.hide($1);
}
if($0){$2.show($0);
}$3.connect(this._styleBackgroundImage,
this,
$0);
},
_styleBackgroundImage:function($0){$0?this.setStyleProperty("backgroundImage",
"url("+$0+")"):this.removeStyleProperty("backgroundImage");
},
_applyBackgroundRepeat:function($0,
$1){$0?this.setStyleProperty("backgroundRepeat",
$0):this.removeStyleProperty("backgroundRepeat");
},
_applyClip:function($0,
$1){return this._compileClipString();
},
_compileClipString:function(){var $0=this.getClipLeft();
var $1=this.getClipTop();
var $2=this.getClipWidth();
var $3=this.getClipHeight();
var $4,
$5;
if($0==null){$4=($2==null?"auto":$2+"px");
$0="auto";
}else{$4=($2==null?"auto":$0+$2+"px");
$0=$0+"px";
}
if($1==null){$5=($3==null?"auto":$3+"px");
$1="auto";
}else{$5=($3==null?"auto":$1+$3+"px");
$1=$1+"px";
}return this.setStyleProperty("clip",
("rect("+$1+","+$4+","+$5+","+$0+")"));
},
_applyOverflow:qx.core.Variant.select("qx.client",
{"default":function($0,
$1){var $2=$0;
var $3="overflow";
switch($0){case "scrollX":$3="overflowX";
$2="scroll";
break;
case "scrollY":$3="overflowY";
$2="scroll";
break;
}var $4=["overflow",
"overflowX",
"overflowY"];
for(var $5=0;$5<$4.length;$5++){if($4[$5]!=$3){this.removeStyleProperty($4[$5]);
}}
switch($0){case "scrollX":this.setStyleProperty("overflowY",
"hidden");
break;
case "scrollY":this.setStyleProperty("overflowX",
"hidden");
break;
}this._renderOverflow($3,
$2,
$0,
$1);
this.addToQueue("overflow");
},
"gecko":function($0,
$1){var $2=$0;
var $3="overflow";
switch($2){case "hidden":$2="-moz-scrollbars-none";
break;
case "scrollX":$2="-moz-scrollbars-horizontal";
break;
case "scrollY":$2="-moz-scrollbars-vertical";
break;
}this._renderOverflow($3,
$2,
$0,
$1);
this.addToQueue("overflow");
},
"opera":function($0,
$1){var $2=$0;
var $3="overflow";
switch($2){case "scrollX":case "scrollY":$2="scroll";
break;
}this._renderOverflow($3,
$2,
$0,
$1);
this.addToQueue("overflow");
}}),
_renderOverflow:function($0,
$1,
$2,
$3){this.setStyleProperty($0,
$1||"");
this._invalidateFrameWidth();
this._invalidateFrameHeight();
},
getOverflowX:function(){var $0=this.getOverflow();
return $0=="scrollY"?"hidden":$0;
},
getOverflowY:function(){var $0=this.getOverflow();
return $0=="scrollX"?"hidden":$0;
},
_applyBackgroundColor:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._styleBackgroundColor,
this,
$0);
},
_styleBackgroundColor:function($0){$0?this.setStyleProperty("backgroundColor",
$0):this.removeStyleProperty("backgroundColor");
},
_applyTextColor:function($0,
$1){},
_applyFont:function($0,
$1){},
_cachedBorderTop:0,
_cachedBorderRight:0,
_cachedBorderBottom:0,
_cachedBorderLeft:0,
_applyBorder:function($0,
$1){qx.theme.manager.Border.getInstance().connect(this._queueBorder,
this,
$0);
},
__borderJobs:{top:"borderTop",
right:"borderRight",
bottom:"borderBottom",
left:"borderLeft"},
_queueBorder:function($0,
$1){if(!$1){var $2=this.__borderJobs;
for(var $3 in $2){this.addToQueue($2[$3]);
}this.__reflowBorderX($0);
this.__reflowBorderY($0);
}else{if($1==="left"||$1==="right"){this.__reflowBorderX($0);
}else{this.__reflowBorderY($0);
}this.addToQueue(this.__borderJobs[$1]);
}this.__borderObject=$0;
},
__reflowBorderX:function($0){var $1=this._cachedBorderLeft;
var $2=this._cachedBorderRight;
this._cachedBorderLeft=$0?$0.getWidthLeft():0;
this._cachedBorderRight=$0?$0.getWidthRight():0;
if(($1+$2)!=(this._cachedBorderLeft+this._cachedBorderRight)){this._invalidateFrameWidth();
}},
__reflowBorderY:function($0){var $1=this._cachedBorderTop;
var $2=this._cachedBorderBottom;
this._cachedBorderTop=$0?$0.getWidthTop():0;
this._cachedBorderBottom=$0?$0.getWidthBottom():0;
if(($1+$2)!=(this._cachedBorderTop+this._cachedBorderBottom)){this._invalidateFrameHeight();
}},
renderBorder:function($0){var $1=this.__borderObject;
if($1){if($0.borderTop){$1.renderTop(this);
}
if($0.borderRight){$1.renderRight(this);
}
if($0.borderBottom){$1.renderBottom(this);
}
if($0.borderLeft){$1.renderLeft(this);
}}else{var $2=qx.ui.core.Border;
if($0.borderTop){$2.resetTop(this);
}
if($0.borderRight){$2.resetRight(this);
}
if($0.borderBottom){$2.resetBottom(this);
}
if($0.borderLeft){$2.resetLeft(this);
}}},
prepareEnhancedBorder:qx.core.Variant.select("qx.client",
{"gecko":qx.lang.Function.returnTrue,
"default":function(){var $0=this.getElement();
var $1=this._borderElement=document.createElement("div");
var $2=$0.style;
var $3=this._innerStyle=$1.style;
if(qx.core.Variant.isSet("qx.client",
"mshtml")){}else{$3.width=$3.height="100%";
}$3.position="absolute";
for(var $4 in this._styleProperties){switch($4){case "zIndex":case "filter":case "display":break;
default:$3[$4]=$2[$4];
$2[$4]="";
}}
for(var $4 in this._htmlProperties){switch($4){case "unselectable":$1.unselectable=this._htmlProperties[$4];
}}while($0.firstChild){$1.appendChild($0.firstChild);
}$0.appendChild($1);
}}),
_applyPaddingTop:function($0,
$1){this.addToQueue("paddingTop");
this._invalidateFrameHeight();
},
_applyPaddingRight:function($0,
$1){this.addToQueue("paddingRight");
this._invalidateFrameWidth();
},
_applyPaddingBottom:function($0,
$1){this.addToQueue("paddingBottom");
this._invalidateFrameHeight();
},
_applyPaddingLeft:function($0,
$1){this.addToQueue("paddingLeft");
this._invalidateFrameWidth();
},
renderPadding:function($0){},
_applyMarginLeft:function($0,
$1){this.addToQueue("marginLeft");
},
_applyMarginRight:function($0,
$1){this.addToQueue("marginRight");
},
_applyMarginTop:function($0,
$1){this.addToQueue("marginTop");
},
_applyMarginBottom:function($0,
$1){this.addToQueue("marginBottom");
},
execute:function(){var $0=this.getCommand();
if($0){$0.execute(this);
}this.createDispatchEvent("execute");
},
_visualPropertyCheck:function(){if(!this.isCreated()){throw new Error(this.classname+": Element must be created previously!");
}},
setScrollLeft:function($0){this._visualPropertyCheck();
this._getTargetNode().scrollLeft=$0;
},
setScrollTop:function($0){this._visualPropertyCheck();
this._getTargetNode().scrollTop=$0;
},
getOffsetLeft:function(){this._visualPropertyCheck();
return qx.html.Offset.getLeft(this.getElement());
},
getOffsetTop:function(){this._visualPropertyCheck();
return qx.html.Offset.getTop(this.getElement());
},
getScrollLeft:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollLeft;
},
getScrollTop:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollTop;
},
getClientWidth:function(){this._visualPropertyCheck();
return this._getTargetNode().clientWidth;
},
getClientHeight:function(){this._visualPropertyCheck();
return this._getTargetNode().clientHeight;
},
getOffsetWidth:function(){this._visualPropertyCheck();
return this.getElement().offsetWidth;
},
getOffsetHeight:function(){this._visualPropertyCheck();
return this.getElement().offsetHeight;
},
getScrollWidth:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollWidth;
},
getScrollHeight:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollHeight;
},
scrollIntoView:function($0){this.scrollIntoViewX($0);
this.scrollIntoViewY($0);
},
scrollIntoViewX:function($0){if(!this._isCreated||!this._isDisplayable){this.warn("The function scrollIntoViewX can only be called after the widget is created!");
return false;
}return qx.html.ScrollIntoView.scrollX(this.getElement(),
$0);
},
scrollIntoViewY:function($0){if(!this._isCreated||!this._isDisplayable){this.warn("The function scrollIntoViewY can only be called after the widget is created!");
return false;
}return qx.html.ScrollIntoView.scrollY(this.getElement(),
$0);
},
supportsDrop:function($0){var $1=this.getSupportsDropMethod();
if($1!==null){return $1.call(this,
$0);
}return (this!=$0.sourceWidget);
}},
settings:{"qx.widgetQueueDebugging":false,
"qx.widgetDebugId":false},
defer:function($0,
$1){$0.__initApplyMethods($1);
if(qx.core.Variant.isSet("qx.client",
"mshtml")){$1._renderRuntimeWidth=function($2){this._style.pixelWidth=($2==null)?0:$2;
if(this._innerStyle){this._innerStyle.pixelWidth=($2==null)?0:$2-2;
}};
$1._renderRuntimeHeight=function($2){this._style.pixelHeight=($2==null)?0:$2;
if(this._innerStyle){this._innerStyle.pixelHeight=($2==null)?0:$2-2;
}};
$1._resetRuntimeWidth=function(){this._style.width="";
if(this._innerStyle){this._innerStyle.width="";
}};
$1._resetRuntimeHeight=function(){this._style.height="";
if(this._innerStyle){this._innerStyle.height="";
}};
}$0.__initLayoutProperties($0);
{};
},
destruct:function(){var $0=this.getElement();
if($0){$0.qx_Widget=null;
}this._disposeFields("_isCreated",
"_inlineEvents",
"_element",
"_style",
"_borderElement",
"_innerStyle",
"_oldParent",
"_styleProperties",
"_htmlProperties",
"_htmlAttributes",
"__states",
"_jobQueue",
"_layoutChanges",
"__borderObject");
}});




/* ID: qx.html.Dimension */
qx.Class.define("qx.html.Dimension",
{statics:{getOuterWidth:function($0){return qx.html.Dimension.getBoxWidth($0)+qx.html.Style.getMarginLeft($0)+qx.html.Style.getMarginRight($0);
},
getOuterHeight:function($0){return qx.html.Dimension.getBoxHeight($0)+qx.html.Style.getMarginTop($0)+qx.html.Style.getMarginBottom($0);
},
getBoxWidthForZeroHeight:function($0){var $1=$0.offsetHeight;
if($1==0){var $2=$0.style.height;
$0.style.height="1px";
}var $3=$0.offsetWidth;
if($1==0){$0.style.height=$2;
}return $3;
},
getBoxHeightForZeroWidth:function($0){var $1=$0.offsetWidth;
if($1==0){var $2=$0.style.width;
$0.style.width="1px";
}var $3=$0.offsetHeight;
if($1==0){$0.style.width=$2;
}return $3;
},
getBoxWidth:function($0){return $0.offsetWidth;
},
getBoxHeight:function($0){return $0.offsetHeight;
},
getAreaWidth:qx.core.Variant.select("qx.client",
{"gecko":function($0){if($0.clientWidth!=0&&$0.clientWidth!=(qx.html.Style.getBorderLeft($0)+qx.html.Style.getBorderRight($0))){return $0.clientWidth;
}else{return qx.html.Dimension.getBoxWidth($0)-qx.html.Dimension.getInsetLeft($0)-qx.html.Dimension.getInsetRight($0);
}},
"default":function($0){return $0.clientWidth!=0?$0.clientWidth:(qx.html.Dimension.getBoxWidth($0)-qx.html.Dimension.getInsetLeft($0)-qx.html.Dimension.getInsetRight($0));
}}),
getAreaHeight:qx.core.Variant.select("qx.client",
{"gecko":function($0){if($0.clientHeight!=0&&$0.clientHeight!=(qx.html.Style.getBorderTop($0)+qx.html.Style.getBorderBottom($0))){return $0.clientHeight;
}else{return qx.html.Dimension.getBoxHeight($0)-qx.html.Dimension.getInsetTop($0)-qx.html.Dimension.getInsetBottom($0);
}},
"default":function($0){return $0.clientHeight!=0?$0.clientHeight:(qx.html.Dimension.getBoxHeight($0)-qx.html.Dimension.getInsetTop($0)-qx.html.Dimension.getInsetBottom($0));
}}),
getInnerWidth:function($0){return qx.html.Dimension.getAreaWidth($0)-qx.html.Style.getPaddingLeft($0)-qx.html.Style.getPaddingRight($0);
},
getInnerHeight:function($0){return qx.html.Dimension.getAreaHeight($0)-qx.html.Style.getPaddingTop($0)-qx.html.Style.getPaddingBottom($0);
},
getInsetLeft:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.clientLeft;
},
"default":function($0){return qx.html.Style.getBorderLeft($0);
}}),
getInsetTop:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.clientTop;
},
"default":function($0){return qx.html.Style.getBorderTop($0);
}}),
getInsetRight:qx.core.Variant.select("qx.client",
{"mshtml":function($0){if(qx.html.Style.getStyleProperty($0,
"overflowY")=="hidden"||$0.clientWidth==0){return qx.html.Style.getBorderRight($0);
}return Math.max(0,
$0.offsetWidth-$0.clientLeft-$0.clientWidth);
},
"default":function($0){if($0.clientWidth==0){var $1=qx.html.Style.getStyleProperty($0,
"overflow");
var $2=$1=="scroll"||$1=="-moz-scrollbars-vertical"?16:0;
return Math.max(0,
qx.html.Style.getBorderRight($0)+$2);
}return Math.max(0,
$0.offsetWidth-$0.clientWidth-qx.html.Style.getBorderLeft($0));
}}),
getInsetBottom:qx.core.Variant.select("qx.client",
{"mshtml":function($0){if(qx.html.Style.getStyleProperty($0,
"overflowX")=="hidden"||$0.clientHeight==0){return qx.html.Style.getBorderBottom($0);
}return Math.max(0,
$0.offsetHeight-$0.clientTop-$0.clientHeight);
},
"default":function($0){if($0.clientHeight==0){var $1=qx.html.Style.getStyleProperty($0,
"overflow");
var $2=$1=="scroll"||$1=="-moz-scrollbars-horizontal"?16:0;
return Math.max(0,
qx.html.Style.getBorderBottom($0)+$2);
}return Math.max(0,
$0.offsetHeight-$0.clientHeight-qx.html.Style.getBorderTop($0));
}}),
getScrollBarSizeLeft:function($0){return 0;
},
getScrollBarSizeTop:function($0){return 0;
},
getScrollBarSizeRight:function($0){return qx.html.Dimension.getInsetRight($0)-qx.html.Style.getBorderRight($0);
},
getScrollBarSizeBottom:function($0){return qx.html.Dimension.getInsetBottom($0)-qx.html.Style.getBorderBottom($0);
},
getScrollBarVisibleX:function($0){return qx.html.Dimension.getScrollBarSizeRight($0)>0;
},
getScrollBarVisibleY:function($0){return qx.html.Dimension.getScrollBarSizeBottom($0)>0;
}}});




/* ID: qx.html.Style */
qx.Class.define("qx.html.Style",
{statics:{getStylePropertySure:qx.lang.Object.select((document.defaultView&&document.defaultView.getComputedStyle)?"hasComputed":"noComputed",
{"hasComputed":function($0,
$1){return !$0?null:$0.ownerDocument?$0.ownerDocument.defaultView.getComputedStyle($0,
"")[$1]:$0.style[$1];
},
"noComputed":qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){try{if(!$0){return null;
}
if($0.parentNode&&$0.currentStyle){return $0.currentStyle[$1];
}else{var $2=$0.runtimeStyle[$1];
if($2!=null&&typeof $2!="undefined"&&$2!=""){return $2;
}return $0.style[$1];
}}catch(ex){throw new Error("Could not evaluate computed style: "+$0+"["+$1+"]: "+ex);
}},
"default":function($0,
$1){return !$0?null:$0.style[$1];
}})}),
getStyleProperty:qx.lang.Object.select((document.defaultView&&document.defaultView.getComputedStyle)?"hasComputed":"noComputed",
{"hasComputed":function($0,
$1){try{return $0.ownerDocument.defaultView.getComputedStyle($0,
"")[$1];
}catch(ex){throw new Error("Could not evaluate computed style: "+$0+"["+$1+"]: "+ex);
}},
"noComputed":qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){try{return $0.currentStyle[$1];
}catch(ex){throw new Error("Could not evaluate computed style: "+$0+"["+$1+"]: "+ex);
}},
"default":function($0,
$1){try{return $0.style[$1];
}catch(ex){throw new Error("Could not evaluate computed style: "+$0+"["+$1+"]");
}}})}),
getStyleSize:function($0,
$1){return parseInt(qx.html.Style.getStyleProperty($0,
$1))||0;
},
getMarginLeft:function($0){return qx.html.Style.getStyleSize($0,
"marginLeft");
},
getMarginTop:function($0){return qx.html.Style.getStyleSize($0,
"marginTop");
},
getMarginRight:function($0){return qx.html.Style.getStyleSize($0,
"marginRight");
},
getMarginBottom:function($0){return qx.html.Style.getStyleSize($0,
"marginBottom");
},
getPaddingLeft:function($0){return qx.html.Style.getStyleSize($0,
"paddingLeft");
},
getPaddingTop:function($0){return qx.html.Style.getStyleSize($0,
"paddingTop");
},
getPaddingRight:function($0){return qx.html.Style.getStyleSize($0,
"paddingRight");
},
getPaddingBottom:function($0){return qx.html.Style.getStyleSize($0,
"paddingBottom");
},
getBorderLeft:function($0){return qx.html.Style.getStyleProperty($0,
"borderLeftStyle")=="none"?0:qx.html.Style.getStyleSize($0,
"borderLeftWidth");
},
getBorderTop:function($0){return qx.html.Style.getStyleProperty($0,
"borderTopStyle")=="none"?0:qx.html.Style.getStyleSize($0,
"borderTopWidth");
},
getBorderRight:function($0){return qx.html.Style.getStyleProperty($0,
"borderRightStyle")=="none"?0:qx.html.Style.getStyleSize($0,
"borderRightWidth");
},
getBorderBottom:function($0){return qx.html.Style.getStyleProperty($0,
"borderBottomStyle")=="none"?0:qx.html.Style.getStyleSize($0,
"borderBottomWidth");
}}});




/* ID: qx.html.StyleSheet */
qx.Class.define("qx.html.StyleSheet",
{statics:{includeFile:function($0){var $1=document.createElement("link");
$1.type="text/css";
$1.rel="stylesheet";
$1.href=$0;
var $2=document.getElementsByTagName("head")[0];
$2.appendChild($1);
},
createElement:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function($0){var $1=document.createStyleSheet();
if($0){$1.cssText=$0;
}return $1;
},
"other":function($0){var $1=document.createElement("style");
$1.type="text/css";
$1.appendChild(document.createTextNode($0||"body {}"));
document.getElementsByTagName("head")[0].appendChild($1);
if($1.sheet){return $1.sheet;
}else{var $2=document.styleSheets;
for(var $3=$2.length-1;$3>=0;$3--){if($2[$3].ownerNode==$1){return $2[$3];
}}}throw "Error: Could not get a reference to the sheet object";
}}),
addRule:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function($0,
$1,
$2){$0.addRule($1,
$2);
},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function($0,
$1,
$2){if(!$0._qxRules){$0._qxRules={};
}
if(!$0._qxRules[$1]){var $3=document.createTextNode($1+"{"+$2+"}");
$0.ownerNode.appendChild($3);
$0._qxRules[$1]=$3;
}},
"other":function($0,
$1,
$2){$0.insertRule($1+"{"+$2+"}",
$0.cssRules.length);
}})}),
removeRule:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function($0,
$1){var $2=$0.rules;
var $3=$2.length;
for(var $4=$3-1;$4>=0;$4--){if($2[$4].selectorText==$1){$0.removeRule($4);
}}},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function($0,
$1){var $2=function(){qx.log.Logger.ROOT_LOGGER.warn("In Safari/Webkit you can only remove rules that are created using qx.html.StyleSheet.addRule");
};
if(!$0._qxRules){$2();
}var $3=$0._qxRules[$1];
if($3){$0.ownerNode.removeChild($3);
$0._qxRules[$1]=null;
}else{$2();
}},
"other":function($0,
$1){var $2=$0.cssRules;
var $3=$2.length;
for(var $4=$3-1;$4>=0;$4--){if($2[$4].selectorText==$1){$0.deleteRule($4);
}}}})}),
removeAllRules:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function($0){var $1=$0.rules;
var $2=$1.length;
for(var $3=$2-1;$3>=0;$3--){$0.removeRule($3);
}},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function($0){var $1=$0.ownerNode;
var $2=$1.childNodes;
while($2.length>0){$1.removeChild($2[0]);
}},
"other":function($0){var $1=$0.cssRules;
var $2=$1.length;
for(var $3=$2-1;$3>=0;$3--){$0.deleteRule($3);
}}})}),
addImport:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function($0,
$1){$0.addImport($1);
},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function($0,
$1){$0.ownerNode.appendChild(document.createTextNode('@import "'+$1+'";'));
},
"other":function($0,
$1){$0.insertRule('@import "'+$1+'";',
$0.cssRules.length);
}})}),
removeImport:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function($0,
$1){var $2=$0.imports;
var $3=$2.length;
for(var $4=$3-1;$4>=0;$4--){if($2[$4].href==$1){$0.removeImport($4);
}}},
"other":function($0,
$1){var $2=$0.cssRules;
var $3=$2.length;
for(var $4=$3-1;$4>=0;$4--){if($2[$4].href==$1){$0.deleteRule($4);
}}}}),
removeAllImports:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function($0){var $1=$0.imports;
var $2=$1.length;
for(var $3=$2-1;$3>=0;$3--){$0.removeImport($3);
}},
"other":function($0){var $1=$0.cssRules;
var $2=$1.length;
for(var $3=$2-1;$3>=0;$3--){if($1[$3].type==$1[$3].IMPORT_RULE){$0.deleteRule($3);
}}}})}});




/* ID: qx.ui.core.Parent */
qx.Class.define("qx.ui.core.Parent",
{extend:qx.ui.core.Widget,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
this._children=[];
this._layoutImpl=this._createLayoutImpl();
},
properties:{focusHandler:{check:"qx.event.handler.FocusHandler",
apply:"_applyFocusHandler",
nullable:true},
activeChild:{check:"qx.ui.core.Widget",
apply:"_applyActiveChild",
event:"changeActiveChild",
nullable:true},
focusedChild:{check:"qx.ui.core.Widget",
apply:"_applyFocusedChild",
event:"changeFocusedChild",
nullable:true},
visibleChildren:{_cached:true,
defaultValue:null}},
members:{isFocusRoot:function(){return this.getFocusHandler()!=null;
},
getFocusRoot:function(){if(this.isFocusRoot()){return this;
}
if(this._hasParent){return this.getParent().getFocusRoot();
}return null;
},
activateFocusRoot:function(){if(this._focusHandler){return;
}this._focusHandler=new qx.event.handler.FocusHandler(this);
this.setFocusHandler(this._focusHandler);
},
_onfocuskeyevent:function($0){this.getFocusHandler()._onkeyevent(this,
$0);
},
_applyFocusHandler:function($0,
$1){if($0){this.addEventListener("keypress",
this._onfocuskeyevent);
if(this.getTabIndex()<1){this.setTabIndex(1);
}this.setHideFocus(true);
this.setActiveChild(this);
}else{this.removeEventListener("keydown",
this._onfocuskeyevent);
this.removeEventListener("keypress",
this._onfocuskeyevent);
this.setTabIndex(-1);
this.setHideFocus(false);
}},
_applyActiveChild:function($0,
$1){},
_applyFocusedChild:function($0,
$1){var $2=$0!=null;
var $3=$1!=null;
if(qx.Class.isDefined("qx.ui.popup.PopupManager")&&$2){var $4=qx.ui.popup.PopupManager.getInstance();
if($4){$4.update($0);
}}
if($3){if($1.hasEventListeners("focusout")){var $5=new qx.event.type.FocusEvent("focusout",
$1);
if($2){$5.setRelatedTarget($0);
}$1.dispatchEvent($5);
$5.dispose();
}}
if($2){if($0.hasEventListeners("focusin")){var $5=new qx.event.type.FocusEvent("focusin",
$0);
if($3){$5.setRelatedTarget($1);
}$0.dispatchEvent($5);
$5.dispose();
}}
if($3){if(this.getActiveChild()==$1&&!$2){this.setActiveChild(null);
}$1.setFocused(false);
var $5=new qx.event.type.FocusEvent("blur",
$1);
if($2){$5.setRelatedTarget($0);
}$1.dispatchEvent($5);
if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){var $4=qx.ui.popup.ToolTipManager.getInstance();
if($4){$4.handleBlur($5);
}}$5.dispose();
}
if($2){this.setActiveChild($0);
$0.setFocused(true);
qx.event.handler.EventHandler.getInstance().setFocusRoot(this);
var $5=new qx.event.type.FocusEvent("focus",
$0);
if($3){$5.setRelatedTarget($1);
}$0.dispatchEvent($5);
if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){var $4=qx.ui.popup.ToolTipManager.getInstance();
if($4){$4.handleFocus($5);
}}$5.dispose();
}},
_layoutImpl:null,
_createLayoutImpl:function(){return null;
},
getLayoutImpl:function(){return this._layoutImpl;
},
getChildren:function(){return this._children;
},
getChildrenLength:function(){return this.getChildren().length;
},
hasChildren:function(){return this.getChildrenLength()>0;
},
isEmpty:function(){return this.getChildrenLength()==0;
},
indexOf:function($0){return this.getChildren().indexOf($0);
},
contains:function($0){switch($0){case null:return false;
case this:return true;
default:return this.contains($0.getParent());
}},
_computeVisibleChildren:function(){var $0=[];
var $1=this.getChildren();
if(!$1){return 0;
}var $2=$1.length;
for(var $3=0;$3<$2;$3++){var $4=$1[$3];
if($4._isDisplayable){$0.push($4);
}}return $0;
},
getVisibleChildrenLength:function(){return this.getVisibleChildren().length;
},
hasVisibleChildren:function(){return this.getVisibleChildrenLength()>0;
},
isVisibleEmpty:function(){return this.getVisibleChildrenLength()==0;
},
add:function($0){var $1;
for(var $2=0,
$3=arguments.length;$2<$3;$2++){$1=arguments[$2];
if(!($1 instanceof qx.ui.core.Parent)&&!($1 instanceof qx.ui.basic.Terminator)){throw new Error("Invalid Widget: "+$1);
}else{$1.setParent(this);
}}return this;
},
addAt:function($0,
$1){if($1==null||$1<0){throw new Error("Not a valid index for addAt(): "+$1);
}
if($0.getParent()==this){var $2=this.getChildren();
var $3=$2.indexOf($0);
if($3!=$1){if($3!=-1){qx.lang.Array.removeAt($2,
$3);
}qx.lang.Array.insertAt($2,
$0,
$1);
if(this._initialLayoutDone){this._invalidateVisibleChildren();
this.getLayoutImpl().updateChildrenOnMoveChild($0,
$1,
$3);
}}}else{$0._insertIndex=$1;
$0.setParent(this);
}},
addAtBegin:function($0){return this.addAt($0,
0);
},
addAtEnd:function($0){var $1=this.getChildrenLength();
return this.addAt($0,
$0.getParent()==this?$1-1:$1);
},
addBefore:function($0,
$1){var $2=this.getChildren();
var $3=$2.indexOf($1);
if($3==-1){throw new Error("Child to add before: "+$1+" is not inside this parent.");
}var $4=$2.indexOf($0);
if($4==-1||$4>$3){$3++;
}return this.addAt($0,
Math.max(0,
$3-1));
},
addAfter:function($0,
$1){var $2=this.getChildren();
var $3=$2.indexOf($1);
if($3==-1){throw new Error("Child to add after: "+$1+" is not inside this parent.");
}var $4=$2.indexOf($0);
if($4!=-1&&$4<$3){$3--;
}return this.addAt($0,
Math.min($2.length,
$3+1));
},
remove:function($0){var $1;
for(var $2=0,
$3=arguments.length;$2<$3;$2++){$1=arguments[$2];
if(!($1 instanceof qx.ui.core.Parent)&&!($1 instanceof qx.ui.basic.Terminator)){throw new Error("Invalid Widget: "+$1);
}else if($1.getParent()==this){$1.setParent(null);
}}},
removeAt:function($0){var $1=this.getChildren()[$0];
if($1){delete $1._insertIndex;
$1.setParent(null);
}},
removeAll:function(){var $0=this.getChildren();
var $1=$0[0];
while($1){this.remove($1);
$1=$0[0];
}},
getFirstChild:function(){return qx.lang.Array.getFirst(this.getChildren())||null;
},
getFirstVisibleChild:function(){return qx.lang.Array.getFirst(this.getVisibleChildren())||null;
},
getFirstActiveChild:function($0){return qx.ui.core.Widget.getActiveSiblingHelper(null,
this,
1,
$0,
"first")||null;
},
getLastChild:function(){return qx.lang.Array.getLast(this.getChildren())||null;
},
getLastVisibleChild:function(){return qx.lang.Array.getLast(this.getVisibleChildren())||null;
},
getLastActiveChild:function($0){return qx.ui.core.Widget.getActiveSiblingHelper(null,
this,
-1,
$0,
"last")||null;
},
forEachChild:function($0){var $1=this.getChildren(),
$2,
$3=-1;
if(!$1){return;
}
while($2=$1[++$3]){$0.call($2,
$3);
}},
forEachVisibleChild:function($0){var $1=this.getVisibleChildren(),
$2,
$3=-1;
if(!$1){return;
}
while($2=$1[++$3]){$0.call($2,
$3);
}},
_beforeAppear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeAppear();
}});
},
_afterAppear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterAppear();
}});
},
_beforeDisappear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeDisappear();
}});
},
_afterDisappear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterDisappear();
}});
},
_beforeInsertDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeInsertDom();
}});
},
_afterInsertDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterInsertDom();
}});
},
_beforeRemoveDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeRemoveDom();
}});
},
_afterRemoveDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterRemoveDom();
}});
},
_handleDisplayableCustom:function($0,
$1,
$2){this.forEachChild(function(){this._handleDisplayable();
});
},
_addChildrenToStateQueue:function(){this.forEachVisibleChild(function(){this.addToStateQueue();
});
},
recursiveAddToStateQueue:function(){this.addToStateQueue();
this.forEachVisibleChild(function(){this.recursiveAddToStateQueue();
});
},
_recursiveAppearanceThemeUpdate:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
this.forEachVisibleChild(function(){this._recursiveAppearanceThemeUpdate($0,
$1);
});
},
_addChildToChildrenQueue:function($0){if(!$0._isInParentChildrenQueue&&!$0._isDisplayable){this.warn("Ignoring invisible child: "+$0);
}
if(!$0._isInParentChildrenQueue&&$0._isDisplayable){qx.ui.core.Widget.addToGlobalLayoutQueue(this);
if(!this._childrenQueue){this._childrenQueue={};
}this._childrenQueue[$0.toHashCode()]=$0;
}},
_removeChildFromChildrenQueue:function($0){if(this._childrenQueue&&$0._isInParentChildrenQueue){delete this._childrenQueue[$0.toHashCode()];
if(qx.lang.Object.isEmpty(this._childrenQueue)){qx.ui.core.Widget.removeFromGlobalLayoutQueue(this);
}}},
_flushChildrenQueue:function(){if(!qx.lang.Object.isEmpty(this._childrenQueue)){this.getLayoutImpl().flushChildrenQueue(this._childrenQueue);
delete this._childrenQueue;
}},
_addChildrenToLayoutQueue:function($0){this.forEachChild(function(){this.addToLayoutChanges($0);
});
},
_layoutChild:function($0){if(!$0._isDisplayable){return ;
}var $1=$0._layoutChanges;
try{if($0.renderBorder){if($1.borderTop||$1.borderRight||$1.borderBottom||$1.borderLeft){$0.renderBorder($1);
}}}catch(ex){this.error("Could not apply border to child "+$0,
ex);
}
try{if($0.renderPadding){if($1.paddingLeft||$1.paddingRight||$1.paddingTop||$1.paddingBottom){$0.renderPadding($1);
}}}catch(ex){this.error("Could not apply padding to child "+$0,
ex);
}try{this.getLayoutImpl().layoutChild($0,
$1);
}catch(ex){this.error("Could not layout child "+$0+" through layout handler",
ex);
}try{$0._layoutPost($1);
}catch(ex){this.error("Could not post layout child "+$0,
ex);
}try{if($1.initial){$0._initialLayoutDone=true;
qx.ui.core.Widget.addToGlobalDisplayQueue($0);
}}catch(ex){this.error("Could not handle display updates from layout flush for child "+$0,
ex);
}$0._layoutChanges={};
delete $0._isInParentLayoutQueue;
delete this._childrenQueue[$0.toHashCode()];
},
_layoutPost:qx.lang.Function.returnTrue,
_computePreferredInnerWidth:function(){return this.getLayoutImpl().computeChildrenNeededWidth();
},
_computePreferredInnerHeight:function(){return this.getLayoutImpl().computeChildrenNeededHeight();
},
_changeInnerWidth:function($0,
$1){var $2=this.getLayoutImpl();
if($2.invalidateChildrenFlexWidth){$2.invalidateChildrenFlexWidth();
}this.forEachVisibleChild(function(){if($2.updateChildOnInnerWidthChange(this)&&this._recomputeBoxWidth()){this._recomputeOuterWidth();
this._recomputeInnerWidth();
}});
},
_changeInnerHeight:function($0,
$1){var $2=this.getLayoutImpl();
if($2.invalidateChildrenFlexHeight){$2.invalidateChildrenFlexHeight();
}this.forEachVisibleChild(function(){if($2.updateChildOnInnerHeightChange(this)&&this._recomputeBoxHeight()){this._recomputeOuterHeight();
this._recomputeInnerHeight();
}});
},
getInnerWidthForChild:function($0){return this.getInnerWidth();
},
getInnerHeightForChild:function($0){return this.getInnerHeight();
},
_remappingChildTable:["add",
"remove",
"addAt",
"addAtBegin",
"addAtEnd",
"removeAt",
"addBefore",
"addAfter",
"removeAll"],
_remapStart:"return this._remappingChildTarget.",
_remapStop:".apply(this._remappingChildTarget, arguments)",
remapChildrenHandlingTo:function($0){var $1=this._remappingChildTable;
this._remappingChildTarget=$0;
for(var $2=0,
$3=$1.length,
$4;$2<$3;$2++){$4=$1[$2];
this[$4]=new Function(qx.ui.core.Parent.prototype._remapStart+$4+qx.ui.core.Parent.prototype._remapStop);
}}},
defer:function($0,
$1,
$2){if(qx.core.Variant.isSet("qx.client",
"opera")){$1._layoutChildOrig=$1._layoutChild;
$1._layoutChild=function($3){if(!$3._initialLayoutDone||!$3._layoutChanges.border){return this._layoutChildOrig($3);
}var $4=$3.getElement().style;
var $5=$4.display;
$4.display="none";
var $6=this._layoutChildOrig($3);
$4.display=$5;
return $6;
};
}},
destruct:function(){this._disposeObjectDeep("_children",
1);
this._disposeObjects("_layoutImpl",
"_focusHandler");
this._disposeFields("_childrenQueue",
"_childrenQueue",
"_remappingChildTable",
"_remappingChildTarget",
"_cachedVisibleChildren");
}});




/* ID: qx.event.type.FocusEvent */
qx.Class.define("qx.event.type.FocusEvent",
{extend:qx.event.type.Event,
construct:function($0,
$1){arguments.callee.base.call(this,
$0);
this.setTarget($1);
switch($0){case "focusin":case "focusout":this.setBubbles(true);
this.setPropagationStopped(false);
}}});




/* ID: qx.event.handler.EventHandler */
qx.Class.define("qx.event.handler.EventHandler",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this.__onmouseevent=qx.lang.Function.bind(this._onmouseevent,
this);
this.__ondragevent=qx.lang.Function.bind(this._ondragevent,
this);
this.__onselectevent=qx.lang.Function.bind(this._onselectevent,
this);
this.__onwindowblur=qx.lang.Function.bind(this._onwindowblur,
this);
this.__onwindowfocus=qx.lang.Function.bind(this._onwindowfocus,
this);
this.__onwindowresize=qx.lang.Function.bind(this._onwindowresize,
this);
this._commands={};
},
events:{"error":"qx.event.type.DataEvent"},
statics:{mouseEventTypes:["mouseover",
"mousemove",
"mouseout",
"mousedown",
"mouseup",
"click",
"dblclick",
"contextmenu",
qx.core.Variant.isSet("qx.client",
"gecko")?"DOMMouseScroll":"mousewheel"],
keyEventTypes:["keydown",
"keypress",
"keyup"],
dragEventTypes:qx.core.Variant.select("qx.client",
{"gecko":["dragdrop",
"dragover",
"dragenter",
"dragexit",
"draggesture"],
"mshtml":["dragend",
"dragover",
"dragstart",
"drag",
"dragenter",
"dragleave"],
"default":["dragstart",
"dragdrop",
"dragover",
"drag",
"dragleave",
"dragenter",
"dragexit",
"draggesture"]}),
getDomTarget:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.target||$0.srcElement;
},
"webkit":function($0){var $1=$0.target||$0.srcElement;
if($1&&($1.nodeType==qx.dom.Node.TEXT)){$1=$1.parentNode;
}return $1;
},
"default":function($0){return $0.target;
}}),
stopDomEvent:function($0){if($0.preventDefault){$0.preventDefault();
}$0.returnValue=false;
},
getOriginalTargetObject:function($0){if($0==document.documentElement){$0=document.body;
}while($0!=null&&$0.qx_Widget==null){try{$0=$0.parentNode;
}catch(vDomEvent){$0=null;
}}return $0?$0.qx_Widget:null;
},
getOriginalTargetObjectFromEvent:function($0,
$1){var $2=qx.event.handler.EventHandler.getDomTarget($0);
if($1){var $3=$1.document;
if($2==$1||$2==$3||$2==$3.documentElement||$2==$3.body){return $3.body.qx_Widget;
}}return qx.event.handler.EventHandler.getOriginalTargetObject($2);
},
getRelatedOriginalTargetObjectFromEvent:function($0){return qx.event.handler.EventHandler.getOriginalTargetObject($0.relatedTarget||($0.type=="mouseover"?$0.fromElement:$0.toElement));
},
getTargetObject:function($0,
$1,
$2){if(!$1){var $1=qx.event.handler.EventHandler.getOriginalTargetObject($0);
if(!$1){return null;
}}while($1){if(!$2&&!$1.getEnabled()){return null;
}if(!$1.getAnonymous()){break;
}$1=$1.getParent();
}return $1;
},
getTargetObjectFromEvent:function($0){return qx.event.handler.EventHandler.getTargetObject(qx.event.handler.EventHandler.getDomTarget($0));
},
getRelatedTargetObjectFromEvent:function($0){var $1=$0.relatedTarget;
if(!$1){if($0.type=="mouseover"){$1=$0.fromElement;
}else{$1=$0.toElement;
}}return qx.event.handler.EventHandler.getTargetObject($1);
}},
properties:{allowClientContextMenu:{check:"Boolean",
init:false},
allowClientSelectAll:{check:"Boolean",
init:false},
captureWidget:{check:"qx.ui.core.Widget",
nullable:true,
apply:"_applyCaptureWidget"},
focusRoot:{check:"qx.ui.core.Parent",
nullable:true,
apply:"_applyFocusRoot"}},
members:{_lastMouseEventType:null,
_lastMouseDown:false,
_lastMouseEventDate:0,
_applyCaptureWidget:function($0,
$1){if($1){$1.setCapture(false);
}
if($0){$0.setCapture(true);
}},
_applyFocusRoot:function($0,
$1){if($1){$1.setFocusedChild(null);
}
if($0&&$0.getFocusedChild()==null){$0.setFocusedChild($0);
}},
addCommand:function($0){this._commands[$0.toHashCode()]=$0;
},
removeCommand:function($0){delete this._commands[$0.toHashCode()];
},
_checkKeyEventMatch:function($0){var $1;
for(var $2 in this._commands){$1=this._commands[$2];
if($1.getEnabled()&&$1.matchesKeyEvent($0)){if(!$1.execute($0.getTarget())){$0.preventDefault();
}break;
}}},
attachEvents:function(){this.attachEventTypes(qx.event.handler.EventHandler.mouseEventTypes,
this.__onmouseevent);
this.attachEventTypes(qx.event.handler.EventHandler.dragEventTypes,
this.__ondragevent);
qx.event.handler.KeyEventHandler.getInstance()._attachEvents();
qx.html.EventRegistration.addEventListener(window,
"blur",
this.__onwindowblur);
qx.html.EventRegistration.addEventListener(window,
"focus",
this.__onwindowfocus);
qx.html.EventRegistration.addEventListener(window,
"resize",
this.__onwindowresize);
document.body.onselect=document.onselectstart=document.onselectionchange=this.__onselectevent;
},
detachEvents:function(){this.detachEventTypes(qx.event.handler.EventHandler.mouseEventTypes,
this.__onmouseevent);
this.detachEventTypes(qx.event.handler.EventHandler.dragEventTypes,
this.__ondragevent);
qx.event.handler.KeyEventHandler.getInstance()._detachEvents();
qx.html.EventRegistration.removeEventListener(window,
"blur",
this.__onwindowblur);
qx.html.EventRegistration.removeEventListener(window,
"focus",
this.__onwindowfocus);
qx.html.EventRegistration.removeEventListener(window,
"resize",
this.__onwindowresize);
document.body.onselect=document.onselectstart=document.onselectionchange=null;
},
attachEventTypes:function($0,
$1){try{var $2=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
for(var $3=0,
$4=$0.length;$3<$4;$3++){qx.html.EventRegistration.addEventListener($2,
$0[$3],
$1);
}}catch(ex){throw new Error("qx.event.handler.EventHandler: Failed to attach window event types: "+$0+": "+ex);
}},
detachEventTypes:function($0,
$1){try{var $2=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
for(var $3=0,
$4=$0.length;$3<$4;$3++){qx.html.EventRegistration.removeEventListener($2,
$0[$3],
$1);
}}catch(ex){throw new Error("qx.event.handler.EventHandler: Failed to detach window event types: "+$0+": "+ex);
}},
_onkeyevent_post:function($0,
$1,
$2,
$3,
$4){var $5=qx.event.handler.EventHandler.getDomTarget($0);
var $6=this.getFocusRoot();
var $7=this.getCaptureWidget()||($6==null?null:$6.getActiveChild());
var $8=new qx.event.type.KeyEvent($1,
$0,
$5,
$7,
null,
$2,
$3,
$4);
if($1=="keydown"){this._checkKeyEventMatch($8);
}
if($7!=null&&$7.getEnabled()){switch($4){case "Escape":case "Tab":if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update($7,
$1);
}break;
}if(!this.getAllowClientSelectAll()){if($0.ctrlKey&&$4=="A"){switch($5.tagName.toLowerCase()){case "input":case "textarea":case "iframe":break;
default:qx.event.handler.EventHandler.stopDomEvent($0);
}}}$7.dispatchEvent($8);
if(qx.Class.isDefined("qx.event.handler.DragAndDropHandler")){qx.event.handler.DragAndDropHandler.getInstance().handleKeyEvent($8);
}}$8.dispose();
},
_onmouseevent:qx.core.Variant.select("qx.client",
{"mshtml":function($0){if(!$0){$0=window.event;
}var $1=qx.event.handler.EventHandler.getDomTarget($0);
var $2=$0.type;
if($2=="mousemove"){if(this._mouseIsDown&&$0.button==0){this._onmouseevent_post($0,
"mouseup");
this._mouseIsDown=false;
}}else{if($2=="mousedown"){this._mouseIsDown=true;
}else if($2=="mouseup"){this._mouseIsDown=false;
}if($2=="mouseup"&&!this._lastMouseDown&&((new Date).valueOf()-this._lastMouseEventDate)<250){this._onmouseevent_post($0,
"mousedown");
}else if($2=="dblclick"&&this._lastMouseEventType=="mouseup"&&((new Date).valueOf()-this._lastMouseEventDate)<250){this._onmouseevent_post($0,
"click");
}
switch($2){case "mousedown":case "mouseup":case "click":case "dblclick":case "contextmenu":this._lastMouseEventType=$2;
this._lastMouseEventDate=(new Date).valueOf();
this._lastMouseDown=$2=="mousedown";
}}this._onmouseevent_post($0,
$2,
$1);
},
"default":function($0){var $1=qx.event.handler.EventHandler.getDomTarget($0);
var $2=$0.type;
switch($2){case "DOMMouseScroll":$2="mousewheel";
break;
case "click":case "dblclick":if($0.which!==1){return;
}}this._onmouseevent_post($0,
$2,
$1);
}}),
_onmouseevent_click_fix:qx.core.Variant.select("qx.client",
{"gecko":function($0,
$1,
$2){var $3=false;
switch($1){case "mousedown":this._lastMouseDownDomTarget=$0;
this._lastMouseDownDispatchTarget=$2;
break;
case "mouseup":if(this._lastMouseDownDispatchTarget===$2&&$0!==this._lastMouseDownDomTarget){$3=true;
}else{this._lastMouseDownDomTarget=null;
this._lastMouseDownDispatchTarget=null;
}}return $3;
},
"default":null}),
_onmouseevent_post:function($0,
$1,
$2){var $3,
$4,
$5,
$6,
$7,
$8,
$9,
$a;
$4=this.getCaptureWidget();
$7=qx.event.handler.EventHandler.getOriginalTargetObject($2);
if(!$4){$5=$6=qx.event.handler.EventHandler.getTargetObject(null,
$7,
true);
}else{$5=$4;
$6=qx.event.handler.EventHandler.getTargetObject(null,
$7,
true);
}if(!$6){return;
}$a=$6.getEnabled();
if(qx.core.Variant.isSet("qx.client",
"gecko")){$9=this._onmouseevent_click_fix($2,
$1,
$5);
}if($1=="contextmenu"&&!this.getAllowClientContextMenu()){qx.event.handler.EventHandler.stopDomEvent($0);
}if($a&&$1=="mousedown"){qx.event.handler.FocusHandler.mouseFocus=true;
var $b=$6.getFocusRoot();
if($b){this.setFocusRoot($b);
var $c=$6;
while(!$c.isFocusable()&&$c!=$b){$c=$c.getParent();
}$b.setFocusedChild($c);
$b.setActiveChild($6);
}}switch($1){case "mouseover":case "mouseout":$8=qx.event.handler.EventHandler.getRelatedTargetObjectFromEvent($0);
if($8==$6){return;
}}$3=new qx.event.type.MouseEvent($1,
$0,
$2,
$6,
$7,
$8);
qx.event.type.MouseEvent.storeEventState($3);
if($a){var $d=false;
$d=$5?$5.dispatchEvent($3):true;
this._onmouseevent_special_post($1,
$6,
$7,
$5,
$d,
$3,
$0);
}else{if($1=="mouseover"){if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){qx.ui.popup.ToolTipManager.getInstance().handleMouseOver($3);
}}}$3.dispose();
$3=null;
qx.ui.core.Widget.flushGlobalQueues();
if($9){this._onmouseevent_post($0,
"click",
this._lastMouseDownDomTarget);
this._lastMouseDownDomTarget=null;
this._lastMouseDownDispatchTarget=null;
}},
_onmouseevent_special_post:function($0,
$1,
$2,
$3,
$4,
$5,
$6){switch($0){case "mousedown":if(qx.Class.isDefined("qx.ui.popup.PopupManager")){qx.ui.popup.PopupManager.getInstance().update($1);
}
if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update($1,
$0);
}
if(qx.Class.isDefined("qx.ui.embed.IframeManager")){qx.ui.embed.IframeManager.getInstance().handleMouseDown($5);
}break;
case "mouseup":if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update($1,
$0);
}
if(qx.Class.isDefined("qx.ui.embed.IframeManager")){qx.ui.embed.IframeManager.getInstance().handleMouseUp($5);
}break;
case "mouseover":if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){qx.ui.popup.ToolTipManager.getInstance().handleMouseOver($5);
}break;
case "mouseout":if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){qx.ui.popup.ToolTipManager.getInstance().handleMouseOut($5);
}break;
}this._ignoreWindowBlur=$0==="mousedown";
if(qx.Class.isDefined("qx.event.handler.DragAndDropHandler")&&$1){qx.event.handler.DragAndDropHandler.getInstance().handleMouseEvent($5);
}},
_ondragevent:function($0){if(!$0){$0=window.event;
}qx.event.handler.EventHandler.stopDomEvent($0);
},
_onselectevent:function($0){if(!$0){$0=window.event;
}var $1=qx.event.handler.EventHandler.getOriginalTargetObjectFromEvent($0);
while($1){if($1.getSelectable()!=null){if(!$1.getSelectable()){qx.event.handler.EventHandler.stopDomEvent($0);
}break;
}$1=$1.getParent();
}},
_focused:false,
_onwindowblur:function($0){if(!this._focused||this._ignoreWindowBlur){return;
}this._focused=false;
this.setCaptureWidget(null);
if(qx.Class.isDefined("qx.ui.popup.PopupManager")){qx.ui.popup.PopupManager.getInstance().update();
}if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update();
}if(qx.Class.isDefined("qx.event.handler.DragAndDropHandler")){qx.event.handler.DragAndDropHandler.getInstance().globalCancelDrag();
}qx.ui.core.ClientDocument.getInstance().createDispatchEvent("windowblur");
},
_onwindowfocus:function($0){if(this._focused){return;
}this._focused=true;
qx.ui.core.ClientDocument.getInstance().createDispatchEvent("windowfocus");
},
_onwindowresize:function($0){qx.ui.core.ClientDocument.getInstance().createDispatchEvent("windowresize");
}},
destruct:function(){this.detachEvents();
this._disposeObjectDeep("_commands",
1);
this._disposeFields("__onmouseevent",
"__ondragevent",
"__onselectevent",
"__onwindowblur",
"__onwindowfocus",
"__onwindowresize");
this._disposeFields("_lastMouseEventType",
"_lastMouseDown",
"_lastMouseEventDate",
"_lastMouseDownDomTarget",
"_lastMouseDownDispatchTarget");
}});




/* ID: qx.dom.Node */
qx.Class.define("qx.dom.Node",
{statics:{ELEMENT:1,
ATTRIBUTE:2,
TEXT:3,
CDATA_SECTION:4,
ENTITY_REFERENCE:5,
ENTITY:6,
PROCESSING_INSTRUCTION:7,
COMMENT:8,
DOCUMENT:9,
DOCUMENT_TYPE:10,
DOCUMENT_FRAGMENT:11,
NOTATION:12,
getDocument:function($0){if(this.isDocument($0)){return $0;
}return $0.ownerDocument||$0.document||null;
},
getWindow:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return this.getDocument($0).parentWindow;
},
"default":function($0){return this.getDocument($0).defaultView;
}}),
getDocumentElement:function($0){return this.getDocument($0).documentElement;
},
getBodyElement:function($0){return this.getDocument($0).body;
},
isElement:function($0){return !!($0&&$0.nodeType===qx.dom.Node.ELEMENT);
},
isDocument:function($0){return !!($0&&$0.nodeType===qx.dom.Node.DOCUMENT);
},
isText:function($0){return !!($0&&$0.nodeType===qx.dom.Node.TEXT);
},
isWindow:function($0){return $0.document&&this.getWindow($0.document)==$0;
},
getText:function($0){if(!$0||!$0.nodeType){return null;
}
switch($0.nodeType){case 1:var $1,
$2=[],
$3=$0.childNodes,
$4=$3.length;
for($1=0;$1<$4;$1++){$2[$1]=this.getText($3[$1]);
}return $2.join("");
case 2:return $0.nodeValue;
break;
case 3:return $0.nodeValue;
break;
}return null;
}}});




/* ID: qx.event.handler.KeyEventHandler */
qx.Class.define("qx.event.handler.KeyEventHandler",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this.__onkeypress=qx.lang.Function.bind(this._onkeypress,
this);
this.__onkeyupdown=qx.lang.Function.bind(this._onkeyupdown,
this);
},
members:{_attachEvents:function(){var $0=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
qx.html.EventRegistration.addEventListener($0,
"keypress",
this.__onkeypress);
qx.html.EventRegistration.addEventListener($0,
"keyup",
this.__onkeyupdown);
qx.html.EventRegistration.addEventListener($0,
"keydown",
this.__onkeyupdown);
},
_detachEvents:function(){var $0=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
qx.html.EventRegistration.removeEventListener($0,
"keypress",
this.__onkeypress);
qx.html.EventRegistration.removeEventListener($0,
"keyup",
this.__onkeyupdown);
qx.html.EventRegistration.removeEventListener($0,
"keydown",
this.__onkeyupdown);
},
_onkeyupdown:qx.core.Variant.select("qx.client",
{"mshtml":function($0){$0=window.event||$0;
var $1=$0.keyCode;
var $2=0;
var $3=$0.type;
if(!(this._lastUpDownType[$1]=="keydown"&&$3=="keydown")){this._idealKeyHandler($1,
$2,
$3,
$0);
}if($3=="keydown"){if(this._isNonPrintableKeyCode($1)||
$1==
8||$1==9){this._idealKeyHandler($1,
$2,
"keypress",
$0);
}}this._lastUpDownType[$1]=$3;
},
"gecko":function($0){var $1=this._keyCodeFix[$0.keyCode]||$0.keyCode;
var $2=$0.charCode;
var $3=$0.type;
if(qx.core.Client.getInstance().runsOnWindows()){var $4=$1?this._keyCodeToIdentifier($1):this._charCodeToIdentifier($2);
if(!(this._lastUpDownType[$4]=="keypress"&&$3=="keydown")){this._idealKeyHandler($1,
$2,
$3,
$0);
}this._lastUpDownType[$4]=$3;
}else{this._idealKeyHandler($1,
$2,
$3,
$0);
}},
"webkit":function($0){var $1=0;
var $2=0;
var $3=$0.type;
if(qx.core.Client.getInstance().getVersion()<420){if(!this._lastCharCodeForType){this._lastCharCodeForType={};
}var $4=this._lastCharCodeForType[$3]>63000;
if($4){this._lastCharCodeForType[$3]=null;
return;
}this._lastCharCodeForType[$3]=$0.charCode;
}
if($3=="keyup"||$3=="keydown"){$1=this._charCode2KeyCode[$0.charCode]||$0.keyCode;
}else{if(this._charCode2KeyCode[$0.charCode]){$1=this._charCode2KeyCode[$0.charCode];
}else{$2=$0.charCode;
}}this._idealKeyHandler($1,
$2,
$3,
$0);
},
"opera":function($0){this._idealKeyHandler($0.keyCode,
0,
$0.type,
$0);
this._lastKeyCode=$0.keyCode;
},
"default":function(){throw new Error("Unsupported browser for key event handler!");
}}),
_onkeypress:qx.core.Variant.select("qx.client",
{"mshtml":function($0){var $0=window.event||$0;
if(this._charCode2KeyCode[$0.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[$0.keyCode],
0,
$0.type,
$0);
}else{this._idealKeyHandler(0,
$0.keyCode,
$0.type,
$0);
}},
"gecko":function($0){var $1=this._keyCodeFix[$0.keyCode]||$0.keyCode;
var $2=$0.charCode;
var $3=$0.type;
if(qx.core.Client.getInstance().runsOnWindows()){var $4=$1?this._keyCodeToIdentifier($1):this._charCodeToIdentifier($2);
if(!(this._lastUpDownType[$4]=="keypress"&&$3=="keydown")){this._idealKeyHandler($1,
$2,
$3,
$0);
}this._lastUpDownType[$4]=$3;
}else{this._idealKeyHandler($1,
$2,
$3,
$0);
}},
"webkit":function($0){var $1=0;
var $2=0;
var $3=$0.type;
if(qx.core.Client.getInstance().getVersion()<420){if(!this._lastCharCodeForType){this._lastCharCodeForType={};
}var $4=this._lastCharCodeForType[$3]>63000;
if($4){this._lastCharCodeForType[$3]=null;
return;
}this._lastCharCodeForType[$3]=$0.charCode;
}
if($3=="keyup"||$3=="keydown"){$1=this._charCode2KeyCode[$0.charCode]||$0.keyCode;
}else{if(this._charCode2KeyCode[$0.charCode]){$1=this._charCode2KeyCode[$0.charCode];
}else{$2=$0.charCode;
}}this._idealKeyHandler($1,
$2,
$3,
$0);
},
"opera":function($0){var $1=$0.keyCode;
var $2=$0.type;
if($1!=this._lastKeyCode){this._idealKeyHandler(0,
this._lastKeyCode,
$2,
$0);
}else{if(this._keyCodeToIdentifierMap[$1]){this._idealKeyHandler($1,
0,
$2,
$0);
}else{this._idealKeyHandler(0,
$1,
$2,
$0);
}}this._lastKeyCode=$1;
},
"default":function(){throw new Error("Unsupported browser for key event handler!");
}}),
_specialCharCodeMap:{8:"Backspace",
9:"Tab",
13:"Enter",
27:"Escape",
32:"Space"},
_keyCodeToIdentifierMap:{16:"Shift",
17:"Control",
18:"Alt",
20:"CapsLock",
224:"Meta",
37:"Left",
38:"Up",
39:"Right",
40:"Down",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
45:"Insert",
46:"Delete",
112:"F1",
113:"F2",
114:"F3",
115:"F4",
116:"F5",
117:"F6",
118:"F7",
119:"F8",
120:"F9",
121:"F10",
122:"F11",
123:"F12",
144:"NumLock",
44:"PrintScreen",
145:"Scroll",
19:"Pause",
91:"Win",
93:"Apps"},
_numpadToCharCode:{96:"0".charCodeAt(0),
97:"1".charCodeAt(0),
98:"2".charCodeAt(0),
99:"3".charCodeAt(0),
100:"4".charCodeAt(0),
101:"5".charCodeAt(0),
102:"6".charCodeAt(0),
103:"7".charCodeAt(0),
104:"8".charCodeAt(0),
105:"9".charCodeAt(0),
106:"*".charCodeAt(0),
107:"+".charCodeAt(0),
109:"-".charCodeAt(0),
110:",".charCodeAt(0),
111:"/".charCodeAt(0)},
_charCodeA:"A".charCodeAt(0),
_charCodeZ:"Z".charCodeAt(0),
_charCode0:"0".charCodeAt(0),
_charCode9:"9".charCodeAt(0),
_isNonPrintableKeyCode:function($0){return this._keyCodeToIdentifierMap[$0]?true:false;
},
_isIdentifiableKeyCode:function($0){if($0>=this._charCodeA&&$0<=this._charCodeZ){return true;
}if($0>=this._charCode0&&$0<=this._charCode9){return true;
}if(this._specialCharCodeMap[$0]){return true;
}if(this._numpadToCharCode[$0]){return true;
}if(this._isNonPrintableKeyCode($0)){return true;
}return false;
},
isValidKeyIdentifier:function($0){if(this._identifierToKeyCodeMap[$0]){return true;
}
if($0.length!=1){return false;
}
if($0>="0"&&$0<="9"){return true;
}
if($0>="A"&&$0<="Z"){return true;
}
switch($0){case "+":case "-":case "*":case "/":return true;
default:return false;
}},
_keyCodeToIdentifier:function($0){if(this._isIdentifiableKeyCode($0)){var $1=this._numpadToCharCode[$0];
if($1){return String.fromCharCode($1);
}return (this._keyCodeToIdentifierMap[$0]||this._specialCharCodeMap[$0]||String.fromCharCode($0));
}else{return "Unidentified";
}},
_charCodeToIdentifier:function($0){return this._specialCharCodeMap[$0]||String.fromCharCode($0).toUpperCase();
},
_identifierToKeyCode:function($0){return this._identifierToKeyCodeMap[$0]||$0.charCodeAt(0);
},
_idealKeyHandler:function($0,
$1,
$2,
$3){if(!$0&&!$1){return;
}var $4;
if($0){$4=this._keyCodeToIdentifier($0);
qx.event.handler.EventHandler.getInstance()._onkeyevent_post($3,
$2,
$0,
$1,
$4);
}else{$4=this._charCodeToIdentifier($1);
qx.event.handler.EventHandler.getInstance()._onkeyevent_post($3,
"keypress",
$0,
$1,
$4);
qx.event.handler.EventHandler.getInstance()._onkeyevent_post($3,
"keyinput",
$0,
$1,
$4);
}}},
defer:function($0,
$1,
$2){if(!$1._identifierToKeyCodeMap){$1._identifierToKeyCodeMap={};
for(var $3 in $1._keyCodeToIdentifierMap){$1._identifierToKeyCodeMap[$1._keyCodeToIdentifierMap[$3]]=parseInt($3);
}
for(var $3 in $1._specialCharCodeMap){$1._identifierToKeyCodeMap[$1._specialCharCodeMap[$3]]=parseInt($3);
}}
if(qx.core.Variant.isSet("qx.client",
"mshtml")){$1._lastUpDownType={};
$1._charCode2KeyCode={13:13,
27:27};
}else if(qx.core.Variant.isSet("qx.client",
"gecko")){$1._lastUpDownType={};
$1._keyCodeFix={12:$1._identifierToKeyCode("NumLock")};
}else if(qx.core.Variant.isSet("qx.client",
"webkit")){$1._charCode2KeyCode={63289:$1._identifierToKeyCode("NumLock"),
63276:$1._identifierToKeyCode("PageUp"),
63277:$1._identifierToKeyCode("PageDown"),
63275:$1._identifierToKeyCode("End"),
63273:$1._identifierToKeyCode("Home"),
63234:$1._identifierToKeyCode("Left"),
63232:$1._identifierToKeyCode("Up"),
63235:$1._identifierToKeyCode("Right"),
63233:$1._identifierToKeyCode("Down"),
63272:$1._identifierToKeyCode("Delete"),
63302:$1._identifierToKeyCode("Insert"),
63236:$1._identifierToKeyCode("F1"),
63237:$1._identifierToKeyCode("F2"),
63238:$1._identifierToKeyCode("F3"),
63239:$1._identifierToKeyCode("F4"),
63240:$1._identifierToKeyCode("F5"),
63241:$1._identifierToKeyCode("F6"),
63242:$1._identifierToKeyCode("F7"),
63243:$1._identifierToKeyCode("F8"),
63244:$1._identifierToKeyCode("F9"),
63245:$1._identifierToKeyCode("F10"),
63246:$1._identifierToKeyCode("F11"),
63247:$1._identifierToKeyCode("F12"),
63248:$1._identifierToKeyCode("PrintScreen"),
3:$1._identifierToKeyCode("Enter"),
12:$1._identifierToKeyCode("NumLock"),
13:$1._identifierToKeyCode("Enter")};
}else if(qx.core.Variant.isSet("qx.client",
"opera")){$1._lastKeyCode=null;
}},
destruct:function(){this._detachEvents();
this._disposeFields("_lastUpDownType",
"_lastKeyCode");
}});




/* ID: qx.event.type.DomEvent */
qx.Class.define("qx.event.type.DomEvent",
{extend:qx.event.type.Event,
construct:function($0,
$1,
$2,
$3,
$4){arguments.callee.base.call(this,
$0);
this.setDomEvent($1);
this.setDomTarget($2);
this.setTarget($3);
this.setOriginalTarget($4);
},
statics:{SHIFT_MASK:1,
CTRL_MASK:2,
ALT_MASK:4,
META_MASK:8},
properties:{bubbles:{_fast:true,
defaultValue:true,
noCompute:true},
propagationStopped:{_fast:true,
defaultValue:false,
noCompute:true},
domEvent:{_fast:true,
setOnlyOnce:true,
noCompute:true},
domTarget:{_fast:true,
setOnlyOnce:true,
noCompute:true},
modifiers:{_cached:true,
defaultValue:null}},
members:{_computeModifiers:function(){var $0=0;
var $1=this.getDomEvent();
if($1.shiftKey)$0|=qx.event.type.DomEvent.SHIFT_MASK;
if($1.ctrlKey)$0|=qx.event.type.DomEvent.CTRL_MASK;
if($1.altKey)$0|=qx.event.type.DomEvent.ALT_MASK;
if($1.metaKey)$0|=qx.event.type.DomEvent.META_MASK;
return $0;
},
isCtrlPressed:function(){return this.getDomEvent().ctrlKey;
},
isShiftPressed:function(){return this.getDomEvent().shiftKey;
},
isAltPressed:function(){return this.getDomEvent().altKey;
},
isMetaPressed:function(){return this.getDomEvent().metaKey;
},
isCtrlOrCommandPressed:function(){if(qx.core.Client.getInstance().runsOnMacintosh()){return this.getDomEvent().metaKey;
}else{return this.getDomEvent().ctrlKey;
}},
setDefaultPrevented:qx.core.Variant.select("qx.client",
{"mshtml":function($0){if(!$0){return this.error("It is not possible to set preventDefault to false if it was true before!",
"setDefaultPrevented");
}this.getDomEvent().returnValue=false;
arguments.callee.base.call(this,
$0);
},
"default":function($0){if(!$0){return this.error("It is not possible to set preventDefault to false if it was true before!",
"setDefaultPrevented");
}this.getDomEvent().preventDefault();
this.getDomEvent().returnValue=false;
arguments.callee.base.call(this,
$0);
}})},
destruct:function(){this._disposeFields("_valueDomEvent",
"_valueDomTarget");
}});




/* ID: qx.event.type.KeyEvent */
qx.Class.define("qx.event.type.KeyEvent",
{extend:qx.event.type.DomEvent,
construct:function($0,
$1,
$2,
$3,
$4,
$5,
$6,
$7){arguments.callee.base.call(this,
$0,
$1,
$2,
$3,
$4);
this._keyCode=$5;
this.setCharCode($6);
this.setKeyIdentifier($7);
},
statics:{keys:{esc:27,
enter:13,
tab:9,
space:32,
up:38,
down:40,
left:37,
right:39,
shift:16,
ctrl:17,
alt:18,
f1:112,
f2:113,
f3:114,
f4:115,
f5:116,
f6:117,
f7:118,
f8:119,
f9:120,
f10:121,
f11:122,
f12:123,
print:124,
del:46,
backspace:8,
insert:45,
home:36,
end:35,
pageup:33,
pagedown:34,
numlock:144,
numpad_0:96,
numpad_1:97,
numpad_2:98,
numpad_3:99,
numpad_4:100,
numpad_5:101,
numpad_6:102,
numpad_7:103,
numpad_8:104,
numpad_9:105,
numpad_divide:111,
numpad_multiply:106,
numpad_minus:109,
numpad_plus:107},
codes:{}},
properties:{charCode:{_fast:true,
setOnlyOnce:true,
noCompute:true},
keyIdentifier:{_fast:true,
setOnlyOnce:true,
noCompute:true}},
members:{getKeyCode:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Please use getKeyIdentifier() instead.");
return this._keyCode;
}},
defer:function($0){for(var $1 in $0.keys){$0.codes[$0.keys[$1]]=$1;
}}});




/* ID: qx.event.type.MouseEvent */
qx.Class.define("qx.event.type.MouseEvent",
{extend:qx.event.type.DomEvent,
construct:function($0,
$1,
$2,
$3,
$4,
$5){arguments.callee.base.call(this,
$0,
$1,
$2,
$3,
$4);
if($5){this.setRelatedTarget($5);
}},
statics:{C_BUTTON_LEFT:"left",
C_BUTTON_MIDDLE:"middle",
C_BUTTON_RIGHT:"right",
C_BUTTON_NONE:"none",
_screenX:0,
_screenY:0,
_clientX:0,
_clientY:0,
_pageX:0,
_pageY:0,
_button:null,
buttons:qx.core.Variant.select("qx.client",
{"mshtml":{left:1,
right:2,
middle:4},
"default":{left:0,
right:2,
middle:1}}),
storeEventState:function($0){this._screenX=$0.getScreenX();
this._screenY=$0.getScreenY();
this._clientX=$0.getClientX();
this._clientY=$0.getClientY();
this._pageX=$0.getPageX();
this._pageY=$0.getPageY();
this._button=$0.getButton();
},
getScreenX:function(){return this._screenX;
},
getScreenY:function(){return this._screenY;
},
getClientX:function(){return this._clientX;
},
getClientY:function(){return this._clientY;
},
getPageX:function(){return this._pageX;
},
getPageY:function(){return this._pageY;
},
getButton:function(){return this._button;
}},
properties:{button:{_fast:true,
readOnly:true},
wheelDelta:{_fast:true,
readOnly:true}},
members:{getPageX:qx.core.Variant.select("qx.client",
{"mshtml":function(){return this.getDomEvent().clientX+qx.bom.Viewport.getScrollLeft(window);
},
"default":function(){return this.getDomEvent().pageX;
}}),
getPageY:qx.core.Variant.select("qx.client",
{"mshtml":function(){return this.getDomEvent().clientY+qx.bom.Viewport.getScrollTop(window);
},
"default":function(){return this.getDomEvent().pageY;
}}),
getClientX:function(){return this.getDomEvent().clientX;
},
getClientY:function(){return this.getDomEvent().clientY;
},
getScreenX:function(){return this.getDomEvent().screenX;
},
getScreenY:function(){return this.getDomEvent().screenY;
},
isLeftButtonPressed:qx.core.Variant.select("qx.client",
{"mshtml":function(){if(this.getType()=="click"){return true;
}else{return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_LEFT;
}},
"default":function(){return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_LEFT;
}}),
isMiddleButtonPressed:function(){return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_MIDDLE;
},
isRightButtonPressed:function(){return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_RIGHT;
},
__buttons:qx.core.Variant.select("qx.client",
{"mshtml":{1:"left",
2:"right",
4:"middle"},
"default":{0:"left",
2:"right",
1:"middle"}}),
_computeButton:function(){switch(this.getDomEvent().type){case "click":case "dblclick":return "left";
case "contextmenu":return "right";
default:return this.__buttons[this.getDomEvent().button]||"none";
}},
_computeWheelDelta:qx.core.Variant.select("qx.client",
{"default":function(){return this.getDomEvent().wheelDelta/120;
},
"gecko":function(){return -(this.getDomEvent().detail/3);
}})}});




/* ID: qx.util.manager.Object */
qx.Class.define("qx.util.manager.Object",
{extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._objects={};
},
members:{add:function($0){if(this.getDisposed()){return;
}this._objects[$0.toHashCode()]=$0;
},
remove:function($0){if(this.getDisposed()){return false;
}delete this._objects[$0.toHashCode()];
},
has:function($0){return this._objects[$0.toHashCode()]!=null;
},
get:function($0){return this._objects[$0.toHashCode()];
},
getAll:function(){return this._objects;
},
enableAll:function(){for(var $0 in this._objects){this._objects[$0].setEnabled(true);
}},
disableAll:function(){for(var $0 in this._objects){this._objects[$0].setEnabled(false);
}}},
destruct:function(){this._disposeObjectDeep("_objects");
}});




/* ID: qx.ui.embed.IframeManager */
qx.Class.define("qx.ui.embed.IframeManager",
{type:"singleton",
extend:qx.util.manager.Object,
construct:function(){arguments.callee.base.call(this);
this._blocked={};
},
members:{handleMouseDown:function($0){var $1=this._blockData=qx.lang.Object.copy(this.getAll());
for(var $2 in $1){$1[$2].block();
}},
handleMouseUp:function($0){var $1=this._blockData;
for(var $2 in $1){$1[$2].release();
}}}});




/* ID: qx.ui.layout.CanvasLayout */
qx.Class.define("qx.ui.layout.CanvasLayout",
{extend:qx.ui.core.Parent,
construct:function(){arguments.callee.base.call(this);
},
members:{_createLayoutImpl:function(){return new qx.ui.layout.impl.CanvasLayoutImpl(this);
}}});




/* ID: qx.ui.layout.impl.LayoutImpl */
qx.Class.define("qx.ui.layout.impl.LayoutImpl",
{extend:qx.core.Object,
construct:function($0){arguments.callee.base.call(this);
this._widget=$0;
},
members:{getWidget:function(){return this._widget;
},
computeChildBoxWidth:function($0){return $0.getWidthValue()||$0._computeBoxWidthFallback();
},
computeChildBoxHeight:function($0){return $0.getHeightValue()||$0._computeBoxHeightFallback();
},
computeChildNeededWidth:function($0){var $1=$0._computedMinWidthTypePercent?null:$0.getMinWidthValue();
var $2=$0._computedMaxWidthTypePercent?null:$0.getMaxWidthValue();
var $3=($0._computedWidthTypePercent||$0._computedWidthTypeFlex?null:$0.getWidthValue())||$0.getPreferredBoxWidth()||0;
return qx.lang.Number.limit($3,
$1,
$2)+$0.getMarginLeft()+$0.getMarginRight();
},
computeChildNeededHeight:function($0){var $1=$0._computedMinHeightTypePercent?null:$0.getMinHeightValue();
var $2=$0._computedMaxHeightTypePercent?null:$0.getMaxHeightValue();
var $3=($0._computedHeightTypePercent||$0._computedHeightTypeFlex?null:$0.getHeightValue())||$0.getPreferredBoxHeight()||0;
return qx.lang.Number.limit($3,
$1,
$2)+$0.getMarginTop()+$0.getMarginBottom();
},
computeChildrenNeededWidth_max:function(){for(var $0=0,
$1=this.getWidget().getVisibleChildren(),
$2=$1.length,
$3=0;$0<$2;$0++){$3=Math.max($3,
$1[$0].getNeededWidth());
}return $3;
},
computeChildrenNeededHeight_max:function(){for(var $0=0,
$1=this.getWidget().getVisibleChildren(),
$2=$1.length,
$3=0;$0<$2;$0++){$3=Math.max($3,
$1[$0].getNeededHeight());
}return $3;
},
computeChildrenNeededWidth_sum:function(){for(var $0=0,
$1=this.getWidget().getVisibleChildren(),
$2=$1.length,
$3=0;$0<$2;$0++){$3+=$1[$0].getNeededWidth();
}return $3;
},
computeChildrenNeededHeight_sum:function(){for(var $0=0,
$1=this.getWidget().getVisibleChildren(),
$2=$1.length,
$3=0;$0<$2;$0++){$3+=$1[$0].getNeededHeight();
}return $3;
},
computeChildrenNeededWidth:null,
computeChildrenNeededHeight:null,
updateSelfOnChildOuterWidthChange:function($0){},
updateSelfOnChildOuterHeightChange:function($0){},
updateChildOnInnerWidthChange:function($0){},
updateChildOnInnerHeightChange:function($0){},
updateSelfOnJobQueueFlush:function($0){},
updateChildrenOnJobQueueFlush:function($0){},
updateChildrenOnAddChild:function($0,
$1){},
updateChildrenOnRemoveChild:function($0,
$1){},
updateChildrenOnMoveChild:function($0,
$1,
$2){},
flushChildrenQueue:function($0){var $1=this.getWidget();
for(var $2 in $0){$1._layoutChild($0[$2]);
}},
layoutChild:function($0,
$1){},
layoutChild_sizeLimitX:qx.core.Variant.select("qx.client",
{"mshtml":qx.lang.Function.returnTrue,
"default":function($0,
$1){if($1.minWidth){$0._computedMinWidthTypeNull?$0._resetRuntimeMinWidth():$0._renderRuntimeMinWidth($0.getMinWidthValue());
}else if($1.initial&&!$0._computedMinWidthTypeNull){$0._renderRuntimeMinWidth($0.getMinWidthValue());
}
if($1.maxWidth){$0._computedMaxWidthTypeNull?$0._resetRuntimeMaxWidth():$0._renderRuntimeMaxWidth($0.getMaxWidthValue());
}else if($1.initial&&!$0._computedMaxWidthTypeNull){$0._renderRuntimeMaxWidth($0.getMaxWidthValue());
}}}),
layoutChild_sizeLimitY:qx.core.Variant.select("qx.client",
{"mshtml":qx.lang.Function.returnTrue,
"default":function($0,
$1){if($1.minHeight){$0._computedMinHeightTypeNull?$0._resetRuntimeMinHeight():$0._renderRuntimeMinHeight($0.getMinHeightValue());
}else if($1.initial&&!$0._computedMinHeightTypeNull){$0._renderRuntimeMinHeight($0.getMinHeightValue());
}
if($1.maxHeight){$0._computedMaxHeightTypeNull?$0._resetRuntimeMaxHeight():$0._renderRuntimeMaxHeight($0.getMaxHeightValue());
}else if($1.initial&&!$0._computedMaxHeightTypeNull){$0._renderRuntimeMaxHeight($0.getMaxHeightValue());
}}}),
layoutChild_marginX:function($0,
$1){if($1.marginLeft||$1.initial){var $2=$0.getMarginLeft();
$2!=null?$0._renderRuntimeMarginLeft($2):$0._resetRuntimeMarginLeft();
}
if($1.marginRight||$1.initial){var $3=$0.getMarginRight();
$3!=null?$0._renderRuntimeMarginRight($3):$0._resetRuntimeMarginRight();
}},
layoutChild_marginY:function($0,
$1){if($1.marginTop||$1.initial){var $2=$0.getMarginTop();
$2!=null?$0._renderRuntimeMarginTop($2):$0._resetRuntimeMarginTop();
}
if($1.marginBottom||$1.initial){var $3=$0.getMarginBottom();
$3!=null?$0._renderRuntimeMarginBottom($3):$0._resetRuntimeMarginBottom();
}},
layoutChild_sizeX_essentialWrapper:function($0,
$1){return $0._isWidthEssential()?this.layoutChild_sizeX($0,
$1):$0._resetRuntimeWidth();
},
layoutChild_sizeY_essentialWrapper:function($0,
$1){return $0._isHeightEssential()?this.layoutChild_sizeY($0,
$1):$0._resetRuntimeHeight();
}},
defer:function($0,
$1){$1.computeChildrenNeededWidth=$1.computeChildrenNeededWidth_max;
$1.computeChildrenNeededHeight=$1.computeChildrenNeededHeight_max;
},
destruct:function(){this._disposeFields("_widget");
}});




/* ID: qx.lang.Number */
qx.Class.define("qx.lang.Number",
{statics:{isInRange:function($0,
$1,
$2){return $0>=$1&&$0<=$2;
},
isBetweenRange:function($0,
$1,
$2){return $0>$1&&$0<$2;
},
limit:function($0,
$1,
$2){if(typeof $2==="number"&&$0>$2){return $2;
}else if(typeof $1==="number"&&$0<$1){return $1;
}else{return $0;
}}}});




/* ID: qx.ui.layout.impl.CanvasLayoutImpl */
qx.Class.define("qx.ui.layout.impl.CanvasLayoutImpl",
{extend:qx.ui.layout.impl.LayoutImpl,
construct:function($0){arguments.callee.base.call(this,
$0);
},
members:{computeChildBoxWidth:function($0){var $1=null;
if($0._computedLeftTypeNull||$0._computedRightTypeNull){$1=$0.getWidthValue();
}else if($0._hasParent){$1=this.getWidget().getInnerWidth()-$0.getLeftValue()-$0.getRightValue();
}return $1||$0._computeBoxWidthFallback();
},
computeChildBoxHeight:function($0){var $1=null;
if($0._computedTopTypeNull||$0._computedBottomTypeNull){$1=$0.getHeightValue();
}else if($0._hasParent){$1=this.getWidget().getInnerHeight()-$0.getTopValue()-$0.getBottomValue();
}return $1||$0._computeBoxHeightFallback();
},
computeChildNeededWidth:function($0){var $1=$0._computedLeftTypePercent?null:$0.getLeftValue();
var $2=$0._computedRightTypePercent?null:$0.getRightValue();
var $3=$0._computedMinWidthTypePercent?null:$0.getMinWidthValue();
var $4=$0._computedMaxWidthTypePercent?null:$0.getMaxWidthValue();
if($1!=null&&$2!=null){var $5=$0.getPreferredBoxWidth()||0;
}else{var $5=($0._computedWidthTypePercent?null:$0.getWidthValue())||$0.getPreferredBoxWidth()||0;
}return qx.lang.Number.limit($5,
$3,
$4)+$1+$2+$0.getMarginLeft()+$0.getMarginRight();
},
computeChildNeededHeight:function($0){var $1=$0._computedTopTypePercent?null:$0.getTopValue();
var $2=$0._computedBottomTypePercent?null:$0.getBottomValue();
var $3=$0._computedMinHeightTypePercent?null:$0.getMinHeightValue();
var $4=$0._computedMaxHeightTypePercent?null:$0.getMaxHeightValue();
if($1!=null&&$2!=null){var $5=$0.getPreferredBoxHeight()||0;
}else{var $5=($0._computedHeightTypePercent?null:$0.getHeightValue())||$0.getPreferredBoxHeight()||0;
}return qx.lang.Number.limit($5,
$3,
$4)+$1+$2+$0.getMarginTop()+$0.getMarginBottom();
},
updateChildOnInnerWidthChange:function($0){var $1=$0._recomputePercentX();
var $2=$0._recomputeRangeX();
return $1||$2;
},
updateChildOnInnerHeightChange:function($0){var $1=$0._recomputePercentY();
var $2=$0._recomputeRangeY();
return $1||$2;
},
layoutChild:function($0,
$1){this.layoutChild_sizeX_essentialWrapper($0,
$1);
this.layoutChild_sizeY_essentialWrapper($0,
$1);
this.layoutChild_sizeLimitX($0,
$1);
this.layoutChild_sizeLimitY($0,
$1);
this.layoutChild_locationX($0,
$1);
this.layoutChild_locationY($0,
$1);
this.layoutChild_marginX($0,
$1);
this.layoutChild_marginY($0,
$1);
},
layoutChild_sizeX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function($0,
$1){if($1.initial||$1.width||$1.minWidth||$1.maxWidth||$1.left||$1.right){if($0._computedMinWidthTypeNull&&$0._computedWidthTypeNull&&$0._computedMaxWidthTypeNull&&!(!$0._computedLeftTypeNull&&!$0._computedRightTypeNull)){$0._resetRuntimeWidth();
}else{$0._renderRuntimeWidth($0.getBoxWidth());
}}},
"default":function($0,
$1){if($1.initial||$1.width){$0._computedWidthTypeNull?$0._resetRuntimeWidth():$0._renderRuntimeWidth($0.getWidthValue());
}}}),
layoutChild_sizeY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function($0,
$1){if($1.initial||$1.height||$1.minHeight||$1.maxHeight||$1.top||$1.bottom){if($0._computedMinHeightTypeNull&&$0._computedHeightTypeNull&&$0._computedMaxHeightTypeNull&&!(!$0._computedTopTypeNull&&!$0._computedBottomTypeNull)){$0._resetRuntimeHeight();
}else{$0._renderRuntimeHeight($0.getBoxHeight());
}}},
"default":function($0,
$1){if($1.initial||$1.height){$0._computedHeightTypeNull?$0._resetRuntimeHeight():$0._renderRuntimeHeight($0.getHeightValue());
}}}),
layoutChild_locationX:function($0,
$1){var $2=this.getWidget();
if($1.initial||$1.left||$1.parentPaddingLeft){$0._computedLeftTypeNull?$0._computedRightTypeNull&&$2.getPaddingLeft()>0?$0._renderRuntimeLeft($2.getPaddingLeft()):$0._resetRuntimeLeft():$0._renderRuntimeLeft($0.getLeftValue()+$2.getPaddingLeft());
}
if($1.initial||$1.right||$1.parentPaddingRight){$0._computedRightTypeNull?$0._computedLeftTypeNull&&$2.getPaddingRight()>0?$0._renderRuntimeRight($2.getPaddingRight()):$0._resetRuntimeRight():$0._renderRuntimeRight($0.getRightValue()+$2.getPaddingRight());
}},
layoutChild_locationY:function($0,
$1){var $2=this.getWidget();
if($1.initial||$1.top||$1.parentPaddingTop){$0._computedTopTypeNull?$0._computedBottomTypeNull&&$2.getPaddingTop()>0?$0._renderRuntimeTop($2.getPaddingTop()):$0._resetRuntimeTop():$0._renderRuntimeTop($0.getTopValue()+$2.getPaddingTop());
}
if($1.initial||$1.bottom||$1.parentPaddingBottom){$0._computedBottomTypeNull?$0._computedTopTypeNull&&$2.getPaddingBottom()>0?$0._renderRuntimeBottom($2.getPaddingBottom()):$0._resetRuntimeBottom():$0._renderRuntimeBottom($0.getBottomValue()+$2.getPaddingBottom());
}}}});




/* ID: qx.ui.core.ClientDocument */
qx.Class.define("qx.ui.core.ClientDocument",
{type:"singleton",
extend:qx.ui.layout.CanvasLayout,
construct:function(){arguments.callee.base.call(this);
this._window=window;
this._document=window.document;
this.setElement(this._document.body);
this._document.body.style.position="";
if(qx.core.Variant.isSet("qx.client",
"mshtml")&&(qx.core.Client.getInstance().getMajor()<7)){try{document.execCommand("BackgroundImageCache",
false,
true);
}catch(err){}}this._cachedInnerWidth=this._document.body.offsetWidth;
this._cachedInnerHeight=this._document.body.offsetHeight;
this.addEventListener("windowresize",
this._onwindowresize);
this._modalWidgets=[];
this._modalNativeWindow=null;
this.activateFocusRoot();
this.initHideFocus();
this.initSelectable();
qx.event.handler.EventHandler.getInstance().setFocusRoot(this);
},
events:{"focus":"qx.event.type.Event",
"windowblur":"qx.event.type.Event",
"windowfocus":"qx.event.type.Event",
"windowresize":"qx.event.type.Event"},
properties:{appearance:{refine:true,
init:"client-document"},
enableElementFocus:{refine:true,
init:false},
enabled:{refine:true,
init:true},
selectable:{refine:true,
init:false},
hideFocus:{refine:true,
init:true},
globalCursor:{check:"String",
nullable:true,
themeable:true,
apply:"_applyGlobalCursor",
event:"changeGlobalCursor"}},
members:{_applyParent:qx.lang.Function.returnTrue,
getTopLevelWidget:qx.lang.Function.returnThis,
getWindowElement:function(){return this._window;
},
getDocumentElement:function(){return this._document;
},
getParent:qx.lang.Function.returnNull,
getToolTip:qx.lang.Function.returnNull,
isMaterialized:qx.lang.Function.returnTrue,
isSeeable:qx.lang.Function.returnTrue,
_isDisplayable:true,
_hasParent:false,
_initialLayoutDone:true,
_getBlocker:function(){if(!this._blocker){this._blocker=new qx.ui.core.ClientDocumentBlocker;
this._blocker.addEventListener("mousedown",
this.blockHelper,
this);
this._blocker.addEventListener("mouseup",
this.blockHelper,
this);
this.add(this._blocker);
}return this._blocker;
},
blockHelper:function($0){if(this._modalNativeWindow){if(!this._modalNativeWindow.isClosed()){this._modalNativeWindow.focus();
}else{this.debug("Window seems to be closed already! => Releasing Blocker");
this.release(this._modalNativeWindow);
}}},
block:function($0){this._getBlocker().show();
if(qx.Class.isDefined("qx.ui.window.Window")&&$0 instanceof qx.ui.window.Window){this._modalWidgets.push($0);
var $1=$0.getZIndex();
this._getBlocker().setZIndex($1);
$0.setZIndex($1+1);
}else if(qx.Class.isDefined("qx.client.NativeWindow")&&$0 instanceof qx.client.NativeWindow){this._modalNativeWindow=$0;
this._getBlocker().setZIndex(1e7);
}},
release:function($0){if($0){if(qx.Class.isDefined("qx.client.NativeWindow")&&$0 instanceof qx.client.NativeWindow){this._modalNativeWindow=null;
}else{qx.lang.Array.remove(this._modalWidgets,
$0);
}}var $1=this._modalWidgets.length;
if($1==0){this._getBlocker().hide();
}else{var $2=this._modalWidgets[$1-1];
var $3=$2.getZIndex();
this._getBlocker().setZIndex($3);
$2.setZIndex($3+1);
}},
createStyleElement:function($0){return qx.html.StyleSheet.createElement($0);
},
addCssRule:function($0,
$1,
$2){return qx.html.StyleSheet.addRule($0,
$1,
$2);
},
removeCssRule:function($0,
$1){return qx.html.StyleSheet.removeRule($0,
$1);
},
removeAllCssRules:function($0){return qx.html.StyleSheet.removeAllRules($0);
},
_applyGlobalCursor:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){if($0=="pointer"){$0="hand";
}
if($1=="pointer"){$1="hand";
}var $2,
$3;
var $4=this._cursorElements;
if($4){for(var $5=0,
$6=$4.length;$5<$6;$5++){$2=$4[$5];
if($2.style.cursor==$1){$2.style.cursor=$2._oldCursor;
$2._oldCursor=null;
}}}var $7=document.all;
var $4=this._cursorElements=[];
if($0!=null&&$0!=""&&$0!="auto"){for(var $5=0,
$6=$7.length;$5<$6;$5++){$2=$7[$5];
$3=$2.style.cursor;
if($3!=null&&$3!=""&&$3!="auto"){$2._oldCursor=$3;
$2.style.cursor=$0;
$4.push($2);
}}document.body.style.cursor=$0;
}else{document.body.style.cursor="";
}},
"default":function($0,
$1){if(!this._globalCursorStyleSheet){this._globalCursorStyleSheet=this.createStyleElement();
}this.removeCssRule(this._globalCursorStyleSheet,
"*");
if($0){this.addCssRule(this._globalCursorStyleSheet,
"*",
"cursor:"+$0+" !important");
}}}),
_onwindowresize:function($0){if(qx.Class.isDefined("qx.ui.popup.PopupManager")){qx.ui.popup.PopupManager.getInstance().update();
}this._recomputeInnerWidth();
this._recomputeInnerHeight();
qx.ui.core.Widget.flushGlobalQueues();
},
_computeInnerWidth:function(){return this._document.body.offsetWidth;
},
_computeInnerHeight:function(){return this._document.body.offsetHeight;
}},
settings:{"qx.enableApplicationLayout":true,
"qx.boxModelCorrection":true},
defer:function(){if(qx.core.Setting.get("qx.boxModelCorrection")){var $0=qx.core.Client.getInstance().getEngineBoxSizingAttributes();
var $1=$0.join(":border-box;")+":border-box;";
var $2=$0.join(":content-box;")+":content-box;";
qx.html.StyleSheet.createElement("html,body { margin:0;border:0;padding:0; } "+"html { border:0 none; } "+"*{"+$1+"} "+"img{"+$2+"}");
}
if(qx.core.Setting.get("qx.enableApplicationLayout")){qx.html.StyleSheet.createElement("html,body{width:100%;height:100%;overflow:hidden;}");
}},
destruct:function(){this._disposeObjects("_blocker");
this._disposeFields("_window",
"_document",
"_modalWidgets",
"_modalNativeWindow",
"_globalCursorStyleSheet");
}});




/* ID: qx.ui.basic.Terminator */
qx.Class.define("qx.ui.basic.Terminator",
{extend:qx.ui.core.Widget,
members:{renderPadding:function($0){if($0.paddingLeft){this._renderRuntimePaddingLeft(this.getPaddingLeft());
}
if($0.paddingRight){this._renderRuntimePaddingRight(this.getPaddingRight());
}
if($0.paddingTop){this._renderRuntimePaddingTop(this.getPaddingTop());
}
if($0.paddingBottom){this._renderRuntimePaddingBottom(this.getPaddingBottom());
}},
_renderContent:function(){if(this._computedWidthTypePixel){this._cachedPreferredInnerWidth=null;
}else{this._invalidatePreferredInnerWidth();
}if(this._computedHeightTypePixel){this._cachedPreferredInnerHeight=null;
}else{this._invalidatePreferredInnerHeight();
}if(this._initialLayoutDone){this.addToJobQueue("load");
}},
_layoutPost:function($0){if($0.initial||$0.load||$0.width||$0.height){this._postApply();
}},
_postApply:qx.lang.Function.returnTrue,
_computeBoxWidthFallback:function(){return this.getPreferredBoxWidth();
},
_computeBoxHeightFallback:function(){return this.getPreferredBoxHeight();
},
_computePreferredInnerWidth:qx.lang.Function.returnZero,
_computePreferredInnerHeight:qx.lang.Function.returnZero,
_isWidthEssential:function(){if(!this._computedLeftTypeNull&&!this._computedRightTypeNull){return true;
}
if(!this._computedWidthTypeNull&&!this._computedWidthTypeAuto){return true;
}
if(!this._computedMinWidthTypeNull&&!this._computedMinWidthTypeAuto){return true;
}
if(!this._computedMaxWidthTypeNull&&!this._computedMaxWidthTypeAuto){return true;
}
if(this._borderElement){return true;
}return false;
},
_isHeightEssential:function(){if(!this._computedTopTypeNull&&!this._computedBottomTypeNull){return true;
}
if(!this._computedHeightTypeNull&&!this._computedHeightTypeAuto){return true;
}
if(!this._computedMinHeightTypeNull&&!this._computedMinHeightTypeAuto){return true;
}
if(!this._computedMaxHeightTypeNull&&!this._computedMaxHeightTypeAuto){return true;
}
if(this._borderElement){return true;
}return false;
}}});




/* ID: qx.ui.core.ClientDocumentBlocker */
qx.Class.define("qx.ui.core.ClientDocumentBlocker",
{extend:qx.ui.basic.Terminator,
construct:function(){arguments.callee.base.call(this);
this.initTop();
this.initLeft();
this.initWidth();
this.initHeight();
this.initZIndex();
},
properties:{appearance:{refine:true,
init:"client-document-blocker"},
zIndex:{refine:true,
init:1e8},
top:{refine:true,
init:0},
left:{refine:true,
init:0},
width:{refine:true,
init:"100%"},
height:{refine:true,
init:"100%"},
display:{refine:true,
init:false}},
members:{getFocusRoot:function(){return null;
}}});




/* ID: qx.theme.manager.Appearance */
qx.Class.define("qx.theme.manager.Appearance",
{type:"singleton",
extend:qx.util.manager.Object,
construct:function(){arguments.callee.base.call(this);
this.__cache={};
this.__stateMap={};
this.__stateMapLength=1;
},
properties:{appearanceTheme:{check:"Theme",
nullable:true,
apply:"_applyAppearanceTheme",
event:"changeAppearanceTheme"}},
members:{_applyAppearanceTheme:function($0,
$1){this._currentTheme=$0;
this._oldTheme=$1;
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncAppearanceTheme();
}},
syncAppearanceTheme:function(){if(!this._currentTheme&&!this._oldTheme){return;
}
if(this._currentTheme){this.__cache[this._currentTheme.name]={};
}var $0=qx.core.Init.getInstance().getApplication();
if($0&&$0.getUiReady()){qx.ui.core.ClientDocument.getInstance()._recursiveAppearanceThemeUpdate(this._currentTheme,
this._oldTheme);
}
if(this._oldTheme){delete this.__cache[this._oldTheme.name];
}delete this._currentTheme;
delete this._oldTheme;
},
styleFrom:function($0,
$1){var $2=this.getAppearanceTheme();
if(!$2){return;
}return this.styleFromTheme($2,
$0,
$1);
},
styleFromTheme:function($0,
$1,
$2){var $3=$0.appearances[$1];
if(!$3){{};
return null;
}if(!$3.style){if($3.include){return this.styleFromTheme($0,
$3.include,
$2);
}else{return null;
}}var $4=this.__stateMap;
var $5=[$1];
for(var $6 in $2){if(!$4[$6]){$4[$6]=this.__stateMapLength++;
}$5[$4[$6]]=true;
}var $7=$5.join();
var $8=this.__cache[$0.name];
if($8&&$8[$7]!==undefined){return $8[$7];
}var $9;
if($3.include||$3.base){var $a=$3.style($2);
var $b;
if($3.include){$b=this.styleFromTheme($0,
$3.include,
$2);
}$9={};
if($3.base){var $c=this.styleFromTheme($3.base,
$1,
$2);
if($3.include){for(var $d in $c){if($b[$d]===undefined&&$a[$d]===undefined){$9[$d]=$c[$d];
}}}else{for(var $d in $c){if($a[$d]===undefined){$9[$d]=$c[$d];
}}}}if($3.include){for(var $d in $b){if($a[$d]===undefined){$9[$d]=$b[$d];
}}}for(var $d in $a){$9[$d]=$a[$d];
}}else{$9=$3.style($2);
}if($8){$8[$7]=$9||null;
}return $9||null;
}},
destruct:function(){this._disposeFields("__cache",
"__stateMap");
}});




/* ID: qx.theme.manager.Meta */
qx.Class.define("qx.theme.manager.Meta",
{type:"singleton",
extend:qx.core.Target,
properties:{theme:{check:"Theme",
nullable:true,
apply:"_applyTheme",
event:"changeTheme"},
autoSync:{check:"Boolean",
init:true,
apply:"_applyAutoSync"}},
members:{_applyTheme:function($0,
$1){var $2=null;
var $3=null;
var $4=null;
var $5=null;
var $6=null;
var $7=null;
if($0){$2=$0.meta.color||null;
$3=$0.meta.border||null;
$4=$0.meta.font||null;
$5=$0.meta.widget||null;
$6=$0.meta.icon||null;
$7=$0.meta.appearance||null;
}
if($1){this.setAutoSync(false);
}var $8=qx.theme.manager.Color.getInstance();
var $9=qx.theme.manager.Border.getInstance();
var $a=qx.theme.manager.Font.getInstance();
var $b=qx.theme.manager.Icon.getInstance();
var $c=qx.theme.manager.Widget.getInstance();
var $d=qx.theme.manager.Appearance.getInstance();
$8.setColorTheme($2);
$9.setBorderTheme($3);
$a.setFontTheme($4);
$c.setWidgetTheme($5);
$b.setIconTheme($6);
$d.setAppearanceTheme($7);
if($1){this.setAutoSync(true);
}},
_applyAutoSync:function($0,
$1){if($0){qx.theme.manager.Appearance.getInstance().syncAppearanceTheme();
qx.theme.manager.Icon.getInstance().syncIconTheme();
qx.theme.manager.Widget.getInstance().syncWidgetTheme();
qx.theme.manager.Font.getInstance().syncFontTheme();
qx.theme.manager.Border.getInstance().syncBorderTheme();
qx.theme.manager.Color.getInstance().syncColorTheme();
}},
initialize:function(){var $0=qx.core.Setting;
var $1,
$2;
$1=$0.get("qx.theme");
if($1){$2=qx.Theme.getByName($1);
if(!$2){throw new Error("The meta theme to use is not available: "+$1);
}this.setTheme($2);
}$1=$0.get("qx.colorTheme");
if($1){$2=qx.Theme.getByName($1);
if(!$2){throw new Error("The color theme to use is not available: "+$1);
}qx.theme.manager.Color.getInstance().setColorTheme($2);
}$1=$0.get("qx.borderTheme");
if($1){$2=qx.Theme.getByName($1);
if(!$2){throw new Error("The border theme to use is not available: "+$1);
}qx.theme.manager.Border.getInstance().setBorderTheme($2);
}$1=$0.get("qx.fontTheme");
if($1){$2=qx.Theme.getByName($1);
if(!$2){throw new Error("The font theme to use is not available: "+$1);
}qx.theme.manager.Font.getInstance().setFontTheme($2);
}$1=$0.get("qx.widgetTheme");
if($1){$2=qx.Theme.getByName($1);
if(!$2){throw new Error("The widget theme to use is not available: "+$1);
}qx.theme.manager.Widget.getInstance().setWidgetTheme($2);
}$1=$0.get("qx.iconTheme");
if($1){$2=qx.Theme.getByName($1);
if(!$2){throw new Error("The icon theme to use is not available: "+$1);
}qx.theme.manager.Icon.getInstance().setIconTheme($2);
}$1=$0.get("qx.appearanceTheme");
if($1){$2=qx.Theme.getByName($1);
if(!$2){throw new Error("The appearance theme to use is not available: "+$1);
}qx.theme.manager.Appearance.getInstance().setAppearanceTheme($2);
}},
__queryThemes:function($0){var $1=qx.Theme.getAll();
var $2;
var $3=[];
for(var $4 in $1){$2=$1[$4];
if($2[$0]){$3.push($2);
}}return $3;
},
getMetaThemes:function(){return this.__queryThemes("meta");
},
getColorThemes:function(){return this.__queryThemes("colors");
},
getBorderThemes:function(){return this.__queryThemes("borders");
},
getFontThemes:function(){return this.__queryThemes("fonts");
},
getWidgetThemes:function(){return this.__queryThemes("widgets");
},
getIconThemes:function(){return this.__queryThemes("icons");
},
getAppearanceThemes:function(){return this.__queryThemes("appearances");
}},
settings:{"qx.theme":"qx.theme.ClassicRoyale",
"qx.colorTheme":null,
"qx.borderTheme":null,
"qx.fontTheme":null,
"qx.widgetTheme":null,
"qx.appearanceTheme":null,
"qx.iconTheme":null}});




/* ID: qx.theme.manager.Color */
qx.Class.define("qx.theme.manager.Color",
{type:"singleton",
extend:qx.util.manager.Value,
properties:{colorTheme:{check:"Theme",
nullable:true,
apply:"_applyColorTheme",
event:"changeColorTheme"}},
members:{_applyColorTheme:function($0){var $1=this._dynamic={};
if($0){var $2=$0.colors;
var $3=qx.util.ColorUtil;
var $4;
for(var $5 in $2){$4=$2[$5];
if(typeof $4==="string"){if(!$3.isCssString($4)){throw new Error("Could not parse color: "+$4);
}}else if($4 instanceof Array){$4=$3.rgbToRgbString($4);
}else{throw new Error("Could not parse color: "+$4);
}$1[$5]=$4;
}}
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncColorTheme();
}},
syncColorTheme:function(){this._updateObjects();
}}});




/* ID: qx.util.ColorUtil */
qx.Class.define("qx.util.ColorUtil",
{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},
SYSTEM:{activeborder:true,
activecaption:true,
appworkspace:true,
background:true,
buttonface:true,
buttonhighlight:true,
buttonshadow:true,
buttontext:true,
captiontext:true,
graytext:true,
highlight:true,
highlighttext:true,
inactiveborder:true,
inactivecaption:true,
inactivecaptiontext:true,
infobackground:true,
infotext:true,
menu:true,
menutext:true,
scrollbar:true,
threeddarkshadow:true,
threedface:true,
threedhighlight:true,
threedlightshadow:true,
threedshadow:true,
window:true,
windowframe:true,
windowtext:true},
NAMED:{black:[0,
0,
0],
silver:[192,
192,
192],
gray:[128,
128,
128],
white:[255,
255,
255],
maroon:[128,
0,
0],
red:[255,
0,
0],
purple:[128,
0,
128],
fuchsia:[255,
0,
255],
green:[0,
128,
0],
lime:[0,
255,
0],
olive:[128,
128,
0],
yellow:[255,
255,
0],
navy:[0,
0,
128],
blue:[0,
0,
255],
teal:[0,
128,
128],
aqua:[0,
255,
255],
transparent:[-1,
-1,
-1],
grey:[128,
128,
128],
magenta:[255,
0,
255],
orange:[255,
165,
0],
brown:[165,
42,
42]},
isNamedColor:function($0){return this.NAMED[$0]!==undefined;
},
isSystemColor:function($0){return this.SYSTEM[$0]!==undefined;
},
isThemedColor:function($0){return qx.theme.manager.Color.getInstance().isDynamic($0);
},
stringToRgb:function($0){if(this.isThemedColor($0)){var $0=qx.theme.manager.Color.getInstance().resolveDynamic($0);
}
if(this.isNamedColor($0)){return this.NAMED[$0];
}else if(this.isSystemColor($0)){throw new Error("Could not convert system colors to RGB: "+$0);
}else if(this.isRgbString($0)){return this.__rgbStringToRgb();
}else if(this.isHex3String($0)){return this.__hex3StringToRgb();
}else if(this.isHex6String($0)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+$0);
},
cssStringToRgb:function($0){if(this.isNamedColor($0)){return this.NAMED[$0];
}else if(this.isSystemColor($0)){throw new Error("Could not convert system colors to RGB: "+$0);
}else if(this.isRgbString($0)){return this.__rgbStringToRgb();
}else if(this.isHex3String($0)){return this.__hex3StringToRgb();
}else if(this.isHex6String($0)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+$0);
},
stringToRgbString:function($0){return this.rgbToRgbString(this.stringToRgb($0));
},
rgbToRgbString:function($0){return "rgb("+$0[0]+","+$0[1]+","+$0[2]+")";
},
rgbToHexString:function($0){return (qx.lang.String.pad($0[0].toString(16).toUpperCase(),
2)+qx.lang.String.pad($0[1].toString(16).toUpperCase(),
2)+qx.lang.String.pad($0[2].toString(16).toUpperCase(),
2));
},
isValid:function($0){return this.isThemedColor($0)||this.isCssString($0);
},
isCssString:function($0){return this.isSystemColor($0)||this.isNamedColor($0)||this.isHex3String($0)||this.isHex6String($0)||this.isRgbString($0);
},
isHex3String:function($0){return this.REGEXP.hex3.test($0);
},
isHex6String:function($0){return this.REGEXP.hex6.test($0);
},
isRgbString:function($0){return this.REGEXP.rgb.test($0);
},
__rgbStringToRgb:function(){var $0=parseInt(RegExp.$1);
var $1=parseInt(RegExp.$2);
var $2=parseInt(RegExp.$3);
return [$0,
$1,
$2];
},
__hex3StringToRgb:function(){var $0=parseInt(RegExp.$1,
16)*17;
var $1=parseInt(RegExp.$2,
16)*17;
var $2=parseInt(RegExp.$3,
16)*17;
return [$0,
$1,
$2];
},
__hex6StringToRgb:function(){var $0=(parseInt(RegExp.$1,
16)*16)+parseInt(RegExp.$2,
16);
var $1=(parseInt(RegExp.$3,
16)*16)+parseInt(RegExp.$4,
16);
var $2=(parseInt(RegExp.$5,
16)*16)+parseInt(RegExp.$6,
16);
return [$0,
$1,
$2];
},
hex3StringToRgb:function($0){if(this.isHex3String($0)){return this.__hex3StringToRgb($0);
}throw new Error("Invalid hex3 value: "+$0);
},
hex6StringToRgb:function($0){if(this.isHex6String($0)){return this.__hex6StringToRgb($0);
}throw new Error("Invalid hex6 value: "+$0);
},
hexStringToRgb:function($0){if(this.isHex3String($0)){return this.__hex3StringToRgb($0);
}
if(this.isHex6String($0)){return this.__hex6StringToRgb($0);
}throw new Error("Invalid hex value: "+$0);
},
rgbToHsb:function($0){var $1,
$2,
$3;
var $4=$0[0];
var $5=$0[1];
var $6=$0[2];
var $7=($4>$5)?$4:$5;
if($6>$7){$7=$6;
}var $8=($4<$5)?$4:$5;
if($6<$8){$8=$6;
}$3=$7/255.0;
if($7!=0){$2=($7-$8)/$7;
}else{$2=0;
}
if($2==0){$1=0;
}else{var $9=($7-$4)/($7-$8);
var $a=($7-$5)/($7-$8);
var $b=($7-$6)/($7-$8);
if($4==$7){$1=$b-$a;
}else if($5==$7){$1=2.0+$9-$b;
}else{$1=4.0+$a-$9;
}$1=$1/6.0;
if($1<0){$1=$1+1.0;
}}return [Math.round($1*360),
Math.round($2*100),
Math.round($3*100)];
},
hsbToRgb:function($0){var $1,
$2,
$3,
$4,
$5;
var $6=$0[0]/360;
var $7=$0[1]/100;
var $8=$0[2]/100;
if($6>=1.0){$6%=1.0;
}
if($7>1.0){$7=1.0;
}
if($8>1.0){$8=1.0;
}var $9=Math.floor(255*$8);
var $a={};
if($7==0.0){$a.red=$a.green=$a.blue=$9;
}else{$6*=6.0;
$1=Math.floor($6);
$2=$6-$1;
$3=Math.floor($9*(1.0-$7));
$4=Math.floor($9*(1.0-($7*$2)));
$5=Math.floor($9*(1.0-($7*(1.0-$2))));
switch($1){case 0:$a.red=$9;
$a.green=$5;
$a.blue=$3;
break;
case 1:$a.red=$4;
$a.green=$9;
$a.blue=$3;
break;
case 2:$a.red=$3;
$a.green=$9;
$a.blue=$5;
break;
case 3:$a.red=$3;
$a.green=$4;
$a.blue=$9;
break;
case 4:$a.red=$5;
$a.green=$3;
$a.blue=$9;
break;
case 5:$a.red=$9;
$a.green=$3;
$a.blue=$4;
break;
}}return $a;
},
randomColor:function(){var $0=Math.round(Math.random()*255);
var $1=Math.round(Math.random()*255);
var $2=Math.round(Math.random()*255);
return this.rgbToRgbString([$0,
$1,
$2]);
}}});




/* ID: qx.theme.manager.Border */
qx.Class.define("qx.theme.manager.Border",
{type:"singleton",
extend:qx.util.manager.Value,
properties:{borderTheme:{check:"Theme",
nullable:true,
apply:"_applyBorderTheme",
event:"changeBorderTheme"}},
members:{resolveDynamic:function($0){return $0 instanceof qx.ui.core.Border?$0:this._dynamic[$0];
},
isDynamic:function($0){return $0&&($0 instanceof qx.ui.core.Border||this._dynamic[$0]!==undefined);
},
syncBorderTheme:function(){this._updateObjects();
},
updateObjectsEdge:function($0,
$1){var $2=this._registry;
var $3=this._dynamic;
var $4;
for(var $5 in $2){$4=$2[$5];
if($4.value===$0||$3[$4.value]===$0){$4.callback.call($4.object,
$0,
$1);
}}},
_applyBorderTheme:function($0){var $1=this._dynamic;
for(var $2 in $1){if($1[$2].themed){$1[$2].dispose();
delete $1[$2];
}}
if($0){var $3=$0.borders;
var $4=qx.ui.core.Border;
for(var $2 in $3){$1[$2]=(new $4).set($3[$2]);
$1[$2].themed=true;
}}
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncBorderTheme();
}}}});




/* ID: qx.ui.core.Border */
qx.Class.define("qx.ui.core.Border",
{extend:qx.core.Object,
construct:function($0,
$1,
$2){arguments.callee.base.call(this);
if($0!==undefined){this.setWidth($0);
}
if($1!==undefined){this.setStyle($1);
}
if($2!==undefined){this.setColor($2);
}},
statics:{fromString:function($0){var $1=new qx.ui.core.Border;
var $2=$0.split(/\s+/);
var $3,
$4;
for(var $5=0,
$6=$2.length;$5<$6;$5++){$3=$2[$5];
switch($3){case "groove":case "ridge":case "inset":case "outset":case "solid":case "dotted":case "dashed":case "double":case "none":$1.setStyle($3);
break;
default:$4=parseInt($3);
if($4===$3||qx.lang.String.contains($3,
"px")){$1.setWidth($4);
}else{$1.setColor($3);
}break;
}}return $1;
},
fromConfig:function($0){var $1=new qx.ui.core.Border;
$1.set($0);
return $1;
},
resetTop:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
if($1){$1.borderTopWidth=$1.borderTopStyle=$1.borderTopColor=$1.MozBorderTopColors="";
}},
"default":function($0){var $1=$0._style;
if($1){$1.borderTopWidth=$1.borderTopStyle=$1.borderTopColor="";
}$1=$0._innerStyle;
if($1){$1.borderTopWidth=$1.borderTopStyle=$1.borderTopColor="";
}}}),
resetRight:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
if($1){$1.borderRightWidth=$1.borderRightStyle=$1.borderRightColor=$1.MozBorderRightColors="";
}},
"default":function($0){var $1=$0._style;
if($1){$1.borderRightWidth=$1.borderRightStyle=$1.borderRightColor="";
}$1=$0._innerStyle;
if($1){$1.borderRightWidth=$1.borderRightStyle=$1.borderRightColor="";
}}}),
resetBottom:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
if($1){$1.borderBottomWidth=$1.borderBottomStyle=$1.borderBottomColor=$1.MozBorderBottomColors="";
}},
"default":function($0){var $1=$0._style;
if($1){$1.borderBottomWidth=$1.borderBottomStyle=$1.borderBottomColor="";
}$1=$0._innerStyle;
if($1){$1.borderBottomWidth=$1.borderBottomStyle=$1.borderBottomColor="";
}}}),
resetLeft:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
if($1){$1.borderLeftWidth=$1.borderLeftStyle=$1.borderLeftColor=$1.MozBorderLeftColors="";
}},
"default":function($0){var $1=$0._style;
if($1){$1.borderLeftWidth=$1.borderLeftStyle=$1.borderLeftColor="";
}$1=$0._innerStyle;
if($1){$1.borderLeftWidth=$1.borderLeftStyle=$1.borderLeftColor="";
}}})},
properties:{widthTop:{check:"Number",
init:0,
apply:"_applyWidthTop"},
widthRight:{check:"Number",
init:0,
apply:"_applyWidthRight"},
widthBottom:{check:"Number",
init:0,
apply:"_applyWidthBottom"},
widthLeft:{check:"Number",
init:0,
apply:"_applyWidthLeft"},
styleTop:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleTop"},
styleRight:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleRight"},
styleBottom:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleBottom"},
styleLeft:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleLeft"},
colorTop:{nullable:true,
check:"Color",
apply:"_applyColorTop"},
colorRight:{nullable:true,
check:"Color",
apply:"_applyColorRight"},
colorBottom:{nullable:true,
check:"Color",
apply:"_applyColorBottom"},
colorLeft:{nullable:true,
check:"Color",
apply:"_applyColorLeft"},
colorInnerTop:{nullable:true,
check:"Color",
apply:"_applyColorInnerTop"},
colorInnerRight:{nullable:true,
check:"Color",
apply:"_applyColorInnerRight"},
colorInnerBottom:{nullable:true,
check:"Color",
apply:"_applyColorInnerBottom"},
colorInnerLeft:{nullable:true,
check:"Color",
apply:"_applyColorInnerLeft"},
left:{group:["widthLeft",
"styleLeft",
"colorLeft"]},
right:{group:["widthRight",
"styleRight",
"colorRight"]},
top:{group:["widthTop",
"styleTop",
"colorTop"]},
bottom:{group:["widthBottom",
"styleBottom",
"colorBottom"]},
width:{group:["widthTop",
"widthRight",
"widthBottom",
"widthLeft"],
mode:"shorthand"},
style:{group:["styleTop",
"styleRight",
"styleBottom",
"styleLeft"],
mode:"shorthand"},
color:{group:["colorTop",
"colorRight",
"colorBottom",
"colorLeft"],
mode:"shorthand"},
innerColor:{group:["colorInnerTop",
"colorInnerRight",
"colorInnerBottom",
"colorInnerLeft"],
mode:"shorthand"}},
members:{_applyWidthTop:function($0,
$1){this.__widthTop=$0==null?"0px":$0+"px";
this.__computeComplexTop();
this.__informManager("top");
},
_applyWidthRight:function($0,
$1){this.__widthRight=$0==null?"0px":$0+"px";
this.__computeComplexRight();
this.__informManager("right");
},
_applyWidthBottom:function($0,
$1){this.__widthBottom=$0==null?"0px":$0+"px";
this.__computeComplexBottom();
this.__informManager("bottom");
},
_applyWidthLeft:function($0,
$1){this.__widthLeft=$0==null?"0px":$0+"px";
this.__computeComplexLeft();
this.__informManager("left");
},
_applyColorTop:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorTop,
this,
$0);
},
_applyColorRight:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorRight,
this,
$0);
},
_applyColorBottom:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorBottom,
this,
$0);
},
_applyColorLeft:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorLeft,
this,
$0);
},
_applyColorInnerTop:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerTop,
this,
$0);
},
_applyColorInnerRight:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerRight,
this,
$0);
},
_applyColorInnerBottom:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerBottom,
this,
$0);
},
_applyColorInnerLeft:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerLeft,
this,
$0);
},
_applyStyleTop:function(){this.__informManager("top");
},
_applyStyleRight:function(){this.__informManager("right");
},
_applyStyleBottom:function(){this.__informManager("bottom");
},
_applyStyleLeft:function(){this.__informManager("left");
},
_changeColorTop:function($0){this.__colorTop=$0;
this.__computeComplexTop();
this.__informManager("top");
},
_changeColorInnerTop:function($0){this.__colorInnerTop=$0;
this.__computeComplexTop();
this.__informManager("top");
},
_changeColorRight:function($0){this.__colorRight=$0;
this.__computeComplexRight();
this.__informManager("right");
},
_changeColorInnerRight:function($0){this.__colorInnerRight=$0;
this.__computeComplexRight();
this.__informManager("right");
},
_changeColorBottom:function($0){this.__colorBottom=$0;
this.__computeComplexBottom();
this.__informManager("bottom");
},
_changeColorInnerBottom:function($0){this.__colorInnerBottom=$0;
this.__computeComplexBottom();
this.__informManager("bottom");
},
_changeColorLeft:function($0){this.__colorLeft=$0;
this.__computeComplexLeft();
this.__informManager("left");
},
_changeColorInnerLeft:function($0){this.__colorInnerLeft=$0;
this.__computeComplexLeft();
this.__informManager("left");
},
__computeComplexTop:function(){this.__complexTop=this.getWidthTop()===2&&this.__colorInnerTop!=null&&this.__colorTop!=this.__colorInnerTop;
},
__computeComplexRight:function(){this.__complexRight=this.getWidthRight()===2&&this.__colorInnerRight!=null&&this.__colorRight!=this.__colorInnerRight;
},
__computeComplexBottom:function(){this.__complexBottom=this.getWidthBottom()===2&&this.__colorInnerBottom!=null&&this.__colorBottom!=this.__colorInnerBottom;
},
__computeComplexLeft:function(){this.__complexLeft=this.getWidthLeft()===2&&this.__colorInnerLeft!=null&&this.__colorLeft!=this.__colorInnerLeft;
},
__informManager:function($0){qx.theme.manager.Border.getInstance().updateObjectsEdge(this,
$0);
},
renderTop:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
$1.borderTopWidth=this.__widthTop||"0px";
$1.borderTopColor=this.__colorTop||"";
if(this.__complexTop){$1.borderTopStyle="solid";
$1.MozBorderTopColors=this.__colorTop+" "+this.__colorInnerTop;
}else{$1.borderTopStyle=this.getStyleTop()||"none";
$1.MozBorderTopColors="";
}},
"default":function($0){var $1=$0._style;
var $2=$0._innerStyle;
if(this.__complexTop){if(!$2){$0.prepareEnhancedBorder();
$2=$0._innerStyle;
}$1.borderTopWidth=$2.borderTopWidth="1px";
$1.borderTopStyle=$2.borderTopStyle="solid";
$1.borderTopColor=this.__colorTop;
$2.borderTopColor=this.__colorInnerTop;
}else{$1.borderTopWidth=this.__widthTop||"0px";
$1.borderTopStyle=this.getStyleTop()||"none";
$1.borderTopColor=this.__colorTop||"";
if($2){$2.borderTopWidth=$2.borderTopStyle=$2.borderTopColor="";
}}}}),
renderRight:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
$1.borderRightWidth=this.__widthRight||"0px";
$1.borderRightColor=this.__colorRight||"";
if(this.__complexRight){$1.borderRightStyle="solid";
$1.MozBorderRightColors=this.__colorRight+" "+this.__colorInnerRight;
}else{$1.borderRightStyle=this.getStyleRight()||"none";
$1.MozBorderRightColors="";
}},
"default":function($0){var $1=$0._style;
var $2=$0._innerStyle;
if(this.__complexRight){if(!$2){$0.prepareEnhancedBorder();
$2=$0._innerStyle;
}$1.borderRightWidth=$2.borderRightWidth="1px";
$1.borderRightStyle=$2.borderRightStyle="solid";
$1.borderRightColor=this.__colorRight;
$2.borderRightColor=this.__colorInnerRight;
}else{$1.borderRightWidth=this.__widthRight||"0px";
$1.borderRightStyle=this.getStyleRight()||"none";
$1.borderRightColor=this.__colorRight||"";
if($2){$2.borderRightWidth=$2.borderRightStyle=$2.borderRightColor="";
}}}}),
renderBottom:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
$1.borderBottomWidth=this.__widthBottom||"0px";
$1.borderBottomColor=this.__colorBottom||"";
if(this.__complexBottom){$1.borderBottomStyle="solid";
$1.MozBorderBottomColors=this.__colorBottom+" "+this.__colorInnerBottom;
}else{$1.borderBottomStyle=this.getStyleBottom()||"none";
$1.MozBorderBottomColors="";
}},
"default":function($0){var $1=$0._style;
var $2=$0._innerStyle;
if(this.__complexBottom){if(!$2){$0.prepareEnhancedBorder();
$2=$0._innerStyle;
}$1.borderBottomWidth=$2.borderBottomWidth="1px";
$1.borderBottomStyle=$2.borderBottomStyle="solid";
$1.borderBottomColor=this.__colorBottom;
$2.borderBottomColor=this.__colorInnerBottom;
}else{$1.borderBottomWidth=this.__widthBottom||"0px";
$1.borderBottomStyle=this.getStyleBottom()||"none";
$1.borderBottomColor=this.__colorBottom||"";
if($2){$2.borderBottomWidth=$2.borderBottomStyle=$2.borderBottomColor="";
}}}}),
renderLeft:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0._style;
$1.borderLeftWidth=this.__widthLeft||"0px";
$1.borderLeftColor=this.__colorLeft||"";
if(this.__complexLeft){$1.borderLeftStyle="solid";
$1.MozBorderLeftColors=this.__colorLeft+" "+this.__colorInnerLeft;
}else{$1.borderLeftStyle=this.getStyleLeft()||"none";
$1.MozBorderLeftColors="";
}},
"default":function($0){var $1=$0._style;
var $2=$0._innerStyle;
if(this.__complexLeft){if(!$2){$0.prepareEnhancedBorder();
$2=$0._innerStyle;
}$1.borderLeftWidth=$2.borderLeftWidth="1px";
$1.borderLeftStyle=$2.borderLeftStyle="solid";
$1.borderLeftColor=this.__colorLeft;
$2.borderLeftColor=this.__colorInnerLeft;
}else{$1.borderLeftWidth=this.__widthLeft||"0px";
$1.borderLeftStyle=this.getStyleLeft()||"none";
$1.borderLeftColor=this.__colorLeft||"";
if($2){$2.borderLeftWidth=$2.borderLeftStyle=$2.borderLeftColor="";
}}}})}});




/* ID: qx.theme.manager.Font */
qx.Class.define("qx.theme.manager.Font",
{type:"singleton",
extend:qx.util.manager.Value,
properties:{fontTheme:{check:"Theme",
nullable:true,
apply:"_applyFontTheme",
event:"changeFontTheme"}},
members:{resolveDynamic:function($0){return $0 instanceof qx.ui.core.Font?$0:this._dynamic[$0];
},
isDynamic:function($0){return $0&&($0 instanceof qx.ui.core.Font||this._dynamic[$0]!==undefined);
},
syncFontTheme:function(){this._updateObjects();
},
_applyFontTheme:function($0){var $1=this._dynamic;
for(var $2 in $1){if($1[$2].themed){$1[$2].dispose();
delete $1[$2];
}}
if($0){var $3=$0.fonts;
var $4=qx.ui.core.Font;
for(var $2 in $3){$1[$2]=(new $4).set($3[$2]);
$1[$2].themed=true;
}}
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncFontTheme();
}}}});




/* ID: qx.ui.core.Font */
qx.Class.define("qx.ui.core.Font",
{extend:qx.core.Object,
construct:function($0,
$1){arguments.callee.base.call(this);
if($0!==undefined){this.setSize($0);
}
if($1!==undefined){this.setFamily($1);
}},
statics:{fromString:function($0){var $1=new qx.ui.core.Font;
var $2=$0.split(/\s+/);
var $3=[];
var $4;
for(var $5=0;$5<$2.length;$5++){switch($4=$2[$5]){case "bold":$1.setBold(true);
break;
case "italic":$1.setItalic(true);
break;
case "underline":$1.setDecoration("underline");
break;
default:var $6=parseInt($4);
if($6==$4||qx.lang.String.contains($4,
"px")){$1.setSize($6);
}else{$3.push($4);
}break;
}}
if($3.length>0){$1.setFamily($3);
}return $1;
},
fromConfig:function($0){var $1=new qx.ui.core.Font;
$1.set($0);
return $1;
},
reset:function($0){$0.removeStyleProperty("fontFamily");
$0.removeStyleProperty("fontSize");
$0.removeStyleProperty("fontWeight");
$0.removeStyleProperty("fontStyle");
$0.removeStyleProperty("textDecoration");
},
resetElement:function($0){var $1=$0.style;
$1.fontFamily="";
$1.fontSize="";
$1.fontWeight="";
$1.fontStyle="";
$1.textDecoration="";
},
resetStyle:function($0){$0.fontFamily="";
$0.fontSize="";
$0.fontWeight="";
$0.fontStyle="";
$0.textDecoration="";
}},
properties:{size:{check:"Integer",
nullable:true,
apply:"_applySize"},
family:{check:"Array",
nullable:true,
apply:"_applyFamily"},
bold:{check:"Boolean",
nullable:true,
apply:"_applyBold"},
italic:{check:"Boolean",
nullable:true,
apply:"_applyItalic"},
decoration:{check:["underline",
"line-through",
"overline"],
nullable:true,
apply:"_applyDecoration"}},
members:{__size:null,
__family:null,
__bold:null,
__italic:null,
__decoration:null,
_applySize:function($0,
$1){this.__size=$0===null?null:$0+"px";
},
_applyFamily:function($0,
$1){var $2="";
for(var $3=0,
$4=$0.length;$3<$4;$3++){if($0[$3].indexOf(" ")>0){$2+='"'+$0[$3]+'"';
}else{$2+=$0[$3];
}
if($3!=$4-1){$2+=",";
}}this.__family=$2;
},
_applyBold:function($0,
$1){this.__bold=$0===null?null:$0?"bold":"normal";
},
_applyItalic:function($0,
$1){this.__italic=$0===null?null:$0?"italic":"normal";
},
_applyDecoration:function($0,
$1){this.__decoration=$0===null?null:$0;
},
render:function($0){$0.setStyleProperty("fontFamily",
this.__family);
$0.setStyleProperty("fontSize",
this.__size);
$0.setStyleProperty("fontWeight",
this.__bold);
$0.setStyleProperty("fontStyle",
this.__italic);
$0.setStyleProperty("textDecoration",
this.__decoration);
},
renderStyle:function($0){$0.fontFamily=this.__family||"";
$0.fontSize=this.__size||"";
$0.fontWeight=this.__bold||"";
$0.fontStyle=this.__italic||"";
$0.textDecoration=this.__decoration||"";
},
renderElement:function($0){var $1=$0.style;
$1.fontFamily=this.__family||"";
$1.fontSize=this.__size||"";
$1.fontWeight=this.__bold||"";
$1.fontStyle=this.__italic||"";
$1.textDecoration=this.__decoration||"";
},
generateStyle:function(){return (this.__family?"font-family:"+this.__family.replace(/\"/g,
"'")+";":"")+(this.__size?"font-size:"+this.__size+";":"")+(this.__weight?"font-weight:"+this.__weight+";":"")+(this.__style?"font-style:"+this.__style+";":"")+(this.__decoration?"text-decoration:"+this.__decoration+";":"");
}}});




/* ID: qx.theme.manager.Icon */
qx.Class.define("qx.theme.manager.Icon",
{type:"singleton",
extend:qx.core.Target,
properties:{iconTheme:{check:"Theme",
nullable:true,
apply:"_applyIconTheme",
event:"changeIconTheme"}},
members:{_applyIconTheme:function($0,
$1){if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncIconTheme();
}},
syncIconTheme:function(){var $0=this.getIconTheme();
var $1=qx.io.Alias.getInstance();
$0?$1.add("icon",
$0.icons.uri):$1.remove("icon");
}}});




/* ID: qx.theme.manager.Widget */
qx.Class.define("qx.theme.manager.Widget",
{type:"singleton",
extend:qx.core.Target,
properties:{widgetTheme:{check:"Theme",
nullable:true,
apply:"_applyWidgetTheme",
event:"changeWidgetTheme"}},
members:{_applyWidgetTheme:function($0,
$1){if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncWidgetTheme();
}},
syncWidgetTheme:function(){var $0=this.getWidgetTheme();
var $1=qx.io.Alias.getInstance();
$0?$1.add("widget",
$0.widgets.uri):$1.remove("widget");
}}});




/* ID: qx.event.handler.FocusHandler */
qx.Class.define("qx.event.handler.FocusHandler",
{extend:qx.core.Target,
construct:function($0){arguments.callee.base.call(this);
if($0!=null){this._attachedWidget=$0;
}},
statics:{mouseFocus:false},
members:{getAttachedWidget:function(){return this._attachedWidget;
},
_onkeyevent:function($0,
$1){if($1.getKeyIdentifier()!="Tab"){return;
}$1.stopPropagation();
$1.preventDefault();
qx.event.handler.FocusHandler.mouseFocus=false;
var $2=this.getAttachedWidget().getFocusedChild();
if(!$1.isShiftPressed()){var $3=$2?this.getWidgetAfter($0,
$2):this.getFirstWidget($0);
}else{var $3=$2?this.getWidgetBefore($0,
$2):this.getLastWidget($0);
}if($3){$3.setFocused(true);
$3._ontabfocus();
}},
compareTabOrder:function($0,
$1){if($0==$1){return 0;
}var $2=$0.getTabIndex();
var $3=$1.getTabIndex();
if($2!=$3){return $2-$3;
}var $4=qx.html.Location.getPageBoxTop($0.getElement());
var $5=qx.html.Location.getPageBoxTop($1.getElement());
if($4!=$5){return $4-$5;
}var $6=qx.html.Location.getPageBoxLeft($0.getElement());
var $7=qx.html.Location.getPageBoxLeft($1.getElement());
if($6!=$7){return $6-$7;
}var $8=$0.getZIndex();
var $9=$1.getZIndex();
if($8!=$9){return $8-$9;
}return 0;
},
getFirstWidget:function($0){return this._getFirst($0,
null);
},
getLastWidget:function($0){return this._getLast($0,
null);
},
getWidgetAfter:function($0,
$1){if($0==$1){return this.getFirstWidget($0);
}
if($1.getAnonymous()){$1=$1.getParent();
}
if($1==null){return [];
}var $2=[];
this._getAllAfter($0,
$1,
$2);
$2.sort(this.compareTabOrder);
return $2.length>0?$2[0]:this.getFirstWidget($0);
},
getWidgetBefore:function($0,
$1){if($0==$1){return this.getLastWidget($0);
}
if($1.getAnonymous()){$1=$1.getParent();
}
if($1==null){return [];
}var $2=[];
this._getAllBefore($0,
$1,
$2);
$2.sort(this.compareTabOrder);
var $3=$2.length;
return $3>0?$2[$3-1]:this.getLastWidget($0);
},
_getAllAfter:function($0,
$1,
$2){var $3=$0.getChildren();
var $4;
var $5=$3.length;
for(var $6=0;$6<$5;$6++){$4=$3[$6];
if(!($4 instanceof qx.ui.core.Parent)&&!($4 instanceof qx.ui.basic.Terminator)){continue;
}
if($4.isFocusable()&&$4.getTabIndex()>0&&this.compareTabOrder($1,
$4)<0){$2.push($3[$6]);
}
if(!$4.isFocusRoot()&&$4 instanceof qx.ui.core.Parent){this._getAllAfter($4,
$1,
$2);
}}},
_getAllBefore:function($0,
$1,
$2){var $3=$0.getChildren();
var $4;
var $5=$3.length;
for(var $6=0;$6<$5;$6++){$4=$3[$6];
if(!($4 instanceof qx.ui.core.Parent)&&!($4 instanceof qx.ui.basic.Terminator)){continue;
}
if($4.isFocusable()&&$4.getTabIndex()>0&&this.compareTabOrder($1,
$4)>0){$2.push($4);
}
if(!$4.isFocusRoot()&&$4 instanceof qx.ui.core.Parent){this._getAllBefore($4,
$1,
$2);
}}},
_getFirst:function($0,
$1){var $2=$0.getChildren();
var $3;
var $4=$2.length;
for(var $5=0;$5<$4;$5++){$3=$2[$5];
if(!($3 instanceof qx.ui.core.Parent)&&!($3 instanceof qx.ui.basic.Terminator)){continue;
}
if($3.isFocusable()&&$3.getTabIndex()>0){if($1==null||this.compareTabOrder($3,
$1)<0){$1=$3;
}}
if(!$3.isFocusRoot()&&$3 instanceof qx.ui.core.Parent){$1=this._getFirst($3,
$1);
}}return $1;
},
_getLast:function($0,
$1){var $2=$0.getChildren();
var $3;
var $4=$2.length;
for(var $5=0;$5<$4;$5++){$3=$2[$5];
if(!($3 instanceof qx.ui.core.Parent)&&!($3 instanceof qx.ui.basic.Terminator)){continue;
}
if($3.isFocusable()&&$3.getTabIndex()>0){if($1==null||this.compareTabOrder($3,
$1)>0){$1=$3;
}}
if(!$3.isFocusRoot()&&$3 instanceof qx.ui.core.Parent){$1=this._getLast($3,
$1);
}}return $1;
}},
destruct:function(){this._disposeFields("_attachedWidget");
}});




/* ID: qx.html.Location */
qx.Class.define("qx.html.Location",
{statics:{getPageOuterLeft:function($0){return qx.html.Location.getPageBoxLeft($0)-qx.html.Style.getMarginLeft($0);
},
getPageOuterTop:function($0){return qx.html.Location.getPageBoxTop($0)-qx.html.Style.getMarginTop($0);
},
getPageOuterRight:function($0){return qx.html.Location.getPageBoxRight($0)+qx.html.Style.getMarginRight($0);
},
getPageOuterBottom:function($0){return qx.html.Location.getPageBoxBottom($0)+qx.html.Style.getMarginBottom($0);
},
getClientOuterLeft:function($0){return qx.html.Location.getClientBoxLeft($0)-qx.html.Style.getMarginLeft($0);
},
getClientOuterTop:function($0){return qx.html.Location.getClientBoxTop($0)-qx.html.Style.getMarginTop($0);
},
getClientOuterRight:function($0){return qx.html.Location.getClientBoxRight($0)+qx.html.Style.getMarginRight($0);
},
getClientOuterBottom:function($0){return qx.html.Location.getClientBoxBottom($0)+qx.html.Style.getMarginBottom($0);
},
getClientBoxLeft:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.getBoundingClientRect().left;
},
"gecko":function($0){return qx.html.Location.getClientAreaLeft($0)-qx.html.Style.getBorderLeft($0);
},
"default":function($0){var $1=$0.offsetLeft;
while($0.tagName.toLowerCase()!="body"){$0=$0.offsetParent;
$1+=$0.offsetLeft-$0.scrollLeft;
}return $1;
}}),
getClientBoxTop:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.getBoundingClientRect().top;
},
"gecko":function($0){return qx.html.Location.getClientAreaTop($0)-qx.html.Style.getBorderTop($0);
},
"default":function($0){var $1=$0.offsetTop;
while($0.tagName.toLowerCase()!="body"){$0=$0.offsetParent;
$1+=$0.offsetTop-$0.scrollTop;
}return $1;
}}),
getClientBoxRight:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.getBoundingClientRect().right;
},
"default":function($0){return qx.html.Location.getClientBoxLeft($0)+qx.html.Dimension.getBoxWidth($0);
}}),
getClientBoxBottom:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.getBoundingClientRect().bottom;
},
"default":function($0){return qx.html.Location.getClientBoxTop($0)+qx.html.Dimension.getBoxHeight($0);
}}),
getPageBoxLeft:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return qx.html.Location.getClientBoxLeft($0)+qx.html.Scroll.getLeftSum($0);
},
"gecko":function($0){return qx.html.Location.getPageAreaLeft($0)-qx.html.Style.getBorderLeft($0);
},
"default":function($0){var $1=$0.offsetLeft;
while($0.tagName.toLowerCase()!="body"){$0=$0.offsetParent;
$1+=$0.offsetLeft;
}return $1;
}}),
getPageBoxTop:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return qx.html.Location.getClientBoxTop($0)+qx.html.Scroll.getTopSum($0);
},
"gecko":function($0){return qx.html.Location.getPageAreaTop($0)-qx.html.Style.getBorderTop($0);
},
"default":function($0){var $1=$0.offsetTop;
while($0.tagName.toLowerCase()!="body"){$0=$0.offsetParent;
$1+=$0.offsetTop;
}return $1;
}}),
getPageBoxRight:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return qx.html.Location.getClientBoxRight($0)+qx.html.Scroll.getLeftSum($0);
},
"default":function($0){return qx.html.Location.getPageBoxLeft($0)+qx.html.Dimension.getBoxWidth($0);
}}),
getPageBoxBottom:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return qx.html.Location.getClientBoxBottom($0)+qx.html.Scroll.getTopSum($0);
},
"default":function($0){return qx.html.Location.getPageBoxTop($0)+qx.html.Dimension.getBoxHeight($0);
}}),
getClientAreaLeft:qx.core.Variant.select("qx.client",
{"gecko":function($0){return qx.html.Location.getPageAreaLeft($0)-qx.html.Scroll.getLeftSum($0);
},
"default":function($0){return qx.html.Location.getClientBoxLeft($0)+qx.html.Style.getBorderLeft($0);
}}),
getClientAreaTop:qx.core.Variant.select("qx.client",
{"gecko":function($0){return qx.html.Location.getPageAreaTop($0)-qx.html.Scroll.getTopSum($0);
},
"default":function($0){return qx.html.Location.getClientBoxTop($0)+qx.html.Style.getBorderTop($0);
}}),
getClientAreaRight:function($0){return qx.html.Location.getClientAreaLeft($0)+qx.html.Dimension.getAreaWidth($0);
},
getClientAreaBottom:function($0){return qx.html.Location.getClientAreaTop($0)+qx.html.Dimension.getAreaHeight($0);
},
getPageAreaLeft:qx.core.Variant.select("qx.client",
{"gecko":function($0){return $0.ownerDocument.getBoxObjectFor($0).x;
},
"default":function($0){return qx.html.Location.getPageBoxLeft($0)+qx.html.Style.getBorderLeft($0);
}}),
getPageAreaTop:qx.core.Variant.select("qx.client",
{"gecko":function($0){return $0.ownerDocument.getBoxObjectFor($0).y;
},
"default":function($0){return qx.html.Location.getPageBoxTop($0)+qx.html.Style.getBorderTop($0);
}}),
getPageAreaRight:function($0){return qx.html.Location.getPageAreaLeft($0)+qx.html.Dimension.getAreaWidth($0);
},
getPageAreaBottom:function($0){return qx.html.Location.getPageAreaTop($0)+qx.html.Dimension.getAreaHeight($0);
},
getClientInnerLeft:function($0){return qx.html.Location.getClientAreaLeft($0)+qx.html.Style.getPaddingLeft($0);
},
getClientInnerTop:function($0){return qx.html.Location.getClientAreaTop($0)+qx.html.Style.getPaddingTop($0);
},
getClientInnerRight:function($0){return qx.html.Location.getClientInnerLeft($0)+qx.html.Dimension.getInnerWidth($0);
},
getClientInnerBottom:function($0){return qx.html.Location.getClientInnerTop($0)+qx.html.Dimension.getInnerHeight($0);
},
getPageInnerLeft:function($0){return qx.html.Location.getPageAreaLeft($0)+qx.html.Style.getPaddingLeft($0);
},
getPageInnerTop:function($0){return qx.html.Location.getPageAreaTop($0)+qx.html.Style.getPaddingTop($0);
},
getPageInnerRight:function($0){return qx.html.Location.getPageInnerLeft($0)+qx.html.Dimension.getInnerWidth($0);
},
getPageInnerBottom:function($0){return qx.html.Location.getPageInnerTop($0)+qx.html.Dimension.getInnerHeight($0);
},
getScreenBoxLeft:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=0;
var $2=$0.parentNode;
while($2.nodeType==1){$1+=$2.scrollLeft;
$2=$2.parentNode;
}return $0.ownerDocument.getBoxObjectFor($0).screenX-$1;
},
"default":function($0){return qx.html.Location.getScreenDocumentLeft($0)+qx.html.Location.getPageBoxLeft($0);
}}),
getScreenBoxTop:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=0;
var $2=$0.parentNode;
while($2.nodeType==1){$1+=$2.scrollTop;
$2=$2.parentNode;
}return $0.ownerDocument.getBoxObjectFor($0).screenY-$1;
},
"default":function($0){return qx.html.Location.getScreenDocumentTop($0)+qx.html.Location.getPageBoxTop($0);
}}),
getScreenBoxRight:function($0){return qx.html.Location.getScreenBoxLeft($0)+qx.html.Dimension.getBoxWidth($0);
},
getScreenBoxBottom:function($0){return qx.html.Location.getScreenBoxTop($0)+qx.html.Dimension.getBoxHeight($0);
},
getScreenOuterLeft:function($0){return qx.html.Location.getScreenBoxLeft($0)-qx.html.Style.getMarginLeft($0);
},
getScreenOuterTop:function($0){return qx.html.Location.getScreenBoxTop($0)-qx.html.Style.getMarginTop($0);
},
getScreenOuterRight:function($0){return qx.html.Location.getScreenBoxRight($0)+qx.html.Style.getMarginRight($0);
},
getScreenOuterBottom:function($0){return qx.html.Location.getScreenBoxBottom($0)+qx.html.Style.getMarginBottom($0);
},
getScreenAreaLeft:function($0){return qx.html.Location.getScreenBoxLeft($0)+qx.html.Dimension.getInsetLeft($0);
},
getScreenAreaTop:function($0){return qx.html.Location.getScreenBoxTop($0)+qx.html.Dimension.getInsetTop($0);
},
getScreenAreaRight:function($0){return qx.html.Location.getScreenBoxRight($0)-qx.html.Dimension.getInsetRight($0);
},
getScreenAreaBottom:function($0){return qx.html.Location.getScreenBoxBottom($0)-qx.html.Dimension.getInsetBottom($0);
},
getScreenInnerLeft:function($0){return qx.html.Location.getScreenAreaLeft($0)+qx.html.Style.getPaddingLeft($0);
},
getScreenInnerTop:function($0){return qx.html.Location.getScreenAreaTop($0)+qx.html.Style.getPaddingTop($0);
},
getScreenInnerRight:function($0){return qx.html.Location.getScreenAreaRight($0)-qx.html.Style.getPaddingRight($0);
},
getScreenInnerBottom:function($0){return qx.html.Location.getScreenAreaBottom($0)-qx.html.Style.getPaddingBottom($0);
},
getScreenDocumentLeft:qx.core.Variant.select("qx.client",
{"gecko":function($0){return qx.html.Location.getScreenOuterLeft($0.ownerDocument.body);
},
"default":function($0){return $0.document.parentWindow.screenLeft;
}}),
getScreenDocumentTop:qx.core.Variant.select("qx.client",
{"gecko":function($0){return qx.html.Location.getScreenOuterTop($0.ownerDocument.body);
},
"default":function($0){return $0.document.parentWindow.screenTop;
}}),
getScreenDocumentRight:qx.core.Variant.select("qx.client",
{"gecko":function($0){return qx.html.Location.getScreenOuterRight($0.ownerDocument.body);
},
"default":function($0){}}),
getScreenDocumentBottom:qx.core.Variant.select("qx.client",
{"gecko":function($0){return qx.html.Location.getScreenOuterBottom($0.ownerDocument.body);
},
"default":function($0){}})}});




/* ID: qx.html.Scroll */
qx.Class.define("qx.html.Scroll",
{statics:{getLeftSum:function($0){var $1=0;
var $2=$0.parentNode;
while($2.nodeType==1){$1+=$2.scrollLeft;
$2=$2.parentNode;
}return $1;
},
getTopSum:function($0){var $1=0;
var $2=$0.parentNode;
while($2.nodeType==1){$1+=$2.scrollTop;
$2=$2.parentNode;
}return $1;
}}});




/* ID: qx.io.image.Manager */
qx.Class.define("qx.io.image.Manager",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this.__visible={};
this.__all={};
},
members:{add:function($0){var $1=this.__all;
if($1[$0]===undefined){$1[$0]=1;
}else{$1[$0]++;
}},
remove:function($0){var $1=this.__all;
if($1[$0]!==undefined){$1[$0]--;
}
if($1[$0]<=0){delete $1[$0];
}},
show:function($0){var $1=this.__visible;
if($1[$0]===undefined){$1[$0]=1;
}else{$1[$0]++;
}},
hide:function($0){var $1=this.__visible;
if($1[$0]!==undefined){$1[$0]--;
}
if($1[$0]<=0){delete $1[$0];
}},
getVisibleImages:function(){var $0=this.__visible;
var $1={};
for(var $2 in $0){if($0[$2]>0){$1[$2]=true;
}}return $1;
},
getHiddenImages:function(){var $0=this.__visible;
var $1=this.__all;
var $2={};
for(var $3 in $1){if($0[$3]===undefined){$2[$3]=true;
}}return $2;
}},
destruct:function(){this._disposeFields("__all",
"__visible");
}});




/* ID: qx.html.Offset */
qx.Class.define("qx.html.Offset",
{statics:{getLeft:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0.offsetLeft;
var $2=$0.parentNode;
var $3=qx.html.Style.getStyleProperty($0,
"position");
var $4=qx.html.Style.getStyleProperty($2,
"position");
if($3!="absolute"&&$3!="fixed"){$1-=qx.html.Style.getBorderLeft($2);
}if($4!="absolute"&&$4!="fixed"){while($2){$2=$2.parentNode;
if(!$2||typeof $2.tagName!=="string"){break;
}var $5=qx.html.Style.getStyleProperty($2,
"position");
if($5=="absolute"||$5=="fixed"){$1-=qx.html.Style.getBorderLeft($2)+qx.html.Style.getPaddingLeft($2);
break;
}}}return $1;
},
"default":function($0){return $0.offsetLeft;
}}),
getTop:qx.core.Variant.select("qx.client",
{"gecko":function($0){var $1=$0.offsetTop;
var $2=$0.parentNode;
var $3=qx.html.Style.getStyleProperty($0,
"position");
var $4=qx.html.Style.getStyleProperty($2,
"position");
if($3!="absolute"&&$3!="fixed"){$1-=qx.html.Style.getBorderTop($2);
}if($4!="absolute"&&$4!="fixed"){while($2){$2=$2.parentNode;
if(!$2||typeof $2.tagName!=="string"){break;
}var $5=qx.html.Style.getStyleProperty($2,
"position");
if($5=="absolute"||$5=="fixed"){$1-=qx.html.Style.getBorderTop($2)+qx.html.Style.getPaddingTop($2);
break;
}}}return $1;
},
"default":function($0){return $0.offsetTop;
}})}});




/* ID: qx.html.ScrollIntoView */
qx.Class.define("qx.html.ScrollIntoView",
{statics:{scrollX:function($0,
$1){var $2,
$3,
$4,
$5;
var $6=$0.parentNode;
var $7=$0.offsetLeft;
var $4=$0.offsetWidth;
while($6){switch(qx.html.Style.getStyleProperty($6,
"overflow")){case "scroll":case "auto":case "-moz-scrollbars-horizontal":$5=true;
break;
default:switch(qx.html.Style.getStyleProperty($6,
"overflowX")){case "scroll":case "auto":$5=true;
break;
default:$5=false;
}}
if($5){$2=$6.clientWidth;
$3=$6.scrollLeft;
if($1){$6.scrollLeft=$7;
}else if($1==false){$6.scrollLeft=$7+$4-$2;
}else if($4>$2||$7<$3){$6.scrollLeft=$7;
}else if(($7+$4)>($3+$2)){$6.scrollLeft=$7+$4-$2;
}$7=$6.offsetLeft;
$4=$6.offsetWidth;
}else{$7+=$6.offsetLeft;
}
if($6.tagName.toLowerCase()=="body"){break;
}$6=$6.offsetParent;
}return true;
},
scrollY:function($0,
$1){var $2,
$3,
$4,
$5;
var $6=$0.parentNode;
var $7=$0.offsetTop;
var $4=$0.offsetHeight;
while($6){switch(qx.html.Style.getStyleProperty($6,
"overflow")){case "scroll":case "auto":case "-moz-scrollbars-vertical":$5=true;
break;
default:switch(qx.html.Style.getStyleProperty($6,
"overflowY")){case "scroll":case "auto":$5=true;
break;
default:$5=false;
}}
if($5){$2=$6.clientHeight;
$3=$6.scrollTop;
if($1){$6.scrollTop=$7;
}else if($1==false){$6.scrollTop=$7+$4-$2;
}else if($4>$2||$7<$3){$6.scrollTop=$7;
}else if(($7+$4)>($3+$2)){$6.scrollTop=$7+$4-$2;
}$7=$6.offsetTop;
$4=$6.offsetHeight;
}else{$7+=$6.offsetTop;
}
if($6.tagName.toLowerCase()=="body"){break;
}$6=$6.offsetParent;
}return true;
}}});




/* ID: qx.io.image.PreloaderSystem */
qx.Class.define("qx.io.image.PreloaderSystem",
{extend:qx.core.Target,
construct:function($0,
$1,
$2){arguments.callee.base.call(this);
if($0 instanceof Array){this._list=qx.lang.Object.fromArray($0);
}else{this._list=$0;
}this._timer=new qx.client.Timer(qx.core.Setting.get("qx.preloaderTimeout"));
this._timer.addEventListener("interval",
this.__oninterval,
this);
if($1){this.addEventListener("completed",
$1,
$2||null);
}},
events:{"completed":"qx.event.type.Event"},
members:{_stopped:false,
start:function(){if(qx.lang.Object.isEmpty(this._list)){this.createDispatchEvent("completed");
return;
}
for(var $0 in this._list){var $1=qx.io.image.PreloaderManager.getInstance().create(qx.io.Alias.getInstance().resolve($0));
if($1.isErroneous()||$1.isLoaded()){delete this._list[$0];
}else{$1._origSource=$0;
$1.addEventListener("load",
this.__onload,
this);
$1.addEventListener("error",
this.__onerror,
this);
}}this._check();
},
__onload:function($0){if(this.getDisposed()){return;
}delete this._list[$0.getTarget()._origSource];
this._check();
},
__onerror:function($0){if(this.getDisposed()){return;
}delete this._list[$0.getTarget()._origSource];
this._check();
},
__oninterval:function($0){this.debug("Cannot preload: "+qx.lang.Object.getKeysAsString(this._list));
this._stopped=true;
this._timer.stop();
this.createDispatchEvent("completed");
},
_check:function(){if(this._stopped){return;
}if(qx.lang.Object.isEmpty(this._list)){this._timer.stop();
this.createDispatchEvent("completed");
}else{this._timer.restart();
}}},
settings:{"qx.preloaderTimeout":3000},
destruct:function(){if(this._timer){this._timer.removeEventListener("interval",
this.__oninterval,
this);
this._disposeObjects("_timer");
}this._disposeFields("_list");
}});




/* ID: qx.io.image.PreloaderManager */
qx.Class.define("qx.io.image.PreloaderManager",
{type:"singleton",
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._objects={};
},
members:{add:function($0){this._objects[$0.getUri()]=$0;
},
remove:function($0){delete this._objects[$0.getUri()];
},
has:function($0){return this._objects[$0]!=null;
},
get:function($0){return this._objects[$0];
},
create:function($0){if(this._objects[$0]){return this._objects[$0];
}return new qx.io.image.Preloader($0);
}},
destruct:function(){this._disposeFields("_objects");
}});




/* ID: qx.io.image.Preloader */
qx.Class.define("qx.io.image.Preloader",
{extend:qx.core.Target,
events:{"load":"qx.event.type.Event",
"error":"qx.event.type.Event"},
construct:function($0){if(qx.io.image.PreloaderManager.getInstance().has($0)){this.debug("Reuse qx.io.image.Preloader in old-style!");
this.debug("Please use qx.io.image.PreloaderManager.getInstance().create(source) instead!");
return qx.io.image.PreloaderManager.getInstance().get($0);
}arguments.callee.base.call(this);
this._element=new Image;
this._element.onload=qx.lang.Function.bind(this.__onload,
this);
this._element.onerror=qx.lang.Function.bind(this.__onerror,
this);
this._source=$0;
this._element.src=$0;
if(qx.core.Variant.isSet("qx.client",
"mshtml")){this._isPng=/\.png$/i.test(this._element.nameProp);
}qx.io.image.PreloaderManager.getInstance().add(this);
},
members:{_source:null,
_isLoaded:false,
_isErroneous:false,
getUri:function(){return this._source;
},
getSource:function(){return this._source;
},
isLoaded:function(){return this._isLoaded;
},
isErroneous:function(){return this._isErroneous;
},
_isPng:false,
getIsPng:function(){return this._isPng;
},
getWidth:qx.core.Variant.select("qx.client",
{"gecko":function(){return this._element.naturalWidth;
},
"default":function(){return this._element.width;
}}),
getHeight:qx.core.Variant.select("qx.client",
{"gecko":function(){return this._element.naturalHeight;
},
"default":function(){return this._element.height;
}}),
__onload:function(){if(this._isLoaded||this._isErroneous){return;
}this._isLoaded=true;
this._isErroneous=false;
if(this.hasEventListeners("load")){this.dispatchEvent(new qx.event.type.Event("load"),
true);
}},
__onerror:function(){if(this._isLoaded||this._isErroneous){return;
}this.debug("Could not load: "+this._source);
this._isLoaded=false;
this._isErroneous=true;
if(this.hasEventListeners("error")){this.dispatchEvent(new qx.event.type.Event("error"),
true);
}}},
destruct:function(){if(this._element){this._element.onload=this._element.onerror=null;
}this._disposeFields("_element",
"_isLoaded",
"_isErroneous",
"_isPng");
}});




/* ID: spagobi.app.Chiron */
qx.Class.define("spagobi.app.Chiron",
{extend:qx.application.Gui,
members:{toolbars:[],
selectToolbarName:undefined,
pages:[],
selectPageName:undefined,
mainPane:{},
main:function(){arguments.callee.base.call(this);
qx.io.Alias.getInstance().add("spagobi",
qx.core.Setting.get("spagobi.resourceUri"));
qx.html.StyleSheet.includeFile(qx.io.Alias.getInstance().resolve("spagobi/css/reader.css"));
qx.io.remote.RequestQueue.getInstance().setMaxConcurrentRequests(10);
var $0=this._createLayout();
var $1=qx.core.Setting.get("spagobi.executionMode");
if($1&&$1==='portal'){var $2=qx.ui.core.ClientDocument.getInstance();
var $3=new qx.ui.basic.Inline("myInlineWidget");
$3.setHeight("70%");
$3.setWidth("100%");
$2.add($3);
$3.add($0);
}else{$0.addToDocument();
var $2=qx.ui.core.ClientDocument.getInstance();
}this._selectToolbar('resources');
},
_createLayout:function(){var $0=new qx.ui.layout.DockLayout();
$0.setEdge(0);
$0.setBackgroundColor('white');
this._headerView=new spagobi.app.ui.Header();
$0.addTop(this._headerView);
this._toolBarView=new spagobi.ui.ToolBar([{command:'Control+Q',
handler:function(){this._selectToolbar('resources');
},
context:this,
"label":'Resources',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.',
defaultbutton:true},
{command:'Control+W',
handler:function(){this._selectToolbar('catalogues');
},
context:this,
"label":'Catalogues',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'},
{command:'Control+E',
handler:function(){this._selectToolbar('behaviouralModel');
},
context:this,
"label":'Behavioural Model',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'},
{command:'Control+R',
handler:function(){this._selectToolbar('analyticalModel');
},
context:this,
"label":'Analytical Model',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'},
{command:'Control+T',
handler:function(){this._selectToolbar('adminDistributionList');
},
context:this,
"label":'Admin Distribution List',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'},
{command:'Control+Y',
handler:function(){this._selectToolbar('functionality');
},
context:this,
"label":'Functionality',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'},
{command:'Control+U',
handler:function(){this._selectToolbar('events');
},
context:this,
"label":'Events',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'},
{command:'Control+I',
handler:function(){this._selectToolbar('tools');
},
context:this,
"label":'Tools',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'},
{command:'Control+O',
handler:function(){this._selectToolbar('hotLinks');
},
context:this,
"label":'Hot Links',
icon:'icon/16/actions/dialog-ok.png',
tooltip:'Reload the feeds.'}]);
$0.addTop(this._toolBarView);
this.toolbars['resources']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'engine',
image:'spagobi/img/spagobi/test/engineAdministrationIcon.png',
page:'engine',
tooltip:'Engines'},
{name:'datasource',
image:'spagobi/img/spagobi/test/datasourceAdministrationIcon.png',
page:'datasource',
tooltip:'Datasources'},
{name:'dataset',
image:'spagobi/img/spagobi/test/datasetAdministrationIcon.png',
page:'dataset',
tooltip:'Dataset'}]},
defaultSelectedPage:'engine'});
$0.add(this.toolbars['resources']);
this.toolbars['resources'].setLiveResize(true);
this.toolbars['resources'].setVisibility(false);
this.toolbars['catalogues']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'mapmgmt',
image:'spagobi/img/spagobi/test/mapManagementIcon.png',
page:'mapmgmt',
tooltip:'Maps'},
{name:'featuremgmt',
image:'spagobi/img/spagobi/test/featureManagementIcon.png',
page:'featuremgmt',
tooltip:'Features'}]},
defaultSelectedPage:'mapmgmt'});
$0.add(this.toolbars['catalogues']);
this.toolbars['catalogues'].setLiveResize(true);
this.toolbars['catalogues'].setVisibility(false);
this.toolbars['behaviouralModel']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'lov',
image:'spagobi/img/spagobi/test/lovManagementIcon.png',
page:'lov',
tooltip:' Predefined List of Values'},
{name:'constraints',
image:'spagobi/img/spagobi/test/constraintManagementIcon.png',
page:'constraints',
tooltip:'Predefined Values Constraints'},
{name:'parameters',
image:'spagobi/img/spagobi/test/parameterManagementIcon.png',
page:'parameters',
tooltip:'Analytical Drivers Management'}]},
defaultSelectedPage:'lov'});
$0.add(this.toolbars['behaviouralModel']);
this.toolbars['behaviouralModel'].setLiveResize(true);
this.toolbars['behaviouralModel'].setVisibility(false);
this.toolbars['analyticalModel']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'funcManagement',
image:'spagobi/img/spagobi/test/folderAdministrationIcon.png',
page:'funcManagement',
tooltip:'Functionalities Management'},
{name:'configuration',
image:'spagobi/img/spagobi/test/objectAdministrationIcon.png',
page:'configuration',
tooltip:'Documents Configuration'}]},
defaultSelectedPage:'funcManagement'});
$0.add(this.toolbars['analyticalModel']);
this.toolbars['analyticalModel'].setLiveResize(true);
this.toolbars['analyticalModel'].setVisibility(false);
this.toolbars['adminDistributionList']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'distributionList',
image:'spagobi/img/spagobi/test/distributionlistuser.png',
page:'distributionList',
tooltip:'Distribution List User'},
{name:'distributionListConfig',
image:'spagobi/img/spagobi/test/distributionlist.png',
page:'distributionListConfig',
tooltip:'Distribution List Configuration'}]},
defaultSelectedPage:'distributionList'});
$0.add(this.toolbars['adminDistributionList']);
this.toolbars['adminDistributionList'].setLiveResize(true);
this.toolbars['adminDistributionList'].setVisibility(false);
this.toolbars['functionality']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'func',
image:'spagobi/img/spagobi/test/mapManagementIcon.png',
page:'func',
tooltip:'Functionalities'}]},
defaultSelectedPage:'func'});
$0.add(this.toolbars['functionality']);
this.toolbars['functionality'].setLiveResize(true);
this.toolbars['functionality'].setVisibility(false);
this.toolbars['events']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'workflow',
image:'spagobi/img/spagobi/test/todoList_2.png',
page:'workflow',
tooltip:'Workflow To Do List'},
{name:'event',
image:'spagobi/img/spagobi/test/events.png',
page:'event',
tooltip:'Events'}]},
defaultSelectedPage:'workflow'});
$0.add(this.toolbars['events']);
this.toolbars['events'].setLiveResize(true);
this.toolbars['events'].setVisibility(false);
this.toolbars['tools']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'tool',
image:'spagobi/img/spagobi/test/importexport64.png',
page:'tool',
tooltip:'Import / Export '},
{name:'schedule',
image:'spagobi/img/spagobi/test/scheduleIcon64_blu.png',
page:'schedule',
tooltip:'Schedule Document Executions '},
{name:'roles',
image:'spagobi/img/spagobi/test/rolesynch64.jpg',
page:'roles',
tooltip:'Roles Synchronization'}]},
defaultSelectedPage:'tool'});
$0.add(this.toolbars['tools']);
this.toolbars['tools'].setLiveResize(true);
this.toolbars['tools'].setVisibility(false);
this.toolbars['hotLinks']=new spagobi.ui.PageView({toolbar:{buttons:[{name:'link1',
image:'spagobi/img/spagobi/test/todoList_2.png',
page:'link1',
tooltip:'Remember Me'},
{name:'link2',
image:'spagobi/img/spagobi/test/scheduleIcon64_blu.png',
page:'link2',
tooltip:'Most Popular'},
{name:'link3',
image:'spagobi/img/spagobi/test/engineAdministrationIcon.png',
page:'link3',
tooltip:'Most Recently Used'}]},
defaultSelectedPage:'link1'});
$0.add(this.toolbars['hotLinks']);
this.toolbars['hotLinks'].setLiveResize(true);
this.toolbars['hotLinks'].setVisibility(false);
return $0;
},
_selectToolbar:function($0){if(this.toolbars[$0]){if(this.selectToolbarName){this.toolbars[this.selectToolbarName].setVisibility(false);
}this.toolbars[$0].setVisibility(true);
if(!this.toolbars[$0].getSelectedPageName()){this.toolbars[$0].selectDefaultPage();
}this.selectToolbarName=$0;
}else{alert($0+' is not yet implemented !');
}},
_applyCssTheme:function(){alert(document.body.className=qx.theme.manager.Meta.getInstance().getTheme());
document.body.className=qx.theme.manager.Meta.getInstance().getTheme()==qx.theme.Ext?"Ext":"Classic";
},
close:function(){arguments.callee.base.call(this);
},
terminate:function(){arguments.callee.base.call(this);
}}});




/* ID: qx.io.remote.RequestQueue */
qx.Class.define("qx.io.remote.RequestQueue",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._queue=[];
this._active=[];
this._totalRequests=0;
this._timer=new qx.client.Timer(500);
this._timer.addEventListener("interval",
this._oninterval,
this);
},
properties:{enabled:{init:true,
check:"Boolean",
apply:"_applyEnabled"},
maxTotalRequests:{check:"Integer",
nullable:true},
maxConcurrentRequests:{check:"Integer",
init:3},
defaultTimeout:{check:"Integer",
init:5000}},
members:{_debug:function(){var $0=this._active.length+"/"+(this._queue.length+this._active.length);
{};
},
_check:function(){this._debug();
if(this._active.length==0&&this._queue.length==0){this._timer.stop();
}if(!this.getEnabled()){return;
}if(this._active.length>=this.getMaxConcurrentRequests()||this._queue.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this._totalRequests>=this.getMaxTotalRequests()){return;
}var $0=this._queue.shift();
var $1=new qx.io.remote.Exchange($0);
this._totalRequests++;
this._active.push($1);
this._debug();
$1.addEventListener("sending",
$0._onsending,
$0);
$1.addEventListener("receiving",
$0._onreceiving,
$0);
$1.addEventListener("completed",
$0._oncompleted,
$0);
$1.addEventListener("aborted",
$0._onaborted,
$0);
$1.addEventListener("timeout",
$0._ontimeout,
$0);
$1.addEventListener("failed",
$0._onfailed,
$0);
$1.addEventListener("sending",
this._onsending,
this);
$1.addEventListener("completed",
this._oncompleted,
this);
$1.addEventListener("aborted",
this._oncompleted,
this);
$1.addEventListener("timeout",
this._oncompleted,
this);
$1.addEventListener("failed",
this._oncompleted,
this);
$1._start=(new Date).valueOf();
$1.send();
if(this._queue.length>0){this._check();
}},
_remove:function($0){qx.lang.Array.remove(this._active,
$0);
$0.dispose();
this._check();
},
_activeCount:0,
_onsending:function($0){{};
},
_oncompleted:function($0){{};
this._remove($0.getTarget());
},
_oninterval:function($0){var $1=this._active;
if($1.length==0){this._timer.stop();
return;
}var $2=(new Date).valueOf();
var $3;
var $4;
var $5=this.getDefaultTimeout();
var $6;
var $7;
for(var $8=$1.length-1;$8>=0;$8--){$3=$1[$8];
$4=$3.getRequest();
if($4.isAsynchronous()){$6=$4.getTimeout();
if($6==0){continue;
}
if($6==null){$6=$5;
}$7=$2-$3._start;
if($7>$6){this.warn("Timeout: transport "+$3.toHashCode());
this.warn($7+"ms > "+$6+"ms");
$3.timeout();
}}}},
_applyEnabled:function($0,
$1){if($0){this._check();
}this._timer.setEnabled($0);
},
add:function($0){$0.setState("queued");
this._queue.push($0);
this._check();
if(this.getEnabled()){this._timer.start();
}},
abort:function($0){var $1=$0.getTransport();
if($1){$1.abort();
}else if(qx.lang.Array.contains(this._queue,
$0)){qx.lang.Array.remove(this._queue,
$0);
}}},
destruct:function(){this._disposeObjectDeep("_active",
1);
this._disposeObjects("_timer");
this._disposeFields("_queue");
}});




/* ID: qx.io.remote.Exchange */
qx.Class.define("qx.io.remote.Exchange",
{extend:qx.core.Target,
construct:function($0){arguments.callee.base.call(this);
this.setRequest($0);
$0.setTransport(this);
},
events:{"sending":"qx.event.type.Event",
"receiving":"qx.event.type.Event",
"completed":"qx.io.remote.Response",
"aborted":"qx.io.remote.Response",
"failed":"qx.io.remote.Response",
"timeout":"qx.io.remote.Response"},
statics:{typesOrder:["qx.io.remote.XmlHttpTransport",
"qx.io.remote.IframeTransport",
"qx.io.remote.ScriptTransport"],
typesReady:false,
typesAvailable:{},
typesSupported:{},
registerType:function($0,
$1){qx.io.remote.Exchange.typesAvailable[$1]=$0;
},
initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var $0 in qx.io.remote.Exchange.typesAvailable){var $1=qx.io.remote.Exchange.typesAvailable[$0];
if($1.isSupported()){qx.io.remote.Exchange.typesSupported[$0]=$1;
}}qx.io.remote.Exchange.typesReady=true;
if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},
canHandle:function($0,
$1,
$2){if(!qx.lang.Array.contains($0.handles.responseTypes,
$2)){return false;
}
for(var $3 in $1){if(!$0.handles[$3]){return false;
}}return true;
},
_nativeMap:{0:"created",
1:"configured",
2:"sending",
3:"receiving",
4:"completed"},
wasSuccessful:function($0,
$1,
$2){if($2){switch($0){case null:case 0:return true;
case -1:return $1<4;
default:return typeof $0==="undefined";
}}else{switch($0){case -1:{};
return $1<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return $1!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if($0>206&&$0<300){return true;
}qx.log.Logger.getClassLogger(qx.io.remote.Exchange).debug("Unknown status code: "+$0+" ("+$1+")");
return false;
}}},
statusCodeToString:function($0){switch($0){case -1:return "Not available";
case 200:return "Ok";
case 304:return "Not modified";
case 206:return "Partial content";
case 204:return "No content";
case 300:return "Multiple choices";
case 301:return "Moved permanently";
case 302:return "Moved temporarily";
case 303:return "See other";
case 305:return "Use proxy";
case 400:return "Bad request";
case 401:return "Unauthorized";
case 402:return "Payment required";
case 403:return "Forbidden";
case 404:return "Not found";
case 405:return "Method not allowed";
case 406:return "Not acceptable";
case 407:return "Proxy authentication required";
case 408:return "Request time-out";
case 409:return "Conflict";
case 410:return "Gone";
case 411:return "Length required";
case 412:return "Precondition failed";
case 413:return "Request entity too large";
case 414:return "Request-URL too large";
case 415:return "Unsupported media type";
case 500:return "Server error";
case 501:return "Not implemented";
case 502:return "Bad gateway";
case 503:return "Out of resources";
case 504:return "Gateway time-out";
case 505:return "HTTP version not supported";
case 12002:return "Server timeout";
case 12029:return "Connection dropped";
case 12030:return "Connection dropped";
case 12031:return "Connection dropped";
case 12152:return "Connection closed by server";
case 13030:return "MSHTML-specific HTTP status code";
default:return "Unknown status code";
}}},
properties:{request:{check:"qx.io.remote.Request",
nullable:true},
implementation:{check:"qx.io.remote.AbstractRemoteTransport",
nullable:true,
apply:"_applyImplementation"},
state:{check:["configured",
"sending",
"receiving",
"completed",
"aborted",
"timeout",
"failed"],
init:"configured",
event:"changeState",
apply:"_applyState"}},
members:{send:function(){var $0=this.getRequest();
if(!$0){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var $1=qx.io.remote.Exchange.typesOrder;
var $2=qx.io.remote.Exchange.typesSupported;
var $3=$0.getResponseType();
var $4={};
if($0.getAsynchronous()){$4.asynchronous=true;
}else{$4.synchronous=true;
}
if($0.getCrossDomain()){$4.crossDomain=true;
}
if($0.getFileUpload()){$4.fileUpload=true;
}for(var $5 in $0.getFormFields()){$4.programaticFormFields=true;
break;
}var $6,
$7;
for(var $8=0,
$9=$1.length;$8<$9;$8++){$6=$2[$1[$8]];
if($6){if(!qx.io.remote.Exchange.canHandle($6,
$4,
$3)){continue;
}
try{{};
$7=new $6;
this.setImplementation($7);
$7.setUseBasicHttpAuth($0.getUseBasicHttpAuth());
$7.send();
return true;
}catch(ex){return this.error("Request handler throws error",
ex);
}}}this.error("There is no transport implementation available to handle this request: "+$0);
},
abort:function(){var $0=this.getImplementation();
if($0){{};
$0.abort();
}else{{};
this.setState("aborted");
}},
timeout:function(){var $0=this.getImplementation();
if($0){this.warn("Timeout: implementation "+$0.toHashCode());
$0.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState("timeout");
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},
_onsending:function($0){this.setState("sending");
},
_onreceiving:function($0){this.setState("receiving");
},
_oncompleted:function($0){this.setState("completed");
},
_onabort:function($0){this.setState("aborted");
},
_onfailed:function($0){this.setState("failed");
},
_ontimeout:function($0){this.setState("timeout");
},
_applyImplementation:function($0,
$1){if($1){$1.removeEventListener("sending",
this._onsending,
this);
$1.removeEventListener("receiving",
this._onreceiving,
this);
$1.removeEventListener("completed",
this._oncompleted,
this);
$1.removeEventListener("aborted",
this._onabort,
this);
$1.removeEventListener("timeout",
this._ontimeout,
this);
$1.removeEventListener("failed",
this._onfailed,
this);
}
if($0){var $2=this.getRequest();
$0.setUrl($2.getUrl());
$0.setMethod($2.getMethod());
$0.setAsynchronous($2.getAsynchronous());
$0.setUsername($2.getUsername());
$0.setPassword($2.getPassword());
$0.setParameters($2.getParameters());
$0.setFormFields($2.getFormFields());
$0.setRequestHeaders($2.getRequestHeaders());
$0.setData($2.getData());
$0.setResponseType($2.getResponseType());
$0.addEventListener("sending",
this._onsending,
this);
$0.addEventListener("receiving",
this._onreceiving,
this);
$0.addEventListener("completed",
this._oncompleted,
this);
$0.addEventListener("aborted",
this._onabort,
this);
$0.addEventListener("timeout",
this._ontimeout,
this);
$0.addEventListener("failed",
this._onfailed,
this);
}},
_applyState:function($0,
$1){{};
switch($0){case "sending":this.createDispatchEvent("sending");
break;
case "receiving":this.createDispatchEvent("receiving");
break;
case "completed":case "aborted":case "timeout":case "failed":var $2=this.getImplementation();
if(!$2){break;
}
if(this.hasEventListeners($0)){var $3=new qx.io.remote.Response($0);
if($0=="completed"){var $4=$2.getResponseContent();
$3.setContent($4);
if($4===null){{};
$0="failed";
}}$3.setStatusCode($2.getStatusCode());
$3.setResponseHeaders($2.getResponseHeaders());
this.dispatchEvent($3);
}this.setImplementation(null);
$2.dispose();
break;
}}},
settings:{"qx.ioRemoteDebug":false,
"qx.ioRemoteDebugData":false},
destruct:function(){var $0=this.getImplementation();
if($0){this.setImplementation(null);
$0.dispose();
}this.setRequest(null);
}});




/* ID: qx.io.remote.Response */
qx.Class.define("qx.io.remote.Response",
{extend:qx.event.type.Event,
construct:function($0){arguments.callee.base.call(this,
$0);
},
properties:{state:{check:"Integer",
nullable:true},
statusCode:{check:"Integer",
nullable:true},
content:{nullable:true},
responseHeaders:{check:"Object",
nullable:true}},
members:{getResponseHeader:function($0){var $1=this.getResponseHeaders();
if($1){return $1[$0]||null;
}return null;
},
getData:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"This method is no longer needed since the event object is now an instance of the Response class.");
return this;
}}});




/* ID: qx.io.remote.AbstractRemoteTransport */
qx.Class.define("qx.io.remote.AbstractRemoteTransport",
{type:"abstract",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
},
events:{"created":"qx.event.type.Event",
"configured":"qx.event.type.Event",
"sending":"qx.event.type.Event",
"receiving":"qx.event.type.Event",
"completed":"qx.event.type.Event",
"aborted":"qx.event.type.Event",
"failed":"qx.event.type.Event",
"timeout":"qx.event.type.Event"},
properties:{url:{check:"String",
nullable:true},
method:{check:"String",
nullable:true},
asynchronous:{check:"Boolean",
nullable:true},
data:{check:"String",
nullable:true},
username:{check:"String",
nullable:true},
password:{check:"String",
nullable:true},
state:{check:["created",
"configured",
"sending",
"receiving",
"completed",
"aborted",
"timeout",
"failed"],
init:"created",
event:"changeState",
apply:"_applyState"},
requestHeaders:{check:"Object",
nullable:true},
parameters:{check:"Object",
nullable:true},
formFields:{check:"Object",
nullable:true},
responseType:{check:"String",
nullable:true},
useBasicHttpAuth:{check:"Boolean",
nullable:true}},
members:{send:function(){throw new Error("send is abstract");
},
abort:function(){{};
this.setState("aborted");
},
timeout:function(){{};
this.setState("timeout");
},
failed:function(){{};
this.setState("failed");
},
setRequestHeader:function($0,
$1){throw new Error("setRequestHeader is abstract");
},
getResponseHeader:function($0){throw new Error("getResponseHeader is abstract");
},
getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},
getStatusCode:function(){throw new Error("getStatusCode is abstract");
},
getStatusText:function(){throw new Error("getStatusText is abstract");
},
getResponseText:function(){throw new Error("getResponseText is abstract");
},
getResponseXml:function(){throw new Error("getResponseXml is abstract");
},
getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},
_applyState:function($0,
$1){{};
switch($0){case "created":this.createDispatchEvent("created");
break;
case "configured":this.createDispatchEvent("configured");
break;
case "sending":this.createDispatchEvent("sending");
break;
case "receiving":this.createDispatchEvent("receiving");
break;
case "completed":this.createDispatchEvent("completed");
break;
case "aborted":this.createDispatchEvent("aborted");
break;
case "failed":this.createDispatchEvent("failed");
break;
case "timeout":this.createDispatchEvent("timeout");
break;
}return true;
}}});




/* ID: qx.util.Mime */
qx.Class.define("qx.util.Mime",
{statics:{JAVASCRIPT:"text/javascript",
JSON:"application/json",
XML:"application/xml",
TEXT:"text/plain",
HTML:"text/html"}});




/* ID: qx.io.remote.XmlHttpTransport */
qx.Class.define("qx.io.remote.XmlHttpTransport",
{extend:qx.io.remote.AbstractRemoteTransport,
construct:function(){arguments.callee.base.call(this);
this._req=qx.io.remote.XmlHttpTransport.createRequestObject();
this._req.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
events:{"created":"qx.event.type.Event",
"configured":"qx.event.type.Event",
"sending":"qx.event.type.Event",
"receiving":"qx.event.type.Event",
"completed":"qx.event.type.Event",
"aborted":"qx.event.type.Event",
"failed":"qx.event.type.Event",
"timeout":"qx.event.type.Event"},
statics:{handles:{synchronous:true,
asynchronous:true,
crossDomain:false,
fileUpload:false,
programaticFormFields:false,
responseTypes:[qx.util.Mime.TEXT,
qx.util.Mime.JAVASCRIPT,
qx.util.Mime.JSON,
qx.util.Mime.XML,
qx.util.Mime.HTML]},
requestObjects:[],
requestObjectCount:0,
isSupported:function(){return qx.net.HttpRequest.create()!=null?true:false;
},
createRequestObject:function(){return qx.net.HttpRequest.create();
},
__dummy:function(){}},
members:{_localRequest:false,
_lastReadyState:0,
getRequest:function(){return this._req;
},
send:function(){this._lastReadyState=0;
var $0=this.getRequest();
var $1=this.getMethod();
var $2=this.getAsynchronous();
var $3=this.getUrl();
var $4=(qx.core.Client.getInstance().getRunsLocally()&&!(/^http(s){0,1}\:/.test($3)));
this._localRequest=$4;
var $5=this.getParameters();
var $6=[];
for(var $7 in $5){var $8=$5[$7];
if($8 instanceof Array){for(var $9=0;$9<$8.length;$9++){$6.push(encodeURIComponent($7)+"="+encodeURIComponent($8[$9]));
}}else{$6.push(encodeURIComponent($7)+"="+encodeURIComponent($8));
}}
if($6.length>0){$3+=($3.indexOf("?")>=0?"&":"?")+$6.join("&");
}var $a=function($b){var $c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var $d="";
var $e,
$f,
$g;
var $h,
$i,
$j,
$k;
var $9=0;
do{$e=$b.charCodeAt($9++);
$f=$b.charCodeAt($9++);
$g=$b.charCodeAt($9++);
$h=$e>>2;
$i=(($e&3)<<4)|($f>>4);
$j=(($f&15)<<2)|($g>>6);
$k=$g&63;
if(isNaN($f)){$j=$k=64;
}else if(isNaN($g)){$k=64;
}$d+=$c.charAt($h)+$c.charAt($i)+$c.charAt($j)+$c.charAt($k);
}while($9<$b.length);
return $d;
};
$0.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
if(this.getUsername()){if(this.getUseBasicHttpAuth()){$0.open($1,
$3,
$2);
$0.setRequestHeader('Authorization',
'Basic '+$a(this.getUsername()+':'+this.getPassword()));
}else{$0.open($1,
$3,
$2,
this.getUsername(),
this.getPassword());
}}else{$0.open($1,
$3,
$2);
}$0.setRequestHeader('Referer',
window.location.href);
var $l=this.getRequestHeaders();
for(var $7 in $l){$0.setRequestHeader($7,
$l[$7]);
}try{{};
$0.send(this.getData());
}catch(ex){if($4){this.failedLocally();
}else{this.error("Failed to send data: "+ex,
"send");
this.failed();
}return;
}if(!$2){this._onreadystatechange();
}},
failedLocally:function(){if(this.getState()==="failed"){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},
_onreadystatechange:function($0){switch(this.getState()){case "completed":case "aborted":case "failed":case "timeout":{};
return;
}var $1=this.getReadyState();
if($1==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),
$1,
this._localRequest)){return this.failed();
}}while(this._lastReadyState<$1){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
getReadyState:function(){var $0=null;
try{$0=this._req.readyState;
}catch(ex){}return $0;
},
setRequestHeader:function($0,
$1){this._req.setRequestHeader($0,
$1);
},
getResponseHeader:function($0){var $1=null;
try{this.getRequest().getResponseHeader($0)||null;
}catch(ex){}return $1;
},
getStringResponseHeaders:function(){var $0=null;
try{var $1=this._req.getAllResponseHeaders();
if($1){$0=$1;
}}catch(ex){}return $0;
},
getResponseHeaders:function(){var $0=this.getStringResponseHeaders();
var $1={};
if($0){var $2=$0.split(/[\r\n]+/g);
for(var $3=0,
$4=$2.length;$3<$4;$3++){var $5=$2[$3].match(/^([^:]+)\s*:\s*(.+)$/i);
if($5){$1[$5[1]]=$5[2];
}}}return $1;
},
getStatusCode:function(){var $0=-1;
try{$0=this.getRequest().status;
}catch(ex){}return $0;
},
getStatusText:function(){var $0="";
try{$0=this.getRequest().statusText;
}catch(ex){}return $0;
},
getResponseText:function(){var $0=null;
var $1=this.getStatusCode();
var $2=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful($1,
$2,
this._localRequest)){try{$0=this.getRequest().responseText;
}catch(ex){}}return $0;
},
getResponseXml:function(){var $0=null;
var $1=this.getStatusCode();
var $2=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful($1,
$2,
this._localRequest)){try{$0=this.getRequest().responseXML;
}catch(ex){}}if(typeof $0=="object"&&$0!=null){if(!$0.documentElement){var $3=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,
"");
$0.loadXML($3);
}if(!$0.documentElement){throw new Error("Missing Document Element!");
}
if($0.documentElement.tagName=="parseerror"){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return $0;
},
getFetchedLength:function(){var $0=this.getResponseText();
return typeof $0=="string"?$0.length:0;
},
getResponseContent:function(){if(this.getState()!=="completed"){{};
return null;
}{};
var $0=this.getResponseText();
switch(this.getResponseType()){case qx.util.Mime.TEXT:case qx.util.Mime.HTML:{};
return $0;
case qx.util.Mime.JSON:{};
try{if($0&&$0.length>0){return qx.io.Json.parseQx($0)||null;
}else{return null;
}}catch(ex){this.error("Could not execute json: ["+$0+"]",
ex);
return "<pre>Could not execute json: \n"+$0+"\n</pre>";
}case qx.util.Mime.JAVASCRIPT:{};
try{if($0&&$0.length>0){return window.eval($0)||null;
}else{return null;
}}catch(ex){this.error("Could not execute javascript: ["+$0+"]",
ex);
return null;
}case qx.util.Mime.XML:$0=this.getResponseXml();
{};
return $0||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},
_applyState:function($0,
$1){{};
switch($0){case "created":this.createDispatchEvent("created");
break;
case "configured":this.createDispatchEvent("configured");
break;
case "sending":this.createDispatchEvent("sending");
break;
case "receiving":this.createDispatchEvent("receiving");
break;
case "completed":this.createDispatchEvent("completed");
break;
case "failed":this.createDispatchEvent("failed");
break;
case "aborted":this.getRequest().abort();
this.createDispatchEvent("aborted");
break;
case "timeout":this.getRequest().abort();
this.createDispatchEvent("timeout");
break;
}}},
defer:function($0,
$1){qx.io.remote.Exchange.registerType(qx.io.remote.XmlHttpTransport,
"qx.io.remote.XmlHttpTransport");
},
destruct:function(){var $0=this.getRequest();
if($0){$0.onreadystatechange=qx.io.remote.XmlHttpTransport.__dummy;
switch($0.readyState){case 1:case 2:case 3:$0.abort();
}}this._disposeFields("_req");
}});




/* ID: qx.net.HttpRequest */
qx.Class.define("qx.net.HttpRequest",
{statics:{create:qx.core.Variant.select("qx.client",
{"default":function(){return new XMLHttpRequest;
},
"mshtml":qx.lang.Object.select(location.protocol!=="file:"&&window.XMLHttpRequest?"native":"activeX",
{"native":function(){return new XMLHttpRequest;
},
"activeX":function(){if(this.__server){return new ActiveXObject(this.__server);
}var $0=["MSXML2.XMLHTTP.3.0",
"MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.4.0",
"MSXML2.XMLHTTP",
"Microsoft.XMLHTTP"];
var $1;
var $2;
for(var $3=0,
$4=$0.length;$3<$4;$3++){$2=$0[$3];
try{$1=new ActiveXObject($2);
break;
}catch(ex){$1=null;
}}
if($1){this.__server=$2;
}return $1;
}})})}});




/* ID: qx.io.Json */
qx.Class.define("qx.io.Json",
{statics:{BEAUTIFYING_INDENT:"  ",
BEAUTIFYING_LINE_END:"\n",
__map:{"function":"__convertFunction",
"boolean":"__convertBoolean",
"number":"__convertNumber",
"string":"__convertString",
"object":"__convertObject",
"undefined":"__convertUndefined"},
__convertFunction:function($0){return String($0);
},
__convertBoolean:function($0){return String($0);
},
__convertNumber:function($0){return isFinite($0)?String($0):"null";
},
__convertString:function($0){var $1;
if(/["\\\x00-\x1f]/.test($0)){$1=$0.replace(/([\x00-\x1f\\"])/g,
qx.io.Json.__convertStringHelper);
}else{$1=$0;
}return '"'+$1+'"';
},
__convertStringEscape:{'\b':'\\b',
'\t':'\\t',
'\n':'\\n',
'\f':'\\f',
'\r':'\\r',
'"':'\\"',
'\\':'\\\\'},
__convertStringHelper:function($0,
$1){var $2=qx.io.Json.__convertStringEscape[$1];
if($2){return $2;
}$2=$1.charCodeAt();
return '\\u00'+Math.floor($2/16).toString(16)+($2%16).toString(16);
},
__convertArray:function($0){var $1=[],
$2=true,
$3,
$4;
var $5=qx.io.Json.__beautify;
$1.push("[");
if($5){qx.io.Json.__indent+=qx.io.Json.BEAUTIFYING_INDENT;
$1.push(qx.io.Json.__indent);
}
for(var $6=0,
$7=$0.length;$6<$7;$6++){$4=$0[$6];
$3=this.__map[typeof $4];
if($3){$4=this[$3]($4);
if(typeof $4=="string"){if(!$2){$1.push(",");
if($5){$1.push(qx.io.Json.__indent);
}}$1.push($4);
$2=false;
}}}
if($5){qx.io.Json.__indent=qx.io.Json.__indent.substring(0,
qx.io.Json.__indent.length-qx.io.Json.BEAUTIFYING_INDENT.length);
$1.push(qx.io.Json.__indent);
}$1.push("]");
return $1.join("");
},
__convertDate:function($0){var $1=$0.getUTCFullYear()+","+$0.getUTCMonth()+","+$0.getUTCDate()+","+$0.getUTCHours()+","+$0.getUTCMinutes()+","+$0.getUTCSeconds()+","+$0.getUTCMilliseconds();
return "new Date(Date.UTC("+$1+"))";
},
__convertMap:function($0){var $1=[],
$2=true,
$3,
$4;
var $5=qx.io.Json.__beautify;
$1.push("{");
if($5){qx.io.Json.__indent+=qx.io.Json.BEAUTIFYING_INDENT;
$1.push(qx.io.Json.__indent);
}
for(var $6 in $0){$4=$0[$6];
$3=this.__map[typeof $4];
if($3){$4=this[$3]($4);
if(typeof $4=="string"){if(!$2){$1.push(",");
if($5){$1.push(qx.io.Json.__indent);
}}$1.push(this.__convertString($6),
":",
$4);
$2=false;
}}}
if($5){qx.io.Json.__indent=qx.io.Json.__indent.substring(0,
qx.io.Json.__indent.length-qx.io.Json.BEAUTIFYING_INDENT.length);
$1.push(qx.io.Json.__indent);
}$1.push("}");
return $1.join("");
},
__convertObject:function($0){if($0){var $1=$0.constructor.name;
if($0 instanceof Array||$1=="Array"){return this.__convertArray($0);
}else if($0 instanceof Date||$1=="Date"){return this.__convertDate($0);
}else if($0 instanceof Object||$1=="Object"){return this.__convertMap($0);
}return "";
}return "null";
},
__convertUndefined:function($0){if(qx.core.Setting.get("qx.jsonEncodeUndefined")){return "null";
}},
stringify:function($0,
$1){this.__beautify=$1;
this.__indent=this.BEAUTIFYING_LINE_END;
var $2=this[this.__map[typeof $0]]($0);
if(typeof $2!="string"){$2=null;
}if(qx.core.Setting.get("qx.jsonDebugging")){qx.log.Logger.getClassLogger(qx.io.Json).debug("JSON request: "+$2);
}return $2;
},
parse:function($0){if(!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test($0.replace(/"(\\.|[^"\\])*"/g,
"")))){throw new Error("Could not parse JSON string!");
}
try{return eval("("+$0+")");
}catch(ex){throw new Error("Could not evaluate JSON string: "+ex.message);
}},
parseQx:function($0){if(qx.core.Setting.get("qx.jsonDebugging")){qx.log.Logger.getClassLogger(qx.io.Json).debug("JSON response: "+$0);
}var $1=($0&&$0.length>0)?eval('('+$0+')'):null;
return $1;
}},
settings:{"qx.jsonEncodeUndefined":true,
"qx.jsonDebugging":false}});




/* ID: qx.io.remote.IframeTransport */
qx.Class.define("qx.io.remote.IframeTransport",
{extend:qx.io.remote.AbstractRemoteTransport,
construct:function(){arguments.callee.base.call(this);
var $0=(new Date).valueOf();
var $1="frame_"+$0;
var $2="form_"+$0;
if(qx.core.Variant.isSet("qx.client",
"mshtml")){this._frame=document.createElement('<iframe name="'+$1+'"></iframe>');
}else{this._frame=document.createElement("iframe");
}this._frame.src="javascript:void(0)";
this._frame.id=this._frame.name=$1;
this._frame.onload=qx.lang.Function.bind(this._onload,
this);
this._frame.style.display="none";
document.body.appendChild(this._frame);
this._form=document.createElement("form");
this._form.target=$1;
this._form.id=this._form.name=$2;
this._form.style.display="none";
document.body.appendChild(this._form);
this._data=document.createElement("textarea");
this._data.id=this._data.name="_data_";
this._form.appendChild(this._data);
this._frame.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
statics:{handles:{synchronous:false,
asynchronous:true,
crossDomain:false,
fileUpload:true,
programaticFormFields:true,
responseTypes:[qx.util.Mime.TEXT,
qx.util.Mime.JAVASCRIPT,
qx.util.Mime.JSON,
qx.util.Mime.XML,
qx.util.Mime.HTML]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4}},
members:{_lastReadyState:0,
send:function(){var $0=this.getMethod();
var $1=this.getUrl();
var $2=this.getParameters();
var $3=[];
for(var $4 in $2){var $5=$2[$4];
if($5 instanceof Array){for(var $6=0;$6<$5.length;$6++){$3.push(encodeURIComponent($4)+"="+encodeURIComponent($5[$6]));
}}else{$3.push(encodeURIComponent($4)+"="+encodeURIComponent($5));
}}
if($3.length>0){$1+=($1.indexOf("?")>=0?"&":"?")+$3.join("&");
}var $7=this.getFormFields();
for(var $4 in $7){var $8=document.createElement("textarea");
$8.name=$4;
$8.appendChild(document.createTextNode($7[$4]));
this._form.appendChild($8);
}this._form.action=$1;
this._form.method=$0;
this._data.appendChild(document.createTextNode(this.getData()));
this._form.submit();
this.setState("sending");
},
_onload:function($0){if(this._form.src){return;
}this._switchReadyState(qx.io.remote.IframeTransport._numericMap.complete);
},
_onreadystatechange:function($0){this._switchReadyState(qx.io.remote.IframeTransport._numericMap[this._frame.readyState]);
},
_switchReadyState:function($0){switch(this.getState()){case "completed":case "aborted":case "failed":case "timeout":this.warn("Ignore Ready State Change");
return;
}while(this._lastReadyState<$0){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
setRequestHeader:function($0,
$1){},
getResponseHeader:function($0){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return "";
},
getIframeWindow:function(){return qx.html.Iframe.getWindow(this._frame);
},
getIframeDocument:function(){return qx.html.Iframe.getDocument(this._frame);
},
getIframeBody:function(){return qx.html.Iframe.getBody(this._frame);
},
getIframeTextContent:function(){var $0=this.getIframeBody();
if(!$0){return null;
}
if(!$0.firstChild){return "";
}if($0.firstChild.tagName&&$0.firstChild.tagName.toLowerCase()=="pre"){return $0.firstChild.innerHTML;
}else{return $0.innerHTML;
}},
getIframeHtmlContent:function(){var $0=this.getIframeBody();
return $0?$0.innerHTML:null;
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!=="completed"){{};
return null;
}{};
var $0=this.getIframeTextContent();
switch(this.getResponseType()){case qx.util.Mime.TEXT:{};
return $0;
break;
case qx.util.Mime.HTML:$0=this.getIframeHtmlContent();
{};
return $0;
break;
case qx.util.Mime.JSON:$0=this.getIframeHtmlContent();
{};
try{return $0&&$0.length>0?qx.io.Json.parseQx($0):null;
}catch(ex){return this.error("Could not execute json: ("+$0+")",
ex);
}case qx.util.Mime.JAVASCRIPT:$0=this.getIframeHtmlContent();
{};
try{return $0&&$0.length>0?window.eval($0):null;
}catch(ex){return this.error("Could not execute javascript: ("+$0+")",
ex);
}case qx.util.Mime.XML:$0=this.getIframeDocument();
{};
return $0;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function($0,
$1,
$2){qx.io.remote.Exchange.registerType(qx.io.remote.IframeTransport,
"qx.io.remote.IframeTransport");
},
destruct:function(){if(this._frame){this._frame.onload=null;
this._frame.onreadystatechange=null;
if(qx.core.Variant.isSet("qx.client",
"gecko")){this._frame.src=qx.io.Alias.getInstance().resolve("static/image/blank.gif");
}document.body.removeChild(this._frame);
}
if(this._form){document.body.removeChild(this._form);
}this._disposeFields("_frame",
"_form");
}});




/* ID: qx.html.Iframe */
qx.Class.define("qx.html.Iframe",
{statics:{getWindow:qx.core.Variant.select("qx.client",
{"mshtml":function($0){try{return $0.contentWindow;
}catch(ex){return null;
}},
"default":function($0){try{var $1=qx.html.Iframe.getDocument($0);
return $1?$1.defaultView:null;
}catch(ex){return null;
}}}),
getDocument:qx.core.Variant.select("qx.client",
{"mshtml":function($0){try{var $1=qx.html.Iframe.getWindow($0);
return $1?$1.document:null;
}catch(ex){return null;
}},
"default":function($0){try{return $0.contentDocument;
}catch(ex){return null;
}}}),
getBody:function($0){var $1=qx.html.Iframe.getDocument($0);
return $1?$1.getElementsByTagName("body")[0]:null;
}}});




/* ID: qx.io.remote.ScriptTransport */
qx.Class.define("qx.io.remote.ScriptTransport",
{extend:qx.io.remote.AbstractRemoteTransport,
construct:function(){arguments.callee.base.call(this);
var $0=++qx.io.remote.ScriptTransport._uniqueId;
if($0>=2000000000){qx.io.remote.ScriptTransport._uniqueId=$0=1;
}this._element=null;
this._uniqueId=$0;
},
statics:{_uniqueId:0,
_instanceRegistry:{},
ScriptTransport_PREFIX:"_ScriptTransport_",
ScriptTransport_ID_PARAM:"_ScriptTransport_id",
ScriptTransport_DATA_PARAM:"_ScriptTransport_data",
handles:{synchronous:false,
asynchronous:true,
crossDomain:true,
fileUpload:false,
programaticFormFields:false,
responseTypes:[qx.util.Mime.TEXT,
qx.util.Mime.JAVASCRIPT,
qx.util.Mime.JSON]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4},
_requestFinished:function($0,
$1){var $2=qx.io.remote.ScriptTransport._instanceRegistry[$0];
if($2==null){{};
}else{$2._responseContent=$1;
$2._switchReadyState(qx.io.remote.ScriptTransport._numericMap.complete);
}}},
members:{_lastReadyState:0,
send:function(){var $0=this.getUrl();
$0+=($0.indexOf("?")>=0?"&":"?")+qx.io.remote.ScriptTransport.ScriptTransport_ID_PARAM+"="+this._uniqueId;
var $1=this.getParameters();
var $2=[];
for(var $3 in $1){if($3.indexOf(qx.io.remote.ScriptTransport.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.ScriptTransport.ScriptTransport_PREFIX);
}var $4=$1[$3];
if($4 instanceof Array){for(var $5=0;$5<$4.length;$5++){$2.push(encodeURIComponent($3)+"="+encodeURIComponent($4[$5]));
}}else{$2.push(encodeURIComponent($3)+"="+encodeURIComponent($4));
}}
if($2.length>0){$0+="&"+$2.join("&");
}var $6=this.getData();
if($6!=null){$0+="&"+qx.io.remote.ScriptTransport.ScriptTransport_DATA_PARAM+"="+encodeURIComponent($6);
}qx.io.remote.ScriptTransport._instanceRegistry[this._uniqueId]=this;
this._element=document.createElement("script");
this._element.charset="utf-8";
this._element.src=$0;
{};
document.body.appendChild(this._element);
},
_switchReadyState:function($0){switch(this.getState()){case "completed":case "aborted":case "failed":case "timeout":this.warn("Ignore Ready State Change");
return;
}while(this._lastReadyState<$0){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
setRequestHeader:function($0,
$1){},
getResponseHeader:function($0){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return "";
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!=="completed"){{};
return null;
}{};
switch(this.getResponseType()){case qx.util.Mime.TEXT:case qx.util.Mime.JSON:case qx.util.Mime.JAVASCRIPT:{};
return this._responseContent||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function($0,
$1,
$2){qx.io.remote.Exchange.registerType(qx.io.remote.ScriptTransport,
"qx.io.remote.ScriptTransport");
},
destruct:function(){if(this._element){delete qx.io.remote.ScriptTransport._instanceRegistry[this._uniqueId];
document.body.removeChild(this._element);
}this._disposeFields("_element");
}});




/* ID: qx.ui.basic.Inline */
qx.Class.define("qx.ui.basic.Inline",
{extend:qx.ui.layout.CanvasLayout,
construct:function($0){arguments.callee.base.call(this);
this.setStyleProperty("position",
"relative");
if($0!=null){this.setInlineNodeId($0);
}},
properties:{inlineNodeId:{check:"String",
nullable:true}}});




/* ID: qx.ui.layout.DockLayout */
qx.Class.define("qx.ui.layout.DockLayout",
{extend:qx.ui.core.Parent,
construct:function(){arguments.callee.base.call(this);
},
properties:{mode:{check:["vertical",
"horizontal",
"ordered"],
init:"vertical",
apply:"_applyMode",
themeable:true}},
members:{_applyMode:function($0,
$1){this.addToQueueRuntime("mode");
},
_createLayoutImpl:function(){return new qx.ui.layout.impl.DockLayoutImpl(this);
},
addLeft:function($0){this._addAlignedHorizontal("left",
arguments);
},
addRight:function($0){this._addAlignedHorizontal("right",
arguments);
},
addTop:function($0){this._addAlignedVertical("top",
arguments);
},
addBottom:function($0){this._addAlignedVertical("bottom",
arguments);
},
_addAlignedVertical:function($0,
$1){for(var $2=0,
$3=$1.length;$2<$3;$2++){$1[$2].setVerticalAlign($0);
}this.add.apply(this,
$1);
},
_addAlignedHorizontal:function($0,
$1){for(var $2=0,
$3=$1.length;$2<$3;$2++){$1[$2].setHorizontalAlign($0);
}this.add.apply(this,
$1);
}}});




/* ID: qx.ui.layout.impl.DockLayoutImpl */
qx.Class.define("qx.ui.layout.impl.DockLayoutImpl",
{extend:qx.ui.layout.impl.LayoutImpl,
construct:function($0){arguments.callee.base.call(this,
$0);
},
statics:{METHOD_LOCATION:"layoutChild_location_",
_childRanking:{vertical:function($0){return $0.getVerticalAlign()?1e6:$0.getHorizontalAlign()?2e6:3e6;
},
horizontal:function($0){return $0.getHorizontalAlign()?1e6:$0.getVerticalAlign()?2e6:3e6;
},
ordered:function($0){return $0.getHorizontalAlign()||$0.getVerticalAlign()?1e6:2e6;
}},
_childCheck:{common:function($0){if(!($0._computedLeftTypeNull&&$0._computedRightTypeNull&&$0._computedTopTypeNull&&$0._computedBottomTypeNull)){throw new Error("qx.ui.layout.impl.DockLayoutImpl: It is not allowed to define any location values for children: "+$0+"!");
}},
horizontal:function($0){if(!($0._computedMinHeightTypeNull&&$0._computedHeightTypeNull&&$0._computedMaxHeightTypeNull)){throw new Error("qx.ui.layout.impl.DockLayoutImpl: It is not allowed to define any vertical dimension for 'horizontal' placed children: "+$0+"!");
}},
vertical:function($0){if(!($0._computedMinWidthTypeNull&&$0._computedWidthTypeNull&&$0._computedMaxWidthTypeNull)){throw new Error("qx.ui.layout.impl.DockLayoutImpl: It is not allowed to define any horizontal dimension for 'vertical' placed children: "+$0+"!");
}},
"default":function($0){qx.ui.layout.impl.DockLayoutImpl._childCheck.horizontal($0);
qx.ui.layout.impl.DockLayoutImpl._childCheck.vertical($0);
}}},
members:{computeChildBoxWidth:function($0){if(this.getChildAlignMode($0)=="horizontal"){return $0.getWidthValue()||$0._computeBoxWidthFallback();
}return this.getWidget().getInnerWidth()-this._lastLeft-this._lastRight;
},
computeChildBoxHeight:function($0){if(this.getChildAlignMode($0)=="vertical"){return $0.getHeightValue()||$0._computeBoxHeightFallback();
}return this.getWidget().getInnerHeight()-this._lastTop-this._lastBottom;
},
updateChildOnInnerWidthChange:function($0){$0._recomputePercentX();
$0.addToLayoutChanges("location");
return true;
},
updateChildOnInnerHeightChange:function($0){$0._recomputePercentY();
$0.addToLayoutChanges("location");
return true;
},
updateSelfOnJobQueueFlush:qx.lang.Function.returnFalse,
updateChildrenOnJobQueueFlush:function($0){if($0.mode||$0.addChild||$0.removeChild){this.getWidget()._addChildrenToLayoutQueue("location");
}},
flushChildrenQueue:function($0){var $1=this.getWidget(),
$2=$1.getVisibleChildren(),
$3=$2.length,
$4=$1.getMode();
this._lastLeft=this._lastRight=this._lastTop=this._lastBottom=0;
var $5=qx.ui.layout.impl.DockLayoutImpl._childRanking[$4];
var $6=qx.lang.Array.copy($2).sort(function($7,
$8){return ($5($7)+$2.indexOf($7))-($5($8)+$2.indexOf($8));
});
for(var $9=0;$9<$3;$9++){$1._layoutChild($6[$9]);
}},
getChildAlign:function($0){return $0.getVerticalAlign()||$0.getHorizontalAlign()||"default";
},
getChildAlignMode:function($0){return $0.getVerticalAlign()?"vertical":$0.getHorizontalAlign()?"horizontal":"default";
},
layoutChild:function($0,
$1){qx.ui.layout.impl.DockLayoutImpl._childCheck.common($0);
qx.ui.layout.impl.DockLayoutImpl._childCheck[this.getChildAlignMode($0)]($0);
this.layoutChild_sizeX_essentialWrapper($0,
$1);
this.layoutChild_sizeY_essentialWrapper($0,
$1);
this.layoutChild_sizeLimitX($0,
$1);
this.layoutChild_sizeLimitY($0,
$1);
this[qx.ui.layout.impl.DockLayoutImpl.METHOD_LOCATION+this.getChildAlign($0)]($0,
$1);
},
layoutChild_location_top:function($0,
$1){$0._renderRuntimeTop(this._lastTop);
$0._renderRuntimeLeft(this._lastLeft);
this.layoutChild_location_horizontal($0);
this._lastTop+=$0.getBoxHeight();
},
layoutChild_location_left:function($0,
$1){$0._renderRuntimeLeft(this._lastLeft);
$0._renderRuntimeTop(this._lastTop);
this.layoutChild_location_vertical($0);
this._lastLeft+=$0.getBoxWidth();
},
_applyComputedWidth:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0){$0._recomputeBoxWidth();
$0._recomputeOuterWidth();
$0._recomputeInnerWidth();
$0._renderRuntimeWidth($0.getBoxWidth());
},
"default":function($0){$0._recomputeBoxWidth();
$0._recomputeOuterWidth();
$0._recomputeInnerWidth();
}}),
_applyComputedHeight:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0){$0._recomputeBoxHeight();
$0._recomputeOuterHeight();
$0._recomputeInnerHeight();
$0._renderRuntimeHeight($0.getBoxHeight());
},
"default":function($0){$0._recomputeBoxHeight();
$0._recomputeOuterHeight();
$0._recomputeInnerHeight();
}}),
layoutChild_sizeX:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0,
$1){if($1.initial||$1.width||$1.minWidth||$1.maxWidth){$0._computedWidthTypeNull&&$0._computedMinWidthTypeNull&&$0._computedMaxWidthTypeNull?$0._resetRuntimeWidth():$0._renderRuntimeWidth($0.getBoxWidth());
}},
"default":function($0,
$1){if($1.initial||$1.width){$0._computedWidthTypeNull?$0._resetRuntimeWidth():$0._renderRuntimeWidth($0.getWidthValue());
}}}),
layoutChild_sizeY:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0,
$1){if($1.initial||$1.height||$1.minHeight||$1.maxHeight){$0._computedHeightTypeNull&&$0._computedMinHeightTypeNull&&$0._computedMaxHeightTypeNull?$0._resetRuntimeHeight():$0._renderRuntimeHeight($0.getBoxHeight());
}},
"default":function($0,
$1){if($1.initial||$1.height){$0._computedHeightTypeNull?$0._resetRuntimeHeight():$0._renderRuntimeHeight($0.getHeightValue());
}}}),
layoutChild_location_horizontal:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0){this._applyComputedWidth($0);
},
"default":function($0){this._applyComputedWidth($0);
$0._renderRuntimeRight(this._lastRight);
}}),
layoutChild_location_vertical:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0){this._applyComputedHeight($0);
},
"default":function($0){this._applyComputedHeight($0);
$0._renderRuntimeBottom(this._lastBottom);
}}),
layoutChild_location_right:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0,
$1){$0._renderRuntimeLeft(this.getWidget().getInnerWidth()-this._lastRight-$0.getBoxWidth());
$0._renderRuntimeTop(this._lastTop);
this.layoutChild_location_vertical($0);
this._lastRight+=$0.getBoxWidth();
},
"default":function($0,
$1){$0._renderRuntimeRight(this._lastRight);
$0._renderRuntimeTop(this._lastTop);
this.layoutChild_location_vertical($0);
this._lastRight+=$0.getBoxWidth();
}}),
layoutChild_location_bottom:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0,
$1){$0._renderRuntimeTop(this.getWidget().getInnerHeight()-this._lastBottom-$0.getBoxHeight());
$0._renderRuntimeLeft(this._lastLeft);
this.layoutChild_location_horizontal($0);
this._lastBottom+=$0.getBoxHeight();
},
"default":function($0,
$1){$0._renderRuntimeBottom(this._lastBottom);
$0._renderRuntimeLeft(this._lastLeft);
this.layoutChild_location_horizontal($0);
this._lastBottom+=$0.getBoxHeight();
}}),
layoutChild_location_default:qx.core.Variant.select("qx.client",
{"mshtml|opera":function($0,
$1){$0._resetRuntimeRight();
$0._resetRuntimeBottom();
$0._renderRuntimeTop(this._lastTop);
$0._renderRuntimeLeft(this._lastLeft);
this._applyComputedWidth($0);
this._applyComputedHeight($0);
},
"default":function($0,
$1){$0._resetRuntimeWidth();
$0._resetRuntimeHeight();
$0._renderRuntimeTop(this._lastTop);
$0._renderRuntimeRight(this._lastRight);
$0._renderRuntimeBottom(this._lastBottom);
$0._renderRuntimeLeft(this._lastLeft);
this._applyComputedWidth($0);
this._applyComputedHeight($0);
}})}});




/* ID: qx.ui.embed.HtmlEmbed */
qx.Class.define("qx.ui.embed.HtmlEmbed",
{extend:qx.ui.basic.Terminator,
construct:function($0){arguments.callee.base.call(this);
if($0!=null){this.setHtml($0);
}},
properties:{html:{check:"String",
init:"",
apply:"_applyHtml",
event:"changeHtml"},
textAlign:{check:["left",
"center",
"right",
"justify"],
nullable:true,
themeable:true,
apply:"_applyTextAlign"},
font:{refine:true,
init:null},
textColor:{refine:true,
init:null}},
members:{_applyHtml:function(){if(this._isCreated){this._syncHtml();
}},
_applyTextAlign:function($0,
$1){$0===null?this.removeStyleProperty("textAlign"):this.setStyleProperty("textAlign",
$0);
},
_applyFont:function($0,
$1){qx.theme.manager.Font.getInstance().connect(this._styleFont,
this,
$0);
},
_styleFont:function($0){$0?$0.render(this):qx.ui.core.Font.reset(this);
},
_applyTextColor:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._styleTextColor,
this,
$0);
},
_styleTextColor:function($0){$0?this.setStyleProperty("color",
$0):this.removeStyleProperty("color");
},
_applyElementData:function(){this._syncHtml();
},
_syncHtml:function(){this._getTargetNode().innerHTML=this.getHtml();
}}});




/* ID: spagobi.app.ui.Header */
qx.Class.define("spagobi.app.ui.Header",
{extend:qx.ui.embed.HtmlEmbed,
construct:function(){arguments.callee.base.call(this,
"<h1><span>SpagoBI</span> - Chiron</h1>");
this.setHtmlProperty("className",
"header");
this.setHeight(50);
}});




/* ID: qx.ui.layout.BoxLayout */
qx.Class.define("qx.ui.layout.BoxLayout",
{extend:qx.ui.core.Parent,
construct:function($0){arguments.callee.base.call(this);
if($0!=null){this.setOrientation($0);
}else{this.initOrientation();
}},
statics:{STR_REVERSED:"-reversed"},
properties:{orientation:{check:["horizontal",
"vertical"],
init:"horizontal",
apply:"_applyOrientation",
event:"changeOrientation"},
spacing:{check:"Integer",
init:0,
themeable:true,
apply:"_applySpacing",
event:"changeSpacing"},
horizontalChildrenAlign:{check:["left",
"center",
"right"],
init:"left",
themeable:true,
apply:"_applyHorizontalChildrenAlign"},
verticalChildrenAlign:{check:["top",
"middle",
"bottom"],
init:"top",
themeable:true,
apply:"_applyVerticalChildrenAlign"},
reverseChildrenOrder:{check:"Boolean",
init:false,
apply:"_applyReverseChildrenOrder"},
stretchChildrenOrthogonalAxis:{check:"Boolean",
init:true,
apply:"_applyStretchChildrenOrthogonalAxis"},
useAdvancedFlexAllocation:{check:"Boolean",
init:false,
apply:"_applyUseAdvancedFlexAllocation"},
accumulatedChildrenOuterWidth:{_cached:true,
defaultValue:null},
accumulatedChildrenOuterHeight:{_cached:true,
defaultValue:null}},
members:{_createLayoutImpl:function(){return this.getOrientation()=="vertical"?new qx.ui.layout.impl.VerticalBoxLayoutImpl(this):new qx.ui.layout.impl.HorizontalBoxLayoutImpl(this);
},
_layoutHorizontal:false,
_layoutVertical:false,
_layoutMode:"left",
isHorizontal:function(){return this._layoutHorizontal;
},
isVertical:function(){return this._layoutVertical;
},
getLayoutMode:function(){if(this._layoutMode==null){this._updateLayoutMode();
}return this._layoutMode;
},
_updateLayoutMode:function(){this._layoutMode=this._layoutVertical?this.getVerticalChildrenAlign():this.getHorizontalChildrenAlign();
if(this.getReverseChildrenOrder()){this._layoutMode+=qx.ui.layout.BoxLayout.STR_REVERSED;
}},
_invalidateLayoutMode:function(){this._layoutMode=null;
},
_applyOrientation:function($0,
$1){this._layoutHorizontal=$0=="horizontal";
this._layoutVertical=$0=="vertical";
if(this._layoutImpl){this._layoutImpl.dispose();
this._layoutImpl=null;
}
if($0){this._layoutImpl=this._createLayoutImpl();
}this._doLayoutOrder($0,
$1);
this.addToQueueRuntime("orientation");
},
_applySpacing:function($0,
$1){this._doLayout();
this.addToQueueRuntime("spacing");
},
_applyHorizontalChildrenAlign:function($0,
$1){this._doLayoutOrder();
this.addToQueueRuntime("horizontalChildrenAlign");
},
_applyVerticalChildrenAlign:function($0,
$1){this._doLayoutOrder();
this.addToQueueRuntime("verticalChildrenAlign");
},
_applyReverseChildrenOrder:function($0,
$1){this._doLayoutOrder();
this.addToQueueRuntime("reverseChildrenOrder");
},
_applyStretchChildrenOrthogonalAxis:function($0,
$1){this.addToQueueRuntime("stretchChildrenOrthogonalAxis");
},
_applyUseAdvancedFlexAllocation:function($0,
$1){this.addToQueueRuntime("useAdvancedFlexAllocation");
},
_doLayoutOrder:function(){this._invalidateLayoutMode();
this._doLayout();
},
_doLayout:function(){this._invalidatePreferredInnerDimensions();
this._invalidateAccumulatedChildrenOuterWidth();
this._invalidateAccumulatedChildrenOuterHeight();
},
_computeAccumulatedChildrenOuterWidth:function(){var $0=this.getVisibleChildren(),
$1,
$2=-1,
$3=this.getSpacing(),
$4=-$3;
while($1=$0[++$2]){$4+=$1.getOuterWidth()+$3;
}return $4;
},
_computeAccumulatedChildrenOuterHeight:function(){var $0=this.getVisibleChildren(),
$1,
$2=-1,
$3=this.getSpacing(),
$4=-$3;
while($1=$0[++$2]){$4+=$1.getOuterHeight()+$3;
}return $4;
},
_recomputeChildrenStretchingX:function(){var $0=this.getVisibleChildren(),
$1,
$2=-1;
while($1=$0[++$2]){if($1._recomputeStretchingX()&&$1._recomputeBoxWidth()){$1._recomputeOuterWidth();
}}},
_recomputeChildrenStretchingY:function(){var $0=this.getVisibleChildren(),
$1,
$2=-1;
while($1=$0[++$2]){if($1._recomputeStretchingY()&&$1._recomputeBoxHeight()){$1._recomputeOuterHeight();
}}}}});




/* ID: qx.ui.layout.impl.VerticalBoxLayoutImpl */
qx.Class.define("qx.ui.layout.impl.VerticalBoxLayoutImpl",
{extend:qx.ui.layout.impl.LayoutImpl,
properties:{enableFlexSupport:{check:"Boolean",
init:true}},
members:{computeChildBoxWidth:function($0){if(this.getWidget().getStretchChildrenOrthogonalAxis()&&$0._computedWidthTypeNull&&$0.getAllowStretchX()){return this.getWidget().getInnerWidth();
}return $0.getWidthValue()||$0._computeBoxWidthFallback();
},
computeChildBoxHeight:function($0){return $0.getHeightValue()||$0._computeBoxHeightFallback();
},
computeChildrenFlexHeight:function(){if(this._childrenFlexHeightComputed||!this.getEnableFlexSupport()){return;
}this._childrenFlexHeightComputed=true;
var $0=this.getWidget();
var $1=$0.getVisibleChildren();
var $2=$1.length;
var $3;
var $4=[];
var $5=$0.getInnerHeight();
var $6=$0.getSpacing()*($2-1);
var $7;
for($7=0;$7<$2;$7++){$3=$1[$7];
if($3._computedHeightTypeFlex){$4.push($3);
if($0._computedHeightTypeAuto){$6+=$3.getPreferredBoxHeight();
}}else{$6+=$3.getOuterHeight();
}}var $8=$5-$6;
var $9=$4.length;
var $a=0;
for($7=0;$7<$9;$7++){$a+=$4[$7]._computedHeightParsed;
}var $b=$8/$a;
if(!$0.getUseAdvancedFlexAllocation()){for($7=0;$7<$9;$7++){$3=$4[$7];
$3._computedHeightFlexValue=Math.round($3._computedHeightParsed*$b);
$6+=$3._computedHeightFlexValue;
}}else{var $c=0;
var $d,
$9,
$e,
$f,
$g,
$h;
for($7=0;$7<$9;$7++){$3=$4[$7];
$h=$3._computedHeightFlexValue=$3._computedHeightParsed*$b;
$c+=$h-qx.lang.Number.limit($h,
$3.getMinHeightValue(),
$3.getMaxHeightValue());
}$c=Math.round($c);
if($c==0){for($7=0;$7<$9;$7++){$3=$4[$7];
$3._computedHeightFlexValue=Math.round($3._computedHeightFlexValue);
$6+=$3._computedHeightFlexValue;
}}else{var $i=$c>0;
for($7=$9-1;$7>=0;$7--){$3=$4[$7];
if($i){$e=($3.getMaxHeightValue()||Infinity)-$3._computedHeightFlexValue;
if($e>0){$3._allocationLoops=Math.floor($e/$3._computedHeightParsed);
}else{qx.lang.Array.removeAt($4,
$7);
$3._computedHeightFlexValue=Math.round($3._computedHeightFlexValue);
$6+=Math.round($3._computedHeightFlexValue+$e);
}}else{$e=qx.util.Validation.isValidNumber($3.getMinHeightValue())?$3._computedHeightFlexValue-$3.getMinHeightValue():$3._computedHeightFlexValue;
if($e>0){$3._allocationLoops=Math.floor($e/$3._computedHeightParsed);
}else{qx.lang.Array.removeAt($4,
$7);
$3._computedHeightFlexValue=Math.round($3._computedHeightFlexValue);
$6+=Math.round($3._computedHeightFlexValue-$e);
}}}while($c!=0&&$9>0){$9=$4.length;
$d=Infinity;
$g=0;
for($7=0;$7<$9;$7++){$d=Math.min($d,
$4[$7]._allocationLoops);
$g+=$4[$7]._computedHeightParsed;
}$f=Math.min($g*$d,
$c);
$c-=$f;
for($7=$9-1;$7>=0;$7--){$3=$4[$7];
$3._computedHeightFlexValue+=$f/$g*$3._computedHeightParsed;
if($3._allocationLoops==$d){$3._computedHeightFlexValue=Math.round($3._computedHeightFlexValue);
$6+=$3._computedHeightFlexValue;
delete $3._allocationLoops;
qx.lang.Array.removeAt($4,
$7);
}else{if($c==0){$3._computedHeightFlexValue=Math.round($3._computedHeightFlexValue);
$6+=$3._computedHeightFlexValue;
delete $3._allocationLoops;
}else{$3._allocationLoops-=$d;
}}}}}}$3._computedHeightFlexValue+=$5-$6;
},
invalidateChildrenFlexHeight:function(){delete this._childrenFlexHeightComputed;
},
computeChildrenNeededHeight:function(){var $0=this.getWidget();
return qx.ui.layout.impl.LayoutImpl.prototype.computeChildrenNeededHeight_sum.call(this)+(($0.getVisibleChildrenLength()-1)*$0.getSpacing());
},
updateSelfOnChildOuterHeightChange:function($0){this.getWidget()._invalidateAccumulatedChildrenOuterHeight();
},
updateChildOnInnerWidthChange:function($0){var $1=$0._recomputePercentX();
var $2=$0._recomputeStretchingX();
if(($0.getHorizontalAlign()||this.getWidget().getHorizontalChildrenAlign())=="center"){$0.addToLayoutChanges("locationX");
}return $1||$2;
},
updateChildOnInnerHeightChange:function($0){if(this.getWidget().getVerticalChildrenAlign()=="middle"){$0.addToLayoutChanges("locationY");
}var $1=$0._recomputePercentY();
var $2=$0._recomputeFlexY();
return $1||$2;
},
updateSelfOnJobQueueFlush:function($0){if($0.addChild||$0.removeChild){this.getWidget()._invalidateAccumulatedChildrenOuterHeight();
}},
updateChildrenOnJobQueueFlush:function($0){var $1=false,
$2=false;
var $3=this.getWidget();
if($0.orientation){$1=$2=true;
}if($0.spacing||$0.orientation||$0.reverseChildrenOrder||$0.verticalChildrenAlign){$3._addChildrenToLayoutQueue("locationY");
}
if($0.horizontalChildrenAlign){$3._addChildrenToLayoutQueue("locationX");
}
if($0.stretchChildrenOrthogonalAxis){$1=true;
}if($1){$3._recomputeChildrenStretchingX();
$3._addChildrenToLayoutQueue("width");
}
if($2){$3._recomputeChildrenStretchingY();
$3._addChildrenToLayoutQueue("height");
}return true;
},
updateChildrenOnRemoveChild:function($0,
$1){var $2=this.getWidget(),
$3=$2.getVisibleChildren(),
$4=$3.length,
$5,
$6=-1;
if(this.getEnableFlexSupport()){for(var $6=0;$6<$4;$6++){$5=$3[$6];
if($5.getHasFlexY()){$1=Math.min($1,
$6);
break;
}}$6=-1;
}switch($2.getLayoutMode()){case "bottom":case "top-reversed":while(($5=$3[++$6])&&$6<$1){$5.addToLayoutChanges("locationY");
}break;
case "middle":case "middle-reversed":while($5=$3[++$6]){$5.addToLayoutChanges("locationY");
}break;
default:$6+=$1;
while($5=$3[++$6]){$5.addToLayoutChanges("locationY");
}}},
updateChildrenOnMoveChild:function($0,
$1,
$2){var $3=this.getWidget().getVisibleChildren();
var $4=Math.min($1,
$2);
var $5=Math.max($1,
$2)+1;
for(var $6=$4;$6<$5;$6++){$3[$6].addToLayoutChanges("locationY");
}},
flushChildrenQueue:function($0){var $1=this.getWidget(),
$2=$1.getVisibleChildren(),
$3=$2.length,
$4,
$5;
if(this.getEnableFlexSupport()){this.invalidateChildrenFlexHeight();
for($5=0;$5<$3;$5++){$4=$2[$5];
if($4.getHasFlexY()){$4._computedHeightValue=null;
if($4._recomputeBoxHeight()){$4._recomputeOuterHeight();
$4._recomputeInnerHeight();
}$0[$4.toHashCode()]=$4;
$4._layoutChanges.height=true;
}}}
switch($1.getLayoutMode()){case "bottom":case "top-reversed":for(var $5=$3-1;$5>=0&&!$0[$2[$5].toHashCode()];$5--){}for(var $6=0;$6<=$5;$6++){$1._layoutChild($4=$2[$6]);
}break;
case "middle":case "middle-reversed":$5=-1;
while($4=$2[++$5]){$1._layoutChild($4);
}break;
default:$5=-1;
var $7=false;
while($4=$2[++$5]){if($7||$0[$4.toHashCode()]){$1._layoutChild($4);
$7=true;
}}}},
layoutChild:function($0,
$1){this.layoutChild_sizeX($0,
$1);
this.layoutChild_sizeY($0,
$1);
this.layoutChild_sizeLimitX($0,
$1);
this.layoutChild_sizeLimitY($0,
$1);
this.layoutChild_locationX($0,
$1);
this.layoutChild_locationY($0,
$1);
this.layoutChild_marginX($0,
$1);
this.layoutChild_marginY($0,
$1);
},
layoutChild_sizeX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function($0,
$1){if($1.initial||$1.width||$1.minWidth||$1.maxWidth){if(($0._isWidthEssential()&&(!$0._computedWidthTypeNull||!$0._computedMinWidthTypeNull||!$0._computedMaxWidthTypeNull))||($0.getAllowStretchX()&&this.getWidget().getStretchChildrenOrthogonalAxis())){$0._renderRuntimeWidth($0.getBoxWidth());
}else{$0._resetRuntimeWidth();
}}},
"default":function($0,
$1){if($1.initial||$1.width){if($0._isWidthEssential()&&!$0._computedWidthTypeNull){$0._renderRuntimeWidth($0.getWidthValue());
}else{$0._resetRuntimeWidth();
}}}}),
layoutChild_sizeY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function($0,
$1){if($1.initial||$1.height||$1.minHeight||$1.maxHeight){if($0._isHeightEssential()&&(!$0._computedHeightTypeNull||!$0._computedMinHeightTypeNull||!$0._computedMaxHeightTypeNull)){$0._renderRuntimeHeight($0.getBoxHeight());
}else{$0._resetRuntimeHeight();
}}},
"default":function($0,
$1){if($1.initial||$1.height){if($0._isHeightEssential()&&!$0._computedHeightTypeNull){$0._renderRuntimeHeight($0.getHeightValue());
}else{$0._resetRuntimeHeight();
}}}}),
layoutChild_locationY:function($0,
$1){var $2=this.getWidget();
if($2.getFirstVisibleChild()==$0){switch($2.getLayoutMode()){case "bottom":case "top-reversed":var $3=$2.getPaddingBottom()+$2.getAccumulatedChildrenOuterHeight()-$0.getOuterHeight();
break;
case "middle":case "middle-reversed":var $3=$2.getPaddingTop()+Math.round(($2.getInnerHeight()-$2.getAccumulatedChildrenOuterHeight())/2);
break;
default:var $3=$2.getPaddingTop();
}}else{var $4=$0.getPreviousVisibleSibling();
switch($2.getLayoutMode()){case "bottom":case "top-reversed":var $3=$4._cachedLocationVertical-$0.getOuterHeight()-$2.getSpacing();
break;
default:var $3=$4._cachedLocationVertical+$4.getOuterHeight()+$2.getSpacing();
}}$0._cachedLocationVertical=$3;
switch(this.getWidget().getLayoutMode()){case "bottom":case "bottom-reversed":case "middle-reversed":$3+=!$0._computedBottomTypeNull?$0.getBottomValue():!$0._computedTopTypeNull?-($0.getTopValue()):0;
$0._resetRuntimeTop();
$0._renderRuntimeBottom($3);
break;
default:$3+=!$0._computedTopTypeNull?$0.getTopValue():!$0._computedBottomTypeNull?-($0.getBottomValue()):0;
$0._resetRuntimeBottom();
$0._renderRuntimeTop($3);
}},
layoutChild_locationX:function($0,
$1){var $2=this.getWidget();
if(qx.core.Variant.isSet("qx.client",
"gecko")){if($0.getAllowStretchX()&&$2.getStretchChildrenOrthogonalAxis()&&$0._computedWidthTypeNull){$0._renderRuntimeLeft($2.getPaddingLeft()||0);
$0._renderRuntimeRight($2.getPaddingRight()||0);
return;
}}var $3=$0.getHorizontalAlign()||$2.getHorizontalChildrenAlign();
var $4=$3=="center"?Math.round(($2.getInnerWidth()-$0.getOuterWidth())/2):0;
if($3=="right"){$4+=$2.getPaddingRight();
if(!$0._computedRightTypeNull){$4+=$0.getRightValue();
}else if(!$0._computedLeftTypeNull){$4-=$0.getLeftValue();
}$0._resetRuntimeLeft();
$0._renderRuntimeRight($4);
}else{$4+=$2.getPaddingLeft();
if(!$0._computedLeftTypeNull){$4+=$0.getLeftValue();
}else if(!$0._computedRightTypeNull){$4-=$0.getRightValue();
}$0._resetRuntimeRight();
$0._renderRuntimeLeft($4);
}}}});




/* ID: qx.util.Validation */
qx.Class.define("qx.util.Validation",
{statics:{isValid:function($0){switch(typeof $0){case "undefined":return false;
case "object":return $0!==null;
case "string":return $0!=="";
case "number":return !isNaN($0);
case "function":case "boolean":return true;
}return false;
},
isInvalid:function($0){switch(typeof $0){case "undefined":return true;
case "object":return $0===null;
case "string":return $0==="";
case "number":return isNaN($0);
case "function":case "boolean":return false;
}return true;
},
isValidNumber:function($0){return typeof $0==="number"&&!isNaN($0);
},
isInvalidNumber:function($0){return typeof $0!=="number"||isNaN($0);
},
isValidString:function($0){return typeof $0==="string"&&$0!=="";
},
isInvalidString:function($0){return typeof $0!=="string"||$0==="";
},
isValidArray:function($0){return typeof $0==="object"&&$0!==null&&$0 instanceof Array;
},
isInvalidArray:function($0){return typeof $0!=="object"||$0===null||!($0 instanceof Array);
},
isValidObject:function($0){return typeof $0==="object"&&$0!==null&&!($0 instanceof Array);
},
isInvalidObject:function($0){return typeof $0!=="object"||$0===null||$0 instanceof Array;
},
isValidNode:function($0){return typeof $0==="object"&&$0!==null;
},
isInvalidNode:function($0){return typeof $0!=="object"||$0===null;
},
isValidElement:function($0){return typeof $0==="object"&&$0!==null||$0.nodeType!==1;
},
isInvalidElement:function($0){return typeof $0!=="object"||$0===null||$0.nodeType!==1;
},
isValidFunction:function($0){return typeof $0==="function";
},
isInvalidFunction:function($0){return typeof $0!=="function";
},
isValidBoolean:function($0){return typeof $0==="boolean";
},
isInvalidBoolean:function($0){return typeof $0!=="boolean";
},
isValidStringOrNumber:function($0){switch(typeof $0){case "string":return $0!=="";
case "number":return !isNaN($0);
}return false;
},
isInvalidStringOrNumber:function($0){switch(typeof $0){case "string":return $0==="";
case "number":return isNaN($0);
}return false;
}}});




/* ID: qx.ui.layout.impl.HorizontalBoxLayoutImpl */
qx.Class.define("qx.ui.layout.impl.HorizontalBoxLayoutImpl",
{extend:qx.ui.layout.impl.LayoutImpl,
properties:{enableFlexSupport:{check:"Boolean",
init:true}},
members:{computeChildBoxWidth:function($0){return $0.getWidthValue()||$0._computeBoxWidthFallback();
},
computeChildBoxHeight:function($0){if(this.getWidget().getStretchChildrenOrthogonalAxis()&&$0._computedHeightTypeNull&&$0.getAllowStretchY()){return this.getWidget().getInnerHeight();
}return $0.getHeightValue()||$0._computeBoxHeightFallback();
},
computeChildrenFlexWidth:function(){if(this._childrenFlexWidthComputed||!this.getEnableFlexSupport()){return;
}this._childrenFlexWidthComputed=true;
var $0=this.getWidget();
var $1=$0.getVisibleChildren();
var $2=$1.length;
var $3;
var $4=[];
var $5=$0.getInnerWidth();
var $6=$0.getSpacing()*($2-1);
var $7;
for($7=0;$7<$2;$7++){$3=$1[$7];
if($3._computedWidthTypeFlex){$4.push($3);
if($0._computedWidthTypeAuto){$6+=$3.getPreferredBoxWidth();
}}else{$6+=$3.getOuterWidth();
}}var $8=$5-$6;
var $9=$4.length;
var $a=0;
for($7=0;$7<$9;$7++){$a+=$4[$7]._computedWidthParsed;
}var $b=$8/$a;
if(!$0.getUseAdvancedFlexAllocation()){for($7=0;$7<$9;$7++){$3=$4[$7];
$3._computedWidthFlexValue=Math.round($3._computedWidthParsed*$b);
$6+=$3._computedWidthFlexValue;
}}else{var $c=0;
var $d,
$9,
$e,
$f,
$g,
$h;
for($7=0;$7<$9;$7++){$3=$4[$7];
$h=$3._computedWidthFlexValue=$3._computedWidthParsed*$b;
$c+=$h-qx.lang.Number.limit($h,
$3.getMinWidthValue(),
$3.getMaxWidthValue());
}$c=Math.round($c);
if($c==0){for($7=0;$7<$9;$7++){$3=$4[$7];
$3._computedWidthFlexValue=Math.round($3._computedWidthFlexValue);
$6+=$3._computedWidthFlexValue;
}}else{var $i=$c>0;
for($7=$9-1;$7>=0;$7--){$3=$4[$7];
if($i){$e=($3.getMaxWidthValue()||Infinity)-$3._computedWidthFlexValue;
if($e>0){$3._allocationLoops=Math.floor($e/$3._computedWidthParsed);
}else{qx.lang.Array.removeAt($4,
$7);
$3._computedWidthFlexValue=Math.round($3._computedWidthFlexValue);
$6+=Math.round($3._computedWidthFlexValue+$e);
}}else{$e=qx.util.Validation.isValidNumber($3.getMinWidthValue())?$3._computedWidthFlexValue-$3.getMinWidthValue():$3._computedWidthFlexValue;
if($e>0){$3._allocationLoops=Math.floor($e/$3._computedWidthParsed);
}else{qx.lang.Array.removeAt($4,
$7);
$3._computedWidthFlexValue=Math.round($3._computedWidthFlexValue);
$6+=Math.round($3._computedWidthFlexValue-$e);
}}}while($c!=0&&$9>0){$9=$4.length;
$d=Infinity;
$g=0;
for($7=0;$7<$9;$7++){$d=Math.min($d,
$4[$7]._allocationLoops);
$g+=$4[$7]._computedWidthParsed;
}$f=Math.min($g*$d,
$c);
$c-=$f;
for($7=$9-1;$7>=0;$7--){$3=$4[$7];
$3._computedWidthFlexValue+=$f/$g*$3._computedWidthParsed;
if($3._allocationLoops==$d){$3._computedWidthFlexValue=Math.round($3._computedWidthFlexValue);
$6+=$3._computedWidthFlexValue;
delete $3._allocationLoops;
qx.lang.Array.removeAt($4,
$7);
}else{if($c==0){$3._computedWidthFlexValue=Math.round($3._computedWidthFlexValue);
$6+=$3._computedWidthFlexValue;
delete $3._allocationLoops;
}else{$3._allocationLoops-=$d;
}}}}}}$3._computedWidthFlexValue+=$5-$6;
},
invalidateChildrenFlexWidth:function(){delete this._childrenFlexWidthComputed;
},
computeChildrenNeededWidth:function(){var $0=this.getWidget();
return qx.ui.layout.impl.LayoutImpl.prototype.computeChildrenNeededWidth_sum.call(this)+(($0.getVisibleChildrenLength()-1)*$0.getSpacing());
},
updateSelfOnChildOuterWidthChange:function($0){this.getWidget()._invalidateAccumulatedChildrenOuterWidth();
},
updateChildOnInnerWidthChange:function($0){if(this.getWidget().getHorizontalChildrenAlign()=="center"){$0.addToLayoutChanges("locationX");
}var $1=$0._recomputePercentX();
var $2=$0._recomputeFlexX();
return $1||$2;
},
updateChildOnInnerHeightChange:function($0){var $1=$0._recomputePercentY();
var $2=$0._recomputeStretchingY();
if(($0.getVerticalAlign()||this.getWidget().getVerticalChildrenAlign())=="middle"){$0.addToLayoutChanges("locationY");
}return $1||$2;
},
updateSelfOnJobQueueFlush:function($0){if($0.addChild||$0.removeChild){this.getWidget()._invalidateAccumulatedChildrenOuterWidth();
}},
updateChildrenOnJobQueueFlush:function($0){var $1=false,
$2=false;
var $3=this.getWidget();
if($0.orientation){$1=$2=true;
}if($0.spacing||$0.orientation||$0.reverseChildrenOrder||$0.horizontalChildrenAlign){$3._addChildrenToLayoutQueue("locationX");
}
if($0.verticalChildrenAlign){$3._addChildrenToLayoutQueue("locationY");
}
if($0.stretchChildrenOrthogonalAxis){$2=true;
}if($1){$3._recomputeChildrenStretchingX();
$3._addChildrenToLayoutQueue("width");
}
if($2){$3._recomputeChildrenStretchingY();
$3._addChildrenToLayoutQueue("height");
}return true;
},
updateChildrenOnRemoveChild:function($0,
$1){var $2=this.getWidget(),
$3=$2.getVisibleChildren(),
$4=$3.length,
$5,
$6=-1;
if(this.getEnableFlexSupport()){for($6=0;$6<$4;$6++){$5=$3[$6];
if($5.getHasFlexX()){$1=Math.min($1,
$6);
break;
}}$6=-1;
}switch($2.getLayoutMode()){case "right":case "left-reversed":while(($5=$3[++$6])&&$6<$1){$5.addToLayoutChanges("locationX");
}break;
case "center":case "center-reversed":while($5=$3[++$6]){$5.addToLayoutChanges("locationX");
}break;
default:$6+=$1;
while($5=$3[++$6]){$5.addToLayoutChanges("locationX");
}}},
updateChildrenOnMoveChild:function($0,
$1,
$2){var $3=this.getWidget().getVisibleChildren();
var $4=Math.min($1,
$2);
var $5=Math.max($1,
$2)+1;
for(var $6=$4;$6<$5;$6++){$3[$6].addToLayoutChanges("locationX");
}},
flushChildrenQueue:function($0){var $1=this.getWidget(),
$2=$1.getVisibleChildren(),
$3=$2.length,
$4,
$5;
if(this.getEnableFlexSupport()){this.invalidateChildrenFlexWidth();
for($5=0;$5<$3;$5++){$4=$2[$5];
if($4.getHasFlexX()){$4._computedWidthValue=null;
if($4._recomputeBoxWidth()){$4._recomputeOuterWidth();
$4._recomputeInnerWidth();
}$0[$4.toHashCode()]=$4;
$4._layoutChanges.width=true;
}}}
switch($1.getLayoutMode()){case "right":case "left-reversed":for(var $5=$3-1;$5>=0&&!$0[$2[$5].toHashCode()];$5--){}for(var $6=0;$6<=$5;$6++){$1._layoutChild($4=$2[$6]);
}break;
case "center":case "center-reversed":$5=-1;
while($4=$2[++$5]){$1._layoutChild($4);
}break;
default:$5=-1;
var $7=false;
while($4=$2[++$5]){if($7||$0[$4.toHashCode()]){$1._layoutChild($4);
$7=true;
}}}},
layoutChild:function($0,
$1){this.layoutChild_sizeX($0,
$1);
this.layoutChild_sizeY($0,
$1);
this.layoutChild_sizeLimitX($0,
$1);
this.layoutChild_sizeLimitY($0,
$1);
this.layoutChild_locationX($0,
$1);
this.layoutChild_locationY($0,
$1);
this.layoutChild_marginX($0,
$1);
this.layoutChild_marginY($0,
$1);
},
layoutChild_sizeX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function($0,
$1){if($1.initial||$1.width||$1.minWidth||$1.maxWidth){if($0._isWidthEssential()&&(!$0._computedWidthTypeNull||!$0._computedMinWidthTypeNull||!$0._computedMaxWidthTypeNull)){$0._renderRuntimeWidth($0.getBoxWidth());
}else{$0._resetRuntimeWidth();
}}},
"default":function($0,
$1){if($1.initial||$1.width){if($0._isWidthEssential()&&!$0._computedWidthTypeNull){$0._renderRuntimeWidth($0.getWidthValue());
}else{$0._resetRuntimeWidth();
}}}}),
layoutChild_sizeY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function($0,
$1){if($1.initial||$1.height||$1.minHeight||$1.maxHeight){if(($0._isHeightEssential()&&(!$0._computedHeightTypeNull||!$0._computedMinHeightTypeNull||!$0._computedMaxHeightTypeNull))||($0.getAllowStretchY()&&this.getWidget().getStretchChildrenOrthogonalAxis())){$0._renderRuntimeHeight($0.getBoxHeight());
}else{$0._resetRuntimeHeight();
}}},
"default":function($0,
$1){if($1.initial||$1.height){if($0._isHeightEssential()&&!$0._computedHeightTypeNull){$0._renderRuntimeHeight($0.getHeightValue());
}else{$0._resetRuntimeHeight();
}}}}),
layoutChild_locationX:function($0,
$1){var $2=this.getWidget();
if($2.getFirstVisibleChild()==$0){switch($2.getLayoutMode()){case "right":case "left-reversed":var $3=$2.getPaddingRight()+$2.getAccumulatedChildrenOuterWidth()-$0.getOuterWidth();
break;
case "center":case "center-reversed":var $3=$2.getPaddingLeft()+Math.round(($2.getInnerWidth()-$2.getAccumulatedChildrenOuterWidth())/2);
break;
default:var $3=$2.getPaddingLeft();
}}else{var $4=$0.getPreviousVisibleSibling();
switch($2.getLayoutMode()){case "right":case "left-reversed":var $3=$4._cachedLocationHorizontal-$0.getOuterWidth()-$2.getSpacing();
break;
default:var $3=$4._cachedLocationHorizontal+$4.getOuterWidth()+$2.getSpacing();
}}$0._cachedLocationHorizontal=$3;
switch($2.getLayoutMode()){case "right":case "right-reversed":case "center-reversed":$3+=!$0._computedRightTypeNull?$0.getRightValue():!$0._computedLeftTypeNull?-($0.getLeftValue()):0;
$0._resetRuntimeLeft();
$0._renderRuntimeRight($3);
break;
default:$3+=!$0._computedLeftTypeNull?$0.getLeftValue():!$0._computedRightTypeNull?-($0.getRightValue()):0;
$0._resetRuntimeRight();
$0._renderRuntimeLeft($3);
}},
layoutChild_locationY:function($0,
$1){var $2=this.getWidget();
if(qx.core.Variant.isSet("qx.client",
"gecko")){if($0.getAllowStretchY()&&$2.getStretchChildrenOrthogonalAxis()&&$0._computedHeightTypeNull){$0._renderRuntimeTop($2.getPaddingTop()||0);
$0._renderRuntimeBottom($2.getPaddingBottom()||0);
return;
}}var $3=$0.getVerticalAlign()||$2.getVerticalChildrenAlign();
var $4=$3=="middle"?Math.round(($2.getInnerHeight()-$0.getOuterHeight())/2):0;
if($3=="bottom"){$4+=$2.getPaddingBottom();
if(!$0._computedBottomTypeNull){$4+=$0.getBottomValue();
}else if(!$0._computedTopTypeNull){$4-=$0.getTopValue();
}$0._resetRuntimeTop();
$0._renderRuntimeBottom($4);
}else{$4+=$2.getPaddingTop();
if(!$0._computedTopTypeNull){$4+=$0.getTopValue();
}else if(!$0._computedBottomTypeNull){$4-=$0.getBottomValue();
}$0._resetRuntimeBottom();
$0._renderRuntimeTop($4);
}}}});




/* ID: qx.ui.layout.HorizontalBoxLayout */
qx.Class.define("qx.ui.layout.HorizontalBoxLayout",
{extend:qx.ui.layout.BoxLayout});




/* ID: qx.ui.toolbar.ToolBar */
qx.Class.define("qx.ui.toolbar.ToolBar",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function(){arguments.callee.base.call(this);
this.addEventListener("keypress",
this._onkeypress);
this.initHeight();
},
properties:{appearance:{refine:true,
init:"toolbar"},
height:{refine:true,
init:"auto"},
openMenu:{check:"qx.ui.menu.Menu",
event:"changeOpenMenu",
nullable:true},
show:{init:"both",
check:["both",
"label",
"icon",
"none"],
nullable:true,
inheritable:true,
event:"changeShow"}},
members:{getAllButtons:function(){var $0=this.getChildren();
var $1=$0.length;
var $2=[];
var $3;
for(var $4=0;$4<$1;$4++){$3=$0[$4];
if($3 instanceof qx.ui.toolbar.MenuButton){$2.push($3);
}else if($3 instanceof qx.ui.toolbar.Part){$2=$2.concat($3.getChildren());
}}return $2;
},
_onkeypress:function($0){switch($0.getKeyIdentifier()){case "Left":return this._onkeypress_left();
case "Right":return this._onkeypress_right();
}},
_onkeypress_left:function(){var $0=this.getOpenMenu();
if(!$0){return;
}var $1=$0.getOpener();
if(!$1){return;
}var $2=this.getAllButtons();
var $3=$2.length;
var $4=$2.indexOf($1);
var $5;
var $6=null;
for(var $7=$4-1;$7>=0;$7--){$5=$2[$7];
if($5 instanceof qx.ui.toolbar.MenuButton&&$5.getEnabled()){$6=$5;
break;
}}if(!$6){for(var $7=$3-1;$7>$4;$7--){$5=$2[$7];
if($5 instanceof qx.ui.toolbar.MenuButton&&$5.getEnabled()){$6=$5;
break;
}}}
if($6){qx.ui.menu.Manager.getInstance().update();
$6._showMenu(true);
}},
_onkeypress_right:function(){var $0=this.getOpenMenu();
if(!$0){return;
}var $1=$0.getOpener();
if(!$1){return;
}var $2=this.getAllButtons();
var $3=$2.length;
var $4=$2.indexOf($1);
var $5;
var $6=null;
for(var $7=$4+1;$7<$3;$7++){$5=$2[$7];
if($5 instanceof qx.ui.toolbar.MenuButton&&$5.getEnabled()){$6=$5;
break;
}}if(!$6){for(var $7=0;$7<$4;$7++){$5=$2[$7];
if($5 instanceof qx.ui.toolbar.MenuButton&&$5.getEnabled()){$6=$5;
break;
}}}
if($6){qx.ui.menu.Manager.getInstance().update();
$6._showMenu(true);
}}}});




/* ID: qx.ui.basic.Atom */
qx.Class.define("qx.ui.basic.Atom",
{extend:qx.ui.layout.BoxLayout,
construct:function($0,
$1,
$2,
$3,
$4){arguments.callee.base.call(this);
this.getLayoutImpl().setEnableFlexSupport(false);
if($0!==undefined){this.setLabel($0);
}if(qx.Class.isDefined("qx.ui.embed.Flash")&&$4!=null&&$2!=null&&$3!=null&&qx.ui.embed.Flash.getPlayerVersion().getMajor()>0){this._flashMode=true;
this.setIcon($4);
}else if($1!=null){this.setIcon($1);
}
if($1||$4){if($2!=null){this.setIconWidth($2);
}
if($3!=null){this.setIconHeight($3);
}}this.initWidth();
this.initHeight();
},
properties:{orientation:{refine:true,
init:"horizontal"},
allowStretchX:{refine:true,
init:false},
allowStretchY:{refine:true,
init:false},
appearance:{refine:true,
init:"atom"},
stretchChildrenOrthogonalAxis:{refine:true,
init:false},
width:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"},
horizontalChildrenAlign:{refine:true,
init:"center"},
verticalChildrenAlign:{refine:true,
init:"middle"},
spacing:{refine:true,
init:4},
label:{apply:"_applyLabel",
nullable:true,
dispose:true,
check:"Label"},
icon:{check:"String",
apply:"_applyIcon",
nullable:true,
themeable:true},
disabledIcon:{check:"String",
apply:"_applyDisabledIcon",
nullable:true,
themeable:true},
show:{init:"both",
check:["both",
"label",
"icon",
"none"],
themeable:true,
nullable:true,
inheritable:true,
apply:"_applyShow",
event:"changeShow"},
iconPosition:{init:"left",
check:["top",
"right",
"bottom",
"left"],
themeable:true,
apply:"_applyIconPosition"},
iconWidth:{check:"Integer",
themeable:true,
apply:"_applyIconWidth",
nullable:true},
iconHeight:{check:"Integer",
themeable:true,
apply:"_applyIconHeight",
nullable:true}},
members:{_flashMode:false,
_labelObject:null,
_iconObject:null,
_createLabel:function(){var $0=this._labelObject=new qx.ui.basic.Label(this.getLabel());
$0.setAnonymous(true);
$0.setCursor("default");
this.addAt($0,
this._iconObject?1:0);
},
_createIcon:function(){if(this._flashMode&&qx.Class.isDefined("qx.ui.embed.Flash")){var $0=this._iconObject=new qx.ui.embed.Flash(this.getIcon());
}else{var $0=this._iconObject=new qx.ui.basic.Image();
}$0.setAnonymous(true);
var $1=this.getIconWidth();
if($1!==null){this._iconObject.setWidth($1);
}var $2=this.getIconWidth();
if($2!==null){this._iconObject.setHeight($2);
}this._updateIcon();
this.addAt($0,
0);
},
_updateIcon:function(){var $0=this.getIcon();
if(this._iconObject&&this.getIcon&&this.getDisabledIcon){var $1=this.getDisabledIcon();
if($1){if(this.getEnabled()){$0?this._iconObject.setSource($0):this._iconObject.resetSource();
}else{$1?this._iconObject.setSource($1):this._iconObject.resetSource();
}this._iconObject.setEnabled(true);
}else{$0?this._iconObject.setSource($0):this._iconObject.resetSource();
this._iconObject.resetEnabled();
}}},
getLabelObject:function(){return this._labelObject;
},
getIconObject:function(){return this._iconObject;
},
_applyIconPosition:function($0,
$1){switch($0){case "top":case "bottom":this.setOrientation("vertical");
this.setReverseChildrenOrder($0=="bottom");
break;
default:this.setOrientation("horizontal");
this.setReverseChildrenOrder($0=="right");
break;
}},
_applyShow:function($0,
$1){this._handleIcon();
this._handleLabel();
},
_applyLabel:function($0,
$1){if(this._labelObject){$0?this._labelObject.setText($0):this._labelObject.resetText();
}this._handleLabel();
},
_applyIcon:function($0,
$1){this._updateIcon();
this._handleIcon();
},
_applyDisabledIcon:function($0,
$1){this._updateIcon();
this._handleIcon();
},
_applyIconWidth:function($0,
$1){if(this._iconObject){this._iconObject.setWidth($0);
}},
_applyIconHeight:function($0,
$1){if(this._iconObject){this._iconObject.setHeight($0);
}},
_iconIsVisible:false,
_labelIsVisible:false,
_handleLabel:function(){switch(this.getShow()){case "label":case "both":case "inherit":this._labelIsVisible=!!this.getLabel();
break;
default:this._labelIsVisible=false;
}
if(this._labelIsVisible){this._labelObject?this._labelObject.setDisplay(true):this._createLabel();
}else if(this._labelObject){this._labelObject.setDisplay(false);
}},
_handleIcon:function(){switch(this.getShow()){case "icon":case "both":case "inherit":this._iconIsVisible=!!this.getIcon();
break;
default:this._iconIsVisible=false;
}
if(this._iconIsVisible){this._iconObject?this._iconObject.setDisplay(true):this._createIcon();
}else if(this._iconObject){this._iconObject.setDisplay(false);
}}},
destruct:function(){this._disposeObjects("_iconObject",
"_labelObject");
}});




/* ID: qx.ui.basic.Label */
qx.Class.define("qx.ui.basic.Label",
{extend:qx.ui.basic.Terminator,
construct:function($0,
$1,
$2){arguments.callee.base.call(this);
if($2!=null){this.setMode($2);
}
if($0!=null){this.setText($0);
}
if($1!=null){this.setMnemonic($1);
}this.initWidth();
this.initHeight();
this.initSelectable();
this.initCursor();
this.initWrap();
},
statics:{_getMeasureNode:function(){var $0=this._measureNode;
if(!$0){$0=document.createElement("div");
var $1=$0.style;
$1.width=$1.height="auto";
$1.visibility="hidden";
$1.position="absolute";
$1.zIndex="-1";
document.body.appendChild($0);
this._measureNode=$0;
}return $0;
}},
properties:{appearance:{refine:true,
init:"label"},
width:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"},
allowStretchX:{refine:true,
init:false},
allowStretchY:{refine:true,
init:false},
selectable:{refine:true,
init:false},
cursor:{refine:true,
init:"default"},
text:{apply:"_applyText",
init:"",
dispose:true,
event:"changeText",
check:"Label"},
wrap:{check:"Boolean",
init:false,
nullable:true,
apply:"_applyWrap"},
textAlign:{check:["left",
"center",
"right",
"justify"],
nullable:true,
themeable:true,
apply:"_applyTextAlign"},
textOverflow:{check:"Boolean",
init:true,
apply:"_applyText"},
mode:{check:["html",
"text",
"auto"],
init:"auto",
apply:"_applyText"},
mnemonic:{check:"String",
nullable:true,
apply:"_applyMnemonic"}},
members:{_content:"",
_isHtml:false,
setHtml:function($0){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"please use setText() instead.");
this.setText($0);
},
getHtml:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"please use getText() instead.");
return this.getText();
},
_applyTextAlign:function($0,
$1){$0===null?this.removeStyleProperty("textAlign"):this.setStyleProperty("textAlign",
$0);
},
_applyFont:function($0,
$1){qx.theme.manager.Font.getInstance().connect(this._styleFont,
this,
$0);
},
_styleFont:function($0){this._invalidatePreferredInnerDimensions();
$0?$0.render(this):qx.ui.core.Font.reset(this);
},
_applyTextColor:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._styleTextColor,
this,
$0);
},
_styleTextColor:function($0){$0?this.setStyleProperty("color",
$0):this.removeStyleProperty("color");
},
_applyWrap:function($0,
$1){$0==null?this.removeStyleProperty("whiteSpace"):this.setStyleProperty("whiteSpace",
$0?"normal":"nowrap");
},
_applyText:function($0,
$1){qx.locale.Manager.getInstance().connect(this._syncText,
this,
this.getText());
},
_syncText:function($0){var $1=this.getMode();
if($1==="auto"){$1=qx.util.Validation.isValidString($0)&&$0.match(/<.*>/)?"html":"text";
}
switch($1){case "text":var $2=qx.html.String.escape($0).replace(/(^ | $)/g,
"&nbsp;").replace(/  /g,
"&nbsp;&nbsp;");
this._isHtml=$2!==$0;
this._content=$2;
break;
case "html":this._isHtml=true;
this._content=$0;
break;
}
if(this._isCreated){this._renderContent();
}},
_applyMnemonic:function($0,
$1){this._mnemonicTest=$0?new RegExp("^(((<([^>]|"+$0+")+>)|(&([^;]|"+$0+")+;)|[^&"+$0+"])*)("+$0+")",
"i"):null;
if(this._isCreated){this._renderContent();
}},
_computeObjectNeededDimensions:function(){var $0=arguments.callee.self._getMeasureNode();
var $1=$0.style;
var $2=this._styleProperties;
$1.fontFamily=$2.fontFamily||"";
$1.fontSize=$2.fontSize||"";
$1.fontWeight=$2.fontWeight||"";
$1.fontStyle=$2.fontStyle||"";
if(this._isHtml){$0.innerHTML=this._content;
}else{$0.innerHTML="";
qx.dom.Element.setTextContent($0,
this._content);
}this._cachedPreferredInnerWidth=$0.scrollWidth;
this._cachedPreferredInnerHeight=$0.scrollHeight;
},
_computePreferredInnerWidth:function(){this._computeObjectNeededDimensions();
return this._cachedPreferredInnerWidth;
},
_computePreferredInnerHeight:function(){this._computeObjectNeededDimensions();
return this._cachedPreferredInnerHeight;
},
__patchTextOverflow:function($0,
$1){return ("<div style='float:left;width:"+($1-14)+"px;overflow:hidden;white-space:nowrap'>"+$0+"</div><span style='float:left'>&hellip;</span>");
},
_postApply:function(){var $0=this._content;
var $1=this._getTargetNode();
if($0==null){$1.innerHTML="";
return;
}
if(this.getMnemonic()){if(this._mnemonicTest.test($0)){$0=RegExp.$1+"<span style=\"text-decoration:underline\">"+RegExp.$7+"</span>"+RegExp.rightContext;
this._isHtml=true;
}else{$0+=" ("+this.getMnemonic()+")";
}}var $2=$1.style;
if(this.getTextOverflow()&&!this.getWrap()){if(this.getInnerWidth()<this.getPreferredInnerWidth()){$2.overflow="hidden";
if(qx.core.Variant.isSet("qx.client",
"mshtml|webkit")){$2.textOverflow="ellipsis";
}else if(qx.core.Variant.isSet("qx.client",
"opera")){$2.OTextOverflow="ellipsis";
}else{$0=this.__patchTextOverflow($0,
this.getInnerWidth());
this._isHtml=true;
}}else{$2.overflow="";
if(qx.core.Variant.isSet("qx.client",
"mshtml|webkit")){$2.textOverflow="";
}else if(qx.core.Variant.isSet("qx.client",
"opera")){$2.OTextOverflow="";
}}}
if(this._isHtml){$1.innerHTML=$0;
}else{$1.innerHTML="";
qx.dom.Element.setTextContent($1,
$0);
}}}});




/* ID: qx.locale.Manager */
qx.Class.define("qx.locale.Manager",
{type:"singleton",
extend:qx.util.manager.Value,
construct:function(){arguments.callee.base.call(this);
this._translationCatalog={};
this.setLocale(qx.core.Client.getInstance().getLocale()||this._defaultLocale);
},
statics:{tr:function($0,
$1){var $2=qx.lang.Array.fromArguments(arguments);
$2.splice(0,
1);
return new qx.locale.LocalizedString($0,
$2);
},
trn:function($0,
$1,
$2,
$3){var $4=qx.lang.Array.fromArguments(arguments);
$4.splice(0,
3);
if($2>1){return new qx.locale.LocalizedString($1,
$4);
}else{return new qx.locale.LocalizedString($0,
$4);
}},
trc:function($0,
$1,
$2){var $3=qx.lang.Array.fromArguments(arguments);
$3.splice(0,
2);
return new qx.locale.LocalizedString($1,
$3);
},
marktr:function($0){return $0;
}},
properties:{locale:{check:"String",
nullable:true,
apply:"_applyLocale",
event:"changeLocale"}},
members:{_defaultLocale:"C",
getLanguage:function(){return this._language;
},
getTerritory:function(){return this.getLocale().split("_")[1]||"";
},
getAvailableLocales:function(){var $0=[];
for(var $1 in this._translationCatalog){if($1!=this._defaultLocale){$0.push($1);
}}return $0;
},
_extractLanguage:function($0){var $1;
var $2=$0.indexOf("_");
if($2==-1){$1=$0;
}else{$1=$0.substring(0,
$2);
}return $1;
},
_applyLocale:function($0,
$1){this._locale=$0;
this._language=this._extractLanguage($0);
this._updateObjects();
},
addTranslation:function($0,
$1){if(this._translationCatalog[$0]){for(var $2 in $1){this._translationCatalog[$0][$2]=$1[$2];
}}else{this._translationCatalog[$0]=$1;
}},
addTranslationFromClass:function($0,
$1){this.addTranslation($0.substring($0.lastIndexOf(".")+1),
$1);
},
translate:function($0,
$1,
$2){var $3;
if($2){var $4=this._extractLanguage($2);
}else{$2=this._locale;
$4=this._language;
}
if(!$3&&this._translationCatalog[$2]){$3=this._translationCatalog[$2][$0];
}
if(!$3&&this._translationCatalog[$4]){$3=this._translationCatalog[$4][$0];
}
if(!$3&&this._translationCatalog[this._defaultLocale]){$3=this._translationCatalog[this._defaultLocale][$0];
}
if(!$3){$3=$0;
}
if($1.length>0){$3=qx.lang.String.format($3,
$1);
}return $3;
},
isDynamic:function($0){return $0 instanceof qx.locale.LocalizedString;
},
resolveDynamic:function($0){return $0.toString();
}},
destruct:function(){this._disposeFields("_translationCatalog");
}});




/* ID: qx.locale.LocalizedString */
qx.Class.define("qx.locale.LocalizedString",
{extend:qx.core.Object,
construct:function($0,
$1,
$2){arguments.callee.base.call(this);
this.setId($0);
this._locale=$2;
var $3=[];
for(var $4=0;$4<$1.length;$4++){var $5=$1[$4];
if($5 instanceof qx.locale.LocalizedString){$3.push($5);
}else{$3.push($5+"");
}}this.setArgs($3);
},
properties:{id:{check:"String",
nullable:true},
args:{nullable:true,
dispose:true}},
members:{_autoDispose:false,
toString:function(){return qx.locale.Manager.getInstance().translate(this.getId(),
this.getArgs(),
this._locale);
}}});




/* ID: qx.dom.Element */
qx.Class.define("qx.dom.Element",
{statics:{cleanWhitespace:function($0){for(var $1=0;$1<$0.childNodes.length;$1++){var $2=$0.childNodes[$1];
if($2.nodeType==qx.dom.Node.TEXT&&!/\S/.test($2.nodeValue)){$0.removeChild($2);
}}},
isEmpty:function($0){return $0.innerHTML.match(/^\s*$/);
},
getTextContent:qx.lang.Object.select(qx.core.Client.getInstance().supportsTextContent()?"textContent":qx.core.Client.getInstance().supportsInnerText()?"innerText":"default",
{innerText:function($0){return $0.innerText||$0.text;
},
textContent:function($0){return $0.textContent;
},
"default":function(){throw new Error("This browser does not support any form of text content handling!");
}}),
setTextContent:qx.lang.Object.select(qx.core.Client.getInstance().supportsTextContent()?"textContent":qx.core.Client.getInstance().supportsInnerText()?"innerText":"default",
{innerText:function($0,
$1){$0.innerText=$1;
},
textContent:function($0,
$1){$0.textContent=$1;
},
"default":function(){throw new Error("This browser does not support any form of text content handling!");
}})}});




/* ID: qx.ui.basic.Image */
qx.Class.define("qx.ui.basic.Image",
{extend:qx.ui.basic.Terminator,
construct:function($0,
$1,
$2){arguments.callee.base.call(this);
this._blank=qx.io.Alias.getInstance().resolve("static/image/blank.gif");
if($0!=null){this.setSource($0);
}if($1!=null){this.setWidth($1);
}else{this.initWidth();
}
if($2!=null){this.setHeight($2);
}else{this.initHeight();
}this.initSelectable();
},
events:{"error":"qx.event.type.Event"},
properties:{allowStretchX:{refine:true,
init:false},
allowStretchY:{refine:true,
init:false},
selectable:{refine:true,
init:false},
width:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"},
appearance:{refine:true,
init:"image"},
source:{check:"String",
apply:"_applySource",
event:"changeSource",
nullable:true,
themeable:true},
preloader:{check:"qx.io.image.Preloader",
apply:"_applyPreloader",
nullable:true},
loaded:{check:"Boolean",
init:false,
apply:"_applyLoaded"},
resizeToInner:{check:"Boolean",
init:false}},
members:{_onload:function(){this.setLoaded(true);
},
_onerror:function(){this.warn("Could not load: "+this.getSource());
this.setLoaded(false);
if(this.hasEventListeners("error")){this.dispatchEvent(new qx.event.type.Event("error"),
true);
}},
_beforeAppear:function(){var $0=this.getSource();
if($0){qx.io.image.Manager.getInstance().show($0);
this._registeredAsVisible=true;
}return arguments.callee.base.call(this);
},
_beforeDisappear:function(){var $0=this.getSource();
if($0&&this._registeredAsVisible){qx.io.image.Manager.getInstance().hide($0);
delete this._registeredAsVisible;
}return arguments.callee.base.call(this);
},
_applySource:function($0,
$1){var $2=qx.io.image.Manager.getInstance();
if($1){$2.remove($1);
if(this._registeredAsVisible){$2.hide($1);
delete this._registeredAsVisible;
}}
if($0){$2.add($0);
if(this.isSeeable()){this._registeredAsVisible=true;
$2.show($0);
}}
if(this.isCreated()){this._connect();
}},
_connect:function(){var $0=qx.io.Alias.getInstance();
$0.connect(this._syncSource,
this,
this.getSource());
},
_syncSource:function($0){if($0===null){this.setPreloader(null);
}else{var $1=qx.io.image.PreloaderManager.getInstance().create($0);
this.setPreloader($1);
}},
_applyPreloader:function($0,
$1){if($1){$1.removeEventListener("load",
this._onload,
this);
$1.removeEventListener("error",
this._onerror,
this);
}
if($0){this.setLoaded(false);
if($0.isErroneous()){this._onerror();
}else if($0.isLoaded()){this.setLoaded(true);
}else{$0.addEventListener("load",
this._onload,
this);
$0.addEventListener("error",
this._onerror,
this);
}}else{this.setLoaded(false);
}},
_applyLoaded:function($0,
$1){if($0&&this.isCreated()){this._renderContent();
}else if(!$0){this._invalidatePreferredInnerWidth();
this._invalidatePreferredInnerHeight();
}},
_applyElement:function($0,
$1){if($0){if(!this._image){try{if(qx.core.Variant.isSet("qx.client",
"webkit")){this._image=document.createElement("img");
}else{this._image=new Image;
}this._image.style.border="0 none";
this._image.style.verticalAlign="top";
this._image.alt="";
this._image.title="";
}catch(ex){this.error("Failed while creating image #1",
ex);
}
if(qx.core.Variant.isSet("qx.client",
"gecko|opera|webkit")){this._styleEnabled();
}}$0.appendChild(this._image);
}arguments.callee.base.call(this,
$0,
$1);
if($0&&this.getSource()){this._connect();
}},
_postApply:function(){this._postApplyDimensions();
this._updateContent();
},
_applyEnabled:function($0,
$1){if(this._image){this._styleEnabled();
}return arguments.callee.base.call(this,
$0,
$1);
},
_updateContent:qx.core.Variant.select("qx.client",
{"mshtml":function(){var $0=this._image;
var $1=this.getPreloader();
var $2=$1&&$1.isLoaded()?$1.getSource():this._blank;
if($1&&$1.getIsPng()&&this.getEnabled()){$0.src=this._blank;
$0.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+$2+"',sizingMethod='scale')";
}else{$0.src=$2;
$0.style.filter=this.getEnabled()?"":"Gray() Alpha(Opacity=30)";
}},
"default":function(){var $0=this.getPreloader();
var $1=$0&&$0.isLoaded()?$0.getSource():this._blank;
this._image.src=$1;
}}),
_resetContent:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._image.src=this._blank;
this._image.style.filter="";
},
"default":function(){this._image.src=this._blank;
}}),
_styleEnabled:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._updateContent();
},
"default":function(){if(this._image){var $0=this.getEnabled()===false?0.3:"";
var $1=this._image.style;
$1.opacity=$1.KhtmlOpacity=$1.MozOpacity=$0;
}}}),
_computePreferredInnerWidth:function(){var $0=this.getPreloader();
return $0?$0.getWidth():0;
},
_computePreferredInnerHeight:function(){var $0=this.getPreloader();
return $0?$0.getHeight():0;
},
_renderContent:function(){arguments.callee.base.call(this);
qx.ui.core.Widget.flushGlobalQueues();
},
_postApplyDimensions:qx.core.Variant.select("qx.client",
{"mshtml":function(){try{var $0=this._image.style;
if(this.getResizeToInner()){$0.pixelWidth=this.getInnerWidth();
$0.pixelHeight=this.getInnerHeight();
}else{$0.pixelWidth=this.getPreferredInnerWidth();
$0.pixelHeight=this.getPreferredInnerHeight();
}}catch(ex){this.error("postApplyDimensions failed",
ex);
}},
"default":function(){try{var $0=this._image;
if(this.getResizeToInner()){$0.width=this.getInnerWidth();
$0.height=this.getInnerHeight();
}else{$0.width=this.getPreferredInnerWidth();
$0.height=this.getPreferredInnerHeight();
}}catch(ex){this.error("postApplyDimensions failed",
ex);
}}}),
_changeInnerWidth:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){if(this.getResizeToInner()){this._image.style.pixelWidth=$0;
}},
"default":function($0,
$1){if(this.getResizeToInner()){this._image.width=$0;
}}}),
_changeInnerHeight:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){if(this.getResizeToInner()){this._image.style.pixelHeight=$0;
}},
"default":function($0,
$1){if(this.getResizeToInner()){this._image.height=$0;
}}})},
destruct:function(){if(this._image){this._image.style.filter="";
}this._disposeFields("_image");
}});




/* ID: qx.ui.form.Button */
qx.Class.define("qx.ui.form.Button",
{extend:qx.ui.basic.Atom,
construct:function($0,
$1,
$2,
$3,
$4){arguments.callee.base.call(this,
$0,
$1,
$2,
$3,
$4);
this.initTabIndex();
this.addEventListener("mouseover",
this._onmouseover);
this.addEventListener("mouseout",
this._onmouseout);
this.addEventListener("mousedown",
this._onmousedown);
this.addEventListener("mouseup",
this._onmouseup);
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keyup",
this._onkeyup);
},
properties:{appearance:{refine:true,
init:"button"},
tabIndex:{refine:true,
init:1}},
members:{_onmouseover:function($0){if($0.getTarget()!=this){return;
}
if(this.hasState("abandoned")){this.removeState("abandoned");
this.addState("pressed");
}this.addState("over");
},
_onmouseout:function($0){if($0.getTarget()!=this){return;
}this.removeState("over");
if(this.hasState("pressed")){this.setCapture(true);
this.removeState("pressed");
this.addState("abandoned");
}},
_onmousedown:function($0){if($0.getTarget()!=this||!$0.isLeftButtonPressed()){return;
}this.removeState("abandoned");
this.addState("pressed");
},
_onmouseup:function($0){this.setCapture(false);
var $1=this.hasState("pressed");
var $2=this.hasState("abandoned");
if($1){this.removeState("pressed");
}
if($2){this.removeState("abandoned");
}
if(!$2){this.addState("over");
if($1){this.execute();
}}},
_onkeydown:function($0){switch($0.getKeyIdentifier()){case "Enter":case "Space":this.removeState("abandoned");
this.addState("pressed");
$0.stopPropagation();
}},
_onkeyup:function($0){switch($0.getKeyIdentifier()){case "Enter":case "Space":if(this.hasState("pressed")){this.removeState("abandoned");
this.removeState("pressed");
this.execute();
$0.stopPropagation();
}}}}});




/* ID: qx.ui.toolbar.Button */
qx.Class.define("qx.ui.toolbar.Button",
{extend:qx.ui.form.Button,
properties:{tabIndex:{refine:true,
init:-1},
appearance:{refine:true,
init:"toolbar-button"},
show:{refine:true,
init:"inherit"},
height:{refine:true,
init:null},
allowStretchY:{refine:true,
init:true}},
members:{_onkeydown:qx.lang.Function.returnTrue,
_onkeyup:qx.lang.Function.returnTrue}});




/* ID: qx.ui.toolbar.MenuButton */
qx.Class.define("qx.ui.toolbar.MenuButton",
{extend:qx.ui.toolbar.Button,
construct:function($0,
$1,
$2,
$3,
$4,
$5){arguments.callee.base.call(this,
$0,
$2,
$3,
$4,
$5);
if($1!=null){this.setMenu($1);
}},
properties:{menu:{check:"qx.ui.menu.Menu",
nullable:true,
apply:"_applyMenu",
event:"changeMenu"},
direction:{check:["up",
"down"],
init:"down",
event:"changeDirection"}},
members:{getParentToolBar:function(){var $0=this.getParent();
if($0 instanceof qx.ui.toolbar.Part){$0=$0.getParent();
}return $0 instanceof qx.ui.toolbar.ToolBar?$0:null;
},
_showMenu:function($0){var $1=this.getMenu();
if($1){var $2=this.getElement();
var $3=qx.bom.element.Location.get($2);
$1.setLeft($3.left);
switch(this.getDirection()){case "up":$1.setBottom($3.top);
$1.setTop(null);
break;
case "down":$1.setTop($3.bottom);
$1.setBottom(null);
break;
}this.addState("pressed");
if($0){$1.setHoverItem($1.getFirstActiveChild());
}$1.show();
}},
_hideMenu:function(){var $0=this.getMenu();
if($0){$0.hide();
}},
_applyMenu:function($0,
$1){if($1){$1.setOpener(null);
$1.removeEventListener("appear",
this._onmenuappear,
this);
$1.removeEventListener("disappear",
this._onmenudisappear,
this);
}
if($0){$0.setOpener(this);
$0.addEventListener("appear",
this._onmenuappear,
this);
$0.addEventListener("disappear",
this._onmenudisappear,
this);
}},
_onmousedown:function($0){if($0.getTarget()!=this||!$0.isLeftButtonPressed()){return;
}this.hasState("pressed")?this._hideMenu():this._showMenu();
},
_onmouseup:function($0){},
_onmouseout:function($0){if($0.getTarget()!=this){return;
}this.removeState("over");
},
_onmouseover:function($0){var $1=this.getParentToolBar();
if($1){var $2=this.getMenu();
switch($1.getOpenMenu()){case null:case $2:break;
default:qx.ui.menu.Manager.getInstance().update();
this._showMenu();
}}return arguments.callee.base.call(this,
$0);
},
_onmenuappear:function($0){var $1=this.getParentToolBar();
if(!$1){return;
}var $2=this.getMenu();
$1.setOpenMenu($2);
},
_onmenudisappear:function($0){var $1=this.getParentToolBar();
if(!$1){return;
}var $2=this.getMenu();
if($1.getOpenMenu()==$2){$1.setOpenMenu(null);
}}}});




/* ID: qx.ui.toolbar.Part */
qx.Class.define("qx.ui.toolbar.Part",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function(){arguments.callee.base.call(this);
this._handle=new qx.ui.toolbar.PartHandle;
this.add(this._handle);
this.initWidth();
},
properties:{appearance:{refine:true,
init:"toolbar-part"},
width:{refine:true,
init:"auto"},
show:{init:"inherit",
check:["both",
"label",
"icon",
"none"],
nullable:true,
inheritable:true,
event:"changeShow"}},
destruct:function(){this._disposeObjects("_handle");
}});




/* ID: qx.ui.toolbar.PartHandle */
qx.Class.define("qx.ui.toolbar.PartHandle",
{extend:qx.ui.layout.CanvasLayout,
construct:function(){arguments.callee.base.call(this);
var $0=new qx.ui.basic.Terminator;
$0.setAppearance("toolbar-part-handle-line");
this.add($0);
},
properties:{appearance:{refine:true,
init:"toolbar-part-handle"}}});




/* ID: qx.bom.element.Location */
qx.Class.define("qx.bom.element.Location",
{statics:{__style:function($0,
$1){return qx.bom.element.Style.get($0,
$1,
qx.bom.element.Style.COMPUTED_MODE,
false);
},
__num:function($0,
$1){return parseInt(qx.bom.element.Style.get($0,
$1,
qx.bom.element.Style.COMPUTED_MODE,
false))||0;
},
__computeScroll:function($0){var $1=0,
$2=0;
if(qx.core.Variant.isSet("qx.client",
"mshtml")&&$0.getBoundingClientRect){var $3=qx.dom.Node.getWindow($0);
$1-=qx.bom.Viewport.getScrollLeft($3);
$2-=qx.bom.Viewport.getScrollTop($3);
}else{var $4=qx.dom.Node.getDocument($0).body;
$0=$0.parentNode;
while($0&&$0!=$4){$1+=$0.scrollLeft;
$2+=$0.scrollTop;
$0=$0.parentNode;
}}return {left:$1,
top:$2};
},
__computeBody:qx.core.Variant.select("qx.client",
{"mshtml":function($0){var $1=qx.dom.Node.getDocument($0);
var $2=$1.body;
var $3=$2.offsetLeft;
var $4=$2.offsetTop;
$3-=this.__num($2,
"borderLeftWidth");
$4-=this.__num($2,
"borderTopWidth");
if($1.compatMode==="CSS1Compat"){$3+=this.__num($2,
"marginLeft");
$4+=this.__num($2,
"marginTop");
}return {left:$3,
top:$4};
},
"webkit":function($0){var $1=qx.dom.Node.getDocument($0);
var $2=$1.body;
var $3=$2.offsetLeft;
var $4=$2.offsetTop;
$3+=this.__num($2,
"borderLeftWidth");
$4+=this.__num($2,
"borderTopWidth");
if($1.compatMode==="CSS1Compat"){$3+=this.__num($2,
"marginLeft");
$4+=this.__num($2,
"marginTop");
}return {left:$3,
top:$4};
},
"gecko":function($0){var $1=qx.dom.Node.getDocument($0).body;
var $2=$1.offsetLeft;
var $3=$1.offsetTop;
if(qx.bom.element.Dimension.getBoxSizing($1)!=="border-box"){$2+=this.__num($1,
"borderLeftWidth");
$3+=this.__num($1,
"borderTopWidth");
if(!$0.getBoundingClientRect){var $4;
while($0){if(this.__style($0,
"position")==="absolute"||this.__style($0,
"position")==="fixed"){$4=true;
break;
}$0=$0.offsetParent;
}
if(!$4){$2+=this.__num($1,
"borderLeftWidth");
$3+=this.__num($1,
"borderTopWidth");
}}}return {left:$2,
top:$3};
},
"default":function($0){var $1=qx.dom.Node.getDocument($0).body;
var $2=$1.offsetLeft;
var $3=$1.offsetTop;
return {left:$2,
top:$3};
}}),
__computeOffset:qx.core.Variant.select("qx.client",
{"mshtml|webkit":function($0){var $1=qx.dom.Node.getDocument($0);
if($0.getBoundingClientRect){var $2=$0.getBoundingClientRect();
var $3=$2.left;
var $4=$2.top;
if($1.compatMode==="CSS1Compat"){$3-=this.__num($0,
"borderLeftWidth");
$4-=this.__num($0,
"borderTopWidth");
}}else{var $3=$0.offsetLeft;
var $4=$0.offsetTop;
$0=$0.offsetParent;
var $5=$1.body;
while($0&&$0!=$5){$3+=$0.offsetLeft;
$4+=$0.offsetTop;
$3+=this.__num($0,
"borderLeftWidth");
$4+=this.__num($0,
"borderTopWidth");
$0=$0.offsetParent;
}}return {left:$3,
top:$4};
},
"gecko":function($0){if($0.getBoundingClientRect){var $1=$0.getBoundingClientRect();
var $2=Math.round($1.left);
var $3=Math.round($1.top);
}else{var $2=0;
var $3=0;
var $4=qx.dom.Node.getDocument($0).body;
var $5=qx.bom.element.Dimension;
if($5.getBoxSizing($0)!=="border-box"){$2-=this.__num($0,
"borderLeftWidth");
$3-=this.__num($0,
"borderTopWidth");
}
while($0&&$0!==$4){$2+=$0.offsetLeft;
$3+=$0.offsetTop;
if($5.getBoxSizing($0)!=="border-box"){$2+=this.__num($0,
"borderLeftWidth");
$3+=this.__num($0,
"borderTopWidth");
}if($0.parentNode&&this.__style($0.parentNode,
"overflow")!="visible"){$2+=this.__num($0.parentNode,
"borderLeftWidth");
$3+=this.__num($0.parentNode,
"borderTopWidth");
}$0=$0.offsetParent;
}}return {left:$2,
top:$3};
},
"default":function($0){var $1=0;
var $2=0;
var $3=qx.dom.Node.getDocument($0).body;
while($0&&$0!==$3){$1+=$0.offsetLeft;
$2+=$0.offsetTop;
$0=$0.offsetParent;
}return {left:$1,
top:$2};
}}),
get:function($0,
$1){var $2=this.__computeBody($0);
if($0.tagName=="BODY"){var $3=$2.left;
var $4=$2.top;
}else{var $5=this.__computeOffset($0);
var $6=this.__computeScroll($0);
var $3=$5.left+$2.left-$6.left;
var $4=$5.top+$2.top-$6.top;
}var $7=$3+$0.offsetWidth;
var $8=$4+$0.offsetHeight;
if($1){switch($1){case "margin":$3-=this.__num($0,
"marginLeft");
$4-=this.__num($0,
"marginTop");
$7+=this.__num($0,
"marginRight");
$8+=this.__num($0,
"marginBottom");
break;
case "box":break;
case "padding":$3+=this.__num($0,
"paddingLeft");
$4+=this.__num($0,
"paddingTop");
$7-=this.__num($0,
"paddingRight");
$8-=this.__num($0,
"paddingBottom");
case "scroll":$3-=$0.scrollLeft;
$4-=$0.scrollTop;
$7+=$0.scrollLeft;
$8+=$0.scrollTop;
case "border":$3+=this.__num($0,
"borderLeftWidth");
$4+=this.__num($0,
"borderTopWidth");
$7-=this.__num($0,
"borderRightWidth");
$8-=this.__num($0,
"borderBottomWidth");
break;
default:throw new Error("Invalid mode for location detection: "+$1);
}}return {left:$3,
top:$4,
right:$7,
bottom:$8};
},
getLeft:function($0,
$1){return this.get($0,
$1).left;
},
getTop:function($0,
$1){return this.get($0,
$1).top;
},
getRight:function($0,
$1){return this.get($0,
$1).right;
},
getBottom:function($0,
$1){return this.get($0,
$1).bottom;
},
getRelative:function($0,
$1,
$2,
$3){var $4=this.get($0,
$2);
var $5=this.get($1,
$3);
return {left:$4.left-$5.left,
top:$4.top-$5.top,
right:$4.right-$5.right,
bottom:$4.bottom-$5.bottom};
}}});




/* ID: qx.bom.element.Style */
qx.Class.define("qx.bom.element.Style",
{statics:{__hints:{names:{"float":qx.core.Variant.isSet("qx.client",
"mshtml")?"styleFloat":"cssFloat",
"boxSizing":qx.core.Variant.isSet("qx.client",
"gecko")?"mozBoxSizing":"boxSizing"},
mshtmlPixel:{width:"pixelWidth",
height:"pixelHeight",
left:"pixelLeft",
right:"pixelRight",
top:"pixelTop",
bottom:"pixelBottom"},
special:{clip:true,
cursor:true,
opacity:true,
overflowX:true,
overflowY:true}},
setCss:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){$0.style.cssText=$1;
},
"default":function($0,
$1){$0.setAttribute("style",
$1);
}}),
getCss:qx.core.Variant.select("qx.client",
{"mshtml":function($0){return $0.style.cssText.toLowerCase();
},
"default":function($0){return $0.getAttribute("style");
}}),
COMPUTED_MODE:1,
CASCADED_MODE:2,
LOCAL_MODE:3,
set:function($0,
$1,
$2,
$3){var $4=this.__hints;
$1=$4.names[$1]||$1;
$0.style[$1]=$2||"";
},
reset:function($0,
$1,
$2){var $3=this.__hints;
$1=$3.names[$1]||$1;
$0.style[$1]="";
},
get:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1,
$2,
$3){var $4=this.__hints;
$1=$4.names[$1]||$1;
switch($2){case this.LOCAL_MODE:return $0.style[$1]||"";
case this.CASCADED_MODE:return $0.currentStyle[$1];
default:var $5=$0.currentStyle[$1];
if(/^-?[\.\d]+(px)?$/i.test($5)){return $5;
}var $6=$4.mshtmlPixel[$1];
if($6){var $7=$0.style[$1];
$0.style[$1]=$5||0;
var $8=$0.style[$6]+"px";
$0.style[$1]=$7;
return $8;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test($5)){throw new Error("Untranslated computed property value: "+$1+". Only pixel values work well across different clients.");
}return $5;
}},
"default":function($0,
$1,
$2,
$3){var $4=this.__hints;
$1=$4.names[$1]||$1;
switch($2){case this.LOCAL_MODE:return $0.style[$1];
case this.CASCADED_MODE:if($0.currentStyle){return $0.currentStyle[$1];
}throw new Error("Cascaded styles are not supported in this browser!");
default:var $5=qx.dom.Node.getDocument($0);
var $6=$5.defaultView.getComputedStyle($0,
null);
return $6?$6[$1]:null;
}}})}});




/* ID: qx.bom.element.Dimension */
qx.Class.define("qx.bom.element.Dimension",
{statics:{getWidth:function($0){return $0.offsetWidth;
},
getHeight:function($0){return $0.offsetHeight;
},
getClientWidth:function($0){return $0.clientWidth;
},
getClientHeight:function($0){return $0.clientHeight;
},
getScrollWidth:function($0){return $0.scrollWidth;
},
getScrollHeight:function($0){return $0.scrollHeight;
},
__nativeBorderBox:{tags:{button:true,
select:true},
types:{search:true,
button:true,
submit:true,
reset:true,
checkbox:true,
radio:true}},
__usesNativeBorderBox:function($0){var $1=this.__nativeBorderBox;
return $1.tags[$0.tagName.toLowerCase()]||$1.types[$0.type];
},
setBoxSizing:qx.core.Variant.select("qx.client",
{"gecko":function($0,
$1){$0.style.MozBoxSizing=$1||"";
},
"mshtml":function($0,
$1){},
"default":function($0,
$1){$0.style.boxSizing=$1||"";
}}),
getBoxSizing:qx.core.Variant.select("qx.client",
{"gecko":function($0){return qx.bom.element.Style.get($0,
"MozBoxSizing",
qx.bom.element.Style.COMPUTED_MODE,
false);
},
"mshtml":function($0){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument($0))){if(!this.__usesNativeBorderBox($0)){return "content-box";
}}return "border-box";
},
"default":function($0){return qx.bom.element.Style.get($0,
"boxSizing",
qx.bom.element.Style.COMPUTED_MODE,
false);
}})}});




/* ID: qx.bom.Document */
qx.Class.define("qx.bom.Document",
{statics:{isQuirksMode:function($0){return ($0||window).document.compatMode!=="CSS1Compat";
},
isStandardMode:function($0){return ($0||window).document.compatMode==="CSS1Compat";
},
getWidth:function($0){var $1=($0||window).document;
var $2=qx.bom.Viewport.getWidth($0);
var $3=$1.compatMode==="CSS1Compat"?$1.documentElement.scrollWidth:$1.body.scrollWidth;
return Math.max($3,
$2);
},
getHeight:function($0){var $1=($0||window).document;
var $2=qx.bom.Viewport.getHeight($0);
var $3=$1.compatMode==="CSS1Compat"?$1.documentElement.scrollHeight:$1.body.scrollHeight;
return Math.max($3,
$2);
}}});




/* ID: qx.ui.menu.Manager */
qx.Class.define("qx.ui.menu.Manager",
{type:"singleton",
extend:qx.util.manager.Object,
construct:function(){arguments.callee.base.call(this);
},
members:{update:function($0,
$1){var $2,
$3;
var $4=this.getAll();
for($3 in $4){$2=$4[$3];
if(!$2.getAutoHide()){continue;
}
if($0&&$0.getMenu&&$0.getMenu()){continue;
}if(!$0){$2.hide();
continue;
}var $5=$1=="mousedown";
var $6=$1=="mouseup";
if($2.getOpener()!==
$0&&
($0&&
(!$2.isSubElement($0)&&$5)||
($2.isSubElement($0,
true)&&$6)||(!$5&&!$6))){$2.hide();
continue;
}}}}});




/* ID: spagobi.ui.ToolBar */
qx.Class.define("spagobi.ui.ToolBar",
{extend:qx.ui.toolbar.ToolBar,
construct:function($0){arguments.callee.base.call(this);
this._toolBarManager=new qx.ui.selection.RadioManager(null);
for(var $1=0;$1<$0.length;$1++){this.addButton($0[$1]);
}this.add(new qx.ui.toolbar.Separator());
this.add(new qx.ui.basic.HorizontalSpacer());
var $2={en:this.tr("English"),
de:this.tr("German"),
tr:this.tr("Turkish"),
it:this.tr("Italian"),
es:this.tr("Spanish"),
sv:this.tr("Swedish"),
ru:this.tr("Russian")};
var $3=qx.locale.Manager.getInstance().getAvailableLocales();
var $4=qx.locale.Manager.getInstance().getLocale();
var $5=new qx.ui.menu.Menu();
var $6=new qx.ui.selection.RadioManager("lang");
for(var $7 in $2){if($3.indexOf($7)==-1){continue;
}var $8=new qx.ui.menu.RadioButton($2[$7],
null,
$4==$7);
$8.setUserData("locale",
$7);
$5.add($8);
$6.add($8);
}$6.addEventListener("changeSelected",
function($9){var $7=$9.getValue().getUserData("locale");
qx.locale.Manager.getInstance().setLocale($7);
});
$5.addToDocument();
this.add(new qx.ui.toolbar.MenuButton(null,
$5,
"spagobi/img/spagobi/test/locale.png"));
this.addButton({command:'F1',
handler:this.showAbout,
context:this,
"label":'Help',
icon:'icon/16/actions/help-about.png',
tooltip:'Help'});
},
members:{_toolBarManager:undefined,
showAbout:function($0){alert('Help');
},
addButton:function($0){var $1;
if($0.command&&$0.handler){var $1=new qx.client.Command($0.command);
$1.addEventListener("execute",
$0.handler,
$0.context);
}var $2=new qx.ui.toolbar.RadioButton(this.tr($0.label),
$0.icon);
this._toolBarManager.add($2);
if($1){$2.setCommand($1);
}else if($0.handler){$2.addEventListener("execute",
$0.handler,
$0.context);
}
if($0.tooltip){if($1){$2.setToolTip(new qx.ui.popup.ToolTip(this.tr('(%1) '+$0.tooltip,
$1.toString())));
}else{$2.setToolTip(new qx.ui.popup.ToolTip(this.tr($0.tooltip)));
}}this.add($2);
if($0.defaultbutton!=undefined){if($0.defaultbutton==true){$2.setChecked(true);
}}}}});




/* ID: qx.ui.selection.RadioManager */
qx.Class.define("qx.ui.selection.RadioManager",
{extend:qx.core.Target,
construct:function($0,
$1){arguments.callee.base.call(this);
this._items=[];
this.setName($0!=null?$0:qx.ui.selection.RadioManager.AUTO_NAME_PREFIX+this.toHashCode());
if($1!=null){this.add.apply(this,
$1);
}},
statics:{AUTO_NAME_PREFIX:"qx-radio-"},
properties:{selected:{nullable:true,
apply:"_applySelected",
event:"changeSelected",
check:"qx.core.Object"},
name:{check:"String",
nullable:true,
apply:"_applyName"}},
members:{getItems:function(){return this._items;
},
getEnabledItems:function(){var $0=[];
for(var $1=0,
$2=this._items,
$3=$2.length;$1<$3;$1++){if($2[$1].getEnabled()){$0.push($2[$1]);
}}return $0;
},
handleItemChecked:function($0,
$1){if($1){this.setSelected($0);
}else if(this.getSelected()==$0){this.setSelected(null);
}},
add:function($0){var $1=arguments;
var $2=$1.length;
var $3;
for(var $4=0;$4<$2;$4++){$3=$1[$4];
if(qx.lang.Array.contains(this._items,
$3)){return;
}this._items.push($3);
$3.setManager(this);
if($3.getChecked()){this.setSelected($3);
}$3.setName(this.getName());
}},
remove:function($0){qx.lang.Array.remove(this._items,
$0);
$0.setManager(null);
if($0.getChecked()){this.setSelected(null);
}},
_applySelected:function($0,
$1){if($1){$1.setChecked(false);
}
if($0){$0.setChecked(true);
}},
_applyName:function($0,
$1){for(var $2=0,
$3=this._items,
$4=$3.length;$2<$4;$2++){$3[$2].setName($0);
}},
selectNext:function($0){var $1=this._items.indexOf($0);
if($1==-1){return;
}var $2=0;
var $3=this._items.length;
$1=($1+1)%$3;
while($2<$3&&!this._items[$1].getEnabled()){$1=($1+1)%$3;
$2++;
}this._selectByIndex($1);
},
selectPrevious:function($0){var $1=this._items.indexOf($0);
if($1==-1){return;
}var $2=0;
var $3=this._items.length;
$1=($1-1+$3)%$3;
while($2<$3&&!this._items[$1].getEnabled()){$1=($1-1+$3)%$3;
$2++;
}this._selectByIndex($1);
},
_selectByIndex:function($0){if(this._items[$0].getEnabled()){this.setSelected(this._items[$0]);
this._items[$0].setFocused(true);
}}},
destruct:function(){this._disposeObjectDeep("_items",
1);
}});




/* ID: qx.ui.toolbar.Separator */
qx.Class.define("qx.ui.toolbar.Separator",
{extend:qx.ui.layout.CanvasLayout,
construct:function(){arguments.callee.base.call(this);
var $0=new qx.ui.basic.Terminator;
$0.setAppearance("toolbar-separator-line");
this.add($0);
},
properties:{appearance:{refine:true,
init:"toolbar-separator"}}});




/* ID: qx.ui.basic.HorizontalSpacer */
qx.Class.define("qx.ui.basic.HorizontalSpacer",
{extend:qx.ui.basic.Terminator,
construct:function(){arguments.callee.base.call(this);
this.initWidth();
},
properties:{width:{refine:true,
init:"1*"}}});




/* ID: qx.ui.popup.Popup */
qx.Class.define("qx.ui.popup.Popup",
{extend:qx.ui.layout.CanvasLayout,
construct:function(){arguments.callee.base.call(this);
this.setZIndex(this._minZIndex);
if(this._isFocusRoot){this.activateFocusRoot();
}this.initHeight();
this.initWidth();
},
properties:{appearance:{refine:true,
init:"popup"},
width:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"},
display:{refine:true,
init:false},
autoHide:{check:"Boolean",
init:true},
centered:{check:"Boolean",
init:false},
restrictToPageOnOpen:{check:"Boolean",
init:true},
restrictToPageLeft:{check:"Integer",
init:0},
restrictToPageRight:{check:"Integer",
init:0},
restrictToPageTop:{check:"Integer",
init:0},
restrictToPageBottom:{check:"Integer",
init:0}},
members:{_isFocusRoot:true,
_showTimeStamp:(new Date(0)).valueOf(),
_hideTimeStamp:(new Date(0)).valueOf(),
_beforeAppear:function(){arguments.callee.base.call(this);
if(this.getRestrictToPageOnOpen()){this._wantedLeft=this.getLeft();
if(this._wantedLeft!=null){this.setLeft(10000);
if(this.getElement()!=null){this.getElement().style.left=10000;
}}}qx.ui.popup.PopupManager.getInstance().add(this);
qx.ui.popup.PopupManager.getInstance().update(this);
this._showTimeStamp=(new Date).valueOf();
this.bringToFront();
},
_beforeDisappear:function(){arguments.callee.base.call(this);
qx.ui.popup.PopupManager.getInstance().remove(this);
this._hideTimeStamp=(new Date).valueOf();
},
_afterAppear:function(){arguments.callee.base.call(this);
if(this.getRestrictToPageOnOpen()){var $0=qx.ui.core.ClientDocument.getInstance();
var $1=$0.getClientWidth();
var $2=$0.getClientHeight();
var $3=qx.bom.Viewport.getScrollTop();
var $4=qx.bom.Viewport.getScrollLeft();
var $5=this.getRestrictToPageLeft()+$4;
var $6=this.getRestrictToPageRight()-$4;
var $7=this.getRestrictToPageTop()+$3;
var $8=this.getRestrictToPageBottom()-$3;
var $9=(this._wantedLeft==null)?this.getLeft():this._wantedLeft;
var $a=this.getTop();
var $b=this.getBoxWidth();
var $c=this.getBoxHeight();
var $d=this.getLeft();
var $e=$a;
if($9+$b>$1-$6){$9=$1-$6-$b;
}
if($a+$c>$2-$8){$a=$2-$8-$c;
}
if($9<$5){$9=$5;
}
if($a<$7){$a=$7;
}
if($9!=$d||$a!=$e){var $f=this;
window.setTimeout(function(){$f.setLeft($9);
$f.setTop($a);
},
0);
}}},
_makeActive:function(){this.getFocusRoot().setActiveChild(this);
},
_makeInactive:function(){var $0=this.getFocusRoot();
var $1=$0.getActiveChild();
if($1==this){$0.setActiveChild($0);
}},
_minZIndex:1e6,
bringToFront:function(){this.setZIndex(this._minZIndex+1000000);
this._sendTo();
},
sendToBack:function(){this.setZIndex(this._minZIndex+1);
this._sendTo();
},
_sendTo:function(){var $0=qx.lang.Object.getValues(qx.ui.popup.PopupManager.getInstance().getAll());
if(qx.Class.isDefined("qx.ui.menu.Manager")){var $1=qx.lang.Object.getValues(qx.ui.menu.Manager.getInstance().getAll());
var $2=$0.concat($1).sort(qx.util.Compare.byZIndex);
}else{var $2=$0.sort(qx.util.Compare.byZIndex);
}var $3=$2.length;
var $4=this._minZIndex;
for(var $5=0;$5<$3;$5++){$2[$5].setZIndex($4++);
}},
getShowTimeStamp:function(){return this._showTimeStamp;
},
getHideTimeStamp:function(){return this._hideTimeStamp;
},
positionRelativeTo:function($0,
$1,
$2){if($0 instanceof qx.ui.core.Widget){$0=$0.getElement();
}
if($0){var $3=qx.bom.element.Location.get($0);
this.setLocation($3.left+($1||0),
$3.top+($2||0));
}else{this.warn('Missing reference element');
}},
centerToBrowser:function(){var $0=qx.ui.core.ClientDocument.getInstance();
var $1=($0.getClientWidth()-this.getBoxWidth())/2;
var $2=($0.getClientHeight()-this.getBoxHeight())/2;
this.setLeft($1<0?0:$1);
this.setTop($2<0?0:$2);
}},
destruct:function(){qx.ui.popup.PopupManager.getInstance().remove(this);
this._disposeFields("_showTimeStamp",
"_hideTimeStamp");
}});




/* ID: qx.ui.popup.PopupManager */
qx.Class.define("qx.ui.popup.PopupManager",
{type:"singleton",
extend:qx.util.manager.Object,
construct:function(){arguments.callee.base.call(this);
},
members:{update:function($0){if(!($0 instanceof qx.ui.core.Widget)){$0=null;
}var $1,
$2;
var $3=this.getAll();
for($2 in $3){$1=$3[$2];
if(!$1.getAutoHide()||$0==$1||$1.contains($0)){continue;
}
if(qx.Class.isDefined("qx.ui.popup.ToolTip")&&$0 instanceof qx.ui.popup.ToolTip&&!($1 instanceof qx.ui.popup.ToolTip)){continue;
}$1.hide();
}}}});




/* ID: qx.util.Compare */
qx.Class.define("qx.util.Compare",
{statics:{byString:function($0,
$1){return $0==$1?0:$0>$1?1:-1;
},
byStringCaseInsensitive:function($0,
$1){return qx.util.Compare.byString($0.toLowerCase(),
$1.toLowerCase());
},
byStringUmlautsShort:function($0,
$1){return qx.util.Compare.byString(qx.util.Normalization.umlautsShort($0),
qx.util.Normalization.umlautsShort($1));
},
byStringUmlautsShortCaseInsensitive:function($0,
$1){return qx.util.Compare.byString(qx.util.Normalization.umlautsShort($0).toLowerCase(),
qx.util.Normalization.umlautsShort($1).toLowerCase());
},
byStringUmlautsLong:function($0,
$1){return qx.util.Compare.byString(qx.util.Normalization.umlautsLong($0),
qx.util.Normalization.umlautsLong($1));
},
byStringUmlautsLongCaseInsensitive:function($0,
$1){return qx.util.Compare.byString(qx.util.Normalization.umlautsLong($0).toLowerCase(),
qx.util.Normalization.umlautsLong($1).toLowerCase());
},
byFloat:function($0,
$1){return $0-$1;
},
byIntegerString:function($0,
$1){return parseInt($0)-parseInt($1);
},
byFloatString:function($0,
$1){return parseFloat($0)-parseFloat($1);
},
byIPv4:function($0,
$1){var $2=$0.split(".",
4);
var $3=$1.split(".",
4);
for(var $4=0;$4<3;$4++){$0=parseInt($2[$4]);
$1=parseInt($3[$4]);
if($0!=$1){return $0-$1;
}}return parseInt($2[3])-parseInt($3[3]);
},
byZIndex:function($0,
$1){return $0.getZIndex()-$1.getZIndex();
}},
defer:function($0){$0.byInteger=$0.byNumber=$0.byFloat;
$0.byNumberString=$0.byFloatString;
}});




/* ID: qx.util.Normalization */
qx.Class.define("qx.util.Normalization",
{statics:{__umlautsRegExp:new RegExp("[\xE4\xF6\xFC\xDF\xC4\xD6\xDC]",
"g"),
__umlautsShortData:{"\xC4":"A",
"\xD6":"O",
"\xDC":"U",
"\xE4":"a",
"\xF6":"o",
"\xFC":"u",
"\xDF":"s"},
__umlautsShort:function($0){return qx.util.Normalization.__umlautsShortData[$0];
},
umlautsShort:function($0){return $0.replace(qx.util.Normalization.__umlautsRegExp,
qx.lang.Function.bind(this.__umlautsShort,
this));
},
__umlautsLongData:{"\xC4":"Ae",
"\xD6":"Oe",
"\xDC":"Ue",
"\xE4":"ae",
"\xF6":"oe",
"\xFC":"ue",
"\xDF":"ss"},
__umlautsLong:function($0){return qx.util.Normalization.__umlautsLongData[$0];
},
umlautsLong:function($0){return $0.replace(qx.util.Normalization.__umlautsRegExp,
qx.lang.Function.bind(this.__umlautsLong,
this));
}}});




/* ID: qx.ui.menu.Menu */
qx.Class.define("qx.ui.menu.Menu",
{extend:qx.ui.popup.Popup,
construct:function(){arguments.callee.base.call(this);
var $0=this._layout=new qx.ui.menu.Layout;
$0.setEdge(0);
this.add($0);
this.initOpenInterval();
this.initCloseInterval();
this.addEventListener("mouseover",
this._onmouseover);
this.addEventListener("mousemove",
this._onmouseover);
this.addEventListener("mouseout",
this._onmouseout);
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keypress",
this._onkeypress);
this.remapChildrenHandlingTo(this._layout);
this.initWidth();
this.initHeight();
},
properties:{appearance:{refine:true,
init:"menu"},
width:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"},
iconContentGap:{check:"Integer",
themeable:true,
init:4},
labelShortcutGap:{check:"Integer",
themeable:true,
init:10},
contentArrowGap:{check:"Integer",
themeable:true,
init:8},
contentNonIconPadding:{check:"Integer",
themeable:true,
init:20},
contentNonArrowPadding:{check:"Integer",
themeable:true,
init:8},
hoverItem:{check:"qx.ui.core.Widget",
nullable:true,
apply:"_applyHoverItem"},
openItem:{check:"qx.ui.core.Widget",
nullable:true,
apply:"_applyOpenItem"},
opener:{check:"qx.ui.core.Widget",
nullable:true},
parentMenu:{check:"qx.ui.menu.Menu",
nullable:true},
fastReopen:{check:"Boolean",
init:false},
openInterval:{check:"Integer",
themeable:true,
init:250,
apply:"_applyOpenInterval"},
closeInterval:{check:"Integer",
themeable:true,
init:250,
apply:"_applyCloseInterval"},
subMenuHorizontalOffset:{check:"Integer",
themeable:true,
init:-3},
subMenuVerticalOffset:{check:"Integer",
themeable:true,
init:-2},
indentShortcuts:{check:"Boolean",
init:true},
maxIconWidth:{_cached:true},
maxLabelWidth:{_cached:true},
maxLabelWidthIncShortcut:{_cached:true},
maxShortcutWidth:{_cached:true},
maxArrowWidth:{_cached:true},
maxContentWidth:{_cached:true},
iconPosition:{_cached:true,
defaultValue:0},
labelPosition:{_cached:true},
shortcutPosition:{_cached:true},
arrowPosition:{_cached:true},
menuButtonNeededWidth:{_cached:true}},
members:{_remappingChildTable:["add",
"remove",
"addAt",
"addAtBegin",
"addAtEnd",
"removeAt",
"addBefore",
"addAfter",
"removeAll",
"getFirstChild",
"getFirstActiveChild",
"getLastChild",
"getLastActiveChild"],
_isFocusRoot:false,
getLayout:function(){return this._layout;
},
isSubElement:function($0,
$1){if(($0.getParent()===this._layout)||((!$1)&&($0===this))){return true;
}
for(var $2=this._layout.getChildren(),
$3=$2.length,
$4=0;$4<$3;$4++){if($2[$4].getMenu&&$2[$4].getMenu()&&$2[$4].getMenu().isSubElement($0,
$1)){return true;
}}return false;
},
_beforeAppear:function(){qx.ui.layout.CanvasLayout.prototype._beforeAppear.call(this);
qx.ui.menu.Manager.getInstance().add(this);
this.bringToFront();
this._makeActive();
},
_beforeDisappear:function(){qx.ui.layout.CanvasLayout.prototype._beforeDisappear.call(this);
qx.ui.menu.Manager.getInstance().remove(this);
this._makeInactive();
this.setHoverItem(null);
this.setOpenItem(null);
var $0=this.getOpener();
if($0){$0.removeState("pressed");
}},
_applyOpenInterval:function($0,
$1){if(!this._openTimer){this._openTimer=new qx.client.Timer($0);
this._openTimer.addEventListener("interval",
this._onopentimer,
this);
}else{this._openTimer.setInterval($0);
}},
_applyCloseInterval:function($0,
$1){if(!this._closeTimer){this._closeTimer=new qx.client.Timer(this.getCloseInterval());
this._closeTimer.addEventListener("interval",
this._onclosetimer,
this);
}else{this._closeTimer.setInterval($0);
}},
_applyHoverItem:function($0,
$1){if($1){$1.removeState("over");
}
if($0){$0.addState("over");
}},
_applyOpenItem:function($0,
$1){if($1){var $2=$1.getMenu();
if($2){$2.setParentMenu(null);
$2.setOpener(null);
$2.hide();
}}
if($0){var $3=$0.getMenu();
if($3){$3.setOpener($0);
$3.setParentMenu(this);
var $4=$0.getElement();
var $5=this.getElement();
$3.setTop(qx.bom.element.Location.getTop($4)+this.getSubMenuVerticalOffset());
$3.setLeft(qx.bom.element.Location.getLeft($5)+qx.html.Dimension.getBoxWidth($5)+this.getSubMenuHorizontalOffset());
$3.show();
}}},
_computeMaxIconWidth:function(){var $0=this.getLayout().getChildren(),
$1=$0.length,
$2,
$3=0;
for(var $4=0;$4<$1;$4++){$2=$0[$4];
if($2.hasIcon()){$3=Math.max($3,
16);
}}return $3;
},
_computeMaxLabelWidth:function(){var $0=this.getLayout().getChildren(),
$1=$0.length,
$2,
$3=0;
for(var $4=0;$4<$1;$4++){$2=$0[$4];
if($2.hasLabel()){$3=Math.max($3,
$2.getLabelObject().getPreferredBoxWidth());
}}return $3;
},
_computeMaxLabelWidthIncShortcut:function(){var $0=this.getLayout().getChildren(),
$1=$0.length,
$2,
$3=0;
for(var $4=0;$4<$1;$4++){$2=$0[$4];
if($2.hasLabel()&&$2.hasShortcut()){$3=Math.max($3,
$2.getLabelObject().getPreferredBoxWidth());
}}return $3;
},
_computeMaxShortcutWidth:function(){var $0=this.getLayout().getChildren(),
$1=$0.length,
$2,
$3=0;
for(var $4=0;$4<$1;$4++){$2=$0[$4];
if($2.hasShortcut()){$3=Math.max($3,
$2.getShortcutObject().getPreferredBoxWidth());
}}return $3;
},
_computeMaxArrowWidth:function(){var $0=this.getLayout().getChildren(),
$1=$0.length,
$2,
$3=0;
for(var $4=0;$4<$1;$4++){$2=$0[$4];
if($2.hasMenu()){$3=Math.max($3,
4);
}}return $3;
},
_computeMaxContentWidth:function(){var $0;
var $1=this.getMaxLabelWidth();
var $2=this.getMaxShortcutWidth();
if(this.getIndentShortcuts()){var $3=$2+this.getMaxLabelWidthIncShortcut();
if($2>0){$3+=this.getLabelShortcutGap();
}$0=Math.max($1,
$3);
}else{$0=$1+$2;
if($1>0&&$2>0){$0+=this.getLabelShortcutGap();
}}return $0;
},
_computeIconPosition:function(){return 0;
},
_computeLabelPosition:function(){var $0=this.getMaxIconWidth();
return $0>0?$0+this.getIconContentGap():this.getContentNonIconPadding();
},
_computeShortcutPosition:function(){return this.getLabelPosition()+this.getMaxContentWidth()-this.getMaxShortcutWidth();
},
_computeArrowPosition:function(){var $0=this.getMaxContentWidth();
return this.getLabelPosition()+($0>0?$0+this.getContentArrowGap():$0);
},
_invalidateMaxIconWidth:function(){this._cachedMaxIconWidth=null;
this._invalidateLabelPosition();
this._invalidateMenuButtonNeededWidth();
},
_invalidateMaxLabelWidth:function(){this._cachedMaxLabelWidth=null;
this._cachedMaxArrowWidth=null;
this._invalidateShortcutPosition();
this._invalidateMaxLabelWidthIncShortcut();
this._invalidateMaxContentWidth();
this._invalidateMenuButtonNeededWidth();
},
_invalidateMaxShortcutWidth:function(){this._cachedMaxShortcutWidth=null;
this._invalidateArrowPosition();
this._invalidateMaxContentWidth();
this._invalidateMenuButtonNeededWidth();
},
_invalidateLabelPosition:function(){this._cachedLabelPosition=null;
this._invalidateShortcutPosition();
},
_invalidateShortcutPosition:function(){this._cachedShortcutPosition=null;
this._invalidateArrowPosition();
},
_computeMenuButtonNeededWidth:function(){var $0=0;
var $1=this.getMaxIconWidth();
var $2=this.getMaxContentWidth();
var $3=this.getMaxArrowWidth();
if($1>0){$0+=$1;
}else{$0+=this.getContentNonIconPadding();
}
if($2>0){if($1>0){$0+=this.getIconContentGap();
}$0+=$2;
}
if($3>0){if($1>0||$2>0){$0+=this.getContentArrowGap();
}$0+=$3;
}else{$0+=this.getContentNonArrowPadding();
}return $0;
},
_onmouseover:function($0){var $1=this.getParentMenu();
if($1){$1._closeTimer.stop();
var $2=this.getOpener();
if($2){$1.setHoverItem($2);
}}var $3=$0.getTarget();
if($3==this){this._openTimer.stop();
this._closeTimer.start();
this.setHoverItem(null);
return;
}var $4=this.getOpenItem();
if($4){this.setHoverItem($3);
this._openTimer.stop();
if($3.hasMenu()){if(this.getFastReopen()){this.setOpenItem($3);
this._closeTimer.stop();
}else{this._openTimer.start();
}}else{this._closeTimer.start();
}}else{this.setHoverItem($3);
this._openTimer.stop();
if($3.hasMenu()){this._openTimer.start();
}}},
_onmouseout:function($0){this._openTimer.stop();
var $1=$0.getTarget();
if($1!=this&&$1.hasMenu()){this._closeTimer.start();
}this.setHoverItem(null);
},
_onopentimer:function($0){this._openTimer.stop();
var $1=this.getHoverItem();
if($1&&$1.hasMenu()){this.setOpenItem($1);
}},
_onclosetimer:function($0){this._closeTimer.stop();
this.setOpenItem(null);
},
_onkeydown:function($0){if($0.getKeyIdentifier()=="Enter"){this._onkeydown_enter($0);
}$0.preventDefault();
},
_onkeypress:function($0){switch($0.getKeyIdentifier()){case "Up":this._onkeypress_up($0);
break;
case "Down":this._onkeypress_down($0);
break;
case "Left":this._onkeypress_left($0);
break;
case "Right":this._onkeypress_right($0);
break;
default:return;
}$0.preventDefault();
},
_onkeypress_up:function($0){var $1=this.getHoverItem();
var $2=$1?$1.isFirstChild()?this.getLastActiveChild():$1.getPreviousActiveSibling([qx.ui.menu.Separator]):this.getLastActiveChild();
this.setHoverItem($2);
},
_onkeypress_down:function($0){var $1=this.getHoverItem();
var $2=$1?$1.isLastChild()?this.getFirstActiveChild():$1.getNextActiveSibling([qx.ui.menu.Separator]):this.getFirstActiveChild();
this.setHoverItem($2);
},
_onkeypress_left:function($0){var $1=this.getOpener();
if($1 instanceof qx.ui.menu.Button){var $2=this.getOpener().getParentMenu();
$2.setOpenItem(null);
$2.setHoverItem($1);
$2._makeActive();
}else if($1 instanceof qx.ui.toolbar.MenuButton){var $3=$1.getParentToolBar();
this.getFocusRoot().setActiveChild($3);
$3._onkeypress($0);
}},
_onkeypress_right:function($0){var $1=this.getHoverItem();
if($1){var $2=$1.getMenu();
if($2){this.setOpenItem($1);
$2.setHoverItem($2.getFirstActiveChild());
return;
}}else if(!this.getOpenItem()){var $3=this.getLayout().getFirstActiveChild();
if($3){$3.hasMenu()?this.setOpenItem($3):this.setHoverItem($3);
}}var $4=this.getOpener();
if($4 instanceof qx.ui.toolbar.MenuButton){var $5=$4.getParentToolBar();
this.getFocusRoot().setActiveChild($5);
$5._onkeypress($0);
}else if($4 instanceof qx.ui.menu.Button&&$1){var $6=$4.getParentMenu();
while($6&&$6 instanceof qx.ui.menu.Menu){$4=$6.getOpener();
if($4 instanceof qx.ui.menu.Button){$6=$4.getParentMenu();
}else{if($4){$6=$4.getParent();
}break;
}}
if($6 instanceof qx.ui.toolbar.Part){$6=$6.getParent();
}
if($6 instanceof qx.ui.toolbar.ToolBar){this.getFocusRoot().setActiveChild($6);
$6._onkeypress($0);
}}},
_onkeydown_enter:function($0){var $1=this.getHoverItem();
if($1){$1.execute();
}qx.ui.menu.Manager.getInstance().update();
}},
destruct:function(){this.hide();
this._disposeObjects("_openTimer",
"_closeTimer",
"_layout");
}});




/* ID: qx.ui.layout.VerticalBoxLayout */
qx.Class.define("qx.ui.layout.VerticalBoxLayout",
{extend:qx.ui.layout.BoxLayout,
properties:{orientation:{refine:true,
init:"vertical"}}});




/* ID: qx.ui.menu.Layout */
qx.Class.define("qx.ui.menu.Layout",
{extend:qx.ui.layout.VerticalBoxLayout,
properties:{anonymous:{refine:true,
init:true},
appearance:{refine:true,
init:"menu-layout"}},
members:{_createLayoutImpl:function(){return new qx.ui.menu.MenuLayoutImpl(this);
}}});




/* ID: qx.ui.menu.MenuLayoutImpl */
qx.Class.define("qx.ui.menu.MenuLayoutImpl",
{extend:qx.ui.layout.impl.VerticalBoxLayoutImpl,
construct:function($0){arguments.callee.base.call(this,
$0);
this.setEnableFlexSupport(false);
},
members:{updateChildrenOnJobQueueFlush:function($0){var $1=this.getWidget();
var $2,
$3;
if($0.preferredInnerWidth){var $2=$1.getChildren(),
$4=$2.length,
$3;
var $5,
$6;
for(var $7=0;$7<$4;$7++){$3=$2[$7];
$5=$3.getChildren();
$6=$5.length;
for(var $8=0;$8<$6;$8++){$5[$8].addToLayoutChanges("locationX");
}}}return arguments.callee.base.call(this,
$0);
}}});




/* ID: qx.ui.menu.Separator */
qx.Class.define("qx.ui.menu.Separator",
{extend:qx.ui.layout.CanvasLayout,
construct:function(){arguments.callee.base.call(this);
this.initHeight();
this.setStyleProperty("fontSize",
"0");
this.setStyleProperty("lineHeight",
"0");
this._line=new qx.ui.basic.Terminator;
this._line.setAnonymous(true);
this._line.setAppearance("menu-separator-line");
this.add(this._line);
this.addEventListener("mousedown",
this._onmousedown);
},
properties:{height:{refine:true,
init:"auto"},
appearance:{refine:true,
init:"menu-separator"}},
members:{hasIcon:qx.lang.Function.returnFalse,
hasLabel:qx.lang.Function.returnFalse,
hasShortcut:qx.lang.Function.returnFalse,
hasMenu:qx.lang.Function.returnFalse,
_onmousedown:function($0){$0.stopPropagation();
}},
destruct:function(){this._disposeObjects("_line");
}});




/* ID: qx.ui.menu.Button */
qx.Class.define("qx.ui.menu.Button",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function($0,
$1,
$2,
$3){arguments.callee.base.call(this);
var $4=this._iconObject=new qx.ui.basic.Image;
$4.setWidth(16);
$4.setAnonymous(true);
var $5=this._labelObject=new qx.ui.basic.Label;
$5.setAnonymous(true);
$5.setSelectable(false);
var $6=this._shortcutObject=new qx.ui.basic.Label;
$6.setAnonymous(true);
$6.setSelectable(false);
var $7=this._arrowObject=new qx.ui.basic.Image;
$7.setAppearance("menu-button-arrow");
$7.setAnonymous(true);
if($0!=null){this.setLabel($0);
}
if($1!=null){this.setIcon($1);
}
if($2!=null){this.setCommand($2);
qx.locale.Manager.getInstance().addEventListener("changeLocale",
function($8){this._applyCommand($2,
$2);
},
this);
}
if($3!=null){this.setMenu($3);
}this.initMinWidth();
this.initHeight();
this.addEventListener("mouseup",
this._onmouseup);
},
properties:{allowStretchX:{refine:true,
init:true},
appearance:{refine:true,
init:"menu-button"},
minWidth:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"},
icon:{check:"String",
apply:"_applyIcon",
nullable:true,
themeable:true},
label:{apply:"_applyLabel",
nullable:true,
dispose:true},
menu:{check:"qx.ui.menu.Menu",
nullable:true,
apply:"_applyMenu"}},
members:{_hasIcon:false,
_hasLabel:false,
_hasShortcut:false,
_hasMenu:false,
hasIcon:function(){return this._hasIcon;
},
hasLabel:function(){return this._hasLabel;
},
hasShortcut:function(){return this._hasShortcut;
},
hasMenu:function(){return this._hasMenu;
},
getIconObject:function(){return this._iconObject;
},
getLabelObject:function(){return this._labelObject;
},
getShortcutObject:function(){return this._shortcutObject;
},
getArrowObject:function(){return this._arrowObject;
},
getParentMenu:function(){var $0=this.getParent();
if($0){$0=$0.getParent();
if($0&&$0 instanceof qx.ui.menu.Menu){return $0;
}}return null;
},
_createLayoutImpl:function(){return new qx.ui.menu.ButtonLayoutImpl(this);
},
_applyIcon:function($0,
$1){this._iconObject.setSource($0);
if($0&&$0!==""){this._hasIcon=true;
if(!$1||$1===""){this.addAtBegin(this._iconObject);
}}else{this._hasIcon=false;
this.remove(this._iconObject);
}},
_applyLabel:function($0,
$1){this._labelObject.setText($0);
if($0&&$0!==""){this._hasLabel=true;
if(!$1||$1===""){this.addAt(this._labelObject,
this.getFirstChild()==this._iconObject?1:0);
}}else{this._hasLabel=false;
this.remove(this._labelObject);
}},
_applyCommand:function($0,
$1){var $2=$0?$0.toString():"";
this._shortcutObject.setText($2);
if(qx.util.Validation.isValidString($2)){this._hasShortcut=true;
var $3=$1?$1.toString():"";
if(qx.util.Validation.isInvalidString($3)){if(this.getLastChild()==this._arrowObject){this.addBefore(this._shortcutObject,
this._arrowObject);
}else{this.addAtEnd(this._shortcutObject);
}}}else{this._hasShortcut=false;
this.remove(this._shortcutObject);
}},
_applyMenu:function($0,
$1){if($0){this._hasMenu=true;
if(qx.util.Validation.isInvalidObject($1)){this.addAtEnd(this._arrowObject);
}}else{this._hasMenu=false;
this.remove(this._arrowObject);
}},
_onmouseup:function($0){this.execute();
}},
destruct:function(){this._disposeObjects("_iconObject",
"_labelObject",
"_shortcutObject",
"_arrowObject");
}});




/* ID: qx.ui.menu.ButtonLayoutImpl */
qx.Class.define("qx.ui.menu.ButtonLayoutImpl",
{extend:qx.ui.layout.impl.HorizontalBoxLayoutImpl,
construct:function($0){arguments.callee.base.call(this,
$0);
this.setEnableFlexSupport(false);
},
members:{computeChildrenNeededWidth:function(){var $0=this.getWidget();
var $1=$0.getParent().getParent();
return $1.getMenuButtonNeededWidth();
},
updateSelfOnChildOuterWidthChange:function($0){var $1=this.getWidget();
var $2=$1.getParent().getParent();
switch($0){case $1._iconObject:$2._invalidateMaxIconWidth();
break;
case $1._labelObject:$2._invalidateMaxLabelWidth();
break;
case $1._shortcutObject:$2._invalidateMaxShortcutWidth();
break;
case $1._arrowObject:$2._invalidateMaxArrowWidth();
break;
}return arguments.callee.base.call(this,
$0);
},
layoutChild_locationX:function($0,
$1){var $2=this.getWidget();
var $3=$2.getParent().getParent();
var $4=null;
switch($0){case $2._iconObject:$4=$3.getIconPosition();
break;
case $2._labelObject:$4=$3.getLabelPosition();
break;
case $2._shortcutObject:$4=$3.getShortcutPosition();
break;
case $2._arrowObject:$4=$3.getArrowPosition();
break;
}
if($4!=null){$4+=$2.getPaddingLeft();
$0._renderRuntimeLeft($4);
}}}});




/* ID: qx.ui.menu.CheckBox */
qx.Class.define("qx.ui.menu.CheckBox",
{extend:qx.ui.menu.Button,
construct:function($0,
$1,
$2){arguments.callee.base.call(this,
$0,
null,
$1);
if($2!=null){this.setChecked($2);
}},
properties:{appearance:{refine:true,
init:"menu-check-box"},
name:{check:"String"},
value:{check:"String",
event:"changeValue"},
checked:{check:"Boolean",
init:false,
apply:"_applyChecked"}},
members:{_applyChecked:function($0,
$1){$0===true?this.addState("checked"):this.removeState("checked");
},
execute:function(){this._processExecute();
arguments.callee.base.call(this);
},
_processExecute:function(){this.toggleChecked();
}}});




/* ID: qx.ui.menu.RadioButton */
qx.Class.define("qx.ui.menu.RadioButton",
{extend:qx.ui.menu.CheckBox,
properties:{appearance:{refine:true,
init:"menu-radio-button"},
manager:{check:"qx.ui.selection.RadioManager",
nullable:true,
apply:"_applyManager"}},
members:{_applyChecked:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
var $2=this.getManager();
if($2){$2.handleItemChecked(this,
$0);
}},
_applyManager:function($0,
$1){if($1){$1.remove(this);
}
if($0){$0.add(this);
}},
_applyName:function($0,
$1){if(this.getManager()){this.getManager().setName($0);
}},
_processExecute:function(){this.setChecked(true);
}}});




/* ID: qx.client.Command */
qx.Class.define("qx.client.Command",
{extend:qx.core.Target,
events:{"execute":"qx.event.type.DataEvent"},
construct:function($0,
$1){arguments.callee.base.call(this);
this.__modifier={};
this.__key=null;
if($0!=null){this.setShortcut($0);
}
if($1!=null){this.warn("The use of keyCode in command is deprecated. Use keyIdentifier instead.");
this.setKeyCode($1);
}{};
qx.event.handler.EventHandler.getInstance().addCommand(this);
},
properties:{enabled:{init:true,
check:"Boolean",
event:"changeEnabled"},
shortcut:{check:"String",
apply:"_applyShortcut",
nullable:true},
keyCode:{check:"Number",
nullable:true},
keyIdentifier:{check:"String",
nullable:true}},
members:{getKeyCode:function(){return this._keyCode;
},
setKeyCode:function($0){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
this._keyCode=$0;
},
execute:function($0){if(this.hasEventListeners("execute")){var $1=new qx.event.type.DataEvent("execute",
$0);
this.dispatchEvent($1,
true);
}return false;
},
_applyShortcut:function($0,
$1){if($0){this.__modifier={};
this.__key=null;
var $2=$0.split(/[-+\s]+/);
var $3=$2.length;
for(var $4=0;$4<$3;$4++){var $5=this.__oldKeyNameToKeyIdentifier($2[$4]);
switch($5){case "Control":case "Shift":case "Meta":case "Alt":this.__modifier[$5]=true;
break;
case "Unidentified":var $6="Not a valid key name for a command: "+$2[$4];
this.error($6);
throw $6;
default:if(this.__key){var $6="You can only specify one non modifier key!";
this.error($6);
throw $6;
}this.__key=$5;
}}}return true;
},
matchesKeyEvent:function($0){var $1=this.__key||this.getKeyIdentifier();
if(!$1&&!this.getKeyCode()){return ;
}if((this.__modifier.Shift&&!$0.isShiftPressed())||
(this.__modifier.Control&&!$0.isCtrlPressed())||
(this.__modifier.Alt&&!$0.isAltPressed())){return false;
}
if($1){if($1==$0.getKeyIdentifier()){return true;
}}else{if(this.getKeyCode()==$0.getKeyCode()){return true;
}}return false;
},
__oldKeyNameToKeyIdentifierMap:{esc:"Escape",
ctrl:"Control",
print:"PrintScreen",
del:"Delete",
pageup:"PageUp",
pagedown:"PageDown",
numlock:"NumLock",
numpad_0:"0",
numpad_1:"1",
numpad_2:"2",
numpad_3:"3",
numpad_4:"4",
numpad_5:"5",
numpad_6:"6",
numpad_7:"7",
numpad_8:"8",
numpad_9:"9",
numpad_divide:"/",
numpad_multiply:"*",
numpad_minus:"-",
numpad_plus:"+"},
__oldKeyNameToKeyIdentifier:function($0){var $1=qx.event.handler.KeyEventHandler.getInstance();
var $2="Unidentified";
if($1.isValidKeyIdentifier($0)){return $0;
}
if($0.length==1&&$0>="a"&&$0<="z"){return $0.toUpperCase();
}$0=$0.toLowerCase();
if(!qx.event.type.KeyEvent.keys[$0]){return "Unidentified";
}var $2=this.__oldKeyNameToKeyIdentifierMap[$0];
if($2){return $2;
}else{return qx.lang.String.toFirstUp($0);
}},
toString:function(){var $0=this.getKeyCode();
var $1=this.__key||this.getKeyIdentifier();
var $2=[];
for(var $3 in this.__modifier){$2.push(qx.locale.Key.getKeyName("short",
$3));
}
if($1){$2.push(qx.locale.Key.getKeyName("short",
$1));
}
if($0!=null){var $4=qx.event.type.KeyEvent.codes[$0];
$2.push($4?qx.lang.String.toFirstUp($4):String($0));
}return $2.join("-");
}},
destruct:function(){var $0=qx.event.handler.EventHandler.getInstance();
if($0){$0.removeCommand(this);
}this._disposeFields("__modifier",
"__key");
}});




/* ID: qx.locale.Key */
qx.Class.define("qx.locale.Key",
{statics:{getKeyName:function($0,
$1,
$2){if($0!="short"&&$0!="full"){throw new Error('format must be one of: "short", "full"');
}var $3="key_"+$0+"_"+$1;
var $4=new qx.locale.LocalizedString($3,
[],
$2);
if($4==$3){return qx.locale.Key._keyNames[$3]||$1;
}else{return $4.toString();
}}},
defer:function($0,
$1,
$2){var $3={};
var $4=qx.locale.Manager;
$3[$4.marktr("key_short_Backspace")]="Backspace";
$3[$4.marktr("key_short_Tab")]="Tab";
$3[$4.marktr("key_short_Space")]="Space";
$3[$4.marktr("key_short_Enter")]="Enter";
$3[$4.marktr("key_short_Shift")]="Shift";
$3[$4.marktr("key_short_Control")]="Ctrl";
$3[$4.marktr("key_short_Alt")]="Alt";
$3[$4.marktr("key_short_CapsLock")]="Caps";
$3[$4.marktr("key_short_Meta")]="Meta";
$3[$4.marktr("key_short_Escape")]="Esc";
$3[$4.marktr("key_short_Left")]="Left";
$3[$4.marktr("key_short_Up")]="Up";
$3[$4.marktr("key_short_Right")]="Right";
$3[$4.marktr("key_short_Down")]="Down";
$3[$4.marktr("key_short_PageUp")]="PgUp";
$3[$4.marktr("key_short_PageDown")]="PgDn";
$3[$4.marktr("key_short_End")]="End";
$3[$4.marktr("key_short_Home")]="Home";
$3[$4.marktr("key_short_Insert")]="Ins";
$3[$4.marktr("key_short_Delete")]="Del";
$3[$4.marktr("key_short_NumLock")]="Num";
$3[$4.marktr("key_short_PrintScreen")]="Print";
$3[$4.marktr("key_short_Scroll")]="Scroll";
$3[$4.marktr("key_short_Pause")]="Pause";
$3[$4.marktr("key_short_Win")]="Win";
$3[$4.marktr("key_short_Apps")]="Apps";
$3[$4.marktr("key_full_Backspace")]="Backspace";
$3[$4.marktr("key_full_Tab")]="Tabulator";
$3[$4.marktr("key_full_Space")]="Space";
$3[$4.marktr("key_full_Enter")]="Enter";
$3[$4.marktr("key_full_Shift")]="Shift";
$3[$4.marktr("key_full_Control")]="Control";
$3[$4.marktr("key_full_Alt")]="Alt";
$3[$4.marktr("key_full_CapsLock")]="CapsLock";
$3[$4.marktr("key_full_Meta")]="Meta";
$3[$4.marktr("key_full_Escape")]="Escape";
$3[$4.marktr("key_full_Left")]="Left";
$3[$4.marktr("key_full_Up")]="Up";
$3[$4.marktr("key_full_Right")]="Right";
$3[$4.marktr("key_full_Down")]="Down";
$3[$4.marktr("key_full_PageUp")]="PageUp";
$3[$4.marktr("key_full_PageDown")]="PageDown";
$3[$4.marktr("key_full_End")]="End";
$3[$4.marktr("key_full_Home")]="Home";
$3[$4.marktr("key_full_Insert")]="Insert";
$3[$4.marktr("key_full_Delete")]="Delete";
$3[$4.marktr("key_full_NumLock")]="NumLock";
$3[$4.marktr("key_full_PrintScreen")]="PrintScreen";
$3[$4.marktr("key_full_Scroll")]="Scroll";
$3[$4.marktr("key_full_Pause")]="Pause";
$3[$4.marktr("key_full_Win")]="Win";
$3[$4.marktr("key_full_Apps")]="Apps";
$0._keyNames=$3;
}});




/* ID: qx.ui.toolbar.CheckBox */
qx.Class.define("qx.ui.toolbar.CheckBox",
{extend:qx.ui.toolbar.Button,
construct:function($0,
$1,
$2){arguments.callee.base.call(this,
$0,
$1);
if($2!=null){this.setChecked($2);
}},
properties:{checked:{check:"Boolean",
init:false,
apply:"_applyChecked",
event:"changeChecked"}},
members:{_applyChecked:function($0,
$1){$0?this.addState("checked"):this.removeState("checked");
},
_onmouseup:function($0){this.setCapture(false);
if(!this.hasState("abandoned")){this.addState("over");
this.setChecked(!this.getChecked());
this.execute();
}this.removeState("abandoned");
this.removeState("pressed");
$0.stopPropagation();
}}});




/* ID: qx.ui.toolbar.RadioButton */
qx.Class.define("qx.ui.toolbar.RadioButton",
{extend:qx.ui.toolbar.CheckBox,
properties:{manager:{check:"qx.ui.selection.RadioManager",
apply:"_applyManager",
nullable:true},
name:{check:"String",
event:"changeName"},
disableUncheck:{check:"Boolean",
init:false}},
members:{_applyChecked:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
var $2=this.getManager();
if($2){$2.handleItemChecked(this,
$0);
}},
_applyManager:function($0,
$1){if($1){$1.remove(this);
}
if($0){$0.add(this);
}},
_onmouseup:function($0){this.setCapture(false);
if(!this.hasState("abandoned")){this.addState("over");
this.setChecked(this.getDisableUncheck()||!this.getChecked());
this.execute();
}this.removeState("abandoned");
this.removeState("pressed");
$0.stopPropagation();
}}});




/* ID: qx.ui.popup.PopupAtom */
qx.Class.define("qx.ui.popup.PopupAtom",
{extend:qx.ui.popup.Popup,
construct:function($0,
$1){arguments.callee.base.call(this);
this._atom=new qx.ui.basic.Atom($0,
$1);
this._atom.setParent(this);
},
members:{_isFocusRoot:false,
getAtom:function(){return this._atom;
}},
destruct:function(){this._disposeObjects("_atom");
}});




/* ID: qx.ui.popup.ToolTip */
qx.Class.define("qx.ui.popup.ToolTip",
{extend:qx.ui.popup.PopupAtom,
construct:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
this.setStyleProperty("filter",
"progid:DXImageTransform.Microsoft.Shadow(color='Gray', Direction=135, Strength=4)");
this._showTimer=new qx.client.Timer(this.getShowInterval());
this._showTimer.addEventListener("interval",
this._onshowtimer,
this);
this._hideTimer=new qx.client.Timer(this.getHideInterval());
this._hideTimer.addEventListener("interval",
this._onhidetimer,
this);
this.addEventListener("mouseover",
this._onmouseover);
this.addEventListener("mouseout",
this._onmouseover);
},
properties:{appearance:{refine:true,
init:"tool-tip"},
hideOnHover:{check:"Boolean",
init:true},
mousePointerOffsetX:{check:"Integer",
init:1},
mousePointerOffsetY:{check:"Integer",
init:20},
showInterval:{check:"Integer",
init:1000,
apply:"_applyShowInterval"},
hideInterval:{check:"Integer",
init:4000,
apply:"_applyHideInterval"},
boundToWidget:{check:"qx.ui.core.Widget",
apply:"_applyBoundToWidget"}},
members:{_minZIndex:1e7,
_applyHideInterval:function($0,
$1){this._hideTimer.setInterval($0);
},
_applyShowInterval:function($0,
$1){this._showTimer.setInterval($0);
},
_applyBoundToWidget:function($0,
$1){if($0){this.setParent($0.getTopLevelWidget());
}else if($1){this.setParent(null);
}},
_beforeAppear:function(){arguments.callee.base.call(this);
this._stopShowTimer();
this._startHideTimer();
},
_beforeDisappear:function(){arguments.callee.base.call(this);
this._stopHideTimer();
},
_afterAppear:function(){arguments.callee.base.call(this);
if(this.getRestrictToPageOnOpen()){var $0=qx.ui.core.ClientDocument.getInstance();
var $1=$0.getClientWidth();
var $2=$0.getClientHeight();
var $3=parseInt(this.getRestrictToPageLeft());
var $4=parseInt(this.getRestrictToPageRight());
var $5=parseInt(this.getRestrictToPageTop());
var $6=parseInt(this.getRestrictToPageBottom());
var $7=(this._wantedLeft==null)?this.getLeft():this._wantedLeft;
var $8=this.getTop();
var $9=this.getBoxWidth();
var $a=this.getBoxHeight();
var $b=qx.event.type.MouseEvent.getPageX();
var $c=qx.event.type.MouseEvent.getPageY();
var $d=this.getLeft();
var $e=$8;
if($7+$9>$1-$4){$7=$1-$4-$9;
}
if($8+$a>$2-$6){$8=$2-$6-$a;
}
if($7<$3){$7=$3;
}
if($8<$5){$8=$5;
}if($7<=$b&&$b<=$7+$9&&$8<=$c&&$c<=$8+$a){var $f=$c-$8;
var $g=$f-$a;
var $h=$b-$7;
var $i=$h-$9;
var $j=Math.max(0,
$5-($8+$g));
var $k=Math.max(0,
$8+$a+$f-($2-$6));
var $l=Math.max(0,
$3-($7+$i));
var $m=Math.max(0,
$7+$9+$h-($1-$4));
var $n=[[0,
$g,
$j],
[0,
$f,
$k],
[$i,
0,
$l],
[$h,
0,
$m]];
$n.sort(function($o,
$p){return $o[2]-$p[2]||(Math.abs($o[0])+Math.abs($o[1]))-(Math.abs($p[0])+Math.abs($p[1]));
});
var $q=$n[0];
$7=$7+$q[0];
$8=$8+$q[1];
}
if($7!=$d||$8!=$e){var $r=this;
window.setTimeout(function(){$r.setLeft($7);
$r.setTop($8);
},
0);
}}},
_startShowTimer:function(){if(!this._showTimer.getEnabled()){this._showTimer.start();
}},
_startHideTimer:function(){if(!this._hideTimer.getEnabled()){this._hideTimer.start();
}},
_stopShowTimer:function(){if(this._showTimer.getEnabled()){this._showTimer.stop();
}},
_stopHideTimer:function(){if(this._hideTimer.getEnabled()){this._hideTimer.stop();
}},
_onmouseover:function($0){if(this.getHideOnHover()){this.hide();
}},
_onshowtimer:function($0){this.setLeft(qx.event.type.MouseEvent.getPageX()+this.getMousePointerOffsetX());
this.setTop(qx.event.type.MouseEvent.getPageY()+this.getMousePointerOffsetY());
this.show();
},
_onhidetimer:function($0){return this.hide();
}},
destruct:function(){var $0=qx.ui.popup.ToolTipManager.getInstance();
$0.remove(this);
if($0.getCurrentToolTip()==this){$0.resetCurrentToolTip();
}this._disposeObjects("_showTimer",
"_hideTimer");
}});




/* ID: qx.ui.popup.ToolTipManager */
qx.Class.define("qx.ui.popup.ToolTipManager",
{type:"singleton",
extend:qx.util.manager.Object,
properties:{currentToolTip:{check:"qx.ui.popup.ToolTip",
nullable:true,
apply:"_applyCurrentToolTip"}},
members:{_applyCurrentToolTip:function($0,
$1){if($1&&$1.contains($0)){return;
}if($1&&!$1.isDisposed()){$1.hide();
$1._stopShowTimer();
$1._stopHideTimer();
}if($0){$0._startShowTimer();
}},
handleMouseOver:function($0){var $1=$0.getTarget();
var $2;
if(!($1 instanceof qx.ui.core.Widget)&&$1.nodeType==1){$1=qx.event.handler.EventHandler.getTargetObject($1);
}while($1!=null&&!($2=$1.getToolTip())){$1=$1.getParent();
}if($2!=null){$2.setBoundToWidget($1);
}this.setCurrentToolTip($2);
},
handleMouseOut:function($0){var $1=$0.getTarget();
var $2=$0.getRelatedTarget();
var $3=this.getCurrentToolTip();
if($3&&($2==$3||$3.contains($2))){return;
}if($2&&$1&&$1.contains($2)){return;
}if($3&&!$2){this.setCurrentToolTip(null);
}},
handleFocus:function($0){var $1=$0.getTarget();
var $2=$1.getToolTip();
if($2!=null){$2.setBoundToWidget($1);
this.setCurrentToolTip($2);
}},
handleBlur:function($0){var $1=$0.getTarget();
if(!$1){return;
}var $2=this.getCurrentToolTip();
if($2&&$2==$1.getToolTip()){this.setCurrentToolTip(null);
}}}});




/* ID: qx.ui.splitpane.SplitPane */
qx.Class.define("qx.ui.splitpane.SplitPane",
{extend:qx.ui.layout.CanvasLayout,
construct:function($0,
$1,
$2){arguments.callee.base.call(this);
var $3=this._box=new qx.ui.layout.BoxLayout;
$3.setEdge(0);
this.add($3);
this._slider=new qx.ui.splitpane.SplitPaneSlider(this);
this.add(this._slider);
this._splitter=new qx.ui.splitpane.SplitPaneSplitter(this);
this._knob=new qx.ui.splitpane.SplitPaneKnob;
this._splitter.add(this._knob);
this._firstArea=new qx.ui.layout.CanvasLayout;
this._secondArea=new qx.ui.layout.CanvasLayout;
$3.add(this._firstArea,
this._splitter,
this._secondArea);
if($0!=null){this.setOrientation($0);
}if($1!=null){this.setFirstSize($1);
}else{this.initFirstSize();
}
if($2!=null){this.setSecondSize($2);
}else{this.initSecondSize();
}this.initShowKnob();
},
properties:{appearance:{refine:true,
init:"splitpane"},
showKnob:{check:"Boolean",
init:true,
apply:"_applyShowKnob",
themeable:true},
liveResize:{check:"Boolean",
init:false},
orientation:{check:["horizontal",
"vertical"],
apply:"_applyOrientation",
init:"horizontal",
nullable:true},
firstSize:{apply:"_applyFirstSize",
init:"1*"},
secondSize:{apply:"_applySecondSize",
init:"1*"},
splitterSize:{check:"Integer",
init:4,
apply:"_applySplitterSize",
themeable:true}},
members:{addLeft:function(){var $0=this.getFirstArea();
return $0.add.apply($0,
arguments);
},
addTop:function(){var $0=this.getFirstArea();
return $0.add.apply($0,
arguments);
},
addRight:function(){var $0=this.getSecondArea();
return $0.add.apply($0,
arguments);
},
addBottom:function(){var $0=this.getSecondArea();
return $0.add.apply($0,
arguments);
},
getSplitter:function(){return this._splitter;
},
getKnob:function(){return this._knob;
},
getLeftArea:function(){return this.getFirstArea();
},
getTopArea:function(){return this.getFirstArea();
},
getRightArea:function(){return this.getSecondArea();
},
getBottomArea:function(){return this.getSecondArea();
},
getFirstArea:function(){return this._firstArea;
},
getSecondArea:function(){return this._secondArea;
},
_applyShowKnob:function($0,
$1){this._knob.setVisibility($0);
},
_applyOrientation:function($0,
$1){this._box.setOrientation($0);
switch($1){case "horizontal":this._splitter.removeEventListener("mousedown",
this._onSplitterMouseDownX,
this);
this._splitter.removeEventListener("mousemove",
this._onSplitterMouseMoveX,
this);
this._splitter.removeEventListener("mouseup",
this._onSplitterMouseUpX,
this);
this._knob.removeEventListener("mousedown",
this._onSplitterMouseDownX,
this);
this._knob.removeEventListener("mousemove",
this._onSplitterMouseMoveX,
this);
this._knob.removeEventListener("mouseup",
this._onSplitterMouseUpX,
this);
this._splitter.removeState("horizontal");
this._knob.removeState("horizontal");
this._firstArea.setWidth(null);
this._secondArea.setWidth(null);
this._splitter.setWidth(null);
break;
case "vertical":this._splitter.removeEventListener("mousedown",
this._onSplitterMouseDownY,
this);
this._splitter.removeEventListener("mousemove",
this._onSplitterMouseMoveY,
this);
this._splitter.removeEventListener("mouseup",
this._onSplitterMouseUpY,
this);
this._knob.removeEventListener("mousedown",
this._onSplitterMouseDownY,
this);
this._knob.removeEventListener("mousemove",
this._onSplitterMouseMoveY,
this);
this._knob.removeEventListener("mouseup",
this._onSplitterMouseUpY,
this);
this._splitter.removeState("vertical");
this._knob.removeState("vertical");
this._firstArea.setHeight(null);
this._secondArea.setHeight(null);
this._splitter.setHeight(null);
break;
}
switch($0){case "horizontal":this._splitter.addEventListener("mousemove",
this._onSplitterMouseMoveX,
this);
this._splitter.addEventListener("mousedown",
this._onSplitterMouseDownX,
this);
this._splitter.addEventListener("mouseup",
this._onSplitterMouseUpX,
this);
this._knob.addEventListener("mousemove",
this._onSplitterMouseMoveX,
this);
this._knob.addEventListener("mousedown",
this._onSplitterMouseDownX,
this);
this._knob.addEventListener("mouseup",
this._onSplitterMouseUpX,
this);
this._splitter.addState("horizontal");
this._knob.addState("horizontal");
break;
case "vertical":this._splitter.addEventListener("mousedown",
this._onSplitterMouseDownY,
this);
this._splitter.addEventListener("mousemove",
this._onSplitterMouseMoveY,
this);
this._splitter.addEventListener("mouseup",
this._onSplitterMouseUpY,
this);
this._knob.addEventListener("mousedown",
this._onSplitterMouseDownY,
this);
this._knob.addEventListener("mousemove",
this._onSplitterMouseMoveY,
this);
this._knob.addEventListener("mouseup",
this._onSplitterMouseUpY,
this);
this._splitter.addState("vertical");
this._knob.addState("vertical");
break;
}this._syncFirstSize();
this._syncSecondSize();
this._syncSplitterSize();
},
_applyFirstSize:function($0,
$1){this._syncFirstSize();
},
_applySecondSize:function($0,
$1){this._syncSecondSize();
},
_applySplitterSize:function($0,
$1){this._syncSplitterSize();
},
_syncFirstSize:function(){switch(this.getOrientation()){case "horizontal":this._firstArea.setWidth(this.getFirstSize());
break;
case "vertical":this._firstArea.setHeight(this.getFirstSize());
break;
}},
_syncSecondSize:function(){switch(this.getOrientation()){case "horizontal":this._secondArea.setWidth(this.getSecondSize());
break;
case "vertical":this._secondArea.setHeight(this.getSecondSize());
break;
}},
_syncSplitterSize:function(){switch(this.getOrientation()){case "horizontal":this._splitter.setWidth(this.getSplitterSize());
break;
case "vertical":this._splitter.setHeight(this.getSplitterSize());
break;
}},
_onSplitterMouseDownX:function($0){if(!$0.isLeftButtonPressed()){return;
}this._commonMouseDown();
this.getTopLevelWidget().setGlobalCursor("col-resize");
this._slider.addState("dragging");
this._knob.addState("dragging");
this._dragMin=qx.bom.element.Location.getLeft(this._box.getElement(),
"border");
this._dragMax=this._dragMin+this._box.getInnerWidth()-this._splitter.getBoxWidth();
this._dragOffset=$0.getPageX()-qx.bom.element.Location.getLeft(this._splitter.getElement());
},
_onSplitterMouseDownY:function($0){if(!$0.isLeftButtonPressed()){return;
}this._commonMouseDown();
this.getTopLevelWidget().setGlobalCursor("row-resize");
this._slider.addState("dragging");
this._knob.addState("dragging");
this._dragMin=qx.bom.element.Location.getTop(this._box.getElement(),
"border");
this._dragMax=this._dragMin+this._box.getInnerHeight()-this._splitter.getBoxHeight();
this._dragOffset=$0.getPageY()-qx.bom.element.Location.getTop(this._splitter.getElement());
},
_commonMouseDown:function(){this._splitter.setCapture(true);
if(!this.isLiveResize()){this._slider.setLeft(this._splitter.getOffsetLeft());
this._slider.setTop(this._splitter.getOffsetTop());
this._slider.setWidth(this._splitter.getBoxWidth());
this._slider.setHeight(this._splitter.getBoxHeight());
this._slider.show();
}},
_onSplitterMouseMoveX:function($0){if(!this._splitter.getCapture()){return;
}this.isLiveResize()?this._syncX($0):this._slider._renderRuntimeLeft(this._normalizeX($0));
$0.preventDefault();
},
_onSplitterMouseMoveY:function($0){if(!this._splitter.getCapture()){return;
}this.isLiveResize()?this._syncY($0):this._slider._renderRuntimeTop(this._normalizeY($0));
$0.preventDefault();
},
_onSplitterMouseUpX:function($0){if(!this._splitter.getCapture()){return;
}
if(!this.isLiveResize()){this._syncX($0);
}this._commonMouseUp();
},
_onSplitterMouseUpY:function($0){if(!this._splitter.getCapture()){return;
}
if(!this.isLiveResize()){this._syncY($0);
}this._commonMouseUp();
},
_commonMouseUp:function(){this._slider.hide();
this._splitter.setCapture(false);
this.getTopLevelWidget().setGlobalCursor(null);
this._slider.removeState("dragging");
this._knob.removeState("dragging");
},
_syncX:function($0){var $1=this._normalizeX($0);
var $2=this._box.getInnerWidth()-this._splitter.getBoxWidth()-$1;
this._syncCommon($1,
$2);
},
_syncY:function($0){var $1=this._normalizeY($0);
var $2=this._box.getInnerHeight()-this._splitter.getBoxHeight()-$1;
this._syncCommon($1,
$2);
},
_syncCommon:function($0,
$1){this.setFirstSize($0+"*");
this.setSecondSize($1+"*");
},
_normalizeX:function($0){return qx.lang.Number.limit($0.getPageX()-this._dragOffset,
this._dragMin,
this._dragMax)-this._dragMin;
},
_normalizeY:function($0){return qx.lang.Number.limit($0.getPageY()-this._dragOffset,
this._dragMin,
this._dragMax)-this._dragMin;
}},
destruct:function(){this._disposeObjects("_box",
"_firstArea",
"_secondArea",
"_splitter",
"_slider",
"_knob");
}});




/* ID: qx.ui.splitpane.SplitPaneSlider */
qx.Class.define("qx.ui.splitpane.SplitPaneSlider",
{extend:qx.ui.layout.CanvasLayout,
construct:function($0){arguments.callee.base.call(this);
this.setAppearance("splitpane-slider");
this.setStyleProperty("fontSize",
"0px");
this.setStyleProperty("lineHeight",
"0px");
this.hide();
this._pane=$0;
this.initZIndex();
},
properties:{zIndex:{refine:true,
init:1e8}},
destruct:function(){this._disposeObjects("_pane");
}});




/* ID: qx.ui.splitpane.SplitPaneSplitter */
qx.Class.define("qx.ui.splitpane.SplitPaneSplitter",
{extend:qx.ui.layout.CanvasLayout,
construct:function($0){arguments.callee.base.call(this);
this.setZIndex(1000);
this.setStyleProperty("fontSize",
"0px");
this.setStyleProperty("lineHeight",
"0px");
this._pane=$0;
},
properties:{appearance:{refine:true,
init:"splitpane-splitter"}},
destruct:function(){this._disposeObjects("_pane");
}});




/* ID: qx.ui.splitpane.SplitPaneKnob */
qx.Class.define("qx.ui.splitpane.SplitPaneKnob",
{extend:qx.ui.basic.Image,
properties:{appearance:{refine:true,
init:"splitpane-knob"},
visibility:{refine:true,
init:false}}});




/* ID: qx.ui.splitpane.HorizontalSplitPane */
qx.Class.define("qx.ui.splitpane.HorizontalSplitPane",
{extend:qx.ui.splitpane.SplitPane,
construct:function($0,
$1){arguments.callee.base.call(this,
"horizontal",
$0,
$1);
}});




/* ID: spagobi.ui.PageView */
qx.Class.define("spagobi.ui.PageView",
{extend:qx.ui.splitpane.HorizontalSplitPane,
construct:function($0){arguments.callee.base.call(this,
70,
"1*");
this.setShowKnob(false);
this.setSplitterSize(0);
this._pages=[];
var $1={defaultBackgroudColor:$0.toolbar.defaultBackgroudColor,
focusedBackgroudColor:$0.toolbar.focusedBackgroudColor,
defaultSelectedPage:$0.defaultSelectedPage};
this._toolbar=new spagobi.ui.IconBar($1);
var $2=$0.toolbar.buttons;
for(var $3=0;$3<$2.length;$3++){$2[$3].handler=function($4){this.selectPage($4.getTarget().getUserData('name'));
};
$2[$3].context=this;
this._toolbar.addButton($2[$3]);
}
if($0.defaultSelectedPage){this._defaultSelectedPageName=$0.defaultSelectedPage;
}this.addLeft(this._toolbar);
},
members:{_toolbar:undefined,
_pages:undefined,
_selectedPageName:undefined,
_defaultSelectedPageName:undefined,
selectPage:function($0){if(!this._pages[$0]){if($0=="funcManagement"){this._pages[$0]=new spagobi.ui.custom.FunctionalClassDummy($0);
}else{this._pages[$0]=new spagobi.ui.custom.MasterDetailsPage($0);
}this.addRight(this._pages[$0]);
}
if(this._selectedPageName){this._pages[this._selectedPageName].setDisplay(false);
}this._selectedPageName=$0;
this._pages[$0].setDisplay(true);
},
selectDefaultPage:function(){this.selectPage(this._defaultSelectedPageName);
},
getSelectedPageName:function(){return this._selectedPageName;
}}});




/* ID: spagobi.ui.IconBar */
qx.Class.define("spagobi.ui.IconBar",
{extend:qx.ui.layout.VerticalBoxLayout,
construct:function($0){arguments.callee.base.call(this);
this.setSpacing(0);
if($0){if($0.selectedBackgroudColor){this._selectedBackgroudColor=$0.selectedBackgroudColor;
}
if($0.focusedBackgroudColor){this._focusedBackgroudColor=$0.focusedBackgroudColor;
}
if($0.defaultSelectedPage){this._defaultSelectedPageName=$0.defaultSelectedPage;
}}},
members:{_selectedBackgroudColor:'#DEFF83',
_focusedBackgroudColor:'gray',
_defaultSelectedPageName:undefined,
_checkedButton:undefined,
addButton:function($0){this._addAtom($0.name,
$0.image,
$0.handler,
$0.context,
$0.tooltip);
},
_addAtom:function($0,
$1,
$2,
$3,
$4){var $5=new qx.ui.basic.Atom('',
$1);
$5.setUserData('name',
$0);
$5.setUserData('checked',
false);
if($0==this._defaultSelectedPageName){this._check($5);
}
if($4){var $6=new qx.ui.popup.ToolTip($4);
$5.setToolTip($6);
$6.setShowInterval(20);
}$5.addEventListener("mouseover",
this._onmouseover,
this);
$5.addEventListener("mouseout",
this._onmouseout,
this);
$5.addEventListener("mousedown",
$2,
$3);
$5.addEventListener("mousedown",
this._onmousedown,
this);
$5.addEventListener("keydown",
this._onkeydown,
this);
$5.addEventListener("keypress",
this._onkeypress,
this);
this.add($5);
},
_check:function($0){$0.setUserData('checked',
true);
$0.setBackgroundColor(this._selectedBackgroudColor);
this._checkedButton=$0;
},
_uncheck:function(){this._checkedButton.setBackgroundColor(null);
this._checkedButton.setUserData('checked',
false);
},
select:function($0){if(!this._checkedButton){this._check($0);
}else{this._uncheck();
this._check($0);
}},
_onmousedown:function($0){this.select($0.getTarget());
},
_onmouseover:function($0){if($0.getTarget().getUserData('checked')==false){$0.getTarget().setBackgroundColor(this._focusedBackgroudColor);
}},
_onmouseout:function($0){if($0.getTarget().getUserData('checked')==false){$0.getTarget().setBackgroundColor(null);
}},
_onkeydown:function($0){},
_onkeypress:function($0){switch($0.getKeyIdentifier()){case "Up":var $1=true;
break;
case "Down":var $1=false;
break;
default:return;
}var $2=($1?($0.getTarget().isFirstChild()?$0.getTarget().getParent().getLastChild():$0.getTarget().getPreviousSibling()):($0.getTarget().isLastChild()?$0.getTarget().getParent().getFirstChild():$0.getTarget().getNextSibling()));
$2.setFocused(true);
$2.setBackgroundColor(this._focusedBackgroudColor);
$0.getTarget().setBackgroundColor(null);
}}});




/* ID: spagobi.ui.custom.FunctionalClassDummy */
qx.Class.define("spagobi.ui.custom.FunctionalClassDummy",
{extend:qx.ui.splitpane.HorizontalSplitPane,
construct:function($0){arguments.callee.base.call(this,
"1*",
"4*");
this.setWidth("100%");
this.setHeight("100%");
if($0==='funcManagement'){var $1=new qx.ui.layout.VerticalBoxLayout();
$1.setWidth("100%");
$1.setHeight("100%");
$1.setOverflow("auto");
$1.setBackgroundColor('white');
$1.setBorder(new qx.ui.core.Border(1));
var $2=new qx.ui.basic.Label("Functionalities Tree");
with($2){width=200;
height=300;
}var $3=new spagobi.ui.Tree({root:"Functionalities"});
var $4=$3.addNode({name:"Report",
parent:$3,
data:{label:'ReportLabel',
name:'ReportName',
desc:'ReportDesc',
func:[{role:'/admin',
dev:true,
test:true,
exe:true},
{role:'/community/direction',
dev:true,
test:true,
exe:true}]}});
var $5=$3.addNode({name:"OLAP",
parent:$3,
data:{label:'OLAPLabel',
name:'OLAPName',
desc:'OLAPDesc',
func:[{role:'/community',
dev:true,
test:true,
exe:true},
{role:'/guest',
dev:true,
test:true,
exe:true}]}});
var $6=$3.addNode({name:"myOLAP",
parent:$5,
data:{label:'myOLAP Label',
name:'myOLAP Name',
desc:'myOLAP Desc'}});
var $7=$3.addNode({name:"DashBoard",
parent:$3,
data:{label:'DashBoardLabel',
name:'DashBoardName',
desc:'DashBoardDesc'}});
var $8=$3.addNode({name:"myDashBoardFolder",
parent:$7,
data:{label:'myDashBoardFolderLabel',
name:'myDashBoardFolderName',
desc:'myDashBoardFolderDesc'}});
var $9=$3.addNode({name:"myDashBoard",
parent:$7,
data:{label:'myDashBoard Label',
name:'myDashBoard Name',
desc:'myDashBoard Desc'}});
this._tree=$3;
$3.getManager().addEventListener("changeSelection",
this.showInfo,
this);
$1.add($2,
$3);
this.addLeft($1);
var $a=new spagobi.ui.custom.FunctionalityTreeSubClass();
$a.setWidth("100%");
$a.setHeight("100%");
this.addRight($a);
$a.setOverflow("auto");
var $b=$a.getUserData('toolBar');
this._createButton=$b.getUserData('create');
this._createButton.addEventListener("execute",
this.createNode,
this);
this._saveButton=$b.getUserData('save');
this._saveButton.addEventListener("execute",
this.save,
this);
this._deleteButton=$b.getUserData('delete');
this._deleteButton.addEventListener("execute",
this.deleteNode,
this);
this._moveUpButton=$b.getUserData('moveUp');
this._moveUpButton.addEventListener("execute",
this.moveUp,
this);
this._moveDownButton=$b.getUserData('moveDown');
this._moveDownButton.addEventListener("execute",
this.moveDown,
this);
this._clearAllButton=$b.getUserData('clearAll');
this._clearAllButton.addEventListener("execute",
this.clearAll,
this);
this._createButton.setEnabled(false);
this._saveButton.setEnabled(false);
this._deleteButton.setEnabled(false);
this._moveUpButton.setEnabled(false);
this._moveDownButton.setEnabled(false);
this._right=$a;
}},
members:{_tree:undefined,
_right:undefined,
_createButton:undefined,
_saveButton:undefined,
_deleteButton:undefined,
_moveUpButton:undefined,
_moveDownButton:undefined,
showButtons:function(){if(this._tree.getManager().getSelectedItem()==this._tree){this._createButton.setEnabled(true);
this._saveButton.setEnabled(false);
this._deleteButton.setEnabled(false);
this._moveUpButton.setEnabled(false);
this._moveDownButton.setEnabled(false);
return;
}else{var $0=this._tree.getManager();
var $1=$0.getSelectedItem();
this._saveButton.setEnabled(true);
this._deleteButton.setEnabled(true);
if($1 instanceof qx.ui.tree.TreeFile){this._createButton.setEnabled(false);
if($0.getPreviousSibling($1)==undefined){this._moveUpButton.setEnabled(false);
}else{this._moveUpButton.setEnabled(true);
}
if($0.getNextSibling($1)==undefined){this._moveDownButton.setEnabled(false);
}else{this._moveDownButton.setEnabled(true);
}}else{this._createButton.setEnabled(true);
this._saveButton.setEnabled(true);
this._deleteButton.setEnabled(true);
if($0.getPreviousSibling($1)==undefined){this._moveUpButton.setEnabled(false);
}else{this._moveUpButton.setEnabled(true);
}
if($0.getNextSibling($1)==undefined){this._moveDownButton.setEnabled(false);
}else{this._moveDownButton.setEnabled(true);
}}}},
showInfo:function($0){this.showButtons();
var $1={};
if(this._tree.getManager().getSelectedItem()==this._tree){$1.tree=this._tree;
}else{$1=this._tree.getNodeData();
}this._right.setData($1);
},
moveUp:function($0){this._tree.moveUpNode();
this.showButtons();
},
moveDown:function($0){this._tree.moveDownNode();
this.showButtons();
},
save:function($0){var $1=this._right.getUserData('label');
var $2=$1.getUserData('field');
var $3=this._right.getUserData('name');
var $4=$3.getUserData('field');
var $5=this._right.getUserData('description');
var $6=$5.getUserData('field');
var $7=this._right.getUserData('table');
var $8={label:$2.getValue(),
name:$4.getValue(),
desc:$6.getValue(),
roles:$7.getUpdatedData()};
var $9='';
for(p in $8){$9+=p+': '+$8[p]+';\n';
}alert($9);
},
deleteNode:function($0){this._tree.deleteTreeNode();
},
clearAll:function($0){this._right.resetOldData();
},
createNode:function($0){var $1=this._right.getData();
var $2=this._tree.getSelectedElement();
var $3={};
$3.name=$1.label;
$3.parent=this._tree.getUserData($2.getLabel());
$3.data=$1;
var $4=this._tree.addNode($3);
this._tree.setSelectedElement($4.getUserData('node'));
}}});




/* ID: qx.ui.tree.AbstractTreeElement */
qx.Class.define("qx.ui.tree.AbstractTreeElement",
{type:"abstract",
extend:qx.ui.layout.BoxLayout,
construct:function($0){this._indentObject=$0._indentObject;
this._iconObject=$0._iconObject;
this._labelObject=$0._labelObject;
this._indentObject.setAnonymous(true);
this._iconObject.setAnonymous(true);
this._labelObject.setAnonymous(true);
this._labelObject.setSelectable(false);
this._labelObject.setStyleProperty("lineHeight",
"100%");
this._labelObject.setMode("text");
arguments.callee.base.call(this);
if(qx.util.Validation.isValid($0._label)){this.setLabel($0._label);
}this.initSelectable();
this.BASE_URI=qx.io.Alias.getInstance().resolve("widget/tree/");
for(var $1=0;$1<$0._fields.length;$1++){this.add($0._fields[$1]);
}if($0._icons.unselected!==undefined){this.setIcon($0._icons.unselected);
this.setIconSelected($0._icons.unselected);
}else{this.initIcon();
}
if($0._icons.selected!==undefined){this.setIconSelected($0._icons.selected);
}
if(($0._icons.selected===undefined)&&($0._icons.unselected!==undefined)){this.initIconSelected();
}this._iconObject.setAppearance("tree-element-icon");
this._labelObject.setAppearance("tree-element-label");
this.addEventListener("mousedown",
this._onmousedown);
this.addEventListener("mouseup",
this._onmouseup);
},
properties:{orientation:{refine:true,
init:"horizontal"},
selectable:{refine:true,
init:false},
appearance:{refine:true,
init:"tree-element"},
icon:{check:"String",
nullable:true,
init:"icon/16/actions/document-new.png",
apply:"_applyIcon"},
iconSelected:{check:"String",
event:"iconSelected",
nullable:true,
init:null,
apply:"_applyIcon"},
label:{check:"Label",
apply:"_applyLabel",
dispose:true},
selected:{check:"Boolean",
init:false,
apply:"_applySelected",
event:"changeSelected"}},
members:{_applyLabel:function($0,
$1){if(this._labelObject){this._labelObject.setText($0);
}},
_applyIcon:function($0,
$1){var $2=this.getIconObject();
if($2){var $3=this._evalCurrentIcon();
if(!$3){$2.setDisplay(false);
}else{$2.setDisplay(true);
$2.setSource($3);
}this.addToTreeQueue();
}},
_applySelected:function($0,
$1){if($0){this.addState("selected");
this._labelObject.addState("selected");
}else{this.removeState("selected");
this._labelObject.removeState("selected");
}var $2=this.getTree();
if(!$2._fastUpdate||($1&&$2._oldItem==this)){this._iconObject.setSource(this._evalCurrentIcon());
if($0){this._iconObject.addState("selected");
}else{this._iconObject.removeState("selected");
}}var $3=this.getTree().getManager();
$3.setItemSelected(this,
$0);
},
_getRowStructure:function($0,
$1,
$2){if($0 instanceof qx.ui.tree.TreeRowStructure){return $0;
}else{return qx.ui.tree.TreeRowStructure.getInstance().standard($0,
$1,
$2);
}},
_evalCurrentIcon:function(){if(this.getSelected()&&this.getIconSelected()){return this.getIconSelected();
}else{return this.getIcon();
}},
getParentFolder:function(){if(this.getParent()&&typeof (this.getParent().getParent)=="function"){return this.getParent().getParent();
}return null;
},
getLevel:function(){var $0=this.getParentFolder();
return $0?$0.getLevel()+1:null;
},
getTree:function(){var $0=this.getParentFolder();
return $0?$0.getTree():null;
},
getIndentObject:function(){return this._indentObject;
},
getIconObject:function(){return this._iconObject;
},
getLabelObject:function(){return this._labelObject;
},
destroy:function(){var $0=this.getTree()?this.getTree().getManager():null;
if($0){if($0.getItemSelected(this)){if($0.getMultiSelection()){$0.setItemSelected(this,
false);
}else{$0.deselectAll();
}}if($0.getLeadItem()==this){$0.setLeadItem(null);
}if($0.getAnchorItem()==this){$0.setAnchorItem(null);
}}if(this.destroyContent){this.destroyContent();
}this.disconnect();
var $1=this.getParentFolder();
if($1){$1.remove(this);
}qx.client.Timer.once(function(){this.dispose();
},
this,
0);
},
getHierarchy:function($0){if(this._labelObject){$0.unshift(this._labelObject.getText());
}var $1=this.getParentFolder();
if($1){$1.getHierarchy($0);
}return $0;
},
addToTreeQueue:function(){var $0=this.getTree();
if($0){$0.addChildToTreeQueue(this);
}},
removeFromTreeQueue:function(){var $0=this.getTree();
if($0){$0.removeChildFromTreeQueue(this);
}},
addToCustomQueues:function($0){this.addToTreeQueue();
arguments.callee.base.call(this,
$0);
},
removeFromCustomQueues:function($0){this.removeFromTreeQueue();
arguments.callee.base.call(this,
$0);
},
_applyParent:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
if($1&&!$1.isDisplayable()&&$1.getParent()&&$1.getParent().isDisplayable()){$1.getParent().addToTreeQueue();
}if($0&&!$0.isDisplayable()&&$0.getParent()&&$0.getParent().isDisplayable()){$0.getParent().addToTreeQueue();
}},
_handleDisplayableCustom:function($0,
$1,
$2){arguments.callee.base.call(this,
$0,
$1,
$2);
if($2){var $3=this.getParentFolder();
var $4=this._previousParentFolder;
if($4){if(this._wasLastVisibleChild){$4._updateIndent();
}else if(!$4.hasContent()){$4.addToTreeQueue();
}}
if($3&&$3.isDisplayable()&&$3._initialLayoutDone){$3.addToTreeQueue();
}
if(this.isLastVisibleChild()){var $5=this.getPreviousVisibleSibling();
if($5&&$5 instanceof qx.ui.tree.AbstractTreeElement){$5._updateIndent();
}}
if($0){this._updateIndent();
}}},
_onmousedown:function($0){if($0._treeProcessed){return;
}this.getTree().getManager().handleMouseDown(this,
$0);
$0._treeProcessed=true;
},
_onmouseup:function($0){if($0._treeProcessed){return;
}var $1=$0.getOriginalTarget();
switch($1){case this._indentObject:case this._containerObject:case this:break;
default:this.getTree().getManager().handleMouseUp(this,
$0);
$0._treeProcessed=true;
}},
flushTree:function(){this._previousParentFolder=this.getParentFolder();
this._wasLastVisibleChild=this.isLastVisibleChild();
var $0=this.getLevel();
var $1=this.getTree();
if(!$1){return;
}var $2;
var $3=[];
var $4=this;
var $5=0;
var $6=$0;
if($1.getRootOpenClose()){$6=$0+1;
}if($1.getHideNode()){$5=1;
}
for(var $7=$5;$7<$6;$7++){$2=$4.getIndentSymbol($1.getUseTreeLines(),
$7,
$5,
$6);
if($2){$3.push("<img style=\"position:absolute;top:0px;left:");
$3.push(($6-$7-1)*19);
$3.push("px\" src=\"");
$3.push(this.BASE_URI);
$3.push($2);
$3.push(".");
$3.push("gif");
$3.push("\" />");
}$4=$4.getParentFolder();
}this._indentObject.setHtml($3.join(""));
this._indentObject.setWidth(($6-$5)*19);
}},
destruct:function(){this._disposeObjects("_indentObject",
"_iconObject",
"_labelObject");
this._disposeFields("_previousParentFolder");
}});




/* ID: qx.ui.tree.TreeRowStructure */
qx.Class.define("qx.ui.tree.TreeRowStructure",
{type:"singleton",
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
members:{newRow:function(){this._indentObject=new qx.ui.embed.HtmlEmbed;
this._iconObject=new qx.ui.basic.Image;
this._labelObject=new qx.ui.basic.Label;
this._fields=new Array;
this._icons=new Object;
this._fields.push(this._indentObject);
this._indentAdded=false;
this._iconAdded=false;
this._labelAdded=false;
return this;
},
standard:function($0,
$1,
$2){this.newRow();
this.addIcon($1,
$2);
this.addLabel($0);
return this;
},
addIndent:function(){if(!this._indentAdded){this._fields.shift();
this._indentAdded=true;
}else{throw new Error("Indent object added more than once.");
}this._fields.push(this._indentObject);
},
addIcon:function($0,
$1){if(!this._iconAdded){this._iconAdded=true;
}else{throw new Error("Icon object added more than once.");
}if($0!==undefined){this._icons.unselected=$0;
}
if($1!==undefined){this._icons.selected=$1;
}this._fields.push(this._iconObject);
},
addLabel:function($0){if(!this._labelAdded){this._labelAdded=true;
}else{throw new Error("Label added more than once.");
}this._label=$0;
this._fields.push(this._labelObject);
},
addObject:function($0,
$1){if(typeof $1=="boolean"){$0.setAnonymous($1);
}this._fields.push($0);
},
getLabelObject:function(){return this._labelObject;
},
getIconObject:function(){return this._iconObject;
}},
destruct:function(){this._disposeFields("_icons");
this._disposeObjects('_indentObject',
'_iconObject',
'_labelObject');
this._disposeObjectDeep("_fields",
1);
}});




/* ID: qx.ui.tree.TreeFolder */
qx.Class.define("qx.ui.tree.TreeFolder",
{extend:qx.ui.tree.AbstractTreeElement,
construct:function($0,
$1,
$2){var $3=this._getRowStructure($0,
$1,
$2);
arguments.callee.base.call(this,
$3);
this._treeRowStructureFields=$3._fields;
this._iconObject.setAppearance("tree-folder-icon");
this._labelObject.setAppearance("tree-folder-label");
this.addEventListener("dblclick",
this._ondblclick);
this.add=this.addToFolder;
this.addBefore=this.addBeforeToFolder;
this.addAfter=this.addAfterToFolder;
this.addAt=this.addAtToFolder;
this.addAtBegin=this.addAtBeginToFolder;
this.addAtEnd=this.addAtEndToFolder;
},
events:{"treeOpenWithContent":"qx.event.type.DataEvent",
"treeOpenWhileEmpty":"qx.event.type.DataEvent",
"treeClose":"qx.event.type.DataEvent"},
properties:{appearance:{refine:true,
init:"tree-folder"},
icon:{refine:true,
init:"icon/16/places/folder.png"},
iconSelected:{refine:true,
init:"icon/16/status/folder-open.png"},
open:{check:"Boolean",
init:false,
apply:"_applyOpen",
event:"changeOpen"},
alwaysShowPlusMinusSymbol:{check:"Boolean",
init:false,
apply:"_applyAlwaysShowPlusMinusSymbol"}},
members:{hasContent:function(){return this._containerObject&&this._containerObject.getChildrenLength()>0;
},
open:function(){if(this.getOpen()){return;
}
if(this.hasContent()){if(this.getTree().hasEventListeners("treeOpenWithContent")){this.getTree().dispatchEvent(new qx.event.type.DataEvent("treeOpenWithContent",
this),
true);
}this.getTopLevelWidget().setGlobalCursor("progress");
qx.client.Timer.once(this._openCallback,
this,
0);
}else{if(this.getTree().hasEventListeners("treeOpenWhileEmpty")){this.getTree().dispatchEvent(new qx.event.type.DataEvent("treeOpenWhileEmpty",
this),
true);
}this.setOpen(true);
}},
close:function(){if(this.getTree().hasEventListeners("treeClose")){this.getTree().dispatchEvent(new qx.event.type.DataEvent("treeClose",
this),
true);
}if(this.getOpen()){if(qx.lang.Array.contains(this.getItems(true,
true),
this.getTree().getSelectedElement())){this.getTree().getManager().setSelectedItem(this);
}}this.setOpen(false);
},
toggle:function(){this.getOpen()?this.close():this.open();
},
_openCallback:function(){this.setOpen(true);
qx.ui.core.Widget.flushGlobalQueues();
this.getTopLevelWidget().setGlobalCursor(null);
},
_createChildrenStructure:function(){if(!(this instanceof qx.ui.tree.Tree)){this.setHeight("auto");
}this.setVerticalChildrenAlign("top");
if(!this._horizontalLayout){this.setOrientation("vertical");
this._horizontalLayout=new qx.ui.layout.HorizontalBoxLayout;
this._horizontalLayout.setWidth(null);
this._horizontalLayout.setParent(this);
this._horizontalLayout.setAnonymous(true);
this._horizontalLayout.setAppearance(this instanceof qx.ui.tree.Tree?"tree":"tree-folder");
this.setAppearance("widget");
for(var $0=0;$0<this._treeRowStructureFields.length;$0++){this._treeRowStructureFields[$0].setParent(this._horizontalLayout);
}this._treeRowStructureFields=null;
}
if(!this._containerObject){this._containerObject=new qx.ui.layout.VerticalBoxLayout;
this._containerObject.setWidth(null);
this._containerObject.setHeight("auto");
this._containerObject.setAnonymous(true);
this._containerObject.setDisplay(this.getOpen());
this._containerObject.setParent(this);
}},
_handleChildMove:function($0,
$1,
$2){if($0.isDisplayable()){var $3=this._containerObject.getChildren();
var $4=$3.indexOf($0);
if($4!=-1){if($2){$1=$3.indexOf($2);
}
if($1==$3.length-1){$0._updateIndent();
this._containerObject.getLastVisibleChild()._updateIndent();
}else if($0._wasLastVisibleChild){$0._updateIndent();
var $5=$0.getPreviousVisibleSibling();
if($5){$5._updateIndent();
}}}}},
addToFolder:function($0){this._createChildrenStructure();
if(this._containerObject){return this._containerObject.add.apply(this._containerObject,
arguments);
}},
addBeforeToFolder:function($0,
$1){this._createChildrenStructure();
if(this._containerObject){this._handleChildMove($0,
null,
$1);
return this._containerObject.addBefore.apply(this._containerObject,
arguments);
}},
addAfterToFolder:function($0,
$1){this._createChildrenStructure();
if(this._containerObject){this._handleChildMove($0,
null,
$1);
return this._containerObject.addAfter.apply(this._containerObject,
arguments);
}},
addAtToFolder:function($0,
$1){this._createChildrenStructure();
if(this._containerObject){this._handleChildMove($0,
$1);
return this._containerObject.addAt.apply(this._containerObject,
arguments);
}},
addAtBeginToFolder:function($0){return this.addAtToFolder($0,
0);
},
addAtEndToFolder:function($0){this._createChildrenStructure();
if(this._containerObject){var $1=this._containerObject.getLastChild();
if($1){this._handleChildMove($0,
null,
$1);
return this._containerObject.addAfter.call(this._containerObject,
$0,
$1);
}else{return this.addAtBeginToFolder($0);
}}},
__saveSelectionBeforeRemove:function(){var $0=this.getTree();
if($0){this.__oldSelection=$0.getSelectedElement();
$0.setSelectedElement($0);
}},
__restoreSelectionAfterRemove:function(){var $0=this.getTree();
if($0){if(!this.__oldSelection||!this.__oldSelection.getTree()){$0.setSelectedElement($0);
}else{$0.setSelectedElement(this.__oldSelection);
}}},
remove:function($0){if(this._containerObject){this.__saveSelectionBeforeRemove();
this._containerObject.remove.apply(this._containerObject,
arguments);
this.__restoreSelectionAfterRemove();
}},
removeAt:function($0){if(this._containerObject){this.__saveSelectionBeforeRemove();
this._containerObject.removeAt($0);
this.__restoreSelectionAfterRemove();
}},
removeAll:function(){if(this._containerObject){this.__saveSelectionBeforeRemove();
this._containerObject.removeAll();
this.__restoreSelectionAfterRemove();
}},
getContainerObject:function(){return this._containerObject;
},
getHorizontalLayout:function(){return this._horizontalLayout;
},
getFirstVisibleChildOfFolder:function(){if(this._containerObject){return this._containerObject.getFirstChild();
}},
getLastVisibleChildOfFolder:function(){if(this._containerObject){return this._containerObject.getLastChild();
}},
getItems:function($0,
$1){var $2=[this];
if(this._containerObject){var $3=$1==true?this._containerObject.getChildren():this._containerObject.getVisibleChildren();
if($0==false){$2=$2.concat($3);
}else{for(var $4=0,
$5=$3.length;$4<$5;$4++){$2=$2.concat($3[$4].getItems($0,
$1));
}}}return $2;
},
destroyContent:function(){if(!this.hasContent()){return;
}var $0=this.getTree()?this.getTree().getManager():null;
var $1;
var $2;
if($0){$1=$0.getLeadItem();
$2=$0.getAnchorItem();
}this._containerObject.setDisplay(true);
var $3=this._containerObject.getChildren();
var $4;
for(var $5=$3.length-1;$5>=0;--$5){$4=$3[$5];
if($4!=this){if($0){if($1==$4){$0.setLeadItem(null);
}if($2==$4){$0.setAnchorItem(null);
}if($0.getItemSelected($4)){if($0.getMultiSelection()){$0.setItemSelected($4,
false);
}else{$0.deselectAll();
}}if($4.destroyContent){$4.destroyContent();
}}$4.removeFromTreeQueue();
$4.disconnect();
this._containerObject.remove($4);
qx.client.Timer.once(function(){$4.dispose();
delete $3[$5];
},
this,
0);
}}},
_applyOpen:function($0,
$1){var $2=this.getTree();
if($2&&$2.getExcludeSpecificTreeLines().length>0){this._updateIndent();
}else{this._updateLastColumn();
}
if(this._containerObject){this._containerObject.setDisplay($0);
}},
_applyAlwaysShowPlusMinusSymbol:function($0,
$1){var $2=this.getTree();
if($2){if($2.getExcludeSpecificTreeLines().length>0){this._updateIndent();
}else{this._updateLastColumn();
}}},
_updateLastColumn:function(){if(this._indentObject){var $0=this._indentObject.getElement();
if($0&&$0.firstChild){$0.firstChild.src=this.BASE_URI+this.getIndentSymbol(this.getTree().getUseTreeLines(),
0,
0,
0)+".gif";
}}},
_onmousedown:function($0){if($0._treeProcessed){return;
}var $1=$0.getOriginalTarget();
switch($1){case this._indentObject:if(this._indentObject.getElement().firstChild==$0.getDomTarget()){this.toggle();
}break;
case this._containerObject:break;
case this:if(this._containerObject){break;
}default:this.getTree().getManager().handleMouseDown(this,
$0);
}$0._treeProcessed=true;
},
_onmouseup:function($0){if($0._treeProcessed){return;
}var $1=$0.getOriginalTarget();
switch($1){case this._indentObject:case this._containerObject:case this:break;
default:if(!this.getTree().getUseDoubleClick()){this.open();
this.getTree().getManager().handleMouseUp(this,
$0);
$0._treeProcessed=true;
}}},
_ondblclick:function($0){if(!this.getTree().getUseDoubleClick()){return;
}this.toggle();
$0.stopPropagation();
},
getIndentSymbol:function($0,
$1,
$2,
$3){var $4=this.getLevel();
var $5=this.getTree().getExcludeSpecificTreeLines();
var $6=$5[$3-$1-1];
if($1==$2){if(this.hasContent()||this.getAlwaysShowPlusMinusSymbol()){if(!$0){return this.getOpen()?"minus":"plus";
}if($4==1){var $7=this.getParentFolder();
if($7&&!$7._horizontalLayout.getVisibility()&&this.isFirstChild()){if(this.isLastChild()||$6===true){return this.getOpen()?"only_minus":"only_plus";
}else{return this.getOpen()?"start_minus":"start_plus";
}}}
if($6===true){return this.getOpen()?"only_minus":"only_plus";
}else if(this.isLastChild()){return this.getOpen()?"end_minus":"end_plus";
}else{return this.getOpen()?"cross_minus":"cross_plus";
}}else if($0&&!($6===true)){return this.isLastChild()?"end":"cross";
}}else{if($0&&!this.isLastChild()){if($6===true){return null;
}return "line";
}return null;
}},
_updateIndent:function(){qx.ui.tree.TreeFile.prototype._updateIndent.call(this);
if(!this._containerObject){return;
}var $0=this._containerObject.getVisibleChildren();
for(var $1=0,
$2=$0.length;$1<$2;$1++){$0[$1]._updateIndent();
}}},
destruct:function(){this._disposeFields('_treeRowStructureFields');
this._disposeObjects("_horizontalLayout",
"_containerObject");
}});




/* ID: qx.ui.tree.Tree */
qx.Class.define("qx.ui.tree.Tree",
{extend:qx.ui.tree.TreeFolder,
construct:function($0,
$1,
$2){arguments.callee.base.call(this,
this._getRowStructure($0,
$1,
$2));
this._manager=new qx.ui.tree.SelectionManager(this);
this._iconObject.setAppearance("tree-icon");
this._labelObject.setAppearance("tree-label");
this.setOpen(true);
this.addToFolder();
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keypress",
this._onkeypress);
this.addEventListener("keyup",
this._onkeyup);
},
statics:{isTreeFolder:function($0){return ($0&&$0 instanceof qx.ui.tree.TreeFolder&&!($0 instanceof qx.ui.tree.Tree));
},
isOpenTreeFolder:function($0){return ($0 instanceof qx.ui.tree.TreeFolder&&$0.getOpen()&&$0.hasContent());
}},
properties:{useDoubleClick:{check:"Boolean",
init:false},
useTreeLines:{check:"Boolean",
init:true,
apply:"_applyUseTreeLines"},
tabIndex:{refine:true,
init:1},
excludeSpecificTreeLines:{check:"Array",
init:[],
apply:"_applyExcludeSpecificTreeLines"},
hideNode:{check:"Boolean",
init:false,
apply:"_applyHideNode"},
rootOpenClose:{check:"Boolean",
init:false,
apply:"_applyRootOpenClose"}},
members:{useDoubleClick:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use getUseDoubleClick instead");
return this.getUseDoubleClick();
},
useTreeLines:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use getUseTreeLines instead");
return this.getUseTreeLines();
},
hideNode:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use getHideNode instead");
return this.getHideNode();
},
getManager:function(){return this._manager;
},
getSelectedElement:function(){return this.getManager().getSelectedItems()[0];
},
getItems:function($0,
$1){var $2=[];
if(!this.getHideNode()){$2.push(this);
}
if(this._containerObject){var $3=$1==true?this._containerObject.getChildren():this._containerObject.getVisibleChildren();
if($0==false){$2=$2.concat($3);
}else{for(var $4=0,
$5=$3.length;$4<$5;$4++){$2=$2.concat($3[$4].getItems($0,
$1));
}}}return $2;
},
addChildToTreeQueue:function($0){if(!$0._isInTreeQueue&&!$0._isDisplayable){this.debug("Ignoring invisible child: "+$0);
}
if(!$0._isInTreeQueue&&$0._isDisplayable){qx.ui.core.Widget.addToGlobalWidgetQueue(this);
if(!this._treeQueue){this._treeQueue={};
}this._treeQueue[$0.toHashCode()]=$0;
$0._isInTreeQueue=true;
}},
removeChildFromTreeQueue:function($0){if($0._isInTreeQueue){if(this._treeQueue){delete this._treeQueue[$0.toHashCode()];
}delete $0._isInTreeQueue;
}},
flushWidgetQueue:function(){this.flushTreeQueue();
},
flushTreeQueue:function(){if(!qx.lang.Object.isEmpty(this._treeQueue)){for(var $0 in this._treeQueue){this._treeQueue[$0].flushTree();
delete this._treeQueue[$0]._isInTreeQueue;
}delete this._treeQueue;
}},
_applyUseTreeLines:function($0,
$1){if(this._initialLayoutDone){this._updateIndent();
}},
_applyHideNode:function($0,
$1){if(!$0){this._horizontalLayout.setHeight(this._horizontalLayout.originalHeight);
this._horizontalLayout.show();
}else{this._horizontalLayout.originalHeight=this._horizontalLayout.getHeight();
this._horizontalLayout.setHeight(0);
this._horizontalLayout.hide();
}
if(this._initialLayoutDone){this._updateIndent();
}},
_applyRootOpenClose:function($0,
$1){if(this._initialLayoutDone){this._updateIndent();
}},
getExcludeSpecificTreeLines:function(){return qx.lang.Array.clone(this["__user$excludeSpecificTreeLines"]);
},
_applyExcludeSpecificTreeLines:function($0,
$1){if(this._initialLayoutDone){this._updateIndent();
}},
getTree:function(){return this;
},
getParentFolder:function(){return null;
},
getLevel:function(){return 0;
},
_onkeydown:function($0){var $1=this.getManager();
$1.getSelectedItem();
},
_onkeypress:function($0){var $1=this.getManager();
var $2=$1.getSelectedItem();
switch($0.getKeyIdentifier()){case "Enter":$0.preventDefault();
if(qx.ui.tree.Tree.isTreeFolder($2)){return $2.toggle();
}break;
case "Left":$0.preventDefault();
if(qx.ui.tree.Tree.isTreeFolder($2)){if(!$2.getOpen()){var $3=$2.getParentFolder();
if($3 instanceof qx.ui.tree.TreeFolder){if($3 instanceof qx.ui.tree.Tree&&$3.getHideNode()){return;
}
if(!($3 instanceof qx.ui.tree.Tree)){$3.close();
}this.setSelectedElement($3);
}}else{return $2.close();
}}else if($2 instanceof qx.ui.tree.TreeFile){var $3=$2.getParentFolder();
if($3 instanceof qx.ui.tree.TreeFolder){if(!($3 instanceof qx.ui.tree.Tree)){$3.close();
}this.setSelectedElement($3);
}}break;
case "Right":$0.preventDefault();
if(qx.ui.tree.Tree.isTreeFolder($2)){if(!$2.getOpen()){return $2.open();
}else if($2.hasContent()){var $4=$2.getFirstVisibleChildOfFolder();
this.setSelectedElement($4);
if($4 instanceof qx.ui.tree.TreeFolder){$4.open();
}return;
}}break;
default:if(!this._fastUpdate){this._fastUpdate=true;
this._oldItem=$2;
}$1.handleKeyPress($0);
}},
_onkeyup:function($0){if(this._fastUpdate){var $1=this.getManager().getSelectedItem();
if(!$1){return;
}$1.getIconObject().addState("selected");
delete this._fastUpdate;
delete this._oldItem;
}},
getLastTreeChild:function(){var $0=this;
while($0 instanceof qx.ui.tree.AbstractTreeElement){if(!($0 instanceof qx.ui.tree.TreeFolder)||!$0.getOpen()){return $0;
}$0=$0.getLastVisibleChildOfFolder();
}return null;
},
getFirstTreeChild:function(){return this;
},
setSelectedElement:function($0){var $1=this.getManager();
$1.setSelectedItem($0);
$1.setLeadItem($0);
},
getHierarchy:function($0){if(!this.getHideNode()&&this._labelObject){$0.unshift(this._labelObject.getText());
}return $0;
},
getIndentSymbol:function($0,
$1,
$2){if($1==$2&&(this.hasContent()||this.getAlwaysShowPlusMinusSymbol())){if(!$0){return this.getOpen()?"minus":"plus";
}else{return this.getOpen()?"only_minus":"only_plus";
}}else{return null;
}}},
destruct:function(){this._disposeObjects("_manager");
}});




/* ID: qx.ui.selection.SelectionManager */
qx.Class.define("qx.ui.selection.SelectionManager",
{extend:qx.core.Target,
construct:function($0){arguments.callee.base.call(this);
this._selectedItems=new qx.ui.selection.Selection(this);
if($0!=null){this.setBoundedWidget($0);
}},
events:{"changeSelection":"qx.event.type.DataEvent"},
properties:{boundedWidget:{check:"qx.ui.core.Widget",
nullable:true},
multiSelection:{check:"Boolean",
init:true},
dragSelection:{check:"Boolean",
init:true},
canDeselect:{check:"Boolean",
init:true},
fireChange:{check:"Boolean",
init:true},
anchorItem:{check:"Object",
nullable:true,
apply:"_applyAnchorItem",
event:"changeAnchorItem"},
leadItem:{check:"Object",
nullable:true,
apply:"_applyLeadItem",
event:"changeLeadItem"},
multiColumnSupport:{check:"Boolean",
init:false}},
members:{_applyAnchorItem:function($0,
$1){if($1){this.renderItemAnchorState($1,
false);
}
if($0){this.renderItemAnchorState($0,
true);
}},
_applyLeadItem:function($0,
$1){if($1){this.renderItemLeadState($1,
false);
}
if($0){this.renderItemLeadState($0,
true);
}},
_getFirst:function(){return this.getBoundedWidget().getFirstVisibleChild();
},
_getLast:function(){return this.getBoundedWidget().getLastVisibleChild();
},
getFirst:function(){var $0=this._getFirst();
if($0){return $0.getEnabled()?$0:this.getNext($0);
}},
getLast:function(){var $0=this._getLast();
if($0){return $0.getEnabled()?$0:this.getPrevious($0);
}},
getItems:function(){return this.getBoundedWidget().getChildren();
},
getNextSibling:function($0){return $0.getNextSibling();
},
getPreviousSibling:function($0){return $0.getPreviousSibling();
},
getNext:function($0){while($0){$0=this.getNextSibling($0);
if(!$0){break;
}
if(this.getItemEnabled($0)){return $0;
}}return null;
},
getPrevious:function($0){while($0){$0=this.getPreviousSibling($0);
if(!$0){break;
}
if(this.getItemEnabled($0)){return $0;
}}return null;
},
isBefore:function($0,
$1){var $2=this.getItems();
return $2.indexOf($0)<$2.indexOf($1);
},
isEqual:function($0,
$1){return $0==$1;
},
getItemHashCode:function($0){return $0.toHashCode();
},
scrollItemIntoView:function($0,
$1){$0.scrollIntoView($1);
},
getItemLeft:function($0){return $0.getOffsetLeft();
},
getItemTop:function($0){return $0.getOffsetTop();
},
getItemWidth:function($0){return $0.getOffsetWidth();
},
getItemHeight:function($0){return $0.getOffsetHeight();
},
getItemEnabled:function($0){return $0.getEnabled();
},
renderItemSelectionState:function($0,
$1){$1?$0.addState("selected"):$0.removeState("selected");
if($0.handleStateChange){$0.handleStateChange();
}},
renderItemAnchorState:function($0,
$1){$1?$0.addState("anchor"):$0.removeState("anchor");
if($0.handleStateChange!=null){$0.handleStateChange();
}},
renderItemLeadState:function($0,
$1){$1?$0.addState("lead"):$0.removeState("lead");
if($0.handleStateChange!=null){$0.handleStateChange();
}},
getItemSelected:function($0){return this._selectedItems.contains($0);
},
setItemSelected:function($0,
$1){switch(this.getMultiSelection()){case true:if(!this.getItemEnabled($0)){return;
}if(this.getItemSelected($0)==$1){return;
}this.renderItemSelectionState($0,
$1);
$1?this._selectedItems.add($0):this._selectedItems.remove($0);
this._dispatchChange();
break;
case false:var $2=this.getSelectedItems()[0];
if($1){var $3=$2;
if(this.isEqual($0,
$3)){return;
}if($3!=null){this.renderItemSelectionState($3,
false);
}this.renderItemSelectionState($0,
true);
this._selectedItems.removeAll();
this._selectedItems.add($0);
this._dispatchChange();
}else{if(!this.isEqual($2,
$0)){this.renderItemSelectionState($0,
false);
this._selectedItems.removeAll();
this._dispatchChange();
}}break;
}},
getSelectedItems:function(){return this._selectedItems.toArray();
},
getSelectedItem:function(){return this._selectedItems.getFirst();
},
setSelectedItems:function($0){var $1=this._getChangeValue();
var $2=this.getFireChange();
this.setFireChange(false);
this._deselectAll();
var $3;
var $4=$0.length;
for(var $5=0;$5<$4;$5++){$3=$0[$5];
if(!this.getItemEnabled($3)){continue;
}this._selectedItems.add($3);
this.renderItemSelectionState($3,
true);
}this.setFireChange($2);
if($2&&this._hasChanged($1)){this._dispatchChange();
}},
setSelectedItem:function($0){if(!$0){return;
}
if(!this.getItemEnabled($0)){return;
}var $1=this._getChangeValue();
var $2=this.getFireChange();
this.setFireChange(false);
this._deselectAll();
this._selectedItems.add($0);
this.renderItemSelectionState($0,
true);
this.setFireChange($2);
if($2&&this._hasChanged($1)){this._dispatchChange();
}},
selectAll:function(){var $0=this._getChangeValue();
var $1=this.getFireChange();
this.setFireChange(false);
this._selectAll();
this.setFireChange($1);
if($1&&this._hasChanged($0)){this._dispatchChange();
}},
_selectAll:function(){if(!this.getMultiSelection()){return;
}var $0;
var $1=this.getItems();
var $2=$1.length;
this._selectedItems.removeAll();
for(var $3=0;$3<$2;$3++){$0=$1[$3];
if(!this.getItemEnabled($0)){continue;
}this._selectedItems.add($0);
this.renderItemSelectionState($0,
true);
}return true;
},
deselectAll:function(){var $0=this._getChangeValue();
var $1=this.getFireChange();
this.setFireChange(false);
this._deselectAll();
this.setFireChange($1);
if($1&&this._hasChanged($0))this._dispatchChange();
},
_deselectAll:function(){var $0=this._selectedItems.toArray();
for(var $1=0;$1<$0.length;$1++){this.renderItemSelectionState($0[$1],
false);
}this._selectedItems.removeAll();
return true;
},
selectItemRange:function($0,
$1){var $2=this._getChangeValue();
var $3=this.getFireChange();
this.setFireChange(false);
this._selectItemRange($0,
$1,
true);
this.setFireChange($3);
if($3&&this._hasChanged($2)){this._dispatchChange();
}},
_selectItemRange:function($0,
$1,
$2){if(this.isBefore($1,
$0)){return this._selectItemRange($1,
$0,
$2);
}if($2){this._deselectAll();
}var $3=$0;
while($3!=null){if(this.getItemEnabled($3)){this._selectedItems.add($3);
this.renderItemSelectionState($3,
true);
}if(this.isEqual($3,
$1)){break;
}$3=this.getNext($3);
}return true;
},
_deselectItemRange:function($0,
$1){if(this.isBefore($1,
$0)){return this._deselectItemRange($1,
$0);
}var $2=$0;
while($2!=null){this._selectedItems.remove($2);
this.renderItemSelectionState($2,
false);
if(this.isEqual($2,
$1)){break;
}$2=this.getNext($2);
}},
_activeDragSession:false,
handleMouseDown:function($0,
$1){$1.stopPropagation();
if(!$1.isLeftButtonPressed()&&!$1.isRightButtonPressed()){return;
}if($1.isRightButtonPressed()&&this.getItemSelected($0)){return;
}if($1.isShiftPressed()||this.getDragSelection()||(!this.getItemSelected($0)&&!$1.isCtrlPressed())){this._onmouseevent($0,
$1);
}else{this.setLeadItem($0);
}this._activeDragSession=this.getDragSelection();
if(this._activeDragSession){this.getBoundedWidget().addEventListener("mouseup",
this._ondragup,
this);
this.getBoundedWidget().setCapture(true);
}},
_ondragup:function($0){this.getBoundedWidget().removeEventListener("mouseup",
this._ondragup,
this);
this.getBoundedWidget().setCapture(false);
this._activeDragSession=false;
},
handleMouseUp:function($0,
$1){if(!$1.isLeftButtonPressed()){return;
}
if($1.isCtrlPressed()||this.getItemSelected($0)&&!this._activeDragSession){this._onmouseevent($0,
$1);
}
if(this._activeDragSession){this._activeDragSession=false;
this.getBoundedWidget().setCapture(false);
}},
handleMouseOver:function($0,
$1){if(!this.getDragSelection()||!this._activeDragSession){return;
}this._onmouseevent($0,
$1,
true);
},
handleClick:function($0,
$1){},
handleDblClick:function($0,
$1){},
_onmouseevent:function($0,
$1,
$2){if(!this.getItemEnabled($0)){return;
}var $3=this._getChangeValue();
var $4=this.getLeadItem();
var $5=this.getFireChange();
this.setFireChange(false);
var $6=this.getSelectedItems();
var $7=$6.length;
this.setLeadItem($0);
var $8=this.getAnchorItem();
var $9=$1.isCtrlPressed();
var $a=$1.isShiftPressed();
if(!$8||$7==0||($9&&!$a&&this.getMultiSelection()&&!this.getDragSelection())){this.setAnchorItem($0);
$8=$0;
}if((!$9&&!$a&&!this._activeDragSession||!this.getMultiSelection())){if(!this.getItemEnabled($0)){return;
}this._deselectAll();
this.setAnchorItem($0);
if(this._activeDragSession){this.scrollItemIntoView((this.getBoundedWidget().getScrollTop()>(this.getItemTop($0)-1)?this.getPrevious($0):this.getNext($0))||$0);
}
if(!this.getItemSelected($0)){this.renderItemSelectionState($0,
true);
}this._selectedItems.add($0);
this._addToCurrentSelection=true;
}else if(this._activeDragSession&&$2){if($4){this._deselectItemRange($8,
$4);
}if(this.isBefore($8,
$0)){if(this._addToCurrentSelection){this._selectItemRange($8,
$0,
false);
}else{this._deselectItemRange($8,
$0);
}}else{if(this._addToCurrentSelection){this._selectItemRange($0,
$8,
false);
}else{this._deselectItemRange($0,
$8);
}}this.scrollItemIntoView((this.getBoundedWidget().getScrollTop()>(this.getItemTop($0)-1)?this.getPrevious($0):this.getNext($0))||$0);
}else if(this.getMultiSelection()&&$9&&!$a){if(!this._activeDragSession){this._addToCurrentSelection=!(this.getCanDeselect()&&this.getItemSelected($0));
}this.setItemSelected($0,
this._addToCurrentSelection);
this.setAnchorItem($0);
}else if(this.getMultiSelection()&&$9&&$a){if(!this._activeDragSession){this._addToCurrentSelection=!(this.getCanDeselect()&&this.getItemSelected($0));
}
if(this._addToCurrentSelection){this._selectItemRange($8,
$0,
false);
}else{this._deselectItemRange($8,
$0);
}}else if(this.getMultiSelection()&&!$9&&$a){if(this.getCanDeselect()){this._selectItemRange($8,
$0,
true);
}else{if($4){this._deselectItemRange($8,
$4);
}this._selectItemRange($8,
$0,
false);
}}this.setFireChange($5);
if($5&&this._hasChanged($3)){this._dispatchChange();
}},
handleKeyDown:function($0){this.warn("qx.ui.selection.SelectionManager.handleKeyDown is deprecated! "+"Use keypress insted and bind it to the onkeypress event.");
this.handleKeyPress($0);
},
handleKeyPress:function($0){var $1=this._getChangeValue();
var $2=this.getFireChange();
this.setFireChange(false);
if($0.getKeyIdentifier()=="A"&&$0.isCtrlPressed()){if(this.getMultiSelection()){this._selectAll();
this.setLeadItem(this.getFirst());
}}else{var $3=this.getAnchorItem();
var $4=this.getItemToSelect($0);
if($4&&this.getItemEnabled($4)){this.setLeadItem($4);
this.scrollItemIntoView($4);
$0.preventDefault();
if($0.isShiftPressed()&&this.getMultiSelection()){if($3==null){this.setAnchorItem($4);
}this._selectItemRange(this.getAnchorItem(),
$4,
true);
}else if(!$0.isCtrlPressed()){this._deselectAll();
this.renderItemSelectionState($4,
true);
this._selectedItems.add($4);
this.setAnchorItem($4);
}else if($0.getKeyIdentifier()=="Space"){if(this._selectedItems.contains($4)){this.renderItemSelectionState($4,
false);
this._selectedItems.remove($4);
this.setAnchorItem(this._selectedItems.getFirst());
}else{if(!$0.isCtrlPressed()||!this.getMultiSelection()){this._deselectAll();
}this.renderItemSelectionState($4,
true);
this._selectedItems.add($4);
this.setAnchorItem($4);
}}}}this.setFireChange($2);
if($2&&this._hasChanged($1)){this._dispatchChange();
}},
getItemToSelect:function($0){if($0.isAltPressed()){return null;
}switch($0.getKeyIdentifier()){case "Home":return this.getHome(this.getLeadItem());
case "End":return this.getEnd(this.getLeadItem());
case "Down":return this.getDown(this.getLeadItem());
case "Up":return this.getUp(this.getLeadItem());
case "Left":return this.getLeft(this.getLeadItem());
case "Right":return this.getRight(this.getLeadItem());
case "PageUp":return this.getPageUp(this.getLeadItem())||this.getHome(this.getLeadItem());
case "PageDown":return this.getPageDown(this.getLeadItem())||this.getEnd(this.getLeadItem());
case "Space":if($0.isCtrlPressed()){return this.getLeadItem();
}}return null;
},
_dispatchChange:function(){if(!this.getFireChange()){return;
}
if(this.hasEventListeners("changeSelection")){this.dispatchEvent(new qx.event.type.DataEvent("changeSelection",
this.getSelectedItems()),
true);
}},
_hasChanged:function($0){return $0!=this._getChangeValue();
},
_getChangeValue:function(){return this._selectedItems.getChangeValue();
},
getHome:function(){return this.getFirst();
},
getEnd:function(){return this.getLast();
},
getDown:function($0){if(!$0){return this.getFirst();
}return this.getMultiColumnSupport()?(this.getUnder($0)||this.getLast()):this.getNext($0);
},
getUp:function($0){if(!$0){return this.getLast();
}return this.getMultiColumnSupport()?(this.getAbove($0)||this.getFirst()):this.getPrevious($0);
},
getLeft:function($0){if(!this.getMultiColumnSupport()){return null;
}return !$0?this.getLast():this.getPrevious($0);
},
getRight:function($0){if(!this.getMultiColumnSupport()){return null;
}return !$0?this.getFirst():this.getNext($0);
},
getAbove:function($0){throw new Error("getAbove(): Not implemented yet");
},
getUnder:function($0){throw new Error("getUnder(): Not implemented yet");
},
getPageUp:function($0){var $1=this.getBoundedWidget();
var $2=$1.getScrollTop();
var $3=$1.getClientHeight();
var $4=this.getLeadItem();
if(!$4){$4=this.getFirst();
}var $5=0;
while($5<2){while($4&&(this.getItemTop($4)-this.getItemHeight($4)>=$2)){$4=this.getUp($4);
}if($4==null){break;
}if($4!=this.getLeadItem()){this.scrollItemIntoView($4,
true);
break;
}$1.setScrollTop($2-$3-this.getItemHeight($4));
$2=$1.getScrollTop();
$5++;
}return $4;
},
getPageDown:function($0){var $1=this.getBoundedWidget();
var $2=$1.getScrollTop();
var $3=$1.getClientHeight();
var $4=this.getLeadItem();
if(!$4){$4=this.getFirst();
}var $5=0;
while($5<2){while($4&&((this.getItemTop($4)+(2*this.getItemHeight($4)))<=($2+$3))){$4=this.getDown($4);
}if($4==null){break;
}if($4!=this.getLeadItem()){break;
}$1.setScrollTop($2+$3-2*this.getItemHeight($4));
$2=$1.getScrollTop();
$5++;
}return $4;
}},
destruct:function(){this._disposeObjects("_selectedItems");
}});




/* ID: qx.ui.selection.Selection */
qx.Class.define("qx.ui.selection.Selection",
{extend:qx.core.Object,
construct:function($0){arguments.callee.base.call(this);
this.__manager=$0;
this.removeAll();
},
members:{add:function($0){this.__storage[this.getItemHashCode($0)]=$0;
},
remove:function($0){delete this.__storage[this.getItemHashCode($0)];
},
removeAll:function(){this.__storage={};
},
contains:function($0){return this.getItemHashCode($0) in this.__storage;
},
toArray:function(){var $0=[];
for(var $1 in this.__storage){$0.push(this.__storage[$1]);
}return $0;
},
getFirst:function(){for(var $0 in this.__storage){return this.__storage[$0];
}return null;
},
getChangeValue:function(){var $0=[];
for(var $1 in this.__storage){$0.push($1);
}$0.sort();
return $0.join(";");
},
getItemHashCode:function($0){return this.__manager.getItemHashCode($0);
},
isEmpty:function(){return qx.lang.Object.isEmpty(this.__storage);
}},
destruct:function(){this._disposeFields("__storage",
"__manager");
}});




/* ID: qx.ui.tree.SelectionManager */
qx.Class.define("qx.ui.tree.SelectionManager",
{extend:qx.ui.selection.SelectionManager,
construct:function($0){arguments.callee.base.call(this,
$0);
},
properties:{multiSelection:{refine:true,
init:false},
dragSelection:{refine:true,
init:false}},
members:{_getFirst:function(){return qx.lang.Array.getFirst(this.getItems());
},
_getLast:function(){return qx.lang.Array.getLast(this.getItems());
},
getItems:function(){return this.getBoundedWidget().getItems();
},
getNext:function($0){if($0){if(qx.ui.tree.Tree.isOpenTreeFolder($0)){return $0.getFirstVisibleChildOfFolder();
}else if($0.isLastVisibleChild()){var $1=$0;
while($1&&$1.isLastVisibleChild()){$1=$1.getParentFolder();
}
if($1&&$1 instanceof qx.ui.tree.AbstractTreeElement&&$1.getNextVisibleSibling()&&$1.getNextVisibleSibling() instanceof qx.ui.tree.AbstractTreeElement){return $1.getNextVisibleSibling();
}}else{return $0.getNextVisibleSibling();
}}else{return this.getBoundedWidget().getFirstTreeChild();
}},
getPrevious:function($0){if($0){if($0==this.getBoundedWidget()){return;
}else if($0.isFirstVisibleChild()){if($0.getParentFolder() instanceof qx.ui.tree.TreeFolder){if($0.getParentFolder() instanceof qx.ui.tree.Tree&&$0.getParentFolder().getHideNode()){return $0;
}return $0.getParentFolder();
}}else{var $1=$0.getPreviousVisibleSibling();
while($1 instanceof qx.ui.tree.AbstractTreeElement){if(qx.ui.tree.Tree.isOpenTreeFolder($1)){$1=$1.getLastVisibleChildOfFolder();
}else{break;
}}return $1;
}}else{return this.getBoundedWidget().getLastTreeChild();
}},
getItemTop:function($0){var $1=this.getBoundedWidget();
var $2=$0.getElement();
var $3=0;
while($2&&$2.qx_Widget!=$1){$3+=$2.offsetTop;
$2=$2.parentNode;
}return $3;
},
getItemHeight:function($0){if($0 instanceof qx.ui.tree.TreeFolder&&$0._horizontalLayout){return $0._horizontalLayout.getOffsetHeight();
}else{return $0.getOffsetHeight();
}},
scrollItemIntoView:function($0){if($0 instanceof qx.ui.tree.TreeFolder&&$0._horizontalLayout){return $0._horizontalLayout.scrollIntoView();
}else{return $0.scrollIntoView();
}},
renderItemSelectionState:function($0,
$1){if($1&&!$0.isSeeable()){var $2=$0;
var $3=[];
while($2){$2=$2.getParentFolder();
$3.push($2);
}$3.pop();
while($3.length){$3.pop().open();
}}
if($1){if($0.isCreated()){this.scrollItemIntoView($0);
}else{$0.addEventListener("appear",
function($4){this.scrollItemIntoView($0);
},
this);
}}$0.setSelected($1);
}}});




/* ID: qx.ui.tree.TreeFile */
qx.Class.define("qx.ui.tree.TreeFile",
{extend:qx.ui.tree.AbstractTreeElement,
construct:function($0,
$1,
$2){arguments.callee.base.call(this,
this._getRowStructure($0,
$1,
$2));
},
members:{getIndentSymbol:function($0,
$1,
$2,
$3){var $4=this.getTree().getExcludeSpecificTreeLines();
var $5=$4[$3-$1-1];
if($0&&!($5===true)){if($1==$2){return this.isLastChild()?"end":"cross";
}else{return "line";
}}return null;
},
_updateIndent:function(){this.addToTreeQueue();
},
getItems:function(){return [this];
}}});




/* ID: spagobi.ui.Tree */
qx.Class.define("spagobi.ui.Tree",
{extend:qx.ui.tree.Tree,
construct:function($0){var $1=qx.ui.tree.TreeRowStructure.getInstance().standard($0.root);
arguments.callee.base.call(this,
$1);
},
members:{_nodeId:0,
nameText:undefined,
atom:undefined,
insertWin:undefined,
onClickMenu:function($0){if(this.getSelectedElement()==undefined||this.getManager().getSelectedItem()==undefined){return ;
}var $1=new qx.client.Command();
$1.addEventListener("execute",
this._insertCmd,
this);
var $2=new qx.client.Command();
$2.addEventListener("execute",
this.deleteNode,
this);
var $3=new qx.client.Command();
$3.addEventListener("execute",
this.moveUpNode,
this);
var $4=new qx.client.Command();
$4.addEventListener("execute",
this.moveDownNode,
this);
var $5=new qx.ui.menu.Menu;
var $6=new qx.ui.menu.Button("Insert",
null,
$1);
var $7=new qx.ui.menu.Button("Delete",
null,
$2);
var $8=new qx.ui.menu.Button("Move Up",
null,
$3);
var $9=new qx.ui.menu.Button("Move Down",
null,
$4);
if(this.getManager().getSelectedItem()==this){$5.add($6,
$7);
}else{var $a=this.getManager();
var $b=$a.getSelectedItem();
if($b instanceof qx.ui.tree.TreeFile){if($a.getPreviousSibling($b)==undefined){$5.add($7,
$9);
}else if($a.getNextSibling($b)==undefined){$5.add($7,
$8);
}else{$5.add($7,
$8,
$9);
}}else{if($a.getPreviousSibling($b)==undefined){$5.add($6,
$7,
$9);
}else if($a.getNextSibling($b)==undefined){$5.add($6,
$7,
$8);
}else{$5.add($6,
$7,
$8,
$9);
}}}$5.addToDocument();
$5.show();
if($5.isSeeable()){$5.hide();
this.setSelectedElement(null);
}else{var $c=this.getSelectedElement().getElement();
$5.setLeft(qx.html.Location.getPageBoxLeft($c));
$5.setTop(qx.html.Location.getPageBoxBottom($c));
$5.setDisplay(true);
$5.show();
}this.getSelectedElement().setSelected(false);
this.setSelectedElement(null);
},
_insertCmd:function($0){this.insertWin=new qx.ui.window.Window("Insert");
this.insertWin.setSpace(200,
400,
200,
250);
var $1=qx.ui.core.ClientDocument.getInstance();
$1.add(this.insertWin);
var $2=new qx.ui.basic.Label("Name:");
$2.setLocation(50,
50);
this.nameText=new qx.ui.form.TextField();
this.nameText.setLocation(100,
50);
this.atom=new qx.ui.basic.Atom();
this.atom.add(this.nameText);
this.atom.setUserData('newNodeName',
this.nameText);
var $3=new qx.ui.form.Button("Insert");
$3.setLocation(150,
150);
$3.addEventListener("execute",
this._insertDetails,
this);
this.insertWin.add($2,
this.nameText,
$3);
this.insertWin.open();
},
_insertDetails:function($0){var $1=$0.getTarget();
var $2={};
$2.name=this.atom.getUserData('newNodeName').getValue();
$2.parent=this.getSelectedElement();
$2.id="node"+this._nodeId;
this._nodeId++;
var $3=this.addNode($2);
this.insertWin.close();
},
addNode:function($0){var $1;
var $2;
if($0.checkBox!=undefined){$1=qx.ui.tree.TreeRowStructure.getInstance().newRow();
$1.addIndent();
if($0.init_icon!=undefined&&$0.click_icon!=undefined){$1.addIcon($0.init_icon,
$0.click_icon);
}if($0.checkBox==true){var $3=new qx.ui.form.CheckBox();
$1.addObject($3,
true);
}$1.addLabel($0.name);
}else{$1=qx.ui.tree.TreeRowStructure.getInstance().standard($0.name);
}
if($0.file!=undefined){if($0.file==true){$2=new qx.ui.tree.TreeFile($1);
}else{$2=new qx.ui.tree.TreeFolder($1);
}}else{$2=new qx.ui.tree.TreeFolder($1);
}if($0.parent==this){$0.parent.add($2);
}else{var $4=$0.parent.getUserData('node');
$4.add($2);
}var $5=new qx.ui.basic.Atom();
$5.setUserData('node',
$2);
$5.setUserData('data',
$0.data);
this.setUserData($0.name,
$5);
return $5;
},
deleteNode:function($0){var $1=this.getManager().getSelectedItem();
if($1==this){alert("Root node cannot be deleted");
}else if($1!=null){$1.destroy();
$1=null;
}},
deleteNodeById:function($0){var $1=this.getUseData($0);
if($1!=null){$1.destroy();
$1=null;
}},
deleteTreeNode:function(){var $0=this.getSelectedElement();
var $1=$0.getParentFolder();
$1.remove($0);
$1.setSelected(true);
},
getCurrentNode:function(){return this.getSelectedElement();
},
moveUpNode:function(){var $0=this.getManager();
var $1=$0.getSelectedItem();
var $2=$0.getPreviousSibling($1);
var $3=$1.getParentFolder();
$3.addBeforeToFolder($1,
$2);
$1.setSelected(true);
},
moveDownNode:function(){var $0=this.getManager();
var $1=$0.getSelectedItem();
var $2=$0.getNextSibling($1);
var $3=$1.getParentFolder();
$3.addAfterToFolder($1,
$2);
$1.setSelected(true);
},
getNodeData:function(){var $0={};
var $1=this.getCurrentNode();
var $2=$1.getLabel();
var $3=this.getUserData($2);
if($3.getUserData('data')!=undefined)$0.data=$3.getUserData('data');
$0.tree=this;
return $0;
}}});




/* ID: qx.ui.resizer.MResizable */
qx.Mixin.define("qx.ui.resizer.MResizable",
{construct:function($0){this._frame=new qx.ui.basic.Terminator;
this._frame.setAppearance("resizer-frame");
this.addEventListener("mousedown",
this._onmousedown);
this.addEventListener("mouseup",
this._onmouseup);
this.addEventListener("mousemove",
this._onmousemove);
},
properties:{resizableWest:{check:"Boolean",
init:true,
apply:"_applyResizable"},
resizableNorth:{check:"Boolean",
init:true,
apply:"_applyResizable"},
resizableEast:{check:"Boolean",
init:true,
apply:"_applyResizable"},
resizableSouth:{check:"Boolean",
init:true,
apply:"_applyResizable"},
resizable:{group:["resizableNorth",
"resizableEast",
"resizableSouth",
"resizableWest"],
mode:"shorthand"},
resizeMethod:{init:"frame",
check:["opaque",
"lazyopaque",
"frame",
"translucent"],
event:"changeResizeMethod"}},
members:{isResizable:function(){return this.getResizableWest()||this.getResizableEast()||this.getResizableNorth()||this.getResizableSouth();
},
getResizable:function(){return this.isResizable();
},
_applyResizable:function($0,
$1){},
_onmousedown:function($0){if(this._resizeNorth||this._resizeSouth||this._resizeWest||this._resizeEast){this.setCapture(true);
this.getTopLevelWidget().setGlobalCursor(this.getCursor());
var $1=this.getElement();
var $2=this._getResizeParent();
var $3=$2.getElement();
var $4=qx.bom.element.Location.get($3,
"scroll");
var $5=qx.bom.element.Location.get($1);
switch(this.getResizeMethod()){case "translucent":this.setOpacity(0.5);
break;
case "frame":var $6=this._frame;
if($6.getParent()!=$2){$6.setParent($2);
qx.ui.core.Widget.flushGlobalQueues();
}$6._renderRuntimeLeft($5.left-$4.left);
$6._renderRuntimeTop($5.top-$4.top);
$6._renderRuntimeWidth($1.offsetWidth);
$6._renderRuntimeHeight($1.offsetHeight);
$6.setZIndex(this.getZIndex()+1);
break;
}var $7=this._resizeSession={};
var $8=this._getMinSizeReference();
if(this._resizeWest){$7.boxWidth=$1.offsetWidth;
$7.boxRight=$5.right;
}
if(this._resizeWest||this._resizeEast){$7.boxLeft=$5.left;
$7.parentContentLeft=$4.left;
$7.parentContentRight=$4.right;
$7.minWidth=$8.getMinWidthValue();
$7.maxWidth=$8.getMaxWidthValue();
}
if(this._resizeNorth){$7.boxHeight=$1.offsetHeight;
$7.boxBottom=$5.bottom;
}
if(this._resizeNorth||this._resizeSouth){$7.boxTop=$5.top;
$7.parentContentTop=$4.top;
$7.parentContentBottom=$4.bottom;
$7.minHeight=$8.getMinHeightValue();
$7.maxHeight=$8.getMaxHeightValue();
}}else{delete this._resizeSession;
}$0.stopPropagation();
},
_onmouseup:function($0){var $1=this._resizeSession;
if($1){this.setCapture(false);
this.getTopLevelWidget().setGlobalCursor(null);
switch(this.getResizeMethod()){case "frame":var $2=this._frame;
if(!($2&&$2.getParent())){break;
}case "lazyopaque":if($1.lastLeft!=null){this.setLeft($1.lastLeft);
}
if($1.lastTop!=null){this.setTop($1.lastTop);
}
if($1.lastWidth!=null){this._changeWidth($1.lastWidth);
}
if($1.lastHeight!=null){this._changeHeight($1.lastHeight);
}
if(this.getResizeMethod()=="frame"){this._frame.setParent(null);
}break;
case "translucent":this.setOpacity(null);
break;
}delete this._resizeSession;
}$0.stopPropagation();
},
_near:function($0,
$1){return $1>($0-5)&&$1<($0+5);
},
_onmousemove:function($0){if(this._disableResize){return;
}var $1=this._resizeSession;
if($1){if(this._resizeWest){$1.lastWidth=qx.lang.Number.limit($1.boxWidth+$1.boxLeft-Math.max($0.getPageX(),
$1.parentContentLeft),
$1.minWidth,
$1.maxWidth);
$1.lastLeft=$1.boxRight-$1.lastWidth-$1.parentContentLeft;
}else if(this._resizeEast){$1.lastWidth=qx.lang.Number.limit(Math.min($0.getPageX(),
$1.parentContentRight)-$1.boxLeft,
$1.minWidth,
$1.maxWidth);
}
if(this._resizeNorth){$1.lastHeight=qx.lang.Number.limit($1.boxHeight+$1.boxTop-Math.max($0.getPageY(),
$1.parentContentTop),
$1.minHeight,
$1.maxHeight);
$1.lastTop=$1.boxBottom-$1.lastHeight-$1.parentContentTop;
}else if(this._resizeSouth){$1.lastHeight=qx.lang.Number.limit(Math.min($0.getPageY(),
$1.parentContentBottom)-$1.boxTop,
$1.minHeight,
$1.maxHeight);
}
switch(this.getResizeMethod()){case "opaque":case "translucent":if(this._resizeWest||this._resizeEast){this.setWidth($1.lastWidth);
if(this._resizeWest){this.setLeft($1.lastLeft);
}}
if(this._resizeNorth||this._resizeSouth){this.setHeight($1.lastHeight);
if(this._resizeNorth){this.setTop($1.lastTop);
}}break;
default:var $2=this.getResizeMethod()=="frame"?this._frame:this;
if(this._resizeWest||this._resizeEast){$2._renderRuntimeWidth($1.lastWidth);
if(this._resizeWest){$2._renderRuntimeLeft($1.lastLeft);
}}
if(this._resizeNorth||this._resizeSouth){$2._renderRuntimeHeight($1.lastHeight);
if(this._resizeNorth){$2._renderRuntimeTop($1.lastTop);
}}}}else{var $3="";
var $4=this.getElement();
this._resizeNorth=this._resizeSouth=this._resizeWest=this._resizeEast=false;
var $5=qx.bom.element.Location.get($4);
if(this._near($5.top,
$0.getPageY())){if(this.getResizableNorth()){$3="n";
this._resizeNorth=true;
}}else if(this._near($5.bottom,
$0.getPageY())){if(this.getResizableSouth()){$3="s";
this._resizeSouth=true;
}}
if(this._near($5.left,
$0.getPageX())){if(this.getResizableWest()){$3+="w";
this._resizeWest=true;
}}else if(this._near($5.right,
$0.getPageX())){if(this.getResizableEast()){$3+="e";
this._resizeEast=true;
}}
if(this._resizeNorth||this._resizeSouth||this._resizeWest||this._resizeEast){this.setCursor($3+"-resize");
}else{this.resetCursor();
}}$0.stopPropagation();
}},
destruct:function(){this._disposeObjects("_frame");
}});




/* ID: qx.ui.resizer.IResizable */
qx.Interface.define("qx.ui.resizer.IResizable",
{members:{_changeWidth:function($0){return true;
},
_changeHeight:function($0){return true;
},
_getResizeParent:function(){return true;
},
_getMinSizeReference:function(){return true;
}}});




/* ID: qx.ui.resizer.ResizablePopup */
qx.Class.define("qx.ui.resizer.ResizablePopup",
{extend:qx.ui.popup.Popup,
include:qx.ui.resizer.MResizable,
implement:qx.ui.resizer.IResizable,
construct:function(){arguments.callee.base.call(this);
this.initMinWidth();
this.initMinHeight();
this.initWidth();
this.initHeight();
},
properties:{appearance:{refine:true,
init:"resizer"},
minWidth:{refine:true,
init:"auto"},
minHeight:{refine:true,
init:"auto"},
width:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"}},
members:{_changeWidth:function($0){this.setWidth($0);
},
_changeHeight:function($0){this.setHeight($0);
},
_getResizeParent:function(){return this.getParent();
},
_getMinSizeReference:function(){return this;
}}});




/* ID: qx.ui.window.Window */
qx.Class.define("qx.ui.window.Window",
{extend:qx.ui.resizer.ResizablePopup,
construct:function($0,
$1,
$2){arguments.callee.base.call(this);
this.setWindowManager($2||qx.ui.window.Window.getDefaultWindowManager());
var $3=this._layout=new qx.ui.layout.VerticalBoxLayout;
$3.setEdge(0);
this.add($3);
var $4=this._captionBar=new qx.ui.layout.HorizontalBoxLayout;
$4.setAppearance("window-captionbar");
$4.setHeight("auto");
$4.setOverflow("hidden");
$3.add($4);
var $5=this._captionIcon=new qx.ui.basic.Image;
$5.setAppearance("window-captionbar-icon");
$4.add($5);
var $6=this._captionTitle=new qx.ui.basic.Label($0);
$6.setAppearance("window-captionbar-title");
$6.setSelectable(false);
$4.add($6);
var $7=this._captionFlex=new qx.ui.basic.HorizontalSpacer;
$4.add($7);
var $8=this._minimizeButton=new qx.ui.form.Button;
$8.setAppearance("window-captionbar-minimize-button");
$8.setTabIndex(-1);
$8.addEventListener("execute",
this._onminimizebuttonclick,
this);
$8.addEventListener("mousedown",
this._onbuttonmousedown,
this);
$4.add($8);
var $9=this._restoreButton=new qx.ui.form.Button;
$9.setAppearance("window-captionbar-restore-button");
$9.setTabIndex(-1);
$9.addEventListener("execute",
this._onrestorebuttonclick,
this);
$9.addEventListener("mousedown",
this._onbuttonmousedown,
this);
var $a=this._maximizeButton=new qx.ui.form.Button;
$a.setAppearance("window-captionbar-maximize-button");
$a.setTabIndex(-1);
$a.addEventListener("execute",
this._onmaximizebuttonclick,
this);
$a.addEventListener("mousedown",
this._onbuttonmousedown,
this);
$4.add($a);
var $b=this._closeButton=new qx.ui.form.Button;
$b.setAppearance("window-captionbar-close-button");
$b.setTabIndex(-1);
$b.addEventListener("execute",
this._onclosebuttonclick,
this);
$b.addEventListener("mousedown",
this._onbuttonmousedown,
this);
$4.add($b);
var $c=this._pane=new qx.ui.layout.CanvasLayout;
$c.setHeight("1*");
$c.setOverflow("hidden");
$3.add($c);
var $d=this._statusBar=new qx.ui.layout.HorizontalBoxLayout;
$d.setAppearance("window-statusbar");
$d.setHeight("auto");
var $e=this._statusText=new qx.ui.basic.Label("Ready");
$e.setAppearance("window-statusbar-text");
$e.setSelectable(false);
$d.add($e);
if($0!=null){this.setCaption($0);
}
if($1!=null){this.setIcon($1);
}this.setAutoHide(false);
this.addEventListener("mousedown",
this._onwindowmousedown);
this.addEventListener("click",
this._onwindowclick);
$4.addEventListener("mousedown",
this._oncaptionmousedown,
this);
$4.addEventListener("mouseup",
this._oncaptionmouseup,
this);
$4.addEventListener("mousemove",
this._oncaptionmousemove,
this);
$4.addEventListener("dblclick",
this._oncaptiondblblick,
this);
this.remapChildrenHandlingTo(this._pane);
},
statics:{getDefaultWindowManager:function(){if(!qx.ui.window.Window._defaultWindowManager){qx.ui.window.Window._defaultWindowManager=new qx.ui.window.Manager;
}return qx.ui.window.Window._defaultWindowManager;
}},
properties:{appearance:{refine:true,
init:"window"},
windowManager:{check:"qx.ui.window.Manager",
event:"changeWindowManager"},
active:{check:"Boolean",
init:false,
apply:"_applyActive",
event:"changeActive"},
modal:{check:"Boolean",
init:false,
apply:"_applyModal",
event:"changeModal"},
mode:{check:["minimized",
"maximized"],
init:null,
nullable:true,
apply:"_applyMode",
event:"changeMode"},
opener:{check:"qx.ui.core.Widget"},
caption:{apply:"_applyCaption",
event:"changeCaption",
dispose:true},
icon:{check:"String",
nullable:true,
apply:"_applyIcon",
event:"changeIcon"},
status:{check:"String",
init:"Ready",
apply:"_applyStatus",
event:"changeStatus"},
showClose:{check:"Boolean",
init:true,
apply:"_applyShowClose"},
showMaximize:{check:"Boolean",
init:true,
apply:"_applyShowMaximize"},
showMinimize:{check:"Boolean",
init:true,
apply:"_applyShowMinimize"},
showStatusbar:{check:"Boolean",
init:false,
apply:"_applyShowStatusbar"},
allowClose:{check:"Boolean",
init:true,
apply:"_applyAllowClose"},
allowMaximize:{check:"Boolean",
init:true,
apply:"_applyAllowMaximize"},
allowMinimize:{check:"Boolean",
init:true,
apply:"_applyAllowMinimize"},
showCaption:{check:"Boolean",
init:true,
apply:"_applyShowCaption"},
showIcon:{check:"Boolean",
init:true,
apply:"_applyShowIcon"},
moveable:{check:"Boolean",
init:true,
event:"changeMoveable"},
moveMethod:{check:["opaque",
"frame",
"translucent"],
init:"opaque",
event:"changeMoveMethod"}},
members:{getPane:function(){return this._pane;
},
getCaptionBar:function(){return this._captionBar;
},
getStatusBar:function(){return this._statusBar;
},
close:function(){this.hide();
},
open:function($0){if($0!=null){this.setOpener($0);
}
if(this.getCentered()){this.centerToBrowser();
}this.show();
},
focus:function(){this.setActive(true);
},
blur:function(){this.setActive(false);
},
maximize:function(){this.setMode("maximized");
},
minimize:function(){this.setMode("minimized");
},
restore:function(){this.setMode(null);
},
_beforeAppear:function(){qx.ui.layout.CanvasLayout.prototype._beforeAppear.call(this);
qx.ui.popup.PopupManager.getInstance().update();
qx.event.handler.EventHandler.getInstance().setFocusRoot(this);
this.getWindowManager().add(this);
this._makeActive();
},
_beforeDisappear:function(){qx.ui.layout.CanvasLayout.prototype._beforeDisappear.call(this);
var $0=qx.event.handler.EventHandler.getInstance().getFocusRoot();
if($0==this||this.contains($0)){qx.event.handler.EventHandler.getInstance().setFocusRoot(null);
}var $1=qx.event.handler.EventHandler.getInstance().getCaptureWidget();
if($1&&this.contains($1)){$1.setCapture(false);
}this.getWindowManager().remove(this);
this._makeInactive();
},
_minZIndex:1e5,
_sendTo:function(){var $0=qx.lang.Object.getValues(this.getWindowManager().getAll()).sort(qx.util.Compare.byZIndex);
var $1=$0.length;
var $2=this._minZIndex;
for(var $3=0;$3<$1;$3++){$0[$3].setZIndex($2++);
}},
_applyActive:function($0,
$1){if($1){if(this.getFocused()){this.setFocused(false);
}
if(this.getWindowManager().getActiveWindow()==this){this.getWindowManager().setActiveWindow(null);
}this.removeState("active");
this._captionBar.removeState("active");
this._minimizeButton.removeState("active");
this._restoreButton.removeState("active");
this._maximizeButton.removeState("active");
this._closeButton.removeState("active");
}else{if(!this.getFocusedChild()){this.setFocused(true);
}this.getWindowManager().setActiveWindow(this);
this.bringToFront();
this.addState("active");
this._captionBar.addState("active");
this._minimizeButton.addState("active");
this._restoreButton.addState("active");
this._maximizeButton.addState("active");
this._closeButton.addState("active");
}},
_applyModal:function($0,
$1){if(this._initialLayoutDone&&this.getVisibility()&&this.getDisplay()){var $2=this.getTopLevelWidget();
$0?$2.block(this):$2.release(this);
}},
_applyAllowClose:function($0,
$1){this._closeButtonManager();
},
_applyAllowMaximize:function($0,
$1){this._maximizeButtonManager();
},
_applyAllowMinimize:function($0,
$1){this._minimizeButtonManager();
},
_applyMode:function($0,
$1){switch($0){case "minimized":this._disableResize=true;
this._minimize();
break;
case "maximized":this._disableResize=true;
this._maximize();
break;
default:delete this._disableResize;
switch($1){case "maximized":this._restoreFromMaximized();
break;
case "minimized":this._restoreFromMinimized();
break;
}}},
_applyShowCaption:function($0,
$1){if($0){this._captionBar.addAt(this._captionTitle,
this.getShowIcon()?1:0);
}else{this._captionBar.remove(this._captionTitle);
}},
_applyShowIcon:function($0,
$1){if($0){this._captionBar.addAtBegin(this._captionIcon);
}else{this._captionBar.remove(this._captionIcon);
}},
_applyShowStatusbar:function($0,
$1){if($0){this._layout.addAtEnd(this._statusBar);
}else{this._layout.remove(this._statusBar);
}},
_applyShowClose:function($0,
$1){if($0){this._captionBar.addAtEnd(this._closeButton);
}else{this._captionBar.remove(this._closeButton);
}},
_applyShowMaximize:function($0,
$1){if($0){var $2=this.getMode()=="maximized"?this._restoreButton:this._maximizeButton;
if(this.getShowMinimize()){this._captionBar.addAfter($2,
this._minimizeButton);
}else{this._captionBar.addAfter($2,
this._captionFlex);
}}else{this._captionBar.remove(this._maximizeButton);
this._captionBar.remove(this._restoreButton);
}},
_applyShowMinimize:function($0,
$1){if($0){this._captionBar.addAfter(this._minimizeButton,
this._captionFlex);
}else{this._captionBar.remove(this._minimizeButton);
}},
_minimizeButtonManager:function(){this.getAllowMinimize()===false?this._minimizeButton.setEnabled(false):this._minimizeButton.resetEnabled();
},
_closeButtonManager:function(){this.getAllowClose()===false?this._closeButton.setEnabled(false):this._closeButton.resetEnabled();
},
_maximizeButtonManager:function(){var $0=this.getAllowMaximize()&&this.getResizable()&&this._computedMaxWidthTypeNull&&this._computedMaxHeightTypeNull;
if(this._maximizeButton){$0===false?this._maximizeButton.setEnabled(false):this._maximizeButton.resetEnabled();
}
if(this._restoreButton){$0===false?this._restoreButton.setEnabled(false):this._restoreButton.resetEnabled();
}},
_applyStatus:function($0,
$1){this._statusText.setText($0);
},
_applyMaxWidth:function($0,
$1){arguments.callee.base.call(this,
$0);
this._maximizeButtonManager();
},
_applyMaxHeight:function($0,
$1){arguments.callee.base.call(this,
$0);
this._maximizeButtonManager();
},
_applyResizable:function($0,
$1){this._maximizeButtonManager();
},
_applyCaption:function($0,
$1){this._captionTitle.setText($0);
},
_applyIcon:function($0,
$1){this._captionIcon.setSource($0);
},
_minimize:function(){this.blur();
this.hide();
},
_restoreFromMaximized:function(){this.setLeft(this._previousLeft?this._previousLeft:null);
this.setWidth(this._previousWidth?this._previousWidth:null);
this.setRight(this._previousRight?this._previousRight:null);
this.setTop(this._previousTop?this._previousTop:null);
this.setHeight(this._previousHeight?this._previousHeight:null);
this.setBottom(this._previousBottom?this._previousBottom:null);
this.removeState("maximized");
if(this.getShowMaximize()){var $0=this._captionBar;
var $1=$0.indexOf(this._restoreButton);
$0.remove(this._restoreButton);
$0.addAt(this._maximizeButton,
$1);
}this.focus();
},
_restoreFromMinimized:function(){if(this.hasState("maximized")){this.setMode("maximized");
}this.show();
this.focus();
},
_maximize:function(){if(this.hasState("maximized")){return;
}this._previousLeft=this.getLeft();
this._previousWidth=this.getWidth();
this._previousRight=this.getRight();
this._previousTop=this.getTop();
this._previousHeight=this.getHeight();
this._previousBottom=this.getBottom();
this.setWidth(null);
this.setLeft(0);
this.setRight(0);
this.setHeight(null);
this.setTop(0);
this.setBottom(0);
this.addState("maximized");
if(this.getShowMaximize()){var $0=this._captionBar;
var $1=$0.indexOf(this._maximizeButton);
$0.remove(this._maximizeButton);
$0.addAt(this._restoreButton,
$1);
}this.focus();
},
_onwindowclick:function($0){$0.stopPropagation();
},
_onwindowmousedown:function($0){this.focus();
},
_onbuttonmousedown:function($0){$0.stopPropagation();
},
_onminimizebuttonclick:function($0){this.minimize();
this._minimizeButton.removeState("pressed");
this._minimizeButton.removeState("abandoned");
this._minimizeButton.removeState("over");
$0.stopPropagation();
},
_onrestorebuttonclick:function($0){this.restore();
this._restoreButton.removeState("pressed");
this._restoreButton.removeState("abandoned");
this._restoreButton.removeState("over");
$0.stopPropagation();
},
_onmaximizebuttonclick:function($0){this.maximize();
this._maximizeButton.removeState("pressed");
this._maximizeButton.removeState("abandoned");
this._maximizeButton.removeState("over");
$0.stopPropagation();
},
_onclosebuttonclick:function($0){this.close();
this._closeButton.removeState("pressed");
this._closeButton.removeState("abandoned");
this._closeButton.removeState("over");
$0.stopPropagation();
},
_oncaptionmousedown:function($0){if(!$0.isLeftButtonPressed()||!this.getMoveable()||this.getMode()!=null){return;
}this._captionBar.setCapture(true);
var $1=this.getElement();
var $2=this.getParent();
var $3=$2.getElement();
var $4=qx.bom.element.Location.get($3,
"scroll");
var $5=qx.bom.element.Location.get($1);
this._dragSession={offsetX:$0.getPageX()-$5.left+$4.left,
offsetY:$0.getPageY()-$5.top+$4.top,
parentAvailableAreaLeft:$4.left+5,
parentAvailableAreaTop:$4.top+5,
parentAvailableAreaRight:$4.right-5,
parentAvailableAreaBottom:$4.bottom-5};
switch(this.getMoveMethod()){case "translucent":this.setOpacity(0.5);
break;
case "frame":var $6=this._frame;
if($6.getParent()!=this.getParent()){$6.setParent(this.getParent());
qx.ui.core.Widget.flushGlobalQueues();
}$6._renderRuntimeLeft($5.left-$4.left);
$6._renderRuntimeTop($5.top-$4.top);
$6._renderRuntimeWidth($1.offsetWidth);
$6._renderRuntimeHeight($1.offsetHeight);
$6.setZIndex(this.getZIndex()+1);
break;
}},
_oncaptionmouseup:function($0){var $1=this._dragSession;
if(!$1){return;
}this._captionBar.setCapture(false);
if($1.lastX!=null){this.setLeft($1.lastX);
}
if($1.lastY!=null){this.setTop($1.lastY);
}switch(this.getMoveMethod()){case "translucent":this.setOpacity(null);
break;
case "frame":this._frame.setParent(null);
break;
}delete this._dragSession;
},
_oncaptionmousemove:function($0){var $1=this._dragSession;
if(!$1||!this._captionBar.getCapture()){return;
}if(!qx.lang.Number.isBetweenRange($0.getPageX(),
$1.parentAvailableAreaLeft,
$1.parentAvailableAreaRight)||!qx.lang.Number.isBetweenRange($0.getPageY(),
$1.parentAvailableAreaTop,
$1.parentAvailableAreaBottom)){return;
}var $2=this.getMoveMethod()=="frame"?this._frame:this;
$2._renderRuntimeLeft($1.lastX=$0.getPageX()-$1.offsetX);
$2._renderRuntimeTop($1.lastY=$0.getPageY()-$1.offsetY);
},
_oncaptiondblblick:function($0){if(!this._maximizeButton.getEnabled()){return;
}return this.getMode()=="maximized"?this.restore():this.maximize();
}},
destruct:function(){this._disposeObjects("_layout",
"_captionBar",
"_captionIcon",
"_captionTitle",
"_captionFlex",
"_closeButton",
"_minimizeButton",
"_maximizeButton",
"_restoreButton",
"_pane",
"_statusBar",
"_statusText");
}});




/* ID: qx.ui.window.Manager */
qx.Class.define("qx.ui.window.Manager",
{extend:qx.util.manager.Object,
properties:{activeWindow:{check:"Object",
nullable:true,
apply:"_applyActiveWindow"}},
members:{_applyActiveWindow:function($0,
$1){qx.ui.popup.PopupManager.getInstance().update();
if($1){$1.setActive(false);
}
if($0){$0.setActive(true);
}
if($1&&$1.getModal()){$1.getTopLevelWidget().release($1);
}
if($0&&$0.getModal()){$0.getTopLevelWidget().block($0);
}},
update:function(){var $0,
$1;
var $2=this.getAll();
for(var $1 in $2){$0=$2[$1];
if(!$0.getAutoHide()){continue;
}$0.hide();
}},
compareWindows:function($0,
$1){switch($0.getWindowManager().getActiveWindow()){case $0:return 1;
case $1:return -1;
}return $0.getZIndex()-$1.getZIndex();
},
add:function($0){arguments.callee.base.call(this,
$0);
this.setActiveWindow($0);
},
remove:function($0){arguments.callee.base.call(this,
$0);
if(this.getActiveWindow()==$0){var $1=[];
for(var $2 in this._objects){$1.push(this._objects[$2]);
}var $3=$1.length;
if($3==0){this.setActiveWindow(null);
}else if($3==1){this.setActiveWindow($1[0]);
}else if($3>1){$1.sort(this.compareWindows);
this.setActiveWindow($1[$3-1]);
}}}}});




/* ID: qx.ui.form.TextField */
qx.Class.define("qx.ui.form.TextField",
{extend:qx.ui.basic.Terminator,
construct:function($0){arguments.callee.base.call(this);
if($0!=null){this.setValue($0);
}this.initHideFocus();
this.initWidth();
this.initHeight();
this.initTabIndex();
this.initSpellCheck();
this.__oninput=qx.lang.Function.bindEvent(this._oninputDom,
this);
this.addEventListener("blur",
this._onblur);
this.addEventListener("focus",
this._onfocus);
this.addEventListener("input",
this._oninput);
},
statics:{createRegExpValidator:function($0){return function($1){return $0.test($1);
};
}},
events:{"input":"qx.event.type.DataEvent"},
properties:{allowStretchX:{refine:true,
init:true},
allowStretchY:{refine:true,
init:false},
appearance:{refine:true,
init:"text-field"},
tabIndex:{refine:true,
init:1},
hideFocus:{refine:true,
init:true},
width:{refine:true,
init:"auto"},
height:{refine:true,
init:"auto"},
selectable:{refine:true,
init:true},
value:{init:"",
nullable:true,
event:"changeValue",
apply:"_applyValue",
dispose:true},
textAlign:{check:["left",
"center",
"right",
"justify"],
nullable:true,
themeable:true,
apply:"_applyTextAlign"},
spellCheck:{check:"Boolean",
init:false,
apply:"_applySpellCheck"},
liveUpdate:{check:"Boolean",
init:false},
maxLength:{check:"Integer",
apply:"_applyMaxLength",
nullable:true},
readOnly:{check:"Boolean",
apply:"_applyReadOnly",
init:false},
validator:{check:"Function",
event:"changeValidator",
nullable:true}},
members:{_inputTag:"input",
_inputType:"text",
_inputOverflow:"hidden",
_applyElement:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
if($0){var $2=this._inputElement=document.createElement(this._inputTag);
if(this._inputType){$2.type=this._inputType;
}$2.autoComplete="off";
$2.setAttribute("autoComplete",
"off");
$2.disabled=this.getEnabled()===false;
$2.readOnly=this.getReadOnly();
$2.value=this.getValue()?this.getValue():"";
if(this.getMaxLength()!=null){$2.maxLength=this.getMaxLength();
}var $3=$2.style;
$3.padding=$3.margin=0;
$3.border="0 none";
$3.background="transparent";
$3.overflow=this._inputOverflow;
$3.outline="none";
$3.resize="none";
$3.WebkitAppearance="none";
$3.MozAppearance="none";
if(qx.core.Variant.isSet("qx.client",
"gecko|opera|webkit")){$3.margin="1px 0";
}this._renderFont();
this._renderTextColor();
this._renderTextAlign();
this._renderCursor();
this._renderSpellCheck();
if(qx.core.Variant.isSet("qx.client",
"mshtml")){$2.onpropertychange=this.__oninput;
}else{$2.addEventListener("input",
this.__oninput,
false);
}$0.appendChild($2);
}},
_postApply:function(){this._syncFieldWidth();
this._syncFieldHeight();
},
_changeInnerWidth:function($0,
$1){this._syncFieldWidth();
},
_changeInnerHeight:function($0,
$1){this._syncFieldHeight();
},
_syncFieldWidth:function(){this._inputElement.style.width=this.getInnerWidth()+"px";
},
_syncFieldHeight:function(){this._inputElement.style.height=(this.getInnerHeight()-2)+"px";
},
_applyCursor:function($0,
$1){if(this._inputElement){this._renderCursor();
}},
_renderCursor:function(){var $0=this._inputElement.style;
var $1=this.getCursor();
if($1){if($1=="pointer"&&qx.core.Client.getInstance().isMshtml()){$0.cursor="hand";
}else{$0.cursor=$1;
}}else{$0.cursor="";
}},
_applyTextAlign:function($0,
$1){if(this._inputElement){this._renderTextAlign();
}},
_renderTextAlign:function(){this._inputElement.style.textAlign=this.getTextAlign()||"";
},
_applySpellCheck:function($0,
$1){if(this._inputElement){this._renderSpellCheck();
}},
_renderSpellCheck:function(){this._inputElement.spellcheck=this.getSpellCheck();
},
_applyEnabled:function($0,
$1){if(this._inputElement){this._inputElement.disabled=$0===false;
}return arguments.callee.base.call(this,
$0,
$1);
},
_applyValue:function($0,
$1){this._inValueProperty=true;
if(this._inputElement){if($0===null){$0="";
}
if(this._inputElement.value!==$0){this._inputElement.value=$0;
}}delete this._inValueProperty;
},
_applyMaxLength:function($0,
$1){if(this._inputElement){this._inputElement.maxLength=$0==null?"":$0;
}},
_applyReadOnly:function($0,
$1){if(this._inputElement){this._inputElement.readOnly=$0;
}
if($0){this.addState("readonly");
}else{this.removeState("readonly");
}},
_applyTextColor:function($0,
$1){qx.theme.manager.Color.getInstance().connect(this._styleTextColor,
this,
$0);
},
_styleTextColor:function($0){this.__textColor=$0;
this._renderTextColor();
},
_renderTextColor:function(){var $0=this._inputElement;
if($0){$0.style.color=this.__textColor||"";
}},
_applyFont:function($0,
$1){qx.theme.manager.Font.getInstance().connect(this._styleFont,
this,
$0);
},
_styleFont:function($0){this.__font=$0;
this._renderFont();
},
_renderFont:function(){var $0=this._inputElement;
if($0){var $1=this.__font;
$1?$1.renderElement($0):qx.ui.core.Font.resetElement($0);
}},
_visualizeFocus:function(){arguments.callee.base.call(this);
if(!qx.event.handler.FocusHandler.mouseFocus&&this.getEnableElementFocus()){try{this._inputElement.focus();
}catch(ex){}}},
_visualizeBlur:function(){arguments.callee.base.call(this);
if(!qx.event.handler.FocusHandler.mouseFocus){try{this._inputElement.blur();
}catch(ex){}}},
getComputedValue:function(){if(this._inputElement){return this._inputElement.value;
}return this.getValue();
},
getInputElement:function(){return this._inputElement||null;
},
isValid:function(){var $0=this.getValidator();
return !$0||$0(this.getValue());
},
isComputedValid:function(){var $0=this.getValidator();
return !$0||$0(this.getComputedValue());
},
_computePreferredInnerWidth:function(){return 120;
},
_computePreferredInnerHeight:function(){return 16;
},
_ieFirstInputFix:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._inValueProperty=true;
this._inputElement.value=this.getValue()===null?"":this.getValue();
this._firstInputFixApplied=true;
delete this._inValueProperty;
},
"default":null}),
_afterAppear:qx.core.Variant.select("qx.client",
{"mshtml":function(){arguments.callee.base.call(this);
if(!this._firstInputFixApplied&&this._inputElement){qx.client.Timer.once(this._ieFirstInputFix,
this,
1);
}},
"default":function(){arguments.callee.base.call(this);
}}),
_firstInputFixApplied:false,
_textOnFocus:null,
_oninputDom:qx.core.Variant.select("qx.client",
{"mshtml":function($0){if(!this._inValueProperty&&$0.propertyName==="value"){this.createDispatchDataEvent("input",
this.getComputedValue());
}},
"default":function($0){this.createDispatchDataEvent("input",
this.getComputedValue());
}}),
_ontabfocus:function(){this.selectAll();
},
_onfocus:function(){this._textOnFocus=this.getComputedValue();
},
_onblur:function(){var $0=this.getComputedValue().toString();
if(this._textOnFocus!=$0){this.setValue($0);
}this.setSelectionLength(0);
},
_oninput:function(){if(!this.isLiveUpdate()){return;
}var $0=this.getComputedValue().toString();
this.setValue($0);
},
__getRange:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._visualPropertyCheck();
return this._inputElement.createTextRange();
},
"default":null}),
__getSelectionRange:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._visualPropertyCheck();
return this.getTopLevelWidget().getDocumentElement().selection.createRange();
},
"default":null}),
setSelectionStart:qx.core.Variant.select("qx.client",
{"mshtml":function($0){this._visualPropertyCheck();
var $1=this._inputElement.value;
var $2=0;
while($2<$0){$2=$1.indexOf("\r\n",
$2);
if($2==-1){break;
}$0--;
$2++;
}var $3=this.__getRange();
$3.collapse();
$3.move("character",
$0);
$3.select();
},
"default":function($0){this._visualPropertyCheck();
this._inputElement.selectionStart=$0;
}}),
getSelectionStart:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._visualPropertyCheck();
var $0=this.__getSelectionRange();
if(!this._inputElement.contains($0.parentElement())){return -1;
}var $1=this.__getRange();
var $2=this._inputElement.value.length;
$1.moveToBookmark($0.getBookmark());
$1.moveEnd('character',
$2);
return $2-$1.text.length;
},
"default":function(){this._visualPropertyCheck();
return this._inputElement.selectionStart;
}}),
setSelectionLength:qx.core.Variant.select("qx.client",
{"mshtml":function($0){this._visualPropertyCheck();
var $1=this.__getSelectionRange();
if(!this._inputElement.contains($1.parentElement())){return;
}$1.collapse();
$1.moveEnd("character",
$0);
$1.select();
},
"default":function($0){this._visualPropertyCheck();
var $1=this._inputElement;
if(qx.util.Validation.isValidString($1.value)&&this.getVisibility()){$1.selectionEnd=$1.selectionStart+$0;
}}}),
getSelectionLength:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._visualPropertyCheck();
var $0=this.__getSelectionRange();
if(!this._inputElement.contains($0.parentElement())){return 0;
}return $0.text.length;
},
"default":function(){this._visualPropertyCheck();
var $0=this._inputElement;
return $0.selectionEnd-$0.selectionStart;
}}),
setSelectionText:qx.core.Variant.select("qx.client",
{"mshtml":function($0){this._visualPropertyCheck();
var $1=this.getSelectionStart();
var $2=this.__getSelectionRange();
if(!this._inputElement.contains($2.parentElement())){return;
}$2.text=$0;
this.setValue(this._inputElement.value);
this.setSelectionStart($1);
this.setSelectionLength($0.length);
},
"default":function($0){this._visualPropertyCheck();
var $1=this._inputElement;
var $2=$1.value;
var $3=$1.selectionStart;
var $4=$2.substr(0,
$3);
var $5=$2.substr($1.selectionEnd);
var $6=$1.value=$4+$0+$5;
$1.selectionStart=$3;
$1.selectionEnd=$3+$0.length;
this.setValue($6);
}}),
getSelectionText:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._visualPropertyCheck();
var $0=this.__getSelectionRange();
if(!this._inputElement.contains($0.parentElement())){return "";
}return $0.text;
},
"default":function(){this._visualPropertyCheck();
return this._inputElement.value.substr(this.getSelectionStart(),
this.getSelectionLength());
}}),
selectAll:function(){this._visualPropertyCheck();
if(this.getValue()!=null){this.setSelectionStart(0);
this.setSelectionLength(this._inputElement.value.length);
}this._inputElement.select();
this._inputElement.focus();
},
selectFromTo:qx.core.Variant.select("qx.client",
{"mshtml":function($0,
$1){this._visualPropertyCheck();
this.setSelectionStart($0);
this.setSelectionLength($1-$0);
},
"default":function($0,
$1){this._visualPropertyCheck();
var $2=this._inputElement;
$2.selectionStart=$0;
$2.selectionEnd=$1;
}})},
destruct:function(){if(this._inputElement){if(qx.core.Variant.isSet("qx.client",
"mshtml")){this._inputElement.onpropertychange=null;
}else{this._inputElement.removeEventListener("input",
this.__oninput,
false);
}}this._disposeFields("_inputElement",
"__font",
"__oninput");
}});




/* ID: qx.ui.form.CheckBox */
qx.Class.define("qx.ui.form.CheckBox",
{extend:qx.ui.basic.Atom,
construct:function($0,
$1,
$2,
$3){arguments.callee.base.call(this,
$0);
this.initTabIndex();
this._createIcon();
if($1!=null){this.setValue($1);
}
if($2!=null){this.setName($2);
}
if($3!=null){this.setChecked($3);
}else{this.initChecked();
}this.addEventListener("click",
this._onclick);
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keyup",
this._onkeyup);
},
properties:{appearance:{refine:true,
init:"check-box"},
tabIndex:{refine:true,
init:1},
name:{check:"String",
event:"changeName"},
value:{check:"String",
event:"changeValue"},
checked:{check:"Boolean",
apply:"_applyChecked",
init:false,
event:"changeChecked"}},
members:{INPUT_TYPE:"checkbox",
_createIcon:function(){var $0=this._iconObject=new qx.ui.form.InputCheckSymbol;
$0.setType(this.INPUT_TYPE);
$0.setChecked(this.getChecked());
$0.setAnonymous(true);
this.addAtBegin($0);
},
_applyChecked:function($0,
$1){if(this._iconObject){this._iconObject.setChecked($0);
}},
_applyIcon:null,
_applyDisabledIcon:null,
_handleIcon:function(){switch(this.getShow()){case "icon":case "both":this._iconIsVisible=true;
break;
default:this._iconIsVisible=false;
}
if(this._iconIsVisible){this._iconObject?this._iconObject.setDisplay(true):this._createIcon();
}else if(this._iconObject){this._iconObject.setDisplay(false);
}},
_onclick:function($0){this.toggleChecked();
},
_onkeydown:function($0){if($0.getKeyIdentifier()=="Enter"&&!$0.isAltPressed()){this.toggleChecked();
}},
_onkeyup:function($0){if($0.getKeyIdentifier()=="Space"){this.toggleChecked();
}}}});




/* ID: qx.ui.form.InputCheckSymbol */
qx.Class.define("qx.ui.form.InputCheckSymbol",
{extend:qx.ui.basic.Terminator,
construct:function(){arguments.callee.base.call(this);
this.setSelectable(false);
if(qx.core.Variant.isSet("qx.client",
"mshtml")){this.setWidth(13);
this.setHeight(13);
}else if(qx.core.Variant.isSet("qx.client",
"gecko")){this.setMargin(0);
}this.initTabIndex();
this.setChecked(false);
},
properties:{tabIndex:{refine:true,
init:-1},
name:{check:"String",
init:null,
nullable:true,
apply:"_applyName"},
value:{init:null,
nullable:true,
apply:"_applyValue"},
type:{init:null,
nullable:true,
apply:"_applyType"},
checked:{check:"Boolean",
init:false,
apply:"_applyChecked"}},
members:{_createElementImpl:function(){this.setElement(this.getTopLevelWidget().getDocumentElement().createElement("input"));
},
_applyName:function($0,
$1){return this.setHtmlProperty("name",
$0);
},
_applyValue:function($0,
$1){return this.setHtmlProperty("value",
$0);
},
_applyType:function($0,
$1){return this.setHtmlProperty("type",
$0);
},
_applyChecked:function($0,
$1){return this.setHtmlProperty("checked",
$0);
},
getPreferredBoxWidth:function(){return 13;
},
getPreferredBoxHeight:function(){return 13;
},
_afterAppear:qx.core.Variant.select("qx.client",
{"mshtml":function(){arguments.callee.base.call(this);
var $0=this.getElement();
$0.checked=this.getChecked();
if(this.getEnabled()===false){$0.disabled=true;
}},
"default":qx.lang.Function.returnTrue}),
_applyEnabled:function($0,
$1){$0===false?this.setHtmlProperty("disabled",
"disabled"):this.removeHtmlProperty("disabled");
return arguments.callee.base.call(this,
$0,
$1);
}},
defer:function($0,
$1){$1.getBoxWidth=$1.getPreferredBoxWidth;
$1.getBoxHeight=$1.getPreferredBoxHeight;
$1.getInnerWidth=$1.getPreferredBoxWidth;
$1.getInnerHeight=$1.getPreferredBoxHeight;
}});




/* ID: spagobi.ui.custom.FunctionalityTreeSubClass */
qx.Class.define("spagobi.ui.custom.FunctionalityTreeSubClass",
{extend:qx.ui.layout.VerticalBoxLayout,
construct:function(){arguments.callee.base.call(this);
this.setWidth("100%");
this.setHeight("100%");
this.createToolbar();
this._textfield1=this.createTextField({type:'text',
dataIndex:'label',
text:'Label',
labelwidth:100,
mandatory:true});
this.setUserData('label',
this._textfield1);
this._textfield2=this.createTextField({type:'text',
dataIndex:'name',
text:'Name',
labelwidth:100,
mandatory:true});
this.setUserData('name',
this._textfield2);
this._textfield3=this.createTextField({type:'text',
dataIndex:'description',
text:'Description',
labelwidth:100,
mandatory:false});
this.setUserData('description',
this._textfield3);
this._table=this.CreateTableWithCheckbox();
this.setUserData('table',
this._table);
},
members:{_textfield1:undefined,
_textfield2:undefined,
_textfield3:undefined,
_table:undefined,
createToolbar:function(){var $0=new qx.ui.toolbar.ToolBar;
var $1=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/create.png");
var $2=new qx.ui.popup.ToolTip("New");
$1.setToolTip($2);
var $3=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/save.png");
var $4=new qx.ui.popup.ToolTip("Save");
$3.setToolTip($4);
var $5=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/delete.png");
var $6=new qx.ui.popup.ToolTip("Delete");
$5.setToolTip($6);
var $7=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/go-up.png");
var $8=new qx.ui.popup.ToolTip("Move up");
$7.setToolTip($8);
var $9=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/go-down.png");
var $a=new qx.ui.popup.ToolTip("Move Down");
$9.setToolTip($a);
var $b=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/reset.gif");
var $c=new qx.ui.popup.ToolTip("Clear all Data");
$b.setToolTip($c);
$0.add($1,
$3,
$5,
$7,
$9,
$b);
$0.setUserData('create',
$1);
$0.setUserData('save',
$3);
$0.setUserData('delete',
$5);
$0.setUserData('moveUp',
$7);
$0.setUserData('moveDown',
$9);
$0.setUserData('clearAll',
$b);
this.add($0);
this.setUserData('toolBar',
$0);
},
createTextField:function($0){var $1=spagobi.commons.WidgetUtils.createInputTextField($0);
this.add($1);
return $1;
},
CreateTableWithCheckbox:function(){var $0=spagobi.app.data.DataService.loadFunctinalitiesRecords();
var $1=new spagobi.ui.Table(this,
$0);
$1.setWidth('100%');
$1.setHeight('1*');
this.add($1);
return $1;
},
selectDataObject:function($0){},
resetOldData:function(){var $0=this._textfield1.getUserData('field');
var $1=this._textfield2.getUserData('field');
var $2=this._textfield3.getUserData('field');
var $3=this._table.getTableModel();
var $4=$3.getData();
var $5=$4.length;
$0.setValue('');
$1.setValue('');
$2.setValue('');
for(var $6=0;$6<$5;$6++){if($4[$6][2]){$4[$6][2]=false;
}
if($4[$6][3]){$4[$6][3]=false;
}
if($4[$6][4]){$4[$6][4]=false;
}}$3.setData($4);
},
setData:function($0){var $1=this._textfield1.getUserData('field');
var $2=this._textfield2.getUserData('field');
var $3=this._textfield3.getUserData('field');
var $4=this._table.getTableModel();
var $5=$4.getData();
var $6=$5.length;
this.resetOldData($1,
$2,
$3,
$4,
$5);
if($0.tree.getManager().getSelectedItem()==$0.tree){return;
}$1.setValue($0.data.label);
$2.setValue($0.data.name);
$3.setValue($0.data.desc);
if($0.data.func!=undefined){var $7=$0.data.func.length;
for(var $8=0;$8<$7;$8++){for(var $9=0;$9<$6;$9++){if($5[$9][0]==$0.data.func[$8].role){$4.setValue(2,
$9,
$0.data.func[$8].dev);
$4.setValue(3,
$9,
$0.data.func[$8].test);
$4.setValue(4,
$9,
$0.data.func[$8].exe);
break;
}}}}},
getData:function(){var $0={};
var $1=this._textfield1.getUserData('field');
var $2=this._textfield2.getUserData('field');
var $3=this._textfield3.getUserData('field');
$0.label=$1.getValue();
$0.name=$2.getValue();
$0.desc=$3.getValue();
$0.func=[];
var $4=this._table;
var $5=$4.getTableModel();
var $6=$5.getData();
var $7=$6.length;
for(var $8=0,
$9=-1;$8<$7;$8++){if($6[$8][2]||$6[$8][3]||$6[$8][4]){$9++;
$0.func[$9]={};
$0.func[$9].role=$6[$8][0];
$0.func[$9].dev=$6[$8][2];
$0.func[$9].test=$6[$8][3];
$0.func[$9].exe=$6[$8][4];
}}return $0;
}}});




/* ID: spagobi.commons.WidgetUtils */
qx.Class.define("spagobi.commons.WidgetUtils",
{type:"static",
statics:{createLabel:function($0){var $1={text:'',
top:0,
left:0,
width:100};
var $2=new qx.ui.basic.Label();
$2.set($1);
$2.set($0);
return $2;
},
createTextField:function($0,
$1){var $2={top:0,
left:0,
maxLength:100,
width:0,
height:0,
value:''};
if($1!=true){var $3=new qx.ui.form.TextField();
}else{var $3=new qx.ui.form.PasswordField();
}$3.set($2);
$3.set($0);
return $3;
},
createComboBox:function($0){var $1={top:0,
left:0,
items:[],
listeners:[]};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=new qx.ui.form.ComboBox();
$2.set({top:$0.top,
left:$0.left});
for(var $3=0;$3<$0.items.length;$3++){var $4=new qx.ui.form.ListItem($0.items[$3]);
$2.add($4);
}
for(var $3=0;$3<$0.listeners.length;$3++){if($0.listeners[$3].scope){$2.addEventListener($0.listeners[$3].event,
$0.listeners[$3].handler,
$0.listeners[$3].scope);
}else{$2.addEventListener($0.listeners[$3].event,
$0.listeners[$3].handler);
}}$2.setSelected($2.getList().getFirstChild());
return $2;
},
createFlagBox:function($0){var $1={checked:false,
top:0,
left:0,
listeners:[]};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=new qx.ui.form.CheckBox();
$2.set({checked:$0.checked,
top:$0.top,
left:$0.left});
for(var $3=0;$3<$0.listeners.length;$3++){if($0.listeners[$3].scope){$2.addEventListener($0.listeners[$3].event,
$0.listeners[$3].handler,
$0.listeners[$3].scope);
}else{$2.addEventListener($0.listeners[$3].event,
$0.listeners[$3].handler);
}}return $2;
},
createTextArea:function($0){var $1={top:0,
left:0,
width:0,
height:0};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=new qx.ui.form.TextArea();
$2.set($0);
return $2;
},
createCheckBox:function($0){var $1={checked:false,
top:0,
left:0,
items:[],
listeners:[],
columns:1};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=new qx.ui.layout.GridLayout;
$2.auto();
$2.set({left:$0.left});
$2.setColumnCount($0.columns);
$2.setRowCount(Math.ceil($0.items.length/$0.columns));
var $3=$2.getRowCount();
var $4=$2.getColumnCount();
for(i=0,
k=0;i<$3;i++){$2.setRowHeight(i,
30);
for(j=0;j<$4&&k<$0.items.length;j++,
k++){$2.setColumnWidth(j,
50);
var $5=new qx.ui.basic.Label($0.items[k]);
var $6=new qx.ui.form.CheckBox();
var $7=new qx.ui.basic.Atom();
$7.add($6,
$5);
$7.setUserData('label',
$5);
$7.setUserData('field',
$6);
$2.add($7,
j,
i);
}}return $2;
},
createRadioBox:function($0){var $1={top:0,
left:0,
items:[],
listeners:[]};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=new qx.ui.basic.Atom();
var $3=[];
var $4=new qx.ui.selection.RadioManager("mygroup");
for($5=0;$5<$0.items.length;$5++){$3[$5]=new qx.ui.form.RadioButton($0.items[$5]);
$3[$5].set({top:$0.top,
left:$0.left});
$2.add($3[$5]);
$4.add($3[$5]);
}
for(var $5=0;$5<$0.listeners.length;$5++){if($0.listeners[$5].scope){$4.addEventListener($0.listeners[$5].event,
$0.listeners[$5].handler,
$0.listeners[$5].scope);
}else{$4.addEventListener($0.listeners[$5].event,
$0.listeners[$5].handler);
}}$3[0].setChecked(true);
return $2;
},
createInputTextField:function($0){var $1={top:0,
left:10,
text:'',
maxLength:100,
width:200,
height:20,
labelwidth:100,
value:'',
mandatory:false,
password:false};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=this.createLabel({text:$0.text,
top:$0.top,
left:$0.left,
width:$0.labelwidth});
var $3=this.createTextField({top:$0.top,
left:$0.left+30,
maxLength:$0.maxLength,
width:$0.width,
height:$0.height,
value:$0.value},
$0.password);
var $4=new qx.ui.basic.Atom();
$4.add($2,
$3);
if($0.mandatory){var $5=this.createLabel({text:'*',
top:$0.top,
left:$0.left+35});
$4.add($5);
}$4.setUserData('label',
$2);
$4.setUserData('field',
$3);
if($0.visible!=undefined){$4.setDisplay($0.visible);
}return $4;
},
createInputComboBox:function($0){var $1={top:0,
left:10,
text:'',
items:[],
listeners:[],
labelwidth:100};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=this.createLabel({text:$0.text,
top:$0.top,
left:$0.left,
width:$0.labelwidth});
var $3=this.createComboBox({top:$0.top,
left:$0.left+30,
items:$0.items,
listeners:$0.listeners});
var $4=new qx.ui.basic.Atom();
$4.add($2,
$3);
$4.setUserData('label',
$2);
$4.setUserData('field',
$3);
if($0.visible!=undefined){$4.setDisplay($0.visible);
}return $4;
},
createInputFlagBox:function($0){var $1={top:0,
left:10,
text:'',
checked:false,
listeners:[],
labelwidth:100};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=this.createLabel({text:$0.text,
top:$0.top,
left:$0.left,
width:$0.labelwidth});
var $3=this.createFlagBox({checked:$0.checked,
top:$0.top,
left:$0.left+30,
listeners:$0.listeners});
var $4=new qx.ui.basic.Atom();
$4.add($2,
$3);
$4.setUserData('label',
$2);
$4.setUserData('field',
$3);
if($0.visible!=undefined){$4.setDisplay($0.visible);
}return $4;
},
createInputForm:function($0){var $1;
if(typeof ($0.form)=='object'){$1=new spagobi.ui.Form($0.form);
}else{$1=new $0.form();
}$1.setUserData('field',
$1);
if($0.visible!=undefined){$1.setDisplay($0.visible);
}return $1;
},
createInputFormList:function($0){var $1;
$1=new spagobi.ui.FormList($0.formList);
$1.setUserData('field',
$1);
return $1;
},
createInputTextArea:function($0){var $1={top:0,
left:10,
text:'',
width:200,
height:50,
mandatory:false,
labelwidth:100};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=this.createLabel({text:$0.text,
top:$0.top,
left:$0.left,
width:$0.labelwidth});
var $3=this.createTextArea({top:$0.top,
left:$0.left+30,
width:$0.width,
height:$0.height});
var $4=new qx.ui.basic.Atom();
$4.add($2,
$3);
if($0.mandatory){var $5=this.createLabel({text:'*',
top:$0.top,
left:$0.left+35});
$4.add($5);
}$4.setUserData('label',
$2);
$4.setUserData('field',
$3);
if($0.visible!=undefined){$4.setDisplay($0.visible);
}return $4;
},
createInputCheckBox:function($0){var $1={top:0,
left:10,
text:'',
checked:false,
items:[],
listeners:[],
columns:1,
labelwidth:100};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=this.createLabel({text:$0.text,
top:$0.top,
left:$0.left,
width:$0.labelwidth});
var $3=new spagobi.ui.CheckBoxList({checked:$0.checked,
top:0,
left:$0.left+30,
items:$0.items,
listeners:$0.listeners,
columns:$0.columns});
var $4=new qx.ui.basic.Atom();
$4.add($2);
$4.add($3);
$4.setUserData('label',
$2);
$4.setUserData('field',
$3);
if($0.visible!=undefined){$4.setDisplay($0.visible);
}return $4;
},
createInputRadio:function($0){var $1={top:0,
left:10,
text:'',
checked:false,
items:[],
listeners:[],
labelwidth:100};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
var $2=this.createLabel({text:$0.text,
top:$0.top,
left:$0.left,
width:$0.labelwidth});
var $3=this.createRadioBox({checked:$0.checked,
top:$0.top,
left:$0.left+30,
items:$0.items,
listeners:$0.listeners});
var $4=new qx.ui.basic.Atom();
$4.add($2,
$3);
$4.setUserData('label',
$2);
$4.setUserData('field',
$3);
if($0.visible!=undefined){$4.setDisplay($0.visible);
}return $4;
}}});




/* ID: qx.ui.form.PasswordField */
qx.Class.define("qx.ui.form.PasswordField",
{extend:qx.ui.form.TextField,
members:{_inputType:"password"}});




/* ID: spagobi.commons.CoreUtils */
qx.Class.define("spagobi.commons.CoreUtils",
{type:"static",
statics:{apply:function($0,
$1,
$2){if($2){apply($0,
$2);
}
if($0&&$1&&typeof $1=='object'){for(var $3 in $1){$0[$3]=$1[$3];
}}return $0;
},
toStr:function($0){var $1='';
for(p in $0){$1+=p+': '+$0[p]+";\n";
}return $1;
}}});




/* ID: qx.ui.form.ComboBox */
qx.Class.define("qx.ui.form.ComboBox",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function(){arguments.callee.base.call(this);
var $0=this._list=new qx.ui.form.List;
$0.setAppearance("combo-box-list");
$0.setTabIndex(-1);
$0.setEdge(0);
var $1=this._manager=this._list.getManager();
$1.setMultiSelection(false);
$1.setDragSelection(false);
var $2=this._popup=new qx.ui.popup.Popup;
$2.setAppearance("combo-box-popup");
$2.setRestrictToPageLeft(-100000);
$2.setRestrictToPageRight(-100000);
$2.setAutoHide(false);
$2.setHeight("auto");
$2.add($0);
var $3=this._field=new qx.ui.form.TextField;
$3.setAppearance("combo-box-text-field");
$3.setTabIndex(-1);
$3.setWidth("1*");
$3.setAllowStretchY(true);
$3.setHeight(null);
this.add($3);
var $4=this._button=new qx.ui.basic.Atom;
$4.setAppearance("combo-box-button");
$4.setAllowStretchY(true);
$4.setTabIndex(-1);
$4.setHeight(null);
this.add($4);
this.addEventListener("mousedown",
this._onmousedown);
this.addEventListener("mouseup",
this._onmouseup);
this.addEventListener("click",
this._onclick);
this.addEventListener("mouseover",
this._onmouseover);
this.addEventListener("mousewheel",
this._onmousewheel);
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keypress",
this._onkeypress);
this.addEventListener("keyinput",
this._onkeyinput);
this.addEventListener("beforeDisappear",
this._onbeforedisappear);
this._popup.addEventListener("appear",
this._onpopupappear,
this);
this._field.addEventListener("input",
this._oninput,
this);
qx.locale.Manager.getInstance().addEventListener("changeLocale",
this._onlocalechange,
this);
var $5=qx.ui.core.ClientDocument.getInstance();
$5.addEventListener("windowblur",
this._testClosePopup,
this);
this.remapChildrenHandlingTo($0);
this.initEditable();
this.initTabIndex();
this.initWidth();
this.initHeight();
this.initMinWidth();
},
events:{"beforeInitialOpen":"qx.event.type.Event"},
properties:{appearance:{refine:true,
init:"combo-box"},
allowStretchY:{refine:true,
init:false},
width:{refine:true,
init:120},
height:{refine:true,
init:"auto"},
minWidth:{refine:true,
init:40},
tabIndex:{refine:true,
init:1},
editable:{check:"Boolean",
apply:"_applyEditable",
event:"changeEditable",
init:false},
selected:{check:"qx.ui.form.ListItem",
nullable:true,
apply:"_applySelected",
event:"changeSelected"},
value:{check:"String",
nullable:true,
apply:"_applyValue",
event:"changeValue"},
pagingInterval:{check:"Integer",
init:10}},
members:{getManager:function(){return this._manager;
},
getPopup:function(){return this._popup;
},
getList:function(){return this._list;
},
getField:function(){return this._field;
},
getButton:function(){return this._button;
},
_applySelected:function($0,
$1){this._fromSelected=true;
if(!this._fromValue){this.setValue($0?$0.getLabel().toString():"");
}this._manager.setLeadItem($0);
this._manager.setAnchorItem($0);
if($0){this._manager.setSelectedItem($0);
}else{this._manager.deselectAll();
}delete this._fromSelected;
},
_applyValue:function($0,
$1){this._fromValue=true;
if(!this._fromInput){if(this._field.getValue()==$0){this._field.setValue(null);
}this._field.setValue($0);
}if(!this._fromSelected){var $2=this._list.findStringExact($0);
if($2!=null&&!$2.getEnabled()){$2=null;
}this.setSelected($2);
}delete this._fromValue;
},
_applyEditable:function($0,
$1){var $2=this._field;
$2.setReadOnly(!$0);
$2.setCursor($0?null:"default");
$2.setSelectable($0);
},
_oldSelected:null,
_openPopup:function(){var $0=this._popup;
var $1=this.getElement();
if(!$0.isCreated()){this.createDispatchEvent("beforeInitialOpen");
}
if(this._list.getChildrenLength()==0){return;
}$0.positionRelativeTo($1,
1,
qx.html.Dimension.getBoxHeight($1));
$0.setWidth(this.getBoxWidth()-2);
$0.setParent(this.getTopLevelWidget());
$0.show();
this._oldSelected=this.getSelected();
this.setCapture(true);
},
_closePopup:function(){this._popup.hide();
this.setCapture(false);
},
_testClosePopup:function(){if(this._popup.isSeeable()){this._closePopup();
}},
_togglePopup:function(){this._popup.isSeeable()?this._closePopup():this._openPopup();
},
_onpopupappear:function($0){var $1=this.getSelected();
if($1){$1.scrollIntoView();
}},
_oninput:function($0){this._fromInput=true;
this.setValue(this._field.getComputedValue());
if(this.getPopup().isSeeable()&&this.getSelected()){this.getSelected().scrollIntoView();
}delete this._fromInput;
},
_onbeforedisappear:function($0){this._testClosePopup();
},
_onlocalechange:function($0){var $1=this.getSelected();
this._applySelected($1,
$1);
},
_onmousedown:function($0){if(!$0.isLeftButtonPressed()){return;
}var $1=$0.getTarget();
switch($1){case this._field:if(this.getEditable()){break;
}case this._button:this._button.addState("pressed");
this._togglePopup();
this.setCapture(true);
break;
default:break;
}$0.stopPropagation();
},
_onclick:function($0){if(!$0.isLeftButtonPressed()){return;
}var $1=$0.getTarget();
switch($1){case this._field:case this._button:case this:case this._list:break;
default:if($1 instanceof qx.ui.form.ListItem&&$1.getParent()==this._list){this._list._onmousedown($0);
this.setSelected(this._list.getSelectedItem());
this._closePopup();
this.setFocused(true);
}else if(this._popup.isSeeable()){this._popup.hide();
this.setCapture(false);
}}},
_onmouseup:function($0){this._button.removeState("pressed");
if(!this._popup.isSeeable()){this.setCapture(false);
}},
_onmouseover:function($0){var $1=$0.getTarget();
if($1 instanceof qx.ui.form.ListItem){var $2=this._manager;
$2.deselectAll();
$2.setLeadItem($1);
$2.setAnchorItem($1);
$2.setSelectedItem($1);
}},
_onmousewheel:function($0){if(!this._popup.isSeeable()){var $1;
var $2=this.getSelected();
if($0.getWheelDelta()<0){$1=$2?this._manager.getNext($2):this._manager.getFirst();
}else{$1=$2?this._manager.getPrevious($2):this._manager.getLast();
}
if($1){this.setSelected($1);
}}else{var $3=$0.getTarget();
if($3!=this&&$3.getParent()!=this._list){this._popup.hide();
this.setCapture(false);
}}},
_onkeydown:function($0){var $1=this._manager;
var $2=this._popup.isSeeable();
switch($0.getKeyIdentifier()){case "Enter":if($2){this.setSelected(this._manager.getSelectedItem());
this._closePopup();
this.setFocused(true);
}else{this._openPopup();
}return;
case "Escape":if($2){$1.setLeadItem(this._oldSelected);
$1.setAnchorItem(this._oldSelected);
$1.setSelectedItem(this._oldSelected);
this._field.setValue(this._oldSelected?this._oldSelected.getLabel():"");
this._closePopup();
this.setFocused(true);
}return;
case "Down":if($0.isAltPressed()){this._togglePopup();
return;
}break;
}},
_onkeypress:function($0){var $1=this._popup.isSeeable();
var $2=this._manager;
switch($0.getKeyIdentifier()){case "PageUp":if(!$1){var $3;
var $4=this.getSelected();
if($4){var $5=this.getPagingInterval();
do{$3=$4;
}while(--$5&&($4=$2.getPrevious($3)));
}else{$3=$2.getLast();
}this.setSelected($3);
return;
}break;
case "PageDown":if(!$1){var $6;
var $4=this.getSelected();
if($4){var $5=this.getPagingInterval();
do{$6=$4;
}while(--$5&&($4=$2.getNext($6)));
}else{$6=$2.getFirst();
}this.setSelected($6||null);
return;
}break;
}if(!this.isEditable()||$1){this._list._onkeypress($0);
var $7=this._manager.getSelectedItem();
if(!$1){this.setSelected($7);
}else if($7){this._field.setValue($7.getLabel());
}}},
_onkeyinput:function($0){var $1=this._popup.isSeeable();
if(!this.isEditable()||$1){this._list._onkeyinput($0);
var $2=this._manager.getSelectedItem();
if(!$1){this.setSelected($2);
}else if($2){this._field.setValue($2.getLabel());
}}},
_visualizeBlur:function(){this.getField()._visualizeBlur();
this.removeState("focused");
},
_visualizeFocus:function(){this.getField()._visualizeFocus();
this.getField().selectAll();
this.addState("focused");
}},
destruct:function(){if(this._popup&&!qx.core.Object.inGlobalDispose()){this._popup.setParent(null);
}var $0=qx.ui.core.ClientDocument.getInstance();
$0.removeEventListener("windowblur",
this._testClosePopup,
this);
var $1=qx.locale.Manager.getInstance();
$1.removeEventListener("changeLocale",
this._onlocalechange,
this);
this._disposeObjects("_popup",
"_list",
"_manager",
"_field",
"_button");
}});




/* ID: qx.ui.form.List */
qx.Class.define("qx.ui.form.List",
{extend:qx.ui.layout.VerticalBoxLayout,
construct:function(){arguments.callee.base.call(this);
this._manager=new qx.ui.selection.SelectionManager(this);
this.addEventListener("mouseover",
this._onmouseover);
this.addEventListener("mousedown",
this._onmousedown);
this.addEventListener("mouseup",
this._onmouseup);
this.addEventListener("click",
this._onclick);
this.addEventListener("dblclick",
this._ondblclick);
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keypress",
this._onkeypress);
this.addEventListener("keyinput",
this._onkeyinput);
this.initOverflow();
this.initTabIndex();
},
properties:{appearance:{refine:true,
init:"list"},
overflow:{refine:true,
init:"hidden"},
tabIndex:{refine:true,
init:1},
enableInlineFind:{check:"Boolean",
init:true},
markLeadingItem:{check:"Boolean",
init:false}},
members:{_pressedString:"",
getManager:function(){return this._manager;
},
getListItemTarget:function($0){while($0!=null&&$0.getParent()!=this){$0=$0.getParent();
}return $0;
},
getSelectedItem:function(){return this.getSelectedItems()[0]||null;
},
getSelectedItems:function(){return this._manager.getSelectedItems();
},
_onmouseover:function($0){var $1=this.getListItemTarget($0.getTarget());
if($1){this._manager.handleMouseOver($1,
$0);
}},
_onmousedown:function($0){var $1=this.getListItemTarget($0.getTarget());
if($1){this._manager.handleMouseDown($1,
$0);
}},
_onmouseup:function($0){var $1=this.getListItemTarget($0.getTarget());
if($1){this._manager.handleMouseUp($1,
$0);
}},
_onclick:function($0){var $1=this.getListItemTarget($0.getTarget());
if($1){this._manager.handleClick($1,
$0);
}},
_ondblclick:function($0){var $1=this.getListItemTarget($0.getTarget());
if($1){this._manager.handleDblClick($1,
$0);
}},
_onkeydown:function($0){if($0.getKeyIdentifier()=="Enter"&&!$0.isAltPressed()){var $1=this.getSelectedItems();
for(var $2=0;$2<$1.length;$2++){$1[$2].createDispatchEvent("action");
}}},
_onkeypress:function($0){this._manager.handleKeyPress($0);
},
_lastKeyPress:0,
_onkeyinput:function($0){if(!this.getEnableInlineFind()){return;
}if(((new Date).valueOf()-this._lastKeyPress)>1000){this._pressedString="";
}this._pressedString+=String.fromCharCode($0.getCharCode());
var $1=this.findString(this._pressedString,
null);
if($1){var $2=this._manager._getChangeValue();
var $3=this._manager.getFireChange();
this._manager.setFireChange(false);
this._manager._deselectAll();
this._manager.setItemSelected($1,
true);
this._manager.setAnchorItem($1);
this._manager.setLeadItem($1);
$1.scrollIntoView();
this._manager.setFireChange($3);
if($3&&this._manager._hasChanged($2)){this._manager._dispatchChange();
}}this._lastKeyPress=(new Date).valueOf();
$0.preventDefault();
},
_findItem:function($0,
$1,
$2){var $3=this.getChildren();
if($1==null){$1=$3.indexOf(this.getSelectedItem());
if($1==-1){$1=0;
}}var $4="matches"+$2;
for(var $5=$1;$5<$3.length;$5++){if($3[$5][$4]($0)){return $3[$5];
}}for(var $5=0;$5<$1;$5++){if($3[$5][$4]($0)){return $3[$5];
}}return null;
},
findString:function($0,
$1){return this._findItem($0,
$1||0,
"String");
},
findStringExact:function($0,
$1){return this._findItem($0,
$1||0,
"StringExact");
},
findValue:function($0,
$1){return this._findItem($0,
$1||0,
"Value");
},
findValueExact:function($0,
$1){return this._findItem($0,
$1||0,
"ValueExact");
},
_sortItemsCompare:function($0,
$1){return $0.key<$1.key?-1:$0.key==$1.key?0:1;
},
sortItemsByString:function($0){var $1=[];
var $2=this.getChildren();
for(var $3=0,
$4=$2.length;$3<$4;$3++){$1[$3]={key:$2[$3].getLabel(),
item:$2[$3]};
}$1.sort(this._sortItemsCompare);
if($0){$1.reverse();
}
for(var $3=0;$3<$4;$3++){this.addAt($1[$3].item,
$3);
}},
sortItemsByValue:function($0){var $1=[];
var $2=this.getChildren();
for(var $3=0,
$4=$2.length;$3<$4;$3++){$1[$3]={key:$2[$3].getValue(),
item:$2[$3]};
}$1.sort(this._sortItemsCompare);
if($0){$1.reverse();
}
for(var $3=0;$3<$4;$3++){this.addAt($1[$3].item,
$3);
}}},
destruct:function(){this._disposeObjects("_manager");
}});




/* ID: qx.ui.form.ListItem */
qx.Class.define("qx.ui.form.ListItem",
{extend:qx.ui.basic.Atom,
construct:function($0,
$1,
$2){arguments.callee.base.call(this,
$0,
$1);
if($2!=null){this.setValue($2);
}this.addEventListener("dblclick",
this._ondblclick);
this.initMinWidth();
},
events:{"action":"qx.event.type.Event"},
properties:{appearance:{refine:true,
init:"list-item"},
minWidth:{refine:true,
init:"auto"},
width:{refine:true,
init:null},
allowStretchX:{refine:true,
init:true},
value:{check:"String",
event:"changeValue"}},
members:{handleStateChange:function(){if(this.hasState("lead")){this.setStyleProperty("MozOutline",
"1px dotted invert");
this.setStyleProperty("outline",
"1px dotted invert");
}else{this.removeStyleProperty("MozOutline");
this.setStyleProperty("outline",
"0px none");
}},
_applyStateStyleFocus:function($0){},
matchesString:function($0){$0=String($0);
return $0!=""&&this.getLabel().toString().toLowerCase().indexOf($0.toLowerCase())==0;
},
matchesStringExact:function($0){$0=String($0);
return $0!=""&&this.getLabel().toString().toLowerCase()==String($0).toLowerCase();
},
matchesValue:function($0){$0=String($0);
return $0!=""&&this.getValue().toLowerCase().indexOf($0.toLowerCase())==0;
},
matchesValueExact:function($0){$0=String($0);
return $0!=""&&this.getValue().toLowerCase()==String($0).toLowerCase();
},
_ondblclick:function($0){var $1=this.getCommand();
if($1){$1.execute();
}}}});




/* ID: qx.ui.form.TextArea */
qx.Class.define("qx.ui.form.TextArea",
{extend:qx.ui.form.TextField,
properties:{appearance:{refine:true,
init:"text-area"},
allowStretchY:{refine:true,
init:true},
spellCheck:{refine:true,
init:true},
wrap:{check:"Boolean",
init:true,
apply:"_applyWrap"}},
members:{_inputTag:"textarea",
_inputType:null,
_inputOverflow:"auto",
_applyElement:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
this._styleWrap();
},
_applyWrap:function($0,
$1){this._styleWrap();
},
_styleWrap:qx.core.Variant.select("qx.client",
{"mshtml":function(){if(this._inputElement){this._inputElement.wrap=this.getWrap()?"soft":"off";
}},
"gecko":function(){if(this._inputElement){var $0=this.getWrap()?"soft":"off";
var $1=this.getWrap()?"":"auto";
this._inputElement.setAttribute('wrap',
$0);
this._inputElement.style.overflow=$1;
}},
"default":function(){if(this._inputElement){this._inputElement.style.whiteSpace=this.getWrap()?"normal":"nowrap";
}}}),
_computePreferredInnerHeight:function(){return 60;
}}});




/* ID: qx.ui.layout.GridLayout */
qx.Class.define("qx.ui.layout.GridLayout",
{extend:qx.ui.core.Parent,
construct:function(){arguments.callee.base.call(this);
this._columnData=[];
this._rowData=[];
this._spans=[];
},
properties:{horizontalSpacing:{check:"Integer",
init:0,
apply:"_applyHorizontalSpacing",
themeable:true},
verticalSpacing:{check:"Integer",
init:0,
apply:"_applyVerticalSpacing",
themeable:true},
horizontalChildrenAlign:{check:["left",
"center",
"right"],
init:"left",
apply:"_applyHorizontalChildrenAlign",
themeable:true},
verticalChildrenAlign:{check:["top",
"middle",
"bottom"],
init:"top",
apply:"_applyVerticalChildrenAlign",
themeable:true},
cellPaddingTop:{check:"Integer",
nullable:true},
cellPaddingRight:{check:"Integer",
nullable:true,
themeable:true},
cellPaddingBottom:{check:"Integer",
nullable:true,
themeable:true},
cellPaddingLeft:{check:"Integer",
nullable:true,
themeable:true}},
members:{_applyHorizontalSpacing:function($0,
$1){this.addToQueueRuntime("horizontalSpacing");
this._invalidatePreferredInnerDimensions();
},
_applyVerticalSpacing:function($0,
$1){this.addToQueueRuntime("verticalSpacing");
this._invalidatePreferredInnerDimensions();
},
_applyHorizontalChildrenAlign:function($0,
$1){this.addToQueueRuntime("horizontalChildrenAlign");
this._invalidatePreferredInnerDimensions();
},
_applyVerticalChildrenAlign:function($0,
$1){this.addToQueueRuntime("verticalChildrenAlign");
this._invalidatePreferredInnerDimensions();
},
_createLayoutImpl:function(){return new qx.ui.layout.impl.GridLayoutImpl(this);
},
add:function($0,
$1,
$2){$0._col=$1;
$0._row=$2;
if(this.isFillCell($1,
$2)){throw new Error("Could not insert child "+$0+" into a fill cell: "+$1+"x"+$2);
}arguments.callee.base.call(this,
$0);
},
_syncDataFields:function($0,
$1,
$2){if($2>$1){for(var $3=$1;$3<$2;$3++){$0[$3]={};
}}else if($1>$2){$0.splice($2,
$1-$2);
}},
_columnCount:0,
setColumnCount:function($0){this._columnCount=$0;
this._syncColumnDataFields();
},
getColumnCount:function(){return this._columnCount;
},
addColumn:function(){this._columnCount++;
this._syncColumnDataFields();
},
removeColumn:function(){if(this._columnCount>0){this._columnCount--;
this._syncColumnDataFields();
}},
_syncColumnDataFields:function(){var $0=this._columnData;
var $1=$0.length;
var $2=this._columnCount;
this._syncDataFields($0,
$1,
$2);
},
_rowCount:0,
setRowCount:function($0){this._rowCount=$0;
this._syncRowDataFields();
},
getRowCount:function(){return this._rowCount;
},
addRow:function(){this._rowCount++;
this._syncRowDataFields();
},
removeRow:function(){if(this._rowCount>0){this._rowCount--;
this._syncRowDataFields();
}},
_syncRowDataFields:function(){var $0=this._rowData;
var $1=$0.length;
var $2=this._rowCount;
this._syncDataFields($0,
$1,
$2);
},
_getColumnProperty:function($0,
$1){try{return this._columnData[$0][$1]||null;
}catch(ex){this.error("Error while getting column property ("+$0+"|"+$1+")",
ex);
return null;
}},
_setupColumnProperty:function($0,
$1,
$2){this._columnData[$0][$1]=$2;
this._invalidateColumnLayout();
},
_removeColumnProperty:function($0,
$1,
$2){delete this._columnData[$0][$1];
this._invalidateColumnLayout();
},
_invalidateColumnLayout:function(){if(!this._initialLayoutDone||!this._isDisplayable){return;
}this.forEachVisibleChild(function(){this.addToQueue("width");
});
},
_getRowProperty:function($0,
$1){try{return this._rowData[$0][$1]||null;
}catch(ex){this.error("Error while getting row property ("+$0+"|"+$1+")",
ex);
return null;
}},
_setupRowProperty:function($0,
$1,
$2){this._rowData[$0][$1]=$2;
this._invalidateRowLayout();
},
_removeRowProperty:function($0,
$1,
$2){delete this._rowData[$0][$1];
this._invalidateRowLayout();
},
_invalidateRowLayout:function(){if(!this._initialLayoutDone||!this._isDisplayable){return;
}this.forEachVisibleChild(function(){this.addToQueue("height");
});
},
setColumnWidth:function($0,
$1){this._setupColumnProperty($0,
"widthValue",
$1);
var $2=qx.ui.core.Parent.prototype._evalUnitsPixelPercentAutoFlex($1);
this._setupColumnProperty($0,
"widthType",
$2);
var $3,
$4;
switch($2){case qx.ui.core.Widget.TYPE_PIXEL:$3=$4=Math.round($1);
break;
case qx.ui.core.Widget.TYPE_PERCENT:case qx.ui.core.Widget.TYPE_FLEX:$3=parseFloat($1);
$4=null;
break;
case qx.ui.core.Widget.TYPE_AUTO:$3=$4=null;
break;
default:$3=$4=null;
}this._setupColumnProperty($0,
"widthParsed",
$3);
this._setupColumnProperty($0,
"widthComputed",
$4);
},
setRowHeight:function($0,
$1){this._setupRowProperty($0,
"heightValue",
$1);
var $2=qx.ui.core.Widget.prototype._evalUnitsPixelPercentAutoFlex($1);
this._setupRowProperty($0,
"heightType",
$2);
var $3,
$4;
switch($2){case qx.ui.core.Widget.TYPE_PIXEL:$3=$4=Math.round($1);
break;
case qx.ui.core.Widget.TYPE_PERCENT:case qx.ui.core.Widget.TYPE_FLEX:$3=parseFloat($1);
$4=null;
break;
case qx.ui.core.Widget.TYPE_AUTO:$3=$4=null;
break;
default:$3=$4=null;
}this._setupRowProperty($0,
"heightParsed",
$3);
this._setupRowProperty($0,
"heightComputed",
$4);
},
getColumnBoxWidth:function($0){var $1=this._getColumnProperty($0,
"widthComputed");
if($1!=null){return $1;
}var $2=this._getColumnProperty($0,
"widthType");
var $3=this._getColumnProperty($0,
"widthParsed");
var $1=null;
switch($2){case qx.ui.core.Widget.TYPE_PIXEL:$1=Math.max(0,
$3);
break;
case qx.ui.core.Widget.TYPE_PERCENT:$1=this.getInnerWidth()*Math.max(0,
$3)*0.01;
break;
case qx.ui.core.Widget.TYPE_AUTO:$1=null;
break;
case qx.ui.core.Widget.TYPE_FLEX:$1=null;
break;
}this._setupColumnProperty($0,
"widthComputed",
$1);
return $1;
},
getRowBoxHeight:function($0){var $1=this._getRowProperty($0,
"heightComputed");
if($1!=null){return $1;
}var $2=this._getRowProperty($0,
"heightType");
var $3=this._getRowProperty($0,
"heightParsed");
var $1=null;
switch($2){case qx.ui.core.Widget.TYPE_PIXEL:$1=Math.max(0,
$3);
break;
case qx.ui.core.Widget.TYPE_PERCENT:$1=this.getInnerHeight()*Math.max(0,
$3)*0.01;
break;
case qx.ui.core.Widget.TYPE_AUTO:$1=null;
break;
case qx.ui.core.Widget.TYPE_FLEX:$1=null;
break;
}this._setupRowProperty($0,
"heightComputed",
$1);
return $1;
},
getComputedCellPaddingLeft:function($0,
$1){return this.getColumnPaddingLeft($0)||this.getRowPaddingLeft($1)||this.getCellPaddingLeft()||0;
},
getComputedCellPaddingRight:function($0,
$1){return this.getColumnPaddingRight($0)||this.getRowPaddingRight($1)||this.getCellPaddingRight()||0;
},
getComputedCellPaddingTop:function($0,
$1){return this.getRowPaddingTop($1)||this.getColumnPaddingTop($0)||this.getCellPaddingTop()||0;
},
getComputedCellPaddingBottom:function($0,
$1){return this.getRowPaddingBottom($1)||this.getColumnPaddingBottom($0)||this.getCellPaddingBottom()||0;
},
getColumnInnerWidth:function($0,
$1){return this.getColumnBoxWidth($0)-this.getComputedCellPaddingLeft($0,
$1)-this.getComputedCellPaddingRight($0,
$1);
},
getRowInnerHeight:function($0,
$1){return this.getRowBoxHeight($1)-this.getComputedCellPaddingTop($0,
$1)-this.getComputedCellPaddingBottom($0,
$1);
},
setColumnHorizontalAlignment:function($0,
$1){this._setupColumnProperty($0,
"horizontalAlignment",
$1);
},
setColumnVerticalAlignment:function($0,
$1){this._setupColumnProperty($0,
"verticalAlignment",
$1);
},
setRowHorizontalAlignment:function($0,
$1){this._setupRowProperty($0,
"horizontalAlignment",
$1);
},
setRowVerticalAlignment:function($0,
$1){this._setupRowProperty($0,
"verticalAlignment",
$1);
},
getColumnHorizontalAlignment:function($0){return this._getColumnProperty($0,
"horizontalAlignment");
},
getColumnVerticalAlignment:function($0){return this._getColumnProperty($0,
"verticalAlignment");
},
getRowHorizontalAlignment:function($0){return this._getRowProperty($0,
"horizontalAlignment");
},
getRowVerticalAlignment:function($0){return this._getRowProperty($0,
"verticalAlignment");
},
setColumnPaddingTop:function($0,
$1){this._setupColumnProperty($0,
"paddingTop",
$1);
},
setColumnPaddingRight:function($0,
$1){this._setupColumnProperty($0,
"paddingRight",
$1);
},
setColumnPaddingBottom:function($0,
$1){this._setupColumnProperty($0,
"paddingBottom",
$1);
},
setColumnPaddingLeft:function($0,
$1){this._setupColumnProperty($0,
"paddingLeft",
$1);
},
setRowPaddingTop:function($0,
$1){this._setupRowProperty($0,
"paddingTop",
$1);
},
setRowPaddingRight:function($0,
$1){this._setupRowProperty($0,
"paddingRight",
$1);
},
setRowPaddingBottom:function($0,
$1){this._setupRowProperty($0,
"paddingBottom",
$1);
},
setRowPaddingLeft:function($0,
$1){this._setupRowProperty($0,
"paddingLeft",
$1);
},
getColumnPaddingTop:function($0){return this._getColumnProperty($0,
"paddingTop");
},
getColumnPaddingRight:function($0){return this._getColumnProperty($0,
"paddingRight");
},
getColumnPaddingBottom:function($0){return this._getColumnProperty($0,
"paddingBottom");
},
getColumnPaddingLeft:function($0){return this._getColumnProperty($0,
"paddingLeft");
},
getRowPaddingTop:function($0){return this._getRowProperty($0,
"paddingTop");
},
getRowPaddingRight:function($0){return this._getRowProperty($0,
"paddingRight");
},
getRowPaddingBottom:function($0){return this._getRowProperty($0,
"paddingBottom");
},
getRowPaddingLeft:function($0){return this._getRowProperty($0,
"paddingLeft");
},
_changeInnerWidth:function($0,
$1){for(var $2=0,
$3=this.getColumnCount();$2<$3;$2++){if(this._getColumnProperty($2,
"widthType")==qx.ui.core.Widget.TYPE_PERCENT){this._setupColumnProperty($2,
"widthComputed",
null);
}}arguments.callee.base.call(this,
$0,
$1);
},
_changeInnerHeight:function($0,
$1){for(var $2=0,
$3=this.getRowCount();$2<$3;$2++){if(this._getRowProperty($2,
"heightType")==qx.ui.core.Widget.TYPE_PERCENT){this._setupRowProperty($2,
"heightComputed",
null);
}}arguments.callee.base.call(this,
$0,
$1);
},
getInnerWidthForChild:function($0){return this._getColumnProperty($0._col,
"widthComputed");
},
getInnerHeightForChild:function($0){return this._getRowProperty($0._row,
"heightComputed");
},
mergeCells:function($0,
$1,
$2,
$3){var $4=this._spans;
var $5=$0+$2-1;
var $6=$1+$3-1;
if(this._collidesWithSpans($0,
$1,
$5,
$6)){this.debug("Span collision detected!");
return false;
}$4.push({startCol:$0,
startRow:$1,
endCol:$5,
endRow:$6,
colLength:$2,
rowLength:$3});
return true;
},
hasSpans:function(){return this._spans.length>0;
},
getSpanEntry:function($0,
$1){for(var $2=0,
$3=this._spans,
$4=$3.length,
$5;$2<$4;$2++){$5=$3[$2];
if($0>=$5.startCol&&$0<=$5.endCol&&$1>=$5.startRow&&$1<=$5.endRow){return $5;
}}return null;
},
isSpanStart:function($0,
$1){for(var $2=0,
$3=this._spans,
$4=$3.length,
$5;$2<$4;$2++){$5=$3[$2];
if($5.startCol==$0&&$5.startRow==$1){return true;
}}return false;
},
isSpanCell:function($0,
$1){for(var $2=0,
$3=this._spans,
$4=$3.length,
$5;$2<$4;$2++){$5=$3[$2];
if($0>=$5.startCol&&$0<=$5.endCol&&$1>=$5.startRow&&$1<=$5.endRow){return true;
}}return false;
},
isFillCell:function($0,
$1){for(var $2=0,
$3=this._spans,
$4=$3.length,
$5;$2<$4;$2++){$5=$3[$2];
if($0>=$5.startCol&&$0<=$5.endCol&&$1>=$5.startRow&&$1<=$5.endRow&&($0>$5.startCol||$1>$5.startRow)){return true;
}}return false;
},
_collidesWithSpans:function($0,
$1,
$2,
$3){for(var $4=0,
$5=this._spans,
$6=$5.length,
$7;$4<$6;$4++){$7=$5[$4];
if($2>=$7.startCol&&$0<=$7.endCol&&$3>=$7.startRow&&$1<=$7.endRow){return true;
}}return false;
}},
destruct:function(){this._disposeFields("_columnData",
"_rowData",
"_spans");
}});




/* ID: qx.ui.layout.impl.GridLayoutImpl */
qx.Class.define("qx.ui.layout.impl.GridLayoutImpl",
{extend:qx.ui.layout.impl.LayoutImpl,
construct:function($0){arguments.callee.base.call(this,
$0);
},
members:{computeChildBoxWidth:function($0){var $1=this.getWidget();
var $2=$1.getColumnInnerWidth($0._col,
$0._row);
if($1.isSpanStart($0._col,
$0._row)){var $3=$1.getSpanEntry($0._col,
$0._row);
for(var $4=1;$4<$3.colLength;$4++){$2+=$1.getComputedCellPaddingRight($0._col+$4-1,
$0._row);
$2+=$1.getComputedCellPaddingLeft($0._col+$4,
$0._row);
$2+=$1.getHorizontalSpacing();
$2+=$1.getColumnInnerWidth($0._col+$4,
$0._row);
}}return $0.getAllowStretchX()?$2:Math.min($0.getWidthValue(),
$2);
},
computeChildBoxHeight:function($0){var $1=this.getWidget();
var $2=$1.getRowInnerHeight($0._col,
$0._row);
if($1.isSpanStart($0._col,
$0._row)){var $3=$1.getSpanEntry($0._col,
$0._row);
for(var $4=1;$4<$3.rowLength;$4++){$2+=$1.getComputedCellPaddingBottom($0._col,
$0._row+$4-1);
$2+=$1.getComputedCellPaddingTop($0._col,
$0._row+$4);
$2+=$1.getVerticalSpacing();
$2+=$1.getRowInnerHeight($0._col,
$0._row+$4);
}}return $0.getAllowStretchY()?$2:Math.min($0.getHeightValue(),
$2);
},
computeChildrenNeededWidth:function(){var $0=this.getWidget();
var $1=$0.getHorizontalSpacing();
var $2=-$1;
for(var $3=0,
$4=$0.getColumnCount();$3<$4;$3++){$2+=$0.getColumnBoxWidth($3)+$1;
}return $2;
},
computeChildrenNeededHeight:function(){var $0=this.getWidget();
var $1=$0.getVerticalSpacing();
var $2=-$1;
for(var $3=0,
$4=$0.getRowCount();$3<$4;$3++){$2+=$0.getRowBoxHeight($3)+$1;
}return $2;
},
updateChildOnInnerWidthChange:function($0){$0._recomputePercentX();
$0.addToLayoutChanges("locationX");
return true;
},
updateChildOnInnerHeightChange:function($0){$0._recomputePercentY();
$0.addToLayoutChanges("locationY");
return true;
},
layoutChild:function($0,
$1){this.layoutChild_sizeX($0,
$1);
this.layoutChild_sizeY($0,
$1);
this.layoutChild_sizeLimitX($0,
$1);
this.layoutChild_sizeLimitY($0,
$1);
this.layoutChild_marginX($0,
$1);
this.layoutChild_marginY($0,
$1);
this.layoutChild_locationX($0,
$1);
this.layoutChild_locationY($0,
$1);
},
layoutChild_sizeX:function($0,
$1){$0._renderRuntimeWidth($0.getBoxWidth());
},
layoutChild_sizeY:function($0,
$1){$0._renderRuntimeHeight($0.getBoxHeight());
},
layoutChild_locationX:function($0,
$1){var $2=this.getWidget();
var $3=$2.getHorizontalSpacing();
var $4=$2.getPaddingLeft()+$2.getComputedCellPaddingLeft($0._col,
$0._row);
for(var $5=0;$5<$0._col;$5++){$4+=$2.getColumnBoxWidth($5)+$3;
}
switch($0.getHorizontalAlign()||$2.getColumnHorizontalAlignment($0._col)||$2.getRowHorizontalAlignment($0._row)||$2.getHorizontalChildrenAlign()){case "center":$4+=Math.round(($2.getColumnInnerWidth($0._col,
$0._row)-$0.getBoxWidth())/2);
break;
case "right":$4+=$2.getColumnInnerWidth($0._col,
$0._row)-$0.getBoxWidth();
break;
}$0._renderRuntimeLeft($4);
},
layoutChild_locationY:function($0,
$1){var $2=this.getWidget();
var $3=$2.getVerticalSpacing();
var $4=$2.getPaddingTop()+$2.getComputedCellPaddingTop($0._col,
$0._row);
for(var $5=0;$5<$0._row;$5++){$4+=$2.getRowBoxHeight($5)+$3;
}
switch($0.getVerticalAlign()||$2.getRowVerticalAlignment($0._row)||$2.getColumnVerticalAlignment($0._col)||$2.getVerticalChildrenAlign()){case "middle":$4+=Math.round(($2.getRowInnerHeight($0._col,
$0._row)-$0.getBoxHeight())/2);
break;
case "bottom":$4+=$2.getRowInnerHeight($0._col,
$0._row)-$0.getBoxHeight();
break;
}$0._renderRuntimeTop($4);
}}});




/* ID: qx.ui.form.RadioButton */
qx.Class.define("qx.ui.form.RadioButton",
{extend:qx.ui.form.CheckBox,
construct:function($0,
$1,
$2,
$3){arguments.callee.base.call(this,
$0,
$1,
$2,
$3);
this.addEventListener("keypress",
this._onkeypress);
},
properties:{appearance:{refine:true,
init:"radio-button"},
manager:{check:"qx.ui.selection.RadioManager",
nullable:true,
apply:"_applyManager"}},
members:{INPUT_TYPE:"radio",
_applyChecked:function($0,
$1){if(this._iconObject){this._iconObject.setChecked($0);
}var $2=this.getManager();
if($2){$2.handleItemChecked(this,
$0);
}},
_applyManager:function($0,
$1){if($1){$1.remove(this);
}
if($0){$0.add(this);
}},
_applyName:function($0,
$1){if(this._iconObject){this._iconObject.setName($0);
}
if(this.getManager()){this.getManager().setName($0);
}},
_applyValue:function($0,
$1){if(this.isCreated()&&this._iconObject){this._iconObject.setValue($0);
}},
_onkeydown:function($0){if($0.getKeyIdentifier()=="Enter"&&!$0.isAltPressed()){this.setChecked(true);
}},
_onkeypress:function($0){switch($0.getKeyIdentifier()){case "Left":case "Up":qx.event.handler.FocusHandler.mouseFocus=false;
qx.event.handler.FocusHandler.mouseFocus=false;
return this.getManager()?this.getManager().selectPrevious(this):true;
case "Right":case "Down":qx.event.handler.FocusHandler.mouseFocus=false;
return this.getManager()?this.getManager().selectNext(this):true;
}},
_onclick:function($0){this.setChecked(true);
},
_onkeyup:function($0){if($0.getKeyIdentifier()=="Space"){this.setChecked(true);
}}}});




/* ID: spagobi.ui.Form */
qx.Class.define("spagobi.ui.Form",
{extend:qx.ui.layout.VerticalBoxLayout,
construct:function($0){arguments.callee.base.call(this);
this.setSpacing(5);
this.dataMappings=[];
if($0){for(var $1=0;$1<$0.length;$1++){this.addInputField($0[$1]);
}}},
members:{dataObject:{},
dataMappings:[],
getData:function(){for(prop in this.dataMappings){if(this.dataObject[prop]!=undefined){this.dataObject[prop]=this.getInputFieldValue(prop);
}}return this.dataObject;
},
setData:function($0){for(prop in $0){this.setInputFieldValue(prop,
$0[prop]);
}this.dataObject=$0;
},
getInputField:function($0){return this.dataMappings[$0];
},
getInputFieldValue:function($0){var $1;
if(!this.getInputField($0))return null;
if(this.getInputField($0).getUserData('type')==='text'){$1=this.getInputField($0).getUserData('field').getValue();
}else if(this.getInputField($0).getUserData('type')==='combo'){$1=this.getInputField($0).getUserData('field').getValue();
}else if(this.getInputField($0).getUserData('type')==='flag'){$1=this.getInputField($0).getUserData('field').isChecked();
}else if(this.getInputField($0).getUserData('type')==='form'){$1=this.getInputField($0).getUserData('field').getData();
}else if(this.getInputField($0).getUserData('type')==='formList'){$1=this.getInputField($0).getUserData('field').getData();
}else if(this.getInputField($0).getUserData('type')==='textarea'){$1=this.getInputField($0).getUserData('field').getValue();
}else if(this.getInputField($0).getUserData('type')==='check'){$1=this.getInputField($0).getUserData('field').getData();
}else if(this.getInputField($0).getUserData('type')==='radio'){var $2=this.getInputField($0).getUserData('field');
var $3=$2.getChildren();
for(i=0;i<$3.length;i++){if($3[i].getChecked()==true){$1=$3[i].getLabel();
}}}return $1;
},
setInputFieldValue:function($0,
$1){if(!this.getInputField($0)){return;
}
if(this.getInputField($0).getUserData('type')==='text'){this.getInputField($0).getUserData('field').setValue($1);
}else if(this.getInputField($0).getUserData('type')==='combo'){this.getInputField($0).getUserData('field').setValue($1);
}else if(this.getInputField($0).getUserData('type')==='flag'){this.getInputField($0).getUserData('field').setChecked($1);
}else if(this.getInputField($0).getUserData('type')==='form'){this.getInputField($0).getUserData('field').setData($1);
}else if(this.getInputField($0).getUserData('type')==='formList'){this.getInputField($0).getUserData('field').setData($1);
}else if(this.getInputField($0).getUserData('type')==='textarea'){this.getInputField($0).getUserData('field').setValue($1);
}else if(this.getInputField($0).getUserData('type')==='check'){this.getInputField($0).getUserData('field').setData($1);
}else if(this.getInputField($0).getUserData('type')==='radio'){var $2=this.getInputField($0).getUserData('field');
var $3=$2.getChildren();
for(i=0;i<$3.length;i++){if($3[i].getLabel()==$1){$3[i].setChecked(true);
break;
}}}},
addInputField:function($0){if($0.type==='text'){inputField=spagobi.commons.WidgetUtils.createInputTextField($0);
inputField.setUserData('type',
'text');
}else if($0.type==='combo'){inputField=spagobi.commons.WidgetUtils.createInputComboBox($0);
inputField.setUserData('type',
'combo');
}else if($0.type==='flag'){inputField=spagobi.commons.WidgetUtils.createInputFlagBox($0);
inputField.setUserData('type',
'flag');
}else if($0.type==='form'){inputField=spagobi.commons.WidgetUtils.createInputForm($0);
inputField.setUserData('type',
'form');
}else if($0.type==='formList'){inputField=spagobi.commons.WidgetUtils.createInputFormList($0);
inputField.setUserData('type',
'formList');
}else if($0.type==='textarea'){inputField=spagobi.commons.WidgetUtils.createInputTextArea($0);
inputField.setUserData('type',
'textarea');
}else if($0.type==='check'){inputField=spagobi.commons.WidgetUtils.createInputCheckBox($0);
inputField.setUserData('type',
'check');
}else if($0.type==='radio'){inputField=spagobi.commons.WidgetUtils.createInputRadio($0);
inputField.setUserData('type',
'radio');
}this.dataMappings[$0.dataIndex]=inputField;
this.add(inputField);
}},
statics:{}});




/* ID: spagobi.ui.FormList */
qx.Class.define("spagobi.ui.FormList",
{extend:spagobi.ui.Form,
construct:function($0){arguments.callee.base.call(this);
this._instances=[];
this.setConfig($0);
this._tabView=new qx.ui.pageview.tabview.TabView();
this.addInstance();
this.add(this._tabView);
},
members:{child:undefined,
atom:undefined,
_config:undefined,
_instances:undefined,
_tabView:undefined,
_tabButton:undefined,
_tabcount:0,
_formCount:0,
_checkObject:{_checkedFields:[],
_subFormid:[]},
_currentSubform:undefined,
str:"",
getConfig:function(){return _config;
},
setConfig:function($0){this._config=$0;
},
addInstance:function($0){var $1;
if(typeof (this._config)=='object'){$1=new spagobi.ui.Form(this._config);
}else{$1=new this._config();
}if($0){$1.setData($0);
}this._currentSubform=$1;
var $2=new qx.ui.pageview.tabview.Button('tab-'+this._tabcount);
this._tabcount++;
$2.setChecked(true);
$2.setShowCloseButton(true);
this._tabView.getBar().add($2);
var $3=new qx.ui.pageview.tabview.Page($2);
this._tabView.getPane().add($3);
this._tabView.getPane().setDimension('auto',
'auto');
$3.add($1);
this._tabView.getPane().setDimension('auto',
'auto');
this._instances[this._instances.length]=$1;
this._dummyFunction();
$2.addEventListener("changeChecked",
this._changeSubForm,
this);
$2.addEventListener("closetab",
this._closeSubForm,
this);
if(this._instances.length>2){var $4=this._tabView.getBar().getChildren();
var $5=$4.indexOf(this._tabButton);
var $6=$4.indexOf($2);
this._currentSubform=this._instances[$5];
var $7=this._instances[$6];
if(this._currentSubform.getInputField('mychecklist')!=undefined){this._checkbox(this._currentSubform,
$7,
$5,
$6);
}}this._tabButton=$2;
},
_dummyFunction:function(){var $0=new qx.ui.pageview.tabview.Button('');
$0.setShowCloseButton(true);
$0.setCloseButtonImage("icon/16/actions/edit-add.png");
this._tabView.getBar().add($0);
var $1=new qx.ui.pageview.tabview.Page($0);
this._tabView.getPane().add($1);
$0.addEventListener("changeChecked",
this._dummytab,
this);
$1.add();
this._instances[this._instances.length]={};
},
_dummytab:function($0){if($0.getTarget().isChecked()==true){this.deleteDataAt(this._instances.length-1);
this._tabButton.setShowCloseButton(false);
this.addInstance();
}},
_changeSubForm:function($0){var $1=$0.getTarget();
if($1.isChecked()==true){this._tabButton.setShowCloseButton(false);
$1.setShowCloseButton(true);
var $2=this._tabView.getBar().getChildren();
var $3=$2.indexOf(this._tabButton);
var $4=$2.indexOf($1);
this._currentSubform=this._instances[$3];
var $5=this._instances[$4];
if(this._currentSubform.getInputField('mychecklist')!=undefined){this._checkbox(this._currentSubform,
$5,
$3,
$4);
}this._tabButton=$1;
}},
_closeSubForm:function($0){if($0.getTarget().isChecked()==true){var $1=$0.getData();
var $2=this._tabView.getBar().getChildren();
var $3=$2.length;
var $4=$2.indexOf($1);
if($3>2){if($4<$3-2){$2[$4+1].setChecked(true);
this._tabButton=$2[$4+1];
}else{$2[$4-1].setChecked(true);
this._tabButton=$2[$4-1];
}
if(this._currentSubform.getInputField('mychecklist')!=undefined){this._checklistAllow($1,
$4);
}this.deleteDataAt($4);
}else{alert("Last Tab won't be removed!");
}}},
getData:function(){for(var $0=0;$0<this._instances.length;$0++){this.dataObject[$0]=this._instances[$0].getData();
}return this.dataObject;
},
deleteData:function(){var $0=this._tabView.getPane().getChildren();
var $1=$0.length;
var $2=0;
while($2<$1){this.deleteDataAt(0);
$2++;
}this.dataObject=[];
this._instances=[];
},
deleteDataAt:function($0){var $1=this._tabView.getPane().getChildren();
var $2=$1[$0];
var $3=this._tabView.getBar().getChildren();
var $4=$3.length;
$3[$0].getManager().remove($3[$0]);
this._tabView.getBar().remove($3[$0]);
this._tabView.getPane().remove($2);
$2.dispose();
for(i=$0;i<this._instances.length-1;i++){this._instances[i]=this._instances[i+1];
}this._instances.length--;
},
setData:function($0){this.deleteData();
for(var $1=0;$1<$0.length;$1++){this.addInstance($0[$1]);
}this.dataObject=$0;
},
_checkbox:function($0,
$1,
$2,
$3){var $4=$0.getInputField('mychecklist');
if($4.getUserData('type')=='check'){var $5=$4.getUserData('field').getChildren();
var $6=$1.getInputField('mychecklist').getUserData('field').getChildren();
for(i=0;i<$5.length;i++){if($5[i].getUserData('field').getChecked()==true){if(this._checkObject._checkedFields.length==0){this._checkObject._checkedFields[this._checkObject._checkedFields.length]=$5[i].getUserData('label').getText();
this._checkObject._subFormid[this._checkObject._subFormid.length]=$2;
}else{var $7=0;
for(j=0;j<this._checkObject._checkedFields.length;j++){if(this._checkObject._subFormid[j]==$2&&this._checkObject._checkedFields[j]==$5[i].getUserData('label').getText()){$7=1;
break;
}}
if($7==0){this._checkObject._checkedFields[this._checkObject._checkedFields.length]=$5[i].getUserData('label').getText();
this._checkObject._subFormid[this._checkObject._subFormid.length]=$2;
}}}for(j=0;j<this._checkObject._checkedFields.length;j++){if(this._checkObject._subFormid[j]==$2){for(ii=0;ii<$5.length;ii++){if(this._checkObject._checkedFields[j]==$5[ii].getUserData('label').getText()&&$5[ii].getUserData('field').getChecked()==false){for(cnt=0;cnt<this._instances.length-1;cnt++){var $8=this._instances[cnt];
var $9=$8.getInputField('mychecklist');
var $a=$9.getUserData('field').getChildren();
for(l=0;l<$a.length;l++){if($a[l].getUserData('label').getText()==this._checkObject._checkedFields[j]){$a[l].getUserData('field').setEnabled(true);
}}}for(k=j;k<this._checkObject._checkedFields.length-1;k++){this._checkObject._checkedFields[k]=this._checkObject._checkedFields[k+1];
this._checkObject._subFormid[k]=this._checkObject._subFormid[k+1];
}this._checkObject._checkedFields.length--;
this._checkObject._subFormid.length--;
}}}}}for(i=0;i<this._checkObject._checkedFields.length;i++){if(this._checkObject._subFormid[i]!=$3){for(j=0;j<$6.length;j++){if(this._checkObject._checkedFields[i]==$6[j].getUserData('label').getText()){$6[j].getUserData('field').setEnabled(false);
break;
}}}}}},
_checklistAllow:function($0,
$1){var $2=this._instances[$1];
var $3=$2.getInputField('mychecklist');
var $4=$3.getUserData('field').getChildren();
var $5=[];
for(i=0;i<$4.length;i++){if($4[i].getUserData('field').getChecked()==true){$5[$5.length]=$4[i].getUserData('label').getText();
}}
for(j=0;j<$5.length;j++){for(i=0;i<this._checkObject._checkedFields.length;i++){if(this._checkObject._subFormid[i]==$1){if(this._checkObject._checkedFields[i]==$5[j]){for(k=i;k<this._checkObject._checkedFields.length-1;k++){this._checkObject._checkedFields[k]=this._checkObject._checkedFields[k+1];
this._checkObject._subFormid[k]=this._checkObject._subFormid[k+1];
}this._checkObject._checkedFields.length--;
this._checkObject._subFormid.length--;
}}}}
for(cnt=0;cnt<this._instances.length-1;cnt++){var $6=this._instances[cnt];
if($6!=$2){var $7=$6.getInputField('mychecklist');
var $8=$7.getUserData('field').getChildren();
for(j=0;j<$5.length;j++){for(l=0;l<$8.length;l++){if($8[l].getUserData('label').getText()==$5[j]){$8[l].getUserData('field').setEnabled(true);
break;
}}}}}}}});




/* ID: qx.ui.pageview.AbstractPageView */
qx.Class.define("qx.ui.pageview.AbstractPageView",
{type:"abstract",
extend:qx.ui.layout.BoxLayout,
construct:function($0,
$1){arguments.callee.base.call(this);
this._bar=new $0;
this._pane=new $1;
this.add(this._bar,
this._pane);
},
members:{getPane:function(){return this._pane;
},
getBar:function(){return this._bar;
}},
destruct:function(){this._disposeObjects("_bar",
"_pane");
}});




/* ID: qx.ui.pageview.tabview.TabView */
qx.Class.define("qx.ui.pageview.tabview.TabView",
{extend:qx.ui.pageview.AbstractPageView,
construct:function(){arguments.callee.base.call(this,
qx.ui.pageview.tabview.Bar,
qx.ui.pageview.tabview.Pane);
},
properties:{appearance:{refine:true,
init:"tab-view"},
orientation:{refine:true,
init:"vertical"},
alignTabsToLeft:{check:"Boolean",
init:true,
apply:"_applyAlignTabsToLeft"},
placeBarOnTop:{check:"Boolean",
init:true,
apply:"_applyPlaceBarOnTop"}},
members:{_applyAlignTabsToLeft:function($0,
$1){var $2=this._bar;
$2.setHorizontalChildrenAlign($0?"left":"right");
$2._addChildrenToStateQueue();
},
_applyPlaceBarOnTop:function($0,
$1){var $2=this._bar;
if($0){$2.moveSelfToBegin();
}else{$2.moveSelfToEnd();
}$2._addChildrenToStateQueue();
}}});




/* ID: qx.ui.pageview.AbstractBar */
qx.Class.define("qx.ui.pageview.AbstractBar",
{type:"abstract",
extend:qx.ui.layout.BoxLayout,
construct:function(){arguments.callee.base.call(this);
this._manager=new qx.ui.selection.RadioManager;
this.addEventListener("mousewheel",
this._onmousewheel);
},
members:{getManager:function(){return this._manager;
},
_lastDate:(new Date(0)).valueOf(),
_onmousewheel:function($0){var $1=(new Date).valueOf();
if(($1-50)<this._lastDate){return;
}this._lastDate=$1;
var $2=this.getManager();
var $3=$2.getEnabledItems();
var $4=$3.indexOf($2.getSelected());
if(this.getWheelDelta($0)>0){var $5=$3[$4+1];
if(!$5){$5=$3[0];
}}else if($4>0){var $5=$3[$4-1];
if(!$5){$5=$3[0];
}}else{$5=$3[$3.length-1];
}$2.setSelected($5);
},
getWheelDelta:function($0){return $0.getWheelDelta();
}},
destruct:function(){this._disposeObjects("_manager");
}});




/* ID: qx.ui.pageview.tabview.Bar */
qx.Class.define("qx.ui.pageview.tabview.Bar",
{extend:qx.ui.pageview.AbstractBar,
construct:function(){arguments.callee.base.call(this);
this.initZIndex();
this.initHeight();
},
properties:{appearance:{refine:true,
init:"tab-view-bar"},
zIndex:{refine:true,
init:2},
height:{refine:true,
init:"auto"}}});




/* ID: qx.ui.pageview.AbstractPane */
qx.Class.define("qx.ui.pageview.AbstractPane",
{type:"abstract",
extend:qx.ui.layout.CanvasLayout});




/* ID: qx.ui.pageview.tabview.Pane */
qx.Class.define("qx.ui.pageview.tabview.Pane",
{extend:qx.ui.pageview.AbstractPane,
construct:function(){arguments.callee.base.call(this);
this.initZIndex();
this.initHeight();
},
properties:{appearance:{refine:true,
init:"tab-view-pane"},
zIndex:{refine:true,
init:1},
height:{refine:true,
init:"1*"}}});




/* ID: qx.ui.pageview.AbstractButton */
qx.Class.define("qx.ui.pageview.AbstractButton",
{type:"abstract",
extend:qx.ui.basic.Atom,
construct:function($0,
$1,
$2,
$3,
$4){arguments.callee.base.call(this,
$0,
$1,
$2,
$3,
$4);
this.initChecked();
this.initTabIndex();
this.addEventListener("mouseover",
this._onmouseover);
this.addEventListener("mouseout",
this._onmouseout);
this.addEventListener("mousedown",
this._onmousedown);
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keypress",
this._onkeypress);
},
properties:{tabIndex:{refine:true,
init:1},
checked:{check:"Boolean",
init:false,
apply:"_applyChecked",
event:"changeChecked"},
page:{check:"qx.ui.pageview.AbstractPage",
apply:"_applyPage",
nullable:true},
manager:{check:"qx.ui.selection.RadioManager",
nullable:true,
apply:"_applyManager"},
name:{check:"String",
apply:"_applyName"}},
members:{getView:function(){var $0=this.getParent();
return $0?$0.getParent():null;
},
_applyManager:function($0,
$1){if($1){$1.remove(this);
}
if($0){$0.add(this);
}},
_applyParent:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
if($1){$1.getManager().remove(this);
}
if($0){$0.getManager().add(this);
}},
_applyPage:function($0,
$1){if($1){$1.setButton(null);
}
if($0){$0.setButton(this);
this.getChecked()?$0.show():$0.hide();
}},
_applyChecked:function($0,
$1){if(this._hasParent){var $2=this.getManager();
if($2){$2.handleItemChecked(this,
$0);
}}$0?this.addState("checked"):this.removeState("checked");
var $3=this.getPage();
if($3){this.getChecked()?$3.show():$3.hide();
}},
_applyName:function($0,
$1){if(this.getManager()){this.getManager().setName($0);
}},
_onmousedown:function($0){this.setChecked(true);
},
_onmouseover:function($0){this.addState("over");
},
_onmouseout:function($0){this.removeState("over");
},
_onkeydown:function($0){},
_onkeypress:function($0){}}});




/* ID: qx.ui.pageview.tabview.Button */
qx.Class.define("qx.ui.pageview.tabview.Button",
{extend:qx.ui.pageview.AbstractButton,
events:{"closetab":"qx.event.type.Event"},
properties:{appearance:{refine:true,
init:"tab-view-button"},
showCloseButton:{check:"Boolean",
init:false,
apply:"_applyShowCloseButton",
event:"changeShowCloseButton"},
closeButtonImage:{check:"String",
init:"icon/16/actions/dialog-cancel.png",
apply:"_applyCloseButtonImage"}},
members:{_onkeydown:function($0){var $1=$0.getKeyIdentifier();
if($1=="Enter"||$1=="Space"){this.setChecked(true);
}},
_onkeypress:function($0){switch($0.getKeyIdentifier()){case "Left":var $1=this.getPreviousActiveSibling();
if($1&&$1!=this){delete qx.event.handler.FocusHandler.mouseFocus;
$1.setFocused(true);
$1.setChecked(true);
}break;
case "Right":var $2=this.getNextActiveSibling();
if($2&&$2!=this){delete qx.event.handler.FocusHandler.mouseFocus;
$2.setFocused(true);
$2.setChecked(true);
}break;
}},
_ontabclose:function($0){this.createDispatchDataEvent("closetab",
this);
$0.stopPropagation();
},
_applyChecked:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
this.setZIndex($0?1:0);
},
_applyShowCloseButton:function($0,
$1){if(!this._closeButtonImage){this._closeButtonImage=new qx.ui.basic.Image(this.getCloseButtonImage());
}
if($0){this._closeButtonImage.addEventListener("click",
this._ontabclose,
this);
this.add(this._closeButtonImage);
}else{this.remove(this._closeButtonImage);
this._closeButtonImage.removeEventListener("click",
this._ontabclose,
this);
}},
_applyCloseButtonImage:function($0,
$1){if(this._closeButtonImage){this._closeButtonImage.setSource($0);
}},
_renderAppearance:function(){if(this.getView()){this.isFirstVisibleChild()?this.addState("firstChild"):this.removeState("lastChild");
this.isLastVisibleChild()?this.addState("lastChild"):this.removeState("lastChild");
this.getView().getAlignTabsToLeft()?this.addState("alignLeft"):this.removeState("alignLeft");
!this.getView().getAlignTabsToLeft()?this.addState("alignRight"):this.removeState("alignRight");
this.getView().getPlaceBarOnTop()?this.addState("barTop"):this.removeState("barTop");
!this.getView().getPlaceBarOnTop()?this.addState("barBottom"):this.removeState("barBottom");
}arguments.callee.base.call(this);
}},
destruct:function(){this._disposeObjects("_closeButtonImage");
}});




/* ID: qx.ui.pageview.AbstractPage */
qx.Class.define("qx.ui.pageview.AbstractPage",
{type:"abstract",
extend:qx.ui.layout.CanvasLayout,
construct:function($0){arguments.callee.base.call(this);
if($0!==undefined){this.setButton($0);
}this.initTop();
this.initRight();
this.initBottom();
this.initLeft();
},
properties:{top:{refine:true,
init:0},
right:{refine:true,
init:0},
bottom:{refine:true,
init:0},
left:{refine:true,
init:0},
display:{refine:true,
init:false},
button:{check:"qx.ui.pageview.AbstractButton",
apply:"_applyButton"}},
members:{_applyButton:function($0,
$1){if($1){$1.setPage(null);
}
if($0){$0.setPage(this);
}}}});




/* ID: qx.ui.pageview.tabview.Page */
qx.Class.define("qx.ui.pageview.tabview.Page",
{extend:qx.ui.pageview.AbstractPage,
properties:{appearance:{refine:true,
init:"tab-view-page"}}});




/* ID: spagobi.ui.CheckBoxList */
qx.Class.define("spagobi.ui.CheckBoxList",
{extend:qx.ui.layout.GridLayout,
construct:function($0){arguments.callee.base.call(this);
this._setAtom();
this.createCheckBoxList($0);
},
members:{atom:[],
label_text:[],
check_box:[],
_setAtom:function(){this.atom=[];
this.label_text=[];
this.check_box=[];
},
createCheckBoxList:function($0){var $1={checked:false,
top:0,
left:0,
items:[],
listeners:[],
columns:1};
$0=spagobi.commons.CoreUtils.apply($1,
$0);
this.auto();
this.set({left:$0.left});
this.setColumnCount($0.columns);
this.setRowCount(Math.ceil($0.items.length/$0.columns));
var $2=this.getRowCount();
var $3=this.getColumnCount();
var $4=0;
for(i=0,
k=0;i<$2;i++){this.setRowHeight(i,
30);
for(j=0;j<$3&&k<$0.items.length;j++,
k++){this.setColumnWidth(j,
50);
this.label_text[$4]=new qx.ui.basic.Label($0.items[k]);
this.check_box[$4]=new qx.ui.form.CheckBox();
this.atom[$4]=new qx.ui.basic.Atom();
this.atom[$4].add(this.check_box[$4],
this.label_text[$4]);
this.atom[$4].setUserData('label',
this.label_text[$4]);
this.atom[$4].setUserData('field',
this.check_box[$4]);
this.add(this.atom[$4],
j,
i);
$4++;
}}},
getData:function(){var $0=[];
for(i=0,
j=0;i<this.atom.length;i++){if(this.atom[i].getUserData('field').getChecked()==true){$0[j]=this.atom[i].getUserData('label').getText();
j++;
}}return $0;
},
setData:function($0){var $1=false;
for(i=0;i<$0.length;i++){for(j=0;j<this.atom.length;j++){if($0[i]==this.atom[j].getUserData('label').getText()){this.atom[j].getUserData('field').setChecked(true);
$1=true;
break;
}}
if($1==false){alert('Checkbox Label '+$0[i]+' is not valid');
}else $1=false;
}}}});




/* ID: spagobi.app.data.DataService */
qx.Class.define("spagobi.app.data.DataService",
{type:"static",
statics:{loadRolesRecords:function(){var $0={};
$0.ID="ROLES";
$0.columns=[2,
3,
4,
5,
6,
7,
8,
9,
10];
$0.meta=this.loadRolesMeta();
$0.rows=this.loadRolesData();
return $0;
},
loadRolesMeta:function(){return [{dataIndex:'name',
name:'Name'},
{dataIndex:'type',
name:'Type'},
{dataIndex:'savecustomview',
name:'SaveCustomView'},
{dataIndex:'seecustomview',
name:'SeeCustomView'},
{dataIndex:'notes',
name:'Notes'},
{dataIndex:'metadata',
name:'MetaData'},
{dataIndex:'sendmail',
name:'SendMail'},
{dataIndex:'hotlinks',
name:'HotLinks'},
{dataIndex:'ziipa',
name:'AB'},
{dataIndex:'zuppo',
name:'ABC'},
{dataIndex:'zippi',
name:'ABCD'}];
},
loadRolesData:function(){return [{id:'180',
name:'/Admin',
type:'Functional_Role',
savecustomview:true,
seecustomview:true,
notes:true,
metadata:true,
sendmail:true,
hotlinks:true,
ziipa:false,
zuppo:true,
zippi:false},
{id:'181',
name:'/Community',
type:'Functional_Role',
savecustomview:true,
seecustomview:true,
notes:true,
metadata:true,
sendmail:true,
hotlinks:true,
ziipa:false,
zuppo:true,
zippi:false},
{id:'182',
name:'/Guest',
type:'Functional_Role',
savecustomview:true,
seecustomview:true,
notes:true,
metadata:true,
sendmail:true,
hotlinks:true,
ziipa:false,
zuppo:true,
zippi:false},
{id:'183',
name:'/Guest',
type:'Functional_Role',
savecustomview:true,
seecustomview:true,
notes:true,
metadata:true,
sendmail:true,
hotlinks:true,
ziipa:false,
zuppo:true,
zippi:false},
{id:'184',
name:'/Guest',
type:'Functional_Role',
savecustomview:true,
seecustomview:true,
notes:true,
metadata:true,
sendmail:true,
hotlinks:true,
ziipa:false,
zuppo:true,
zippi:false}];
},
loadlink1Records:function(){var $0={};
$0.meta=this.loadLink1Meta();
$0.rows=this.loadLink1Data();
return $0;
},
loadLink1Meta:function(){return [{dataIndex:'name',
name:'Name'},
{dataIndex:'document',
name:'Document'},
{dataIndex:'documentname',
name:'DocumentName'},
{dataIndex:'documentdescription',
name:'DocumentDescription'},
{dataIndex:'documenttype',
name:'DocumentType'}];
},
loadLink1Data:function(){return [{id:'190',
name:'hot_Customer_Profile',
document:'Customer_Profile',
documentname:'Customer_Profile',
documentdescription:'Customer_Profile',
documenttype:'Report'},
{id:'191',
name:'Ciao',
document:'Qbe_Test',
documentname:'A Simple QBE on FoodMart',
documentdescription:'',
documenttype:'dataMart'},
{id:'192',
name:'Blaaa',
document:'OlAP',
documentname:'A simple OLAP',
documentdescription:'OLAP',
documenttype:'OLAP'}];
},
loadlink2Records:function(){var $0={};
$0.meta=this.loadLink2Meta();
$0.rows=this.loadLink2Data();
return $0;
},
loadLink2Meta:function(){return [{dataIndex:'document',
name:'Document'},
{dataIndex:'documentname',
name:'DocumentName'},
{dataIndex:'documentdescription',
name:'DocumentDescription'},
{dataIndex:'documenttype',
name:'DocumentType'}];
},
loadLink2Data:function(){return [{id:'193',
document:'BarChart',
documentname:'A Simple bar chart',
documentdescription:'',
documenttype:'DASH'},
{id:'194',
document:'mapUSA',
documentname:'A map with sales of FoodMart',
documentdescription:'Map USA',
documenttype:'MAP'},
{id:'195',
document:'OlAP',
documentname:'A simple OLAP',
documentdescription:'',
documenttype:'OLAP'}];
},
loadlink3Records:function(){var $0={};
$0.meta=this.loadLink3Meta();
$0.rows=this.loadLink3Data();
return $0;
},
loadLink3Meta:function(){return [{dataIndex:'document',
name:'Document'},
{dataIndex:'documentname',
name:'DocumentName'},
{dataIndex:'documentdescription',
name:'DocumentDescription'},
{dataIndex:'documenttype',
name:'DocumentType'}];
},
loadLink3Data:function(){return [{id:'196',
document:'SpeedoMeterChart',
documentname:'A Simple speedo Meter',
documentdescription:'yahoo',
documenttype:'DASH'},
{id:'197',
document:'SpeedoMeterChart',
documentname:'A Simple speedo Meter',
documentdescription:'Google',
documenttype:'DASH'},
{id:'198',
document:'SpeedoMeterChart',
documentname:'A Simple speedo Meter',
documentdescription:'Ask',
documenttype:'DASH'}];
},
loadEngineRecords:function(){var $0={};
$0.meta=this.loadEngineMeta();
$0.rows=this.loadEngineData();
return $0;
},
loadEngineMeta:function(){return [{dataIndex:'label',
name:'Label'},
{dataIndex:'name',
name:'Name'},
{dataIndex:'description',
name:'Description'},
{dataIndex:'documentType',
name:'DocumentType'}];
},
loadEngineData:function(){return [{id:'135',
"label":'JASPER',
name:'JasperReport Engine',
description:'Compatible with JasperReport engine v3.1',
documentType:'Map',
engineType:'External',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'',
url:'http://localhost:8080/SpagoBIJasperEngine/AdapterHTTP?ACTION_NAME=START_ACTION',
driver:'it.eng.spagobi.engines.drivers.QbeDriver'},
{id:'137',
"label":'QBE',
name:'Qbe Engine',
description:'Query by Example',
documentType:'Map',
engineType:'External',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'',
url:'http://localhost:8080/SpagoBIQbeEngine/AdapterHTTP?ACTION_NAME=START_ACTION',
driver:'it.eng.spagobi.engines.drivers.QbeDriver'},
{id:'138',
"label":'DASH',
name:'Dashboard Engine',
description:'Dashboard Engine',
documentType:'Map',
engineType:'Internal',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'it.eng.spagobi.Dashboard',
url:'',
driver:''},
{id:'137',
"label":'QBE',
name:'Qbe Engine',
description:'Query by Example',
documentType:'Map',
engineType:'External',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'',
url:'http://localhost:8080/SpagoBIQbeEngine/AdapterHTTP?ACTION_NAME=START_ACTION',
driver:'it.eng.spagobi.engines.drivers.QbeDriver'},
{id:'138',
"label":'DASH',
name:'Dashboard Engine',
description:'Dashboard Engine',
documentType:'Map',
engineType:'Internal',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'it.eng.spagobi.Dashboard',
url:'',
driver:''},
{id:'137',
"label":'QBE',
name:'Qbe Engine',
description:'Query by Example',
documentType:'Map',
engineType:'External',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'',
url:'http://localhost:8080/SpagoBIQbeEngine/AdapterHTTP?ACTION_NAME=START_ACTION',
driver:'it.eng.spagobi.engines.drivers.QbeDriver'},
{id:'138',
"label":'DASH',
name:'Dashboard Engine',
description:'Dashboard Engine',
documentType:'Map',
engineType:'Internal',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'it.eng.spagobi.Dashboard',
url:'',
driver:''},
{id:'138',
"label":'DASH',
name:'Dashboard Engine',
description:'Dashboard Engine',
documentType:'Map',
engineType:'Internal',
useDataSet:false,
useDataSource:true,
dataSource:'geo',
"class":'it.eng.spagobi.Dashboard',
url:'',
driver:''}];
},
loadDatasourceRecords:function(){var $0={};
$0.meta=this.loadDatasourceMeta();
$0.rows=this.loadDatasourceData();
return $0;
},
loadDatasourceMeta:function(){return [{dataIndex:'label',
name:'Label'},
{dataIndex:'description',
name:'Description'},
{dataIndex:'type',
name:'Type'}];
},
loadDatasourceData:function(){return [{id:'336',
"label":'foodmart',
description:'Connection to the DWH',
dialect:'MYSQL',
type:'With Analytical Drivers',
jndiname:'java:comp/env/jdbc/foodmart',
url:'',
user:'BIADMIN',
password:'*******',
driver:''},
{id:'337',
"label":'spagobi',
description:'Connection to the metadata database',
dialect:'MYSQL',
type:'With Analytical Drivers',
jndiname:'java:comp/env/jdbc/spagobi',
url:'',
user:'BIADMIN',
password:'*******',
driver:''},
{id:'338',
"label":'GeoData',
description:'Connection to the database used to test the geo engine',
dialect:'INGRES',
type:'With Analytical Drivers',
jndiname:'java:comp/env/jdbc/genova',
url:'',
user:'BIADMIN',
password:'*******',
driver:''}];
},
loadDatasetRecords:function(){var $0={};
$0.meta=this.loadDatasetMeta();
$0.rows=this.loadDatasetData();
return $0;
},
loadDatasetMeta:function(){return [{dataIndex:'label',
name:'Label'},
{dataIndex:'name',
name:'Name'},
{dataIndex:'description',
name:'Description'},
{dataIndex:'type',
name:'Type'}];
},
loadDatasetData:function(){return [{id:'1',
"label":'DatiDashBoard',
name:'Dati per test DashBoard',
description:'',
type:'File',
fileName:'../dataset/DatiTabella.txt'},
{id:'2',
"label":'Chart1',
name:'Dati per test Chart1',
description:'',
type:'Query',
fileName:''},
{id:'3',
"label":'Chart2',
name:'Dati per test Chart2',
description:'',
type:'Web Service',
fileName:''}];
},
loadMapRecords:function(){var $0={};
$0.meta=this.loadMapMeta();
$0.rows=this.loadMapData();
return $0;
},
loadMapMeta:function(){return [{dataIndex:'name',
name:'Name'},
{dataIndex:'description',
name:'Description'},
{dataIndex:'template',
name:'Template'},
{dataIndex:'format',
name:'Format'},
{dataIndex:'numfeatures',
name:'Num. Features'}];
},
loadMapData:function(){return [{id:'1',
name:'aaa',
description:'aaa',
template:'/components/mapcatalogue/maps/import.txt',
format:'SVG',
numfeatures:'0'},
{id:'2',
name:'USA_States',
description:'USA_States',
template:'/components/mapcatalogue/maps/UsaStates.svg',
format:'SVG',
numfeatures:'1'},
{id:'3',
name:'Senzioni_Censimento',
description:'Sezioni_Censimento',
template:'/components/mapcatalogue/maps/Sezioni_Censimento.svg',
format:'SVG',
numfeatures:'13'}];
},
loadFeatureRecords:function(){var $0={};
$0.meta=this.loadFeatureMeta();
$0.rows=this.loadFeatureData();
return $0;
},
loadFeatureMeta:function(){return [{dataIndex:'name',
name:'Name'},
{dataIndex:'description',
name:'Description'},
{dataIndex:'type',
name:'Type'},
{dataIndex:'nummaps',
name:'Num. Maps'}];
},
loadFeatureData:function(){return [{id:'1',
name:'States',
description:'',
type:'',
nummaps:'1'},
{id:'2',
name:'Frame',
description:'',
type:'',
nummaps:'2'},
{id:'3',
name:'Unita Urbanistiche',
description:'',
type:'',
nummaps:'3'}];
},
loadLOVRecords:function(){var $0={};
$0.meta=this.loadLOVMeta();
$0.rows=this.loadLOVData();
return $0;
},
loadLOVMeta:function(){return [{dataIndex:'name',
name:'Name'},
{dataIndex:'description',
name:'Description'}];
},
loadLOVData:function(){return [{id:'1',
name:'name1',
description:'ddd1'},
{id:'2',
name:'name2',
description:'aaa2'},
{id:'3',
name:'name3',
description:'cvcw3'}];
},
loadConfigurationRecords:function(){var $0={};
$0.meta=this.loadConfigurationMeta();
$0.rows=this.loadConfigurationData();
return $0;
},
loadConfigurationMeta:function(){return [{dataIndex:'label',
name:'Label'},
{dataIndex:'name',
name:'Name'},
{dataIndex:'engine',
name:'Engine'},
{dataIndex:'state',
name:'State'},
{dataIndex:'instance',
name:'Number Of Instance'}];
},
loadConfigurationData:function(){return [{id:'91',
"label":'OLAP',
name:'A simple OLAP',
description:'Compatible with OLAP engine v3.1',
type:'On-line Analytical Processing',
engine:'JPIVOT',
datasource:'Foodmart',
useDataSet:'Dummy Input',
state:'Released',
refreshseconds:'0',
cryptable:'false',
visibility:'true',
template:'Dummy Input',
templatebbuild:'Dummy Input'},
{id:'92',
"label":'OLAP',
name:'A simple OLAP',
description:'Compatible with OLAP engine v3.1',
type:'On-line Analytical Processing',
engine:'JPIVOT',
datasource:'Foodmart',
useDataSet:'Dummy Input',
state:'Released',
refreshseconds:'0',
cryptable:'false',
visibility:'true',
template:'Dummy Input',
templatebbuild:'Dummy Input'},
{id:'93',
"label":'OLAP',
name:'A simple OLAP',
description:'Compatible with OLAP engine v3.1',
type:'On-line Analytical Processing',
engine:'JPIVOT',
datasource:'Foodmart',
useDataSet:'Dummy Input',
state:'Released',
refreshseconds:'0',
cryptable:'false',
visibility:'true',
template:'Dummy Input',
templatebbuild:'Dummy Input'}];
},
loadFunctinalitiesRecords:function(){var $0={};
$0.ID="ROLES";
$0.columns=[2,
3,
4];
$0.meta=this.loadFunctinalitiesMeta();
$0.rows=this.loadFunctinalitiesData();
return $0;
},
loadFunctinalitiesMeta:function(){return [{dataIndex:'roles',
name:'Roles'},
{dataIndex:'group',
name:'Group'},
{dataIndex:'dev',
name:'Development'},
{dataIndex:'test',
name:'Test'},
{dataIndex:'exe',
name:'Execution'}];
},
loadFunctinalitiesData:function(){return [{id:'1',
roles:'/admin',
group:'/admin',
dev:false,
test:false,
exe:false},
{id:'2',
roles:'/community',
group:'/community',
dev:false,
test:false,
exe:false},
{id:'3',
roles:'/community/direction',
group:'/community/direction',
dev:false,
test:false,
exe:false},
{id:'4',
roles:'/community/editors',
group:'/community/editors',
dev:false,
test:false,
exe:false},
{id:'5',
roles:'/community/hr',
group:'/community/hr',
dev:false,
test:false,
exe:false},
{id:'6',
roles:'/guest',
group:'/guest',
dev:false,
test:false,
exe:false},
{id:'7',
roles:'/portal',
group:'/portal',
dev:false,
test:false,
exe:false},
{id:'8',
roles:'/portal/admin',
group:'/portal/admin',
dev:false,
test:false,
exe:false},
{id:'9',
roles:'/portal/share',
group:'/portal/share',
dev:false,
test:false,
exe:false},
{id:'10',
roles:'/portal/site',
group:'/portal/site',
dev:false,
test:false,
exe:false},
{id:'11',
roles:'/spagobi',
group:'spagobi',
dev:false,
test:false,
exe:false},
{id:'12',
roles:'/spagobi/admin',
group:'admin',
dev:false,
test:false,
exe:false},
{id:'13',
roles:'/spagobi/dev',
group:'dev',
dev:false,
test:false,
exe:false},
{id:'14',
roles:'/spagobi/test',
group:'test',
dev:false,
test:false,
exe:false},
{id:'15',
roles:'/spagobi/user',
group:'user',
dev:false,
test:false,
exe:false},
{id:'16',
roles:'/user',
group:'/user',
dev:false,
test:false,
exe:false},
{id:'17',
roles:'/spagobi/modeladmin',
group:'modeladmin',
dev:false,
test:false,
exe:false},
{id:'18',
roles:'/Test',
group:'Test',
dev:false,
test:false,
exe:false},
{id:'19',
roles:'/spagobi/user/general_manager',
group:'general_manager',
dev:false,
test:false,
exe:false},
{id:'20',
roles:'/spagobi/user/product_manager',
group:'product_manager',
dev:false,
test:false,
exe:false},
{id:'21',
roles:'/spagobi/user/sales_manager',
group:'sales_manager',
dev:false,
test:false,
exe:false},
{id:'22',
roles:'/spagobi/model',
group:'model',
dev:false,
test:false,
exe:false},
{id:'23',
roles:'/spagobi/user/demo',
group:'demo',
dev:false,
test:false,
exe:false},
{id:'24',
roles:'/spagobi/demo',
group:'demo',
dev:false,
test:false,
exe:false}];
}}});




/* ID: qx.ui.table.Table */
qx.Class.define("qx.ui.table.Table",
{extend:qx.ui.layout.VerticalBoxLayout,
construct:function($0,
$1){arguments.callee.base.call(this);
if(!$1){$1={};
}
if($1.selectionManager){this.setNewSelectionManager($1.selectionManager);
}
if($1.selectionModel){this.setNewSelectionModel($1.selectionModel);
}
if($1.tableColumnModel){this.setNewTableColumnModel($1.tableColumnModel);
}
if($1.tablePane){this.setNewTablePane($1.tablePane);
}
if($1.tablePaneHeader){this.setNewTablePaneHeader($1.tablePaneHeader);
}
if($1.tablePaneScroller){this.setNewTablePaneScroller($1.tablePaneScroller);
}
if($1.tablePaneModel){this.setNewTablePaneModel($1.tablePaneModel);
}this._scrollerParent=new qx.ui.layout.HorizontalBoxLayout;
this._scrollerParent.setDimension("100%",
"1*");
this._scrollerParent.setSpacing(1);
this._statusBar=new qx.ui.basic.Label;
this._statusBar.setAppearance("table-focus-statusbar");
this._statusBar.setDimension("100%",
"auto");
this.add(this._scrollerParent,
this._statusBar);
this._columnVisibilityBt=new qx.ui.form.Button;
this._columnVisibilityBt.setAppearance("table-menubar-button");
this._columnVisibilityBt.setHeight(null);
this._columnVisibilityBt.setWidth("auto");
this._columnVisibilityBt.setAllowStretchY(true);
this._columnVisibilityBt.addEventListener("execute",
this._onColumnVisibilityBtExecuted,
this);
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this._selectionManager=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableColumnModel(this.getNewTableColumnModel()(this));
if($0!=null){this.setTableModel($0);
}this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addEventListener("keydown",
this._onkeydown);
this.addEventListener("keypress",
this._onkeypress);
this.addEventListener("changeFocused",
this._onFocusChanged);
this._focusedCol=0;
this._focusedRow=0;
qx.locale.Manager.getInstance().addEventListener("changeLocale",
this._onChangeLocale,
this);
},
events:{"columnVisibilityMenuCreateStart":"qx.event.type.DataEvent",
"columnVisibilityMenuCreateEnd":"qx.event.type.DataEvent",
"tableWidthChanged":"qx.event.type.DataEvent",
"verticalScrollBarChanged":"qx.event.type.DataEvent",
"cellClick":"qx.ui.table.pane.CellEvent",
"cellDblclick":"qx.ui.table.pane.CellEvent",
"cellContextmenu":"qx.ui.table.pane.CellEvent"},
statics:{__redirectEvents:{cellClick:1,
cellDblclick:1,
cellContextmenu:1}},
properties:{selectionModel:{check:"qx.ui.table.selection.Model",
apply:"_applySelectionModel",
event:"changeSelectionModel"},
tableModel:{check:"qx.ui.table.ITableModel",
apply:"_applyTableModel",
event:"changeTableModel",
nullable:true},
tableColumnModel:{check:"qx.ui.table.columnmodel.Basic",
apply:"_applyTableColumnModel",
event:"changeTableColumnModel"},
rowHeight:{check:"Number",
init:20,
event:"changeRowHeight"},
statusBarVisible:{check:"Boolean",
init:true,
apply:"_applyStatusBarVisible"},
columnVisibilityButtonVisible:{check:"Boolean",
init:true,
apply:"_applyColumnVisibilityButtonVisible"},
metaColumnCounts:{check:"Object",
apply:"_applyMetaColumnCounts"},
focusCellOnMouseMove:{check:"Boolean",
init:false,
apply:"_applyFocusCellOnMouseMove"},
showCellFocusIndicator:{check:"Boolean",
init:true,
apply:"_applyShowCellFocusIndicator"},
keepFirstVisibleRowComplete:{check:"Boolean",
init:true,
apply:"_applyKeepFirstVisibleRowComplete"},
alwaysUpdateCells:{check:"Boolean",
init:false},
dataRowRenderer:{check:"qx.ui.table.IRowRenderer",
init:null,
nullable:true,
event:"changeDataRowRenderer"},
modalCellEditorPreOpenFunction:{check:"Function",
init:null,
nullable:true},
newSelectionManager:{check:"Function",
init:function($0){return new qx.ui.table.selection.Manager($0);
}},
newSelectionModel:{check:"Function",
init:function($0){return new qx.ui.table.selection.Model($0);
}},
newTableColumnModel:{check:"Function",
init:function($0){return new qx.ui.table.columnmodel.Basic($0);
}},
newTablePane:{check:"Function",
init:function($0){return new qx.ui.table.pane.Pane($0);
}},
newTablePaneHeader:{check:"Function",
init:function($0){return new qx.ui.table.pane.Header($0);
}},
newTablePaneScroller:{check:"Function",
init:function($0){return new qx.ui.table.pane.Scroller($0);
}},
newTablePaneModel:{check:"Function",
init:function($0){return new qx.ui.table.pane.Model($0);
}}},
members:{_applySelectionModel:function($0,
$1){this._selectionManager.setSelectionModel($0);
if($1!=null){$1.removeEventListener("changeSelection",
this._onSelectionChanged,
this);
}$0.addEventListener("changeSelection",
this._onSelectionChanged,
this);
},
_applyTableModel:function($0,
$1){this.getTableColumnModel().init($0.getColumnCount(),
this);
if($1!=null){$1.removeEventListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,
this._onTableModelMetaDataChanged,
this);
$1.removeEventListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
this._onTableModelDataChanged,
this);
}$0.addEventListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,
this._onTableModelMetaDataChanged,
this);
$0.addEventListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
this._onTableModelDataChanged,
this);
this._updateStatusBar();
},
_applyTableColumnModel:function($0,
$1){if($1!=null){throw new Error("The table column model can only be set once per table.");
}$0.addEventListener("visibilityChanged",
this._onColVisibilityChanged,
this);
$0.addEventListener("widthChanged",
this._onColWidthChanged,
this);
$0.addEventListener("orderChanged",
this._onColOrderChanged,
this);
var $2=this.getTableModel();
if($2){$0.init($2.getColumnCount(),
this);
}var $3=this._getPaneScrollerArr();
for(var $4=0;$4<$3.length;$4++){var $5=$3[$4];
var $6=$5.getTablePaneModel();
$6._tableColumnModel=$0;
}},
_applyStatusBarVisible:function($0,
$1){this._statusBar.setDisplay($0);
if($0){this._updateStatusBar();
}},
_applyColumnVisibilityButtonVisible:function($0,
$1){this._columnVisibilityBt.setDisplay($0);
},
_applyMetaColumnCounts:function($0,
$1){var $2=$0;
var $3=this._getPaneScrollerArr();
this._cleanUpMetaColumns($2.length);
var $4=0;
for(var $5=0;$5<$3.length;$5++){var $6=$3[$5];
var $7=$6.getTablePaneModel();
$7.setFirstColumnX($4);
$7.setMaxColumnCount($2[$5]);
$4+=$2[$5];
}if($2.length>$3.length){var $8=this.getTableColumnModel();
for(var $5=$3.length;$5<$2.length;$5++){var $7=this.getNewTablePaneModel()($8);
$7.setFirstColumnX($4);
$7.setMaxColumnCount($2[$5]);
$4+=$2[$5];
var $6=this.getNewTablePaneScroller()(this);
$6.setTablePaneModel($7);
$6.addEventListener("changeScrollY",
this._onScrollY,
this);
this._scrollerParent.add($6);
}}for(var $5=0;$5<$3.length;$5++){var $6=$3[$5];
var $9=($5==($3.length-1));
$6.setTopRightWidget($9?this._columnVisibilityBt:null);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
_applyFocusCellOnMouseMove:function($0,
$1){var $2=this._getPaneScrollerArr();
for(var $3=0;$3<$2.length;$3++){$2[$3].setFocusCellOnMouseMove($0);
}},
_applyShowCellFocusIndicator:function($0,
$1){var $2=this._getPaneScrollerArr();
for(var $3=0;$3<$2.length;$3++){$2[$3].setShowCellFocusIndicator($0);
}},
_applyKeepFirstVisibleRowComplete:function($0,
$1){var $2=this._getPaneScrollerArr();
for(var $3=0;$3<$2.length;$3++){$2[$3]._onKeepFirstVisibleRowCompleteChanged();
}},
_getSelectionManager:function(){return this._selectionManager;
},
_getPaneScrollerArr:function(){return this._scrollerParent.getChildren();
},
getPaneScroller:function($0){return this._getPaneScrollerArr()[$0];
},
_cleanUpMetaColumns:function($0){var $1=this._getPaneScrollerArr();
if($1!=null){for(var $2=$1.length-1;$2>=$0;$2--){$1[$2].dispose();
}}},
_onChangeLocale:function($0){this.postponedUpdateContent();
this._updateStatusBar();
},
_onSelectionChanged:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2]._onSelectionChanged($0);
}this._updateStatusBar();
},
_onTableModelMetaDataChanged:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2]._onTableModelMetaDataChanged($0);
}this._updateStatusBar();
},
_onTableModelDataChanged:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2]._onTableModelDataChanged($0);
}var $3=this.getTableModel().getRowCount();
if($3!=this._lastRowCount){this._lastRowCount=$3;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},
_onScrollY:function($0){if(!this._internalChange){this._internalChange=true;
var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2].setScrollY($0.getValue());
}this._internalChange=false;
}},
_onkeydown:function($0){if(!this.getEnabled()){return;
}var $1=$0.getKeyIdentifier();
var $2=false;
var $3=this._focusedRow;
if(this.isEditing()){if($0.getModifiers()==0){$2=true;
switch($1){case "Enter":this.stopEditing();
var $3=this._focusedRow;
this.moveFocusedCell(0,
1);
if(this._focusedRow!=$3){$2=this.startEditing();
}break;
case "Escape":this.cancelEditing();
this.focus();
break;
default:$2=false;
break;
}}}else{$2=true;
switch($1){case "Home":this.setFocusedCell(this._focusedCol,
0,
true);
break;
case "End":var $4=this.getTableModel().getRowCount();
this.setFocusedCell(this._focusedCol,
$4-1,
true);
break;
default:$2=false;
break;
}if($0.getModifiers()==0){$2=true;
switch($1){case "F2":case "Enter":$2=this.startEditing();
break;
default:$2=false;
break;
}}else if($0.isCtrlPressed()){$2=true;
switch($1){case "A":var $4=this.getTableModel().getRowCount();
if($4>0){this.getSelectionModel().setSelectionInterval(0,
$4-1);
}break;
default:$2=false;
break;
}}}
if($3!=this._focusedRow){this._selectionManager.handleMoveKeyDown(this._focusedRow,
$0);
}
if($2){$0.preventDefault();
$0.stopPropagation();
}},
_onkeypress:function($0){if(!this.getEnabled()){return;
}
if(this.isEditing()){return;
}var $1=this._focusedRow;
var $2=true;
var $3=$0.getKeyIdentifier();
switch($3){case "Space":this._selectionManager.handleSelectKeyDown(this._focusedRow,
$0);
break;
case "Left":this.moveFocusedCell(-1,
0);
break;
case "Right":this.moveFocusedCell(1,
0);
break;
case "Up":this.moveFocusedCell(0,
-1);
break;
case "Down":this.moveFocusedCell(0,
1);
break;
case "PageUp":case "PageDown":var $4=this.getPaneScroller(0);
var $5=$4.getTablePane();
var $6=$5.getVisibleRowCount()-1;
var $7=this.getRowHeight();
var $8=($3=="PageUp")?-1:1;
$4.setScrollY($4.getScrollY()+$8*$6*$7);
this.moveFocusedCell(0,
$8*$6);
break;
default:$2=false;
}
if($1!=this._focusedRow){this._selectionManager.handleMoveKeyDown(this._focusedRow,
$0);
}
if($2){$0.preventDefault();
$0.stopPropagation();
}},
_onFocusChanged:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2]._onFocusChanged($0);
}},
_onColVisibilityChanged:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2]._onColVisibilityChanged($0);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
_onColWidthChanged:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2]._onColWidthChanged($0);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
_onColOrderChanged:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){$1[$2]._onColOrderChanged($0);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
getTablePaneScrollerAtPageX:function($0){var $1=this._getMetaColumnAtPageX($0);
return ($1!=-1)?this.getPaneScroller($1):null;
},
setFocusedCell:function($0,
$1,
$2){if(!this.isEditing()&&($0!=this._focusedCol||$1!=this._focusedRow)){this._focusedCol=$0;
this._focusedRow=$1;
var $3=this._getPaneScrollerArr();
for(var $4=0;$4<$3.length;$4++){$3[$4].setFocusedCell($0,
$1);
}
if($2){this.scrollCellVisible($0,
$1);
}}},
getFocusedColumn:function(){return this._focusedCol;
},
getFocusedRow:function(){return this._focusedRow;
},
moveFocusedCell:function($0,
$1){var $2=this._focusedCol;
var $3=this._focusedRow;
if($0!=0){var $4=this.getTableColumnModel();
var $5=$4.getVisibleX($2);
var $6=$4.getVisibleColumnCount();
$5=qx.lang.Number.limit($5+$0,
0,
$6-1);
$2=$4.getVisibleColumnAtX($5);
}
if($1!=0){var $7=this.getTableModel();
$3=qx.lang.Number.limit($3+$1,
0,
$7.getRowCount()-1);
}this.setFocusedCell($2,
$3,
true);
},
scrollCellVisible:function($0,
$1){var $2=this.getTableColumnModel();
var $3=$2.getVisibleX($0);
var $4=this._getMetaColumnAtColumnX($3);
if($4!=-1){this.getPaneScroller($4).scrollCellVisible($0,
$1);
}},
isEditing:function(){if(this._focusedCol!=null){var $0=this.getTableColumnModel().getVisibleX(this._focusedCol);
var $1=this._getMetaColumnAtColumnX($0);
return this.getPaneScroller($1).isEditing();
}},
startEditing:function(){if(this._focusedCol!=null){var $0=this.getTableColumnModel().getVisibleX(this._focusedCol);
var $1=this._getMetaColumnAtColumnX($0);
return this.getPaneScroller($1).startEditing();
}return false;
},
stopEditing:function(){if(this._focusedCol!=null){var $0=this.getTableColumnModel().getVisibleX(this._focusedCol);
var $1=this._getMetaColumnAtColumnX($0);
this.getPaneScroller($1).stopEditing();
}},
cancelEditing:function(){if(this._focusedCol!=null){var $0=this.getTableColumnModel().getVisibleX(this._focusedCol);
var $1=this._getMetaColumnAtColumnX($0);
this.getPaneScroller($1).cancelEditing();
}},
postponedUpdateContent:function(){if(!this._updateContentPlanned){qx.client.Timer.once(function(){if(this.getDisposed()){return;
}this.updateContent();
this._updateContentPlanned=false;
qx.ui.core.Widget.flushGlobalQueues();
},
this,
0);
this._updateContentPlanned=true;
}},
updateContent:function(){var $0=this._getPaneScrollerArr();
for(var $1=0;$1<$0.length;$1++){$0[$1]._tablePane._updateContent();
}},
_getMetaColumnAtPageX:function($0){var $1=this._getPaneScrollerArr();
for(var $2=0;$2<$1.length;$2++){var $3=$1[$2].getElement();
if($0>=qx.bom.element.Location.getLeft($3)&&$0<=qx.bom.element.Location.getRight($3)){return $2;
}}return -1;
},
_getMetaColumnAtColumnX:function($0){var $1=this.getMetaColumnCounts();
var $2=0;
for(var $3=0;$3<$1.length;$3++){var $4=$1[$3];
$2+=$4;
if($4==-1||$0<$2){return $3;
}}return -1;
},
_updateStatusBar:function(){if(this.getStatusBarVisible()){var $0=this.getSelectionModel().getSelectedCount();
var $1=this.getTableModel().getRowCount();
var $2;
if($0==0){$2=this.trn("one row",
"%1 rows",
$1,
$1);
}else{$2=this.trn("one of one row",
"%1 of %2 rows",
$1,
$0,
$1);
}this._statusBar.setText($2);
}},
_updateScrollerWidths:function(){var $0=this._getPaneScrollerArr();
for(var $1=0;$1<$0.length;$1++){var $2=($1==($0.length-1));
var $3=$2?"1*":$0[$1].getTablePaneModel().getTotalWidth();
$0[$1].setWidth($3);
}},
_updateScrollBarVisibility:function(){if(this.isSeeable()){var $0=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var $1=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var $2=this._getPaneScrollerArr();
var $3=false;
var $4=false;
for(var $5=0;$5<$2.length;$5++){var $6=($5==($2.length-1));
var $7=$2[$5].getNeededScrollBars($3,
!$6);
if($7&$0){$3=true;
}
if($6&&($7&$1)){$4=true;
}}for(var $5=0;$5<$2.length;$5++){var $6=($5==($2.length-1));
var $8;
$2[$5].setHorizontalScrollBarVisible($3);
if($6){$8=$2[$5].getVerticalScrollBarVisible();
}$2[$5].setVerticalScrollBarVisible($6&&$4);
if($6&&$4!=$8){this.createDispatchDataEvent("verticalScrollBarChanged",
$4);
}}}},
_onColumnVisibilityBtExecuted:function(){if((this._columnVisibilityMenuCloseTime==null)||(new Date().getTime()>this._columnVisibilityMenuCloseTime+200)){this._toggleColumnVisibilityMenu();
}},
_toggleColumnVisibilityMenu:function(){if(!this.getEnabled()){return;
}var $0=new qx.ui.menu.Menu;
$0.addEventListener("disappear",
function($1){this._cleanupColumnVisibilityMenu();
this._columnVisibilityMenuCloseTime=new Date().getTime();
},
this);
var $2=this.getTableModel();
var $3=this.getTableColumnModel();
var $4={table:this,
menu:$0};
this.createDispatchDataEvent("columnVisibilityMenuCreateStart",
$4,
true);
for(var $5=0;$5<$3.getOverallColumnCount();$5++){var $6=$3.getOverallColumnAtX($5);
var $7=$3.isColumnVisible($6);
var $8=new qx.ui.menu.CheckBox($2.getColumnName($6),
null,
$7);
var $9=this._createColumnVisibilityCheckBoxHandler($6);
$8._handler=$9;
$8.addEventListener("execute",
$9,
this);
$0.add($8);
}var $4={table:this,
menu:$0};
this.createDispatchDataEvent("columnVisibilityMenuCreateEnd",
$4,
true);
$0.setParent(this.getTopLevelWidget());
this._columnVisibilityMenu=$0;
var $a=this._columnVisibilityBt.getElement();
$0.setRestrictToPageOnOpen(false);
$0.setTop(qx.bom.element.Location.getBottom($a));
$0.setLeft(-1000);
var $b=this;
window.setTimeout(function(){if($b.getDisposed()){return;
}$0.show();
qx.ui.core.Widget.flushGlobalQueues();
$0.setLeft(qx.bom.element.Location.getRight($a)-$0.getOffsetWidth());
},
0);
},
_cleanupColumnVisibilityMenu:function(){if(this._columnVisibilityMenu!=null&&!this._columnVisibilityMenu.getDisposed()){var $0=this._columnVisibilityMenu.getParent();
if($0){$0.remove(this._columnVisibilityMenu);
}this._columnVisibilityMenu.dispose();
this._columnVisibilityMenu=null;
}},
_createColumnVisibilityCheckBoxHandler:function($0){return function($1){var $2=this.getTableColumnModel();
$2.setColumnVisible($0,
!$2.isColumnVisible($0));
};
},
setColumnWidth:function($0,
$1){this.getTableColumnModel().setColumnWidth($0,
$1);
},
_changeInnerWidth:function($0,
$1){var $2=this;
window.setTimeout(function(){if($2.getDisposed()){return;
}$2.createDispatchEvent("tableWidthChanged");
$2._updateScrollerWidths();
$2._updateScrollBarVisibility();
qx.ui.core.Widget.flushGlobalQueues();
},
0);
return arguments.callee.base.call(this,
$0,
$1);
},
_changeInnerHeight:function($0,
$1){var $2=this;
window.setTimeout(function(){if($2.getDisposed()){return;
}$2._updateScrollBarVisibility();
qx.ui.core.Widget.flushGlobalQueues();
},
0);
return arguments.callee.base.call(this,
$0,
$1);
},
_afterAppear:function(){arguments.callee.base.call(this);
this._updateScrollBarVisibility();
},
addEventListener:function($0,
$1,
$2){if(arguments.callee.self.__redirectEvents[$0]){for(var $3=0,
$4=this._getPaneScrollerArr();$3<$4.length;$3++){$4[$3].addEventListener.apply($4[$3],
arguments);
}}else{arguments.callee.base.apply(this,
arguments);
}},
removeEventListener:function($0,
$1,
$2){if(arguments.callee.self.__redirectEvents[$0]){for(var $3=0,
$4=this._getPaneScrollerArr();$3<$4.length;$3++){$4[$3].removeEventListener.apply($4[$3],
arguments);
}}else{arguments.callee.base.apply(this,
arguments);
}}},
destruct:function(){var $0=this.getSelectionModel();
if($0){$0.dispose();
}var $1=this.getDataRowRenderer();
if($1){$1.dispose();
}this._cleanUpMetaColumns(0);
this._disposeObjects("_selectionManager",
"_columnVisibilityMenu",
"_tableModel",
"_columnVisibilityBt",
"_scrollerParent",
"_statusBar");
}});




/* ID: qx.ui.table.IRowRenderer */
qx.Interface.define("qx.ui.table.IRowRenderer",
{members:{updateDataRowElement:function($0,
$1){return true;
},
createRowStyle:function($0){return true;
},
getRowClass:function($0){return true;
}}});




/* ID: qx.ui.table.rowrenderer.Default */
qx.Class.define("qx.ui.table.rowrenderer.Default",
{extend:qx.core.Target,
implement:qx.ui.table.IRowRenderer,
construct:function($0){arguments.callee.base.call(this);
this._fontStyle={};
this._fontStyleString="";
this._colors={};
this._table=$0;
qx.theme.manager.Font.getInstance().connect(this._styleFont,
this,
"default");
qx.theme.manager.Color.getInstance().connect(this._styleBgcolFocusedSelected,
this,
"table-row-background-focused-selected");
qx.theme.manager.Color.getInstance().connect(this._styleBgcolFocused,
this,
"table-row-background-focused");
qx.theme.manager.Color.getInstance().connect(this._styleBgcolSelected,
this,
"table-row-background-selected");
qx.theme.manager.Color.getInstance().connect(this._styleBgcolEven,
this,
"table-row-background-even");
qx.theme.manager.Color.getInstance().connect(this._styleBgcolOdd,
this,
"table-row-background-odd");
qx.theme.manager.Color.getInstance().connect(this._styleColSelected,
this,
"table-row-selected");
qx.theme.manager.Color.getInstance().connect(this._styleColNormal,
this,
"table-row");
},
properties:{highlightFocusRow:{check:"Boolean",
init:true}},
members:{_styleBgcolFocusedSelected:function($0,
$1){this._colors.bgcolFocusedSelected=$0;
this._postponedUpdateTableContent();
},
_styleBgcolFocused:function($0,
$1){this._colors.bgcolFocused=$0;
this._postponedUpdateTableContent();
},
_styleBgcolSelected:function($0,
$1){this._colors.bgcolSelected=$0;
this._postponedUpdateTableContent();
},
_styleBgcolEven:function($0,
$1){this._colors.bgcolEven=$0;
this._postponedUpdateTableContent();
},
_styleBgcolOdd:function($0,
$1){this._colors.bgcolOdd=$0;
this._postponedUpdateTableContent();
},
_styleColSelected:function($0,
$1){this._colors.colSelected=$0;
this._postponedUpdateTableContent();
},
_styleColNormal:function($0,
$1){this._colors.colNormal=$0;
this._postponedUpdateTableContent();
},
_styleFont:function($0){this.__font=$0;
this._renderFont();
},
_renderFont:function(){var $0=this.__font;
if($0){$0.renderStyle(this._fontStyle);
this._fontStyleString=$0.generateStyle();
}else{qx.ui.core.Font.resetStyle(this._fontStyle);
this._fontStyleString="";
}this._postponedUpdateTableContent();
},
updateDataRowElement:function($0,
$1){var $2=this._fontStyle;
var $3=$1.style;
$3.fontFamily=$2.fontFamily;
$3.fontSize=$2.fontSize;
$3.fontWeight=$2.fontWeight;
$3.fontStyle=$2.fontStyle;
$3.textDecoration=$2.textDecoration;
if($0.focusedRow&&this.getHighlightFocusRow()){$3.backgroundColor=$0.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;
}else{if($0.selected){$3.backgroundColor=this._colors.bgcolSelected;
}else{$3.backgroundColor=($0.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;
}}$3.color=$0.selected?this._colors.colSelected:this._colors.colNormal;
},
createRowStyle:function($0){var $1=[];
$1.push(";");
$1.push(this._fontStyleString);
$1.push("background-color:");
if($0.focusedRow&&this.getHighlightFocusRow()){$1.push($0.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);
}else{if($0.selected){$1.push(this._colors.bgcolSelected);
}else{$1.push(($0.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);
}}$1.push(';color:');
$1.push($0.selected?this._colors.colSelected:this._colors.colNormal);
return $1.join("");
},
getRowClass:function($0){return "";
},
_postponedUpdateTableContent:function(){if(this._noTableContentUpdate){return;
}
if(!this._updateContentPlanned){qx.client.Timer.once(function(){if(this.getDisposed()){return;
}this._updateTableContent();
this._updateContentPlanned=false;
qx.ui.core.Widget.flushGlobalQueues();
},
this,
0);
this._updateContentPlanned=true;
}},
_updateTableContent:function(){if(this._noTableContentUpdate){return;
}
if(this._table){this._table.updateContent();
}}},
destruct:function(){this._disposeFields("_colors",
"_fontStyle",
"__font",
"_table");
}});




/* ID: qx.ui.table.selection.Manager */
qx.Class.define("qx.ui.table.selection.Manager",
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
properties:{selectionModel:{check:"qx.ui.table.selection.Model"}},
members:{handleMouseDown:function($0,
$1){if($1.isLeftButtonPressed()){var $2=this.getSelectionModel();
if(!$2.isSelectedIndex($0)){this._handleSelectEvent($0,
$1);
this._lastMouseDownHandled=true;
}else{this._lastMouseDownHandled=false;
}}else if($1.isRightButtonPressed()&&$1.getModifiers()==0){var $2=this.getSelectionModel();
if(!$2.isSelectedIndex($0)){$2.setSelectionInterval($0,
$0);
}}},
handleMouseUp:function($0,
$1){if($1.isLeftButtonPressed()&&!this._lastMouseDownHandled){this._handleSelectEvent($0,
$1);
}},
handleClick:function($0,
$1){},
handleSelectKeyDown:function($0,
$1){this._handleSelectEvent($0,
$1);
},
handleMoveKeyDown:function($0,
$1){var $2=this.getSelectionModel();
switch($1.getModifiers()){case 0:$2.setSelectionInterval($0,
$0);
break;
case qx.event.type.DomEvent.SHIFT_MASK:var $3=$2.getAnchorSelectionIndex();
if($3==-1){$2.setSelectionInterval($0,
$0);
}else{$2.setSelectionInterval($3,
$0);
}break;
}},
_handleSelectEvent:function($0,
$1){var $2=this.getSelectionModel();
var $3=$2.getLeadSelectionIndex();
var $4=$2.getAnchorSelectionIndex();
if($1.isShiftPressed()){if($0!=$3||$2.isSelectionEmpty()){if($4==-1){$4=$0;
}
if($1.isCtrlOrCommandPressed()){$2.addSelectionInterval($4,
$0);
}else{$2.setSelectionInterval($4,
$0);
}}}else if($1.isCtrlOrCommandPressed()){if($2.isSelectedIndex($0)){$2.removeSelectionInterval($0,
$0);
}else{$2.addSelectionInterval($0,
$0);
}}else{if(!($4==$3&&$4==$0)||$2.isSelectionEmpty()){$2.setSelectionInterval($0,
$0);
}}}}});




/* ID: qx.ui.table.selection.Model */
qx.Class.define("qx.ui.table.selection.Model",
{extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._selectedRangeArr=[];
this._anchorSelectionIndex=-1;
this._leadSelectionIndex=-1;
this.hasBatchModeRefCount=0;
this._hadChangeEventInBatchMode=false;
},
events:{"changeSelection":"qx.event.type.Event"},
statics:{NO_SELECTION:1,
SINGLE_SELECTION:2,
SINGLE_INTERVAL_SELECTION:3,
MULTIPLE_INTERVAL_SELECTION:4,
MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},
properties:{selectionMode:{init:2,
check:[1,
2,
3,
4,
5],
apply:"_applySelectionMode"}},
members:{_applySelectionMode:function($0){if($0==qx.ui.table.selection.Model.NO_SELECTION){this.clearSelection();
}},
setBatchMode:function($0){if($0){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;
if(this._hadChangeEventInBatchMode){this._hadChangeEventInBatchMode=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},
hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},
getAnchorSelectionIndex:function(){return this._anchorSelectionIndex;
},
getLeadSelectionIndex:function(){return this._leadSelectionIndex;
},
clearSelection:function(){if(!this.isSelectionEmpty()){this._clearSelection();
this._fireChangeSelection();
}},
isSelectionEmpty:function(){return this._selectedRangeArr.length==0;
},
getSelectedCount:function(){var $0=0;
for(var $1=0;$1<this._selectedRangeArr.length;$1++){var $2=this._selectedRangeArr[$1];
$0+=$2.maxIndex-$2.minIndex+1;
}return $0;
},
isSelectedIndex:function($0){for(var $1=0;$1<this._selectedRangeArr.length;$1++){var $2=this._selectedRangeArr[$1];
if($0>=$2.minIndex&&$0<=$2.maxIndex){return true;
}}return false;
},
getSelectedRanges:function(){var $0=[];
for(var $1=0;$1<this._selectedRangeArr.length;$1++){$0.push({minIndex:this._selectedRangeArr[$1].minIndex,
maxIndex:this._selectedRangeArr[$1].maxIndex});
}return $0;
},
iterateSelection:function($0,
$1){for(var $2=0;$2<this._selectedRangeArr.length;$2++){for(var $3=this._selectedRangeArr[$2].minIndex;$3<=this._selectedRangeArr[$2].maxIndex;$3++){$0.call($1,
$3);
}}},
setSelectionInterval:function($0,
$1){var $2=arguments.callee.self;
switch(this.getSelectionMode()){case $2.NO_SELECTION:return;
case $2.SINGLE_SELECTION:$0=$1;
break;
case $2.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);
try{for(var $3=$0;$3<=$1;$3++){if(!this.isSelectedIndex($3)){this._addSelectionInterval($3,
$3);
}else{this.removeSelectionInterval($3,
$3);
}}}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._clearSelection();
this._addSelectionInterval($0,
$1);
this._fireChangeSelection();
},
addSelectionInterval:function($0,
$1){var $2=qx.ui.table.selection.Model;
switch(this.getSelectionMode()){case $2.NO_SELECTION:return;
case $2.MULTIPLE_INTERVAL_SELECTION:case $2.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval($0,
$1);
this._fireChangeSelection();
break;
default:this.setSelectionInterval($0,
$1);
break;
}},
removeSelectionInterval:function($0,
$1){this._anchorSelectionIndex=$0;
this._leadSelectionIndex=$1;
var $2=Math.min($0,
$1);
var $3=Math.max($0,
$1);
for(var $4=0;$4<this._selectedRangeArr.length;$4++){var $5=this._selectedRangeArr[$4];
if($5.minIndex>$3){break;
}else if($5.maxIndex>=$2){var $6=($5.minIndex>=$2)&&($5.minIndex<=$3);
var $7=($5.maxIndex>=$2)&&($5.maxIndex<=$3);
if($6&&$7){this._selectedRangeArr.splice($4,
1);
$4--;
}else if($6){$5.minIndex=$3+1;
}else if($7){$5.maxIndex=$2-1;
}else{var $8={minIndex:$3+1,
maxIndex:$5.maxIndex};
this._selectedRangeArr.splice($4+1,
0,
$8);
$5.maxIndex=$2-1;
break;
}}}this._fireChangeSelection();
},
_clearSelection:function(){this._selectedRangeArr=[];
this._anchorSelectionIndex=-1;
this._leadSelectionIndex=-1;
},
_addSelectionInterval:function($0,
$1){this._anchorSelectionIndex=$0;
this._leadSelectionIndex=$1;
var $2=Math.min($0,
$1);
var $3=Math.max($0,
$1);
var $4=0;
for(;$4<this._selectedRangeArr.length;$4++){var $5=this._selectedRangeArr[$4];
if($5.minIndex>$2){break;
}}this._selectedRangeArr.splice($4,
0,
{minIndex:$2,
maxIndex:$3});
var $6=this._selectedRangeArr[0];
for(var $7=1;$7<this._selectedRangeArr.length;$7++){var $5=this._selectedRangeArr[$7];
if($6.maxIndex+1>=$5.minIndex){$6.maxIndex=Math.max($6.maxIndex,
$5.maxIndex);
this._selectedRangeArr.splice($7,
1);
$7--;
}else{$6=$5;
}}},
_dumpRanges:function(){var $0="Ranges:";
for(var $1=0;$1<this._selectedRangeArr.length;$1++){var $2=this._selectedRangeArr[$1];
$0+=" ["+$2.minIndex+".."+$2.maxIndex+"]";
}this.debug($0);
},
_fireChangeSelection:function(){if(this.hasBatchMode()){this._hadChangeEventInBatchMode=true;
}this.createDispatchEvent("changeSelection");
}},
destruct:function(){this._disposeFields("_selectedRangeArr");
}});




/* ID: qx.ui.table.IHeaderRenderer */
qx.Interface.define("qx.ui.table.IHeaderRenderer",
{members:{createHeaderCell:function($0){return true;
},
updateHeaderCell:function($0,
$1){return true;
}}});




/* ID: qx.ui.table.headerrenderer.Default */
qx.Class.define("qx.ui.table.headerrenderer.Default",
{extend:qx.core.Object,
implement:qx.ui.table.IHeaderRenderer,
statics:{STATE_SORTED:"sorted",
STATE_SORTED_ASCENDING:"sortedAscending"},
properties:{toolTip:{check:"String",
init:null,
nullable:true}},
members:{createHeaderCell:function($0){var $1=new qx.ui.basic.Atom();
$1.setAppearance("table-header-cell");
$1.setSelectable(false);
this.updateHeaderCell($0,
$1);
return $1;
},
updateHeaderCell:function($0,
$1){var $2=qx.ui.table.headerrenderer.Default;
$1.setLabel($0.name);
var $3=$1.getToolTip();
if(this.getToolTip()!=null){if($3==null){$3=new qx.ui.popup.ToolTip(this.getToolTip());
$1.setToolTip($3);
}else{$3.getAtom().setLabel(this.getToolTip());
}}$0.sorted?$1.addState($2.STATE_SORTED):$1.removeState($2.STATE_SORTED);
$0.sortedAscending?$1.addState($2.STATE_SORTED_ASCENDING):$1.removeState($2.STATE_SORTED_ASCENDING);
}}});




/* ID: qx.ui.table.ICellRenderer */
qx.Interface.define("qx.ui.table.ICellRenderer",
{members:{createDataCellHtml:function($0,
$1){return true;
}}});




/* ID: qx.ui.table.cellrenderer.Abstract */
qx.Class.define("qx.ui.table.cellrenderer.Abstract",
{type:"abstract",
implement:qx.ui.table.ICellRenderer,
extend:qx.core.Object,
construct:function(){var $0=arguments.callee.self;
if(!$0.stylesheet){$0.stylesheet=qx.html.StyleSheet.createElement(".qooxdoo-table-cell {"+"  position: absolute;"+"  top: 0px;"+"  height: 100%;"+"  overflow:hidden;"+"  text-overflow:ellipsis;"+"  -o-text-overflow: ellipsis;"+"  white-space:nowrap;"+"  border-right:1px solid #eeeeee;"+"  border-bottom:1px solid #eeeeee;"+"  padding : 0px 6px;"+"  cursor:default;"+(qx.core.Variant.isSet("qx.client",
"mshtml")?'':';-moz-user-select:none;')+"}"+".qooxdoo-table-cell-right {"+"  text-align:right"+" }"+".qooxdoo-table-cell-italic {"+"  font-style:italic"+" }"+".qooxdoo-table-cell-bold {"+"  font-weight:bold"+" }");
}},
members:{_getCellClass:function($0){return "qooxdoo-table-cell";
},
_getCellStyle:function($0){return $0.style||"";
},
_getContentHtml:function($0){return $0.value||"";
},
createDataCellHtml:function($0,
$1){$1.push('<div class="',
this._getCellClass($0),
'" style="',
'left:',
$0.styleLeft,
'px;',
'width:',
$0.styleWidth,
'px;',
this._getCellStyle($0),
'">',
this._getContentHtml($0),
"</div>");
}}});




/* ID: qx.ui.table.cellrenderer.Default */
qx.Class.define("qx.ui.table.cellrenderer.Default",
{extend:qx.ui.table.cellrenderer.Abstract,
statics:{STYLEFLAG_ALIGN_RIGHT:1,
STYLEFLAG_BOLD:2,
STYLEFLAG_ITALIC:4},
properties:{useAutoAlign:{check:"Boolean",
init:true}},
members:{_getStyleFlags:function($0){if(this.getUseAutoAlign()){if(typeof $0.value=="number"){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},
_getCellClass:function($0){var $1=arguments.callee.base.call(this,
$0);
if(!$1){return "";
}var $2=this._getStyleFlags($0);
if($2&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){$1+=" qooxdoo-table-cell-right";
}
if($2&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){$1+=" qooxdoo-table-cell-bold";
}
if($2&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){$1+=" qooxdoo-table-cell-italic";
}return $1;
},
_getContentHtml:function($0){return qx.html.String.escape(this._formatValue($0));
},
_formatValue:function($0){var $1=$0.value;
if($1==null){return "";
}
if(typeof $1=="string"){return $1;
}else if(typeof $1=="number"){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var $2=qx.ui.table.cellrenderer.Default._numberFormat.format($1);
}else if($1 instanceof Date){$2=qx.util.format.DateFormat.getDateInstance().format($1);
}else{$2=$1;
}return $2;
}}});




/* ID: qx.util.format.Format */
qx.Class.define("qx.util.format.Format",
{extend:qx.core.Object,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
members:{format:function($0){throw new Error("format is abstract");
},
parse:function($0){throw new Error("parse is abstract");
}}});




/* ID: qx.util.format.NumberFormat */
qx.Class.define("qx.util.format.NumberFormat",
{extend:qx.util.format.Format,
construct:function($0){arguments.callee.base.call(this);
this._locale=$0;
},
statics:{getIntegerInstance:function(){var $0=qx.util.format.NumberFormat;
if($0._integerInstance==null){$0._integerInstance=new $0();
$0._integerInstance.setMaximumFractionDigits(0);
}return $0._integerInstance;
},
getInstance:qx.lang.Function.returnInstance},
properties:{minimumIntegerDigits:{check:"Number",
init:0},
maximumIntegerDigits:{check:"Number",
nullable:true},
minimumFractionDigits:{check:"Number",
init:0},
maximumFractionDigits:{check:"Number",
nullable:true},
groupingUsed:{check:"Boolean",
init:true},
prefix:{check:"String",
init:""},
postfix:{check:"String",
init:""}},
members:{format:function($0){switch($0){case Infinity:return "Infinity";
case -Infinity:return "-Infinity";
case NaN:return "NaN";
}var $1=($0<0);
if($1){$0=-$0;
}
if(this.getMaximumFractionDigits()!=null){var $2=Math.pow(10,
this.getMaximumFractionDigits());
$0=Math.round($0*$2)/$2;
}var $3=String(Math.floor($0)).length;
var $4=""+$0;
var $5=$4.substring(0,
$3);
while($5.length<this.getMinimumIntegerDigits()){$5="0"+$5;
}
if(this.getMaximumIntegerDigits()!=null&&$5.length>this.getMaximumIntegerDigits()){$5=$5.substring($5.length-this.getMaximumIntegerDigits());
}var $6=$4.substring($3+1);
while($6.length<this.getMinimumFractionDigits()){$6+="0";
}
if(this.getMaximumFractionDigits()!=null&&$6.length>this.getMaximumFractionDigits()){$6=$6.substring(0,
this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var $7=$5;
$5="";
var $8;
for($8=$7.length;$8>3;$8-=3){$5=""+qx.locale.Number.getGroupSeparator(this._locale)+$7.substring($8-3,
$8)+$5;
}$5=$7.substring(0,
$8)+$5;
}var $9=this.getPrefix()?this.getPrefix():"";
var $a=this.getPostfix()?this.getPostfix():"";
var $b=$9+($1?"-":"")+$5;
if($6.length>0){$b+=""+qx.locale.Number.getDecimalSeparator(this._locale)+$6;
}$b+=$a;
return $b;
},
parse:function($0){var $1=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this._locale)+"");
var $2=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this._locale)+"");
var $3=new RegExp("^"+qx.lang.String.escapeRegexpChars(this.getPrefix())+'([-+]){0,1}'+'([0-9]{1,3}(?:'+$1+'{0,1}[0-9]{3}){0,})'+'('+$2+'\\d+){0,1}'+qx.lang.String.escapeRegexpChars(this.getPostfix())+"$");
var $4=$3.exec($0);
if($4==null){throw new Error("Number string '"+$0+"' does not match the number format");
}var $5=($4[1]=="-");
var $6=$4[2];
var $7=$4[3];
$6=$6.replace(new RegExp($1,
"g"),
"");
var $8=($5?"-":"")+$6;
if($7!=null&&$7.length!=0){$7=$7.replace(new RegExp($2),
"");
$8+="."+$7;
}return parseFloat($8);
}}});




/* ID: qx.locale.Number */
qx.Class.define("qx.locale.Number",
{statics:{getDecimalSeparator:function($0){return new qx.locale.LocalizedString("cldr_number_decimal_separator",
[],
$0);
},
getGroupSeparator:function($0){return new qx.locale.LocalizedString("cldr_number_group_separator",
[],
$0);
},
getPercentFormat:function($0){return new qx.locale.LocalizedString("cldr_number_percent_format",
[],
$0);
}}});




/* ID: qx.util.format.DateFormat */
qx.Class.define("qx.util.format.DateFormat",
{extend:qx.util.format.Format,
construct:function($0,
$1){arguments.callee.base.call(this);
if(!$1){this._locale=qx.locale.Manager.getInstance().getLocale();
}else{this._locale=$1;
}
if($0!=null){this._format=$0.toString();
}else{this._format=qx.locale.Date.getDateFormat("long",
this._locale)+" "+qx.locale.Date.getDateTimeFormat("HHmmss",
"HH:mm:ss",
this._locale);
}},
statics:{getDateTimeInstance:function(){var $0=qx.util.format.DateFormat;
var $1=qx.locale.Date.getDateFormat("long")+" "+qx.locale.Date.getDateTimeFormat("HHmmss",
"HH:mm:ss");
if($0._dateInstance==null||$0._format!=$1){$0._dateTimeInstance=new $0();
}return $0._dateTimeInstance;
},
getDateInstance:function(){var $0=qx.util.format.DateFormat;
var $1=qx.locale.Date.getDateFormat("short")+"";
if($0._dateInstance==null||$0._format!=$1){$0._dateInstance=new $0($1);
}return $0._dateInstance;
},
ASSUME_YEAR_2000_THRESHOLD:30,
LOGGING_DATE_TIME_FORMAT:"yyyy-MM-dd HH:mm:ss",
AM_MARKER:"am",
PM_MARKER:"pm",
MEDIUM_TIMEZONE_NAMES:["GMT"],
FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},
members:{__fillNumber:function($0,
$1){var $2=""+$0;
while($2.length<$1){$2="0"+$2;
}return $2;
},
__getDayInYear:function($0){var $1=new Date($0.getTime());
var $2=$1.getDate();
while($1.getMonth()!=0){$1.setDate(-1);
$2+=$1.getDate()+1;
}return $2;
},
__thursdayOfSameWeek:function($0){return new Date($0.getTime()+(3-(($0.getDay()+6)%7))*86400000);
},
__getWeekInYear:function($0){var $1=this.__thursdayOfSameWeek($0);
var $2=$1.getFullYear();
var $3=this.__thursdayOfSameWeek(new Date($2,
0,
4));
return Math.floor(1.5+($1.getTime()-$3.getTime())/86400000/7);
},
format:function($0){var $1=qx.util.format.DateFormat;
var $2=this._locale;
var $3=$0.getFullYear();
var $4=$0.getMonth();
var $5=$0.getDate();
var $6=$0.getDay();
var $7=$0.getHours();
var $8=$0.getMinutes();
var $9=$0.getSeconds();
var $a=$0.getMilliseconds();
var $b=$0.getTimezoneOffset()/60;
this.__initFormatTree();
var $c="";
for(var $d=0;$d<this.__formatTree.length;$d++){var $e=this.__formatTree[$d];
if($e.type=="literal"){$c+=$e.text;
}else{var $f=$e.character;
var $g=$e.size;
var $h="?";
switch($f){case 'y':if($g==2){$h=this.__fillNumber($3%100,
2);
}else if($g==4){$h=$3;
}break;
case 'D':$h=this.__fillNumber(this.__getDayInYear($0),
$g);
break;
case 'd':$h=this.__fillNumber($5,
$g);
break;
case 'w':$h=this.__fillNumber(this.__getWeekInYear($0),
$g);
break;
case 'E':if($g==2){$h=qx.locale.Date.getDayName("narrow",
$6,
$2);
}else if($g==3){$h=qx.locale.Date.getDayName("abbreviated",
$6,
$2);
}else if($g==4){$h=qx.locale.Date.getDayName("wide",
$6,
$2);
}break;
case 'M':if($g==1||$g==2){$h=this.__fillNumber($4+1,
$g);
}else if($g==3){$h=qx.locale.Date.getMonthName("abbreviated",
$4,
$2);
}else if($g==4){$h=qx.locale.Date.getMonthName("wide",
$4,
$2);
}break;
case 'a':$h=($7<12)?qx.locale.Date.getAmMarker($2):qx.locale.Date.getPmMarker($2);
break;
case 'H':$h=this.__fillNumber($7,
$g);
break;
case 'k':$h=this.__fillNumber(($7==0)?24:$7,
$g);
break;
case 'K':$h=this.__fillNumber($7%12,
$g);
break;
case 'h':$h=this.__fillNumber((($7%12)==0)?12:($7%12),
$g);
break;
case 'm':$h=this.__fillNumber($8,
$g);
break;
case 's':$h=this.__fillNumber($9,
$g);
break;
case 'S':$h=this.__fillNumber($a,
$g);
break;
case 'z':if($g==1){$h="GMT"+(($b<0)?"-":"+")+this.__fillNumber($b)+":00";
}else if($g==2){$h=$1.MEDIUM_TIMEZONE_NAMES[$b];
}else if($g==3){$h=$1.FULL_TIMEZONE_NAMES[$b];
}break;
case 'Z':$h=(($b<0)?"-":"+")+this.__fillNumber($b,
2)+"00";
}$c+=$h;
}}return $c;
},
parse:function($0){this.__initParseFeed();
var $1=this._parseFeed.regex.exec($0);
if($1==null){throw new Error("Date string '"+$0+"' does not match the date format: "+this._format);
}var $2={year:1970,
month:0,
day:1,
hour:0,
ispm:false,
min:0,
sec:0,
ms:0};
var $3=1;
for(var $4=0;$4<this._parseFeed.usedRules.length;$4++){var $5=this._parseFeed.usedRules[$4];
var $6=$1[$3];
if($5.field!=null){$2[$5.field]=parseInt($6,
10);
}else{$5.manipulator($2,
$6);
}$3+=($5.groups==null)?1:$5.groups;
}var $7=new Date($2.year,
$2.month,
$2.day,
($2.ispm)?($2.hour+12):$2.hour,
$2.min,
$2.sec,
$2.ms);
if($2.month!=$7.getMonth()||$2.year!=$7.getFullYear()){throw new Error("Error parsing date '"+$0+"': the value for day or month is too large");
}return $7;
},
__initFormatTree:function(){if(this.__formatTree!=null){return;
}this.__formatTree=[];
var $0;
var $1=0;
var $2="";
var $3=this._format;
var $4="default";
var $5=0;
while($5<$3.length){var $6=$3.charAt($5);
switch($4){case "quoted_literal":if($6=="'"){if($5+1>=$3.length){$5++;
break;
}var $7=$3.charAt($5+1);
if($7=="'"){$2+=$6;
$5++;
}else{$5++;
$4="unkown";
}}else{$2+=$6;
$5++;
}break;
case "wildcard":if($6==$0){$1++;
$5++;
}else{this.__formatTree.push({type:"wildcard",
character:$0,
size:$1});
$0=null;
$1=0;
$4="default";
}break;
default:if(($6>='a'&&$6<='z')||($6>='A'&&$6<='Z')){$0=$6;
$4="wildcard";
}else if($6=="'"){if($5+1>=$3.length){$2+=$6;
$5++;
break;
}var $7=$3.charAt($5+1);
if($7=="'"){$2+=$6;
$5++;
}$5++;
$4="quoted_literal";
}else{$4="default";
}
if($4!="default"){if($2.length>0){this.__formatTree.push({type:"literal",
text:$2});
$2="";
}}else{$2+=$6;
$5++;
}break;
}}if($0!=null){this.__formatTree.push({type:"wildcard",
character:$0,
size:$1});
}else if($2.length>0){this.__formatTree.push({type:"literal",
text:$2});
}},
__initParseFeed:function(){if(this._parseFeed!=null){return ;
}var $0=this._format;
this.__initParseRules();
this.__initFormatTree();
var $1=[];
var $2="^";
for(var $3=0;$3<this.__formatTree.length;$3++){var $4=this.__formatTree[$3];
if($4.type=="literal"){$2+=qx.lang.String.escapeRegexpChars($4.text);
}else{var $5=$4.character;
var $6=$4.size;
var $7;
for(var $8=0;$8<this._parseRules.length;$8++){var $9=this._parseRules[$8];
if($5==$9.pattern.charAt(0)&&$6==$9.pattern.length){$7=$9;
break;
}}if($7==null){var $a="";
for(var $b=0;$b<$6;$b++){$a+=$5;
}throw new Error("Malformed date format: "+$0+". Wildcard "+$a+" is not supported");
}else{$1.push($7);
$2+=$7.regex;
}}}$2+="$";
var $c;
try{$c=new RegExp($2);
}catch(exc){throw new Error("Malformed date format: "+$0);
}this._parseFeed={regex:$c,
"usedRules":$1,
pattern:$2};
},
__initParseRules:function(){var $0=qx.util.format.DateFormat;
if(this._parseRules!=null){return ;
}this._parseRules=[];
var $1=function($2,
$3){$3=parseInt($3,
10);
if($3<$0.ASSUME_YEAR_2000_THRESHOLD){$3+=2000;
}else if($3<100){$3+=1900;
}$2.year=$3;
};
var $4=function($2,
$3){$2.month=parseInt($3,
10)-1;
};
var $5=function($2,
$3){$2.ispm=($3==$0.PM_MARKER);
};
var $6=function($2,
$3){$2.hour=parseInt($3,
10)%24;
};
var $7=function($2,
$3){$2.hour=parseInt($3,
10)%12;
};
var $8=function($2,
$3){return;
};
var $9=qx.locale.Date.getMonthNames("abbreviated",
this._locale);
for(var $a=0;$a<$9.length;$a++){$9[$a]=qx.lang.String.escapeRegexpChars($9[$a].toString());
}var $b=function($2,
$3){$3=qx.lang.String.escapeRegexpChars($3);
$2.month=$9.indexOf($3);
};
var $c=qx.locale.Date.getMonthNames("wide",
this._locale);
for(var $a=0;$a<$c.length;$a++){$c[$a]=qx.lang.String.escapeRegexpChars($c[$a].toString());
}var $d=function($2,
$3){$3=qx.lang.String.escapeRegexpChars($3);
$2.month=$c.indexOf($3);
};
var $e=qx.locale.Date.getDayNames("narrow",
this._locale);
for(var $a=0;$a<$e.length;$a++){$e[$a]=qx.lang.String.escapeRegexpChars($e[$a].toString());
}var $f=function($2,
$3){$3=qx.lang.String.escapeRegexpChars($3);
$2.month=$e.indexOf($3);
};
var $g=qx.locale.Date.getDayNames("abbreviated",
this._locale);
for(var $a=0;$a<$g.length;$a++){$g[$a]=qx.lang.String.escapeRegexpChars($g[$a].toString());
}var $h=function($2,
$3){$3=qx.lang.String.escapeRegexpChars($3);
$2.month=$g.indexOf($3);
};
var $i=qx.locale.Date.getDayNames("wide",
this._locale);
for(var $a=0;$a<$i.length;$a++){$i[$a]=qx.lang.String.escapeRegexpChars($i[$a].toString());
}var $j=function($2,
$3){$3=qx.lang.String.escapeRegexpChars($3);
$2.month=$i.indexOf($3);
};
this._parseRules.push({pattern:"yyyy",
regex:"(\\d\\d(\\d\\d)?)",
groups:2,
manipulator:$1});
this._parseRules.push({pattern:"yy",
regex:"(\\d\\d)",
manipulator:$1});
this._parseRules.push({pattern:"M",
regex:"(\\d\\d?)",
manipulator:$4});
this._parseRules.push({pattern:"MM",
regex:"(\\d\\d?)",
manipulator:$4});
this._parseRules.push({pattern:"MMM",
regex:"("+$9.join("|")+")",
manipulator:$b});
this._parseRules.push({pattern:"MMMM",
regex:"("+$c.join("|")+")",
manipulator:$d});
this._parseRules.push({pattern:"dd",
regex:"(\\d\\d?)",
field:"day"});
this._parseRules.push({pattern:"d",
regex:"(\\d\\d?)",
field:"day"});
this._parseRules.push({pattern:"EE",
regex:"("+$e.join("|")+")",
manipulator:$f});
this._parseRules.push({pattern:"EEE",
regex:"("+$g.join("|")+")",
manipulator:$h});
this._parseRules.push({pattern:"EEEE",
regex:"("+$i.join("|")+")",
manipulator:$j});
this._parseRules.push({pattern:"a",
regex:"("+$0.AM_MARKER+"|"+$0.PM_MARKER+")",
manipulator:$5});
this._parseRules.push({pattern:"HH",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"H",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"kk",
regex:"(\\d\\d?)",
manipulator:$6});
this._parseRules.push({pattern:"k",
regex:"(\\d\\d?)",
manipulator:$6});
this._parseRules.push({pattern:"KK",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"K",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"hh",
regex:"(\\d\\d?)",
manipulator:$7});
this._parseRules.push({pattern:"h",
regex:"(\\d\\d?)",
manipulator:$7});
this._parseRules.push({pattern:"mm",
regex:"(\\d\\d?)",
field:"min"});
this._parseRules.push({pattern:"m",
regex:"(\\d\\d?)",
field:"min"});
this._parseRules.push({pattern:"ss",
regex:"(\\d\\d?)",
field:"sec"});
this._parseRules.push({pattern:"s",
regex:"(\\d\\d?)",
field:"sec"});
this._parseRules.push({pattern:"SSS",
regex:"(\\d\\d?\\d?)",
field:"ms"});
this._parseRules.push({pattern:"SS",
regex:"(\\d\\d?\\d?)",
field:"ms"});
this._parseRules.push({pattern:"S",
regex:"(\\d\\d?\\d?)",
field:"ms"});
this._parseRules.push({pattern:"Z",
regex:"((\\+|\\-)\\d\\d:?\\d\\d)",
manipulator:$8});
this._parseRules.push({pattern:"z",
regex:"([a-zA-Z]+)",
manipulator:$8});
}},
destruct:function(){this._disposeFields("_format",
"_locale",
"__formatTree",
"_parseFeed",
"_parseRules");
}});




/* ID: qx.locale.Date */
qx.Class.define("qx.locale.Date",
{statics:{getAmMarker:function($0){return new qx.locale.LocalizedString("cldr_am",
[],
$0);
},
getPmMarker:function($0){return new qx.locale.LocalizedString("cldr_pm",
[],
$0);
},
getDayNames:function($0,
$1){if($0!="abbreviated"&&$0!="narrow"&&$0!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var $2=["sun",
"mon",
"tue",
"wed",
"thu",
"fri",
"sat"];
var $3=[];
for(var $4=0;$4<$2.length;$4++){var $5="cldr_day_"+$0+"_"+$2[$4];
$3.push(new qx.locale.LocalizedString($5,
[],
$1));
}return $3;
},
getDayName:function($0,
$1,
$2){if($0!="abbreviated"&&$0!="narrow"&&$0!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var $3=["sun",
"mon",
"tue",
"wed",
"thu",
"fri",
"sat"];
var $4="cldr_day_"+$0+"_"+$3[$1];
return new qx.locale.LocalizedString($4,
[],
$2);
},
getMonthNames:function($0,
$1){if($0!="abbreviated"&&$0!="narrow"&&$0!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var $2=[];
for(var $3=0;$3<12;$3++){var $4="cldr_month_"+$0+"_"+($3+1);
$2.push(new qx.locale.LocalizedString($4,
[],
$1));
}return $2;
},
getMonthName:function($0,
$1,
$2){if($0!="abbreviated"&&$0!="narrow"&&$0!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var $3="cldr_month_"+$0+"_"+($1+1);
return new qx.locale.LocalizedString($3,
[],
$2);
},
getDateFormat:function($0,
$1){if($0!="short"&&$0!="medium"&&$0!="long"&&$0!="full"){throw new Error('format must be one of "short", "medium", "long", "full"');
}var $2="cldr_date_format_"+$0;
return new qx.locale.LocalizedString($2,
[],
$1);
},
getDateTimeFormat:function($0,
$1,
$2){var $3="cldr_date_time_format_"+$0;
var $4=qx.locale.Manager.getInstance().translate($3,
[],
$2);
if($4==$3){$4=$1;
}return $4;
},
getTimeFormat:function($0,
$1){if($0!="short"&&$0!="medium"&&$0!="long"&&$0!="full"){throw new Error('format must be one of "short", "medium", "long", "full"');
}var $2="cldr_time_format_"+$0;
var $3=qx.locale.Manager.getInstance().translate($2,
[],
$1);
if($3!=$2){return $3;
}
switch($0){case "short":case "medium":return qx.locale.Date.getDateTimeFormat("HHmm",
"HH:mm");
case "long":return qx.locale.Date.getDateTimeFormat("HHmmss",
"HH:mm:ss");
case "full":return qx.locale.Date.getDateTimeFormat("HHmmsszz",
"HH:mm:ss zz");
default:throw new Error("This case should never happen.");
}},
getWeekStart:function($0){var $1={"MV":5,
"AE":6,
"AF":6,
"BH":6,
"DJ":6,
"DZ":6,
"EG":6,
"ER":6,
"ET":6,
"IQ":6,
"IR":6,
"JO":6,
"KE":6,
"KW":6,
"LB":6,
"LY":6,
"MA":6,
"OM":6,
"QA":6,
"SA":6,
"SD":6,
"SO":6,
"TN":6,
"YE":6,
"AS":0,
"AU":0,
"AZ":0,
"BW":0,
"CA":0,
"CN":0,
"FO":0,
"GE":0,
"GL":0,
"GU":0,
"HK":0,
"IE":0,
"IL":0,
"IS":0,
"JM":0,
"JP":0,
"KG":0,
"KR":0,
"LA":0,
"MH":0,
"MN":0,
"MO":0,
"MP":0,
"MT":0,
"NZ":0,
"PH":0,
"PK":0,
"SG":0,
"TH":0,
"TT":0,
"TW":0,
"UM":0,
"US":0,
"UZ":0,
"VI":0,
"ZA":0,
"ZW":0,
"MW":0,
"NG":0,
"TJ":0};
var $2=qx.locale.Date._getTerritory($0);
return $1[$2]!=null?$1[$2]:1;
},
getWeekendStart:function($0){var $1={"EG":5,
"IL":5,
"SY":5,
"IN":0,
"AE":4,
"BH":4,
"DZ":4,
"IQ":4,
"JO":4,
"KW":4,
"LB":4,
"LY":4,
"MA":4,
"OM":4,
"QA":4,
"SA":4,
"SD":4,
"TN":4,
"YE":4};
var $2=qx.locale.Date._getTerritory($0);
return $1[$2]!=null?$1[$2]:6;
},
getWeekendEnd:function($0){var $1={"AE":5,
"BH":5,
"DZ":5,
"IQ":5,
"JO":5,
"KW":5,
"LB":5,
"LY":5,
"MA":5,
"OM":5,
"QA":5,
"SA":5,
"SD":5,
"TN":5,
"YE":5,
"AF":5,
"IR":5,
"EG":6,
"IL":6,
"SY":6};
var $2=qx.locale.Date._getTerritory($0);
return $1[$2]!=null?$1[$2]:0;
},
isWeekend:function($0,
$1){var $2=qx.locale.Date.getWeekendStart($1);
var $3=qx.locale.Date.getWeekendEnd($1);
if($3>$2){return (($0>=$2)&&($0<=$3));
}else{return (($0>=$2)||($0<=$3));
}},
_getTerritory:function($0){if($0){var $1=$0.split("_")[1]||$0;
}else{$1=qx.locale.Manager.getInstance().getTerritory()||qx.locale.Manager.getInstance().getLanguage();
}return $1.toUpperCase();
}}});




/* ID: qx.ui.table.ICellEditorFactory */
qx.Interface.define("qx.ui.table.ICellEditorFactory",
{members:{createCellEditor:function($0){return true;
},
getCellEditorValue:function($0){return true;
}}});




/* ID: qx.ui.table.celleditor.TextField */
qx.Class.define("qx.ui.table.celleditor.TextField",
{extend:qx.core.Target,
implement:qx.ui.table.ICellEditorFactory,
construct:function(){arguments.callee.base.call(this);
},
properties:{validationFunction:{check:"Function",
nullable:true,
init:null}},
members:{createCellEditor:function($0){var $1=new qx.ui.form.TextField;
$1.setAppearance("table-editor-textfield");
$1.setLiveUpdate(true);
$1.originalValue=$0.value;
if($0.value===null){$0.value="";
}$1.setValue(""+$0.value);
$1.addEventListener("appear",
function(){this.selectAll();
});
return $1;
},
getCellEditorValue:function($0){var $1=$0.getValue();
var $2=this.getValidationFunction();
if(!this._done&&$2){$1=$2($1,
$0.originalValue);
this._done=true;
}
if(typeof $0.originalValue=="number"){$1=parseFloat($1);
}return $1;
}}});




/* ID: qx.ui.table.columnmodel.Basic */
qx.Class.define("qx.ui.table.columnmodel.Basic",
{extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
},
events:{"widthChanged":"qx.event.type.DataEvent",
"visibilityChangedPre":"qx.event.type.DataEvent",
"visibilityChanged":"qx.event.type.DataEvent",
"orderChanged":"qx.event.type.DataEvent"},
statics:{DEFAULT_WIDTH:100,
DEFAULT_HEADER_RENDERER:new qx.ui.table.headerrenderer.Default,
DEFAULT_DATA_RENDERER:new qx.ui.table.cellrenderer.Default,
DEFAULT_EDITOR_FACTORY:new qx.ui.table.celleditor.TextField},
members:{init:function($0){this._columnDataArr=[];
var $1=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var $2=qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER;
var $3=qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER;
var $4=qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY;
this._overallColumnArr=[];
this._visibleColumnArr=[];
for(var $5=0;$5<$0;$5++){this._columnDataArr[$5]={width:$1,
headerRenderer:$2,
dataRenderer:$3,
editorFactory:$4};
this._overallColumnArr[$5]=$5;
this._visibleColumnArr[$5]=$5;
}this._colToXPosMap=null;
},
setColumnWidth:function($0,
$1){var $2=this._columnDataArr[$0].width;
if($2!=$1){this._columnDataArr[$0].width=$1;
var $3={col:$0,
newWidth:$1,
oldWidth:$2};
this.createDispatchDataEvent("widthChanged",
$3);
}},
getColumnWidth:function($0){return this._columnDataArr[$0].width;
},
setHeaderCellRenderer:function($0,
$1){this._columnDataArr[$0].headerRenderer=$1;
},
getHeaderCellRenderer:function($0){return this._columnDataArr[$0].headerRenderer;
},
setDataCellRenderer:function($0,
$1){this._columnDataArr[$0].dataRenderer=$1;
},
getDataCellRenderer:function($0){return this._columnDataArr[$0].dataRenderer;
},
setCellEditorFactory:function($0,
$1){this._columnDataArr[$0].editorFactory=$1;
},
getCellEditorFactory:function($0){return this._columnDataArr[$0].editorFactory;
},
_getColToXPosMap:function(){if(this._colToXPosMap==null){this._colToXPosMap={};
for(var $0=0;$0<this._overallColumnArr.length;$0++){var $1=this._overallColumnArr[$0];
this._colToXPosMap[$1]={overX:$0};
}
for(var $2=0;$2<this._visibleColumnArr.length;$2++){var $1=this._visibleColumnArr[$2];
this._colToXPosMap[$1].visX=$2;
}}return this._colToXPosMap;
},
getVisibleColumnCount:function(){return this._visibleColumnArr.length;
},
getVisibleColumnAtX:function($0){return this._visibleColumnArr[$0];
},
getVisibleX:function($0){return this._getColToXPosMap()[$0].visX;
},
getOverallColumnCount:function(){return this._overallColumnArr.length;
},
getOverallColumnAtX:function($0){return this._overallColumnArr[$0];
},
getOverallX:function($0){return this._getColToXPosMap()[$0].overX;
},
isColumnVisible:function($0){return (this._getColToXPosMap()[$0].visX!=null);
},
setColumnVisible:function($0,
$1){if($1!=this.isColumnVisible($0)){if($1){var $2=this._getColToXPosMap();
var $3=$2[$0].overX;
if($3==null){throw new Error("Showing column failed: "+$0+". The column is not added to this TablePaneModel.");
}var $4;
for(var $5=$3+1;$5<this._overallColumnArr.length;$5++){var $6=this._overallColumnArr[$5];
var $7=$2[$6].visX;
if($7!=null){$4=$7;
break;
}}if($4==null){$4=this._visibleColumnArr.length;
}this._visibleColumnArr.splice($4,
0,
$0);
}else{var $8=this.getVisibleX($0);
this._visibleColumnArr.splice($8,
1);
}this._colToXPosMap=null;
if(!this._internalChange){var $9={col:$0,
visible:$1};
this.createDispatchDataEvent("visibilityChangedPre",
$9);
this.createDispatchDataEvent("visibilityChanged",
$9);
}}},
moveColumn:function($0,
$1){this._internalChange=true;
var $2=this._overallColumnArr[$0];
var $3=this.isColumnVisible($2);
if($3){this.setColumnVisible($2,
false);
}this._overallColumnArr.splice($0,
1);
this._overallColumnArr.splice($1,
0,
$2);
this._colToXPosMap=null;
if($3){this.setColumnVisible($2,
true);
}this._internalChange=false;
var $4={col:$2,
fromOverXPos:$0,
toOverXPos:$1};
this.createDispatchDataEvent("orderChanged",
$4);
}},
destruct:function(){this._disposeFields("_overallColumnArr",
"_visibleColumnArr",
"_columnDataArr",
"_colToXPosMap");
}});




/* ID: qx.ui.table.pane.Pane */
qx.Class.define("qx.ui.table.pane.Pane",
{extend:qx.ui.basic.Terminator,
construct:function($0){arguments.callee.base.call(this);
this._paneScroller=$0;
this._lastColCount=0;
this._lastRowCount=0;
},
properties:{appearance:{refine:true,
init:"table-pane"},
firstVisibleRow:{check:"Number",
init:0,
apply:"_applyFirstVisibleRow"},
visibleRowCount:{check:"Number",
init:0,
apply:"_applyVisibleRowCount"},
maxCacheLines:{check:"Number",
init:1000,
apply:"_applyMaxCacheLines"}},
members:{_applyFirstVisibleRow:function($0,
$1){this._updateContent(false,
$0-$1);
},
_applyVisibleRowCount:function($0,
$1){this._updateContent();
},
_afterAppear:function(){arguments.callee.base.call(this);
if(this._updateWantedWhileInvisible){this._updateContent();
this._updateWantedWhileInvisible=false;
}},
getPaneScroller:function(){return this._paneScroller;
},
getTable:function(){return this._paneScroller.getTable();
},
setFocusedCell:function($0,
$1,
$2){if($0!=this._focusedCol||$1!=this._focusedRow){var $3=this._focusedRow;
this._focusedCol=$0;
this._focusedRow=$1;
if($1!=$3&&!$2){this._updateContent(false,
null,
$3,
true);
this._updateContent(false,
null,
$1,
true);
}}},
_onSelectionChanged:function($0){this._updateContent(false,
null,
null,
true);
},
_onFocusChanged:function($0){this._updateContent(false,
null,
null,
true);
},
_onColWidthChanged:function($0){this._updateContent(true);
},
_onColOrderChanged:function($0){this._updateContent(true);
},
_onPaneModelChanged:function($0){this._updateContent(true);
},
_onTableModelDataChanged:function($0){var $1=$0.getData?$0.getData():null;
this.__rowCacheClear();
var $2=this.getFirstVisibleRow();
var $3=this.getVisibleRowCount();
if($1==null||$1.lastRow==-1||$1.lastRow>=$2&&$1.firstRow<$2+$3){this._updateContent();
}},
_onTableModelMetaDataChanged:function($0){this._updateContent(true);
},
__rowCache:[],
__rowCacheCount:0,
_applyMaxCacheLines:function($0,
$1){if(this.__rowCacheCount>=$0&&$0!==-1){this.__rowCacheClear();
}},
__rowCacheClear:function(){this.__rowCache=[];
this.__rowCacheCount=0;
},
__rowCacheGet:function($0,
$1,
$2){if(!$1&&!$2&&this.__rowCache[$0]){return this.__rowCache[$0];
}else{return null;
}},
__rowCacheSet:function($0,
$1,
$2,
$3){if(!$2&&!$3&&!this.__rowCache[$0]){this._applyMaxCacheLines(this.getMaxCacheLines());
this.__rowCache[$0]=$1;
this.__rowCacheCount+=1;
}},
_updateContent:function($0,
$1,
$2,
$3){if($0){this.__rowCacheClear();
}
if(!this.isSeeable()){this._updateWantedWhileInvisible=true;
return;
}
if(this._layoutPending){window.clearTimeout(this._layoutPending);
this._updateAllRows();
return;
}if($1&&Math.abs($1)<=Math.min(10,
this.getVisibleRowCount())){this._scrollContent($1);
}else if($3&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles($2);
}else{this._updateAllRows();
}},
_updateRowStyles:function($0){var $1=this.getElement();
if(!$1.firstChild){this._updateAllRows();
return;
}var $2=this.getTable();
var $3=$2.getSelectionModel();
var $4=$2.getTableModel();
var $5=$2.getDataRowRenderer();
var $6=$1.firstChild.childNodes;
var $7={table:$2};
var $8=this.getFirstVisibleRow();
var $9=0;
var $a=$6.length;
if($0!=null){var $b=$0-$8;
if($b>=0&&$b<$a){$8=$0;
$9=$b;
$a=$b+1;
}else return;
}
for(;$9<$a;$9++,
$8++){$7.row=$8;
$7.selected=$3.isSelectedIndex($8);
$7.focusedRow=(this._focusedRow==$8);
$7.rowData=$4.getRowData($8);
$5.updateDataRowElement($7,
$6[$9]);
}},
_getRowsHtml:function($0,
$1){var $2=this.getTable();
var $3=$2.getSelectionModel();
var $4=$2.getTableModel();
var $5=$2.getTableColumnModel();
var $6=this.getPaneScroller().getTablePaneModel();
var $7=$2.getDataRowRenderer();
$4.prefetchRows($0,
$0+$1-1);
var $8=$2.getRowHeight();
var $9=$6.getColumnCount();
var $a=0;
var $b=[];
for(var $c=0;$c<$9;$c++){var $d=$6.getColumnAtX($c);
var $e=$5.getColumnWidth($d);
$b.push({col:$d,
xPos:$c,
editable:$4.isColumnEditable($d),
focusedCol:this._focusedCol==$d,
styleLeft:$a,
styleWidth:$e});
$a+=$e;
}var $f=[];
for(var $g=$0;$g<$0+$1;$g++){var $h=$3.isSelectedIndex($g);
var $i=(this._focusedRow==$g);
var $j=this.__rowCacheGet($g,
$h,
$i);
if($j){$f.push($j);
continue;
}var $k=[];
var $l={table:$2};
$l.styleHeight=$8;
$l.row=$g;
$l.selected=$h;
$l.focusedRow=$i;
$l.rowData=$4.getRowData($g);
$k.push('<div ');
var $m=$7.getRowClass($l);
if($m){$k.push('class="',
$m,
'" ');
}var $n=$7.createRowStyle($l);
$n+=";position:relative;height:"+$8+"px; width:"+$6.getTotalWidth()+"px;";
if($n){$k.push('style="',
$n,
'" ');
}$k.push('>');
for(var $c=0;$c<$9;$c++){var $o=$b[$c];
for(var $p in $o){$l[$p]=$o[$p];
}var $d=$l.col;
$l.value=$4.getValue($d,
$g);
var $q=$5.getDataCellRenderer($d);
$q.createDataCellHtml($l,
$k);
}$k.push('</div>');
var $r=$k.join("");
this.__rowCacheSet($g,
$r,
$h,
$i);
$f.push($r);
}return $f.join("");
},
_scrollContent:function($0){if(!this.getElement().firstChild){this._updateAllRows();
return;
}var $1=this.getElement().firstChild;
var $2=$1.childNodes;
var $3=this.getVisibleRowCount();
var $4=this.getFirstVisibleRow();
var $5=this.getTable().getTableModel().getRowCount();
if($4+$3>$5){this._updateAllRows();
return;
}var $6=$0<0?$3+$0:0;
var $7=$0<0?0:$3-$0;
for($b=Math.abs($0)-1;$b>=0;$b--){var $8=$2[$6];
try{$1.removeChild($8);
}catch(e){break;
}}if(!this._tableContainer){this._tableContainer=document.createElement("div");
}var $9='<div>';
$9+=this._getRowsHtml($4+$7,
Math.abs($0));
$9+='</div>';
this._tableContainer.innerHTML=$9;
var $a=this._tableContainer.firstChild.childNodes;
if($0>0){for(var $b=$a.length-1;$b>=0;$b--){var $8=$a[0];
$1.appendChild($8);
}}else{for(var $b=$a.length-1;$b>=0;$b--){var $8=$a[$a.length-1];
$1.insertBefore($8,
$1.firstChild);
}}this._updateRowStyles(this._focusedRow-$0);
this._updateRowStyles(this._focusedRow);
if(qx.core.Variant.isSet("qx.client",
"gecko")){$8.offsetHeight;
}},
_updateAllRows:function(){var $0=this.getTable();
var $1=$0.getTableModel();
var $2=this.getPaneScroller().getTablePaneModel();
var $3=$2.getColumnCount();
var $4=$0.getRowHeight();
var $5=this.getFirstVisibleRow();
var $6=this.getVisibleRowCount();
var $7=$1.getRowCount();
if($5+$6>$7){$6=Math.max(0,
$7-$5);
}var $8=$2.getTotalWidth();
var $9=["<div style='",
"width: ",
$8,
"px;",
"line-height: ",
$4,
"px;",
"overflow: hidden;",
"font-size: 11px;",
"font-family: 'Segoe UI', Corbel, Calibri, Tahoma, 'Lucida Sans Unicode', sans-serif;",
"'>",
this._getRowsHtml($5,
$6),
"</div>"];
var $a=this.getElement();
var $b=$9.join("");
var $c=this;
this._layoutPending=window.setTimeout(function(){$a.innerHTML=$b;
if(qx.core.Variant.isSet("qx.client",
"gecko")){$a.childNodes[0].offsetHeight;
}$c._layoutPending=null;
},
10);
this.setHeight($6*$4);
this._lastColCount=$3;
this._lastRowCount=$6;
}},
destruct:function(){this._disposeObjects("_paneScroller");
}});




/* ID: qx.ui.table.pane.Header */
qx.Class.define("qx.ui.table.pane.Header",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function($0){arguments.callee.base.call(this);
this._paneScroller=$0;
},
properties:{appearance:{refine:true,
init:"table-header"}},
members:{getPaneScroller:function(){return this._paneScroller;
},
getTable:function(){return this._paneScroller.getTable();
},
_onColWidthChanged:function($0){var $1=$0.getData();
this.setColumnWidth($1.col,
$1.newWidth);
},
_onColOrderChanged:function($0){this._updateContent(true);
},
_onPaneModelChanged:function($0){this._updateContent(true);
},
_onTableModelMetaDataChanged:function($0){this._updateContent();
},
setColumnWidth:function($0,
$1){var $2=this.getPaneScroller().getTablePaneModel().getX($0);
var $3=this.getChildren();
if($3[$2]!=null){$3[$2].setWidth($1);
}},
setMouseOverColumn:function($0){if($0!=this._lastMouseOverColumn){var $1=this.getPaneScroller().getTablePaneModel();
var $2=this.getChildren();
if(this._lastMouseOverColumn!=null){var $3=$2[$1.getX(this._lastMouseOverColumn)];
if($3!=null){$3.removeState("mouseover");
}}
if($0!=null){$2[$1.getX($0)].addState("mouseover");
}this._lastMouseOverColumn=$0;
}},
showColumnMoveFeedback:function($0,
$1){var $2=this.getElement();
if(this._moveFeedback==null){var $3=this.getPaneScroller().getTablePaneModel().getX($0);
var $4=this.getChildren()[$3];
var $5=this.getTable().getTableModel();
var $6=this.getTable().getTableColumnModel();
var $7={xPos:$3,
col:$0,
name:$5.getColumnName($0)};
var $8=$6.getHeaderCellRenderer($0);
var $9=$8.createHeaderCell($7);
$9.setWidth($4.getBoxWidth());
$9.setHeight($4.getBoxHeight());
$9.setZIndex(1000000);
$9.setOpacity(0.8);
$9.setTop(qx.html.Location.getClientBoxTop($2));
this.getTopLevelWidget().add($9);
this._moveFeedback=$9;
}this._moveFeedback.setLeft(qx.bom.element.Location.getLeft($2)+$1);
},
hideColumnMoveFeedback:function(){if(this._moveFeedback!=null){this.getTopLevelWidget().remove(this._moveFeedback);
this._moveFeedback.dispose();
this._moveFeedback=null;
}},
isShowingColumnMoveFeedback:function(){return this._moveFeedback!=null;
},
_updateContent:function($0){var $1=this.getTable().getTableModel();
var $2=this.getTable().getTableColumnModel();
var $3=this.getPaneScroller().getTablePaneModel();
var $4=this.getChildren();
var $5=$3.getColumnCount();
var $6=$1.getSortColumnIndex();
if($0){this._cleanUpCells();
}var $7={};
$7.sortedAscending=$1.isSortAscending();
for(var $8=0;$8<$5;$8++){var $9=$3.getColumnAtX($8);
var $a=$2.getColumnWidth($9);
var $b=$2.getHeaderCellRenderer($9);
$7.xPos=$8;
$7.col=$9;
$7.name=$1.getColumnName($9);
$7.editable=$1.isColumnEditable($9);
$7.sorted=($9==$6);
var $c=$4[$8];
if($c==null){$c=$b.createHeaderCell($7);
$c.set({width:$a,
height:"100%"});
this.add($c);
}else{$b.updateHeaderCell($7,
$c);
}}},
_cleanUpCells:function(){var $0=this.getChildren();
for(var $1=$0.length-1;$1>=0;$1--){var $2=$0[$1];
this.remove($2);
$2.dispose();
}}},
destruct:function(){this._disposeObjects("_paneScroller");
}});




/* ID: qx.ui.table.pane.Scroller */
qx.Class.define("qx.ui.table.pane.Scroller",
{extend:qx.ui.layout.VerticalBoxLayout,
construct:function($0){arguments.callee.base.call(this);
this._table=$0;
this._verScrollBar=new qx.ui.basic.ScrollBar(false);
this._horScrollBar=new qx.ui.basic.ScrollBar(true);
var $1=this._verScrollBar.getPreferredBoxWidth();
this._verScrollBar.setWidth("auto");
this._horScrollBar.setHeight("auto");
this._horScrollBar.setPaddingRight($1);
this._horScrollBar.addEventListener("changeValue",
this._onScrollX,
this);
this._verScrollBar.addEventListener("changeValue",
this._onScrollY,
this);
this._header=this.getTable().getNewTablePaneHeader()(this);
this._header.set({width:"auto",
height:"auto"});
this._headerClipper=new qx.ui.layout.CanvasLayout;
this._headerClipper.setDimension("1*",
"auto");
this._headerClipper.setOverflow("hidden");
this._headerClipper.add(this._header);
this._spacer=new qx.ui.basic.Terminator;
this._spacer.setWidth($1);
this._top=new qx.ui.layout.HorizontalBoxLayout;
this._top.setHeight("auto");
this._top.add(this._headerClipper,
this._spacer);
this._tablePane=this.getTable().getNewTablePane()(this);
this._tablePane.set({width:"auto",
height:"auto"});
this._showCellFocusIndicator=this.getShowCellFocusIndicator();
this._focusIndicator=new qx.ui.table.pane.FocusIndicator(this);
this._paneClipper=new qx.ui.layout.CanvasLayout;
this._paneClipper.setWidth("1*");
this._paneClipper.setOverflow("hidden");
this._paneClipper.add(this._tablePane,
this._focusIndicator);
this._paneClipper.addEventListener("mousewheel",
this._onmousewheel,
this);
var $2=new qx.ui.layout.HorizontalBoxLayout;
$2.setHeight("1*");
$2.add(this._paneClipper,
this._verScrollBar);
this.add(this._top,
$2,
this._horScrollBar);
this._headerClipper.addEventListener("changeCapture",
this._onChangeCaptureHeader,
this);
this._headerClipper.addEventListener("mousemove",
this._onmousemoveHeader,
this);
this._paneClipper.addEventListener("mousemove",
this._onmousemovePane,
this);
this._headerClipper.addEventListener("mousedown",
this._onmousedownHeader,
this);
this._paneClipper.addEventListener("mousedown",
this._onmousedownPane,
this);
this._focusIndicator.addEventListener("mouseup",
this._onMouseupFocusIndicator,
this);
this._headerClipper.addEventListener("mouseup",
this._onmouseupHeader,
this);
this._paneClipper.addEventListener("mouseup",
this._onmouseupPane,
this);
this._headerClipper.addEventListener("click",
this._onclickHeader,
this);
this._paneClipper.addEventListener("click",
this._onclickPane,
this);
this._paneClipper.addEventListener("contextmenu",
this._onContextMenu,
this);
this._paneClipper.addEventListener("dblclick",
this._ondblclickPane,
this);
this.addEventListener("mouseout",
this._onmouseout,
this);
var $3=this.getTable().getTableModel();
this._lastRowCount=$3?$3.getRowCount():0;
this.initScrollTimeout();
},
statics:{MIN_COLUMN_WIDTH:10,
RESIZE_REGION_RADIUS:5,
CLICK_TOLERANCE:5,
HORIZONTAL_SCROLLBAR:1,
VERTICAL_SCROLLBAR:2,
CURSOR_RESIZE_HORIZONTAL:(qx.core.Client.getInstance().isGecko()&&(qx.core.Client.getInstance().getMajor()>1||qx.core.Client.getInstance().getMinor()>=8))?"ew-resize":"e-resize"},
events:{"changeScrollY":"qx.event.type.ChangeEvent",
"changeScrollX":"qx.event.type.ChangeEvent",
"cellClick":"qx.ui.table.pane.CellEvent",
"cellDblclick":"qx.ui.table.pane.CellEvent",
"cellContextmenu":"qx.ui.table.pane.CellEvent"},
properties:{horizontalScrollBarVisible:{check:"Boolean",
init:true,
apply:"_applyHorizontalScrollBarVisible",
event:"changeHorizontalScrollBarVisible"},
verticalScrollBarVisible:{check:"Boolean",
init:true,
apply:"_applyVerticalScrollBarVisible",
event:"changeVerticalScrollBarVisible"},
tablePaneModel:{check:"qx.ui.table.pane.Model",
apply:"_applyTablePaneModel",
event:"changeTablePaneModel"},
liveResize:{check:"Boolean",
init:false},
focusCellOnMouseMove:{check:"Boolean",
init:false},
selectBeforeFocus:{check:"Boolean",
init:false},
showCellFocusIndicator:{check:"Boolean",
init:true,
apply:"_applyShowCellFocusIndicator"},
scrollTimeout:{check:"Integer",
init:100,
apply:"_applyScrollTimeout"}},
members:{_applyHorizontalScrollBarVisible:function($0,
$1){if($0){this._horScrollBar.setHeight("auto");
}else{this._horScrollBar.setHeight(0);
}this._horScrollBar.setVisibility($0);
this._updateContent();
},
_applyVerticalScrollBarVisible:function($0,
$1){if($0){this._verScrollBar.setWidth("auto");
}else{this._verScrollBar.setWidth(0);
}this._verScrollBar.setVisibility($0);
var $2=$0?this._verScrollBar.getPreferredBoxWidth():0;
this._horScrollBar.setPaddingRight($2);
this._spacer.setWidth($2);
},
_applyTablePaneModel:function($0,
$1){if($1!=null){$1.removeEventListener("modelChanged",
this._onPaneModelChanged,
this);
}$0.addEventListener("modelChanged",
this._onPaneModelChanged,
this);
},
_applyShowCellFocusIndicator:function($0,
$1){this._showCellFocusIndicator=$0;
if($0){this._updateFocusIndicator();
}else{if(this._focusIndicator){this._focusIndicator.hide();
}}},
getScrollY:function(){return this._verScrollBar.getValue();
},
setScrollY:function($0,
$1){this._ignoreScrollYEvent=$1;
this._verScrollBar.setValue($0);
if($1){this._updateContent();
}this._ignoreScrollYEvent=false;
},
getScrollX:function(){return this._horScrollBar.getValue();
},
setScrollX:function($0){this._horScrollBar.setValue($0);
},
getTable:function(){return this._table;
},
_onColVisibilityChanged:function($0){this._updateHorScrollBarMaximum();
this._updateFocusIndicator();
},
_onColWidthChanged:function($0){this._header._onColWidthChanged($0);
this._tablePane._onColWidthChanged($0);
var $1=$0.getData();
var $2=this.getTablePaneModel();
var $3=$2.getX($1.col);
if($3!=-1){this._updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},
_onColOrderChanged:function($0){this._header._onColOrderChanged($0);
this._tablePane._onColOrderChanged($0);
this._updateHorScrollBarMaximum();
},
_onTableModelDataChanged:function($0){this._tablePane._onTableModelDataChanged($0);
var $1=this.getTable().getTableModel().getRowCount();
if($1!=this._lastRowCount){this._updateVerScrollBarMaximum();
var $2=this._lastRowCount-$1;
if($2>0){this.getTable().getSelectionModel().removeSelectionInterval(this._lastRowCount-1,
$1);
}
if(this.getFocusedRow()>=$1){if($1==0){this.setFocusedCell(null,
null);
}else{this.setFocusedCell(this.getFocusedColumn(),
$1-1);
}}this._lastRowCount=$1;
}},
_onSelectionChanged:function($0){this._tablePane._onSelectionChanged($0);
},
_onFocusChanged:function($0){this._tablePane._onFocusChanged($0);
},
_onTableModelMetaDataChanged:function($0){this._header._onTableModelMetaDataChanged($0);
this._tablePane._onTableModelMetaDataChanged($0);
},
_onPaneModelChanged:function($0){this._header._onPaneModelChanged($0);
this._tablePane._onPaneModelChanged($0);
},
_updateHorScrollBarMaximum:function(){this._horScrollBar.setMaximum(this.getTablePaneModel().getTotalWidth());
},
_updateVerScrollBarMaximum:function(){var $0=this.getTable().getTableModel().getRowCount();
var $1=this.getTable().getRowHeight();
if(this.getTable().getKeepFirstVisibleRowComplete()){this._verScrollBar.setMaximum(($0+1)*$1);
}else{this._verScrollBar.setMaximum($0*$1);
}},
_onKeepFirstVisibleRowCompleteChanged:function(){this._updateVerScrollBarMaximum();
this._updateContent();
},
_changeInnerHeight:function($0,
$1){this._postponedUpdateContent();
return arguments.callee.base.call(this,
$0,
$1);
},
_afterAppear:function(){arguments.callee.base.call(this);
this.getElement().onselectstart=qx.lang.Function.returnFalse;
this._updateContent();
this._header._updateContent();
this._updateHorScrollBarMaximum();
this._updateVerScrollBarMaximum();
},
_onScrollX:function($0){this.createDispatchChangeEvent("changeScrollX",
$0.getValue(),
$0.getOldValue());
var $1=$0.getValue();
this._header.setLeft(-$1);
this._paneClipper.__scrollLeft=$1;
this._paneClipper.setScrollLeft($1);
},
_onScrollY:function($0){this.createDispatchChangeEvent("changeScrollY",
$0.getValue(),
$0.getOldValue());
this._postponedUpdateContent();
},
_onmousewheel:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}this._verScrollBar.setValue(this._verScrollBar.getValue()-($0.getWheelDelta()*3)*$1.getRowHeight());
if(this._lastMousePageX&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this._lastMousePageX,
this._lastMousePageY);
}},
__handleResizeColumn:function($0){var $1=this.getTable();
var $2=qx.ui.table.pane.Scroller.MIN_COLUMN_WIDTH;
var $3=Math.max($2,
this._lastResizeWidth+$0-this._lastResizeMousePageX);
if(this.getLiveResize()){var $4=$1.getTableColumnModel();
$4.setColumnWidth(this._resizeColumn,
$3);
}else{this._header.setColumnWidth(this._resizeColumn,
$3);
var $5=this.getTablePaneModel();
this._showResizeLine($5.getColumnLeft(this._resizeColumn)+$3);
}this._lastResizeMousePageX+=$3-this._lastResizeWidth;
this._lastResizeWidth=$3;
},
__handleMoveColumn:function($0){var $1=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;
if(this._header.isShowingColumnMoveFeedback()||$0>this._lastMoveMousePageX+$1||$0<this._lastMoveMousePageX-$1){this._lastMoveColPos+=$0-this._lastMoveMousePageX;
this._header.showColumnMoveFeedback(this._moveColumn,
this._lastMoveColPos);
var $2=this._table.getTablePaneScrollerAtPageX($0);
if(this._lastMoveTargetScroller&&this._lastMoveTargetScroller!=$2){this._lastMoveTargetScroller.hideColumnMoveFeedback();
}
if($2!=null){this._lastMoveTargetX=$2.showColumnMoveFeedback($0);
}else{this._lastMoveTargetX=null;
}this._lastMoveTargetScroller=$2;
this._lastMoveMousePageX=$0;
}},
_onmousemoveHeader:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}var $2=false;
var $3=null;
var $4=$0.getPageX();
var $5=$0.getPageY();
this._lastMousePageX=$4;
this._lastMousePageY=$5;
if(this._resizeColumn!=null){this.__handleResizeColumn($4);
$2=true;
}else if(this._moveColumn!=null){this.__handleMoveColumn($4);
}else{var $6=this._getResizeColumnForPageX($4);
if($6!=-1){$2=true;
}else{var $7=$1.getTableModel();
var $8=this._getColumnForPageX($4);
if($8!=null&&$7.isColumnSortable($8)){$3=$8;
}}}this.getTopLevelWidget().setGlobalCursor($2?qx.ui.table.pane.Scroller.CURSOR_RESIZE_HORIZONTAL:null);
this._header.setMouseOverColumn($3);
},
_onmousemovePane:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}var $2=false;
var $3=$0.getPageX();
var $4=$0.getPageY();
this._lastMousePageX=$3;
this._lastMousePageY=$4;
if(this._resizeColumn!=null){this.__handleResizeColumn($3);
$2=true;
}else if(this._moveColumn!=null){this.__handleMoveColumn($3);
}else{var $5=this._getRowForPagePos($3,
$4);
if($5!=null&&this._getColumnForPageX($3)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos($3,
$4);
}}}this.getTopLevelWidget().setGlobalCursor($2?qx.ui.table.pane.Scroller.CURSOR_RESIZE_HORIZONTAL:null);
this._header.setMouseOverColumn(null);
},
_onmousedownHeader:function($0){if(!this.getTable().getEnabled()){return;
}var $1=$0.getPageX();
var $2=this._getResizeColumnForPageX($1);
if($2!=-1){this._startResizeHeader($2,
$1);
}else{var $3=this._getColumnForPageX($1);
if($3!=null){this._startMoveHeader($3,
$1);
}}},
_startResizeHeader:function($0,
$1){var $2=this.getTable().getTableColumnModel();
this._resizeColumn=$0;
this._lastResizeMousePageX=$1;
this._lastResizeWidth=$2.getColumnWidth(this._resizeColumn);
this._headerClipper.setCapture(true);
},
_startMoveHeader:function($0,
$1){this._moveColumn=$0;
this._lastMoveMousePageX=$1;
this._lastMoveColPos=this.getTablePaneModel().getColumnLeft($0);
this._headerClipper.setCapture(true);
},
_onmousedownPane:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var $2=$0.getPageX();
var $3=$0.getPageY();
var $4=this._getRowForPagePos($2,
$3);
var $5=this._getColumnForPageX($2);
if($4!=null&&$5!=null){this._lastMouseDownCell={row:$4,
col:$5};
var $6=this.getSelectBeforeFocus();
if($6){$1._getSelectionManager().handleMouseDown($4,
$0);
}if(!this.getFocusCellOnMouseMove()){this._focusIndicator.setAnonymous(false);
this._focusCellAtPagePos($2,
$3);
}
if(!$6){$1._getSelectionManager().handleMouseDown($4,
$0);
}}},
_onMouseupFocusIndicator:function($0){if(this._lastMouseDownCell&&this._focusIndicator.getRow()==this._lastMouseDownCell.row&&this._focusIndicator.getColumn()==this._lastMouseDownCell.col){this._lastMouseDownCell={};
if(this.hasEventListeners("cellClick")){this.dispatchEvent(new qx.ui.table.pane.CellEvent(this,
"cellClick",
$0),
true);
}}this._focusIndicator.setAnonymous(true);
},
_onmouseupHeader:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}
if(this._resizeColumn!=null){this._stopResizeHeader();
}else if(this._moveColumn!=null){this._stopMoveHeader();
}},
_onChangeCaptureHeader:function($0){if(this._resizeColumn!=null&&$0.getValue()==false){this._stopResizeHeader();
}
if(this._moveColumn!=null&&$0.getValue()==false){this._stopMoveHeader();
}},
_stopResizeHeader:function(){var $0=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
$0.setColumnWidth(this._resizeColumn,
this._lastResizeWidth);
}this._resizeColumn=null;
this._headerClipper.setCapture(false);
this.getTopLevelWidget().setGlobalCursor(null);
},
_stopMoveHeader:function(){var $0=this.getTable().getTableColumnModel();
var $1=this.getTablePaneModel();
this._header.hideColumnMoveFeedback();
if(this._lastMoveTargetScroller){this._lastMoveTargetScroller.hideColumnMoveFeedback();
}
if(this._lastMoveTargetX!=null){var $2=$1.getFirstColumnX()+$1.getX(this._moveColumn);
var $3=this._lastMoveTargetX;
if($3!=$2&&$3!=$2+1){var $4=$0.getVisibleColumnAtX($2);
var $5=$0.getVisibleColumnAtX($3);
var $6=$0.getOverallX($4);
var $7=($5!=null)?$0.getOverallX($5):$0.getOverallColumnCount();
if($7>$6){$7--;
}$0.moveColumn($6,
$7);
}}this._moveColumn=null;
this._lastMoveTargetX=null;
this._headerClipper.setCapture(false);
},
_onmouseupPane:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}var $2=this._getRowForPagePos($0.getPageX(),
$0.getPageY());
if($2!=-1&&$2!=null&&this._getColumnForPageX($0.getPageX())!=null){$1._getSelectionManager().handleMouseUp($2,
$0);
}},
_onclickHeader:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}var $2=$1.getTableModel();
var $3=$0.getPageX();
var $4=this._getResizeColumnForPageX($3);
if($4==-1){var $5=this._getColumnForPageX($3);
if($5!=null&&$2.isColumnSortable($5)){var $6=$2.getSortColumnIndex();
var $7=($5!=$6)?true:!$2.isSortAscending();
$2.sortByColumn($5,
$7);
$1.getSelectionModel().clearSelection();
}}},
_onclickPane:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}var $2=$0.getPageX();
var $3=$0.getPageY();
var $4=this._getRowForPagePos($2,
$3);
var $5=this._getColumnForPageX($2);
if($4!=null&&$5!=null){$1._getSelectionManager().handleClick($4,
$0);
if(this._lastMouseDownCell&&$4==this._lastMouseDownCell.row&&$5==this._lastMouseDownCell.col){this._lastMouseDownCell={};
if(this.hasEventListeners("cellClick")){this.dispatchEvent(new qx.ui.table.pane.CellEvent(this,
"cellClick",
$0),
true);
}}}},
_onContextMenu:function($0){var $1=$0.getPageX();
var $2=$0.getPageY();
var $3=this._getRowForPagePos($1,
$2);
var $4=this._getColumnForPageX($1);
if(this._lastMouseDownCell&&$3==this._lastMouseDownCell.row&&$4==this._lastMouseDownCell.col){this._lastMouseDownCell={};
if(this.hasEventListeners("cellContextmenu")){this.dispatchEvent(new qx.ui.table.pane.CellEvent(this,
"cellContextmenu",
$0),
true);
}}},
_ondblclickPane:function($0){var $1=$0.getPageX();
var $2=$0.getPageY();
this._focusCellAtPagePos($1,
$2);
this.startEditing();
if(this.hasEventListeners("cellDblclick")){var $3=this._getRowForPagePos($1,
$2);
if($3!=-1&&$3!=null){this.dispatchEvent(new qx.ui.table.pane.CellEvent(this,
"cellDblclick",
$0),
true);
}}},
_onmouseout:function($0){var $1=this.getTable();
if(!$1.getEnabled()){return;
}if(this._resizeColumn==null){this.getTopLevelWidget().setGlobalCursor(null);
}this._header.setMouseOverColumn(null);
},
_showResizeLine:function($0){var $1=this._resizeLine;
if($1==null){$1=new qx.ui.basic.Terminator;
$1.setBackgroundColor("#D6D5D9");
$1.setWidth(3);
this._paneClipper.add($1);
qx.ui.core.Widget.flushGlobalQueues();
this._resizeLine=$1;
}$1._renderRuntimeLeft($0-2);
$1._renderRuntimeHeight(this._paneClipper.getBoxHeight()+this._paneClipper.getScrollTop());
this._resizeLine.removeStyleProperty("visibility");
},
_hideResizeLine:function(){if(this._resizeLine){this._resizeLine.setStyleProperty("visibility",
"hidden");
}},
showColumnMoveFeedback:function($0){var $1=this.getTablePaneModel();
var $2=this.getTable().getTableColumnModel();
var $3=qx.bom.element.Location.getLeft(this._tablePane.getElement());
var $4=$1.getColumnCount();
var $5=0;
var $6=0;
var $7=$3;
for(var $8=0;$8<$4;$8++){var $9=$1.getColumnAtX($8);
var $a=$2.getColumnWidth($9);
if($0<$7+$a/2){break;
}$7+=$a;
$5=$8+1;
$6=$7-$3;
}var $b=qx.bom.element.Location.getLeft(this._paneClipper.getElement());
var $c=this._paneClipper.getBoxWidth();
var $d=$b-$3;
$6=qx.lang.Number.limit($6,
$d+2,
$d+$c-1);
this._showResizeLine($6);
return $1.getFirstColumnX()+$5;
},
hideColumnMoveFeedback:function(){this._hideResizeLine();
},
_focusCellAtPagePos:function($0,
$1){var $2=this._getRowForPagePos($0,
$1);
if($2!=-1&&$2!=null){var $3=this._getColumnForPageX($0);
if($3!=null){this._table.setFocusedCell($3,
$2);
}}},
setFocusedCell:function($0,
$1){if(!this.isEditing()){this._tablePane.setFocusedCell($0,
$1,
this._updateContentPlanned);
this._focusedCol=$0;
this._focusedRow=$1;
if(!this._updateContentPlanned){this._updateFocusIndicator();
}}},
getFocusedColumn:function(){return this._focusedCol;
},
getFocusedRow:function(){return this._focusedRow;
},
scrollCellVisible:function($0,
$1){var $2=this.getTablePaneModel();
var $3=$2.getX($0);
if($3!=-1){var $4=this.getTable().getTableColumnModel();
var $5=$2.getColumnLeft($0);
var $6=$4.getColumnWidth($0);
var $7=this.getTable().getRowHeight();
var $8=$1*$7;
var $9=this.getScrollX();
var $a=this.getScrollY();
var $b=this._paneClipper.getBoxWidth();
var $c=this._paneClipper.getBoxHeight();
var $d=Math.min($5,
$5+$6-$b);
var $e=$5;
this.setScrollX(Math.max($d,
Math.min($e,
$9)));
var $f=$8+$7-$c;
if(this.getTable().getKeepFirstVisibleRowComplete()){$f+=$7-1;
}var $g=$8;
this.setScrollY(Math.max($f,
Math.min($g,
$a)),
true);
}},
isEditing:function(){return this._cellEditor!=null;
},
startEditing:function(){var $0=this.getTable();
var $1=$0.getTableModel();
var $2=this._focusedCol;
if(!this.isEditing()&&($2!=null)&&$1.isColumnEditable($2)){var $3=this._focusedRow;
var $4=this.getTablePaneModel().getX($2);
var $5=$1.getValue($2,
$3);
this._cellEditorFactory=$0.getTableColumnModel().getCellEditorFactory($2);
var $6={col:$2,
row:$3,
xPos:$4,
value:$5,
table:$0};
this._cellEditor=this._cellEditorFactory.createCellEditor($6);
if(this._cellEditor===null){return false;
}else if(this._cellEditor instanceof qx.ui.window.Window){this._cellEditor.setModal(true);
this._cellEditor.setShowClose(false);
this._cellEditor.addToDocument();
this._cellEditor.addEventListener("disappear",
this._onCellEditorModalWindowClose,
this);
var $7=$0.getModalCellEditorPreOpenFunction();
if($7!=null){$7(this._cellEditor,
$6);
}this._cellEditor.open();
}else{this._cellEditor.set({width:"100%",
height:"100%"});
this._focusIndicator.addEventListener("mousedown",
function($8){$8.stopPropagation();
});
this._focusIndicator.add(this._cellEditor);
this._focusIndicator.addState("editing");
qx.client.Timer.once(function(){if(this.getDisposed()){return;
}this._cellEditor.focus();
},
this,
0);
}return true;
}return false;
},
stopEditing:function(){this.flushEditor();
this.cancelEditing();
},
flushEditor:function(){if(this.isEditing()){var $0=this._cellEditorFactory.getCellEditorValue(this._cellEditor);
this.getTable().getTableModel().setValue(this._focusedCol,
this._focusedRow,
$0);
this._table.focus();
}},
cancelEditing:function(){if(this.isEditing()&&!this._cellEditor.pendingDispose){if(this._cellEditorIsModalWindow){qx.client.Timer.once(function(){var $0=qx.ui.core.ClientDocument.getInstance();
$0.remove(this._cellEditor);
this._cellEditor.removeEventListener("disappear",
this._onCellEditorModalWindowClose,
this);
this._cellEditor.dispose();
this._cellEditor=null;
this._cellEditorFactory=null;
},
this,
0);
this._cellEditor.pendingDispose=true;
}else{this._focusIndicator.remove(this._cellEditor);
this._focusIndicator.removeState("editing");
this._cellEditor.dispose();
this._cellEditor=null;
this._cellEditorFactory=null;
}}},
_onCellEditorModalWindowClose:function($0){this.stopEditing();
},
_getColumnForPageX:function($0){var $1=qx.bom.element.Location.getLeft(this._header.getElement());
var $2=this.getTable().getTableColumnModel();
var $3=this.getTablePaneModel();
var $4=$3.getColumnCount();
var $5=$1;
for(var $6=0;$6<$4;$6++){var $7=$3.getColumnAtX($6);
var $8=$2.getColumnWidth($7);
$5+=$8;
if($0<$5){return $7;
}}return null;
},
_getResizeColumnForPageX:function($0){var $1=qx.bom.element.Location.getLeft(this._header.getElement());
var $2=this.getTable().getTableColumnModel();
var $3=this.getTablePaneModel();
var $4=$3.getColumnCount();
var $5=$1;
var $6=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;
for(var $7=0;$7<$4;$7++){var $8=$3.getColumnAtX($7);
var $9=$2.getColumnWidth($8);
$5+=$9;
if($0>=($5-$6)&&$0<=($5+$6)){return $8;
}}return -1;
},
_getRowForPagePos:function($0,
$1){var $2=this._paneClipper.getElement();
var $3=qx.bom.element.Location.get($2);
if($0<$3.left||$0>$3.right){return null;
}
if($1>=$3.top&&$1<=$3.bottom){var $4=this.getTable().getRowHeight();
var $5=this._verScrollBar.getValue();
if(this.getTable().getKeepFirstVisibleRowComplete()){$5=Math.floor($5/$4)*$4;
}var $6=$5+$1-$3.top;
var $7=Math.floor($6/$4);
var $8=this.getTable().getTableModel().getRowCount();
return ($7<$8)?$7:null;
}var $9=qx.bom.element.Location.get(this._headerClipper.getElement());
if($1>=$9.top&&$1<=$9.bottom&&$0<=$9.right){return -1;
}return null;
},
setTopRightWidget:function($0){var $1=this._topRightWidget;
if($1!=null){this._top.remove($1);
}
if($0!=null){this._top.remove(this._spacer);
this._top.add($0);
}else if($1!=null){this._top.add(this._spacer);
}this._topRightWidget=$0;
},
getHeader:function(){return this._header;
},
getTablePane:function(){return this._tablePane;
},
getNeededScrollBars:function($0,
$1){var $2=this._verScrollBar.getPreferredBoxWidth();
var $3=this._paneClipper.getInnerWidth();
if(this.getVerticalScrollBarVisible()){$3+=$2;
}var $4=this._paneClipper.getInnerHeight();
if(this.getHorizontalScrollBarVisible()){$4+=$2;
}var $5=this.getTablePaneModel().getTotalWidth();
var $6=this.getTable().getRowHeight()*this.getTable().getTableModel().getRowCount();
var $7=false;
var $8=false;
if($5>$3){$7=true;
if($6>$4-$2){$8=true;
}}else if($6>$4){$8=true;
if(!$1&&($5>$3-$2)){$7=true;
}}var $9=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var $a=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return (($0||$7)?$9:0)|(($1||!$8)?0:$a);
},
_applyScrollTimeout:function($0,
$1){if(this._updateInterval){window.clearInterval(this._updateInterval);
this._updateInterval=null;
}if(!this._onintervalWrapper){this._onintervalWrapper=qx.lang.Function.bind(this._oninterval,
this);
}if($0){this._updateInterval=window.setInterval(this._onintervalWrapper,
$0);
}},
_postponedUpdateContent:function(){this._updateContentPlanned=true;
},
_oninterval:function(){if(this._updateContentPlanned&&!this._tablePane._layoutPending){this._updateContentPlanned=false;
this._updateContent();
}},
_updateContent:function(){if(!this.isSeeable()){return;
}var $0=this._paneClipper.getInnerHeight();
var $1=this._horScrollBar.getValue();
var $2=this._verScrollBar.getValue();
var $3=this.getTable().getRowHeight();
var $4=Math.floor($2/$3);
var $5=this._tablePane.getFirstVisibleRow();
this._tablePane.setFirstVisibleRow($4);
var $6=Math.ceil($0/$3);
var $7=0;
var $8=this.getTable().getKeepFirstVisibleRowComplete();
if(!$8){$6++;
$7=$2%$3;
}this._tablePane.setVisibleRowCount($6);
if($4!=$5){this._updateFocusIndicator();
}this._header.setLeft(-$1);
if(this._paneClipper.__scrollLeft!=$1){this._paneClipper.__scrollLeft=$1;
this._paneClipper.setScrollLeft($1);
}if(!$8){this._paneClipper.setScrollTop($7);
}},
_updateFocusIndicator:function(){if(!this._showCellFocusIndicator){return;
}var $0=this.getTable();
if(!$0.getEnabled()){return;
}this._focusIndicator.moveToCell(this._focusedCol,
this._focusedRow);
}},
destruct:function(){if(this.getElement()!=null){this.getElement().onselectstart=null;
}
if(this._updateInterval){window.clearInterval(this._updateInterval);
this._updateInterval=null;
}var $0=this.getTablePaneModel();
if($0){$0.dispose();
}this._disposeObjects("_verScrollBar",
"_horScrollBar",
"_header",
"_headerClipper",
"_spacer",
"_top",
"_tablePane",
"_paneClipper",
"_resizeLine",
"_table",
"_focusIndicator",
"_topRightWidget");
}});




/* ID: qx.ui.basic.ScrollBar */
qx.Class.define("qx.ui.basic.ScrollBar",
{extend:qx.ui.layout.CanvasLayout,
construct:function($0){arguments.callee.base.call(this,
$0?"horizontal":"vertical");
this._horizontal=($0==true);
this._scrollBar=new qx.ui.basic.ScrollArea;
if(qx.core.Variant.isSet("qx.client",
"gecko")){this._scrollBar.setStyleProperty("position",
"");
}this._scrollBar.setOverflow($0?"scrollX":"scrollY");
this._scrollBar.addEventListener("scroll",
this._onscroll,
this);
this._scrollContent=new qx.ui.basic.Terminator;
if(qx.core.Variant.isSet("qx.client",
"gecko")){this._scrollContent.setStyleProperty("position",
"");
}this._scrollBar.add(this._scrollContent);
if(this._horizontal){this._scrollContent.setHeight(5);
this._scrollBar.setWidth("100%");
this._scrollBar.setHeight(this._getScrollBarWidth());
if(qx.core.Variant.isSet("qx.client",
"mshtml")){this.setHeight(this._getScrollBarWidth());
this.setOverflow("hidden");
this._scrollBar.setHeight(this._getScrollBarWidth()+1);
this._scrollBar.setTop(-1);
}}else{this._scrollContent.setWidth(5);
this._scrollBar.setHeight("100%");
this._scrollBar.setWidth(this._getScrollBarWidth());
if(qx.core.Variant.isSet("qx.client",
"mshtml")){this.setWidth(this._getScrollBarWidth());
this.setOverflow("hidden");
this._scrollBar.setWidth(this._getScrollBarWidth()+1);
this._scrollBar.setLeft(-1);
}}this.add(this._scrollBar);
this._blocker=new qx.ui.basic.Terminator();
this._blocker.set({left:0,
top:0,
height:"100%",
width:"100%",
display:!this.getEnabled()});
this._blocker.setAppearance("scrollbar-blocker");
this.add(this._blocker);
this.setMaximum(0);
},
statics:{EVENT_DELAY:250},
properties:{value:{check:"Number",
init:0,
apply:"_applyValue",
event:"changeValue",
transform:"_checkValue"},
maximum:{check:"Integer",
apply:"_applyMaximum"},
mergeEvents:{check:"Boolean",
init:false}},
members:{_checkValue:function($0){var $1=!this.getElement()?0:(this._horizontal?this.getInnerWidth():this.getInnerHeight());
return Math.max(0,
Math.min(this.getMaximum()-$1,
$0));
},
_applyValue:function($0,
$1){if(!this._internalValueChange&&this._isCreated){this._positionKnob($0);
}},
_applyMaximum:function($0,
$1){if(this._horizontal){this._scrollContent.setWidth($0);
}else{this._scrollContent.setHeight($0);
}this.setValue(this._checkValue(this.getValue()));
},
_applyVisibility:function($0,
$1){if(!$0){this._positionKnob(0);
}else{this._positionKnob(this.getValue());
}return arguments.callee.base.call(this,
$0,
$1);
},
_computePreferredInnerWidth:function(){return this._horizontal?0:this._getScrollBarWidth();
},
_computePreferredInnerHeight:function(){return this._horizontal?this._getScrollBarWidth():0;
},
_applyEnabled:function($0){arguments.callee.base.call(this);
this._blocker.setDisplay(!this.getEnabled());
},
_getScrollBarWidth:function(){if(qx.ui.basic.ScrollBar._scrollBarWidth==null){var $0=document.createElement("div");
$0.style.width="100px";
$0.style.height="100px";
$0.style.overflow="scroll";
$0.style.visibility="hidden";
document.body.appendChild($0);
qx.ui.basic.ScrollBar._scrollBarWidth=$0.offsetWidth-$0.clientWidth;
document.body.removeChild($0);
}return qx.ui.basic.ScrollBar._scrollBarWidth;
},
_onscroll:function($0){var $1=this._horizontal?this._scrollBar.getScrollLeft():this._scrollBar.getScrollTop();
if(this.getMergeEvents()){this._lastScrollEventValue=$1;
window.clearTimeout(this._setValueTimerId);
var $2=this;
this._setValueTimerId=window.setTimeout(function(){$2._internalValueChange=true;
$2.setValue($2._lastScrollEventValue);
$2._internalValueChange=false;
qx.ui.core.Widget.flushGlobalQueues();
},
qx.ui.basic.ScrollBar.EVENT_DELAY);
}else{this._internalValueChange=true;
this.setValue($1);
this._internalValueChange=false;
qx.ui.core.Widget.flushGlobalQueues();
}},
_positionKnob:function($0){if(this.isCreated()){if(this._horizontal){this._scrollBar.setScrollLeft($0);
}else{this._scrollBar.setScrollTop($0);
}}},
_afterAppear:function(){arguments.callee.base.call(this);
this._positionKnob(this.getValue());
}},
destruct:function(){this._disposeObjects("_scrollContent",
"_scrollBar",
"_blocker");
}});




/* ID: qx.ui.basic.ScrollArea */
qx.Class.define("qx.ui.basic.ScrollArea",
{extend:qx.ui.layout.CanvasLayout,
construct:function(){arguments.callee.base.call(this);
this.__onscroll=qx.lang.Function.bindEvent(this._onscroll,
this);
},
events:{"scroll":"qx.event.type.Event"},
members:{_applyElement:function($0,
$1){arguments.callee.base.call(this,
$0,
$1);
if($0){if(qx.core.Variant.isSet("qx.client",
"mshtml")){$0.attachEvent("onscroll",
this.__onscroll);
}else{$0.addEventListener("scroll",
this.__onscroll,
false);
}}},
_onscroll:function($0){this.createDispatchEvent("scroll");
qx.event.handler.EventHandler.stopDomEvent($0);
}},
destruct:function(){var $0=this.getElement();
if($0){if(qx.core.Variant.isSet("qx.client",
"mshtml")){$0.detachEvent("onscroll",
this.__onscroll);
}else{$0.removeEventListener("scroll",
this.__onscroll,
false);
}delete this.__onscroll;
}}});




/* ID: qx.ui.table.pane.FocusIndicator */
qx.Class.define("qx.ui.table.pane.FocusIndicator",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function($0){arguments.callee.base.call(this);
this._scroller=$0;
this.setStyleProperty("fontSize",
"0px");
this.setStyleProperty("lineHeight",
"0px");
this.setAnonymous(true);
this.hide();
},
properties:{appearance:{refine:true,
init:"table-focus-indicator"},
row:{check:"Integer"},
column:{check:"Integer"}},
members:{moveToCell:function($0,
$1){if($0==null){this.hide();
this.setRow(-1);
this.setColumn(-1);
}else{var $2=this._scroller.getTablePaneModel().getX($0);
if($2==-1){this.hide();
this.setRow(-1);
this.setColumn(-1);
}else{var $3=this._scroller.getTable();
var $4=$3.getTableColumnModel();
var $5=this._scroller.getTablePaneModel();
var $6=this._scroller.getTablePane().getFirstVisibleRow();
var $7=$3.getRowHeight();
this.setHeight($7+3);
this.setWidth($4.getColumnWidth($0)+3);
this.setTop(($1-$6)*$7-2);
this.setLeft($5.getColumnLeft($0)-2);
this.show();
this.setRow($1);
this.setColumn($0);
}}}}});




/* ID: qx.ui.table.pane.CellEvent */
qx.Class.define("qx.ui.table.pane.CellEvent",
{extend:qx.event.type.MouseEvent,
construct:function($0,
$1,
$2){arguments.callee.base.call(this,
$1,
$2.getDomEvent(),
$2.getDomTarget(),
$2.getTarget(),
$2.getOriginalTarget(),
$2.getRelatedTarget());
this._scroller=$0;
},
properties:{row:{_fast:true,
readOnly:true},
column:{_fast:true,
readOnly:true}},
members:{_computeRow:function(){if(this._row==null){this._row=this._scroller._getRowForPagePos(this.getPageX(),
this.getPageY());
}return this._row;
},
_computeColumn:function(){if(this._column==null){this._column=this._scroller._getColumnForPageX(this.getPageX());
}return this._column;
}}});




/* ID: qx.ui.table.pane.Model */
qx.Class.define("qx.ui.table.pane.Model",
{extend:qx.core.Target,
construct:function($0){arguments.callee.base.call(this);
$0.addEventListener("visibilityChangedPre",
this._onColVisibilityChanged,
this);
this._tableColumnModel=$0;
},
events:{"modelChanged":"qx.event.type.Event"},
statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},
properties:{firstColumnX:{check:"Integer",
init:0,
apply:"_applyFirstColumnX"},
maxColumnCount:{check:"Number",
init:-1,
apply:"_applyMaxColumnCount"}},
members:{_applyFirstColumnX:function($0,
$1){this._columnCount=null;
this.createDispatchEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},
_applyMaxColumnCount:function($0,
$1){this._columnCount=null;
this.createDispatchEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},
_onColVisibilityChanged:function($0){this._columnCount=null;
this.createDispatchEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},
getColumnCount:function(){if(this._columnCount==null){var $0=this.getFirstColumnX();
var $1=this.getMaxColumnCount();
var $2=this._tableColumnModel.getVisibleColumnCount();
if($1==-1||($0+$1)>$2){this._columnCount=$2-$0;
}else{this._columnCount=$1;
}}return this._columnCount;
},
getColumnAtX:function($0){var $1=this.getFirstColumnX();
return this._tableColumnModel.getVisibleColumnAtX($1+$0);
},
getX:function($0){var $1=this.getFirstColumnX();
var $2=this.getMaxColumnCount();
var $3=this._tableColumnModel.getVisibleX($0)-$1;
if($3>=0&&($2==-1||$3<$2)){return $3;
}else{return -1;
}},
getColumnLeft:function($0){var $1=0;
var $2=this.getColumnCount();
for(var $3=0;$3<$2;$3++){var $4=this.getColumnAtX($3);
if($4==$0){return $1;
}$1+=this._tableColumnModel.getColumnWidth($4);
}return -1;
},
getTotalWidth:function(){var $0=0;
var $1=this.getColumnCount();
for(var $2=0;$2<$1;$2++){var $3=this.getColumnAtX($2);
$0+=this._tableColumnModel.getColumnWidth($3);
}return $0;
}},
destruct:function(){this._disposeObjects("_tableColumnModel");
}});




/* ID: qx.ui.table.ITableModel */
qx.Interface.define("qx.ui.table.ITableModel",
{events:{"dataChanged":"qx.event.type.DataEvent",
"metaDataChanged":"qx.event.type.DataEvent"},
statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",
EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},
members:{getRowCount:function(){return true;
},
getRowData:function($0){return true;
},
getColumnCount:function(){return true;
},
getColumnId:function($0){return true;
},
getColumnIndexById:function($0){return true;
},
getColumnName:function($0){return true;
},
isColumnEditable:function($0){return true;
},
isColumnSortable:function($0){return true;
},
sortByColumn:function($0,
$1){return true;
},
getSortColumnIndex:function(){return true;
},
isSortAscending:function(){return true;
},
prefetchRows:function($0,
$1){return true;
},
getValue:function($0,
$1){return true;
},
getValueById:function($0,
$1){return true;
},
setValue:function($0,
$1,
$2){return true;
},
setValueById:function($0,
$1,
$2){return true;
}}});




/* ID: spagobi.ui.Table */
qx.Class.define("spagobi.ui.Table",
{extend:qx.ui.table.Table,
construct:function($0,
$1){this._controller=$0;
this.columnIds=[];
this.columnNames={};
for(var $2=0;$2<$1.meta.length;$2++){this.columnIds[$2]=$1.meta[$2].dataIndex;
this.columnNames[$1.meta[$2].dataIndex]=$1.meta[$2].name;
}this._tableModel=new qx.ui.table.model.Simple();
this._tableModel.setColumnIds(this.columnIds);
this._tableModel.setColumnNamesById(this.columnNames);
arguments.callee.base.call(this,
this._tableModel,
{tableColumnModel:function($3){return new qx.ui.table.columnmodel.Resize($3);
}});
var $4=this.getTableColumnModel();
var $5=$4.getBehavior();
if($1.ID!=undefined){if($1.ID=="ROLES"){var $6=new qx.ui.table.cellrenderer.Dynamic(this.propertyCellRendererFactoryFunc);
var $7=new qx.ui.table.celleditor.Dynamic(this.propertyCellEditorFactoryFunc);
for($2=0;$2<$1.columns.length;$2++){$4.setDataCellRenderer($1.columns[$2],
$6);
$4.setCellEditorFactory($1.columns[$2],
$7);
}this.addEventListener("cellClick",
this._onCellClick,
this);
}}this.setWidth('100%');
this.setHeight('100%');
this.setBorder("inset-thin");
this.setOverflow("auto");
this.setStatusBarVisible(false);
this.getDataRowRenderer().setHighlightFocusRow(true);
this.getPaneScroller(0).setShowCellFocusIndicator(false);
this._tableModel.setDataAsMapArray($1.rows,
true);
this.getSelectionModel().addEventListener("changeSelection",
this._onChangeSelection,
this);
},
members:{columnIds:[],
columnNames:{},
propertyCellEditorFactoryFunc:function($0){return new qx.ui.table.celleditor.CheckBox;
},
propertyCellRendererFactoryFunc:function($0){return new qx.ui.table.cellrenderer.Boolean;
},
setData:function($0){var $1=[];
var $2={};
for(var $3=0;$3<$0.meta.length;$3++){this.columnIds[$3]=$0.meta[$3].dataIndex;
$2[$0.meta[$3].dataIndex]=$0.meta[$3].name;
}this._tableModel.setColumnIds($1);
this._tableModel.setColumnNamesById($2);
this.getTableModel().setDataAsMapArray($0.rows,
true);
this.getSelectionModel().setSelectionInterval(0,
0);
},
getUpdatedData:function(){return this._tableModel.getData();
},
_onChangeSelection:function($0){var $1=this.getSelectionModel().getAnchorSelectionIndex();
if($1>=0){var $2=this.getTableModel().getRowData($1);
if($2){this._controller.selectDataObject($2);
}}},
_onCellClick:function($0){if(!$0 instanceof qx.event.type.DataEvent){return;
}var $1=$0.getColumn();
var $2=$0.getRow();
if(typeof (this.getTableModel().getValue($1,
$2))!='boolean'){return;
}if(this.getTableModel().getValue($1,
$2)===true){this.getTableModel().setValue($1,
$2,
false);
}else{this.getTableModel().setValue($1,
$2,
true);
}}}});




/* ID: qx.ui.table.model.Abstract */
qx.Class.define("qx.ui.table.model.Abstract",
{type:"abstract",
extend:qx.core.Target,
implement:qx.ui.table.ITableModel,
events:{"dataChanged":"qx.event.type.DataEvent",
"metaDataChanged":"qx.event.type.DataEvent"},
construct:function(){arguments.callee.base.call(this);
this._columnIdArr=[];
this._columnNameArr=[];
this._columnIndexMap={};
},
members:{getRowCount:function(){throw new Error("getRowCount is abstract");
},
getRowData:function($0){return null;
},
isColumnEditable:function($0){return false;
},
isColumnSortable:function($0){return false;
},
sortByColumn:function($0,
$1){},
getSortColumnIndex:function(){return -1;
},
isSortAscending:function(){return true;
},
prefetchRows:function($0,
$1){},
getValue:function($0,
$1){throw new Error("getValue is abstract");
},
getValueById:function($0,
$1){return this.getValue(this.getColumnIndexById($0),
$1);
},
setValue:function($0,
$1,
$2){throw new Error("setValue is abstract");
},
setValueById:function($0,
$1,
$2){return this.setValue(this.getColumnIndexById($0),
$1,
$2);
},
getColumnCount:function(){return this._columnIdArr.length;
},
getColumnIndexById:function($0){return this._columnIndexMap[$0];
},
getColumnId:function($0){return this._columnIdArr[$0];
},
getColumnName:function($0){return this._columnNameArr[$0];
},
setColumnIds:function($0){this._columnIdArr=$0;
this._columnIndexMap={};
for(var $1=0;$1<$0.length;$1++){this._columnIndexMap[$0[$1]]=$1;
}this._columnNameArr=new Array($0.length);
if(!this._internalChange){this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
setColumnNamesByIndex:function($0){if(this._columnIdArr.length!=$0.length){throw new Error("this._columnIdArr and columnNameArr have different length: "+this._columnIdArr.length+" != "+$0.length);
}this._columnNameArr=$0;
this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},
setColumnNamesById:function($0){this._columnNameArr=new Array(this._columnIdArr.length);
for(var $1=0;$1<this._columnIdArr.length;++$1){this._columnNameArr[$1]=$0[this._columnIdArr[$1]];
}},
setColumns:function($0,
$1){if($1==null){$1=$0;
}
if($1.length!=$0.length){throw new Error("columnIdArr and columnNameArr have different length: "+$1.length+" != "+$0.length);
}this._internalChange=true;
this.setColumnIds($1);
this._internalChange=false;
this.setColumnNamesByIndex($0);
}},
destruct:function(){this._disposeFields("_columnIdArr",
"_columnNameArr",
"_columnIndexMap");
}});




/* ID: qx.ui.table.model.Simple */
qx.Class.define("qx.ui.table.model.Simple",
{extend:qx.ui.table.model.Abstract,
construct:function(){arguments.callee.base.call(this);
this._rowArr=[];
this._sortColumnIndex=-1;
this._sortAscending;
this._sortMethods=[];
this._editableColArr=null;
},
properties:{caseSensitiveSorting:{check:"Boolean",
init:true}},
statics:{_defaultSortComparatorAscending:function($0,
$1){var $2=$0[arguments.callee.columnIndex];
var $3=$1[arguments.callee.columnIndex];
return ($2>$3)?1:(($2==$3)?0:-1);
},
_defaultSortComparatorInsensitiveAscending:function($0,
$1){var $2=(isNaN($0[arguments.callee.columnIndex])?$0[arguments.callee.columnIndex].toLowerCase():$0[arguments.callee.columnIndex]);
var $3=(isNaN($1[arguments.callee.columnIndex])?$1[arguments.callee.columnIndex].toLowerCase():$1[arguments.callee.columnIndex]);
return ($2>$3)?1:(($2==$3)?0:-1);
},
_defaultSortComparatorDescending:function($0,
$1){var $2=$0[arguments.callee.columnIndex];
var $3=$1[arguments.callee.columnIndex];
return ($2<$3)?1:(($2==$3)?0:-1);
},
_defaultSortComparatorInsensitiveDescending:function($0,
$1){var $2=(isNaN($0[arguments.callee.columnIndex])?$0[arguments.callee.columnIndex].toLowerCase():$0[arguments.callee.columnIndex]);
var $3=(isNaN($1[arguments.callee.columnIndex])?$1[arguments.callee.columnIndex].toLowerCase():$1[arguments.callee.columnIndex]);
return ($2<$3)?1:(($2==$3)?0:-1);
}},
members:{getRowData:function($0){var $1=this._rowArr[$0];
if($1==null||$1.originalData==null){return $1;
}else{return $1.originalData;
}},
getRowDataAsMap:function($0){var $1=this._rowArr[$0];
var $2={};
for(var $3=0;$3<this.getColumnCount();$3++){$2[this.getColumnId($3)]=$1[$3];
}return $2;
},
setEditable:function($0){this._editableColArr=[];
for(var $1=0;$1<this.getColumnCount();$1++){this._editableColArr[$1]=$0;
}this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},
setColumnEditable:function($0,
$1){if($1!=this.isColumnEditable($0)){if(this._editableColArr==null){this._editableColArr=[];
}this._editableColArr[$0]=$1;
this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
isColumnEditable:function($0){return this._editableColArr?(this._editableColArr[$0]==true):false;
},
setColumnSortable:function($0,
$1){if($1!=this.isColumnSortable($0)){if(this._sortableColArr==null){this._sortableColArr=[];
}this._sortableColArr[$0]=$1;
this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
isColumnSortable:function($0){return this._sortableColArr?(this._sortableColArr[$0]==true):true;
},
sortByColumn:function($0,
$1){var $2;
var $3=this._sortMethods[$0];
if($3){$2=($1?$3.ascending:$3.descending);
}else{if(this.getCaseSensitiveSorting()){$2=($1?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{$2=($1?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}$2.columnIndex=$0;
this._rowArr.sort($2);
this._sortColumnIndex=$0;
this._sortAscending=$1;
this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},
setSortMethods:function($0,
$1){this._sortMethods[$0]=$1;
},
_clearSorting:function(){if(this._sortColumnIndex!=-1){this._sortColumnIndex=-1;
this._sortAscending=true;
this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
getSortColumnIndex:function(){return this._sortColumnIndex;
},
isSortAscending:function(){return this._sortAscending;
},
getRowCount:function(){return this._rowArr.length;
},
getValue:function($0,
$1){if($1<0||$1>=this._rowArr.length){throw new Error("this._rowArr out of bounds: "+$1+" (0.."+this._rowArr.length+")");
}return this._rowArr[$1][$0];
},
setValue:function($0,
$1,
$2){if(this._rowArr[$1][$0]!=$2){this._rowArr[$1][$0]=$2;
if(this.hasEventListeners(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){var $3={firstRow:$1,
lastRow:$1,
firstColumn:$0,
lastColumn:$0};
this.createDispatchDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
$3);
}
if($0==this._sortColumnIndex){this._clearSorting();
}}},
setData:function($0,
$1){this._rowArr=$0;
if(this.hasEventListeners(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){this.createDispatchEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED);
}
if($1){this._clearSorting();
}},
getData:function(){return this._rowArr;
},
setDataAsMapArray:function($0,
$1,
$2){this.setData(this._mapArray2RowArr($0,
$1),
$2);
},
addRows:function($0,
$1){if($1==null){$1=this._rowArr.length;
}$0.splice(0,
0,
$1,
0);
Array.prototype.splice.apply(this._rowArr,
$0);
var $2={firstRow:$1,
lastRow:this._rowArr.length-1,
firstColumn:0,
lastColumn:this.getColumnCount()-1};
this.createDispatchDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
$2);
this._clearSorting();
},
addRowsAsMapArray:function($0,
$1,
$2){this.addRows(this._mapArray2RowArr($0,
$2),
$1);
},
removeRows:function($0,
$1){this._rowArr.splice($0,
$1);
var $2={firstRow:$0,
lastRow:this._rowArr.length-1,
firstColumn:0,
lastColumn:this.getColumnCount()-1};
this.createDispatchDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
$2);
this._clearSorting();
},
_mapArray2RowArr:function($0,
$1){var $2=$0.length;
var $3=this.getColumnCount();
var $4=new Array($2);
var $5;
var $6;
for(var $7=0;$7<$2;++$7){$5=[];
if($1){$5.originalData=$0[$7];
}
for(var $6=0;$6<$3;++$6){$5[$6]=$0[$7][this.getColumnId($6)];
}$4[$7]=$5;
}return $4;
}},
destruct:function(){this._disposeFields("_rowArr",
"_editableColArr",
"_sortMethods");
}});




/* ID: qx.ui.table.columnmodel.Resize */
qx.Class.define("qx.ui.table.columnmodel.Resize",
{extend:qx.ui.table.columnmodel.Basic,
construct:function(){arguments.callee.base.call(this);
this._bInProgress=false;
this._bAppeared=false;
},
properties:{behavior:{check:"qx.ui.table.columnmodel.resizebehavior.Abstract",
init:null,
nullable:true,
apply:"_applyBehavior",
event:"changeBehavior"}},
members:{_applyBehavior:function($0,
$1){if($1!=null){$1.dispose();
$1=null;
}this.getBehavior()._setNumColumns(this._columnDataArr.length);
},
init:function($0,
$1){arguments.callee.base.call(this,
$0);
if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this._table=$1;
$1.addEventListener("appear",
this._onappear,
this);
$1.addEventListener("tableWidthChanged",
this._ontablewidthchanged,
this);
$1.addEventListener("verticalScrollBarChanged",
this._onverticalscrollbarchanged,
this);
this.addEventListener("widthChanged",
this._oncolumnwidthchanged,
this);
this.addEventListener("visibilityChanged",
this._onvisibilitychanged,
this);
this._table.addEventListener("columnVisibilityMenuCreateEnd",
this._addResetColumnWidthButton,
this);
this.getBehavior()._setNumColumns($0);
},
_addResetColumnWidthButton:function($0){var $1=$0.getData();
var $2=$1.menu;
var $3;
var $4=qx.io.Alias;
var $5=$4.getInstance().resolve("icon/16/actions/view-refresh.png");
$3=new qx.ui.menu.Separator();
$2.add($3);
$3=new qx.ui.menu.Button("Reset column widths",
$5);
$2.add($3);
$3.addEventListener("execute",
this._onappear,
this);
},
_onappear:function($0){if(this._bInProgress){return ;
}this._bInProgress=true;
{};
this.getBehavior().onAppear(this,
$0);
qx.client.Timer.once(function(){if(!this._table.getDisposed()){this._table._updateScrollerWidths();
this._table._updateScrollBarVisibility();
}},
this,
0);
this._bInProgress=false;
this._bAppeared=true;
},
_ontablewidthchanged:function($0){if(this._bInProgress||!this._bAppeared){return ;
}this._bInProgress=true;
{};
this.getBehavior().onTableWidthChanged(this,
$0);
this._bInProgress=false;
},
_onverticalscrollbarchanged:function($0){if(this._bInProgress||!this._bAppeared){return ;
}this._bInProgress=true;
{};
this.getBehavior().onVerticalScrollBarChanged(this,
$0);
qx.client.Timer.once(function(){if(!this._table.getDisposed()){this._table._updateScrollerWidths();
this._table._updateScrollBarVisibility();
}},
this,
0);
this._bInProgress=false;
},
_oncolumnwidthchanged:function($0){if(this._bInProgress||!this._bAppeared){return ;
}this._bInProgress=true;
{};
this.getBehavior().onColumnWidthChanged(this,
$0);
this._bInProgress=false;
},
_onvisibilitychanged:function($0){if(this._bInProgress||!this._bAppeared){return ;
}this._bInProgress=true;
{};
this.getBehavior().onVisibilityChanged(this,
$0);
this._bInProgress=false;
}},
settings:{"qx.tableResizeDebug":false},
destruct:function(){this._disposeFields("_table");
}});




/* ID: qx.ui.table.columnmodel.resizebehavior.Abstract */
qx.Class.define("qx.ui.table.columnmodel.resizebehavior.Abstract",
{type:"abstract",
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._resizeColumnData=[];
},
members:{_setNumColumns:function($0){throw new Error("_setNumColumns is abstract");
},
onAppear:function($0,
$1){throw new Error("onAppear is abstract");
},
onTableWidthChanged:function($0,
$1){throw new Error("onTableWidthChanged is abstract");
},
onVerticalScrollBarChanged:function($0,
$1){throw new Error("onVerticalScrollBarChanged is abstract");
},
onColumnWidthChanged:function($0,
$1){throw new Error("onColumnWidthChanged is abstract");
},
onVisibilityChanged:function($0,
$1){throw new Error("onVisibilityChanged is abstract");
},
_getAvailableWidth:function($0){var $1=$0._table.getElement();
var $2=qx.html.Dimension.getInnerWidth($1);
var $3=$0._table._getPaneScrollerArr();
var $4=$3[$3.length-1];
$0._table._updateScrollBarVisibility();
if($0._table.getColumnVisibilityButtonVisible()||($4._verScrollBar.getVisibility()&&$4._verScrollBar.getWidth()=="auto")){return {width:$2-qx.ui.core.Widget.SCROLLBAR_SIZE,
extraWidth:0};
}return {width:$2-qx.ui.core.Widget.SCROLLBAR_SIZE,
extraWidth:qx.ui.core.Widget.SCROLLBAR_SIZE};
}},
destruct:function(){this._disposeFields("_resizeColumnData");
}});




/* ID: qx.ui.table.columnmodel.resizebehavior.Default */
qx.Class.define("qx.ui.table.columnmodel.resizebehavior.Default",
{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,
construct:function(){arguments.callee.base.call(this);
},
statics:{MIN_WIDTH:10},
properties:{newResizeBehaviorColumnData:{check:"Function",
init:function($0){return new qx.ui.table.columnmodel.resizebehavior.ColumnData();
}},
initializeWidthsOnEveryAppear:{check:"Boolean",
init:false}},
members:{widthsInitialized:false,
setWidth:function($0,
$1){if($0>=this._resizeColumnData.length){throw new Error("Column number out of range");
}this._resizeColumnData[$0].setWidth($1);
},
setMinWidth:function($0,
$1){if($0>=this._resizeColumnData.length){throw new Error("Column number out of range");
}this._resizeColumnData[$0].setMinWidth($1);
},
setMaxWidth:function($0,
$1){if($0>=this._resizeColumnData.length){throw new Error("Column number out of range");
}this._resizeColumnData[$0].setMaxWidth($1);
},
set:function($0,
$1){for(var $2 in $1){switch($2){case "width":this.setWidth($0,
$1[$2]);
break;
case "minWidth":this.setMinWidth($0,
$1[$2]);
break;
case "maxWidth":this.setMaxWidth($0,
$1[$2]);
break;
default:throw new Error("Unknown property: "+$2);
}}},
onAppear:function($0,
$1){if(!this.widthsInitialized||this.getInitializeWidthsOnEveryAppear()){this._width=this._getAvailableWidth($0);
this._computeColumnsFlexWidth($0,
$1);
this.widthsInitialized=true;
}},
onTableWidthChanged:function($0,
$1){this._computeColumnsFlexWidth($0,
$1);
},
onVerticalScrollBarChanged:function($0,
$1){this._computeColumnsFlexWidth($0,
$1);
},
onColumnWidthChanged:function($0,
$1){this._extendNextColumn($0,
$1);
},
onVisibilityChanged:function($0,
$1){var $2=$1.getData();
if($2.visible){this._computeColumnsFlexWidth($0,
$1);
return;
}this._extendLastColumn($0,
$1);
},
_setNumColumns:function($0){if($0<=this._resizeColumnData.length){this._resizeColumnData.splice($0);
return;
}for(var $1=this._resizeColumnData.length;$1<$0;$1++){this._resizeColumnData[$1]=this.getNewResizeBehaviorColumnData()();
this._resizeColumnData[$1]._columnNumber=$1;
}},
_computeColumnsFlexWidth:function($0,
$1){{};
var $2=$0._visibleColumnArr;
var $3=$2.length;
var $4;
var $5=[];
var $6=0;
var $7;
var $8=this._getAvailableWidth($0);
var $9=$8.width;
var $a=$8.extraWidth;
for($7=0;$7<$3;$7++){$4=this._resizeColumnData[$2[$7]];
if($4._computedWidthTypeAuto){$4._computedWidthTypeAuto=false;
$4._computedWidthTypeFlex=true;
$4._computedWidthParsed=1;
}if($4._computedWidthTypeFlex){$5.push($4);
}else if($4._computedWidthTypePercent){$4._computedWidthPercentValue=Math.round($9*($4._computedWidthParsed/100));
$6+=$4._computedWidthPercentValue;
}else{$6+=$4.getWidth();
}}{};
var $b=$9-$6;
var $c=$5.length;
var $d=0;
for($7=0;$7<$c;$7++){$d+=$5[$7]._computedWidthParsed;
}var $e=$b/$d;
var $f=true;
for($c=$5.length;$f&&$c>0;$c=$5.length){$f=false;
for($7=$c-1;$7>=0;$7--){$4=$5[$7];
var $g=$4._computedWidthFlexValue=$4._computedWidthParsed*$e;
var $h=$4.getMinWidthValue();
var $i=$4.getMaxWidthValue();
if($h&&$g<$h){$4._computedWidthFlexValue=Math.round($h);
$6+=$4._computedWidthFlexValue;
qx.lang.Array.removeAt($5,
$7);
$f=true;
$4=null;
}else if($i&&$g>$i){$4._computedWidthFlexValue=Math.round($i);
$6+=$4._computedWidthFlexValue;
qx.lang.Array.removeAt($5,
$7);
$f=true;
$4=null;
}}}if($5.length>0){$d=0;
for($7=0;$7<$c;$7++){$d+=$5[$7]._computedWidthParsed;
}$b=$9-$6;
$e=$b/$d;
if($b<=0){for($7=0;$7<$c;$7++){$4=$5[$7];
$g=$4._computedWidthFlexValue=(qx.ui.table.columnmodel.resizebehavior.Default.MIN_WIDTH*$5[$7]._computedWidthParsed);
$4._computedWidthFlexValue=Math.round($g);
$6+=$4._computedWidthFlexValue;
}}else{for($7=0;$7<$c;$7++){$4=$5[$7];
$g=$4._computedWidthFlexValue=$4._computedWidthParsed*$e;
if($g<qx.ui.table.columnmodel.resizebehavior.Default.MIN_WIDTH){$g=qx.ui.table.columnmodel.resizebehavior.Default.MIN_WIDTH;
}$4._computedWidthFlexValue=Math.round($g);
$6+=$4._computedWidthFlexValue;
}}}if($4!=null&&$b>0){$4._computedWidthFlexValue+=$9-$6;
}for($7=0;$7<$3;$7++){var $j;
$4=this._resizeColumnData[$2[$7]];
if($4._computedWidthTypeFlex){$j=$4._computedWidthFlexValue;
}else if($4._computedWidthTypePercent){$j=$4._computedWidthPercentValue;
}else{$j=$4.getWidth();
}if($7==$3-1){$j+=$a;
}$0.setColumnWidth($2[$7],
$j);
{};
}},
_extendNextColumn:function($0,
$1){var $2=$1.getData();
var $3=$0._visibleColumnArr;
var $4=this._getAvailableWidth($0);
var $5=$4.width;
var $6=$3.length;
if($2.newWidth>$2.oldWidth){return ;
}var $7;
var $8;
var $9=0;
for($7=0;$7<$6;$7++){$9+=$0.getColumnWidth($3[$7]);
}if($9<$5){for($7=0;$7<$3.length;$7++){if($3[$7]==$2.col){$8=$3[$7+1];
break;
}}
if($8){var $a=($5-($9-$0.getColumnWidth($8)));
$0.setColumnWidth($8,
$a);
}}},
_extendLastColumn:function($0,
$1){var $2=$1.getData();
if($2.visible){return;
}var $3=$0._visibleColumnArr;
var $4=this._getAvailableWidth($0);
var $5=$4.width;
var $6=$3.length;
var $7;
var $8;
var $9=0;
for($7=0;$7<$6;$7++){$9+=$0.getColumnWidth($3[$7]);
}if($9<$5){$8=$3[$3.length-1];
var $a=($5-($9-$0.getColumnWidth($8)));
$0.setColumnWidth($8,
$a);
}}},
destruct:function(){this._disposeFields("_resizeColumnData",
"_width");
}});




/* ID: qx.ui.table.columnmodel.resizebehavior.ColumnData */
qx.Class.define("qx.ui.table.columnmodel.resizebehavior.ColumnData",
{extend:qx.ui.core.Widget,
construct:function(){arguments.callee.base.call(this);
this.setWidth("1*");
}});




/* ID: qx.ui.table.cellrenderer.Dynamic */
qx.Class.define("qx.ui.table.cellrenderer.Dynamic",
{extend:qx.ui.table.cellrenderer.Default,
construct:function($0){arguments.callee.base.call(this);
if($0){this.setCellRendererFactoryFunction($0);
}},
properties:{cellRendererFactoryFunction:{check:"Function",
nullable:true,
init:null}},
members:{createDataCellHtml:function($0,
$1){var $2=this.getCellRendererFactoryFunction();
if(!$2){this.error("No function provided! Aborting.");
}var $3=$2($0);
return $3.createDataCellHtml($0,
$1);
}}});




/* ID: qx.ui.table.celleditor.Dynamic */
qx.Class.define("qx.ui.table.celleditor.Dynamic",
{extend:qx.core.Target,
implement:qx.ui.table.ICellEditorFactory,
construct:function($0){arguments.callee.base.call(this);
if($0){this.setCellEditorFactoryFunction($0);
}},
properties:{cellEditorFactoryFunction:{check:"Function",
nullable:true,
init:null}},
members:{createCellEditor:function($0){var $1=this.getCellEditorFactoryFunction();
if(!$1){this.error("No function provided! Aborting.");
}this._cellEditorFactory=$1($0);
var $2=this._cellEditorFactory.createCellEditor($0);
return $2;
},
getCellEditorValue:function($0){var $1=this.getCellEditorFactoryFunction();
if(!$1){this.error("No function provided! Aborting.");
}var $2=this._cellEditorFactory.getCellEditorValue($0);
return $2;
}}});




/* ID: qx.ui.table.celleditor.CheckBox */
qx.Class.define("qx.ui.table.celleditor.CheckBox",
{extend:qx.core.Target,
implement:qx.ui.table.ICellEditorFactory,
construct:function(){arguments.callee.base.call(this);
},
members:{createCellEditor:function($0){var $1=new qx.ui.form.CheckBox;
$1.setChecked($0.value);
return $1;
},
getCellEditorValue:function($0){return $0.getChecked();
}}});




/* ID: qx.ui.table.cellrenderer.Icon */
qx.Class.define("qx.ui.table.cellrenderer.Icon",
{extend:qx.ui.table.cellrenderer.Abstract,
construct:function(){arguments.callee.base.call(this);
this.IMG_BLANK_URL=qx.io.Alias.getInstance().resolve("static/image/blank.gif");
var $0=arguments.callee.self;
if(!$0.stylesheet){$0.stylesheet=qx.html.StyleSheet.createElement(".qooxdoo-table-cell-icon {"+"  text-align:center;"+"  padding-top:1px;"+"}");
}},
members:{_identifyImage:function($0){throw new Error("_identifyImage is abstract");
},
_getImageInfos:function($0){var $1=this._identifyImage($0);
if($1==null||typeof $1=="string"){$1={url:$1,
tooltip:null};
}if($1.url==null){$1.url=this.IMG_BLANK_URL;
}return $1;
},
_getCellClass:function($0){return arguments.callee.base.call(this)+" qooxdoo-table-cell-icon";
},
_getContentHtml:function($0){var $1=['<img '];
var $2=this._getImageInfos($0);
if(qx.core.Client.getInstance().isMshtml()&&/\.png$/i.test($2.url)){$1.push('src="',
this.IMG_BLANK_URL,
'" style="filter:',
"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",
$2.url,
"',sizingMethod='scale')",
'" ');
}else{$1.push('src="',
$2.url,
'" ');
}
if($2.imageWidth&&$2.imageHeight){$1.push(' width="',
$2.imageWidth,
'px" height="',
$2.imageHeight,
'px" ');
}var $3=$2.tooltip;
if($3!=null){$1.push('title="',
$3,
'" ');
}$1.push(">");
return $1.join("");
}}});




/* ID: qx.ui.table.cellrenderer.Boolean */
qx.Class.define("qx.ui.table.cellrenderer.Boolean",
{extend:qx.ui.table.cellrenderer.Icon,
construct:function(){arguments.callee.base.call(this);
this._iconUrlTrue=qx.io.Alias.getInstance().resolve("widget/table/boolean-true.png");
this._iconUrlFalse=qx.io.Alias.getInstance().resolve("widget/table/boolean-false.png");
this._iconUrlNull=qx.io.Alias.getInstance().resolve("static/image/blank.gif");
},
members:{_getCellStyle:function($0){return arguments.callee.base.call(this,
$0)+";padding-top:4px;";
},
_identifyImage:function($0){var $1={imageWidth:11,
imageHeight:11};
switch($0.value){case true:$1.url=this._iconUrlTrue;
break;
case false:$1.url=this._iconUrlFalse;
break;
default:$1.url=this._iconUrlNull;
break;
}return $1;
}}});




/* ID: qx.ui.splitpane.VerticalSplitPane */
qx.Class.define("qx.ui.splitpane.VerticalSplitPane",
{extend:qx.ui.splitpane.SplitPane,
construct:function($0,
$1){arguments.callee.base.call(this,
"vertical",
$0,
$1);
}});




/* ID: spagobi.ui.custom.MasterDetailsPage */
qx.Class.define("spagobi.ui.custom.MasterDetailsPage",
{extend:qx.ui.splitpane.VerticalSplitPane,
construct:function($0){arguments.callee.base.call(this,
"1*",
"2*");
this.setWidth("100%");
this.setHeight("100%");
this.setLiveResize(true);
var $1;
var $2;
this.setEdge(0);
this.setBorder("line-left");
var $3;
this._type=$0;
if($0==='engine'){this.records=spagobi.app.data.DataService.loadEngineRecords();
$3=new spagobi.ui.custom.EngineDetailsForm();
}else if($0==='dataset'){this.records=spagobi.app.data.DataService.loadDatasetRecords();
$3=new spagobi.ui.custom.DatasetDetailsForm();
}else if($0==='datasource'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}else if($0=='mapmgmt'){this.records=spagobi.app.data.DataService.loadMapRecords();
$3=new spagobi.ui.custom.MapDetailsForm();
}else if($0=='featuremgmt'){this.records=spagobi.app.data.DataService.loadFeatureRecords();
$3=new spagobi.ui.custom.FeatureDetailsForm();
}else if($0=='lov'){this.records=spagobi.app.data.DataService.loadLOVRecords();
$3=new spagobi.ui.custom.LOVDetailsForm();
}else if($0=='constraints'){this.records=spagobi.app.data.DataService.loadLOVRecords();
$3=new spagobi.ui.custom.ConstraintDetailsForm();
}else if($0=='parameters'){this.records=spagobi.app.data.DataService.loadLOVRecords();
$3=new spagobi.ui.custom.AnalyticalDriverDetailsForm();
}else if($0=='configuration'){this.records=spagobi.app.data.DataService.loadConfigurationRecords();
$3=new spagobi.ui.custom.DocumentConfigurationForm();
}else if($0=='link1'){this.records=spagobi.app.data.DataService.loadlink1Records();
$3=new spagobi.ui.custom.Link1DummyForm();
}else if($0=='link2'){this.records=spagobi.app.data.DataService.loadlink2Records();
$3=new spagobi.ui.custom.Link2DummyForm();
}else if($0=='link3'){this.records=spagobi.app.data.DataService.loadlink3Records();
$3=new spagobi.ui.custom.Link3DummyForm();
}else if($0=='roles'){this.records=spagobi.app.data.DataService.loadRolesRecords();
$3=new spagobi.ui.custom.RolesDummyForm();
}else if($0==='distributionList'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}else if($0==='distributionListConfig'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}else if($0==='func'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}else if($0==='workflow'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}else if($0==='event'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}else if($0==='tool'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}else if($0==='schedule'){this.records=spagobi.app.data.DataService.loadDatasourceRecords();
$3=new spagobi.ui.custom.DatasourceDetailsForm();
}this.listPage=new spagobi.ui.PagedTable(this,
this.records);
this.addTop(this.listPage);
this.listPage.setOverflow("auto");
$1=new qx.ui.pageview.buttonview.ButtonView();
$1.setEdge(0);
var $4=new qx.ui.pageview.buttonview.Button("",
"spagobi/img/spagobi/test/save.png");
var $5=new qx.ui.popup.ToolTip("Save");
$4.setToolTip($5);
var $6=new qx.ui.pageview.buttonview.Button("",
"spagobi/img/spagobi/test/delete.png");
var $7=new qx.ui.popup.ToolTip("Delete");
$6.setToolTip($7);
var $8=new qx.ui.pageview.buttonview.Button("",
"spagobi/img/spagobi/test/create.png");
var $9=new qx.ui.popup.ToolTip("New");
$8.setToolTip($9);
$1.getBar().add($8,
$4,
$6);
$4.addEventListener("changeChecked",
this.ShowDetails,
this);
this._form=$3;
$2=new qx.ui.pageview.buttonview.Button("",
"");
$2.setDisplay(false);
$2.setChecked(true);
this.detailBody=new qx.ui.pageview.buttonview.Page($2);
this.detailBody.setOverflow("auto");
this.detailBody.add(this._form);
$1.getPane().add(this.detailBody);
this.addBottom($1);
},
members:{_form:undefined,
detailBody:undefined,
records:undefined,
listPage:undefined,
getForm:function(){return this._form;
},
selectDataObject:function($0){this._form.setData($0);
},
printObject:function($0){var $1='';
for(p in $0){$1+=p+': '+$0[p]+';\n';
}return $1;
},
myFunction:function(){alert("button works");
this._form.setData({mychecklist:["eeee",
"jjjj"]});
var $0=this._form.getData();
var $1="";
for(prop in $0){if(prop=='mychecklist'){for(i=0;i<$0[prop].length;i++){$1=$1+$0[prop][i]+",";
}}}alert($1);
},
myRadioFunction:function(){alert("button works");
this._form.setData({type:"Number"});
var $0=this._form.getData();
var $1="";
for(prop in $0){alert("getData gave: "+$0[prop]);
}},
_onClickMenu:function($0){alert("value:"+this.getCurrentNode());
},
_onSelectTreeNode:function($0){alert(this+","+$0.getData());
this.onClickMenu();
},
ShowDetails:function($0){if($0.getTarget().getChecked()==false){return;
}
if(this.records.ID!=undefined){if(this.records.ID=="ROLES"){alert(this.listPage._table.getUpdatedData());
}}else{var $1=this.getForm().getData();
alert(this.printObject($1));
}$0.getTarget().setChecked(false);
}}});




/* ID: spagobi.ui.custom.EngineDetailsForm */
qx.Class.define("spagobi.ui.custom.EngineDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
mandatory:true},
{type:'text',
dataIndex:'name',
text:'Name',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'combo',
dataIndex:'documentType',
text:'Document type',
items:["Report",
"Map"]},
{type:'combo',
dataIndex:'engineType',
text:'Engine type',
items:["Internal",
"External"],
listeners:[{event:'changeValue',
handler:this._documentTypeChangeValueHandler,
scope:this}]},
{type:'flag',
dataIndex:'useDataSet',
text:'Use Data Set',
checked:false},
{type:'flag',
dataIndex:'useDataSource',
text:'Use Data Source',
checked:true,
listeners:[{event:'changeChecked',
handler:this._useDataSourceChangeCheckedHandler,
scope:this}]},
{type:'combo',
dataIndex:'dataSource',
text:'Data Source',
items:["foodmart",
"geo",
"spagobi"]},
{type:'text',
dataIndex:'class',
text:'Class',
mandatory:true},
{type:'text',
dataIndex:'url',
text:'Url',
mandatory:true,
visible:false},
{type:'text',
dataIndex:'driver',
text:'Driver Name',
mandatory:true,
visible:false}]);
},
members:{_documentTypeChangeValueHandler:function($0){if(this&&this.getInputField('url')){if($0.getValue()=="Internal"){this.getInputField('url').setDisplay(false);
this.getInputField('driver').setDisplay(false);
this.getInputField('class').setDisplay(true);
}else{this.getInputField('url').setDisplay(true);
this.getInputField('driver').setDisplay(true);
this.getInputField('class').setDisplay(false);
}}},
_useDataSourceChangeCheckedHandler:function($0){if(this&&this.getInputField('dataSource')){this.getInputField('dataSource').setDisplay($0.getValue());
}}}});




/* ID: spagobi.ui.custom.DatasetDetailsForm */
qx.Class.define("spagobi.ui.custom.DatasetDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
mandatory:true},
{type:'text',
dataIndex:'name',
text:'Name',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'combo',
dataIndex:'type',
text:'Type',
items:["File",
"Web",
"Query"],
listeners:[{event:'changeValue',
handler:this._documentTypeChangeValueHandler,
scope:this}]},
{type:'text',
dataIndex:'fileName',
text:'File name',
mandatory:false}]);
},
members:{_documentTypeChangeValueHandler:function($0){if(this&&this.getInputField('fileName')){if($0.getValue()=="File"){this.getInputField('fileName').setDisplay(true);
}else{this.getInputField('fileName').setDisplay(false);
}}}}});




/* ID: spagobi.ui.custom.DatasourceDetailsForm */
qx.Class.define("spagobi.ui.custom.DatasourceDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'combo',
dataIndex:'dialect',
text:'Dialect',
items:["Sql Server",
"HQL",
"MySql",
"Ingres"]},
{type:'combo',
dataIndex:'type',
text:'Type',
items:["With Jndi Name",
"With Analytical Drivers"],
listeners:[{event:'changeValue',
handler:this._documentTypeChangeValueHandler,
scope:this}]},
{type:'text',
dataIndex:'jndiname',
text:'Jndi Name',
mandatory:false},
{type:'text',
dataIndex:'url',
text:'Url',
mandatory:false,
visible:false},
{type:'text',
dataIndex:'user',
text:'User',
mandatory:false,
visible:false},
{type:'text',
dataIndex:'password',
text:'Password',
mandatory:false,
visible:false,
password:true},
{type:'text',
dataIndex:'driver',
text:'Driver',
mandatory:false,
visible:false}]);
},
members:{_documentTypeChangeValueHandler:function($0){if(this&&this.getInputField('jndiname')){if($0.getValue()=="With Jndi Name"){this.getInputField('jndiname').setDisplay(true);
this.getInputField('url').setDisplay(false);
this.getInputField('user').setDisplay(false);
this.getInputField('password').setDisplay(false);
this.getInputField('driver').setDisplay(false);
}else{this.getInputField('jndiname').setDisplay(false);
this.getInputField('url').setDisplay(true);
this.getInputField('user').setDisplay(true);
this.getInputField('password').setDisplay(true);
this.getInputField('driver').setDisplay(true);
}}}}});




/* ID: spagobi.ui.custom.MapDetailsForm */
qx.Class.define("spagobi.ui.custom.MapDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'name',
text:'Name',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'text',
dataIndex:'template',
text:'Template',
mandatory:false},
{type:'combo',
dataIndex:'format',
text:'Format',
items:["SVG"]},
{type:'formList',
dataIndex:'features',
formList:spagobi.ui.custom.FeatureDetailsForm}]);
}});




/* ID: spagobi.ui.custom.FeatureDetailsForm */
qx.Class.define("spagobi.ui.custom.FeatureDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'name',
text:'Name',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'combo',
dataIndex:'type',
text:'Type',
items:["Territorial",
"Positional"],
mandatory:true}]);
}});




/* ID: spagobi.ui.custom.LOVDetailsForm */
qx.Class.define("spagobi.ui.custom.LOVDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
labelwidth:100,
mandatory:true},
{type:'text',
dataIndex:'name',
text:'Name',
labelwidth:100,
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
labelwidth:100,
mandatory:true},
{type:'combo',
dataIndex:'type',
text:'Type',
labelwidth:100,
items:["Query Statement",
"Script to load values",
"Fixed List of values",
"Java class"],
listeners:[{event:'changeValue',
handler:this._documentTypeChangeValueHandler,
scope:this}]},
{type:'form',
dataIndex:'querystmt',
form:[{type:'combo',
dataIndex:'datasourcelabel',
text:'Data Source label',
labelwidth:100,
items:["FoodMart",
"Pool",
"Connection"]},
{type:'textarea',
dataIndex:'querydef',
text:'Query Definition',
labelwidth:100,
height:50}]},
{type:'form',
dataIndex:'scriptloadvalues',
form:[{type:'textarea',
dataIndex:'script',
text:'Script',
labelwidth:100,
height:50}],
visible:false},
{type:'form',
dataIndex:'fixedlov',
form:[{type:'formList',
dataIndex:'subformlist',
formList:[{type:'form',
dataindex:'subform',
form:[{type:'text',
dataIndex:'value',
text:'Value',
labelwidth:100,
mandatory:true},
{type:'text',
dataIndex:'description2',
text:'Description',
labelwidth:100,
mandatory:true}]}]}],
visible:false},
{type:'form',
dataIndex:'javaclass',
form:[{type:'text',
dataIndex:'classname',
text:'Java Class Name',
labelwidth:100,
mandatory:true}],
visible:false}]);
},
members:{_documentTypeChangeValueHandler:function($0){if(this&&this.getInputField('querystmt')){if($0.getValue()=="Query Statement"){this.getInputField('querystmt').setDisplay(true);
this.getInputField('scriptloadvalues').setDisplay(false);
this.getInputField('fixedlov').setDisplay(false);
this.getInputField('javaclass').setDisplay(false);
}else if($0.getValue()=="Script to load values"){this.getInputField('querystmt').setDisplay(false);
this.getInputField('scriptloadvalues').setDisplay(true);
this.getInputField('fixedlov').setDisplay(false);
this.getInputField('javaclass').setDisplay(false);
}else if($0.getValue()=="Fixed List of values"){this.getInputField('querystmt').setDisplay(false);
this.getInputField('scriptloadvalues').setDisplay(false);
this.getInputField('fixedlov').setDisplay(true);
this.getInputField('javaclass').setDisplay(false);
}else if($0.getValue()=="Java class"){this.getInputField('querystmt').setDisplay(false);
this.getInputField('scriptloadvalues').setDisplay(false);
this.getInputField('fixedlov').setDisplay(false);
this.getInputField('javaclass').setDisplay(true);
}}}}});




/* ID: spagobi.ui.custom.ConstraintDetailsForm */
qx.Class.define("spagobi.ui.custom.ConstraintDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
labelwidth:100,
mandatory:true},
{type:'text',
dataIndex:'name',
text:'Name',
labelwidth:100,
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
labelwidth:100,
mandatory:false},
{type:'combo',
dataIndex:'type',
text:'Check Type',
items:["Date",
"Regexp",
"Max Length",
"Range",
"Decimal",
"Min Length"],
mandatory:false,
labelwidth:100,
listeners:[{event:'changeValue',
handler:this._documentTypeChangeValueHandler,
scope:this}]},
{type:'text',
dataIndex:'datevalueformat',
text:'Date Value Format',
value:'dd/mm/yyyy',
labelwidth:100,
mandatory:false},
{type:'text',
dataIndex:'regularexpression',
text:'Regular Expression',
labelwidth:100,
mandatory:false,
visible:false},
{type:'text',
dataIndex:'maxlengthvalue',
text:'Max Length Value',
labelwidth:100,
mandatory:false,
visible:false},
{type:'text',
dataIndex:'lrv',
text:'Lower Range Value ',
labelwidth:100,
mandatory:false,
visible:false},
{type:'text',
dataIndex:'higherrangevalue',
text:'Higher Range Value',
labelwidth:100,
mandatory:false,
visible:false},
{type:'text',
dataIndex:'decimalplaces',
text:'Decimal Places',
labelwidth:100,
mandatory:false,
visible:false},
{type:'text',
dataIndex:'minlengthvalue',
text:'Min Length Value ',
labelwidth:100,
mandatory:false,
visible:false}]);
},
members:{_documentTypeChangeValueHandler:function($0){if(this&&this.getInputField('datevalueformat')){if($0.getValue()==null){this.getInputField('datevalueformat').setDisplay(false);
this.getInputField('regularexpression').setDisplay(false);
this.getInputField('maxlengthvalue').setDisplay(false);
this.getInputField('lrv').setDisplay(false);
this.getInputField('higherrangevalue').setDisplay(false);
this.getInputField('decimalplaces').setDisplay(false);
this.getInputField('minlengthvalue').setDisplay(false);
}else if($0.getValue()=="Date"){this.getInputField('datevalueformat').setDisplay(true);
this.getInputField('regularexpression').setDisplay(false);
this.getInputField('maxlengthvalue').setDisplay(false);
this.getInputField('lrv').setDisplay(false);
this.getInputField('higherrangevalue').setDisplay(false);
this.getInputField('decimalplaces').setDisplay(false);
this.getInputField('minlengthvalue').setDisplay(false);
}else if($0.getValue()=="Regexp"){this.getInputField('datevalueformat').setDisplay(false);
this.getInputField('regularexpression').setDisplay(true);
this.getInputField('maxlengthvalue').setDisplay(false);
this.getInputField('lrv').setDisplay(false);
this.getInputField('higherrangevalue').setDisplay(false);
this.getInputField('decimalplaces').setDisplay(false);
this.getInputField('minlengthvalue').setDisplay(false);
}else if($0.getValue()=="Max Length"){this.getInputField('datevalueformat').setDisplay(false);
this.getInputField('regularexpression').setDisplay(false);
this.getInputField('maxlengthvalue').setDisplay(true);
this.getInputField('lrv').setDisplay(false);
this.getInputField('higherrangevalue').setDisplay(false);
this.getInputField('decimalplaces').setDisplay(false);
this.getInputField('minlengthvalue').setDisplay(false);
}else if($0.getValue()=="Range"){this.getInputField('datevalueformat').setDisplay(false);
this.getInputField('regularexpression').setDisplay(false);
this.getInputField('maxlengthvalue').setDisplay(false);
this.getInputField('lrv').setDisplay(true);
this.getInputField('higherrangevalue').setDisplay(true);
this.getInputField('decimalplaces').setDisplay(false);
this.getInputField('minlengthvalue').setDisplay(false);
}else if($0.getValue()=="Decimal"){this.getInputField('datevalueformat').setDisplay(false);
this.getInputField('regularexpression').setDisplay(false);
this.getInputField('maxlengthvalue').setDisplay(false);
this.getInputField('lrv').setDisplay(false);
this.getInputField('higherrangevalue').setDisplay(false);
this.getInputField('decimalplaces').setDisplay(true);
this.getInputField('minlengthvalue').setDisplay(false);
}else if($0.getValue()=="Min Length"){this.getInputField('datevalueformat').setDisplay(false);
this.getInputField('regularexpression').setDisplay(false);
this.getInputField('maxlengthvalue').setDisplay(false);
this.getInputField('lrv').setDisplay(false);
this.getInputField('higherrangevalue').setDisplay(false);
this.getInputField('decimalplaces').setDisplay(false);
this.getInputField('minlengthvalue').setDisplay(true);
}}}}});




/* ID: spagobi.ui.custom.AnalyticalDriverDetailsForm */
qx.Class.define("spagobi.ui.custom.AnalyticalDriverDetailsForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
mandatory:true},
{type:'text',
dataIndex:'name',
text:'Name',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'radio',
dataIndex:'type',
text:'Type',
items:["Date",
"Number",
"String"]},
{type:'flag',
dataIndex:'functional',
text:'Functional',
checked:true},
{type:'formList',
dataIndex:'features',
formList:spagobi.ui.custom.UseModeSubForm}]);
}});




/* ID: spagobi.ui.custom.UseModeSubForm */
qx.Class.define("spagobi.ui.custom.UseModeSubForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
mandatory:true},
{type:'text',
dataIndex:'name',
text:'Name',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'radio',
dataIndex:'type',
text:'Type',
items:["Lov",
"Manual Input"],
listeners:[{event:'changeSelected',
handler:this._lovTypeChangeValueHandler,
scope:this}]},
{type:'text',
dataIndex:'lov',
text:'Lov',
mandatory:true},
{type:'combo',
dataIndex:'lovlist',
text:'Selection List',
items:["List",
"Check List",
"Combo Box"]},
{type:'text',
dataIndex:'manualinput',
text:'Manual Input',
mandatory:false,
visible:false},
{type:'check',
dataIndex:'mychecklist',
checked:false,
text:'Roles',
columns:5,
items:["aaaa",
"bbbb",
"cccc",
"dddd",
"eeee",
"ffff",
"gggg",
"hhhh",
"iiii",
"jjjj"]},
{type:'check',
dataIndex:'checklist1',
checked:false,
text:'Constraints',
columns:3,
items:["aaaa",
"bbbb",
"cccc",
"dddd",
"eeee",
"ffff",
"gggg",
"hhhh",
"iiii"]}]);
},
members:{_lovTypeChangeValueHandler:function($0){if(this&&this.getInputField('type')){if($0.getValue().getLabel()=="Lov"){this.getInputField('lov').setDisplay(true);
this.getInputField('lovlist').setDisplay(true);
this.getInputField('manualinput').setDisplay(false);
}else if($0.getValue().getLabel()=="Manual Input"){this.getInputField('lov').setDisplay(false);
this.getInputField('lovlist').setDisplay(false);
this.getInputField('manualinput').setDisplay(true);
}}}}});




/* ID: spagobi.ui.custom.DocumentConfigurationForm */
qx.Class.define("spagobi.ui.custom.DocumentConfigurationForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'label',
text:'Label',
mandatory:true},
{type:'text',
dataIndex:'name',
text:'Name',
mandatory:true},
{type:'text',
dataIndex:'description',
text:'Description',
mandatory:false},
{type:'combo',
dataIndex:'type',
text:'Type',
items:["Report",
"On-line Analytical Processing",
"Data Mining Model",
"Dashboard",
"Datamart Model",
"Map",
"Dossier",
"Office Document",
"ETL Process",
"Document Composite"],
listeners:[{event:'changeValue',
handler:this._documentTypeChangeValueHandler,
scope:this}]},
{type:'combo',
dataIndex:'engine',
text:'Engine',
items:["JPIVOT"]},
{type:'combo',
dataIndex:'datasource',
text:'Data Source',
items:["FoodMart",
"SpagoBI",
"GeoData",
"XaltiaOracle"]},
{type:'text',
dataIndex:'useDataSet',
text:'Use Data Set',
mandatory:false},
{type:'combo',
dataIndex:'state',
text:'State',
items:["Suspended",
"Development",
"Test",
"Release"]},
{type:'text',
dataIndex:'refreshseconds',
text:'Refresh Seconds',
mandatory:false},
{type:'radio',
dataIndex:'cryptable',
text:'Criptable',
items:["true",
"false"]},
{type:'radio',
dataIndex:'visibility',
text:'Visible',
items:["true",
"false"]},
{type:'text',
dataIndex:'template',
text:'Template',
mandatory:false},
{type:'text',
dataIndex:'templatebuild',
text:'Template Build',
mandatory:false},
{type:'formList',
dataIndex:'features',
formList:spagobi.ui.custom.ConfigurationSubform}]);
},
members:{_funcofrelatedcombo:function(){var $0=[];
var $1=this.getInputField('engine').getUserData('field');
alert($1);
$0=$1.getList();
for(var $2=0;$2<3;$2++){alert($0.length);
$0[$2]=this.getInputField('engine').items[$2];
}return $0;
},
_documentTypeChangeValueHandler:function($0){if(this&&this.getInputField('engine')){if($0.getValue()=="Report"){this.getInputField('engine').setDisplay(true);
this.getInputField('datasource').setDisplay(true);
this.getInputField('state').setDisplay(true);
this.getInputField('refreshseconds').setDisplay(true);
this.getInputField('cryptable').setDisplay(true);
this.getInputField('visibility').setDisplay(true);
this.getInputField('template').setDisplay(true);
this.getInputField('useDataSet').setDisplay(false);
this.getInputField('templatebuild').setDisplay(false);
}else if($0.getValue()=="On-line Analytical Processing"){this.getInputField('engine').setDisplay(true);
this.getInputField('datasource').setDisplay(true);
this.getInputField('state').setDisplay(true);
this.getInputField('refreshseconds').setDisplay(true);
this.getInputField('cryptable').setDisplay(true);
this.getInputField('visibility').setDisplay(true);
this.getInputField('template').setDisplay(true);
this.getInputField('templatebuild').setDisplay(true);
this.getInputField('useDataSet').setDisplay(false);
}else if($0.getValue()=="Data Mining Model"||$0.getValue()=="Office Document"){this.getInputField('engine').setDisplay(true);
this.getInputField('state').setDisplay(true);
this.getInputField('refreshseconds').setDisplay(true);
this.getInputField('cryptable').setDisplay(true);
this.getInputField('visibility').setDisplay(true);
this.getInputField('template').setDisplay(true);
this.getInputField('datasource').setDisplay(false);
this.getInputField('useDataSet').setDisplay(false);
this.getInputField('templatebuild').setDisplay(false);
}else if($0.getValue()=="Dashboard"){this.getInputField('engine').setDisplay(true);
this.getInputField('state').setDisplay(true);
this.getInputField('refreshseconds').setDisplay(true);
this.getInputField('cryptable').setDisplay(true);
this.getInputField('visibility').setDisplay(true);
this.getInputField('template').setDisplay(true);
this.getInputField('useDataSet').setDisplay(true);
this.getInputField('datasource').setDisplay(false);
this.getInputField('templatebuild').setDisplay(false);
}else if($0.getValue()=="Datamart Model"||$0.getValue()=="Map"||$0.getValue()=="ETL Process"||$0.getValue()=="Document Composite"){this.getInputField('engine').setDisplay(true);
this.getInputField('state').setDisplay(true);
this.getInputField('refreshseconds').setDisplay(true);
this.getInputField('cryptable').setDisplay(true);
this.getInputField('visibility').setDisplay(true);
this.getInputField('template').setDisplay(true);
this.getInputField('datasource').setDisplay(true);
this.getInputField('useDataSet').setDisplay(false);
this.getInputField('templatebuild').setDisplay(false);
}else if($0.getValue()=="Dossier"){this.getInputField('engine').setDisplay(true);
this.getInputField('state').setDisplay(true);
this.getInputField('refreshseconds').setDisplay(true);
this.getInputField('cryptable').setDisplay(true);
this.getInputField('visibility').setDisplay(true);
this.getInputField('template').setDisplay(true);
this.getInputField('datasource').setDisplay(true);
this.getInputField('templatebuild').setDisplay(true);
this.getInputField('datasource').setDisplay(false);
}}}}});




/* ID: spagobi.ui.custom.ConfigurationSubform */
qx.Class.define("spagobi.ui.custom.ConfigurationSubform",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this,
[{type:'text',
dataIndex:'title',
text:'Title',
mandatory:true},
{type:'text',
dataIndex:'analyticaldriver',
text:'Analytical Driver',
mandatory:true},
{type:'text',
dataIndex:'urlname',
text:'Url Name',
mandatory:true},
{type:'combo',
dataIndex:'priority',
text:'Priority',
items:["1"]}]);
}});




/* ID: spagobi.ui.custom.Link1DummyForm */
qx.Class.define("spagobi.ui.custom.Link1DummyForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this);
}});




/* ID: spagobi.ui.custom.Link2DummyForm */
qx.Class.define("spagobi.ui.custom.Link2DummyForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this);
}});




/* ID: spagobi.ui.custom.Link3DummyForm */
qx.Class.define("spagobi.ui.custom.Link3DummyForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this);
}});




/* ID: spagobi.ui.custom.RolesDummyForm */
qx.Class.define("spagobi.ui.custom.RolesDummyForm",
{extend:spagobi.ui.Form,
construct:function(){arguments.callee.base.call(this);
}});




/* ID: spagobi.ui.PagedTable */
qx.Class.define("spagobi.ui.PagedTable",
{extend:qx.ui.layout.VerticalBoxLayout,
construct:function($0,
$1){arguments.callee.base.call(this);
this.setWidth("100%");
this.setHeight("100%");
this._filterBar=new spagobi.ui.FilterBar();
this._table=new spagobi.ui.Table($0,
$1);
this._navigationBar=new spagobi.ui.NavigationBar();
var $2=new qx.ui.basic.Atom();
$2.add(this._filterBar);
$2.setHorizontalAlign("center");
this.add($2);
this._table.setWidth('100%');
this._table.setHeight('1*');
this.add(this._table);
var $3=new qx.ui.basic.Atom();
$3.add(this._navigationBar);
$3.setHorizontalAlign("center");
this.add($3);
},
members:{_filterBar:undefined,
_navigationBar:undefined,
_table:undefined}});




/* ID: spagobi.ui.FilterBar */
qx.Class.define("spagobi.ui.FilterBar",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function(){arguments.callee.base.call(this);
this.setWidth("100%");
this.setHeight("100%");
this.createFilterBar();
},
members:{createFilterBar:function(){var $0=new qx.ui.basic.Label("  The value of the column   ");
this.add($0);
var $1=new qx.ui.form.ComboBox();
var $2=["Label",
"Name",
"Description"];
for(var $3=0;$3<$2.length;$3++){var $4=new qx.ui.form.ListItem($2[$3]);
$1.add($4);
}this.add($1);
var $5=new qx.ui.basic.Label(" as a ");
this.add($5);
var $6=new qx.ui.form.ComboBox();
var $7=["Label",
"Name",
"Description"];
for(var $3=0;$3<$7.length;$3++){var $4=new qx.ui.form.ListItem($7[$3]);
$6.add($4);
}this.add($6);
var $8=new qx.ui.basic.Label(" ");
this.add($8);
var $9=new qx.ui.form.ComboBox();
var $a=["starts with",
"ends with",
"contains",
"=",
"<",
"<=",
">",
">="];
for(var $3=0;$3<$a.length;$3++){var $4=new qx.ui.form.ListItem($a[$3]);
$9.add($4);
}this.add($9);
var $b=new qx.ui.basic.Label(" ");
this.add($b);
var $c=new qx.ui.form.TextField();
with($c){width:70}this.add($c);
}}});




/* ID: spagobi.ui.NavigationBar */
qx.Class.define("spagobi.ui.NavigationBar",
{extend:qx.ui.layout.HorizontalBoxLayout,
construct:function(){arguments.callee.base.call(this);
this.setWidth("100%");
this.setHeight("100%");
this.createNavBar();
},
members:{createNavBar:function(){var $0=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/firstPage.png");
this.add($0);
var $1=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/previousPage.png");
this.add($1);
var $2=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/nextPage.png");
this.add($2);
var $3=new qx.ui.toolbar.Button("",
"spagobi/img/spagobi/test/lastPage.png");
this.add($3);
}}});




/* ID: qx.ui.pageview.buttonview.ButtonView */
qx.Class.define("qx.ui.pageview.buttonview.ButtonView",
{extend:qx.ui.pageview.AbstractPageView,
construct:function(){arguments.callee.base.call(this,
qx.ui.pageview.buttonview.Bar,
qx.ui.pageview.buttonview.Pane);
this.initBarPosition();
},
properties:{appearance:{refine:true,
init:"button-view"},
barPosition:{init:"top",
check:["top",
"right",
"bottom",
"left"],
apply:"_applyBarPosition",
event:"changeBarPosition"}},
members:{_applyBarPosition:function($0,
$1){var $2=this._bar;
var $3=this._pane;
switch($0){case "top":$2.moveSelfToBegin();
$2.setHeight("auto");
$2.setWidth(null);
$2.setOrientation("horizontal");
$3.setWidth(null);
$3.setHeight("1*");
this.setOrientation("vertical");
break;
case "bottom":$2.moveSelfToEnd();
$2.setHeight("auto");
$2.setWidth(null);
$2.setOrientation("horizontal");
$3.setWidth(null);
$3.setHeight("1*");
this.setOrientation("vertical");
break;
case "left":$2.moveSelfToBegin();
$2.setWidth("auto");
$2.setHeight(null);
$2.setOrientation("vertical");
$3.setHeight(null);
$3.setWidth("1*");
this.setOrientation("horizontal");
break;
case "right":$2.moveSelfToEnd();
$2.setWidth("auto");
$2.setHeight(null);
$2.setOrientation("vertical");
$3.setHeight(null);
$3.setWidth("1*");
this.setOrientation("horizontal");
break;
}this._addChildrenToStateQueue();
$2._addChildrenToStateQueue();
}}});




/* ID: qx.ui.pageview.buttonview.Bar */
qx.Class.define("qx.ui.pageview.buttonview.Bar",
{extend:qx.ui.pageview.AbstractBar,
properties:{appearance:{refine:true,
init:"button-view-bar"}},
members:{getWheelDelta:function($0){var $1=$0.getWheelDelta();
switch(this.getParent().getBarPosition()){case "left":case "right":$1*=-1;
}return $1;
},
_renderAppearance:function(){if(this.getParent()){var $0=this.getParent().getBarPosition();
$0==="left"?this.addState("barLeft"):this.removeState("barLeft");
$0==="right"?this.addState("barRight"):this.removeState("barRight");
$0==="top"?this.addState("barTop"):this.removeState("barTop");
$0==="bottom"?this.addState("barBottom"):this.removeState("barBottom");
}arguments.callee.base.call(this);
}}});




/* ID: qx.ui.pageview.buttonview.Pane */
qx.Class.define("qx.ui.pageview.buttonview.Pane",
{extend:qx.ui.pageview.AbstractPane,
properties:{appearance:{refine:true,
init:"button-view-pane"}},
members:{_renderAppearance:function(){if(this._hasParent){var $0=this.getParent().getBarPosition();
$0==="top"||$0==="bottom"?this.addState("barHorizontal"):this.removeState("barHorizontal");
$0==="left"||$0==="right"?this.addState("barVertical"):this.removeState("barVertical");
}arguments.callee.base.call(this);
}}});




/* ID: qx.ui.pageview.buttonview.Button */
qx.Class.define("qx.ui.pageview.buttonview.Button",
{extend:qx.ui.pageview.AbstractButton,
properties:{allowStretchX:{refine:true,
init:true},
allowStretchY:{refine:true,
init:true},
appearance:{refine:true,
init:"button-view-button"}},
members:{_onkeypress:function($0){switch(this.getView().getBarPosition()){case "top":case "bottom":switch($0.getKeyIdentifier()){case "Left":var $1=true;
break;
case "Right":var $1=false;
break;
default:return;
}break;
case "left":case "right":switch($0.getKeyIdentifier()){case "Up":var $1=true;
break;
case "Down":var $1=false;
break;
default:return;
}break;
default:return;
}var $2=($1?(this.isFirstChild()?this.getParent().getLastChild():this.getPreviousSibling()):(this.isLastChild()?this.getParent().getFirstChild():this.getNextSibling()));
$2.setFocused(true);
$2.setChecked(true);
},
_renderAppearance:function(){if(this.getParent()){var $0=this.getView().getBarPosition();
$0==="left"?this.addState("barLeft"):this.removeState("barLeft");
$0==="right"?this.addState("barRight"):this.removeState("barRight");
$0==="top"?this.addState("barTop"):this.removeState("barTop");
$0==="bottom"?this.addState("barBottom"):this.removeState("barBottom");
}arguments.callee.base.call(this);
}}});




/* ID: qx.ui.pageview.buttonview.Page */
qx.Class.define("qx.ui.pageview.buttonview.Page",
{extend:qx.ui.pageview.AbstractPage,
properties:{appearance:{refine:true,
init:"button-view-page"}}});




/* ID: qx.theme.ext.Color */
qx.Theme.define("qx.theme.ext.Color",
{title:"Ext",
extend:qx.theme.classic.color.Royale,
colors:{"document-background":[243,
248,
253],
"background":[229,
244,
254],
"border-light":[101,
147,
207],
"border-light-shadow":[253,
216,
137],
"border-dark":[0,
60,
116],
"border-dark-shadow":[101,
147,
207],
"effect":[188,
212,
247],
"selected":[188,
212,
247],
"text":[31,
62,
117],
"text-disabled":[170,
170,
170],
"text-selected":[31,
62,
117],
"tooltip":[253,
255,
180],
"tooltip-text":"black",
"tooltip-border":[252,
201,
13],
"menu":"white",
"list":[250,
251,
254],
"field":[188,
212,
247],
"button":[188,
212,
247],
"button-hover":[229,
244,
254],
"button-abandoned":[235,
233,
237],
"window-active-caption-text":[255,
255,
255],
"window-inactive-caption-text":[128,
128,
128],
"window-active-caption":[31,
62,
117],
"window-inactive-caption":[220,
220,
220],
"button-view-pane":[255,
255,
255],
"button-view-bar":[188,
212,
247],
"button-view-button":[188,
212,
247],
"button-view-button-border":[31,
62,
117],
"tab-view-pane":[255,
255,
255],
"tab-view-border":[101,
147,
207],
"tab-view-button":[210,
214,
216],
"tab-view-button-hover":[188,
212,
247],
"tab-view-button-checked":[188,
212,
247],
"tab-view-text":[30,
60,
115],
"tab-view-text-disabled":[102,
102,
102],
"radio-view-pane":[255,
255,
255],
"radio-view-border":[101,
147,
207],
"radio-view-bar":[188,
212,
247],
"radio-view-button-checked":[250,
251,
254],
"list-view":"white",
"list-view-border":[101,
147,
207],
"list-view-header":[235,
234,
219],
"list-view-header-border":[226,
226,
226],
"list-view-header-separator-border":[214,
213,
217],
"list-view-header-border-hover":[249,
177,
25],
"list-view-header-cell-hover":[250,
249,
244],
"list-view-content-cell":[90,
138,
211],
"date-chooser":"white",
"datec-chooser-title":[31,
62,
117],
"date-chooser-day":[31,
62,
117],
"table-pane":"white",
"table-header":[244,
248,
254],
"table-header-border":[176,
199,
230],
"table-header-border-hover":[101,
147,
207],
"table-header-cell":[244,
248,
254],
"table-header-cell-hover":[255,
255,
255],
"table-focus-indicator":[197,
200,
202],
"table-row-background-focused-selected":[90,
138,
211],
"table-row-background-focused":[221,
238,
255],
"table-row-background-selected":[101,
147,
207],
"table-row-background-even":[239,
245,
253],
"table-row-background-odd":[255,
255,
255],
"table-row-selected":[255,
255,
255],
"table-row":[0,
0,
0],
"general-border":[101,
147,
207],
"toolbar-background":[201,
222,
250],
"toolbar-border":[152,
192,
244],
"group-box-legend":[101,
147,
207],
"splitpane-slider-dragging":[0,
60,
116]}});




/* ID: qx.theme.ext.Border */
qx.Theme.define("qx.theme.ext.Border",
{title:"Ext",
extend:qx.theme.classic.Border,
borders:{"inset-thin":{width:1,
color:"border-light"},
"outset":{width:2,
color:"border-light",
innerColor:"border-light"},
"inset-button":{width:2,
color:"border-dark",
innerColor:"border-light-shadow"},
"outset-thin-button":{width:1,
color:"border-dark"},
"tooltip":{width:1,
color:"tooltip-border"},
"general":{width:1,
color:"general-border"},
"toolbar":{width:1,
color:"toolbar-border"},
"button-view-button":{width:1,
color:"button-view-button-border"},
"tab-view-pane":{width:1,
color:"tab-view-border"},
"list-view":{width:1,
color:"list-view-border"},
"line-left":{widthLeft:1,
colorLeft:"general-border"},
"line-right":{widthRight:1,
colorRight:"general-border"},
"line-top":{widthTop:1,
colorTop:"general-border"},
"line-bottom":{widthBottom:1,
colorBottom:"general-border"}}});




/* ID: qx.theme.ext.font.Default */
qx.Theme.define("qx.theme.ext.font.Default",
{title:"Ext",
fonts:{"default":{size:11,
family:["Verdana",
"Helvetica",
"Lucida Grande",
"Tahoma",
"Bitstream Vera Sans",
"Liberation Sans"]},
"bold":{size:11,
family:["Verdana",
"Helvetica",
"Lucida Grande",
"Tahoma",
"Bitstream Vera Sans",
"Liberation Sans"],
bold:true},
"large":{size:13,
family:["Verdana",
"Helvetica",
"Lucida Grande",
"Tahoma",
"Bitstream Vera Sans",
"Liberation Sans"]},
"bold-large":{size:13,
family:["Verdana",
"Helvetica",
"Lucida Grande",
"Tahoma",
"Bitstream Vera Sans",
"Liberation Sans"],
bold:true}}});




/* ID: qx.theme.ext.Widget */
qx.Theme.define("qx.theme.ext.Widget",
{title:"Ext",
widgets:{uri:qx.core.Setting.get("qx.resourceUri")+"/widget/Ext"}});




/* ID: qx.theme.ext.Appearance */
qx.Theme.define("qx.theme.ext.Appearance",
{title:"Ext",
appearances:{"empty":{},
"widget":{},
"image":{},
"atom":{},
"popup":{},
"cursor-dnd-move":{style:function($0){return {source:"widget/cursors/move.gif"};
}},
"cursor-dnd-copy":{style:function($0){return {source:"widget/cursors/copy.gif"};
}},
"cursor-dnd-alias":{style:function($0){return {source:"widget/cursors/alias.gif"};
}},
"cursor-dnd-nodrop":{style:function($0){return {source:"widget/cursors/nodrop.gif"};
}},
"label":{style:function($0){return {textColor:$0.disabled?"text-disabled":"undefined"};
}},
"client-document":{style:function($0){return {backgroundColor:"document-background",
textColor:"text",
font:"default"};
}},
"client-document-blocker":{style:function($0){return {cursor:"default",
backgroundImage:"static/image/blank.gif"};
}},
"tool-tip":{include:"popup",
style:function($0){return {backgroundColor:"tooltip",
textColor:"tooltip-text",
border:"tooltip",
padding:[1,
3,
2,
3]};
}},
"iframe":{style:function($0){return {border:"general"};
}},
"check-box":{style:function($0){return {padding:[2,
3]};
}},
"radio-button":{include:"check-box"},
"button":{style:function($0){if($0.over){var $1="inset-button";
}else{var $1="outset-thin-button";
}
if($0.over){var $2=[2,
3,
2,
3];
}else if($0.pressed){var $2=[3,
2,
1,
4];
}else{var $2=[3,
4,
3,
4];
}return {backgroundImage:"widget/gradient/button_gradient.png",
backgroundColor:$0.over?"button-hover":"button",
border:$1,
padding:$2};
}},
"toolbar":{style:function($0){return {border:"toolbar",
backgroundColor:"toolbar-background",
backgroundImage:"widget/gradient/toolbar_gradient.png",
padding:1};
}},
"toolbar-part":{},
"toolbar-part-handle":{style:function($0){return {width:10};
}},
"toolbar-part-handle-line":{style:function($0){return {top:2,
left:3,
bottom:2,
width:4,
border:"general"};
}},
"toolbar-separator":{style:function($0){return {width:8};
}},
"toolbar-separator-line":{style:function($0){var $1=new qx.ui.core.Border.fromConfig({left:[1,
"solid",
"general-border"]});
return {top:2,
left:3,
width:2,
bottom:2,
border:$1};
}},
"toolbar-button":{style:function($0){if($0.pressed||$0.checked||$0.abandoned||$0.over){var $1="general";
}else{var $1="undefined";
}
if($0.pressed||$0.checked||$0.abandoned){var $2=[3,
2,
1,
4];
}else if($0.over){var $2=[2,
3,
2,
3];
}else{var $2=[3,
4,
3,
4];
}return {border:$1,
padding:$2,
backgroundColor:$0.checked||$0.pressed||$0.over?"effect":"transparent"};
}},
"button-view":{style:function($0){return {backgroundColor:"white",
border:"general"};
}},
"button-view-pane":{style:function($0){return {backgroundColor:"button-view-pane",
padding:10};
}},
"button-view-page":{},
"button-view-bar":{style:function($0){var $1="undefined";
var $2="undefined";
var $3=qx.ui.core.Border;
if($0.barTop){$1=[1,
0];
$2=$3.fromConfig({bottom:[1,
"solid",
"general-border"]});
}else if($0.barBottom){$1=[1,
0];
$2=$3.fromConfig({top:[1,
"solid",
"general-border"]});
}else if($0.barLeft){$1=[0,
1];
$2=$3.fromConfig({right:[1,
"solid",
"general-border"]});
}else if($0.barRight){$1=[0,
1];
$2=$3.fromConfig({left:[1,
"solid",
"general-border"]});
}return {backgroundColor:"button-view-bar",
padding:$1||"undefined",
border:$2||"undefined"};
}},
"button-view-button":{style:function($0){var $1,
$2,
$3,
$4,
$5;
if($0.checked||$0.over){$5="button-view-button";
$4=[3,
6,
3,
6];
}else{$5="undefined";
$4=[4,
7];
}
if($0.barTop||$0.barBottom){$1=[0,
1];
$2="auto";
$3=null;
}else{$1=[1,
0];
$3="auto";
$2=null;
}return {backgroundColor:$0.checked?"button-view-button":"undefined",
backgroundImage:$0.checked?"widget/gradient/barbutton_gradient.png":null,
iconPosition:"top",
margin:$1,
width:$2,
height:$3,
border:$5,
padding:$4||"undefined"};
}},
"tab-view":{style:function($0){return {spacing:-1};
}},
"tab-view-bar":{},
"tab-view-pane":{style:function($0){return {backgroundColor:"tab-view-pane",
border:"tab-view-pane",
padding:10};
}},
"tab-view-page":{textColor:"tab-view-text",
top:0,
right:0,
bottom:0,
left:0},
"tab-view-button":{style:function($0){var $1,
$2;
$1=0;
$2=0;
if($0.barTop){var $3=qx.ui.core.Border.fromConfig({left:[1,
"solid",
"tab-view-border"],
top:[1,
"solid",
"tab-view-border"],
right:[1,
"solid",
"tab-view-border"]});
}
if(!$0.barTop){var $4=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"tab-view-border"],
bottom:[1,
"solid",
"tab-view-border"],
left:[1,
"solid",
"tab-view-border"]});
}
if($0.checked){var $5={textColor:"tab-view-text",
backgroundImage:$0.barTop?"widget/gradient/tabbutton_gradient.png":"widget/gradient/tabbutton_reverse_gradient.png",
backgroundColor:"tab-view-button-checked",
zIndex:1,
paddingTop:3,
paddingBottom:3,
paddingLeft:6,
paddingRight:7,
marginTop:$0.barTop?3:0,
marginBottom:0,
marginRight:4,
marginLeft:($0.alignLeft&&$0.firstChild)?4:0};
}else{$5={textColor:"tab-view-text-disabled",
backgroundImage:$0.barTop?"widget/gradient/tabbutton_gradient.png":"widget/gradient/tabbutton_reverse_gradient.png",
backgroundColor:"tab-view-button",
zIndex:0,
paddingLeft:6,
paddingRight:7,
marginRight:4,
marginLeft:($0.alignLeft&&$0.firstChild)?4:0};
if($0.barTop){$5.marginTop=3;
$5.marginBottom=1;
$5.paddingTop=2;
$5.paddingBottom=3;
}else{$5.marginTop=1;
$5.marginBottom=3;
$5.paddingTop=3;
$5.paddingBottom=2;
}}$5.border=$0.barTop?$3:$4;
return $5;
}},
"radio-view-bar":{style:function($0){return {backgroundColor:"radio-view-bar",
padding:4,
border:$0.barTop?qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"radio-view-border"]}):qx.ui.core.Border.fromConfig({top:[1,
"solid",
"radio-view-border"]})};
}},
"radio-view-button":{style:function($0){var $1,
$2;
if($0.checked||$0.over){$1=new qx.ui.core.Border(1,
"solid",
"radio-view-border");
$1.setWidthLeft(3);
$2=[2,
6,
2,
4];
}else{$1="undefined";
$2=[3,
7];
}return {textColor:"tab-view-text",
backgroundColor:$0.checked?"radio-view-button-checked":"undefined",
backgroundImage:$0.checked?"widget/gradient/tabbutton_gradient.png":"undefined",
iconPosition:"left",
margin:[0,
1],
width:"auto",
opacity:$0.checked?1.0:0.3,
border:$1,
padding:$2};
}},
"window":{style:function($0){return {backgroundColor:"background",
padding:0,
border:$0.maximized?"undefined":"general"};
}},
"window-captionbar":{style:function($0){return {padding:[4,
2,
5,
2],
verticalChildrenAlign:"middle",
height:24,
backgroundColor:$0.active?"window-active-caption":"window-inactive-caption",
textColor:$0.active?"window-active-caption-text":"window-inactive-caption-text"};
}},
"window-resize-frame":{style:function($0){return {border:"general"};
}},
"window-captionbar-icon":{style:function($0){return {marginRight:2};
}},
"window-captionbar-title":{style:function($0){return {cursor:"default",
font:"bold",
marginRight:2};
}},
"window-captionbar-button":{include:"button",
style:function($0){return {padding:[0,
1],
border:"undefined",
backgroundColor:"transparent",
backgroundImage:null};
}},
"window-captionbar-minimize-button":{include:"window-captionbar-button",
style:function($0){return {icon:$0.active?"widget/window/minimize.gif":"widget/window/minimize_inactive.gif"};
}},
"window-captionbar-restore-button":{include:"window-captionbar-button",
style:function($0){return {marginLeft:2,
icon:$0.active?"widget/window/restore.gif":"widget/window/restore_inactive.gif"};
}},
"window-captionbar-maximize-button":{include:"window-captionbar-button",
style:function($0){return {marginLeft:2,
icon:$0.active?"widget/window/maximize.gif":"widget/window/maximize_inactive.gif"};
}},
"window-captionbar-close-button":{include:"window-captionbar-button",
style:function($0){return {marginLeft:2,
icon:$0.active?"widget/window/close.gif":"widget/window/close_inactive.gif"};
}},
"window-statusbar":{style:function($0){var $1=qx.ui.core.Border.fromConfig({top:[1,
"solid",
"general-border"]});
return {border:$1};
}},
"window-statusbar-text":{style:function($0){return {padding:[1,
4]};
}},
"color-popup":{style:function($0){return {padding:4,
border:"general",
backgroundColor:"document-background"};
}},
"resizer":{style:function($0){return {border:"outset-thin"};
}},
"resizer-frame":{style:function($0){return {border:"general"};
}},
"menu":{style:function($0){return {backgroundColor:"menu",
border:"general",
padding:1};
}},
"menu-layout":{top:0,
right:0,
bottom:0,
left:0},
"menu-button":{style:function($0){return {minWidth:"auto",
height:"auto",
spacing:2,
padding:[2,
4],
verticalChildrenAlign:"middle",
backgroundColor:$0.over?"selected":"undefined",
textColor:$0.over?"text-selected":"undefined"};
}},
"menu-button-arrow":{style:function($0){return {source:"widget/arrows/next.gif"};
}},
"menu-check-box":{include:"menu-button",
style:function($0){return {icon:$0.checked?"widget/menu/checkbox.gif":"static/image/blank.gif"};
}},
"menu-radio-button":{include:"menu-button",
style:function($0){return {icon:$0.checked?"widget/menu/radiobutton.gif":"static/image/blank.gif"};
}},
"menu-separator":{style:function($0){return {marginTop:3,
marginBottom:2,
paddingLeft:3,
paddingRight:3};
}},
"menu-separator-line":{style:function($0){var $1=qx.ui.core.Border.fromConfig({top:[1,
"solid",
"general-border"]});
return {right:0,
left:0,
height:"auto",
border:$1};
}},
"list":{style:function($0){return {border:"general",
backgroundColor:"list"};
}},
"list-item":{style:function($0){return {height:"auto",
minWidth:"auto",
horizontalChildrenAlign:"left",
verticalChildrenAlign:"middle",
spacing:4,
padding:[3,
5],
backgroundColor:$0.selected?"selected":"undefined",
textColor:$0.selected?"text-selected":"undefined"};
}},
"text-field":{style:function($0){return {border:"general",
padding:[1,
3],
textColor:$0.disabled?"text-disabled":"text",
backgroundColor:$0.focused?"field":"white"};
}},
"text-area":{include:"text-field"},
"combo-box":{style:function($0){var $1=qx.ui.core.Border.fromConfig({top:[1,
"solid",
"general-border"],
left:[1,
"solid",
"general-border"],
bottom:[1,
"solid",
"general-border"]});
return {border:$1,
backgroundColor:$0.focused?"field":"white"};
}},
"combo-box-list":{include:"list",
style:function($0){return {backgroundColor:"white",
textColor:"text",
edge:0,
border:"undefined",
overflow:"scrollY"};
}},
"combo-box-popup":{include:"list",
style:function($0){var $1=qx.ui.core.Border.fromConfig({left:[1,
"solid",
"general-border"],
bottom:[1,
"solid",
"general-border"],
right:[1,
"solid",
"general-border"]});
return {maxHeight:150,
border:$1,
paddingLeft:0,
paddingRight:0,
marginLeft:0,
marginRight:0};
}},
"combo-box-text-field":{include:"text-field",
style:function($0){return {border:"undefined",
backgroundColor:"transparent",
textColor:"text"};
}},
"combo-box-button":{include:"button",
style:function($0){var $1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"general-border"]});
return {backgroundImage:null,
backgroundColor:"transparent",
border:$1,
padding:[0,
3,
0,
2],
icon:"widget/arrows/down.gif"};
}},
"combo-box-ex":{include:"combo-box"},
"combo-box-ex-list":{style:function($0){return {backgroundColor:"white",
textColor:"text",
border:"undefined",
edge:0,
overflow:"hidden"};
}},
"combo-box-ex-text-field":{include:"combo-box-text-field",
style:function($0){return {minWidth:30,
width:100};
}},
"combo-box-ex-popup":{style:function($0){return {border:"resizer",
overflow:"hidden",
backgroundColor:"list"};
}},
"combo-box-ex-button":{include:"combo-box-button"},
"treevirtual-focus-indicator":{include:"empty"},
"tree-element":{style:function($0){return {height:16,
verticalChildrenAlign:"middle"};
}},
"tree-element-icon":{style:function($0){return {width:16,
height:16};
}},
"tree-element-label":{include:"label",
style:function($0){return {marginLeft:3,
height:15,
padding:2,
backgroundColor:$0.selected?"selected":"undefined",
textColor:$0.selected?"text-selected":"undefined"};
}},
"tree-folder":{include:"tree-element"},
"tree-folder-icon":{include:"tree-element-icon"},
"tree-folder-label":{include:"tree-element-label"},
"tree":{include:"tree-folder"},
"tree-icon":{include:"tree-folder-icon"},
"tree-label":{include:"tree-folder-label"},
"list-view":{style:function($0){return {border:"list-view",
backgroundColor:"list-view"};
}},
"list-view-pane":{style:function($0){return {horizontalSpacing:1};
}},
"list-view-header":{style:function($0){return {border:qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"list-view-header-border"]}),
backgroundColor:"list-view-header"};
}},
"list-view-header-cell":{style:function($0){return {padding:[2,
6],
spacing:4,
backgroundColor:$0.over?"list-view-header-cell-hover":"undefined",
backgroundImage:"widget/gradient/button_gradient.png",
paddingBottom:$0.over?0:2,
border:$0.over?qx.ui.core.Border.fromConfig({bottom:[2,
"solid",
"list-view-header-border-hover"]}):"undefined"};
}},
"list-view-header-cell-arrow-up":{style:function($0){return {source:"widget/arrows/up.gif"};
}},
"list-view-header-cell-arrow-down":{style:function($0){return {source:"widget/arrows/down.gif"};
}},
"list-view-header-separator":{style:function($0){return {backgroundColor:"list-view-header-separator-border",
width:1,
marginTop:1,
marginBottom:1};
}},
"list-view-content-cell":{style:function($0){return {cursor:"default",
backgroundColor:$0.selected?"list-view-content-cell":"undefined",
textColor:$0.selected?"white":"undefined",
border:$0.lead&&
!$0.selected?
new qx.ui.core.Border.fromConfig({top:[1,
"solid",
"effect"],
bottom:[1,
"solid",
"effect"]}):"undefined",
marginTop:$0.lead&&!$0.selected?0:1,
marginBottom:$0.lead&&!$0.selected?0:1};
}},
"list-view-content-cell-image":{include:"list-view-content-cell",
style:function($0){return {paddingLeft:6,
paddingRight:6};
}},
"list-view-content-cell-text":{include:"list-view-content-cell",
style:function($0){return {overflow:"hidden",
paddingLeft:6,
paddingRight:6};
}},
"list-view-content-cell-html":{include:"list-view-content-cell-text"},
"list-view-content-cell-icon-html":{include:"list-view-content-cell-text"},
"list-view-content-cell-link":{include:"list-view-content-cell-text"},
"group-box":{style:function($0){return {backgroundColor:"transparent"};
}},
"group-box-legend":{style:function($0){return {location:[10,
1],
backgroundColor:"group-box-legend",
textColor:"white",
padding:[1,
3,
2,
4],
marginRight:10};
}},
"group-box-frame":{style:function($0){return {edge:[8,
0,
0],
padding:[20,
12,
9],
border:"general",
backgroundColor:"white"};
}},
"check-box-group-box-legend":{style:function($0){return {location:[10,
1],
backgroundColor:"document-background",
paddingRight:3};
}},
"radio-button-group-box-legend":{include:"check-box-group-box-legend"},
"spinner":{style:function($0){var $1=qx.ui.core.Border.fromConfig({top:[1,
"solid",
"general-border"],
left:[1,
"solid",
"general-border"],
bottom:[1,
"solid",
"general-border"]});
return {border:$1,
backgroundColor:"white"};
}},
"spinner-text-field":{include:"text-field",
style:function($0){return {padding:[2,
3]};
}},
"spinner-button":{style:function($0){return {height:"1*",
width:"auto"};
}},
"spinner-button-up":{include:"spinner-button",
style:function($0){var $1=qx.ui.core.Border.fromConfig({left:[1,
"solid",
"general-border"],
bottom:[1,
"solid",
"general-border"],
right:[1,
"solid",
"general-border"]});
return {padding:[3,
4,
2],
border:$1,
source:"widget/arrows/up_small.gif"};
}},
"spinner-button-down":{include:"spinner-button",
style:function($0){var $1=qx.ui.core.Border.fromConfig({left:[1,
"solid",
"general-border"],
right:[1,
"solid",
"general-border"]});
return {padding:[4,
4,
1],
border:$1,
source:"widget/arrows/down_small.gif"};
}},
"colorselector":{style:function($0){return {border:"general"};
}},
"datechooser-toolbar-button":{style:function($0){return {spacing:4,
width:"auto",
verticalChildrenAlign:"middle",
padding:2};
}},
"datechooser-monthyear":{style:function($0){return {font:"bold",
verticalAlign:"middle",
textAlign:"center",
textColor:"date-chooser-title"};
}},
"datechooser-datepane":{style:function($0){return {border:"general",
backgroundColor:"date-chooser"};
}},
"datechooser-weekday":{style:function($0){var $1=new qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"general-border"]});
return {border:$1,
font:"bold",
textAlign:"center",
textColor:$0.weekend?"date-chooser":"date-chooser-title",
backgroundColor:$0.weekend?"date-chooser-title":"date-chooser"};
}},
"datechooser-day":{style:function($0){var $1=new qx.ui.core.Border(1,
"solid",
"transparent");
return {textAlign:"center",
verticalAlign:"middle",
border:$0.today?"general":$1,
textColor:$0.selected?"text-selected":$0.otherMonth?"text-disabled":"date-chooser-day",
backgroundColor:$0.selected?"selected":"undefined"};
}},
"datechooser-week":{style:function($0){if($0.header){var $1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"general-border"],
bottom:[1,
"solid",
"general-border"]});
}else{var $1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"general-border"]});
}return {textAlign:"center",
textColor:"date-chooser-title",
padding:[2,
4],
border:$1};
}},
"table-focus-statusbar":{style:function($0){return {border:qx.ui.core.Border.fromConfig({top:[1,
"solid",
"general-border"]}),
paddingLeft:2,
paddingRight:2};
}},
"table-focus-indicator":{style:function($0){return {border:new qx.ui.core.Border(2,
"solid",
"table-focus-indicator")};
}},
"table-pane":{style:function($0){return {backgroundColor:"table-pane"};
}},
"table-header":{style:function($0){return {backgroundColor:"table-header"};
}},
"table-menubar-button":{style:function($0){var $1=qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"table-header-border"]});
return {cursor:"default",
verticalChildrenAlign:"middle",
icon:"widget/table/selectColumnOrder.png",
padding:[0,
4,
0,
3],
border:$1};
}},
"table-header-cell":{style:function($0){var $1,
$2;
if($0.mouseover){$1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"table-header-border"],
bottom:[1,
"solid",
"table-header-border-hover"]});
$2="table-header-cell-hover";
}else{$1=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"table-header-border"],
bottom:[1,
"solid",
"table-header-border"]});
$2="table-header-cell";
}return {paddingLeft:6,
paddingRight:6,
paddingTop:4,
paddingBottom:3,
spacing:2,
overflow:"hidden",
iconPosition:"right",
verticalChildrenAlign:"middle",
border:$1,
backgroundColor:$2,
icon:$0.sorted?($0.sortedAscending?"widget/table/ascending.png":"widget/table/descending.png"):null,
horizontalChildrenAlign:"left"};
}},
"splitpane":{style:function($0){return {splitterSize:6};
}},
"splitpane-splitter":{style:function($0){return {backgroundColor:"general-border",
cursor:$0.horizontal?"col-resize":"row-resize",
backgroundImage:$0.horizontal?"widget/gradient/splitter_horizontal_gradient.png":"widget/gradient/splitter_vertical_gradient.png"};
}},
"splitpane-slider":{style:function($0){return {opacity:0.5,
backgroundColor:$0.dragging?"splitpane-slider-dragging":"document-background"};
}},
"splitpane-knob":{style:function($0){var $1={opacity:$0.dragging?0.5:1.0};
if($0.horizontal){$1.top="50%";
$1.left="50%";
$1.marginLeft=-1;
$1.marginTop=-31;
$1.cursor="col-resize";
$1.source="widget/splitpane/knob-horizontal.png";
}else if($0.vertical){$1.top="50%";
$1.left="50%";
$1.marginTop=-2;
$1.marginLeft=-31;
$1.cursor="row-resize";
$1.source="widget/splitpane/knob-vertical.png";
}return $1;
}},
"scrollbar-blocker":{style:function($0){return {backgroundColor:"black",
opacity:0.2};
}}}});




/* ID: qx.theme.icon.VistaInspirate */
qx.Theme.define("qx.theme.icon.VistaInspirate",
{title:"VistaInspirate",
icons:{uri:qx.core.Setting.get("qx.resourceUri")+"/icon/VistaInspirate"}});




/* ID: qx.theme.Ext */
qx.Theme.define("qx.theme.Ext",
{title:"Ext",
meta:{color:qx.theme.ext.Color,
border:qx.theme.ext.Border,
font:qx.theme.ext.font.Default,
widget:qx.theme.ext.Widget,
appearance:qx.theme.ext.Appearance,
icon:qx.theme.icon.VistaInspirate}});




/* ID: qx.locale.Locale */
qx.Class.define("qx.locale.Locale",
{statics:{define:function($0,
$1){qx.Class.createNamespace($0,
$1);
qx.locale.Manager.getInstance().addTranslationFromClass($0,
$1);
}}});




/* ID: qx.locale.data.C */
qx.locale.Locale.define("qx.locale.data.C",
{cldr_alternateQuotationEnd:"�?",
cldr_alternateQuotationStart:"“",
cldr_am:"am",
cldr_date_format_full:"EEEE, MMMM d, yyyy",
cldr_date_format_long:"MMMM d, yyyy",
cldr_date_format_medium:"MMM d, yyyy",
cldr_date_format_short:"M/d/yy",
cldr_date_time_format_HHmm:"HH:mm",
cldr_date_time_format_HHmmss:"HH:mm:ss",
cldr_date_time_format_MMMMd:"MMMM d",
cldr_date_time_format_Md:"M/d",
cldr_date_time_format_mmss:"mm:ss",
cldr_date_time_format_yyMM:"MM/yy",
cldr_date_time_format_yyQQQQ:"QQQQ yy",
cldr_date_time_format_yyyyMMM:"MMM yyyy",
cldr_day_abbreviated_fri:"Fri",
cldr_day_abbreviated_mon:"Mon",
cldr_day_abbreviated_sat:"Sat",
cldr_day_abbreviated_sun:"Sun",
cldr_day_abbreviated_thu:"Thu",
cldr_day_abbreviated_tue:"Tue",
cldr_day_abbreviated_wed:"Wed",
cldr_day_narrow_fri:"F",
cldr_day_narrow_mon:"M",
cldr_day_narrow_sat:"S",
cldr_day_narrow_sun:"S",
cldr_day_narrow_thu:"T",
cldr_day_narrow_tue:"T",
cldr_day_narrow_wed:"W",
cldr_day_wide_fri:"Friday",
cldr_day_wide_mon:"Monday",
cldr_day_wide_sat:"Saturday",
cldr_day_wide_sun:"Sunday",
cldr_day_wide_thu:"Thursday",
cldr_day_wide_tue:"Tuesday",
cldr_day_wide_wed:"Wednesday",
cldr_month_abbreviated_1:"Jan",
cldr_month_abbreviated_10:"Oct",
cldr_month_abbreviated_11:"Nov",
cldr_month_abbreviated_12:"Dec",
cldr_month_abbreviated_2:"Feb",
cldr_month_abbreviated_3:"Mar",
cldr_month_abbreviated_4:"Apr",
cldr_month_abbreviated_5:"May",
cldr_month_abbreviated_6:"Jun",
cldr_month_abbreviated_7:"Jul",
cldr_month_abbreviated_8:"Aug",
cldr_month_abbreviated_9:"Sep",
cldr_month_narrow_1:"J",
cldr_month_narrow_10:"O",
cldr_month_narrow_11:"N",
cldr_month_narrow_12:"D",
cldr_month_narrow_2:"F",
cldr_month_narrow_3:"M",
cldr_month_narrow_4:"A",
cldr_month_narrow_5:"M",
cldr_month_narrow_6:"J",
cldr_month_narrow_7:"J",
cldr_month_narrow_8:"A",
cldr_month_narrow_9:"S",
cldr_month_wide_1:"January",
cldr_month_wide_10:"October",
cldr_month_wide_11:"November",
cldr_month_wide_12:"December",
cldr_month_wide_2:"February",
cldr_month_wide_3:"March",
cldr_month_wide_4:"April",
cldr_month_wide_5:"May",
cldr_month_wide_6:"June",
cldr_month_wide_7:"July",
cldr_month_wide_8:"August",
cldr_month_wide_9:"September",
cldr_number_decimal_separator:".",
cldr_number_group_separator:",",
cldr_pm:"pm",
cldr_quotationEnd:"’",
cldr_quotationStart:"‘",
cldr_time_format_full:"h:mm:ss a v",
cldr_time_format_long:"h:mm:ss a z",
cldr_time_format_medium:"h:mm:ss a",
cldr_time_format_short:"h:mm a"});

