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


    /*
    * Creates a doctors object with id, tag, and patiens attribute after accepting their list from the Shift provider
    * @param {Array} array - This is the list of doctors
    * @return {Array} mapped - This array contains the list of Doctor objects with necessary attributes
    */
    create_doctors_object(array) {
        let mapped = [];
        for (let i = 0; i < array.length; i++) {
            mapped.push({
                doctor_id: array[i],
                tag: 0,
                patients: [{
                    info: {},
                    done: false
                }]
            });
        };
        return mapped;
    }


    /*
    *Takes the day number(like day 06) of the vaccination session and returns the actual date
    * @param {Number} day_number_value - Is the nth day of the session
    * @returns {Array} day - Containing the day object in human readable form 
    */
    today(day_number_value) {

        let today = new Date(this.start_date.getTime());
        today.setDate(today.getDate() + day_number_value);
        return ["Monday", "February/15/2021"];
    }

    /*
    *Takes day value like Monday from the shift class and returns doctors on that day
    * @param {String} day - Day of the week
    * @return {Array} doctors - By contacting the shift class, it obtains the doctors working on that day
    */
    todays_doctors(day) {

        return ["Doc/01", "Doc/05", "Doc/07"];
    }

    utc_day_converter(day) {
        //receives index of week and returns day such as 0 for Monday
        days = ["Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday", "Sunday"];
        return days[day];

    }

    /*
    * Sets a duration for the Vaccine Session
    * @param {Number} duration - Is the number of days of the Session
    */
    set_duration(duration) {
        this.duration = duration;
    }

}