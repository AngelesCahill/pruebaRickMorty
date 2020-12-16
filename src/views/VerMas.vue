<template>
    <div class="bg-primary h-100">
            <div class="container">
            <div class="row" v-if="enviarPersonajeSeleccionado.length > 0">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 tarjeta"  v-for="(item,index) in enviarPersonajeSeleccionado" :key="index">
                <div class="card my-3 mx-3 rounded-3">
                        <img :src="item.image" class="card-img-top mt-2 w-50 mx-auto rounded-circle" alt="">
                        <div class="card-body">
                        <h5 class="card-title text-center">{{item.name}}</h5>
                        <div class="card lista">
                            <ul class="list-group list-group-flush grupo">
                            <li class="list-group-item text-center">Status: {{item.status}}</li>
                            <li class="list-group-item text-center">Especie: {{item.species}}</li>
                            <li class="list-group-item text-center">Género: {{item.gender}}</li>
                            </ul>
                        </div>
                        </div>
                        <button class="btn btn-outline-warning mt-3" @click="personajeFavorito(item)" :disabled="item.favorito">Agregar a Favoritos</button>
                        <button type="button" class="btn btn-outline-warning mt-3" @click="$router.push({name: 'Favoritos'})">Ir a Favoritos</button>
                
                </div>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
    import { mapGetters, mapActions} from "vuex";
    
    export default {
        name: 'VerMas',
        data(){
            return {
               
            }
        },
        computed: {
            ...mapGetters(['enviarPersonajeSeleccionado']),
        },
        methods: {
            ...mapActions(['personajeFavorito']),


        },
    }
</script>

<style>
.personaje {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 10%;
    height: 10%;
    background-color: grey;
    display: table;
    transition: opacity .3s ease;
}
tarjeta {

}

</style>