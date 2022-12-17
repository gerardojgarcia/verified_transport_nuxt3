<script>
import AppNav from "../components/AppNav";
import AppTestimonials from "../components/AppTestimonials";
import AppPricing from "../components/AppPricing";
import AppFAQ from "../components/AppFAQ";
export default {
  name: "index",
  components: {
    AppFAQ,
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
  <AppPricing/>
  <AppTestimonials/>

  <AppFAQ/>
</section>

</template>

<style scoped>

</style>