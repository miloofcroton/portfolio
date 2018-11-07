<template>
  <main>
    <Projects/>
    <ProfileSidebar/>
  </main>
</template>

<script>

import ProfileSidebar from '../components/ProfileSidebar.vue';
import Projects from '../components/Projects.vue';

export default {
  components: {
    ProfileSidebar, Projects
  }
};

</script>

<style scoped lang="postcss">

main {
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 20px;

}

</style>
