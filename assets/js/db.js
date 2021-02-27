var db = new Dexie('Evac_Main_DB');
db.version(1).stores({
    admin: '&username, admin',
    dependents: '&username, dependant',
    users: '&username, user',
    workers: '&username, worker',
    vaccine_session: '++, vaccine_id'
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


