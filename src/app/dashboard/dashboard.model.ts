import { Mandal } from "./mandal.model";
import { Relation } from "./relation.model";

export class Dashboard{
    constructor(
        public contact?: number,
        public fname?: string,
        public mname?: string,
        public lname?: string,
        public mandal?: Mandal,
        public relation?: Relation,
    ){}
}