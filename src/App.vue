<script>

import PersList from '/home/nluskarev/vue-project/src/components/PersList.vue'

export default{
 
  name:'app',
  data(){
    return{
    persons:[
      {id:1,title: 'Sasha'},
      {id:2, title: 'Dasha'},
      {id:3, title: 'Pasha'}
    ]
    }
  },
 
 components:{
   PersList
 }
 
 }


</script>

<template>
  <header>
    
    <div class="wrapper">
   <h1> Split bill</h1>
   <hr>
   <PersList
   v-bind:persons="persons"
   />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
