"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9578],{7948:function(e,t,i){i.d(t,{Z:function(){return b}});var a=i(3366),n=i(7462),r=i(7294),s=i(6010),o=i(5),d=i(7623),m=i(9348),l=i(6594);function c(e){return(0,l.Z)("MuiContainer",e)}(0,i(8959).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=i(8216),u=i(5893);const x=["className","component","disableGutters","fixed","maxWidth"],g=(0,m.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`maxWidth${(0,p.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,i)=>{const a=e.breakpoints.values[i];return 0!==a&&(t[e.breakpoints.up(i)]={maxWidth:`${a}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var b=r.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiContainer"}),{className:r,component:m="div",disableGutters:l=!1,fixed:b=!1,maxWidth:h="lg"}=i,f=(0,a.Z)(i,x),Z=(0,n.Z)({},i,{component:m,disableGutters:l,fixed:b,maxWidth:h}),W=(e=>{const{classes:t,fixed:i,disableGutters:a,maxWidth:n}=e,r={root:["root",n&&`maxWidth${(0,p.Z)(String(n))}`,i&&"fixed",a&&"disableGutters"]};return(0,o.Z)(r,c,t)})(Z);return(0,u.jsx)(g,(0,n.Z)({as:m,ownerState:Z,className:(0,s.Z)(W.root,r),ref:t},f))}))},4168:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var a=i(7294),n=i(6886),r=i(8277),s=i(5697),o=i.n(s),d=i(5861),m=i(4073),l=i(9974),c=i(4267),p=i(3965),u=function(e){var t=e.post;return a.createElement(n.ZP,{item:!0,xs:12,md:6},a.createElement(l.Z,{component:"a",href:"#"},a.createElement(m.Z,{sx:{display:"flex"}},a.createElement(c.Z,{sx:{flex:1}},a.createElement(d.Z,{component:"h2",variant:"h5"},t.title),a.createElement(d.Z,{variant:"subtitle1",color:"text.secondary"},t.date),a.createElement(d.Z,{variant:"subtitle1",paragraph:!0},t.description),a.createElement(d.Z,{variant:"subtitle1",color:"primary"},"Continue reading...")),a.createElement(p.Z,{component:"img",sx:{width:160,display:{xs:"none",sm:"block"}},image:t.image,alt:t.imageLabel}))))};u.propTypes={post:o().shape({date:o().string.isRequired,description:o().string.isRequired,image:o().string.isRequired,imageLabel:o().string.isRequired,title:o().string.isRequired}).isRequired};var x=u,g=i(3594),b=i(7948);function h(){var e=[{date:"2022.06.21",description:"description",image:g.Z,imageLabel:"image label",title:"post1"},{date:"2022.06.21",description:"description",image:g.Z,imageLabel:"image label",title:"post2"},{date:"2022.06.21",description:"description",image:g.Z,imageLabel:"image label",title:"post3"}];return a.createElement(r.Z,null,a.createElement(b.Z,{maxWidth:"lg",sx:{p:5}},a.createElement(n.ZP,{container:!0,spacing:4},e.map((function(e){return a.createElement(x,{key:e.title,post:e})})))))}},3594:function(e,t,i){t.Z=i.p+"assets/images/typeup-349ca442b75bc34f93fdcb87102fac6e.png"}}]);