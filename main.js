var LefteyeX =0;
var LefteyeY =0;
var RighteyeX =0;
var RighteyeY =0;
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
   //Get the x and y co-ordinated for both left and right eye and store it inside respective variables
    
    
    
    
  }
}

function draw()    {
  image(video, 0, 0, 310, 300);
  poseNet.on('pose', gotPoses);
  stroke(255, 0, 0);
  fill(255,255,255,0);
  
  //write code to draw a circle on the left and right eye
   
  

}

function setup() {
  canvas = createCanvas(310, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
}
function modelReady() {
  console.log('Model Loaded');
}



function take_snapshot(){    
  save('myCanvas.png');
}