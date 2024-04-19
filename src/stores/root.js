import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    /** @type {{ name: string, id: number }[]} */
    names: [],
   
    nextId: 0,
  }),
  actions: {
    // любое количество аргументов, возвращает Promise или нет
    addTodo(name) {
      // можно изменять состояние напрямую
      this.names.push({ name, id: this.nextId++ })
    },
  },
})
