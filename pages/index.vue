<script>
import AppNav from "../components/AppNav";
import AppTestimonials from "../components/AppTestimonials";
import AppPricing from "../components/AppPricing";
export default {
  name: "index",
  components: {
    AppPricing,
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
  <AppPricing/>
  <AppAbout/>
</section>

</template>

<style scoped>

</style>