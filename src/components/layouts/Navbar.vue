<script setup>
import { onMounted } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useAuthStore } from '../../stores/auth.js';
import { useToast } from 'vue-toast-notification';


const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

onMounted(() => {
  authStore.checkAuth();
});

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
  toast.success('Logout successful', {
    position: 'top-right'
  });
};
</script>

<template>
  <nav class="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Furni<span>.</span></RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" v-slot="{ isActive }">
              <span :class="{ active: isActive }">Home</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/shop" class="nav-link" v-slot="{ isActive }">
              <span :class="{ active: isActive }">Shop</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/services" class="nav-link" v-slot="{ isActive }">
              <span :class="{ active: isActive }">Services</span>
            </RouterLink>
          </li>
        </ul>
        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li v-if="!authStore.isAuthenticated">
            <RouterLink class="nav-link" to="/login">
              <img src="../../assets/images/user.svg" alt="User">
            </RouterLink>
          </li>
          <li v-else class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Hello, {{ authStore.user.name }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/transaction-history">Transaction</RouterLink></li>
              <li><a class="dropdown-item" @click="handleLogout" href="#">Logout</a></li>
            </ul>
          </li>
          <li>
            <RouterLink to="/cart" class="nav-link">
              <img src="../../assets/images/cart.svg" alt="Cart">
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  color: #0d6efd;
}
</style>
