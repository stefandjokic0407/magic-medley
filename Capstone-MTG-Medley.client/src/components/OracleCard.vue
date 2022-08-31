<template>

{{oracleCard.name}}

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