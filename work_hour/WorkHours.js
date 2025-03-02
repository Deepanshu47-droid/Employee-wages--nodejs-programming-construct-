// Constants for work hours and wage per hour
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NO_WORK = 0;

// Function to get work hours based on employee type
function getWorkHours(empType) {
    switch (empType) {
        case 1:
            console.log("Employee worked Part Time.");
            return PART_TIME_HOURS;
        case 2:
            console.log("Employee worked Full Time.");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee did not work.");
            return NO_WORK;
    }
}

// Function to calculate daily wage
function calculateDailyWage() {
    let empType = Math.floor(Math.random() * 3); // 0: No Time, 1: Part Time, 2: Full Time
    let workHours = getWorkHours(empType);
    let dailyWage = workHours * WAGE_PER_HOUR;
    console.log(`Daily Wage: $${dailyWage}`);
}

// Running the function
calculateDailyWage();
