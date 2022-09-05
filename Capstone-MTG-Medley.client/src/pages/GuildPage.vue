<template>
  <header>
    <Navbar />
  </header>
  <section class="row">
    <div class="col-md-4">
      <Map />
    </div>
    <div class="col-md-12 text-center">
      <div class="row justify-content-between mt-4">
        <div class="col-md-3">
          <button class="btn fs-3" title="Guild Faqs" data-bs-target="#guildfaq-modal" data-bs-toggle="modal">
            GUILD FAQS
          </button>
          <GuildFaq />
        </div>
        <div class="col-md-3">
          <div class="text-end">
            <button class="btn" title="Create Guild" data-bs-toggle="modal" data-bs-target="#guild-modal">
              <i class="mdi mdi-plus fs-3"></i>
              <span class="fs-5">CREATE GUILD</span>
            </button>
            <GuildForm />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2" v-for="g in guilds" :key="g.id">
      <GuildCard :guild="g" />
    </div>
  </section>
</template>

<script>
import { computed } from '@vue/reactivity';
import { io } from 'socket.io-client';
import { AppState } from '../AppState';
import { onMounted, ref } from 'vue';
import { logger } from '../utils/Logger';
import { accountService } from '../services/AccountService';
import { guildsService } from '../services/GuildsService';
import GuildCard from '../components/GuildCard.vue';
import GuildFaq from '../components/GuildFaq.vue';
import GuildForm from '../components/GuildForm.vue';
import Pop from '../utils/Pop';

export default {

  setup() {
    const message = ref('')

    const user = AppState.account

    // function sendMessage() {

    //   // const socket = io();

    //   // socket.on('count', function (data) {
    //   //   document.getElementById('user-count').innerHTML = data
    //   //   console.log(data);
    //   // })

    //   // socket.on('message', function (data) {
    //   //   document.getElementById('chat').append('<div><b>' + data.user + '</b>: ' + data.message + '</div>');
    //   // });
    // }

    async function getGuilds() {
      try {
        await guildsService.getGuilds()
      } catch (error) {
        logger.error('getting guilds', error)
        Pop.error(error)
      }
    }

    onMounted(() => {
      // sendMessage()
      getGuilds()
    })
    return {
      message,
      user: computed(() => AppState.account),
      message: computed(() => AppState.messages),
      guilds: computed(() => AppState.guilds),

      // async sendMessage() {
      //   try {
      //     await accountService.sendMessage(message)
      //   } catch (error) {
      //     logger.error('[sending message]', error)
      //     Pop.error(error)
      //   }
      // }

      // handleSubmit() {
      //   const socket = io()
      //   let message = query.value
      //   socket.emit('message', {
      //     user: user || 'Anonymous',
      //     message: message
      //   });
      //   console.log(message);
      //   message = ref('')
      // }


    }
  },
  components: { GuildForm, GuildCard, GuildFaq }
}
</script>

<style scoped lang="scss">
input,
button {
  width: 100%;
  background: #fff;
  border: none;
}

button:hover {
  cursor: pointer;
  background: #ddd;
}
</style>