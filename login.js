const loginbtnButton = document.getElementById('loginbtn');
const passwordInput = document.getElementById('password');

loginbtnButton.addEventListener('click', function(event) {
    if (passwordInput.value.trim() === "") {
        event.preventDefault(); // Prevent the default form submission
        alert("Enter your password.");
    } else {
        
        window.open('main.html', '_blank');
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

    const input = document.getElementById('username');
    const accountDiv = document.getElementById('account');
    const userText = accountDiv.querySelector('#user');
    const userIdText = accountDiv.querySelector('.userid');

    // Add an event listener to the input field
    input.addEventListener('input', function() {
        // Get the value from the input field
        const inputValue = this.value;
        // Set the value to the div's text content
        userText.textContent = inputValue;
        userIdText.textContent = inputValue;
    });