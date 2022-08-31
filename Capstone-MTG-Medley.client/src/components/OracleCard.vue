<template>


<div class="col-12 magicCard selectable text-start border py-2">
{{oracleCard.set_name}} 
{{oracleCard.prices?.usd}}
</div>

</template>

<script>
import { Card } from "../models/Card";


export default {
  props: { oracleCard: {type: Card, required: true}},


setup() {

  return {};

  }
}
</script>

<style> 

/* .magicCard:hover {

} */

</style>