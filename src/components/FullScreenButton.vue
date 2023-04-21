<template>
  <el-button plain ref="fullscreenButtonRef" @click="toggle">
    <span>{{ isFullscreen ? "退出全屏" : "全屏" }}</span>
  </el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useFullscreen } from "@vueuse/core";

const fullscreenButtonRef = ref();
const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang="less" scoped>
</style>
