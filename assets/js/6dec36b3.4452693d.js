"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9559],{3905:function(e,r,a){a.r(r),a.d(r,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function c(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?c(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m=n.createContext({}),p=function(e){return function(r){var a=s(r.components);return n.createElement(e,i({},r,{components:a}))}},s=function(e){var r=n.useContext(m),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},u=function(e){var r=s(e.components);return n.createElement(m.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=t,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(f,o(o({ref:r},m),{},{components:a})):n.createElement(f,o({ref:r},m))}));function v(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,c=new Array(i);c[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var m=2;m<i;m++)c[m]=a[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},82457:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=a(83117),t=a(80102),i=(a(67294),a(3905)),c=["components"],o={id:"cameraview.camera",title:"Class: Camera",sidebar_label:"Camera",custom_edit_url:null},l=void 0,m={unversionedId:"api/core/classes/cameraview.camera",id:"version-0.2.0/api/core/classes/cameraview.camera",title:"Class: Camera",description:"CameraView.Camera",source:"@site/versioned_docs/version-0.2.0/api/core/classes/cameraview.camera.md",sourceDirName:"api/core/classes",slug:"/api/core/classes/cameraview.camera",permalink:"/live/docs/api/core/classes/cameraview.camera",editUrl:null,tags:[],version:"0.2.0",frontMatter:{id:"cameraview.camera",title:"Class: Camera",sidebar_label:"Camera",custom_edit_url:null},sidebar:"api",previous:{title:"CameraFacing",permalink:"/live/docs/api/core/enums/cameraview.camerafacing"},next:{title:"BasicTokenizer",permalink:"/live/docs/api/core/classes/text_basictokenizer.basictokenizer"}},p=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"flip",id:"flip",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"takePicture",id:"takepicture",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],s={toc:p};function u(e){var r=e.components,a=(0,t.Z)(e,c);return(0,i.mdx)("wrapper",(0,n.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/modules/cameraview"},"CameraView"),".Camera"),(0,i.mdx)("p",null,"A camera component with ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/cameraview.cameraprops#oncapture"},"CameraProps.onCapture")," and ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/cameraview.cameraprops#onframe"},"CameraProps.onFrame")," callbacks.\nTo programmatically trigger a capture, call the ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/classes/cameraview.camera#takepicture"},"takePicture")," function."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},"export default function App() {\n  const {imageClass, processImage} = useImageClassification(\n    require('./resnet18.ptl'),\n  );\n\n  const handleFrame = useCallback(\n    async (image: Image) => {\n      await processImage(image);\n      image.release();\n    },\n    [processImage],\n  );\n\n  return (\n    <>\n      <Camera\n        style={styles.camera}\n        onFrame={handleFrame}\n        hideCaptureButton={true}\n      />\n      <Text>{imageClass}</Text>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"strong"},"component"))),(0,i.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"PureComponent"),"<",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/cameraview.cameraprops"},"CameraProps"),">"),(0,i.mdx)("p",{parentName:"li"},"\u21b3 ",(0,i.mdx)("strong",{parentName:"p"},"Camera")))),(0,i.mdx)("h2",{id:"methods"},"Methods"),(0,i.mdx)("h3",{id:"flip"},"flip"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"flip"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("h4",{id:"returns"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("h4",{id:"defined-in"},"Defined in"),(0,i.mdx)("p",null,"CameraView.tsx:212"),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"takepicture"},"takePicture"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"takePicture"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/classes/cameraview.camera#takepicture"},"takePicture")," function captures an image from the camera and then\ntrigger the ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/cameraview.cameraprops#oncapture"},"onCapture")," callback registered on the ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/api/core/classes/cameraview.camera"},"Camera"),"\ncomponent."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-typescript"},'export default function CameraTakePicture() {\n  const cameraRef = React.useRef<Camera>(null);\n\n  async function handleCapture(image: Image) {\n    // Use captured image before releasing it.\n    image.release();\n  }\n\n  function handleTakePicture() {\n    const camera = cameraRef.current;\n    if (camera != null) {\n      camera.takePicture();\n    }\n  }\n\n  return (\n    <>\n      <Camera\n        ref={cameraRef}\n        onCapture={handleCapture}\n        hideCaptureButton={true}\n        style={StyleSheet.absoluteFill}\n        targetResolution={{width: 480, height: 640}}\n        facing={CameraFacing.BACK}\n      />\n      <Button title="Take Picture" onPress={handleTakePicture} />\n    </>\n  );\n}\n')),(0,i.mdx)("h4",{id:"returns-1"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"void")),(0,i.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,i.mdx)("p",null,"CameraView.tsx:198"))}u.isMDXComponent=!0}}]);