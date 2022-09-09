<template>


  <!-- SECTION Color Wheel -->
  <section class="col-3 d-flex justify-content-center">
    <div class="hero-img">
      <img @click="sortColor" class="mana white" src="../assets/img/mana-white.png" alt="">
      <img @click="sortColor(blue)" class="mana blue" src="../assets/img/mana-blue.png" alt="">
      <img @click="sortColor(black)" class="mana black" src="../assets/img/mana-black.png" alt="">
      <img @click="sortColor(red)" class="mana red" src="../assets/img/mana-red.png" alt="">
      <img @click="sortColor(green)" class="mana green" src="../assets/img/mana-green.png" alt="">
    </div>
  </section>
</template>


<script>
import { ref } from 'vue';

export default {
  setup() {
    let color = ref('')
    return {
      color,

      sortColor() {
        // TODO finish this function
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.hero-img {
  background-image: url(https://images.squarespace-cdn.com/content/5c71ee1f94d71a195e53ffc4/1554240806352-IDUTDZSPAS1RKO5BH5H0/mtg-wizards-colors.jpg?content-type=image%2Fjpeg);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.mana {
  height: 35px;
  width: 35px;
  position: relative;
  cursor: pointer;
  filter: brightness(55%);
}

.mana:hover {
  transform: scale(1.15);
  filter: brightness(100%);
}

.white {
  top: -5px;
  left: 32px;
}

.blue {
  top: 20px;
  left: 34px;
}

.black {
  top: 28px;
  left: 55px;
}

.red {
  top: 28px;
  right: 26px;
}

.green {
  bottom: 50px;
  right: 4px;
}
</style>