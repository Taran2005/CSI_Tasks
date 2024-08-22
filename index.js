const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-feature');
        } else {
            entry.target.classList.remove('show-feature');
        }
    });
});
const hiddenFeatures = document.querySelectorAll('.hidden-feature');
hiddenFeatures.forEach((el) => observer1.observe(el));



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-hero');
        } else {
            entry.target.classList.remove('show-hero');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden-hero');
hiddenElements.forEach((el) => observer2.observe(el));