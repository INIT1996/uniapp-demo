"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let statusBarHeight = common_vendor.ref(0);
    let navBarHeight = common_vendor.ref(0);
    common_vendor.onBeforeMount(() => {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      statusBarHeight.value = systemInfo.statusBarHeight;
      const custom = common_vendor.wx$1.getMenuButtonBoundingClientRect();
      navBarHeight.value = custom.height + (custom.top - statusBarHeight.value) * 2;
      custom.left;
      systemInfo.screenWidth - custom.right;
      custom.top - statusBarHeight.value;
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.unref(statusBarHeight) + "px",
        c: common_vendor.unref(navBarHeight) + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4f462226"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/navSubPage/index/index.js.map
