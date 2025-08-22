let form = document.querySelector("form");

function onFormSubmit() {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    
    console.log(dataObject);
    
    let welcome = document.getElementById("loginMessage");
    welcome.textContent = `Welcome, ${dataObject.username}! You are logged in!`;
    welcome.style.display = "block";
    form.style.display = "none";
    form.reset()
}

form.addEventListener("submit", onFormSubmit);

