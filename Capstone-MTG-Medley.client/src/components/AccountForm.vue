<template>

<form class="card account-form font bg-dark" @submit.prevent="handleSubmit">
    <div class="card-body text-start">
      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="editable.name" >
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control" v-model="editable.picture"  placeholder="picture">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" class="form-control" v-model="editable.email" >
      </div>
      <div>
        <button type="submit" class="btn btn-outline text-light w-100 mt-2">Save</button>
      </div>
    </div>
  </form>

</template>

<script>
import { watchEffect } from "vue";
import { AppState } from "../AppState";
import { accountService } from "../services/AccountService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {



setup() {

const editable = ref({})

watchEffect(() => {
  if (!AppState.account) { return }
  editable.value = {...AppState.account}
})

  return {
    editable,
    async handleSubmit() {
      try {
        await accountService.edit(editable.value)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    }
  };

  }
}
</script>

<style> 

</style>