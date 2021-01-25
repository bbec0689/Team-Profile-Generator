const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

test(" gets info from intern", () => {
    const intern = new Intern("Jack", "121", "test@test.com", "uofu");


expect(intern.getName()).toBe("Jack");
expect(intern.getId()).toBe("121");
expect(intern.getEmail()).toBe("test@test.com");
expect(intern.getSchool()).toBe("uofu");
expect(intern.getRole()).toBe("Intern");
});