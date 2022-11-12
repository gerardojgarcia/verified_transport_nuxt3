<script>
export default {
  name: "AppFooter"
}
</script>

<template>
  <footer class="bg-blue-900">

    <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <!--social & logo container -->
      <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:sapce-y-0 md:items-start">

        <div class="mx-auto my-6 text-center text-white md:hidden">Copyright &copy; 2022, All Rights Reserved
        </div>
        <!--Logo-->
        <div>

          <img src="/imgs/verified_logo_white.svg" class="img-responsive" alt="" width="300px" height="300px">
        </div>

        <!--Soial-->

        <div class="flex justify-center space-x-4">
          <a href="">
            <img src="/imgs/icon-facebook.svg" alt="" class="h-8">
          </a>
          <a href="">
            <img src="/imgs/icon-twitter.svg" alt="" class="h-8">
          </a>
          <a href="">
            <img src="/imgs/icon-instagram.svg" alt="" class="h-8">
          </a>
        </div>

      </div>

      <!--list container-->

      <div class="flex justify-around space-x-32">
        <div class="flex flex-col space-y-3 text-white">
          <a href="#" class="hover:text-blue">Home</a>
          <a href="#" class="hover:text-blue">Pricing</a>
          <a href="#" class="hover:text-blue">Products</a>
          <a href="#" class="hover:text-blue">About</a>
        </div>
        <div class="flex flex-col space-y-3 text-white">
          <a href="#" class="hover:text-blue">Careers</a>
          <a href="#" class="hover:text-blue">Community</a>
          <a href="#" class="hover:text-blue">Privacy Policy</a>

        </div>


      </div>

      <!--INput Container-->
      <div class="flex flex-col justify-between">

        <form action="">
          <div class="flex space-x-3 space-y-3">
            <input type="text" class="flex-1 px-4 rounded-full focus:outline-none"
                   placeholder="Updated in your inbox">

            <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:outline-focus">Go</button>
          </div>
        </form>

        <div class="hidden text-white md:block">
          Copyright &copy; 2022, All Rights Reserved
        </div>
      </div>



    </div>




  </footer>
</template>

<style scoped>

</style>