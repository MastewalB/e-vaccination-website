class Shift {

    days = ["Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday", "Sunday"];
    shift = new Map();

    add_shift() {
        for (let day of this.days) {
            this.shift.set(day, []);
        }

    }


    /*
    * Returns doctors on a specified day of the week
    * @param {String} day - The day of the week
    * @returns {Array} - Doctors working on that day
    */
    todays_doctors(day) {
        //takes day value like Monday from the shift class and returns doctors on that day

        return this.shift.get(day);

    }

}





class VaccineSession {

    day_number = 1;
    vaccine_id = "";
    start_date = new Date();
    duration = 0;
    max_tag_per_doctor = 50;
    day = new Map();
}