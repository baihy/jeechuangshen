webpackJsonp([34],{BFWr:function(t,e){},ZCPc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),o=a("exGp"),r=a.n(o),l=a("UWZQ"),i=a("YMRc"),c={name:"SystemAdmin",mixins:[l.a],data:function(){return{searchForm:{loginName:"",userName:""},asyncFunc:i.p}},mounted:function(){},methods:{add:function(){this.$router.push({name:"SystemAdminAdd"})},edit:function(t){this.$router.push({name:"SystemAdminEdit",query:{uuid:t.uuid}})},del:function(t){var e=this;this.$confirm("确认要删除该管理员吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.j)({userUuid:t.uuid}).then(function(t){"0000"===t.code&&(e.$message({type:"success",message:"删除成功!"}),e.getTableData())})})},resetAdmin:function(t){var e=this;this.$confirm("确认要重置密码？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(r()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(i.B)({userUuid:t.uuid});case 2:"0000"===a.sent.code&&(e.$message({type:"success",message:"重置成功!"}),e.getTableData());case 4:case"end":return a.stop()}},a,e)})))},changeStatus:function(t){var e=this,a={uuid:t.uuid,userStatus:"0"===t.userStatus?"2":"0"},s="0"===t.userStatus?"确认要停用管理员吗？":"确认要启用该管理员吗？";this.$confirm(s,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.h)(a);case 2:"0000"===t.sent.code&&(e.$message({type:"success",message:"操作成功!"}),e.getTableData());case 4:case"end":return t.stop()}},t,e)})))}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jee-page"},[a("div",{staticClass:"jee-header"},[a("div",{staticClass:"jee-title"},[a("i",{class:t.$route.meta.icon}),t._v(" "+t._s(t.$route.meta.title))]),t._v(" "),a("div",{staticClass:"jee-tools"},[a("el-button",{attrs:{icon:"fa fa-filter",size:"small"},on:{click:function(e){t.showSearch=!t.showSearch}}},[t._v(" "+t._s(t.showSearch?"隐藏":"查询")+"\n      ")]),t._v(" "),t.$permission["sys:sysAdmin:add"]?a("el-button",{attrs:{icon:"fa fa-plus",size:"small"},on:{click:t.add}},[t._v(" 新增")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"jee-body",attrs:{slot:"right"},slot:"right"},[t.showSearch?a("el-form",{ref:"form",staticClass:"jee-search-form",attrs:{model:t.searchForm,inline:""}},[a("el-form-item",{attrs:{label:"账号："}},[a("el-input",{attrs:{placeholder:"请填写",size:"small"},model:{value:t.searchForm.loginName,callback:function(e){t.$set(t.searchForm,"loginName",e)},expression:"searchForm.loginName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户名："}},[a("el-input",{attrs:{placeholder:"请填写",size:"small"},model:{value:t.searchForm.userName,callback:function(e){t.$set(t.searchForm,"userName",e)},expression:"searchForm.userName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态："}},[a("el-select",{attrs:{size:"small"},model:{value:t.searchForm.userStatus,callback:function(e){t.$set(t.searchForm,"userStatus",e)},expression:"searchForm.userStatus"}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),a("el-option",{attrs:{label:"正常",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"停用",value:"2"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")])],1)],1):t._e(),t._v(" "),a("div",{directives:[{name:"auto-height",rawName:"v-auto-height"}],staticClass:"jee-table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",label:" ",align:"center",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{prop:"loginName",label:"账号",align:"center",width:"180","show-overflow-tooltip":"",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.edit(e.row)}}},[t._v(t._s(e.row.loginName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"用户名",align:"center",width:"180","show-overflow-tooltip":"",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"userMobile",align:"center",label:"手机号码","show-overflow-tooltip":"",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"userPhone",align:"center",label:"办公电话","show-overflow-tooltip":"",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"userStatus",align:"center",width:"92",label:"状态",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return["0"===e.row.userStatus?a("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("正常")]):"2"===e.row.userStatus?a("el-tag",{attrs:{type:"danger",size:"mini"}},[t._v("停用")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"149",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"编辑",placement:"bottom-start"}},[a("el-button",{attrs:{type:"success-text",icon:"fa fa-pencil"},on:{click:function(a){t.edit(e.row)}}})],1),t._v(" "),t.$permission["sys:sysAdmin:status"]&&"0"===e.row.userStatus?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"停用管理员",placement:"bottom-start"}},[a("el-button",{attrs:{type:"danger-text",icon:"fa fa-ban"},on:{click:function(a){t.changeStatus(e.row)}}})],1):t._e(),t._v(" "),t.$permission["sys:sysAdmin:status"]&&"2"===e.row.userStatus?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"启用管理员",placement:"bottom-start"}},[a("el-button",{attrs:{type:"primary-text",icon:"fa fa-play"},on:{click:function(a){t.changeStatus(e.row)}}})],1):t._e(),t._v(" "),a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"删除",placement:"bottom-start"}},[t.$permission["sys:sysAdmin:delete"]?a("el-button",{attrs:{type:"danger-text",icon:"fa fa-trash-o"},on:{click:function(a){t.del(e.row)}}}):t._e()],1),t._v(" "),a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"重置密码",placement:"bottom-start"}},[t.$permission["sys:sysAdmin:resetPwd"]?a("el-button",{attrs:{type:"primary-text",icon:"fa fa-reply-all"},on:{click:function(a){t.resetAdmin(e.row)}}}):t._e()],1)]}}])})],1)],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.current,"page-sizes":t.sizes,"page-size":t.size,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChange,"current-change":t.pageChange}})],1)])},staticRenderFns:[]};var m=a("VU/8")(c,u,!1,function(t){a("BFWr")},"data-v-72f9daf7",null);e.default=m.exports}});