(this["webpackJsonpmanasjain0405.github.io"]=this["webpackJsonpmanasjain0405.github.io"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),s=n(15),i=n.n(s),o=(n(41),n(42),n(43),n.p+"static/media/logo.103b5fa1.svg"),j=n(16),d=n(17);var l=function(){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsxs)(j.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(a.jsx)(j.a.Brand,{href:"/",children:Object(a.jsx)("img",{src:o,width:"30",height:"30",className:"d-inline-block align-top",alt:"MJ"})}),Object(a.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(d.a,{className:"mr-auto",children:[Object(a.jsx)(d.a.Link,{href:"/",children:"Home"}),Object(a.jsx)(d.a.Link,{href:"/projects",children:"Projects"}),Object(a.jsx)(d.a.Link,{href:"/resume",children:"Resume"})]})})]})})},h=n(29),b=n(30),u=n(35),p=n(34),x=n(18),O=n(31),m=(n(49),"".concat("https://api.github.com/users/").concat("manasjain0405","/repos")),f=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(m).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"createCard",value:function(e){return Object(a.jsx)(x.a,{className:"project-card",children:Object(a.jsxs)(x.a.Body,{children:[Object(a.jsx)(x.a.Title,{children:e.name}),Object(a.jsx)(x.a.Text,{children:e.description}),Object(a.jsx)(O.a,{variant:"primary",href:e.html_url,target:"_blank",children:"Go to project"})]})},e.id)}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,c=t.isLoaded,r=t.items;return n?Object(a.jsxs)("div",{children:["Error: ",n.message]}):c?Object(a.jsx)("div",{id:"project-list",className:"d-flex flex-wrap project-box",children:r.map((function(t){return e.createCard(t)}))}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(r.a.Component);var g=function(){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(a.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},v=n(32),k=n(6);var L=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/",exact:!0,component:g}),Object(a.jsx)(k.a,{path:"/projects",component:f})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),N()}},[[53,1,2]]]);
//# sourceMappingURL=main.2fb9e811.chunk.js.map