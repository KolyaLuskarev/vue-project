 <script setup>
const props= defineProps({
    Declar: {
        type: String,
        required: true,
    },


});
</script>

 <template>
    <div class="root">
        <RouterLink :to="'/addusers'">
       <div class="main">
        <div class="btn">
            <v-btn color="error" dark large>{{ Declar }}</v-btn>
          </div>
       </div>
    </RouterLink>
    </div>
 </template>

 <style lang="sass" scoped>

@import '../assets/styles/main'

.root
    displey: flex
    min-height: 100vh
    background-color: $background

.main
    padding: 10px 20px
    position: relative

.btn
    display: flex
    align-items: center
    justify-content:  center

 

    
    

</style>