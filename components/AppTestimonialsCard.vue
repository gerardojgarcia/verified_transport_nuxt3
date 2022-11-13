<script>
export default {
  name: "AppTestimonialsCard",
  props: {
    testimonials: Array,
  }


}
</script>

<template>
  <!--Testimonial -->

  <div class="flex  md:p-8 md:mx-4 my-4 rounded-lg bg-white md:w-1/5 shadow-lg hover:shadow-xl hover:-translate-y-1  cursor-pointer " v-for="testimonials in testimonials">
  <div class="flex flex-col space-y-8 items-center py-16">
    <img :src="testimonials.img" class="w-24 mt-2" alt="img of testimonial">

    <h5 class="text-lg font-bold">{{ testimonials.name }}</h5>

    <p class="text-sm text-black">
      "{{  testimonials.quote }}"
    </p>
  </div>
  </div>

</template>

<style scoped>

</style>