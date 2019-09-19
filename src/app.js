import './scss/main.scss';
import './scss/template.scss';
import './scss/slideshow.scss';
import './scss/typography.scss';
import './scss/about.scss';

var CHESLIDESHOW = require('./js/slideshow.js').default;

document.addEventListener('DOMContentLoaded', function(){

    var prevArrow = document.getElementsByClassName('slideshow-left-control')[0];
    var nextArrow = document.getElementsByClassName('slideshow-right-control')[0];

    prevArrow.addEventListener('click', CHESLIDESHOW.prevSlide);
    nextArrow.addEventListener('click', CHESLIDESHOW.nextSlide);
});

