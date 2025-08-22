let form = document.getElementById("contactForm");

function onFormSubmit() {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    
    console.log(dataObject);
    const name = dataObject.name;
    const coffee = dataObject.coffee;
    const comments = dataObject.comments;
    const interest = dataObject.interest;
    const email = dataObject.email;
    const phone = dataObject.phone;
    
    const thankYouMessage = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${coffee} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;
  // Display the thank you message on the webpage
  document.getElementById('thankYouMessage').innerHTML = thankYouMessage;
  document.getElementById('thankYouMessage').style.display = 'block';
  
  // Hide the form (BONUS)
  document.getElementById('contactForm').style.display = 'none';
}

form.addEventListener("submit", onFormSubmit);

