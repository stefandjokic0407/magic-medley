<template>

<div class="col-6">
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

</style>