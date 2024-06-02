<script setup>
import { ref } from 'vue';
import Hero from '../components/organisems/Hero.vue';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';

const toast = useToast();
let products = ref(JSON.parse(localStorage.getItem('products')) || []);

const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};

const checkout = () => {
    const payload = {
        items: products.value.map(product => ({ id: product.id })),
        status: "PENDING",
        total_price: products.value.reduce((total, product) => total + product.price, 0),
        address: "Jakarta"
    };

    axios.post(`${import.meta.env.VITE_API_BASE_URL}/checkout`, payload, {
        headers: {
            Authorization: `${localStorage.getItem("token_type")} ${localStorage.getItem("authToken")}`
        }
    })
    .then(response => {
        localStorage.removeItem('products');
        window.location.href = '/success';
    })
    .catch(error => {
        console.error('Error:', error.response.data);
        toast.error('Checkout failed. Please try again.', {
            position: 'top-right'
        });
    });

};
</script>

<template>
    <main>
        <Hero title="Checkout"
            description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />

        <div class="untree_co-section">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <h2 class="h3 mb-3 text-black">Your Order</h2>
                                <div class="p-3 p-lg-5 border bg-white">
                                    <table class="table site-block-order-table mb-5">
                                        <thead>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(product, index) in products" :key="index">
                                                <td>{{ product.name }}</td>
                                                <td>{{ formatCurrency(product.price) }}</td>

                                            </tr>

                                            <tr>
                                                <td class="text-black font-weight-bold"><strong>Order Total</strong>
                                                </td>
                                                <td class="text-black font-weight-bold">
                                                    <strong class="text-black">{{ formatCurrency(products.reduce((total,
                                                        product) =>
                                                        total + product.price, 0)) }}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div class="form-group">
                                        <button class="btn btn-black btn-lg py-3 btn-block" @click="checkout">Place Order</button>
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
