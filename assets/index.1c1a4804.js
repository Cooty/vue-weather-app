import{B as t,a as e,b as a,c as s,L as r,d as i,e as n,f as o,g as l,h as c,i as p,j as u,k as d,l as h,m,n as g,o as f,p as y,q as b,r as v,s as w,V as _,t as C}from"./vendor.c2cf34ce.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const s=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,i)=>{const n=new URL(t,s);if(self[e].moduleMap[n])return a(self[e].moduleMap[n]);const o=new Blob([`import * as m from '${n}';`,`${e}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){i(new Error(`Failed to import: ${t}`)),r(l)},onload(){a(self[e].moduleMap[n]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("https://cooty.github.io/vue-weather-app/assets/");class S{constructor(t,e){this.lat=t,this.lon=e}}const x={debug:!1,state:{weatherData:null,city:"",coords:null,isLoading:!0,isError:!1,errorMessage:"",isRightSectionOpened:!1,units:"metric",theme:"light"},setWeatherData(t){this.debug&&console.log("setWeatherDataAction triggered with",t),this.state.weatherData=t},setCity(t){this.debug&&console.log("setCity triggered with",t),this.state.city=t},setCoords(t){this.debug&&console.log("setCoords triggered with",t),this.state.coords=t},setIsLoading(t){this.debug&&console.log("setIsLoading triggered with",t),this.state.isLoading=t},setIsError(t){this.debug&&console.log("setIsError triggered with",t),this.state.isError=t},setErrorMessage(t){this.debug&&console.log("setErrorMessage triggered with",t),this.state.errorMessage=t},setIsRightSectionOpened(t){this.debug&&console.log("setIsRightSectionOpened triggered with",t),this.state.isRightSectionOpened=t},setUnits(t){this.debug&&console.log("setUnits triggered with",t),this.state.units=t},setTheme(t){this.debug&&console.log("setUnits triggered with",t),this.state.theme=t}};Object.freeze(x);function $(t,e,a,s,r,i,n,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(t,e){return l.call(e),p(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}const k={};var L=$({name:"QueryForm",components:{BForm:t,BFormInput:e,BIconSearch:a,BButton:s},props:{city:{type:String,default:""}},data(){return{cityInput:this.city,appState:x.state}},computed:{valid(){return this.cityInput}},watch:{city:function(t,e){t||(this.cityInput="")}},mounted(){const t=new S(parseFloat((180*Math.random()-90).toFixed(8)),parseFloat((360*Math.random()-180).toFixed(8)));this.$bubble("update-weather",{lat:t.lat,lon:t.lon,lang:this.$i18n.locale,units:this.appState.units})},methods:{submitHandler(){this.$bubble("update-weather",{q:this.cityInput,lang:this.$i18n.locale,units:this.appState.units})}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[a("label",{staticClass:"sr-only",attrs:{for:"input-city"}},[t._v(" "+t._s(t.$t("messages.cityLabel"))+" ")]),a("b-form-input",{staticClass:"query-form-input",attrs:{id:"input-city",name:"city",placeholder:t.$t("messages.cityPlaceholder"),required:""},model:{value:t.cityInput,callback:function(e){t.cityInput=e},expression:"cityInput"}}),a("b-button",{staticClass:"query-form-submit",attrs:{type:"submit",variant:"primary",disabled:!t.valid||t.appState.isLoading,"aria-label":t.$t("messages.submit")}},[a("b-icon-search")],1)],1)}),[],!1,(function(t){for(let e in k)this[e]=k[e]}),"d5629234",null,null);L.options.__file="src/domain/query/QueryForm.vue";var E=L.exports;const B={name:"TextRow",props:{bold:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},noBottomMargin:{type:Boolean,default:!1}}},T={};var I=$(B,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-row",class:{"font-weight-bold":t.bold,"text-muted":t.muted,"mb-0":t.noBottomMargin}},[t._t("default")],2)}),[],!1,(function(t){for(let e in T)this[e]=T[e]}),"31dfdef4",null,null);I.options.__file="src/ui/TextRow.vue";var F=I.exports;const M={};var R=$({name:"Divider"},(function(){var t=this.$createElement;return(this._self._c||t)("hr",{staticClass:"border-top my-2"})}),[],!1,(function(t){for(let e in M)this[e]=M[e]}),null,null,null);R.options.__file="src/ui/Divider.vue";var D=R.exports;const j={};var O=$({name:"FormattedTemperature",props:{temp:{type:Number,required:!0}},data:()=>({appState:x.state})},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(Math.floor(t.temp))+t._s("metric"===t.appState.units?"°C":"°F")+" ")])}),[],!1,(function(t){for(let e in j)this[e]=j[e]}),null,null,null);O.options.__file="src/domain/display/FormattedTemperature.vue";var U=O.exports;class A{constructor(t,e,a,s,r){this.temp=t,this.description=e,this.feelsLike=a,this.humidity=s,this.pressure=r}}r.Icon.Default.imagePath="images/leaflet/";const H={};var q=$({name:"AppMap",props:{coords:{type:S,required:!0}},data:()=>({map:null,marker:null,appState:x.state}),watch:{coords:function(t,e){if(t.lat!==e.lat&&t.lon!==e.lon){const e=new r.LatLng(t.lat,t.lon);this.marker.setLatLng(e),this.map.flyTo(e)}}},mounted(){this.map=r.map("weather-location-map").setView([this.coords.lat,this.coords.lon],6),r.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{dragging:!r.Browser.mobile,tap:!r.Browser.mobile}).addTo(this.map),this.addMarker(this.coords.lat,this.coords.lon)},methods:{addMarker(t,e){this.marker=r.marker([t,e],{riseOnHover:!0,draggable:!0}).addTo(this.map),this.marker.on("dragend",(t=>{this.$bubble("update-weather",{q:"",lang:this.$i18n.locale,units:this.appState.units,lat:t.target._latlng.lat,lon:t.target._latlng.lng})}))}}},(function(){var t=this;t.$createElement;return t._self._c,t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-map"},[e("div",{attrs:{id:"weather-location-map"}})])}],!1,(function(t){for(let e in H)this[e]=H[e]}),"0aafb0d2",null,null);q.options.__file="src/domain/display/AppMap.vue";var W=q.exports;const P={};var z=$({name:"Display",components:{BCard:i,TextRow:F,Divider:D,BBadge:n,FormattedTemperature:U,AppMap:W,BRow:o,BCol:l},props:{weatherData:{type:A,required:!0},coords:{type:S,required:!0},city:{type:String,default:""}},data:()=>({appState:x.state})},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow",class:"light"===t.appState.theme?"":"bg-secondary",attrs:{tag:"article"}},[a("b-row",{staticClass:"w-100 no-gutters"},[a("b-col",{staticClass:"pr-md-2 pr-lg-3",attrs:{cols:12,md:6}},[t.city?[a("text-row",{attrs:{bold:!0}},[t._v(" "+t._s(t.$t("messages.weatherForCity",{city:t.city}))+" ")])]:t._e(),a("div",{staticClass:"d-flex flex-nowrap justify-content-between"},[a("h1",{staticClass:"h2"},[a("formatted-temperature",{attrs:{temp:t.weatherData.temp}})],1),a("div",[a("b-badge",{attrs:{variant:"info"}},[t._v(" "+t._s(t.weatherData.description)+" ")])],1)]),a("text-row",[t._v(" "+t._s(t.$t("messages.feelsLike"))+" "),a("formatted-temperature",{attrs:{temp:t.weatherData.feelsLike}})],1),a("divider"),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.humidity"))+": "+t._s(t.weatherData.humidity)+"% ")]),a("text-row",{attrs:{muted:!0,"no-bottom-margin":!0}},[t._v(" "+t._s(t.$t("messages.pressure"))+": "+t._s(t.weatherData.pressure)+"hPa ")])],2),a("b-col",{staticClass:"mt-4 mt-md-0 pl-md-2 pl-lg-3",attrs:{cols:12,md:6}},[a("app-map",{attrs:{coords:t.coords}})],1)],1)],1)}),[],!1,(function(t){for(let e in P)this[e]=P[e]}),null,null,null);z.options.__file="src/domain/display/Display.vue";var N=z.exports;const G={};var V=$({name:"Wrapper",components:{BContainer:c,BRow:o,BCol:l}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"md"}},[a("b-row",{staticClass:"justify-content-center align-items-center"},[a("b-col",{attrs:{cols:"12",xl:"9"}},[t._t("default")],2)],1)],1)}),[],!1,(function(t){for(let e in G)this[e]=G[e]}),null,null,null);V.options.__file="src/ui/Wrapper.vue";var K=V.exports;const Q={};var X=$({name:"AppMain",props:{theme:{type:String,default:"light"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"position-relative d-flex flex-column h-100",class:"theme-"+t.theme},[t._t("default")],2)}),[],!1,(function(t){for(let e in Q)this[e]=Q[e]}),null,null,null);X.options.__file="src/ui/AppMain.vue";var J=X.exports;const Y={};var Z=$({name:"AppHeader",components:{BNavbar:p,BContainer:c,BRow:o,BCol:l,BIconGear:u,BIconX:d},data:()=>({appState:x.state}),computed:{isLightTheme(){return"light"===this.appState.theme}},methods:{toggle(){x.setIsRightSectionOpened(!this.appState.isRightSectionOpened)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"shadow-sm",attrs:{sticky:!0,type:"light",variant:t.isLightTheme?"light":"secondary"}},[a("b-container",{attrs:{fluid:"lg"}},[a("b-row",{staticClass:"w-100 no-gutters",attrs:{"align-h":"between"}},[a("b-col",{staticClass:"flex-1",attrs:{cols:"auto"}},[t._t("left")],2),a("b-col",{staticClass:"d-flex justify-content-end position-relative pl-5",attrs:{cols:"auto"}},[a("button",{staticClass:"right-slot-toggler-lt-md d-md-none h4 mb-0 text-secondary",class:t.isLightTheme?"text-secondary":"text-light",on:{click:t.toggle}},[t.appState.isRightSectionOpened?[a("b-icon-x")]:[a("b-icon-gear")]],2),a("div",{staticClass:"right-slot p-2 p-md-0 rounded d-md-flex",class:{opened:t.appState.isRightSectionOpened,"bg-white":t.isLightTheme,"bg-secondary":!t.isLightTheme}},[t._t("right")],2)])],1)],1)],1)}),[],!1,(function(t){for(let e in Y)this[e]=Y[e]}),"68e25068",null,null);Z.options.__file="src/ui/AppHeader.vue";var tt=Z.exports;const et={};var at=$({name:"AppContent"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"app-content d-flex flex-column justify-content-center"},[t._t("default")],2)}),[],!1,(function(t){for(let e in et)this[e]=et[e]}),"70f25bb9",null,null);at.options.__file="src/ui/AppContent.vue";var st=at.exports;const rt=Object.freeze({EN:"en",DE:"de",BG:"bg",HU:"hu"});const it={};var nt=$({name:"LanguageChanger",components:{BFormSelect:h},data:()=>({languages:[{text:"English",value:rt.EN},{text:"Deutsch",value:rt.DE},{text:"Magyar",value:rt.HU},{text:"български",value:rt.BG}]}),methods:{changeHandler(t){const e={lat:x.state.coords.lat,lon:x.state.coords.lon,q:x.state.city,lang:t,units:x.state.units};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-select",{attrs:{options:t.languages},on:{change:t.changeHandler},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}})}),[],!1,(function(t){for(let e in it)this[e]=it[e]}),null,null,null);nt.options.__file="src/infrastructure/i18n/LanguageChanger.vue";var ot=nt.exports;const lt=t=>{const e=Object.keys(t).filter((e=>t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&""!==t[e])),a={};return e.forEach((e=>{a[e]=t[e]})),new URLSearchParams(a).toString()},ct=async t=>await(async t=>{const e=await fetch(t);if(200!==e.status)throw new Error("messages.error");return await e.json()})(`\n        https://api.openweathermap.org/data/2.5/weather?${lt(t)}&appid=af70a8ed8f9ec89b897089b1e7ad7ee9`),pt={makeKey:t=>`_wa_${t}`,saveToCache(t,e){try{sessionStorage.setItem(this.makeKey(t),JSON.stringify(e))}catch(a){console.warn(a)}},getFromCache(t){try{const e=sessionStorage.getItem(this.makeKey(t));return!!e&&JSON.parse(e)}catch(e){return console.warn(e),!1}}};Object.freeze(pt);const ut={};var dt=$({name:"UnitSwitcher",components:{BFormRadioGroup:m,BFormRadio:g},data:()=>({appState:x.state}),methods:{changeHandler(t){const e={lat:x.state.coords.lat,lon:x.state.coords.lon,q:x.state.city,lang:this.$i18n.locale,units:t};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rounded",class:"dark"===t.appState.theme?"bg-dark-form-control-border":"bg-white"},[a("b-form-radio-group",{staticClass:"text-nowrap",attrs:{id:"unit-switcher",name:"unit-switcher-buttons","button-variant":"outline-primary",buttons:""},on:{change:t.changeHandler},model:{value:t.appState.units,callback:function(e){t.$set(t.appState,"units",e)},expression:"appState.units"}},[a("b-form-radio",{attrs:{value:"metric"}},[t._v(" "+t._s(t.$t("messages.metric"))+": °C ")]),a("b-form-radio",{attrs:{value:"imperial"}},[t._v(" "+t._s(t.$t("messages.imperial"))+": °F ")])],1)],1)}),[],!1,(function(t){for(let e in ut)this[e]=ut[e]}),null,null,null);dt.options.__file="src/domain/units/UnitSwitcher.vue";var ht=dt.exports;const mt={};var gt=$({name:"ThemeSwitcher",components:{BFormCheckbox:f,BIconMoon:y,BIconSun:b},data:()=>({checked:!1,appState:x.state}),methods:{changeHandler(t){x.setTheme(t?"dark":"light")}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-checkbox",{attrs:{name:"theme-switcher",switch:"",size:"lg","aria-label":t.$t("messages.switchTheme")},on:{change:t.changeHandler},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},["dark"===t.appState.theme?[a("span",{staticClass:"text-light"},[a("b-icon-sun")],1)]:[a("span",{staticClass:"text-secondary"},[a("b-icon-moon")],1)]],2)}),[],!1,(function(t){for(let e in mt)this[e]=mt[e]}),null,null,null);gt.options.__file="src/domain/theme/ThemeSwitcher.vue";var ft=gt.exports;const yt={};var bt=$({name:"App",components:{QueryForm:E,Display:N,BSpinner:v,BAlert:w,Wrapper:K,LanguageChanger:ot,AppHeader:tt,AppMain:J,AppContent:st,UnitSwitcher:ht,ThemeSwitcher:ft},data:()=>({appState:x.state}),methods:{onUpdateWeatherHandler:async t=>{var e;(e=x).setIsLoading(!0),e.setErrorMessage(""),e.setIsError(!1);try{const e=lt(t),a=pt.getFromCache(e);let s;a?s=a:(s=await ct(t),pt.saveToCache(e,s));const r=(t=>{const{main:e,weather:a}=t;if(!(e&&a&&a[0]&&a[0].description&&e.feels_like&&e.humidity&&e.pressure))throw new Error("Can't find all the necessary data in the API response");return new A(e.temp,a[0].description,e.feels_like,e.humidity,e.pressure)})(s),i=new S(s.coord.lat,s.coord.lon);t.q?((t,e,a,s)=>{s.setWeatherData(t),s.setCoords(e),s.setCity(a)})(r,i,t.q,x):((t,e,a)=>{a.setWeatherData(t),a.setCoords(e),a.setCity("")})(r,i,x),x.setUnits(t.units)}catch(a){((t,e)=>{e.setIsError(!0),e.setErrorMessage(t.message)})(a,x)}finally{x.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-main",{attrs:{theme:t.appState.theme},on:{"update-weather":t.onUpdateWeatherHandler}},[a("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("query-form",{attrs:{city:t.appState.city}})]},proxy:!0},{key:"right",fn:function(){return[a("ul",{staticClass:"mb-0 list-unstyled d-md-flex w-100 align-items-center"},[a("li",{staticClass:"mb-3 mr-md-3 mb-md-0"},[a("theme-switcher")],1),a("li",{staticClass:"mb-3 mr-md-3 mb-md-0"},[a("unit-switcher")],1),a("li",[a("language-changer")],1)])]},proxy:!0}])}),a("app-content",[a("wrapper",[!t.appState.weatherData||t.appState.isLoading||t.appState.isError?t.appState.isLoading?[a("div",{staticClass:"text-center"},[a("b-spinner",{attrs:{title:t.$t("messages.loading"),variant:"primary",label:t.$t("messages.loading")}})],1)]:t.appState.isError?[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.$t(t.appState.errorMessage))+" ")])]:t._e():[a("display",{attrs:{"weather-data":t.appState.weatherData,city:t.appState.city,coords:t.appState.coords}})]],2)],1)],1)}),[],!1,(function(t){for(let e in yt)this[e]=yt[e]}),null,null,null);bt.options.__file="src/application/App.vue";var vt=bt.exports;_.use(C);const wt={en:{messages:{weatherForCity:"The weather for {city} is:",feelsLike:"feels like",humidity:"Humidity",pressure:"Pressure",cityLabel:"City:",cityPlaceholder:"Type your city",submit:"Check the weather!",loading:"Loading...",error:"We couldn't get the weather data for that location",metric:"Metric",imperial:"Imperial",switchTheme:"switch theme"}},de:{messages:{weatherForCity:"Das Wetter für {city} ist:",feelsLike:"fühlt sich an wie",humidity:"Feuchtigkeit",pressure:"Luftdruck",cityLabel:"Stadt:",cityPlaceholder:"Geben Sie Ihre Stadt ein",submit:"Wetter anschauen!",loading:"Wird geladen...",error:"Wir konnten die Wetterdaten für diesen Ort nicht abrufen",metric:"metrisch",imperial:"angloamerikanische",switchTheme:"Themen wechseln"}},hu:{messages:{weatherForCity:"Aktuális időjárás, {city}:",feelsLike:"érzésre",humidity:"Páratartalom",pressure:"Nyomás",cityLabel:"Város:",cityPlaceholder:"Írj be egy várost",submit:"Lássuk az időjárást!",loading:"Betöltés...",error:"Sajnos erről a helyről nem tudjuk lekérni az időjárást",metric:"Metrikus",imperial:"Angolszász",switchTheme:"téma váltása"}},bg:{messages:{weatherForCity:"Времето за {city} е:",feelsLike:"се чувства като",humidity:"Влажност",pressure:"Налягане",cityLabel:"Град:",cityPlaceholder:"Въведете вашия град",submit:"Проверете времето!",loading:"Зареждане...",error:"Не можахме да получим метеорологичните данни за това местоположение",metric:"метричен",imperial:"американски",switchTheme:"превключване на тема"}}},_t=new C({locale:rt.EN,messages:wt});_.use((t=>{t.prototype.$bubble=function(t,...e){let a=this;do{a.$emit(t,...e),a=a.$parent}while(a)}})),new _({i18n:_t,render:t=>t(vt)}).$mount("#app");
