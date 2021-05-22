const mongoose = require("mongoose");
const db = require("../models");

// This file empties the stage collection and inserts the stages below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/karaoke");

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
    song: "https://chriscastle.com/temp/chrisg/videos/NewWreckingBall.mp4",
    costume: 
      {

        glasses: "https://chriscastle.com/temp/chrisg/wreckingBallSunglasses.png",
        hat: "https://chriscastle.com/temp/chrisg/wreckingBallHair2.png",
        shirt: "https://chriscastle.com/temp/chrisg/wreckingBallTop.png"

      },

  },
  {
    name: "Tainted Love",
    background: "",
    song: "https://chriscastle.com/temp/chrisg/videos/TaintedLove.mp4",
    costume: 
      {
  
      },
    filter: "INVERT",
  },
  {
    name: "Take on Meee",
    background: "",
    song: "https://chriscastle.com/temp/chrisg/videos/TakeOnMe.mp4",
    costume: 
      {
  
      },
    filter: "THRESHOLD, [0.4]",
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


  const userSeed = [
    {
      username: "carolyn_h",
      password: "password12345",
      email: "carolyn@carolyn.com"

    },
    {
      username: "markki_m",
      password: "password12345",
      email: "markki@markki.com"

    },
    {
      username: "chris_g",
      password: "password12345",
      email: "chris@chris.com"

    },
    {
      username: "todd_m",
      password: "password12345",
      email: "todd@todd.com"

    },
    {
      username: "jennifer_n",
      password: "password12345",
      email: "jen@jen.com"

    },
  ]

  db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
