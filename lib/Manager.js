/* props:           | methods:
- name              |   -getName()
- id                |   -getId()        -getRole() // returns Manager
- email             |   -getEmail()
- officeNumber
*/
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
}

Manager.getRole();