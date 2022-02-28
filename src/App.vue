<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Cabecera from "./components/Cabecera.vue";
export default {
  data() {
    return {
      
    }
  },
  components:{
    Cabecera
  }
}
</script>

<template>
  <header>
    
    <div class="container">
      <Cabecera msg="Mensaje pasado"></Cabecera>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <RouterLink class="nav-link" to="/">Buscador</RouterLink
        ><RouterLink class="nav-link" to="/mispelis">Mis Películas</RouterLink>
      </nav>
    </div>
  </header>
 <div class="container">
  <RouterView></RouterView>
 </div>
  
</template>

<style>

</style>
