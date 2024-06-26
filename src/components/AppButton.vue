<script setup>
  const props = defineProps({
    Declar: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class = "btn">
    <v-btn color = "error" dark large>{{ Declar }}</v-btn>
  </div>
</template>

<style lang = "sass" scoped>
  @import '../assets/styles/main'

  .btn
    display: flex
    align-items: center
    justify-content: center
    padding: 10px 20px
    position: relative
</style>
