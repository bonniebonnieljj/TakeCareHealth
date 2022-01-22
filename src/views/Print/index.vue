<template>
    <div>
        <img class="print" src="./surces/webpack源码分析图.jpg"/>
    </div>
</template>

<script>
  export default {
    name: "index",
    created() {
      setTimeout(() => {
        this.ExportSavePdf("TakeCareHealth", new Date().getDay() + new Date().getHours());
      }, 1000)
    }
  };
</script>

<style scoped lang="scss">
    .print{
        width: 1200px;
        height: 900px;
        flex: 1;
        /*background-image:url('./surces/01.jpeg');*/
        /*background-repeat:no-repeat;*/
        /*!*background-attachment:fixed;*!*/
        /*background-position:center;*/
    }

</style>