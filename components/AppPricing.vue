<script>
export default {
  name: "AppPricing",
  methods: {

    monthlyPrice(){
      const priceMonthlyEl = document.querySelector('.pricing-monthly')
      const priceYearlyEl = document.querySelector('.pricing-yearly')

      const growthPriceChange = document.getElementById('growth-price')

      const vipPriceChange = document.getElementById('vip-price')

      priceMonthlyEl.classList.toggle('selected')
      priceYearlyEl.classList.remove('selected')

      growthPriceChange.innerText = '$200'

      vipPriceChange.innerText = '$500'
    },
    yearlyPrice(){
      const priceYearlyEl = document.querySelector('.pricing-yearly')
      const priceMonthlyEl = document.querySelector('.pricing-monthly')

      const growthPriceChange = document.getElementById('growth-price')

      const vipPriceChange = document.getElementById('vip-price')


      priceYearlyEl.classList.toggle('selected')
      priceMonthlyEl.classList.remove('selected')

      growthPriceChange.innerText = '$1500'

      vipPriceChange.innerText = '$5000'

    }


  }

}
</script>

<template>
<section class="bg-gray-100 py-24">

  <div class="pricing-header text-center space-y-8 mb-16 flex flex-col">
    <strong class="text-4xl font-normal tracking-tighter">Flat pricing, no management fees.</strong>
    <p class="pricing-subtitle text-lg text-gray-600 w-1/2 m-auto">Whether you're one person trying to get ahead or a big firm trying to take over the world, let us manage your shipping for the ultimate in efficiency.</p>
<!--PRicing Container Buttons-->
<div class="button-container border-2 w-auto  rounded-lg self-center ">
  <button @click="monthlyPrice" class="pricing-monthly  selected py-4 px-4 ">monthly</button>
  <button @click="yearlyPrice" class="pricing-yearly py-4 px-4">yearly</button>
</div>

  </div>

  <!--Pricing Card Flex Container-->

  <div class="pricing-card-container w-full px-58 space-x-8 flex flex-row justify-center">

<!--Pricing Card-->
    <div class="pricing-card rounded-2xl shadow-md w-1/5 p-8 space-y-6 bg-white">

      <div class="pricing-card-header mt-8"><strong class="text-xl">Starter</strong></div>
      <p class="text-3xl font-regular">$0</p>
      <p class="pricing-card-description text-sm">Just getting started and need guidance for growth. Get started for free.</p>

      <div class="pricing-card-button bg-black rounded-lg text-white font-bold text-sm text-center tracking-tighter py-2 px-24">Get Started For Free</div>

      <ul>
        <li  class="pricing-list-item">Commission Free Trading        </li>
        <li class="pricing-list-item">Multi-layered encryption       </li>
        <li class="pricing-list-item"> One Tip Everyday        </li>
        <li class="pricing-list-item">Up to 500 shipments managed       </li>
      </ul>



    </div>
    <div class="pricing-card rounded-xl shadow-md w-1/5 p-8 space-y-6 bg-white">

      <div class="pricing-card-header mt-8"><strong class="text-xl">Growth</strong></div>
      <p class="text-3xl font-regular " id="growth-price">$200</p>
      <p class="pricing-card-description text-sm">Just getting started and need guidance for growth. Get started for free.</p>

      <div class="pricing-card-button bg-black rounded-lg text-white font-bold text-sm tracking-tighter py-2 px-24 text-center">Subscribe</div>

      <ul>
        <li  class="pricing-list-item">Commission Free Trading        </li>
        <li class="pricing-list-item">Multi-layered encryption       </li>
        <li class="pricing-list-item"> One Tip Everyday        </li>
        <li class="pricing-list-item">Invest up to $15,000 each month</li>
        <li class="pricing-list-item">Basic transaction anonymization</li>
      </ul>



    </div>
    <div class="pricing-card rounded-xl shadow-md w-1/5 p-8 space-y-6 bg-white">

      <div class="pricing-card-header mt-8"><strong class="text-xl">Established</strong></div>
      <p class="text-3xl font-regular" id="vip-price">$500</p>
      <p class="pricing-card-description text-sm">Just getting started and need guidance for growth. Get started for free.</p>

      <div class="pricing-card-button bg-black rounded-lg text-white font-bold text-sm tracking-tighter py-2 px-24 text-center">Subscribe</div>

      <ul>
        <li  class="pricing-list-item">Commission Free Trading        </li>
        <li class="pricing-list-item">Multi-layered encryption       </li>
        <li class="pricing-list-item">Real-time tip notification        </li>
        <li class="pricing-list-item">No investment limits        </li>
        <li class="pricing-list-item">Advanced transaction anonymization        </li>
        <li class="pricing-list-item">Automated tax-loss harvesting         </li>
      </ul>



    </div>



  </div>




</section>
</template>

<style scoped>

.pricing-list-item {
  border-bottom: 1px solid lightgray;
  padding-bottom: .2rem;
  margin-bottom: 1rem;
}




.pricing-monthly {
  transition: all 200ms ease-in;

}

.pricing-yearly {
  transition: all 200ms ease-in;

}

.selected {
  background-color: dodgerblue;
  color: white;
  border-radius: .2rem;
}





</style>