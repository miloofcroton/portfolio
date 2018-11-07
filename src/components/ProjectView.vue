<template>
  <div class="proj-view">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <p>tags: {{ project.tags }}</p>
  </div>
</template>

<script>


export default {

  props: {
    project: Object
  }

};

</script>

<style scoped lang="postcss">

.proj-view {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

h2 {
  margin: 40px;
}

p {
  margin: 10px 100px;
  text-align: left;
}



</style>
