"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const statusBarHeight = common_vendor.ref(0);
    const navBarStyle = common_vendor.reactive({
      width: 0,
      //宽度
      height: 0,
      //高度
      paddingTop: 0,
      //上内边距
      paddingBottom: 0,
      //下内边距
      paddingLeft: 0,
      //左内边距
      paddingRight: 0
      //右内边距
    });
    common_vendor.onBeforeMount(() => {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      statusBarHeight.value = systemInfo.statusBarHeight;
      const customInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      navBarStyle.width = `${customInfo.left}px`;
      navBarStyle.paddingTop = `${customInfo.top - statusBarHeight.value}px`;
      navBarStyle.paddingBottom = `${customInfo.top - statusBarHeight.value}px`;
      navBarStyle.paddingLeft = `${systemInfo.screenWidth - customInfo.right}px`;
      navBarStyle.paddingRight = `${systemInfo.screenWidth - customInfo.right}px`;
      navBarStyle.height = `${customInfo.height + (customInfo.top - statusBarHeight.value) * 2}px`;
    });
    return (_ctx, _cache) => {
      return {
        a: statusBarHeight.value + "px",
        b: common_vendor.s(navBarStyle)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dfa652a6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/navSubPages/index/index.js.map
