<template>
  <div v-if="message.creatorId == account.id" class="row justify-content-end">
    <div class="col-md-8 offset-md-2 rounded user-message my-1">
      <span>
        {{ message.body }}
      </span>
    </div>
  </div>
  <div v-else class="row justify-content-start">
    <div class="col-md-2">
      <img class="profile-pic" :src="message.creator.picture" alt="profile-picture" :title="message.creator.name"
        height="20" width="20">
    </div>
    <div class="col-md-8 my-1 rounded member-message">
      {{ message.body }}
    </div>
  </div>

</template>



<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';

export default {
  props: {
    message: { type: Object, required: true }
  },

  setup() {

    return {
      account: computed(() => AppState.account)
    };
  },
};
</script>



<style scoped lang="scss">
.user-message {
  background-color: #0084ff;
}

.member-message {
  background-color: #3e4042;
}

.profile-pic {
  border-radius: 50%;
}
</style>