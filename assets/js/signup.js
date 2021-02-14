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
            username: person.phone, 
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