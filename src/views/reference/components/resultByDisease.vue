<template>
    <el-table
            :data="diseaseData"
            border
            style="width: 100%">
        <el-table-column
                label="不建议吃的食物">
            <template slot-scope="scope">
                <!--?悬浮需要单独封装组件-->
                {{scope.row.noSuggestedFood}}
            </template>
        </el-table-column>
        <el-table-column
                label="可以吃的食物">
        </el-table-column>
        <el-table-column
                prop="suggestedFood"
                label="推荐吃的食物">
            <template slot-scope="scope">
                {{scope.row.suggestedFood}}
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
  export default {
    name: "resultByDisease",
    props: {
      diseaseData: {
        type: [Array, Object],
        default: () => {
          return []
        }
      }
    }
  };
</script>

<style scoped>

</style>