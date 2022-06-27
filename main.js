x=0;
y = 0;
drawCircle ="";
drawRect ="";
SpeechRecognition = window.webkitSpeechRecognition;
Recognition = new SpeechRecognition();


function preload(){

}
function setup(){
    canvas = createCanvas(900, 600);

}
function draw(){
    if(drawCircle=="set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML ="Circle Is Drawn";
        drawCircle = "";

    }
    if(drawRect=="set"){
        
        rect(x,y,70,91);
        document.getElementById("status").innerHTML ="Rectangle Is Drawn";
        drawRect = "";

    }


}
function start(){
    document.getElementById("status").innerHTML ="Listening..."
    Recognition.start();

}
Recognition.onresult = function(event){


console.log(event)
var content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "The Speech Has Been Recognised As: " + content;
if (content == "circle"){
    x= Math.floor(Math.random() * 900);
    y= Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started Drawing Circle";
    drawCircle = "set"
}
if (content == "rectangle"){
    x= Math.floor(Math.random() * 900);
    y= Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started Drawing Rectangle";
    drawRect = "set"
}

}