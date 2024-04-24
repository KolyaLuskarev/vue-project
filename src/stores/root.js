import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNamesStore = defineStore('store', {
  state: () => ({
    /** @type {{ name: string, id: number }[]} */
    names: [],
   
    nextId: 0,
    
  }),
  actions: {
    // любое количество аргументов, возвращает Promise или нет
    async addName(name) {
     
      // можно изменять состояние напрямую
      this.names.push({ name, id: this.nextId++ })
    },

    deleteName(nameID) {
      this.names = this.names.filter((object) => {
        return object.id !== nameID;
      });
    },

  },
})
