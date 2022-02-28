<script lang="ts">
import Pelicula from "../components/Pelicula.vue";
export default {
  data() {
    return {
      search:'',
      arrayPeliculas:Array
    }
  },
  components:{
    Pelicula
  },
  methods:{
    buscarPeliculas(){
      fetch("https://www.omdbapi.com/?apikey=19f8a30e&s="+this.search)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.arrayPeliculas = data.Search;
                    this.arrayPeliculas.forEach(element => {
                      element["anadida"]=false;
                    });
                });
    },
    addPelicula(datosPeli:{Title:string, Poster:string , imdbID:string, Year:string}){
      console.log("voy a añadir a r"+datosPeli.imdbID);
      
      const datosEnvio = new FormData();
                datosEnvio.append('Title', datosPeli.Title);
                datosEnvio.append('Poster', datosPeli.Poster);
                datosEnvio.append('imdbID', datosPeli.imdbID);
                datosEnvio.append('Year', datosPeli.Year);
                fetch(`http://alvaro.alumnes.inspedralbes.cat/api.php/records/PELICULA`, {
                        method: 'POST',
                        body: datosEnvio
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        datosPeli.anadida=true;
                    });
    }
  }
  
}
</script>

<template>
<div>
    <h1>Búsqueda de peliculas</h1>
    <input id="search" type="text" v-model="search">
    <button class="btn btn-primary" @click="buscarPeliculas">Buscar</button>
    <div class="row">
    <div class="col-md-3" v-for="peli in arrayPeliculas">
    <Pelicula :datos-pelicula="peli">
      <button @click="addPelicula(peli)" :class="[peli.anadida ? 'btn-success' : 'btn-danger', 'btn']">Añadir</button>
    </Pelicula>
    </div>
    </div>
  </div>
  </template>
