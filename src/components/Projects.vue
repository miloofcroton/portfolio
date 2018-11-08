
<template>
  <div class="projects">
      <ProjectPanel
        :selected="selectedProject"
        :onSelect="handleSelect"
      />
      <ProjectView
        :project="selectedProject"
      /> 
  </div>
</template>

<script>

import ProjectPanel from '../components/ProjectPanel.vue';
import ProjectView from '../components/ProjectView.vue';

export default {
  components: {
    ProjectPanel, ProjectView
  },
  data() {
    return {
      selectedProject:
        {
          date: new Date(2018, 10, 24),
          title: 'Banana Republic',
          summary: 'The banana empire ipsum, solely devoted to providing me with bananas',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed odio eos odit enim voluptates doloribus, corrupti similique repellat illum nisi, ratione eius magni natus fuga, laudantium minima esse! Provident.',
          tags: ['Node', 'React', 'Express', 'Mongoose', 'MongoDB']
        },
    };
  },
  methods: {
    handleSelect(project) {
      this.selectedProject = project;
    },
  }
};

</script>

<style scoped lang="postcss">

.projects {
  display: grid;
  grid-template-columns: 25% 75%;
}

</style>
