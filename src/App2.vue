<template>
  page-b
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="page-b" />
  <FullScreenButton />
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import FullScreenButton from "./components/FullScreenButton.vue";

export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
    FullScreenButton,
  },
};
</script>
