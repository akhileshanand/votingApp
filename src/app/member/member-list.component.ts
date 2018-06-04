import { Component } from "@angular/core";
import { MemberListService } from "./member-list.service";

@Component({
    selector: 'member-list',
    templateUrl: 'member-list-component.html'
})
export class MemberListComponent {
    /**
     *
     */
    members: any[];
    sprintNo: any[] = [
        {"sprintno": 1 },
        {"sprintno": 2 },
        {"sprintno": 3 },
        {"sprintno": 4 },
        {"sprintno": 5 },
        {"sprintno": 6 },
        {"sprintno": 7 },
        {"sprintno": 8 },
    ];
    error: string;
    constructor(private _memberlistService: MemberListService) {

    }

    ngOnInit() {
        this._memberlistService.getMemberList().subscribe(data => {
            this.members = data
        },
            error => this.error = <any>error
        );
        console.log(this.members);
        this.diaplayData();
    }
    diaplayData() {
        // console.log(this.memberdata.sprintno);
        // this.sprintNo= this.memberdata.sprintno;
    }
    onbuttonclick(){
     const SucessMsg :string = 'Thanks for voting';
     var a=window.location.href;

    let username="p";
    let password=1234;
    // window.open(SucessMsg);
     var myWindow = window.open('Thanks for voting');
    myWindow.document.write(SucessMsg);

    }
}