(this.webpackJsonptally=this.webpackJsonptally||[]).push([[0],{148:function(e,n,t){e.exports={formWrapper:"Menu_formWrapper__2pZop"}},238:function(e,n,t){},374:function(e,n,t){},385:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,s,l,d,u,p,j,b,x,f,h,O,v,g,m,y,w,k,S,C,U,E,N,z,D,T,I,_,q,M,P,L,F,A,J,V,H,W,B,R,X,$,K,Z=t(1),G=t.n(Z),Q=t(91),Y=t.n(Q),ee=(t(238),t(5)),ne=t(93),te=t(20),re=G.a.createContext(),ce=G.a.createContext(),ie=t(8),ae=t(34),oe=t(411),se=Object(ae.a)(oe.a)(r||(r=Object(ie.a)(["\n  align-self: center;\n  color: white;\n  font-weight: bold;\n"]))),le=Object(ae.a)(se)(c||(c=Object(ie.a)(["\n  padding: 10px;\n  width: 90%;\n"]))),de=Object(ae.a)(se)(i||(i=Object(ie.a)(["\n  height: 35px;\n  left: 0px;\n  position: absolute;\n\n  & > :first-child {\n    height: 100%;\n    width: 100%;\n  }\n"]))),ue=t(197),pe=t(9),je=pe.a.header(a||(a=Object(ie.a)(["\n  align-items: center;\n  background-color: dodgerblue;\n  color: #fff;\n  display: flex;\n  height: 6%;\n  justify-content: center;\n  max-height: 50px;\n  position: relative;\n"]))),be=t(2),xe=function(){var e=Object(Z.useContext)(re);return Object(be.jsxs)(je,{children:[Object(be.jsx)(de,{onClick:function(){return localStorage.removeItem("user"),void e.setUser(null)},children:Object(be.jsx)(ue.a,{color:"white"})}),Object(be.jsx)("h1",{children:"Tally"})]})},fe=pe.a.div(o||(o=Object(ie.a)(["\n  align-self: center;\n  background-color: dodgerblue;\n  border-radius: 10px;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  padding: 10px;\n  width: 97vw;\n"]))),he=pe.a.div(s||(s=Object(ie.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  font-size: 18px;\n  justify-content: center;\n  text-align: center;\n  text-transform: capitalize;\n"]))),Oe=pe.a.div(l||(l=Object(ie.a)(["\n  display: flex;\n  flex: 1;\n"]))),ve=Object(pe.a)(he)(d||(d=Object(ie.a)(["\n  color: ",";\n  font-size: 26px;\n  font-weight: bold;\n  margin: 10px 20px 10px 20px;\n"])),(function(e){return e.deficit?"#b82500":"#fff"})),ge=function(e){var n=e.data,t=e.currentUser,r=e.linkedUser,c=(null===n||void 0===n?void 0:n.calculatedUserExpenses)-(null===n||void 0===n?void 0:n.calculatedOtherUserExpenses);return Object(be.jsxs)(fe,{children:[Object(be.jsxs)(Oe,{children:[Object(be.jsx)(he,{children:"".concat(t,"'s Expenses")}),Object(be.jsx)(he,{children:"Balance"}),Object(be.jsx)(he,{children:"".concat(r,"'s Expenses")})]}),Object(be.jsxs)(Oe,{children:[Object(be.jsx)(ve,{children:null===n||void 0===n?void 0:n.calculatedUserExpenses}),Object(be.jsx)(ve,{deficit:c<0,children:c||0}),Object(be.jsx)(ve,{children:null===n||void 0===n?void 0:n.calculatedOtherUserExpenses})]})]})},me=t(13),ye=t.n(me),we=t(26),ke=t(15),Se=function(){var e=Object(we.a)(ye.a.mark((function e(n,t){var r,c;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/deleteExpense/".concat(n,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log("error in delete expense function:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(we.a)(ye.a.mark((function e(n){var t,r,c,i,a,o;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,fetch("/api/getExpenses/".concat(n));case 5:return t=e.sent,e.next=8,t.json();case 8:return r=e.sent,c=r.userExpenses,i=r.otherUserExpenses,a=r.calculatedUserExpenses,o=r.calculatedOtherUserExpenses,e.abrupt("return",{userExpenses:c,otherUserExpenses:i,calculatedUserExpenses:a,calculatedOtherUserExpenses:o});case 13:e.prev=13,e.t0=e.catch(2),console.log("Error in getExpense function:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(we.a)(ye.a.mark((function e(){var n,t;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("historical expenses called."),e.prev=1,e.next=4,fetch("/api/getHistoricalExpenses");case 4:return n=e.sent,e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),Ee=t(405),Ne=t(410),ze=function(e){var n=Object(Ee.a)(e);return Object(Ne.a)(new Date(n),"MMMM do")},De=pe.a.div(u||(u=Object(ie.a)(["\n  background-color: white;\n  border: 1px solid #c9c9c9c9;\n  border-radius: 6px;\n  display: flex;\n  flex: 0 0 100px;\n  margin: 10px 0px;\n  padding: 12px 2px;\n  width: 88vw;\n"]))),Te=pe.a.div(p||(p=Object(ie.a)(["\n  align-items: center;\n  display: flex;\n  flex-basis: 30%;\n  flex-direction: column;\n  position: relative;\n"]))),Ie=pe.a.div(j||(j=Object(ie.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n\n  & > p {\n    color: green;\n    font-size: 1.6rem;\n  }\n"]))),_e=pe.a.div(b||(b=Object(ie.a)(["\n  color: #808080;\n  text-align: center;\n  text-transform: capitalize;\n  position: absolute;\n"]))),qe=pe.a.div(x||(x=Object(ie.a)(["\n  display: flex;\n  flex-basis: 70%;\n  flex-direction: column;\n"]))),Me=pe.a.div(f||(f=Object(ie.a)(["\n  //placeholder color\n  align-items: center;\n  background-color: ",";\n  border-radius: 8px;\n  color: white;\n  display: flex;\n  font-size: 1.4rem;\n  min-height: 40px;\n  justify-content: center;\n  position: relative;\n  text-align: center;\n  margin: 0 8px;\n"])),(function(e){var n=e.toggle,t=e.colorAccent;return 1===n?"white":t})),Pe=pe.a.div(h||(h=Object(ie.a)(["\n  max-width: 70%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),Le=pe.a.div(O||(O=Object(ie.a)(["\n  border-radius: 8px;\n  display: flex;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ff6640;\n  transform: scaleX(0);\n  transform-origin: 0 50%;\n  transition-property: transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n\n  ","\n  //delete and cancel button post animation\n  & > div:first-child {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    width: 100%;\n  }\n"])),(function(e){return e.toggle&&"\n      transform: scaleX(1);\n      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  "})),Fe=pe.a.div(v||(v=Object(ie.a)(["\n  position: absolute;\n  height: 22px;\n  width: 22px;\n  left: 5px;\n"]))),Ae=pe.a.div(g||(g=Object(ie.a)(["\n  & > :first-child {\n    /* grey is color placeholder */\n    color: grey;\n  }\n"]))),Je=pe.a.div(m||(m=Object(ie.a)(["\n  display: flex;\n  flex-basis: 40%;\n  justify-content: space-evenly;\n  margin-top: ",";\n\n  & > div {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n"])),(function(e){var n=e.descPopulateChecker;return(null===n||void 0===n?void 0:n.length)>1?"0px":"5px"})),Ve=pe.a.div(y||(y=Object(ie.a)(["\n  color: #6e6e6e;\n  flex-basis: 60%;\n  margin: 0 8px;\n  padding: 8px 0px;\n  overflow: scroll;\n"]))),He=pe.a.div(w||(w=Object(ie.a)(["\n  align-self: center;\n  border-left: 1px solid grey;\n  display: flex;\n  height: 90%;\n"]))),We=t(198),Be=pe.a.button(k||(k=Object(ie.a)(["\n  border: 0px solid white;\n  border-radius: 11px;\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n\n  & > :first-child {\n    height: 100%;\n    width: 100%;\n  }\n"]))),Re=function(e){var n=e.onClick;return Object(be.jsx)(Be,{onClick:n,children:Object(be.jsx)(We.a,{color:"white"})})},Xe=function(e){var n=e.cost,t=e.title,r=e.date,c=e.description,i=e.clicked,a=e.ownerName,o=e.splitValue,s=e.initialCost,l=e.colorAccent,d=Object(Z.useState)(!1),u=Object(ee.a)(d,2),p=u[0],j=u[1];return Object(be.jsxs)(De,{children:[Object(be.jsxs)(Te,{children:[Object(be.jsx)(_e,{children:Object(be.jsxs)("p",{children:["-",a,"-"]})}),Object(be.jsx)(Ie,{children:Object(be.jsxs)("p",{children:["$",n]})})]}),Object(be.jsx)(He,{}),Object(be.jsxs)(qe,{children:[Object(be.jsxs)(Me,{colorAccent:l,toggle:p?1:0,children:[Object(be.jsx)(Le,{toggle:p?1:0,children:Object(be.jsxs)("div",{children:[Object(be.jsx)(se,{onClick:i,children:"Delete"}),Object(be.jsx)(se,{onClick:function(){return j(!1)},children:"Cancel"})]})}),p?null:Object(be.jsxs)(be.Fragment,{children:[Object(be.jsx)(Fe,{children:Object(be.jsx)(Re,{onClick:function(){return j(!0)}})}),Object(be.jsx)(Pe,{children:(null===t||void 0===t?void 0:t.length)>1?t:"No Title"})]})]}),(null===c||void 0===c?void 0:c.length)>1?Object(be.jsx)(Ve,{children:c}):null,Object(be.jsxs)(Je,{descPopulateChecker:c,children:[Object(be.jsxs)(Ae,{children:[Object(be.jsx)("div",{children:"Date"}),Object(be.jsx)("div",{children:ze(r)})]}),Object(be.jsx)(He,{}),Object(be.jsxs)(Ae,{children:[Object(be.jsx)("div",{children:"split by"}),Object(be.jsxs)("div",{children:[o,"%"]})]}),Object(be.jsx)(He,{}),Object(be.jsxs)(Ae,{children:[Object(be.jsx)("div",{children:"Total"}),Object(be.jsxs)("div",{children:["$",s]})]})]})]})]})},$e=t(414),Ke=pe.a.div(S||(S=Object(ie.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 69vh;\n  overflow: scroll;\n  margin-top: 20px;\n"]))),Ze=function(e){var n=e.data,t=e.userId,r=e.setData,c=[],i=function(e,n,t){if(void 0!==e&&void 0!==n){var r=[].concat(Object(ke.a)(e),Object(ke.a)(n));return"descending"===t&&r.sort((function(e,n){return new Date(n.date)-new Date(e.date)})),r}}(null===n||void 0===n?void 0:n.userExpenses,null===n||void 0===n?void 0:n.otherUserExpenses,"descending"),a=function(){var e=Object(we.a)(ye.a.mark((function e(n,t){var c;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se(n,t);case 2:return e.next=4,Ce(n);case 4:c=e.sent,r(c);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return null===i||void 0===i||i.forEach((function(e,n){c.push(Object(be.jsx)(Xe,{cost:e.cost,title:e.title,date:e.date,description:e.description,ownerName:e.ownerName,splitValue:e.splitValue,initialCost:e.initialCost,clicked:function(){return a(t,e._id)},colorAccent:e.exLabelColor},Object($e.a)()))})),Object(be.jsx)(Ke,{children:c})},Ge=pe.a.div(C||(C=Object(ie.a)(["\n  align-items: ",";\n  display: flex;\n  flex: 1;\n  justify-content: ",";\n  flex-direction: ",";\n  position: relative;\n  /* overflow: scroll; */\n"])),(function(e){return e.align}),(function(e){return e.justifyContent}),(function(e){return e.direction})),Qe=function(e){var n=e.data,t=e.setData,r=e.currentUser,c=e.linkedUser;return Object(be.jsxs)(Ge,{align:"center",direction:"column",children:[Object(be.jsx)(ge,{data:n,currentUser:r.userName,linkedUser:null===c||void 0===c?void 0:c.userName}),Object(be.jsx)(Ze,{data:n,userId:r._id,setData:t})]})},Ye=pe.a.div(U||(U=Object(ie.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: scroll;\n"]))),en=function(e){var n=Object(Z.useState)([]),t=Object(ee.a)(n,2),r=t[0],c=t[1],i=Object(Z.useState)(!1),a=Object(ee.a)(i,2),o=a[0],s=a[1],l=Object(Z.useState)(!1),d=Object(ee.a)(l,2),u=d[0],p=d[1],j=function(){var n=Object(we.a)(ye.a.mark((function n(){var t,r=arguments;return ye.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,e.apply(void 0,r);case 4:t=n.sent,p(!1),s(!1),c(t),n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),console.log("error in useAPi hook:",n.t0),n.abrupt("return",s(!0));case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return{data:r,setData:c,error:o,loading:u,request:j}},nn=t(406),tn=t(415),rn=t(223),cn=t(212),an=t(101),on=["dodgerblue","#f95959","#3fba37","#a037baf0","#0c8065f0","#8e1ac8f0"],sn=pe.a.h1(E||(E=Object(ie.a)(["\n  color: dodgerblue;\n  margin-top: 22px;\n  opacity: ",";\n  transition: opacity 0.4s ease;\n"])),(function(e){return e.animationToggle?1:0})),ln=G.a.memo((function(e){var n=e.chartData,t=e.animationFinished,r=e.setAnimationFinished;return Object(be.jsxs)(be.Fragment,{children:[Object(be.jsx)(sn,{animationToggle:t,children:"Historical Expenses"}),Object(be.jsx)(nn.a,{height:"60%",children:Object(be.jsxs)(tn.a,{children:[Object(be.jsx)(rn.a,{data:n.finishedData,dataKey:"value",label:!0,labelLine:!1,onAnimationEnd:function(){return r(!0)},legendType:"square",children:n.finishedData.map((function(e,n){return Object(be.jsx)(cn.a,{fill:on[n]},"cell-".concat(n))}))}),Object(be.jsx)(an.a,{})]})})]})})),dn=pe.a.div(N||(N=Object(ie.a)(["\n  align-items: center;\n  background-color: #fff;\n  border: 2px solid ",";\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: 10px 0px;\n  width: 85vw;\n"])),(function(e){return e.borderColor||"#c9c9c9c9"})),un=pe.a.div(z||(z=Object(ie.a)(["\n  padding: 20px 20px 10px 20px;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  text-transform: capitalize;\n  width: 100%;\n"]))),pn=Object(pe.a)(un)(D||(D=Object(ie.a)(["\n  height: ",";\n  opacity: ",";\n  padding: ",";\n  transition: all 0.3s ease;\n"])),(function(e){return e.expanded?"35px":"0px"}),(function(e){return e.expanded?"1":"0"}),(function(e){return e.expanded?"20px 20px 10px 20px":"0px"})),jn=pe.a.div(T||(T=Object(ie.a)(["\n  display: flex;\n  width: ",";\n  border-radius: parseInt(20px) / 2;\n  justify-content: center;\n  align-items: center;\n\n  & > svg {\n    transition: color 0.4s ease;\n  }\n"])),(function(e){return e.iconSize})),bn=function(e){var n=e.size,t=void 0===n?"20px":n,r=e.IconName,c=e.activeColor,i=e.color,a=e.clicked,o=e.LinkTo;return void 0===o?Object(be.jsx)(jn,{iconSize:t,tempColor:!0,onClick:a,children:Object(be.jsx)(r,{color:i||c?"#1976d2":"black",size:t})}):Object(be.jsx)("div",{children:Object(be.jsx)(ne.b,{to:o,children:Object(be.jsx)(jn,{iconSize:t,tempColor:!0,onClick:a,children:Object(be.jsx)(r,{color:i||c?"#1976d2":"black",size:t})})})})},xn=t(118),fn=function(e){var n=e.cost,t=e.date,r=e.ownerName,c=e.accentColor,i=e.title,a=e.initialCost,o=Object(Z.useState)(!1),s=Object(ee.a)(o,2),l=s[0],d=s[1];return Object(be.jsxs)(dn,{borderColor:c,children:[Object(be.jsxs)(un,{children:[Object(be.jsx)("div",{children:r}),Object(be.jsx)("div",{children:n}),Object(be.jsx)("div",{children:Object(Ne.a)(Object(Ee.a)(t),"MM-d-yy")})]}),Object(be.jsxs)(pn,{expanded:l,children:[Object(be.jsxs)("div",{children:[" ",i]}),Object(be.jsxs)("div",{children:["TotalExpense: ",a," "]})]}),Object(be.jsx)("div",{onClick:function(){return d(!l)},children:Object(be.jsx)(bn,{IconName:xn.a})})]})},hn=(pe.a.div(I||(I=Object(ie.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),pe.a.div(_||(_=Object(ie.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: ",";\n"])),(function(e){return e.justifyContent||"center"}))),On=pe.a.button(q||(q=Object(ie.a)(["\n  align-items: center;\n  background-color: ",";\n  border: ",";\n  border-radius: 12px;\n  color: ",";\n  display: flex;\n  font-size: 12px;\n  justify-content: center;\n  min-width: 116.5px;\n  padding: ",";\n  text-transform: capitalize;\n  transition: background-color 0.4s ease, color 0.4s ease;\n\n  & > div {\n    padding: 4px;\n  }\n"])),(function(e){return e.toggled?"dodgerblue":"#fff"}),(function(e){return e.toggled?"0px":"2px solid dodgerblue"}),(function(e){return e.toggled?"#fff":"#4a4a4a"}),(function(e){return e.toggled?"10px":"8px"})),vn=function(e){var n=e.clicked,t=e.disabled,r=e.name,c=e.toggled;return Object(be.jsx)(On,{type:"button",disabled:t,toggled:c,onClick:n,children:Object(be.jsx)("div",{children:r})})},gn=function(e){var n=e.list,t=Object(Z.useState)(n),r=Object(ee.a)(t,2),c=r[0],i=r[1],a=Object(Z.useState)(!1),o=Object(ee.a)(a,2),s=o[0],l=o[1],d=Object(Z.useState)(!1),u=Object(ee.a)(d,2),p=u[0],j=u[1],b=Object(Z.useState)(!1),x=Object(ee.a)(b,2),f=x[0],h=x[1],O=Object(Z.useState)(!1),v=Object(ee.a)(O,2),g=v[0],m=v[1];return Object(be.jsxs)("div",{children:[Object(be.jsxs)(hn,{justifyContent:"space-around",children:[Object(be.jsx)(vn,{name:g?f?"Old To New":"New To Old":"Sort Date",toggled:g,clicked:f?function(){return function(){var e=Object(ke.a)(c);e.sort((function(e,n){return new Date(n.props.date)-new Date(e.props.date)})),i(e),h(!f),m(!0),j(!1)}()}:function(){return function(){var e=Object(ke.a)(c);e.sort((function(e,n){return new Date(e.props.date)-new Date(n.props.date)})),i(e),h(!f),m(!0),j(!1)}()}}),Object(be.jsx)(vn,{name:p?s?"High To Low":"Low To High":"Sort Expense",toggled:p,clicked:s?function(){return function(){var e=Object(ke.a)(c);e.sort((function(e,n){return e.props.cost-n.props.cost})),i(e),l(!s),j(!0),m(!1)}()}:function(){return function(){var e=Object(ke.a)(c);e.sort((function(e,n){return n.props.cost-e.props.cost})),i(e),l(!s),j(!0),m(!1)}()}})]}),c]})},mn=function(e){var n=e.data,t=e.currentUser,r=e.linkedUser,c=[];return null===n||void 0===n||n.forEach((function(e,n){e.owner!==t._id&&e.owner!==r._id||c.push(Object(be.jsx)(fn,{cost:e.cost,title:e.title,date:e.date,description:e.description,ownerName:e.ownerName,splitValue:e.splitValue,initialCost:e.initialCost,accentColor:e.ownerName===t.userName?"dodgerblue":"#f95959"},n))})),Object(be.jsx)(gn,{list:c})},yn=function(e,n,t){if(e){for(var r=[],c=[],i=null===n||void 0===n?void 0:n.userName,a=null===t||void 0===t?void 0:t.userName,o=0;o<e.length;o++)e[o].ownerName===i?r.push({name:e[o].ownerName,value:parseInt(e[o].cost)}):e[o].ownerName===(null===t||void 0===t?void 0:t.userName)&&c.push({name:e[o].ownerName,value:parseInt(e[o].cost)});return{finishedData:function(){var e=r.reduce((function(e,n){return e+n.value}),0),n=c.reduce((function(e,n){return e+n.value}),0);return[{name:i,value:e,color:"dodgerblue"},{name:a,value:n,color:"#f95959"}]}()}}},wn=function(e){var n=e.currentUser,t=e.linkedUser,r=Object(Z.useState)(!1),c=Object(ee.a)(r,2),i=c[0],a=c[1],o=en(Ue),s=o.data,l=o.request,d=s.allHistoricalExpenses,u=yn(d,n,t);return Object(Z.useEffect)((function(){l()}),[]),Object(be.jsxs)(Ye,{children:[u?Object(be.jsx)(ln,{chartData:u,animationFinished:i,setAnimationFinished:a}):null,i?Object(be.jsx)(mn,{data:d,currentUser:n,linkedUser:t}):null]})},kn=t(216),Sn=t(215),Cn=t(67),Un=t(148),En=t.n(Un),Nn=t(54),zn=function(){var e=Object(we.a)(ye.a.mark((function e(n,t){var r,c;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.userId=t,e.prev=1,e.next=4,fetch("/api/addExpense",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",{data:c,response:r});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n,t){return e.apply(this,arguments)}}(),Dn=function(e,n){return(n*e/100).toFixed(2)},Tn=pe.a.div(M||(M=Object(ie.a)(["\n  background-color: #fff;\n  bottom: -50vh;\n  display: flex;\n  flex-direction: column;\n  height: 0vh;\n  justify-content: center;\n  position: fixed;\n  transition: 0.5s ease-in-out;\n  width: 100%;\n  z-index: 4;\n"]))),In=pe.a.form(P||(P=Object(ie.a)(['\n  display: flex;\n  flex-direction: column;\n  font-family: "Roboto";\n  overflow-y: scroll;\n']))),_n=pe.a.div(L||(L=Object(ie.a)(['\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n\n  & > textarea {\n    border: 2px solid #5cb6e2;\n    border-radius: 8px;\n    color: #38334ccc;\n    font-family: "Roboto";\n    font-size: 18px;\n    padding: 8px 12px;\n  }\n']))),qn=pe.a.input(F||(F=Object(ie.a)(["\n  border: 2px solid #5cb6e2;\n  border-radius: 10px;\n  color: #38334ccc;\n  font-size: 26px;\n  padding: 8px 12px;\n  width: inherit;\n"]))),Mn=pe.a.div(A||(A=Object(ie.a)(["\n  align-items: center;\n  background-color: #fff;\n  color: #5cb6e2;\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 28px;\n  font-weight: bold;\n  padding: 10px 12px;\n  text-transform: uppercase;\n"]))),Pn=pe.a.div(J||(J=Object(ie.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n"]))),Ln=pe.a.div(V||(V=Object(ie.a)(["\n  color: #38334ccc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  font-size: 18px;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  padding: 8px;\n  width: 30%;\n"]))),Fn=function(e){var n=e.calculatedSplit;return Object(be.jsx)(Ln,{children:n})},An=t(412),Jn=function(e){var n,t=e.currentUser,r=e.linkedUsers,c=e.style,i=Object(Z.useState)(!1),a=Object(ee.a)(i,2),o=a[0],s=a[1],l=Object(Z.useState)(),d=Object(ee.a)(l,2),u=d[0],p=d[1],j=Object(Z.useState)(""),b=Object(ee.a)(j,2),x=b[0],f=b[1],h=Object(Z.useState)(50),O=Object(ee.a)(h,2),v=O[0],g=O[1],m=Object(Z.useState)(!0),y=Object(ee.a)(m,2),w=y[0],k=y[1],S=Object(Z.useState)(!1),C=Object(ee.a)(S,2),U=C[0],E=C[1],N=Object(Z.useState)(""),z=Object(ee.a)(N,2),D=z[0],T=z[1],I=Object(Z.useState)(0),_=Object(ee.a)(I,2),q=_[0],M=_[1],P=Object(Z.useState)("text"),L=Object(ee.a)(P,2),F=L[0],A=L[1],J=Object(Nn.d)(),V=J.register,H=J.handleSubmit,W=J.reset,B=J.getValues,R=J.formState.errors,X=Object(Z.useContext)(ce),$=X.menuToggle,K=X.setMenuToggle,G=X.setData,Q=function(){var e=Object(we.a)(ye.a.mark((function e(n){var r,c;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=on[Math.floor(Math.random()*on.length)],n.cost=u,n.splitValue=v,n.initialCost=x,n.exLabelColor=r,""===D){e.next=10;break}return e.next=8,zn(n,D._id);case 8:e.next=12;break;case 10:return e.next=12,zn(n,t._id);case 12:return e.next=14,Ce(t._id);case 14:c=e.sent,G(c),W(),g(50),p(null),k(!0),K(!$),f(""),A("text");case 23:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(e){!function(e){e.length<=0?k(!0):k(!1)}(e.target.value);var n=parseInt(e.target.value),t=Dn(n,50);p(t),f(e.target.value)};return Object(be.jsx)(Tn,{style:c,children:Object(be.jsxs)(In,{id:"form",onSubmit:H((function(e){return Q(e)})),children:[Object(be.jsx)(be.Fragment,{children:Object(be.jsxs)(_n,{children:[Object(be.jsxs)(Mn,{children:[Object(be.jsx)(vn,{disabled:w,toggled:o,name:"Modify Split",clicked:function(){return s(!o)}}),Object(be.jsx)(vn,{name:D.userName||"Charge to other",toggled:U,clicked:function(){return E(!0),M((function(e){return e+1})),void T(r[q%2===0?1:0])}})]}),Object(be.jsxs)(Pn,{children:[Object(be.jsx)(qn,Object(Cn.a)({type:"number",id:"number-input",inputMode:"numeric",placeholder:"Cost (required)",name:"cost",step:"0.01",onInput:function(e){return Y(e)}},V("cost",{required:!0}))),Object(be.jsx)(Fn,{calculatedSplit:u})]}),"required"===(null===(n=R.cost)||void 0===n?void 0:n.type)&&"Cost is required",Object(be.jsx)(An.a,{disabled:!o,onChange:function(e){return function(e){var n=B("cost"),t=Dn(e,n);p(t),g(e)}(e.target.value)},size:"medium",min:0,max:100,defaultValue:50,"aria-label":"sliderPercent",step:5,valueLabelDisplay:"auto",sx:{height:o?"8px":"0px",opacity:o?"1":"0",transition:"all 0.3s linear"}})]})}),Object(be.jsx)(_n,{className:En.a.titleWrapper,children:Object(be.jsx)(qn,Object(Cn.a)({type:"text",id:"title-input",name:"title",placeholder:"Title"},V("title")))}),Object(be.jsx)(_n,{className:En.a.dateWrapper,children:Object(be.jsx)(qn,Object(Cn.a)({type:F,id:"date-picker",name:"date",placeholder:"Date",onFocus:function(){return A("date")}},V("date")))}),Object(be.jsx)(_n,{children:Object(be.jsx)("textarea",Object(Cn.a)({cols:"15",rows:"2",id:"textarea-input",placeholder:"Description",name:"description"},V("description")))}),Object(be.jsx)(le,{variant:"contained",type:"submit",children:"Submit Expense"})]})})},Vn=pe.a.footer(H||(H=Object(ie.a)(["\n  bottom: 0px;\n  display: flex;\n  height: 6%;\n  min-height: 30px;\n  position: absolute;\n  z-index: 4;\n"]))),Hn=pe.a.div(W||(W=Object(ie.a)(["\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 -1px 4px rgb(0 0 0 / 12%), 0 1px 2px;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  width: 100vw;\n\n  & > div {\n    margin: 0 15px;\n  }\n"]))),Wn=function(e){var n=e.currentUser,t=e.linkedUsers,r=e.clicked,c=e.menuToggle,i=Object(te.e)(),a=function(){var e;e="/history"===i.pathname||"/scheduler"===i.pathname?Sn.a:xn.b;var n=function(){return"/history"===i.pathname?"#1976d2":"black"};return c?Object(be.jsx)(bn,{color:n,IconName:e,size:30}):Object(be.jsx)(bn,{color:n,IconName:e,size:30,LinkTo:"/history"===i.pathname||"/scheduler"===i.pathname?"/":"/history"})};return Object(be.jsxs)(be.Fragment,{children:[c?Object(be.jsx)(Jn,{currentUser:n,linkedUsers:t,style:{height:"100%",bottom:"0%"}}):Object(be.jsx)(Jn,{}),Object(be.jsx)(Vn,{children:Object(be.jsxs)(Hn,{children:[Object(be.jsx)(a,{}),Object(be.jsx)(bn,{IconName:kn.a,size:30,activeColor:c,clicked:r})]})})]})},Bn=function(){var e=Object(we.a)(ye.a.mark((function e(n){var t,r;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/getLinkedUsers/".concat(n));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getUsers function",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),Rn=Bn,Xn=function(){var e=Object(Z.useState)(!1),n=Object(ee.a)(e,2),t=n[0],r=n[1],c=Object(Z.useContext)(re),i=en(Ce),a=i.data,o=i.setData,s=i.request,l=en(Rn),d=l.data,u=l.request,p=function(e,n){var t;if(n&&2===n.length)return n.forEach((function(n){n._id!==e&&(t=n)})),t}(c.user._id,d);return Object(Z.useEffect)((function(){s(null===c||void 0===c?void 0:c.user._id),u(null===c||void 0===c?void 0:c.user._id)}),[]),console.log("react router rendered..."),Object(be.jsxs)(ne.a,{children:[Object(be.jsx)(xe,{}),Object(be.jsxs)(te.c,{children:[Object(be.jsx)(te.a,{path:"/",element:Object(be.jsx)(Qe,{data:a,setData:o,currentUser:null===c||void 0===c?void 0:c.user,linkedUser:p})}),Object(be.jsx)(te.a,{path:"/history",element:Object(be.jsx)(wn,{currentUser:null===c||void 0===c?void 0:c.user,linkedUser:p})})]}),Object(be.jsx)(ce.Provider,{value:{menuToggle:t,setMenuToggle:r,setData:o},children:Object(be.jsx)(Wn,{currentUser:null===c||void 0===c?void 0:c.user,linkedUsers:d,clicked:function(){return r(!t)},menuToggle:t})})]})},$n=(t(374),pe.a.div(B||(B=Object(ie.a)(['\n  position: absolute;\n  font-family: "Dancing Script", cursive;\n  left: 0;\n  right: 0;\n  font-size: 35px;\n  color: white;\n  margin-left: 0;\n  margin-right: 0;\n  width: 200px;\n  margin: 0 auto;\n  text-align: center;\n  top: 10vh;\n'])))),Kn=pe.a.div(R||(R=Object(ie.a)(["\n  align-items: center;\n  display: flex;\n  background: rgb(165, 112, 215);\n  background: linear-gradient(\n    58deg,\n    rgba(165, 112, 215, 1) 0%,\n    rgba(105, 105, 218, 1) 53%,\n    rgba(57, 176, 200, 1) 100%\n  );\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]))),Zn=pe.a.form(X||(X=Object(ie.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n\n  div {\n    margin: 10px 0px;\n  }\n\n  div > input:focus-visible {\n    border: 2px solid #cf82fb;\n    outline: none;\n  }\n\n  button {\n    font-size: 18px;\n    margin-top: 10px;\n  }\n"]))),Gn=function(){var e=Object(we.a)(ye.a.mark((function e(n){var t,r;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=4,fetch("/api/login",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",{data:r,response:t});case 11:e.prev=11,e.t0=e.catch(1),console.log("Error in login function > auth.js",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),Qn=function(){var e=Object(we.a)(ye.a.mark((function e(){var n,t,r;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={password:"demo123",username:"demo"},e.prev=1,e.next=4,fetch("/api/login",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",{data:r,response:t});case 11:e.prev=11,e.t0=e.catch(1),console.log("Error in login function > auth.js",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),Yn=t(122),et=Yn.a().shape({username:Yn.b().required("Username is required"),password:Yn.b().min(4,"Password must contain at least 4 characters").required("Password is required")}),nt=t(222),tt=pe.a.div($||($=Object(ie.a)(["\n  //only displays if not on mobile\n  display: none;\n  @media (min-width: 768px) {\n    display: flex;\n    padding: 10px 10px 30px 10px;\n\n    p {\n      color: #fff;\n      font-size: 1.2rem;\n      font-weight: bold;\n    }\n  }\n"]))),rt=pe.a.p(K||(K=Object(ie.a)(["\n  color: #d10000;\n  margin-top: 5px;\n  text-align: center;\n"]))),ct=function(){var e,n,t=Object(Z.useState)(!1),r=Object(ee.a)(t,2),c=r[0],i=r[1],a=Object(Z.useContext)(re),o=Object(Nn.d)({resolver:Object(nt.a)(et)}),s=o.register,l=o.handleSubmit,d=o.formState.errors,u=function(){var e=Object(we.a)(ye.a.mark((function e(n){var t,r,c;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Gn(n);case 2:t=e.sent,r=t.response,c=t.data,r.ok&&(localStorage.setItem("user",JSON.stringify(c)),a.setUser(c)),r.ok||i(!0);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(we.a)(ye.a.mark((function e(){var n,t,r;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qn();case 2:n=e.sent,t=n.response,r=n.data,t.ok&&(localStorage.setItem("user",JSON.stringify(r)),a.setUser(r)),t.ok||i(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(be.jsxs)(Kn,{children:[Object(be.jsx)($n,{children:Object(be.jsx)("h1",{children:"Tally"})}),Object(be.jsx)(tt,{children:Object(be.jsx)("p",{children:"Hello! This website is best used on mobile"})}),c?Object(be.jsx)(rt,{children:"Invalid login"}):null,Object(be.jsxs)(Zn,{onSubmit:l(u),children:[Object(be.jsxs)(Pn,{children:[Object(be.jsx)(qn,Object(Cn.a)({type:"text",placeholder:"Username",name:"username"},s("username"))),Object(be.jsx)(rt,{children:null===(e=d.username)||void 0===e?void 0:e.message})]}),Object(be.jsxs)(Pn,{children:[Object(be.jsx)(qn,Object(Cn.a)({type:"password",placeholder:"Password",name:"password"},s("password"))),Object(be.jsx)(rt,{children:null===(n=d.password)||void 0===n?void 0:n.message})]}),Object(be.jsx)(le,{type:"submit",children:"Log In"}),Object(be.jsx)(le,{onClick:function(){return p()},children:"Demo"})]})]})};var it=function(){var e=Object(Z.useState)(),n=Object(ee.a)(e,2),t=n[0],r=n[1],c=en(Rn),i=c.data,a=c.request,o=localStorage.getItem("user"),s=JSON.parse(o);return Object(Z.useEffect)((function(){if(o){var e=JSON.parse(o);r(e),a(s._id)}}),[]),Object(be.jsx)(re.Provider,{value:{user:t,setUser:r,linkedUsers:i},children:Object(be.jsx)("div",{className:"App",children:t?Object(be.jsx)(Xn,{}):Object(be.jsx)(ct,{})})})};Y.a.render(Object(be.jsx)(G.a.StrictMode,{children:Object(be.jsx)(it,{})}),document.getElementById("root"))}},[[385,1,2]]]);
//# sourceMappingURL=main.8bb3227c.chunk.js.map