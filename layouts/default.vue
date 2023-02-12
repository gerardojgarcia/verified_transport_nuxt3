<script>
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader.vue"
export default {
  name: "default",
  components: {AppFooter}
}
</script>

<template>
<AppHeader/>
  <slot/>
  <AppFooter/>
</template>

<style scoped>

</style>