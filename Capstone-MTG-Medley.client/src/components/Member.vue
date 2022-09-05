<template>
  <img class="profile-pic m-1" :src="member.profile.picture" alt="profile-picture" :title="member.profile.name"
    height="50" width="50">
</template>



<script>
export default {
  props: {
    member: {type: Object, required: true}
  },

setup() {
  return {};
},
};
</script>



<style>
</style>