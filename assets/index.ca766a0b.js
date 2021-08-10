import{B as t,a as e,b as a,c as s,d as r,e as n,f as o,g as i,h as l,i as c,j as u,k as p,l as d,m as h,n as m,V as g,o as f}from"./vendor.56e3e040.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const s=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,n)=>{const o=new URL(t,s);if(self[e].moduleMap[o])return a(self[e].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${e}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${t}`)),r(l)},onload(){a(self[e].moduleMap[o]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("https://cooty.github.io/vue-weather-app/assets/");class y{constructor(t,e,a,s,r){this.temp=t,this.description=e,this.feelsLike=a,this.humidity=s,this.pressure=r}}const b={debug:!1,state:{weatherData:new y,city:"",lat:0,lon:0,isLoading:!0,isError:!1,errorMessage:"",isRightSectionOpened:!1},setWeatherData(t){this.debug&&console.log("setWeatherDataAction triggered with",t),this.state.weatherData=t},setCity(t){this.debug&&console.log("setCity triggered with",t),this.state.city=t},setLat(t){this.debug&&console.log("setLat triggered with",t),this.state.lat=t},setLon(t){this.debug&&console.log("setLon triggered with",t),this.state.lon=t},setIsLoading(t){this.debug&&console.log("setIsLoading triggered with",t),this.state.isLoading=t},setIsError(t){this.debug&&console.log("setIsError triggered with",t),this.state.isError=t},setErrorMessage(t){this.debug&&console.log("setErrorMessage triggered with",t),this.state.errorMessage=t},setIsRightSectionOpened(t){this.debug&&console.log("setIsRightSectionOpened triggered with",t),this.state.isRightSectionOpened=t}};Object.freeze(b);function _(t,e,a,s,r,n,o,i){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=i?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}const v={};var w=_({name:"QueryForm",components:{BForm:t,BFormInput:e,BIconSearch:a,BButton:s},data:()=>({city:"",appState:b.state}),computed:{valid:function(){return this.city}},mounted(){this.$bubble("update-weather",{coords:{lat:parseFloat((180*Math.random()-90).toFixed(8)),lon:parseFloat((360*Math.random()-180).toFixed(8))},options:{lang:this.$i18n.locale}})},methods:{submitHandler(){this.$bubble("update-weather",{city:this.city,options:{lang:this.$i18n.locale}})}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[a("label",{staticClass:"sr-only",attrs:{for:"input-city"}},[t._v(" "+t._s(t.$t("messages.cityLabel"))+" ")]),a("b-form-input",{staticClass:"query-form-city",attrs:{id:"input-city",name:"city",placeholder:t.$t("messages.cityPlaceholder"),required:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),a("b-button",{staticClass:"query-form-submit",attrs:{type:"submit",variant:"primary",disabled:!t.valid||t.appState.isLoading,"aria-label":t.$t("messages.submit")}},[a("b-icon-search")],1)],1)}),[],!1,(function(t){for(let e in v)this[e]=v[e]}),"5deff4c8",null,null);w.options.__file="src/domain/query/QueryForm.vue";var C=w.exports;const $={name:"TextRow",props:{bold:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},noBottomMargin:{type:Boolean,default:!1}}},x={};var S=_($,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{class:{"font-weight-bold":t.bold,"text-muted":t.muted,"mb-0":t.noBottomMargin}},[t._t("default")],2)}),[],!1,(function(t){for(let e in x)this[e]=x[e]}),null,null,null);S.options.__file="src/ui/TextRow.vue";var L=S.exports;const E={};var B=_({name:"Divider"},(function(){var t=this.$createElement;return(this._self._c||t)("hr",{staticClass:"border-top my-2"})}),[],!1,(function(t){for(let e in E)this[e]=E[e]}),null,null,null);B.options.__file="src/ui/Divider.vue";var F=B.exports;const k={};var D=_({name:"FormattedTemperature",props:{temp:{type:Number,required:!0}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(Math.floor(t.temp))+"°C ")])}),[],!1,(function(t){for(let e in k)this[e]=k[e]}),null,null,null);D.options.__file="src/domain/display/FormattedTemperature.vue";var R=D.exports;const I={};var M=_({name:"Display",components:{BCard:r,TextRow:L,Divider:F,BBadge:n,FormattedTemperature:R},props:{weatherData:{type:y,required:!0},lat:{type:Number,default:0},lon:{type:Number,default:0},city:{type:String,default:""}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow",attrs:{tag:"article"}},[a("text-row",{attrs:{bold:!0}},[t.city?[t._v(" "+t._s(t.$t("messages.weatherForCity",{city:t.city}))+" ")]:[t._v(" "+t._s(t.$t("messages.weatherForCoordinates",{lat:t.lat,lon:t.lon}))+" ")]],2),a("div",{staticClass:"d-flex flex-nowrap justify-content-between"},[a("h1",{staticClass:"h2"},[a("formatted-temperature",{attrs:{temp:t.weatherData.temp}})],1),a("div",[a("b-badge",{attrs:{variant:"info"}},[t._v(" "+t._s(t.weatherData.description)+" ")])],1)]),a("text-row",[t._v(" "+t._s(t.$t("messages.feelsLike"))+" "),a("formatted-temperature",{attrs:{temp:t.weatherData.feelsLike}})],1),a("divider"),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.humidity"))+": "+t._s(t.weatherData.humidity)+"% ")]),a("text-row",{attrs:{muted:!0,"no-bottom-margin":!0}},[t._v(" "+t._s(t.$t("messages.pressure"))+": "+t._s(t.weatherData.pressure)+"hPa ")])],1)}),[],!1,(function(t){for(let e in I)this[e]=I[e]}),null,null,null);M.options.__file="src/domain/display/Display.vue";var j=M.exports;const O={};var A=_({name:"Wrapper",components:{BContainer:o,BRow:i,BCol:l}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"md"}},[a("b-row",{staticClass:"justify-content-center align-items-center"},[a("b-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"5"}},[t._t("default")],2)],1)],1)}),[],!1,(function(t){for(let e in O)this[e]=O[e]}),null,null,null);A.options.__file="src/ui/Wrapper.vue";var T=A.exports;const W={};var H=_({name:"AppMain"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"position-relative d-flex flex-column h-100"},[t._t("default")],2)}),[],!1,(function(t){for(let e in W)this[e]=W[e]}),null,null,null);H.options.__file="src/ui/AppMain.vue";var N=H.exports;const U={};var P=_({name:"AppHeader",components:{BNavbar:c,BContainer:o,BRow:i,BCol:l,BIconGear:u,BIconX:p},data:()=>({appState:b.state}),methods:{toggle(){b.setIsRightSectionOpened(!this.appState.isRightSectionOpened)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"shadow-sm",attrs:{sticky:!0,type:"light",variant:"light"}},[a("b-container",{attrs:{fluid:"lg"}},[a("b-row",{staticClass:"w-100 no-gutters",attrs:{"align-h":"between"}},[a("b-col",{attrs:{cols:10,sm:9,md:8,lg:6}},[t._t("left")],2),a("b-col",{staticClass:"d-flex justify-content-end position-relative",attrs:{cols:2,sm:3,md:4,lg:6}},[a("button",{staticClass:"right-slot-toggler-lt-md d-md-none h4 mb-0 text-secondary",on:{click:t.toggle}},[t.appState.isRightSectionOpened?[a("b-icon-x")]:[a("b-icon-gear")]],2),a("div",{staticClass:"right-slot p-2 p-md-0 rounded d-md-flex",class:{opened:t.appState.isRightSectionOpened}},[t._t("right")],2)])],1)],1)],1)}),[],!1,(function(t){for(let e in U)this[e]=U[e]}),"6b285008",null,null);P.options.__file="src/ui/AppHeader.vue";var z=P.exports;const q={};var G=_({name:"AppContent"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"app-content d-flex flex-column justify-content-center"},[t._t("default")],2)}),[],!1,(function(t){for(let e in q)this[e]=q[e]}),"70f25bb9",null,null);G.options.__file="src/ui/AppContent.vue";var K=G.exports;const V=Object.freeze({EN:"en",DE:"de",BG:"bg",HU:"hu"});const Q={};var X=_({name:"LanguageChanger",components:{BFormSelect:d},data:()=>({languages:[{text:"English",value:V.EN},{text:"Deutsch",value:V.DE},{text:"Magyar",value:V.HU},{text:"български",value:V.BG}]}),methods:{changeHandler(t){b.state.lat&&b.state.lon?this.$bubble("update-weather",{coords:{lat:b.state.lat,lon:b.state.lon},options:{lang:t}}):this.$bubble("update-weather",{city:b.state.city,options:{lang:t}})}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-select",{attrs:{options:t.languages},on:{change:t.changeHandler},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}})}),[],!1,(function(t){for(let e in Q)this[e]=Q[e]}),null,null,null);X.options.__file="src/infrastructure/i18n/LanguageChanger.vue";var J=X.exports;const Y="https://api.openweathermap.org/data/2.5/weather",Z="&appid=af70a8ed8f9ec89b897089b1e7ad7ee9&units=metric",tt=async t=>{const e=await fetch(t);if(200!==e.status)throw new Error("We couldn't get the weather data for that location");return await e.json()},et={makeKey:t=>`_wa_${t}`,saveToCache(t,e){try{sessionStorage.setItem(this.makeKey(t),JSON.stringify(e))}catch(a){console.warn(a)}},getFromCache(t){try{const e=sessionStorage.getItem(this.makeKey(t));return!!e&&JSON.parse(e)}catch(e){return console.warn(e),!1}}};Object.freeze(et);const at={};var st=_({name:"App",components:{QueryForm:C,Display:j,BSpinner:h,BAlert:m,Wrapper:T,LanguageChanger:J,AppHeader:z,AppMain:N,AppContent:K},data:()=>({appState:b.state}),methods:{onUpdateWeatherHandler:async t=>{var e;let a;(e=b).setIsLoading(!0),e.setErrorMessage(""),e.setIsError(!1),e.setIsRightSectionOpened(!1);try{const e=`${t.coords?""+t.coords.lat+t.coords.lon:t.city}${t.options.lang}`,s=et.getFromCache(e);if(s)a=s;else{a=(t=>{const{main:e,weather:a}=t;if(!(e&&a&&a[0]&&a[0].description&&e.feels_like&&e.humidity&&e.pressure))throw new Error("Can't find all the necessary data in the API response");return new y(e.temp,a[0].description,e.feels_like,e.humidity,e.pressure)})(t.coords?await(async(t,e,a)=>await tt(`${Y}?lat=${t}&lon=${e}${Z}&lang=${a.lang}`))(t.coords.lat,t.coords.lon,t.options):await(async(t,e)=>await tt(`${Y}?q=${t}${Z}&lang=${e.lang}`))(t.city,t.options)),et.saveToCache(e,a)}t.coords?((t,e,a)=>{a.setWeatherData(t),a.setLat(e.lat),a.setLon(e.lon)})(a,t.coords,b):((t,e,a)=>{a.setWeatherData(t),a.setLat(0),a.setLon(0),a.setCity(e)})(a,t.city,b)}catch(s){((t,e)=>{e.setIsError(!0),e.setErrorMessage(t.message)})(s,b)}finally{b.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-main",{on:{"update-weather":t.onUpdateWeatherHandler}},[a("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("query-form")]},proxy:!0},{key:"right",fn:function(){return[a("language-changer")]},proxy:!0}])}),a("app-content",[a("wrapper",[!t.appState.weatherData.temp||t.appState.isLoading||t.appState.isError?t.appState.isLoading?[a("div",{staticClass:"text-center"},[a("b-spinner",{attrs:{title:t.$t("messages.loading"),variant:"primary",label:t.$t("messages.loading")}})],1)]:t.appState.isError?[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.appState.errorMessage)+" ")])]:t._e():[a("display",{attrs:{"weather-data":t.appState.weatherData,city:t.appState.city,lat:t.appState.lat,lon:t.appState.lon}})]],2)],1)],1)}),[],!1,(function(t){for(let e in at)this[e]=at[e]}),null,null,null);st.options.__file="src/application/App.vue";var rt=st.exports;g.use(f);const nt={en:{messages:{weatherForCity:"The weather for {city} is:",weatherForCoordinates:"The weather for a random coordinate (latitude: {lat}, longitude: {lon}) is:",feelsLike:"feels like",humidity:"Humidity",pressure:"Pressure",cityLabel:"City:",cityPlaceholder:"Type your city",submit:"Check the weather!",loading:"Loading..."}},de:{messages:{weatherForCity:"Das Wetter für {city} ist:",weatherForCoordinates:"Das Wetter für eine zufällige Koordinate (Breite: {lat}, Längengrad: {lon}) ist:",feelsLike:"fühlt sich an wie",humidity:"Feuchtigkeit",pressure:"Luftdruck",cityLabel:"Stadt:",cityPlaceholder:"Geben Sie Ihre Stadt ein",submit:"Wetter anschauen!",loading:"Wird geladen..."}},hu:{messages:{weatherForCity:"Aktuális időjárás, {city}:",weatherForCoordinates:"Időjárás egy véletlenszerű ponton (szélesség: {lat}, hosszúság: {lon}):",feelsLike:"érzésre",humidity:"Páratartalom",pressure:"Nyomás",cityLabel:"Város:",cityPlaceholder:"Írj be egy várost",submit:"Lássuk az időjárást!",loading:"Betöltés..."}},bg:{messages:{weatherForCity:"Времето за {city} е:",weatherForCoordinates:"Времето за произволна координата (географска ширина: {lat}, дължина: {lon}) е:",feelsLike:"се чувства като",humidity:"Влажност",pressure:"Налягане",cityLabel:"Град:",cityPlaceholder:"Въведете вашия град",submit:"Проверете времето!",loading:"Зареждане..."}}},ot=new f({locale:V.EN,messages:nt});g.use((t=>{t.prototype.$bubble=function(t,...e){let a=this;do{a.$emit(t,...e),a=a.$parent}while(a)}})),new g({i18n:ot,render:t=>t(rt)}).$mount("#app");