(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32fa50c6"],{"12b2":function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,a=e.props,s=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),a.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,s)}})},"23bf":function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],width:[Number,String]}})},"253d":function(t,e,i){},"4c34":function(t,e,i){},"4c94":function(t,e,i){},"59c4":function(t,e,i){},"99d9":function(t,e,i){"use strict";var a=i("80d2"),s=i("b0af"),r=(i("253d"),i("4c34"),i("23bf")),n=i("58df"),c=Object(n["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:{height:Object(a["b"])(this.height),maxHeight:Object(a["b"])(this.maxHeight),maxWidth:Object(a["b"])(this.maxWidth),width:Object(a["b"])(this.width)},on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=c,h=i("d9bd"),l=o.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},beforeMount:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(h["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var s=t.naturalHeight,r=t.naturalWidth;s||r?e.calculatedAspectRatio=r/s:null!=i&&setTimeout(a,i)};a()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),d=l.extend({name:"v-card-media",mounted:function(){Object(h["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),u=i("12b2"),m=i("2b0e");i.d(e,"a",function(){return g}),i.d(e,"b",function(){return p});var g=m["a"].extend(Object(a["d"])("v-card__actions")),p=m["a"].extend(Object(a["d"])("v-card__text"));s["a"],u["a"]},a722:function(t,e,i){"use strict";i("db6d");var a=i("e8f2");e["a"]=Object(a["a"])("layout")},b0af:function(t,e,i){"use strict";i("4c94");var a=i("b64a"),s=i("23bf"),r=i("0d01"),n=i("6a18"),c=i("80d2"),o=i("58df"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e["a"]=Object(o["a"])(a["a"],s["a"],r["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean,tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--raised":this.raised,"v-card--tile":this.tile},this.themeClasses)},styles:function(){var t={height:Object(c["b"])(this.height)};return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),this.height&&(t.height=Object(c["b"])(this.height)),this.maxHeight&&(t.maxHeight=Object(c["b"])(this.maxHeight)),this.maxWidth&&(t.maxWidth=Object(c["b"])(this.maxWidth)),this.width&&(t.width=Object(c["b"])(this.width)),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,a=e.data;return a.style=this.styles,t(i,this.setBackgroundColor(this.color,a),this.$slots.default)}})},caeb:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"single-post center-container make-flex",attrs:{"grid-list-md":"","text-xs-center":""}},[i("v-layout",{staticClass:"ma-0",staticStyle:{flex:"initial"},attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs8:"","offset-xs2":""}},[i("v-card",{staticClass:"pa-4"},[i("v-card-title",{attrs:{"primary-title":""}},[i("v-flex",{attrs:{xs12:""}},[i("h2",{staticClass:"mb-0 display-3 primary--text"},[t._v(t._s(this.$route.params.blog.title))]),i("hr",{staticClass:"mt-4 mb-4"}),i("p",{staticClass:"mt-3 headline"},[t._v(t._s(this.$route.params.blog.text)+" ")])])],1),i("v-card-actions",[i("v-flex",[i("v-btn",{attrs:{dark:"",outline:"",large:"",color:"primary",to:{name:"blog"}}},[i("span",{staticClass:"mr-2"},[t._v("Go Back")])])],1)],1)],1)],1)],1)],1)},s=[],r={data(){return{blog:null}},methods:{},created(){this.$route.params.blog?console.log(this.$route.params.blog):this.$router.push({name:"blog"})}},n=r,c=(i("f122"),i("2877")),o=i("6544"),h=i.n(o),l=i("8336"),d=i("b0af"),u=i("99d9"),m=i("12b2"),g=i("a523"),p=i("0e8f"),f=i("a722"),v=Object(c["a"])(n,a,s,!1,null,"cb5b7204",null);v.options.__file="SinglePost.vue";e["default"]=v.exports;h()(v,{VBtn:l["a"],VCard:d["a"],VCardActions:u["a"],VCardTitle:m["a"],VContainer:g["a"],VFlex:p["a"],VLayout:f["a"]})},f122:function(t,e,i){"use strict";var a=i("59c4"),s=i.n(a);s.a}}]);
//# sourceMappingURL=chunk-32fa50c6.13b1d845.js.map