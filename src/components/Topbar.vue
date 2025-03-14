<template>
    <nav class="topbar">
      <div class="left-section">
        <img src="/project/workspace/src/Images/logo-ISIS-horizontal-BLANC-HD.png" alt="Logo" class="logo" />
      </div>
  
      <div class="center-section">
        <router-link to="/" class="nav-link active">Accueil</router-link>
        <router-link to="/notifications" class="nav-link">Notifications
          <div class="notif-icon" v-if="notifCount > 0">
            <span class="notif-count">{{ notifCount }}</span>
          </div>
        </router-link>
        <router-link to="/profil" class="nav-link">Profil</router-link>
        <div class="logout-container">
          <router-link to="/logout" class="nav-link logout-link">Déconnexion</router-link>
          <span class="user-email">adrien.defossez@univ-jfc.fr</span>
        </div>
      </div>
    </nav>
</template>
  
<script setup>
import { ref } from 'vue';

// Simuler un nombre de notifications
const notifCount = ref(3);
</script>
  
<style scoped>
.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #6A3FA0;
    padding: 15px 30px;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.left-section {
    display: flex;
    align-items: center;
}

.logo {
    height: 70px; /* Augmenter la hauteur du logo */
    width: auto;
}

.center-section {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 2rem;
    align-items: center;
    padding-right: 50px; /* Décalage vers la droite */
}

.logout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 0.9; /* Réduction de l'interligne */
}

.nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background 0.3s;
    position: relative;
    display: flex;
    align-items: center;
}

.nav-link:hover, .nav-link.active {
    background: rgba(255, 255, 255, 0.3);
    text-decoration: underline;
}

.notif-icon {
    width: 20px;
    height: 20px;
    background: #D7443A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    color: white;
    position: absolute;
    top: -5px;
    right: -10px;
}

.user-email {
    font-size: 0.65rem; /* Réduction de la taille de la police */
    color: rgba(255, 255, 255, 0.8);
    margin-top: -2px; /* Réduction de l'espace entre Déconnexion et l'email */
}
</style>
