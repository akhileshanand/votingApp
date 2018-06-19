import { Component } from "@angular/core";
import { MemberListService } from "./member-list.service";
import { RootObject } from './json.model';
// import { Teamdetails } from './json.model';
import { Memberdetail } from './json.model';
import { member } from '../models/member';

@Component({
    selector: 'member-list',
    templateUrl: 'member-list-component.html'
})
export class MemberListComponent {
    /**
     *
     */
    members: any;
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
    bigwebNames: any[] = [
        { "name": 'abc' },
        { "name": 'def' },
        { "name": 'ghi' },
        { "name": 'jkl' }
    ];
    mobwebNames: any[] = [
        { "name": 'abc' },
        { "name": 'def' },
        { "name": 'ghi' },
        { "name": 'jkl' }
    ];
    fnaticNames: any[] = [
        { "name": 'abc' },
        { "name": 'def' },
        { "name": 'ghi' },
        { "name": 'jkl' }
    ];
    teamNames: any[] = [
        { "name": 'Pheonix' },
        { "name": 'Dynamos' },
        { "name": 'Fnatic' }
    ];
    submitted = false;
    constructor(private _memberlistService: MemberListService) {

    }

    ngOnInit() {
        //     this._memberlistService.getMemberList().subscribe(data => {
        //         this.members = data;
        //         console.log(this.members);
        //     },
        //         error => this.error = <any>error
        //     );
        //    // console.log(this.members.memberdetails[0]);
        //     // this.filterChange(this.members);
        //     for (let name in this.members) {
        //         name = this.members.memberdetails.name;
        //         console.log(name);
        //     }
    }
    model = new member();

    onbuttonclick() {
        const SucessMsg: string = 'Thanks for voting';
        var myWindow = window.open(SucessMsg);
        myWindow.document.write(SucessMsg);

    }
    onSubmit() {
        this.submitted = true;
    }
}