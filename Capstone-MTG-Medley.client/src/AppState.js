import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  /**@type {import('./models/Card.js').Card} */
  card: {},
  activeProfile: null,
  /**@type {import('./models/Card.js').Card} */
  searchedCards: [],
  /**@type {import('./models/Card.js').Card} */
  oracleCard: {},
  /**@type {import('./models/Card.js').Card} */
  activeCard: null,

  nextPage: null,
  previousPage: null,
})
