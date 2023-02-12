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
          quote: 'I have been using Verified for all of my shipping needs for the past year and I couldn\'t be happier. Their rates are competitive and their service is top-notch. They always go the extra mile to make sure my shipments arrive on time and in perfect condition. '
        },
        {
          id: 1,
          img: '/imgs/avatar-anisha.png',
          name: 'Rosemary Smeckle',
          quote: 'As a small business owner, I don\'t have the resources to handle my own shipping and logistics. That\'s where this transport company comes in. They have been a lifesaver for me, taking care of everything from pick-up to delivery. I highly recommend them to any business in need of top-quality shipping and logistics services.'
        },
        {
          id: 1,
          img: '/imgs/avatar-richard.png',
          name: 'Robert Logue',
          quote: ' Their rates are reasonable and their service is unbeatable. They are always willing to go above and beyond to make sure my shipments arrive on time and in great condition. I highly recommend them to any small to medium sized business looking for reliable shipping and logistics support.'
        },
        {
          id: 1,
          img: '/imgs/avatar-shanai.png',
          name: 'Jennifer Little',
          quote: 'I have been extremely impressed with the service and professionalism of Verified Transport.    Their team is responsive, efficient, and always goes the extra mile to make sure my shipments arrive on time and in perfect condition. '
        },
        {
          id: 1,
          img: '/imgs/last_testimoniail.png',
          name: 'Anisha Li',
          quote: 'They have never let me down, consistently providing reliable, efficient, and cost-effective service. Their team is always available to answer any questions I have and they go above and beyond to make sure my shipments arrive on time and in great condition. I highly recommend them to any small to medium sized business looking for top-notch shipping and logistics support.'
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

    <div class="w-full px-4 md:px-32 mx-auto mt-32 mb-8 text-center h-3/4" data-aos="fade-up">
      <h2 class="text-4xl font-bold text-center">

        Our Success Stories


      </h2>

      <!--Testimonial Container-->
      <div class="flex flex-col  md:flex-row mt-24  md:flex-wrap w-full md:justify-center md:space-evenly "  data-aos="fade-up" >



          <AppTestimonialsCard :testimonials="testimonials"  />





      </div>
      <!--Button-->


    </div>
  </section>

</template>

<style scoped>

</style>