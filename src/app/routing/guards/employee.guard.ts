import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export default class EmployeeGuard {

    constructor(private _router: ActivatedRoute) { }
    canActivate(routeSnapshot: ActivatedRouteSnapshot) {
        debugger;
        if (+routeSnapshot.params['userAge'] > 9) {
            return true
        }
        return false;
    }
}