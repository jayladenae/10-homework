/* props:           | methods:
- name              |   -getName()
- id                |   -getId()                -getRole() //returns Engineer
- email             |   -getEmail()
- gitHub            |   -getGithub()
*/
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email,gitHub){
        super (name, id, email)
        this.gitHub = gitHub;
    }
    getGithub() {
        console.log(this.gitHub);
    }
    
    getRole () {
        console.log('Engineer');
        return 'Engineer';
    }
}