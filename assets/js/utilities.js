class Shift {

    days = ["Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday", "Sunday"];
    shift = new Map();

    add_shift() {
        for (let day of this.days) {
            this.shift.set(day, []);
        }

    }


    /** 
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


    /**
     * This function creates an empty object for the vaccine session
     */
    populate_day() {
        for (let i = 1; i <= this.duration; i++) {
            this.day.set(i, {
                isFull: false,
                total: 0,
                doctors: [...this.create_doctors_object(this.todays_doctors(this.today(i)))]
            });
        }
    }

    /**
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


    /**
    *Takes the day number(like day 06) of the vaccination session and returns the actual date
    * @param {Number} day_number_value - Is the nth day of the session
    * @returns {Array} day - Containing the day object in human readable form 
    */
    today(day_number_value) {

        let today = new Date(this.start_date.getTime());
        today.setDate(today.getDate() + day_number_value);
        return ["Monday", "February/15/2021"];
    }

    /**
    *Takes day value like Monday from the shift class and returns doctors on that day
    * @param {String} day - Day of the week
    * @return {Array} doctors - By contacting the shift class, it obtains the doctors working on that day
    */
    todays_doctors(day) {

        return ["Doc/01", "Doc/05", "Doc/07"];
    }

    /**
    * Function to convert the week index 
    * @param {Number} - The index value from 0 to 6 
    */
    utc_day_converter(day) {
        //receives index of week and returns day such as 0 for Monday
        days = ["Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday", "Sunday"];
        return days[day];

    }

    /** 
    * Sets a duration for the Vaccine Session
    * @param {Number} duration - Is the number of days of the Session
    */
    set_duration(duration) {
        this.duration = duration;
    }

    /**
     * Controls the isFull attribute of the class
     * @param {Number} day - is the nth day of the vaccine session
     */

    set_full(day) {
        let day_total = 0;
        for (let i = 0; i < this.day.get(day).doctors.length; i++) {
            day_total += this.day.get(day).doctors[i].tag;
        }
        if (day_total > this.day.get(day).doctors.length * this.max_tag_per_doctor) {
            this.day.get(day).isFull = true;
        }
    }

    /**
    *  Assigns a patient to a healthworker 
    * @param {Object} patient_info - The information necessary for the doctor passed here
    * @param {Number} day_value - The day in the vaccine session order e.g. day 03 of the session
    * @param {Number} tag_number optional - The number of patiets to take the vaccine/The number of tags that are going to be added   
    * @return {String} token - The special serial token given to the patient/user as an identification upon the vaccination day 
     */
    add_doctor_tag(patient_info, day_value = undefined, tag_number = 1) {

        let token = "";
        if (day_value === undefined) {

        }
        for (let i = 1; i <= this.duration; i++) {
            if (!this.day.get(i).isFull) {

                let index = 0;
                let min = this.day.get(i).doctors[0].tag;
                let len = this.day.get(i).doctors.length
                for (let j = 1; j < len; j++) {
                    if (this.day.get(i).doctors[j].tag < min) {
                        index = j;
                        min = this.day.get(i).doctors[j].tag;

                    }
                }


                this.day.get(i).doctors[index].tag += tag_number;
                let tag = this.day.get(i).doctors[index].tag;
                this.day.get(i).doctors[index].patients[tag - 1].info = patient_info;
                this.day.get(i).total += tag_number;
                token = this.generate_token(this.name, i, index, tag);
                this.set_full(i);
                break;

            }
        }
        return token;
    }

    /**
    * Function generates a token/serial tag 
    * @param {String} string - is the prefix that appears on the beginning of the string
    * @param {Number} day - The nth day of the vaccine session
    * @param {Number} doc_index - The index of the Doctor assigned on the nth day array
    * @param {tag} tag - The nth tag on the doctor's tag list on the specific nth day
    * @return {String} token - A concatenation of the parameters to generate a unique serial identification 
     */
    generate_token(string, day, doc_index, tag) {
        function addZero(i) {
            if (i < 10) { i = "0" + i } // add zero in front of numbers < 10
            return i;
        }
        return `${string}/${addZero(day)}-${addZero(doc_index)}/${addZero(tag)}`;
    }

}