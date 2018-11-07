<template>
  <div class="search-bar">
    <form id="search-input">
      <label for="projectKeyword">search all projects</label>
      <input name="projectKeyword" id="projectKeyword" type="text">
    </form>
    <ul>
      <li
        :class="{ selected: project === selected }"
        v-for="project in projects"
        :key="project.title"
        @click="handleClick"
      >
        <span>{{ project.title }}</span>
        <p>{{ project.summary }}</p>
      </li>
    </ul>
  </div>
</template>

<script>


export default {

  props: {
    projects: Array,
    selected: Object,
    onSelect: Function
  },
  methods: {
    handleClick() {
      this.onSelect(this.project);
    }
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
