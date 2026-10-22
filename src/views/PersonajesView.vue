<script setup>
import { ref } from "vue"
import Table from "../components/Table.vue"
import Paginacion from "../components/Paginacion.vue"

const personajes = ref([])
const count = ref(0)
const next = ref("")
const previous = ref("")
const currentPage = ref(1)


const fetchApi = ({uri = "https://swapi.dev/api/people", current = 1}) => {
  fetch(uri)
    .then((res) => res.json())
    .then(data => {
      personajes.value = data.results
      count.value = data.count / 10
      next.value = data.next
      previous.value = data.previous
      currentPage.value = current
    })
    .catch(err => console.log(err))
}
fetchApi({uri: "https://swapi.dev/api/people", current: 1})

</script>

<template>
  <h1 class="h1">Personajes</h1>
  <Table :personajes="personajes" />
  <Paginacion
    :count="count"
    :next="next"
    :previous="previous"
    :currentPage="currentPage"
    @fetch="fetchApi"
  />
</template>

<style scoped></style>
