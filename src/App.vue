<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import MyLayoutVue from './pages/MyLayout.vue';

export default defineComponent({
  name: 'App',
  components: {MyLayoutVue}
})
</script>
