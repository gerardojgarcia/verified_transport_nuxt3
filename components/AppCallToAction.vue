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
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12  md:flex-row md:space-y-0 md:h-auto">




      <!--heading-->
      <h2 class="text-5xl font-bold lead-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">

        Simplify your shipping solution

      </h2>

      <!--button-->
      <div class="my-16">

       <AppButton to="'/quote" link="Get Started"/>
      </div>
    </div>





  </section>
</template>

<style scoped>

</style>