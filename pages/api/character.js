// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const characters = [
  {
    "id":"1",
    "name": "Kakarroto (Goku)",
    "race": "Saiyan",
    "gender": "Male",
    "currentPlanet":"Earth",
    "status":"Alive",
    "image":"/image/goku.jpeg",
    "class": "Mastered Ultra Instinct",
    "group":"Z Fighters"
  },
  {
    "id":"2",
    "name": "Vegeta",
    "race": "Saiyan",
    "gender": "Male",
    "currentPlanet":"Earth",
    "status":"Alive",
    "image":"/image/vegeta.jpeg",
    "class": "SS Evolution",
    "group":"Ex. Frieza Force"
  },
  {
    "id":"3",
    "name": "Gohan",
    "race": "Half-Saiyan",
    "gender": "Male",
    "currentPlanet":"Earth",
    "status":"Alive",
    "image":"/image/gohan.jpeg",
    "class": "Mystic Gohan",
    "group":"Z Fighters"
  },
  {
    "id":"4",
    "name": "Frieza",
    "race": "Unknown",
    "gender": "Male",
    "currentPlanet":"In Space",
    "status":"Alive",
    "image":"/image/frieza.jpeg",
    "level": "Golden Frieza",
    "group":"Leader of Frieza Force"
  }
];

export default function handler(req, res) {
  res.status(200).json({
    status: 'OK',
    code: 200,
    data: characters
    })
}
