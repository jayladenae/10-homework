/* props:           | methods:
- name              |   -getName()
- id                |   -getId()        -getRole() // returns employee
- email             |   -getEmail()
*/

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
}

Employee.prototype.getName = function () {};

Employee.prototype.getId = function () {};

Employee.prototype.getEmail = function () {};

Employee.prototype.getRole = function () {};

module.exports = Employee;