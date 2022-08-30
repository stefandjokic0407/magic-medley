<template>

  <div type="button" data-bs-toggle="modal" :data-bs-target="'#cardModal' + card.id" class="selectable text-dark bg-light text-start mt-4 eventCard shadow">
    <div class="row">
      <div class="col-12">
        <img class="img-fluid selectable shadow" :src=card.image_uris.normal :alt="card.name">
        <div class="col-1">
            </div>
          </div>
        </div>
      </div>
      <Modal :id="'cardModal' + card.id">
        <CardModal :card="card" />
      </Modal>
      
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