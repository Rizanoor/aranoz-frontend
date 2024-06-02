<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth.js';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Hero from '../components/organisems/Hero.vue';
import InfoContact from '../components/organisems/InfoContact.vue';
import { useToast } from 'vue-toast-notification';

const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

const handleRegister = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, {
            name: name.value,
            email: email.value,
            password: password.value
        });

        const { access_token, token_type, user } = response.data.data;
        localStorage.setItem('authToken', access_token);
        localStorage.setItem('token_type', token_type);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userEmail', user.email);

        authStore.login(user);
        router.push('/');
        toast.success('Register successful', {
            position: 'top-right'
        });
    } catch (error) {
        errorMessage.value = error.response.data.message || 'Registration failed. Please try again.';
        toast.error(errorMessage.value,{
            position: 'top-right'
        });
    }
};
</script>

<template>
    <main>
        <Hero title="Register" subtitle="Page"
            description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique." />
        <div class="untree_co-section">
            <div class="container">
                <div class="block">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-8 pb-4">
                            <InfoContact />

                            <form @submit="handleRegister">
                                <div class="form-group">
                                    <label class="text-black" for="name">Name</label>
                                    <input type="text" class="form-control" id="name" v-model="name">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="email">Email address</label>
                                    <input type="email" class="form-control" id="email" v-model="email">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="password">Password</label>
                                    <input type="password" class="form-control" id="password" v-model="password">
                                </div>
                                <br>
                                <button type="submit" class="btn btn-primary-hover-outline me-2">Register</button>
                                <RouterLink to="/login" class="btn btn-primary-hover-outline">Login</RouterLink>
                            </form>
                            <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
