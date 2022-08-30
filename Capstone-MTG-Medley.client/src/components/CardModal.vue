<template>
<div class="card mb-3" style="max-width: 1100px;">
  <div class="row g-0">
    <div class="col-md-6">
      <img :src=card.image_uris.normal class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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