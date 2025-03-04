
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
}

// Creating object of EmployeeAttendance class
const employee = new EmployeeAttendance();

// Running the function and logging the result
console.log(employee.checkAttendance());
