import { Component } from "@angular/core";
import { Router } from "@angular/router";
import EmployeeService from "src/app/services/employee.service";

@Component({
    templateUrl: "employee.list.component.html",
    selector: "employee-list"
})
export class EmployeeListComponent {
    userName = "Mayank Gupta";
    employeeList: any = [];
    constructor(private _empService: EmployeeService, private _router: Router) {
        this.employeeList = this._empService.employeeList;
        localStorage.setItem("userName", "TechnoFunnel")
        localStorage.setItem("sbiData", '{ "code": "200", "message": "Success", "data": { "HN": "एसबीआई", "HP": "575.00", "DISPID": "SBI", "cl5yPerChange": "80.7700", "BIDQ": "2356.00", "cl3mVal": "573.5", "BIDP": "573.75", "newSubsector": "Bank - Public", "cl1mDt": "2023-07-07", "P_C": 7.96, "YR": "2023", "cl2yVal": "433.4", "SC_SUBSEC": "Banks - Public Sector", "sc_ttm_cons": "74.92", "SC_TTM": "68.4", "clYtdVal": "613.7", "cl6mDt": "2023-02-09", "cl1wVal": "598.45", "0": "15:59:47", "cl1mChange": "-19.85", "cl3mChange": "0.25", "150DayAvg": "566.77", "clYtdChange": "-39.95", "tot_buy_qty": 0, "clYtdDt": "2022-12-30", "Group": "N", "ACCOD": "14030001", "cl3yDt": "2020-08-07", "LTHDate": "2022-12-15", "cl3mDt": "2023-05-09", "DYCONS": 1.97, "NSEID": "SBIN", "52H": "629.55", "AvgDelVolPer_8day": "37.48", "52L": "499.35", "BV": "335.98", "MKTLOT": "1.00", "DVolAvg20": "20550091.35", "OFFERP": "0.00", "OFFERQ": "0.00", "cl6mVal": "550.8", "AvgVolQtyDel_20day": "6721135", "cl1mVal": "593.6", "PBCONS": 1.55, "5DayAvg": "580.65", "AvgDelVolPer_3day": "38.32", "sessionId": "CONTINUOUS", "TID": "406", "SHRS": "8924611934", "50DayAvg": "586.98", "cl3yChange": "383.10", "im_scid": "", "DVolAvg10": "21472637.50", "AvgVolQtyTraded_20day": "17857877", "LP": "568.35", "lower_circuit_limit": "515.80", "upper_circuit_limit": "630.40", "ty": "1", "cl1wDt": "2023-08-02", "cl5yDt": "2018-08-09", "IND_PE": "10.29", "cl1yPerChange": "10.2500", "cl3yVal": "190.65", "52HDate": "2022-12-15", "OPN": "575.00", "cl1mPerChange": "-3.3400", "DTTIME": "8091559", "SC_FULLNM": "State Bank of India", "DVolAvg5": "30650597.20", "LTLDate": "2001-09-21", "DY": 1.97, "etf": 0, "clYtdPerChange": "-6.5100", "isinid": "INE062A01020", "cl2yDt": "2021-08-09", "slug": "banks-public-sector/statebankindia/SBI", "AvgDelVolPer_20day": "37.64", "cl5yVal": "317.4", "cl2yPerChange": "32.3800", "pricechange": "0.6500", "AvgDelVolPer_5day": "37.36", "200DayAvg": "574.47", "VOL": "15769111", "pricepercentchange": "0.1134", "exchange": "N", "sc_mapindex": "23.0", "DVolAvg30": "18331078.93", "cl1wChange": "-24.70", "AVGP": "571.14", "LTH": "629.55", "cl3yPerChange": "200.9400", "LTL": "13.21", "cl3mPerChange": "0.0400", "PECONS": 7.66, "30DayAvg": "594.37", "cl1yChange": "53.35", "cl2yChange": "140.35", "AvgQtyDel_5day": "8520318", "FV": "1.00", "MKTCAP": 512049.61, "SMID": "BF", "DIVPR": "1130.00", "tot_sell_qty": 0, "DELV": "43.40", "PREVDATE": "2023-08-08", "52LDate": "2023-02-01", "cl1wPerChange": "-4.1300", "main_sector": "Banks", "lastupd": "2023-08-09 15:59:46", "SERIES": "EQ", "BSEID": "500112", "GN": "એસબીઆઇ", "QtyDeliverable": "10867206", "cl5yChange": "256.35", "LDAYS": 0, "MKT_LOT": "1500", "cl1yVal": "520.4", "PB": 1.71, "PE": 8.39, "cl6mPerChange": "4.1700", "PCCONS": 7.26, "TVOL": "0", "cl6mChange": "22.95", "cl1yDt": "2022-08-08", "DISPTYP": "BANK", "CEPS": "56.29", "AvgQtyTraded_5day": "22804165", "BVCONS": "371.08", "pricecurrent": "573.75", "priceprevclose": "573.10", "symbol": "SBI", "company": "SBI", "market_state": "CLOSED", "lastupd_epoch": "1691576986" }')

    }

    redirectPage(empName: string, age: string) {
        this._router.navigate(["/details", empName, age])
    }

    ngOnDestroy() {
        alert("Garbage List")
    }

}