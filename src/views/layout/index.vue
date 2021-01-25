<template>
  <div id="layout">
    <header id="header">
      <navigator />
    </header>
    <main id="main">
      <router-view />
    </main>
    <footer id="footer"><slot name="footer"></slot></footer>
  </div>
</template>
<script>
import navigator from "./navigator";
export default {
  data() {
    return {};
  },
  components: { navigator }
};
</script>
<style lang="scss" scoped>
#layout {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  #header {
    /*height: 50px;*/
  }
  #main {
    flex: 1 1 0;
    position: relative;
  }
}
</style>
