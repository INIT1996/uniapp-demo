"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.ref([{
      title: "uniapp之自定义小程序导航栏",
      note: "uniapp之自定义小程序导航栏",
      path: "/navSubPage/index/index"
    }, {
      title: "uniapp之下拉刷新和上拉加载（1）",
      note: "使用onPullDownRefresh和onReachBottom实现",
      path: "/pagingSubPage/index/index"
    }, {
      title: "uniapp之下拉刷新和上拉加载（2）",
      note: "使用scroll-view实现",
      path: "/customPagingSubPage/index/index"
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
              note: item.note,
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
