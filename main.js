function preload()
{
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    
    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(0, 0, 650, 25);
    rect(0, 455, 650, 25);
    rect(0, 0, 25, 500);
    rect(615, 0, 25, 500);

}


function take_snapshot()
{
    save('student_name.png');
}