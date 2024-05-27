<script setup>
import Blog from '../components/organisems/Blog.vue';
import Choose from '../components/organisems/Choose.vue';
import Help from '../components/organisems/Help.vue';
import Hero from '../components/organisems/Hero.vue';
import Popular from '../components/organisems/Popular.vue';
import Product from '../components/organisems/Product.vue';

</script>

<template>
  <main>
    <Hero
      title="Modern Interior"
      subtitle="Design Studio"
      description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
    />
    <Product />
    <Choose />
    <Help />
    <Popular />
    <Blog />
  </main>
</template>
