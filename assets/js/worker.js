const headerGreet = document.querySelector(".headerGreet")
var docId = localStorage.getItem("currentDoctor")
const tasksTable = document.querySelector(".tasksTable tbody")



function createTaskRecordTemplate(){
    // patientname = patientInfo.pa
    tasksTable.innerHTML += `
    <tr>
    <th scope="row">${0}</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>Hepatitis B</td>
    <td><button type="button" class="btn btn-primary btn-block btn-sm" id="patientInfo">Patient Info</button></td>
    <td>
        <button class="btn btn-success btn-sm btn-block"id="complete">Complete</button>
        <button class="btn btn-success btn-sm btn-block"id="incomplete">Incomplete</button>
    </td>
  </tr>`

}
//  fetch 2 
sessiondb.transaction('rw',sessiondb.sessions, function () { 
    // sth
  })
  .then(function(){
    sessiondb.sessions.where("assigned_doctor_id","session_status")
    // .between(vaccine.min_age, vaccine.min_age+ 10,true)
    .equals(localStorage.getItem("currentDoctor"),"Complete",true, true)
    .each(session => {
      console.log(session.patientId, session.patient_info.appointemntDate) 
      tasksTable.innerHTML += `
      <tr>
      <th scope="row">${0}</th>
      <td id="patient_id_field">${session.patientId}</td>
      <td>${session.vaccine_ID}</td>
      <td id="scheduledDate">${session.patient_info.appointemntDate}</td>
      <td><button type="button" class="btn btn-primary btn-block btn-sm" id="patientInfo ${session.patientId}" onclick="viewMedical()">Patient Info</button></td>
      <td>
          <button class="btn btn-success btn-sm btn-block statusBtn" onclick="setStatus()">Complete</button>
      </td>
    </tr>`;
    });
  
  }).catch(e =>{
    console.log("Error", e)
  })
// update Worker page
db.transaction('rw', db.workers, function () { 
    // sth
  })
  .then(function(){
    let currUser = localStorage.getItem("currentDoctor")
    db.workers.get(currUser, user=>{
        return user
       
       }).then(function(user ){
        if (user){  
                // *********************************************************
                // display on to the user html page 
                brandTitle.innerHTML = user.worker.name
                headerGreet.innerHTML += user.worker.name
            
        }else{
            console.log("User name Not Found!")
        }
        
       })
  
  }).catch(e =>{
    console.log("Error", e)
  })