"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //轮播图数据
      pictures: [
        { id: "", url: "" }
      ]
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: item.url,
        b: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/IceCreamIC02/Documents/school-project/school-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
