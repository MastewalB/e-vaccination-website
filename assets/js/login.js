// ******login********
var inputUserName = document.getElementById("exampleInputEmail1")
var inputUserPassword = document.getElementById("exampleInputPassword1")
var loginForm = document.getElementById("loginForm")

// ***********Login functionalities *****************
if (loginForm) {
    loginForm.addEventListener("submit", e => {
        e.preventDefault()
        login()
        console.log(localStorage.getItem("currentUser"))
    })
}



function login(){

    let inputUserNameData = inputUserName.value.trim()
    let inputUserPasswordData = inputUserPassword.value.trim()
    if (inputUserNameData.includes("@ykstuff.com")){
        db.transaction('rw', db.workers, function () { 
            // sth
        })
        .then(function(){
            db.workers.get({username:inputUserNameData}, user=>{
                return user
               
               }).then(function(user ){
                if (user){
                    if (inputUserPasswordData == user.user.password){
                        console.log("Logged in")
                        location.replace("workers.html")
                        localStorage.setItem("currentUser", inputUserNameData) 
                        // brandTitle.innerHTML = user.user.name
                    }else{
                        console.log("Password and username didnt match!!!!")
                    }
                }else{
                    console.log("User name Not Found!")
                }
                
               })
            
        }).catch(e =>{
            console.log("Error", e)
        })

    }else if (inputUserNameData.includes("@ykadmin.com")){
        console.log("ADmin")
        db.transaction('rw', db.admin, function () { 
            
        })
        .then(function(){
            db.admin.get({username:inputUserNameData}, user=>{
                return user
               
               }).then(function(user ){
                if (user){
                    console.log("here")
                    if (inputUserPasswordData == user.admin.password){
                        console.log("Logged in")
                        location.replace("Admin.html")
                        localStorage.setItem("currentUser", inputUserNameData) 
                        // brandTitle.innerHTML = user.user.name
                    }else{
                        console.log("Password and username didnt match!!!!")
                    }
                }else{
                    console.log("User name Not Found!")
                }
                
               })
            
        }).catch(e =>{
            console.log("Error", e)
        })

    }else{
        db.transaction('rw', db.users, function () { 
            // sth
        })
        .then(function(){
            db.users.get({username:inputUserNameData}, user=>{
                return user
               
               }).then(function(user ){
                if (user){
                    if (inputUserPasswordData == user.user.password){
                        console.log("Logged in")
                        location.replace("user.html")
                        localStorage.setItem("currentUser", inputUserNameData) 
                        // brandTitle.innerHTML = user.user.name
                    }else{
                        console.log("Password and username didnt match!!!!")
                    }
                }else{
                    console.log("User name Not Found!")
                }
                
               })
            
        }).catch(e =>{
            console.log("Error", e)
        })

    }
    
}

function logout() {
    if (window.confirm("Are you sure you want to log out ? \n press ok to continue or cancel to quit operation")) {
        localStorage.clear()
        location.replace("index.html")
    }
    else {
        console.log("log out cancelled")
    }
}