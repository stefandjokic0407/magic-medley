<template>

<div>{{comment.name}}</div>

</template>

<script>
import { Card } from "../models/Card";


export default {
  props: { type: Card, required: true},


setup() {

  return {

  };

  }
}
</script>

<style> 

</style>