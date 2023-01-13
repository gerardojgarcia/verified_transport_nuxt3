<script>
export default {
  name: "quote",

  methods: {
    addUser(){
      const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault(); // prevent the form from submitting

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch('http://localhost:3001/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
});
    }
  }
}
</script>

<template>



  <section class="">
    <div class="form-container pt-32 grid place-items-center pb-32">
    
    <form action="submit" class="flex flex-col border-0 border-black p-16 w-1/4 space-y-3 rounded-xl text-left justify-center shadow-lg">

    <strong class="text-black text-5xl">Get A Quote</strong>

    <label for="name">Full Name</label>
      <input type="text" name="name" class="bg-gray-300 rounded-xl p-2  w-3/4" required>
      <label for="email">Email</label>
      <input type="email" name="" class="bg-gray-300 rounded-xl p-2  w-3/4" required>

      <strong class="pt-6">Delivery Address</strong>
      <label for="address">Street</label>
      <input type="text" name="street" class="bg-gray-300 rounded-xl p-2  w-3/4" required>
      <label for="address">City</label>
      <input type="text" name="city" class="bg-gray-300 rounded-xl p-2  w-3/4" required>
      <label for="address">State</label>
      <input type="text" name="state" class="bg-gray-300 rounded-xl p-2  w-1/3" required>


<div class="package-quantity-container flex flex-col w-1/3">
  <label for="package-quantity">How many Packages are you sending?</label>
  <input class="w-1/2 p-2" type="number" name="package-quantity" id="package-quantity">
</div>

<div class="package-frequency-container flex flex-col w-1/3">
  <label for="package-frequency">How often do you ship?</label>
  <input class="w-1/2 p-2" type="number" name="package-frequency" id="package-frequency">
</div>

<div class="package-pickup-container flex flex-col w-1/3">
  <label for="package-pickup-date">Schedule Pickup</label>
  <input class=" p-2" type="datetime-local" name="package-pickup-date" id="package-pickup-date">
</div>


<button @click="addUser()" type="submit">Submit</button>

    </form>
    
    
    </div>
  </section>


</template>

<style scoped>

</style>