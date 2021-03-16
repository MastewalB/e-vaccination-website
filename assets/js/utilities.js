available_doctors = [];

function getDoctors(name, tagno){
    available_doctors.push([name, tagno])
    console.log("called", available_doctors)
}

//based on the duration of the vaccine session, the function creates empty day map for each day with day_number as a key
function bookAppointment(patient_id, patientInfo, vaccineID ) {
db.transaction('rw', db.workers, db.users, function(){
db.workers.orderBy("username").eachPrimaryKey(primaryKey =>{
    // console.log(primaryKey, "primarykey")
    db.workers.get({username:primaryKey}, doctor=>{
        return doctor
    }).then(doctor =>{ 

        
        getDoctors(doctor.username, doctor.worker.tag)
    }).then(()=>{
        // console.log(patientId, "#############",patientInfo,"*********",vaccineID, "POOOOP")
        
    }).catch(e =>{
        console.log(e)
    })
        
})
})
populate(patient_id, patientInfo, vaccineID ,available_doctors) 

}

function populate(patient_id, patientInfo, vaccineID, available_doctors ){
for (let i = 0; i <= available_doctors.length-1; i++) {
    if (available_doctors[i][1] == available_doctors[i+1][1] || i == available_doctors.length){
        sessiondb.transaction('rw', sessiondb.sessions, function () { 
            // sth
        }).then(function(){
            sessiondb.sessions.put({
                vaccine_ID: vaccineID, 
                start_date: new Date(),
                patientId:patient_id,
                assigned_doctor_id:available_doctors[i][0],
                patient_info: patientInfo,
                session_status:"Incomplete"
               }).then(function(){
                   console.log("New session Alert")
                   localStorage.setItem("alert", "true")
                   return "YAYY"
                //    login()
               }).catch(e =>{
                   console.log("Error", e)
               })
            
        }).catch (function (e) {
            console.error(e.stack);
            
        });
    console.log("POOOOOOOOOOOOOOOOLLLLLLLLL")
    location.href.reload()
    break
    }


}
}