<template>
  <div class="hero-img">
    <img class="mana white" src="../assets/img/mana-white.png" alt="">
    <img class="mana blue" src="../assets/img/mana-blue.png" alt="">
    <img class="mana black" src="../assets/img/mana-black.png" alt="">
    <img class="mana red" src="../assets/img/mana-red.png" alt="">
    <img class="mana green" src="../assets/img/mana-green.png" alt="">
  </div>
</template>


<script>
export default {
  setup() {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
.hero-img {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pentacle_on_white.svg/1200px-Pentacle_on_white.svg.png);
  background-position: center;
  background-size: cover;
  height: 100px;
  width: 100px;
}

.mana {
  height: 35px;
  width: 35px;
  position: relative;
  cursor: pointer;
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