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

/*
session_db.transaction('rw', session_db.vaccine_session, function () {

}).then(function () {
    session_db.vaccine_session.put({
        vaccine_id: vs.vaccine_id,
        vaccine_days: vs.day,
        vaccine_start_date: vs.start_date,
        vaccine_duration: vs.duration
    })
})
*/