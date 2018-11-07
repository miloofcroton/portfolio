<template>
  <div class="search-bar">
    <label for="project">
      search all projects
      <input name="project" type="text">
    </label>
    <ul>
      <li>
        project 1
        <p>
          brief summary brief summary brief summary brief summary
        </p>
      </li>
      <li>
        project 2
        <p>
          brief summary brief summary brief summary brief summary
        </p>
      </li>
      <li>
        project 3
        <p>
          brief summary brief summary brief summary brief summary
        </p>
      </li>
    </ul>
  </div>
</template>

<script>


export default {

};

</script>

<style scoped lang="postcss">

.search-bar {
  display: grid;
  grid-template-rows: 10% auto;

  border: 1px solid black;

  label {
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
    }
  }
}


</style>
