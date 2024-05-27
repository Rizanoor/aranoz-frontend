<script setup>
import { RouterLink, useRoute } from 'vue-router';
</script>

<template>
    <nav class="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
        <div class="container">
            <a class="navbar-brand" href="/">Furni<span>.</span></a>
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
                    <!-- <li class="nav-item">
                        <RouterLink to="/about" class="nav-link" v-slot="{ isActive }">
                            <span :class="{ active: isActive }">About us</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/services" class="nav-link" v-slot="{ isActive }">
                            <span :class="{ active: isActive }">Services</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/blog" class="nav-link" v-slot="{ isActive }">
                            <span :class="{ active: isActive }">Blog</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="nav-link" v-slot="{ isActive }">
                            <span :class="{ active: isActive }">Contact us</span>
                        </RouterLink>
                    </li> -->
                </ul>
                <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li><a class="nav-link" href="#"><img src="../../assets/images/user.svg" alt="User"></a></li>
                    <li><a class="nav-link" href="cart.html"><img src="../../assets/images/cart.svg" alt="Cart"></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link.active {
    color: #0d6efd; /* Atur warna sesuai dengan gaya yang diinginkan */
}
</style>
