<template>
  <div class="header-container">
        <div class="header-title-row">
            <div class="header-title">
                {{ title }}
            </div>
        </div>
    <div class="header-img">
        <img src="../assets/beauty-products.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header-container {
    display:flex;
}

.header-title {
    font-size: 30px;
    font-weight: 900;
    padding: 25%;
}

.header-title-row {
    display: flex;
    justify-content: center;
    align-items: center;
    width:50vw;
    height:50vh;
    background-color: #55D7FF;
}

.header-img {
    width:50vw;
    height:50vh;
}

.header-img img { 
    object-fit: cover;
    width:100%;
    height:100%;
}

@media only screen and (max-width: 768px) {
    .header-container { 
        display:block;
    }
    .header-title-row {
        width:100vw;
        height: 33.33vh;
    }
    .header-title {
        font-size:17px;
    }
    .header-img {
        width:100vw;
        height: 33.33vh;
    }
}
</style>