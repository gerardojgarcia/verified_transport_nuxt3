<script>
export default {
  name: "quote"
}
</script>

<template>



  <section class="">
    <div class="form-container pt-32 grid place-items-center pb-32">
    
    <form action="submit" class="flex flex-col border-0 border-black p-10 w-1/2 space-y-3 rounded-xl text-left justify-center shadow-lg">

    <strong class="text-black text-5xl">Get A Quote</strong>

    <label for="name">Full Name</label>
      <input type="text" class="bg-gray-300 rounded-xl p-2  w-1/3" required>
      <label for="email">Email</label>
      <input type="email" class="bg-gray-300 rounded-xl p-2  w-1/3" required>
      <label for="address">Address</label>
      <input type="text" name="address" class="bg-gray-300 rounded-xl p-2  w-1/3" required>



    </form>
    
    
    </div>
  </section>


</template>

<style scoped>

</style>