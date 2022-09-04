<template>
  <header>
    <Navbar />
  </header>
  <section class="row">
    <div class="col-md-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d23118.78595558883!2d-116.30494195831875!3d43.58887719597092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smagic%20the%20gathering!5e0!3m2!1sen!2sus!4v1662323201059!5m2!1sen!2sus"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col-md-3 offset-md-5 d-flex flex-column">
      <p class="p-0">
        <button class="btn btn-outline my-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChat"
          aria-expanded="false" aria-controls="collapseChat">
          Chat with your guild
        </button>
      </p>
      <div class="collapse" id="collapseChat">
        <div class="card card-body my-3">
          <div>
            <h1>GUILD NAME</h1>
            <div><b>Guild Members Currently Online:</b><span class="p-2" id="user-count">0</span></div>
          </div>
          <section class="my-3" id="chat">
            <div><b>Guild User1</b>: This is the guild I'm in</div>
            <div><b>Guild User2</b>: I'm also in this guild</div>
          </section>
          <form id="form" @submit.prevent="sendMessage()">
            <input v-model="message" type="text" placeholder="Send Message" />
            <button>Send</button>
          </form>

        </div>
      </div>
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

    // onMounted(() => {
    //   sendMessage()
    // })
    return {
      message,
      user: computed(() => AppState.account),

      async sendMessage(){
        try {
          await accountService.sendMessage(message)
        } catch (error) {
          logger.error('[sending message]', error)
          Pop.error(error)
        }
      }

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
  }
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