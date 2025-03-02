// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WORKING_DAYS = 20;

// Function to get work hours based on attendance
function getWorkHours(attendance) {
    switch (attendance) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0; // Absent
    }
}

// Function to calculate monthly wage
function calculateMonthlyWage() {
    let totalHours = 0;
    let totalWage = 0;

    for (let day = 1; day <= WORKING_DAYS; day++) {
        let attendance = Math.floor(Math.random() * 3); // 0 = Absent, 1 = Part Time, 2 = Full Time
        let workHours = getWorkHours(attendance);
        let dailyWage = workHours * WAGE_PER_HOUR;
        totalHours += workHours;
        totalWage += dailyWage;
        console.log(`Day ${day}: Worked ${workHours} hours, Earned Rs.${dailyWage}`);
    }

    console.log(`\nTotal Hours Worked in Month: ${totalHours}`);
    console.log(`Total Monthly Wage: Rs.${totalWage}`);
}

// Run the calculation
calculateMonthlyWage();
