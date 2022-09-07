<template>
  <header>
    <Navbar />
  </header>

  <!-- NOTE x-Scrollable guild cards with snap -->
  <section class="row guild-cards-container">
    <div class="col-md-4 my-4" v-for="g in guilds" :key="g.id">
      <GuildCard :guild="g" />
    </div>
  </section>

  <section class="row">
    <div class="col-md-12 text-center">
      <div class="row justify-content-between mt-4">
        <div class="col-md-3">
          <!-- <button
            class="btn fs-3"
            title="Guild Faqs"
            data-bs-target="#guildfaq-modal"
            data-bs-toggle="modal"
          >
            GUILD FAQS
          </button>
          <GuildFaq /> -->

          <button
            class="btn fs-3"
            type="button"
            title="Guild Faqs"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Guild FAQ's
          </button>
        </div>
        <div class="col-12 collapse" id="collapseExample">
          <div class="card card-body m-2">
            <h3 class="text-start">Choose Your Guild</h3>
            <div class="d-flex flex-column align-items-center">
              <img
                class="img-fluid"
                src="https://imgur.com/ONxZ8bm.png"
                alt="guild-img"
                title="guild-img"
                height="400px"
                width="400px"
              />
              <img
                class="img-fluid"
                src="https://i.pinimg.com/originals/19/8d/b5/198db572ea3cb88445e5f284f3c7aa0a.jpg"
                alt="guild-desc-img"
                title="guild-desc-img"
              />
            </div>
          </div>
        </div>
        <!-- NOTE this was to create a guild -->
        <!-- <div class="col-md-3">
          <div class="text-end">
            <button class="btn" title="Create Guild" data-bs-toggle="modal" data-bs-target="#guild-modal">
              <i class="mdi mdi-plus fs-3"></i>
              <span class="fs-5">CREATE GUILD</span>
            </button>
            <GuildForm />
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { io } from "socket.io-client";
import { AppState } from "../AppState";
import { onMounted, ref } from "vue";
import { logger } from "../utils/Logger";
import { accountService } from "../services/AccountService";
import { guildsService } from "../services/GuildsService";
import GuildCard from "../components/GuildCard.vue";
import GuildFaq from "../components/GuildFaq.vue";
import GuildForm from "../components/GuildForm.vue";
import Pop from "../utils/Pop";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const message = ref("");

    const user = AppState.account;

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
        await guildsService.getGuilds();
      } catch (error) {
        logger.error("getting guilds", error);
        Pop.error(error);
      }
    }

    async function changePage() {
      const member = AppState.members.find(
        (m) => m.accountId == AppState.account.id
      );
      if (member) {
        router.push({
          name: "GuildDetails",
          params: { guildId: member.guildId },
        });
      } else {
        return;
      }
    }

    onMounted(() => {
      // sendMessage()
      getGuilds();
      changePage();
    });
    return {
      message,
      user: computed(() => AppState.account),
      message: computed(() => AppState.messages),
      guilds: computed(() => AppState.guilds),
      isMember: computed(() => {
        if (AppState.members.find((m) => m.accountId == AppState.account.id)) {
          return true;
        }
        return;
      }),

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
    };
  },
  components: { GuildForm, GuildCard, GuildFaq },
};
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

.guild-cards-container {
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  max-width: 100vw;
  overflow-x: scroll;
  > div {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
}
</style>
