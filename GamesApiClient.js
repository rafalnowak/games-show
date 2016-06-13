
import { IGDB_API_KEY } from "./apikey"

const BASE_API_URL = 'https://www.igdb.com/api/v1/games/';

export class GamesApiClient {
  constructor() {
    this.apiKey = IGDB_API_KEY;
    this.baseUrl = BASE_API_URL;
  }

  getGameById(gameId, callBack) {
    fetch(this.baseUrl + gameId, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Token token="' + this.apiKey +  '"'
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        var game = responseData.game;
        callBack(game);
      })
      .catch((error => {
        //TODO: add error handler
        console.log(error);
      }))
      .done();
  }

  searchForGames(query, callBack) {
    fetch(this.baseUrl + "search?q=" + query, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Token token="' + this.apiKey +  '"'
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        var games = responseData.games
        callBack(games);
      })
      .catch((error => {
        console.log(error);
      }))
      .done();
  }
}
