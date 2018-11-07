<template>
  <main>
    <div id="work" class="tile">
      <p>Work</p>
    </div>
    <div id="play" class="tile">
      <p>Play</p>
    </div>
    <div id="thoughts" class="tile">
      <p>Thoughts</p>
    </div>
  </main>
</template>

<script>

export default {

};

</script>

<style scoped>

main {
  display: grid;
  margin: 18px;
  grid-template-columns: auto auto auto;
}

.tile {
  border: 1px solid black;
  background-size: cover;

}

.tile:hover {
  opacity: 50%;
}

#work {
  background: url(../assets/categories/code.jpg);
}
#play {
  background: url(../assets/categories/nature.jpg);
}
#thoughts {
  background: url(../assets/categories/thinker.jpg);
}

</style>
