<template>
    <div class="wording-wrapper">
        <div class="home-wording">
            {{ HomeWording }}
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeWording",
    data(){
        return {
            HomeWording: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    }
}
</script>

<style scoped>
.wording-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;
}

.home-wording{
    width: 700px;
}
</style>