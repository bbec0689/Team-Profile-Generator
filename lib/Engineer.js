var Employee = require("../lib/Employee.js");

class Engineer extends Employee {
constructor(name, id, email, githubName){
    super(name, id, email);
    this.githubName = githubName;

}

    getGithub(){
        return `${this.githubName}`;
    }

}

module.exports = Engineer;