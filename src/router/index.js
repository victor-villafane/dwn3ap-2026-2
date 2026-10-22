// import HomeView from "@/views/HomeView.vue"
// import PersonajesView from "@/views/PersonajesView.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Definicion de las rutas
    {
      path: "/",
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/personajes",
      component: () => import("@/views/PersonajesView.vue")
    },
    {
      path: "/personaje/:id",
      component: () => import("@/views/DetalleView.vue")
    }
  ]
})

export default router
