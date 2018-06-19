export interface Memberdetail {
	name: string;
}

export interface RootObject {
	teamDetails: string;
	memberdetails: Memberdetail[];
}