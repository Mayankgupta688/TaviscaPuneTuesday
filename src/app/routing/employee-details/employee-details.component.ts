import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import EmployeeService from "src/app/services/employee.service";

@Component({
    templateUrl: "employee.details.component.html",
    selector: "employee-details"
})
export class EmployeeDetailsComponent {
    userName = "Mayank Gupta";
    employeeDetails = {
        name: "",
        age: 0
    }
    constructor(private routerActivated: ActivatedRoute, private _dataService: EmployeeService) {

        debugger;
        this.employeeDetails = this._dataService.employeeList.filter((employee: any) => {
            return employee.name == this.routerActivated.snapshot.params['userName']
        })[0]
    }

    ngOnDestroy() {
        alert("Garbage Details")
    }
}