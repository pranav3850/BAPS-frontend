export class Profession {
    constructor(
        public address?: string,
        public city?: string,
        public pincode?: number,
        public area?: string,
        public kshetra?:string,
        public education?: string,
        public profession?: string,
        public occupation?: string,
        public businessType?: string,
        public skill?: string,
        public workInfo?: string,
        public status?:number,
//  Dashboard model variables
        public contact?: number,
        public fname?: string,
        public mname?: string,
        public lname?: string,
        public mandalname?: string,
        public mandaltype?: string,
        public relation?: string,
    ){}
}