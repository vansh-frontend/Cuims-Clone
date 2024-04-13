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
function searchOnGoogle() {
  var searchQuery = document.getElementById('searchInput').value;
  var searchURL ='https://www.google.com/search?q='+searchQuery;
  window.open(searchURL,'_blank');
}


// event listener for press eneter for search on google
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    searchOnGoogle();
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