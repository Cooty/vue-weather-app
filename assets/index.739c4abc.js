import{B as t,a as e,b as a,c as i,d as s,L as n,e as r,f as o,g as l,h as c,i as d,j as p,k as u,l as h,m,n as f,o as g,p as y,q as v,r as b,s as w,V as _,t as C,u as S}from"./vendor.bb700520.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const i=new URL(t,location),s=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,n)=>{const r=new URL(t,i);if(self[e].moduleMap[r])return a(self[e].moduleMap[r]);const o=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${t}`)),s(l)},onload(){a(self[e].moduleMap[r]),s(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("https://cooty.github.io/vue-weather-app/assets/");class x{constructor(t,e){this.lat=t,this.lon=e}}const $={debug:!1,state:{weatherData:null,city:"",coords:null,isLoading:!0,isError:!1,errorMessage:"",isRightSectionOpened:!1,units:"metric",theme:"light"},setWeatherData(t){this.debug&&console.log("setWeatherDataAction triggered with",t),this.state.weatherData=t},setCity(t){this.debug&&console.log("setCity triggered with",t),this.state.city=t},setCoords(t){this.debug&&console.log("setCoords triggered with",t),this.state.coords=t},setIsLoading(t){this.debug&&console.log("setIsLoading triggered with",t),this.state.isLoading=t},setIsError(t){this.debug&&console.log("setIsError triggered with",t),this.state.isError=t},setErrorMessage(t){this.debug&&console.log("setErrorMessage triggered with",t),this.state.errorMessage=t},setIsRightSectionOpened(t){this.debug&&console.log("setIsRightSectionOpened triggered with",t),this.state.isRightSectionOpened=t},setUnits(t){this.debug&&console.log("setUnits triggered with",t),this.state.units=t},setTheme(t){this.debug&&console.log("setUnits triggered with",t),this.state.theme=t}};Object.freeze($);function k(t,e,a,i,s,n,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}const L={};var E=k({name:"LocationFinder",components:{BIconGeoAlt:t},computed:{isGeolocationSupported:()=>navigator&&"geolocation"in navigator},methods:{async clickHandler(t){try{const e={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},a=await(t=>new Promise(((e,a)=>{navigator.geolocation.getCurrentPosition(e,a,t)})))(e);this.$bubble("update-weather",{q:"",lang:this.$i18n.locale,units:$.state.units,lat:a.coords.latitude,lon:a.coords.longitude})}catch(e){console.warn(e)}finally{t.target.blur()}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isGeolocationSupported?a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:t.$t("messages.locationTooltip"),expression:"$t('messages.locationTooltip')",modifiers:{hover:!0}}],staticClass:"location-finder text-primary h5 mb-0",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.clickHandler.apply(null,arguments)}}},[a("b-icon-geo-alt")],1):t._e()}),[],!1,(function(t){for(let e in L)this[e]=L[e]}),"7247e3a0",null,null);E.options.__file="src/domain/query/LocationFinder.vue";var F=E.exports;const B={};var T=k({name:"QueryForm",components:{BForm:e,BFormInput:a,BIconSearch:i,BButton:s,LocationFinder:F},props:{city:{type:String,default:""}},data(){return{cityInput:this.city,appState:$.state}},computed:{valid(){return this.cityInput}},watch:{city:function(t,e){t||(this.cityInput="")}},mounted(){const t=new x(parseFloat((180*Math.random()-90).toFixed(8)),parseFloat((360*Math.random()-180).toFixed(8)));this.$bubble("update-weather",{lat:t.lat,lon:t.lon,lang:this.$i18n.locale,units:this.appState.units})},methods:{submitHandler(){this.$bubble("update-weather",{q:this.cityInput,lang:this.$i18n.locale,units:this.appState.units})}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{staticClass:"position-relative",attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[a("label",{staticClass:"sr-only",attrs:{for:"input-city"}},[t._v(" "+t._s(t.$t("messages.cityLabel"))+" ")]),a("b-form-input",{staticClass:"query-form-input",attrs:{id:"input-city",name:"city",placeholder:t.$t("messages.cityPlaceholder"),required:""},model:{value:t.cityInput,callback:function(e){t.cityInput=e},expression:"cityInput"}}),a("b-button",{staticClass:"query-form-submit",attrs:{type:"submit",variant:"primary",disabled:!t.valid||t.appState.isLoading,"aria-label":t.$t("messages.submit")}},[a("b-icon-search")],1),a("div",{staticClass:"location-finder-container"},[a("location-finder")],1)],1)}),[],!1,(function(t){for(let e in B)this[e]=B[e]}),"4550c468",null,null);T.options.__file="src/domain/query/QueryForm.vue";var D=T.exports;const I={name:"TextRow",props:{bold:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},noBottomMargin:{type:Boolean,default:!1}}},M={};var W=k(I,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-row",class:{"font-weight-bold":t.bold,"text-muted":t.muted,"mb-0":t.noBottomMargin}},[t._t("default")],2)}),[],!1,(function(t){for(let e in M)this[e]=M[e]}),"444a56cd",null,null);W.options.__file="src/ui/TextRow.vue";var j=W.exports;const R={};var A=k({name:"Divider"},(function(){var t=this.$createElement;return(this._self._c||t)("hr",{staticClass:"border-top my-2"})}),[],!1,(function(t){for(let e in R)this[e]=R[e]}),null,null,null);A.options.__file="src/ui/Divider.vue";var q=A.exports;const U={};var H=k({name:"FormattedTemperature",props:{temp:{type:Number,required:!0}},data:()=>({appState:$.state}),computed:{unit:function(){return"metric"===this.appState.units?"°C":"°F"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(Math.floor(t.temp))+t._s(t.unit)+" ")])}),[],!1,(function(t){for(let e in U)this[e]=U[e]}),null,null,null);H.options.__file="src/domain/display/FormattedTemperature.vue";var O=H.exports;class N{constructor(t,e,a,i,s,n,r,o,l){this.temp=t,this.description=e,this.feelsLike=a,this.humidity=i,this.pressure=s,this.windSpeed=n,this.windDeg=r,this.visibility=o,this.icon=l}}n.Icon.Default.imagePath="images/leaflet/";const P={};var z=k({name:"AppMap",props:{coords:{type:x,required:!0}},data:()=>({map:null,marker:null,appState:$.state}),watch:{coords:function(t,e){if(t.lat!==e.lat&&t.lon!==e.lon){const e=new n.LatLng(t.lat,t.lon);this.marker.setLatLng(e),this.map.flyTo(e)}}},mounted(){this.map=n.map("weather-location-map").setView([this.coords.lat,this.coords.lon],6),n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{dragging:!n.Browser.mobile,tap:!n.Browser.mobile}).addTo(this.map),this.addMarker(this.coords.lat,this.coords.lon)},methods:{addMarker(t,e){this.marker=n.marker([t,e],{riseOnHover:!0,draggable:!0}).addTo(this.map),this.marker.on("dragend",(t=>{this.$bubble("update-weather",{q:"",lang:this.$i18n.locale,units:this.appState.units,lat:t.target._latlng.lat,lon:t.target._latlng.lng})}))}}},(function(){var t=this;t.$createElement;return t._self._c,t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-map"},[e("div",{attrs:{id:"weather-location-map"}})])}],!1,(function(t){for(let e in P)this[e]=P[e]}),"0aafb0d2",null,null);z.options.__file="src/domain/display/AppMap.vue";var V=z.exports;const G={};var K=k({name:"FormattedWindSpeed",components:{BIconArrowUp:r},props:{windSpeed:{type:Number,required:!0},windDeg:{type:Number,required:!0}},data:()=>({appState:$.state}),computed:{unit:function(){return"metric"===this.appState.units?"m/s":"mph"}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"text-nowrap"},[a("span",{staticClass:"mr-1"},[a("b-icon-arrow-up",{style:"transform: rotate("+t.windDeg+"deg)"})],1),t._v(t._s(t.$n(t.windSpeed,{maximumFractionDigits:1}))+t._s(t.unit)+" ")])}),[],!1,(function(t){for(let e in G)this[e]=G[e]}),null,null,null);K.options.__file="src/domain/display/FormattedWindSpeed.vue";var Q=K.exports;const J={};var X=k({name:"FormattedVisibility",props:{visibility:{type:Number,required:!0}},data:()=>({appState:$.state}),computed:{formattedVisibility:function(){const t="metric"===this.appState.units?1e3:1609;return(this.visibility/t).toFixed(1)},unit:function(){return"metric"===this.appState.units?"km":"mi"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(t.$n(t.formattedVisibility,{maximumFractionDigits:1}))+t._s(t.unit)+" ")])}),[],!1,(function(t){for(let e in J)this[e]=J[e]}),null,null,null);X.options.__file="src/domain/display/FormattedVisibility.vue";var Y=X.exports;const Z={};var tt=k({name:"WeatherConditionIcon",props:{iconCode:{type:String,required:!0}},computed:{iconName(){return"01d"===this.iconCode||"01n"===this.iconCode?"☀":"02d"===this.iconCode||"02n"===this.iconCode?"🌤️":"03d"===this.iconCode||"03n"===this.iconCode?"🌥️":"04d"===this.iconCode||"04n"===this.iconCode?"☁":"09d"===this.iconCode||"09n"===this.iconCode?"🌧️":"10d"===this.iconCode||"10n"===this.iconCode?"🌦️":"11d"===this.iconCode||"11n"===this.iconCode?"🌩️":"13d"===this.iconCode||"13n"===this.iconCode?"❄":"50d"===this.iconCode||"50n"===this.iconCode?"🌫️":"🌡️"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.iconName))])}),[],!1,(function(t){for(let e in Z)this[e]=Z[e]}),null,null,null);tt.options.__file="src/domain/display/WeatherConditionIcon.vue";var et=tt.exports;const at={};var it=k({name:"Display",components:{BCard:o,TextRow:j,Divider:q,BBadge:l,FormattedTemperature:O,AppMap:V,BRow:c,BCol:d,FormattedWindSpeed:Q,FormattedVisibility:Y,WeatherConditionIcon:et},props:{weatherData:{type:N,required:!0},coords:{type:x,required:!0},city:{type:String,default:""}},data:()=>({appState:$.state})},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"app-display shadow",class:"light"===t.appState.theme?"":"bg-secondary",attrs:{tag:"article"}},[a("b-row",{staticClass:"w-100 h-100 no-gutters"},[a("b-col",{staticClass:"pr-md-2 pr-lg-3",attrs:{cols:12,md:6}},[t.city?[a("text-row",{attrs:{bold:!0}},[t._v(" "+t._s(t.$t("messages.weatherForCity",{city:t.city}))+" ")])]:t._e(),a("div",{staticClass:"d-flex flex-nowrap justify-content-between"},[a("h1",{staticClass:"h2"},[a("weather-condition-icon",{attrs:{"icon-code":t.weatherData.icon}}),a("formatted-temperature",{attrs:{temp:t.weatherData.temp}})],1),a("div",[a("b-badge",{attrs:{variant:"info"}},[t._v(" "+t._s(t.weatherData.description)+" ")])],1)]),a("text-row",[t._v(" "+t._s(t.$t("messages.feelsLike"))+" "),a("formatted-temperature",{attrs:{temp:t.weatherData.feelsLike}})],1),a("divider"),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.humidity"))+": "+t._s(t.weatherData.humidity)+"% ")]),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.pressure"))+": "+t._s(t.weatherData.pressure)+"hPa ")]),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.windSpeed"))+": "),a("formatted-wind-speed",{attrs:{"wind-speed":t.weatherData.windSpeed,"wind-deg":t.weatherData.windDeg}})],1),a("text-row",{attrs:{muted:!0,"no-bottom-margin":!0}},[t._v(" "+t._s(t.$t("messages.visibility"))+": "),a("formatted-visibility",{attrs:{visibility:t.weatherData.visibility}})],1)],2),a("b-col",{staticClass:"mt-4 mt-md-0 pl-md-2 pl-lg-3",attrs:{cols:12,md:6}},[a("app-map",{attrs:{coords:t.coords}})],1)],1)],1)}),[],!1,(function(t){for(let e in at)this[e]=at[e]}),"775ec9d4",null,null);it.options.__file="src/domain/display/Display.vue";var st=it.exports;const nt={};var rt=k({name:"Wrapper",components:{BContainer:p,BRow:c,BCol:d}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"md"}},[a("b-row",{staticClass:"justify-content-center align-items-center"},[a("b-col",{attrs:{cols:"12",xl:"9"}},[t._t("default")],2)],1)],1)}),[],!1,(function(t){for(let e in nt)this[e]=nt[e]}),null,null,null);rt.options.__file="src/ui/Wrapper.vue";var ot=rt.exports;const lt={};var ct=k({name:"AppMain",props:{theme:{type:String,default:"light"}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"app-main d-flex flex-column h-100",class:"theme-"+t.theme},[t._t("default")],2)}),[],!1,(function(t){for(let e in lt)this[e]=lt[e]}),null,null,null);ct.options.__file="src/ui/AppMain.vue";var dt=ct.exports;const pt={};var ut=k({name:"AppHeader",components:{BNavbar:u,BContainer:p,BRow:c,BCol:d},data:()=>({appState:$.state}),computed:{isLightTheme(){return"light"===this.appState.theme}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"shadow-sm",attrs:{sticky:!0,type:"light",variant:t.isLightTheme?"light":"secondary"}},[a("b-container",{attrs:{fluid:"lg"}},[a("b-row",{staticClass:"w-100 no-gutters",attrs:{"align-h":"between"}},[a("b-col",{staticClass:"flex-1",attrs:{cols:"auto"}},[t._t("left")],2),a("b-col",{staticClass:"d-flex justify-content-end pl-lg-5",attrs:{cols:"auto"}},[a("div",{staticClass:"right-slot p-2 p-lg-0 d-flex",class:{"bg-light":t.isLightTheme,"bg-secondary":!t.isLightTheme}},[t._t("right")],2)])],1)],1)],1)}),[],!1,(function(t){for(let e in pt)this[e]=pt[e]}),"6410856f",null,null);ut.options.__file="src/ui/AppHeader.vue";var ht=ut.exports;const mt={};var ft=k({name:"AppContent"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"app-content d-flex flex-column justify-content-center"},[t._t("default")],2)}),[],!1,(function(t){for(let e in mt)this[e]=mt[e]}),"7776e3fd",null,null);ft.options.__file="src/ui/AppContent.vue";var gt=ft.exports;const yt=Object.freeze({EN:"en",DE:"de",BG:"bg",HU:"hu"});const vt={};var bt=k({name:"LanguageChanger",components:{BFormSelect:h},data:()=>({languages:[{text:"English",value:yt.EN},{text:"Deutsch",value:yt.DE},{text:"Magyar",value:yt.HU},{text:"български",value:yt.BG}]}),methods:{changeHandler(t){const e={lat:$.state.coords.lat,lon:$.state.coords.lon,q:$.state.city,lang:t,units:$.state.units};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-select",{attrs:{options:t.languages},on:{change:t.changeHandler},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}})}),[],!1,(function(t){for(let e in vt)this[e]=vt[e]}),null,null,null);bt.options.__file="src/infrastructure/i18n/LanguageChanger.vue";var wt=bt.exports;const _t=t=>{const e=Object.keys(t).filter((e=>t.hasOwnProperty(e)&&null!==t[e]&&void 0!==t[e]&&""!==t[e])),a={};return e.forEach((e=>{a[e]=t[e]})),new URLSearchParams(a).toString()},Ct=async t=>await(async t=>{const e=await fetch(t);if(200!==e.status)throw new Error("messages.error");return await e.json()})(`\n        https://api.openweathermap.org/data/2.5/weather?${_t(t)}&appid=af70a8ed8f9ec89b897089b1e7ad7ee9`),St={makeKey:t=>`_wa_${t}`,saveToCache(t,e){try{sessionStorage.setItem(this.makeKey(t),JSON.stringify(e))}catch(a){console.warn(a)}},getFromCache(t){try{const e=sessionStorage.getItem(this.makeKey(t));return!!e&&JSON.parse(e)}catch(e){return console.warn(e),!1}}};Object.freeze(St);const xt={};var $t=k({name:"UnitSwitcher",components:{BFormRadioGroup:m,BFormRadio:f},data:()=>({appState:$.state}),methods:{changeHandler(t){const e={lat:$.state.coords.lat,lon:$.state.coords.lon,q:$.state.city,lang:this.$i18n.locale,units:t};this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rounded",class:"dark"===t.appState.theme?"bg-dark-form-control-border":"bg-white"},[a("b-form-radio-group",{staticClass:"text-nowrap",attrs:{id:"unit-switcher",name:"unit-switcher-buttons","button-variant":"outline-primary",buttons:""},on:{change:t.changeHandler},model:{value:t.appState.units,callback:function(e){t.$set(t.appState,"units",e)},expression:"appState.units"}},[a("b-form-radio",{attrs:{value:"metric","data-testid":"metric"}},[a("span",{staticClass:"d-none d-md-inline"},[t._v(t._s(t.$t("messages.metric"))+": ")]),t._v("°C ")]),a("b-form-radio",{attrs:{value:"imperial","data-testid":"imperial"}},[a("span",{staticClass:"d-none d-md-inline"},[t._v(t._s(t.$t("messages.imperial"))+": ")]),t._v("°F ")])],1)],1)}),[],!1,(function(t){for(let e in xt)this[e]=xt[e]}),null,null,null);$t.options.__file="src/domain/units/UnitSwitcher.vue";var kt=$t.exports;const Lt={};var Et=k({name:"ThemeSwitcher",components:{BFormCheckbox:g,BIconMoon:y,BIconSun:v},data:()=>({checked:!1,appState:$.state}),methods:{changeHandler(t){$.setTheme(t?"dark":"light")}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-checkbox",{attrs:{name:"theme-switcher",switch:"",size:"lg","aria-label":t.$t("messages.switchTheme")},on:{change:t.changeHandler},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},["dark"===t.appState.theme?[a("span",{staticClass:"text-light"},[a("b-icon-sun")],1)]:[a("span",{staticClass:"text-secondary"},[a("b-icon-moon")],1)]],2)}),[],!1,(function(t){for(let e in Lt)this[e]=Lt[e]}),null,null,null);Et.options.__file="src/domain/theme/ThemeSwitcher.vue";var Ft=Et.exports;const Bt={};var Tt=k({name:"App",components:{QueryForm:D,Display:st,BSpinner:b,BAlert:w,Wrapper:ot,LanguageChanger:wt,AppHeader:ht,AppMain:dt,AppContent:gt,UnitSwitcher:kt,ThemeSwitcher:Ft},data:()=>({appState:$.state}),methods:{onUpdateWeatherHandler:async t=>{var e;(e=$).setIsLoading(!0),e.setErrorMessage(""),e.setIsError(!1);try{const e=_t(t),a=St.getFromCache(e);let i;a?i=a:(i=await Ct(t),St.saveToCache(e,i));const s=(t=>{const{main:e,weather:a,wind:i,visibility:s}=t;if(!(e&&a&&a[0]&&a[0].description&&e.feels_like&&e.humidity&&e.pressure&&i&&i.speed&&i.deg&&s&&a[0].icon))throw new Error("Can't find all the necessary data in the API response");return new N(e.temp,a[0].description,e.feels_like,e.humidity,e.pressure,i.speed,i.deg,s,a[0].icon)})(i),n=new x(i.coord.lat,i.coord.lon);t.q?((t,e,a,i)=>{i.setWeatherData(t),i.setCoords(e),i.setCity(a)})(s,n,t.q,$):((t,e,a)=>{a.setWeatherData(t),a.setCoords(e),a.setCity("")})(s,n,$),$.setUnits(t.units)}catch(a){((t,e)=>{e.setIsError(!0),e.setErrorMessage(t.message)})(a,$)}finally{$.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-main",{attrs:{theme:t.appState.theme},on:{"update-weather":t.onUpdateWeatherHandler}},[a("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("query-form",{attrs:{city:t.appState.city}})]},proxy:!0},{key:"right",fn:function(){return[a("ul",{staticClass:"mb-0 list-unstyled d-flex w-100 align-items-center justify-content-center"},[a("li",{staticClass:"mr-3"},[a("theme-switcher")],1),a("li",{staticClass:"mr-3"},[a("unit-switcher")],1),a("li",[a("language-changer")],1)])]},proxy:!0}])}),a("app-content",[a("wrapper",[!t.appState.weatherData||t.appState.isLoading||t.appState.isError?t.appState.isLoading?[a("div",{staticClass:"text-center"},[a("b-spinner",{attrs:{title:t.$t("messages.loading"),variant:"primary",label:t.$t("messages.loading")}})],1)]:t.appState.isError?[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.$t(t.appState.errorMessage))+" ")])]:t._e():[a("display",{attrs:{"weather-data":t.appState.weatherData,city:t.appState.city,coords:t.appState.coords}})]],2)],1)],1)}),[],!1,(function(t){for(let e in Bt)this[e]=Bt[e]}),null,null,null);Tt.options.__file="src/application/App.vue";var Dt=Tt.exports;_.use(C);const It={en:{messages:{weatherForCity:"The weather for {city} is:",feelsLike:"feels like",humidity:"Humidity",pressure:"Pressure",cityLabel:"City:",cityPlaceholder:"Type your city",submit:"Check the weather!",loading:"Loading...",error:"We couldn't get the weather data for that location",metric:"Metric",imperial:"Imperial",switchTheme:"switch theme",locationTooltip:"Weather for my location",windSpeed:"Wind speed",visibility:"Visibility"}},de:{messages:{weatherForCity:"Das Wetter für {city} ist:",feelsLike:"fühlt sich an wie",humidity:"Feuchtigkeit",pressure:"Luftdruck",cityLabel:"Stadt:",cityPlaceholder:"Geben Sie Ihre Stadt ein",submit:"Wetter anschauen!",loading:"Wird geladen...",error:"Wir konnten die Wetterdaten für diesen Ort nicht abrufen",metric:"metrisch",imperial:"amerikanisch",switchTheme:"Themen wechseln",locationTooltip:"Wetter für meinen Standort",windSpeed:"Windgeschwindigkeit",visibility:"Sichtweite"}},hu:{messages:{weatherForCity:"Aktuális időjárás, {city}:",feelsLike:"érzésre",humidity:"Páratartalom",pressure:"Nyomás",cityLabel:"Város:",cityPlaceholder:"Írj be egy várost",submit:"Lássuk az időjárást!",loading:"Betöltés...",error:"Sajnos erről a helyről nem tudjuk lekérni az időjárást",metric:"Metrikus",imperial:"Angolszász",switchTheme:"téma váltása",locationTooltip:"Időjárás a tartózkodási helyemen",windSpeed:"Szélsebesség",visibility:"Látótávolság"}},bg:{messages:{weatherForCity:"Времето за {city} е:",feelsLike:"се чувства като",humidity:"Влажност",pressure:"Налягане",cityLabel:"Град:",cityPlaceholder:"Въведете вашия град",submit:"Проверете времето!",loading:"Зареждане...",error:"Не можахме да получим метеорологичните данни за това местоположение",metric:"метричен",imperial:"американски",switchTheme:"превключване на тема",locationTooltip:"Времето за моето местоположение",windSpeed:"скоростта на вятъра",visibility:"видимост"}}},Mt=new C({locale:yt.EN,messages:It});_.use((t=>{t.prototype.$bubble=function(t,...e){let a=this;do{a.$emit(t,...e),a=a.$parent}while(a)}})),_.directive("b-tooltip",S),new _({i18n:Mt,render:t=>t(Dt)}).$mount("#app");
