<template>
    <section id="user-info">
        <div id="avatar"></div>
        <span class="user-name">{{userName}}</span>
    </section>
</template>

<script>
    export default {
        name: "userInfo",
        data() {
            return {
                userName: '用户名'
            }
        }
    }
</script>

<style scoped lang="scss">
#user-info{
    position: absolute;
    right: 20px;
    margin-bottom: -100%;
    z-index: 1;
    display: flex;
    align-items: center;
}
#avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background: pink center url('../../../public/assets/logo.png') no-repeat;
}
.user-name{
    font-size: 14px;
}
</style>