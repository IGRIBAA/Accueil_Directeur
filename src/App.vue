<template>
  <div id="app">
    <!-- Barre supérieure -->
    <Topbar />

    <div class="layout">
      <!-- Menu latéral -->
      <Sidebar />

      <!-- Zone de contenu : router-view -->
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "/project/workspace/src/components/sidebar.vue";
import Topbar from "/project/workspace/src/components/Topbar.vue";
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Layout principal : sidebar + contenu */
.layout {
  display: flex;
  flex: 1;
  margin-top: 80px; /* Ajuste l'espace sous la Topbar */
}

/* Ajuste la sidebar pour qu'elle ne chevauche pas la Topbar */
.sidebar {
  width: 250px;
  height: calc(100vh - 80px); /* Ajuste la hauteur pour éviter le débordement */
  position: fixed;
  top: 80px; /* Place la Sidebar juste en dessous de la Topbar */
  left: 0;
  background-color: #6A3FA0;
  z-index: 900;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow-y: auto;
  margin-top: 50px;
  padding: 10px;
}

/* Ajuste la zone de contenu pour éviter le chevauchement */
.main-content {
  flex: 1;
  margin-left: 250px; /* Pousse le contenu à droite pour éviter la Sidebar */
  padding: 20px;
  background-color: #f5f5f5; /* Ajoute un fond gris clair pour la Dashboard */
}
</style>
