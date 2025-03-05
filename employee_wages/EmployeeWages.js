
// Constant values for attendance status
const PRESENT = 1;

// Employee class
class Employee {

    constructor(empDailyHrsAndWageArr = []) {
        // UC-6: Array to store daily wages
        this.dailyWageArray = [];
        this.dailyHoursArray = [];
        // UC-8: Map to store day-wise wages
        this.dailyWageMap = new Map(); 
        // UC-10: To store day-wise objects
        this.dailyRecordArray = []; 
        //UC-11
        this.empDailyHrsAndWageArr = empDailyHrsAndWageArr;    
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

        while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours < MAX_WORKING_HOURS) {
            totalWorkingDays++;
            let workType = Math.floor(Math.random() * 3); // 0-Absent, 1-Part Time, 2-Full Time
            let workHours = this.getWorkingHours(workType);
            totalWorkingHours += workHours;
            let dailyWage = this.calculateDailyWage(workHours);
            this.dailyWageArray.push(dailyWage);
            this.dailyHoursArray.push(workHours);

            // UC-8: Storing day and wage in Map
            this.dailyWageMap.set(totalWorkingDays, dailyWage);

             // UC-10: Store the day, hours, and wage in an object
            this.dailyRecordArray.push({
                day: totalWorkingDays,
                hoursWorked: workHours,
                wageEarned: dailyWage
            });
        }
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
    // UC-8: Total wage from Map
    getTotalWageFromMap() {
        let totalWage = 0;
        this.dailyWageMap.forEach(wage => totalWage += wage);
        return totalWage;
    }
    // UC-9: Total Wage, Total Hours, and categorizing days
    calculateTotalWageAndDayClassification() {
        const totalWage = Array.from(this.dailyWageMap.values()).reduce((total, wage) => total + wage, 0);

        const totalHours = this.dailyHoursArray.reduce((total, hours) => total + hours, 0);

        const fullWorkingDays = [];
        const partWorkingDays = [];
        const noWorkingDays = [];

        this.dailyHoursArray.forEach((hours, index) => {
            if (hours === 8) {
                fullWorkingDays.push(index + 1);
            } else if (hours === 4) {
                partWorkingDays.push(index + 1);
            } else {
                noWorkingDays.push(index + 1);
            }
        });

        console.log(`\nTotal Wage And Day Classification Results:`);
        console.log(`Total Wage: $${totalWage}`);
        console.log(`Total Hours Worked: ${totalHours}`);
        console.log(`Full Working Days: ${fullWorkingDays}`);
        console.log(`Part Working Days: ${partWorkingDays}`);
        console.log(`No Working Days: ${noWorkingDays}`);
    }

    //UC-10
    displayDailyRecords() {
        console.log("Day | Hours Worked | Wage Earned");
        this.dailyRecordArray.forEach(record => {
            console.log(` ${record.day}  |      ${record.hoursWorked}       |     $${record.wageEarned}`);
        });
    }

    // UC-11
    // UC 11A
    calculateTotalWageAndHours() {
        let totalWages = this.empDailyHrsAndWageArr
            .filter(record => record.dailyWage > 0)
            .reduce((totalWage, record) => totalWage + record.dailyWage, 0);

        let totalHours = this.empDailyHrsAndWageArr
            .filter(record => record.dailyWage > 0)
            .reduce((totalHours, record) => totalHours + record.dailyHours, 0);

        console.log(`UC 11A Total Hours: ${totalHours} Total Wages: ${totalWages}`);
    }

    // UC 11B
    getFullWorkingDayStrings() {
        return this.empDailyHrsAndWageArr
            .filter(record => record.dailyHours == 8)
            .map(record => `Day ${record.dayNum}: Hours ${record.dailyHours}, Wage $${record.dailyWage}`);
    }
    // UC 11C
    getPartWorkingDayStrings() {
        let partWorkingDayStrArr = this.empDailyHrsAndWageArr
            .filter(record => record.dailyHours == 4)
            .map(record => `Day ${record.dayNum}: Hours ${record.dailyHours}, Wage $${record.dailyWage}`);
        return partWorkingDayStrArr;
    }

    // UC 11D
    getNonWorkingDayStrings() {
        return this.empDailyHrsAndWageArr
            .filter(record => record.dailyHours == 0)
            .map(record => `Day ${record.dayNum}: Hours ${record.dailyHours}, Wage $${record.dailyWage}`);
    }
}

