<script lang="ts">
import Pelicula from "../components/Pelicula.vue";
export default {
  beforeMount(){
    fetch('http://alvaro.alumnes.inspedralbes.cat/api.php/records/PELICULA')
    .then(response =>  response.json())
    .then(data => this.basePeliculas=data.records )
  },
  data() {
    return {
      basePeliculas : Object
    }
  },
  methods:{
    eliminarPelicula(datosPeli:String){
      console.log("voy a borrar"+datosPeli);

                fetch(`http://alvaro.alumnes.inspedralbes.cat/api.php/records/PELICULA/`+datosPeli, {
                        method: 'DELETE'
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        this.basePeliculas = this.basePeliculas.filter(function(value: String){ 
                            return value.id!=datosPeli;
                        });
                    });
    }
  },
  components:{
    Pelicula
  },
  
}</script>
<template>
  <div class="peliculas">
    <h1>Nuestras peliculas</h1>
  </div>

  <div class="row">
            <div class="col-md-3" v-for="peli in basePeliculas" >
                      <Pelicula :datos-pelicula="peli" >
                        <button @click="eliminarPelicula(peli.id)" class="btn btn-danger">Eliminar</button>
                        </Pelicula>
            </div>
        
  </div>


</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
