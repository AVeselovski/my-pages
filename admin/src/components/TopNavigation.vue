<template>
  <div class="top-navigation">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/ees">Exp. Edu. Skills</router-link>
    <router-link to="/login">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation',
};
</script>

<style scoped>
.top-navigation {
  margin: 30px;
}
</style>
