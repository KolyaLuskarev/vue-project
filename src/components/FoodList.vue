<template>
    <div>
        
        <li>
            <span>
                <input type="checkbox">
                <strong> {{ person.id }} </strong>
                {{ person.title }}
            </span>
<button class="rm">&times;</button>
        </li>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
props:{
    person:
    {
        type:Object,
        required: true
    }
}
}
</script>
<style scoped>
li{

    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: bold;
}
.rm{
     background: red;
     color: #fff;
     border-radius: 100%;
     font-weight: bold;
}
</style>