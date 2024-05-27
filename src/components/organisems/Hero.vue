<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
});
</script>

<template>
    <div class="hero">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                        <h1>{{ title }} <span clsas="d-block">{{ subtitle }}</span></h1>
                        <p class="mb-4">{{ description }}</p>
                        <p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#"
                                class="btn btn-white-outline">Explore</a></p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="hero-img-wrap">
                        <img src="/src/assets/images/couch.png" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>