!function(){var e,s,a,t,o,l,n={434:function(e,s,a){"use strict";function t(e){let s={init:()=>{e.__event.scroll={},e.__event.scroll.handle=[],e.__event.scroll.temScroll=0,e.__event.scroll.docScroll=$(document).scrollTop(),e.__event.scroll.homeScroll=$("#home").offset().top-40,$(window).scroll((()=>{e.__event.scroll.docScroll=$(document).scrollTop(),e.__event.scroll.homeScroll=$("#home").offset().top-40,s.handle.scroll(),e.__event.scroll.temScroll=e.__event.scroll.docScroll})),e.__event.resize={},e.__event.resize.handle=[],$(window).resize((()=>{s.handle.resize()}))},handle:{scroll:()=>{for(let s=0;s<e.__event.scroll.handle.length;s++)e.__event.scroll.handle[s]()},resize:()=>{for(let s=0;s<e.__event.resize.handle.length;s++)e.__event.resize.handle[s]();e.__tools.setDomHomePosition()}}};return s}a.d(s,{Z:function(){return t}})},2865:function(e,s,a){var t={"./article":[8277,3138,7361,269],"./article.js":[8277,3138,7361,269],"./books":[7024,3138,7361,4463],"./books.js":[7024,3138,7361,4463],"./common/comArticle":[8103,3138,7361],"./common/comArticle.js":[8103,3138,7361],"./home":[565,9628],"./home.js":[565,9628],"./links":[1099,3138,7361,9583],"./links.js":[1099,3138,7361,9583]};function o(e){if(!a.o(t,e))return Promise.resolve().then((function(){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=t[e],o=s[0];return Promise.all(s.slice(1).map(a.e)).then((function(){return a(o)}))}o.keys=function(){return Object.keys(t)},o.id=2865,e.exports=o}},r={};function i(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}};return n[e].call(a.exports,a,a.exports,i),a.exports}i.m=n,i.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(s,{a:s}),s},s=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(a,t){if(1&t&&(a=this(a)),8&t)return a;if("object"==typeof a&&a){if(4&t&&a.__esModule)return a;if(16&t&&"function"==typeof a.then)return a}var o=Object.create(null);i.r(o);var l={};e=e||[null,s({}),s([]),s(s)];for(var n=2&t&&a;"object"==typeof n&&!~e.indexOf(n);n=s(n))Object.getOwnPropertyNames(n).forEach((function(e){l[e]=function(){return a[e]}}));return l.default=function(){return a},i.d(o,l),o},i.d=function(e,s){for(var a in s)i.o(s,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(s,a){return i.f[a](e,s),s}),[]))},i.u=function(e){return"script/"+({131:"hljs/atelier-savanna-light-css",269:"page-article",336:"hljs/atelier-plateau-dark-css",393:"hljs/darcula-css",604:"hljs/srcery-css",620:"hljs/docco-css",655:"hljs/isbl-editor-light-css",657:"hljs/qtcreator_dark-css",759:"hljs/atelier-estuary-dark-css",1089:"hljs/googlecode-css",1151:"hljs/atelier-cave-light-css",1417:"hljs/atelier-sulphurpool-light-css",1437:"hljs/foundation-css",1480:"dayNight",1504:"hljs/qtcreator_light-css",1589:"hljs/atelier-estuary-light-css",1761:"bannerImages",1936:"hljs/atelier-plateau-light-css",2056:"hljs/stackoverflow-light-css",2080:"hljs/routeros-css",2089:"circleMagic",2122:"hljs/monokai-sublime-css",2144:"hljs/atelier-dune-light-css",2171:"hljs/atom-one-dark-reasonable-css",2251:"hljs/gruvbox-dark-css",2299:"hljs/atelier-savanna-dark-css",2447:"hljs/hybrid-css",2456:"hljs/atelier-seaside-light-css",2519:"hljs/gruvbox-light-css",2565:"hljs/lioshi-css",2600:"hljs/nnfx-css",2785:"hljs/codepen-embed-css",3062:"hljs/gradient-dark-css",3113:"hljs/brown-paper-css",3191:"article-code",3199:"hljs/zenburn-css",3258:"comAfter",3290:"hljs/nord-css",3304:"comBefore",3352:"hljs/atelier-cave-dark-css",3353:"fonticon",3374:"hljs/atom-one-light-css",3429:"hljs/atelier-forest-dark-css",3449:"mouse",3539:"hljs/nnfx-dark-css",3670:"hljs/ascetic-css",3731:"hljs/tomorrow-css",3749:"hljs/color-brewer-css",3774:"hljs/an-old-hope-css",3851:"hljs/tomorrow-night-css",3854:"hljs/atelier-sulphurpool-dark-css",3950:"hljs/gradient-light-css",4033:"hljs/atelier-seaside-dark-css",4104:"hljs/lightfair-css",4149:"hljs/far-css",4168:"hljs/tomorrow-night-blue-css",4321:"hljs/kimbie-light-css",4463:"page-books",4495:"hljs/atelier-forest-light-css",4751:"hljs/xt256-css",4761:"hljs/idea-css",4802:"hljs/mono-blue-css",4824:"hljs/atelier-lakeside-light-css",5064:"hljs/atelier-dune-dark-css",5114:"hljs/magula-css",5191:"hljs/grayscale-css",5206:"hljs/sunburst-css",5360:"hljs/paraiso-dark-css",5518:"hljs/atelier-lakeside-dark-css",5561:"nhBannerAnimation",5706:"hljs/hopscotch-css",5980:"hljs/tomorrow-night-eighties-css",6312:"hljs/ocean-css",6387:"hljs/atelier-heath-light-css",6493:"hljs/isbl-editor-dark-css",6520:"hljs/obsidian-css",6586:"code-hljs",6655:"hljs/a11y-dark-css",6764:"hljs/xcode-css",6865:"hljs/vs-css",7335:"hljs/dracula-css",7361:"page-common-comArticle",7531:"hljs/agate-css",7591:"hljs/tomorrow-night-bright-css",7661:"hljs/github-gist-css",7732:"google-fonts",7898:"hljs/solarized-light-css",8004:"hljs/ir-black-css",8046:"hljs/solarized-dark-css",8132:"particles",8203:"hljs/default-css",8208:"hljs/arta-css",8209:"hljs/monokai-css",8265:"ribbonsEffect",8694:"hljs/school-book-css",8773:"season",8794:"hljs/purebasic-css",8813:"hljs/pojoaque-css",8826:"hljs/atelier-heath-dark-css",8905:"hljs/androidstudio-css",8981:"hljs/kimbie-dark-css",9053:"hljs/stackoverflow-dark-css",9089:"hljs/github-css",9105:"hljs/vs2015-css",9188:"hljs/a11y-light-css",9368:"hljs/night-owl-css",9446:"hljs/arduino-light-css",9550:"hljs/dark-css",9583:"page-links",9624:"hljs/shades-of-purple-css",9628:"page-home",9678:"hljs/railscasts-css",9714:"hljs/gml-css",9769:"hljs/atom-one-dark-css",9914:"hljs/paraiso-light-css",9996:"hljs/rainbow-css"}[e]||e)+"."+{131:"5ef3965d",269:"3e80bbb8",336:"b39eb59a",393:"44618225",604:"e629cbff",620:"2703660e",655:"92eb3539",657:"8073ef2b",759:"9fdb60f1",1089:"ff832cd9",1151:"a93d745a",1417:"24a88231",1437:"1f31a120",1480:"15b99d8c",1504:"ca8ed0d8",1589:"f178e0c0",1606:"94fb0ce4",1761:"2cb69811",1936:"5d14ef39",2056:"d781a115",2080:"1a9ff5ec",2089:"92a35ec0",2122:"24cb0dfb",2144:"089dc7c3",2152:"c5d09194",2171:"ba97e187",2251:"65cf7d98",2299:"de6a3237",2447:"7d74105c",2456:"0f590143",2519:"c9c6f01f",2565:"3921b636",2600:"a85e68dd",2785:"99bb25e2",3062:"78290325",3113:"fc72b4b4",3138:"48ea129f",3191:"99bc4b88",3199:"b729f28a",3258:"fd79babf",3290:"0ff24aff",3304:"89cd416a",3352:"36209f60",3353:"d5dacf45",3374:"be36b06c",3429:"d1d1508d",3449:"49c8b510",3539:"c33b48f7",3670:"a86a1a92",3731:"c617a785",3749:"7a807cb6",3774:"eaeee6a4",3851:"ce777c86",3854:"21e8cc68",3950:"73b85a82",4033:"203bf3a6",4104:"41e5cb8f",4149:"30e9733d",4168:"cb5fec0d",4321:"2bd24199",4463:"62af86b3",4495:"1836dcbe",4751:"b72a728c",4761:"330b1aa1",4802:"426a1876",4824:"72fde174",5064:"0a5ea54f",5114:"2e3c69d7",5191:"bca5e91c",5206:"a421eddc",5360:"3ca1c338",5518:"fdb87888",5561:"0866edaf",5706:"bb3c070f",5980:"8608175e",6312:"2266fbff",6387:"e739752f",6493:"947156ff",6520:"e634662c",6586:"c1df3071",6655:"24b7ea1a",6764:"fd24697e",6865:"77add605",7335:"39933e6d",7361:"c0459bb0",7531:"4c2927b6",7591:"d8b16056",7661:"a30cf7fc",7732:"cb294b68",7869:"160e78c1",7898:"48f1283b",8004:"650ad0fc",8046:"1bc770a8",8132:"481480f4",8203:"3f3c1b61",8208:"625b9f53",8209:"bd6fb9d9",8265:"91d1fd58",8694:"a6ffdbeb",8773:"9e63becb",8794:"8c818cb1",8813:"ec3f7534",8826:"4ea04994",8905:"3433b21d",8981:"a41c5b53",9053:"4ef507df",9089:"66fa68e9",9105:"86518181",9188:"c1307678",9368:"a839f485",9446:"981eefab",9509:"011e6913",9550:"8a4b8575",9583:"ddfce9a5",9624:"9678d5ad",9628:"d6dc3edc",9678:"754588c8",9714:"47750825",9769:"97454fd7",9914:"e5afd34d",9996:"2d85a1d3"}[e]+".js"},i.miniCssF=function(e){return"style/"+{131:"hljs/atelier-savanna-light-css",269:"page-article",336:"hljs/atelier-plateau-dark-css",393:"hljs/darcula-css",604:"hljs/srcery-css",620:"hljs/docco-css",655:"hljs/isbl-editor-light-css",657:"hljs/qtcreator_dark-css",759:"hljs/atelier-estuary-dark-css",1089:"hljs/googlecode-css",1151:"hljs/atelier-cave-light-css",1417:"hljs/atelier-sulphurpool-light-css",1437:"hljs/foundation-css",1480:"dayNight",1504:"hljs/qtcreator_light-css",1589:"hljs/atelier-estuary-light-css",1936:"hljs/atelier-plateau-light-css",2056:"hljs/stackoverflow-light-css",2080:"hljs/routeros-css",2122:"hljs/monokai-sublime-css",2144:"hljs/atelier-dune-light-css",2171:"hljs/atom-one-dark-reasonable-css",2251:"hljs/gruvbox-dark-css",2299:"hljs/atelier-savanna-dark-css",2447:"hljs/hybrid-css",2456:"hljs/atelier-seaside-light-css",2519:"hljs/gruvbox-light-css",2565:"hljs/lioshi-css",2600:"hljs/nnfx-css",2785:"hljs/codepen-embed-css",3062:"hljs/gradient-dark-css",3113:"hljs/brown-paper-css",3199:"hljs/zenburn-css",3290:"hljs/nord-css",3304:"comBefore",3352:"hljs/atelier-cave-dark-css",3353:"fonticon",3374:"hljs/atom-one-light-css",3429:"hljs/atelier-forest-dark-css",3449:"mouse",3539:"hljs/nnfx-dark-css",3670:"hljs/ascetic-css",3731:"hljs/tomorrow-css",3749:"hljs/color-brewer-css",3774:"hljs/an-old-hope-css",3851:"hljs/tomorrow-night-css",3854:"hljs/atelier-sulphurpool-dark-css",3950:"hljs/gradient-light-css",4033:"hljs/atelier-seaside-dark-css",4104:"hljs/lightfair-css",4149:"hljs/far-css",4168:"hljs/tomorrow-night-blue-css",4321:"hljs/kimbie-light-css",4463:"page-books",4495:"hljs/atelier-forest-light-css",4751:"hljs/xt256-css",4761:"hljs/idea-css",4802:"hljs/mono-blue-css",4824:"hljs/atelier-lakeside-light-css",5064:"hljs/atelier-dune-dark-css",5114:"hljs/magula-css",5191:"hljs/grayscale-css",5206:"hljs/sunburst-css",5360:"hljs/paraiso-dark-css",5518:"hljs/atelier-lakeside-dark-css",5561:"nhBannerAnimation",5706:"hljs/hopscotch-css",5980:"hljs/tomorrow-night-eighties-css",6312:"hljs/ocean-css",6387:"hljs/atelier-heath-light-css",6493:"hljs/isbl-editor-dark-css",6520:"hljs/obsidian-css",6655:"hljs/a11y-dark-css",6764:"hljs/xcode-css",6865:"hljs/vs-css",7335:"hljs/dracula-css",7361:"page-common-comArticle",7531:"hljs/agate-css",7591:"hljs/tomorrow-night-bright-css",7661:"hljs/github-gist-css",7732:"google-fonts",7898:"hljs/solarized-light-css",8004:"hljs/ir-black-css",8046:"hljs/solarized-dark-css",8132:"particles",8203:"hljs/default-css",8208:"hljs/arta-css",8209:"hljs/monokai-css",8694:"hljs/school-book-css",8794:"hljs/purebasic-css",8813:"hljs/pojoaque-css",8826:"hljs/atelier-heath-dark-css",8905:"hljs/androidstudio-css",8981:"hljs/kimbie-dark-css",9053:"hljs/stackoverflow-dark-css",9089:"hljs/github-css",9105:"hljs/vs2015-css",9188:"hljs/a11y-light-css",9368:"hljs/night-owl-css",9446:"hljs/arduino-light-css",9550:"hljs/dark-css",9583:"page-links",9624:"hljs/shades-of-purple-css",9678:"hljs/railscasts-css",9714:"hljs/gml-css",9769:"hljs/atom-one-dark-css",9914:"hljs/paraiso-light-css",9996:"hljs/rainbow-css"}[e]+"."+{131:"1927a43f",269:"eea4482f",336:"6d3d2072",393:"9f2970cb",604:"a9d42e34",620:"fe1edc6b",655:"eb127b26",657:"03ce43be",759:"1a42c90d",1089:"44b6a34e",1151:"1936ce7b",1417:"5d6a0ba4",1437:"c4691bc8",1480:"360a9aee",1504:"aabfe8f5",1589:"3a16caf8",1936:"db18ceb2",2056:"1856d9c7",2080:"d1ca4651",2122:"6f07b7d2",2144:"40f29cc3",2171:"56beeedd",2251:"4b81b15e",2299:"61f12180",2447:"8ed0b8d5",2456:"9a9812d9",2519:"16659adc",2565:"06db991f",2600:"dd652696",2785:"73ec9c68",3062:"51870c0f",3113:"97f51fb5",3199:"877995c4",3290:"be884f0f",3304:"2a6b92a7",3352:"0b577133",3353:"5250a635",3374:"1f4c93b9",3429:"24c00093",3449:"3bbc61ee",3539:"1ab303ed",3670:"f9a24ba0",3731:"a0467948",3749:"6b13b497",3774:"b6848636",3851:"a36dd7a5",3854:"ff400d29",3950:"bd3615d6",4033:"3c8885d4",4104:"4cea2f50",4149:"5ac10474",4168:"f4c1e798",4321:"2b7e53e2",4463:"4bc80495",4495:"5fc38342",4751:"35ef6250",4761:"96e2c7c2",4802:"e5cbdcca",4824:"3f423031",5064:"34079eaa",5114:"2ee09dfe",5191:"fa8dceee",5206:"59426e75",5360:"04b6bbdd",5518:"95af2bd4",5561:"0630e6eb",5706:"831f84d4",5980:"ca143c00",6312:"00992d32",6387:"d7b45496",6493:"acb7b373",6520:"4aaa1a1d",6655:"e50c1ca5",6764:"8c20198f",6865:"e1edaf6d",7335:"37cfa243",7361:"8c839482",7531:"527ecdc6",7591:"778fafab",7661:"3a8c6005",7732:"14239708",7898:"7a910396",8004:"5033adc0",8046:"d96304dd",8132:"472e4232",8203:"a8a3587c",8208:"757e7eda",8209:"a475d254",8694:"3fdfd26d",8794:"0021c7e3",8813:"92d4b093",8826:"44c7a88e",8905:"8a689c45",8981:"c5ed797c",9053:"94827cf1",9089:"f969c0c4",9105:"22baba47",9188:"c59658bd",9368:"2590a66b",9446:"98134817",9550:"ba75f0bc",9583:"37688e29",9624:"e92654ec",9678:"39fa42fc",9714:"733af03a",9769:"5471d564",9914:"172a7462",9996:"14fde1f1"}[e]+".css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},a={},t="Cnblogs-Theme-SimpleMemory:",i.l=function(e,s,o,l){if(a[e])a[e].push(s);else{var n,r;if(void 0!==o)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var u=c[h];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+o){n=u;break}}n||(r=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",t+o),n.src=e),a[e]=[s];var d=function(s,t){n.onerror=n.onload=null,clearTimeout(f);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((function(e){return e(t)})),s)return s(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),r&&document.head.appendChild(n)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var s=i.g.document;if(!e&&s&&(s.currentScript&&(e=s.currentScript.src),!e)){var a=s.getElementsByTagName("script");if(a.length)for(var t=a.length-1;t>-1&&!e;)e=a[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e}(),o=function(e){return new Promise((function(s,a){var t=i.miniCssF(e),o=i.p+t;if(function(e,s){for(var a=document.getElementsByTagName("link"),t=0;t<a.length;t++){var o=(n=a[t]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===s))return n}var l=document.getElementsByTagName("style");for(t=0;t<l.length;t++){var n;if((o=(n=l[t]).getAttribute("data-href"))===e||o===s)return n}}(t,o))return s();!function(e,s,a,t){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(l){if(o.onerror=o.onload=null,"load"===l.type)a();else{var n=l&&("load"===l.type?"missing":l.type),r=l&&l.target&&l.target.href||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=n,i.request=r,o.parentNode.removeChild(o),t(i)}},o.href=s,document.head.appendChild(o)}(e,o,s,a)}))},l={179:0},i.f.miniCss=function(e,s){l[e]?s.push(l[e]):0!==l[e]&&{131:1,269:1,336:1,393:1,604:1,620:1,655:1,657:1,759:1,1089:1,1151:1,1417:1,1437:1,1480:1,1504:1,1589:1,1936:1,2056:1,2080:1,2122:1,2144:1,2171:1,2251:1,2299:1,2447:1,2456:1,2519:1,2565:1,2600:1,2785:1,3062:1,3113:1,3199:1,3290:1,3304:1,3352:1,3353:1,3374:1,3429:1,3449:1,3539:1,3670:1,3731:1,3749:1,3774:1,3851:1,3854:1,3950:1,4033:1,4104:1,4149:1,4168:1,4321:1,4463:1,4495:1,4751:1,4761:1,4802:1,4824:1,5064:1,5114:1,5191:1,5206:1,5360:1,5518:1,5561:1,5706:1,5980:1,6312:1,6387:1,6493:1,6520:1,6655:1,6764:1,6865:1,7335:1,7361:1,7531:1,7591:1,7661:1,7732:1,7898:1,8004:1,8046:1,8132:1,8203:1,8208:1,8209:1,8694:1,8794:1,8813:1,8826:1,8905:1,8981:1,9053:1,9089:1,9105:1,9188:1,9368:1,9446:1,9550:1,9583:1,9624:1,9678:1,9714:1,9769:1,9914:1,9996:1}[e]&&s.push(l[e]=o(e).then((function(){l[e]=0}),(function(s){throw delete l[e],s})))},function(){var e={179:0};i.f.j=function(s,a){var t=i.o(e,s)?e[s]:void 0;if(0!==t)if(t)a.push(t[2]);else{var o=new Promise((function(a,o){t=e[s]=[a,o]}));a.push(t[2]=o);var l=i.p+i.u(s),n=new Error;i.l(l,(function(a){if(i.o(e,s)&&(0!==(t=e[s])&&(e[s]=void 0),t)){var o=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;n.message="Loading chunk "+s+" failed.\n("+o+": "+l+")",n.name="ChunkLoadError",n.type=o,n.request=l,t[1](n)}}),"chunk-"+s,s)}};var s=function(s,a){var t,o,l=a[0],n=a[1],r=a[2],c=0;if(l.some((function(s){return 0!==e[s]}))){for(t in n)i.o(n,t)&&(i.m[t]=n[t]);if(r)r(i)}for(s&&s(a);c<l.length;c++)o=l[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},a=self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}(),function(){"use strict";var e=JSON.parse('{"info":{"name":"","startDate":"2021-01-01","avatar":"","blogIcon":""},"sidebar":{"navList":[],"customList":{},"infoBackground":"","titleMsg":"欢迎访问本博客~","submenu":{"pointsRank":false,"latestPosts":false,"myTags":false,"postsClassify":false,"articleClassify":false,"readRank":false,"recommendRank":false,"latestComment":false,"postsArchive":false,"articleArchive":false,"customList":false}},"banner":{"home":{"background":[],"title":[],"titleSource":"jinrishici"},"article":{"background":[]}},"loading":{"rebound":{"tension":16,"friction":5},"spinner":{"id":"spinner","radius":90,"sides":3,"depth":4,"colors":{"background":"#f0f0f0","stroke":"#272633","base":null,"child":"#272633"},"alwaysForward":true,"restAt":0.5,"renderBase":false}},"fontIconExtend":"","progressBar":{"id":"top-progress-bar","color":"#77b6ff","height":"2px","duration":0.2},"title":{"onblur":"(oﾟvﾟ)ノ Hi","onblurTime":500,"focus":"(*´∇｀*) 欢迎回来！","focusTime":1000},"footer":{"text":{"left":"","right":"","iconFont":{"icon":"icon-xl","color":"red","fontSize":"16px"}},"style":2,"aplayer":{"enable":false,"cdn":{"aplayer":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.js","aplayercss":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.css","meting":"https://cdn.staticfile.org/meting/2.0.1/Meting.min.js"},"options":{"id":"3778678","api":"","server":"netease","type":"playlist","auto":"netease","fixed":"true","mini":"true","autoplay":"false","theme":"#2980b9","loop":"all","order":"random","preload":"auto","volume":"0.7","mutex":"true","lrcType":"0","listFolded":"true","listMaxHeight":"340px","storageName":"cnblogsTheme"}}},"links":{"footer":[],"page":[]},"cnzz":"","rtMenu":{"qrCode":"","reward":{"alipay":"","wechatpay":""},"downScrollDom":""},"switchDayNight":{"enable":true,"nightMode":false,"auto":{"enable":false,"dayHour":5,"nightHour":19}},"animate":{"homeBannerTitle":{"enable":false},"bannerImages":{"enable":false,"options":{"itemNum":5,"current":0,"sort":1,"time":30000}},"homeBanner":{"enable":false,"options":{"radius":15,"density":0.2,"color":"rgba(255,255,255, .2)","clearOffset":0.3}},"articleTitle":{"enable":false},"articleBanner":{"enable":false},"background":{"enable":false,"options":{"colorSaturation":"60%","colorBrightness":"50%","colorAlpha":0.5,"colorCycleSpeed":5,"verticalPosition":"random","horizontalSpeed":200,"ribbonCount":3,"strokeSize":0,"parallaxAmount":-0.2,"animateSections":true}},"backgroundMouse":{"enable":false},"mouse":{"enable":false,"options":{"size":8,"sizeF":36}},"season":{"enable":false,"options":{"img":"data:image/jpg;base64,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","size":40}},"avatar":{"enable":false}},"code":{"type":"","options":{"hljs":{"theme":"atom-one-dark-reasonable","languages":[]},"maxHeight":"","fontSize":14,"line":false,"macStyle":true}},"articleSuffix":{"imgUrl":"","aboutHtml":"","copyrightHtml":"","supportHtml":""},"articleDirectory":{"position":"right","minBodyWeight":900,"autoWidthScroll":false},"articleComment":{"background":{"enable":false,"options":{"day":"","night":""}}},"articleContent":{"prefixIcon":{"enable":false,"options":{"link":"https://at.alicdn.com/t/c/font_3628204_t6n3fw8b1zn.js","iconfontArr":["hebaodan","bingtanghulu","kesong","qianceng","fengmi","feiyuguantou","shengjian","youtiao","yuzijiang","zhutongfan","doujiang","sanmingzhi","paofu","shanbei","dangaojuan","futejia","huangyou","xiangchang","banji","danta","qingning","lajiao","shizi","mojituo","pijiu","putaojiu","kouxiangtang","xiangcaobingqilin","jiaozi","tilamisu","huoguo","hongshu","bingkuai","mianhuatang","paobing","meishikafei","mantou","qishui","ganlan","jiroujuan","guodong","baozi","pingguo","chengzi","qingjiao","jidan","xihongshi","mangguo","baocai","niunai","mianbao","huluobu","zhangyu","pangxie","longxia","yangcong","rou","jitui","huage","xianyu","mogu","qiezi","xilanhua","ningmeng","liulian","banli","sanwenyu","tudou","xigua","nangua","huolongguo","fantuan","zhusun","shuiluobu","shanzhu","lanmei","shiliu","yezi","tiangua","mihoutao","boluo","kaixinguo","hetao","xiaweiyiguo","huasheng","bigenguo","kuihuazi","songzi","xiguazi","badanmu","yaoguo","danhuangsu","dangao","binggan","buding","tangguo","qiaokeli","hongzao","candou","putaogan","manyuemei","taozi","xiangjiao","caomei","niuyouguo","hamigua","chelizi","li","bale","kafei1","shutiao","zhenzhunaicha","xuegao","nailao","kele","tiantong","hanbao","xiezishousi","baomihua","regou","makalong","tianfuluo","juzi","baixiangguo","putao","shaomai","yumi","pipa","yangtao","youzi","lianwu","wuhuaguo","paomian","wandou","huanggua","suantou","tiantianquan","shupian","huafubing","bangbangtang","shousi","lizhi","doufu","mocha","boluomi","zhouzi","bingsha","suannai","pisa","haixing","haizhe","tongluoshao","nuomici","kuangquanshui","roujiamo","cha","zhangyuxiaowanzi","chengzhi","yuancaitou","baicai"]}}},"consoleList":[],"bookList":[],"hooks":{}}'),s=i.p+"images/ee72841e04451a25a448.png",a=i.p+"images/37c463dfee5621b391c9.png";var t=i(434);$(document).ready((function(){let o={};o.__config=function(){e.articleComment.background.options.day=`rgba(0, 0, 0, 0) url("${a}") no-repeat scroll 100% 31% / 35% padding-box border-box`,e.articleComment.background.options.night=`rgba(0, 0, 0, 0) url("${s}") no-repeat scroll 100% 31% / 35% padding-box border-box`;const t=void 0===window.cnblogsConfig?{}:window.cnblogsConfig;return $.extend(!0,e,t)}(),o.__status=function(){let e={};e.url=window.location.href;let s=e.url.split("/");if(e.user=s[3],e.articleId="",e.homeUrl=[s[0],s[1],s[2],s[3]].join("/"),$("#topics").length){$("#bookListFlg").length?e.pageType="books":$("#linkListFlg").length?e.pageType="links":e.pageType="article";let a=s[s.length-1].split(".");e.articleId=a[0]}else e.pageType="home";return e}(),o.__tools={tempReplacement:(e,s,a)=>{let t=new RegExp("##"+s+"##","g");return e.replace(t,a)},batchTempReplacement:(e,s)=>{let a=e;return $.each(s,(function(e){let t=s[e],o=new RegExp("##"+t[0]+"##","g");a=a.replace(o,t[1])})),a},dynamicLoadingCss:e=>{if(!e||0===e.length)throw new Error('argument "path" is required !');let s=document.getElementsByTagName("head")[0],a=document.createElement("link");a.href=e,a.rel="stylesheet",a.type="text/css",s.appendChild(a)},dynamicLoadingJs:e=>new Promise(((s,a)=>{$.ajax({type:"GET",dataType:"script",cache:!0,url:e,success:function(e){s(e)},error:function(e){a(e)}})})),htmlFiltrationScript:e=>{let s=new RegExp("<script.*<\/script>","ig");return e.replace(s,"")},clearIntervalTimeId:e=>{null!=e&&window.clearInterval(e)},actScroll:(e,s)=>{$("html,body").stop().animate({scrollTop:e},s)},getScrollPercent:()=>($(window).scrollTop()/($(document).height()-$(window).height())*100).toFixed(0),randomNum:function(e,s){switch(arguments.length){case 1:return parseInt(Math.random()*e+1);case 2:return parseInt(Math.random()*(s-e+1)+e);default:return 0}},setDomHomePosition:()=>{$("#home").css("margin-top",$(".main-header").outerHeight()+"px")},getNowFormatDate:()=>{let e=new Date,s=e.getFullYear(),a=e.getMonth()+1,t=e.getDate();return a>=1&&a<=9&&(a="0"+a),t>=0&&t<=9&&(t="0"+t),s+"-"+a+"-"+t},getRunDate:e=>{e=e.toString().split("-");let s=new Date;s.setUTCFullYear(e[0],e[1]-1,e[2]),s.setUTCHours(0,0,0,0);let a=s,t=(new Date).getTime()-a.getTime(),o=t/1e3,l=(Math.floor(o),t/864e5),n=Math.floor(l),r=-24*(n-l),i=Math.floor(r),c=-60*(i-r),h=Math.floor(-60*(i-r));return{daysold:n,hrsold:i,minsold:h,seconds:Math.floor(-60*(h-c)).toString()}},setCookie:(e,s,a)=>{let t=new Date;t.setTime(t.getTime()+1e3*a),document.cookie=e+"="+escape(s)+"; expires="+t.toGMTString()+"; path=/"},getCookie:e=>{let s,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return s=document.cookie.match(a),s?unescape(s[2]):null},randomString:e=>{e=e||32;let s="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a="";for(let t=0;t<e;t++)a+=s.charAt(Math.floor(48*Math.random()));return a},minToTime:e=>{let s=parseInt(e),a=parseInt(60*(e-s));return a=1===(""+a).length?"0"+a:a,`${s}:${a}`},htmlReplace:(e,s,a)=>{$(e).html($(e).html().replace(s,a))},articleInfo:(e,s)=>{let a=1===s?"simple-memory-icon-marketing_fill":"simple-memory-icon-label-fill",t=1===s?"article-tag-class-color":"article-tag-color";$.each(e,(s=>{let o=$(e[s]);o.prepend(`<span class="simple-memory-iconfont simple-memory-${a} iconfont ${a}"></span>`),$("#articleInfo").append(`<a href=" ${o.attr("href")}" target="_blank"><span class="article-info-tag ${t}"> ${o.text()}</span></a>`)}))}},o.__timeIds={},o.__event={},""===o.__config.info.name&&(o.__config.info.name=o.__status.user),i(2865)(`./${o.__status.pageType}`).then((e=>{const s=e.default;Promise.all([i.e(9509),i.e(3304)]).then(i.bind(i,7157)).then((e=>{(0,e.default)(o),s(o),i.e(3258).then(i.bind(i,9450)).then((e=>{(0,e.default)(o),o.__tools.setDomHomePosition(),(0,t.Z)(o).handle.scroll(),(0,t.Z)(o).handle.resize()}))}))}))}))}()}();