<template>
  <div id="app">
    <Header title="This is a page for beauty product search" />
    <Main>
      <SearchBar @productlist="setProduct($event)"/>
      <ul class="list-render" v-if="productList">
        <li v-for="product in productList" :key="product.id">
          <strong>{{ product.brand }}</strong> - {{ product.name }}
        </li>
      </ul>
      <div class="no-product-text" v-show="isNoProduct">
        Sorry, no product matches your search
      </div>
    </Main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main,
    SearchBar,
  },
  data: function () {
    return {
      productList: null,
      isNoProduct: false,
    }
  },
  methods: {
    setProduct(data) {
      this.isNoProduct = data.length == 0 ? true : false;
      this.productList = data
    }
  }
}
</script>

<style>
body { 
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.list-render { 
  text-align: left;
  color: white;
  margin-top: 3vh;
}

.no-product-text {
  color: white;
  font-size: 30px;
  margin-top: 15vh;
  font-weight: 800;
}

@media only screen and (max-width: 768px) {
  .list-render { 
    margin-top: 2vh;
    font-size: 13px;
    padding-inline-start: 4vw;
  }

  .no-product-text {
    font-size: 20px;
    margin-top: 7.5vh;
  }
}
</style>
