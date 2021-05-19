import * as ml5 from "ml5";
// const net = await posenet.load()
function sketch (p, props){
  console.log("sketch props: ", props);
let img1;
let img2;
let img3;
let video;
let poseNet;
let pose;
// let filter;
let outfit = {
  sunglasses: true,
  hat: true,
  shirt: true,
};
p.preload = function() {
  img1 = p.loadImage("https://chriscastle.com/temp/chrisg/aviators.png");
  img2 = p.loadImage("https://www.chriscastle.com/temp/chrisg/cowboy.png");
  img3 = p.loadImage("https://chriscastle.com/temp/chrisg/fishnetShirt.png");
}


p.setup = function () {
   
  p.createCanvas(640, 480);

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
  if (p.MIRROR_VIDEO_FEED == true) {
    // flip the video vertically to create a video which functions as a mirror
    p.translate(p.width, 0); // move canvas to the right
    p.scale(-1.0, 1.0);
  }
    // flip x-axis backwards
  p.image(video, 0, 0);
//  take on me filter:
//  p.filter(THRESHOLD, [0.4]);
//  tainted love filter:
//  p.filter(INVERT);
//  blackout filter
//  p.filter(POSTERIZE);



  p.setup = function () {
    p.createCanvas(640, 480);

    video = p.createCapture(p.VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
  };

  function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
      pose = poses[0].pose;
    }
  }

  function modelLoaded() {
    console.log("poseNet ready");
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function ({ currentSong }) {
    console.log("props in sketch.js: ", currentSong);
    console.log("outfits: ", currentSong.costume);
    console.log("filters: ", currentSong.filter);

    //capture costume object in variable
    let costume = currentSong.costume;
    
    //assign background variable
    p.background = currentSong.filter;
    

    console.log("var outfit: ", costume);
    if (costume) {
      outfit = {
        glasses: true,
        hat: true,
        shirt: true,
      };
      // p.preload = function(){
      // img1 = currentSong.costume.glasses;
      // img2 = currentSong.costume.hat;
      // img3 = currentSong.costume.shirt;
      // };
    img1 = currentSong.costume.glasses;
    img2 = currentSong.costume.hat;
    img3 = currentSong.costume.shirt;

      // console.log("redraw img vars: ", img1, img2,img3);
    } 
    if (p.background) {
      // filter = true;
      console.log(p.background);
      
    }
  };

  p.draw = function () {
    p.image(video, 0, 0);
   
    if (pose) {
      let nose = pose.keypoints[0].position;
      let eye1 = pose.keypoints[1].position;
      let eye2 = pose.keypoints[2].position;
      let shoulder1 = pose.keypoints[5].position;
      let shoulder2 = pose.keypoints[6].position;
      let shirtScaleWidth = (shoulder1.x-shoulder2.x);
      let scale = (eye1.x - eye2.x) / 250;
        if (outfit.sunglasses) {
          p.image(img1, nose.x - 353 * scale, nose.y - 200 * scale, img1.width * scale, img1.height * scale);
        }
        if (outfit.hat) {
          p.image(img2, pose.nose.x - 465 * scale, pose.nose.y - 650 * scale, (img2.width + 300) * scale, (img2.height + 100) * scale);
        }
        if (outfit.shirt) {
          p.image(img3, pose.rightShoulder.x - 200 * scale, pose.rightShoulder.y - 400 * scale, shirtScaleWidth + 100, shirtScaleWidth);
        }
    }
   
  };

 
}
// Here is the url for serving pics for dev http://www.chriscastle.com/temp/chrisg/ http://ftp.chriscastle.com/videos/yt1s.com%20-%20Miley%20Cyrus%20%20Wrecking%20Ball%20Karaoke%20Version.mp4
//ftp.chriscastle.com/videos/

export default sketch;
