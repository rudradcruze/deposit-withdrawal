document.getElementById('buttonSubmit').addEventListener('click', function(){
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    if (userEmail == "rudra@gmail.com" && userPassword == "joybangla")
    {
        window.location.href = 'bank.html';
    }
    else
    {
        alert('Please enter a valid username and password!');
    }
})