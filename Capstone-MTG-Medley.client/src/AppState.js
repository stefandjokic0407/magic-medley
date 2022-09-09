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
  profileDecks: [],
  deckCards: [],
  duplicates: [],
  activeDeck: {},
  profileCollection: [],
  collection: [],
  currentLocation: '',
  // filter toggles
  searchByName: true,
  searchByType: false,
  searchByText: false,

  manaLesser: false,
  manaEqual: true,
  manaGreater: false,

  powerLesser: false,
  powerEqual: true,
  powerGreater: false,

  toughnessLesser: false,
  toughnessEqual: true,
  toughnessGreater: false,

  nextPage: null,

  guilds: [],

  activeGuild: {},

  messages: [],

  members: [],

  accountAddress: {},
});
