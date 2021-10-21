<template>
    <nav class="navbar-wrapper">
        <!-- <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link> -->
        <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
        <router-link :to="{name: 'Blogs'}" class="nav-link">Blogs</router-link>

        <!-- ex : http://localhost:8080/products/bakwan -->
        <router-link to="/products/bakwan" class="nav-link">Products</router-link>

        <router-link :to="{name: 'AboutUs'}" class="nav-link">About Us</router-link>
        <router-link :to="{name: 'ContactUs'}" class="nav-link">Contact Us</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
.navbar-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0 10px 0;
    display: flex;
    align-content: flex-start;
    background-color: #3ea4e7;
}
.navbar-wrapper a.nav-link{
    padding: 0 8px !important;
    text-decoration: none;
    color: white;
}
.navbar-wrapper a.nav-link:hover{
    color: rgba(255, 255, 255, 0.618);
}
</style>