<template>
  <router-link :to="{ name: 'Profile', params: { profileId: member.accountId } }">
    <img class=" profile-pic m-1" :src="member.profile.picture" alt="profile-picture" :title="member.profile.name"
      height="50" width="50">
  </router-link>
</template>



<script>
export default {
  props: {
    member: { type: Object, required: true }
  },

  setup() {
    return {};
  },
};
</script>



<style scoped lang="scss">
.profile-pic {
  border-radius: 50%;
}
</style>