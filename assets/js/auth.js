var SignUpForm = document.querySelector('.sign-up');
var SignInForm = document.querySelector('.sign-in');

SignUpForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    handleSignUp();
})

function handleSignUp() {
    var email = document.getElementById('su-email').value;
    var password = document.getElementById('su-password').value;
    var confPassword = document.getElementById('cf-password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    if (password !== confPassword) {
      alert('Passwords do not match.');
      return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.querySelector('h1').textContent = user.email;
      SignUpForm.style.display = 'none';
      SignInForm.style.display = 'none';

    }
  });