<template>
  <form id="search-input">
    <label for="query">search all projects</label>
    <input
      v-model="query"
      @keyup="handleFilterChange"
      name="query" 
      id="query" 
      type="text" 
    >
    <label for="sort">sort by</label>
    <select 
      v-model="sort" 
      v-on:change="handleSortChange"
    >
      <option value="['date', 1]">Date: New to Old</option>
      <option value="['date', -1]">Date: Old to New</option>
      <option value="['title', 1]">Title: A to Z</option>
      <option value="['title', -1]">Title: Z to A</option>
    </select>
  </form>
</template>

<script>


export default {
  props: {
    onSort: Function,
    onFilter: Function
  },
  data() {
    return {
      sort: ['date', 1],
      query: ''
    };
  },
  methods: {
    handleSortChange() {
      this.onSort([this.sort, this.direction]);
    },
    handleFilterChange() {
      const filter = {
        query: this.query,
      };
      this.onFilter(filter);
    }
  }

};

</script>

<style scoped lang="postcss">

label {
  display: block;
}

select {
  background-color: var(--white);
}


</style>
