// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

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

// Function to calculate total wage with conditions
function calculateTotalWage() {
    let totalHours = 0;
    let totalDays = 0;
    let totalWage = 0;

    while (totalHours < MAX_WORKING_HOURS && totalDays < MAX_WORKING_DAYS) {
        totalDays++;
        let attendance = Math.floor(Math.random() * 3); // 0 = Absent, 1 = Part Time, 2 = Full Time
        let workHours = getWorkHours(attendance);

        // Check if adding workHours exceeds the maximum allowed
        if (totalHours + workHours > MAX_WORKING_HOURS) {
            workHours = MAX_WORKING_HOURS - totalHours;
        }

        let dailyWage = workHours * WAGE_PER_HOUR;
        totalHours += workHours;
        totalWage += dailyWage;
        console.log(`Day ${totalDays}: Worked ${workHours} hours, Earned Rs.${dailyWage}`);
    }

    console.log(`\nTotal Working Days: ${totalDays}`);
    console.log(`Total Hours Worked: ${totalHours}`);
    console.log(`Total Monthly Wage: Rs.${totalWage}`);
}

// Run the calculation
calculateTotalWage();
