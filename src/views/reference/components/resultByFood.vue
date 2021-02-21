<template>
    <div class="result-by-food">
        <section class="cir">
            <div class="cir-title">营养成分</div>
            <div class="cir-chart" ref="cirChart"></div>
        </section>
        <!--<section class="cir" ref="cirChart"></section>-->
        <section class="det">
            <div class="det-title">相关疾病</div>
            <div class="det-egs">

            </div>
        </section>
    </div>
</template>

<script>
  import "@/components"
  // import echarts from 'echarts'
  const echarts = require("echarts")
  // import * as echarts from 'echarts/core';
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right',
      top: 'middle',
      itemGap: 15,
      textStyle: {
        fontSize: 16
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        label: {
          fontSize: 16
        },
        data: [
          {value: 1048, name: '搜索引擎'},
          {value: 735, name: '直接访问'},
          {value: 580, name: '邮件营销'},
          {value: 484, name: '联盟广告'},
          {value: 300, name: '视频广告'}
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  export default {
    name: "resultByFood",
    data() {
      return {

      }
    },
    created() {
      console.log('echarts', echarts)
      this.init()
    },
    methods: {
      init() {
        this.$nextTick(() => {
          const dom = this.$refs.cirChart;
          const e = echarts.init(dom);
          e.setOption(option)
          e.resize()
        })
      }
    }
  };
</script>

<style scoped lang="scss">
    .result-by-food{
        display: flex;
        position: relative;
        margin-top: 30px;
        .cir, .det{
            position: relative;
            width: 50%;
            /*background-color: pink;*/
            padding-left: 20px;
            .cir-title, .det-title{
                font-size: 26px;
                text-align: left;
            }
        .cir-chart{
            width: 100%;
            height: 700px;
        }
        }
        /*.cir{*/
            /*position: relative;*/
            /*width: 50%;*/
            /*height: 500px;*/
            /*background-color: pink;*/
        /*}*/
        .det{
            flex: 1 1 0;
        }
    }
</style>