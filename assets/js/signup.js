fname = document.querySelector("#fname")
lname = document.getElementById("lname")
phone = document.getElementById("phone")
email = document.getElementById("email")
password = document.getElementById("password")
birthdate = document.getElementById("birthdate")
gender = document.getElementById("sex")
subcity = document.getElementById("subcity")

form = document.querySelector("#signupForm")

function createUser(dbName, dbTable, value){
    let person = new User()
    person.name = fname.value.trim() + lname.value.trim()
    person.birthdate = birthdate.value
    person.email = email.value.trim()
    person.phone = phone.value.trim()
    person.password = password.value

    person.gender = gender.value.trim()
    person.subcity =  subcity.value.trim()
    return person
}
function checkForm(form)
  {
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.pwd1.focus();
        return false;
      }
      if(form.pwd1.value == form.username.value) {
        alert("Error: Password must be different from Username!");
        form.pwd1.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }

    alert("You entered a valid password: " + form.pwd1.value);
    return true;
  }
  function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}
function checkPasswordMatch() {
  var password = $("#password").val();
  var confirmPassword = $("#password3").val();

  if (password !== confirmPassword) {
      $("#msg2").html("Passwords do not match!");
  }
  else {
      $("#msg2").html("Passwords match.");
  }
}


// *********Sign up add to indexedDB**************
// add event listener to the form 
form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("user class created ")
    person = createUser()
    
    db.transaction('rw', db.users, function () { 
        // sth
    }).then(function(){
        db.users.put({
            username: person.email, 
            user: person
           }).then(function(){
               console.log("Database created and added to users table")
               localStorage.setItem("currentUser", person.phone)
            //    login()
           }).catch(e =>{
               console.log("Error", e)
           })
        
    }).catch (function (e) {
        console.error(e.stack);
        
    });
    
    
})