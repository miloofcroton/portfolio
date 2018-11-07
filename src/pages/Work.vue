<template>
  <main>
    <div>
      <h2>Project info coming soon!</h2>
    </div>
    <div class="about">
        <div className="image"></div>
        <div className="bio">
          A technology enthusiast &amp; certified scuba diver, who loves travelling, paints occasionally
          and follows football ardently.
          
          <div className="emoji">
            🤖 &nbsp;🏔&nbsp;🎨&nbsp; ⚽️
          </div>
        </div>
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
  grid-template-columns: 70% 30%;
}

.about {
  background-color: var(--black);
  color: var(--white);
}

</style>
