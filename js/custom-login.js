document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log('Login attempt for username:', username);
    
    const loginMessage = `🥒 PICKLE RICK SAYS WELCOME, ${username.toUpperCase()}! 🥒`;
    document.getElementById('loginMessage').innerHTML = loginMessage;
    document.getElementById('loginMessage').style.display = 'block';
    document.getElementById('loginMessage').style.color = 'lime';
    document.getElementById('loginMessage').style.fontSize = '24px';
    document.getElementById('loginMessage').style.fontWeight = 'bold';
    document.getElementById('loginMessage').style.textAlign = 'center';
    document.getElementById('loginForm').style.display = 'none';
    
    // Change page background
    document.body.style.background = 'linear-gradient(45deg, lime, yellow, cyan, magenta)';
    
    // Show embedded video with autoplay-  I cop
    setTimeout(() => {
        document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/GTIJU099F9I?autoplay=1&mute=0';
        document.getElementById('pickleRickVideo').style.display = 'block';
    }, 1500);
    
    console.log('PICKLE RICK LOGIN SUCCESSFUL!');
});


// this is a pickle rick roll. I was just kidding but let me tell you how it works. It uses variables to change the elements of the screen. 
//I don't know why this isn't the submit process we have been doing, because it is an event listener. But this listener Is better because it allows 
//any event so if you click enter in any fields or click submit it will catch it. If you only target the button you could lose data. 

//I hope you at least laughed a little. 


