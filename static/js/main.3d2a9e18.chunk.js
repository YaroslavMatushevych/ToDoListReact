(this.webpackJsonptodolistreact=this.webpackJsonptodolistreact||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),l=a.n(i),s=(a(35),a(4)),o=a(44),c=a.n(o),m=function(e){var t=e.toggleOpenHandler;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{href:"#",className:"navbar-logo"},r.a.createElement("img",{src:c.a,alt:"ToDo List Logo"})),r.a.createElement("a",{className:"sidebar-toggle",onClick:t},r.a.createElement("i",{className:"fas fa-bars"}))),r.a.createElement("div",null,r.a.createElement("h2",{className:"navbar-greeting"},"Hi, from Yaroslav!")))};m.defaultProps={toggleOpenHandler:function(){}};var d=Object(n.memo)(m),u=a(46),p=a(18),f=a.n(p),g=Object(n.memo)((function(){var e=JSON.parse(localStorage.getItem("toDoListData"));return r.a.createElement("div",{className:"user-popup"},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("div",{className:"thumb"},r.a.createElement("img",{className:"thumb-photo",alt:"Yaroslav Matushevych",src:f.a}),r.a.createElement("div",{className:"thumb-options"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn-popup-profile"},r.a.createElement("i",{className:"fas fa-pencil-alt"})),r.a.createElement("button",{className:"btn-popup-profile"},r.a.createElement("i",{className:"fas fa-trash"}))))),r.a.createElement("div",{className:"user-popup-info"},r.a.createElement("h6",null,"Yaroslav Matushevych ",r.a.createElement("small",null,"Front end developer")))),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",{style:{display:"inline-block"}},r.a.createElement("i",{className:"fas fa-edit"}),"My tasks"),r.a.createElement("span",{className:"posts-amount"},e?e.length:0))))})),h=[{title:"All tasks",iconCssClass:"fas fa-align-justify",href:"#",id:"1"},{title:"Active",iconCssClass:"fas fa-layer-group",href:"#",id:"2"},{title:"Closed",iconCssClass:"far fa-comments",href:"#",id:"3"}],v=[{title:"Dashboard",iconCssClass:"fas fa-desktop",href:"#",id:"1"},{title:"Form components",iconCssClass:"fas fa-align-justify",href:"#",id:"2"},{title:"Interface components",iconCssClass:"fas fa-th",href:"#",id:"3"},{title:"Task manager",iconCssClass:"fas fa-list-ol",href:"#",id:"4"},{title:"User",iconCssClass:"fas fa-user",href:"#",id:"5"},{title:"Support",iconCssClass:"fas fa-question-circle",href:"#",id:"6"}],E=Object(n.memo)((function(){var e=v.map((function(e,t){var a=e.title,n=e.href,i=e.iconCssClass;return r.a.createElement("li",{key:e.id,className:"navigation-item"},r.a.createElement("a",{href:n,className:"navigation-item-link disabled"},r.a.createElement("span",null,a),r.a.createElement("i",{className:i})),3===t&&r.a.createElement("ul",{className:"navigation-sub-list"},r.a.createElement("li",{className:"navigation-subitem"},r.a.createElement("a",{className:"navigation-subitem-link disabled",href:"#"},"Task grid")),r.a.createElement("li",{className:"navigation-subitem"},r.a.createElement("a",{className:"navigation-subitem-link active",href:"#"},"Task list")),r.a.createElement("li",{className:"navigation-subitem"},r.a.createElement("a",{className:"navigation-subitem-link disabled",href:"#"},"Task detailed"))))}));return r.a.createElement("ul",{className:"navigation"},e)})),b=function(e){var t=e.openNav,a=Object(n.useState)(!1),i=Object(s.a)(a,2),l=i[0],o=i[1];return r.a.createElement("div",{className:t?"sidebar active":"sidebar"},r.a.createElement("div",{className:"user-menu"},r.a.createElement("a",{href:"#",className:"togglePopupProfile",onClick:function(e){e.preventDefault(),o(!l)}},r.a.createElement("img",{src:f.a,alt:"Yaroslav Matushevych"}),r.a.createElement("div",{className:"user-info"},r.a.createElement("p",null,"Yaroslav Matushevych"),r.a.createElement("span",null,"Web Developer"))),l&&r.a.createElement(g,null)),r.a.createElement(E,null))};b.defaultProps={openNav:!1};var N=Object(n.memo)(b),D=a(33),y=a(19),k=a(20),C=a(22),S=a(21),w=a(23);function O(){var e=localStorage.getItem("toDoListData");return null===e||0===e.length?[]:JSON.parse(e)}function x(e){localStorage.setItem("toDoListData",JSON.stringify(e))}function j(e,t){for(var a=0;a<t.length&&t[a].id!==e;a++);return a}function I(e){return e.sort((function(e,t){if("High"===e.priority)return-1;if("Middle"===e.priority){if("High"===t.priority)return 1;if("Middle"===t.priority)return 0;if("Low"===t.priority)return-1}else if("Low"===e.priority)return 1}))}function T(e){var t=new Date,a=O();return"today"===e?a.filter((function(e){return new Date(e.date).getMonth()-t.getMonth()===0&&new Date(e.date).getDate()-t.getDate()===0})):"tomorrow"===e?a.filter((function(e){return new Date(e.date).getDate()-t.getDate()===1&&new Date(e.date).getMonth()-t.getMonth()===0})):"week"===e?a.filter((function(e){return new Date(e.date).getDate()-t.getDate()>=0&&new Date(e.date).getDate()-t.getDate()<=7&&new Date(e.date).getMonth()-t.getMonth()===0})):"month"===e?a.filter((function(e){return new Date(e.date).getMonth()-t.getMonth()===0&&new Date(e.date).getDate()-t.getDate()>=0})):O()}var M=a(45),A=a.n(M);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(D.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(C.a)(this,Object(S.a)(t).call(this,e))).onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(L({},a.state,Object(D.a)({},n,r)))},a.onChangeDateHandler=function(e){var t,n,r;n=["January","February","April","May","June","July","August","September","October","November","December"][e.getMonth()],t=e.getDate(),r=e.getFullYear(),a.setState({date:e,day:t,month:n,year:r})},a.wrapperOnSubmit=function(e){e.preventDefault(),a.props.newItemSubmitHandler(a.state)},a.wrapperOnEdit=function(e){e.preventDefault(),a.props.editItem(a.props.editionItem.id,a.state)},a.setAttachedImageState=function(e){if(function(e){return!(!e||!e.length)&&(!(e[0].size/1024>200)&&function(e){var t=e.split("."),a=t[t.length-1];return!!["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"].find((function(e){return e===a}))}(e[0].name))}(e))(t=e[0],new Promise((function(e,a){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return a(e)}}))).then((function(e){a.setState({attachedImage:e})}));var t},a.onAttachedImageChange=function(){a.setAttachedImageState(a.attachedImageRef.current.files)},a.onAttachedImageDragEnter=function(e){e.stopPropagation(),e.preventDefault()},a.onAttachedImageDragOver=function(e){e.stopPropagation(),e.preventDefault()},a.onAttachedImageDrop=function(e){a.setAttachedImageState(e.dataTransfer.files),e.stopPropagation(),e.preventDefault()},a.state={title:"",description:"",date:new Date,day:"",month:"",year:"",priority:"Low",attachedImage:"",isDone:!1},a.attachedImageRef=r.a.createRef(),a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.edit&&this.setState(L({},this.state,{title:this.props.editionItem.title,description:this.props.editionItem.description,date:this.props.editionItem.date,priority:this.props.editionItem.priority,tag:this.props.editionItem.tag,attachedImage:this.props.editionItem.attachedImage}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.priority,i=e.date,l=e.attachedImage,s=this.props,o=s.edit,c=s.toggleOpenHandler;return r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"modal"},r.a.createElement("header",{className:"modal-header"},r.a.createElement("h2",{className:"modal-heading"},o?"Edit item":"Add new item"),r.a.createElement("i",{className:"fas fa-times cross",onClick:c})),r.a.createElement("form",{className:"modal-form",id:"modal-form",onSubmit:o?this.wrapperOnEdit:this.wrapperOnSubmit},r.a.createElement("p",{className:"info-input-descript"},"Enter todo title"),r.a.createElement("input",{onChange:this.onChangeHandler,pattern:"(?=.*[a-z])(?=.*[A-Z]).{2,20}",className:"info-input",required:!0,type:"text",name:"title",placeholder:"Title *",value:t}),r.a.createElement("p",{className:"info-input-descript"},"Enter description"),r.a.createElement("input",{onChange:this.onChangeHandler,className:"info-input",type:"text",name:"description",placeholder:"Description",value:a}),r.a.createElement("p",{className:"info-input-descript"},"Select priority"),r.a.createElement("select",{onChange:this.onChangeHandler,className:"info-input",required:!0,name:"priority",value:n},r.a.createElement("option",{className:"option low",value:"Low"},"Low"),r.a.createElement("option",{className:"option middle",value:"Middle"},"Middle"),r.a.createElement("option",{className:"option high",value:"High"},"High")),r.a.createElement("p",{className:"info-input-descript"},"Enter deadline"),r.a.createElement(A.a,{minDate:new Date,onChange:this.onChangeDateHandler,value:i,className:"info-input"}),r.a.createElement("div",{className:"attach-image-block",onDragEnter:this.onAttachedImageDragEnter,onDragOver:this.onAttachedImageDragOver,onDrop:this.onAttachedImageDrop},r.a.createElement("input",{type:"file",name:"image-input",className:"attach-image",ref:this.attachedImageRef,accept:"image/*",onChange:this.onAttachedImageChange}),r.a.createElement("p",{className:"text"},"Attach image (200kb max)")),l?r.a.createElement("img",{src:l,className:"thumnail-img",alt:"thumbnail"}):r.a.createElement("p",{className:"thumbnail-text"},"no file or invalid file"),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",null,r.a.createElement("button",{className:"cancel-btn btn",onClick:c},"Cancel")),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"create-btn btn"},o?"Edit item":"Add item"))))))}}]),t}(n.Component),J=a(10),F=a.n(J),W=function(e){var t=Date.parse(e.deadline)-Date.parse(new Date),a={color:"#777",fontWeight:"400"};return r.a.createElement("div",{className:"task-deadline-timer"},r.a.createElement("i",{className:"far fa-clock",style:{marginRight:"3px"}}),r.a.createElement(F.a,{initialTime:t,direction:"backward"},(function(e){var t=e.getTime;return r.a.createElement(r.a.Fragment,null,t()>=864e5?r.a.createElement("strong",{className:"text-danger"},r.a.createElement(F.a.Days,null),r.a.createElement("span",{style:a}," days left")):null,t()>=36e5&&t()<=86399999?r.a.createElement("strong",{className:"text-danger"},r.a.createElement(F.a.Hours,null),r.a.createElement("span",{style:a}," hours left")):null,t()>=6e4&&t()<=3599999?r.a.createElement("strong",{className:"text-danger"},r.a.createElement(F.a.Minutes,null),r.a.createElement("span",{style:a}," minutes left")):null,t()<=59e3?r.a.createElement("strong",{className:"text-danger"}," Time is ran out "):null)})))},Y=r.a.createContext(),R=function(e){var t=e.data,a=e.makeDoneUndone,n=e.deleteItemWrapper,i=function(e){"complete"===e.target.id&&a(e),"delete"===e.target.id&&n(e)},l=t.title,s=t.description,o=t.priority,c=t.date,m=t.id,d=t.day,u=t.month,p=t.year,f=t.isDone,g=t.attachedImage,h="";return f&&(h="done"),r.a.createElement(Y.Consumer,null,(function(e){return r.a.createElement("div",{className:"task-item "+o.toLocaleLowerCase()+"-border "+h,id:m},r.a.createElement("div",{style:{position:"relative",height:"100%",width:"100%"}},r.a.createElement("div",{className:"overlay-complete"},r.a.createElement("i",{className:"fas fa-check"}),r.a.createElement("p",null,"Completed")),r.a.createElement("div",{className:"task-main"},r.a.createElement("div",{className:"task-description"},r.a.createElement("div",{style:{overflowY:"auto",maxHeight:"90px"}},r.a.createElement("h6",{className:"task-heading"},l),r.a.createElement("p",{className:"task-description-text"},s))),r.a.createElement("div",{className:"task-info"},r.a.createElement("p",{className:"task-info-added"},u," ",d,", ",p," "),r.a.createElement("p",{className:"priority-text"},r.a.createElement("span",{className:"priority-item "+o.toLocaleLowerCase()},o)),r.a.createElement("p",{className:"task-info-deadline-day"})))),r.a.createElement("div",{className:"task-footer"},r.a.createElement(W,{deadline:c}),r.a.createElement("div",{className:"task-tools"},g&&r.a.createElement("a",{href:g,download:!0},r.a.createElement("i",{className:"fas fa-file-download",id:"download"})),r.a.createElement("i",{className:"fas fa-check",id:"complete",onClick:i}),r.a.createElement("i",{className:"fas fa-pencil-alt",id:"edit",onClick:e.openEditModal}),r.a.createElement("i",{className:"far fa-trash-alt",id:"delete",onClick:i}))))}))};R.defaultProps={title:"Title",date:"Mon, 01 Jan 2020 00:00:00 GMT",id:"2342434",day:"1",month:"1",year:"2020",description:"Description",priority:"Low",deadline:"Deadline",attachedImage:!1,isDone:!1};var U=R,B=function(e){var t=e.toggleClass,a=e.activeTab,n=h.map((function(e){var n=e.id,i=e.href,l=e.iconCssClass,s=e.title;return r.a.createElement("li",{key:n,className:"nav-item ".concat(a===n&&"active"),onClick:function(e){return t(e)}},r.a.createElement("a",{id:n,href:i},r.a.createElement("i",{className:l}),s,"3"===n&&r.a.createElement("span",{className:"amount closed"},function(){var e,t=0;if(!localStorage.toDoListData)return t;e=JSON.parse(localStorage.toDoListData);for(var a=0;a<e.length;a++)e[a].isDone&&t++;return t}())))}));return r.a.createElement("ul",{className:"nav-tabs"},n)};B.defaultProps={toggleClass:function(){},activeTab:"1"};var q=B,z=function(e){var t=e.sorting;return r.a.createElement("ul",{className:"dropdown-sorts"},r.a.createElement("li",{className:"dropdown-sort",id:"isDone",onClick:t},"Sort by isDone"),r.a.createElement("li",{className:"dropdown-sort",id:"deadline",onClick:t},"Sort by deadline"),r.a.createElement("li",{className:"dropdown-sort",id:"priority",onClick:t},"Sort by priority"))};z.defaultProps={sorting:function(){}};var G=Object(n.memo)(z),V={fontSize:"30px",marginTop:"40px"},X=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(C.a)(this,Object(S.a)(t).call(this,e))).sorting=function(e){var t=a.state.filtered;"default"===e?t=function(e){if(0!=e.length){var t=I(e.filter((function(e){return!1===e.isDone}))),a=I(e.filter((function(e){return!0===e.isDone}))).concat(t);return x(a),a}return null}(t):("priority"===e.target.id&&(t=I(t),a.setState({filterTitle:"Sort By Priority"})),"isDone"===e.target.id&&(t=t.sort((function(e,t){return e.isDone===t.isDone?0:e.isDone?-1:1})),a.setState({filterTitle:"Sort By Done"})),"deadline"===e.target.id&&(t=function(e){return e.sort((function(e,t){return new Date(e.date).getTime()===new Date(t.date).getTime()?0:new Date(e.date).getTime()?1:-1}))}(t),a.setState({filterTitle:"Sort By Deadline"}))),a.setState({filtered:t})},a.deleteItemWrapper=function(e){var t=function(e){var t=O(),a=j(e,t);return t.splice(a,1),x(t),t}(e.target.closest(".task-item").getAttribute("id"));a.setState({filtered:t,data:t})},a.makeDoneUndone=function(e){for(var t=e.target.closest(".task-item").getAttribute("id"),n=a.state.filtered,r=JSON.parse(localStorage.toDoListData),i=0;i<r.length;i++)r[i].id===t&&(n[i].isDone=!n[i].isDone,a.setState({filtered:n}),r[i].isDone=!r[i].isDone,localStorage.setItem("toDoListData",JSON.stringify(r)))},a.openSelect=function(){var e=a.state.openSortSelect;a.setState({openSortSelect:!e})},a.toggleClass=function(e){e.preventDefault(),a.setState({activeTab:e.target.getAttribute("id")})},a.renderToDoItems=function(e){return e&&(e=function(e,t){if("1"===t)return e;var a=[];if("2"===t){for(var n=0;n<e.length;n++)!1===e[n].isDone&&a.push(e[n]);return a}if("3"===t){for(var r=0;r<e.length;r++)!0===e[r].isDone&&a.push(e[r]);return a}}(e,a.state.activeTab)),void 0===e?r.a.createElement("p",{style:V},"Wait, please..."):null!==e&&e.length?e.map((function(e){return r.a.createElement(U,{key:e.id,data:e,makeDoneUndone:a.makeDoneUndone,deleteItemWrapper:a.deleteItemWrapper})})):r.a.createElement("p",{style:V},"The list is empty, add something, please")},a.onSearchHandler=function(e){var t=[];t=""!==e.target.value?a.state.data.filter((function(t){for(var a in t){var n=t[a].toString().toLowerCase(),r=e.target.value.toLowerCase();if(n.includes(r))return t}})):a.state.data,a.setState({filtered:t})},a.onFilterChange=function(e){a.setState({byDateSelectFilter:e.target.value,filtered:T(e.target.value)})},a.state={activeTab:"1",selectedOption:null,openSortSelect:!1,data:a.props.data,filtered:a.props.data,filterTitle:"Sort By Done"},a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.data!==this.props.data){var t=this.props.data;this.setState({filtered:t})}}},{key:"componentDidMount",value:function(){this.sorting("default")}},{key:"render",value:function(){var e=this.state,t=e.activeTab,a=e.openSortSelect,n=e.filtered,i=e.filterTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{toggleClass:this.toggleClass,activeTab:t}),r.a.createElement("div",{className:"todo-list-tools"},r.a.createElement("div",{className:"todo-list-search"},r.a.createElement("label",null,r.a.createElement("span",{className:"search-label"},"Search:"),r.a.createElement("input",{type:"search",onChange:this.onSearchHandler,className:"search",placeholder:"Cards search..."}),r.a.createElement("i",{className:"search-icon fas fa-search"}))),r.a.createElement("div",{className:"todo-list-sort"},r.a.createElement("label",null,r.a.createElement("span",{className:"sort-label"},"Sorting:"),r.a.createElement("button",{className:"sort",onClick:this.openSelect},i,a&&r.a.createElement(G,{sorting:this.sorting})),r.a.createElement("i",{className:"sort-icon fas fa-sort"})))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"35px"}},r.a.createElement("select",{className:"item positive select-deadline btn",onChange:this.onFilterChange},r.a.createElement("option",{defaultValue:"select"},"Choose deadline"),r.a.createElement("option",{value:"today"},"Today"),r.a.createElement("option",{value:"tomorrow"},"Tomorrow"),r.a.createElement("option",{value:"week"},"Week"),r.a.createElement("option",{value:"month"},"During the month"))),r.a.createElement("div",{className:"task-list grid"},r.a.createElement("div",{className:"tasks-container"},this.renderToDoItems(n))))}}]),t}(n.Component),Z=function(){return r.a.createElement("footer",{className:"footer"},"\xa9 2019. ToDo List Admin Template by ",r.a.createElement("span",{className:"footer-author"},"Yaroslav Matushevych"))},$=function(e){var t=e.openNav,a=Object(n.useState)(!0),i=Object(s.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(O()),m=Object(s.a)(c,2),d=m[0],p=m[1],f=Object(n.useState)({}),g=Object(s.a)(f,2),h=g[0],v=g[1],E=Object(n.useState)(!1),b=Object(s.a)(E,2),D=b[0],y=b[1],k=function(){y(!D),o(!1)};return r.a.createElement(Y.Provider,{value:{edit:l,openEditModal:function(e){var t=e.target.closest(".task-item").getAttribute("id"),a=O(),n=j(t,a);a[n].date=new Date(a[n].date),y(!0),o(!l),v(a[n])}}},r.a.createElement("main",{className:"main-block"},r.a.createElement(N,{openNav:t}),r.a.createElement("div",{className:t?"page-content active":"page-content"},D&&r.a.createElement(P,{newItemSubmitHandler:function(e){e.id="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));var t=[].concat(Object(u.a)(d),[e]);x(t),p(t),k()},toggleOpenHandler:k,edit:l,editionItem:h,editItem:function(e,t){var a=function(e,t){var a=O(),n=j(e,a);return t.id=e,t.title&&(a[n].title=t.title),t.description&&(a[n].description=t.description),t.deadline&&(a[n].deadline=t.deadline),t.priority&&(a[n].priority=t.priority),t.attachedImage&&(a[n].attachedImage=t.attachedImage),t.tag&&(a[n].tag=t.tag),x(a),a}(e,t);v(a),k()}}),r.a.createElement("div",{className:"page-header"},r.a.createElement("div",{className:"page-title"},r.a.createElement("h3",null,"Task list ",r.a.createElement("small",null,"Task list inside data table"))),r.a.createElement("div",{className:"create-btn-container"},r.a.createElement("button",{className:"show-modal-btn",onClick:k},r.a.createElement("i",{className:"fas fa-plus"}),"Add Task")),r.a.createElement("button",{className:"show-modal-btn fixed-btn",onClick:k},r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement(X,{data:d}),r.a.createElement(Z,null))))};$.defaultProps={openNav:!1};var K=Object(n.memo)($),Q=(a(100),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{toggleOpenHandler:function(e){e.preventDefault(),i(!a)}}),r.a.createElement(K,{openNav:a}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=document.getElementById("root");_.style.minHeight="100vh",_.style.overflowX="hidden",l.a.render(r.a.createElement(Q,null),_),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},18:function(e,t,a){e.exports=a.p+"static/media/YARMA.966603e7.png"},35:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo-text.a7da770a.png"},47:function(e,t,a){e.exports=a(101)}},[[47,1,2]]]);
//# sourceMappingURL=main.3d2a9e18.chunk.js.map