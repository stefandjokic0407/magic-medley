<template>
  <div>
    <div class="accordion px-3" id="accordionChat">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button p-2 chat-color d-flex flex-column" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <h3 class="m-0">{{ activeGuild.name }}</h3>
            <div><b>Members Online:</b><span class="p-2" id="user-count">0</span></div>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionChat">
          <div class="accordion-body p-3 cs-height chat">
            <div v-for="m in messages" :key="m.id">
              <MessageBody :message="m" />
            </div>
          </div>
          <form class="px-2 chat-color" id="form" @submit.prevent="sendMessage()">
            <input class="rounded-pill my-2 px-3" v-model="editable.body" type="text" placeholder="Send Message" />
          </form>
        </div>
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



<style scoped lang="scss">
input {
  width: 100%;
}

.cs-btn {
  border-radius: 50%;
}

.chat {
  background-color: #242526;
  height: 50vh;
  overflow-y: scroll;
  color: rgb(215, 215, 215);
  position: relative;
}

.chat::-webkit-scrollbar {
  width: 1em;
}

.chat::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.chat::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.chat-color {
  background-color: #242526 !important;
  color: rgb(215, 215, 215) !important;
}

.cs-header {
  border-bottom: none;
  border-top-left-radius: 5% !important;
  border-top-right-radius: 5% !important;
}
</style>