// Constants for work hours and wage per hour
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NO_WORK = 0;

// Function to calculate daily wage
function calculateDailyWage() {
    let workHours;

    // Generating a random number (0, 1, or 2) to decide work type
    let empType = Math.floor(Math.random() * 3); // 0: No Time, 1: Part Time, 2: Full Time

    // Determining work hours using switch-case
    switch (empType) {
        case 1:
            workHours = PART_TIME_HOURS;
            console.log("Employee worked Part Time.");
            break;
        case 2:
            workHours = FULL_TIME_HOURS;
            console.log("Employee worked Full Time.");
            break;
        default:
            workHours = NO_WORK;
            console.log("Employee did not work.");
    }

    // Calculating wage
    let dailyWage = workHours * WAGE_PER_HOUR;
    console.log(`Daily Wage: $${dailyWage}`);
}

// Running the function
calculateDailyWage();
