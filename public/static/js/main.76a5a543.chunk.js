(this.webpackJsonptally=this.webpackJsonptally||[]).push([[0],{13:function(e,t,r){e.exports={bottomWrapper:"TallyExpense_bottomWrapper__1etld",date:"TallyExpense_date__1bxxM",iconWrapper:"TallyExpense_iconWrapper__3fapK",mainWrapper:"TallyExpense_mainWrapper__39_v0",midWrapper:"TallyExpense_midWrapper__IKxp4",ownerNameWrapper:"TallyExpense_ownerNameWrapper__3hQFv",topWrapper:"TallyExpense_topWrapper__23h2l"}},14:function(e,t,r){e.exports={costInputWrapper:"Menu_costInputWrapper__1Ypg_",dateWrapper:"Menu_dateWrapper__2DJzu",descriptionWrapper:"Menu_descriptionWrapper__op6F1",formWrapper:"Menu_formWrapper__2pZop",mainWrapper:"Menu_mainWrapper__M_tz7",titleDateWrapper:"Menu_titleDateWrapper__2IE2-",titleWrapper:"Menu_titleWrapper__1PFFD",submitBtn:"Menu_submitBtn__14jO0"}},15:function(e,t,r){e.exports={appTitleWrapper:"LoginPage_appTitleWrapper__3T6m2",mainWrapper:"LoginPage_mainWrapper__sEUSR",formWrapper:"LoginPage_formWrapper__2bVHB",inputWrapper:"LoginPage_inputWrapper__2v8NI",loginInput:"LoginPage_loginInput__3zld-",loginSubmit:"LoginPage_loginSubmit__3p4-N"}},23:function(e,t,r){e.exports={mainWrapper:"NavFooter_mainWrapper__3fp08"}},30:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(21),c=r.n(s),i=(r(30),r(8)),o=r(25),l=r(4),p=a.a.createContext(),u=r(2),d={alignItems:"center",backgroundColor:"dodgerblue",color:"white",display:"flex",height:"6vh",justifyContent:"center",minHeight:"60px"},j=function(){return Object(u.jsx)("div",{style:d,children:Object(u.jsx)("h1",{children:"Tally"})})},x={alignItems:"center",display:"flex",flex:"1",flexDirection:"column",margin:"10px",textAlign:"center"},b={alignItems:"center",alignSelf:"center",backgroundColor:"white",borderRadius:"5px",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",display:"flex",height:"10%",justifyContent:"center",marginTop:"25px",padding:"10px",width:"80vw"},h={color:"gray",fontSize:"14px"},m={color:"green",fontSize:"28px",fontWeight:"bold",marginTop:"10%"},v=function(e){var t=e.data;return Object(u.jsxs)("div",{style:b,children:[Object(u.jsxs)("div",{style:x,children:[Object(u.jsx)("p",{style:h,children:"Your Expenses"}),Object(u.jsxs)("div",{style:m,children:[null===t||void 0===t?void 0:t.calculatedUserExpenses," "]})]}),Object(u.jsxs)("div",{style:x,children:[Object(u.jsx)("p",{style:h,children:"BAL"}),Object(u.jsx)("div",{id:"difference",style:m,children:(null===t||void 0===t?void 0:t.calculatedUserExpenses)-(null===t||void 0===t?void 0:t.calculatedOtherUserExpenses)||0})]}),Object(u.jsxs)("div",{style:x,children:[Object(u.jsx)("p",{style:h,children:"Their Expenses"}),Object(u.jsx)("div",{style:m,children:null===t||void 0===t?void 0:t.calculatedOtherUserExpenses})]})]})},O=r(3),f=r.n(O),g=r(6),_=r(9),y=function(e,t,r){if(void 0!==e&&void 0!==t){var n=[].concat(Object(_.a)(e),Object(_.a)(t));return"descending"===r&&n.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),n}},W=function(){var e=Object(g.a)(f.a.mark((function e(t,r){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/deleteExpense/".concat(t,"/").concat(r),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,console.log(a),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log("error in delete expense function:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(f.a.mark((function e(t){var r,n,a,s,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,fetch("/api/getExpenses/".concat(t));case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,a=n.userExpenses,s=n.otherUserExpenses,c=n.calculatedUserExpenses,i=n.calculatedOtherUserExpenses,e.abrupt("return",{userExpenses:a,otherUserExpenses:s,calculatedUserExpenses:c,calculatedOtherUserExpenses:i});case 13:e.prev=13,e.t0=e.catch(2),console.log("Error in getExpense function:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),w=r(13),E=r.n(w),S=r(22),I=function(e){var t=e.size,r=void 0===t?"20px":t,n=e.backgroundColor,a=void 0===n?"white":n,s=e.iconColor,c=void 0===s?"black":s,i=e.IconName;return Object(u.jsx)("div",{style:{display:"flex",width:r,height:r,borderRadius:parseInt(r)/2,backgroundColor:a,justifyContent:"center",alignItems:"center"},children:Object(u.jsx)(i,{color:c,size:r})})},k=r(36),T=r(37),D=function(e){var t=Object(k.a)(e);return Object(T.a)(new Date(t),"MMMM do")},C=function(e){var t=e.cost,r=e.title,n=e.date,a=e.description,s=e.clicked,c=e.ownerName;return Object(u.jsxs)("div",{className:E.a.mainWrapper,children:[Object(u.jsxs)("div",{className:E.a.ownerNameWrapper,children:["-",c,"-"]}),Object(u.jsxs)("div",{className:E.a.topWrapper,children:[Object(u.jsx)("div",{className:E.a.date,children:D(n)}),Object(u.jsx)("div",{className:E.a.iconWrapper,onClick:s,children:Object(u.jsx)(I,{IconName:S.a,size:"15",iconColor:"red"})})]}),Object(u.jsxs)("div",{className:E.a.midWrapper,children:[Object(u.jsx)("div",{className:E.a.title,children:(null===r||void 0===r?void 0:r.length)>1?r:"No Title"}),Object(u.jsxs)("div",{children:["Amount: ",t]})]}),Object(u.jsx)("div",{className:E.a.bottomWrapper,children:Object(u.jsx)("p",{children:a})})]})},M={alignItems:"center",paddingTop:"20px"},U={alignItems:"center",display:"flex",flexDirection:"column",maxHeight:"65vh",overflow:"scroll"},P=function(e){var t=e.data,r=e.userId,n=e.setData,a=[],s=y(null===t||void 0===t?void 0:t.userExpenses,null===t||void 0===t?void 0:t.otherUserExpenses,"descending"),c=function(){var e=Object(g.a)(f.a.mark((function e(t,r){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t,r);case 2:return e.next=4,N(t);case 4:a=e.sent,n(a);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return null===s||void 0===s||s.forEach((function(e,t){a.push(Object(u.jsx)(C,{cost:e.cost,title:e.title,date:e.date,description:e.description,ownerName:e.ownerName,clicked:function(){return c(r,e._id)}},t))})),Object(u.jsx)("div",{style:M,children:Object(u.jsx)("div",{style:U,children:a})})},F={display:"flex",flexDirection:"column",height:"100vh"},z=function(e){var t=e.data,r=e.setData,a=Object(n.useContext)(p);return Object(u.jsxs)("div",{style:F,children:[Object(u.jsx)(v,{data:t}),Object(u.jsx)(P,{data:t,userId:null===a||void 0===a?void 0:a.user._id,userName:null===a||void 0===a?void 0:a.user.userName,setData:r})]})},L=r(16),q=r(14),B=r.n(q),J=r(19),A=function(){var e=Object(g.a)(f.a.mark((function e(t,r){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.userId=r,e.prev=1,e.next=4,fetch("/api/addExpense",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",{data:a,response:n});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,r){return e.apply(this,arguments)}}(),H=function(e){var t,r=e.setData,a=e.style,s=Object(n.useContext)(p),c=Object(J.a)(),i=c.register,o=c.handleSubmit,l=c.reset,d=c.formState.errors,j=function(){var e=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,s.user._id);case 2:return e.next=4,N(s.user._id);case 4:n=e.sent,r(n),l();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:B.a.mainWrapper,style:a,children:Object(u.jsxs)("form",{id:"form",className:B.a.formWrapper,onSubmit:o((function(e){return j(e)})),children:[Object(u.jsxs)("div",{className:B.a.costInputWrapper,children:[Object(u.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(u.jsx)("input",Object(L.a)({type:"number",id:"number-input",inputMode:"numeric",placeholder:"Cost (required)",name:"cost"},i("cost",{required:!0}))),"required"===(null===(t=d.cost)||void 0===t?void 0:t.type)&&"Cost is required"]}),Object(u.jsxs)("div",{className:B.a.titleDateWrapper,children:[Object(u.jsxs)("div",{className:B.a.titleWrapper,children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title "}),Object(u.jsx)("input",Object(L.a)({type:"text",id:"title-input",name:"title",placeholder:"Title"},i("title")))]}),Object(u.jsxs)("div",{className:B.a.dateWrapper,children:[Object(u.jsx)("label",{style:{opacity:"1",color:"white"},htmlFor:"date",children:"Date"}),Object(u.jsx)("input",Object(L.a)({type:"date",id:"date-picker",name:"date"},i("date")))]})]}),Object(u.jsxs)("div",{className:B.a.descriptionWrapper,children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("textarea",Object(L.a)({cols:"15",rows:"2",id:"textarea-input",placeholder:"Description",name:"description"},i("description")))]}),Object(u.jsx)("input",{className:B.a.submitBtn,id:"submitBtn",type:"submit",value:"Submit Expense"})]})})},R=r(23),K=r.n(R),Y=r(24),Q=function(e){var t=e.clicked;return Object(u.jsx)("div",{id:"burger",className:K.a.mainWrapper,children:Object(u.jsx)("div",{onClick:t,children:Object(u.jsx)(I,{IconName:Y.a,size:30})})})},V=function(e){var t=Object(n.useState)([]),r=Object(i.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),l=o[0],p=o[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),j=d[0],x=d[1],b=function(){var t=Object(g.a)(f.a.mark((function t(){var r,n=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,e.apply(void 0,n);case 4:r=t.sent,x(!1),p(!1),s(r),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log("error in useAPi hook:",t.t0),t.abrupt("return",p(!0));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return{data:a,setData:s,error:l,loading:j,request:b}},Z=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),r=t[0],a=t[1],s=Object(n.useContext)(p),c=V(N),d=c.data,x=c.setData,b=c.request;return Object(n.useEffect)((function(){b(null===s||void 0===s?void 0:s.user._id)}),[]),Object(u.jsxs)(o.a,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(l.c,{children:Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(z,{data:d,setData:x})})}),Object(u.jsx)(Q,{clicked:function(){return a(!r)}}),r?Object(u.jsx)(H,{setData:x,style:{height:"40vh",bottom:"60px"}}):Object(u.jsx)(H,{})]})},G=(r(33),r(15)),X=r.n(G),$=function(){var e=Object(g.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",{data:n,response:r});case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in login function > auth.js",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),ee={login:$},te=function(){var e=Object(n.useContext)(p),t=Object(J.a)(),r=t.register,a=t.handleSubmit,s=(t.formState.errors,function(){var t=Object(g.a)(f.a.mark((function t(r){var n,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee.login(r);case 2:n=t.sent,a=n.response,s=n.data,200===a.status&&(console.log("Successfully logged in"),localStorage.setItem("user",JSON.stringify(s)),e.setUser(s));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return Object(u.jsxs)("div",{className:X.a.mainWrapper,children:[Object(u.jsx)("div",{className:X.a.appTitleWrapper,children:Object(u.jsx)("h1",{children:"Tally"})}),Object(u.jsxs)("form",{className:X.a.formWrapper,onSubmit:a(s),children:[Object(u.jsxs)("div",{className:X.a.inputWrapper,children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",Object(L.a)({className:X.a.loginInput,type:"text",placeholder:"Username",name:"username"},r("username",{required:!0})))]}),Object(u.jsxs)("div",{className:X.a.inputWrapper,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",Object(L.a)({className:X.a.loginInput,type:"password",placeholder:"Password",name:"password"},r("password",{required:!0})))]}),Object(u.jsx)("input",{className:X.a.loginSubmit,type:"submit",value:"Login"})]})]})};var re=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("user");if(e){var t=JSON.parse(e);a(t)}}),[]),Object(u.jsx)(p.Provider,{value:{user:r,setUser:a},children:Object(u.jsx)("div",{className:"App",children:r?Object(u.jsx)(Z,{}):Object(u.jsx)(te,{})})})};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(re,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.76a5a543.chunk.js.map