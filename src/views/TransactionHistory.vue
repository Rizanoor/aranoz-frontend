<script setup>
import Hero from '../components/organisems/Hero.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const transactions = ref([]);

onMounted(async () => {
    authStore.checkAuth();

    if (!authStore.isAuthenticated) {
        console.error('User is not authenticated');
        return;
    }

    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/transactions`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        transactions.value = response.data.data.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
});

const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};
</script>

<template>
    <Hero title="Transaction History"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />

    <div class="untree_co-section before-footer-section">
        <div class="container">
            <div class="row mb-5">
                <form class="col-md-12" method="post">
                    <div class="site-blocks-table">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="product-name">Product</th>
                                    <th class="product-price">Total Price</th>
                                    <th class="product-remove">Address</th>
                                    <th class="product-status">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="transaction in transactions" :key="transaction.id">
                                    <td v-for="item in transaction.items" :key="item.id">
                                        {{ item.product.name }}
                                    </td>
                                    <td>{{ transaction.total_price }}</td>
                                    <td>
                                        {{ transaction.address }}
                                    </td>
                                    <td>{{ transaction.status }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
