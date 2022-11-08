<script>
export default {
  name: "AppButton",
  props: {
    link: String,
    to: String,
  }
}
</script>

<template>
<div>
  <NuxtLink :to=" to " class="header-btn w-24 p-2 px-4 bg-blue-700 text-white rounded-full text-center shadow-md hover:shadow-xl hover:bg-blue-500">
    {{ link }}</NuxtLink>
</div>
</template>

<style scoped>

.header-btn {
  transition-duration: 200ms;
}

</style>