(this.webpackJsonpfacebook=this.webpackJsonpfacebook||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(24),i=c.n(n),r=(c(78),c(16)),o=(c(79),c(80),c(28)),j=o.a.initializeApp({apiKey:"AIzaSyAynY9jxN3PyzZPYWshNPUW1CTI2tF2Tkk",authDomain:"facebook-clone-f9e44.firebaseapp.com",projectId:"facebook-clone-f9e44",storageBucket:"facebook-clone-f9e44.appspot.com",messagingSenderId:"711150827848",appId:"1:711150827848:web:e75e1d855ebd1eeb3a1b7d",measurementId:"G-19B0VPX3QF"}).firestore(),d=o.a.auth(),l=new o.a.auth.GoogleAuthProvider,b=j,p=(c(84),c(118)),u=c(48),h=c.n(u),m=c(49),O=c.n(m),f=c(50),x=c.n(f),_=c(3),g=Object(s.createContext)(),v=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(_.jsx)(g.Provider,{value:Object(s.useReducer)(t,c),children:a})},N=function(){return Object(s.useContext)(g)};var S=function(){var e=N(),t=Object(r.a)(e,2),c=t[0].user,a=(t[1],Object(s.useState)("")),n=Object(r.a)(a,2),i=n[0],j=n[1],d=Object(s.useState)(""),l=Object(r.a)(d,2),u=l[0],m=l[1];return Object(_.jsxs)("div",{className:"messageSender",children:[Object(_.jsxs)("div",{className:"messageSender__top",children:[Object(_.jsx)(p.a,{src:c.photoURL}),Object(_.jsxs)("form",{children:[Object(_.jsx)("input",{value:i,onChange:function(e){return j(e.target.value)},className:"messageSender__input",placeholder:"What's on your mind,? ".concat(c.displayName)}),Object(_.jsx)("input",{value:u,onChange:function(e){return m(e.target.value)},placeholder:"Image URL (Optional)"}),Object(_.jsx)("button",{onClick:function(e){e.preventDefault(),b.collection("posts").add({message:i,timestamp:o.a.firestore.FieldValue.serverTimestamp(),profilePic:c.photoURL,username:c.displayName,image:u}),j(""),m("")},type:"submit",children:"Hidden submit"})]})]}),Object(_.jsxs)("div",{className:"messageSender__bottom",children:[Object(_.jsxs)("div",{className:"messageSender__option",children:[Object(_.jsx)(h.a,{style:{color:"red"}}),Object(_.jsx)("h3",{children:"Live Video"})]}),Object(_.jsxs)("div",{className:"messageSender__option",children:[Object(_.jsx)(O.a,{style:{color:"green"}}),Object(_.jsx)("h3",{children:"Photo/Video"})]}),Object(_.jsxs)("div",{className:"messageSender__option",children:[Object(_.jsx)(x.a,{style:{color:"orange"}}),Object(_.jsx)("h3",{children:"Feeling/Activity"})]})]})]})},y=(c(91),c(51)),k=c.n(y),w=c(52),I=c.n(w),P=c(53),R=c.n(P),F=c(54),C=c.n(F),D=c(115);var L=function(e){var t=e.profilePic,c=e.image,s=e.username,a=(e.timestamp,e.message),n=(new Date).toLocaleString();return Object(_.jsxs)("div",{className:"post",children:[Object(_.jsxs)("div",{className:"post__top",children:[Object(_.jsx)(p.a,{src:t,className:"post__avatar"}),Object(_.jsxs)("div",{className:"post__topinfo",children:[Object(_.jsx)("h3",{children:s}),Object(_.jsx)("p",{children:n})]})]}),Object(_.jsx)("div",{className:"post__bottom",children:Object(_.jsx)("p",{children:a})}),Object(_.jsx)("div",{className:"post__image",children:Object(_.jsx)("img",{src:c,alt:""})}),Object(_.jsxs)("div",{className:"post__options",children:[Object(_.jsxs)("div",{className:"post__option",children:[Object(_.jsx)(k.a,{}),Object(_.jsx)("p",{children:"Like"})]}),Object(_.jsxs)("div",{className:"post__option",children:[Object(_.jsx)(I.a,{}),Object(_.jsx)("p",{children:"Comment"})]}),Object(_.jsxs)("div",{className:"post__option",children:[Object(_.jsx)(R.a,{}),Object(_.jsx)("p",{children:"Share"})]}),Object(_.jsxs)("div",{className:"post__option",children:[Object(_.jsx)(C.a,{}),Object(_.jsx)(D.a,{})]})]})]})};c(92);var z=function(e){var t=e.image,c=e.profileSrc,s=e.title;return Object(_.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"story",children:[Object(_.jsx)(p.a,{className:"story__avatar",src:c}),Object(_.jsx)("h4",{children:s})]})};c(93);var A=function(){var e=N(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(_.jsxs)("div",{className:"storyreal",children:[Object(_.jsx)(z,{image:c.photoURL,profileSrc:c.photoURL,title:c.displayName}),Object(_.jsx)(z,{image:"https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D",profileSrc:"https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D",title:"Rajdeep kumar"}),Object(_.jsx)(z,{image:"https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D",profileSrc:"https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D",title:"Rajdeep kumar"}),Object(_.jsx)(z,{image:"https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg",profileSrc:"https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg",title:"Rajdeep kumar"}),Object(_.jsx)(z,{image:"https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg",profileSrc:"https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg",title:"Rajdeep kumar"})]})};var U=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){b.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(_.jsxs)("div",{className:"feed",children:[Object(_.jsx)(A,{}),Object(_.jsx)(S,{}),c.map((function(e){return Object(_.jsx)(L,{profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image},e.id)})),Object(_.jsx)(L,{profilePic:"https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg",message:"wow its cool",timestamp:"timestamp",username:"Rajdeep kumar",image:""}),Object(_.jsx)(L,{profilePic:"https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg",message:"wow its cool",timestamp:"timestamp",username:"Rajdeep kumar",image:"https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"})]})},B=(c(94),c(55)),T=c.n(B),H=c(56),V=c.n(H),X=c(57),Z=c.n(X),q=c(37),E=c.n(q),M=c(58),W=c.n(M),G=c(59),J=c.n(G),Y=c(116),K=c(60),Q=c.n(K),$=c(61),ee=c.n($),te=c(62),ce=c.n(te),se=c(63),ae=c.n(se);var ne=function(){var e=N(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(_.jsxs)("div",{className:"header",children:[Object(_.jsxs)("div",{className:"header__left",children:[Object(_.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png",alt:"facebooklogo"}),Object(_.jsxs)("div",{className:"header__input",children:[Object(_.jsx)(T.a,{}),Object(_.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(_.jsxs)("div",{className:"header__center",children:[Object(_.jsx)("div",{className:"header__option\r header__option--active",children:Object(_.jsx)(V.a,{fontSize:"large"})}),Object(_.jsx)("div",{className:"header__option",children:Object(_.jsx)(Z.a,{fontSize:"large"})}),Object(_.jsx)("div",{className:"header__option",children:Object(_.jsx)(W.a,{fontSize:"large"})}),Object(_.jsx)("div",{className:"header__option",children:Object(_.jsx)(E.a,{fontSize:"large"})}),Object(_.jsx)("div",{className:"header__option",children:Object(_.jsx)(J.a,{fontSize:"large"})})]}),Object(_.jsxs)("div",{className:"header__right",children:[Object(_.jsxs)("div",{className:"header__info",children:[Object(_.jsx)(p.a,{src:c.photoURL}),Object(_.jsx)("h4",{children:c.displayName})]}),Object(_.jsx)(Y.a,{children:Object(_.jsx)(Q.a,{})}),Object(_.jsx)(Y.a,{children:Object(_.jsx)(ee.a,{})}),Object(_.jsx)(Y.a,{children:Object(_.jsx)(ce.a,{})}),Object(_.jsx)(Y.a,{children:Object(_.jsx)(ae.a,{})})]})]})},ie=(c(95),c(117)),re=c(40),oe="SET_USER",je=function(e,t){switch(console.log(t),t.type){case oe:return Object(re.a)(Object(re.a)({},e),{},{user:t.user});default:return e}};var de=function(){var e=N(),t=Object(r.a)(e,2),c=(t[0],t[1]);return Object(_.jsxs)("div",{className:"login",children:[Object(_.jsxs)("div",{className:"login__logo",children:[Object(_.jsx)("img",{src:"https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",alt:""}),Object(_.jsx)("img",{src:"https://covington-oh.gov/wp-content/uploads/2020/12/Facebook-Logo.png",alt:""})]}),Object(_.jsx)(ie.a,{type:"submit",onClick:function(){d.signInWithPopup(l).then((function(e){c({type:oe,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};c(96),c(97);var le=function(e){var t=e.src,c=e.Icon,s=e.title;return Object(_.jsxs)("div",{className:"sidebarRow",children:[t&&Object(_.jsx)(p.a,{src:t}),c&&Object(_.jsx)(c,{}),Object(_.jsx)("h4",{children:s})]})},be=c(64),pe=c.n(be),ue=c(65),he=c.n(ue),me=c(66),Oe=c.n(me),fe=c(67),xe=c.n(fe),_e=c(68),ge=c.n(_e);c(98);var ve=function(){var e=N(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"sidebar",children:[Object(_.jsx)(le,{src:c.photoURL,title:c.displayName}),Object(_.jsx)(le,{Icon:pe.a,title:"COVID-19 Information Center"}),Object(_.jsx)(le,{Icon:he.a,title:"Pages"}),Object(_.jsx)(le,{Icon:Oe.a,title:"Friends"}),Object(_.jsx)(le,{Icon:xe.a,title:"Messenger"}),Object(_.jsx)(le,{Icon:E.a,title:"MarketPlace"}),Object(_.jsx)(le,{Icon:ge.a,title:"Videos"}),Object(_.jsx)(le,{Icon:D.a,title:"MarketPlace"})]})})};c(99);var Ne=function(){return Object(_.jsx)("div",{className:"widgets",children:Object(_.jsx)("iframe",{src:"https://www.marvel.com/",width:"350",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"})})};var Se=function(){var e=N(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(_.jsx)("div",{className:"app",children:c?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(ne,{}),Object(_.jsxs)("div",{className:"app__body",children:[Object(_.jsx)(ve,{}),Object(_.jsx)(U,{}),Object(_.jsx)(Ne,{})]})]}):Object(_.jsx)(de,{})})},ye=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(v,{initialState:{user:null},reducer:je,children:Object(_.jsx)(Se,{})})}),document.getElementById("root")),ye()},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},84:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.7242d3d1.chunk.js.map