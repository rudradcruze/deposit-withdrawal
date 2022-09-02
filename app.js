document.getElementById('buttonSubmit').addEventListener('click', function(){
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    if (userEmail == "rudra@gmail.com" && userPassword == "joybangla")
    {
        console.log("valid user");
    }
    else
    {
        console.log("invalid user");
    }
})