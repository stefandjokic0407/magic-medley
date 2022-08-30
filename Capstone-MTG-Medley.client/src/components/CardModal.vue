<template>

<div>
  <h1>{{card}}</h1>
</div>

</template>

<script>
import { Card } from "../models/Card";


export default {
  props: { card: {type: Card, required: true}},



setup() {
  return {
    
  };

  }
}
</script>

<style> 

</style>