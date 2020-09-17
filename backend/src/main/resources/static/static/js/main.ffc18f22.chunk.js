(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,n){e.exports=n.p+"static/media/background.ca53060c.jpg"},238:function(e,t,n){e.exports=n(397)},243:function(e,t,n){},278:function(e,t){},280:function(e,t){},319:function(e,t){},320:function(e,t){},397:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"submitLoginForm",function(){return H}),n.d(a,"getCurrentUser",function(){return J});var r=n(0),o=n.n(r),c=n(13),i=n.n(c),l=(n(243),n(64)),u=n(35),s=n(119),m=n(101),p=n(118),d=n(102),f=n(51),g=n(152),h=n(449),b=n(435),E=n(445),w=n(436),v=n(398),j=n(434),k=n(225),y=n.n(k),O=n(90),T=n(218),S=n.n(T),x=n(18),C=function(e){return{type:"CURRENT_USER_LOADING",payload:e}},R=n(147),U=n.n(R),N=n(50),_=n(221),I=n(36),q=n.n(I),D=n(222),L=n.n(D),F=(n(274),n(223)),B=n.n(F),W=function(e){var t=A(),n=t.jwtAccessToken,a=t.jwtRefreshToken,r=t.jwtRefreshTokenExpireTime;return n?P(n,a,r,e)?M(a):n:null},z=function(e){var t=e.jwtAccessToken,n=e.jwtRefreshToken,a=e.jwtRefreshTokenExpireDate;window.localStorage.setItem("jwt_access_token",t),window.localStorage.setItem("jwt_refresh_token",n),window.localStorage.setItem("jwt_refresh_token_expire",a)},A=function(){return{jwtAccessToken:window.localStorage.getItem("jwt_access_token"),jwtRefreshToken:window.localStorage.getItem("jwt_refresh_token"),jwtRefreshTokenExpireTime:window.localStorage.getItem("jwt_refresh_token_expire")}},P=function(e,t,n,a){var r=1e3*B.a.decode(e).exp,o=(new Date).getTime();return o>r-a&&n-a>o&&t},M=function(e){return G.sendRequest("api/auth/refresh",{method:"POST",data:{jwtRefreshToken:e}}).then(function(e){return z(e),e.jwtAccessToken}).catch(function(){return window.localStorage.clear(),null})},G=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"getBlob",value:function(e,t){return this.makeRequest(e,"get",null,t,"blob")}},{key:"get",value:function(e,t){return this.makeRequest(e,"get",null,t)}},{key:"post",value:function(e,t,n){return this.makeRequest(e,"post",t,n)}},{key:"postFile",value:function(e,t,n,a){return this.makeRequest(e,"post",t,n,null,a)}},{key:"put",value:function(e,t,n){return this.makeRequest(e,"put",t,n)}},{key:"delete",value:function(e,t){return this.makeRequest(e,"delete",null,t)}},{key:"makeRequest",value:function(){var e=Object(_.a)(U.a.mark(function e(t,n,a,r,o,c){var i,l;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(i={method:n||"get",data:a,params:Object(N.a)({},r||{}),responseType:o,onUploadProgress:function(e){c&&c(Math.round(100*e.loaded/e.total))}}).timeout=6e4,"post"!==n&&"put"!==n||(i.headers={"Content-Type":"application/json"}),e.next=5,W(6e4);case 5:return(l=e.sent)&&(i.headers={Authorization:"Bearer ".concat(l)}),e.abrupt("return",this.sendRequest(t,i));case 8:case"end":return e.stop()}},e,this)}));return function(t,n,a,r,o,c){return e.apply(this,arguments)}}()},{key:"sendRequest",value:function(e,t){var n=this;return new Promise(function(a,r){L()(e,t).then(function(e){return a(e.data)}).catch(function(e){401===e.response.status&&window.localStorage.clear(),n.requestFailed(e),r(e)})})}},{key:"requestFailed",value:function(e){e.message?I.toastr.error(e.message,e.response&&e.response.data&&e.response.data.message):I.toastr.error("Error","An error has occurred")}}]),e}()),H=function(e,t,n){return function(a){e.preventDefault(),a(C(!0));var r={email:t,password:n};return G.post("/api/auth",r).then(function(e){return z(e),a(J())}).catch(function(e){a(C(!1)),window.localStorage.clear(),I.toastr.error("Login error",e.response.data.message)})}},J=function(){return function(e){return e(C(!0)),G.get("/api/users/current").then(function(t){return e({type:"CURRENT_USER_FETCHED",payload:t})}).catch(function(e){return I.toastr.error("Error",e)}).finally(function(){e(C(!1))})}},V={currentUser:null,isCurrentUserLoading:!0},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_USER_FETCHED":return Object(N.a)({},e,{currentUser:t.payload});case"CURRENT_USER_LOADING":return Object(N.a)({},e,{isCurrentUserLoading:t.payload});default:return Object(N.a)({},e)}},K=n(433),Q=n(47),X=n.n(Q),Y=X()(function(e){return{preloader:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",backgroundColor:e.palette.background.default}}}),Z=function(e){var t=Y();return o.a.createElement("div",{className:t.preloader},o.a.createElement(K.a,null))},ee=X()(function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(".concat(S.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},imageWrapper:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",backgroundColor:"rgba(0, 0, 0, 0.7)"},imageTitle:{margin:"0 0 0 150px",color:"white",fontSize:"40px",fontWeight:700},imageText:{margin:"0 0 0 150px",color:"white",fontSize:"25px"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},forgot:{margin:e.spacing(0,0,2)}}}),te=function(e){var t=Object(r.useState)(""),n=Object(g.a)(t,2),c=n[0],i=n[1],l=Object(r.useState)(""),u=Object(g.a)(l,2),s=u[0],m=u[1],p=ee(),d=Object(x.useSelector)(function(e){return e.users.currentUser}),k=Object(x.useSelector)(function(e){return e.users.isCurrentUserLoading}),T=Object(x.useDispatch)();return k?o.a.createElement(Z,null):d?o.a.createElement(f.a,{to:"/"}):o.a.createElement(j.a,{container:!0,className:p.root},o.a.createElement(j.a,{item:!0,xs:1,sm:6,md:8,lg:9,className:p.image},o.a.createElement("div",{className:p.imageWrapper},o.a.createElement("h2",{className:p.imageTitle},"Sport statistic application!"))),o.a.createElement(j.a,{item:!0,xs:11,sm:6,md:4,lg:3,component:v.a,elevation:6,square:!0},o.a.createElement("div",{className:p.paper},o.a.createElement(h.a,{className:p.avatar},o.a.createElement(y.a,null)),o.a.createElement(O.a,{component:"h1",variant:"h5"},"Login to your account"),o.a.createElement("form",{className:p.form,noValidate:!0,onSubmit:function(e){return function(e,t,n){return T(a.submitLoginForm(e,t,n))}(e,c,s)}},o.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"username",autoComplete:"email",autoFocus:!0,onChange:function(e){return i(e.target.value)},value:c}),o.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return m(e.target.value)},value:s}),o.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:c.length<3||s.length<3,className:p.submit},"Sign In"),o.a.createElement(b.a,{fullWidth:!0,variant:"contained",color:"secondary",className:p.forgot},"Forgot Password"),o.a.createElement(j.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement(j.a,{item:!0},o.a.createElement(w.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up")))))))},ne=n(447),ae=n(440),re=n(441),oe=n(443),ce=n(442),ie=n(62),le=n.n(ie),ue=n(230),se=n.n(ue),me=n(437),pe=n(438),de=n(439),fe="VIEW",ge=n(151),he=n.n(ge),be=function(e,t){return e.permissions.includes(t)},Ee=n(40),we=X()({link:{color:"inherit",textDecoration:"none"}}),ve=function(e){var t=e.to,n=e.children,a=we();return o.a.createElement(Ee.b,{to:t,className:a.link},n)},je=function(e){var t=Object(x.useSelector)(function(e){return e.users.currentUser});return o.a.createElement("div",null,be(t,fe)&&o.a.createElement(ve,{to:"/football"},o.a.createElement(me.a,{button:!0,alignItems:"center"},o.a.createElement(pe.a,null,o.a.createElement(he.a,null)),o.a.createElement(de.a,{primary:"Football"}))),be(t,fe)&&o.a.createElement(ve,{to:"/basketball"},o.a.createElement(me.a,{button:!0,alignItems:"center"},o.a.createElement(pe.a,null,o.a.createElement(he.a,null)),o.a.createElement(de.a,{primary:"Basketball"}))))},ke=function(){return o.a.createElement(o.a.Fragment,null,"This is starting point for implementing page!")},ye=function(){return o.a.createElement(o.a.Fragment,null,"This is starting point for implementing page!")},Oe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.user;return o.a.createElement(f.d,null,o.a.createElement(Te,{authorized:be(e,fe),path:"/football",component:ke}),o.a.createElement(Te,{authorized:be(e,fe),path:"/basketball",component:ye}))}}]),t}(r.Component),Te=function(e){var t=e.component,n=e.authorized,a=Object(d.a)(e,["component","authorized"]);return o.a.createElement(f.b,Object.assign({},a,{render:function(e){return n?o.a.createElement(f.b,Object.assign({component:t},e)):o.a.createElement(f.a,{to:"/login"})}}))},Se=Object(f.g)(Object(x.connect)(function(e){return{user:e.users.currentUser}})(Oe)),xe=X()(function(e){return{root:{display:"flex"},toolbar:{display:"flex",justifyContent:"flex-end"},toolbarText:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"center",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3),height:"100vh",overflow:"auto"}}}),Ce=Object(f.g)(function(){var e=xe();return o.a.createElement("div",{className:e.root},o.a.createElement(ae.a,{position:"absolute",className:le()(e.appBar,e.appBarShift)},o.a.createElement(re.a,{className:e.toolbar},o.a.createElement(ce.a,{onClick:function(){window.localStorage.clear(),window.location.reload()},color:"inherit",alt:"Log out"},o.a.createElement(se.a,null)))),o.a.createElement(ne.a,{variant:"permanent",classes:{paper:le()(e.drawerPaper)}},o.a.createElement("div",{className:e.toolbarText},"Hello!"),o.a.createElement(oe.a,null),o.a.createElement(je,null),o.a.createElement(oe.a,null)),o.a.createElement("main",{className:e.content},o.a.createElement("div",{className:e.appBarSpacer}),o.a.createElement(Se,null)))}),Re=function(e){var t=e.component,n=e.authenticated,a=Object(d.a)(e,["component","authenticated"]);return o.a.createElement(f.b,Object.assign({},a,{render:function(e){return n?o.a.createElement(t,e):o.a.createElement(f.a,{to:"/login"})}}))},Ue=Object(f.g)(Object(x.connect)(function(e){return{currentUser:e.users.currentUser}})(function(e){var t=e.currentUser;return o.a.createElement(f.d,null,o.a.createElement(f.b,{path:"/login",component:te}),o.a.createElement(Re,{path:"/",component:Ce,authenticated:!!t}))})),Ne=n(444),_e=function(e){return o.a.createElement(q.a,{timeOut:5e3,newestOnTop:!0,preventDuplicates:!0,position:"bottom-left",transitionIn:"fadeIn",transitionOut:"fadeOut",progressBar:!0,closeOnToastrClick:!0})},Ie=n(214),qe=n(233),De=n(85),Le=n.n(De),Fe=n(84),Be=n.n(Fe),We=Object(qe.a)({palette:{type:"dark",primary:{light:Le.a[300],main:Le.a[700],dark:Le.a[800]},secondary:{light:Be.a[300],main:Be.a[700],dark:Be.a[800]}},overrides:{MuiTableBody:{root:{fontSize:12}},MuiTableCell:{root:{fontSize:"inherit"}}}}),ze=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){return this.props.isCurrentUserLoading?o.a.createElement(Ie.a,{theme:We},o.a.createElement(Z,null)):o.a.createElement(Ie.a,{theme:We},o.a.createElement(Ne.a,null),o.a.createElement(Ue,null),o.a.createElement(_e,null))}}]),t}(r.Component),Ae=Object(f.g)(Object(x.connect)(function(e){return{currentUser:e.users.currentUser,isCurrentUserLoading:e.users.isCurrentUserLoading}},function(e){return{getCurrentUser:function(){return e(a.getCurrentUser())}}})(ze));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=n(46),Me=Object(Pe.combineReducers)({users:$,toastr:I.reducer}),Ge=n(231),He=n(232),Je=Object(Pe.createStore)(Me,Object(Ge.composeWithDevTools)(Object(Pe.applyMiddleware)(He.a)));i.a.render(o.a.createElement(x.Provider,{store:Je},o.a.createElement(Ee.a,null,o.a.createElement(Ae,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[238,1,2]]]);
//# sourceMappingURL=main.ffc18f22.chunk.js.map