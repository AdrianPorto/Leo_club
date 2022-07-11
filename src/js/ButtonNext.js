
    var magimg = document.getElementById('img-btn')
    var images = ['gato1.jpg', 'gato2.jpg', 'gato3.jpg', 'gato4.jpg']
    var i = 0;

    function btnPrev() {
        if (i <= 0) i = images.length;
        i--;
        console.log(images[i]);
        return  setImg();
    }
    function btnNext() {
        if (i >= images.length - 1) i = -1;
        i++;
        console.log(images[i]);
        return setImg(); 
    }
    function setImg() {
        return magimg.setAttribute('src', 'img/' + images[i]);
     
        }
    