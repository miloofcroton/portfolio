<template>
  <main>
    <div>
      <h2>Project info coming soon!</h2>
    </div>
    <div class="about">
        <div class="topper">
          <div class="image"></div>
          <div class="contact-info">
            <a href="https://github.com/miloofcroton">
              <font-awesome-icon :icon="['fab', 'github']" />
              miloofcroton
            </a>
            <a href="https://www.linkedin.com/in/jacktoumey/">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
              JackToumey
            </a>
            <a href="https://twitter.com/JackToumey">
              <font-awesome-icon :icon="['fab', 'twitter']" />    
              JackToumey
            </a>
          </div>
        </div>
        <div class="bio">
          I strive to work in no-ego, productive environments on projects that push the needle. I am capable in a number of technologies, thanks to a curious mind, and have a solid foundation in math and science. Outside of technical expertise, I have a background in working on teams in high stress situations and communication in the public sector.


          <br>
          <br>

          A science and technology enthusiast, math inquisitor, competitive powerlifter, &amp; BJJ white belt, who loves camping and barbecuing, travels at random, does puzzles competitively, and follows football ardently.

          <br>
          <br>

          <font-awesome-icon icon="laptop-code" />
          <font-awesome-icon icon="atom" />
          <font-awesome-icon icon="calculator" />
          <font-awesome-icon icon="dumbbell" />
          <font-awesome-icon icon="user-ninja" />
          <font-awesome-icon icon="mountain" />
          <font-awesome-icon icon="fire" />
          <font-awesome-icon icon="city" />
          <font-awesome-icon icon="puzzle-piece" />
          <font-awesome-icon icon="football-ball" />
          
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

  .topper {

    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    
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

    .contact-info {

      margin-left: 10px;

      a {
        text-align: left;
        color: white;
        text-decoration: none;
        display: block;
      }
    }
  }

  .bio {
    margin: 20px;
    line-height: 2rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    svg {
      margin: 5px;
    }
  }

  /* @include media('<=small') {
    .bio {
      line-height: 2.0rem;
      font-size: 1.4rem;
    }
  }

  @include media('<=medium') {
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
