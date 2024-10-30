let currentSlide = 0; // Keep track of the current slide
let currentDot = 0;
let currentBlock = 0;
const slides = document.querySelectorAll('.slide'); // Get all slides
const dots = document.querySelectorAll('.dot'); //Get all dots
const blocks = document.querySelectorAll('.blocks > div')

function showSlide() {
    // Remove the 'active' class from the current slide
    slides[currentSlide].classList.remove('active');
    dots[currentDot].classList.remove('dot_active');
    blocks[currentBlock].classList.remove('block_active')

    // Increment the current slide index
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to 0 when reaching the end
    currentDot = (currentDot + 1) % dots.length;
    currentBlock = (currentBlock + 1) % blocks.length;


    // Add the 'active' class to the next slide
    slides[currentSlide].classList.add('active');
    dots[currentDot].classList.add('dot_active')
    blocks[currentBlock].classList.add('block_active');
    
}

// Initialize the first slide as active
slides[currentSlide].classList.add('active');
dots[currentDot].classList.add('dot_active');
blocks[currentBlock].classList.add('block_active');

// Change slide every 3 seconds (3000 milliseconds)
sliderTimer = setInterval(showSlide, 3000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(sliderTimer)
        slides[currentSlide].classList.remove('active');
        dots[currentDot].classList.remove('dot_active');
        blocks[currentBlock].classList.remove('block_active');

        currentSlide = index;
        currentDot = index;
        currentBlock = index;

        slides[currentSlide].classList.add('active');
        dots[currentDot].classList.add('dot_active');
        blocks[currentBlock].classList.add('block_active');

        sliderTimer = setInterval(showSlide,3000);
    })

})


const header = document.querySelector('#TOPheader');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Add 'white' class if scrolled down
    if (scrollPosition > 0) {
        header.classList.add('white');
        
    } else {
        header.classList.remove('white');
        
    }
});


