<template>
    <div class="cus-egs">
        <span class="cus-text">{{text}}</span>
        <span class="cus-tool-tip">
            <slot>
                <el-tooltip class="item" effect="dark" content="toolTipContent" placement="right">

                </el-tooltip>
            </slot>
        </span>
    </div>
</template>

<script>
  export default {
    name: "egs",
    props: {
      text: '',
      toolTipContent: ''
    }
  };
</script>

<style scoped lang="scss">
.cus-egs{
    display: flex;
    .cus-text{
        margin-right: 15px;
    }
}
</style>