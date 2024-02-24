const options = {year: 'numeric'}
document.getElementById('currentYear').textContent =new Date().toLocaleDateString('en-US',options);


const modified = {day: 'numeric',month: 'numeric',year: 'numeric',hour: 'numeric', minute: 'numeric'}
let oLastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = oLastModified.toLocaleDateString('en-US',modified)


//java script for the hamburger menu 
const mainnav = document.querySelector('.link')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

})


// javascript for dark mode

let backgound_box = document.querySelector(".background-box");

let toggle_box = document.querySelector(".toggle-box");

let cirlce = document.querySelector(".circle");

let checkbox = document.getElementById("checkbox");

let body = document.querySelector('body');
// let header = document.querySelector('header');
// let headerLinks = document.querySelectorAll('header a')
let cards = document.querySelector('.cards');
let cards_h2 = document.querySelector('.cards h2');
let card1 = document.querySelector('.card1');
let land = document.querySelector('.land');
roofing = document.querySelector('roofing');




toggle_box.onclick = () =>{

    if(checkbox.checked){
        cirlce.style.left = "40px";
        cirlce.style.backgroundColor = "#000";
        toggle_box.style.backgroundColor = "#fff";
        body.classList.toggle('dark-mode');
        // header.classList.toggle('dark-mode');
        // headerLinks.forEach(link => link.classList.toggle("dark-mode"));
        cards.classList.toggle('dark-mode');
        cards_h2.classList.toggle('dark-mode');
        card1.classList.toggle('dark-mode');
        land.classList.toggle('dark-mode');
        roofing.classList.toggle('dark-mode');
    
    }
    else{
        cirlce.style.left = "0px";
        cirlce.style.backgroundColor = "#fff";
        toggle_box.style.backgroundColor = "#000"

    }
}

// calandar

let month = document.querySelector('.month');
let day = document.querySelector('.day');
let date = document.querySelector('.date');
let year = document.querySelector('.year');

let currentDate = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

month.innerHTML = months[currentDate.getMonth()];

day.innerHTML = days[currentDate.getDay()];

date.innerHTML = currentDate.getDate();

year.innerHTML = currentDate.getFullYear();


// page visits

const visitsDisplay = document.querySelector('.visits')
let lastVisit = new Date(window.localStorage.getItem('lastVisit-ls'));

window.localStorage.setItem('lastVisit-ls', currentDate);

let timeDifference = currentDate - lastVisit;

let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

if (daysDifference < 1) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
}

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;
numVisits++; // Increment the number of visits
window.localStorage.setItem('numVisits-ls', numVisits);
