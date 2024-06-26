<script setup>
import { ref, computed } from 'vue'
import { useOrderStore } from '@/stores/useOrderStore'
import { useNamesStore } from '@/stores/root'

const storeFood = useOrderStore()
const storeNames = useNamesStore()

const foodName = ref("")
const foodPrise = ref("")
const selectedNamesIds = ref([])

const selectedNames = computed(() => {
  return storeNames.names.filter(name => selectedNamesIds.value.includes(name.id))
})
</script>

<template>
  <v-sheet class = "mx-auto" width = "300">
    <v-form @submit.prevent = "storeFood.addFood(foodName, foodPrise, selectedNames, payerName)">
      <v-text-field
        v-model = "foodName"
        label = "Name of dish"
      />
      <v-text-field
        v-model = "foodPrise"
        label = "Prise of dish"
      />

      <v-list>
        <v-list-item
          v-for = "name in storeNames.names"
          :key = "name.id"
        >
          <v-list-item-action>
            <v-checkbox
              v-model = "selectedNamesIds"
              :value = "name.id"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ name.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-autocomplete
          v-model = "payerName"
          :items = "storeNames.names.map(name => name.name)"
          label = "Payer Name (Optional)"
          clearable
        />
      </v-list>

      <v-btn class = "mt-2" type = "submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>


<style lang = "scss" scoped>
@import '../assets/styles/main.sass'
</style>