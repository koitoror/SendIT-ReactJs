(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/logo.073a569a.png"},195:function(e,t,a){e.exports=a(357)},200:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=(a(200),a(201),a(40)),i=a(39),s=a(86),u=a(32),m=a(165),d=a(365),E=Object(u.c)({}),h=a(112),b=a.n(h),p=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},g=a(51),f=a(52),v=a(55),O=a(53),y=a(81),w=a(56),j=a(369),I=a(185),k=a(368),C=a(166),S=a.n(C),N=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(O.a)(t).call(this,e))).state={activeItem:"home"},a.handleItemClick=a.handleItemClick.bind(Object(y.a)(a)),a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"handleItemClick",value:function(e,t){var a=t.name;this.setState({activeItem:a})}},{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(j.a,{pointing:!0,secondary:!0},r.a.createElement(j.a.Item,{as:o.b,to:"/",name:"home",active:"home"===e,onClick:this.handleItemClick},r.a.createElement(I.a,{size:"mini",bordered:!0,centered:!0,circular:!0,src:S.a})),r.a.createElement(j.a.Item,{as:o.b,to:"/",name:"home",active:"home"===e,onClick:this.handleItemClick}),r.a.createElement(j.a.Menu,{position:"right"},r.a.createElement(j.a.Item,{name:"auth",active:"auth"===e,onClick:this.handleItemClick},r.a.createElement(k.a.Group,null,r.a.createElement(o.b,{to:"/login"},r.a.createElement(k.a,null,"Signin")),r.a.createElement(k.a.Or,null),r.a.createElement(o.b,{to:"/register"},r.a.createElement(k.a,{positive:!0},"Signup"))))))}}]),t}(n.Component),_=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"phantom"}),r.a.createElement("div",{className:"style_footer"},r.a.createElement("p",null,"SendIT. All rights reserved. \xa9 2019")))},M=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"index"},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"Hey I'am SendIT",r.a.createElement("sup",null,"\xae")),".",r.a.createElement("p",null,r.a.createElement("em",null,"SendIT")," - the fastest web-app for parcel delivery's"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),T=a(174),A=a(367),z=a(366),P=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},D=function(e){var t=e.className,a=e.size,n=e.errorMessage,l=e.loading,c=e.handleSubmit,o=e.inputFields,i=e.buttonName,s=[];return Object.keys(n).forEach(function(e,t){Array.isArray(n[e])&&s.push(n[e][0]),s.push(n[e])}),r.a.createElement(z.a,{loading:l,size:a,className:t,onSubmit:c},r.a.createElement(A.a,{visible:!P(n),error:!0,header:"There were some errors in your submission",list:s}),o.map(function(e,t){return Array.isArray(e)?r.a.createElement(z.a.Group,{widths:"equal",key:t},e.map(function(e,t){return r.a.createElement(z.a.Input,Object.assign({},e,{key:t}))})):r.a.createElement(z.a.Input,Object.assign({},e,{key:t}))}),r.a.createElement(z.a.Button,{fluid:!0,primary:!0,inverted:!0,size:"large",type:"submit",id:"".concat(i,"Button")},i))};D.defaultProps={className:"",size:"small",loading:!1,errorMessage:{},inputFields:[],buttonName:"Change me"};var x=D,F=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(O.a)(t).call(this,e))).handleInputChange=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.loginAction({user:a.state})},a.state={email:"",password:"",errorMessage:{}},a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errorMessage,l=this.props.loading;return r.a.createElement("div",null,r.a.createElement(x,{className:"register-form",loading:l,size:"large",errorMessage:n,handleSubmit:this.handleSubmit,buttonName:"login",inputFields:[{fluid:!0,name:"email",placeholder:"E-mail address",type:"email",value:t,onChange:this.handleInputChange,error:!P(n?n.email:"")},{fluid:!0,name:"password",placeholder:"Password",type:"password",value:a,onChange:this.handleInputChange,error:!P(n?n.password:"")}]}),r.a.createElement(A.a,{warning:!0},r.a.createElement("a",{href:"/reset",style:{display:"flex",justifyContent:"center"}}," Forgot your password? ")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.errorMessage!==e.errorMessage||t.loading!==e.loading?{errorMessage:e.errorMessage}:null}}]),t}(n.Component);F.defautProps={loading:!1};var B=[{path:"/",name:"HomePage",component:M},{path:"/login",name:"Login",component:Object(s.b)(function(e){var t=e.auth;return{errorMessage:t.errorMessage,loading:t.loading,authenticated:t.authenticated}})(F)}],X="objects"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.d,H=localStorage.getItem("AUTH_TOKEN"),L=Object(u.e)(E,{auth:{authenticated:H}},X(Object(u.a)(m.a)));H&&p(H);var U=function(){return r.a.createElement(s.a,{store:L},r.a.createElement(o.a,null,r.a.createElement(d.a,{className:"bg-gray"},r.a.createElement(N,null),r.a.createElement(i.c,null,B.map(function(e){return r.a.createElement(i.a,{exact:!0,path:e.path,component:e.component})})),r.a.createElement(_,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[195,1,2]]]);
//# sourceMappingURL=main.04e51a3a.chunk.js.map