<template>
  <div class="main-container">
        <div class="main-row">
            <slot />
        </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
.main-container {
    background-color: #DB0992;
    width: 100vw;
    min-height: 50vh
}

.main-row {
    padding: 5vh 25vw;
}

@media only screen and (max-width: 768px) {
    .main-container {
        min-height: 33.33vh;
    }

    .main-row {
        padding: 2.5vh 4vw;
    }
}
</style>