// Constant values for attendance status
const PRESENT = 1;

// Function to check if an employee is present or absent
function checkAttendance() {
    let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1
    return (attendance === PRESENT) ? "Employee is Present" : "Employee is Absent";
}

// Runing the function and log the result
console.log(checkAttendance());
