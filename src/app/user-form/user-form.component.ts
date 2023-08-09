import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "user-form",
    templateUrl: "user-form.component.html"
})
export default class UserFormComponent {

    constructor() {
        this.userDetails.valueChanges.subscribe(() => {
            alert("dkfhdashfks")
        })

        this.userDetails.controls.userName.valueChanges.subscribe(() => {
            alert("Name Changes")
        })
    }
    userDetails = new FormGroup({
        userName: new FormControl("Mayank", [Validators.required]),
        userAge: new FormControl(10, [Validators.required, Validators.max(100), Validators.min(1)]),
    })

    submitUserDetails(userDetails: any) {
        debugger;
    }

    setValueForForm() {
        this.userDetails.controls.userName.setValue("Sample Data");

        this.userDetails.controls.userName.valueChanges
    }

    validateData() {
        var returnData = false;
        if (this.userDetails && this.userDetails.get("userName")) {
            returnData = this.userDetails.controls.userName.status == "INVALID"
        }
        return returnData

    }
}