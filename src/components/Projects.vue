
<template>
  <div class="projects">
      <ProjectSearch
        :projects="projects" 
        :selected="selectedProject"
        :onSelect="handleSelect"
      />
      <ProjectView
        :project="selectedProject"
      /> 
  </div>
</template>

<script>

import ProjectSearch from '../components/ProjectSearch.vue';
import ProjectView from '../components/ProjectView.vue';

export default {
  components: {
    ProjectSearch, ProjectView
  },
  data() {
    return {
      selectedProject: null,
      projects: [
        {
          title: 'Banana Republic',
          summary: 'The banana empire ipsum, solely devoted to providing me with bananas',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed odio eos odit enim voluptates doloribus, corrupti similique repellat illum nisi, ratione eius magni natus fuga, laudantium minima esse! Provident.'
        },
        {
          title: 'Chair',
          summary: 'I love chair. Do you really love the chair? Yes. I love chair.',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio amet vel, commodi laborum, molestiae, consequatur similique totam quod neque adipisci voluptatem porro consequuntur aspernatur assumenda facilis nulla voluptates obcaecati eveniet.'
        },
        {
          title: 'Raiders',
          summary: 'Why are the Raiders so bad? :(',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus molestiae perferendis atque, optio quam numquam dignissimos debitis harum id non aperiam veritatis dicta reiciendis tempora eos quia et enim?'
        }
      ] 
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
