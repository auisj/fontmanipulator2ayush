function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Intitialized');
}
function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
    }
}