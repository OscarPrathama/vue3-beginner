<template>
    <Banner banner_wording="Beli disini Gratis" />
    <HomeWording  />

</template>

<script>
import Banner from '../components/Banner.vue';
import HomeWording from '../components/HomeWording.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        HomeWording
    }
}
</script>