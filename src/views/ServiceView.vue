<script setup>
import CardProduct from '../components/molecules/CardProduct.vue';
import Benefits from '../components/organisems/Benefits.vue';
import Hero from '../components/organisems/Hero.vue';

</script>

<template>
    <main>
        <Hero title="Services"
            description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />
        <Benefits />
        <div class="product-section pt-0">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="#" class="btn">Explore</a></p>
					</div> 
                    <CardProduct  v-for="n in 3" :key="n"/>
				</div>
			</div>
		</div>
  
    </main>
</template>
