import { v4 as uuidv4 } from "uuid";

const startercats = [
  {
    ID: uuidv4(),
    thumbnailURL:
      "http://www.homeatlastrescue.org/images/pets/cats/thumbnails/artie.tn.jpg",
    name: "mittens",
    birthdate: "2010-01-01",
    owner: "Bob",
    views: 0,
  },
  {
    ID: uuidv4(),
    thumbnailURL:
      "http://www.homeatlastrescue.org/images/pets/cats/thumbnails/athena-tn.jpg",
    name: "patches",
    birthdate: "2008-01-01",
    owner: "Karl",
    views: 0,
  },
  {
    ID: uuidv4(),
    thumbnailURL:
      "http://www.homeatlastrescue.org/images/pets/cats/thumbnails/basa.tn.jpg",
    name: "buttons",
    birthdate: "2014-01-01",
    owner: "Tanya",
    views: 0,
  },
  {
    ID: uuidv4(),
    thumbnailURL:
      "http://www.homeatlastrescue.org/images/pets/cats/thumbnails/blue-tn.jpg",
    name: "snickers",
    birthdate: "2012-01-01",
    owner: "Phil",
    views: 0,
  },
  {
    ID: uuidv4(),
    thumbnailURL:
      "http://www.homeatlastrescue.org/images/pets/cats/thumbnails/boris.tn.jpg",
    name: "spot",
    birthdate: "2020-01-01",
    owner: "Marge",
    views: 0,
  },
];

export default startercats;