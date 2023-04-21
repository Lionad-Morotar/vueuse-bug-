<template>
  <button ref="fullscreenButtonRef" @click="toggle">
    <span>{{ isFullscreen ? "退出全屏" : "全屏" }}</span>
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useFullscreen } from "@vueuse/core";

const $elem = document.querySelector('#app')

const fullscreenButtonRef = ref();
const { isFullscreen, toggle } = useFullscreen($elem);

console.log($elem, isFullscreen)
</script>

<style>
</style>
