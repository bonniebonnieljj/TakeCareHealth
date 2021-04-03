<template>
    <div class="home">
        <section class="what-to-eat">吃吗？</section>
        <section class="search">
            <el-select
                    v-model="searchContext"
                    class="search-type"
                    clearable
                    placeholder="搜索选项"
            >
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                >
                </el-option>
            </el-select>
            <el-input class="search-input" v-model="input"></el-input>
            <el-button type="primary">搜索</el-button>
        </section>
    </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        input: "",
        searchContext: "",
        options: [
          {
            value: 1,
            label: "按疾病名称"
          },
          {
            value: 2,
            label: "按食物名称"
          },
          {
            value: 3,
            label: "图片搜索"
          }
        ]
      };
    }
  };
</script>
<style scoped lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        .search {
            display: flex;
            justify-content: center;
        }
    }

    .what-to-eat {
        height: 64px;
        line-height: 64px;
        font-weight: 900;
        transform: scale(2);
        letter-spacing: 5px;
    }

    .search-type {
        width: 125px;
        /deep/ .el-input__inner {
            border-radius: 4px 0 0 4px;
            border-right: none;
        }
    }

    .search-input {
        width: 442px;
        margin-right: 20px;
        /deep/ .el-input__inner {
            border-radius: 0 4px 4px 0;
        }
    }
</style>
