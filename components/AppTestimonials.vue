<script>
export default {
  name: "AppTestimonials",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          img: '/imgs/avatar-ali.png',
          name: 'Anisha Li',
          quote: 'Verified has supercharged our team\'s workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated.'
        },
        {
          id: 1,
          img: '/imgs/avatar-anisha.png',
          name: 'Rosemary Smeckle',
          quote: 'Verified has supercharged our team\'s workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated.'
        },
        {
          id: 1,
          img: '/imgs/avatar-richard.png',
          name: 'Robert Logue',
          quote: 'Verified has supercharged our team\'s workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated.'
        },
        {
          id: 1,
          img: '/imgs/avatar-shanai.png',
          name: 'Jennifer Little',
          quote: 'Verified has supercharged our team\'s workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated.'
        },
        {
          id: 1,
          img: '/imgs/',
          name: 'Anisha Li',
          quote: 'Verified has supercharged our team\'s workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated.'
        },

      ]
    }
  },


}
</script>

<template>
  <!--Testimonial-->

  <section id="testimonial">
    <!--testimonial container and testimonial divs-->

    <div class="w-full  px-32 mx-auto mt-32 mb-8 text-center h-3/4">
      <h2 class="text-4xl font-bold text-center">

        Our Success Stories


      </h2>

      <!--Testimonial Container-->
      <div class="flex flex-col  md:flex-row mt-24  md:flex-wrap w-full md:justify-center md:space-evenly "   >



          <AppTestimonialsCard :testimonials="testimonials" />





      </div>
      <!--Button-->

      <div class="my-16">

        <a href="#"
           class="p-3 px-6 pt-2 text-white bg-blue-600 rounded-full baseline hover:bg-brightRedLight">Get
          Started</a>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>