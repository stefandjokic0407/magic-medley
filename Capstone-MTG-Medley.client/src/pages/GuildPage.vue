<template>
  <header>
    <Navbar />
  </header>
  <section class="row">
    <div class="col-md-4">
      Guild information
    </div>
    <div class="col-md-3 offset-md-5 d-flex flex-column">
      <p class="p-0">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChat"
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
          <form id="form" @submit="handleSubmit()">
            <input v-model="query" type="text" placeholder="Send Message" />
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

export default {

  setup() {
    const query = ref('')

    const user = AppState.account

    function sendMessage() {

      // const socket = io();

      // socket.on('count', function (data) {
      //   document.getElementById('user-count').innerHTML = data
      //   console.log(data);
      // })

      // socket.on('message', function (data) {
      //   document.getElementById('chat').append('<div><b>' + data.user + '</b>: ' + data.message + '</div>');
      // });
    }

    onMounted(() => {
      sendMessage()
    })
    return {
      query,
      user: computed(() => AppState.account),

      handleSubmit() {
        const socket = io()
        let message = query.value
        socket.emit('message', {
          user: user || 'Anonymous',
          message: message
        });
        console.log(message);
        message = ref('')
      }


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