<template>
  <div>
    <TopNavigation></TopNavigation>
    <router-view></router-view>
  </div>
</template>

<script>
// components
import TopNavigation from '../components/TopNavigation';

export default {
  name: 'Main',
  components: {
    TopNavigation,
  },
};
</script>
