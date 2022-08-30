<template>

  <div class="card selectable text-dark bg-light text-start mt-4 eventCard shadow">
    <div>
      <img class="img-fluid" :src=card.image_uris.small>
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