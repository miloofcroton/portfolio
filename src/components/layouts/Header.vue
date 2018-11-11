<template>
  <header class="header">
    <h1>Jack Toumey</h1>
    <p class="subtitle" ref="title"></p>
    <nav>
      <RouterLink class='nav-button' to="/">Home</RouterLink>
      <RouterLink class='nav-button' to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>

import scifi from 'scifi';

const TITLES = [
  'hacker',
  'developer',
  'programmer',
  'coder',
  'weightlifter',
  'athlete',
  'team player',
  'Californian',
  'American',
  'Eagle Scout'
];

export default {
  data() {
    return {
      currentTitleIndex: null
    };
  },
  mounted() {
    this.loop = setInterval(() => {
      scifi(this.$refs.title, {
        content: this.getTitle()
      });
    }, 3000);
  },
  methods: {
    getRandomIndex(currentIndex) {
      const nextIndex = Math.floor(Math.random() * TITLES.length);
      if(currentIndex === null) {
        return nextIndex;
      }
      return currentIndex === nextIndex ? this.getRandomIndex(currentIndex) : nextIndex;
    },
    getTitle() {
      this.currentTitleIndex = this.getRandomIndex(this.currentTitleIndex);
      const title = TITLES[this.currentTitleIndex];
      return title;
    }
  },
  beforeDestroy() {
    if(this.loop) {
      clearInterval(this.loop);
    }
  }
};

</script>

<style scoped lang="postcss">

span {
  display: inline;
}

.nav-button {
  color: black;
  background-color: var(--darkgreen);
  margin: 8px;
  text-decoration: none;
  padding: 6px;
  border: 1px solid var(--black);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 18px;


  &:hover {
    background-color: var(--lightgreen);
  }
}


</style>
