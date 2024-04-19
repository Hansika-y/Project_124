noseX=0;
noseY=0;
difference = 0;
rightWristX = 0
leftWristX = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093')
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}
