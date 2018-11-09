<template>
  <div class="proj-view">
    <h2>{{ project.title }}</h2>
    <p class="description">{{ project.description }}</p>

    <br>

    <div
      v-for="tag in project.tags"
      :key="tag"
      class="tag-box"
    >
      <TechIcon :tag="tag"/>
      <p class="tag">{{ tag }}</p>
    </div>
  </div>
</template>

<script>
import TechIcon from './TechIcon';


export default {
  components: {
    TechIcon
  },
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

.tag-box {
  display: inline-block;
  margin: 10px;
}

.description {
  margin: 10px 100px;
  text-align: left;
}

.tag {
  display: inline;
}



</style>
