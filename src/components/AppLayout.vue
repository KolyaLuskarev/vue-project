 <script setup>
const props = defineProps({

    imgUrl: {
        type: String,
        required: true,
    },
});
</script>

 <template>
    <div class="root">
        <div :style="`background-image: url( ${imgUrl} )`" class="img"></div>
        <div class="main"></div>
    </div>
 </template>

 <style lang="sass" scoped>

@import '../assets/styles/main'

.root
    displey: flex
    min-height: 100vh
    background-color: $background
.img
    width: 50px
    background-position: 50px 50px
    background-repeat: no-repeat
    background-size: cover
.main
    width: 50px

</style>