<script setup>
defineProps(["previous", "currentPage", "count", "next"])
const emit = defineEmits("fetch")
const fetchApi = (uri = "https://swapi.dev/api/people", current = 1) => {
  emit("fetch", { uri, current })
}

</script>
<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <button class="page-link" :class="currentPage > 1 ? '' : 'disabled'"
          @click="fetchApi(previous, currentPage - 1)">Previous
        </button>
      </li>
      <li v-if="currentPage > 1" class="page-item">
        <button class="page-link"
          @click="fetchApi(`https://swapi.dev/api/people/?page=${currentPage - 1}`, currentPage - 1)">{{ currentPage - 1
          }}</button>
      </li>
      <li class="page-item">
        <button class="page-link text-danger"
          @click="fetchApi(`https://swapi.dev/api/people/?page=${currentPage}`, currentPage)">{{ currentPage }}</button>
      </li>
      <li v-if="currentPage < count" class="page-item">
        <button class="page-link"
          @click="fetchApi(`https://swapi.dev/api/people/?page=${currentPage + 1}`, currentPage + 1)">{{ currentPage + 1
          }}</button>
      </li>
      <li class="page-item">
        <button class="page-link" :class="currentPage >= count ? 'disabled' : ''"
          @click="fetchApi(next, currentPage + 1)">Next</button>
      </li>
    </ul>
  </nav>
</template>
