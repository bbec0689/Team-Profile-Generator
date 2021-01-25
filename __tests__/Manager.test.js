const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("get info for Manager", () =>{
const manager = new Manager("Jill", "1234", "another@test.com", "311");

expect(manager.getName()).toBe("Jill");
expect(manager.getId()).toBe("1234");
expect(manager.getEmail()).toBe("another@test.com");
expect(manager.getOfficenumber()).toBe("311");
expect(manager.getRole()).toBe("Manager");

});