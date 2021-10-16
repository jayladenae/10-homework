/* props:           | methods:
- name              |   -getName()
- id                |   -getId()                -getRole() //returns Engineer
- email             |   -getEmail()
- gitHub            |   -getGithub()
*/
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(gitHub){
        this.gitHub = gitHub;
    }
}

Engineer.prototype.getGithub = function () {};

Engineer.getRole();