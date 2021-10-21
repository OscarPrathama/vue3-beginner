<template>
    <div class="banner-container">
        <div class="banner-image">
            <img alt="Vue logo" src="../assets/images/vue-js.png">
        </div>
        <div class="banner-wording">
            <p>{{ banner_wording }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        banner_wording: String
    }
}
</script>

<style scoped>
.banner-container{
    width: 100%;
    position: relative;
    top: -25px;
    z-index: -1;
}
.banner-container img{
    width: 100%;
}
.banner-wording{
    position: absolute;
    top: 35%;
    left: 33%;
    background-color: rgba(0, 0, 0, 0.404);
    padding: 40px 80px;
    color: white;
    border-radius: 20px;
    width: 300px;
}
</style>