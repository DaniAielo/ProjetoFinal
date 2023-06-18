<template>
  <div>
    <header class="mb-4 text-center">
      <img src="@/assets/images/logo.png" alt="Livraria Feitiçaria" class="logo-img">
    </header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/categories">Categorias</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/authors">Autores</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo-img {
  max-width: 300px;
  height: auto;
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
