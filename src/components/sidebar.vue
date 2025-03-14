<template>
  <aside class="sidebar">
    <!-- Zone utilisateur alignée en ligne -->
    <div class="user-info">
      <div class="profile-pic"></div>
      <h3 class="user-name">Adrien Defossez</h3>
    </div>

    <!-- Menu latéral avec scroll -->
    <nav class="menu">
      <router-link to="/saisir-fiche" class="menu-item">
        Gérer les sessions
      </router-link>
      <router-link to="/historique-fiches" class="menu-item">
        Envoyer les fiches aux référents
      </router-link>
      <router-link to="/activite-hors-ref" class="menu-item">
        Attribuer les points
      </router-link>
      <router-link to="/historique" class="menu-item">
        Historique
      </router-link>
      <router-link to="/modifier-referents" class="menu-item ">
        Modifier les référents
      </router-link>
      <router-link to="/modifier-acces" class="menu-item">
        Modifier les Accès
      </router-link>
      <router-link to="/points-cumules" class="menu-item">
        Points cumulés
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
// Pas de logique nécessaire pour ce composant
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh; /* Hauteur de l'écran */
  background-color: #6A3FA0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
  overflow-y: auto; /* Ajoute un scroll si nécessaire */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
}

/* Customisation du scroll (pour Chrome & Firefox) */
.sidebar::-webkit-scrollbar {
  width: 5px;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.profile-pic {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
}

.user-name {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}

.user-promo {
  margin: 0;
  font-size: 0.9rem;
  color: #ddd;
}

/* Menu latéral */
.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-item {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  text-align: center;
  transition: background 0.2s ease-in-out;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

</style>