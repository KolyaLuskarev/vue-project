<template>
    <form @submit.prevent="">

        <input
        type="text"
        class="serch-input"
        placeholder="Input name"
        v-model="inputName"
        />
    </form>
</template>
<script setup>
import { ref, computed } from 'vue'
const inputName= ref("")
</script>

<style scoped>

</style>