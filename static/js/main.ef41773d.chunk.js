(this["webpackJsonpmanasjain0405.github.io"]=this["webpackJsonpmanasjain0405.github.io"]||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(15),s=a.n(i),j=(a(40),a(41),a(42),a(63)),o=a(57),d=a(64);var l=function(){return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsxs)(j.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(n.jsx)(j.a.Brand,{href:"/",children:Object(n.jsx)(o.a,{roundedCircle:!0,src:"/logo192.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"MJ"})}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{className:"mr-auto",children:[Object(n.jsx)(d.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{href:"#projects",children:"Projects"}),Object(n.jsx)(d.a.Link,{href:"#resume",children:"Resume"})]})})]})})},h=a(18),b=a(19),m=a(22),u=a(20),x=a(58),O=a(65),f=a(59),p=a(60),v=a(61),g=a(62),k=(a(48),"".concat("https://api.github.com/users/").concat("manasjain0405","/repos")),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(k).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"createCard",value:function(e){var t=null!=e.license?e.license.name:"None";return Object(n.jsx)(x.a,{md:3,py:2,style:{marginTop:"0.2rem",marginBottom:"0.2rem"},children:Object(n.jsxs)(O.a,{className:"h-100 project-card",bg:"dark",children:[Object(n.jsx)(O.a.Header,{children:e.name}),Object(n.jsxs)(O.a.Body,{children:[Object(n.jsx)(O.a.Text,{children:e.description}),Object(n.jsx)(f.a,{variant:"primary",href:e.html_url,target:"_blank",children:"Go to project"})]}),Object(n.jsxs)(O.a.Footer,{className:"text-muted",children:["License: ",t]})]})},e.id)}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,c=t.isLoaded,r=t.items;return a?Object(n.jsxs)("div",{children:["Error: Unable to fetch details from github APIs ",a.message]}):c?Object(n.jsxs)(v.a,{fluid:!0,children:[Object(n.jsx)(g.a,{className:"projects-heading",children:Object(n.jsx)("h1",{children:"My Github Projects"})}),Object(n.jsx)(g.a,{className:"projects-box dark",children:r.map((function(t){return e.createCard(t)}))})]}):Object(n.jsx)("div",{className:"loading-box dark",children:Object(n.jsx)(p.a,{animation:"grow",variant:"primary"})})}}]),a}(r.a.Component);var N=function(){return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("h1",{children:"Resume Placeholder"})})};a.p,a(49);var C=function(e){var t=e.dataParentToChild;return Object(n.jsxs)("div",{className:"dark about-box",children:[Object(n.jsx)("h1",{children:"About Me"}),Object(n.jsx)("p",{children:t.bio})]})};a(50);var y=function(e){var t=e.dataParentToChild;return Object(n.jsxs)("div",{className:"profile-box",children:[Object(n.jsx)(o.a,{roundedCircle:!0,fluid:!0,src:t.avatar_url}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"contact-details",children:[Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("p",{children:t.bio}),Object(n.jsxs)("p",{children:["Email: ",Object(n.jsx)("a",{href:"mailto:manasjain0405@gmail.com",children:"manasjain0405@gmail.com"})]}),Object(n.jsxs)("p",{children:["Github: ",Object(n.jsx)("a",{href:"https://github.com/manasjain0405",target:"_blank",rel:"noreferrer",children:"manasjain0405"})]}),Object(n.jsxs)("p",{children:["Linkedin: ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/manasjain0405/",target:"_blank",rel:"noreferrer",children:"manasjain0405"})]}),Object(n.jsxs)("p",{children:["Twitter: ",Object(n.jsx)("a",{href:"https://twitter.com/manasjain0405",target:"_blank",rel:"noreferrer",children:"manasjain0405"})]}),Object(n.jsxs)("p",{children:["Facebook: ",""]})]})]})},w=(a(51),"".concat("https://api.github.com/users/").concat("manasjain0405")),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,item:{}},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(w).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,item:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return this.state.isLoaded?Object(n.jsx)("div",{id:"Home",className:"dark",children:Object(n.jsx)(v.a,{fluid:!0,className:"dark",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{sm:3,children:Object(n.jsx)(y,{dataParentToChild:this.state.item})}),Object(n.jsxs)(x.a,{sm:9,children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(x.a,{sm:12,children:Object(n.jsx)(C,{dataParentToChild:this.state.item})})}),Object(n.jsx)(g.a,{children:Object(n.jsx)(x.a,{sm:12})})]})]})})}):Object(n.jsx)("div",{className:"loading-box",children:Object(n.jsx)(p.a,{animation:"grow",variant:"primary"})})}}]),a}(r.a.Component),T=a(33),F=a(6);var M=function(){return Object(n.jsx)("div",{className:"App dark",children:Object(n.jsxs)(T.a,{basename:"/",children:[Object(n.jsx)(l,{}),Object(n.jsxs)(F.c,{children:[Object(n.jsx)(F.a,{path:"/",exact:!0,component:P}),Object(n.jsx)(F.a,{path:"/projects",component:L}),Object(n.jsx)(F.a,{path:"/resume",component:N})]})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),S()}},[[55,1,2]]]);
//# sourceMappingURL=main.ef41773d.chunk.js.map