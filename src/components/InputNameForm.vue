<template>
     <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="storeName.addName(newName)">
      <v-text-field
        v-model="newName"
        :rules="rules"
        label="Name of customer"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useNamesStore } from '@/stores/root';

const storeName = useNamesStore();
const newName= ref("");


</script>

<style scoped>



</style>