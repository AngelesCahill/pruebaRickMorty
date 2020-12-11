<template>
  <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Rick and Morty</a>
            
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                
                <li class="nav-item">
                  <router-link to="/">Inicio</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/opiniones">Opiniones</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/favoritos">Favoritos</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/administracion">Administración</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
