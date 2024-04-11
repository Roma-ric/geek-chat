import SignInUpView from "@/views/SignInUpView.vue";
import { createRouter, createWebHistory } from "vue-router";

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
    meta: {
     requireAuth : true 
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !window.localStorage.getItem("userPseudo"))   { //window.userPseudo
    next({ name: "signInUp" });
  } else {
    next();
  }
});

export default router;
