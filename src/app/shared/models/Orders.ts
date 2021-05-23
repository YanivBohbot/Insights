import { Customer } from "./Csutomer";

export interface Orders{
    id: number;
    customer:Customer;
    total:number;
    placed:Date;
    fullfilled:Date;

}