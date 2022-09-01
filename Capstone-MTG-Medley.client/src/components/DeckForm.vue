<template>
  <div class="modal fade" id="deck-form" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit" class="row">
          <div class="mb-3 col-12">
            <input v-model="editable.name" required type="text" class="form-control" id="name" aria-describedby="name"
              placeholder="Name of Deck">
          </div>
          <div class="mb-3 col-12">
            <input v-model="editable.picture" required type="url" class="form-control" id="picture"
              placeholder="Cover Image">
          </div>
          <textarea v-model="editable.description" required minlength="3" maxlength="500" rows="8" class=""
            id="description"></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { ref } from "vue";
import { decksService } from "../services/DecksService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({ type: '' })
    return {
      editable,

      async handleSubmit() {
        try {
          await decksService.createDeck(editable.value)
          Pop.success('Deck Created Successfully!')
          Modal.getOrCreateInstance(document.getElementById('deck-form')).hide()
        }
        catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#description {
  width: inherit;
}
</style>