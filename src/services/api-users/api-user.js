export default class UserAPI {
  //is there a way of making this link change depending on where you start the server?
  static baseURL = 'http://localhost:3500';

  static async getUsers() {
    const urlEndpoint = `${this.baseURL}/users`;
    const response = await fetch(urlEndpoint);
    return await response.json();
  }

  static async getUser(id) {
    const urlEndpoint = `${this.baseURL}/users/${id}`;
    const response = await fetch(urlEndpoint);
    return await response.json();
  }
  static addUser(username) {
    const urlEndpoint = `${this.baseURL}/users`;
    fetch(urlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: username,
        favourites: [{}],
      }),
    }).then((response) => {
      response.json();
    });
  }
  static updateUser(id, username) {
    const urlEndpoint = `${this.baseURL}/users/${id}`;

    fetch(urlEndpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        username: username,
      }),
    }).then((response) => {
      response.json();
    });
  }

  static deleteUser(id) {
    const urlEndpoint = `${this.baseURL}/users/${id}`;
    fetch(urlEndpoint, {
      method: 'DELETE',
    });
  }

  static async addFavorite(id, favorite) {
    const user = await this.getUser(id);

    let favoritesArray = [];

    if (Object.keys(user.favourites[0]).length === 0) {
      favoritesArray[0] = favorite;
    } else {
      favoritesArray = user.favourites.map((item) => item);
      favoritesArray.push(favorite);
    }

    await this.updateFavorites(id, favoritesArray);
  }

  static async deleteFavorite(id, favoriteIndex) {
    const user = await this.getUser(id);
    if (Object.keys(user.favourites[0]).length !== 0) {
      const favoritesArray = user.favourites.filter(
        (item, index) => index !== favoriteIndex
      );
      await this.updateFavorites(id, favoritesArray);
    } else {
      console.log('Esta vacio');
    }
  }

  static async updateFavorites(id, favorites) {
    const urlEndpoint = `${this.baseURL}/users/${id}`;
    fetch(urlEndpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        favourites: favorites,
      }),
    }).then((response) => {
      response.json();
    });
  }
} // User API
