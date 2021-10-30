status=""

function setup()
{
    canvas=createCanvas(500,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function start()
{
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:object detected";
    object_name=document.getElementById("input_box").value;
}

function modelLoaded()
{
    console.log(modelLoaded);
    status=true;
}

function draw()
{
    image(video,0,0,500,350);
}