window.onload = function() {

    var sliderArrowLeft = document.querySelector('.left')
    var sliderArrowRight = document.querySelector('.right')
//визначення пристрою(показ приховування кнопок)--------------
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        sliderArrowLeft.style.visibility = 'hidden';
        sliderArrowRight.style.visibility = 'hidden';
    } else {
        sliderArrowLeft.style.visibility = 'visible';
        sliderArrowRight.style.visibility = 'visible';
    }
//управління кнопками--------------------
    sliderArrowLeft.addEventListener("click", function(event) {
        arrsliderImg.push(arrsliderImg.shift());
        for (var i = 0; i < arrsliderImg.length; i++) {
            arrsliderImg[i].setAttribute('position', i);
        }
    });

    sliderArrowRight.addEventListener("click", function(event) {
        arrsliderImg.unshift(arrsliderImg.pop());
        for (var i = 0; i < arrsliderImg.length; i++) {
            arrsliderImg[i].setAttribute('position', i);
        }
    });

//слайдер----------------
    var initialPoint;
    var finalPoint;
    var sliderImg = document.querySelectorAll('.slider-img');
//    перетворення в мавсив з подальшим застосуванням всіх вункцій масиву------
    var arrsliderImg = Array.from(sliderImg); 

    document.querySelector('.slider').addEventListener('touchstart', function(event) {
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    });

    document.querySelector('.slider').addEventListener('touchend', function(event) {
        event.stopPropagation();
        finalPoint = event.changedTouches[0];
        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 50 || yAbs > 50) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX) {
                    arrsliderImg.push(arrsliderImg.shift());
                } else {
                    arrsliderImg.unshift(arrsliderImg.pop());
                }
                for (var i = 0; i < arrsliderImg.length; i++) {
                    arrsliderImg[i].setAttribute('position', i);
                }
            }
        }
    });
};