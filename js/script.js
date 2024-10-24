document.querySelectorAll('.nav-header a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        const offset = 80;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    // Get all skill level divs
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skillLevel => {
        const widthPercentage = skillLevel.style.width;

        const percentageLabel = document.createElement('span');
        percentageLabel.textContent = widthPercentage;
        percentageLabel.style.position = 'absolute';
        percentageLabel.style.left = '50%';
        percentageLabel.style.top = '50%';
        percentageLabel.style.transform = 'translate(-50%, -50%)';
        percentageLabel.style.color = '#fff';
        percentageLabel.style.fontSize = '.90em';

        skillLevel.parentElement.style.position = 'relative';

        skillLevel.appendChild(percentageLabel);
    });
});

window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('#banner');

    elements.forEach((element) => {
        let offset = window.pageYOffset - element.offsetTop;

        if (offset < 0) {
            offset = 0; 
        } else if (offset > element.clientHeight) {
            offset = element.clientHeight; 
        }

        let parallaxEffect = offset * 0.5;

        element.style.backgroundPositionY = `${parallaxEffect}px`;
    });
});

const canvas = document.getElementById('textCanvas');
const ctx = canvas.getContext('2d');

ctx.font = 'italic 3em "Source Code Pro"'; 
ctx.fillStyle = 'black'; 
ctx.textBaseline = 'middle'; 
ctx.textAlign = 'left'; 

ctx.shadowColor = 'rgba(255, 255, 255, 1)'; 
ctx.shadowOffsetX = 2; 
ctx.shadowOffsetY = 2; 
ctx.shadowBlur = 0; 

ctx.fillText('<!--LGMH-->', 10, canvas.height / 2);