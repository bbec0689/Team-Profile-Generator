const Engineer = require("../lib/Engineer.js");
const Employee = require("../lib/Employee.js");

test("gets info from Engineer", () => {
    const Engine = new Engineer("Bob", "111", "dabest@aol.com", "@github.com");

    expect(Engine.getGithub()).toBe("@github.com");
    expect(Engine.getId()).toBe("111");
    expect(Engine.getEmail()).toBe("dabest@aol.com");
    expect(Engine.getName()).toBe("Bob");
    expect(Engine.getJob()).toBe('Employee');
});