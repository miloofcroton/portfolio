
<template>
  <div class="projects">
      <ProjectSearch/>
      <ProjectView/> 
  </div>
</template>

<script>

import ProjectSearch from '../components/ProjectSearch.vue';
import ProjectView from '../components/ProjectView.vue';

export default {
  components: {
    ProjectSearch, ProjectView
  }
};

</script>

<style scoped lang="postcss">

.projects {
  display: grid;
  grid-template-columns: 25% 75%;
}

</style>
