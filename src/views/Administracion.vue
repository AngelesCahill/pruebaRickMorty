<template>
    <div>
        <h1>Lista de Opiniones</h1>
        <table class="table table-dark table-hover" v-for="(item, index) in mostrarOpiniones" :key="index">
          <tbody>
            <tr>
              <th>{{item.id}}</th>
              <td>{{item.personaje}}</td>
              <td>{{item.nombre}}</td>
              <td>{{item.opinion}}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Administracion',
        computed: {
          ...mapGetters(['mostrarOpiniones']),
        }
    }
</script>

<style>

</style>