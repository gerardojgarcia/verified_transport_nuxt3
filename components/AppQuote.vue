<script>
import RangeSlider from "vue-range-slider";
export default {
  name: "AppQuote",

  data() {
    return {
      devSliderValue: "",
      hoursSliderValue: "",
      daySliderValue: "",

      totalValue: "",
    };
  },
};
</script>

<template>
  <div id="quote" class="bg-gray-200 md:p-8">
    <div
      class="md:flex md:justify-between md:align-center rounded-xl shadow-lg py-16 bg-white"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div
        class="md:w-1/2 flex align-center justify-center px-4"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <!--Form-->
        <form
          action="submit"
          class="flex flex-col shadow-lg md:pl-8 p-4 md:p-16 space-y-8 md:w-1/2"
        >
          <div class="form-devs space-y-4 flex flex-col">
            <label for="devs" class="font-bold text-lg">How many packages?</label>
            <input
              type="range"
              name="devs"
              id="devs"
              class="devs w-3/4"
              min="0"
              max="200"
              v-model.number="devSliderValue"
            />
            <p class="devs-value text-lg font-bold">{{ devSliderValue }}</p>
          </div>

          <div class="form-hours space-y-4 flex flex-col">
            <label for="hours" class="font-bold text-lg">Weight per package</label>
            <input
              type="range"
              name="hours"
              id="hours"
              class="devs form-range bg-gray-100 border-black border-2 h-6 w-3/4"
              min="0"
              max="120"
              v-model.number="hoursSliderValue"
            />
            <p class="hours-value text-lg font-bold">{{ hoursSliderValue }} oz</p>
          </div>

          <div class="form-days space-y-4 flex flex-col">
            <label for="days" class="font-bold text-lg"
              >How many days per week do you need service?</label
            >
            <input
              type="range"
              name="days"
              id="days"
              class="devs w-3/4"
              min="0"
              max="7"
              v-model.number="daySliderValue"
            />
            <p class="days-value text-lg font-bold">{{ daySliderValue }} Days</p>
          </div>

          <strong class="form-total-title">Total:</strong>
          <p class="form-total text-2xl font-bold">
            ${{ Math.floor((devSliderValue * .55) * (hoursSliderValue * daySliderValue)) }}
             /month
          </p>

          <input
            type="button"
            value="Get Quote"
            class="rounded-full bg-blue-600 text-white b-0 hover:bg-blue-500 shadow-lg hover:shadow-xl py-2 md:w-1/2 cursor-pointer"
          />
        </form>
      </div>

      <div class="flex flex-col text-left pt-32 md:pt-0 justify-center md:w-1/2 px-8">
        <h3
          class="text-6xl font-bold flex-start"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Get a price and start shipping today
        </h3>

        <p
          class="text-xl text-center md:text-left mt-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Our fleet of transit vans are ready to handle your last minute packages
        </p>
      </div>
    </div>
  </div>
</template>
