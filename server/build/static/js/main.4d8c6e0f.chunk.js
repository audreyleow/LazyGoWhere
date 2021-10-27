(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,t,n){},164:function(e,t){},186:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(40),r=n.n(c),o=(n(139),n(19)),s=n(31),d=n.n(s),l=n(46),x=n(8),j=n(13),u=(n(71),n(1)),p=a.a.createContext({user:void 0,setUser:function(){},signOut:function(){}});function h(e){var t=e.children,n=a.a.useState(),i=Object(x.a)(n,2),c=i[0],r=i[1],o=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(p.Provider,{value:{user:c,setUser:r,signOut:o},children:t})}function b(){return a.a.useContext(p)}j.a.apps.length?j.a.app():j.a.initializeApp({apiKey:"AIzaSyDMyE240YFvvJJl-zXDICaNa4PDCoeYJwQ",authDomain:"lazy-go-where-dev.firebaseapp.com",projectId:"lazy-go-where-dev",storageBucket:"lazy-go-where-dev.appspot.com",messagingSenderId:"871647532967",appId:"1:871647532967:web:78aa38758371dec5db0882"});var f=n(121),g=n.n(f),O=n(226),m=n(250),v=n(251),y=n(26),I=n.p+"static/media/login_background.d33cb01a.png";function S(e){var t=e.children;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(O.a,{sx:{height:"100%",padding:"10px 15px 20px",background:"url(".concat(I,")  no-repeat center center fixed"),backgroundSize:"cover"},children:[Object(u.jsx)(m.a,{component:y.b,to:"/",sx:{color:"#3459B9",fontFamily:"SingleDayRegular",fontSize:"36px",fontWeight:"400",paddingBottom:"30px",textDecoration:"none"},children:"Lazy Go Where"}),Object(u.jsx)(m.a,{sx:{fontSize:"42px",fontWeight:"300",color:"#000000",textAlign:"center"},children:"Lazy to plan for your next outing? Leave it to us."}),Object(u.jsx)(v.a,{sx:{width:"70%",margin:"auto",padding:"10px 20px 20px",borderRadius:"20px"},children:t})]})})}function w(e){var t=e.setStep,n=a.a.useMemo((function(){return{signInFlow:"popup",signInOptions:[j.a.auth.EmailAuthProvider.PROVIDER_ID,j.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return t(1),!1}}}}),[t]);return Object(u.jsx)(S,{children:Object(u.jsx)(g.a,{uiConfig:n,firebaseAuth:j.a.auth()})})}var D=n(5),k=n(20),R=n(252),A=n(247),C=n(254),E=n(234),F=n(246),T=n(237),W=n(241);function z(e){var t=e.DropdownQuestion,n=e.DropdownCaption,i=e.DropdownValue,a=e.DropdownChangeHandler,c=e.DropdownContent;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"300",color:" #333333",paddingTop:"10px",paddingBottom:"10px",fontFamily:"Roboto"},children:t}),Object(u.jsxs)(R.a,{sx:{width:"280px"},children:[Object(u.jsx)(F.a,{id:"input-selector",children:n}),Object(u.jsx)(T.a,{labelId:"input-selector",value:i,label:n,onChange:a,inputProps:{"aria-label":"Without label"},autoWidth:!0,children:c.map((function(e){return Object(u.jsx)(W.a,{sx:{width:"280px"},value:e,children:e},e)}))})]})]})}var B=n(17),V=n(194),P=n(253),N=n(242),H=["Accommodation","Attractions","Bars & Clubs","Events","Food & Beverages","Tours","Venues"],J=[1,2,3,4,5];function Y(e){var t=e.activitiesSelected,n=e.handleActivitiesSelected,i=0===Object.values(t).filter((function(e){return e})).length,a=H.reduce((function(e,t){return e[e.length-1].length>=4?[].concat(Object(B.a)(e),[[t]]):(e[e.length-1].push(t),e)}),[[]]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"300",color:" #333333",paddingTop:"20px"},children:"What activities would you like?"}),Object(u.jsx)(O.a,{sx:{display:"flex"},children:a.map((function(e){return Object(u.jsx)(R.a,{required:!0,error:i,component:"fieldset",sx:{m:3},variant:"standard",children:Object(u.jsx)(V.a,{sx:{display:"flex",flexDirection:"column"},children:e.map((function(e){return Object(u.jsx)(P.a,{control:Object(u.jsx)(N.a,{checked:t[e],onChange:n,name:e}),label:e,labelPlacement:"start"},e)}))})},e)}))})]})}var L=n(233),U=n(240);function M(e){var t=e.RadioFeatureQuestion,n=e.buildingOption,i=e.handleBuildingOption;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"300",color:" #333333",paddingTop:"10px",paddingBottom:"10px"},children:t}),Object(u.jsx)(R.a,{component:"fieldset",children:Object(u.jsxs)(L.a,{name:"controlled-radio-buttons-group",value:n,onChange:i,children:[Object(u.jsx)(P.a,{value:"BUILD-YOUR-OWN",control:Object(u.jsx)(U.a,{}),label:"Build-Your-Own"}),Object(u.jsx)(P.a,{value:"AUTO-BUILD",control:Object(u.jsx)(U.a,{}),label:"Auto-Build"})]})})]})}var G=n(49),Z=n.n(G),q=n(28),K=n.n(q),Q=void 0,X=a.a.createContext(Q);function _(e){var t=e.children,n=a.a.useState(!1),i=Object(x.a)(n,2),c=i[0],r=i[1],o=a.a.useReducer((function(e,t){switch(t.type){case"LOADED_ITINERARY_UPDATED":return t.payload;case"ACTIVITIES_UPDATED":return Object(k.a)(Object(k.a)({},e),{},{activities:t.payload});case"ACTIVITY_REMOVED":return Object(k.a)(Object(k.a)({},e),{},{activities:e.activities.filter((function(e){return e._id!==t.payload}))});case"ACTIVITY_ADDED":return r(!0),Object(k.a)(Object(k.a)({},e),{},{activities:[].concat(Object(B.a)(e.activities.filter((function(e){return e._id!==t.payload._id}))),[t.payload])});default:throw new Error("Invalid action type")}}),Q),s=Object(x.a)(o,2),d=s[0],l=s[1];return Object(u.jsx)(X.Provider,{value:{state:d,dispatch:l,isMainDrawerOpen:c,setIsMainDrawerOpen:r},children:t})}function $(){return a.a.useContext(X)}function ee(e){var t=e.hasExisingItineraries,n=b().user,a=Object(o.f)(),c=$().dispatch;Object(i.useEffect)((function(){c({type:"LOADED_ITINERARY_UPDATED",payload:void 0})}),[]);var r=Object(i.useState)(null),s=Object(x.a)(r,2),j=s[0],p=s[1],h=Object(i.useState)(""),f=Object(x.a)(h,2),g=f[0],O=f[1],v=Object(i.useState)("BUILD-YOUR-OWN"),I=Object(x.a)(v,2),w=I[0],F=I[1],T="AUTO-BUILD"===w,W=Object(i.useState)(H.reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),{},Object(D.a)({},t,!1))}),{})),B=Object(x.a)(W,2),V=B[0],P=B[1],N=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object.entries(V).filter((function(e){var t=Object(x.a)(e,2);t[0];return t[1]})).map((function(e){return Object(x.a)(e,1)[0]})),!n){e.next=5;break}return e.next=4,K.a.post("/users/itineraries/init",{name:g,numberOfActivities:j,isAutoBuild:T,categoryDescriptions:t},{headers:{token:n.token}});case 4:e.sent;case 5:a.push({pathname:"/recommendations",search:"?"+Z.a.stringify({categoryDescriptions:t})});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(S,{children:Object(u.jsxs)(E.a,{sx:{width:"100%",margin:"auto",display:"flex",flexDirection:"column"},children:[Object(u.jsxs)(E.a,{children:[Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"300",color:" #333333",paddingTop:"10px",paddingBottom:"10px",fontFamily:"Roboto"},children:"Name your itinerary:"}),Object(u.jsx)(R.a,{sx:{width:"60%"},children:Object(u.jsx)(A.a,{value:g,onChange:function(e){O(e.target.value)}})})]}),Object(u.jsx)(E.a,{children:Object(u.jsx)(z,{DropdownQuestion:"How many activities would you like?",DropdownCaption:"Select number of activities",DropdownValue:j,DropdownChangeHandler:function(e){p(e.target.value)},DropdownContent:J})}),Object(u.jsx)(E.a,{children:Object(u.jsx)(Y,{activitiesSelected:V,handleActivitiesSelected:function(e){P((function(t){return Object(k.a)(Object(k.a)({},t),{},Object(D.a)({},e.target.name,e.target.checked))}))}})}),Object(u.jsx)(E.a,{children:Object(u.jsx)(M,{RadioFeatureQuestion:"How would you like to build your itinerary?",buildingOption:w,handleBuildingOption:function(e){F(e.target.value)}})}),Object(u.jsx)(E.a,{sx:{display:"flex",justifyContent:"center"},children:Object(u.jsx)(C.a,{variant:"contained",sx:{backgroundColor:"#3459B9",padding:"8px 38px",height:"fit-content",fontSize:"22px",fontWeight:"700"},onClick:N,disabled:0===g.trim().length||!j||Object.values(V).filter((function(e){return e})).length<=0,children:"LET'S GO!"})}),t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E.a,{sx:{width:"100%",textAlign:"center",borderBottom:"1px solid grey",lineHeight:"0.1em",margin:"20px 0 20px",display:"flex",justifyContent:"center"},children:Object(u.jsx)(m.a,{sx:{background:"#FFFFFF",padding:"0 10px",lineHeight:"0.1em",marginBottom:"-2px"},children:"OR"})}),Object(u.jsx)(C.a,{variant:"contained",component:y.b,to:{pathname:"/recommendations",search:"?"+Z.a.stringify({categoryDescriptions:H})},children:"Click here to manage your existing itineraries."})]})]})})})}function te(){var e=b().user,t=Object(i.useState)(e?1:0),n=Object(x.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(!1),o=Object(x.a)(r,2),s=o[0],d=o[1];return Object(i.useEffect)((function(){e&&(c(1),K.a.get("/users/itineraries",{headers:{token:e.token}}).then((function(e){e.data.itineraries.length>0&&d(!0)})))}),[e]),0===a?Object(u.jsx)(w,{setStep:c}):Object(u.jsx)(ee,{hasExisingItineraries:s})}var ne=n(255),ie=n(256),ae=n(243),ce=n(244),re=n(80),oe=n.n(re),se=n(29),de=n.n(se);function le(){var e=Object(o.h)().activityId,t=$(),n=t.state,i=t.dispatch,c=a.a.useState(),r=Object(x.a)(c,2),s=r[0],d=r[1],l=a.a.useState(),j=Object(x.a)(l,2),p=(j[0],j[1]),h=a.a.useState(!1),b=Object(x.a)(h,2),f=b[0],g=b[1],O=function(e,t){"clickaway"!==t&&g(!1)};if(a.a.useEffect((function(){K.a.get("/activities/".concat(e)).then((function(e){d(e.data)})).catch((function(e){var t;console.log(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data)}))}),[]),!s)return Object(u.jsxs)(E.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",justifyContent:"center"},children:[Object(u.jsx)(ne.a,{}),Object(u.jsx)(m.a,{children:"Loading..."})]});var v,y=Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(ie.a,{size:"small","aria-label":"close",color:"inherit",onClick:O,children:Object(u.jsx)(oe.a,{fontSize:"small"})})});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ae.a,{open:f,autoHideDuration:6e3,onClose:O,message:"You have reached the maximum number of activities you can add. Please adjust the number of activities allowed for this itinerary if you wish to add another activity!",action:y}),s.imageIds.length>0?Object(u.jsx)("img",{src:(v=s.imageIds[0],"https://firebasestorage.googleapis.com/v0/b/lazy-go-where-dev.appspot.com/o/".concat(v,".jpeg?alt=media")),alt:"activity",style:{height:"350px",width:"100%"}}):Object(u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",alt:"unavailable",style:{height:"350px",width:"100%"}}),Object(u.jsxs)(E.a,{sx:{padding:"20px 140px"},children:[Object(u.jsxs)(E.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(u.jsxs)(E.a,{children:[Object(u.jsx)(m.a,{sx:{paddingTop:"10px",fontSize:"32px",fontWeight:"700",color:"#000000"},children:s.name}),Object(u.jsxs)(m.a,{sx:{display:"flex",alignItems:"center",paddingBottom:"10px",fontSize:"16px",fontWeight:"200",fontFamily:"Roboto"},children:["Rating: \xa0 ",s.rating,Object(u.jsx)(ce.a,{name:"read-only",value:s.rating,precision:.1,readOnly:!0})]}),Object(u.jsx)(E.a,{sx:{display:"flex",paddingBottom:"20px"},children:s.tags.slice(0,5).map((function(e){return Object(u.jsx)(m.a,{sx:{paddingRight:"10px",fontSize:"16px",fontWeight:"200",fontFamily:"Roboto"},children:e})}))})]}),Object(u.jsx)(E.a,{children:Object(u.jsx)(C.a,{variant:"contained",fullWidth:!0,sx:{backgroundColor:"#159600",fontSize:"18px",fontWeight:"400",textTransform:"none"},disabled:de.a.isEmpty(n)||n.activities.some((function(e){return e._id===s._id})),onClick:function(){n.activities.length<n.numberOfActivities?i({type:"ACTIVITY_ADDED",payload:s}):g(!0)},children:"Add to itinerary"})})]}),Object(u.jsxs)(E.a,{children:[Object(u.jsxs)(m.a,{sx:{display:"flex",alignItems:"center",paddingBottom:"10px",fontSize:"16px",fontWeight:"200",fontFamily:"Roboto"},children:["Address: \xa0",s.address.block+" "+s.address.streetName+", "+s.address.postalCode]}),s.businessHour.length>0&&Object(u.jsxs)(m.a,{sx:{display:"flex",alignItems:"center",paddingBottom:"10px",fontSize:"16px",fontWeight:"200",fontFamily:"Roboto"},children:["Opening Hours: \xa0",Object(u.jsx)(R.a,{sx:{m:1,minWidth:120},children:Object(u.jsx)(T.a,{displayEmpty:!0,value:s.businessHour[0].openTime+" - "+s.businessHour[0].closeTime+" ("+de.a.startCase(s.businessHour[0].day)+")",onChange:function(e){p(e.target.value)},children:s.businessHour.map((function(e){return Object(u.jsx)(W.a,{value:e.openTime+" - "+e.closeTime+" ("+de.a.startCase(e.day)+")",children:e.openTime+" - "+e.closeTime+" ("+de.a.startCase(e.day)+")"})}))})})]})]})]})]})}var xe=n(257),je=n(258),ue=n(259),pe=n(248),he=n(235),be=n(236),fe=n(124),ge=n.n(fe),Oe=n(84);function me(e){var t=e.activity,n=e.index,i=$().dispatch;return Object(u.jsx)(Oe.b,{draggableId:t._id,index:n,children:function(e){return Object(u.jsxs)(E.a,Object(k.a)(Object(k.a)(Object(k.a)({sx:{display:"flex",alignItems:"center",backgroundColor:"#E5E5E5",boxShadow:"0px -4px 25px 0px #0000001A",padding:"10px 20px",border:"1px solid"},ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[Object(u.jsx)(ge.a,{sx:{color:"#3459B9",paddingRight:"5px"}}),Object(u.jsxs)(E.a,{sx:{display:"flex",flex:"1",alignItems:"center",justifyContent:"space-between"},children:[de.a.startCase(de.a.camelCase(t.name)),Object(u.jsx)(ie.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return i({type:"ACTIVITY_REMOVED",payload:t._id})},children:Object(u.jsx)(oe.a,{fontSize:"small"})})]})]}))}})}function ve(){var e=$(),t=e.state,n=e.dispatch;return Object(u.jsx)(Oe.a,{onDragEnd:function(e){if(e.destination&&e.destination.index!==e.source.index){var i=function(e,t,n){var i=Array.from(e),a=i.splice(t,1),c=Object(x.a)(a,1)[0];return i.splice(n,0,c),i}(t.activities,e.source.index,e.destination.index);n({type:"ACTIVITIES_UPDATED",payload:i})}},children:Object(u.jsx)(Oe.c,{droppableId:"list",children:function(e){return Object(u.jsxs)("div",Object(k.a)(Object(k.a)({ref:e.innerRef},e.droppableProps),{},{children:[t.activities.map((function(e,t){return Object(u.jsx)(me,{activity:e,index:t},e._id)})),e.placeholder]}))}})})}function ye(e){var t,n=e.loadedItinerary,a=e.setLoadedItinerary,c=e.setUserItineraries,r=e.userItineraries,o=b().user,s=n.numberOfActivities,j=Object(i.useState)(s),p=Object(x.a)(j,2),h=p[0],f=p[1],g=$().dispatch,O=null===(t=r.find((function(e){return e._id===n._id})))||void 0===t?void 0:t.activities.length,v=n.numberOfActivities-n.activities.length;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(E.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px 10px"},children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"map"}),Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"400",fontFamily:"Roboto"},children:"Your personal itinerary"}),Object(u.jsxs)(m.a,{sx:{fontSize:"18px",fontWeight:"300",fontFamily:"Roboto",paddingTop:"15px",paddingBottom:"25px"},children:[s," places left to visit. Keep exploring!"]}),Object(u.jsx)(E.a,{sx:{marginBottom:"20px"},children:v>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m.a,{children:"Set the number of activities you would like for this itinerary"}),Object(u.jsx)(E.a,{sx:{alignItems:"center",textAlign:"center",marginTop:"15px"},children:Object(u.jsx)(T.a,{sx:{marginBottom:"20px"},value:h,onChange:function(e){f(e.target.value)},children:Array.from({length:v},(function(e,t){return Object(u.jsx)(W.a,{value:t+n.activities.length+1,children:t+n.activities.length+1})}))})})]})}),Object(u.jsx)(ve,{}),Object(u.jsx)(C.a,{variant:"contained",disabled:de.a.isEmpty(n)||O>=n.numberOfActivities,sx:{backgroundColor:"#AA0000",borderRadius:"50px",fontSize:"18px",fontWeight:"300",marginTop:"40px",width:"80%"},onClick:Object(l.a)(d.a.mark((function e(){var t,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.confirm("Press ok if you wish to override any possible unsaved changes in order to auto-complete your itinerary."),!o||!t){e.next=7;break}return e.next=4,K.a.patch("/users/itineraries/complete/".concat(n._id),void 0,{headers:{token:o.token}});case 4:i=e.sent,g({type:"LOADED_ITINERARY_UPDATED",payload:i.data.itineraries.find((function(e){return e._id===n._id}))}),c(i.data.itineraries);case 7:case"end":return e.stop()}}),e)}))),children:"Auto-complete Itinerary"}),Object(u.jsxs)(E.a,{sx:{display:"flex",paddingTop:"40px"},children:[Object(u.jsx)(C.a,{variant:"contained",fullWidth:!0,sx:{backgroundColor:"#B93434",fontSize:"18px",fontWeight:"300",marginRight:"5px"},onClick:Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=7;break}return e.next=3,K.a.delete("/users/itineraries/".concat(n._id),{headers:{token:o.token}});case 3:t=e.sent,g({type:"LOADED_ITINERARY_UPDATED",payload:void 0}),c(t.data.itineraries),a(void 0);case 7:case"end":return e.stop()}}),e)}))),children:"Delete Itinerary"}),Object(u.jsx)(C.a,{variant:"contained",fullWidth:!0,sx:{backgroundColor:"#3459B9",fontSize:"18px",fontWeight:"300",marginLeft:"5px"},onClick:Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=6;break}return e.next=3,K.a.put("/users/itineraries/".concat(n._id),Object(k.a)(Object(k.a)({},n),{},{activityIds:n.activities.map((function(e){return e._id})),numberOfActivities:h}),{headers:{token:o.token}});case 3:t=e.sent,g({type:"LOADED_ITINERARY_UPDATED",payload:t.data.itineraries.find((function(e){return e._id===n._id}))}),c(t.data.itineraries);case 6:case"end":return e.stop()}}),e)}))),children:"Save Itinerary"})]}),Object(u.jsx)(C.a,{sx:{marginTop:"20px"},onClick:function(){a(void 0)},children:"Back"})]})})}function Ie(){var e,t=Object(i.useState)({_id:""}),n=Object(x.a)(t,2),a=n[0],c=n[1],r=b(),s=r.user,d=r.signOut,l=Object(i.useState)([]),j=Object(x.a)(l,2),p=j[0],h=j[1],f=$(),g=f.state,v=f.dispatch,y=Object(o.f)(),I=function(e){v({type:"LOADED_ITINERARY_UPDATED",payload:e?p.find((function(t){return t._id===e._id})):void 0})};return Object(i.useEffect)((function(){s&&K.a.get("/users/itineraries",{headers:{token:s.token}}).then((function(e){h(e.data.itineraries)}))}),[s]),g?Object(u.jsx)(ye,{loadedItinerary:g,setLoadedItinerary:I,setUserItineraries:h,userItineraries:p}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(O.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px 10px"},children:[Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"400",fontFamily:"Roboto"},children:"Hi, User!"}),Object(u.jsxs)(R.a,{sx:{width:"280px"},children:[Object(u.jsx)(F.a,{id:"itinerary-input",children:"Select itinerary"}),Object(u.jsx)(T.a,{labelId:"itinerary-input",value:null===a||void 0===a?void 0:a._id,label:null!==(e=null===a||void 0===a?void 0:a.name)&&void 0!==e?e:"",onChange:function(e){c(p.find((function(t){return t._id===e.target.value})))},autoWidth:!0,children:p.map((function(e){return Object(u.jsx)(W.a,{sx:{width:"280px"},value:e._id,children:e.name},e._id)}))})]}),Object(u.jsx)(m.a,{sx:{fontSize:"18px",fontWeight:"300",fontFamily:"Roboto",paddingTop:"15px"},children:(null===a||void 0===a?void 0:a.name)&&"Current itinerary: ".concat(a.name)}),Object(u.jsxs)(O.a,{sx:{display:"flex",paddingTop:"40px"},children:[Object(u.jsx)(C.a,{variant:"contained",fullWidth:!0,sx:{backgroundColor:"#B93434",fontSize:"18px",fontWeight:"300",marginRight:"5px"},onClick:function(){y.push("/")},children:"CREATE NEW"}),Object(u.jsx)(C.a,{disabled:!a,variant:"contained",fullWidth:!0,sx:{backgroundColor:"#3459B9",fontSize:"18px",fontWeight:"300",marginLeft:"5px"},onClick:function(){I(a)},children:"LOAD"})]}),Object(u.jsx)(C.a,{variant:"contained",sx:{backgroundColor:"#AA0000",borderRadius:"50px",fontSize:"18px",fontWeight:"300",marginTop:"40px",width:"80%"},onClick:d,children:"LOG OUT"})]})})}function Se(){var e=$().setIsMainDrawerOpen;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(O.a,{role:"presentation",onClick:function(){e(!0)},onKeyDown:function(){e(!1)},children:Object(u.jsx)(Ie,{})})})}function we(e){var t=$(),n=t.setIsMainDrawerOpen,i=t.isMainDrawerOpen;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.a,{sx:{flexGrow:1},children:Object(u.jsx)(xe.a,{position:"static",children:Object(u.jsxs)(je.a,{sx:{display:"flex",alignItems:"center",backgroundColor:"#FFFFFF",height:"80px",padding:"0px 0px 0px 15px !important",justifyContent:"space-between"},children:[Object(u.jsx)(ue.a,{sx:{color:"#3459B9",fontFamily:"SingleDayRegular",fontSize:"36px",fontWeight:"400",paddingRight:"10px",textDecoration:"none"},href:"/",children:"Lazy Go Where"}),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(C.a,{sx:{paddingRight:"10px",borderLeft:"0.3px solid #000000",borderRight:"0.3px solid #000000",borderRadius:"0px","&:hover":{backgroundColor:"#ffffff",boxShadow:"none"}},onClick:function(){n(!0)},children:Object(u.jsx)(he.a,{sx:{color:"#3459B9",fontSize:"40px"}})}),Object(u.jsx)(C.a,{sx:{paddingLeft:"10px",paddingRight:"10px",borderRadius:"0px","&:hover":{backgroundColor:"#ffffff",boxShadow:"none"}},children:Object(u.jsx)(be.a,{sx:{color:"#3459B9",fontSize:"40px"}})})]})]})})}),Object(u.jsx)(pe.a,{keepMounted:!0,PaperProps:{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},anchor:"right",open:i,onClose:function(){n(!1)},children:Object(u.jsx)(Se,{})})]})}function De(e){var t=e.item;return Object(u.jsxs)(O.a,{component:y.b,to:"/recommendations/".concat(t._id),sx:{textDecoration:"none",margin:"15px 25px 15px 15px",borderRadius:"15px",width:"300px"},children:[t.imageIds.length>0?Object(u.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/lazy-go-where-dev.appspot.com/o/".concat(t.imageIds[0],".jpeg?alt=media"),style:{width:"300px",height:"270px",borderRadius:"10px"},alt:"activity"}):Object(u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",style:{width:"300px",height:"270px",borderRadius:"10px"},alt:"unavailable"}),Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"700",fontFamily:"Roboto",color:"#000000"},children:t.name}),Object(u.jsx)(m.a,{sx:{fontSize:"24px",fontWeight:"400",fontFamily:"Roboto",color:"#000000",display:"-webkit-box","-webkit-line-clamp":"3","-webkit-box-orient":"vertical",overflow:"hidden"},children:de.a.capitalize(t.description)})]})}function ke(e){var t=e.categoryName,n=e.entryDetails;return Object(u.jsxs)(O.a,{children:[Object(u.jsx)(m.a,{sx:{fontSize:"36px",fontWeight:"300",fontFamily:"Roboto",color:"#000000"},children:t}),Object(u.jsxs)(O.a,{sx:{display:"flex",overflowY:"hidden",scrollbarWidth:"none","-ms-overflow-style":"none",justifyContent:"space-between","&::-webkit-scrollbar":{width:0,height:0}},children:[n.map((function(e){return Object(u.jsx)(De,{item:e})})),Object(u.jsxs)(O.a,{sx:{textDecoration:"none",width:"300px",backgroundColor:"#4791db",flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",borderRadius:"15px",margin:"15px"},children:[Object(u.jsx)("img",{src:"http://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg",style:{width:"250px",height:"200px",borderRadius:"10px"},alt:"generic sg"}),Object(u.jsxs)(m.a,{sx:{color:"#FFFFFF",fontSize:"20px",paddingLeft:"35px",paddingRight:"35px"},children:["Check out all the acitivites available for ",t," here!"]}),Object(u.jsx)(C.a,{variant:"contained",component:y.b,to:"/recommendations/".concat(de.a.kebabCase(t)),sx:{backgroundColor:"#FFFFFF",color:"#4791db",fontSize:"20px",width:"70%","&:hover":{color:"#FFFFFF"}},children:"View More"})]})]})]})}function Re(){var e=Z.a.parse(Object(o.g)().search,{ignoreQueryPrefix:!0}),t=a.a.useState(),n=Object(x.a)(t,2),i=n[0],c=n[1];return a.a.useEffect((function(){var t;K.a.get("/activities?".concat(Z.a.stringify({limit:5,categoryDescriptions:null!==(t=e.categoryDescriptions)&&void 0!==t?t:H}))).then((function(e){c(e.data)}))}),[]),i?Object(u.jsxs)(O.a,{sx:{display:"flex",flexDirection:"column",padding:"20px 15px"},children:[Object(u.jsx)(m.a,{sx:{color:"#333333",fontSize:"48px",fontWeight:"300",font:"Roboto"},children:"Recommendations"}),Object.entries(i).map((function(e){var t=Object(x.a)(e,2),n=t[0],i=t[1];return Object(u.jsx)(ke,{categoryName:n,entryDetails:i},n)}))]}):Object(u.jsxs)(O.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",justifyContent:"center"},children:[Object(u.jsx)(ne.a,{}),Object(u.jsx)(m.a,{children:"Loading..."})]})}var Ae=n(249);function Ce(e){var t=e.activities.reduce((function(e,t){return e[e.length-1].length>=3?[].concat(Object(B.a)(e),[[t]]):(e[e.length-1].push(t),e)}),[[]]);return Object(u.jsx)(Ae.a,{container:!0,sx:{display:"block"},children:t.map((function(e){return Object(u.jsx)(Ae.a,{item:!0,sx:{display:"flex",justifyContent:"space-evenly"},children:e.map((function(e){return Object(u.jsx)(De,{item:e})}))})}))})}var Ee=n(260);function Fe(e){var t=e.type,n=Object(i.useState)(),a=Object(x.a)(n,2),c=a[0],r=a[1],o=Object(i.useState)(0),s=Object(x.a)(o,2),d=s[0],l=s[1],j=function(e){return 12*e};Object(i.useEffect)((function(){K.a.get("/activities?".concat(Z.a.stringify({limit:12,skip:j(d),categoryDescriptions:[t]}))).then((function(e){0===e.data[t].length?l(0):r(e.data)}))}),[d]);return c?Object(u.jsxs)(E.a,{sx:{display:"flex",flexDirection:"column",padding:"20px 15px"},children:[Object(u.jsx)(m.a,{sx:{color:"#333333",fontSize:"48px",fontWeight:"300",font:"Roboto"},children:t}),Object.entries(c).map((function(e){var t=Object(x.a)(e,2),n=(t[0],t[1]);return Object(u.jsx)(Ce,{activities:n})})),Object(u.jsx)(E.a,{sx:{display:"flex",justifyContent:"center",paddingTop:"20px",paddingBottom:"10px"},children:Object(u.jsxs)(Ee.a,{variant:"outlined",children:[Object(u.jsx)(C.a,{disabled:!d,onClick:function(){d&&l(d-1)},children:"Previous"}),Object(u.jsx)(C.a,{onClick:function(){l(d+1)},children:"Next"})]})})]}):Object(u.jsxs)(E.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",justifyContent:"center"},children:[Object(u.jsx)(ne.a,{}),Object(u.jsxs)(m.a,{children:[t,"Loading..."]})]})}function Te(){var e=Object(o.i)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(we,{}),Object(u.jsxs)(o.c,{children:[H.map((function(t){return Object(u.jsx)(o.a,{path:"".concat(e.path,"/").concat(de.a.kebabCase(t)),children:Object(u.jsx)(Fe,{type:t})})})),Object(u.jsx)(o.a,{path:"".concat(e.path,"/:activityId"),children:Object(u.jsx)(le,{})}),Object(u.jsx)(o.a,{exact:!0,path:e.path,children:Object(u.jsx)(Re,{})})]})]})}var We=function(){return function(){var e=Object(o.f)(),t=b().setUser;a.a.useEffect((function(){var n=j.a.auth().onAuthStateChanged(function(){var n=Object(l.a)(d.a.mark((function n(i){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i){n.next=8;break}return n.next=3,i.getIdToken(!0);case 3:a=n.sent,t({id:i.uid,email:i.email,token:a}),n.next=10;break;case 8:t(void 0),e.push("/");case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return function(){return n()}}),[])}(),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/recommendations",children:Object(u.jsx)(Te,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(te,{})})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{children:Object(u.jsx)(_,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(We,{})})})})}),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.4d8c6e0f.chunk.js.map