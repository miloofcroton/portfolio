<template>
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
      <p>
        I strive to work in no-ego, productive environments on projects that push the needle. I am capable in a number of technologies, thanks to a curious mind, and have a solid foundation in math and science. Outside of technical expertise, I have a background in working on teams in high stress situations and communication in the public sector.
      </p>

      <img class="tech" src="../assets/tech/aws2.png" alt="aws">
      <img class="tech" src="../assets/tech/google.png" alt="google">
      <img class="tech" src="../assets/tech/react.png" alt="react">
      <img class="tech" src="../assets/tech/vue.png" alt="vue">
      <img class="tech" src="../assets/tech/javascript.png" alt="javascript">
      <img class="tech" src="../assets/tech/python.png" alt="python">
      <img class="tech" src="../assets/tech/ruby.png" alt="ruby">
      <img class="tech" src="../assets/tech/postgres.png" alt="postgres">
      <img class="tech" src="../assets/tech/mongo.png" alt="mongo">

      <p>
        A science and technology enthusiast, math inquisitor, competitive powerlifter, &amp; BJJ white belt, who loves camping and barbecuing, travels at random, does puzzles competitively, and follows football ardently.
      </p>

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
</template>

<script>

export default {

};

</script>

<style scoped lang="postcss">

$max-width: 230px;
$margin-bottom: 40px;

.tech {
  width: 36px;
  margin: 5px;
}

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
        color: var(--darkgreen);
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
      font-size: 26px;
      color: var(--darkgreen);
    }
  }
}

</style>
