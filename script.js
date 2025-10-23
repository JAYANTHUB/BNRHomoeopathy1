document.addEventListener('DOMContentLoaded', function() {
    const sliderBackground = document.getElementById('slider-background');
    const slideTextElement = document.getElementById('slide-text');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    let currentSlideIndex = 0;

    // 1. Define your slider images and corresponding text
    // IMPORTANT: Replace 'image1.jpg', 'image2.jpg', etc., with your actual file paths
    const slides = [
        { 
            image: 'placeholder-mountain.jpg', // The original image
            text: 'Akriti Orthopedic Clinic & Research Centre, Dhanbad'
        },
        { 
            image: 'image2.jpg', // ADD YOUR SECOND IMAGE HERE
            text: 'Advanced treatment for joint and bone disorders'
        },
        { 
            image: 'image3.jpg', // ADD YOUR THIRD IMAGE HERE
            text: 'Homeopathic solutions for chronic pain relief'
        }
        // Add more slide objects here
    ];

    // Function to update the UI based on the currentSlideIndex
    function updateSlider() {
        // Update background image
        sliderBackground.style.backgroundImage = `url('${slides[currentSlideIndex].image}')`;
        
        // Update dynamic text
        slideTextElement.textContent = slides[currentSlideIndex].text;
    }

    // Initialize the slider with the first slide
    updateSlider();

    // 2. Navigation Logic for Next Button
    nextButton.addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop back to 0 when reaching the end
        updateSlider();
    });

    // 3. Navigation Logic for Previous Button
    prevButton.addEventListener('click', function() {
        // Go back one, or loop to the last slide if currently at 0
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });
});

// photo gallery start scripts

const imageModal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        
        // Listen for when the modal is about to be shown
        imageModal.addEventListener('show.bs.modal', event => {
            // Get the link element that triggered the modal
            const opener = event.relatedTarget; 
            
            // Extract the data attributes from the trigger link
            const imageUrl = opener.getAttribute('data-bs-image-url');
            const imageCaption = opener.getAttribute('alt'); // Use the alt text as the caption
            
            // Update the modal content
            modalImage.src = imageUrl;
            modalCaption.textContent = imageCaption;
        });
		
		// end photo gallery