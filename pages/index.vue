<script>
import AppNav from "../components/AppNav";
import AppTestimonials from "../components/AppTestimonials";
export default {
  name: "index",
  components: {
    AppTestimonials,
    AppNav,

  }
}
</script>

<template>
<section class="overflow-hidden">
  <AppHero/>
  <AppFeatures/>
  <AppCallToAction/>
  <AppTestimonials/>
</section>

</template>

<style scoped>

</style>