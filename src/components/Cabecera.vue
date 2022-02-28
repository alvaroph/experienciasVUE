<script lang="ts">

export default {
  data() {
    return {
      count: 0
    }
  },
  props: ['msg']
}


</script>

<template>
<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.svg" alt="" width="30" height="24">
    </a>
    <h5 class="green">{{ msg }}</h5>
  </div>
</nav>
  
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.header{
  background-color: red;
}

h3 {
  font-size: 1.2rem;
}

</style>
