"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8112],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,h=m["".concat(s,".").concat(b)]||m[b]||p[b]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6329:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={slug:"javascript-in-jsx-with-curly-braces",title:"JavaScript in JSX with Curly Braces",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},s=void 0,c={permalink:"/blog/javascript-in-jsx-with-curly-braces",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-13-javascript-in-jsx-with-curly-braces/index.md",source:"@site/blog/2022-07-13-javascript-in-jsx-with-curly-braces/index.md",title:"JavaScript in JSX with Curly Braces",description:"This is my personal notes on React Docs(Beta) - JavaScript in JSX with Curly Braces. If interested, check whole series here.",date:"2022-07-13T00:00:00.000Z",formattedDate:"July 13, 2022",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"React Docs(Beta) Personal Notes",permalink:"/blog/tags/react-docs-beta-personal-notes"}],readingTime:1.29,truncated:!1,authors:[{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"}],frontMatter:{slug:"javascript-in-jsx-with-curly-braces",title:"JavaScript in JSX with Curly Braces",authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"},tags:["React","React Docs(Beta) Personal Notes"]},prevItem:{title:"Passing Props to a Component",permalink:"/blog/passing-props-to-a-component"},nextItem:{title:"Rendering Lists",permalink:"/blog/rendering-lists"}},u={authorsImageUrls:[void 0]},p=[{value:"What are the curly braces used for in JSX?",id:"what-are-the-curly-braces-used-for-in-jsx",level:2},{value:"Where to use curly braces?",id:"where-to-use-curly-braces",level:2},{value:"Sometimes we see &quot;double curly braces&quot;, what does it mean?",id:"sometimes-we-see-double-curly-braces-what-does-it-mean",level:2},{value:"Recap",id:"recap",level:2}],m={toc:p};function b(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is my personal notes on React Docs(Beta) - ",(0,i.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces"},"JavaScript in JSX with Curly Braces"),". If interested, check whole series ",(0,i.kt)("a",{parentName:"p",href:"https://zwwang98.github.io/blog/react-docs-beta-notes"},"here"),"."),(0,i.kt)("h2",{id:"what-are-the-curly-braces-used-for-in-jsx"},"What are the curly braces used for in JSX?"),(0,i.kt)("p",null,"Add some JavaScript inside the markup in the JSX."),(0,i.kt)("h2",{id:"where-to-use-curly-braces"},"Where to use curly braces?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"inside JSX markup's tag"),(0,i.kt)("li",{parentName:"ol"},"as attributes immediately following the ",(0,i.kt)("inlineCode",{parentName:"li"},"=")," sign inside the JSX markup's tag")),(0,i.kt)("h2",{id:"sometimes-we-see-double-curly-braces-what-does-it-mean"},'Sometimes we see "double curly braces", what does it mean?'),(0,i.kt)("p",null,"Besides string, number and other JavaScript expressions, we could also pass JavaScript objects in JSX.\nObjects in JavaScript are also wrapped in curly braces, therefore, to pass a JavaScript objects in JSX, we need two nested pairs of curly braces.\nWe could often see this happening in React component's inline style:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export default function TodoList() {\n  return (\n    <ul style={{\n      backgroundColor: 'black',\n      color: 'pink'\n    }}>\n      <li>Improve the videophone</li>\n      <li>Prepare aeronautics lectures</li>\n      <li>Work on the alcohol-fuelled engine</li>\n    </ul>\n  );\n}\n")),(0,i.kt)("p",null,"To make JavaScript object more clear, the code above could also be written like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export default function TodoList() {\n  return (\n    <ul style={\n      {\n        backgroundColor: 'black',\n        color: 'pink'\n      }\n    }>\n      <li>Improve the videophone</li>\n      <li>Prepare aeronautics lectures</li>\n      <li>Work on the alcohol-fuelled engine</li>\n    </ul>\n  );\n}\n")),(0,i.kt)("h2",{id:"recap"},"Recap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Curly braces let you bring JavaScript logic and variables into JSX's markup."),(0,i.kt)("li",{parentName:"ul"},"Curly braces could appear ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"inside the JSX tag content or "),(0,i.kt)("li",{parentName:"ul"},"immediately after = in attributes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{{")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"}}")," is not special syntax: it\u2019s a JavaScript object(inner pair curly braces) tucked inside JSX curly braces(outer pair curly braces).")))}b.isMDXComponent=!0}}]);