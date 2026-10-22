<script setup>
import Nav from './components/Nav.vue';
</script>
<template>
  <header>
    <Nav>
      <template v-slot:logo>Logo</template>
    </Nav>
  </header>
  <RouterView></RouterView>
  <!-- TODO: No deberia guardar en cache DetalleView  -->
  <!-- <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" ></component>
    </KeepAlive>
  </RouterView> -->
  <footer></footer>
</template>
