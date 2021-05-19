import * as ml5 from "ml5";


function sketch(p, props) {
  console.log("sketch props: ", props);
  let img1_preload;
  let img2_preload;
  let img3_preload;
  let img1;
  let img2;
  let img3;
  let video;
  let poseNet;
  let pose;
  let filter;

  p.preload = function () {
    img1_preload = p.loadImage(
      "https://chriscastle.com/temp/chrisg/aviators.png"
    );
    img2_preload = p.loadImage(
      "https://www.chriscastle.com/temp/chrisg/cowboy.png"
    );
    img3_preload = p.loadImage(
      "https://chriscastle.com/temp/chrisg/fishnetShirt.png"
    );
  };

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
    
    //store costume object in variable
    let costume = currentSong.costume;

    //store filter in varaiable for draw function
    filter = currentSong.filter;

    // deconstruct costume object for draw function
    if (costume) {
      img1 = costume.glasses;
      img2 = costume.hat;
      img3 = costume.shirt;
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
      let shirtScaleWidth = shoulder1.x - shoulder2.x;
      let scale = (eye1.x - eye2.x) / 250;
      if (img1) {
        p.image(
          img1_preload,
          nose.x - 353 * scale,
          nose.y - 200 * scale,
          img1_preload.width * scale,
          img1_preload.height * scale
        );
      }
      if (img2) {
        p.image(
          img2_preload,
          pose.nose.x - 465 * scale,
          pose.nose.y - 650 * scale,
          (img2_preload.width + 300) * scale,
          (img2_preload.height + 100) * scale
        );
      }
      if (img3) {
        p.image(
          img3_preload,
          pose.rightShoulder.x - 200 * scale,
          pose.rightShoulder.y - 400 * scale,
          shirtScaleWidth + 100,
          shirtScaleWidth
        );
      }

      
      if(filter){
      switch(filter){
        case "INVERT":
          p.filter(p.INVERT);
          break;
        case "THRESHOLD, [0.4]":
          p.filter(p.THRESHOLD, [0.4]);
          break;
        default:
          console.log("No filter for this song.")
      }
      }
    }
  };
  // creating a button with a saveAsCanvas function to create and save a screenshot
  const saveImageBtn = p.createElement(
    "span",
    '<i style="color:blueviolet;" class="fas fa-camera fa-3x"></i>'
  );
  saveImageBtn.position(20, 400);
  saveImageBtn.mousePressed(saveAsCanvas);

  function saveAsCanvas() {
    p.save("karaoke_canvas.png");
  }
}

// Here is the url for serving pics for dev http://www.chriscastle.com/temp/chrisg/ http://ftp.chriscastle.com/videos/yt1s.com%20-%20Miley%20Cyrus%20%20Wrecking%20Ball%20Karaoke%20Version.mp4
//ftp.chriscastle.com/videos/

export default sketch;
