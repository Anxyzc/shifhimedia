// Get all dropdown-main elements
var dropdowns = document.querySelectorAll('.dropdown-main');

// Get the main element
var mainElement = document.querySelector('main');

// Function to add 'blur-content' class to main with a delay
const addBlurClassWithDelay = () => {
    setTimeout(() => {
        if (mainElement) {
            mainElement.classList.add('blur-content');
        }
    }, 1000); // Adjust the delay time in milliseconds (e.g., 500 for half a second)
};

// Function to remove 'blur-content' class from main with a delay
const removeBlurClassWithDelay = () => {
    setTimeout(() => {
        if (mainElement) {
            mainElement.classList.remove('blur-content');
        }
    }, 200); // Adjust the delay time in milliseconds (e.g., 500 for half a second)
};

// Add event listeners to all dropdown-main elements
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', addBlurClassWithDelay);
    dropdown.addEventListener('mouseover', addBlurClassWithDelay);
    dropdown.addEventListener('mouseout', removeBlurClassWithDelay);
});
