<script>
export default {
  name: "AppNav",

  data(){
    return {
      navLinks: [
          'Home',
          'Quote',
          'About'

      ]
    }
  }
}
</script>

<template>
<div>
  <nav>
    <ul class="flex flex-row">
    <li><NuxtLink to="/">{{ navLinks[0] }}</NuxtLink></li>
    <li><NuxtLink to="/quote">{{ navLinks[1] }}</NuxtLink></li>
    <li><NuxtLink to="/about">{{ navLinks[2]}}</NuxtLink></li>
    </ul>
  </nav>
</div>
</template>

<style scoped>
li {
  margin-right: 1rem;
  transition:all ease-in;
  transition-duration: 200ms;
}
li:hover {
  color: red;

}


</style>