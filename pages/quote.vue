<script>
export default {
  name: "quote",

  methods: {
    addUser() {
      console.log("add user");
    },
  }
}
</script>

<template>



  <div class="">
    <div class="form-container pt-32 grid place-items-center pb-32">
    
    <form action="submit" class="flex flex-col border-0 border-black p-16 w-1/4 space-y-3 rounded-xl text-left justify-center shadow-lg">

    <strong class="text-black text-5xl">Get A Quote</strong>

    <div class="border-2 border-gray-300 flex flex-col rounded-lg space-y-3 p-6">

<div class="flex space-x-16">
  <div class="flex flex-col">
    <label for="firstname">First Name</label>
    <input type="text" name="firstname" class="bg-gray-300 rounded-xl p-2  " required>
  </div>
  <div class="flex flex-col">
    <label for="lastname">Last Name</label>
    <input type="text" name="lastname" class="bg-gray-300 rounded-xl p-2  " required>
  </div>
</div>
<label for="email">Email</label>
<input type="email" class="bg-gray-300 rounded-xl p-2  w-1/3" required>
<label for="address">Address</label>
<input type="text" name="address" class="bg-gray-300 rounded-xl p-2  w-2/3" required>

</div>


<button @click="addUser()" type="submit">Submit</button>

    </form>
    
    
    </div>
  </div>


</template>

<style scoped>

</style>