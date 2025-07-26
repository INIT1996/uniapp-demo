"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_load_more2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const originList = [{
      title: "listItem1"
    }, {
      title: "listItem2"
    }, {
      title: "listItem3"
    }, {
      title: "listItem4"
    }, {
      title: "listItem5"
    }, {
      title: "listItem6"
    }, {
      title: "listItem7"
    }, {
      title: "listItem8"
    }, {
      title: "listItem9"
    }, {
      title: "listItem10"
    }, {
      title: "listItem11"
    }, {
      title: "listItem12"
    }, {
      title: "listItem13"
    }];
    const list = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      list.value = JSON.parse(JSON.stringify(originList));
    });
    const triggered = common_vendor.ref(false);
    const status = common_vendor.ref("more");
    const onRefresh = () => {
      triggered.value = true;
      setTimeout(() => {
        list.value = JSON.parse(JSON.stringify(originList));
        status.value = "more";
        triggered.value = false;
      }, 2e3);
    };
    const onLoadMore = () => {
      if (status.value == "no-more")
        return;
      status.value = "loading";
      setTimeout(function() {
        list.value.push({
          title: "listItem14"
        });
        status.value = "no-more";
      }, 1e3);
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: index,
            b: "939d250f-1-" + i0 + ",939d250f-0",
            c: common_vendor.p({
              title: item.title,
              note: item.title
            })
          };
        }),
        c: common_vendor.p({
          status: status.value
        }),
        d: triggered.value,
        e: common_vendor.o(onRefresh),
        f: common_vendor.o(onLoadMore)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-939d250f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/customPagingSubPage/index/index.js.map
