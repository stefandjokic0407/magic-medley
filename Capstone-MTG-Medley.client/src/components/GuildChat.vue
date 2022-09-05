<template>
  <div>
    <button class="btn btn-outline m-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChat"
      aria-expanded="false" aria-controls="collapseChat">
      Chat with other {{ activeGuild.name }} members
    </button>
    <div class="collapse" id="collapseChat">
      <div class="card card-body mb-3">
        <div>
          <h3>{{ activeGuild.name }}</h3>
          <div><b>Guild Members Currently Online:</b><span class="p-2" id="user-count">0</span></div>
        </div>
        <section v-for="m in messages" :key="m.id">
          <MessageBody :message="m" />
        </section>
        <form id="form" @submit.prevent="sendMessage()">
          <div class="input-group">
            <input v-model="editable.body" type="text" placeholder="Send Message" />
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
import { AppState } from '../AppState';
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger';
import { messagesService } from '../services/MessagesService';
import Pop from '../utils/Pop';

export default {
  setup() {
    const editable = ref({})
    const route = useRoute()

    async function getMessages() {
      try {
        await messagesService.getMessages(route.params.guildId)
      } catch (error) {
        logger.error('[getting messages]', error)
        Pop.error(error)
      }
    }

    onMounted(() => {
      getMessages()
    })
    return {
      editable,

      messages: computed(() => AppState.messages),
      activeGuild: computed(() => AppState.activeGuild),

      async sendMessage() {
        try {
          editable.value.guildId = route.params.guildId
          await messagesService.sendMessage(editable.value)
          editable.value = {}
        } catch (error) {
          logger.error('[sending message]', error)
        }
      }


    };
  },
};
</script>



<style>
</style>