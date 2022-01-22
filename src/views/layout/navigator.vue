<template>
  <div id="tch-navigator">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item v-for="item in navList" :index="item" :key="item.title">{{
        item.title
      }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      navList: [
        {
          title: "首页",
          path: { name: "home" }
        },
        {
          title: "资料",
          path: { name: "reference" }
        },
        {
          title: "找专家",
          path: { name: "expert" }
        },
        {
          title: "讨论区",
          path: { name: "talk" }
        },
        {
          title: "功能",
          path: { name: "privateLetter" }
        }
      ]
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key.path);
    }
  }
};
</script>
<style lang="scss" scoped>
.navigator-items {
  display: inline-block;
}
#tch-navigator {
  padding: 0 20px;
}
</style>
