<template>
  <header class="fixed-top">
    <Navbar />
  </header>
  <section class="container-fluid hero-img">
    <div class="row">
      <div class="col-8 fixed-bottom mb-3 account-set">
        <AccountForm />
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState";
export default {
  name: "Account",
  setup() {
    const router = useRouter();
    const route = useRoute();

    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      cover: computed(() => `url(${AppState.account.coverImg?.picture})`),
    };
  },
};
</script>

<style scoped lang="scss">
img {
  max-width: 100px;
}



.hero-img {
  background-image: url(https://www.hipstersofthecoast.com/wp-content/uploads/2020/06/14.De-Ro-Mountain.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
}

.account-set {
  margin: auto;
}
</style>
