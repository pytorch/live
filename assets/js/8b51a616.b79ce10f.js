"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3462],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,d({},t,{components:n}))}},u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,s=p["".concat(l,".").concat(c)]||p[c]||f[c]||d;return n?r.createElement(s,i(i({ref:t},m),{},{components:n})):r.createElement(s,i({ref:t},m))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,l=new Array(d);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<d;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},27612:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var r=n(83117),a=n(80102),d=(n(67294),n(3905)),l=["components"],i={id:"torchlive_torch.module",title:"Interface: Module",sidebar_label:"Module",custom_edit_url:null},o=void 0,m={unversionedId:"api/core/interfaces/torchlive_torch.module",id:"version-0.2.0/api/core/interfaces/torchlive_torch.module",title:"Interface: Module",description:"torchlive/torch.Module",source:"@site/versioned_docs/version-0.2.0/api/core/interfaces/torchlive_torch.module.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/torchlive_torch.module",permalink:"/live/docs/api/core/interfaces/torchlive_torch.module",editUrl:null,tags:[],version:"0.2.0",frontMatter:{id:"torchlive_torch.module",title:"Interface: Module",sidebar_label:"Module",custom_edit_url:null},sidebar:"api",previous:{title:"Blob",permalink:"/live/docs/api/core/interfaces/torchlive_media.blob"},next:{title:"Tensor",permalink:"/live/docs/api/core/interfaces/torchlive_torch.tensor"}},p=[{value:"Methods",id:"methods",children:[{value:"forward",id:"forward",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"forwardSync",id:"forwardsync",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,d.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/torchlive_torch"},"torchlive/torch"),".Module"),(0,d.mdx)("h2",{id:"methods"},"Methods"),(0,d.mdx)("h3",{id:"forward"},"forward"),(0,d.mdx)("p",null,"\u25b8 ",(0,d.mdx)("strong",{parentName:"p"},"forward"),"<In, Out",">","(...",(0,d.mdx)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Promise"),"<Out",">"),(0,d.mdx)("p",null,"Module forward function."),(0,d.mdx)("h4",{id:"type-parameters"},"Type parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"In")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"In"),": ",(0,d.mdx)("inlineCode",{parentName:"td"},"ModuleInputValue"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"Out")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"Out"),": ",(0,d.mdx)("inlineCode",{parentName:"td"},"ModuleValue"))))),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"...inputs")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"In"),"[]"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Module inputs. Input could be of type [","[ModuleInputValue]","]")))),(0,d.mdx)("h4",{id:"returns"},"Returns"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Promise"),"<Out",">"),(0,d.mdx)("p",null,"Module output, which is particular to the model and can be any of\nthe [","[ModuleValue]","] union types."),(0,d.mdx)("h4",{id:"defined-in"},"Defined in"),(0,d.mdx)("p",null,"torchlive/torch.ts:68"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"forwardsync"},"forwardSync"),(0,d.mdx)("p",null,"\u25b8 ",(0,d.mdx)("strong",{parentName:"p"},"forwardSync"),"<In, Out",">","(...",(0,d.mdx)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Out")),(0,d.mdx)("p",null,"Synchronous module forward function."),(0,d.mdx)("h4",{id:"type-parameters-1"},"Type parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"In")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"In"),": ",(0,d.mdx)("inlineCode",{parentName:"td"},"ModuleInputValue"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"Out")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"Out"),": ",(0,d.mdx)("inlineCode",{parentName:"td"},"ModuleValue"))))),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"...inputs")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"In"),"[]"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Module inputs. Input could be of type [","[ModuleInputValue]","]")))),(0,d.mdx)("h4",{id:"returns-1"},"Returns"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Out")),(0,d.mdx)("p",null,"Module output, which is particular to the model and can be any of\nthe [","[ModuleValue]","] union types."),(0,d.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,d.mdx)("p",null,"torchlive/torch.ts:78"))}c.isMDXComponent=!0}}]);