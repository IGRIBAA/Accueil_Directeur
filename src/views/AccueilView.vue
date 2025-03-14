<template>
  <div class="dashboard-container">
    <!-- Barre de recherche -->
    <div class="search-container">
      <input type="text" placeholder="🔍 Rechercher..." class="search-input" />
    </div>

    <!-- Grille du Dashboard -->
    <div class="dashboard-grid">
      <!-- 1️⃣ Graphique en barres -->
      <div class="card chart-card">
        <h2>Évolution des étudiants engagés</h2>
        <canvas ref="barChartCanvas"></canvas>
      </div>

      <!-- 2️⃣ Doughnut Chart -->
      <div class="card chart-card">
        <h2>Intérêt par promotion</h2>
        <canvas ref="doughnutChartCanvas"></canvas>
      </div>

      <!-- 3️⃣ Graphique en ligne -->
      <div class="card chart-card">
        <h2>Tendance des activités</h2>
        <canvas ref="lineChartCanvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const barChartCanvas = ref(null);
const doughnutChartCanvas = ref(null);
const lineChartCanvas = ref(null);

onMounted(() => {
  // 📊 Graphique en barres (Évolution des étudiants engagés)
  if (barChartCanvas.value) {
    new Chart(barChartCanvas.value, {
      type: "bar",
      data: {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
        datasets: [
          {
            label: "Étudiants engagés",
            data: [50, 80, 65, 90, 70, 85],
            backgroundColor: "#6A3FA0",
            borderColor: "#5F4E9B",
            borderWidth: 2,
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          duration: 2000,
          easing: "easeInOutBounce",
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  // 🍩 Doughnut Chart (Intérêt par promotion)
  if (doughnutChartCanvas.value) {
    new Chart(doughnutChartCanvas.value, {
      type: "doughnut",
      data: {
        labels: ["FIE1", "FIE2", "FIE3"],
        datasets: [
          {
            data: [40, 35, 25],
            backgroundColor: ["#36A2EB", "#FF6384", "#FFCD56"],
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    });
  }

  // 📈 Graphique en ligne (Tendance des activités)
  if (lineChartCanvas.value) {
    new Chart(lineChartCanvas.value, {
      type: "line",
      data: {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
        datasets: [
          {
            label: "Activités validées",
            data: [30, 45, 60, 55, 80, 100],
            borderColor: "#FF9F40",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderWidth: 3,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          duration: 1500,
          easing: "easeInOutCubic",
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }
});
</script>

<style scoped>
/* 📌 Conteneur principal */
.dashboard-container {
  background-color: #f4f4f4;
  min-height: calc(100vh - 80px);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

/* 📌 Barre de recherche */
.search-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 50%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 📌 Grille du Dashboard */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

/* 📌 Cartes */
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* 📌 Cartes des graphiques */
.chart-card h2 {
  font-size: 16px;
  color: #6A3FA0;
  margin-bottom: 15px;
}

/* 📌 Responsive */
@media (max-width: 900px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
