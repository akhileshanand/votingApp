export interface Memberdetail {
	memberName: string[];
}

export interface Teamdeatil {
	teamName: string;
	memberdetails: Memberdetail;
}

export interface RootObject {
	teamdeatils: Teamdeatil;
}