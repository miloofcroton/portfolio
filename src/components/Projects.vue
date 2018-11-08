
<template>
  <div class="projects">
      <ProjectPanel
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

import ProjectPanel from '../components/ProjectPanel.vue';
import ProjectView from '../components/ProjectView.vue';

export default {
  components: {
    ProjectPanel, ProjectView
  },
  data() {
    return {
      filter: {
        query: ''
      },
      sort: {
        sort: 'date',
        direction: 1
      },
      projects: [
        {
          date: new Date(2018, 10, 24),
          title: 'Banana Republic',
          summary: 'The banana empire ipsum, solely devoted to providing me with bananas',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed odio eos odit enim voluptates doloribus, corrupti similique repellat illum nisi, ratione eius magni natus fuga, laudantium minima esse! Provident.',
          tags: ['Node', 'React', 'Express', 'Mongoose', 'MongoDB']
        },
        {
          date: new Date(2018, 10, 21),
          title: 'Chair',
          summary: 'I love chair. Do you really love the chair? Yes. I love chair.',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio amet vel, commodi laborum, molestiae, consequatur similique totam quod neque adipisci voluptatem porro consequuntur aspernatur assumenda facilis nulla voluptates obcaecati eveniet.',
          tags: ['Node', 'Vue', 'Express', 'PostgresSQL']
        },
        {
          date: new Date(2018, 9, 30),
          title: 'Raiders',
          summary: 'Why are the Raiders so bad? :(',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus molestiae perferendis atque, optio quam numquam dignissimos debitis harum id non aperiam veritatis dicta reiciendis tempora eos quia et enim?',
          tags: ['Node', 'Vue', 'MongoDB', 'Mongoose']
        }
      ],
      selectedProject: null
    };
  },
  mounted() {
    this.selectedProject = this.projects[0];
  },
  computed: {
    filteredProjects() {
      const { query } = this.filter;
      if(!query) return this.projects;

      return this.projects.filter(project => {
        return (project.tags.some(tag => tag === query));
      });
    },
    sortedProjects() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'date';
      }

      return this.sortedProjects
        .slice()
        .sort((a, b) => {
          if(a[sort] > b[sort]) return 1 * direction;
          if(a[sort] < b[sort]) return -1 * direction;
          if(a[sort] === b[sort]) return 0;
        });

    }
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
