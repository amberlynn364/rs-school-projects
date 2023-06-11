(()=>{"use strict";var n={669:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    max-width: 70%;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        /* max-width: 700px; */\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=o},501:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".sources {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 250px;\n    overflow: auto;\n    align-items: center;\n    justify-content: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n}\n\n.sources::-webkit-scrollbar {\n    width: 20px;\n  }\n.sources::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n.sources::-webkit-scrollbar-thumb {\n    background-color: #d6dee1;\n    border-radius: 20px;\n    border: 6px solid transparent;\n    background-clip: content-box;\n  }\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n\n.source__item {\n    margin: 0.5em;\n    padding: 1em 2em;\n    align-items: center;\n    background-color: #fff;\n    border-radius: 24px;\n    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;\n    box-sizing: border-box;\n    color: #3c4043;\n    cursor: pointer;\n    display: inline-flex;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    justify-content: center;\n    letter-spacing: 0.25px;\n    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;\n    user-select: none;\n}\n\n.source__item:hover {\n  background: #F6F9FE;\n  color: #174ea6;\n  transform: translateY(-0.25em);\n}\n\n\n",""]);const i=o},767:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"html {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    margin: 0;\n    color: #fff;\n    background: linear-gradient(to right, #136a8a, #267871);\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 2.5rem;\n    letter-spacing: 1.2rem;\n    font-weight: 800;\n    user-select: none;\n}\n\nmain {\n    flex: 1 0 auto;\n    margin: 8px;\n}\n\nfooter {\n    flex: 0 0 auto;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    background: rgba(0, 0, 0, 0.2);\n    color: #fff;\n    font-size: 1.5rem;\n}\n\nfooter a {\n    text-decoration: none;\n    color: inherit;\n    transition: 0.3s;\n}\nfooter .copyright {\n    margin: 0;\n    text-align: center;\n}\nfooter a {\n    color: #f5f5f5;\n}\nfooter a:hover {\n    color: #b8b7b7;\n}\nfooter a:active {\n    color: #838383;\n}\nfooter .copyright:before {\n    content: '©';\n}\n\n.rs {\n    display: flex;\n    align-items: center;\n    gap: 25px;\n}\n\n.rs-logo {\n    width: 70px;\n    transition: 0.3s;\n}\n\n.rs-logo:hover {\n    scale: 1.1;\n}\n\n@media (max-width: 640px) {\n    header h1 {\n        text-align: center;\n        letter-spacing: 0.5rem;\n    }\n\n    footer {\n        flex-direction: column;\n        gap: 10px;\n        padding: 10px;\n    }\n\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,e),references:1}),r.push(d)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var i=m++;t=f||(f=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var c=a(n,e),l=0;l<t.length;l++){var d=s(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=class{constructor(n,e){this.baseLink=n,this.options=e,this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const t=Object.assign(Object.assign({},this.options),n);let r=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{r+=`${n}=${t[n]}&`})),r.slice(0,-1)}load(n,e,t,r={}){fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}},e=class extends n{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"de80aa53ea4a4fa0a7fc129ded506c8a"})}};var r;!function(n){n.Everything="everything",n.Sources="sources"}(r||(r={}));const o=class extends e{getSources(n){super.getResp({endpoint:r.Sources},n)}getNews(n,e){let t=n.target;const o=n.currentTarget;for(;t!==o;)if(t){if(t.classList.contains("source__item")){const n=t.getAttribute("data-source-id");return void(o&&o.getAttribute("data-source")!==n&&(o.setAttribute("data-source",n),super.getResp({endpoint:r.Everything,options:{sources:n}},e)))}t=t.parentNode}}};var i=t(379),s=t.n(i),a=t(669);s()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var c=t(501);s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;class l{constructor(){this.news=new class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");e.forEach(((n,e)=>{if(r){const o=r.content.cloneNode(!0);o instanceof DocumentFragment&&(e%2&&o.querySelector(".news__item").classList.add("alt"),o.querySelector(".news__meta-photo").style.backgroundImage=`url(${n.urlToImage||"img/news_placeholder.jpg"})`,o.querySelector(".news__meta-author").textContent=n.author||n.source.name,o.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".news__description-title").textContent=n.title,o.querySelector(".news__description-source").textContent=n.source.name,o.querySelector(".news__description-content").textContent=n.description,o.querySelector(".news__read-more a").setAttribute("href",n.url),t.append(o))}})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(t)}},this.sources=new class{draw(n){const e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");n.forEach((n=>{if(t){const r=t.content.cloneNode(!0);r instanceof DocumentFragment&&(r.querySelector(".source__item-name").textContent=n.name,r.querySelector(".source__item").setAttribute("data-source-id",n.id)),e.append(r)}})),document.querySelector(".sources").append(e)}}}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)}}var d=t(767);s()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,(new class{constructor(){this.controller=new o,this.view=new l}start(){document.querySelector(".sources").addEventListener("click",(n=>this.controller.getNews(n,(n=>this.view.drawNews(n))))),this.controller.getSources((n=>this.view.drawSources(n)))}}).start()})()})();