(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{9726:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/memos",function(){return r(857)}])},3424:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var o=r(4584);r(3732);let n=r(1297).Ay.button.withConfig({componentId:"sc-b421989c-0"})(["position:fixed;bottom:2rem;right:1rem;height:2.5rem;width:2.5rem;font-size:1.25rem;border-radius:0.625rem;border:0;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:",";background-color:",";z-index:10;cursor:pointer;svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);}@media (any-hover:hover){&:hover{color:",";}}@media (any-hover:none){&:active{background:",";color:",";}}"],e=>e.theme.colors.textGray2,e=>e.theme.colors.tagBg,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover,e=>e.theme.colors.textPrimary),i=function(e){let{Icon:t,clickHandler:r,...i}=e;return(0,o.jsx)(n,{onClick:r,...i,children:(0,o.jsx)(t,{size:"1em"})})}},3737:(e,t,r)=>{"use strict";r.d(t,{K:()=>o});let o=r(1297).Ay.div.withConfig({componentId:"sc-8b6923d6-0"})(["font-style:italic;font-size:0.875rem;color:",";text-align:right;"],e=>e.theme.colors.textGray2)},8123:(e,t,r)=>{"use strict";r.d(t,{d:()=>f,B:()=>p});var o=r(4584),n=r.t(o,2),i=r(5222),s=r(3732),l=r(1297),a=r(926),c=r(3841),d=r(1992);function h(e){let[t,r]=(0,s.useState)(!1);(0,s.useEffect)(()=>{r(!0)},[]);let[n,i]=(0,s.useState)(!1),[l,d]=(0,s.useState)(!0),h=(0,s.useRef)(null),g=(0,s.useRef)(null),[p,f]=(0,s.useState)({width:"100%",height:"auto"}),[x,b]=(0,s.useState)({cursor:"zoom-in",transform:"scale(1) translate(0,0)"}),y=(0,c.XE)(),v=(0,c.eh)();(0,s.useEffect)(()=>{if(!t||!h.current)return;let e=()=>{d(!1)},r=h.current;return r.complete?e():(r.onload=e,r.onerror=()=>{d(!1)}),()=>{r.onload=null,r.onerror=null}},[t]),(0,a.z)("scroll",()=>{n&&(i(!1),w())},!1,[n]);let w=(0,s.useCallback)(()=>{if(n&&h.current&&g.current)b(e=>({...e,transform:"scale(1) translate(0,0)",cursor:"zoom-in"})),setTimeout(()=>{b(e=>({...e,zIndex:"auto"})),f(e=>({...e,height:"auto",zIndex:"auto"}))},300);else if(h.current&&g.current){let e=h.current.getBoundingClientRect(),t=g.current.getBoundingClientRect(),r=e.width,o=e.height,n=-(e.y-v/2+o/2),i=e.x-2*t.x-t.width/2+y/2,s=Math.min(y/r,v/o)-.05;f(e=>({...e,height:o+"px"})),b(e=>({...e,transform:"translateX(".concat(i,"px) translateY(").concat(n,"px) scale(").concat(s,")"),zIndex:11,cursor:"zoom-out"}))}else console.error("[Error] img nothing happened, ref not inited");i(!n)},[n,v,y]);if(t)return(0,o.jsxs)(m,{ref:g,style:{...p},children:[l&&(0,o.jsx)(u,{children:(0,o.jsx)("span",{})}),(0,o.jsx)("img",{ref:h,loading:"lazy",onClick:w,style:{...x,position:"relative",transition:"transform .3s ease"},...e}),n?(0,o.jsx)("div",{onClick:w,style:{position:"fixed",backdropFilter:"blur(10px)",top:0,left:0,WebkitBackdropFilter:"blur(10px)",right:0,bottom:0,cursor:"zoom-out",zIndex:10}}):null]})}let m=l.Ay.div.withConfig({componentId:"sc-743e6dca-0"})(["position:relative;transition:all .3s ease-in-out;margin:1.5rem 0;"]),u=l.Ay.div.withConfig({componentId:"sc-743e6dca-1"})(["position:absolute;top:0px;width:100%;text-align:center;span{display:inline-block;padding:10px;width:120px;height:20px;background:linear-gradient(#000 0 0) left/20px 20px no-repeat #ddd;animation:"," 1s infinite linear;}pointer-events:none;"],d.q4);function g(e){let t={Fragment:s.Fragment,...n,baseUrl:"file:///Users/zxx457/Projects/next-blog-paper/components/mdx.tsx"};return(0,i.H)(e,t)}function p(e){let t=(0,s.useMemo)(()=>g(e),[e]),r=(0,s.useMemo)(()=>({img:h}),[]);return(0,o.jsx)(t.default,{components:r})}function f(e,t){let r=(0,s.useMemo)(()=>g(e),[e]),n=(0,s.useMemo)(()=>({Tag:function(e){let{text:r}=e;return(0,o.jsxs)("span",{className:"tag",onClick:()=>{t&&t("#".concat(r),!0)},children:["#",r," "]})}}),[t]);return(0,o.jsx)(r.default,{components:n})}},8425:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,useImageBroswerStore:()=>x});var o=r(4584),n=r(1667),i=r(6714),s=r(3732),l=r(1297),a=r(7349),c=r(926),d=r(3841);function h(e){let{isModel:t,setModel:r,scrollRef:n,style:i,...l}=e,a=(0,d.eh)(),c=(0,s.useMemo)(()=>i?{...i,height:a+"px"}:{height:a+"px"},[i,a]);return(0,s.useEffect)(()=>(t?n?n.style.overflow="hidden":document.body.style.overflow="hidden":n?n.style.overflow="auto":document.body.style.overflow="auto",()=>{n?n.style.overflow="auto":document.body.style.overflow="auto"}),[t,n]),t&&(0,o.jsx)(m,{...l,$isOpen:t,onClick:e=>{e.stopPropagation(),r(!1)},style:c})}let m=l.Ay.div.withConfig({componentId:"sc-b03b72b9-0"})(["position:fixed;top:0;left:0;width:100vw;background:#000000de;z-index:10;cursor:zoom-out;will-change:transform;"]);var u=r(5749);let g={isPressed:!1,startpos:[0,0,0],starttime:0,trans:[0,0],direction:0,bias:0},p=e=>e.type.includes("touch")?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY},f=(e,t)=>e.type.includes("touch")?"move"===t?"touchmove":"touchend":"move"===t?"mousemove":"mouseup",x=(0,a.v)(e=>({isModel:!1,setisModel:t=>e(()=>({isModel:t})),imagesData:[],setImagesData:t=>e(()=>({imagesData:t})),currentIndex:0,setCurrentIndex:t=>e(()=>({currentIndex:t}))}));function b(){let e=x(e=>e),t=x(e=>e.imagesData),[r,l]=(0,s.useState)({curr:x(e=>e.currentIndex),last:x(e=>e.currentIndex)});r.curr>t.length-1&&console.error("uncaught invalid image index:",r,"in length",t.length);let a=(0,s.useCallback)(()=>{r.curr>0&&l({curr:r.curr-1,last:r.curr})},[r,l]),m=(0,s.useCallback)(()=>{r.curr<t.length-1&&l({curr:r.curr+1,last:r.curr})},[r,l,t]),b=(0,s.useCallback)(()=>{},[]),C=(0,s.useCallback)(e=>{"ArrowLeft"===e.key?a():"ArrowRight"===e.key&&m()},[m,a]);(0,c.z)("keydown",C);let{bind:S,trans:A,direction:I,isBeforeUnmount:E}=function(e,t,r,o){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:17,[i,l]=(0,s.useState)(),[a,c]=(0,s.useState)([0,0]),[d,h]=(0,s.useState)(0),[m,x]=(0,s.useState)(!1),b=(0,s.useCallback)((e,t)=>r=>{if(r.stopPropagation(),("mousedown"!==r.type||0==r.button)&&(r.preventDefault(),r.target)){g.isPressed=!0,g.starttime=Date.now(),g.startpos=[p(r).x,p(r).y,r.target.scrollTop];let o=r.target;o.addEventListener(f(r,"move"),e,{passive:!1}),o.addEventListener(f(r,"end"),t,{once:!0})}},[]),y=(0,s.useCallback)(e=>{if(e.stopPropagation(),e.type.includes("touch")&&e.touches.length>1){e.preventDefault();return}if(e.target&&g.isPressed){let t=p(e).x-g.startpos[0],r=p(e).y-g.startpos[1];if(g.trans=[t,r],0!==g.direction)c("x"===g.direction?[t-g.bias,0]:[0,r-g.bias]);else if(Math.abs(t)>20||Math.abs(r)>20){let e=Math.abs(t)>Math.abs(r)?"x":"y";g.bias="x"===e?t:r,g.direction=e,h(e),c("x"===e?[t-g.bias,0]:[0,r-g.bias])}}},[]),v=(0,s.useCallback)(n=>i=>{i.stopPropagation(),Date.now()-g.starttime<140&&5>Math.abs(g.trans[0])&&5>Math.abs(g.trans[1])?(x(!0),setTimeout(()=>{e.setisModel(!1),x(!1)},300)):"x"===g.direction&&(g.trans[0]<-60?r():g.trans[0]>60?t():o()),g.isPressed=!1,g.startpos=[0,0,0],g.trans=[0,0],c([0,0]),g.direction=0,g.bias=0,h(0),i.target.removeEventListener(f(i,"move"),n)},[e,t,r,o]);return(0,s.useEffect)(()=>{let e=(0,u.n)(y,n),t=b(e,v(e));l(()=>t)},[v,y,b,n]),{trans:a,direction:d,isBeforeUnmount:m,bind:{onTouchStart:i,onMouseDown:i}}}(e,a,m,b,20),z=(0,s.useMemo)(()=>"x"===I&&A[0]>60,[A,I]),M=(0,s.useMemo)(()=>"x"===I&&A[0]<-60,[A,I]),T=(0,d.eh)(),L=(0,d.XE)(),P=(0,s.useMemo)(()=>"x"===I?{transition:"transform 0.05s linear",transform:"translate3d(".concat(A[0]-r.curr*L,"px, 0px, 0px)"),width:"".concat(L*t.length,"px")}:{transition:"transform 0.5s ease",transform:"translate3d(".concat(-r.curr*L,"px, 0px, 0px)"),width:"".concat(L*t.length,"px")},[A,I,r.curr,L,t.length]),N=(0,s.useMemo)(()=>E?{opacity:0,transition:"opacity 0.3s ease"}:{},[E]),D=(0,s.useMemo)(()=>{let e=r.curr;return[e>0?{i:e-1,data:t[e-1]}:{i:e-1,data:void 0},{i:e,data:t[e]},e+1<t.length?{i:e+1,data:t[e+1]}:{i:e+1,data:void 0}]},[t,r.curr]),R=(0,s.useMemo)(()=>D.map(e=>{let t=L*e.i,r={transform:"translateX(".concat(t,"px)"),width:"".concat(L,"px"),height:"100%"};return e.data?(0===e.data.width||0===e.data.height?1:e.data.width/e.data.height)>.6||e.data.height<T?{...r,display:"flex",alignItems:"center"}:{...r,overflowY:"auto"}:r}),[D,T,L]),B=(0,s.useMemo)(()=>"x"===I?{overflowY:"hidden"}:{},[I]),G=(0,s.useCallback)(e=>{let t=0===e.width||0===e.height?1:e.width/e.height;return t>=2?{maxWidth:L,maxHeight:.9*T+"px"}:t>.6||e.height<T?{maxWidth:L,maxHeight:T+"px"}:{maxWidth:.95*L}},[T,L]);return(0,o.jsxs)(h,{isModel:!0,setModel:e.setisModel,style:{...N,background:"#1d1d1d"},children:[(0,o.jsx)(k,{...S,onClick:e=>e.stopPropagation(),style:P,children:D.map((e,t)=>(0,o.jsx)(y,{style:{...R[t],...B},children:e.data&&(0,o.jsx)(v,{src:"loaded"===e.data.ok?e.data.src:"",alt:e.data.ok,style:G(e.data)})},e.i))}),r.curr>0&&(0,o.jsx)(j,{$isLeft:!0,$isShown:z,onClick:e=>{e.stopPropagation(),a()},children:(0,o.jsx)(n.A,{})}),r.curr<t.length-1&&(0,o.jsx)(j,{$isLeft:!1,$isShown:M,onClick:e=>{e.stopPropagation(),m()},children:(0,o.jsx)(i.A,{})}),(0,o.jsxs)(w,{children:[r.curr+1,"/",t.length," \xa0|\xa0",(0,o.jsx)("span",{onClick:t=>{t.stopPropagation(),e.setisModel(!1)},children:"关闭"})]})]})}let y=l.Ay.div.withConfig({componentId:"sc-3d2341b8-0"})(["position:absolute;will-change:transform;"]),v=l.Ay.img.withConfig({componentId:"sc-3d2341b8-1"})(["display:block;margin:0 auto;&::after{content:attr(alt);}"]),w=l.Ay.div.withConfig({componentId:"sc-3d2341b8-2"})(["position:fixed;display:flex;justify-content:center;align-items:center;top:0.5rem;right:0.5rem;height:2.5rem;border-radius:1.25rem;padding:0 1rem;background:#5b5b5bbd;color:white;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);&:hover{opacity:1;}"]),j=l.Ay.div.withConfig({componentId:"sc-3d2341b8-3"})(["position:fixed;bottom:calc(50vh - 2.5rem);display:flex;justify-content:center;align-items:center;cursor:pointer;width:2.5rem;height:2.5rem;padding:0rem;color:white;opacity:0.5;background:#5b5b5bbd;font-size:1.25rem;border-radius:50%;"," @media screen and (max-width:580px){"," transition:left 0.3s linear,right 0.3s linear;}&:hover{opacity:1;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);}"],e=>e.$isLeft?"left: 1rem;":"right: 1rem;",e=>e.$isLeft?e.$isShown?"left: 1rem;":"left: -2.5rem;":e.$isShown?"right: 1rem;":"right: -2.5rem;"),k=l.Ay.div.withConfig({componentId:"sc-3d2341b8-4"})(["width:100%;height:100%;overflow-x:clip;overflow-y:hidden;position:relative;cursor:default;will-change:transform;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"])},3296:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var o=r(1297),n=r(6856);let i=o.Ay.div.withConfig({componentId:"sc-123515c6-0"})(["color:",";h1,h2,h3,h4,h5{color:",";}h6{color:",";}hr{background-color:",";}img,picture,video,canvas,svg,pre{margin:1.5rem auto;display:block;}img,picture{border-radius:1rem;box-shadow:rgb(0 0 0 / 15%) 0px 2px 6px;}blockquote{margin:1.5rem 0;}a{position:relative;font-weight:bold;color:",";transition:box-shadow .3s ease;box-shadow:inset 0 -2px 0 ",";}a:hover{","}a:hover::before{height:0.4em;}code{color:",";background-color:",";border-radius:3px;padding:0.2rem 0.375rem;margin:0rem 1px;font-size:0.875rem;}pre code{color:",";border-radius:0.5rem;padding:1rem 2rem;margin:unset;overflow:auto;}blockquote{border-left:solid 2px;padding-left:1.5em;color:",';}del{opacity:.33;}ul li{display:block;position:relative;}ul li::before{content:"•";position:absolute;color:',";left:-1rem;}@media screen and (min-width:580px){img,picture,video,canvas,svg,pre{display:block;}}.hljs{background:",";}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}.hljs-link{text-decoration:underline;}.hljs-comment,.hljs-quote{color:#a79b87ba;font-style:italic;}.hljs-params,.hljs-type{color:#a79b87c4;}.hljs-punctuation,.hljs-attr{color:rgb(89 161 197);}.hljs-selector-tag,.hljs-name,.hljs-meta,.hljs-operator,.hljs-char.escape_{color:#c56200;}.hljs-keyword,.hljs-deletion{color:#799f67;}.hljs-regexp,.hljs-selector-pseudo,.hljs-selector-attr,.hljs-variable.language_{color:#cc5e91;}.hljs-subst,.hljs-property,.hljs-code,.hljs-formula,.hljs-section,.hljs-title.function_{color:#e36b6b;}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition,.hljs-selector-class,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-meta .hljs-string{color:#c68032;}.hljs-variable,.hljs-template-variable,.hljs-number,.hljs-literal,.hljs-link,.hljs-built_in,.hljs-title,.hljs-selector-id,.hljs-tag,.hljs-doctag,.hljs-attribute,.hljs-template-tag,.hljs-meta .hljs-keyword{color:",";}"],e=>e.theme.colors.textSecondary,e=>e.theme.colors.textPrimary,e=>e.theme.colors.textGray,e=>e.theme.colors.uiLineGray3,e=>e.theme.colors.textPrimary,e=>e.theme.colors.accentHover,n.Gr,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.textSecondary,e=>e.theme.colors.textGray,e=>e.theme.colors.accent,e=>e.theme.colors.codeBlockBg,e=>e.theme.colors.accent)},926:(e,t,r)=>{"use strict";r.d(t,{z:()=>n});var o=r(3732);function n(e,t,r,n){(0,o.useEffect)(()=>(document.addEventListener(e,t,r),()=>{document.removeEventListener(e,t,r)}),[e,t,r,...n||[]])}},3841:(e,t,r)=>{"use strict";r.d(t,{XE:()=>i,eh:()=>n});var o=r(3732);function n(){let[e,t]=(0,o.useState)(globalThis.innerHeight);return(0,o.useEffect)(()=>{let e=()=>{t(globalThis.innerHeight)};return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[]),e}function i(){let[e,t]=(0,o.useState)(globalThis.innerWidth);return(0,o.useEffect)(()=>{let e=()=>{t(globalThis.innerWidth)};return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[]),e}},857:(e,t,r)=>{"use strict";let o;r.r(t),r.d(t,{MemoCSRAPI:()=>em,__N_SSG:()=>eh,default:()=>eu});var n=r(4584),i=r(2569),s=r(2948),l=r(2562),a=r(4808),c=r(130),d=r(2112),h=r.n(d),m=r(3575),u=r.n(m),g=r(3732),p=r(3025),f=r(1297),x=r(8853),b=r(3424),y=r(3858),v=r(5217);function w(e){let{title:t,Icon:r,children:o,...i}=e;return(0,n.jsxs)(j,{...i,children:[(0,n.jsxs)(k,{children:[r&&(0,n.jsx)(r,{size:"1em",style:{marginRight:"0.5em"}}),t]}),(0,n.jsx)("div",{style:{paddingTop:"0.5rem",fontSize:"0.9rem"},children:o})]})}let j=f.Ay.section.withConfig({componentId:"sc-eea4445-0"})(["margin-top:1.5rem;padding:0.5rem 1rem;line-height:1.625rem;color:",";"],e=>e.theme.colors.textSecondary),k=f.Ay.div.withConfig({componentId:"sc-eea4445-1"})(["font-weight:600;text-transform:uppercase;font-size:0.875rem;color:",";"],e=>e.theme.colors.textGray2);var C=r(8425);let S="/data/memos",A=async()=>fetch(S+"/status.json").then(e=>e.json()).then(e=>e),I=async(e,t)=>{let r=[Math.floor(e/10),e%10],o=[Math.floor((e+t-1)/10),(e+t-1)%10],n=await A(),i=[];for(let e=r[0];e<=o[0];e++)e>=0&&e<=n.pages&&i.push("".concat(S,"/").concat(e,".json"));let s=i.map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>0===t?o[0]-r[0]!=0?e.slice(r[1]):e.slice(r[1],o[1]+1):t===o[0]?e.slice(0,o[1]+1):e));return(await Promise.all(s)).flat()},E=async(e,t)=>{let r=(await A()).pageMap.filter(r=>{if(r.endDate<e.getTime()||r.startDate>t.getTime())return!1}).map(e=>"".concat(S,"/").concat(e,".json")).map(async(e,t)=>fetch(e).then(e=>e.json()).then(e=>e));return(await Promise.all(r)).flat()},z={static:{getMemoInfo:A,queryMemoByCount:I,queryMemoByDate:E,queryMemoTags:async()=>fetch("".concat(S,"/tags.json")).then(e=>e.json()),queryMemoImgs:async()=>[]}};r(248);var M=r(2215),T=r(3170),L=r(459);function P(){return function(e){(0,L.YR)(e,"paragraph",function(e,t,r){let o=[];e.children.forEach(e=>{if("text"===e.type){let t=e.value,r=function(e){let t=["#","##","###","####","#####","######"],r=[],o="",n=!1;for(let i=0;i<e.length;i++){let s=e[i];"`"===s&&(n=!n)&&(o=""),n||(o.length>0?" "===s||"\n"===s||"\r\n"===s?(t.includes(o)||r.push(o),o=""):o+=s:"#"!==s||0!==i&&" "!==e[i-1]&&"\n"!==e[i-1]||(o+=s))}return o.length>0&&r.push(o),r}(t);if(r.length>0){let e=function(e,t){if(t.includes(e))return[{text:e,isDelimiter:!0}];let r=[{text:e,isDelimiter:!1}];for(let e of t){let t=[];for(let o of r){if(o.isDelimiter){t.push(o);continue}if(""===o.text)continue;let r=o.text.split(e);for(let o=0;o<r.length&&(t.push({text:r[o],isDelimiter:!1}),o!==r.length-1);o++)t.push({text:e,isDelimiter:!0})}r=t}return r.filter(e=>""!==e.text)}(t,r),n="#"+r[r.length-1],i=e[e.length-1].text;i.endsWith(n)&&(e[e.length-1]={text:i.slice(0,i.length-n.length),isDelimiter:!1},e.push({text:n,isDelimiter:!0})),e.forEach(e=>{if(e.isDelimiter){let t={type:"mdxJsxFlowElement",name:"Tag",attributes:[{type:"mdxJsxAttribute",name:"text",value:e.text.slice(1)}]};o.push(t)}else o.push({type:"text",value:e.text})})}else o.push(e)}else o.push(e)}),e.children=o})}}var N=function(e){return e[e.Unknown=0]="Unknown",e[e.isImgOnly=1]="isImgOnly",e[e.Other=2]="Other",e}(N||{});let D=async()=>{o||(o=await Promise.all([r.e(792),r.e(920),r.e(467)]).then(r.bind(r,7467)).then(e=>e.compile),await Promise.all([r.e(792),r.e(920),r.e(467)]).then(r.bind(r,7467)).then(e=>e.runSync))};async function R(e){o||await D();try{return{code:String(await o(e,{outputFormat:"function-body",remarkPlugins:[T.A,P],rehypePlugins:[M.A]}))}}catch(e){return console.error("%% [mdx.ts ]error occured when compiling:",e),{code:"compile error"}}}var B=r(9256),G=r(3737),H=r(6750),_=r(6539),$=r(1992),F=r(6856),X=r(8123),Y=r(3296);function W(e){var t,r,o;let{imgsmd:i}=e,s=(0,C.useImageBroswerStore)(e=>e),[l,a]=(0,g.useState)(Array(i.length).fill(1).map((e,t)=>({ok:"loading",index:t,src:"",width:1,height:1,alt:""})));return((0,g.useEffect)(()=>{(async function(){let e=i.map(async(e,t)=>{let r;let o=function(e){let t=/!\[(.*?)\]\((.*?)\)/.exec(e);return t?{alt:t[1],url:t[2]}:null}(e);if(!o)return{ok:"failed",index:t,src:"",width:0,height:0,alt:""};let{url:n,alt:i}=o,s=new Image,l=new Promise((e,r)=>{s.onload=()=>e(s),s.onerror=()=>r({ok:"failed",index:t,src:"",width:0,height:0,alt:i}),s.src=n});return(await l.catch(e=>{r=e}),r)?r:{ok:"loaded",index:t,src:n,width:s.width,height:s.height,alt:i}});try{let t=await Promise.all(e);a(t)}catch(e){console.error("Error loading images:",e)}})()},[i,a]),0===i.length)?null:(0,n.jsx)(n.Fragment,{children:1===i.length?(0,n.jsx)("div",{style:{height:"250px",paddingLeft:"48px"},children:(0,n.jsxs)(q,{style:{maxWidth:"100%",height:"100%",aspectRatio:l[0]?l[0].width/l[0].height>2.5?2.5:l[0].width/l[0].height<.75?.75:l[0].width/l[0].height:2},children:[" ",(0,n.jsx)("img",{loading:"lazy",src:(null===(t=l[0])||void 0===t?void 0:t.ok)==="loaded"?null===(r=l[0])||void 0===r?void 0:r.src:"",alt:null===(o=l[0])||void 0===o?void 0:o.ok}),(0,n.jsx)(O,{onClick:e=>{e.stopPropagation(),s.setCurrentIndex(0),s.setImagesData(l),s.setisModel(!0)}})]})}):(0,n.jsx)(U,{children:l.map((e,t)=>(0,n.jsxs)(q,{onTouchEnd:e=>{e.stopPropagation()},children:[" ",(0,n.jsx)("img",{loading:"lazy",src:"loaded"===e.ok?e.src:"",alt:e.ok}),(0,n.jsx)(O,{onClick:e=>{e.stopPropagation(),s.setCurrentIndex(t),s.setImagesData(l),s.setisModel(!0)}})]},t))})})}let O=f.Ay.div.withConfig({componentId:"sc-8b8cd0ed-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),q=f.Ay.div.withConfig({componentId:"sc-8b8cd0ed-1"})(["border-radius:0.5rem;background:",";position:relative;overflow:hidden;aspect-ratio:1;cursor:zoom-in;user-select:none;-webkit-user-select:none;& img{position:absolute;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;top:0;left:0;}& img:after{content:attr(alt);background:",";color:",";font-weight:bold;display:block;position:absolute;top:0;height:100%;width:100%;text-align:left;padding:1em;word-break:break-all;}"],e=>e.theme.colors.bg2,e=>e.theme.colors.bg2,e=>e.theme.colors.uiLineGray),U=f.Ay.div.withConfig({componentId:"sc-8b8cd0ed-2"})(["display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:8px;padding-left:48px;@media screen and (max-width:580px){grid-template-columns:repeat(3,1fr);}"]);function J(e){let{source:t,setSearchText:r,triggerHeightChange:o,...i}=e,[s,l]=(0,g.useState)(!0),a=(0,g.useContext)(f.Dx),c=g.useRef(null),d=t.length>200,h=(0,g.useMemo)(()=>{let e=new Date(t.id);return"Invalid Date"!==e.toString()?(0,H.Wm)(e):t.id},[t.id]);return(0,n.jsxs)(Q,{...i,$isCollapse:!1!==d&&s,ref:c,children:[(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)(ee,{children:[(0,n.jsx)("img",{className:"avatar",src:a.assets.favico,alt:_.E.author}),(0,n.jsxs)("div",{className:"meta-text",children:[(0,n.jsx)("span",{className:"author",children:_.E.author}),(0,n.jsx)("span",{className:"meta-sm date",children:h}),(0,n.jsxs)("span",{className:"meta-sm word-count",children:[t.length,"\xa0字"]})]})]}),(0,n.jsx)(Z,{$bottomSpace:d,children:(0,X.d)(t.code,r)}),(0,n.jsx)(V,{$isCollapse:s,$isShown:d,children:(0,n.jsx)("div",{onClick:function(e){if(!s){let e=c.current;if(e){let t=e.getBoundingClientRect().top;(t<0||t>window.innerHeight)&&globalThis.scrollTo({top:t+globalThis.scrollY})}}l(!s),c.current&&o&&o(!0)},className:"rd-more",children:(0,n.jsx)("span",{children:s?"展开全文":"收起"})})})]}),0!==t.imgsmd.length&&(0,n.jsx)(W,{imgsmd:t.imgsmd})]})}function K(){return(0,n.jsx)(Q,{$isCollapse:!1,children:(0,n.jsx)("span",{style:{opacity:.35,fontWeight:"bold"},children:"Loading..."})})}let Q=f.Ay.section.withConfig({componentId:"sc-c0bdb0ab-0"})(["background:",";padding:1.25rem 1.5rem;animation:"," .3s ease;@media screen and (max-width:580px){padding:1rem;border-radius:unset;}& > .content{position:relative;height:",";overflow:hidden;}"],e=>e.theme.colors.bg,$.Nd,e=>!0===e.$isCollapse?"18.2rem":"auto"),V=f.Ay.div.withConfig({componentId:"sc-c0bdb0ab-1"})(["display:",";position:absolute;bottom:0;width:100%;height:7rem;text-align:right;color:",";"," .rd-more{font-size:0.875rem;letter-spacing:0.02rem;margin-top:5.5rem;;cursor:pointer;span{transition:box-shadow .3s;margin-right:0.5rem;}}& .rd-more:hover span{","}"],e=>!0===e.$isShown?"block":"none",e=>e.theme.colors.accent,e=>!0===e.$isCollapse?e.theme.colors.maskGradient:"",()=>F.Mw.f),Z=(0,f.Ay)(Y.X).withConfig({componentId:"sc-c0bdb0ab-2"})(["padding-bottom:",";padding-left:48px;p,ul,ol{line-height:1.625rem;}h1,h2,h3,h4,h5,h6{font-size:1rem;}& .tag{color:",";}& .tag:hover{cursor:pointer;color:",";}"],e=>!0===e.$bottomSpace?"2rem":"inherit",e=>e.theme.colors.accent,e=>e.theme.colors.accentHover),ee=f.Ay.div.withConfig({componentId:"sc-c0bdb0ab-3"})(["display:flex;align-items:center;& .avatar{width:40px;height:40px;margin-right:8px;border-radius:50%;border:1px solid ",";}& .meta-text{display:flex;align-items:flex-start;flex-direction:column;}& .meta-sm{color:",";font-size:0.8rem;}& .author{color:",";margin-right:0.25rem;font-weight:600;}& .date{}& .word-count{position:absolute;right:0;}"],e=>e.theme.colors.uiLineGray,e=>e.theme.colors.textGray,e=>e.theme.colors.textSecondary);var et=r(5749);function er(e){let{Elem:t,index:r,source:o,placeHolder:i,setplaceHolder:s}=e,l=(0,g.useRef)(null),a=(0,g.useCallback)(()=>{if(l.current){let e=l.current.offsetHeight;s(t=>{if(t[r]===e||0===e)return t;let o=[...t];return o[r]=e,o})}},[l,s,r]);(0,g.useEffect)(()=>{let e=(0,et.n)(a,150);return globalThis.addEventListener("resize",e),()=>{globalThis.removeEventListener("resize",e)}},[l,r,s,a]);let[c,d]=(0,g.useState)(!1);(0,g.useEffect)(()=>{c&&(a(),d(!1))},[c,a]);let[h,m]=(0,g.useState)(!1);(0,g.useEffect)(()=>{a(),m(!0)},[l,a]);let u=(0,g.useMemo)(()=>i.slice(0,r).reduce((e,t)=>e+=t,0),[r,i]);return(0,n.jsx)("div",{ref:l,style:{position:"absolute",width:"100%",transform:"translateY(".concat(u,"px)"),visibility:h?"visible":"hidden"},children:t({source:o,triggerHeightChange:d})})}let eo=e=>{let{sources:t,setSources:r,Elem:o,scrollRef:i,fetchFrom:s,batchsize:l,Loading:a,style:c,...d}=e,[h,m]=(0,g.useState)(Array(t.length).fill(300)),[u,p]=(0,g.useState)(Array(t.length).fill(0).map((e,t)=>t)),[f,x]=(0,g.useState)(3*t.length),[b,y]=(0,g.useState)(!1),v=(0,g.useRef)({enable:!0}),w=(0,g.useMemo)(()=>h.reduce((e,t)=>e+=t,0),[h]),j=(0,g.useCallback)(e=>{let t=0;for(let r=0;r<e;r++)t+=h[r];return t},[h]);return(0,g.useEffect)(()=>{let e=null==i?void 0:i.current,o=(0,et.n)(()=>{if(!v.current.enable)return;let o=j(u[u.length-1])-j(u[0]),n=(e?e.scrollTop:globalThis.scrollY)-j(u[0]),i=n+globalThis.innerHeight-(e&&e.getBoundingClientRect().y>0?e.getBoundingClientRect().y:0),a=n/o;if(!isNaN(a)&&isFinite(a)&&!(a>1.5)){if(v.current={enable:!1},s&&a<.2){let e=u[0]-l;if(e<0){v.current={enable:!0};return}y(!0),s(e,l).then(e=>{if(y(!1),!e||0===e.length){v.current={enable:!0};return}let o=u.map(e=>e-u.length);e.length>u.length?o=Array(e.length-u.length).fill(0).map((t,r)=>r-e.length+u.length+o[0]).concat(o):e.length<u.length&&(o=o.slice(u.length-e.length,u.length));let n=o.concat(u),i=e.concat(t);n.length>f&&(n.splice(0-o.length,o.length),i.splice(0-o.length,o.length)),p(n),r(i),v.current={enable:!0}})}else if(s&&i/o>.8){let e=u[u.length-1]+1;y(!0),s(e,l).then(e=>{if(y(!1),!e||0===e.length){v.current={enable:!0};return}let o=u.map(e=>e+u.length);if(e.length>u.length){let t=Array(e.length-u.length).fill(0).map((e,t)=>t+o[o.length-1]);o=o.concat(t)}else e.length<u.length&&(o=o.slice(0,e.length));if(o[o.length-1]>h.length-1){let e=Array(o[o.length-1]-h.length+1).fill(300);m(h.concat(e))}let n=u.concat(o),i=t.concat(e);n.length>f&&(n.splice(0,e.length),i.splice(0,e.length)),p(n),r(i),v.current={enable:!0}})}else v.current={enable:!0}}},500);return e?e.addEventListener("scroll",o):globalThis.addEventListener("scroll",o),()=>{e?e.addEventListener("scroll",o):globalThis.removeEventListener("scroll",o)}},[v,i,s,u,r,h,j,t,l,f]),(0,n.jsxs)("div",{style:Object.assign({position:"relative",width:"100%",minHeight:"".concat(w,"px")},c),className:d.className,children:[t.map((e,t)=>(0,n.jsx)(er,{index:u[t],Elem:o,source:e,placeHolder:h,setplaceHolder:m},e.id)),a&&b?(0,n.jsx)("div",{style:{position:"absolute",width:"100%",transform:"translateY(".concat(h.slice(0,h.length).reduce((e,t)=>e+=t,0),"px)")},children:(0,n.jsx)(a,{})}):null]})};function en(e){let{postsData:t,postsDataBackup:r,setpostsData:o,setpostsDataBackup:i,client:s,searchStatus:l,resetSearchStatus:a,setTextAndSearch:c}=e,[d,h]=(0,g.useState)((z[s]||console.error("[client.ts] client ".concat(s," not in clientList")),z[s])),m=(0,g.useCallback)(async(e,t)=>d.queryMemoByCount(e,t).then(e=>e.length>0?Promise.all(e.map(async e=>({...e,length:e.content.length,code:(await R(e.content)).code}))):void 0),[d]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(G.K,{style:{marginRight:"1rem"},children:function(){switch(l.isSearch){case"ready":return"";case"searching":return"Searching...";case"done":return(0,n.jsxs)(n.Fragment,{children:["Results: ",t.length," memos",(0,n.jsx)("span",{style:{fontStyle:"normal",fontWeight:"bold",cursor:"pointer",marginLeft:"0.875em"},onClick:()=>{a(),o(r)},children:"X"})]})}}()}),(0,n.jsx)(ei,{style:{minHeight:"80vh",marginTop:"0.625rem"},children:"ready"===l.isSearch?(0,n.jsx)(eo,{className:"virtualist",sources:t,setSources:o,Elem:e=>(0,n.jsx)(J,{source:e.source,setSearchText:c,triggerHeightChange:e.triggerHeightChange,style:e.style}),fetchFrom:m,batchsize:10,Loading:K},"vl1"):"done"===l.isSearch?(0,n.jsx)(eo,{className:"virtualist",sources:t,setSources:o,Elem:e=>(0,n.jsx)(J,{source:e.source,setSearchText:c,triggerHeightChange:e.triggerHeightChange}),batchsize:10},l.searchText):null}),(0,n.jsx)(B.A,{style:{marginTop:"5rem"}})]})}let ei=f.Ay.div.withConfig({componentId:"sc-8570f902-0"})(["min-height:80vh;margin:0.625rem 0;border-radius:1.5rem;border:1px solid ",";background-color:",";box-shadow:0 0 12px 0 ",";.virtualist > div:first-child > section{border-radius:2rem 2rem 0 0;}.virtualist > div:last-child > section{border-radius:0 0 2rem 2rem;}.virtualist > div:not(:last-child) > section{border-bottom:solid 1px ",";}"],e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.bg,e=>e.theme.colors.shadowBg,e=>e.theme.colors.uiLineGray2);function es(e){let{info:t}=e,[r,o]=(0,p.Bd)();return(0,n.jsxs)(el,{children:[(0,n.jsxs)("div",{className:"item active",children:[(0,n.jsx)("span",{className:"title",children:r("memos")}),(0,n.jsx)("span",{className:"count",children:t.memos})]}),(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("span",{className:"title",children:r("photos")}),(0,n.jsx)("span",{className:"count",children:t.imgs})]})]})}let el=f.Ay.section.withConfig({componentId:"sc-3cd8667f-0"})(["margin-top:1.5rem;padding-left:1rem;color:",";.item{padding:0.25rem 0;margin-right:0.75rem;border-right:2px solid ",";display:flex;align-items:flex-end;}.item.active{border-right:2px solid ",";}.title{font-weight:600;margin-right:0.25rem;}.count{font-size:0.875rem;font-weight:600;color:",";vertical-align:bottom;}"],e=>e.theme.colors.textSecondary,e=>e.theme.colors.uiLineGray,e=>e.theme.colors.accent,e=>e.theme.colors.textGray2);var ea=r(926);let ec=function(e){let{inputRef:t,setRes:o,initData:n}=e,[i,s]=(0,g.useState)(),[l,a]=(0,g.useState)({isSearch:"ready",searchText:""}),c=(0,g.useCallback)(async()=>{let e;console.debug("%% init search...");let{searchObj:t,filterRes:i}=await n();return s(e=(await r.e(196).then(r.bind(r,8196))).createNaive({data:t,field:["tags","content"],notifier:function(e){Promise.all(i(e)).then(e=>{o(e),a(e=>({...e,isSearch:"done"}))})},disableStreamNotify:!0})),a(e=>({...e})),e},[n,o]),d=(0,g.useCallback)(async()=>{if(!t.current)return;let e=t.current.value.trim();if(0===e.length)return;a(t=>({...t,isSearch:"searching",searchText:e})),globalThis.scrollTo({top:0});let r=i;r||(r=await c()),r.search(e.split(" "))},[c,i,t]),h=(0,g.useCallback)(function(e){let r=!(arguments.length>1)||void 0===arguments[1]||arguments[1];t.current&&(t.current.value=e,r&&d())},[d,t]);return{searchStatus:l,resetSearchStatus:(0,g.useCallback)(()=>{a(()=>({isSearch:"ready",searchText:""}))},[]),setTextAndSearch:h,search:d,initSearch:c}},ed=h()(()=>Promise.resolve().then(r.bind(r,8425)),{loadableGenerated:{webpack:()=>[8425]}});var eh=!0;let em="/data/memos";function eu(e){let{source:t,info:r,memotags:o,client:d}=e,h=(0,g.useContext)(f.Dx),[m,j]=(0,g.useState)(!1),[k,S]=(0,p.Bd)(),A=(0,C.useImageBroswerStore)(e=>e.isModel),[I,E]=(0,g.useState)(t),[z,M]=(0,g.useState)(t),T=(0,g.useRef)(null),{searchStatus:L,resetSearchStatus:P,setTextAndSearch:N,search:D,initSearch:B}=ec({inputRef:T,setRes:E,initData:async()=>{let e=Array.from({length:r.pages+1},(e,t)=>"".concat(em,"/").concat(t,".json")).map(e=>fetch(e).then(e=>e.json())),t=(await Promise.all(e)).flatMap(e=>e);return{searchObj:t.map(e=>({id:e.id,title:"",content:e.content,tags:e.tags})),filterRes:e=>{let r=e.map(e=>e.id);return t.filter(e=>!!r.includes(e.id)).map(async e=>({...e,code:(await R(e.content)).code,length:e.content.length}))}}}}),G=(0,g.useCallback)(()=>{if(T.current&&""===T.current.value){E(z),P();return}D()},[D,z,P]);return(0,ea.z)("keydown",e=>{T.current&&T.current===document.activeElement&&"Enter"===e.key&&G()},void 0,[D]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"".concat(_.E.author," - Memos")}),(0,n.jsx)(x.CommonHead,{})]}),(0,n.jsx)(y.A,{placeHolder:!1,hideSearch:!0,style:{borderBottom:"1px solid "+(null==h?void 0:h.colors.uiLineGray2)}}),(0,n.jsxs)("main",{style:{background:null==h?void 0:h.colors.bg2},children:[(0,n.jsxs)(eg,{children:[(0,n.jsx)(b.A,{className:"button-float",Icon:i.A,clickHandler:e=>j(e=>!e)}),(0,n.jsxs)(v.dR,{sep:1,siderLocation:"right",children:[(0,n.jsx)(ep,{children:(0,n.jsx)(en,{postsData:I,postsDataBackup:z,setpostsData:E,setpostsDataBackup:M,client:d,searchStatus:L,resetSearchStatus:P,setTextAndSearch:N})}),(0,n.jsxs)(ef,{$isMobileSider:m,children:[(0,n.jsxs)("div",{className:"close-btn",onClick:e=>{e.stopPropagation(),j(e=>!e)},children:["小小の菜单",(0,n.jsx)(s.A,{size:"1.25em",style:{marginLeft:".5rem"}})]}),(0,n.jsxs)(ex,{children:[(0,n.jsx)("input",{type:"text",placeholder:k("search"),ref:T,onFocus:()=>{B()}}),(0,n.jsx)(l.A,{className:"hover-gold",size:"1.4rem",onClick:G})]}),(0,n.jsx)(es,{info:r}),(0,n.jsx)(w,{Icon:a.A,title:k("tags"),children:o.map(e=>(0,n.jsxs)("span",{className:"hover-gold",style:{display:"inline-block",paddingRight:"0.75em"},onClick:()=>{N("#"+e.name)},children:[(0,n.jsx)(c.A,{size:"1rem",style:{opacity:.5,paddingRight:"1px"}}),"".concat(e.name),e.memoIds.length>1?(0,n.jsxs)("span",{style:{opacity:.5},children:["(",e.memoIds.length,")"]}):""]},e.name))})]})]})]}),A&&(0,n.jsx)(ed,{})]})]})}let eg=f.Ay.div.withConfig({componentId:"sc-7629769c-0"})(["max-width:1080px;margin:0 auto;.button-float{display:none;}@media screen and (max-width:780px){max-width:100%;.button-float{display:unset;}}@media screen and (max-width:580px){}"]),ep=f.Ay.div.withConfig({componentId:"sc-7629769c-1"})(["width:100%;padding:73px 16px 48px 16px;align-self:flex-end;&::-webkit-scrollbar{display:none;}@media screen and (min-width:1080px){max-width:640px;}@media screen and (max-width:780px){width:100%;}@media screen and (max-width:580px){padding-left:0;padding-right:0;}"]),ef=f.Ay.div.withConfig({componentId:"sc-7629769c-2"})(["position:sticky;max-width:15rem;padding-top:83px;padding-bottom:64px;margin:0 0.5rem;height:100vh;overflow-y:auto;&::-webkit-scrollbar{display:none;}.close-btn{display:none;z-index:1;}@media screen and (max-width:1080px){margin:0;}@media screen and (max-width:780px){"," position:fixed;bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;max-width:unset;width:96%;right:2%;height:66vh;padding:0rem 1rem 1rem 1rem;transition:transform .3s ease;transform:",";.close-btn{position:sticky;top:0;background:inherit;display:flex;font-weight:600;justify-content:space-between;align-items:center;padding:1rem 0;"," color:",";font-size:1rem;cursor:pointer;}.close-btn:hover{color:",";}}.hover-gold{cursor:pointer;}.hover-gold:hover{color:",";}"],F.mR,e=>e.$isMobileSider?"translateY(0)":"translateY(105%)",e=>e.$isMobileSider?null:"visibility:hidden;",e=>e.theme.colors.textGray2,e=>e.theme.colors.accent,e=>e.theme.colors.accent),ex=f.Ay.div.withConfig({componentId:"sc-7629769c-3"})(["border-radius:0.75rem;background:",";color:",";display:flex;align-items:center;margin:0 0.5rem;border:1px solid ",";box-shadow:0 0 12px 0 ",";&:focus-within{border:1px solid ",";}input{border:none;background:inherit;line-height:2rem;color:inherit;flex:1 1 auto;width:0;margin-left:1rem;}input:focus,input:focus-visible{outline:none;}input::placeholder{color:",";}svg{margin:0 auto;flex:0  0 auto;margin:0 0.6rem 0 0.5rem;color:",";}"],e=>e.theme.colors.bg,e=>e.theme.colors.textGray,e=>e.theme.colors.uiLineGray2,e=>e.theme.colors.shadowBg,e=>e.theme.colors.accentHover,e=>e.theme.colors.textGray3,e=>e.theme.colors.uiLineGray)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,470,979,853,636,411],()=>t(9726)),_N_E=e.O()}]);