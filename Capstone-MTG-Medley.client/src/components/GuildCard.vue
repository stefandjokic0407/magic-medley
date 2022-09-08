<template>
  <router-link :to="{ name: 'GuildDetails', params: { guildId: guild.id } }">
    <main v-if="guild.name == 'Azorius Senate'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Azorius.jpg"
          alt="Azorius Senate"
          title="Azorius Senate"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark text-center rounded-top p-1">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Izzet League'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Izzet.jpg"
          alt="Izzet League"
          title="Izzet League"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top text-center p-1">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Orzhov Syndicate'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Orzhov.jpg"
          alt="Orzhov Syndicate"
          title="Orzhov Syndicate"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Golgari Swarm'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Golgari.jpg"
          alt="Golgari Swarm"
          title="Golgari Swarm"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Selesnya Conclave'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Selesnya.jpg"
          alt="Selesnya Conclave"
          title="Selesnya Conclave"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Cult of Rakdos'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Rakdos.jpg"
          alt="Cult of Rakdos"
          title="Cult of Rakdos"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'House Dimir'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Dimir.jpg"
          alt="House Dimir"
          title="House Dimir"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Gruul Clans'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Gruul.jpg"
          alt="Gruul Clans"
          title="Gruul Clans"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Simic Combine'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Simic.jpg"
          alt="Simic Combine"
          title="Simic Combine"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
    <main v-if="guild.name == 'Boros Legion'">
      <div class="card my-2">
        <img
          class="guild-img"
          src="../assets/img/mtg-guilds/Boros.jpg"
          alt="Boros Legion"
          title="Boros Legion"
        />
        <div class="card-img-overlay p-0">
          <div class="glass-card fs-2 text-dark rounded-top p-1 text-center">
            {{ guild.name }}
          </div>
        </div>
      </div>
    </main>
  </router-link>
</template>

<script>
export default {
  props: {
    guild: { type: Object, required: true },
  },

  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.glass-card {
  background: rgba(202, 181, 181, 0.4);
  backdrop-filter: blur(1px);
  text-shadow: 2px 2px 2px rgb(31, 29, 29);
  color: #f2e9e4 !important;
  width: 100%;
}

.guild-img {
  // max-height: 600px;
  height: 40vh;
  max-width: 15vw;
  border-radius: 5px;
  filter: drop-shadow(3px 3px 3px black);
}

.card:hover {
  cursor: pointer;
  scale: 1.04 1.09;
}

.card {
  height: 40vh;
  max-width: 15vw;
}
</style>
