(this.webpackJsonpTODO_list_app=this.webpackJsonpTODO_list_app||[]).push([[0],{18:function(t,e,i){t.exports={itemBody:"itemMedia_itemBody__5OHzf",item:"itemMedia_item__pRRvy",buttonHolder:"itemMedia_buttonHolder__2v8xo",button:"itemMedia_button__39uSv",itemDone:"itemMedia_itemDone__22HK5",itemUndone:"itemMedia_itemUndone__1b3y6"}},191:function(t,e,i){"use strict";i.r(e);var o=i(0),n=i(34),a=i.n(n),r=(i(84),i(85),i(15)),c=i(6),l=i.n(c),s=i(18),m=i.n(s),d=i(2),u=i.n(d),_=i(20),b=i(10),j=i(4),f=i(5),p=function(t){for(var e=1;e<=localStorage.length;e++){var i=JSON.parse(localStorage.getItem(String(e)));t.push({id:i[0],itemText:i[1],isCompleted:i[2],currentDate:i[3]})}},O=function(){var t=new Date,e=function(t){return String(t).length<=1?"0".concat(String(t)):String(t)},i=e(t.getHours()),o=e(t.getMinutes()),n=e(t.getSeconds());return"".concat(t.getFullYear()," / ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]," / ").concat(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][t.getDay()-1]," \n            / ").concat(i,":").concat(o,":").concat(n)},h=function(t,e,i){localStorage.setItem("".concat(t.length+1),JSON.stringify([t.length+1,e.itemText,!1,i]))},g=function(t,e){for(var i=1;i<=localStorage.length;i++){var o=JSON.parse(localStorage.getItem(String(i)));o[0]!==e.itemId&&t.push({id:t.length+1,itemText:o[1],isCompleted:o[2],currentDate:o[3]})}localStorage.clear();for(var n=0;n<=t.length-1;n++)localStorage.setItem("".concat(t[n].id),JSON.stringify([t[n].id,t[n].itemText,t[n].isCompleted,t[n].currentDate]))},x=function(t,e,i){for(var o=1;o<=localStorage.length;o++){var n=JSON.parse(localStorage.getItem(String(o)));n[0]===e.itemId&&(!1===n[2]?localStorage.setItem("".concat(n[0]),JSON.stringify([n[0],n[1],!0,n[3]])):!0===n[2]&&localStorage.setItem("".concat(n[0]),JSON.stringify([n[0],n[1],!1,n[3]])))}for(var a=0;a<=i.items.length-1;a++)t[a].id===e.itemId&&(t[a].isCompleted=!1===t[a].isCompleted)},S="todo/GET_ITEMS",v="todo/ADD_ITEM",y="todo/DELETE_ITEM",T="todo/COMPLETE_ITEM",M="todo/COMPLETE_ALL_ITEMS",C={items:[]},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:var i=[];return p(i),Object(f.a)(Object(f.a)({},t),{},{items:i});case v:var o=O(),n=Object(j.a)(t.items);return h(n,e,o),Object(f.a)(Object(f.a)({},t),{},{items:[].concat(Object(j.a)(t.items),[{id:n.length+1,itemText:e.itemText,isCompleted:!1,currentDate:o}])});case y:var a=[];return g(a,e),Object(f.a)(Object(f.a)({},t),{},{items:a});case T:var r=Object(j.a)(t.items);return x(r,e,t),Object(f.a)(Object(f.a)({},t),{},{items:Object(j.a)(t.items)});case M:return localStorage.clear(),Object(f.a)(Object(f.a)({},t),{},{items:[]});default:return t}},L=i(1),N=function(t){var e=t.item,i=t.filterType,o=Object(b.b)(),n=[l.a.itemDone,m.a.itemDone];return Object(L.jsxs)("div",{className:u()(l.a.itemBody,m.a.itemBody,"done"===i&&!e.isCompleted&&n,"undone"===i&&e.isCompleted&&n),children:[Object(L.jsxs)("div",{className:u()(l.a.item,m.a.item,e.isCompleted&&l.a.itemCompleted),children:[Object(L.jsx)("p",{className:l.a.itemTime,children:e.currentDate}),Object(L.jsx)("p",{className:l.a.itemInner,children:e.itemText})]}),Object(L.jsxs)("div",{className:u()(l.a.buttonHolder,m.a.buttonHolder),children:[Object(L.jsx)("button",{className:u()(l.a.button,m.a.button,e.isCompleted&&l.a.buttonCancel),onClick:function(){var t;o((t=e.id,{type:T,itemId:t}))},children:e.isCompleted?Object(L.jsx)(_.c,{}):Object(L.jsx)(_.b,{})}),Object(L.jsx)("button",{className:u()(l.a.button,m.a.button),onClick:function(){var t;o((t=e.id,{type:y,itemId:t}))},children:Object(L.jsx)(_.a,{})})]})]})},B=i(26),A=i.n(B),D=i(27),F=i.n(D),k=i(79),E=i(49),J=function(){var t=Object(b.b)(),e=E.a().shape({itemText:E.b().required("Goal can't be empty").max(300,"Max length is 300 symbols")});return Object(L.jsx)("div",{children:Object(L.jsx)(k.a,{initialValues:{itemText:""},validateOnBlur:!0,onSubmit:function(e,i){var o,n=i.resetForm;t((o=e.itemText,{type:v,itemText:o})),n({values:""})},validationSchema:e,children:function(t){var e=t.values,i=t.errors,o=t.touched,n=t.handleChange,a=t.handleBlur,r=t.handleSubmit,c=t.isValid,l=t.dirty;return Object(L.jsxs)("div",{className:u()(A.a.form,F.a.form),children:[o.itemText&&i.itemText&&Object(L.jsx)("div",{className:u()(A.a.errorArea,F.a.errorArea),children:i.itemText}),Object(L.jsx)("input",{className:u()(A.a.input,F.a.input),type:"text",name:"itemText",onChange:n,onBlur:a,value:e.itemText,placeholder:"Add a goal here..."}),Object(L.jsx)("button",{className:u()(A.a.button,F.a.button),disabled:!c&&!l,onClick:r,type:"submit",children:"Add"})]})}})})},U=i(7),H=i.n(U),R=i(8),w=i.n(R),P=function(){var t=Object(b.c)((function(t){return t.todo.items})),e=Object(b.b)();Object(o.useEffect)((function(){e({type:S})}),[]);var i=Object(o.useState)(!1),n=Object(r.a)(i,2),a=n[0],c=n[1],l=function(){c(!1)},s=Object(o.useState)("all"),m=Object(r.a)(s,2),d=m[0],_=m[1];return Object(L.jsxs)("div",{className:u()(H.a.todoBody,w.a.todoBody),children:[Object(L.jsx)("h2",{className:u()(H.a.title,w.a.title),children:"Plan for today:"}),Object(L.jsx)(J,{}),t.length>0&&!a&&Object(L.jsx)("button",{className:u()(H.a.filterButton,w.a.filterButton),onClick:function(){c(!0)},children:"Filters"}),t.length>0&&a&&Object(L.jsxs)("div",{className:u()(H.a.filters,w.a.filters),children:[Object(L.jsx)("button",{className:u()(H.a.filter,w.a.filter),onClick:function(){_("all"),l()},children:"All"}),Object(L.jsx)("button",{className:u()(H.a.filter,w.a.filter),onClick:function(){_("done"),l()},children:"Done"}),Object(L.jsx)("button",{className:u()(H.a.filter,w.a.filter),onClick:function(){_("undone"),l()},children:"Undone"})]}),0===t.length?Object(L.jsx)("h3",{className:u()(H.a.itemsReplace,w.a.itemsReplace),children:"Add your daily goals here to be shure you won't forget something "}):Object(L.jsx)("div",{className:u()(H.a.itemsList,w.a.itemsList),children:t.map((function(t){return Object(L.jsx)(N,{item:t,filterType:d},t.id)}))}),t.length>0&&Object(L.jsx)("button",{className:u()(H.a.completeAll,w.a.completeAll),onClick:function(){e({type:M})},children:"Complete all"})]})},W=function(){return Object(L.jsx)(P,{})},Y=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,192)).then((function(e){var i=e.getCLS,o=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;i(t),o(t),n(t),a(t),r(t)}))},z=i(48),G=Object(z.a)({todo:I}),K=Object(z.b)(G);a.a.render(Object(L.jsx)(b.a,{store:K,children:Object(L.jsx)(W,{})}),document.getElementById("root")),Y()},26:function(t,e,i){t.exports={form:"addItemForm_form__2EbeK",input:"addItemForm_input__ppM32",button:"addItemForm_button__1zjJS",errorArea:"addItemForm_errorArea__2tovt"}},27:function(t,e,i){t.exports={form:"addItemFormMedia_form__J0tmR",input:"addItemFormMedia_input__2RD8A",button:"addItemFormMedia_button__2SY3o",errorArea:"addItemFormMedia_errorArea__1_0i7"}},6:function(t,e,i){t.exports={itemBody:"item_itemBody__3hAFk",item:"item_item__sF3xA",itemTime:"item_itemTime__1WokY",itemInner:"item_itemInner__2IM2e",itemCompleted:"item_itemCompleted__1aJiA",buttonHolder:"item_buttonHolder__2nkg4",button:"item_button__12YzU",buttonCancel:"item_buttonCancel__3UmXS",itemDone:"item_itemDone__2S202",itemUndone:"item_itemUndone__1tw0m"}},7:function(t,e,i){t.exports={todoBody:"todoList_todoBody__29Unn",title:"todoList_title__1_WnU",filterSection:"todoList_filterSection__s-Kul",filterButton:"todoList_filterButton__hX1hT",filters:"todoList_filters__2JSGU",filter:"todoList_filter__ygjB4",itemsReplace:"todoList_itemsReplace__1S0WE",itemsList:"todoList_itemsList__2skke",completeAll:"todoList_completeAll__2mIuY"}},8:function(t,e,i){t.exports={todoBody:"todoListMedia_todoBody__2kfpW",title:"todoListMedia_title__2Q3Vw",itemsList:"todoListMedia_itemsList__28lba",filterButton:"todoListMedia_filterButton__2yOXb",filters:"todoListMedia_filters__ULwMc",filter:"todoListMedia_filter__27JlI",itemsReplace:"todoListMedia_itemsReplace__1HroB",completeAll:"todoListMedia_completeAll__3Tdkf"}},84:function(t,e,i){},85:function(t,e,i){}},[[191,1,2]]]);
//# sourceMappingURL=main.0ec7dabe.chunk.js.map