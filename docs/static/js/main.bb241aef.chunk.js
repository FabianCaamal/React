(this["webpackJsonpsegunda-app"]=this["webpackJsonpsegunda-app"]||[]).push([[0],{16:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=(n(16),n(2)),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:c,onChange:function(t){u(t.target.value)}})})};d.prototype={value:o.a.func.isRequired};var l=n(11),b=n(6),f=n.n(b),p=n(9),h=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,r,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=12&api_key=EPZo7Ux9T0HJRiNklvxCmy9CHaIAhfdf&q=".concat(encodeURI(e)),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeInDown",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsxs)("p",{children:[" ",e," "]})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),1e3)}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:[" ",e," "]}),c&&Object(j.jsx)("p",{children:"Cargando..."}),Object(j.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(j.jsx)(O,Object(l.a)({},t),t.id)}))}),Object(j.jsx)("hr",{})]})},x=function(){var t=Object(a.useState)(["one punch man"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Buscador de gifts"}),Object(j.jsx)(d,{setCategories:r}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(m,{category:t},t)}))})]})};c.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.bb241aef.chunk.js.map