// UC-12 Employee payroll data
class EmployeePayrollData {
    // property
    _id;
    _name;
    _salary;
    _gender;
    _startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) { 
        // UC-14 Name Validation
        let nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}$');
        try {
            if (nameRegex.test(name))
                this._name = name;
            else
                throw new Error(`Name ${name} is Invalid! It must start with a capital letter and have at least 3 characters.`);
        } catch (error) {
            console.log(error.message)
        } 
    }

    // UC-15
    // ID validation
    get id() { return this._id; }
    set id(id) {
        try {
            let idPattern = /^[1-9][0-9]*$/;
            if (!idPattern.test(id)) {
                throw new Error("Invalid ID! It must be a positive non-zero number.");
            }
            this._id = id;
        } catch (error) {
            console.log(error.message);
        }
    }
    // UC-15
    // Salary validation
    get salary() { return this._salary; }
    set salary(salary) {
        try {
            let salaryPattern = /^[1-9][0-9]*$/;
            if (!salaryPattern.test(salary)) {
                throw new Error("Invalid Salary! It must be a positive non-zero number.");
            }
            this._salary = salary;
        } catch (error) {
            console.log(error.message);
        }
    }

    // UC-15
    // Gender validation
    get gender() { return this._gender; }
    set gender(gender) {
        try {
            let genderPattern = /^[MF]$/;
            if (!genderPattern.test(gender)) {
                throw new Error("Invalid Gender! It must be either 'M' or 'F'.");
            }
            this._gender = gender;
        } catch (error) {
            console.log(error.message);
        }
    }

    // UC-15
    // Start Date validation
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        try {
            if (!(startDate instanceof Date) || startDate > new Date()) {
                throw new Error("Invalid Start Date! It cannot be a future date.");
            }
            this._startDate = startDate;
        } catch (error) {
            console.log(error.message);
        }
    }

    // method using arrow function
    toString = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + "', salary=" + this.salary + 
               ", gender=" + this.gender + ", startDate=" + empDate;    
    };
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


// UC-08
employee.calculateWageWithDailyStorage();
console.log("Total Wage from Array: $", employee.getTotalWage());
console.log("Total Wage from Map: $", employee.getTotalWageFromMap());
console.log("Day-wise Wages from Map:");
employee.dailyWageMap.forEach((wage, day) => {
    console.log(`Day ${day}: $${wage}`);
});

//UC-9
employee.calculateTotalWageAndDayClassification();


//UC-10
console.log("\nUC10 - Daily Records (Day, Hours, Wage):");
employee.displayDailyRecords();

//UC-11
let empDailyHrsAndWageArr = [
    { dayNum: 1, dailyHours: 8, dailyWage: 160 },
    { dayNum: 2, dailyHours: 8, dailyWage: 160 },
    { dayNum: 3, dailyHours: 4, dailyWage: 80 },
    { dayNum: 4, dailyHours: 0, dailyWage: 0 },
    { dayNum: 5, dailyHours: 8, dailyWage: 160 },
    { dayNum: 6, dailyHours: 4, dailyWage: 80 },
    { dayNum: 7, dailyHours: 0, dailyWage: 0 },
    { dayNum: 8, dailyHours: 8, dailyWage: 160 },
    { dayNum: 9, dailyHours: 4, dailyWage: 80 },
    { dayNum: 10, dailyHours: 8, dailyWage: 160 },
    { dayNum: 11, dailyHours: 0, dailyWage: 0 },
    { dayNum: 12, dailyHours: 8, dailyWage: 160 },
    { dayNum: 13, dailyHours: 4, dailyWage: 80 },
    { dayNum: 14, dailyHours: 0, dailyWage: 0 },
    { dayNum: 15, dailyHours: 8, dailyWage: 160 },
    { dayNum: 16, dailyHours: 4, dailyWage: 80 },
    { dayNum: 17, dailyHours: 8, dailyWage: 160 },
    { dayNum: 18, dailyHours: 0, dailyWage: 0 },
    { dayNum: 19, dailyHours: 8, dailyWage: 160 },
    { dayNum: 20, dailyHours: 4, dailyWage: 80 }
];
let employee2 = new Employee(empDailyHrsAndWageArr);
employee2.calculateTotalWageAndHours();
console.log("UC 11B Part Working Day Strings:", employee2.getFullWorkingDayStrings());
console.log("UC 11C Part Working Day Strings:", employee2.getPartWorkingDayStrings());
console.log("UC 11D Non Working Day Strings:", employee2.getNonWorkingDayStrings());

// UC-12 Employee payroll data
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

// UC-13 Remaining properties
let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());

// UC-14 Name Validation
// Valid Example
let employeePayrollData2 = new EmployeePayrollData(1, "Mark", 30000, "M", new Date());
console.log(employeePayrollData2.toString());

// Invalid Example (will trigger error)
employeePayrollData2.name = "john"; // Error: Name is Invalid!
console.log(employeePayrollData2.toString());

// Another Invalid Example
let newEmployeePayrollData2 = new EmployeePayrollData(1, "terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData2.toString());


// UC-15
let emp1 = new EmployeePayrollData(1, "John", 50000, "M", new Date("2023-01-01"));
console.log(emp1.toString());

let emp2 = new EmployeePayrollData(0, "jo", -5000, "X", new Date("2025-12-31"));
console.log(emp2.toString());
