(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{12:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__2IyZh",contact:"ContactList_contact__2UtUD",deleteBtn:"ContactList_deleteBtn__1-BxC"}},22:function(t,e,n){t.exports={input:"Filtter_input__7dIgQ"}},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n(7),o=n.n(r),s=n(4),i=n(3),l=n(18),u=n(20),b=n.n(u),d=n(2),j=n(5),h=n(19),m=n(17),O=n(37),p=Object(i.b)("phonebook/addContact",(function(t){return{payload:Object(m.a)(Object(m.a)({},t),{},{id:Object(O.a)()})}})),f=Object(i.b)("phonebook/removeContact"),C=Object(i.b)("phonebook/filterContacts"),x=Object(i.c)([],(a={},Object(j.a)(a,p,(function(t,e){return[].concat(Object(h.a)(t),[e.payload])})),Object(j.a)(a,f,(function(t,e){return Object(h.a)(t.filter((function(t){return t.id!==e.payload})))})),a)),v=Object(i.c)("",Object(j.a)({},C,(function(t,e){return e.payload}))),_=Object(d.b)({items:x,filter:v}),y=Object(d.b)({contacts:_}),g={key:"contacts",storage:b.a},N=Object(l.a)(g,y),k=Object(i.a)({reducer:N}),B=Object(l.b)(k),D=n(21),L=n(8),A=n(9),w=n(11),z=n(10),F=n(22),S=n.n(F),q=n(1),Z={handleChange:function(t){return C(t.target.value)}},I=Object(s.b)((function(t){return{filter:t.contacts.filter}}),Z)((function(t){var e=t.filter,n=t.handleChange;return Object(q.jsx)("label",{children:Object(q.jsx)("input",{className:S.a.input,type:"text",name:"filter",placeholder:"Find contact by name",value:e,onChange:n})})})),J=n(6),U=n.n(J),E=n(14),H=n.n(E),M=function(t){Object(w.a)(n,t);var e=Object(z.a)(n);function n(){var t;Object(L.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),console.log("ok"),t.props.contacts.find((function(e){return e.name===t.state.name}))?alert("Contact <-- ".concat(t.state.name," --\x3e already exists")):(t.props.addContact(t.state),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(A.a)(n,[{key:"render",value:function(){return Object(q.jsx)("div",{className:U.a.formContainer,children:Object(q.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(q.jsx)("label",{children:Object(q.jsx)("input",{className:U.a.inputData,type:"text",name:"name",placeholder:"Name:",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(q.jsx)("label",{children:Object(q.jsx)("input",{className:U.a.inputData,type:"tel",name:"number",placeholder:"Number:",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})}),Object(q.jsx)("button",{type:"submit",className:U.a.addBtn,children:"Add contact"})]})})}}]),n}(c.Component);M.prototypes={addContact:H.a.func.isRequired};var P={addContact:p},Q=Object(s.b)((function(t){return{contacts:t.contacts.items}}),P)(M),R=n(12),$=n.n(R),G=function(t){var e=t.contacts.items,n=t.contacts.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},K={onDelete:f},T=Object(s.b)((function(t){return{contacts:G(t),filter:t.contacts.filter}}),K)((function(t){var e=t.contacts,n=t.onDelete;return Object(q.jsx)("ul",{className:$.a.contactsList,children:e.map((function(t){return Object(q.jsxs)("li",{className:$.a.contact,children:[t.name,": ",t.number,Object(q.jsx)("button",{className:$.a.deleteBtn,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})),V=function(t){Object(w.a)(n,t);var e=Object(z.a)(n);function n(){return Object(L.a)(this,n),e.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)("h2",{className:"title",children:"Phonebook:"}),Object(q.jsx)(Q,{}),Object(q.jsx)("h2",{className:"title",children:"Contacts:"}),Object(q.jsx)(I,{}),Object(q.jsx)(T,{})]})}}]),n}(c.Component);n(33),n(34);o.a.render(Object(q.jsx)(s.a,{store:k,children:Object(q.jsx)(D.a,{loading:null,persistor:B,children:Object(q.jsx)(V,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={formContainer:"ContactForm_formContainer__1oeuH",inputData:"ContactForm_inputData__3qz46",addBtn:"ContactForm_addBtn__3o9bu"}}},[[35,1,2]]]);
//# sourceMappingURL=main.e9808a70.chunk.js.map