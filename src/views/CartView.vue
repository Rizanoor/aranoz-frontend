<script setup>
import Hero from '../components/organisems/Hero.vue';
let products = JSON.parse(localStorage.getItem('products')) || [];
console.log(products);

const getImageUrl = (product) => {
    return import.meta.env.VITE_STORAGE_BASE_URL + '/' + product.galleries[0].photos;
};

const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};

const removeProduct = (index) => {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
};
</script>

<template>
    <main>
        <Hero title="Cart"
            description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />


        <div class="untree_co-section before-footer-section">
            <div class="container">
                <div class="row mb-5">
                    <form class="col-md-12" method="post">
                        <div class="site-blocks-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="product-thumbnail">Image</th>
                                        <th class="product-name">Product</th>
                                        <th class="product-price">Price</th>
                                        <th class="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products" :key="index">
                                        <td class="product-thumbnail">
                                            <img :src="getImageUrl(product)" alt="Image" class="img-fluid">
                                        </td>
                                        <td class="product-name">
                                            <h2 class="h5 text-black">{{ product.name }}</h2>
                                        </td>
                                        <td>{{ formatCurrency(product.price) }}</td>
                                        <td>
                                            <a href="#" @click.prevent="removeProduct(index)" class="btn btn-black btn-sm">X</a>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>

                <div class="row">

                    <div class="col-md-12 pl-5">
                        <div class="row justify-content-end">
                            <div class="col-md-7">
                                <div class="row">
                                    <div class="col-md-12 text-right border-bottom mb-5">
                                        <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <span class="text-black">Total</span>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <strong class="text-black">{{ formatCurrency(products.reduce((total, product) =>
                                            total + product.price, 0)) }}</strong>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <button class="btn btn-black btn-lg py-3 btn-block"
                                            onclick="window.location='checkout'">Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>