const logoutBtn = document.getElementById("logout");
const brandTitle = document.querySelector("#brandTitle");
const vaccineContainer = document.querySelector(".row.recommended_vaccines_container");

const availableContainer = document.querySelector(".row.available_vaccines_container");
const notification = document.querySelector("#notification");
const close = document.querySelector('.popup-close');
const popup = document.querySelector(".popup-wrapper")
const popupBtn = document.querySelector('#popUpBtn')
const prefferedDate = document.querySelector('#selectedDate')
const altPhone = document.querySelector('#altPhone')
const userMssg = document.querySelector('#userMssg')
const alcoholConsumption = document.querySelector('#alcoholConsumption')
const tobaccoConsumption = document.querySelector('#tobaccoConsumption')
const currentSymptoms = document.querySelector('#currentSymptoms')
const appointmentContainer = document.querySelector("#appointment")

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

function appointmentTemplate(title = "", date = "", desc = ""){
    
    if (title = ""){
        output = `
            <div class="card ">
                          <div class="card-header " id="app">
                              <h4 class="card-title"></h4>
                              <p class="card-category">You dont have any appointments yet </p>
                          </div>
                          <div class="card-body ">
                              
                          </div>
                          <div class="card-footer ">
                              
                              
                          </div>
                      </div>`
                    }else {
                        output = `
                            <div class="card ">
                                      <div class="card-header " id="app">
                                          <h4 class="card-title">${title}</h4>
                                          <p class="card-category text-muted text-sm">On ${date}</p>
                                          <p class="card-category">${desc}</p>
                                      </div>
                                      <div class="card-body ">
                                          
                                      </div>
                                      <div class="card-footer ">
                                          
                                          
                                      </div>
                                  </div>
                    `
                    }
                    return output
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
        dbv.vaccines.where("active")
        // .between(vaccine.min_age, vaccine.min_age+ 10,true)
        .equals("true",true)
        .each(vaccine => {
            if (age <= vaccine.min_age <= age + 10){
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
function checkAppointement(){
    
    
    sessiondb.sessions.where("patientId","session_status")
    // .between(vaccine.min_age, vaccine.min_age+ 10,true)
    .equals(localStorage.getItem("currentUser"),"Incomplete",true, true)
    .each(session => {
      appointmentTemplate(session.vaccine_ID, session.patient_info.appointemntDate, session.session_status)
      
    });
  
//   }).catch(e =>{
//     console.log("Error", e)
//   })


}
checkAppointement()
vaccineContainer.addEventListener("click", e=>{
    console.log(e.target.id)
    if (e.target.id == "applyBtn"){
        console.log("signed up for vaccine")
        let currUser = localStorage.getItem("currentUser")
        db.users.update(username=currUser, {password: "w@r.k"}).then(function (updated) {
            if (updated){
                console.log ("Friend number 2 was renamed to Number 2");
            }else{
                console.log ("Nothing was updated - there were no friend with primary key: 2");
            }
            
            }).catch(e =>{
                console.log(e)
            });
    }

})

// close the popup form
close.addEventListener('click', () =>{
    popup.style.display="none";
});
// Update pending vacine array upon succesful addition 
function updateUserPendingVaccineInfo(currUser, newValue){
    db.users.update(username=currUser, {pending_vaccinations: newValue}).then(function (updated) {
        if (updated){
            console.log ("DB updated");
        }else{
            console.log ("Nothing was updated");
        }
        
        }).catch(e =>{
            console.log(e)
        });
}
// get value from the popup form 
popupBtn.addEventListener('click', e => {
    e.preventDefault()
    const schedule = {
        vaccineRegistered: e.target.dataset.id,
        userProfile : localStorage.getItem("currentUser"),
        alternatePhone : altPhone.value.trim(),
        appointemntDate : prefferedDate.value,
        userAddedMssg : userMssg.value,
        date : new Date(),
        userAlcoholConsumption : alcoholConsumption.value,
        userTobaccoConsumption : tobaccoConsumption.value,
        userSymptoms : currentSymptoms.value
    }
    
    patientId = localStorage.getItem("currentUser")
    patientInfo = schedule
    vaccineRegistered = e.target.dataset.id
    bookAppointment(patientId, patientInfo, vaccineRegistered)
    



    
    console.log("Successfully applied for vaccine")
})