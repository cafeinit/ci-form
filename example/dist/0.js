webpackJsonp([0],[function(t,e,n){var i=n(6)(n(8),n(7),null,null);t.exports=i.exports},,,,,,function(t,e){t.exports=function(t,e,n,i){var c,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(c=t,o=t.default);var r="function"==typeof o?o.options:o;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),n&&(r._scopeId=n),i){var s=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var e=i[t];s[t]=function(){return e}}),r.computed=s}return{esModule:c,exports:o,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-index"},[n("h2",{staticClass:"app-title"},[t._v("Index")]),n("ci-list",[n("ci-list-body",[n("ci-list-cell",{attrs:{title:"Block",extend_text:"detail",extend_icon:"chevron_right"},on:{click:function(e){t.toUrl("block")}}}),n("ci-list-cell",{attrs:{title:"Collection",extend_icon:"chevron_right"},on:{click:function(e){t.toUrl("collection")}}}),n("ci-list-cell",{attrs:{title:"List",extend_text:"detail"},on:{click:function(e){t.toUrl("list")}}}),n("ci-list-cell",{attrs:{title:"Media",extend_icon:"chevron_right"},on:{click:function(e){t.toUrl("media")}}})],1)],1)],1)},staticRenderFns:[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view-index",methods:{toUrl:function(t){this.$router.push(t)}}}}]);