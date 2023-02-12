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

  <div class=" testimonial-card flex w-full md:p-8 md:mx-4 my-4 rounded-lg bg-white md:w-1/5 shadow-lg hover:shadow-xl hover:-translate-y-1  cursor-pointer animate-bounce-custom hover:animate-none" v-for="testimonials in testimonials" data-aos="zoom-in-up" data-aos-duration="700">
  <div class="flex flex-col space-y-8 items-center py-16 ">
    <img :src="testimonials.img" class="w-24 mt-2 overflow-hidden" alt="img of testimonial">

    <strong class="text-lg font-bold">{{ testimonials.name }}</strong>

    <p class="text-sm text-black px-6">
      "{{  testimonials.quote }}"
    </p>
  </div>
  </div>

</template>

<style scoped>



.animate-bounce-custom:hover {
  animation: none;
}


.animate-bounce-custom {
  animation: bounce 1s infinite;
  animation-iteration-count: 5;


}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-2%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.testimonial-card:nth-child(n) {
  animation-delay: 1s;
}

</style>