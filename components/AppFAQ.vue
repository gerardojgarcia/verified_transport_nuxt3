<script>
export default {
  name: "AppFAQ",




}

</script>

<template>
  <!--FAQ section-->
  <section>

<!--FAQ header-->

    <div class="faq-header text-left pl-6 md:pl-60 space-y-2 pt-16 md:pt-40">
        <strong class="faq-title text-3xl font-normal">Frequently Asked Questions</strong>
      <p class="faq-subtitle text-gray-500">If you have anything else you want to ask, reach out to us.</p>

      </div>



      <!--Container for individual questions-->

<div class="faq-card-container flex flex-col px-6  md:grid md:grid-cols-3 md:px-16 md:px-52 pb-16">


  <!--Faq Question card-->
  <div class="faq-card space-y-4 py-16 md:px-8 ">
    <strong class="faq-card-question">How long has your company been in business?</strong>
    <p class="faq-card-answer text-left ">Our company has been in business for over 20 years, providing reliable and cost-effective logistics solutions to businesses of all sizes.</p>



  </div>

  <!--Faq Question card-->
  <div class="faq-card space-y-4 py-16 md:px-8">
    <strong class="faq-card-question">What types of services do you offer?</strong>
    <p class="faq-card-answer">We offer a wide range of services, including transportation, warehousing, distribution, and supply chain management. We are able to handle everything from small package delivery to large-scale logistics projects.</p>



  </div>
  <!--Faq Question card-->
  <div class="faq-card space-y-4 py-16 md:px-8">
    <strong class="faq-card-question">Do you have experience working with international shipments?</strong>
    <p class="faq-card-answer">Yes, we have extensive experience handling international shipments and are familiar with the unique challenges and regulations involved. We have a network of partners and resources in place to ensure that your international shipments are handled smoothly and efficiently.</p>



  </div>
  <!--Faq Question card-->
  <div class="faq-card space-y-4 py-16 md:px-8">
    <strong class="faq-card-question">How do you handle customs and duties for international shipments?</strong>
    <p class="faq-card-answer">We have a team of experts who are well-versed in customs and duties regulations and are able to handle all of the necessary paperwork and documentation for your international shipments. We also have a network of partners in place to help us navigate any challenges that may arise.</p>



  </div>
  <!--Faq Question card-->
  <div class="faq-card space-y-4 py-16 md:px-8">
    <strong class="faq-card-question">Do you offer tracking for shipments?</strong>
    <p class="faq-card-answer">Yes, we offer real-time tracking for all of our shipments so that you can stay informed about the status of your delivery at all times.</p>



  </div>
  <!--Faq Question card-->
  <div class="faq-card space-y-4 py-16 md:px-8">
    <strong class="faq-card-question">Do you offer any guarantees for your services?</strong>
    <p class="faq-card-answer">Yes, we stand behind the quality of our services and offer a 100% satisfaction guarantee. If you are not completely satisfied with the service you receive, please don't hesitate to contact us so that we can make it right.</p>



  </div>




</div>









  </section>
</template>

<style scoped>
.faq-card-question {
  font-size: 1.5rem;
  font-weight: normal;



}

.faq-card-answer {
  font-size: 1rem;
  color: dimgray;
  padding-right: 4rem;
}
</style>