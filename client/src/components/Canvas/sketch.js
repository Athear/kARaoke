import * as ml5 from "ml5";

function sketch(p) {
  //Parent functions
  let logout;
  let newSong;


  //"I'm Too Sexy" variables
  let glasses1_preload;
  let hat1_preload;
  let shirt1_preload;
  let glasses1;
  let hat1;
  let shirt1;

  //"Wrecking Ball" variables
  let glasses2_preload;
  let hat2_preload;
  let shirt2_preload;
  let glasses2;
  let hat2;
  let shirt2;

  //"Tainted Love" and "Take on Me" var
  let filter;
  let mic;

  //poseNet & p5 vars
  let video;
  let poseNet;
  let pose;

  //pre-load costume images
  p.preload = function () {
    glasses1_preload = p.loadImage(
      "https://chriscastle.com/temp/chrisg/aviators.png"
    );
    hat1_preload = p.loadImage(
      "https://www.chriscastle.com/temp/chrisg/cowboy.png"
    );
    shirt1_preload = p.loadImage(
      "https://chriscastle.com/temp/chrisg/fishnetShirt.png"
    );
    glasses2_preload = p.loadImage(
      "https://chriscastle.com/temp/chrisg/wreckingBallSunglasses.png"
    );
    hat2_preload = p.loadImage(
      "https://chriscastle.com/temp/chrisg/wreckingBallHair2.png"
    );
    shirt2_preload = p.loadImage(
      "https://chriscastle.com/temp/chrisg/wreckingBallTop.png"
    );
    mic = p.loadImage("https://chriscastle.com/temp/chrisg/mic.png");
  };

  p.setup = function () {
    let cnv = p.createCanvas(640, 480);

    cnv.position(100, 150);

    video = p.createCapture(p.VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
  };

  function gotPoses(poses) {
    if (poses.length > 0) {
      pose = poses[0].pose;
    }
  }

  function modelLoaded() {
    console.log("poseNet ready");
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function ({ currentSong,signout,changeSong }) {
    //set parent functions
    logout = signout;
    newSong = changeSong;

    let name = currentSong.name;
    let costume = currentSong.costume;
    filter = currentSong.filter;

    //empty costume vars
    glasses1= '';
    hat1='';
    shirt1='';
    glasses2= '';
    hat2='';
    shirt2='';

    // deconstruct costume object for draw function
    if (costume) {
      switch (name) {
        case "I'm Too Sexy":
          glasses1 = costume.glasses;
          hat1 = costume.hat;
          shirt1 = costume.shirt;
          break;
        case "Wrecking Ball":
          glasses2 = costume.glasses;
          hat2 = costume.hat;
          shirt2 = costume.shirt;
          break;
      }
    }
  };

  p.draw = function () {
    p.image(video, 0, 0);
    // p.image(video, 200, 200);

    if (pose) {
      let nose = pose.keypoints[0].position;
      let eye1 = pose.keypoints[1].position;
      let eye2 = pose.keypoints[2].position;
      let shoulder1 = pose.keypoints[5].position;
      let shoulder2 = pose.keypoints[6].position;
      let rightHip = pose.keypoints[12].position;
      let shirtScaleWidth = shoulder1.x - shoulder2.x;
      let shirtScaleHeight = shoulder1.y + rightHip.y;
      let scale = (eye1.x - eye2.x) / 250;

      //"I'm Too Sexy Costume"
      if (glasses1) {
        p.image(
          glasses1_preload,
          nose.x - 353 * scale,
          nose.y - 200 * scale,
          glasses1_preload.width * scale,
          glasses1_preload.height * scale
        );
      }
      if (hat1) {
        p.image(
          hat1_preload,
          pose.nose.x - 465 * scale,
          pose.nose.y - 650 * scale,
          (hat1_preload.width + 300) * scale,
          (hat1_preload.height + 100) * scale
        );
      }
      if (shirt1) {
        p.image(
          shirt1_preload,
          pose.rightShoulder.x - 200 * scale,
          pose.rightShoulder.y - 400 * scale,
          shirtScaleWidth + 100,
          shirtScaleHeight - 250
        );

        p.image(
          mic,
          pose.rightWrist.x - 100,
          pose.rightWrist.y - 300,
          mic.width,
          mic.height
        );
      }

      //"Wrecking Ball Costume"
      if (glasses2) {
        p.image(
          glasses2_preload,
          nose.x - 353 * scale,
          nose.y - 200 * scale,
          glasses2_preload.width * scale,
          glasses2_preload.height * scale
        );
      }
      if (hat2) {
        p.image(
          hat2_preload,
          pose.nose.x - 465 * scale,
          pose.nose.y - 650 * scale,
          (hat2_preload.width + 300) * scale,
          (hat2_preload.height + 100) * scale
        );
      }
      if (shirt2) {
        p.image(
          shirt2_preload,
          pose.rightShoulder.x - 200 * scale,
          pose.rightShoulder.y - 400 * scale,
          shirtScaleWidth + 100,
          shirtScaleHeight - 250
        );
        p.image(
          mic,
          pose.rightWrist.x - 100,
          pose.rightWrist.y - 300,
          mic.width,
          mic.height
        );
        
      }

      //"Tainted Love" and "Take On Me" filters
      if (filter) {
        switch (filter) {
          case "INVERT":
            p.filter(p.INVERT);
            p.image(
              mic,
              pose.rightWrist.x - 100,
              pose.rightWrist.y - 300,
              mic.width,
              mic.height
            );
            break;
          case "THRESHOLD, [0.4]":
            p.filter(p.THRESHOLD, [0.4]);
            p.image(
              mic,
              pose.rightWrist.x - 100,
              pose.rightWrist.y - 300,
              mic.width,
              mic.height
            );
            break;
          default:
            console.log("No filter for this song.");
        }
      }
    }
  };
  
  // creating a button with a saveAsCanvas function to create and save a screenshot
  const saveImageBtn = p.createElement(
    "button",
    '<i style="color:rgb(9, 255, 0)" class="fas fa-camera fa-3x"></i>'
  );
  saveImageBtn.position(20, 270);
  saveImageBtn.mousePressed(saveAsCanvas);
  //function that allows pictures to be saved on a local device
  function saveAsCanvas() {
    p.save("karaoke_canvas.png");
  }
  
  //button to reset the page
  const resetBtn = p.createElement(
    "button",
    '<i style="color:rgb(9, 255, 0)" class="fas fa-redo fa-3x"></i>'
  );
  resetBtn.position(20, 370);
  resetBtn.mousePressed(resetSketch);
  //function to reload the page
  function resetSketch() {
    newSong({});
  }

  //button for signing out
  const signOutBtn = p.createElement(
    "button",
    '<i style="color:rgb(9, 255, 0)" class="fas fa-sign-out-alt fa-3x"></i>'
  );
  signOutBtn.position(20,450);
  signOutBtn.mousePressed(signOut);
  
  function signOut () {
    logout();
  }

}
// Here is the url for serving pics for dev http://www.chriscastle.com/temp/chrisg/ http://ftp.chriscastle.com/videos/yt1s.com%20-%20Miley%20Cyrus%20%20Wrecking%20Ball%20Karaoke%20Version.mp4
//ftp.chriscastle.com/videos/
export default sketch;
