<template>
    <div>
        <h1 class="m-5"> Opiniones</h1>
        <table class="table table-hover m-5" v-for="(item,index) in mostrarOpiniones" :key="index">
            
            <tbody>
                <tr>
                <td>{{index+1}}</td>
                 <td>{{item.personaje}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.opinion}}</td>

                <td><button type="button" class="btn btn-outline-warning my-auto mx-2" @click="mostrarEditar=true">Editar</button></td>

                <td><button type="button" class="btn btn-danger my-auto" @click="eliminandoOpinion(index)">Eliminar</button></td>
                </tr>
            </tbody>
                    
        </table>
        
                    <div v-if="mostrarEditar" class="border text-center my-5">
                        <div >
                            <label for="editarNombre" class="mx-2">Modifica el Nombre</label>
                            <input type="text" v-model="datosEditar.nombre">
                            <label for="editarNombre" class="mx-2">Modifica la opinion</label>
                            <input type="text" v-model="datosEditar.opinion">
                        
                            <button type="button" class="btn btn-outline-warning mt-3 mx-2 my-auto"   @click="editarOpinion">Guardar Cambios</button>
                            <button type="button" class="btn btn-outline-warning mt-3 mx-2 my-auto" @click="mostrarEditar=false">cerrar</button>
                        </div>
                    </div>      
    </div>
    
</template>

<script>
    import {mapGetters, mapActions} from "vuex"; 
    import Swal from 'sweetalert2';

    export default {
        name:'Opiniones',
        data(){
            return {
              mostrarEditar: false, 
              datosEditar: {id: this.index, nombre:'', opinion:'', activa:''},
              
            }
        },
        components: {
            
        },
        computed: {
        ...mapGetters(['mostrarOpiniones', 'enviarDatosApi']),
        },
        methods: {
        ...mapActions(['eliminandoOpinion', 'editarOpinion']),

        editarOpinion(){
            if (this.datosEditar){
                this.$store.dispatch('editarOpinion', this.datosEditar)
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error, Faltan Datos!',
                    footer: ''
                    })
            }
        },
        
    
    },
       
    }
    
    
</script>

<style>

</style>