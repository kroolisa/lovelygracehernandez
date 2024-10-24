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
         // Extract the width percentage from the style
         const widthPercentage = skillLevel.style.width;
 
         // Create a label element to display the percentage
         const percentageLabel = document.createElement('span');
         percentageLabel.textContent = widthPercentage;
         percentageLabel.style.position = 'absolute';
         percentageLabel.style.left = '50%';
         percentageLabel.style.top = '50%';
         percentageLabel.style.transform = 'translate(-50%, -50%)';
         percentageLabel.style.color = '#fff';
         percentageLabel.style.fontSize = '.90em';
 
         // Ensure the parent is positioned
         skillLevel.parentElement.style.position = 'relative';
 
         // Append the label inside the skill bar
         skillLevel.appendChild(percentageLabel);
     });
});

window.addEventListener('scroll', function () {
  let offset = window.pageYOffset;

  elements.forEach((element) => {
    let offset = ((window.pageYOffset) - element.offsetTop) * 0.8
    element.style.backgroundPositionY = `${offset}px`;
  });
});

const elements = document.querySelectorAll('#banner');