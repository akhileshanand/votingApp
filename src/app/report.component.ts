import { Component } from "@angular/core";
// import * as mockReportData from './report.data';

@Component({
    // selector: 'report-list',
    templateUrl: 'report.component.html'
})
export class ReportComponent {
 count:number;
 pageTitle:"REPORT"
    reportData: any = [{
        "votedPerson": [{
            "name": "AKhilesh",
            "comment": "GOOD work"
        },
        {
            "name": "Anand",
            "comment": "GOOD attitude"
        },
        {
            "name": "AKhilesh",
            "comment": "GOOD work"
        },
        {
            "name": "Ajay",
            "comment": "some text"
        }
        ]
    }]
/**
 *
 */
constructor() {

}
getCount(){
    this.reportData;
}

}