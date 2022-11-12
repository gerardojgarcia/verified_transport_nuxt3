<script>
import AppHeaderButton from "./AppHeaderButton";
export default {
  name: "AppHeader",
  components: {AppHeaderButton}
}
</script>

<template>

      <header class="w-full flex flex-row justify-evenly items-center py-6 fixed  backdrop-blur-xl">
        <img src="/imgs/verifiredlogo.png" alt="icon" class="icon">
<AppNav/>
        <AppHeaderButton/>
      </header>




</template>

<style scoped>

.icon {
  width: 10rem;
}

</style>