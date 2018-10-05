Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.CacheEntry=undefined;var _class2,_temp,_this=this;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require("lodash");var _=_interopRequireWildcard(_lodash);var _expo=require("expo");var _sha=require("crypto-js/sha1");var _sha2=_interopRequireDefault(_sha);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var BASE_DIR=_expo.FileSystem.cacheDirectory+"expo-image-cache/";var CacheEntry=exports.CacheEntry=function(){function CacheEntry(uri,options){_classCallCheck(this,CacheEntry);this.uri=uri;this.options=options;}_createClass(CacheEntry,[{key:"getPath",value:function getPath(){var uri,options,_ref,path,exists,tmpPath,result;return regeneratorRuntime.async(function getPath$(_context){while(1){switch(_context.prev=_context.next){case 0:uri=this.uri,options=this.options;_context.next=3;return regeneratorRuntime.awrap(getCacheEntry(uri));case 3:_ref=_context.sent;path=_ref.path;exists=_ref.exists;tmpPath=_ref.tmpPath;if(!exists){_context.next=9;break;}return _context.abrupt("return",path);case 9:_context.next=11;return regeneratorRuntime.awrap(_expo.FileSystem.createDownloadResumable(uri,tmpPath,options).downloadAsync());case 11:result=_context.sent;if(!(result&&result.status!==200)){_context.next=14;break;}return _context.abrupt("return",undefined);case 14:_context.next=16;return regeneratorRuntime.awrap(_expo.FileSystem.moveAsync({from:tmpPath,to:path}));case 16:return _context.abrupt("return",path);case 17:case"end":return _context.stop();}}},null,this);}}]);return CacheEntry;}();var CacheManager=(_temp=_class2=function(){function CacheManager(){_classCallCheck(this,CacheManager);}_createClass(CacheManager,null,[{key:"get",value:function get(uri,options){if(!CacheManager.entries[uri]){CacheManager.entries[uri]=new CacheEntry(uri,options);}return CacheManager.entries[uri];}},{key:"clearCache",value:function clearCache(){return regeneratorRuntime.async(function clearCache$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(_expo.FileSystem.deleteAsync(BASE_DIR,{idempotent:true}));case 2:_context2.next=4;return regeneratorRuntime.awrap(_expo.FileSystem.makeDirectoryAsync(BASE_DIR));case 4:case"end":return _context2.stop();}}},null,this);}},{key:"getCacheSize",value:function getCacheSize(){var _ref2,size;return regeneratorRuntime.async(function getCacheSize$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regeneratorRuntime.awrap(_expo.FileSystem.getInfoAsync(BASE_DIR,{size:true}));case 2:_ref2=_context3.sent;size=_ref2.size;return _context3.abrupt("return",size);case 5:case"end":return _context3.stop();}}},null,this);}}]);return CacheManager;}(),_class2.entries={},_temp);exports.default=CacheManager;var getCacheEntry=function getCacheEntry(uri){var filename,ext,path,tmpPath,info,exists;return regeneratorRuntime.async(function getCacheEntry$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:filename=uri.substring(uri.lastIndexOf("/"),uri.indexOf("?")===-1?uri.length:uri.indexOf("?"));ext=filename.indexOf(".")===-1?".jpg":filename.substring(filename.lastIndexOf("."));path=""+BASE_DIR+(0,_sha2.default)(uri)+ext;tmpPath=""+BASE_DIR+(0,_sha2.default)(uri)+"-"+_.uniqueId()+ext;_context4.prev=4;_context4.next=7;return regeneratorRuntime.awrap(_expo.FileSystem.makeDirectoryAsync(BASE_DIR));case 7:_context4.next=11;break;case 9:_context4.prev=9;_context4.t0=_context4["catch"](4);case 11:_context4.next=13;return regeneratorRuntime.awrap(_expo.FileSystem.getInfoAsync(path));case 13:info=_context4.sent;exists=info.exists;return _context4.abrupt("return",{exists:exists,path:path,tmpPath:tmpPath});case 16:case"end":return _context4.stop();}}},null,_this,[[4,9]]);};
//# sourceMappingURL=CacheManager.js.map