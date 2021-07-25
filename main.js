Webcam.set({
    widht:350,
   height:300,
   image_format:'png',
   png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
   Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
   });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2iaLiZ9Wm/model.json', modelLoaded);     

function modelLoaded(){
   console.log("Model Loaded !")
}

function image_identification(){
   img=document.getElementById("captured_image");
   classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
   console.error(error);
    }else{
       console.log(results);
       document.getElementById("result_emotion_name_1").innerHTML=results[0].label;
       prediction_1=results[0].label;
       toSpeak="";
    }
    
    
    if(results[0].label=="Thumbs up"){
        document.getElementById("update_emoji_1").innerHTML="&#128077;";
       toSpeak="All the Speak";
    }

    


   if(results[0].label=="Victory"){
       document.getElementById("update_emoji_1").innerHTML="&#9996;";
       toSpeak="That was a marvellous victory";
   }

   if(result[0].label=="Superb"){
      document.getElementById("update_emoji_1").innerHTML="&#128076;";
      toSpeak="This is looking amazing";
   }
  speak();
}

function speak(){
   var synth =window.SpeechSynthesis;
   speak_data_1="The  prediction is" + prediction_1;
   
   var utterThis = new SpeechSynthesisUtterance(speak_data_1);
   synth.speak(utterThis);
}

