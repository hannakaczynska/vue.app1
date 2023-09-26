(function(){"use strict";var e={9088:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t,n,o,i,s){const l=(0,r.up)("the-header"),u=(0,r.up)("the-resources");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{title:"RememberMe"}),(0,r.Wm)(u)],64)}var s=n(7139);function l(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("h1",null,(0,s.zw)(n.title),1)])}var u={props:["title"]},d=n(89);const c=(0,d.Z)(u,[["render",l],["__scopeId","data-v-7eb11dba"]]);var a=c;function p(e,t,n,o,i,s){const l=(0,r.up)("base-button"),u=(0,r.up)("base-card");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{onClick:t[0]||(t[0]=e=>s.setSelectedTab("stored-resources")),mode:s.storedResButtonMode},{default:(0,r.w5)((()=>[(0,r.Uk)("Stored Resources")])),_:1},8,["mode"]),(0,r.Wm)(l,{onClick:t[1]||(t[1]=e=>s.setSelectedTab("add-resource")),mode:s.addResButtonMode},{default:(0,r.w5)((()=>[(0,r.Uk)("Add Resource")])),_:1},8,["mode"])])),_:1}),((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(i.selectedTab)))],1024))],64)}n(541);function f(e,t,n,o,i,s){const l=(0,r.up)("learning-resource");return(0,r.wg)(),(0,r.iD)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.resources,(e=>((0,r.wg)(),(0,r.j4)(l,{key:e.id,id:e.id,title:e.title,description:e.description,link:e.link},null,8,["id","title","description","link"])))),128))])}const v=["href"];function m(e,t,n,o,i,l){const u=(0,r.up)("base-button"),d=(0,r.up)("base-card");return(0,r.wg)(),(0,r.iD)("li",null,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r._)("header",null,[(0,r._)("h3",null,(0,s.zw)(n.title),1),(0,r.Wm)(u,{onClick:t[0]||(t[0]=e=>l.deleteResource(n.id)),mode:"flat"},{default:(0,r.w5)((()=>[(0,r.Uk)("Delete")])),_:1})]),(0,r._)("p",null,(0,s.zw)(n.description),1),(0,r._)("nav",null,[(0,r._)("a",{href:n.link},"View Resource",8,v)])])),_:1})])}var h={props:["id","title","description","link"],inject:["deleteResource"]};const _=(0,d.Z)(h,[["render",m],["__scopeId","data-v-ac4e4604"]]);var b=_,w={inject:["resources"],components:{LearningResource:b}};const g=(0,d.Z)(w,[["render",f],["__scopeId","data-v-681126fb"]]);var k=g;const R=e=>((0,r.dD)("data-v-393d6f85"),e=e(),(0,r.Cn)(),e),y=R((()=>(0,r._)("p",null,"Unfortunately, at least one input value is invalid.",-1))),I=R((()=>(0,r._)("p",null,"Check all your inputs",-1))),D={class:"form-control"},j=R((()=>(0,r._)("label",{for:"title"},"Title",-1))),W={class:"form-control"},C=R((()=>(0,r._)("label",{for:"description"},"Description",-1))),O={class:"form-control"},T=R((()=>(0,r._)("label",{for:"link"},"Link",-1)));function U(e,t,n,i,s,l){const u=(0,r.up)("base-button"),d=(0,r.up)("base-dialog"),c=(0,r.up)("base-card");return(0,r.wg)(),(0,r.iD)(r.HY,null,[s.inputIsInvalid?((0,r.wg)(),(0,r.j4)(d,{key:0,title:"Invalid Input",onClose:l.confirmError},{default:(0,r.w5)((()=>[y,I])),actions:(0,r.w5)((()=>[(0,r.Wm)(u,{onClick:l.confirmError},{default:(0,r.w5)((()=>[(0,r.Uk)("Okay")])),_:1},8,["onClick"])])),_:1},8,["onClose"])):(0,r.kq)("",!0),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r._)("form",{onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>l.submitData&&l.submitData(...e)),["prevent"]))},[(0,r._)("div",D,[j,(0,r.wy)((0,r._)("input",{id:"title",name:"title",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.title=e)},null,512),[[o.nr,s.title]])]),(0,r._)("div",W,[C,(0,r.wy)((0,r._)("textarea",{id:"description",name:"description",rows:"3","onUpdate:modelValue":t[1]||(t[1]=e=>s.description=e)},null,512),[[o.nr,s.description]])]),(0,r._)("div",O,[T,(0,r.wy)((0,r._)("input",{id:"link",name:"link",type:"url","onUpdate:modelValue":t[2]||(t[2]=e=>s.link=e)},null,512),[[o.nr,s.link]])]),(0,r._)("div",null,[(0,r.Wm)(u,{type:"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("Add Resource")])),_:1})])],32)])),_:1})],64)}const B=["type"];function S(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)("button",{type:n.type,class:(0,s.C_)(n.mode)},[(0,r.WI)(e.$slots,"default",{},void 0,!0)],10,B)}var Z={props:["type","mode"]};const x=(0,d.Z)(Z,[["render",S],["__scopeId","data-v-33af872f"]]);var M=x;const $={open:""};function H(e,t,n,o,i,l){const u=(0,r.up)("base-button");return(0,r.wg)(),(0,r.j4)(r.lR,{to:"body"},[(0,r._)("div",{onClick:t[0]||(t[0]=t=>e.$emit("close"))}),(0,r._)("dialog",$,[(0,r._)("header",null,[(0,r.WI)(e.$slots,"header",{},(()=>[(0,r._)("h2",null,(0,s.zw)(n.title),1)]),!0)]),(0,r._)("section",null,[(0,r.WI)(e.$slots,"default",{},void 0,!0)]),(0,r._)("menu",null,[(0,r.WI)(e.$slots,"actions",{},(()=>[(0,r.Wm)(u,{onClick:t[1]||(t[1]=t=>e.$emit("close"))},{default:(0,r.w5)((()=>[(0,r.Uk)("Close")])),_:1})]),!0)])])])}var L={components:{BaseButton:M},props:{title:{type:String,required:!1}},emits:["close"]};const V=(0,d.Z)(L,[["render",H],["__scopeId","data-v-6ca43535"]]);var z=V,E={components:{BaseDialog:z,BaseButton:M},data(){return{title:"",description:"",link:"",inputIsInvalid:!1}},inject:["addResource"],methods:{submitData(){""!==this.title.trim()&&""!==this.description.trim()&&""!==this.link.trim()?this.addResource(this.title,this.description,this.link):this.inputIsInvalid=!0},confirmError(){this.inputIsInvalid=!1}}};const Y=(0,d.Z)(E,[["render",U],["__scopeId","data-v-393d6f85"]]);var A=Y,q={components:{StoredResources:k,AddResource:A},data(){return{selectedTab:"stored-resources",storedResources:[{id:"official-guide",title:"Official Guide",description:"The official Vue.js documentation.",link:"https://vuejs.org"},{id:"google",title:"Google",description:"Learn to google...",link:"https://google.org"}]}},provide(){return{resources:this.storedResources,addResource:this.addResource,deleteResource:this.removeResource}},computed:{storedResButtonMode(){return"stored-resources"===this.selectedTab?null:"flat"},addResButtonMode(){return"add-resource"===this.selectedTab?null:"flat"}},methods:{setSelectedTab(e){this.selectedTab=e},addResource(e,t,n){const o={id:(new Date).toISOString(),title:e,description:t,link:n};this.storedResources.unshift(o),this.selectedTab="stored-resources"},removeResource(e){const t=this.storedResources.findIndex((t=>t.id===e));this.storedResources.splice(t,1)}}};const G=(0,d.Z)(q,[["render",p]]);var P=G,F={components:{TheHeader:a,TheResources:P}};const K=(0,d.Z)(F,[["render",i]]);var J=K;function N(e,t){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}const Q={},X=(0,d.Z)(Q,[["render",N],["__scopeId","data-v-af38052e"]]);var ee=X;const te=(0,o.ri)(J);te.component("base-card",ee),te.component("base-button",M),te.component("base-dialog",z),te.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],l=o[1],u=o[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var c=u(n)}for(t&&t(o);d<s.length;d++)i=s[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkvue_app1"]=self["webpackChunkvue_app1"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9088)}));o=n.O(o)})();
//# sourceMappingURL=app.804010f9.js.map