import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  /**@type {import('./models/Card.js').Card} */
  card: {},
  activeProfile: null,
  searchedCards: [],

  // potential boolean "storage" in the appstate lets us keep searchterms between reloads
  searchByRarity: false,
  rarity: [],
  searchByColor: false,
  colors: [],
  searchByType: false,
  searchByText: false,
})
