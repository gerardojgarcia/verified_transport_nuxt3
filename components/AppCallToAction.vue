<script>
export default {
  name: "AppCallToAction"
}
</script>

<template>
  <!--Call to Action-->

  <section id="cta" class="bg-blue-900 shadow-lg py-16">

    <!--container-->

    <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12  md:flex-row md:space-y-0 md:h-auto" data-aos="fade-up">




      <!--heading-->
        <div class=" ">
        <h2 class="text-3xl font-bold lead-tight text-center text-white pb-16 md:text-6xl md:max-w-xl md:text-left ">Simplify your shipping solution</h2>
        <strong class="text-white font-normal text-lg">It only takes a minute to get a quote</strong>
          </div >

        <!--button-->
        <div class="my-16">

         <AppButton to="'/quote" link="Get a Quote"/>
        </div>
      </div>





  </section>
</template>

<style scoped>

</style>