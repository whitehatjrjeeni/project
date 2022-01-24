Webcam.set({
    width:350,
    height:350,
    Image_format:'png',
    png_quality:90
}   
);
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
}
);}
console.log("ml5 version",ml5.version);
classifer=ml5.imageClassifer('link empty' ,modeloaded);
function modeloaded(){
console.log("modeloaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="and the second prediction is"+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}