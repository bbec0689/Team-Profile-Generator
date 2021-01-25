var Employee = require("../lib/Employee.js");

test("grab employee name", () => {
    Employee = new Employee("Dave", "232", "dave@dave.com")

    expect(Employee.name).toBe("Dave")
    expect(Employee.id).toBe("232")
    expect(Employee.email).toBe("dave@dave.com")

});