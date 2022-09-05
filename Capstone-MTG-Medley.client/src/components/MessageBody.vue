<template>
  <div><b>{{ message.creator.name }}</b>: {{ message.body }} </div>
</template>



<script>
export default {
  props: {
    message: { type: Object, required: true }
  },

  setup() {

    return {};
  },
};
</script>



<style>
</style>