"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_uni_list_item + _component_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.ref([{
      title: "uniapp实现小程序之自定义导航栏",
      path: "/navSubPages/index/index"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: index,
            b: "1cf27b2a-1-" + i0 + ",1cf27b2a-0",
            c: common_vendor.p({
              ellipsis: "1",
              title: item.title,
              note: item.title,
              showArrow: true,
              to: item.path
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
