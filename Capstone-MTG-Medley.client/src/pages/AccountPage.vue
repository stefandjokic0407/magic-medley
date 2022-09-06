<template>
  <header>
    <Navbar />
  </header>
  <div class="about text-center">
    <!-- <div>
      <img class="img-fluid" :src="account.coverImg">
    </div> -->
    <h1>Welcome {{ account.name }}</h1>
    <img class="profile-pic" :src="account.picture" alt="" width="100" height="100" />
    <p>{{ account.email }}</p>
  </div>

  <div class="row m-auto">
    <div class="col-3 offset-5">
      <h2>Edit Account:</h2>
    </div>
    <div class="col-6 m-auto">
      <AccountForm />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style scoped lang="scss">
img {
  max-width: 100px;
}

.profile-pic {
  border-radius: 50%;
}
</style>
