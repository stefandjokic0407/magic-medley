import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  /**@type {import('./models/Card.js').Card} */
  card: {},
  /**@type {import('./models/Card.js').Card} */
  activeProfile: null,
  /**@type {import('./models/Card.js').Card} */
  searchedCards: [],
  /**@type {import('./models/Card.js').Card} */
  oracleCard: {},
  /**@type {import('./models/Card.js').Card} */
  activeCard: {},
  decks:[],
  collection: [],

  nextPage: null,
  previousPage: null,
  searchByType: false,
  searchByText: false,
  filterByColor: false,
  filterByRarity: false,


})
