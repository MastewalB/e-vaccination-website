const logoutBtn = document.getElementById("logout");
const brandTitle = document.querySelector("#brandTitle");
const vaccineContainer = document.querySelector(".row.recommended_vaccines_container");

const availableContainer = document.querySelector(".row.available_vaccines_container");
const notification = document.querySelector("#notification");




function vaccineTemplate(imgurl, description_string, title_string, vaccineid){ 
    const template = 
    `<div class="col-xl-4 d-flex align-items-stretch " data-id="${vaccineid}">
    <div class="icon-box mt-4 mt-xl-0">
    <span class="iconify" data-icon="bx-bxs-right-arrow" data-inline="false"></span>
    <img src="${imgurl}" alt="" class="img-fluid">
    <h4 id="title">${title_string}</h4>
    <p id="desc">${description_string}</p>
    <button class="btn btn-primary" id ="applyBtn">Apply for Vaccine</button>
    </div>
    </div>`

    return template
}

function getAge(birthdate){
    let currentDate = new Date()
    var timestamp = Date.parse(birthdate);
    var birthdate = new Date(timestamp);
    const user_age = currentDate.getFullYear() - birthdate.getFullYear()
    return user_age

}


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
                let user_age = getAge(user.user.birthdate)
                checkVaccineUpdate(user_age)
                console.log("Read from table and updated")
                console.log(user.user.vaccine_alert.length)
            
        }else{
            console.log("User name Not Found!")
        }
        
       })

}).catch(e =>{
    console.log("Error", e)
})


// *************************fetch data from vaccine database*************************************
function checkVaccineUpdate(age){
    dbv.transaction('rw',dbv.vaccines, function () { 
        // sth
    })
    .then(function(){
        dbv.vaccines.where("min_age")
        .between(0, 85,true)
        .each(vaccine => {
            if (vaccine.min_age == age){
                console.log("AGee check passed")
                let template= vaccineTemplate("assets/img/departments-4.jpg", vaccine.description, vaccine.vaccine_name, vaccine.vaccine_name)
                let recommendedRow = vaccineContainer.querySelector(".row")
                recommendedRow.innerHTML += template
            }else{

                console.log("AGee check failed")
                let template= vaccineTemplate("assets/img/departments-4.jpg", vaccine.description, vaccine.vaccine_name, vaccine.vaccine_name)
                let availableRow = availableContainer.querySelector(".row")
                availableRow.innerHTML += template
                
            }
            console.log("Found: " + vaccine.vaccine_name);
        }).catch(error => {
            console.log(error.stack);
        });

    }).catch(e =>{
        console.log("Error", e)
    })
}
