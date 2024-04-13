// const loginbtnButton = document.getElementById('loginbtn');

// loginbtnButton.addEventListener('click', function() {

//   window.open('login.html', '_blank');
// });



const loginbtnButton = document.getElementById('loginbtn');
const usernameInput = document.getElementById('username');

loginbtnButton.addEventListener('click', function(event) {
    if (usernameInput.value.trim() === "") {
        event.preventDefault(); // Prevent the default form submission
        alert("enter your uid or addmission id.");
    } else {
        window.open('login.html', '_self');
    }
});




  // Get the username from the query parameters
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('username');

  // Set the username in the readonly input field
  document.getElementById('username').value = username;


  window.onload = function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
};