<script>
export default {
  name: "AppHero"
}
</script>

<template>
<section class="hero w-full flex flex-col justify-center  pb-52 pt-24">
    <div class="flex flex-col md:flex-row w-full items-center ">
  <!--Hero Info COntainer-->
      <div class=" w-full md:w-1/2 md:p-12 pb-8">
      <h1 class="text-6xl pb-16">A Modern Transport Company for a new generation of logistics</h1>
  <strong class="subtitle pb-16">Our fleet of transit vans are ready to deliver whenever you need us. </strong>

        <AppButton to="/quote" link="Get Quote" class="pt-16"/>
      </div>


      <!--Hero Img -->
      <img class="shadow-lg" src="/imgs/pexels-tima-miroshnichenko-6169051.jpg" alt="Image of transit vans" height="900px" >
    </div>
</section>
</template>

<style scoped>

</style>