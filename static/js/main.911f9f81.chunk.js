(this["webpackJsonpcourse-list-hook"]=this["webpackJsonpcourse-list-hook"]||[]).push([[0],{139:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),s=n.n(o),c=(n(139),n(28)),i=n(130),u=n(91),l=n.n(u),b=n(69),d=n.n(b),j=(n(129),n(63)),h=n(94),p=n.n(h),g=n(119),O="GET_COURSES",f=(n(161),n(240)),C=n(238),x=n(239),m=n(241),w=n(20),S=f.a.Search,F=function(){var e=Object(j.c)((function(e){return e.post.posts})),t=Object(r.useState)(e||[]),n=Object(i.a)(t,2),a=n[0],o=n[1],s=Object(j.b)();function u(t){e.courses1;var n=e.filter((function(e){return Object.keys(e).some((function(n){return String(e["Course Name"]).toLowerCase().includes(t.toLowerCase())||String(e["Child Subject"]).toLowerCase().includes(t.toLowerCase())||String(e["Course Id"]).toLowerCase().includes(t.toLowerCase())||String(e["Parent Subject"]).toLowerCase().includes(t.toLowerCase())||String(e.Provider).toLowerCase().includes(t.toLowerCase())||String(e["Universities/Institutions"]).toLowerCase().includes(t.toLowerCase())||String(l()(e["Next Session Date"]).format("Do MMMM, YYYY")).toLowerCase().includes(t.toLowerCase())}))}));o(n||e)}return Object(r.useEffect)((function(){s(function(){var e=Object(g.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://nut-case.s3.amazonaws.com/coursessc.json");case 2:n=e.sent,t({type:O,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(o(e))}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(C.a,{type:"flex",justify:"center",align:"middle",style:{minHeight:"10vh"},children:Object(w.jsx)(S,{id:"SearchBox",placeholder:"Search Courses",style:{width:600},onSearch:function(e){return u(e)},onChange:function(e){return u(e.target.value)},className:"search-input"})}),Object(w.jsx)(x.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:5},dataSource:a,renderItem:function(e){var t;return Object(w.jsx)(x.b.Item,{style:(t={color:"#fff",width:"760px",height:"150px",margin:"50px auto",display:"-webkit - box"},Object(c.a)(t,"display","-ms - flexbox"),Object(c.a)(t,"display","flex"),Object(c.a)(t,"maxWidth","770px"),Object(c.a)(t,"background","#00C9FF"),Object(c.a)(t,"background","-webkit-linear-gradient(to right, #92FE9D, #00C9FF)"),Object(c.a)(t,"background","-webkit-gradient(linear, left top, right top, from(#92FE9D), to(#00C9FF))"),Object(c.a)(t,"background","-webkit-linear-gradient(left, #92FE9D, #00C9FF)"),Object(c.a)(t,"background","-o-linear-gradient(left, #92FE9D, #00C9FF)"),Object(c.a)(t,"background","linear-gradient(to right, #92FE9D, #00C9FF)"),Object(c.a)(t,"boxShadow","0 0 40px rgba(0,0,0,0.3)"),t),children:Object(w.jsx)(x.b.Item.Meta,{avatar:Object(w.jsx)(m.a,{src:"https://mernlmsassets.s3.ap-south-1.amazonaws.com/Thumbnails/mechine%20learning%20-Thumbnail.png"}),title:Object(w.jsxs)("a",{href:e.Url,children:[e["Course Id"],".  ",e["Course Name"]]}),description:Object(w.jsxs)("span",{children:[Object(w.jsx)("p",{children:e["Child Subject"]}),Object(w.jsx)("p",{children:e["Universities/Institutions"]}),Object(w.jsx)("p",{children:e["Parent Subject"]})]})})},e["Course Id"])}}),","]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))},y=n(54),L=n(125),k=n(95),I={courses:[]},D=Object(y.combineReducers)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case O:return Object(k.a)(Object(k.a)({},e),{},{posts:r});default:return e}}}),E=n(126),M=Object(y.createStore)(D,Object(L.composeWithDevTools)(Object(y.applyMiddleware)(E.a)));s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(j.a,{store:M,children:Object(w.jsx)(F,{})})}),document.getElementById("root")),v()}},[[235,1,2]]]);
//# sourceMappingURL=main.911f9f81.chunk.js.map