<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="chat-off-canvas" aria-labelledby="offcanvasExampleLabel">
    <div>
      <div class="px-2">
        <button type="button" class="btn-close text-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <div class="text-start"><b>Members Online:</b><span class="px-2" id="user-count">{{activeGuild.members}}</span>
        </div>
        <br>

        <h1 class="text-center">{{ activeGuild.name }}</h1>
      </div>
    </div>
    <div class="offcanvas-body">
      <div v-for="m in messages" :key="m.id">
        <MessageBody :message="m" />
      </div>
      <form class="px-2" id="form" @submit.prevent="sendMessage()">
        <input class="rounded-pill my-2 px-3" v-model="editable.body" type="text" placeholder="Send Message" />
      </form>
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
import { socketService } from '../services/SocketService';
import Pop from '../utils/Pop';

export default {
  setup() {
    const editable = ref({})
    const route = useRoute()

    function joinGuild() {
      socketService.joinGuild('guild-' + route.params.guildId)
    }

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
      joinGuild()
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
.offcanvas {
  max-height: 70vh !important;
  max-width: 70vh !important;
  background-color: rgba(46, 48, 49, 0.5) !important;
  backdrop-filter: blur(10px) !important;
  border-bottom-right-radius: 10px;
}

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
}



.offcanvas-body::-webkit-scrollbar {
  width: 10px;
  margin-right: 10em;
}

.offcanvas-body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 5px;
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