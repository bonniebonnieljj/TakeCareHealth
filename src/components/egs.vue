<template>
    <div class="cus-egs">
        <span class="cus-text">{{text}}</span>
        <span class="cus-tool-tip">
            <slot name="default">
                <el-tooltip class="item" effect="dark" content="toolTipContent" placement="right">
                    <i class="el-icon-question"></i>
                </el-tooltip>
            </slot>
        </span>
    </div>
</template>

<script>
  export default {
    name: "egs",
    props: {
      text: String,
      toolTipContent: String
    }
  };
</script>

<style scoped lang="scss">
    .cus-egs{
        display: flex;
        align-items: center;
        height: 36px;
        .cus-text{
            margin-right: 15px;
            font-size: 18px;
        }
    }
</style>