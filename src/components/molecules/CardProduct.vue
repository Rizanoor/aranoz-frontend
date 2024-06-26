<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';

const toast = useToast();
const products = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/product`);
        products.value = response.data.data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});

const getImageUrl = (product) => {
    return product.galleries.length > 0
        ? `${import.meta.env.VITE_STORAGE_BASE_URL}/${product.galleries[0].photos}`
        : '../../assets/images/default-product.png';
};

const formatCurrency = (value) => {
    return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};

const addToLocalStorage = (product) => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        const productsArray = JSON.parse(storedProducts);
        productsArray.push(product);
        localStorage.setItem('products', JSON.stringify(productsArray));
    } else {
        localStorage.setItem('products', JSON.stringify([product]));
    }

    toast.success('Product added to cart', {
        position: 'top-right'
    });
};

</script>

<template>
    <div v-for="product in products" :key="product.id" class="col-12 col-md-4 col-lg-3 mb-5">
        <a class="product-item" href="#">
            <img :src="getImageUrl(product)" class="img-fluid product-thumbnail" alt="Product Image">
            <h3 class="product-title">{{ product.name }}</h3>
            <strong class="product-price">{{ formatCurrency(product.price) }}</strong>
            <span class="icon-cross" @click="addToLocalStorage(product)">
                <img src="../../assets/images/cross.svg" class="img-fluid" alt="Cross Icon">
            </span>
        </a>
    </div>
</template>