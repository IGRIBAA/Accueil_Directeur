import { createRouter, createWebHistory } from "vue-router";

// Importation des vues
import AccueilView from "../views/AccueilView.vue"; // Vérifie bien le chemin

const routes = [{ path: "/", component: AccueilView }];

// ✅ Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // ✅ On exporte bien `router`
