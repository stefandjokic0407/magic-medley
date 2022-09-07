<template>
  <header>
    <Navbar />
  </header>
  <!-- Gruul Clans Page -->
  <div v-if="activeGuild.name == 'Gruul Clans'" class="row gruul">
    <div class="col-md-4 my-2">
      <h4>Guild Members</h4>
      <div class="d-flex my-2">
        <div v-for="m in members" :key="m.id">
          <Member :member="m" />
        </div>
      </div>
    </div>
    <div class="col-md-4 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>
    <div class="col-md-4 text-end my-2">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Leave Guild</span>
      </button>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-12">
      <div class="row align-items-center">
        <section class="col-md-5 offset-md-1">
          <!-- Gruul Clans Background -->
          <div class="card p-3 gruul-bg mb-3 elevation-4">
            <h4>
              {{ activeGuild.name }} Background
            </h4>
            Before and for a short time after the signing of the Guildpact, the Gruul Clans were a wild and noble
            guild
            charged with maintaining the wild places on Ravnica. They were supposed to keep civilization in check.
            Civilization and the other nine guilds, however, overran every wild place on the plane. This changed the
            Gruul.
            <br>
            <br>
            The Gruul decentralized, lacking any sort of real leadership. The guild became nothing but a loose
            affiliation of clans. Exploited and ignored, they started to take any reason to cause chaos, any reason
            to
            destroy a symbol of civilization. Most Gruul hold contempt for those outside the Clans, referring to
            them
            as
            "cobble roaches".
          </div>
        </section>
        <section class="col-md-2 offset-md-1">
          <div class="card mb-3 border-none">
            <img class="gruul-deck rounded elevation-4"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a7ee8-ee25-4224-b5bf-ec4d43489c77/dartqc3-2bccbd58-4c87-4111-9ab1-21b3dc8abb84.jpg/v1/fill/w_670,h_1192,q_70,strp/gruul_clans_smartphone_wallpaper_1080p_by_locix_ita_dartqc3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzdjMWE3ZWU4LWVlMjUtNDIyNC1iNWJmLWVjNGQ0MzQ4OWM3N1wvZGFydHFjMy0yYmNjYmQ1OC00Yzg3LTQxMTEtOWFiMS0yMWIzZGM4YWJiODQuanBnIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.41brHS-Ebvlvh99GHE39I6whtvmt9xa2ijpa_GKu4rg"
              alt="Gruul Deck" title="Gruul Deck">
            <div class="card-img-overlay p-0">
              <div class="glass-card fs-3 text-dark text-center rounded-top p-1">
                {{ activeGuild.name }} Starter Deck
              </div>
            </div>
          </div>
          <!-- <div class="col-1 position-absolute cardPosition" v-if="hover">
            <img :src="oracleCard.image_uris.small" alt="">
          </div> -->
        </section>
      </div>
    </section>
    <section class="col-md-12">
      <div class="row">
        <div class="col-md-5 offset-md-1 mb-3">
          <Map />
        </div>
        <div class="col-md-3">
          <GuildChat />
        </div>
      </div>
    </section>
  </div>
  <!-- Simic Combine Page -->
  <div v-if="activeGuild.name == 'Simic Combine'" class="row simic">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>

    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Simic Combine Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          The Simic Combine is Ravnica's steward of nature and the wild; its mission is to preserve the natural world
          even as Ravnica's cities continue to grow. The guild seeks to protect the elements of the plane that are
          incompatible or mutually exclusive with its overpopulated, urban conditions. The guild uses magic to coax
          new morphologies from existing creatures, as well as to combine traits from multiple organisms in one. Some
          of these are unique creatures that can't reproduce. A few multiply and become part of the guild's fabric.
          <br>
          <br>
          The emotionally distant relationship that the Simic biomancers have with the rest of Ravnica's society makes
          the common man wary of the guild, thinking of them as crazy mutant makers. Even so, the Simic makes up the
          physicians of Ravnica and so injuries and illness are taken to reputable doctors.
        </div>
      </div>
    </section>
  </div>
  <!-- Boros legion Page -->
  <div v-if="activeGuild.name == 'Boros Legion'" class="row boros">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>

    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Boros Legion Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          The Boros Legion was founded by parun Razia, a militant flaming-sword-wielding archangel capable of using
          flame and light magic who fervently and firmly believed in harmonious coexistence on Ravnica, even if lives
          were lost and blood was shed in achieving this. The Legion functions as the righteous and zealous
          constabulary and standing army of Ravnica, as the League of Wojek and Boros Army, respectively, and enforces
          Ravnican laws created by the Azorius Senate. The Boros Legion is known to use many fire spells.
          <br>
          <br>
          The Guildhall of the Boros is Sunhome, a combined fortress, barracks, and place of worship.
        </div>




      </div>
    </section>
  </div>
  <!-- Golgari Swarm Page -->
  <div v-if="activeGuild.name == 'Golgari Swarm'" class="row golgari">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>

    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Golgari Swarm Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          The Golgari Swarm is the embodiment of life and death. The teeming masses of the Swarm believe that
          life and death are both natural and equally essential too. To them, life and death are natural
          elements of a cycle with no intermediary break. Growth is power that comes slowly, but it is also
          ruthless and inevitable, and this makes growth a key virtue of the Swarm's power. With their dead
          being planted and regrown as plant zombies, their reanimation magic has made the Golgari the largest
          Ravnican guild. Much like a swarm of insects, the Golgari often seem to behave more like a single
          organism than as a group of individuals. The whole Swarm is driven by a primal instinct to survive and
          reproduce.
          <br>
          <br>
          The Golgari Swarm consists of many sub-factions, each with its own agenda. Their revered parun is the
          legendary necromancer Svogthir, the "god-zombie".
        </div>




      </div>
    </section>
  </div>
  <!-- Izzet League Page -->
  <div v-if="activeGuild.name == 'Izzet League'" class="row izzet">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>

    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Izzet League Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          The Izzet League are charged with attending to Ravnican civic works, including water supply systems,
          sewers, heating systems, boilers, and roadways. In addition to carrying out these functions, the Izzet
          members — obsessive, keen, and creative intellectuals, who often have short attention spans — are known
          to perform magical experiments, ever with reckless abandon and sometimes with spectacular but severe
          results.
          Unlike the other guilds, the Izzet do not openly strive for hegemony of the city and the
          plane.
        </div>
      </div>
    </section>
  </div>
  <!-- Orzhov Syndicate Page -->
  <div v-if="activeGuild.name == 'Orzhov Syndicate'" class="row orzhov">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>
    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Orzhov Syndicate Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          The Orzhov Syndicate is the Ravnican guild of business, where the values of white and black meet and the
          dead exist solely as capital. Nearly every business in Ravnica ties back to the Orzhov in some way or
          another. While they bear the facade of a religious group and may have been a true faith at the signing of
          the Guildpact, they now worship only profit and power.
          <br>
          <br>
          The Orzhov guild is founded on the beliefs that wealth is power, that structure breeds wealth, and that
          guilt creates structure. The guild is a combination of a religion, credit-lending agency, and crime
          syndicate. An ostentatious hierarchy of priests, enforcers, and ghostly councilors rules over a congregation
          of guilt-bound loyalists, indebted ghosts, and thrull servants.
        </div>
      </div>
    </section>
  </div>
  <!-- Selesnya Conclave Page -->
  <div v-if="activeGuild.name == 'Selesnya Conclave'" class="row selesnya">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>

    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Selesnya Conclave Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          The Selesnya Conclave is a decentralized collective variably described as a "selfless, nurturing, spiritual
          group" or a "brainwashing nature cult." It involves itself in the establishment and maintenance of peace,
          life, and unity in Ravnica. The territories held by the Selesnya are open and sunny, full of green spaces
          and gardens, with white stone buildings which are often open to the air. The towering world-tree of
          Vitu-Ghazi once served as the guild's Guildhall.
        </div>
      </div>
    </section>
  </div>
  <!-- Cult of Rakdos Page -->
  <div v-if="activeGuild.name == 'Cult of Rakdos'" class="row rakdos">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>

    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Cult of Rakdos Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          Founded by parun Rakdos, an ancient demon, the Cult of Rakdos attend to menial labor and the services
          industry, which includes some less-than-savory offerings, such as assassination, as well as more agreeable
          ones, such as the catering (i.e., food service) and entertainment industries. Members of the
          demon-worshipping guild are referred to as cultists.
        </div>
      </div>
    </section>
  </div>
  <!-- House Dimir Page -->
  <div v-if="activeGuild.name == 'House Dimir'" class="row dimir">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>

    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- House Dimir Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          House Dimir is a guild of secrecy, manipulation, and underhanded deals. They are a shadowy organization
          operating behind the scenes to twist Ravnica to its own ends. The guild provides espionage,
          smuggling, burglary, counter-intelligence, assassination, and other illegal services for the Ravnican
          populace, although its patrons are unaware that they are in fact employing the guild, instead thinking they
          are employing guildless mercenaries or another guild such as the Rakdos. The guild is so secretive that even
          its own agents often do not know who they truly work for.
        </div>
      </div>
    </section>
  </div>
  <!-- Azorius Senate Page -->
  <div v-if="activeGuild.name == 'Azorius Senate'" class="row azorius">
    <div class="col-md-12 text-end">
      <button v-if="isMember == false" class="btn" @click="joinGuild()">
        <i class="mdi mdi-plus fs-3"></i>
        <span class="fs-5">JOIN GUILD</span>
      </button>
      <button v-else class="btn" @click="removeFromGuild()">
        <i class="mdi mdi-minus fs-3"></i>
        <span class="fs-5">Remove From Guild</span>
      </button>
    </div>
    <div class="col-md-12 text-center">
      <h1>{{ activeGuild.name }}</h1>
      <h4>Total Members: <span>{{ activeGuild.members }}</span> </h4>
    </div>
    <div class="col-md-12 d-flex">
      <div v-for="m in members" :key="m.id">
        <Member :member="m" />
      </div>
    </div>
    <!-- GUILD INFO -->
    <section class="col-md-5">
      <div>
        <h4>
          <span class="selectable" data-bs-toggle="collapse" data-bs-target="#collapseBackground" aria-expanded="false"
            aria-controls="collapseBackground">
            {{ activeGuild.name }} Background
          </span>
        </h4>
        <!-- Azorius Senate Background -->
        <div class="collapse card bg-dark p-3 my-5" id="collapseBackground">
          <br>
          Founded by parun Supreme Judge Azor I, a sphinx lawmage who authored the original Guildpact, the Azorius
          Senate functions as the government of Ravnica and creates Ravnican laws.<br>
          <br>
          The Azorius are said to act through inaction.
          e to see to the enforcement of the
          dvocates and lawmages for

        </div>
      </div>
    </section>
  </div>
  <!-- CHAT -->
  <footer class="fixed-bottom">

  </footer>
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
          Member = AppState.members.find(m => m.accountId == AppState.account.id)
          sService.removeFromGuild(removedMember.id)
        } catch (error) {
          logger.error('[removing from guild]', error);
          Pop.error(error)
        }
      }

    };
  },
  components: { Member, GuildChat, Map }
};
</script>



<style scoped lang="scss">
.profile-pic {
  border-radius: 50%;
}

.gruul {
  text-shadow: 1px 1px 3px black;
  color: whitesmoke;
  background-image: url(../assets/img/mtg-guilds/Gruul-Guildgate.jpg);
  background-position: 50% 35%;
  background-size: cover;
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
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a7ee8-ee25-4224-b5bf-ec4d43489c77/dartqbg-57fdc724-abf7-44f7-9786-57a86ee09733.jpg/v1/fill/w_1024,h_1821,q_75,strp/izzet_league_smartphone_wallpaper_1080p_by_locix_ita_dartqbg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyMSIsInBhdGgiOiJcL2ZcLzdjMWE3ZWU4LWVlMjUtNDIyNC1iNWJmLWVjNGQ0MzQ4OWM3N1wvZGFydHFiZy01N2ZkYzcyNC1hYmY3LTQ0ZjctOTc4Ni01N2E4NmVlMDk3MzMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cBa4aKec7aWtUlz7FHBKpsAQVmFf9tkpnqNoh15uEi8);
  background-size: cover;
}


.inner-border {
  position: relative;
  border: 2px solid #EB9F82;
  border-radius: 5px;
  margin: auto;
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