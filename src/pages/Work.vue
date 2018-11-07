<template>
  <main>
    <div>
      <h2>Project info coming soon!</h2>
    </div>
    <ProfileSidebar/>
  </main>
</template>

<script>

import ProfileSidebar from '../components/ProfileSidebar.vue';

export default {
  components: {
    ProfileSidebar
  }
};

</script>

<style scoped lang="postcss">

main {
  display: grid;
  grid-template-columns: 70% 30%;
}

</style>
