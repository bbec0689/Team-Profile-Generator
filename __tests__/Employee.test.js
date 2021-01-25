const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

TestScheduler("grab employee name", () => {
    Employee = new Employee("Dave", "232", "dave@dave.com")

    expect(Employee.name).toBe("Dave")
    expect(Employee.id).toBe("232")
    expect(employee.email).toBe("dave@dave.com")

});