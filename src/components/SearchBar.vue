<template>
  <div class="search-bar-container">
    <input class="search-bar-input" v-model=inputSearch />
    <button class="search-bar-button" v-on:click="getProduct()" >
        Search
    </button>
  </div>
</template>

<script>
import axios from 'axios'
const api = 'https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com/product?q='

export default {
  name: 'SearchBar',
  data: function () {
    return {
      inputSearch: null,
    }
  },
  methods: {
      getProduct() {
          axios
          .get(api + this.inputSearch, this.$data)
          .then(response =>
              this.$emit('productdata', response.data)
          )
      }
  }
}
</script>

<style scoped>
.search-bar-input {
    height: 34px;
    width: 75%;
    border: none;
    padding:0 10px;
    border-radius: 6px;
}

.search-bar-button {
    height: 35px;
    background-color: #55D7FF;
    margin-left: 3%;
    width: 15%;
    border: none;
    font-size: 16px;
    border-radius: 6px;
}

.search-bar-button:hover {
    background-color: #00A7FF;
}

.search-bar-button:active {
    background-color: #00A0FF;
}

.search-bar-button:focus, .search-bar-input:focus {
    outline:none;
}

@media only screen and (max-width: 768px) {
    .search-bar-input {
        height:30px;
        width: 70%;

    }
    .search-bar-button {
        height: 30px;
        width: 20%;
        font-size: 13px;
    }
}
</style>