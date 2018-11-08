<template>
  <div class="project-panel">
    <ProjectSearch
      :onFilter="handleFilter"
      :onSort="handleSort"
    />
    <ul class="scroll">
      <ProjectCard
        v-for="project in sortedProjects"
        :key="project.title"
        :project="project"
        :selected="selected"
        :onSelect="onSelect"      
      >
      </ProjectCard>
    </ul>
  </div>
</template>

<script>

import ProjectCard from './ProjectCard';
import ProjectSearch from './ProjectSearch';




export default {

  components: {
    ProjectCard, ProjectSearch
  },
  props: {
    selected: Object,
    onSelect: Function
  },
  data() {
    return {
      filter: {
        query: ''
      },
      sort: {
        key: 'date',
        direction: 1,
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
    };
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
    handleSort(sort) {
      this.sort = sort;
    }
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
      const { key, direction } = this.sort;
      return this.filteredProjects
        .slice()
        .sort((a, b) => {
          if(a[key] > b[key]) return 1 * direction;
          if(a[key] < b[key]) return -1 * direction;
          if(a[key] === b[key]) return 0;
        });
    }
  },

  

};

</script>

<style scoped lang="postcss">

.project-panel {
  display: grid;
  grid-template-rows: 15% auto;
  border: 1px solid black;
  max-height: 1000px;

  form {
    border-bottom: 1px solid black;
    margin-top: 10px;
  }


  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    li {
      list-style: none;
      border-bottom: 1px solid black;

      span {
        font-weight: bolder;
      }

      &:hover {
        background-color: var(--lightgreen);
        cursor: pointer;
      }

    }
  }
}

.selected {
  background-color: var(--darkgreen);
}

.scroll {
  overflow: auto;
}


</style>
