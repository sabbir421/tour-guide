document.getElementById('login-button').addEventListener('click', function(){
  const emailFild=  document.getElementById('user-email');
  const userEmail = emailFild.value;
  console.log(userEmail);

  const passwordFild = document.getElementById('user-passward');
  const userPassward = passwordFild.value;
  console.log(userPassward);
    if (userEmail=='sabbir@.com' && userPassward==12345) {
        window.location.href= "bank.html"
    }
    else{
        console.log('pass or user name not valid')
    }
})