"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[981],{1981:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var a=t(885),s=t(2791),r="Container_container__VVOCq",c=t(184),o=function(e){var n=e.children;return(0,c.jsx)("section",{className:r,children:n})},i="Section_container__vEvWA",l="Section_title__SLHvV",u=function(e){var n=e.title,t=e.children;return(0,c.jsxs)("section",{className:i,children:[(0,c.jsx)("h2",{className:l,children:n}),t]})},m=t(5705),d=t(1089),_=t(5562),h=t.n(_),x="ContactForm_form__ttXmo",f="ContactForm_input__e2U+9",p="ContactForm_inputNameFocus__pFsBV",j="ContactForm_inputTelFocus__4+ZoG",C="ContactForm_btn__yDDxL",N=t(9676),v=t(7825),b=function(){return h().Notify.failure("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")},y=function(){return h().Notify.failure("Please type a valid Phone number!")},F=d.Ry().shape({name:d.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required(),number:d.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/).required()}),g={name:"",number:""},L=function(){var e=(0,N.Jx)().data,n=(0,N.Lr)(),t=(0,a.Z)(n,2),s=t[0],r=t[1].isLoading;return(0,c.jsx)(m.J9,{onSubmit:function(n,t){var a=t.resetForm;e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?h().Notify.failure("".concat(n.name," is already in contacts")):(s(n).then((function(){return h().Notify.success("Contact added to your phonebook!")})),a())},initialValues:g,validationSchema:F,children:(0,c.jsxs)(m.l0,{className:x,autoComplete:"off",children:[(0,c.jsx)(m.gN,{placeholder:"Name",className:f,type:"text",name:"name"}),(0,c.jsx)("span",{className:p}),(0,c.jsx)(m.Bc,{name:"name",render:b}),(0,c.jsx)(m.gN,{placeholder:"Phone number",className:f,type:"tel",name:"number"}),(0,c.jsx)("span",{className:j}),(0,c.jsx)(m.Bc,{name:"number",render:y}),(0,c.jsx)("button",{className:C,type:"submit",children:r?(0,c.jsx)(v.a,{}):"Add contact"})]})})},Z="Filter_input__N7T3z",k="Filter_inputFocusFilter__MiFeC",w=function(e){var n=e.value,t=e.onChange;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{className:Z,placeholder:"Find contacts by name",type:"text",value:n,onChange:t}),(0,c.jsx)("span",{className:k})]})},A=t(1413),z="ContactListItem_item__UAAix",S="ContactListItem_itemContact__Gri86",V="ContactListItem_btn__Kdzd+",B=function(e){var n=e.id,t=e.name,s=e.number,r=(0,N.Nt)(),o=(0,a.Z)(r,2),i=o[0],l=o[1].isLoading;return(0,c.jsxs)("li",{className:z,children:[(0,c.jsxs)("div",{className:S,children:[(0,c.jsxs)("p",{children:[t,":"]})," ",(0,c.jsx)("p",{children:s})]}),(0,c.jsx)("button",{className:V,onClick:function(){return i(n).then((function(){return h().Notify.success("Contact successfully removed!")}))},children:l?(0,c.jsx)(v.a,{}):"Delete"})]})},J="ContactList_list__csErn",q=function(e){var n=e.contacts;return(0,c.jsx)("ul",{className:J,children:n.map((function(e){return(0,s.createElement)(B,(0,A.Z)((0,A.Z)({},e),{},{key:e.id}))}))})},D=function(){var e=(0,s.useState)(""),n=(0,a.Z)(e,2),t=n[0],r=n[1],i=(0,N.Jx)(),l=i.isLoading,m=i.data,d=(null===m||void 0===m?void 0:m.length)>0;return(0,c.jsxs)(o,{children:[(0,c.jsx)(u,{title:"Create a new contact",children:(0,c.jsx)(L,{})}),l&&(0,c.jsx)(v.a,{}),d&&(0,c.jsxs)(u,{title:"Contacts",children:[(0,c.jsx)(w,{value:t,onChange:function(e){return r(e.target.value)}}),(0,c.jsx)(q,{contacts:m.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})]})]})}}}]);
//# sourceMappingURL=981.4c288a19.chunk.js.map