<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" id="deck-form" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit" class="p-2">
          <div class="mb-3 col-12">
            <input v-model="editable.name" required minlength="1" maxlength="50" type="text" class="form-control"
              id="name" aria-describedby="name" placeholder="Name of Deck">
          </div>
          <div class="mb-3 col-12">
            <input v-model="editable.picture" type="url" class="form-control" id="picture" placeholder="Cover Image">
          </div>
          <div class="col-12">
            <textarea v-model="editable.description" maxlength="500" rows="8" id="description"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { ref, watchEffect } from "vue";
import { decksService } from "../services/DecksService.js";
import Pop from "../utils/Pop.js";
import { AppState } from '../AppState.js';

export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      if (!AppState.activeDeck) { return }
      editable.value = { ...AppState.activeDeck }
    })
    return {
      editable,

      async handleSubmit() {
        try {
          if (editable.value.id) {
            await decksService.editDeck(editable.value)
            Pop.success('Deck Edited!')
          } else {
            editable.value.creatorId = AppState.account.id
            await decksService.createDeck(editable.value)
            Pop.success('Deck Created Successfully!')
            Modal.getOrCreateInstance(document.getElementById('deck-form')).hide()
          }
          AppState.activeDeck = {}
        } catch (error) {
          Pop.error('[Editing, Creating Deck]', error)
        }
      },

    }
  }
}
</script>
    // editable.value = {}
    // location.reload()


<style lang="scss" scoped>
#description {
  width: inherit;
}
</style>