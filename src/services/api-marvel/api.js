export default class marvelApi {
  constructor() {
    this.base = [
      'https://gateway.marvel.com:443/v1/public/',
      'ts=1&apikey=0e8650a7d239f1e59cdbe59932b885fd&hash=96f697408eda6e6bbaf69a760dda26c5',
    ];
  }
  //change later the number 2 for 99 or 20
  async request(path) {
    let response = await fetch(this.base[0] + path + this.base[1]);
    return await response.json();
  }

  async getCharacter(id) {
    return await this.request(`characters/${id}?`);
  }
  async getSerie(id) {
    return await this.request(`series/${id}?`);
  }
  async getList(type) {
    // pass series or characters
    return await this.request(`${type}?limit=99&`);
  }
  async getCharactersOfDay(string) {
    return await this.request(`characters?nameStartsWith=${string}&limit=20&`);
  }
  async getCharactersByName(string) {
    return await this.request(`characters?nameStartsWith=${string}&limit=99&`);
  }
  async getSeriesByName(string) {
    return await this.request(`series?titleStartsWith=${string}&limit=99&`);
  }
  async getSeriesByCharacter(id) {
    return await this.request(`series?characters=${id}&limit=10&`);
  }
  async getCharactersBySerie(id) {
    return await this.request(`characters?series=${id}&limit=10&`);
  }
}
//how to use
//in another element, import api
//const marvelApi= new marvelApi
// let character = await marvelApi.getCharacter(id) ;
// let serie = await marvelApi.getSerie(id);
// let list = await marvelApi.getList(type); can be "characters" or "series"
// let filteredCharacters = await marvelApi.getCharactersByName(string)
// let filteredSeries = await marvelApi.getSeriesByName(string)
