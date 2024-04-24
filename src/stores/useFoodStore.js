import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFoodStore = defineStore('foodList', {
  state: () => ({
    /** @type {{ foodName: string, foodPrise: number, id: number }[]} */
    foodList: [],
    id: 0,
  }),
  actions: {
    addFood(foodName, foodPrise) {
      this.foodList.push({ foodName, foodPrise, id: this.id++ })
    },
  },
})