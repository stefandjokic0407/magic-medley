<template>

{{card.name}}
<img class="img-fluid selectable shadow" :src=card.image_uris.normal :alt="card.name">

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