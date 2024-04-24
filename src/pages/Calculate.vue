<script setup>
import { useNamesStore } from '@/stores/root';
import { useFoodStore } from '@/stores/useFoodStore'
import InputFood from '../components/InputFoodForm.vue'
import Butt from '../components/AppButton.vue'
const store = useNamesStore()
const foodStode = useFoodStore()

</script>

<template>
   

   <div class="root">
     
      <div class="main">

         <InputFood/>
       
         <RouterLink :to=" '/result'">

       <Butt Declar="Results"  />

       </RouterLink>
       
      <div>Current Count: {{ store.names }}</div>
      <div> Dishes: {{  foodStode.foodList  }}    </div>

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