<script>
import AppFooter from "../components/AppFooter";
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