const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("init", () => {
        it("should create an instance of an employee when we call it with the new keyword",
        () => {
            const employee1 = new Employee("robert", 444, "me@me.com");
            expect(employee1.name).toEqual("robert");
            expect(employee1.id).toEqual(444);
            expect(employee1.email).toEqual("me@me.com");
        })
    })
    describe("getName", () => {
        it("should return the name of the employee instance that was created", () => {
            const employee2 = new Employee("robert", 444, "me@me.com");
            const result = employee2.getName();
            expect(result).toEqual("robert");
        })
    })
    describe("getId", () => {
        it("should return the Id of the employee instance that was created", () => {
            const employee3 = new Employee("robert", 444, "me@me.com");
            const result = employee3.getId();
            expect(result).toEqual(444);
        })
    })
    describe("getEmail", () => {
        it("should return the email of the employee instance that was created", () => {
            const employee4 = new Employee("robert", 444, "me@me.com");
            const result = employee4.getEmail();
            expect(result).toEqual("me@me.com");
        })
    })
    describe("getRole", () => {
        it("should return employee", () => {
            const employee5 = new Employee("robert", 444, "me@me.com");
            const result = employee5.getRole();
            expect(result).toEqual("Employee");
        })
    })
});