(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+sb+":function(e){e.exports=JSON.parse('{"de":{"Impressions":"Abzüge","1st state":"1.Zustand","1st state description":"","2nd state":"2.Zustand","2nd state description":"","3rd state":"3.Zustand","3rd state description":"","4th state":"4.Zustand","4th state description":"","5th state":"5.Zustand","5th state description":"","6th state":"6.Zustand","6th state description":"","7th state":"7.Zustand","7th state description":"","8th state":"8.Zustand","8th state description":"","9th state":"9.Zustand","9th state description":"","10th state":"10.Zustand","10th state description":""}}')},OaJB:function(e){e.exports=JSON.parse('{"de":{"{{catalogWorkReferenceName}}-No":"{{catalogWorkReferenceName}}-Nr.","Persistent Link":"Permanent Link","Classification":"Klassifikation","Production date":"Datierung","Dimensions":"Maße","Signature":"Signatur/ Datierung","Inscription":"Inschrift","Primary literature":"Primärliteratur","Secondary literature":"Sekundärliteratur","Attribution":"Zuschreibung","Master Data":"Werknormdaten"}}')},SHiN:function(e,t,a){},UbNj:function(e,t,a){},UrL6:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("TJpk"),s=a.n(r),l=a("2mJz"),o=a("ExpJ"),c=a("KQm4"),m=a("kiXb"),d=a("iG1Z"),u=a("a33T"),p=(a("UbNj"),function(e){var t=e.data,a=(void 0===t?[]:t).map((function(e,t){return n.a.createElement("li",{className:"involved-persons-list__item",key:t},e.alternativeName,", ",e.role," ",e.remarks?n.a.createElement("span",{className:"remarks"},e.remarks):"")}));return n.a.createElement("ul",{className:"involved-persons-list"},a)}),f=a("MK4D"),g=a("BVMp"),h=a("7Am+"),v=a("OaJB"),E=(a("tOMh"),function(e){var t=e.location,a=e.graphic,r=e.visibleCloser,s=void 0===r||r,l=e.initiallyOpen,o=void 0!==l&&l,E=e.className,b=void 0===E?"":E,N=Object(m.b)("LeporelloGraphicDetailsItem",v).t,k=a.titles[0]&&a.titles[0].title||"",y=a.description||" ",O=a.representativeImage,j=a.dating,I=a.dimensions,S=a.involvedPersons,w=a.inventoryNumber,L=a.signature,T=a.catalogWorkReferences,_=a.publications,C=a.classification,J=T.map((function(e){return{term:N("{{catalogWorkReferenceName}}-No",{catalogWorkReferenceName:e.description}),definition:e.referenceNumber}})),R=Object(i.useState)([]),W=R[0],Z=R[1],D=Object(i.useState)(!!o),P=D[0],M=D[1];Object(i.useEffect)((function(){M(!!o)}),[o]),Object(i.useEffect)((function(){Z([].concat(Object(c.a)(b.split(" ")),Object(c.a)(P?["-is-open"]:[])))}),[b,P]);var x=O.medium.src;return n.a.createElement(d.a,{className:"leporello-graphic-details-item-wrap "+W.join(" "),"data-component":"organisms/leporello-graphic-details-item",initiallyOpen:P,onToggle:M,visibleToggler:s,closerType:"with-cover"},n.a.createElement("div",{className:"leporello-graphic-details-item "+W.join(" ")},n.a.createElement("header",{className:"leporello-graphic-details-item__header"},n.a.createElement("h2",{className:"chapter"},N("Master Data"))),n.a.createElement("div",{className:"leporello-graphic-details-item__content"},n.a.createElement("div",{className:"leporello-graphic-details-item__content-image"},n.a.createElement(h.a,{src:x,alt:k})),n.a.createElement("div",{className:"leporello-graphic-details-item__content-info"},n.a.createElement("header",{className:"leporello-graphic-details-item__content-info-header"},n.a.createElement("h1",{className:"title"},k),n.a.createElement("h2",{className:"subtitle"},C.classification,", ",C.printProcess)),n.a.createElement("div",{className:"leporello-graphic-details-item__content-info-content"},n.a.createElement("div",{className:"column"},n.a.createElement(g.a,{text:y})),n.a.createElement("div",{className:"column"},n.a.createElement(u.a,null,n.a.createElement(u.a.Entry,{term:N("Attribution"),definition:n.a.createElement(p,{data:S})}),n.a.createElement(u.a.Entry,{term:N("Production date"),definition:j.dated+" "+j.remarks}),n.a.createElement(u.a.Entry,{term:N("Dimensions"),definition:I}),L&&n.a.createElement(u.a.Entry,{term:N("Signature"),definition:L}),J.map((function(e){return n.a.createElement(u.a.Entry,{key:e.term,term:e.term,definition:e.definition})})),n.a.createElement(u.a.Entry,{term:"CDA ID",definition:w}),n.a.createElement(u.a.Entry,{term:N("Persistent Link"),definition:t})),_.primary.length>0&&n.a.createElement(u.a,null,n.a.createElement(u.a.Entry,{term:N("Primary literature"),definition:n.a.createElement(f.a,{items:_.primary})})),_.secondary.length>0&&n.a.createElement(u.a,null,n.a.createElement(u.a.Entry,{term:N("Secondary literature"),definition:n.a.createElement(f.a,{items:_.secondary})}))))))))}),b=a("av7U"),N=(a("vw2X"),function(e){var t=e.items,a=e.onItemClick;return n.a.createElement("ul",{className:"graphics-list","data-component":"molecules/graphics-list"},t.map((function(e){return n.a.createElement("li",{key:e.imgSrc,className:"graphics-list-item"},n.a.createElement(b.a,{to:e.to,triggersInternalTransition:!!e.triggersInternalTransition,onClick:function(t){return!e.preventLinkFollowing||("function"==typeof a&&a(e),t.preventDefault(),!1)}},n.a.createElement(h.a,{src:e.imgSrc,alt:e.title,classNamePrefix:"graphics-list-item__image",caption:e.title,modifierWithBox:!0})))})))}),k=a("+sb+"),y=(a("SHiN"),function(e){var t=e.reprints,a=e.className,r=void 0===a?"":a,s=e.onItemClick,l=void 0===s?function(){}:s,o=e.limitItemsTo,u=void 0===o?5:o,p=Object(m.b)("LeporelloGraphicReprintsItem",k).t,f=t.map((function(e){var t=e.ref,a=t.representativeImage.small.src;return{inventoryNumber:t.inventoryNumber,title:[t.dating.dated,", ",t.owner],to:"/"+t.metadata.langCode+"/"+t.slug,imgSrc:a,preventLinkFollowing:!0,conditionLevel:t.conditionLevel}})),g=Object(i.useState)([]),h=g[0],v=g[1],E=Object(i.useState)(!1),b=E[0],y=E[1],O=Object(i.useState)(!b),j=O[0],I=O[1];Object(i.useEffect)((function(){v(Object(c.a)(r.split(" ")))}),[r,b]),Object(i.useEffect)((function(){I(!b)}),[b]);var S=function(e){var a=t.find((function(t){return t.inventoryNumber===e.inventoryNumber}));a&&"function"==typeof l&&l(a.ref)},w=[{id:"1st-state",translations:{title:"Impressions",subtitle:"1st state",description:"1st state description"},filter:function(e){return e&&[0,1].includes(e.conditionLevel)},items:[]},{id:"2nd-state",translations:{title:"Impressions",subtitle:"2nd state",description:"2nd state description"},filter:function(e){return e&&2===e.conditionLevel},items:[]},{id:"3rd-state",translations:{title:"Impressions",subtitle:"3rd state",description:"3rd state description"},filter:function(e){return e&&3===e.conditionLevel},items:[]},{id:"4th-state",translations:{title:"Impressions",subtitle:"4th state",description:"4th state description"},filter:function(e){return e&&4===e.conditionLevel},items:[]},{id:"5th-state",translations:{title:"Impressions",subtitle:"5th state",description:"5th state description"},filter:function(e){return e&&5===e.conditionLevel},items:[]},{id:"6th-state",translations:{title:"Impressions",subtitle:"6th state",description:"6th state description"},filter:function(e){return e&&6===e.conditionLevel},items:[]},{id:"7th-state",translations:{title:"Impressions",subtitle:"7th state",description:"7th state description"},filter:function(e){return e&&7===e.conditionLevel},items:[]},{id:"8th-state",translations:{title:"Impressions",subtitle:"8th state",description:"8th state description"},filter:function(e){return e&&8===e.conditionLevel},items:[]},{id:"9th-state",translations:{title:"Impressions",subtitle:"9th state",description:"9th state description"},filter:function(e){return e&&9===e.conditionLevel},items:[]},{id:"10th-state",translations:{title:"Impressions",subtitle:"10th state",description:"10th state description"},filter:function(e){return e&&10===e.conditionLevel},items:[]}].map((function(e){return Object.assign({},e,{items:f.filter(e.filter)})})).filter((function(e){return e.items.length>0})),L=w.some((function(e){return e.items.length>u}));return n.a.createElement(d.a,{className:"leporello-graphic-reprints-item-wrap "+h.join(" "),"data-component":"organisms/leporello-graphic-reprints-item",initiallyOpen:b,onToggle:y,visibleToggler:L},w.map((function(e,t){return n.a.createElement("div",{key:e.id,className:"leporello-graphic-reprints-item"},n.a.createElement("div",{className:"leporello-graphic-reprints-item-intro"},0===t&&n.a.createElement("h2",{className:"chapter"},p(e.translations.title)),n.a.createElement("h3",{className:"headline"},p(e.translations.subtitle))),n.a.createElement("div",{className:"leporello-graphic-reprints-item-list"},n.a.createElement(N,{items:j?e.items.slice(0,u):e.items,onItemClick:S})))})))}),O=a("hSqR"),j=(a("kMTJ"),function(e){var t=e.relatedWorks,a=e.className,r=void 0===a?"":a,s=e.limitItemsTo,l=void 0===s?5:s,o=Object(m.b)("LeporelloArtefactRelatedWorksItem",O).t,u=l,p=t.length>u,f=t.map((function(e){var t=e.ref,a=t.titles[0].title?t.titles[0].title+", "+t.dating.dated:t.dating.dated,i=t.representativeImage.small.src;return{inventoryNumber:t.inventoryNumber,title:a,to:"/"+t.metadata.langCode+"/"+t.slug,imgSrc:i,preventLinkFollowing:!1,triggersInternalTransition:!0}})),g=Object(i.useState)([]),h=g[0],v=g[1],E=Object(i.useState)(!1),b=E[0],k=E[1],y=Object(i.useState)(!b),j=y[0],I=y[1];return Object(i.useEffect)((function(){v(Object(c.a)(r.split(" ")))}),[r,b]),Object(i.useEffect)((function(){I(!b)}),[b]),n.a.createElement(d.a,{className:"leporello-artefact-related-works-item-wrap "+h.join(" "),"data-component":"organisms/leporello-artefact-related-works-item",initiallyOpen:b,onToggle:k,visibleToggler:p},n.a.createElement("div",{className:"leporello-artefact-related-works-item"},n.a.createElement("div",{className:"leporello-artefact-related-works-item-intro"},n.a.createElement("h2",{className:"chapter"},o("Related works"))),n.a.createElement("div",{className:"leporello-artefact-related-works-item-list"},n.a.createElement(N,{items:j?f.slice(0,u):f}))))}),I=a("gNsi");t.default=function(e){var t=e.pageContext,a=e.location,r=t,c=r.titles[0]&&r.titles[0].title||"";Object(m.a)(r.metadata.langCode);var d=Object(i.useState)(null),u=d[0],p=d[1];return n.a.createElement("div",{className:"template","data-template":"virtual-object-page"},n.a.createElement(s.a,null,n.a.createElement("title",null,"Grafiken | ",c," | Virtual")),n.a.createElement(l.a,{goBackTo:"/"+r.metadata.langCode+"/"}),n.a.createElement("section",{className:"body"},n.a.createElement(o.a,null,n.a.createElement(E,{graphic:r,location:a.href}),u?n.a.createElement(I.a,{graphic:u,onClose:function(){return p(null)}}):n.a.createElement(y,{reprints:r.references.reprints,onItemClick:p}),r.references.relatedWorks.length>0&&n.a.createElement(j,{relatedWorks:r.references.relatedWorks}))))}},hSqR:function(e){e.exports=JSON.parse('{"de":{"Related works":"Verwandte Arbeiten","Related works description":""}}')},kMTJ:function(e,t,a){},tOMh:function(e,t,a){},vw2X:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-virtual-object-page-jsx-6886cef3e75c8946fb5d.js.map