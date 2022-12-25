"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1628],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6760:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"go-daisy-chain",title:'Understand Daisy Chain in "Google I/O 2012 - Go Concurrency Patterns"',authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png"},tags:["Go","Golang"]},p=void 0,c={permalink:"/blog/go-daisy-chain",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-12-24-go-daisy-chain/index.md",source:"@site/blog/2022-12-24-go-daisy-chain/index.md",title:'Understand Daisy Chain in "Google I/O 2012 - Go Concurrency Patterns"',description:'Recently I started to learn Golang and I found this conference - Google I/O 2012 - Go Concurrency Patterns quite helpful on understanding go\'s concurrency. But I got stuck on the "daisy chain" code the first time I saw it.',date:"2022-12-24T00:00:00.000Z",formattedDate:"December 24, 2022",tags:[{label:"Go",permalink:"/blog/tags/go"},{label:"Golang",permalink:"/blog/tags/golang"}],readingTime:2.845,truncated:!1,authors:[{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"}],frontMatter:{slug:"go-daisy-chain",title:'Understand Daisy Chain in "Google I/O 2012 - Go Concurrency Patterns"',authors:{name:"Ziwei Wang",title:"this website owner",url:"https://github.com/zwwang98",image_url:"https://github.com/zwwang98.png",imageURL:"https://github.com/zwwang98.png"},tags:["Go","Golang"]},nextItem:{title:"Set Alias in zsh",permalink:"/blog/zsh-set-alias"}},s={authorsImageUrls:[void 0]},u=[],h={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Recently I started to learn Golang and I found this conference - ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=f6kdp27TYZs"},"Google I/O 2012 - Go Concurrency Patterns"),' quite helpful on understanding go\'s concurrency. But I got stuck on the "daisy chain" code the first time I saw it.'),(0,i.kt)("p",null,'The "daisy chain" code are attatched below. I also created a leetcode playground holding the code - ',(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/playground/gAa59fh3"},"link to the code"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc f(left chan<- int, right <-chan int) {\n    left <- 1 + <-right\n}\n\nfunc main() {\n    fmt.Println("Program starts")\n    const n = 100000\n\n    leftmost := make(chan int)\n    right := leftmost // point B: what does these do ?\n    left := leftmost\n\n    for i := 0; i < n; i++ {\n        right = make(chan int)\n        go f(left, right)\n        left = right // point A\n    }\n\n    go func(c chan int) { c <- 1 }(right)\n\n    fmt.Println("Waiting leftmost receives the value")\n\n    fmt.Println(<-leftmost)\n\n    fmt.Println("Program exits")\n}\n')),(0,i.kt)("p",null,"I searched around, I found this ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/26135616/understand-the-code-go-concurrency-pattern-daisy-chain/74911252#74911252"},"stackoverflow post")," quite helpful but I felt the answers may not be detailed enough for newbie like me. So I post another more detialed answer, and here is it."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"I found dry-run this program could be really helpful to understand it."),(0,i.kt)("p",null,"At first, after executing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"leftmost := make(chan int)\nright := leftmost\nleft := leftmost\n")),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"leftmost"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," are all referring to the same ",(0,i.kt)("inlineCode",{parentName:"p"},"chan int")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int]\n     |                 \nleft, leftmost, right\n")),(0,i.kt)("p",null,"Let's run some iterations for the for-loop."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"i = 0")),(0,i.kt)("p",null,"When we just enter the for loop,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int]\n     |                 \nleft, leftmost, right\n")),(0,i.kt)("p",null,"after executing ",(0,i.kt)("inlineCode",{parentName:"p"},"right = make(chan int)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"go f(left, right)"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int] <-(+1)- [chan int]\n     |                 |\nleft, leftmost        right\n")),(0,i.kt)("p",null,"after executing ",(0,i.kt)("inlineCode",{parentName:"p"},"left = right")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int] <-(+1)- [chan int]\n     |                 |\n  leftmost        left, right\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"i = 1")),(0,i.kt)("p",null,"When we just enter the for loop,  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int] <-(+1)- [chan int]\n     |                 |\n  leftmost        left, right\n")),(0,i.kt)("p",null,"after executing ",(0,i.kt)("inlineCode",{parentName:"p"},"right = make(chan int)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"go f(left, right)"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int] <-(+1)- [chan int] <-(+1)- [chan int]\n     |                 |                   |\n  leftmost            left               right\n")),(0,i.kt)("p",null,"after executing ",(0,i.kt)("inlineCode",{parentName:"p"},"left = right")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int] <-(+1)- [chan int] <-(+1)- [chan int]\n     |                                     |\n  leftmost                            left, right\n")),(0,i.kt)("p",null,"I feel like two loops are enough to see the pattern:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every loop we create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"chan int"),' and append it at the end of the "linked list of ',(0,i.kt)("inlineCode",{parentName:"li"},"chan int"),'". '),(0,i.kt)("li",{parentName:"ul"},"So after ",(0,i.kt)("inlineCode",{parentName:"li"},"n = 100000")," loops, we created ",(0,i.kt)("inlineCode",{parentName:"li"},"100000")," new ",(0,i.kt)("inlineCode",{parentName:"li"},"chan int"),", and the number of ",(0,i.kt)("inlineCode",{parentName:"li"},"chan int"),' in the "linked list of ',(0,i.kt)("inlineCode",{parentName:"li"},"chan int")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"100001"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"100001")," ",(0,i.kt)("inlineCode",{parentName:"li"},"chan int")," means ",(0,i.kt)("inlineCode",{parentName:"li"},"100000")," gaps between each pair of adjacent ",(0,i.kt)("inlineCode",{parentName:"li"},"chan int"),", and each gap means one ",(0,i.kt)("inlineCode",{parentName:"li"},"+1"),".")),(0,i.kt)("p",null,"Before the for loop, because all ",(0,i.kt)("inlineCode",{parentName:"p"},"chan int")," are acting as receivers and there is no pass-in value, so all ",(0,i.kt)("inlineCode",{parentName:"p"},"chan int")," will just wait. "),(0,i.kt)("p",null,"After the for loop, we execute ",(0,i.kt)("inlineCode",{parentName:"p"},"go func(c chan int) { c <- 1 }(right)"),", then the ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),' is passed into the "linked list of ',(0,i.kt)("inlineCode",{parentName:"p"},"chan int"),'" and perform ',(0,i.kt)("inlineCode",{parentName:"p"},"+1")," on the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"100000")," times, so the final result to the ",(0,i.kt)("inlineCode",{parentName:"p"},"leftmost")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"100001"),"."),(0,i.kt)("p",null,"Things will be like when we pass ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),' into the "linked list of ',(0,i.kt)("inlineCode",{parentName:"p"},"chan int"),'":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[chan int] <-(+1)- [chan int] <-(+1)- ...... <-(+1)- [chan int] <- 1\n     |                                                   |\n  leftmost                                           left, right\n")),(0,i.kt)("p",null,"I created a leetcode playground holding all the code. You could try it ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/playground/gAa59fh3"},"here")," (",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/playground/gAa59fh3"},"https://leetcode.com/playground/gAa59fh3"),")."))}m.isMDXComponent=!0}}]);