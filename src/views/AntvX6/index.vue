<template>
  <div id="wrap">
    <div id="container1">
    </div>
    <button @click="click">click</button>
    <button @click="create">createNewGraph</button>

    <div id="container2">
      <div id="tooltip">asdasd</div>
    </div>

  </div>

</template>


<script>
import draw from "./draw";
import createNew from "./create";
export default {
  name: "index",
  created() {
    this.$nextTick(() => {
      this.d1 = draw();
    });
  },
  data() {
    return {
      d1: null,
      d2: null,
    }
  },
  methods: {
    click() {
      console.log(this.d1, this.d1.toJSON())
      this.json = this.d1.toJSON()
    },
    create() {
      this.d2 = createNew('container2', this.json)
    }
  }
};
</script>

<style scoped lang="scss">
#wrap{
  display: flex;
  align-items: center;
  button{
    width: 120px;
    height: 40px;
  }
}
/deep/#tooltip{
  width: 200px;
  height: 100px;
  background: #2c3e50;
  color: #fff;
  position: absolute;
  z-index: 100;
  top: 100px;
  left: 0;
  transition-duration: .5s;
  visibility: hidden;
}
#graph-container {
  width: 50%;
  height: 50%;
  background-color: pink;
}

#container1 {
  height: 800px;
  width: 500px;
  display: flex;
  border: 1px solid #dfe3e8;
}

#container2 {
  position: relative;
  height: 800px;
  width: 500px;
  display: flex;
  border: 1px solid #dfe3e8;

}

/deep/#stencil {
  width: 180px;
  height: 100%;
  position: relative;
  border-right: 1px solid #dfe3e8;
}

/deep/#graph-container {
  width: calc(100% - 180px);
  height: 100%;
}

/deep/.x6-widget-stencil {
  background-color: #fff;
}

/deep/.x6-widget-stencil-title {
  background-color: #fff;
}

/deep/.x6-widget-stencil-group-title {
  background-color: #fff !important;
}

/deep/.x6-widget-transform {
  margin: -1px 0 0 -1px;
  padding: 0px;
  border: 1px solid #239edd;
}

/deep/.x6-widget-transform > div {
  border: 1px solid #239edd;
}

/deep/.x6-widget-transform > div:hover {
  background-color: #3dafe4;
}

/deep/.x6-widget-transform-active-handle {
  background-color: #3dafe4;
}

/deep/.x6-widget-transform-resize {
  border-radius: 0;
}

/deep/.x6-widget-selection-inner {
  border: 1px solid #239edd;
}

/deep/.x6-widget-selection-box {
  opacity: 0;
}

</style>
