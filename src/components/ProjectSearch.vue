<template>
  <div class="search-bar">
    <form id="search-input">
      <label for="projectKeyword">search all projects</label>
      <input name="projectKeyword" id="projectKeyword" type="text">
    </form>
    <ul>
      <ProjectSearchCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        :selected="selected"
        :onSelect="onSelect"      
      >
      </ProjectSearchCard>
    </ul>
  </div>
</template>

<script>

import ProjectSearchCard from './ProjectSearchCard';

export default {

  components: {
    ProjectSearchCard
  },
  props: {
    projects: Array,
    selected: Object,
    onSelect: Function
  }

};

</script>

<style scoped lang="postcss">

.search-bar {
  display: grid;
  grid-template-rows: 10% auto;

  border: 1px solid black;

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


</style>
