import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/store';
import Opiniones from '../views/Opiniones.vue';

describe ('Inciando con Vuex-Store',()=>{

    beforeAll(() => {
        Vue.use(Vuex);
        store = new Vuex.Store(store);
    });
});
describe ('testeando Opiniones y componente',()=>{
    it('test1', () => {
        const wrapper = shallowMount(Opiniones);
        expect(wrapper.vm._isMounted).toBe(true);
      })

    let mostrarOpiniones = store.getters.mostrarOpiniones;
    expect(mostrarOpiniones.length).toBe(5);
    for (let index = 0; index < mostrarOpiniones.length; index++) {
        expect(mostrarOpiniones[index].id).toBe(index+1);}

});


   