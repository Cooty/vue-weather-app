import{B as t,a as e,b as a,c as s,d as r,L as i,e as n,f as o,g as l,h as c,i as u,j as p,k as d,l as h,m,n as f,o as g,p as y,q as b,r as v,V as _,s as w,t as C}from"./vendor.de976bfb.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const s=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,i)=>{const n=new URL(t,s);if(self[e].moduleMap[n])return a(self[e].moduleMap[n]);const o=new Blob([`import * as m from '${n}';`,`${e}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){i(new Error(`Failed to import: ${t}`)),r(l)},onload(){a(self[e].moduleMap[n]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("https://cooty.github.io/vue-weather-app/assets/");class S{constructor(t,e){this.lat=t,this.lon=e}}const $={debug:!1,state:{weatherData:null,city:"",coords:null,isLoading:!0,isError:!1,errorMessage:"",isRightSectionOpened:!1,units:"metric",theme:"light"},setWeatherData(t){this.debug&&console.log("setWeatherDataAction triggered with",t),this.state.weatherData=t},setCity(t){this.debug&&console.log("setCity triggered with",t),this.state.city=t},setCoords(t){this.debug&&console.log("setCoords triggered with",t),this.state.coords=t},setIsLoading(t){this.debug&&console.log("setIsLoading triggered with",t),this.state.isLoading=t},setIsError(t){this.debug&&console.log("setIsError triggered with",t),this.state.isError=t},setErrorMessage(t){this.debug&&console.log("setErrorMessage triggered with",t),this.state.errorMessage=t},setIsRightSectionOpened(t){this.debug&&console.log("setIsRightSectionOpened triggered with",t),this.state.isRightSectionOpened=t},setUnits(t){this.debug&&console.log("setUnits triggered with",t),this.state.units=t},setTheme(t){this.debug&&console.log("setUnits triggered with",t),this.state.theme=t}};Object.freeze($);function x(t,e,a,s,r,i,n,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}const k={};var L=x({name:"LocationFinder",components:{BIconGeoAlt:t},computed:{isGeolocationSupported:()=>navigator&&"geolocation"in navigator},methods:{async clickHandler(t){try{const e={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},a=await(t=>new Promise(((e,a)=>{navigator.geolocation.getCurrentPosition(e,a,t)})))(e);this.$bubble("update-weather",{q:"",lang:this.$i18n.locale,units:$.state.units,lat:a.coords.latitude,lon:a.coords.longitude})}catch(e){console.warn(e)}finally{t.target.blur()}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isGeolocationSupported?a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:t.$t("messages.locationTooltip"),expression:"$t('messages.locationTooltip')"}],staticClass:"location-finder text-primary h5 mb-0",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.clickHandler.apply(null,arguments)}}},[a("b-icon-geo-alt")],1):t._e()}),[],!1,(function(t){for(let e in k)this[e]=k[e]}),"1a38d1d2",null,null);L.options.__file="src/domain/query/LocationFinder.vue";var E=L.exports;const B={};var T=x({name:"QueryForm",components:{BForm:e,BFormInput:a,BIconSearch:s,BButton:r,LocationFinder:E},props:{city:{type:String,default:""}},data(){return{cityInput:this.city,appState:$.state}},computed:{valid(){return this.cityInput}},watch:{city:function(t,e){t||(this.cityInput="")}},mounted(){const t=new S(parseFloat((180*Math.random()-90).toFixed(8)),parseFloat((360*Math.random()-180).toFixed(8)));this.$bubble("update-weather",{lat:t.lat,lon:t.lon,lang:this.$i18n.locale,units:this.appState.units})},methods:{submitHandler(){this.$bubble("update-weather",{q:this.cityInput,lang:this.$i18n.locale,units:this.appState.units})}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{staticClass:"position-relative",attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[a("label",{staticClass:"sr-only",attrs:{for:"input-city"}},[t._v(" "+t._s(t.$t("messages.cityLabel"))+" ")]),a("b-form-input",{staticClass:"query-form-input",attrs:{id:"input-city",name:"city",placeholder:t.$t("messages.cityPlaceholder"),required:""},model:{value:t.cityInput,callback:function(e){t.cityInput=e},expression:"cityInput"}}),a("b-button",{staticClass:"query-form-submit",attrs:{type:"submit",variant:"primary",disabled:!t.valid||t.appState.isLoading,"aria-label":t.$t("messages.submit")}},[a("b-icon-search")],1),a("div",{staticClass:"location-finder-container"},[a("location-finder")],1)],1)}),[],!1,(function(t){for(let e in B)this[e]=B[e]}),"4550c468",null,null);T.options.__file="src/domain/query/QueryForm.vue";var F=T.exports;const I={name:"TextRow",props:{bold:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},noBottomMargin:{type:Boolean,default:!1}}},M={};var D=x(I,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-row",class:{"font-weight-bold":t.bold,"text-muted":t.muted,"mb-0":t.noBottomMargin}},[t._t("default")],2)}),[],!1,(function(t){for(let e in M)this[e]=M[e]}),"31dfdef4",null,null);D.options.__file="src/ui/TextRow.vue";var j=D.exports;const R={};var A=x({name:"Divider"},(function(){var t=this.$createElement;return(this._self._c||t)("hr",{staticClass:"border-top my-2"})}),[],!1,(function(t){for(let e in R)this[e]=R[e]}),null,null,null);A.options.__file="src/ui/Divider.vue";var H=A.exports;const U={};var q=x({name:"FormattedTemperature",props:{temp:{type:Number,required:!0}},data:()=>({appState:$.state})},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(Math.floor(t.temp))+t._s("metric"===t.appState.units?"°C":"°F")+" ")])}),[],!1,(function(t){for(let e in U)this[e]=U[e]}),null,null,null);q.options.__file="src/domain/display/FormattedTemperature.vue";var O=q.exports;class W{constructor(t,e,a,s,r){this.temp=t,this.description=e,this.feelsLike=a,this.humidity=s,this.pressure=r}}i.Icon.Default.imagePath="images/leaflet/";const P={};var z=x({name:"AppMap",props:{coords:{type:S,required:!0}},data:()=>({map:null,marker:null,appState:$.state}),watch:{coords:function(t,e){if(t.lat!==e.lat&&t.lon!==e.lon){const e=new i.LatLng(t.lat,t.lon);this.marker.setLatLng(e),this.map.flyTo(e)}}},mounted(){this.map=i.map("weather-location-map").setView([this.coords.lat,this.coords.lon],6),i.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{dragging:!i.Browser.mobile,tap:!i.Browser.mobile}).addTo(this.map),this.addMarker(this.coords.lat,this.coords.lon)},methods:{addMarker(t,e){this.marker=i.marker([t,e],{riseOnHover:!0,draggable:!0}).addTo(this.map),this.marker.on("dragend",(t=>{this.$bubble("update-weather",{q:"",lang:this.$i18n.locale,units:this.appState.units,lat:t.target._latlng.lat,lon:t.target._latlng.lng})}))}}},(function(){var t=this;t.$createElement;return t._self._c,t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-map"},[e("div",{attrs:{id:"weather-location-map"}})])}],!1,(function(t){for(let e in P)this[e]=P[e]}),"0aafb0d2",null,null);z.options.__file="src/domain/display/AppMap.vue";var N=z.exports;const G={};var V=x({name:"Display",components:{BCard:n,TextRow:j,Divider:H,BBadge:o,FormattedTemperature:O,AppMap:N,BRow:l,BCol:c},props:{weatherData:{type:W,required:!0},coords:{type:S,required:!0},city:{type:String,default:""}},data:()=>({appState:$.state})},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow",class:"light"===t.appState.theme?"":"bg-secondary",attrs:{tag:"article"}},[a("b-row",{staticClass:"w-100 no-gutters"},[a("b-col",{staticClass:"pr-md-2 pr-lg-3",attrs:{cols:12,md:6}},[t.city?[a("text-row",{attrs:{bold:!0}},[t._v(" "+t._s(t.$t("messages.weatherForCity",{city:t.city}))+" ")])]:t._e(),a("div",{staticClass:"d-flex flex-nowrap justify-content-between"},[a("h1",{staticClass:"h2"},[a("formatted-temperature",{attrs:{temp:t.weatherData.temp}})],1),a("div",[a("b-badge",{attrs:{variant:"info"}},[t._v(" "+t._s(t.weatherData.description)+" ")])],1)]),a("text-row",[t._v(" "+t._s(t.$t("messages.feelsLike"))+" "),a("formatted-temperature",{attrs:{temp:t.weatherData.feelsLike}})],1),a("divider"),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.humidity"))+": "+t._s(t.weatherData.humidity)+"% ")]),a("text-row",{attrs:{muted:!0,"no-bottom-margin":!0}},[t._v(" "+t._s(t.$t("messages.pressure"))+": "+t._s(t.weatherData.pressure)+"hPa ")])],2),a("b-col",{staticClass:"mt-4 mt-md-0 pl-md-2 pl-lg-3",attrs:{cols:12,md:6}},[a("app-map",{attrs:{coords:t.coords}})],1)],1)],1)}),[],!1,(function(t){for(let e in G)this[e]=G[e]}),null,null,null);V.options.__file="src/domain/display/Display.vue";var K=V.exports;const Q={};var J=x({name:"Wrapper",components:{BContainer:u,BRow:l,BCol:c}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"md"}},[a("b-row",{staticClass:"justify-content-center align-items-center"},[a("b-col",{attrs:{cols:"12",xl:"9"}},[t._t("default")],2)],1)],1)}),[],!1,(function(t){for(let e in Q)this[e]=Q[e]}),null,null,null);J.options.__file="src/ui/Wrapper.vue";var X=J.exports;const Y={};var Z=x({name:"AppMain",props:{theme:{type:String,default:"light"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"app-main d-flex flex-column h-100",class:"theme-"+t.theme},[t._t("default")],2)}),[],!1,(function(t){for(let e in Y)this[e]=Y[e]}),"5406fece",null,null);Z.options.__file="src/ui/AppMain.vue";var tt=Z.exports;const et={};var at=x({name:"AppHeader",components:{BNavbar:p,BContainer:u,BRow:l,BCol:c},data:()=>({appState:$.state}),computed:{isLightTheme(){return"light"===this.appState.theme}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"shadow-sm",attrs:{sticky:!0,type:"light",variant:t.isLightTheme?"light":"secondary"}},[a("b-container",{attrs:{fluid:"lg"}},[a("b-row",{staticClass:"w-100 no-gutters",attrs:{"align-h":"between"}},[a("b-col",{staticClass:"flex-1",attrs:{cols:"auto"}},[t._t("left")],2),a("b-col",{staticClass:"d-flex justify-content-end pl-lg-5",attrs:{cols:"auto"}},[a("div",{staticClass:"right-slot p-2 p-lg-0 d-flex",class:{"bg-light":t.isLightTheme,"bg-secondary":!t.isLightTheme}},[t._t("right")],2)])],1)],1)],1)}),[],!1,(function(t){for(let e in et)this[e]=et[e]}),"6410856f",null,null);at.options.__file="src/ui/AppHeader.vue";var st=at.exports;const rt={};var it=x({name:"AppContent"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"app-content d-flex flex-column justify-content-center"},[t._t("default")],2)}),[],!1,(function(t){for(let e in rt)this[e]=rt[e]}),"70f25bb9",null,null);it.options.__file="src/ui/AppContent.vue";var nt=it.exports;const ot=Object.freeze({EN:"en",DE:"de",BG:"bg",HU:"hu"});const lt={};var ct=x({name:"LanguageChanger",components:{BFormSelect:d},data:()=>({languages:[{text:"English",value:ot.EN},{text:"Deutsch",value:ot.DE},{text:"Magyar",value:ot.HU},{text:"български",value:ot.BG}]}),methods:{changeHandler(t){const e={lat:$.state.coords.lat,lon:$.state.coords.lon,q:$.state.city,lang:t,units:$.state.units};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-select",{attrs:{options:t.languages},on:{change:t.changeHandler},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}})}),[],!1,(function(t){for(let e in lt)this[e]=lt[e]}),null,null,null);ct.options.__file="src/infrastructure/i18n/LanguageChanger.vue";var ut=ct.exports;const pt=t=>{const e=Object.keys(t).filter((e=>t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&""!==t[e])),a={};return e.forEach((e=>{a[e]=t[e]})),new URLSearchParams(a).toString()},dt=async t=>await(async t=>{const e=await fetch(t);if(200!==e.status)throw new Error("messages.error");return await e.json()})(`\n        https://api.openweathermap.org/data/2.5/weather?${pt(t)}&appid=af70a8ed8f9ec89b897089b1e7ad7ee9`),ht={makeKey:t=>`_wa_${t}`,saveToCache(t,e){try{sessionStorage.setItem(this.makeKey(t),JSON.stringify(e))}catch(a){console.warn(a)}},getFromCache(t){try{const e=sessionStorage.getItem(this.makeKey(t));return!!e&&JSON.parse(e)}catch(e){return console.warn(e),!1}}};Object.freeze(ht);const mt={};var ft=x({name:"UnitSwitcher",components:{BFormRadioGroup:h,BFormRadio:m},data:()=>({appState:$.state}),methods:{changeHandler(t){const e={lat:$.state.coords.lat,lon:$.state.coords.lon,q:$.state.city,lang:this.$i18n.locale,units:t};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rounded",class:"dark"===t.appState.theme?"bg-dark-form-control-border":"bg-white"},[a("b-form-radio-group",{staticClass:"text-nowrap",attrs:{id:"unit-switcher",name:"unit-switcher-buttons","button-variant":"outline-primary",buttons:""},on:{change:t.changeHandler},model:{value:t.appState.units,callback:function(e){t.$set(t.appState,"units",e)},expression:"appState.units"}},[a("b-form-radio",{attrs:{value:"metric","data-testid":"metric"}},[a("span",{staticClass:"d-none d-md-inline"},[t._v(t._s(t.$t("messages.metric"))+": ")]),t._v("°C ")]),a("b-form-radio",{attrs:{value:"imperial","data-testid":"imperial"}},[a("span",{staticClass:"d-none d-md-inline"},[t._v(t._s(t.$t("messages.imperial"))+": ")]),t._v("°F ")])],1)],1)}),[],!1,(function(t){for(let e in mt)this[e]=mt[e]}),null,null,null);ft.options.__file="src/domain/units/UnitSwitcher.vue";var gt=ft.exports;const yt={};var bt=x({name:"ThemeSwitcher",components:{BFormCheckbox:f,BIconMoon:g,BIconSun:y},data:()=>({checked:!1,appState:$.state}),methods:{changeHandler(t){$.setTheme(t?"dark":"light")}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-checkbox",{attrs:{name:"theme-switcher",switch:"",size:"lg","aria-label":t.$t("messages.switchTheme")},on:{change:t.changeHandler},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},["dark"===t.appState.theme?[a("span",{staticClass:"text-light"},[a("b-icon-sun")],1)]:[a("span",{staticClass:"text-secondary"},[a("b-icon-moon")],1)]],2)}),[],!1,(function(t){for(let e in yt)this[e]=yt[e]}),null,null,null);bt.options.__file="src/domain/theme/ThemeSwitcher.vue";var vt=bt.exports;const _t={};var wt=x({name:"App",components:{QueryForm:F,Display:K,BSpinner:b,BAlert:v,Wrapper:X,LanguageChanger:ut,AppHeader:st,AppMain:tt,AppContent:nt,UnitSwitcher:gt,ThemeSwitcher:vt},data:()=>({appState:$.state}),methods:{onUpdateWeatherHandler:async t=>{var e;(e=$).setIsLoading(!0),e.setErrorMessage(""),e.setIsError(!1);try{const e=pt(t),a=ht.getFromCache(e);let s;a?s=a:(s=await dt(t),ht.saveToCache(e,s));const r=(t=>{const{main:e,weather:a}=t;if(!(e&&a&&a[0]&&a[0].description&&e.feels_like&&e.humidity&&e.pressure))throw new Error("Can't find all the necessary data in the API response");return new W(e.temp,a[0].description,e.feels_like,e.humidity,e.pressure)})(s),i=new S(s.coord.lat,s.coord.lon);t.q?((t,e,a,s)=>{s.setWeatherData(t),s.setCoords(e),s.setCity(a)})(r,i,t.q,$):((t,e,a)=>{a.setWeatherData(t),a.setCoords(e),a.setCity("")})(r,i,$),$.setUnits(t.units)}catch(a){((t,e)=>{e.setIsError(!0),e.setErrorMessage(t.message)})(a,$)}finally{$.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-main",{attrs:{theme:t.appState.theme},on:{"update-weather":t.onUpdateWeatherHandler}},[a("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("query-form",{attrs:{city:t.appState.city}})]},proxy:!0},{key:"right",fn:function(){return[a("ul",{staticClass:"mb-0 list-unstyled d-flex w-100 align-items-center justify-content-center"},[a("li",{staticClass:"mr-3"},[a("theme-switcher")],1),a("li",{staticClass:"mr-3"},[a("unit-switcher")],1),a("li",[a("language-changer")],1)])]},proxy:!0}])}),a("app-content",[a("wrapper",[!t.appState.weatherData||t.appState.isLoading||t.appState.isError?t.appState.isLoading?[a("div",{staticClass:"text-center"},[a("b-spinner",{attrs:{title:t.$t("messages.loading"),variant:"primary",label:t.$t("messages.loading")}})],1)]:t.appState.isError?[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.$t(t.appState.errorMessage))+" ")])]:t._e():[a("display",{attrs:{"weather-data":t.appState.weatherData,city:t.appState.city,coords:t.appState.coords}})]],2)],1)],1)}),[],!1,(function(t){for(let e in _t)this[e]=_t[e]}),null,null,null);wt.options.__file="src/application/App.vue";var Ct=wt.exports;_.use(w);const St={en:{messages:{weatherForCity:"The weather for {city} is:",feelsLike:"feels like",humidity:"Humidity",pressure:"Pressure",cityLabel:"City:",cityPlaceholder:"Type your city",submit:"Check the weather!",loading:"Loading...",error:"We couldn't get the weather data for that location",metric:"Metric",imperial:"Imperial",switchTheme:"switch theme",locationTooltip:"Weather for my location"}},de:{messages:{weatherForCity:"Das Wetter für {city} ist:",feelsLike:"fühlt sich an wie",humidity:"Feuchtigkeit",pressure:"Luftdruck",cityLabel:"Stadt:",cityPlaceholder:"Geben Sie Ihre Stadt ein",submit:"Wetter anschauen!",loading:"Wird geladen...",error:"Wir konnten die Wetterdaten für diesen Ort nicht abrufen",metric:"metrisch",imperial:"amerikanisch",switchTheme:"Themen wechseln",locationTooltip:"Wetter für meinen Standort"}},hu:{messages:{weatherForCity:"Aktuális időjárás, {city}:",feelsLike:"érzésre",humidity:"Páratartalom",pressure:"Nyomás",cityLabel:"Város:",cityPlaceholder:"Írj be egy várost",submit:"Lássuk az időjárást!",loading:"Betöltés...",error:"Sajnos erről a helyről nem tudjuk lekérni az időjárást",metric:"Metrikus",imperial:"Angolszász",switchTheme:"téma váltása",locationTooltip:"Időjárás a tartózkodási helyemen"}},bg:{messages:{weatherForCity:"Времето за {city} е:",feelsLike:"се чувства като",humidity:"Влажност",pressure:"Налягане",cityLabel:"Град:",cityPlaceholder:"Въведете вашия град",submit:"Проверете времето!",loading:"Зареждане...",error:"Не можахме да получим метеорологичните данни за това местоположение",metric:"метричен",imperial:"американски",switchTheme:"превключване на тема",locationTooltip:"Времето за моето местоположение"}}},$t=new w({locale:ot.EN,messages:St});_.use((t=>{t.prototype.$bubble=function(t,...e){let a=this;do{a.$emit(t,...e),a=a.$parent}while(a)}})),_.directive("b-tooltip",C),new _({i18n:$t,render:t=>t(Ct)}).$mount("#app");
