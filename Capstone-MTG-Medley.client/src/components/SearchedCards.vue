<template>

  <div class=" selectable text-dark bg-light text-start mt-4 eventCard shadow">
    <div class="row">
      <div class="">
        <img class="img-fluid selectable shadow" :src=card.image_uris.normal :alt="card.name">
        <div>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#cardModal"><i
              class="mdi mdi-plus"></i></button>
          <Modal id="cardModal">
            <CardModal />
          </Modal>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { Card } from "../models/Card";


export default {
  props: { card: { type: Card, required: true } },


  setup() {

    return {

    };

  }
}
</script>

<style>
</style>