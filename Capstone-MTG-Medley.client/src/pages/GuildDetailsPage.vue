<template>
  <header>
    <ClearNavBar />
  </header>
  <!-- Gruul Clans Page -->
  <main class="row gruul p-5">
    <!-- NOTE Guild Members & Title & Join/Remove Button -->
    <!-- GUILD MEMBERS -->
    <section class="col-md-4">
      <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#chat-off-canvas"
        aria-controls="chat-off-canvas">
        Chat With Guild Members
      </button>
      <ChatOffcanvas />

      <h4 class="my-2 mx-3">Guild Members</h4>
      <div class="d-flex">
        <div v-for="m in members" :key="m.id">
          <Member :member="m" />
        </div>
      </div>
    </section>
    <!-- GUILD TITLE -->
    <section class="col-md-4 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </section>
    <!-- GUILD JOIN/REMOVE -->
    <section class="col-md-4 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Leave Guild</span>
      </button>
    </section>
    <!-- NOTE DECK -->

    <section class="col-md-12 my-3">
      <div class="row">
        <div class="col-md-2">
          <div class="azorius-deck rounded d-flex justify-content-end align-items-end">
            <div class="azorius-glass-card fs-5 text-center rounded-bottom p-1">
              <b>
                Starter Deck
              </b>
            </div>
          </div>
        </div>
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
    </section>
    <!-- NOTE Background & Map Row -->
    <div class="col-md-12">
      <div class="row align-items-center justify-content-evenly">
        <section class="col-md-6">
          <div class="card p-3 azorius-bg elevation-4">
            <h4>
              {{ activeGuild.name }} Background
            </h4>
            {{activeGuild.background}}
          </div>
        </section>
        <!-- MAP -->
        <section class="col-md-6">
          <div class="row justify-content-end">
            <div class="col-md-8">
              <MainMap />
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- NOTE Might need this to add starter decks -->
    <!-- <div class="col-1 position-absolute cardPosition" v-if="hover">
                <img :src="oracleCard.image_uris.small" alt="">
              </div> -->
  </main>
  <!-- CHAT -->
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { guildsService } from '../services/GuildsService';
import { membersService } from '../services/MembersService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import Member from '../components/Member.vue';
import GuildChat from '../components/GuildChat.vue';
import ClearNavBar from '../components/ClearNavBar.vue';
import Navbar from '../components/Navbar.vue';
import MainMap from '../components/MainMap.vue';

export default {
  setup() {
    const route = useRoute();
    async function getGuildById() {
      try {
        await guildsService.getGuildById(route.params.guildId);
        console.log(AppState.activeGuild);
      }
      catch (error) {
        logger.error("[getting guild by id]", error);
        Pop.error(error);
      }
    }
    async function getGuildMembers() {
      try {
        await membersService.getGuildMembers(route.params.guildId);
      }
      catch (error) {
        logger.error("[getting guild members]", error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      getGuildById();
      getGuildMembers();
    });
    return {
      message: computed(() => AppState.messages),
      activeGuild: computed(() => AppState.activeGuild),
      members: computed(() => AppState.members),
      guilds: computed(() => AppState.guilds),
      cover: computed(() => `url(${AppState.activeGuild?.coverImg})`),
      cardImg: computed(() => `url(${AppState.activeGuild?.cardImg})`),
      isMember: computed(() => {
        if (AppState.members.find(m => m.accountId == AppState.account.id)) {
          return true
        }
        return false
      }),

      async joinGuild() {
        try {
          let newMember = {
            guildId: AppState.activeGuild.id,
            accountId: AppState.account.id
          };
          await membersService.joinGuild(newMember);
          Pop.toast(`You've joined the ${AppState.activeGuild.name} Guild`);
        }
        catch (error) {
          logger.error("[joining guild]", error);
          (error);
        }
      },

      async removeFromGuild() {
        try {
          const removedMember = AppState.members.find(m => m.accountId == AppState.account.id)
          await membersService.removeFromGuild(removedMember.id)
        } catch (error) {
          logger.error('[removing from guild]', error);
          Pop.error(error)
        }
      },

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
  components: { Member, GuildChat, ClearNavBar, Navbar, MainMap }
};
</script>



<style scoped lang="scss">
.profile-pic {
  border-radius: 50%;
}

.gruul {
  color: whitesmoke;
  background-image: v-bind(cover);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.gruul-bg {
  background: rgba(196, 211, 202, 0.5);
  text-shadow: 1px 1px 3px black;
  backdrop-filter: blur(5px);
  color: #f0f0f0 !important;
  border: none;
}

.azorius-bg {
  background: rgba(248, 231, 185, 0.8);
  text-shadow: 1px 1px 3px black;
  backdrop-filter: blur(5px);
  color: #f0f0f0 !important;
  border: none;
  width: 90%;
}

.btn:hover {
  border: none !important;
}

.azorius-glass-card {
  background: rgba(248, 231, 185, 0.8);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 15%;
}

.azorius-deck {
  background-image: v-bind(cardImg);
  background-size: cover;
  background-position: center;
  min-height: 20em;
  width: 75%;
  color: #0f0f0f !important;
}



.btn {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
}

.simic {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Simic-Guildgate.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.boros {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Boros-Guildgate.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.golgari {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Golgari-Longlegs.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.izzet {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/izzet-guildgate.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.orzhov {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Guild-Orzhov.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.selesnya {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Selesnya-Guildgate.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.rakdos {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Rakdos-Guildgate.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.dimir {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Dimir-Guildgate.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.azorius {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Azorius-Guildgate.jpg);
  background-position: 50% 70%;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
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

  >div {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
}

.button-style {
  color: #bd4362;
  font-size: 4em;
  padding: 0%;
}
</style>