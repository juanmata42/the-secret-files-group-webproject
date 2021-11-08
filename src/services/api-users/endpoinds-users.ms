Estos son los Endpoints para hacer llamadas a la API.

GET Users
http://localhost:3500/users

GET Users por ID
http://localhost:3500/users/3

POST Users por ID - Añade usuario
http://localhost:3500/users

{
    "id": 2,
    "username": "JuanMa test",
    "favourites": [
      {}
    ]
  },

PUT user por ID
http://localhost:3500/users/8

PATH user por ID
http://localhost:3500/users/8
 {
      "id": 1,
      "username": "Manu test",
      "favourites": [
        {}
      ]
    }

DELETE user por ID:
http://localhost:3500/users/8
 {
      "id": 1,
      "username": "Manu test",
      "favourites": [
        {}
      ]
    }
