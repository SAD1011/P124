function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,550);
    canvas.position(560,115);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized!!');
}

function draw() {
    background('#FFA500');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}