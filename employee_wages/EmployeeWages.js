
// Constant values for attendance status
const PRESENT = 1;

// Employee class
class Employee {

    constructor() {
        // UC-6: Array to store daily wages
        this.dailyWageArray = [];
    }

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
     // UC-6: Calculate Wage till total hours = 160 or days = 20 and store daily wages
     calculateWageWithDailyStorage() {
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
            let dailyWage = this.calculateDailyWage(workHours);
            this.dailyWageArray.push(dailyWage); // store in the class array
            totalWage += dailyWage;
        }

        console.log("Daily Wages: ", this.dailyWageArray);
        return `Total Wage: $${totalWage}, Total Working Hours: ${totalWorkingHours}, Total Working Days: ${totalWorkingDays}`;
    }

    // UC-7a: Calculate total wage using reduce
    getTotalWage() {
        return this.dailyWageArray.reduce((total, wage) => total + wage, 0);
    }

    // UC-7b: Show day with daily wage using map
    getDayWithWages() {
        return this.dailyWageArray.map((wage, index) => `Day ${index + 1}: $${wage}`);
    }

    // UC-7c: Days with Full Time Wage (160)
    getFullTimeWageDays() {
        return this.dailyWageArray
            .map((wage, index) => ({ day: index + 1, wage }))
            .filter(dayInfo => dayInfo.wage === 160);
    }

    // UC-7d: First occurrence of Full Time Wage
    getFirstFullTimeWageDay() {
        return this.dailyWageArray
            .map((wage, index) => ({ day: index + 1, wage }))
            .find(dayInfo => dayInfo.wage === 160);
    }

    // UC-7e: Check if every Full Time Wage is 160
    checkEveryFullTimeWage() {
        return this.dailyWageArray.every(wage => wage === 160);
    }

    // UC-7f: Check if any Part Time Wage (80)
    checkAnyPartTimeWage() {
        return this.dailyWageArray.some(wage => wage === 80);
    }

    // UC-7g: Number of days worked (wage > 0)
    getNumberOfDaysWorked() {
        return this.dailyWageArray.filter(wage => wage > 0).length;
    }
}

// Creating object of EmployeeAttendance class
const employee = new Employee();
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

// Running UC-6
console.log(employee.calculateWageWithDailyStorage());

// Running UC-7
console.log("Total Wage: $", employee.getTotalWage());
console.log("Day-wise Wages:\n", employee.getDayWithWages());
console.log("Full Time Wage Days:\n", employee.getFullTimeWageDays());
console.log("First Full Time Wage Day:\n", employee.getFirstFullTimeWageDay());
console.log("Every Full Time Wage is 160:", employee.checkEveryFullTimeWage());
console.log("Any Part Time Wage Present:", employee.checkAnyPartTimeWage());
console.log("Number of Days Worked:", employee.getNumberOfDaysWorked());