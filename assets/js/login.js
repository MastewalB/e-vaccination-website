// ******login********
inputUserName = document.getElementById("exampleInputEmail1")
inputUserPassword = document.getElementById("exampleInputPassword1")
loginForm = document.getElementById("loginForm")

// ***********Login functionalities *****************
loginForm.addEventListener("submit", e=>{
    e.preventDefault()
    login()
    console.log(localStorage.getItem("currentUser"))
})

function login(){
    db.transaction('rw', db.users, function () { 
        // sth
    })
    .then(function(){
        let inputUserNameData = inputUserName.value.trim()
        let inputUserPasswordData = inputUserPassword.value.trim()
        db.users.get({username:inputUserNameData}, user=>{
            return user
           
           }).then(function(user ){
            if (user){
                if (inputUserPasswordData == user.user.password){
                    console.log("Logged in")
                    localStorage.setItem("currentUser", inputUserNameData)
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