(this["webpackJsonpreact-redux-crud-app"]=this["webpackJsonpreact-redux-crud-app"]||[]).push([[0],{101:function(t,e,c){},105:function(t,e,c){},107:function(t,e,c){"use strict";c.r(e);var n,r,a,s,i,o,l,d,j,u,h,b,p,x,O,f,g=c(0),m=c.n(g),v=c(21),w=c.n(v),y=(c(77),c(14)),P=c(13),E=c(10),N=c.n(E),k=c(16),C=c(17),L=c.n(C),T=c(4),S="SET_PRODUCTS_CAT",z="SET_PRODUCTS",_="SELECTED_PRODUCT",D="REMOVE_SELECTED_PRODUCT",q=function(t){return{type:z,payload:t}},F=function(t){return{type:S,payload:t}},U=function(t){return{type:_,payload:t}},I=c(8),R=c(9),W=c(1),M=m.a.lazy((function(){return c.e(3).then(c.bind(null,118))})),X=m.a.lazy((function(){return c.e(4).then(c.bind(null,119))})),B=m.a.lazy((function(){return c.e(5).then(c.bind(null,120))})),V=m.a.lazy((function(){return Promise.resolve().then(c.bind(null,51))})),A=(R.a.div(n||(n=Object(I.a)(["\n.card-horizontal{\ndisplay: flex;\nflex-direction:row;\n}\n.imgsmall{\n  width:100px;\n  height:100px;\n}\n"]))),function(){console.log(Object(T.c)((function(t){return t})));Object(T.c)((function(t){return t.allProducts.products})),Object(T.c)((function(t){return t.catallProducts.catproducts}));return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"row",children:[Object(W.jsx)("div",{className:"col-md-4",children:Object(W.jsx)(B,{})}),Object(W.jsx)("div",{className:"col-md-4",children:Object(W.jsx)(g.Suspense,{fallback:Object(W.jsx)("div",{children:"Loading..."}),children:Object(W.jsx)(M,{})})}),Object(W.jsx)("div",{className:"col-md-4",children:Object(W.jsx)(g.Suspense,{fallback:Object(W.jsx)("div",{children:"Loading..."}),children:Object(W.jsx)(X,{})})})]}),Object(W.jsx)(V,{})]})}),H=R.a.div(r||(r=Object(I.a)(["\n.ui.grid.container {\n    padding-bottom: 20px;\n}\n"]))),J=function(){var t=Object(T.c)((function(t){return t.allProducts.products})),e=Object(T.c)((function(t){return t.catallProducts.catproducts})),c=Object(T.b)(),n=function(){var t=Object(k.a)(N.a.mark((function t(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("https://www.livenewscafe.com/php-react-post-list/all-users.php").catch((function(t){console.log("Err: ",t)}));case 2:e=t.sent,console.log(e.data),c(q(e.data));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var t=Object(k.a)(N.a.mark((function t(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("https://www.livenewscafe.com/php-react-post-list/category-wise-allusers.php").catch((function(t){console.log("Err: ",t)}));case 2:e=t.sent,c(F(e.data));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.useEffect)((function(){n(),r()}),[]),console.log("Products :",t),console.log("Products :",e),Object(W.jsx)(H,{children:Object(W.jsx)("div",{className:"ui grid container",children:Object(W.jsx)(A,{})})})},G=(c(101),c(116)),K=c(109),Q=function(){var t=Object(P.f)().id,e=R.a.div(a||(a=Object(I.a)(["\n .card-text{\n  font-size: 19px;\n  text-overflow: ellipsis;\n  white-space: inherit;\n  overflow: hidden;\n  width: 900px;\n  \n  line-height: 40px;\n}\n "]))),c=Object(T.c)((function(t){return t.product})),n=(c.CategoryName,c.subCategoryName,c.PostTitle),r=c.PostDetails,s=(c.PostUrl,Object(T.b)()),i=function(){var t=Object(k.a)(N.a.mark((function t(e){var c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("https://www.livenewscafe.com/php-react-post-list/getidallusers.php/?id="+"".concat(e)).catch((function(t){console.log("Err: ",t)}));case 2:c=t.sent,s(U(c.data.users[0])),console.log(c.data.users);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.useEffect)((function(){return t&&""!==t&&i(t),function(){s({type:D})}}),[t]),Object(W.jsx)(e,{children:Object(W.jsx)("div",{className:"ui grid container",children:0===Object.keys(c).length?Object(W.jsx)("div",{children:"...Loading"}):Object(W.jsxs)(G.a,{className:"mb-5",children:[Object(W.jsx)(G.a.Header,{as:"h5",children:n}),Object(W.jsxs)(G.a.Body,{children:[Object(W.jsx)(G.a.Title,{children:n}),Object(W.jsx)(G.a.Text,{children:r}),Object(W.jsx)(K.a,{variant:"primary",children:"Go somewhere"})]})]})})})},Y=c(114),Z=c(110),$=c(115),tt=function(){return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(Y.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(W.jsxs)(Z.a,{children:[Object(W.jsx)(Y.a.Brand,{href:"/",children:"LiveNewscafe"}),Object(W.jsx)(Y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(W.jsx)(Y.a.Collapse,{id:"responsive-navbar-nav",children:Object(W.jsxs)($.a,{className:"me-auto",children:[Object(W.jsx)($.a.Link,{href:"/India",children:"India"}),Object(W.jsx)($.a.Link,{href:"/World",children:"World"}),Object(W.jsx)($.a.Link,{href:"/Technology",children:"Technology"}),Object(W.jsx)($.a.Link,{href:"/Entertainment",children:"Entertainment"})]})})]})})})},et=(c(51),function(t){var e=t.color;return Object(W.jsx)("hr",{style:{color:e,backgroundColor:e,height:5,width:150,margin:20}})}),ct=R.a.div(s||(s=Object(I.a)(["\n\n.imgsmall{\n  width:200px;\n  height:100px;\n}\n"]))),nt=R.a.div(i||(i=Object(I.a)(["\n.container.contindia {\n    margin: 40px;\n}\n.square {\n    display: flex;\n    width: 100px;\n    height: 20px;\n\n    margin:-15px 20px;\n  }\n  p.text {\n    margin: 0 40px;\n    font-family: 'Outfit', sans-serif;\n    font-weight: 900;\n    font-size: x-large;\n}\n  "]))),rt=function(){var t=Object(T.c)((function(t){return t.allProducts.products}));return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(nt,{children:[Object(W.jsx)(et,{color:"red"}),Object(W.jsx)("div",{class:"square",children:Object(W.jsx)("p",{class:"text",children:"Entertainment"})}),Object(W.jsx)("div",{class:"container contindia",children:Object(W.jsx)("div",{class:"row",children:t.filter((function(t){return""!=t.PostList&"Entertainment"==t.CategoryName})).map((function(t){var e=t.id,c=t.CategoryName,n=(t.subCategoryName,t.PostTitle,t.PostDetails),r=t.PostUrl;t.PostPosition;return Object(W.jsx)("div",{class:"col-sm-4 col-md-4 col-lg-4",children:Object(W.jsx)(y.b,{to:"/product/".concat(e),children:Object(W.jsxs)("div",{class:"card",children:[Object(W.jsx)(ct,{children:Object(W.jsxs)("div",{class:"card-horizontal",children:[Object(W.jsx)("div",{class:"img-square-wrapper",children:Object(W.jsx)("img",{class:"imgsmall",src:r,alt:"Card image cap"})}),Object(W.jsxs)("div",{class:"card-body",children:[Object(W.jsx)("h4",{class:"card-title",children:c}),Object(W.jsx)("p",{class:"card-text",children:n})]})]})}),Object(W.jsx)("div",{class:"card-footer",children:Object(W.jsx)("small",{class:"text-muted",children:"Last updated 3 mins ago"})})]})})})}))})})]})})},at=(R.a.div(o||(o=Object(I.a)(["\n.card-horizontal{\ndisplay: flex;\nflex-direction:row;\n}\n.imgsmall{\n  width:100px;\n  height:100px;\n}\n"]))),function(){console.log(Object(T.c)((function(t){return t}))+"dsfd");Object(T.c)((function(t){return t.allProducts.products})),Object(T.c)((function(t){return t.catallProducts.catproducts}));var t=Object(T.b)(),e=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://www.catchmyjob.in/php-react-post-list/all-users.php").catch((function(t){console.log("Err: ",t)}));case 2:c=e.sent,t(q(c.data.users));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://www.catchmyjob.in/php-react-post-list/category-wise-allusers.php?cat=".concat("Sports")).catch((function(t){console.log("Err: ",t)}));case 2:c=e.sent,t(F(c.data.users));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){e(),c()}),[]),Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"row",children:Object(W.jsx)(rt,{})})})}),st=c(12),it=c(111),ot=(c(105),function(t){var e=t.color;return Object(W.jsx)("hr",{style:{color:e,backgroundColor:e,height:5,width:150,margin:20}})}),lt=R.a.div(l||(l=Object(I.a)(["\n\n.imgsmall{\n  width:100%;\n height:250px; \n}\n"]))),dt=R.a.div(d||(d=Object(I.a)(["\n.container.contindia {\n    margin: 40px;\n}\n.square {\n    display: flex;\n    width: 100px;\n    height: 20px;\n\n    margin:-15px 20px;\n  }\n  p.text {\n    margin: 0 40px;\n    font-family: 'Outfit', sans-serif;\n    font-weight: 900;\n    font-size: x-large;\n}\n  "]))),jt=function(){console.log(Object(T.c)((function(t){return t})));var t=Object(T.c)((function(t){return t.allProducts.products})),e=Object(g.useState)(!0),c=Object(st.a)(e,2),n=c[0];c[1];return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(dt,{children:[Object(W.jsx)(ot,{color:"red"}),Object(W.jsx)("div",{class:"square",children:Object(W.jsx)("p",{class:"text",children:"India"})}),Object(W.jsx)("div",{class:"container contindia",children:Object(W.jsxs)("div",{class:"row",children:[" ",t.filter((function(t){return""==t.PostList&"India"==t.CategoryName})).map((function(t){var e=t.id,c=t.CategoryName,r=(t.subCategoryName,t.PostTitle,t.PostDetails),a=t.PostUrl,s=(t.PostPosition,n?r.slice(0,100):r);return Object(W.jsx)("div",{class:"col",children:Object(W.jsx)(y.b,{to:"/product/".concat(e),children:Object(W.jsxs)("div",{class:"card",children:[Object(W.jsx)(lt,{children:Object(W.jsxs)("div",{class:"card-horizontal",children:[Object(W.jsx)("div",{class:"img-square-wrapper",children:Object(W.jsx)("img",{class:"imgsmall",src:a,alt:"Card image cap"})}),Object(W.jsxs)("div",{class:"card-body",children:[Object(W.jsx)("h4",{class:"card-title",children:c}),Object(W.jsx)(y.b,{to:"/product/".concat(e),children:Object(W.jsx)("p",{class:"card-text",children:s})}),Object(W.jsx)(y.b,{to:"/product/".concat(e),children:Object(W.jsx)(it.a,{bg:"primary",children:"Read More"})})]})]})}),Object(W.jsx)("div",{class:"card-footer",children:Object(W.jsx)("small",{class:"text-muted",children:"Last updated 3 mins ago"})})]})})})}))]})})]})})},ut=(R.a.div(j||(j=Object(I.a)(["\n.card-horizontal{\ndisplay: flex;\nflex-direction:row;\n}\n.imgsmall{\n  width:100px;\n  height:100px;\n}\n"]))),function(){console.log(Object(T.c)((function(t){return t}))+"dsfd");Object(T.c)((function(t){return t.allProducts.products})),Object(T.c)((function(t){return t.catallProducts.catproducts}));var t=Object(T.b)(),e=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://www.catchmyjob.in/php-react-post-list/all-users.php").catch((function(t){console.log("Err: ",t)}));case 2:c=e.sent,t(q(c.data.users));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://www.catchmyjob.in/php-react-post-list/category-wise-allusers.php?cat=".concat("Sports")).catch((function(t){console.log("Err: ",t)}));case 2:c=e.sent,t(F(c.data.users));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){e(),c()}),[]),Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"row",children:Object(W.jsx)(jt,{})})})}),ht=R.a.div(u||(u=Object(I.a)(["\n\n.imgsmall{\n  width:200px;\n  height:100px;\n}\n"]))),bt=function(t){var e=t.color;return Object(W.jsx)("hr",{style:{color:e,backgroundColor:e,height:5,width:150,margin:20}})},pt=R.a.div(h||(h=Object(I.a)(["\n.container.contindia {\n    margin: 40px;\n}\n.square {\n    display: flex;\n    width: 100px;\n    height: 20px;\n\n    margin:5px 20px;\n  }\n  p.text {\n    margin: -10px 10px;\n    font-family: 'Outfit', sans-serif;\n    font-weight: 900;\n    font-size: x-large;\n}\n  "]))),xt=function(){var t=Object(T.c)((function(t){return t.allProducts.products}));return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(pt,{children:[Object(W.jsx)(bt,{color:"red"}),Object(W.jsx)("div",{class:"square",children:Object(W.jsx)("p",{class:"text",children:"Technology"})}),Object(W.jsx)("div",{class:"container",children:Object(W.jsx)("div",{class:"row",children:t.filter((function(t){return""!=t.PostList&"Technology"==t.CategoryName})).map((function(t){var e=t.id,c=t.CategoryName,n=(t.subCategoryName,t.PostTitle,t.PostDetails),r=t.PostUrl;t.PostPosition;return Object(W.jsx)("div",{class:"col",children:Object(W.jsx)(y.b,{to:"/product/".concat(e),children:Object(W.jsxs)("div",{class:"card",children:[Object(W.jsx)(ht,{children:Object(W.jsxs)("div",{class:"card-horizontal",children:[Object(W.jsx)("div",{class:"img-square-wrapper",children:Object(W.jsx)("img",{class:"imgsmall",src:r,alt:"Card image cap"})}),Object(W.jsxs)("div",{class:"card-body",children:[Object(W.jsx)("h4",{class:"card-title",children:c}),Object(W.jsx)("p",{class:"card-text",children:n})]})]})}),Object(W.jsx)("div",{class:"card-footer",children:Object(W.jsx)("small",{class:"text-muted",children:"Last updated 3 mins ago"})})]})})})}))})})]})})},Ot=(R.a.div(b||(b=Object(I.a)(["\n.card-horizontal{\ndisplay: flex;\nflex-direction:row;\n}\n.imgsmall{\n  width:100px;\n  height:100px;\n}\n"]))),function(){console.log(Object(T.c)((function(t){return t}))+"dsfd");Object(T.c)((function(t){return t.allProducts.products})),Object(T.c)((function(t){return t.catallProducts.catproducts}));var t=Object(T.b)(),e=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://www.catchmyjob.in/php-react-post-list/all-users.php").catch((function(t){console.log("Err: ",t)}));case 2:c=e.sent,t(q(c.data.users));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,L.a.get("https://www.catchmyjob.in/php-react-post-list/category-wise-allusers.php?cat=".concat("Sports")).catch((function(t){console.log("Err: ",t)}));case 3:c=e.sent,t(F(c.data.users));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){e(),c()}),[]),Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:"row",children:Object(W.jsx)(xt,{})})})}),ft=R.a.div(p||(p=Object(I.a)(["\n\n.imgsmall{\n  width:100%;\n height:250px; \n}\n"]))),gt=function(t){var e=t.color;return Object(W.jsx)("hr",{style:{color:e,backgroundColor:e,height:5,width:150,margin:20}})},mt=R.a.div(x||(x=Object(I.a)(["\n.container.contindia {\n    margin: 40px;\n\n}\n.square {\n    display: flex;\n    width: 100px;\n    height: 20px;\n\n    margin:5px 20px;\n  }\n  p.text {\n    margin: -10px 10px;\n    font-family: 'Outfit', sans-serif;\n    font-weight: 900;\n    font-size: x-large;\n}\n  \nspan.badge.bg-primary {\n    cursor: pointer;\n}\n"]))),vt=function(){var t=Object(T.c)((function(t){return t.allProducts.products})),e=Object(g.useState)(!0),c=Object(st.a)(e,2),n=c[0];c[1];return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(mt,{children:[Object(W.jsx)(gt,{color:"red"}),Object(W.jsx)("div",{class:"square",children:Object(W.jsx)("p",{class:"text",children:"World"})}),Object(W.jsx)("div",{class:"container",children:Object(W.jsx)("div",{class:"row",children:t.filter((function(t){return""!=t.PostList&"World"==t.CategoryName})).map((function(t){var e=t.id,c=t.CategoryName,r=(t.subCategoryName,t.PostTitle,t.PostDetails),a=t.PostUrl,s=(t.PostPosition,n?r.slice(0,100):r);return Object(W.jsx)("div",{class:"col-sm-12 col-md-4",children:Object(W.jsxs)("div",{class:"card h-50",children:[Object(W.jsx)(ft,{children:Object(W.jsxs)("div",{class:"card-horizontal",children:[Object(W.jsx)("div",{class:"img-square-wrapper",children:Object(W.jsx)("img",{class:"imgsmall",src:a,alt:"Card image cap"})}),Object(W.jsxs)("div",{class:"card-body",children:[Object(W.jsx)("h4",{class:"card-title",children:c}),Object(W.jsx)(y.b,{to:"/product/".concat(e),children:Object(W.jsx)("p",{class:"card-text",children:s})}),Object(W.jsx)(y.b,{to:"/product/".concat(e),children:Object(W.jsx)(it.a,{bg:"primary",children:"Read More"})})]})]})}),Object(W.jsx)("div",{class:"card-footer",children:Object(W.jsx)("small",{class:"text-muted",children:"Last updated 3 mins ago"})})]})})}))})})]})})},wt=(R.a.div(O||(O=Object(I.a)(["\n.card-horizontal{\ndisplay: flex;\nflex-direction:row;\n}\n.imgsmall{\n  width:100%;\n\n}\n"]))),function(){console.log(Object(T.c)((function(t){return t}))+"dsfd");Object(T.c)((function(t){return t.allProducts.products})),Object(T.c)((function(t){return t.catallProducts.catproducts}));var t=Object(T.b)(),e=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://www.catchmyjob.in/php-react-post-list/all-users.php").catch((function(t){console.log("Err: ",t)}));case 2:c=e.sent,t(q(c.data.users));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(k.a)(N.a.mark((function e(){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://www.catchmyjob.in/php-react-post-list/category-wise-allusers.php?cat=".concat("Sports")).catch((function(t){console.log("Err: ",t)}));case 2:c=e.sent,t(F(c.data.users));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){e(),c()}),[]),Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(vt,{})})}),yt=c(112),Pt=c(113),Et=c(117),Nt=R.a.div(f||(f=Object(I.a)(["\npadding-bottom:10px;\n.ftr{\npadding-top:30px;\npadding-bottom:20px;\nbackground-color:#212529;\n}\n"]))),kt=function(){return Object(W.jsx)(Nt,{children:Object(W.jsx)("div",{class:"ftr",children:Object(W.jsx)(Z.a,{class:"contftr",children:Object(W.jsxs)(yt.a,{children:[Object(W.jsx)(Pt.a,{children:Object(W.jsxs)(Et.a,{children:[Object(W.jsx)($.a.Link,{href:"/",children:"Home"}),Object(W.jsx)($.a.Link,{href:"/India",children:"India"}),Object(W.jsx)($.a.Link,{href:"/World",children:"World"}),Object(W.jsx)($.a.Link,{href:"/Technology",children:"Technology"}),Object(W.jsx)($.a.Link,{href:"/Entertainment",children:"Entertainment"})]})}),Object(W.jsx)(Pt.a,{})]})})})})};var Ct=function(){return Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(tt,{}),Object(W.jsx)(g.Suspense,{fallback:Object(W.jsx)("div",{children:"Loading..."}),children:Object(W.jsx)(y.a,{children:Object(W.jsxs)(P.c,{children:[Object(W.jsx)(P.a,{path:"/",exact:!0,component:J}),Object(W.jsx)(P.a,{path:"/Entertainment",component:at}),Object(W.jsx)(P.a,{path:"/India",exact:!0,component:ut}),Object(W.jsx)(P.a,{path:"/Technology",exact:!0,component:Ot}),Object(W.jsx)(P.a,{path:"/World",exact:!0,component:wt}),Object(W.jsx)(P.a,{path:"/product/:id",component:Q}),Object(W.jsx)(P.a,{children:"404 Not Found!"})]})})}),Object(W.jsx)(kt,{})]})},Lt=c(35),Tt=c(2),St={products:[]},zt={catproducts:[]},_t=Object(Lt.b)({allProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case z:return Object(Tt.a)(Object(Tt.a)({},t),{},{products:n});default:return t}},catallProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case S:return Object(Tt.a)(Object(Tt.a)({},t),{},{catproducts:n});default:return t}},product:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case _:return Object(Tt.a)(Object(Tt.a)({},t),n);case D:return{};default:return t}}});console.log(_t.catallProducts);var Dt=_t,qt=Object(Lt.c)(Dt,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());w.a.render(Object(W.jsx)(m.a.StrictMode,{children:Object(W.jsx)(T.a,{store:qt,children:Object(W.jsx)(Ct,{})})}),document.getElementById("root"))},51:function(t,e,c){"use strict";c.r(e);var n,r=c(8),a=(c(0),c(14)),s=c(4),i=c(9),o=c(57),l=(c(72),c(1)),d=i.a.div(n||(n=Object(r.a)(["\n\n.imgsmall{\n  width:100%;\n  height:200px;\n  object-fit:cover;\n}\n"])));e.default=function(){console.log(Object(s.c)((function(t){return t})));var t=Object(s.c)((function(t){return t.allProducts.products}));return console.log(t),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{class:"row",children:t.filter((function(t){return""==t.PostList&4==t.PostPosition&"1"==t.Status})).map((function(t){var e=t.id,c=t.CategoryName,n=(t.subCategoryName,t.PostTitle),r=(t.PostDetails,t.PostUrl);t.PostPosition;return Object(l.jsx)("div",{class:"col-sm-6",children:Object(l.jsxs)("div",{class:"card",children:[Object(l.jsx)(d,{children:Object(l.jsxs)("div",{class:"card-horizontal",children:[Object(l.jsx)("div",{class:"img-square-wrapper",children:Object(l.jsx)(o.LazyLoadImage,{className:"imgsmall",src:r,effect:"blur"})}),Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsx)("h4",{class:"card-title",children:c}),Object(l.jsx)(a.b,{to:"/product/".concat(e),children:Object(l.jsx)("p",{class:"card-text",children:n})})]})]})}),Object(l.jsx)("div",{class:"card-footer",children:Object(l.jsx)("small",{class:"text-muted",children:"Last updated 3 mins ago"})})]})})}))})})}}},[[107,1,2]]]);
//# sourceMappingURL=main.f0d338f8.chunk.js.map