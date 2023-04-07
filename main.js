function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IN-UYTe1R/model.json', modelReady);
}


function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255 ) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

  if (results[0].label == "vaca") {
      img.src = 'vuca.gif';
      img1.src = 'chorro img.jpg';
      img2.src = 'goto.jpg';
      img3.src = 'ovelho.jpg';
    } else if (results[0].label == "cão") {
      img.src = 'vuca.jpg';
      img1.src = 'chorro.gif';
      img2.src = 'goto.jpg';
      img3.src = 'ovelho.jpg';
    } else if (results[0].label == "gato") {
      img.src = 'vuca.jpg';
      img1.src = 'chorro img.jpg';
      img2.src = 'goto.gif';
      img3.src = 'ovelho.jpg';
    }
else if (results[0].label == "ovelha") {
    img.src = 'vuca.jpg';
    img1.src = 'chorro img.jpg';
    img2.src = 'goto.jpg';
    img3.src = 'avolhe.gif';
  }
  else{
    img.src = 'vuca.jpg';
    img1.src = 'chorro img.jpg';
    img2.src = 'goto.jpg';
    img3.src = 'ovelho.jpg';
  }
}
}