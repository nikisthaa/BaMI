// Get all the elements with the class "toggle-dropdown"
const toggleButtons = document.querySelectorAll('.toggle-dropdown');

// Attach a click event listener to each toggle button
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Find the closest .w3-container element to the clicked button
    const container = button.nextElementSibling;

    // Toggle the display property of the container
    if (container.style.display === 'none' || container.style.display === '') {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
});

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
} else {
    mySidebar.style.display = 'block';
}
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}