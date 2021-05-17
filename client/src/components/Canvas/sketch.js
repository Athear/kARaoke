import * as ml5 from "ml5";

// const net = await posenet.load()

function sketch (p){
let img1;
let img2;
let img3;    
let video;
let poseNet;
let pose;
// let filter;

let outfit = {
  sunglasses: false,
  hat: false,
  shirt: false,
};

p.preload = function() {
  img1 = p.loadImage("https://chriscastle.com/temp/chrisg/gangsta.png");
  img2 = p.loadImage("https://www.chriscastle.com/temp/chrisg/cowboyHat.png");
  img3 = p.loadImage("https://chriscastle.com/temp/chrisg/fishnetShirt.png");
}

p.setup = function () {
   
  p.createCanvas(1280, 1000);

  video = p.createCapture(p.VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
  
}

function gotPoses(poses) {
    // console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelLoaded() {
  console.log("poseNet ready");
}


p.draw = function() {
  p.image(video, 0, 0);
//  take on me filter:
//  p.filter(THRESHOLD, [0.4]);
//  tainted love filter:
//  p.filter(INVERT);
//  blackout filter
//  p.filter(POSTERIZE);
  if (outfit.sunglasses) {
    p.image(img1, pose.rightEye.x - 135, pose.rightEye.y - 40);
  }
  if (outfit.hat) {
    p.image(img2, pose.nose.x - 180, pose.nose.y - 230);
  }
  if (outfit.shirt) {
    p.image(img3, pose.rightShoulder.x-100, pose.rightShoulder.y-100);
  }
  // if (pose) {
  //   image(img, pose.rightEye.x-135, pose.rightEye.y-40);
  // }
  //creating a button with a saveAsCanvas function to create and save a screenshot
  // saveImageBtn = createButton("Save Canvas");
  // saveImageBtn.position(150, 60);
  // saveImageBtn.mousePressed(saveAsCanvas);
}

//
// document.getElementById("btns").addEventListener("toggle", (e) => {

//   mousePressed(e);

// });


function mousePressed(e) {
  
  outfit[e.target.id]= !outfit[e.target.id];
  p.redraw();
  console.log(outfit);
}
// function saveAsCanvas () {
//   save ("karaoke_canvas.png")
// }

}
// Here is the url for serving pics for dev http://www.chriscastle.com/temp/chrisg/ http://ftp.chriscastle.com/videos/yt1s.com%20-%20Miley%20Cyrus%20%20Wrecking%20Ball%20Karaoke%20Version.mp4
//ftp.chriscastle.com/videos/

export default sketch;
