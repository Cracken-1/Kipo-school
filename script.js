// script.js

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Responsive Navigation Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// AJAX Course Loading with Correction
document.addEventListener('DOMContentLoaded', () => {
    fetch('courses.json')
        .then(response => response.json())
        .then(data => {
            const courseList = document.getElementById('course-list');
            data.courses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('course-card');
                courseCard.innerHTML = `
                    <img src="${course.image}" alt="${course.title}">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <a href="#" class="details-button">View Details</a>
                `;
                courseList.appendChild(courseCard);
            });
        })
        .catch(error => console.error('Error loading courses:', error));
});


// Google Maps Integration
function initMap() {
    const location = { lat: -25.363, lng: 131.044 }; // Example coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = function() {
    if (document.getElementById('map')) {
        initMap();
    }
}
``
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.form-popup').classList.add('active');
        document.querySelector('.mfp-bg').classList.add('active');
    });
});

document.querySelector('.mfp-bg').addEventListener('click', function() {
    document.querySelector('.form-popup').classList.remove('active');
    document.querySelector('.mfp-bg').classList.remove('active');
});


//back to top button
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

$(document).ready(function () {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
});


<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXX-X"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-XXXXXX-X');
</script>

