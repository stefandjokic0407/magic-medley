import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  /**@type {import('./models/Card.js').Card} */
  card: {},
  /**@type {import('./models/Profile.js').Profile[]} */
  profiles: [],
  /**@type {import('./models/Profile.js').Profile} */
  activeProfile: {},
  /**@type {import('./models/Card.js').Card} */
  searchedCards: [],
  /**@type {import('./models/Card.js').Card} */
  oracleCard: {},
  /**@type {import('./models/Card.js').Card} */
  activeCard: {},
  decks: [],
  deckCards: [],
  activeDeck: null,
  collection: [],

  // filter toggles
  searchByName: true,
  searchByType: false,
  searchByText: false,

  manaLesser: true,
  manaEqual: false,
  manaGreater: false,

  powerLesser: true,
  powerEqual: false,
  powerGreater: false,

  toughnessLesser: true,
  toughnessEqual: false,
  toughnessGreater: false,

  nextPage: null,

  guilds: [],

  activeGuild: {},

  messages: [],

  members: [],
});
