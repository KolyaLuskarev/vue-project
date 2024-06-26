<script setup>
  import AppBtn from '../components/AppButton.vue';

</script>

<template>
  <div class = "root">
    <div class = "main">
      <RouterLink :to = "'/addusers'">
        <AppBtn Declar = "Split Bill" />
      </RouterLink>
    </div>
  </div>
</template>

<style lang = "sass" scoped>
  @import '../assets/styles/main'

  .root
    min-height: 100vh
    background-color: $background

  .main
    padding: 10px 20px
    position: relative
</style>
