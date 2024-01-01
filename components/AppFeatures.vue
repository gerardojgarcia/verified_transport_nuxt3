<script>
export default {
  name: "AppFeatures",
};
</script>

<template>
  <!--Features Section------------------------------------------------>
  <section id="features" class="mb-8 features py-16">
    <!--flex container-->
    <div
      class="container flex flex-col px-4 h-1/2 mx-auto mt-10 space-y-12 features-box md:space-y-0 md:flex-row"
      data-aos="fade-up"
    >
      <!--What's Different-->

      <div
        class="flex flex-col space-y-12 md:w-1/2 p-8"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about Verified?
        </h2>
        <p class="max-w-sm text-center text-gray-700 md:text-left">
          Verified Logistics provides all the functionality your team needs, without hte
          complexity. Our software is tailor-made for modern digital teams.
        </p>
        <!--image items-->
        <div class="app-features-img overflow-hidden h-80 rounded-xl" data-aos="fade-up" data-aos-delay="550">
          <nuxt-img
            src="/delivery_3.jpg"
            alt="delivery man moving boxes"
            class="shadow-3xl rounded-lg translate-y-54 "
            preload="true"
            width="600px"

          />
        </div>
      </div>

      <!--Numbered List-->
      <div class="flex flex-col space-y-8 md:w-1/2">
        <!--list item 1-->
        <div
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row md:rounded-lg md:shadow-lg p-10"
          data-aos="fade-up"
        >
          <!--heading-->
          <div class="rounded-l-full bg-gray-200 md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-white rounded-full md:py-1">01</div>

              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Track Fleet Wide Progress
              </h3>
            </div>
          </div>

          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Track Fleet Wide Progress
            </h3>
            <p class="text-darkGrayishBlue">
              See how your day-to-day taks fit into the widder vision. Go from tracking
              progress at the milestone level al the way down to the smallest of details.
              Never lose sight of the bigger picture.
            </p>
          </div>
        </div>
        <!--list item 2-->
        <div
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row md:rounded-lg md:shadow-lg p-10"
          data-aos="fade-up"
        >
          <!--heading-->
          <div class="rounded-l-full bg-gray-200 md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>

              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Stay On Top of Time and Miles
              </h3>
            </div>
          </div>

          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Stay On Top of Time and Miles
            </h3>
            <p class="text-darkGrayishBlue">
              See how your day-to-day taks fit into the widder vission. Go from tracking
              progress at the milestone level al the way down to the smallest of details.
              Never lose sight of the bigger picture.
            </p>
          </div>
        </div>
        <!--list item 3-->
        <div
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row md:rounded-lg md:shadow-lg p-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <!--heading-->
          <div class="rounded-l-full bg-gray-200 md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>

              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Experienced Drivers = Exceptional Service
              </h3>
            </div>
          </div>

          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Experienced Drivers = Exceptional Service
            </h3>
            <p class="text-darkGrayishBlue">
              We are a multi-generational business with over a century's worth of
              transport experience. We know what to look for when we select our drivers.
              We only want the best so you only get the best.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.app-features-img::after {
  border: 1px solid dodgerblue;
  transform: translateX(4rem);
}
</style>
