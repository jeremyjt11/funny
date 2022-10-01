noseX=0;
noseY=0;
erasX=0;
erasY=0;
function preload() {
clownsnose=loadImage('https://i.postimg.cc/9FQTDsQ8/Screenshot-363-removebg-preview.png')
eras=loadImage('https://i.postimg.cc/6p7Mv8pm/48-487939-rudolph-ears-clip-art-reindeer-antlers-svg-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw() {
image(video,0,0,300,300);

image(clownsnose,noseX,noseY,30,30)
image(eras,erasX,erasY,200,200)
}

function take_snapshot(){
    save('myFillterImafe.png');
}

function modelLoaded(){
    console.log('poseNet Is Initialized')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x -15;
        noseY=results[0].pose.nose.y -15;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
          erasX=results[0].pose.leftEar.x -140;
          erasY=results[0].pose.leftEar.y -230;
        console.log("left_ear x = " + results[0].pose.leftEar.x);
        console.log("right_ear y = " + results[0].pose.rightEar.y);
    }
}

