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
