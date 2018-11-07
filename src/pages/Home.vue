<template>
  <main>
    <div id="work" class="tile">
      <p class="summary">Work</p>
      <RouterLink to="/work">
        <img src="../assets/categories/code.jpg" alt="code">
      </RouterLink>
    </div>
    <div id="play" class="tile">
      <RouterLink to="/play">
        <img src="../assets/categories/nature.jpg" alt="nature">
        <p class="summary">Play</p>
      </RouterLink>
    </div>
    <div id="thoughts" class="tile">
      <RouterLink to="/thoughts">
        <img src="../assets/categories/thinker.jpg" alt="thinker">
        <p class="summary">Thoughts</p>
      </RouterLink>
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
  grid-template-columns: 1fr 1fr 1fr;
}

.tile {
  border: 1px solid black;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin: 10px;

  &:hover {
    opacity: 50%;
    background-color: black;
  }
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;


}

.summary {
  color: white;
  text-shadow: 1px 1px 1px white;
  position: absolute;
  top: 25%;
  left: 40%;
}

/* a {
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
} */

</style>
