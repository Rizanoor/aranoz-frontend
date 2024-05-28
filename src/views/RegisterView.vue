<script setup>
import { RouterLink } from 'vue-router';
import Hero from '../components/organisems/Hero.vue';
import InfoContact from '../components/organisems/InfoContact.vue';

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

                            <form>
                                <div class="form-group">
                                    <label class="text-black" for="name">Name</label>
                                    <input type="name" class="form-control" id="name">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="email">Email address</label>
                                    <input type="email" class="form-control" id="email">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="password">Password</label>
                                    <input type="password" class="form-control" id="password">
                                </div>
                                <br>
                                <button type="submit" class="btn btn-primary-hover-outline me-2">Register</button>
                                <RouterLink to="/login" class="btn btn-primary-hover-outline">Login</RouterLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
