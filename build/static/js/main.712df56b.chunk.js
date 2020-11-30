(this.webpackJsonprobot_friends=this.webpackJsonprobot_friends||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n.n(r),i=n(7),s=n.n(i),a=n(8),u=n(6),l=n(16),d=n(17),h=(n(28),n(2)),b=n(3),f=n(5),j=n(4),g=(n(29),function(e){var t=e.id,n=e.name,r=e.email;return Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("p",{children:r})]})]})}),p=function(e){var t=e.robots;return console.log("CardList"),Object(o.jsx)("div",{className:"tc",children:t.map((function(e,n){return Object(o.jsx)(g,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},v=function(e){var t=e.searchField,n=e.searchChange;return console.log("searchbox"),Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search for robots",value:t,onChange:n})})},O=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"750px"},children:e.children})},m=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){var e=this.state.count;return Object(o.jsx)("button",{onClick:this.updateCount,color:this.props.color,children:e})}}]),n}(r.Component),w=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return console.log("header"),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"f1",children:"Robots friends"}),Object(o.jsx)(m,{color:"red"})]})}}]),n}(r.Component),x="CHANGE_SEARCHFIELD",y="REQUEST_ROBOTS_PENDING",C="REQUEST_ROBOTS_SUCCESS",R="REQUEST_ROBOTS_FAILED",S=function(){return function(e){var t;e({type:y}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:C,payload:t})})).catch((function(t){return e({type:R,payload:t})}))}},k=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this,e)).state={robots:[]},o}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,c=e.isPending;console.log(this.props);var i=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(o.jsx)("h1",{children:"Loading"}):Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(w,{}),Object(o.jsx)(v,{searchField:t,searchChange:n}),Object(o.jsx)(O,{children:Object(o.jsx)(p,{robots:i})})]})}}]),n}(r.Component),E=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,console.log(),{type:x,payload:n}));var n},onRequestRobots:function(){return e(S())}}}))(k),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=n(13),P={searchField:""},T={isPending:!1,robots:[],error:""},q=(n(30),Object(l.createLogger)(),Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t),t.type){case x:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(_.a)(Object(_.a)({},e),{},{isPending:!0});case C:return Object.assign({},e,{robots:t.payload,isPending:!1});case R:return Object.assign({},e,{error:t.payload},{isPending:!1});default:return e}}})),B=Object(u.d)(q,Object(u.a)(d.a));s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(a.a,{store:B,children:Object(o.jsx)(E,{})})}),document.getElementById("root")),F(),function(){if("serviceWorker"in navigator){if(new URL("/robots_friend",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robots_friend","/service-worker.js");L?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.712df56b.chunk.js.map