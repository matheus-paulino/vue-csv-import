!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash/merge"),require("vue"),require("lodash/drop"),require("lodash/every"),require("lodash/forEach"),require("lodash/get"),require("lodash/isArray"),require("lodash/map"),require("lodash/set"),require("papaparse"),require("lodash/findKey")):"function"==typeof define&&define.amd?define(["exports","lodash/merge","vue","lodash/drop","lodash/every","lodash/forEach","lodash/get","lodash/isArray","lodash/map","lodash/set","papaparse","lodash/findKey"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["vue-csv-import"]={},e.merge,e.vue,e.drop,e.every,e.forEach,e.get,e.isArray,e.map,e.set,e.Papa,e.findKey)}(this,(function(e,t,a,l,r,s,o,n,i,u,p,c){"use strict";function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=d(t),v=d(l),f=d(r),g=d(s),b=d(o),C=d(n),y=d(i),h=d(u),V=d(p),k=d(c);const D={errors:{fileRequired:"A file is required",invalidMimeType:"Invalid file type"},toggleHeaders:"File has headers",submitBtn:"Submit",fieldColumn:"Field",csvColumn:"Column",requiredField:"*",excludeField:"Exclude field"};var E={props:{modelValue:Array,fields:{type:[Object,Array],required:!0},text:{default:()=>({})}},setup(e,{emit:t}){let l=a.reactive({errors:[],inputName:"csv",file:null,map:{},value:{},fields:(r=e.fields,C.default(r)?y.default(r,(e=>({key:e,label:e,required:!0}))):y.default(r,((e,t)=>({key:t,label:b.default(e,"label",e),required:b.default(e,"required",!0)})))),fileHasHeaders:null,csvSample:null,rawCsv:null,language:m.default({},D,e.text),firstSampleRow:a.computed((()=>C.default(l.csvSample)&&C.default(l.csvSample[0])?l.csvSample[0]:null)),allFieldsAreMapped:a.computed((()=>f.default(l.fields,(function(e){return void 0!==l.map[e.key]||!e.required}))))});var r;return a.provide("VueCsvImportData",l),a.provide("buildMappedCsv",(function(){let e=l.fileHasHeaders?l.rawCsv:v.default(l.rawCsv);l.value=y.default(e,(e=>{let t={};return g.default(l.map,((a,l)=>{h.default(t,l,b.default(e,a))})),t})),t("update:modelValue",l.value)})),{VueCsvImportData:l}}};E.render=function(e,t,l,r,s,o){return a.renderSlot(e.$slots,"default",{errors:r.VueCsvImportData.errors,fields:r.VueCsvImportData.fields,file:r.VueCsvImportData.file})},E.__file="src/components/VueCsvImport.vue";var x={name:"VueCsvFiles",setup:()=>({VueCsvImportData:a.inject("VueCsvImportData")})};x.render=function(e,t,l,r,s,o){return a.renderSlot(e.$slots,"default",{errors:r.VueCsvImportData.errors.value},(()=>[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(r.VueCsvImportData.errors,(t=>(a.openBlock(),a.createElementBlock("span",a.normalizeProps(a.guardReactiveProps(e.$attrs)),a.toDisplayString(t),17)))),256))]))},x.__file="src/components/VueCsvErrors.vue";const B={"text/csv":{source:"iana",compressible:!0,extensions:["csv"]},"application/vnd.ms-excel":{source:"iana",compressible:!1,extensions:["xls","xlm","xla","xlc","xlt","xlw"]},"text/plain":{source:"iana",compressible:!0,extensions:["txt","text","conf","def","list","log","in","ini"]}};var I={name:"CsvFile",props:{name:{type:String,default:"csv"},headers:{type:[Boolean,null],default:!0},parseConfig:{type:Object,default:()=>({})},validation:{type:Boolean,default:!0},fileMimeTypes:{type:Array,default:()=>["text/csv","text/x-csv","application/vnd.ms-excel","text/plain"]}},setup(e){const t=a.ref(null),l=a.inject("VueCsvImportData"),r=a.inject("buildMappedCsv"),s=l.language;l.inputName=name,l.fileHasHeaders=null!==e.headers?!!e.headers:null;const o=function(t){if(l.errors=[],t||l.errors.push(s.errors.fileRequired),e.validation){const a=""===t.type?function(e){if(!e||"string"!=typeof e)return!1;let t=e.split(".").pop();return t&&k.default(B,(e=>e.extensions.includes(t)))||!1}(t.name):t.type;return e.fileMimeTypes.includes(a)||l.errors.push(s.errors.invalidMimeType),0===l.errors.length}return!0};return a.watch((()=>l.file),(t=>{t||(l.csvSample.value=null,l.rawCsv.value=null);let a=new FileReader;a.readAsText(l.file,e.parseConfig.encoding||"UTF-8"),a.onload=function(t){l.csvSample=b.default(V.default.parse(t.target.result,m.default({preview:10,skipEmptyLines:!0},e.parseConfig)),"data"),l.rawCsv=b.default(V.default.parse(t.target.result,m.default({skipEmptyLines:!0},e.parseConfig)),"data")},a.onerror=function(e){console.log(e)}}),{deep:!0}),a.watch((()=>l.fileHasHeaders),(()=>{l.allFieldsAreMapped&&r()})),{file:l.file,change:function(){let e=t.value.files?t.value.files[0]:null;o(e)&&(l.file=e)},csvRef:t}}};const S=["name"];I.render=function(e,t,l,r,s,o){return a.renderSlot(e.$slots,"default",{file:r.file,change:r.change},(()=>[a.createElementVNode("input",a.mergeProps({ref:"csvRef",type:"file",onChange:t[0]||(t[0]=(...e)=>r.change&&r.change(...e)),name:l.name},e.$attrs),null,16,S)]))},I.__file="src/components/VueCsvInput.vue";var w={name:"CsvMap",props:{noThead:{type:Boolean,default:!1},selectAttributes:{type:Object,default:()=>({})},autoMatch:{type:Boolean,default:!0},autoMatchIgnoreCase:{type:Boolean,default:!0}},setup(e){const t=a.inject("VueCsvImportData"),l=a.inject("buildMappedCsv"),r=t.language;return a.watch((()=>t.map),(function(){t.allFieldsAreMapped&&l()}),{deep:!0}),e.autoMatch&&a.watch((()=>t.csvSample),(function(a){a&&t.fields.forEach((l=>{a[0].forEach(((a,r)=>{(e.autoMatchIgnoreCase?l.label.toLowerCase().trim():l.label.trim())===(e.autoMatchIgnoreCase?a.toLowerCase().trim():a.trim())&&(t.map[l.key]=r)}))}))})),{VueCsvImportData:t,labels:r}}};const M={key:0},H=["name","onUpdate:modelValue"],N={key:0,value:null},q=["value"];w.render=function(e,t,l,r,s,o){return a.renderSlot(e.$slots,"default",{sample:r.VueCsvImportData.firstSampleRow,map:r.VueCsvImportData.map,fields:r.VueCsvImportData.fields},(()=>[r.VueCsvImportData.firstSampleRow?(a.openBlock(),a.createElementBlock("table",a.normalizeProps(a.mergeProps({key:0},e.$attrs)),[l.noThead?a.createCommentVNode("v-if",!0):(a.openBlock(),a.createElementBlock("thead",M,[a.createElementVNode("tr",null,[a.createElementVNode("th",null,a.toDisplayString(r.labels.fieldColumn),1),a.createElementVNode("th",null,a.toDisplayString(r.labels.csvColumn),1)])])),a.createElementVNode("tbody",null,[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(r.VueCsvImportData.fields,((e,t)=>(a.openBlock(),a.createElementBlock("tr",{key:t},[a.createElementVNode("td",null,a.toDisplayString(e.label),1),a.createElementVNode("td",null,[a.withDirectives(a.createElementVNode("select",a.mergeProps(l.selectAttributes,{name:`csv_uploader_map_${t}`,"onUpdate:modelValue":t=>r.VueCsvImportData.map[e.key]=t}),[e.required?a.createCommentVNode("v-if",!0):(a.openBlock(),a.createElementBlock("option",N," ")),(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(r.VueCsvImportData.firstSampleRow,((e,t)=>(a.openBlock(),a.createElementBlock("option",{key:t,value:t},a.toDisplayString(e),9,q)))),128))],16,H),[[a.vModelSelect,r.VueCsvImportData.map[e.key]]])])])))),128))])],16)):a.createCommentVNode("v-if",!0)]))},w.__file="src/components/VueCsvMap.vue";var F={name:"CsvTableMap",props:{tableAttributes:{type:Object,default:()=>({})},autoMatch:{type:Boolean,default:!0},autoMatchIgnoreCase:{type:Boolean,default:!0}},setup(e){const t=a.inject("VueCsvImportData"),l=a.inject("buildMappedCsv"),r=t.language,s=a.reactive({}),o=a.computed((()=>t.fields.map((e=>(e.selected=Object.values(s).includes(e.label),e)))));a.watch((()=>s),(function(){t.map={};for(const[e,a]of Object.entries(s))""!==a&&(t.map[a.toLowerCase()]=e);t.allFieldsAreMapped&&l()}),{deep:!0});const n=a.computed((()=>t.fileHasHeaders?t.csvSample:t.csvSample.slice(1))),i=a.computed((()=>t.fileHasHeaders?[...Array(t.firstSampleRow.length).keys()].map((e=>`${r.csvColumn} ${e}`)):t.firstSampleRow));return e.autoMatch&&a.watch((()=>t.csvSample),(function(a){a&&t.fields.forEach((t=>{a[0].forEach(((a,l)=>{(e.autoMatchIgnoreCase?t.label.toLowerCase().trim():t.label.trim())===(e.autoMatchIgnoreCase?a.toLowerCase().trim():a.trim())&&(s[l]=t.label)}))}))})),{availableFields:o,csvMap:s,csvSample:n,headers:i,VueCsvImportData:t,labels:r}}};const _={key:0,class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},A={class:"bg-gray-50"},j={class:"divide-x divide-gray-200"},T=["onUpdate:modelValue","name"],$={value:""},L=["value","disabled"],R=["value"],P={class:"divide-y divide-gray-200 bg-white"},O={class:"truncate"};F.render=function(e,t,l,r,s,o){return a.renderSlot(e.$slots,"default",{sample:r.VueCsvImportData.firstSampleRow,map:r.VueCsvImportData.map,fields:r.VueCsvImportData.fields},(()=>[r.VueCsvImportData.firstSampleRow?(a.openBlock(),a.createElementBlock("div",_,[a.createElementVNode("table",a.mergeProps(l.tableAttributes,{class:"min-w-full divide-y divide-gray-300 overflow-x-scroll"}),[a.createElementVNode("thead",A,[a.createElementVNode("tr",j,[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(r.headers,((e,t)=>(a.openBlock(),a.createElementBlock("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6",key:e},[a.createTextVNode(a.toDisplayString(e)+" ",1),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":e=>r.csvMap[t]=e,name:`csv_uploader_map_${t}`,required:"",class:"rounded-md overflow-hidden px-4 py-[10px] text-gray-900 dark:text-gray-400"},[a.createElementVNode("option",$,a.toDisplayString(r.labels.excludeField),1),(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(r.availableFields,(e=>(a.openBlock(),a.createElementBlock("option",{value:e.label,key:e.key,disabled:e.selected},a.toDisplayString(e.label)+" "+a.toDisplayString(e.required?r.labels.requiredField:""),9,L)))),128)),r.VueCsvImportData.fields.map((e=>e.label)).includes(e)?a.createCommentVNode("v-if",!0):(a.openBlock(),a.createElementBlock("option",{value:e,key:e},a.toDisplayString(e),9,R))],8,T),[[a.vModelSelect,r.csvMap[t]]])])))),128))])]),a.createElementVNode("tbody",P,[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(r.csvSample,((e,t)=>(a.openBlock(),a.createElementBlock("tr",{class:"divide-x divide-gray-200",key:t},[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(e,((e,t)=>(a.openBlock(),a.createElementBlock("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6",key:t},[a.createElementVNode("span",O,a.toDisplayString(e),1)])))),128))])))),128))])],16)])):a.createCommentVNode("v-if",!0)]))},F.__file="src/components/VueCsvTableMap.vue";var U={name:"VueCsvImportSubmit",setup(e,t){const l=a.inject("VueCsvImportData"),r=a.inject("buildMappedCsv"),s=l.language;return{submit:function(){r(),t.emit("submit",l.value)},VueCsvImportData:l,labels:s}}};U.render=function(e,t,l,r,s,o){return a.renderSlot(e.$slots,"submit",{submit:r.submit,mappedCsv:r.VueCsvImportData.value},(()=>[a.createElementVNode("button",a.mergeProps({id:"submit",type:"submit"},e.$attrs,{onClick:t[0]||(t[0]=a.withModifiers(((...e)=>r.submit&&r.submit(...e)),["prevent"]))}),a.toDisplayString(r.labels.submitBtn),17)]))},U.__file="src/components/VueCsvSubmit.vue";var K={name:"ToggleHasHeaders",props:{labelAttributes:{},checkboxAttributes:{}},setup(){const e=a.inject("VueCsvImportData"),t=e.language;return{VueCsvImportData:e,toggleHasHeaders:function(){e.fileHasHeaders=!e.fileHasHeaders},labels:t}}};const z=["value"];K.render=function(e,t,l,r,s,o){return a.renderSlot(e.$slots,"default",{hasHeaders:r.VueCsvImportData.fileHasHeaders,toggle:r.toggleHasHeaders},(()=>[a.createElementVNode("label",a.mergeProps({id:"labelCheckbox"},l.labelAttributes),[a.createElementVNode("input",a.mergeProps({id:"buttonCheckbox",type:"checkbox"},l.checkboxAttributes,{value:r.VueCsvImportData.fileHasHeaders,onChange:t[0]||(t[0]=(...e)=>r.toggleHasHeaders&&r.toggleHasHeaders(...e))}),null,16,z),a.createTextVNode(" "+a.toDisplayString(r.labels.toggleHeaders),1)],16)]))},K.__file="src/components/VueCsvToggleHeaders.vue";const G={install(e,t){t=m.default({components:{"vue-csv-import":"vue-csv-import","vue-csv-errors":"vue-csv-errors","vue-csv-input":"vue-csv-input","vue-csv-map":"vue-csv-map","vue-csv-table-map":"vue-csv-table-map","vue-csv-submit":"vue-csv-submit","vue-csv-toggle-headers":"vue-csv-toggle-headers"}},t),e.component(t.components["vue-csv-import"],E),e.component(t.components["vue-csv-errors"],x),e.component(t.components["vue-csv-input"],I),e.component(t.components["vue-csv-map"],w),e.component(t.components["vue-csv-table-map"],F),e.component(t.components["vue-csv-submit"],U),e.component(t.components["vue-csv-toggle-headers"],K)}};e.VueCsvErrors=x,e.VueCsvImport=E,e.VueCsvImportPlugin=G,e.VueCsvInput=I,e.VueCsvMap=w,e.VueCsvSubmit=U,e.VueCsvTableMap=F,e.VueCsvToggleHeaders=K,Object.defineProperty(e,"__esModule",{value:!0})}));
