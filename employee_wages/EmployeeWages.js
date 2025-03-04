
// Constant values for attendance status
const PRESENT = 1;

// Employee class
class EmployeeAttendance {

    // UC-1: Ability to Check Employee is Present or Absent
    // Method to check if an employee is present or absent
    checkAttendance() {
        let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1
        return (attendance === PRESENT) ? "Employee is Present" : "Employee is Absent";
    }

    // UC-2: Ability to Calculate Daily Employee Wage based on part-time or full-time
    calculateDailyWage() {
        const IS_PART_TIME = 1;
        const IS_FULL_TIME = 2;
        const PART_TIME_HOURS = 4;
        const FULL_TIME_HOURS = 8;
        const WAGE_PER_HOUR = 20;
        let workType = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

        let workingHours = this.getWorkingHours(workType); 

        let dailyWage = workingHours * WAGE_PER_HOUR;
        return `Daily Wage is $${dailyWage}`;
    }

    // UC-3: Function to get work hours based on work type  
    getWorkingHours(workType) {  
        const PART_TIME_HOURS = 4;  
        const FULL_TIME_HOURS = 8;  

        switch (workType) {  
            case 1:  
                return PART_TIME_HOURS;  
            case 2:  
                return FULL_TIME_HOURS;  
            default:  
                return 0; // No work or absent  
        }  
    }  
}

// Creating object of EmployeeAttendance class
const employee = new EmployeeAttendance();

// Running UC-1
console.log(employee.checkAttendance());

// Running UC-2
console.log(employee.calculateDailyWage());

// Running UC-2 and UC-3  
console.log(employee.calculateDailyWage());  