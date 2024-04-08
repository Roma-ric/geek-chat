import SignInUpView from "@/views/SignInUpView.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "@/store"; // Importez votre store Vuex

const routes = [
  {
    path: "/",
    name: "signInUp",
    component: SignInUpView,
  },
  {
    path: "/chat",
    name: "GeekChat",
    component: () => import("../views/ChatView.vue"),
    // meta: { requiresCondition: true }, // Ajoutez une meta propriété pour indiquer que la route nécessite la condition acceptée
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresCondition)) {
    // Vérifiez si la condition est acceptée
    if (store.state.userOnline) {
      next(); // Autorise l'accès à la route
    } else {
      next({ name: "signInUp" }); // Redirige vers la page de connexion si la condition n'est pas acceptée
    }
  } else {
    next(); // Si la route ne nécessite pas de condition, continuez normalement
  }
});

export default router;
