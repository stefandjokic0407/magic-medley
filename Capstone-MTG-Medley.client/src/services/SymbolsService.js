import { logger } from "../utils/Logger"
import { mtg } from "./AxiosService"

class SymbolsService {

  async getSymbols() {
    let res = mtg.get('/symbology')
    logger.log('Symbols: ', res.data)

  }

}

export const symbolsService = new SymbolsService()