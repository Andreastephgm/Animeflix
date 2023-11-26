//PRINCIPAL CONTAINER
const series = document.querySelectorAll('.series');
const movie = document.querySelectorAll('.movies');

const buttonRight = document.getElementById('buttonRight');
const buttonLeft = document.getElementById('buttonLeft');

buttonRight.addEventListener('click', () => {
    series.scrollLeft +=  series.offsetWidth;
});

buttonLeft.addEventListener('click', () => {
    series.scrollLeft -=  series.offsetWidth;
});
//ACTION CONTAINER
const series1 = document.querySelectorAll('#series1');
const movie1 = document.querySelectorAll('#movies1');

const buttonRight1 = document.getElementById('buttonRight1');
const buttonLeft1 = document.getElementById('buttonLeft1');

buttonRight1.addEventListener('click', () => {
    series1.scrollLeft +=  series1.offsetWidth;
});

buttonLeft1.addEventListener('click', () => {
    series1.scrollLeft -=  series1.offsetWidth;
});

//PARANORMAL CONTAINER
const series2 = document.querySelector('#series2');
const movie2 = document.querySelectorAll('#movies2');

const buttonRight2 = document.getElementById('buttonRight2');
const buttonLeft2 = document.getElementById('buttonLeft2');

buttonRight2.addEventListener('click', () => {
    series2.scrollLeft +=  series2.offsetWidth;
});

buttonLeft2.addEventListener('click', () => {
    series2.scrollLeft -=  series2.offsetWidth;
});

//HIGH SCHOOL CONTAINER
const series3 = document.querySelector('#series3');
const movie3 = document.querySelectorAll('#movies3');

const buttonRight3 = document.getElementById('buttonRight3');
const buttonLeft3 = document.getElementById('buttonLeft3');

buttonRight3.addEventListener('click', () => {
    series3.scrollLeft +=  series3.offsetWidth;
});

buttonLeft3.addEventListener('click', () => {
    series3.scrollLeft -=  series3.offsetWidth;
});

//CLASSICS CONTAINER
const series4 = document.querySelector('#series4');
const movie4 = document.querySelectorAll('#movies4');

const buttonRight4 = document.getElementById('buttonRight4');
const buttonLeft4 = document.getElementById('buttonLeft4');

buttonRight4.addEventListener('click', () => {
    series4.scrollLeft +=  series4.offsetWidth;
});

buttonLeft4.addEventListener('click', () => {
    series4.scrollLeft -=  series4.offsetWidth;
});

//KIDS CONTAINER
const series5 = document.querySelector('#series5');
const movie5 = document.querySelectorAll('#movies5');

const buttonRight5 = document.getElementById('buttonRight5');
const buttonLeft5 = document.getElementById('buttonLeft5');

buttonRight5.addEventListener('click', () => {
    series5.scrollLeft +=  series5.offsetWidth;
});

buttonLeft5.addEventListener('click', () => {
    series5.scrollLeft -=  series5.offsetWidth;
});

//PAGES
/*
const pageNumber = Math.ceil(series.length/5);
for(let i=0; i<pageNumber; i++){
    const indicator = document.createElement('button');
    document.querySelector('.mostPopularIndicator').appendChild(indicator);  
}
*/