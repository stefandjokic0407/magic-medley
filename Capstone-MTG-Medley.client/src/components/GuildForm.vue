<template>
  <div class="modal fade" id="guild-modal" tabindex="-1" aria-labelledby="guild-modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Choose Your Guild</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          <form @submit.prevent="createGuild()">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12 my-2">
                  <label for="" class="form-label m-0">Choose Your Guild</label>
                  <select name="type" class="form-control selectable m-0" v-model="editable.name" required>
                    <option value=""></option>
                    <option value="Azorius Senate">Azorius Senate</option>
                    <option value="House Dimir">House Dimir</option>
                    <option value="Cult of Rakdos">Cult of Rakdos</option>
                    <option value="Selesnya Conclave">Selesnya Conclave</option>
                    <option value="Orzhov Syndicate">Orzhov Syndicate</option>
                    <option value="Izzet League">Izzet League</option>
                    <option value="Golgari Swarm">Golgari Swarm</option>
                    <option value="Boros Legion">Boros Legion</option>
                    <option value="Simic Combine">Simic Combine</option>
                    <option value="Gruul Clans">Gruul Clans</option>
                  </select>
                </div>
                <label class="form-label">Background Image</label>
                <input type="url" class="form-control" v-model="editable.coverImg" placeholder="Cover Image" />
                <label class="form-label">Guild Card Image</label>
                <input type="url" class="form-control" v-model="editable.cardImg" placeholder="Card Image" />
                <label class="form-label">Guild Background</label>
                <textarea type="text" class="form-control" v-model="editable.background" rows="10"
                  placeholder="Guild Background"></textarea>
                <button type="submit" class="btn btn-primary col-md-10 offset-md-1 mt-5 mb-2"
                  data-bs-dismiss="modal">Join Guild</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { ref } from 'vue';
import { router } from '../router';
import { guildsService } from '../services/GuildsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {

  setup() {
    const editable = ref({})

    return {
      editable,

      async createGuild() {
        try {
          await guildsService.createGuild(editable.value)
          Pop.toast('Guild Created')
        } catch (error) {
          logger.error('[creating guild]', error)
          Pop.error(error)
        }
      }
    };
  },
};
</script>



<style scoped lang="scss">

</style>