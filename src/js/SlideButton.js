    var sliderimg = document.getElementById('img-mag')
    var mag = 0;
    var i = 0;

function prev() {
    if (i > 0) {
        mag += 20;
        i--;
            
        return setMag();
    } 

}

function next() {
  if (i < 3) {
        mag -= 20;
        i++;
  } else if (i == 3) {
      i = 0;
      mag = 0;
    }
    
   return setMag();
}

function setMag() {
    return sliderimg.setAttribute('style', 'margin-left:' + mag + '%');
}

