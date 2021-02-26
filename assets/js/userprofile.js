db.transaction('rw', db.users, function () { 
    // sth
})
.then(function(){
    let currUser = localStorage.getItem("currentUser")
    db.users.get(currUser, user=>{
        return user
       
       }).then(function(user ){
        if (user){  
                // *********************************************************
                // display on to the user html page 
                brandTitle.innerHTML = user.user.name
                console.log("Read from table and updated")
                console.log(user.user.vaccine_alert.length)
            
        }else{
            console.log("User name Not Found!")
        }
        
       })

}).catch(e =>{
    console.log("Error", e)
})