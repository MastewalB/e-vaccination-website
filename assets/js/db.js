var db = new Dexie('Evac_Main_DB');
db.version(1).stores({
    admin: '&username, admin',
    dependents: '&username, dependant',
    users: '&username, user',
    workers: '&username, worker'
});

db.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
})

// **********************Vaccine database*********************
var dbv = new Dexie("Vaccines");
dbv.version(3).stores({
    vaccines: 'vaccine_name, min_age, description, active'
});

dbv.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
})


var session_db = new Dexie("Vaccine_Session");
session_db.version(1).stores({
    vaccine_session: '++, vaccine_id'
})

session_db.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
})


db.transaction('rw', db.admin, function () { 
    // sth
}).then(function(){
    
    var user= "Meti@ykadmin.com"

    var adminObj = {
        name :"Meti",
        phonenumber :"0912234567",
        birthdate :"21/05/1986",
        password :"ykforever",
        email :"metiadane@ykadmin",
        gender :"Female",        
        department :"Vaccine",
        worker_id :"meti@ykadmin",  
        staffMemebers:[]
    }
    db.admin.put({
        username: user, 
        admin: adminObj
       }).then(function(){
           console.log("Database created and added to users table")
           localStorage.setItem("admin", user)
        //    login()
       }).catch(e =>{
           console.log("Error", e)
       })
});
localStorage.setItem("admin", "Meti@ykadmin.com")