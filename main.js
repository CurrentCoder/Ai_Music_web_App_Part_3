var leftWristX  = 0;
var leftWristY  = 0;

var rightWristX = 0;
var rightWristY = 0;

var Song1 = "Stephen Sanchez - Until I Found You - Piano Cover by Pianella Piano.mp3";
var Song2 = "JVKE_-_golden_hour_ft_Cat_Burns_I_getmp3.pro_.mp3";
Video = "";

function Preload()
{
    loadSound(Song1, Song2);
}

function setUp()
{
    canvas = createCanvas(0, 0, 640, 420);
    canvas.center();

    Video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function Draw()
{
    image(Video, 0, 0, 640, 420);
}


function modelLoaded()
{
    console.log('poseNet Is Inizialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
           console.log(results);
           ScoreRightWrist = results[0].pose.keypoints[10].score;
           ScoreleftWrist = results[0].pose.keypoints[9].score;
           console.log("ScoreRightWrist = " + ScoreRightWrist +  "score leftWrists = " + ScoreleftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristY + "rightWristY" + rightWristY);
    }
}
