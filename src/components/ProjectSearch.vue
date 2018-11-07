<template>
  <div class="search-bar">
    <form id="search-input">
      <label for="projectKeyword">search all projects</label>
      <input name="projectKeyword" id="projectKeyword" type="text">
    </form>
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
    }
  }
}


</style>
