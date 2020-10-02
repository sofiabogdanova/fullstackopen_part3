(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(17),u=t.n(c),o=(t(5),t(7)),l=t(18),i=t(2),m=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange,u=e.addPerson;return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,n.name," ",n.number," "),r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(n.name,"?"))&&t(n.id)}},"delete")))},f=function(e){var n=e.filteredPersons,t=e.deletePerson;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement(s,{key:e.name,person:e,deletePerson:t})})))},d=function(e){var n=e.filteredValue,t=e.filteredValueChange;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},h=t(4),b=t.n(h),E="/api/persons",v=function(){return b.a.get(E).then((function(e){return e.data}))},p=function(e){return b.a.post(E,e).then((function(e){return e.data}))},g=function(e,n){return b.a.put("".concat(E,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return b.a.delete("".concat(E,"/").concat(e)).then((function(e){return e.data}))},j=function(e){var n=e.message,t=e.isError;if(null===n)return null;var a=t?"error":"success";return r.a.createElement("div",{className:a},n)},O=function(e){return"".concat(e," is already added to phonebook, replace the old number with a new one?")},C=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),h=s[0],b=s[1],E=Object(a.useState)(""),C=Object(i.a)(E,2),N=C[0],P=C[1],k=Object(a.useState)(""),S=Object(i.a)(k,2),L=S[0],y=S[1],V=Object(a.useState)(Object(l.a)(t)),T=Object(i.a)(V,2),A=T[0],D=T[1],F=Object(a.useState)(null),I=Object(i.a)(F,2),J=I[0],W=I[1],x=Object(a.useState)(null),B=Object(i.a)(x,2),q=B[0],z=B[1];return Object(a.useEffect)((function(){v().then((function(e){c(e),D(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(j,{message:J,isError:!1}),r.a.createElement(j,{message:q,isError:!0}),r.a.createElement(d,{filteredValue:L,filteredValueChange:function(e){var n=e.target.value.toLowerCase(),a=t.filter((function(e){return e.name.toLowerCase().startsWith(n)}));D(a),y(n)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(m,{newName:h,handleNameChange:function(e){b(e.target.value)},newNumber:N,handleNumberChange:function(e){P(e.target.value)},addPerson:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===h}));if(n.length>0){var a=n[0];if(window.confirm(O(a.name))){var r=Object(o.a)(Object(o.a)({},a),{},{number:N});g(a.id,r).then((function(e){c(t.map((function(n){return n.id!==a.id?n:e}))),D(A.map((function(n){return n.id!==a.id?n:e})))})).catch((function(e){z("Information of ".concat(a.name," has already been removed from server.")),setTimeout((function(){z(null)}),5e3)}))}}else b(""),P(""),p({name:h,number:N}).then((function(e){c(t.concat(e)),e.name.toLocaleLowerCase().startsWith(L.toLocaleLowerCase())&&D(A.concat(e)),W("Added ".concat(h)),setTimeout((function(){W(null)}),5e3)})).catch((function(e){z("validation error"),console.log("this is app.js catch: ".concat(e)),setTimeout((function(){z(null)}),5e3)}))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{filteredPersons:A,deletePerson:function(e){w(e).then((function(n){c(t.filter((function(n){return n.id!==e}))),D(A.filter((function(n){return n.id!==e})))}))}}))};u.a.render(r.a.createElement(C,null),document.getElementById("root"))},5:function(e,n,t){}},[[19,1,2]]]);
//# sourceMappingURL=main.1f0e575b.chunk.js.map