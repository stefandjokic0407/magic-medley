<template>
  <div class="row set-location">
    <!-- SECTION Search bar with checkbox name, type, text -->
    <section class="col-12 mb-5">
      <div class="d-flex flex-row justify-content-around">
        <div class="form-check form-check-inline me-1">
          <input @click="toggleSearch(1)" checked class="form-check-input selectable no-select" type="radio"
            name="inlineRadioSearch" id="inlineRadio1" value="option1">
          <label class="form-check-label  selectable no-select" for="inlineRadio1">Name</label>
        </div>
        <div class="form-check form-check-inline me-1">
          <input @click="toggleSearch(2)" class="form-check-input selectable no-select" type="radio"
            name="inlineRadioSearch" id="inlineRadio2" value="option2">
          <label class="form-check-label selectable no-select" for="inlineRadio2">Type</label>
        </div>
        <div class="form-check form-check-inline me-1">
          <input @click="toggleSearch(3)" class="form-check-input selectable no-select" type="radio"
            name="inlineRadioSearch" id="inlineRadio3" value="option3">
          <label class="form-check-label selectable no-select" for="inlineRadio3">Text</label>
        </div>
      </div>
      <div class="input-group" title="Search">
        <input class="form-control" placeholder="Search your Collection..." type="text" v-model="query" />
        <button class="btn btn-outline-dark" type="submit">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>


    </section>

    <!-- SECTION Colors -->
    <!-- <section class="">
      <div class=" mt-1">
        <h4>Color</h4>
        <div class="">
          <input type="checkbox" class="" @change="filterChange('color', 'u')">
          <label class="form-check-label ps-2">Blue</label><br>
          <input type="checkbox" class="" @change="filterChange('color', 'g')">
          <label class="form-check-label ps-2">Green</label><br>
          <input type="checkbox" class="" @change="filterChange('color', 'w')">
          <label class="form-check-label ps-2">White</label><br>
          <input type="checkbox" class="" @change="filterChange('color', 'r')">
          <label class="form-check-label ps-2 ">Red</label><br>
          <input type="checkbox" class="" @change="filterChange('color', 'b')">
          <label class="form-check-label ps-2">Black</label><br>
          <input type="checkbox" class="" @change="filterChange('color', 'c')">
          <label class="form-check-label ps-2">Colorless</label><br>
        </div>
      </div>
    </section> -->


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
.set-location {
  position: fixed;
  bottom: 25%;
  left: 1%;
  width: 16vw;
}
</style>