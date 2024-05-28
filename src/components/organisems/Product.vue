<script setup>
import CardProduct from '../molecules/CardProduct.vue';
</script>

<template>
	<div class="product-section">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
					<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
					<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
						vulputate velit imperdiet dolor tempor tristique. </p>
					<p><a href="shop.html" class="btn">Explore</a></p>
				</div>
				<CardProduct />
			</div>
		</div>
	</div>
</template>