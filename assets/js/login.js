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



function login() {
    db.transaction('rw', db.users, function () {
        // sth
    })
        .then(function () {
            let inputUserNameData = inputUserName.value.trim()
            let inputUserPasswordData = inputUserPassword.value.trim()
            db.users.get({ username: inputUserNameData }, user => {
                return user

            }).then(function (user) {
                if (user) {
                    if (inputUserPasswordData == user.user.password) {
                        console.log("Logged in")
                        localStorage.setItem("currentUser", inputUserNameData)
                    } else {
                        console.log("Password and username didnt match!!!!")
                    }
                } else {
                    console.log("User name Not Found!")
                }

            })

        }).catch(e => {
            console.log("Error", e)
        })
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