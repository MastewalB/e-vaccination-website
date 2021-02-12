class User{
    constructor(name, phone, birthdate, password, email=""){
    
    this.name = name;
    this.phone = phone;
    this.birthdate = birthdate;
    this.password = password;
    this.email = email;
    }

    username = "";    
    dependants = [];
    vaccines_taken = [];
    ilnness_allergy = [];
    medication_taken = [];

    billing = [];
    pending_vaccinations = [];
    vaccine_alert = [];
}
class Worker{
    constructor(name, phonenumber, birthdate, password, email=""){
    
        name = this.name;
        phonenumber = this.phonenumber;
        birthdate = this.birthdate;
        password = this.password;
        email = this.email;
    }

    department = "";
    worker_id = "";
    
    dependants = [];
    vaccines_taken = [];
    illness_allergy = [];
    medication_taken = [];

    billing = [];
    pending_vaccinations = [];
    vaccine_alert = [];
}
class Admin{

    constructor(name, phonenumber, birthdate, password, email=""){    
        name = this.name;
        phonenumber = this.phonenumber;
        birthdate = this.birthdate;
        password = this.password;
        email = this.email;
    }
    
    department = "";
    worker_id = "";

    dependants = [];
    vaccines_taken = [];
    ilnness_allergy = [];
    medication_taken = [];

    billing = [];
    pending_vaccinations = [];
    vaccine_alert = [];
}

