import { Component } from "@angular/core";
import { MemberListService } from "./member-list.service";
import { RootObject } from './json.model';
import { Teamdeatil } from './json.model';
import { Memberdetail } from './json.model';

@Component({
    selector: 'member-list',
    templateUrl: 'member-list-component.html'
})
export class MemberListComponent {
    /**
     *
     */
    members: RootObject[];
    sprintNo: any[] = [
        { "sprintno": 1 },
        { "sprintno": 2 },
        { "sprintno": 3 },
        { "sprintno": 4 },
        { "sprintno": 5 },
        { "sprintno": 6 },
        { "sprintno": 7 },
        { "sprintno": 8 },
    ];
    error: string;
    memberName: Array<Memberdetail>;
    constructor(private _memberlistService: MemberListService) {

    }

    ngOnInit() {
        this._memberlistService.getMemberList().subscribe(data => {
            this.members = data;
            console.log(this.members);
        },
            error => this.error = <any>error
        );
        // console.log(this.members);
         this.filterChange(this.members);
    }

    onbuttonclick() {
        const SucessMsg: string = 'Thanks for voting';
        var myWindow = window.open(SucessMsg);
        myWindow.document.write(SucessMsg);
       // this.memberName = this.members.teamdeatils.memberdetails.memberName;

    }
    public filterChange(filter: any): void {
       this.memberName =this.members.teamdeatils.memberdetails.memberName.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        console.log(this.memberName);
    }

}