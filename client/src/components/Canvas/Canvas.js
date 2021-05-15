import React, {useState} from "react";

import "./style.css";

function Canvas () {
//  const [song, setSong] = useState({})


let img1;
let img2;
let img3;
let video;
let poseNet;
let pose;
// let loadImage;
// let createCanvas;
// let createCapture;
// let VIDEO;
// let ml5;
// let image;
// let redraw;

let outfit = {
  sunglasses: false,
  hat: false,
  shirt: false,
};

function preload() {
  img1 = loadImage("https://chriscastle.com/temp/chrisg/gangsta.png");
  img2 = loadImage("http://www.chriscastle.com/temp/chrisg/cowboyHat.png");
  img3 = loadImage("https://chriscastle.com/temp/chrisg/fishnetShirt.png");
}

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
  
}
function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}
function modelLoaded() {
  console.log("poseNet ready");
}
function draw() {
  image(video, 0, 0);
  if (outfit.sunglasses) {
    image(img1, pose.rightEye.x - 135, pose.rightEye.y - 40);
  }
  if (outfit.hat) {
    image(img2, pose.nose.x - 180, pose.nose.y - 230);
  }
  if (outfit.shirt) {
    image(img3, pose.rightShoulder.x-100, pose.rightShoulder.y-100);
  }
  // if (pose) {
  //   image(img, pose.rightEye.x-135, pose.rightEye.y-40);
  // }
}
document.getElementById("btns").addEventListener("toggle", (e) => {

  mousePressed(e);

});


function mousePressed(e) {
  
  outfit[e.target.id]= !outfit[e.target.id];
  redraw();
  console.log(outfit);
}

   <div className="canvas">
    <div id="btns">
    <button onClick={()=> setSong}id="sunglasses">shades</button><button id="hat">hat</button><button id="shirt">shirt</button>
    </div>
  </div>
  preload();
  setup();
  draw();
};



export default Canvas;