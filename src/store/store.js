import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




export default new Vuex.Store({
  
  state: {
    infoApi:[],
    Opiniones:[
      {id: 1, name:'Agency Director', nombre: 'José', opinion: 'Rick es muy buen personaje', activa: true},
        ],
    datos:[],
    favorito:[],
    seleccionado:[],
    datosMixtos:[],
    
  },
  getters: {
    enviarDatosApi(state){
      return state.infoApi;
    },
    
    mostrarOpiniones(state){
      return state.Opiniones;
    },
    enviarPersonajeSeleccionado(state){
      return state.seleccionado;
    },
    enviarPersonajeFavorito(state){
      return state.favorito;
    },
    enviarMultipleInformacion(state){
      return state.datosMixtos;
    },
    
  },
  mutations: {
    mutandoDatosApi(state,datos){
      state.infoApi = datos;
      console.log(datos)
    },
    mutandoNuevaOpinion(state, datos){
      let nuevaOpinion = {
        id: state.Opiniones.length+1,
        personaje: state.seleccionado.name,
        nombre: datos.nombre,
        opinion: datos.opinion,
        activa: true
      }
      state.Opiniones.push(nuevaOpinion);
    },
    borrarOpinion(state,index){
      state.Opiniones.splice(index,1);
    },
    mutarEditarOpinion(state,datosEditar){
      let opinionEditada = {
        id: datosEditar.id,
        nombre: datosEditar.nombre,
        opinion: datosEditar.opinion,
        activa: true,
      }
        state.Opiniones.pop(1);
        state.Opiniones.push(opinionEditada);
      
    },
    mutarPersonajeSeleccionado(state,valor){
      let resultadoPers = state.infoApi.find(results => results.id == valor.id);
      resultadoPers.seleccionado = true;
      state.seleccionado.push(resultadoPers);
      console.log(resultadoPers);
    },
    mutarPersonajeFavorito(state,valor){
      let resultado = state.infoApi.find(results => results.id == valor.id);
      resultado.favorito = true;
      state.favorito.push(resultado);
      console.log(resultado);
    },
    mutarBorrarPersonajeFavorito(state, index){
      state.favorito.splice(index,1);
    },
    mutarMultipleInformacion(state){
      state.infoApi.concat(state.Opiniones);
      return this.datosMixtos;
      
    },
  },   
  actions: {
    async traerApi({commit}){
      try {
        let result = await fetch('https://rickandmortyapi.com/api/character')
        let datos =await result.json();
        console.log(datos)
        commit('mutandoDatosApi',datos.results);
      }catch (error) {
        console.error(error);
      }
    },
    
    agregarNuevaOpinion({commit}, datos){
      commit('mutandoNuevaOpinion', datos);
    },
    eliminandoOpinion({commit},index){
      commit('borrarOpinion',index);
    },
    editarOpinion({commit}, datosEditar){
      commit('mutarEditarOpinion',datosEditar);
    },
    personajeSeleccionado({commit},valor){
      commit('mutarPersonajeSeleccionado', valor);
    },
    personajeFavorito({commit},valor){
      commit('mutarPersonajeFavorito', valor);
    },
    eliminandoPersonajeFavorito({commit},index){
      commit ('mutarBorrarPersonajeFavorito',index);
    },
    
    
  },
  
  modules: {
  },

  
});
