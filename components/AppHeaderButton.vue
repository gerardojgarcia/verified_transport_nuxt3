<script>
export default {
  name: "AppHeaderButton"
}
</script>

<template>
<div>
  <NuxtLink to="/quote" class="header-btn hidden md:inline w-24 p-2 bg-blue-700 text-white rounded-full text-center shadow-md hover:shadow-xl hover:bg-blue-500">Get Started</NuxtLink>
</div>
</template>

<style scoped>

.header-btn {
  transition-duration: 200ms;
}

</style>