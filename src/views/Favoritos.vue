<template>
    <div class="w-100">
        <div class="container">
            <div class="row bg-primary" v-if="enviarPersonajeFavorito.length > 0">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"  v-for="(item,index) in enviarPersonajeFavorito" :key="index">
                <div class="card my-3 mx-3 rounded-3">
                        <img :src="item.image" class="card-img-top mt-2 w-50 mx-auto rounded-circle" alt="">
                        <div class="card-body tarjeta">
                        <h5 class="card-title text-center">{{item.name}}</h5>
                        <div class="card lista">
                            <ul class="list-group list-group-flush grupo">
                            <li class="list-group-item text-center">Status: {{item.status}}</li>
                            <li class="list-group-item text-center">Especie: {{item.species}}</li>
                            <li class="list-group-item text-center">Género: {{item.gender}}</li>
                            </ul>
                        </div>
                        </div>
                        <button type="button" class="btn btn-outline-warning mt-3 mx-auto d-block" @click="eliminandoPersonajeFavorito">Eliminar de Favoritos</button>
                        <button type="button" class="btn btn-outline-warning mt-3 mx-auto d-block" @click="$router.push({name: 'Home'})">Volver a Inicio</button>
                </div>
            </div>
        </div>
    </div>
        
    </div>
</template>

<script>
    
    
    import { mapGetters, mapActions } from "vuex";

    export default {
        name:'Favoritos',
        components: {
          
        },
        computed: {
            ...mapGetters(['enviarPersonajeFavorito']),
            
        },
        methods: {
            ...mapActions(['eliminandoPersonajeFavorito']),
        },
    }
</script>

<style>

</style>