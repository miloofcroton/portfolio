<template>
  <main>
    <div id="work" class="tile">
      <RouterLink to="/work">Link</RouterLink>
      <p>Work</p>
    </div>
    <div id="play" class="tile">
      <RouterLink to="/play">Link</RouterLink>
      <p>Play</p>
    </div>
    <div id="thoughts" class="tile">
      <RouterLink to="/thoughts">Link</RouterLink>
      <p>Thoughts</p>
    </div>
  </main>
</template>

<script>

export default {

};

</script>

<style scoped lang="postcss">

main {
  display: grid;
  margin: 18px;
  grid-template-columns: auto auto auto;
}

.tile {
  border: 1px solid black;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    opacity: 50%;
    background-color: black;
  }
}


#work { background: url(../assets/categories/code.jpg); }
#play { background: url(../assets/categories/nature.jpg); }
#thoughts { background: url(../assets/categories/thinker.jpg); }

/* a {
  object-fit: cover;
} */

a {
  color: black;
  background-color: var(--darkgreen);
  padding: 12px;
  text-decoration: none;
  border: 1px solid var(--black);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  &:hover {
    background-color: var(--lightgreen);
  }
}

</style>
