webpackJsonp([27],{"+/Ar":function(e,t){},Zsxy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Xxa5"),r=a.n(s),o=a("exGp"),n=a.n(o),i=a("woOf"),l=a.n(i),c=a("zM1N"),u=a.n(c),h=a("DWsy"),d=a.n(h);window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;var f={name:"VFlexContainer",props:{leftWidth:{default:"200px",type:String},leftMinWidth:{default:"100px",type:String}},computed:{leftStyle:function(){var e="";return this.leftWidth&&(e+="width:"+this.leftWidth+";"),this.leftMinWidth&&(e+="min-width:"+this.leftMinWidth+";"),console.log(e),e},rightStyle:function(){var e="";return this.leftWidth&&(e+="width:calc(100% - "+this.leftWidth+" - 10px);"),e}},mounted:function(){var e=d()(this.$el),t=d()(document),a=d()(this.$el).find(".flex-left"),s=d()(this.$el).find(".flex-right"),r=d()(this.$el).find(".horizontal-bar");function o(t){if(window.requestAnimationFrame)requestAnimationFrame(function(){var o=t.pageX-r.offset().left,n=a.width();a.width(n+o),s.width(e.width()-n-10)});else{var o=t.pageX-r.offset().left,n=a.width();a.width(n+o),s.width(e.width()-n-10)}}function n(){t.off("mousemove",o),t.off("mouseup",n),i()}function i(){e.toggleClass("noselect")}r.on("mousedown",function(){i(),t.on("mousemove",o),t.on("mouseup",n)})}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-container"},[t("div",{staticClass:"flex-left",style:this.leftStyle},[this._t("left")],2),this._v(" "),this._m(0),this._v(" "),t("div",{staticClass:"flex-right",style:this.rightStyle},[this._t("right")],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"horizontal-bar"},[t("div",{staticClass:"inside-bar"})])}]};var p=a("VU/8")(f,m,!1,function(e){a("q9lA")},null,null).exports,g=a("RbaZ"),v=a("t5DY"),b=a("4w6b"),w={name:"User",components:{VFlexContainer:p},data:function(){return{isOpen:!1,searchForm:{},searchFormTemp:{},pageIndex:1,showSearch:!1,OrgAll:[],treeData:[],defaultProps:{children:"children",label:"orgName"},tableData:[],pagination:{current:1,size:20,sizes:[10,20,50,100],total:0},loading:!1}},computed:{currentNodeKeys:function(){var e=[];return this.currentNodeKey&&(e[0]=this.currentNodeKey),e}},created:function(){this.getOrgAll(),this.getTableData()},methods:{filterNode:function(e,t,a){return!e||-1!==t.orgName.indexOf(e)},treeShow:function(){this.currentNodeKey&&this.$refs.searchTree.setCurrentKey(this.currentNodeKey)},filterInput:function(){this.$refs.searchTree.filter(this.searchForm.orgName)},searchNodeClick:function(e){this.searchForm=l()({},this.searchForm,{orgUuid:e.uuid,orgName:e.orgName})},findNamebyUuid:function(e){var t=this.OrgAll.filter(function(t){return t.uuid===e});if(t.length>0)return t[0].orgName},query:function(e){this.pagination.current=1,e.orgName?e.orgName=this.findNamebyUuid(e.orgUuid):(delete e.orgUuid,delete e.orgName),this.searchFormTemp=u()(e),this.getTableData()},pageChange:function(e){this.pagination.current=e,this.getTableData()},sizeChange:function(e){this.pagination.current=1,this.pagination.size=e,this.getTableData()},getTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.searchFormTemp;return n()(r.a.mark(function a(){var s,o,n,i,c,u,h,d,f;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.pagination,o=s.current,n=s.size,e.loading=!0,a.next=4,Object(b.p)({current:o,size:n,data:t});case 4:i=a.sent,e.loading=!1,"0000"===i.code&&(c=i.data,u=c.current,h=c.size,d=c.total,f=c.records,e.pagination=l()({},e.pagination,{current:u,size:h,total:d}),e.tableData=f);case 7:case"end":return a.stop()}},a,e)}))()},dataToTree:function(e){return Object(g.a)(e)},getOrgAll:function(){var e=this;return n()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.c)();case 2:"0000"===(a=t.sent).code&&(e.OrgAll=a.data,e.treeData=e.dataToTree(a.data));case 4:case"end":return t.stop()}},t,e)}))()},foldTree:function(){this.isOpen=!1,this.toggleTree(!1)},openTree:function(){this.isOpen=!0,this.toggleTree(!0)},toggleTree:function(e){console.log(this.$refs.tree.store._getAllNodes());for(var t=0;t<this.$refs.tree.store._getAllNodes().length;t++)this.$refs.tree.store._getAllNodes()[t].expanded=e},handleNodeClick:function(e){var t=e.uuid,a=e.orgName;this.searchForm={orgUuid:t,orgName:a},this.showSearch=!0,this.query({orgUuid:t,orgName:a})},goAddUser:function(){var e=this.searchFormTemp,t=e.orgUuid,a=e.orgName;if(t&&a)this.$router.push("/sys/user/add?orgUuid="+t+"&orgName="+a);else{var s=(new Date).getTime();this.$router.push("/sys/user/add?t="+s)}},goEditUser:function(e){this.$router.push("/sys/user/edit?uuid="+e)},stopUser:function(e){var t=this;this.$confirm("此操作将停用该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.v)({uuid:e,userStatus:"2"});case 2:"0000"===a.sent.code&&(t.$message({type:"success",message:"停用成功!"}),t.getTableData());case 4:case"end":return a.stop()}},a,t)}))).catch(function(){t.$message({type:"info",message:"已取消停用"})})},startUser:function(e){var t=this;this.$confirm("此操作将启用该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.v)({uuid:e,userStatus:"0"});case 2:"0000"===a.sent.code&&(t.$message({type:"success",message:"启用成功!"}),t.getTableData());case 4:case"end":return a.stop()}},a,t)}))).catch(function(){t.$message({type:"info",message:"已取消启用"})})},delUser:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.n)({userUuid:e});case 2:"0000"===a.sent.code&&(t.$message({type:"success",message:"删除成功!"}),1===t.tableData.length&&t.pagination.current>1&&(t.pagination.current=t.pagination.current-1),t.getTableData());case 4:case"end":return a.stop()}},a,t)}))).catch(function(){t.$message({type:"info",message:"已取消删除"})})},goAssignRole:function(e){var t=e.uuid,a=e.userName,s=e.loginName;this.$router.push("/sys/user/assign-role?uuid="+t+"&userName="+a+"&loginName="+s)},goEditOrg:function(){this.$router.push("/sys/org")},resetPassword:function(e){var t=this;this.$confirm("此操作将重置该用户的密码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.q)({userUuid:e});case 2:"0000"===a.sent.code&&t.$message({type:"success",message:"重置成功!"});case 4:case"end":return a.stop()}},a,t)}))).catch(function(){t.$message({type:"info",message:"已取消重置"})})},resetForm:function(){this.searchForm={},this.query({})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-container"},[a("v-flex-container",{attrs:{"left-width":"220px"}},[a("template",{slot:"left"},[a("div",{staticClass:"left-container"},[a("div",{staticClass:"jee-header"},[a("div",{staticClass:"jee-title"},[a("i",{staticClass:"icon-grid"}),e._v(" 组织机构\n            "),e.$permission["sys:org:edit"]?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"组织机构",placement:"bottom-start"}},[a("el-button",{attrs:{type:"text",icon:"fa fa-edit",size:"small"},on:{click:e.goEditOrg}})],1):e._e()],1),e._v(" "),a("div",{staticClass:"jee-tools"},[e.isOpen?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"全部折叠",placement:"bottom-start"}},[a("el-button",{attrs:{type:"text",icon:"fa fa-chevron-up",size:"small"},on:{click:e.foldTree}})],1):a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"全部展开",placement:"bottom-start"}},[a("el-button",{attrs:{type:"text",icon:"fa fa-chevron-down",size:"small"},on:{click:e.openTree}})],1)],1)]),e._v(" "),a("div",{staticClass:"tree-box"},[a("el-tree",{ref:"tree",attrs:{data:e.treeData,props:e.defaultProps,"highlight-current":"","node-key":"uuid"},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node;return a("span",{staticClass:"custom-tree-node",attrs:{title:s.label}},[e._v("\n              "+e._s(s.label)+"\n            ")])}}])})],1)])]),e._v(" "),a("template",{slot:"right"},[a("div",{staticClass:"right-container"},[a("div",{staticClass:"jee-header"},[a("div",{staticClass:"jee-title"},[a("i",{class:e.$route.meta.icon}),e._v(" "+e._s(e.$route.meta.title))]),e._v(" "),a("div",{staticClass:"jee-tools"},[a("el-button",{attrs:{icon:"fa fa-filter",size:"small"},on:{click:function(t){e.showSearch=!e.showSearch}}},[e._v(" "+e._s(e.showSearch?"隐藏":"查询"))]),e._v(" "),e.$permission["sys:user:add"]?a("el-button",{attrs:{icon:"fa fa-plus",size:"small"},on:{click:e.goAddUser}},[e._v(" 新增 ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"jee-body"},[e.showSearch?a("el-form",{ref:"form",staticClass:"jee-search-form",attrs:{model:e.searchForm,inline:""}},[a("div",[a("el-form-item",{attrs:{label:"账号："}},[a("el-input",{staticStyle:{width:"90px"},attrs:{placeholder:"请填写",size:"small",clearable:""},model:{value:e.searchForm.loginName,callback:function(t){e.$set(e.searchForm,"loginName",t)},expression:"searchForm.loginName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名："}},[a("el-input",{staticStyle:{width:"90px"},attrs:{placeholder:"请填写",size:"small",clearable:""},model:{value:e.searchForm.userName,callback:function(t){e.$set(e.searchForm,"userName",t)},expression:"searchForm.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构："}},[a("el-popover",{attrs:{placement:"bottom-start",width:"300",trigger:"click"},on:{show:e.treeShow}},[a("el-tree",{ref:"searchTree",staticStyle:{width:"290px","max-height":"200px","overflow-y":"scroll"},attrs:{data:e.treeData,"default-expanded-keys":e.currentNodeKeys,"filter-node-method":e.filterNode,"highlight-current":!0,props:e.defaultProps,"node-key":"uuid"},on:{"node-click":e.searchNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node;return a("span",{staticClass:"custom-tree-node",attrs:{title:s.label}},[e._v("\n                      "+e._s(s.label)+"\n                    ")])}}])}),e._v(" "),a("el-input",{staticStyle:{width:"249px"},attrs:{slot:"reference",size:"small",clearable:""},on:{input:e.filterInput},slot:"reference",model:{value:e.searchForm.orgName,callback:function(t){e.$set(e.searchForm,"orgName",t)},expression:"searchForm.orgName"}})],1)],1)],1),e._v(" "),a("div",[a("el-form-item",{attrs:{label:"邮箱："}},[a("el-input",{staticStyle:{width:"90px"},attrs:{placeholder:"请填写",size:"small",clearable:""},model:{value:e.searchForm.userEmail,callback:function(t){e.$set(e.searchForm,"userEmail",t)},expression:"searchForm.userEmail"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机："}},[a("el-input",{staticStyle:{width:"90px"},attrs:{placeholder:"请填写",size:"small",clearable:""},model:{value:e.searchForm.userMobile,callback:function(t){e.$set(e.searchForm,"userMobile",t)},expression:"searchForm.userMobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话："}},[a("el-input",{staticStyle:{width:"90px"},attrs:{placeholder:"请填写",size:"small",clearable:""},model:{value:e.searchForm.userPhone,callback:function(t){e.$set(e.searchForm,"userPhone",t)},expression:"searchForm.userPhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态："}},[a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"请选择",clearable:"",size:"small"},model:{value:e.searchForm.userStatus,callback:function(t){e.$set(e.searchForm,"userStatus",t)},expression:"searchForm.userStatus"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{value:"0",label:"正常"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"停用"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.query(e.searchForm)}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.resetForm}},[e._v("重置")])],1)],1)]):e._e(),e._v(" "),a("div",{directives:[{name:"auto-height",rawName:"v-auto-height"}],staticClass:"jee-table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",width:"70",align:"center",label:"序号","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"loginName",align:"center",label:"账号","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",align:"center",label:"员工姓名","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"orgName",align:"center",label:"归属机构","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userEmail",align:"center",label:"电子邮箱","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userMobile",align:"center",label:"手机号码","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userPhone",align:"center",label:"办公电话","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userStatus",align:"center",label:"状态","show-overflow-tooltip":"",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.userStatus?a("el-tag",{attrs:{type:"success",size:"mini"}},[e._v("正常")]):"2"===t.row.userStatus?a("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v("停用")]):"3"===t.row.userStatus?a("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v("冻结")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.$permission["sys:user:edit"]?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"编辑用户",placement:"bottom-start"}},[a("el-button",{attrs:{type:"success-text",icon:"fa fa-pencil"},on:{click:function(a){e.goEditUser(t.row.uuid)}}})],1):e._e(),e._v(" "),e.$permission["sys:user:status"]?["0"===t.row.userStatus?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"停用用户",placement:"bottom-start"}},[a("el-button",{attrs:{type:"danger-text",icon:"fa fa-ban"},on:{click:function(a){e.stopUser(t.row.uuid)}}})],1):e._e(),e._v(" "),"2"===t.row.userStatus?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"启用用户",placement:"bottom-start"}},[a("el-button",{attrs:{type:"success-text",icon:"fa fa-play"},on:{click:function(a){e.startUser(t.row.uuid)}}})],1):e._e()]:e._e(),e._v(" "),e.$permission["sys:user:delete"]?a("el-tooltip",{attrs:{"open-delay":400,effect:"light",content:"删除用户",placement:"bottom-start"}},[a("el-button",{attrs:{type:"danger-text",icon:"fa fa-trash-o"},on:{click:function(a){e.delUser(t.row.uuid)}}})],1):e._e(),e._v(" "),e.$permission["sys:user:authRole"]||e.$permission["sys:user:resetPwd"]?a("el-popover",{attrs:{placement:"right",trigger:"hover"}},[e.$permission["sys:user:authRole"]?a("el-button",{attrs:{size:"mini",icon:"fa fa-check-square-o"},on:{click:function(a){e.goAssignRole(t.row)}}},[e._v(" 分配角色")]):e._e(),e._v(" "),e.$permission["sys:user:resetPwd"]?a("el-button",{attrs:{size:"mini",icon:"fa fa-user"},on:{click:function(a){e.resetPassword(t.row.uuid)}}},[e._v(" 重置密码")]):e._e(),e._v(" "),a("el-tooltip",{attrs:{slot:"reference","open-delay":400,effect:"light",content:"更多操作",placement:"bottom-start"},slot:"reference"},[a("el-button",{attrs:{type:"primary-text",icon:"fa fa-chevron-circle-right"}})],1)],1):e._e()]}}])})],1)],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pagination.current,"page-sizes":e.pagination.sizes,"page-size":e.pagination.size,total:e.pagination.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1)])])],2)],1)},staticRenderFns:[]};var _=a("VU/8")(w,y,!1,function(e){a("+/Ar")},"data-v-b3b68a98",null);t.default=_.exports},q9lA:function(e,t){}});