(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{68:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),r=n.n(i),j=(n(68),n.p,n(118)),s=n(25),l=n(50),d=n(114),b=n(119),o=n(120),u=n(48),x=n.n(u),h=n(53),O=n.n(h),g=n(121),m=n(49),f=n.n(m),p=n(116),v=n(111),k=n(117),y=n(4),C=Object(v.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}));var T=function(){var e=C(),t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),u=Object(l.a)(r,2),h=u[0],m=u[1],v=function(e,t){var n=Object(s.a)(h);n[e][t.target.name]=t.target.value,m(n)},T=function(e,t){var n=Object(s.a)(h);n[e][t.target.name]=t.target.checked,m(n)},S=function(e){var t=Object(s.a)(h);t.splice(e,1),m(t)};return Object(y.jsxs)(d.a,{style:{marginTop:50},children:[Object(y.jsx)(p.a,{variant:"h5",align:"center",children:Object(y.jsx)("b",{children:"Add Item"})}),Object(y.jsx)(k.a,{style:{paddingTop:2,paddingBottom:2,background:"#000000"}}),Object(y.jsxs)("form",{className:e.root,onSubmit:function(e){e.preventDefault(),console.log("Inputs",h)},children:[Object(y.jsxs)(j.a,{spacing:1,container:!0,justify:"center",children:[Object(y.jsx)(j.a,{item:!0,md:11,xs:10,children:Object(y.jsx)(b.a,{name:"lang",fullWidth:!0,variant:"outlined",value:a,onChange:function(e){return i(e.target.value)}})}),Object(y.jsx)(j.a,{item:!0,md:1,xs:1,children:Object(y.jsx)(o.a,{style:{marginTop:5},onClick:function(){a&&(m([].concat(Object(s.a)(h),[{language:a,check:!1,disable:!1}])),i(""))},children:Object(y.jsx)(O.a,{fontSize:"large",style:{color:"#000000"}})})})]}),Object(y.jsx)("br",{}),Object(y.jsx)(p.a,{variant:"h5",align:"center",children:Object(y.jsx)("b",{children:"Todo"})}),Object(y.jsx)(k.a,{style:{paddingTop:2,paddingBottom:2,background:"#000000"}}),Object(y.jsx)("br",{}),h.map((function(e,t){return Object(y.jsx)("div",{children:e.check?null:Object(y.jsxs)(j.a,{spacing:1,container:!0,children:[Object(y.jsx)(j.a,{item:!0,md:1,xs:1,style:{marginTop:10},children:Object(y.jsx)(g.a,{checked:e.check,name:"check",onChange:function(e){return T(t,e)}})}),Object(y.jsx)(j.a,{item:!0,md:6,xs:6,children:e.disable?Object(y.jsx)(b.a,{name:"language",fullWidth:!0,variant:"outlined",value:e.language,onChange:function(e){return v(t,e)}}):Object(y.jsx)(p.a,{variant:"subtitle1",style:{marginTop:15},children:e.language})}),Object(y.jsx)(j.a,{item:!0,md:1,xs:1,children:Object(y.jsx)(o.a,{disabled:1===e.length,onClick:function(){return S(t)},children:Object(y.jsx)(x.a,{})})}),Object(y.jsx)(j.a,{item:!0,md:1,xs:1,children:Object(y.jsx)(o.a,{name:"disable",onClick:function(){var n=Object(s.a)(h);e.disable?n[t].disable=!1:n[t].disable=!0,m(n)},children:Object(y.jsx)(f.a,{color:e.disable?"secondary":"inherit"})})})]})},t)})),Object(y.jsx)("br",{}),Object(y.jsx)(p.a,{variant:"h5",align:"center",children:Object(y.jsx)("b",{children:"Completed"})}),Object(y.jsx)(k.a,{style:{paddingTop:2,paddingBottom:2,background:"#000000"}}),Object(y.jsx)("br",{}),h.map((function(e,t){return Object(y.jsx)("div",{children:e.check?Object(y.jsxs)(j.a,{spacing:1,container:!0,children:[Object(y.jsx)(j.a,{item:!0,md:1,xs:1,style:{marginTop:10},children:Object(y.jsx)(g.a,{checked:e.check,name:"check",onChange:function(e){return T(t,e)}})}),Object(y.jsx)(j.a,{item:!0,md:6,xs:6,children:e.disable?Object(y.jsx)(b.a,{name:"language",fullWidth:!0,variant:"outlined",value:e.language,onChange:function(e){return v(t,e)}}):Object(y.jsx)(p.a,{variant:"subtitle1",style:{marginTop:15},children:Object(y.jsx)("del",{children:e.language})})}),Object(y.jsx)(j.a,{item:!0,md:1,xs:1,children:Object(y.jsx)(o.a,{disabled:1===e.length,onClick:function(){return S(t)},children:Object(y.jsx)(x.a,{})})}),Object(y.jsx)(j.a,{item:!0,md:1,xs:1,children:Object(y.jsx)(o.a,{name:"disable",onClick:function(){var n=Object(s.a)(h);e.disable?n[t].disable=!1:n[t].disable=!0,m(n)},children:Object(y.jsx)(f.a,{color:e.disable?"secondary":"inherit"})})})]}):null},t)}))]})]})};var S=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(j.a,{spacing:1,container:!0,justify:"center",children:Object(y.jsx)(j.a,{item:!0,md:5,xs:12,children:Object(y.jsx)(T,{})})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.24fadb8a.chunk.js.map