<template>
  <header>
    <ClearNavBar />
  </header>
  <!-- Gruul Clans Page -->
  <div class="row gruul">
    <!-- NOTE Guild Members & Title & Join/Remove Button -->
    <!-- GUILD MEMBERS -->
    <div class="col-md-4">
      <h4>Guild Members</h4>
      <div class="d-flex">
        <div v-for="m in members" :key="m.id">
          <Member :member="m" />
        </div>
      </div>
    </div>
    <!-- GUILD TITLE -->
    <div class="col-md-4 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>
    <!-- GUILD JOIN/REMOVE -->
    <div class="col-md-4 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Leave Guild</span>
      </button>
    </div>
    <!-- NOTE Background & Map Row -->
    <div class="col-md-6">
      <div class="card p-3 gruul-bg elevation-4">
        <h4>
          {{ activeGuild.name }} Background
        </h4>
        {{activeGuild.background}}
      </div>
    </div>
    <!-- MAP -->
    <div class="col-md-6">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <Map />
        </div>
      </div>
    </div>
    <!-- NOTE Map & Offcanvas Button -->
    <!-- DECK -->
    <div class="col-md-10">
      <div class="card deck-card border-none">
        <div class="gruul-deck">

        </div>
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-6 text-dark text-center rounded-top p-1">
            {{ activeGuild.name }} Starter Deck
          </div>
        </div>
      </div>
    </div>
    <!-- CHAT -->
    <div class="col-md-2 d-flex flex-column justify-content-end text-end">
      <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#chat-off-canvas"
        aria-controls="chat-off-canvas">
        Chat With Guild Members
      </button>
      <ChatOffcanvas />
    </div>
    <!-- NOTE Might need this to add starter decks -->
    <!-- <div class="col-1 position-absolute cardPosition" v-if="hover">
                <img :src="oracleCard.image_uris.small" alt="">
              </div> -->
  </div>
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
import Map from '../components/Map.vue';
import ClearNavBar from '../components/ClearNavBar.vue';
import Navbar from '../components/Navbar.vue';

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
      }

    };
  },
  components: { Member, GuildChat, Map, ClearNavBar, Navbar }
};
</script>



<style scoped lang="scss">
.profile-pic {
  border-radius: 50%;
}


.fixed-height {
  height: 10vh !important;
}

.gruul {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: v-bind(cover);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.gruul-bg {
  background: rgba(196, 211, 202, 0.5);
  backdrop-filter: blur(5px);
  color: #f0f0f0 !important;
  border: none;
}

.btn:hover {
  border: none !important;
}

.glass-card {
  background: rgba(202, 181, 181, 0.4);
  backdrop-filter: blur(1px);
  text-shadow: 2px 2px 2px rgb(31, 29, 29);
  color: #f2e9e4 !important;
  width: 100%;
}

.gruul-deck {
  background-image: v-bind(cardImg);
  background-position: center;
  height: 12em;
  width: 100%;
}

.deck-card {
  height: 12em;
  width: 150px;
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
</style>