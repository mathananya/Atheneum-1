(this["webpackJsonpstartup-competition"]=this["webpackJsonpstartup-competition"]||[]).push([[0],{25:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(16),i=t.n(s),o=t(4),a=t(2),r=t(17),l=t.n(r),j=(t(25),t(0)),d=function(e){var n=e.data,t=e.num,s=n.name,i=n.achievments,o=Object(c.useRef)(null);Object(c.useLayoutEffect)((function(){var e=function(){o.current.classList.toggle("not-in-view",!function(){var e=o.current.getBoundingClientRect();return e.top+e.height/2>=0&&e.bottom-e.height/2<=(window.innerHeight||document.documentElement.clientHeight)}())},n=l.a.throttle(e,550,{trailing:!0,leading:!0});return e(),window.addEventListener("scroll",n),window.addEventListener("resize",n),function(){window.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]);var a=i.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("h3",{children:e})})})),r=s.split(" ")[0];return Object(j.jsxs)("section",{ref:o,class:"box not-in-view",id:"card--".concat(t),children:[Object(j.jsxs)("section",{class:"box__side front",children:[Object(j.jsx)("section",{class:"box__image image--".concat(r),children:"\xa0"}),Object(j.jsx)("h3",{class:"box__heading",children:Object(j.jsx)("span",{className:"box__heading-span span--".concat(t),children:s})})]}),Object(j.jsx)("section",{class:"box__side back back--".concat(t),children:Object(j.jsx)("section",{class:"card__information",children:Object(j.jsx)("ul",{children:a})})})]})},u=(t(27),function(){return Object(j.jsxs)("section",{className:"founders-container",children:[Object(j.jsx)("h3",{className:"heading__founders founders glitch","data-text":"Founders of Atheneum",children:"Founders Of Atheneum"}),Object(j.jsxs)("section",{className:"flex__cards",children:[Object(j.jsx)(d,{data:{name:"Vihaan Verma",achievments:["Likes Web Development and playing sports","Built the business model","Helped in Web Development"]},num:"1"}),Object(j.jsx)(d,{data:{name:"Suyash Handa",achievments:["Likes Physics and Chemistry","Thought of Book Shala","Helped in Web Development"]},num:"2"}),Object(j.jsx)(d,{data:{name:"Ananya Mukherjee",achievments:["Likes Web Development and playing sports","Built the business model","Helped in Web Development"]},num:"3"})]})]})}),b=function(){return Object(j.jsx)("div",{children:"Home Page"})},h=function(){return Object(j.jsx)("div",{children:"Functionality Page"})},m=function(){return Object(j.jsx)("div",{children:"Business Plan"})},x=function(){return Object(j.jsx)("div",{children:"Features Page"})},O=(t(28),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsxs)("div",{className:"footer__information",children:[Object(j.jsx)("h2",{children:"-V1.1"}),Object(j.jsx)("i",{class:"copyright icon big"})]}),Object(j.jsxs)("div",{className:"footer__icons",children:[Object(j.jsx)("i",{className:"github icon big"}),Object(j.jsx)("i",{className:"instagram icon big"}),Object(j.jsx)("i",{className:"envelope icon big"}),Object(j.jsx)("i",{className:"twitter icon big"})]})]})}),f=t(19),p=t.p+"static/media/Atheneum_logo.145484f8.png",g=(t(29),function(){return Object(j.jsx)("header",{class:"ui secondary pointing menu",children:Object(j.jsxs)("nav",{className:"navLarge",children:[Object(j.jsx)(o.b,{to:"/",className:"logo",children:Object(j.jsx)("img",{src:p,alt:"Logo",height:"20px"})}),Object(j.jsxs)("div",{class:"right menu",children:[Object(j.jsx)(o.b,{to:"/founders",class:"item",children:"Founders"}),Object(j.jsx)(o.b,{to:"/functionality",class:"item",children:"functionality"}),Object(j.jsx)(o.b,{to:"/business-plan",class:"item",children:"business plan"}),Object(j.jsx)(o.b,{to:"/Vision",class:"item",children:"Vision"}),Object(j.jsx)(o.b,{to:"/customer-analysis",class:"item",children:"Customer Analysis"})]})]})})}),v=function(){var e=Object(c.useRef)(null);return Object(j.jsxs)("header",{children:[Object(j.jsx)("input",{ref:e,class:"menu-icon",type:"checkbox",id:"menu-icon",name:"menu-icon"}),Object(j.jsx)("label",{for:"menu-icon"}),Object(j.jsx)("nav",{class:"nav",children:Object(j.jsxs)("ul",{class:"pt-5",onClick:function(n){n.target.classList.contains("item")&&e.current.checked&&(e.current.checked=!1)},children:[Object(j.jsx)("li",{id:"item1",children:Object(j.jsx)(o.b,{to:"/",class:"logo",children:Object(j.jsx)("img",{src:p,alt:"Logo",class:"item"})})}),Object(j.jsx)("li",{id:"item2",children:Object(j.jsx)(o.b,{to:"/founders",class:"item",children:"Founders"})}),Object(j.jsx)("li",{id:"item3",children:Object(j.jsx)(o.b,{to:"/functionality",class:"item",children:"functionality"})}),Object(j.jsx)("li",{id:"item4",children:Object(j.jsx)(o.b,{to:"/business-plan",class:"item",children:"business plan"})}),Object(j.jsx)("li",{id:"item5",children:Object(j.jsx)(o.b,{to:"/Vision",class:"item",children:"Vision"})}),Object(j.jsx)("li",{id:"item6",children:Object(j.jsx)(o.b,{to:"/customer-analysis",class:"item",children:"Customer Analysis"})})]})})]})},y=function(){var e=Object(c.useState)(window.innerWidth),n=Object(f.a)(e,2),t=n[0],s=n[1];return Object(c.useLayoutEffect)((function(){var e=function(){s(window.innerWidth),console.log("called")};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t>550?Object(j.jsx)(g,{}):Object(j.jsx)(v,{})},w=(t(34),function(){return Object(c.useEffect)((function(){setTimeout((function(){document.querySelector(".loadingContainer").classList.add("load--hide")}),1e3)}),[]),Object(j.jsx)("section",{style:{height:"100%"},children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(y,{}),Object(j.jsx)("section",{style:{marginTop:"5rem",padding:"10rem 2rem"},children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{path:"/",exact:!0,component:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(a.a,{path:"/founders",exact:!0,component:function(){return Object(j.jsx)(u,{})}}),Object(j.jsx)(a.a,{path:"/business-plan",exact:!0,component:function(){return Object(j.jsx)(m,{})}}),Object(j.jsx)(a.a,{path:"/Vision",exact:!0,component:function(){return Object(j.jsx)(x,{})}}),Object(j.jsx)(a.a,{path:"/functionality",exact:!0,component:function(){return Object(j.jsx)(h,{})}})]})}),Object(j.jsx)(O,{})]})})});i.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2440eb17.chunk.js.map