(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UrL6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("TJpk"),l=a.n(i),c=a("2mJz"),o=a("ExpJ"),s=(a("YbXK"),a("cFtU"),a("q8oJ"),a("8npG"),a("m210"),a("4DPX"),a("rzGZ"),a("C8Qj"),a("HQhv"),a("pJf4"),a("v9g0"),a("iG1Z")),m=a("GRlc"),u=(a("FFx5"),function(e){var t=e.children;return r.a.createElement("dl",{className:"definition-list","data-component":"atoms/definition-list"},t)});u.Entry=function(e){var t=e.term,a=e.definition;return r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"definition-list-term"},t),r.a.createElement("dd",{className:"definition-list-definition"},a))};var p=u,d=(a("0icX"),function(e){var t=e.text;return r.a.createElement("div",{className:"copy-text"},r.a.createElement("p",null,t))});a("tOMh");function f(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var t=e.graphic,a=e.initiallyOpen,i=void 0!==a&&a,l=e.className,c=void 0===l?"":l,o=t.involvedPersons.find((function(e){return"Inventor"===e.role})),u=t.titles[0]&&t.titles[0].title||"",g=o?o.name:" ",E=t.description||" ",h=t.image,v=t.classification,b=t.dating,y=t.dimensions,N=t.inventoryNumber,w=t.objectName,j=t.catalogWorkReferences.map((function(e){return{term:e.description+"-Nr.",definition:e.referenceNumber}})),O=Object(n.useState)([]),A=O[0],k=O[1],S=Object(n.useState)(!!i),T=S[0],x=S[1];return Object(n.useEffect)((function(){x(!!i)}),[i]),Object(n.useEffect)((function(){k([].concat(f(c.split(" ")),f(T?["-is-open"]:[])))}),[c,T]),r.a.createElement(s.a,{className:"leporello-graphic-details-item-wrap "+A.join(" "),"data-component":"organisms/leporello-graphic-details-item",initiallyOpen:T,onToggle:x},r.a.createElement("div",{className:"leporello-graphic-details-item "+A.join(" ")},r.a.createElement("div",{className:"leporello-graphic-details-item-image -is-non-fading"},r.a.createElement(m.a,{src:h.xlarge,baseSrc:h.small,alt:u})),r.a.createElement("div",{className:"leporello-graphic-details-item-info"},r.a.createElement("h1",{className:"title"},u),r.a.createElement("h2",{className:"subtitle"},g),r.a.createElement("div",{className:"leporello-graphic-details-item-info-further"},r.a.createElement(p,null,r.a.createElement(p.Entry,{term:"CDA ID",definition:N}),j.map((function(e){return r.a.createElement(p.Entry,{key:e.term,term:e.term,definition:e.definition})})),r.a.createElement(p.Entry,{term:"Klassifikation",definition:v.classification}),r.a.createElement(p.Entry,{term:"Datiert",definition:b.dated}),r.a.createElement(p.Entry,{term:"Maße",definition:y}),r.a.createElement(p.Entry,{term:"Objektname",definition:w})),r.a.createElement(d,{text:E})))))},E=a("av7U"),h=a("7Am+"),v=(a("vw2X"),function(e){var t=e.items;return r.a.createElement("ul",{className:"graphics-list","data-component":"molecules/graphics-list"},t.map((function(e){return r.a.createElement("li",{key:e.imgSrc,className:"graphics-list-item"},r.a.createElement(E.a,{to:e.to},r.a.createElement(h.a,{src:e.imgSrc,alt:e.title,classNamePrefix:"graphics-list-item",caption:e.title})))})))});a("SHiN");function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=function(e){var t=e.graphic,a=e.description,i=void 0===a?"          Hier wäre es gut, wenn wir den Text dynmaisch aus einer Datei ziehen könnten, in der so ein paar Helpertexte und die Headlines drin sind. (zweisprachig)":a,l=e.className,c=void 0===l?"":l,o=t.references.length>100,m=t.references.map((function(e){var t=e.ref;return{title:t.owner||"",to:"/"+t.langCode+"/"+t.slug,imgSrc:t&&t.image&&t.image.small}})),u=Object(n.useState)([]),p=u[0],f=u[1],g=Object(n.useState)(!1),E=g[0],h=g[1],y=Object(n.useState)(!E),N=y[0],w=y[1];return Object(n.useEffect)((function(){f(b(c.split(" ")))}),[c,E]),Object(n.useEffect)((function(){w(!E)}),[E]),r.a.createElement(s.a,{className:"leporello-graphic-reprints-item-wrap "+p.join(" "),"data-component":"organisms/leporello-graphic-reprints-item",initiallyOpen:E,onToggle:h,visibleToggler:o},r.a.createElement("div",{className:"leporello-graphic-reprints-item"},r.a.createElement("div",{className:"leporello-graphic-reprints-item-intro"},r.a.createElement("h2",{className:"chapter"},"Abzüge"),r.a.createElement("h3",{className:"headline"},"1. Zustand"),r.a.createElement(d,{text:i})),r.a.createElement("div",{className:"leporello-graphic-reprints-item-list"},r.a.createElement(v,{items:N?m.slice(0,100):m}))))};a("kMTJ");function N(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=function(e){var t=e.className,a=void 0===t?"":t,i=e.description,l=void 0===i?"Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Bestätigung ihrer neuen Träume und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen Körper dehnte.":i,c=Object(n.useState)([]),o=c[0],m=c[1],u=Object(n.useState)(!1),p=u[0],f=u[1];return Object(n.useEffect)((function(){m([].concat(N(a.split(" ")),N(p?["-related-works-is-open"]:[])))}),[a,p]),r.a.createElement(s.a,{className:"leporello-artefact-related-works-item-wrap "+o.join(" "),"data-component":"organisms/leporello-artefact-related-works-item",initiallyOpen:p,onToggle:f},r.a.createElement("div",{className:"leporello-artefact-related-works-item"},r.a.createElement("div",{className:"leporello-artefact-related-works-item-intro"},r.a.createElement("h2",{className:"chapter"},"Verwandte Arbeiten"),r.a.createElement(d,{text:l}),r.a.createElement("div",{className:"leporello-artefact-related-works-item-list"},r.a.createElement(v,{items:[]})))))};t.default=function(e){var t=e.pageContext,a=t.titles[0]&&t.titles[0].title||"";return r.a.createElement("div",{className:"page","data-template":"page"},r.a.createElement(l.a,null,r.a.createElement("title",null,"Grafiken | ",a," | Virtual")),r.a.createElement(c.a,{target:"/",targetText:"zurück zur Übersicht"}),r.a.createElement("section",{className:"body"},r.a.createElement(o.a,null,r.a.createElement(g,{graphic:t}),r.a.createElement(y,{graphic:t}),r.a.createElement(w,{graphic:t}))))}},v9g0:function(e,t,a){"use strict";var n=a("P8UN"),r=a("Wadk")(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),n(n.P+n.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")("find")}}]);
//# sourceMappingURL=component---src-templates-virtual-object-page-jsx-5015b4241aa99adf566a.js.map