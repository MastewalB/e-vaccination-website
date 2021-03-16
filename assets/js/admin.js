const row = document.querySelector(".workersTable tbody")
const addBtn = document.querySelector("#addWorkerBtn")
const close = document.querySelector(".popup-close");
const popup = document.querySelector(".popup-wrapper")
const addWorker = document.querySelector("#addWorkerForm")
const startSessionFormDiv = document.querySelector(".sessionForm")
const startSessionBtn = document.querySelector("#startNewSession")
const activateBtn = document.querySelector("#activateBtn")
const chartContainer = document.querySelector(".chartDiv")


const chooseVaccine = document.querySelector("#vaccine_name")
const vaccineTable = document.querySelector(".vaccineTable tbody")


// form elements
const workername = document.querySelector("#workeradd_name")
const workerphone = document.querySelector("#workeradd_phone_number")
const workeremail = document.querySelector("#workeradd_email")
const workerpassword = document.querySelector("#workeradd_password")
const workergender = document.querySelector("#workeradd_gender")
const workerbirthdate = document.querySelector("#workeradd_birthdate")
const workerdepartment = document.querySelector("#workeradd_department")
const workersubcity = document.querySelector("#workeradd_subcity")
const workerID = document.querySelector("#workeradd_worker_id")

// activate Session form elements 
const tag = document.querySelector("#min_age")
const sessionStartDay = document.querySelector("#startDate")
const duration = document.querySelector("#duration")
const vaccineName = document.querySelector("#vaccine_name")

// popup form 
addBtn.addEventListener("click", ()=>{

    popup.style.display="block";
  })
  
  // close the popup form
  close.addEventListener('click', () =>{
    popup.style.display="none";
  });

  function generateWorkerID(){
    return 'st' + Math.random().toString(36).substr(2, 7);
  }
  function generateWorkerpassword(){
    return '' + Math.random().toString(6).substr(2, 4);
  }
  function createWorker(){
    let person = new Worker()
    person.name = workername.value;
    person.phonenumber = workerphone.value;
    person.birthdate = workerbirthdate.value;
    person.password = generateWorkerpassword();
    person.email = person.name+"@ykstuff.com";
    person.gender = workergender.value
    person.subcity = workersubcity.value
  
    person.department = workerdepartment.value;
    person.worker_id = generateWorkerID();
    person.tag = 0;
    person.patientInfo = {}
  
    return person
  }
  addWorker.addEventListener("submit", e=>{
    e.preventDefault()
    let person = createWorker()
    db.transaction('rw', db.workers, function () { 
      // sth
    }).then(function(){
        db.workers.put({
            username: person.email, 
            worker: person
          }).then(function(){
              console.log("Worker Added")
              location.reload()
              alert(`worker Added\n Email ${person.email}\n password ${person.password}\n Worker ID${person.worker_id}`)
  
  
              // populateWorker()
            //    login()
          }).catch(e =>{
              console.log("Error", e)
          })
        
    }).catch (function (e) {
        console.error(e.stack);
        
    });
  // create 
  })
  
  function createRecordTemplate(worker_name, worker_id, active, worker_email, worker_gender){
    output = `
    <tr>
    <th scope="row"></th>
    <td>${worker_name}</td>
    <td>${worker_id}</td>
    <td>${active}</td>
    <td><button type="button" class="btn btn-primary btn-block btn-sm" id="workerDetail">worker Info</button></td>
    
    
   
  </tr>`
  return output
}

// populate the stuff list from the workers database
db.workers.orderBy('username').eachPrimaryKey(function (primaryKey) {

  console.log(primaryKey)
  db.workers.get({username:primaryKey}, user=>{
      return user
     
     }).then(function(user ){
      if (user){
        row.innerHTML += createRecordTemplate(user.worker.name, user.worker.worker_id, "active",user.worker.email,user.worker.gender)         
      
     }
  
}).catch(e =>{
  console.log("Error", e)
})

});


// show/hide worker details
row.addEventListener("click", e=>{

  if (e.target.id == "workerDetail"){
    detailsParent = e.target.parentElement.parentElement
    detailsDiv = detailsParent.nextSibling
    detailsDiv.classList.toggle("hiddenView")
}
})
// show / hide the start session table

startSessionBtn.addEventListener("click", e=>{
    console.log("CLicked")
    startSessionFormDiv.classList.toggle("hiddenView")
  })
  
  // populate the vaccines for admin to activate 
  dbv.transaction('rw',dbv.vaccines, function () { 
    // sth
  })
  .then(function(){
    dbv.vaccines.where("active")
    // .between(vaccine.min_age, vaccine.min_age+ 10,true)
    .equals("false",true)
    .each(vac => {
      
        chooseVaccine.innerHTML += `
        <option value="${vac.vaccine_name}">${vac.vaccine_name}</option>
        `  
    }).catch(error => {
        console.log(error.stack);
    });
  
  }).catch(e =>{
    console.log("Error", e)
  })
  
  // activate a session 
  activateBtn.addEventListener("click", e =>{
    e.preventDefault()
    console.log("hey", vaccineName.value)
    dbv.vaccines.update(vaccine_name=vaccineName.value, {active: "true"}).then(function (updated) {
        // console.log(vaccine_name, active)
        if (updated){
            console.log ("Vaccine Session started");
            alert( `${vaccineName.value} Vaccine Session started`)
        }else{
            console.log ("Vaccine Session not started");
        }
                 
    }).catch(e=>{
      console.log(e.stack)
    })
  })

  // display active sessions for Admin

sessiondb.sessions.where("session_status")
.equals("Incomplete",true)
.each(session => {
  console.log(session.patientId, session.patient_info.appointemntDate) 
  vaccineTable.innerHTML += `
  <tr>
  <th scope="row">${0}</th>
  <td id="patient_id_field">${session.assigned_doctor_id}</td>
  <td>${session.vaccine_ID}</td>
  <td id="scheduledDate">${session.patient_info.appointemntDate}</td>
  <td> ${session.session_status}</td>
  
</tr>`;

}).catch(e =>{
console.log("Error", e)
})
  