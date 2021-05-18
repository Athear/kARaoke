const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI);

const stageSeed = [
  {
    name: "I'm Too Sexy",
    background: "",
    song: "https://chriscastle.com/temp/chrisg/videos/ImTooSexy.mp4",
    costume: 
      {
        glasses: "https://chriscastle.com/temp/chrisg/gangsta.png",
        hat: "http://www.chriscastle.com/temp/chrisg/cowboyHat.png",
        shirt: "https://chriscastle.com/temp/chrisg/fishnetShirt.png",
      },
  },
  {
    name: "Wrecking Ball",
    background: "",
    song: "https://chriscastle.com/temp/chrisg/videos/Miley_Cyrus_Wrecking_Ball_Karaoke.mp4",
    costume: 
      {
  
      },

  },
  {
    name: "Tainted Love",
    background: "",
    song: "https://chriscastle.com/temp/chrisg/videos/TaintedLove.mp4",
    filter: "INVERT"
  },
  {
    name: "Take on Me",
    background: "",
    song: "",
    filter: "THRESHOLD, [0.4]"
  },
];

db.Stage.remove({})
  .then(() => db.Stage.collection.insertMany(stageSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
