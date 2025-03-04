
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

    // UC-2: Calculate Daily Employee Wage using getWorkingHours()
    calculateDailyWage() {
        const WAGE_PER_HOUR = 20;
        let workType = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
        let workingHours = this.getWorkingHours(workType);
        let dailyWage = workingHours * WAGE_PER_HOUR;
        return dailyWage;
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
    // UC-4: Calculate Monthly Wage assuming 20 working days
    calculateMonthlyWage() {
        const WORKING_DAYS = 20;
        let totalWage = 0;

        for (let day = 1; day <= WORKING_DAYS; day++) {
            totalWage += this.calculateDailyWage();
        }

        return `Total Monthly Wage for ${WORKING_DAYS} days is $${totalWage}`;
    }
    // UC-5: Calculate Wage till total hours = 160 or days = 20
    calculateWageWithCondition() {
        const MAX_WORKING_DAYS = 20;
        const MAX_WORKING_HOURS = 160;
        let totalWorkingHours = 0;
        let totalWorkingDays = 0;
        let totalWage = 0;

        while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours < MAX_WORKING_HOURS) {
            totalWorkingDays++;
            let workType = Math.floor(Math.random() * 3); // 0, 1, or 2
            let workHours = this.getWorkingHours(workType);
            totalWorkingHours += workHours;
            totalWage += this.calculateDailyWage(workHours);
        }

        return `Total Wage: $${totalWage}, Total Working Hours: ${totalWorkingHours}, Total Working Days: ${totalWorkingDays}`;
    }
}

// Creating object of EmployeeAttendance class
const employee = new EmployeeAttendance();

// Running UC-1
console.log(employee.checkAttendance());

// Running UC-2
console.log(employee.calculateDailyWage());

// Running UC-2 and UC-3
console.log(`Daily Wage is $${employee.calculateDailyWage()}`);

// Running UC-4
console.log(employee.calculateMonthlyWage());

// Running UC-5
console.log(employee.calculateWageWithCondition());