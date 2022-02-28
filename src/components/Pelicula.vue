<script lang="ts">

export default {
  data() {
    return {
      
    }
  },
  props: ['datosPelicula']
}


</script>

<template>

<div class="card" style="width: 18rem;">
  <img :src="datosPelicula.Poster" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ datosPelicula.Title }}</h5>
    
    <p class="card-text"> {{datosPelicula.Year}}</p>
    <slot />
  
  </div>
</div>
</template>

<style scoped>
</style>
