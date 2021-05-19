let img;
let video;
let poseNet;
let pose;

let outfit = {
  sunglasses: false,
  hat: false,
  shirt: false,
};

function preload() {
  img1 = loadImage("https://chriscastle.com/temp/chrisg/aviators.png");
  img2 = loadImage("https://www.chriscastle.com/temp/chrisg/cowboy.png");
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

  if (pose) {
    let nose = pose.keypoints[0].position;
    let eye1 = pose.keypoints[1].position;
    let eye2 = pose.keypoints[2].position;
    let shoulder1 = pose.keypoints[5].position;
    let shoulder2 = pose.keypoints[6].position;
    let rightHip = pose.keypoints[12].position;
    let shirtScaleWidth = (shoulder1.x-shoulder2.x);
    let shirtScaleHeight = (shoulder1.y + rightHip.y)
    let scale = (eye1.x - eye2.x) / 250;
      if (outfit.sunglasses) {
        image(img1, nose.x - 353 * scale, nose.y - 200 * scale, img1.width * scale, img1.height * scale);
      }
      if (outfit.hat) {
        image(img2, pose.nose.x - 465 * scale, pose.nose.y - 650 * scale, (img2.width + 300) * scale, (img2.height + 100) * scale);
      }
      if (outfit.shirt) {
        image(img3, pose.rightShoulder.x-50, pose.rightShoulder.y-100, shirtScaleWidth + 100, shirtScaleHeight - 100);
      }
    
  }
}
document.getElementById("btns").addEventListener("toggle", (e) => {
  mousePressed(e);
});

function mousePressed(e) {
  outfit[e.target.id] = !outfit[e.target.id];
  redraw();
  console.log(outfit);
}

// Here is the url for serving pics for dev http://www.chriscastle.com/temp/chrisg/ http://ftp.chriscastle.com/videos/yt1s.com%20-%20Miley%20Cyrus%20%20Wrecking%20Ball%20Karaoke%20Version.mp4
//ftp.chriscastle.com/videos/
