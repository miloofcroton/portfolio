<template>
  <footer>
    <a id="surround" href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
      <img id="initial" alt="logo" src="../assets/logo/logo.png">
      <img id="replacement" alt="logo" src="../assets/logo/logo-alt1.png" >
    </a>
    <p>Copyright &copy; 2018. All rights reserved.</p>
    <a href="https://github.com/miloofcroton/portfolio">This website</a> by
    <a href="https://github.com/miloofcroton">me</a>.
  </footer>
</template>

<script>
export default {

};
</script>

<style scoped lang="postcss">

footer {
  color: black;

  p {
    font-weight: bolder;
    margin: 5px auto;
  }
  a {
    font-weight: bolder;
    display: inline-block;
    text-decoration: none;
    color: var(--darkgreen);
  }

  #surround {

    #replacement {
      display: none;
    }
    &:hover img[id="initial"] {
      display: none;
    }
    &:hover img[id="replacement"] {
      display: inline-block;
      cursor: pointer;
    }
    img {
      width: 50px;
      padding-top: 10px;
    }
  }
}

</style>
