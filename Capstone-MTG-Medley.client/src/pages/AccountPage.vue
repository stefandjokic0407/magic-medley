<template>
  <div class="about text-center">
    <img :src="account.coverImg" alt="">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <div class="row m-auto">
  <div class="col-3 offset-5"><h2>Edit Account:</h2></div>
  <div class="col-6 m-auto ">
 <AccountForm />
  </div> 
</div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
