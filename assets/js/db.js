var db = new Dexie('Evac_Main_DB');
db.version(0.65).stores({
    admin: '++,&[username], admin',
    dependents: '++,&[username], dependant',
    users: '++,&username, user',
    workers: '++,&[username], worker'
});

db.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
})



