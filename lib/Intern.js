/* props:           | methods:
- name              |   -getName()
- id                |   -getId()        -getRole() // returns Intern
- email             |   -getEmail()
- school            |   -getSchool()
*/
const Employee = require("./Employee");


class Intern extends Employee {
    constructor(school){
        this.school = school;
    }
}

Intern.prototype.getSchool = function () {};

Intern.getRole();