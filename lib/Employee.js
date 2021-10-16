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

Employee.prototype.getName = function () {
  console.log(this.name)
};

Employee.prototype.getId = function () {
  console.log(this.id)
};

Employee.prototype.getEmail = function () {
  console.log(this.email)
};

Employee.prototype.getRole = function () {
  console.log('Employee')
};

module.exports = Employee;