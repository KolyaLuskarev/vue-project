<script setup>
import { useNamesStore } from '@/stores/root';
import InputNameForm from '../components/InputNameForm.vue'
import Butt from '../components/AppButton.vue'
const store = useNamesStore()




</script>

<template>
   

   <div class="root">
     
      <div class="main">
       
         <RouterLink :to="'/addusers'">

       <Butt Declar="Split Bill"  />

       </RouterLink>
       
     
       
      </div>
  
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




   
   

</style>@/stores/root