<template>
  <header>
    <Navbar />
  </header>

  <!-- NOTE add flex-grow -->
  <div class="row rav-bg">
    <div class="col-12">
      <section class="row">
        <div class="col-md-12 text-center">
          <div class="row justify-content-center mt-4">
            <div class="col-md-8">
              <div>
                <img
                  src="../assets/img/mtg-guilds/guildofrav_mtg.webp"
                  alt=""
                />
              </div>
            </div>

            <!-- NOTE x-Scrollable guild cards with snap -->
            <section class="col-10 rounded guild-container-bg">
              <div class="row align-items-center">
                <div class="col-1 text-center" @click="scrollLeft">
                  <i class="button-style mdi mdi-chevron-left"></i>
                </div>
                <div class="col-10">
                  <div class="row guild-cards-container">
                    <div class="col-md-3 my-4" v-for="g in guilds" :key="g.id">
                      <GuildCard :guild="g" />
                    </div>
                  </div>
                </div>
                <div class="col-1 text-center" @click="scrollRight">
                  <i class="button-style mdi mdi-chevron-right"></i>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div class="row">
    <div class="col-12 choose-banner">
      <p class="fs-1 p-2 m-0 text-center"><b>Choose Your Guild</b></p>
    </div>
  </div>

  <div class="row justify-content-center my-3">
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Azorius Senate</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 azo-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Legislation and Law Enforcement</p>
          <p class="p-0 m-0 azo-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Bureaucratic nightmares</p>
          <p class="p-0 m-0 azo-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Human, Vedalken</p>
          <p class="p-0 m-0 azo-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Functionaries, Lawmages, Politicians</p>
        </div>
      </div>
    </div>
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Izzet League</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 izz-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Public Works and Civil Engineering</p>
          <p class="p-0 m-0 izz-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Ka-BOOM!</p>
          <p class="p-0 m-0 izz-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">
            Dragonborn, Genasi, Goblin, Human, Hybrid, Viashino
          </p>
          <p class="p-0 m-0 izz-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Artificers, Assistants, Researchers</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center my-3">
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Boros Legion</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 bor-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Militia and Constabulary</p>
          <p class="p-0 m-0 bor-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">The fun police</p>
          <p class="p-0 m-0 bor-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">
            Aasimar, Goblin, Goliath, Human, Minotaur, Viashino
          </p>
          <p class="p-0 m-0 bor-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Officers, Soldiers, Support</p>
        </div>
      </div>
    </div>
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Orzhov Syndicate</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 orz-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Banks and Churches</p>
          <p class="p-0 m-0 orz-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Organized crime as religion</p>
          <p class="p-0 m-0 orz-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Human, Loxodon, Vampire</p>
          <p class="p-0 m-0 orz-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Bankers, Clergy, Enforcers, Lawyers</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center my-3">
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>House Dimir</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 hou-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Couriers and Archivists</p>
          <p class="p-0 m-0 hou-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Spies and Assassins for hire</p>
          <p class="p-0 m-0 hou-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Human, Vampire, Vedalken</p>
          <p class="p-0 m-0 hou-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Assassins, Librarians, Spies</p>
        </div>
      </div>
    </div>
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Cult of Rakdos</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 cul-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Entertainers and Manual Labor</p>
          <p class="p-0 m-0 cul-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Demonic murder circus</p>
          <p class="p-0 m-0 cul-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Goblin, Goliath, Human, Tiefling</p>
          <p class="p-0 m-0 cul-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Cultists, Miners, Performers</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center my-3">
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Golgi Swarm</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 gol-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Waste Disposal</p>
          <p class="p-0 m-0 gol-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Undercity death cult</p>
          <p class="p-0 m-0 gol-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Elf, Hybrid</p>
          <p class="p-0 m-0 gol-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Brokers, Guides, Necromancers</p>
        </div>
      </div>
    </div>
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Selesnya Conclave</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 sel-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Urban Architecture</p>
          <p class="p-0 m-0 sel-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Hivemind of hippies</p>
          <p class="p-0 m-0 sel-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Centaur, Elf, Human, Loxodon</p>
          <p class="p-0 m-0 sel-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Druids, Farmers, Guardians</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center my-3">
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Gruul Clans</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 gru-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Foresters and Gamekeepers</p>
          <p class="p-0 m-0 gru-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">Anti-urban rioters</p>
          <p class="p-0 m-0 gru-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Centaur, Elf, Goblin, Goliath, Human, Viashino</p>
          <p class="p-0 m-0 gru-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Anarchists, Berserkers, Forest Rangers</p>
        </div>
      </div>
    </div>
    <div class="col-4 bg-white elevation-3 rounded mx-3">
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="fs-3 p-2"><b>Simic Combine</b></p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="p-0 m-0 sim-g rounded py-1">
            <b class="p-3">Official Role</b>
          </p>
          <p class="m-0 p-2">Biologists and Healers</p>
          <p class="p-0 m-0 sim-g rounded py-1">
            <b class="p-3">Actual Role</b>
          </p>
          <p class="m-0 p-2">"Lets combine a lobster and a minotaur"</p>
          <p class="p-0 m-0 sim-g rounded py-1">
            <b class="p-3">Races Role</b>
          </p>
          <p class="m-0 p-2">Human, Elf, Hybrid, Merfolk</p>
          <p class="p-0 m-0 sim-g rounded py-1">
            <b class="p-3">Members Role</b>
          </p>
          <p class="m-0 p-2">Biomancers, Test Subjects</p>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="card card-body m-2">
    <h3 class="text-start">Choose Your Guild</h3>
    <div class="d-flex flex-column align-items-center">
      <img
        class="img-fluid"
        src="https://imgur.com/ONxZ8bm.png"
        alt="guild-img"
        title="guild-img"
        height="400px"
        width="400px"
        id="faqs"
      />
      <img
        class="img-fluid"
        src="https://i.pinimg.com/originals/19/8d/b5/198db572ea3cb88445e5f284f3c7aa0a.jpg"
        alt="guild-desc-img"
        title="guild-desc-img"
      />
    </div>
  </div> -->

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
    const scrollPosition = ref(0);
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

      // scrollDown() {
      // document.getElementById("faqs").scrollIntoView({ block: "end" });
      //   setTimeout(() => {
      //     window.scrollTo(0, 750);
      //   }, 100);
      // },

      scrollLeft() {
        let content = document.querySelector(".guild-cards-container");
        if (scrollPosition.value > 100) {
          scrollPosition.value -= 500;
        }
        content.scrollTo({
          left: scrollPosition.value,
          behavior: "smooth",
        });
      },

      scrollRight() {
        let content = document.querySelector(".guild-cards-container");
        if (scrollPosition.value < 1501) {
          scrollPosition.value += 500;
        }
        content.scrollTo({
          left: scrollPosition.value,
          behavior: "smooth",
        });
      },
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

.rav-bg {
  background-image: url(../assets/img/mtg-guilds/guild2-mtg.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
}

.guild-container-bg {
  background: rgb(54 52 75 / 38%);
  backdrop-filter: blur(4px);
  border: solid #8d8b8b1f;
  border-radius: 8px;
  padding: 1em;
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
.button-style {
  color: #bd4362;
  font-size: 4em;
  padding: 0%;
}

.choose-banner {
  color: white;
  background-color: #bd4362;
}
.azo-g {
  background-color: #056f9d;
  color: white;
}

.izz-g {
  background-color: #3e1973;
  color: white;
}

.bor-g {
  background-color: #9d640f;
  color: white;
}

.orz-g {
  background-color: #791971;
  color: white;
}

.hou-g {
  background-color: #033043;
  color: white;
}

.cul-g {
  background-color: #6c150c;
  color: white;
}

.gol-g {
  background-color: #023705;
  color: white;
}

.sel-g {
  background-color: #17533b;
  color: white;
}

.gru-g {
  background-color: #a34007;
  color: white;
}

.sim-g {
  background-color: #0e7e60;
  color: white;
}
</style>
