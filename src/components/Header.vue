<template>
  <header class="header">
    <h1>Jack Toumey</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>

export default {

};

</script>

<style scoped>

a {
  color: black;
  background-color: var(--darkgreen);
  margin: 8px;
  text-decoration: none;
  padding: 6px;
  border: 1px solid var(--black);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

a:hover {
  background-color: var(--lightgreen);
}

</style>
