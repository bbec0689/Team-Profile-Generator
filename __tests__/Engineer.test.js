const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee.js");

test("gets info from Engineer", () => {
    const Engineer = new Engineer("bob", "111", "dabest@aol.com", "@github.com");

    expect(Engineer.getGithub()).toBe("@github.com");
    expect(Engineer.getId()).toBe("111");
    expect(Engineer.getEmail()).toBe("dabest@aol.com");
    expect(Engineer.getName()).toBe("bob");
    expect(Engineer.getRole()).toBe('Employee');
});