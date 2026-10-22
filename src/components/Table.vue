<script setup>
import Item from './Item.vue';
const { personajes } = defineProps(['personajes'])
</script>
<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Genero</th>
        <th>Año de nacimiento</th>
        <th>Planeta de origen</th>
      </tr>
    </thead>
    <tbody>
      <Item v-for="personaje in personajes" :personaje="personaje" />
    </tbody>
  </table>
</template>
