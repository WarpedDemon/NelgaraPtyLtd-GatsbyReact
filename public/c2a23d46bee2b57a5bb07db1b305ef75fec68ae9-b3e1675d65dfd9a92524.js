(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[170],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,l=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),m.canUseDOM?t(l):n&&(l=n(l))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},8900:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ne}});var r=n(7294),a=n(5444),o=n(782);function i(){var e=!1;function t(){var t=document.getElementById("Nav");e?function(t){t.classList.add("animated"),t.classList.add("fadeOutUp"),setTimeout((function(){t.style.display="none"}),500),e=!1}(t):function(t){t.classList.remove("animated"),t.classList.remove("fadeOutUp"),t.style.display="block",t.style.zIndex=1e3,t.classList.add("animated"),t.classList.add("fadeInDown"),e=!0}(t)}return r.createElement("div",{onKeyDown:t,onClick:t,tabIndex:-1,role:"button","aria-label":"Navigation drop down button"},r.createElement(o.vHB,{id:"Hamburger"}))}var c=n(1852);function l(){var e=!1;function t(){e?(document.body.style.background="#fffdfa",document.body.style.color="black",console.log("Going light!"),n(!1),e=!1):(document.body.style.backgroundColor="#111111",document.body.style.color="white",console.log("Going dark!"),null!=document.getElementById("Footer")&&(document.getElementById("Footer").style.backgroundColor="black",document.getElementById("Footer").style.color="white !important"),n(!0),e=!0)}function n(e){var t=document.getElementById("Header"),n=document.getElementById("Title"),r=document.getElementById("Title_Text"),a=document.getElementById("LightSwitch"),o=document.getElementById("Nav_Container"),i=document.getElementById("Hamburger"),c=document.getElementById("Nav"),l=document.getElementById("Services"),s=document.getElementById("Industries"),u=document.getElementById("About"),m=document.getElementById("People");e?(t.className="HeaderDark",n.className="TitleDark",r.className="Title_TextDark",a.className="LightSwitcDark",o.className="Nav_ContainerDark",i.className="HamburgerDark fa fa-bars",c.className="NavDark",l.className="ServicesDark",s.className="IndustriesDark",u.className="AboutDark",m.className="PeopleDark",e=!1):(t.className="",n.className="",r.className="",a.className="",o.className="",i.className="fa fa-bars",c.className="",l.className="",s.className="",u.className="",m.className="",e=!0)}return r.createElement("div",{id:"Header"},r.createElement(a.rU,{to:"/"},r.createElement("img",{src:"https://www.nelgara.com.au/img/logo.png",id:"Logo",alt:"logo.png"})),r.createElement("span",{role:"button",tabIndex:-2,"aria-label":"Light switch",onKeyDown:t,onClick:t,id:"LightSwitch",className:""},r.createElement(c.bgr,null)),r.createElement("h2",{id:"Title",className:""},r.createElement(a.rU,{to:"/",id:"Title_Text",className:""}," Nelgara Pty Ltd ")),r.createElement("div",{id:"Nav_Container",className:""},r.createElement(i,null)),r.createElement("ul",{id:"Nav"},r.createElement(a.rU,{to:"https://www.nelgara.com.au/services",id:"Services"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"0.25s"},r.createElement("b",null,r.createElement("p",null,"Services")))),r.createElement(a.rU,{to:"https://www.nelgara.com.au/industries",id:"Industries"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"0.50s"},r.createElement("b",null,r.createElement("p",null,"Industries")))),r.createElement(a.rU,{to:"https://www.nelgara.com.au/contactus",id:"About"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"0.75s"},r.createElement("b",null,r.createElement("p",null,"Contact Us")))),r.createElement(a.rU,{to:"https://www.nelgara.com.au/people",id:"People"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"1s"},r.createElement("b",null,r.createElement("p",null,"People"))))))}function s(){return r.createElement("div",{id:"Footer"},r.createElement("div",{className:"column"},r.createElement("div",{className:"row"},r.createElement(a.rU,{to:"/","aria-label":"Nelgara logo"},r.createElement("img",{alt:"footer_logo",src:"https://www.nelgara.com.au/img/logo.png",className:"FooterImage"}))),r.createElement("div",{className:"row"}),r.createElement("div",{className:"row"})),r.createElement("div",{className:"column"},r.createElement("div",{className:"row"},r.createElement("h2",null,r.createElement(a.rU,{to:"https://www.nelgara.com.au/",style:{textDecoration:"none"}}," Nelgara Pty Ltd "))),r.createElement("div",{className:"row"},r.createElement("div",{className:"copyrightText"},"Copyright Of Nelgara Pty Ltd 2021 ")),r.createElement("div",{className:"row"},r.createElement(a.rU,{to:"https://www.nelgara.com.au/img/Terms.pdf",id:"terms"},"Terms and Conditions"))),r.createElement("div",{className:"column"},r.createElement("div",{className:"row"}),r.createElement("div",{className:"row"},r.createElement("a",{href:"tel:+61(0)43433161"},"+61 (0)434 33 161")),r.createElement("div",{className:"row"})))}function u(e){var t=e.title;return r.createElement("div",{id:"videoContainer"},r.createElement("script",{src:"https://fast.wistia.com/embed/medias/24fkx58xfu.jsonp?wvideo=hashedid",async:!0}),r.createElement("script",{src:"https://fast.wistia.com/assets/external/E-v1.js",async:!0}),r.createElement("h1",{id:"BannerId"},r.createElement("b",null,t)),r.createElement("div",{className:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},r.createElement("div",{className:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},r.createElement("div",{className:"wistia_embed wistia_async_24fkx58xfu videoFoam=true",style:{height:"100%",position:"relative",width:"100%"}},r.createElement("div",{className:"wistia_swatch",style:{height:"100%",left:0,opacity:0,overflow:"hidden",position:"absolute",top:0,transition:"opacity 200ms",width:"100%"}},r.createElement("img",{src:"https://fast.wistia.com/embed/medias/24fkx58xfu/swatch",style:{filter:"blur(5px)",height:"100%",objectFit:"contain",width:"100%"},alt:"banner.png","aria-hidden":"true",onLoad:function(e){e.target.parentNode.style.opacity=1}}))))))}var m,d,f,p,y=n(5697),h=n.n(y),g=n(4839),b=n.n(g),v=n(2993),w=n.n(v),E=n(6494),T=n.n(E),N="bodyAttributes",C="htmlAttributes",O="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(A).map((function(e){return A[e]})),"charset"),k="cssText",I="href",L="http-equiv",j="innerHTML",x="itemprop",P="name",_="property",D="rel",B="src",M="target",H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",U="defer",F="encodeSpecialCharacters",z="onChangeClientState",q="titleTemplate",K=Object.keys(H).reduce((function(e,t){return e[H[t]]=t,e}),{}),Y=[A.NOSCRIPT,A.SCRIPT,A.STYLE],W="data-react-helmet",G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ee=function(e){var t=oe(e,A.TITLE),n=oe(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=oe(e,R);return t||r||void 0},te=function(e){return oe(e,z)||function(){}},ne=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},re=function(e,t){return t.filter((function(e){return void 0!==e[A.BASE]})).map((function(e){return e[A.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},ae=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ue("Helmet: "+e+' should be of type "Array". Instead found type "'+G(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===D&&"canonical"===e[n].toLowerCase()||l===D&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==j&&c!==k&&c!==x||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=T()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},oe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ie=(m=Date.now(),function(e){var t=Date.now();t-m>16?(m=t,e(t)):setTimeout((function(){ie(e)}),0)}),ce=function(e){return clearTimeout(e)},le="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie:n.g.requestAnimationFrame||ie,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ce:n.g.cancelAnimationFrame||ce,ue=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},me=null,de=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,d=e.titleAttributes;ye(A.BODY,r),ye(A.HTML,a),pe(m,d);var f={baseTag:he(A.BASE,n),linkTags:he(A.LINK,o),metaTags:he(A.META,i),noscriptTags:he(A.NOSCRIPT,c),scriptTags:he(A.SCRIPT,s),styleTags:he(A.STYLE,u)},p={},y={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(y[e]=f[e].oldTags)})),t&&t(),l(e,p,y)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),ye(A.TITLE,t)},ye=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(W),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);a.length===o.length?n.removeAttribute(W):n.getAttribute(W)!==i.join(",")&&n.setAttribute(W,i.join(","))}},he=function(e,t){var n=document.head||document.querySelector(A.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(W,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ge=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)},ve=function(e,t,n){switch(e){case A.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[W]=!0,o=be(n,a),[r.createElement(A.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,r){var a=ge(n),o=fe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+X(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case N:case C:return{toComponent:function(){return be(t)},toString:function(){return ge(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[W]=!0,a);return Object.keys(t).forEach((function(e){var n=H[e]||e;if(n===j||n===k){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===j||e===k)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},we=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,d=e.titleAttributes;return{base:ve(A.BASE,t,r),bodyAttributes:ve(N,n,r),htmlAttributes:ve(C,a,r),link:ve(A.LINK,o,r),meta:ve(A.META,i,r),noscript:ve(A.NOSCRIPT,c,r),script:ve(A.SCRIPT,l,r),style:ve(A.STYLE,s,r),title:ve(A.TITLE,{title:m,titleAttributes:d},r)}},Ee=b()((function(e){return{baseTag:re([I,M],e),bodyAttributes:ne(N,e),defer:oe(e,U),encode:oe(e,F),htmlAttributes:ne(C,e),linkTags:ae(A.LINK,[D,I],e),metaTags:ae(A.META,[P,S,L,_,x],e),noscriptTags:ae(A.NOSCRIPT,[j],e),onChangeClientState:te(e),scriptTags:ae(A.SCRIPT,[B,j],e),styleTags:ae(A.STYLE,[k],e),title:ee(e),titleAttributes:ne(O,e)}}),(function(e){me&&se(me),e.defer?me=le((function(){de(e,(function(){me=null}))})):(de(e),me=null)}),we)((function(){return null})),Te=(d=Ee,p=f=function(e){function t(){return J(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!w()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:t};case A.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case A.TITLE:return Z({},a,((t={})[r.type]=i,t.titleAttributes=Z({},o),t));case A.BODY:return Z({},a,{bodyAttributes:Z({},o)});case A.HTML:return Z({},a,{htmlAttributes:Z({},o)})}return Z({},a,((n={})[r.type]=Z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[K[n]||n]=e[n],t}),t)}(Q(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),a=Z({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(d,a)},V(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(r.Component),f.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},f.defaultProps={defer:!0,encodeSpecialCharacters:!0},f.peek=d.peek,f.rewind=function(){var e=d.rewind();return e||(e=we({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);Te.renderStatic=Te.rewind;function Ne(e){var t=e.children,n=e.title;return r.createElement("div",{className:"MasterLayout"},r.createElement(Te,{htmlAttributes:{lang:"en"}},r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{name:"google-site-verification",content:"txgKmeRnG--tbzmjs6dsxKpFw-x3RCL2t_jCDioBfDo"}),r.createElement("meta",{name:"google-site-verification",content:"xkHDb2_zgTzNpDumgrN7J39GOzcAilbnu3ZnP9G_Q8A"}),r.createElement("meta",{property:"title",content:n+" | Nelgara Pty Ltd"}),r.createElement("title",null,n+" | Nelgara Pty Ltd"),r.createElement("meta",{name:"description",content:"Nelgara Commercial Construction Company Website"}),r.createElement("meta",{name:"keywords",content:"HTML, CSS, XML, JavaScript, Php, Nelgara, Nick, Noonan, Commercial, Construction, Services, Peter, Hooks, Katherine, James, Australian, Australia, Perth, Kallaroo, nelgara, australia, contruction services perth"}),r.createElement("meta",{name:"author",content:"James Nicholas Noonan"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.createElement("meta",{property:"url",content:"https://nelgara.com.au"}),r.createElement("meta",{property:"type",content:"website"}),r.createElement("meta",{property:"site_name",content:"Commercial Project Management Solutions | Nelgara Pty Ltd"}),r.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossorigin:"anonymous"})),r.createElement(l,null),r.createElement(u,{title:n}),r.createElement("div",{className:"mainContent"},t),r.createElement(s,null))}}}]);
//# sourceMappingURL=c2a23d46bee2b57a5bb07db1b305ef75fec68ae9-b3e1675d65dfd9a92524.js.map