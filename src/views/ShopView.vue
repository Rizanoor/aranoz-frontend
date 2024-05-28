<script setup>
import CardProduct from '../components/molecules/CardProduct.vue';
import Hero from '../components/organisems/Hero.vue';

</script>

<template>
    <main>
        <Hero title="Shop"
            description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />

        <div class="untree_co-section product-section before-footer-section">
            <div class="container">
                <div class="row">
                    <CardProduct />
                </div>
            </div>
        </div>
    </main>
</template>
