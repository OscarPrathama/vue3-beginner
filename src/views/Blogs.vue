<template>
    <h1>Blog</h1>

    <p>{{ post_title }}</p>
    <button @click="clickMe1">Click Me 1</button>
    <button @click="clickMe2">Click Me 2</button>
    <button @click="clickMe3">Click Me 3</button>
    <hr>

    <h2>Data Binding</h2>
    <div class="link-wrapper">
        <a v-bind:href="google_url" target="_blank">Google</a>
        <a :href="youtube_url" target="_blank">Youtube</a>
    </div>
    <hr>

    <h2>2 Way Data Binding</h2>
    <div class="input-wrapper">
        <input type="text" name="" id="" v-model="username">
        <p>{{ username }}</p>
    </div>
    <hr>

    <h2>V-IF & V-For</h2>
    <div class="products-wrapper" v-if="products.length">
        <ul>
            <li v-for="item in products" :key="item.id">
                {{ item.title }}, Rp {{ item.price }}
            </li>
        </ul>
    </div>
    <div class="products-wrapper" v-else>
        <p>No Products data</p>
    </div>
    <hr>

    <h2>Life Cycle hook</h2>
    <div class="books-wrapper" v-if="books.length">
        <ul>
            <li v-for="item in books" :key="item.id">
                {{ item.title }}, Rp {{ item.price }}
            </li>
        </ul>
    </div>
    <div class="books-wrapper" v-else>
        <p>No Books data</p>
    </div>
    <hr>

    <h2>Computed Property</h2>
    <div class="countries-wrapper" v-if="countries.length">
        <input type="text" v-model="search_country" placeholder="Search country">
        <ul>
            <li v-for="country in cariData" :key="country.id">
                {{ country.name }}, Rp {{ country.capitol }}
            </li>
        </ul>
    </div>
    <div class="countries-wrapper" v-else>
        <p>No Countries data</p>
    </div>
    <hr>


</template>

<script>
export default {
    // materi 1 : data
    data() {
        return {
            post_title: "What is Lorem Ipsum ?",

            // data binding
            google_url: "https://google.com",
            youtube_url: "https://youtube.com",
            
            // 2 way data binding
            username: "",

            // v-for
            products: [
                {id: 1, title: "Semangka", price: 25000},
                {id: 2, title: "Melon", price: 15000},
                {id: 3, title: "Pisang", price: 12000},
                {id: 4, title: "Jeruk", price: 26000},
                {id: 5, title: "Apel", price: 10000}
            ],
            books: [],
            countries: [
                {id: 1, name: "America", capitol: "Washinton DC"},
                {id: 2, name: "England", capitol: "London"},
                {id: 3, name: "Germany", capitol: "Berlin"},
                {id: 4, name: "Japan", capitol: "Tokyo"},
                {id: 5, name: "China", capitol: "Beijing"}
            ],
            search_country: ""
        }
    },

    // materi 2 method
    methods: {
        clickMe1(){
            this.post_title = "Why do we use it ?"
        },
        clickMe2(){
            this.post_title = "Where does it come from ?"
        },
        clickMe3(){
            this.post_title = "Where can I get some ?"
        }
    },
    
    // lifecycle hook
    beforeCreate(){
        console.log("Before Create, sebelum component dibuat")
        // alert('before Created')
    },
    created(){
        console.log("Created, setelah component terbuat")
        this.books = [
            {id: 1, title: "Naruto", price: 25000},
            {id: 2, title: "Shincan", price: 15000},
            {id: 3, title: "Dragon Ball", price: 12000},
            {id: 4, title: "Conan", price: 26000},
            {id: 5, title: "Nube", price: 10000}
        ]
    },
    beforeMount(){
        console.log("Before Mount, setelah component terbuat, setelah created ")
        // alert('before Mount')
    },
    mounted(){
        console.log("Mounted, setelah ke DOM")
        // alert('before Mounted')
    },

    // computed property
    computed: {
        cariData(){
            return this.countries.filter((item) => {
                return item.name.match(this.search_country)
            });
        }
    }
}
</script>

<style scoped>
button{
    margin: 5px;
}
.link-wrapper a{
    text-decoration: none;
    margin: 10px;
}
.products-wrapper, 
.books-wrapper,
.countries-wrapper{
    width: 250px;
    text-align: left;
    margin: auto;
}
</style>