(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{10:function(t,e,n){t.exports={itemBody:"item_itemBody__3hAFk",item:"item_item__sF3xA",itemTime:"item_itemTime__1WokY",itemInner:"item_itemInner__2IM2e",itemCompleted:"item_itemCompleted__1aJiA",buttonHolder:"item_buttonHolder__2nkg4",button:"item_button__12YzU",buttonCancel:"item_buttonCancel__3UmXS",itemDone:"item_itemDone__2S202",itemUndone:"item_itemUndone__1tw0m"}},11:function(t,e,n){t.exports={todoBody:"todoList_todoBody__29Unn",title:"todoList_title__1_WnU",filterSection:"todoList_filterSection__s-Kul",filterButton:"todoList_filterButton__hX1hT",filters:"todoList_filters__2JSGU",filter:"todoList_filter__ygjB4",itemsReplace:"todoList_itemsReplace__1S0WE",itemsList:"todoList_itemsList__2skke",completeAll:"todoList_completeAll__2mIuY"}},133:function(t,e,n){},134:function(t,e,n){},241:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),c=n(47),a=n.n(c),r=(n(133),n(134),n(7)),l=n(96),s=n(97),m=n(103),d=n(102),u=n(72),j=n(10),b=n.n(j),p=n(51),O=n.n(p),_=n(27),f=n(3),h=function(t){var e=t.item,n=t.deleteItem,o=t.completeItem,i=t.filterType;return Object(f.jsxs)("div",{className:O()(b.a.itemBody,"done"===i&&!e.isCompleted&&b.a.itemDone,"undone"===i&&e.isCompleted&&b.a.itemDone),children:[Object(f.jsxs)("div",{className:O()(b.a.item,e.isCompleted&&b.a.itemCompleted),children:[Object(f.jsx)("p",{className:b.a.itemTime,children:e.currentDate}),Object(f.jsx)("p",{className:b.a.itemInner,children:e.itemText})]}),Object(f.jsxs)("div",{className:b.a.buttonHolder,children:[Object(f.jsx)("button",{className:O()(b.a.button,e.isCompleted&&b.a.buttonCancel),onClick:function(){o(e.id)},children:e.isCompleted?Object(f.jsx)(_.c,{}):Object(f.jsx)(_.b,{})}),Object(f.jsx)("button",{className:b.a.button,onClick:function(){n(e.id)},children:Object(f.jsx)(_.a,{})})]})]})},g=n(69),I=n(93),x=n(94),S=n(52),v=n.n(S),y=function(t){if(!t)return"Goal can't be empty"},C=function(t){if(t.length>300)return"Max length is 300 symbols"},N=n(98),T=["input","meta"],D=function(t){var e=t.input,n=t.meta,o=Object(N.a)(t,T),i=n.touched&&n.error;return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",Object(r.a)(Object(r.a)({},e),o)),Object(f.jsx)("div",{children:i&&Object(f.jsx)("div",{children:n.error})})]})},L=function(t){var e=t.items,n=t.addItem;return Object(f.jsx)(A,{onSubmit:function(t,o){var i=new Date,c="".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i.getMonth()]," ").concat(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i.getDay()]," ").concat(i.getHours(),":").concat(i.getMinutes(),":").concat(i.getSeconds());n(t.addItem,c),localStorage.setItem("".concat(e.length+1),JSON.stringify([e.length+1,t.addItem,!1,c])),o(Object(g.a)("addItemForm"))}})},A=Object(x.a)({form:"addItemForm"})((function(t){var e=t.handleSubmit;return Object(f.jsxs)("form",{className:v.a.form,onSubmit:e,children:[Object(f.jsx)(I.a,{className:v.a.input,component:D,type:"text",placeholder:"Add a goal here...",name:"addItem",validate:[y,C]}),Object(f.jsx)("button",{className:v.a.button,children:"Add"})]})})),k=n(11),E=n.n(k),M=function(t){var e=t.items,n=t.addItem,i=t.deleteItem,c=t.completeItem,a=t.completeAllItem,r=Object(o.useState)("all"),l=Object(u.a)(r,2),s=l[0],m=l[1],d=Object(o.useState)("See"),j=Object(u.a)(d,2),b=j[0],p=j[1];return Object(f.jsxs)("div",{className:E.a.todoBody,children:[Object(f.jsx)("h2",{className:E.a.title,children:"Plan for today:"}),Object(f.jsx)(L,{addItem:n,items:e}),e.length>0&&Object(f.jsxs)("div",{className:E.a.filterSection,children:[Object(f.jsxs)("button",{className:E.a.filterButton,onClick:function(){p("Hide"===b?"See":"Hide")},children:[b," filters"]}),"Hide"===b&&Object(f.jsxs)("div",{className:E.a.filters,children:[Object(f.jsx)("button",{className:E.a.filter,onClick:function(){m("all")},children:"All"}),Object(f.jsx)("button",{className:E.a.filter,onClick:function(){m("done")},children:"Done"}),Object(f.jsx)("button",{className:E.a.filter,onClick:function(){m("undone")},children:"Undone"})]})]}),Object(f.jsx)("div",{children:0===e.length?Object(f.jsx)("h3",{className:E.a.itemsReplace,children:"Add your daily goals here to be shure you won't forget something "}):Object(f.jsx)("div",{className:E.a.itemsList,children:e.map((function(t){return Object(f.jsx)(h,{item:t,deleteItem:i,completeItem:c,filterType:s},t.id)}))})}),e.length>0&&Object(f.jsx)("button",{className:E.a.completeAll,onClick:a,children:"Complete all"})]})},J=n(19),F=n(8),B=n(38),w="todo/GET_ITEMS",U="todo/ADD_ITEM",H="todo/DELETE_ITEM",P="todo/COMPLETE_ITEM",W="todo/COMPLETE_ALL_ITEMS",G={items:[]},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:for(var n=Object(B.a)(t.items),o=1;o<=localStorage.length;o++){var i=JSON.parse(localStorage.getItem(String(o)));n.push({id:i[0],itemText:i[1],isCompleted:i[2],currentDate:i[3]})}return Object(r.a)(Object(r.a)({},t),{},{items:n});case U:return Object(r.a)(Object(r.a)({},t),{},{items:[].concat(Object(B.a)(t.items),[{id:t.items.length+1,itemText:e.itemText,isCompleted:!1,currentDate:e.currentDate}])});case H:for(var c=[],a=1;a<=localStorage.length;a++){var l=JSON.parse(localStorage.getItem(String(a)));l[0]!==e.itemId&&c.push({id:c.length+1,itemText:l[1],isCompleted:l[2],currentDate:l[3]})}localStorage.clear();for(var s=0;s<=c.length-1;s++)localStorage.setItem("".concat(c[s].id),JSON.stringify([c[s].id,c[s].itemText,c[s].isCompleted,c[s].currentDate]));return Object(r.a)(Object(r.a)({},t),{},{items:c});case P:for(var m=1;m<=localStorage.length;m++){var d=JSON.parse(localStorage.getItem(String(m)));d[0]===e.itemId&&(!1===d[2]?localStorage.setItem("".concat(d[0]),JSON.stringify([d[0],d[1],!0,d[3]])):!0===d[2]&&localStorage.setItem("".concat(d[0]),JSON.stringify([d[0],d[1],!1,d[3]])))}for(var u=Object(B.a)(t.items),j=0;j<=t.items.length-1;j++)u[j].id===e.itemId&&(u[j].isCompleted=!1===u[j].isCompleted);return Object(r.a)(Object(r.a)({},t),{},{items:Object(B.a)(t.items)});case W:return localStorage.clear(),Object(r.a)(Object(r.a)({},t),{},{items:[]});default:return t}},Y=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){return Object(f.jsx)(M,Object(r.a)(Object(r.a)({},this.props),{},{addItem:this.props.addItem,deleteItem:this.props.deleteItem,completeItem:this.props.completeItem,completeAllItem:this.props.completeAllItem}))}}]),n}(i.a.Component),z=Object(F.c)(Object(J.b)((function(t){return{items:t.todo.items}}),{getItems:function(){return{type:w}},addItem:function(t,e){return{type:U,itemText:t,currentDate:e}},deleteItem:function(t){return{type:H,itemId:t}},completeItem:function(t){return{type:P,itemId:t}},completeAllItem:function(){return{type:W}}}))(Y),K=function(){return Object(f.jsx)(z,{})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),o(t),i(t),c(t),a(t)}))},q=n(95),Q=Object(F.b)({todo:R,form:q.a}),V=Object(F.d)(Q),Z=V;window.store=V,a.a.render(Object(f.jsx)(J.a,{store:Z,children:Object(f.jsx)(K,{})}),document.getElementById("root")),X()},52:function(t,e,n){t.exports={form:"addItemForm_form__2EbeK",input:"addItemForm_input__ppM32",button:"addItemForm_button__1zjJS"}}},[[241,1,2]]]);
//# sourceMappingURL=main.429257bb.chunk.js.map