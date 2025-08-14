document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting/refreshing page
    
    // Get all the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;
    const coffee = document.getElementById('coffee').value;
    const interest = document.querySelector('input[name="interest"]:checked').value;
    
    // Log form data to console
    console.log('Form Data:', {
        name: name,
        email: email,
        phone: phone,
        comments: comments,
        coffee: coffee,
        interest: interest
    });
    
    // Create thank you message using template literal
    const thankYouMessage = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${coffee} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;
    
    // Display the thank you message on the webpage
    document.getElementById('thankYouMessage').innerHTML = thankYouMessage;
    document.getElementById('thankYouMessage').style.display = 'block';
    
    // Hide the form (BONUS)
    document.getElementById('contactForm').style.display = 'none';
});