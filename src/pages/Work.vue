<template>
  <main>
    <div>
      <h2>Project info coming soon!</h2>
    </div>
    <div class="about">
        <div class="image"></div>
        <div class="bio">
          A technology enthusiast, math inquisitor, competitive powerlifter, &amp; BJJ white belt, who loves camping and barbecuing, travels at random, does puzzles competitively, and follows football ardently.
        
          
          <div class="emoji">
            💻&nbsp; 📈&nbsp; 🏋️&nbsp; 🥋&nbsp; 🏔&nbsp; 🍖&nbsp; 🌆&nbsp; 🏈
          </div>
        </div>
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
  grid-template-columns: 70% 30%;
}

$max-width: 230px;
$margin-bottom: 40px;

.about {
  background-color: var(--black);
  color: var(--white);

  .image {
    width: 180px;
    max-width: $max-width;
    height: 180px;
    background-size: cover;
    background-image: url(../assets/work/me-v1.png);
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 50%;
    overflow: hidden;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%); /* For Webkit browsers */
    filter: gray; /* For IE 6 - 9 */
    transition: all .6s ease;
    -webkit-transition: all .6s ease; /* Fade to color for Chrome and Safari */
    margin-bottom: $margin-bottom;

    &:hover {
      filter: grayscale(0%);
      -webkit-filter: grayscale(0%);
    }
  }

  .bio {
    margin-bottom: $margin-bottom;
    max-width: $max-width;
    line-height: 2rem;
    font-size: 1rem;

    .emoji {
      font-size: 1.6rem;
      padding-top: 30px;

      /* @include media("retina2x") {
        font-size: 2.2rem;
      } */
    }
  }

  /* @include media('>small', '<=medium') {
    .bio {
      .emoji {
        font-size: 2.0rem;
        padding-top: 10px;
      }
    }
  }

  @include media('<=small') {
    .bio {
      line-height: 2.0rem;
      font-size: 1.4rem;

      .emoji {
        font-size: 1.8rem;
        padding-top: 10px;
      }
    }
  } */

  /* @include media('<=medium') {
    text-align: center;
    margin-bottom: 0px;

    .image {
      margin: 0 auto $margin-bottom auto;
    }

    .bio {
      margin: 0 auto;
    }
  } */
}


</style>
