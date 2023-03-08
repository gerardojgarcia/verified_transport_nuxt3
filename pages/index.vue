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
<div class="overflow-hidden">
  <AppHero/>
  <AppQuote/>
  <AppFeatures/>
  <AppCallToAction/>
  <AppPricing/>
  <AppTestimonials/>

  <AppFAQ/>
</div>

</template>

<style scoped>

</style>