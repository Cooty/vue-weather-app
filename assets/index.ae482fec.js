import{B as t,a as e,b as a,c as s,d as r,e as n,f as i,g as o,h as l,i as c,j as u,k as d,l as h,m as p,n as m,o as g,p as f,q as y,r as b,s as w,V as v,t as _}from"./vendor.11f94784.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const s=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,n)=>{const i=new URL(t,s);if(self[e].moduleMap[i])return a(self[e].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${e}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${t}`)),r(l)},onload(){a(self[e].moduleMap[i]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("https://cooty.github.io/vue-weather-app/assets/");class C{constructor(t,e){this.lat=t,this.lon=e}}const S={debug:!1,state:{weatherData:null,city:"",coords:null,isLoading:!0,isError:!1,errorMessage:"",isRightSectionOpened:!1,units:"metric",theme:"light"},setWeatherData(t){this.debug&&console.log("setWeatherDataAction triggered with",t),this.state.weatherData=t},setCity(t){this.debug&&console.log("setCity triggered with",t),this.state.city=t},setCoords(t){this.debug&&console.log("setCoords triggered with",t),this.state.coords=t},setIsLoading(t){this.debug&&console.log("setIsLoading triggered with",t),this.state.isLoading=t},setIsError(t){this.debug&&console.log("setIsError triggered with",t),this.state.isError=t},setErrorMessage(t){this.debug&&console.log("setErrorMessage triggered with",t),this.state.errorMessage=t},setIsRightSectionOpened(t){this.debug&&console.log("setIsRightSectionOpened triggered with",t),this.state.isRightSectionOpened=t},setUnits(t){this.debug&&console.log("setUnits triggered with",t),this.state.units=t},setTheme(t){this.debug&&console.log("setUnits triggered with",t),this.state.theme=t}};Object.freeze(S);function x(t,e,a,s,r,n,i,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}const $={};var k=x({name:"QueryForm",components:{BForm:t,BFormInput:e,BIconSearch:a,BButton:s},data:()=>({city:"",appState:S.state}),computed:{valid(){return this.city}},mounted(){const t=new C(parseFloat((180*Math.random()-90).toFixed(8)),parseFloat((360*Math.random()-180).toFixed(8)));this.$bubble("update-weather",{lat:t.lat,lon:t.lon,lang:this.$i18n.locale,units:this.appState.units})},methods:{submitHandler(){this.$bubble("update-weather",{q:this.city,lang:this.$i18n.locale,units:this.appState.units})}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[a("label",{staticClass:"sr-only",attrs:{for:"input-city"}},[t._v(" "+t._s(t.$t("messages.cityLabel"))+" ")]),a("b-form-input",{staticClass:"query-form-city",attrs:{id:"input-city",name:"city",placeholder:t.$t("messages.cityPlaceholder"),required:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),a("b-button",{staticClass:"query-form-submit",attrs:{type:"submit",variant:"primary",disabled:!t.valid||t.appState.isLoading,"aria-label":t.$t("messages.submit")}},[a("b-icon-search")],1)],1)}),[],!1,(function(t){for(let e in $)this[e]=$[e]}),"027a8836",null,null);k.options.__file="src/domain/query/QueryForm.vue";var E=k.exports;const L={name:"TextRow",props:{bold:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},noBottomMargin:{type:Boolean,default:!1}}},B={};var F=x(L,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-row",class:{"font-weight-bold":t.bold,"text-muted":t.muted,"mb-0":t.noBottomMargin}},[t._t("default")],2)}),[],!1,(function(t){for(let e in B)this[e]=B[e]}),"31dfdef4",null,null);F.options.__file="src/ui/TextRow.vue";var T=F.exports;const R={};var D=x({name:"Divider"},(function(){var t=this.$createElement;return(this._self._c||t)("hr",{staticClass:"border-top my-2"})}),[],!1,(function(t){for(let e in R)this[e]=R[e]}),null,null,null);D.options.__file="src/ui/Divider.vue";var I=D.exports;const M={};var j=x({name:"FormattedTemperature",props:{temp:{type:Number,required:!0}},data:()=>({appState:S.state})},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(Math.floor(t.temp))+t._s("metric"===t.appState.units?"°C":"°F")+" ")])}),[],!1,(function(t){for(let e in M)this[e]=M[e]}),null,null,null);j.options.__file="src/domain/display/FormattedTemperature.vue";var O=j.exports;class U{constructor(t,e,a,s,r){this.temp=t,this.description=e,this.feelsLike=a,this.humidity=s,this.pressure=r}}const A={};var H=x({name:"Display",components:{BCard:r,TextRow:T,Divider:I,BBadge:n,FormattedTemperature:O},props:{weatherData:{type:U,default:null},coords:{type:C,default:null},city:{type:String,default:""}},data:()=>({appState:S.state})},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow",class:"light"===t.appState.theme?"":"bg-secondary",attrs:{tag:"article"}},[a("text-row",{attrs:{bold:!0}},[t.city?[t._v(" "+t._s(t.$t("messages.weatherForCity",{city:t.city}))+" ")]:[t._v(" "+t._s(t.$t("messages.weatherForCoordinates",{lat:t.coords.lat,lon:t.coords.lon}))+" ")]],2),a("div",{staticClass:"d-flex flex-nowrap justify-content-between"},[a("h1",{staticClass:"h2"},[a("formatted-temperature",{attrs:{temp:t.weatherData.temp}})],1),a("div",[a("b-badge",{attrs:{variant:"light"===t.appState.theme?"info":"warning"}},[t._v(" "+t._s(t.weatherData.description)+" ")])],1)]),a("text-row",[t._v(" "+t._s(t.$t("messages.feelsLike"))+" "),a("formatted-temperature",{attrs:{temp:t.weatherData.feelsLike}})],1),a("divider"),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.humidity"))+": "+t._s(t.weatherData.humidity)+"% ")]),a("text-row",{attrs:{muted:!0,"no-bottom-margin":!0}},[t._v(" "+t._s(t.$t("messages.pressure"))+": "+t._s(t.weatherData.pressure)+"hPa ")])],1)}),[],!1,(function(t){for(let e in A)this[e]=A[e]}),null,null,null);H.options.__file="src/domain/display/Display.vue";var W=H.exports;const z={};var q=x({name:"Wrapper",components:{BContainer:i,BRow:o,BCol:l}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"md"}},[a("b-row",{staticClass:"justify-content-center align-items-center"},[a("b-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"5"}},[t._t("default")],2)],1)],1)}),[],!1,(function(t){for(let e in z)this[e]=z[e]}),null,null,null);q.options.__file="src/ui/Wrapper.vue";var P=q.exports;const N={};var G=x({name:"AppMain",props:{theme:{type:String,default:"light"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"app-main position-relative d-flex flex-column h-100",class:"theme-"+t.theme},[t._t("default")],2)}),[],!1,(function(t){for(let e in N)this[e]=N[e]}),"975dabe2",null,null);G.options.__file="src/ui/AppMain.vue";var K=G.exports;const V={};var Q=x({name:"AppHeader",components:{BNavbar:c,BContainer:i,BRow:o,BCol:l,BIconGear:u,BIconX:d},data:()=>({appState:S.state}),computed:{isLightTheme(){return"light"===this.appState.theme}},methods:{toggle(){S.setIsRightSectionOpened(!this.appState.isRightSectionOpened)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"shadow-sm",attrs:{sticky:!0,type:"light",variant:t.isLightTheme?"light":"secondary"}},[a("b-container",{attrs:{fluid:"lg"}},[a("b-row",{staticClass:"w-100 no-gutters",attrs:{"align-h":"between"}},[a("b-col",{staticClass:"flex-1",attrs:{cols:"auto"}},[t._t("left")],2),a("b-col",{staticClass:"d-flex justify-content-end position-relative pl-5",attrs:{cols:"auto"}},[a("button",{staticClass:"right-slot-toggler-lt-md d-md-none h4 mb-0 text-secondary",class:t.isLightTheme?"text-secondary":"text-light",on:{click:t.toggle}},[t.appState.isRightSectionOpened?[a("b-icon-x")]:[a("b-icon-gear")]],2),a("div",{staticClass:"right-slot p-2 p-md-0 rounded d-md-flex",class:{opened:t.appState.isRightSectionOpened,"bg-white":t.isLightTheme,"bg-secondary":!t.isLightTheme}},[t._t("right")],2)])],1)],1)],1)}),[],!1,(function(t){for(let e in V)this[e]=V[e]}),"68e25068",null,null);Q.options.__file="src/ui/AppHeader.vue";var X=Q.exports;const J={};var Y=x({name:"AppContent"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"app-content d-flex flex-column justify-content-center"},[t._t("default")],2)}),[],!1,(function(t){for(let e in J)this[e]=J[e]}),"70f25bb9",null,null);Y.options.__file="src/ui/AppContent.vue";var Z=Y.exports;const tt=Object.freeze({EN:"en",DE:"de",BG:"bg",HU:"hu"});const et={};var at=x({name:"LanguageChanger",components:{BFormSelect:h},data:()=>({languages:[{text:"English",value:tt.EN},{text:"Deutsch",value:tt.DE},{text:"Magyar",value:tt.HU},{text:"български",value:tt.BG}]}),methods:{changeHandler(t){const e={lat:S.state.coords?S.state.coords.lat:null,lon:S.state.coords?S.state.coords.lon:null,q:S.state.coords?null:S.state.city,lang:t,units:S.state.units};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-select",{attrs:{options:t.languages},on:{change:t.changeHandler},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}})}),[],!1,(function(t){for(let e in et)this[e]=et[e]}),null,null,null);at.options.__file="src/infrastructure/i18n/LanguageChanger.vue";var st=at.exports;const rt=t=>{const e=Object.keys(t).filter((e=>t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e])),a={};return e.forEach((e=>{a[e]=t[e]})),new URLSearchParams(a).toString()},nt=async t=>await(async t=>{const e=await fetch(t);if(200!==e.status)throw new Error("messages.error");return await e.json()})(`\n        https://api.openweathermap.org/data/2.5/weather?${rt(t)}&appid=af70a8ed8f9ec89b897089b1e7ad7ee9`),it={makeKey:t=>`_wa_${t}`,saveToCache(t,e){try{sessionStorage.setItem(this.makeKey(t),JSON.stringify(e))}catch(a){console.warn(a)}},getFromCache(t){try{const e=sessionStorage.getItem(this.makeKey(t));return!!e&&JSON.parse(e)}catch(e){return console.warn(e),!1}}};Object.freeze(it);const ot={};var lt=x({name:"UnitSwitcher",components:{BFormRadioGroup:p,BFormRadio:m},data:()=>({appState:S.state}),methods:{changeHandler(t){const e={lat:S.state.coords?S.state.coords.lat:null,lon:S.state.coords?S.state.coords.lon:null,q:S.state.coords?null:S.state.city,lang:this.$i18n.locale,units:t};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white rounded"},[a("b-form-radio-group",{staticClass:"text-nowrap",attrs:{id:"unit-switcher",name:"unit-switcher-buttons","button-variant":"outline-primary",buttons:""},on:{change:t.changeHandler},model:{value:t.appState.units,callback:function(e){t.$set(t.appState,"units",e)},expression:"appState.units"}},[a("b-form-radio",{attrs:{value:"metric"}},[t._v(" "+t._s(t.$t("messages.metric"))+": °C ")]),a("b-form-radio",{attrs:{value:"imperial"}},[t._v(" "+t._s(t.$t("messages.imperial"))+": °F ")])],1)],1)}),[],!1,(function(t){for(let e in ot)this[e]=ot[e]}),null,null,null);lt.options.__file="src/domain/units/UnitSwitcher.vue";var ct=lt.exports;const ut={};var dt=x({name:"ThemeSwitcher",components:{BFormCheckbox:g,BIconMoon:f,BIconSun:y},data:()=>({checked:!1,appState:S.state}),methods:{changeHandler(t){S.setTheme(t?"dark":"light")}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-checkbox",{attrs:{name:"theme-switcher",switch:"",size:"lg","aria-label":t.$t("messages.switchTheme")},on:{change:t.changeHandler},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},["dark"===t.appState.theme?[a("span",{staticClass:"text-light"},[a("b-icon-sun")],1)]:[a("span",{staticClass:"text-secondary"},[a("b-icon-moon")],1)]],2)}),[],!1,(function(t){for(let e in ut)this[e]=ut[e]}),null,null,null);dt.options.__file="src/domain/theme/ThemeSwitcher.vue";var ht=dt.exports;const pt={};var mt=x({name:"App",components:{QueryForm:E,Display:W,BSpinner:b,BAlert:w,Wrapper:P,LanguageChanger:st,AppHeader:X,AppMain:K,AppContent:Z,UnitSwitcher:ct,ThemeSwitcher:ht},data:()=>({appState:S.state}),methods:{onUpdateWeatherHandler:async t=>{var e;(e=S).setIsLoading(!0),e.setErrorMessage(""),e.setIsError(!1);try{let e;const a=rt(t),s=it.getFromCache(a);if(s)e=s;else{e=(t=>{const{main:e,weather:a}=t;if(!(e&&a&&a[0]&&a[0].description&&e.feels_like&&e.humidity&&e.pressure))throw new Error("Can't find all the necessary data in the API response");return new U(e.temp,a[0].description,e.feels_like,e.humidity,e.pressure)})(await nt(t)),it.saveToCache(a,e)}t.q?((t,e,a)=>{a.setWeatherData(t),a.setCoords(null),a.setCity(e)})(e,t.q,S):((t,e,a)=>{a.setWeatherData(t),a.setCoords(e)})(e,new C(t.lat,t.lon),S),S.setUnits(t.units)}catch(a){((t,e)=>{e.setIsError(!0),e.setErrorMessage(t.message)})(a,S)}finally{S.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-main",{attrs:{theme:t.appState.theme},on:{"update-weather":t.onUpdateWeatherHandler}},[a("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("query-form")]},proxy:!0},{key:"right",fn:function(){return[a("ul",{staticClass:"mb-0 list-unstyled d-md-flex w-100 align-items-center"},[a("li",{staticClass:"mb-3 mr-md-3 mb-md-0"},[a("theme-switcher")],1),a("li",{staticClass:"mb-3 mr-md-3 mb-md-0"},[a("unit-switcher")],1),a("li",[a("language-changer")],1)])]},proxy:!0}])}),a("app-content",[a("wrapper",[!t.appState.weatherData||t.appState.isLoading||t.appState.isError?t.appState.isLoading?[a("div",{staticClass:"text-center"},[a("b-spinner",{attrs:{title:t.$t("messages.loading"),variant:"primary",label:t.$t("messages.loading")}})],1)]:t.appState.isError?[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.$t(t.appState.errorMessage))+" ")])]:t._e():[a("display",{attrs:{"weather-data":t.appState.weatherData,city:t.appState.city,coords:t.appState.coords}})]],2)],1)],1)}),[],!1,(function(t){for(let e in pt)this[e]=pt[e]}),null,null,null);mt.options.__file="src/application/App.vue";var gt=mt.exports;v.use(_);const ft={en:{messages:{weatherForCity:"The weather for {city} is:",weatherForCoordinates:"The weather for a random coordinate (latitude: {lat}, longitude: {lon}) is:",feelsLike:"feels like",humidity:"Humidity",pressure:"Pressure",cityLabel:"City:",cityPlaceholder:"Type your city",submit:"Check the weather!",loading:"Loading...",error:"We couldn't get the weather data for that location",metric:"Metric",imperial:"Imperial",switchTheme:"switch theme"}},de:{messages:{weatherForCity:"Das Wetter für {city} ist:",weatherForCoordinates:"Das Wetter für eine zufällige Koordinate (Breite: {lat}, Längengrad: {lon}) ist:",feelsLike:"fühlt sich an wie",humidity:"Feuchtigkeit",pressure:"Luftdruck",cityLabel:"Stadt:",cityPlaceholder:"Geben Sie Ihre Stadt ein",submit:"Wetter anschauen!",loading:"Wird geladen...",error:"Wir konnten die Wetterdaten für diesen Ort nicht abrufen",metric:"metrisch",imperial:"angloamerikanische",switchTheme:"Themen wechseln"}},hu:{messages:{weatherForCity:"Aktuális időjárás, {city}:",weatherForCoordinates:"Időjárás egy véletlenszerű ponton (szélesség: {lat}, hosszúság: {lon}):",feelsLike:"érzésre",humidity:"Páratartalom",pressure:"Nyomás",cityLabel:"Város:",cityPlaceholder:"Írj be egy várost",submit:"Lássuk az időjárást!",loading:"Betöltés...",error:"Sajnos erről a helyről nem tudjuk lekérni az időjárást",metric:"Metrikus",imperial:"Angolszász",switchTheme:"téma váltása"}},bg:{messages:{weatherForCity:"Времето за {city} е:",weatherForCoordinates:"Времето за произволна координата (географска ширина: {lat}, дължина: {lon}) е:",feelsLike:"се чувства като",humidity:"Влажност",pressure:"Налягане",cityLabel:"Град:",cityPlaceholder:"Въведете вашия град",submit:"Проверете времето!",loading:"Зареждане...",error:"Не можахме да получим метеорологичните данни за това местоположение",metric:"метричен",imperial:"американски",switchTheme:"превключване на тема"}}},yt=new _({locale:tt.EN,messages:ft});v.use((t=>{t.prototype.$bubble=function(t,...e){let a=this;do{a.$emit(t,...e),a=a.$parent}while(a)}})),new v({i18n:yt,render:t=>t(gt)}).$mount("#app");
