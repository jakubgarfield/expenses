(this.webpackJsonpexpenses=this.webpackJsonpexpenses||[]).push([[0],{183:function(e,t,a){},188:function(e,t,a){},193:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(83),c=a.n(i),r=a(84),o=a(7),l=a(8),d=a(33),u=a(10),m=a(9),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"iconFrom",value:function(e){switch(e){case"Groceries":return"local_grocery_store";case"Restaurants":return"local_dining";case"Car":return"directions_car";case"Hobbies":return"local_library";case"Household":return"home";case"Shopping":return"local_mall";case"Health":return"local_hospital";case"Entertainment":return"local_movies";case"Transport":return"directions_bus";case"Bambino":return"face";case"Travel":return"flight";default:return"attach_money"}}},{key:"render",value:function(){return s.a.createElement("span",{className:"mdc-list-item__start-detail ".concat(this.props.category),role:"presentation"},s.a.createElement("i",{className:"material-icons","aria-hidden":"true"},this.iconFrom(this.props.category)))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"formatDate",value:function(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}},{key:"render",value:function(){var e=this;return s.a.createElement("li",{className:"mdc-list-item",onClick:function(){return e.props.onSelect(e.props.expense)}},s.a.createElement(p,{category:this.props.expense.category}),s.a.createElement("span",{className:"mdc-list-item__text"},this.props.expense.category,s.a.createElement("span",{className:"mdc-list-item__text__secondary"},this.formatDate(this.props.expense.date),this.props.expense.description?" ".concat(this.props.expense.description.replace(/^(.{14}).+/,"$1\u2026")):"")),s.a.createElement("span",{className:"mdc-list-item__end-detail"},"$",this.props.expense.amount))}}]),a}(n.Component),g=(a(182),a(183),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"mdc-list mdc-list--two-line mdc-list--avatar-list"},this.props.expenses.map((function(t){return s.a.createElement(h,{key:t.id,expense:t,onSelect:e.props.onSelect})})))}}]),a}(n.Component)),f=a(85),v=a(86),E=(a(184),a(185),a(186),a(82),a(187),a(188),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target;t.reportValidity(),n.setState({isValid:n.form.checkValidity()}),n.props.onChange(t.name,t.value)},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit()},n.initializeDeleteModal=function(e){e&&(n.dialog=new v.MDCDialog(e),n.dialog.listen("MDCDialog:accept",(function(){document.body.className=document.body.className.replace("mdc-dialog-scroll-lock",""),n.props.onDelete(n.props.expense)})))},n.state={isValid:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.querySelectorAll(".mdc-textfield").forEach((function(e){new f.MDCTextfield(e)})),void 0===this.props.expense.id&&this.amountInput.focus()}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleSubmit,ref:function(t){e.form=t},noValidate:!0},s.a.createElement("aside",{className:"mdc-dialog",ref:this.initializeDeleteModal},s.a.createElement("div",{className:"mdc-dialog__surface"},s.a.createElement("header",{className:"mdc-dialog__header"},s.a.createElement("h2",{className:"mdc-dialog__header__title"},"Are you sure?")),s.a.createElement("section",{className:"mdc-dialog__body"},"Do you really want to delete the expense?"),s.a.createElement("footer",{className:"mdc-dialog__footer"},s.a.createElement("button",{type:"button",className:"mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel"},"Cancel"),s.a.createElement("button",{type:"button",className:"mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept"},"Delete")))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("div",{className:"mdc-textfield"},s.a.createElement("input",{name:"amount",className:"mdc-textfield__input",ref:function(t){e.amountInput=t},value:this.props.expense.amount,onChange:this.handleInputChange,type:"number",step:"0.01",min:"0",required:!0}),s.a.createElement("label",{className:"mdc-textfield__label"},"Amount"))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("select",{name:"category",className:"mdc-select",value:this.props.expense.category,onChange:this.handleInputChange,required:!0},this.props.categories.map((function(e){return s.a.createElement("option",{value:e,key:e},e)})))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("div",{className:"mdc-textfield"},s.a.createElement("input",{name:"description",className:"mdc-textfield__input",value:this.props.expense.description,onChange:this.handleInputChange,type:"text"}),s.a.createElement("label",{className:"mdc-textfield__label"},"Description"))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("div",{className:"mdc-textfield"},s.a.createElement("input",{name:"date",className:"mdc-textfield__input",value:this.props.expense.date,onChange:this.handleInputChange,type:"date",required:!0}),s.a.createElement("label",{className:"mdc-textfield__label"},"Date"))),s.a.createElement("div",{className:"mdc-form-field"},s.a.createElement("select",{name:"account",className:"mdc-select",value:this.props.expense.account,onChange:this.handleInputChange,required:!0},this.props.accounts.map((function(e){return s.a.createElement("option",{value:e,key:e},e)})))),s.a.createElement("div",{className:"mdc-form-field mdc-form-submit"},s.a.createElement("input",{type:"submit",className:"mdc-button",value:this.props.expense.id?"Update":"Add",disabled:!this.state.isValid}),this.props.expense.id&&s.a.createElement("input",{type:"button",className:"mdc-button",onClick:function(){return e.dialog.show()},value:"Delete"}),s.a.createElement("input",{type:"button",className:"mdc-button",onClick:function(){return e.props.onCancel()},value:"Close"})))}}]),a}(n.Component)),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"center"},s.a.createElement("svg",{width:"80px",height:"80px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},s.a.createElement("circle",{cx:"84",cy:"50",r:"0",fill:"#c0f6d2"},s.a.createElement("animate",{attributeName:"r",values:"11;0;0;0;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}),s.a.createElement("animate",{attributeName:"cx",values:"84;84;84;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"})),s.a.createElement("circle",{cx:"40.0957",cy:"50",r:"11",fill:"#ff7c81"},s.a.createElement("animate",{attributeName:"r",values:"0;11;11;11;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.5s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.5s"})),s.a.createElement("circle",{cx:"16",cy:"50",r:"7.79567",fill:"#fac090"},s.a.createElement("animate",{attributeName:"r",values:"0;11;11;11;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.25s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"-0.25s"})),s.a.createElement("circle",{cx:"84",cy:"50",r:"3.20433",fill:"#ffffcb"},s.a.createElement("animate",{attributeName:"r",values:"0;11;11;11;0",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;50;84;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"})),s.a.createElement("circle",{cx:"74.0957",cy:"50",r:"11",fill:"#c0f6d2"},s.a.createElement("animate",{attributeName:"r",values:"0;0;11;11;11",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}),s.a.createElement("animate",{attributeName:"cx",values:"16;16;16;50;84",keyTimes:"0;0.25;0.5;0.75;1",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",calcMode:"spline",dur:"1s",repeatCount:"indefinite",begin:"0s"}))))}}]),a}(n.Component),x=a(87),_=(a(189),a(190),a(191),a(192),a(193),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onKeyPressed=function(t){!0===e.state.signedIn&&(!1===e.state.showExpenseForm?65===t.keyCode&&e.onExpenseNew():27===t.keyCode&&e.handleExpenseCancel())},e.signedInChanged=function(t){e.setState({signedIn:t}),e.state.signedIn&&e.load()},e.handleExpenseSubmit=function(){e.setState({processing:!0,showExpenseForm:!1}),(e.state.expense.id?e.update:e.append).bind(Object(d.a)(e))(e.state.expense).then((function(t){e.snackbar.show({message:"Expense ".concat(e.state.expense.id?"updated":"added","!")}),e.load()}),(function(t){console.error("Something went wrong"),console.error(t),e.setState({loading:!1})}))},e.handleExpenseChange=function(t,a){e.setState({expense:Object.assign({},e.state.expense,Object(r.a)({},t,a))})},e.handleExpenseDelete=function(t){e.setState({processing:!0,showExpenseForm:!1});var a=t.id.substring(10);window.gapi.client.sheets.spreadsheets.batchUpdate({spreadsheetId:e.spreadsheetId,resource:{requests:[{deleteDimension:{range:{sheetId:0,dimension:"ROWS",startIndex:a-1,endIndex:a}}}]}}).then((function(t){e.snackbar.show({message:"Expense deleted!"}),e.load()}),(function(t){console.error("Something went wrong"),console.error(t),e.setState({loading:!1})}))},e.handleExpenseSelect=function(t){e.setState({expense:t,showExpenseForm:!0})},e.handleExpenseCancel=function(){e.setState({showExpenseForm:!1})},e.clientId="826265862385-p41e559ccssujlfsf49ppmo0gktkf6co.apps.googleusercontent.com",e.spreadsheetId="18uwYwUAVw0H5bhszMgAORmvAN2APxAtJI3FB-XH7Dzk",e.state={signedIn:void 0,accounts:[],categories:[],expenses:[],processing:!0,expense:{},currentMonth:void 0,previousMonth:void 0,showExpenseForm:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],clientId:e.clientId,scope:"https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata.readonly"}).then((function(){window.gapi.auth2.getAuthInstance().isSignedIn.listen(e.signedInChanged),e.signedInChanged(window.gapi.auth2.getAuthInstance().isSignedIn.get())}))})),document.addEventListener("keydown",this.onKeyPressed.bind(this))}},{key:"onExpenseNew",value:function(){var e=new Date;this.setState({showExpenseForm:!0,expense:{amount:"",description:"",date:"".concat(e.getFullYear(),"-").concat(e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,"-").concat(e.getDate()<10?"0"+e.getDate():e.getDate()),category:this.state.categories[0],account:this.state.accounts[0]}})}},{key:"parseExpense",value:function(e,t){return{id:"Expenses!A".concat(t+2),date:e[0],description:e[1],category:e[3],amount:e[4].replace(",",""),account:e[2]}}},{key:"formatExpense",value:function(e){return["=DATE(".concat(e.date.substr(0,4),", ").concat(e.date.substr(5,2),", ").concat(e.date.substr(-2),")"),e.description,e.account,e.category,e.amount]}},{key:"append",value:function(e){return window.gapi.client.sheets.spreadsheets.values.append({spreadsheetId:this.spreadsheetId,range:"Expenses!A1",valueInputOption:"USER_ENTERED",insertDataOption:"INSERT_ROWS",values:[this.formatExpense(e)]})}},{key:"update",value:function(e){return window.gapi.client.sheets.spreadsheets.values.update({spreadsheetId:this.spreadsheetId,range:e.id,valueInputOption:"USER_ENTERED",values:[this.formatExpense(e)]})}},{key:"load",value:function(){var e=this;window.gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:this.spreadsheetId,ranges:["Data!A2:A50","Data!E2:E50","Expenses!A2:F","Current!H1","Previous!H1"]}).then((function(t){var a=t.result.valueRanges[0].values.map((function(e){return e[0]})),n=t.result.valueRanges[1].values.map((function(e){return e[0]}));e.setState({accounts:a,categories:n,expenses:(t.result.valueRanges[2].values||[]).map(e.parseExpense).reverse().slice(0,30),processing:!1,currentMonth:t.result.valueRanges[3].values[0][0],previousMonth:t.result.valueRanges[4].values[0][0]})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("header",{className:"mdc-toolbar mdc-toolbar--fixed"},s.a.createElement("div",{className:"mdc-toolbar__row"},s.a.createElement("section",{className:"mdc-toolbar__section mdc-toolbar__section--align-start"},s.a.createElement("span",{className:"mdc-toolbar__title"},"Expenses")),s.a.createElement("section",{className:"mdc-toolbar__section mdc-toolbar__section--align-end",role:"toolbar"},!1===this.state.signedIn&&s.a.createElement("a",{className:"material-icons mdc-toolbar__icon","aria-label":"Sign in",alt:"Sign in",onClick:function(e){e.preventDefault(),window.gapi.auth2.getAuthInstance().signIn()}},"perm_identity"),this.state.signedIn&&s.a.createElement("a",{className:"material-icons mdc-toolbar__icon","aria-label":"Sign out",alt:"Sign out",onClick:function(e){e.preventDefault(),window.gapi.auth2.getAuthInstance().signOut()}},"exit_to_app")))),s.a.createElement("div",{className:"toolbar-adjusted-content"},void 0===this.state.signedIn&&s.a.createElement(b,null),!1===this.state.signedIn&&s.a.createElement("div",{className:"center"},s.a.createElement("button",{className:"mdc-button sign-in","aria-label":"Sign in",onClick:function(){window.gapi.auth2.getAuthInstance().signIn()}},"Sign In")),this.state.signedIn&&this.renderBody()),s.a.createElement("div",{ref:function(t){t&&(e.snackbar=new x.MDCSnackbar(t))},className:"mdc-snackbar","aria-live":"assertive","aria-atomic":"true","aria-hidden":"true"},s.a.createElement("div",{className:"mdc-snackbar__text"}),s.a.createElement("div",{className:"mdc-snackbar__action-wrapper"},s.a.createElement("button",{type:"button",className:"mdc-button mdc-snackbar__action-button","aria-hidden":"true"}))))}},{key:"renderBody",value:function(){return this.state.processing?s.a.createElement(b,null):s.a.createElement("div",{className:"content"},this.renderExpenses())}},{key:"renderExpenses",value:function(){var e=this;return this.state.showExpenseForm?s.a.createElement(E,{categories:this.state.categories,accounts:this.state.accounts,expense:this.state.expense,onSubmit:this.handleExpenseSubmit,onCancel:this.handleExpenseCancel,onDelete:this.handleExpenseDelete,onChange:this.handleExpenseChange}):s.a.createElement("div",null,s.a.createElement("div",{className:"mdc-card"},s.a.createElement("section",{className:"mdc-card__primary"},s.a.createElement("h2",{className:"mdc-card__subtitle"},"This month you've spent:"),s.a.createElement("h1",{className:"mdc-card__title mdc-card__title--large center"},this.state.currentMonth)),s.a.createElement("section",{className:"mdc-card__supporting-text"},"Previous month: ",this.state.previousMonth)),s.a.createElement(g,{expenses:this.state.expenses,onSelect:this.handleExpenseSelect}),s.a.createElement("button",{onClick:function(){return e.onExpenseNew()},className:"mdc-fab app-fab--absolute material-icons","aria-label":"Add expense"},s.a.createElement("span",{className:"mdc-fab__icon"},"add")))}}]),a}(n.Component));a(194),a(195);c.a.render(s.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))},88:function(e,t,a){e.exports=a(196)}},[[88,1,2]]]);
//# sourceMappingURL=main.7836d081.chunk.js.map