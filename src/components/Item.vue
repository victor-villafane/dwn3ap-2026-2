<script setup>
// https://vuejs.org/guide/components/props.html
const { personaje } = defineProps(['personaje'])
const id = personaje?.url?.split("/")[5]
</script>
<template>
  <tr>
    <td>{{ personaje.name }}</td>
    <td>{{ personaje.gender }}</td>
    <td>{{ personaje.birth_year }}</td>
    <td><RouterLink :to="'/personaje/' + id">Ver</RouterLink></td>
  </tr>
</template>
<style scoped></style>
