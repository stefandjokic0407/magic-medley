<template>
  <form class="card account-form font glass-card" @submit.prevent="handleSubmit">
    <div class="card-body text-start">
      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="editable.name" />
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control" v-model="editable.picture" placeholder="picture" />
      </div>
      <div>
        <label for="coverImg">Cover Image:</label>
        <input type="url" class="form-control" v-model="editable.coverImg" placeholder="Cover Image" />
      </div>
      <div>
        <label for="location">Location:</label>
        <input type="text" class="form-control" v-model="editable.location" placeholder="Location" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" class="form-control" v-model="editable.email" />
      </div>
      <div>
        <label for="bio">Bio:</label>
        <textarea class="form-control" cols="30" rows="6" placeholder="Write A Bio..." v-model="editable.bio"></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-outline text-light w-100 mt-2">
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { AppState } from "../AppState";
import { router } from "../router.js";
import { accountService } from "../services/AccountService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    // const router = useRoute();
    const editable = ref({});

    watchEffect(() => {
      if (!AppState.account) {
        return;
      }
      editable.value = { ...AppState.account };
    });

    return {
      editable,
      // account: computed(() => AppState.account),
      async handleSubmit() {
        try {
          await accountService.edit(editable.value);
          router.push({
            name: "Profile",
            params: { profileId: editable.value.id },
          });
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
.glass-card {
  background: rgb(54 52 75 / 38%);
  backdrop-filter: blur(4px);
  border: solid #8d8b8b1f;
  border-radius: 8px;
  color: #f2e9e4 !important;
}
</style>
