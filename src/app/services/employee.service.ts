import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export default class EmployeeService {

    employeeList: any = [
        { name: "Mayank", age: 10 },
        { name: "Ankit", age: 5 }
    ]
}