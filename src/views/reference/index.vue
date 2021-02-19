<template>
  <div id="reference" class="layout-flex-column">
    <section class="reference-title">
      <div class="reference-name">{{name}}</div>
      <a class="ask-doctor" @click="askDoctor">{{info}}</a>
    </section>
    <section>
        <component :is="getComponentName"
                   :type="searchType"
                   :diseaseData="tableData"
                    :foodData="foodData"/>
    </section>
  </div>
</template>
<script>
  import resultByDisease from "./components/resultByDisease"
  import resultByFood from "./components/resultByFood"
  export default {
      name: 'reference',
      components: {
        resultByDisease,
        resultByFood
      },
      props: {
        searchType: {
          // default: 'disease'
          default: 'food'
        }
      },
      data() {
          return {
              name: '糖尿病',
              info: '没有查询到想要的结果，问问专家？',
              tableData: [
                  {
                    noSuggestedFood: '巧克力？',
                    suggestedFood: '可以吃的食物们'
                  }
              ],
              foodData: {}
          }
      },
      methods: {
          askDoctor() {
            // TODO 跳转到《找专家》
              this.$router.push('')
          }
      },
    computed: {
        // 根据查询参数获取组件
        getComponentName() {
          const r = new Map([
            ["disease", "resultByDisease"],
            ["food", "resultByFood"]
          ])
          return r.get(this.searchType)
        }
    }
  }
</script>
<style lang="scss" scoped>
#reference{
    .ask-doctor{
        text-decoration-line: underline;
        &:hover {
            cursor: pointer;
        }
    }
  .reference-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .reference-name{
      font-size: 36px;
      font-weight: 900;
      padding: 20px;
    }
  }
}
</style>
