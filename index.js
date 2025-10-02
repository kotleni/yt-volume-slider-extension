const SLIDER_RANGE_MAX = 400;

// Inject css
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.type = 'text/css';
linkElement.href = browser.runtime.getURL('index.css');
document.head.appendChild(linkElement);

const video = document.body.querySelector('.video-stream');

// Remove old custom slider if exist
const prevSlider = document.body.querySelector('.custom-slider-container');
if(prevSlider) {
    prevSlider.remove();
}

const container = document.getElementsByClassName('ytp-volume-area')[0];
const sliderDiv = document.createElement('div');
sliderDiv.className = 'custom-slider-container';

const slider = document.createElement('input');
slider.className = 'custom-slider';
slider.type = 'range';
slider.value = video.volume * SLIDER_RANGE_MAX;
slider.min = 0;
slider.max = SLIDER_RANGE_MAX;
slider.oninput = function (e) {
    video.volume = e.target.value / SLIDER_RANGE_MAX;
};

sliderDiv.appendChild(slider);
container.appendChild(sliderDiv);