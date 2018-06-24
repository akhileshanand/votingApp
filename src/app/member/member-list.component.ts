import { Component } from "@angular/core";
import { MemberListService } from "./member-list.service";
import { RootObject } from './json.model';
// import { Teamdetails } from './json.model';
import { Memberdetail } from './json.model';
import { member } from '../models/member';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from "@angular/platform-browser-dynamic/src/platform_providers";

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
        { "name": 'mno' },
        { "name": 'pqr' },
        { "name": 'stu' },
        { "name": 'vwx' }
    ];
    fnaticNames: any[] = [
        { "name": 'yz1' },
        { "name": '234' },
        { "name": '567' },
        { "name": '890' }
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
        

    }
    model = new member('abc', 'your Comment', 1, 'Pheonix');

    onbuttonclick() {
        const SucessMsg: string = 'Thanks for voting';
        var myWindow = window.open(SucessMsg);
        myWindow.document.write(SucessMsg);
        console.log(this.model.teamName);
        console.log(this.model.teamName);

    }
    onSubmit() {
        this.submitted = true;
    }
    dropdownchange() {
        let isSeleacted = false;
        if (this.model.teamName = 'Pheonix') {
            return isSeleacted = false;

        } else if (this.model.teamName = '') {
            return isSeleacted = true;
        }
    }
}