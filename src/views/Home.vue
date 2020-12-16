<template>

  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-5" v-for="(item, index) in enviarDatosApi" :key="index">
        <div class="card mx-3 rounded-3">
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
             
                <button type="button" class="btn btn-outline-warning mt-3 mx-auto d-block" @click="mostrarModal=true">Opinar</button>
               
               <button class="btn btn-outline-warning mt-3 mx-auto d-block" @click="personajeSeleccionado(item)" :disabled="item.seleccionado">Agregar a Ver Mas</button>

                <button type="button" class="btn btn-outline-warning mt-3 mx-auto d-block" @click="$router.push({name: 'VerMas'})">Ver Mas</button>

                         <div v-if="mostrarModal" class="mimodal">
                      <div class="modal-mask">
                        <div class="modal-wrapper">
                          <div class="modal-container">

                            <div class="modal-header">
                              <div name="header">
                               <h3>{{item.name}}</h3>
                              </div>
                            </div>

                            <div class="modal-body">
                             
                             <input type="text" placeholder="Tu Nombre" v-model="datos.nombre">
                                <input type="text" placeholder="Tu Opinion" v-model="datos.opinion"> 
                          </div>

                            <div class="modal-footer">
                              <slot name="footer">
                                <button class="btn-outline-warning mt-3" @click="nuevaOpinion">
                                  guardar
                                </button>
                                <button class="btn-outline-warning mt-3" @click="$router.push({name: 'Opiniones'})">
                                  Ir a Opiniones
                                </button>
                              </slot>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
           </div>      
        </div>
        
      </div> 
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import Swal from 'sweetalert2';

export default {
  name: 'Home',
  data(){
    return {
      mostrarModal: false,
      datos: {nombre:'', opinion:'', activa: false},
      datosApi: {id:'',name: '',gender: '',species: '',image: '',status: '',activa: true},
      }
  },
  components: {
      
  },
  methods: {
        nuevaOpinion(){
            if (this.datos){
                this.$store.dispatch('agregarNuevaOpinion', this.datos)
            }
            else {
                Swal("Error!!", "Primero debes ingresar tu opinion");
            }
        },  
        ...mapActions(['personajeFavorito' , 'personajeSeleccionado'])
        
    },
  computed: {
       ...mapGetters(['enviarDatosApi' , 'enviarPersonajeSeleccionado', 'enviarMultipleInformacion', 'mostrarOpiniones']),
       
       
    },
}
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>