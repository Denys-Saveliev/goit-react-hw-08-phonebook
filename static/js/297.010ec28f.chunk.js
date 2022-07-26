"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[297],{297:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a,r,s=n(885),i=n(2791),o="Container_container__VVOCq",c=n(184),l=function(e){var t=e.children;return(0,c.jsx)("div",{className:o,children:t})},u="Section_container__vEvWA",d="Section_title__SLHvV",m=function(e){var t=e.title,n=e.children;return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("h2",{className:d,children:t}),n]})},f=n(5705),h=n(1089),_=n(5562),x=n.n(_),p="ContactForm_form__ttXmo",j="ContactForm_input__e2U+9",v="ContactForm_inputNameFocus__pFsBV",C="ContactForm_inputTelFocus__4+ZoG",y="ContactForm_btn__yDDxL",N=n(9676),b=n(7825),g=function(){return x().Notify.failure("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")},w=function(){return x().Notify.failure("Please type a valid Phone number!")},F=h.Ry().shape({name:h.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required(),number:h.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/).required()}),Z={name:"",number:""},E=function(){var e=(0,N.Jx)().data,t=(0,N.Lr)(),n=(0,s.Z)(t,2),a=n[0],r=n[1].isLoading;return(0,c.jsx)(f.J9,{onSubmit:function(t,n){var r=n.resetForm;e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?x().Notify.failure("".concat(t.name," is already in contacts")):(a(t).then((function(){return x().Notify.success("Contact added to your phonebook!")})),r())},initialValues:Z,validationSchema:F,children:(0,c.jsxs)(f.l0,{className:p,autoComplete:"off",children:[(0,c.jsx)(f.gN,{placeholder:"Name",className:j,type:"text",name:"name"}),(0,c.jsx)("span",{className:v}),(0,c.jsx)(f.Bc,{name:"name",render:g}),(0,c.jsx)(f.gN,{placeholder:"Phone number",className:j,type:"tel",name:"number"}),(0,c.jsx)("span",{className:C}),(0,c.jsx)(f.Bc,{name:"number",render:w}),(0,c.jsx)("button",{className:y,type:"submit",children:r?(0,c.jsx)(b.a,{}):"Add contact"})]})})},L="Filter_input__N7T3z",k="Filter_inputFocusFilter__MiFeC",z=function(e){var t=e.value,n=e.onChange;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{className:L,placeholder:"Find contacts by name",type:"text",value:t,onChange:n}),(0,c.jsx)("span",{className:k})]})},A=n(1413),O="ContactListItem_item__UAAix",S="ContactListItem_itemContact__Gri86",B="ContactListItem_itemText__gYzZu",I="ContactListItem_btn__Kdzd+",J=function(e){var t=e.id,n=e.name,a=e.number,r=e.edit,i=(0,N.Nt)(),o=(0,s.Z)(i,2),l=o[0],u=o[1].isLoading;return(0,c.jsxs)("li",{className:O,children:[(0,c.jsxs)("div",{className:S,children:[(0,c.jsxs)("p",{className:B,children:[n,":"]})," ",(0,c.jsx)("p",{className:B,children:a})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{className:I,onClick:r,children:"Edit"}),(0,c.jsx)("button",{className:I,onClick:function(){return l(t).then((function(){return x().Notify.success("Contact successfully removed!")}))},children:u?(0,c.jsx)(b.a,{}):"Delete"})]})]})},M=n(4164),P="Modal_Overlay__yoxbg",V="Modal_Modal__I1UYJ",q="EditContactForm_form__L+B1Z",T="EditContactForm_input__+zEeD",D="EditContactForm_inputNameFocus__tnF1d",$="EditContactForm_inputTelFocus__Oi-XJ",R="EditContactForm_btn__XVbTs",U=function(){return x().Notify.failure("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")},X=function(){return x().Notify.failure("Please type a valid Phone number!")},G=h.Ry().shape({name:h.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required(),number:h.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/).required()}),Y=function(e){var t=e.close,n=e.initialValues,a=(0,N.Jx)().data,r=(0,N.i)(),i=(0,s.Z)(r,2),o=i[0],l=i[1].isLoading;return(0,c.jsx)(f.J9,{onSubmit:function(e,n){var r=n.resetForm;a.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?x().Notify.failure("".concat(e.name," is already in contacts")):(o(e).then((function(){return x().Notify.success("Contact edited succesfully!")})),t(),r())},initialValues:n,validationSchema:G,children:(0,c.jsxs)(f.l0,{className:q,autoComplete:"off",children:[(0,c.jsx)(f.gN,{className:T,type:"text",name:"name"}),(0,c.jsx)("span",{className:D}),(0,c.jsx)(f.Bc,{name:"name",render:U}),(0,c.jsx)(f.gN,{className:T,type:"tel",name:"number"}),(0,c.jsx)("span",{className:$}),(0,c.jsx)(f.Bc,{name:"number",render:X}),(0,c.jsx)("button",{className:R,type:"submit",children:l?(0,c.jsx)(b.a,{}):"Save"})]})})},H=n(5987),K="IconButton_IconButton__r-hpi",W=["children","onClick"],Q=function(e){var t=e.children,n=e.onClick,a=(0,H.Z)(e,W);return(0,c.jsx)("button",(0,A.Z)((0,A.Z)({type:"button",className:K,onClick:n},a),{},{children:t}))},ee=["title","titleId"];function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ae(e,t){var n=e.title,s=e.titleId,o=ne(e,ee);return i.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":s},o),void 0===n?i.createElement("title",{id:s},"cancel-circle"):n?i.createElement("title",{id:s},n):null,a||(a=i.createElement("path",{d:"M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"})),r||(r=i.createElement("path",{d:"M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"})))}var re=i.forwardRef(ae),se=(n.p,document.querySelector("#modal-root"));var ie=function(e){var t=e.onClose,n=e.values;return(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),(0,M.createPortal)((0,c.jsx)("div",{className:P,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,c.jsxs)("div",{className:V,children:[(0,c.jsx)(Q,{onClick:t,"aria-label":"Close Editor",children:(0,c.jsx)(re,{width:"25",height:"25",fill:"#00000080"})}),(0,c.jsx)(m,{title:"Edit your contact",children:(0,c.jsx)(Y,{close:t,initialValues:n})})]})}),se)},oe="ContactList_list__csErn",ce=function(e){var t,n=e.contacts,a=(0,i.useState)(null),r=(0,s.Z)(a,2),o=r[0],l=r[1],u=(0,i.useState)(!1),d=(0,s.Z)(u,2),m=d[0],f=d[1],h=function(){f(!m)},_=(t=o,n.find((function(e){return e.id===t})));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("ul",{className:oe,children:n.map((function(e){return(0,i.createElement)(J,(0,A.Z)((0,A.Z)({},e),{},{key:e.id,edit:function(){return function(e){l(e),h()}(e.id)}}))}))}),m&&(0,c.jsx)(ie,{onClose:h,values:_})]})},le=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],a=t[1],r=(0,N.Jx)(),o=r.isLoading,u=r.data,d=(null===u||void 0===u?void 0:u.length)>0;return(0,c.jsxs)(l,{children:[(0,c.jsx)(m,{title:"Create a new contact",children:(0,c.jsx)(E,{})}),o&&(0,c.jsx)(b.a,{}),d&&(0,c.jsxs)(m,{title:"Contacts",children:[(0,c.jsx)(z,{value:n,onChange:function(e){return a(e.target.value)}}),(0,c.jsx)(ce,{contacts:u.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})]})]})}}}]);
//# sourceMappingURL=297.010ec28f.chunk.js.map