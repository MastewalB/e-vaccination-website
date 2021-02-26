class Shift {

    days = ["Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday", "Sunday"];
    shift = new Map();

    add_shift() {
        for (let day of this.days) {
            this.shift.set(day, []);
        }
        //console.log(this.shift);
    }



    todays_doctors(day) {
        //takes day value like Monday from the shift class and returns doctors on that day

        return this.shift.get(day);

    }

}