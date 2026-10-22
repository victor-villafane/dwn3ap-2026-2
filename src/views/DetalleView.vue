<script setup>
//https://router.vuejs.org/guide/essentials/dynamic-matching
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const personaje = ref(null)
// if (route.params.id) {
  fetch("https://swapi.dev/api/people/" + route.params.id)
    .then(res => res.json())
    .then(data => personaje.value = data)
    .catch(err => console.log(err))
// }

</script>
<template>
  <main class="container py-4">

    <article class="card">
      <div class="card-header">
        <span class="text-secondary">Personaje {{ route?.params?.id }}</span>
      </div>
      <div class="card-body">
        <h1 class="card-title h3 mb-4">{{ personaje?.name }}</h1>
        <dl class="row mb-0">
          <dt class="col-sm-4">Altura</dt>
          <dd class="col-sm-8">{{ personaje?.height }} cm</dd>

          <dt class="col-sm-4">Masa</dt>
          <dd class="col-sm-8">{{ personaje?.mass }} kg</dd>

          <dt class="col-sm-4">Color de cabello</dt>
          <dd class="col-sm-8">{{ personaje?.hair_color }}</dd>

          <dt class="col-sm-4">Color de piel</dt>
          <dd class="col-sm-8">{{ personaje?.skin_color }}</dd>

          <dt class="col-sm-4">Color de ojos</dt>
          <dd class="col-sm-8">{{ personaje?.eye_color }}</dd>

          <dt class="col-sm-4">Año de nacimiento</dt>
          <dd class="col-sm-8">{{ personaje?.birth_year }}</dd>

          <dt class="col-sm-4">Género</dt>
          <dd class="col-sm-8">{{ personaje?.gender }}</dd>
        </dl>
      </div>
    </article>
    <RouterLink to="/personajes" class="btn btn-outline-secondary btn-sm mt-3">
      Volver a personajes
    </RouterLink>
  </main>
</template>
