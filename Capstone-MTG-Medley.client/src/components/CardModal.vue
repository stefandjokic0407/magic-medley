<template>
<div class="card mb-3" style="max-width: 1100px;">
  <div class="row g-0">
    <div class="col-md-6">
      <img :src=card.image_uris.normal class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
       <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
    </div>
  </div>
</div>
</template>

<script>
import { Card } from "../models/Card";


export default {
  props: { card: { type: Card, required: true } },
  
  async function getCardByOracle() {
    try {
      
    } catch (error) {
      logger.error(error)
      Pop.toast(error.message, 'error')
    }
  }
    return {
    };

  }
}
</script>

<style>
</style>