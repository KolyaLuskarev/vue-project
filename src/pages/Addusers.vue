<script setup>
import { useNamesStore } from '@/stores/root';
import InputNameForm from '../components/InputNameForm.vue'
import Butt from '../components/AppButton.vue'
const store = useNamesStore()




</script>

<template>
   

   <div class="root">
     
      <div class="main">
       
        <InputNameForm/>
        <RouterLink :to="'/calculate'">

       <Butt Declar="Add Dishes"  />
       
       </RouterLink>


     

      <div>
         <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-list
      :items="store.names"
      item-title="name"
      item-value="id"
    ></v-list>
  </v-card>


      </div>
       
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