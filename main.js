// width for sidenav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

}


// function to prevent right click

window.onload = function() {
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });
};





// search like google
function handleKeyPress(event, device) {
  // Check if Enter key is pressed
  if (event.keyCode === 13 || event.which === 13) {
    // Determine which input field to use based on the device
    var searchQuery;
    if (device === 'desktop') {
      searchQuery = document.getElementById('searchInputDesktop').value;
    } else if (device === 'mobile') {
      searchQuery = document.getElementById('searchInputMobile').value;
    }

    // Construct the search URL
    var searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);

    // Open the search URL in a new tab
    window.open(searchURL, '_blank');
  }
}


// image open js
function showFullscreen(img) {
  // Get the full screen image element and set its src
  var fullscreenImg = document.getElementById('fullscreenImg');
  fullscreenImg.querySelector('img').src = img.src;
  // Show the full screen image
  fullscreenImg.style.display = 'flex';
}

function hideFullscreen() {
  // Hide the full screen image
  document.getElementById('fullscreenImg').style.display = 'none';
}