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