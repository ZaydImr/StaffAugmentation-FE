import { Approvers } from "./approvers";

export class Company{
    id: number;
    name: string;
    bankAccount?: string;
    isDeleted: boolean;
    isStaff: boolean;
    vatlegalEntity?: string;
    bicsw?: string;
    vatRate?: 0;
    approver?: Approvers;
    email?: string
    constructor(id: number,
        name: string,
        bankAccount: string,
        isDeleted: boolean,
        isStaff: boolean,
        vatlegalEntity: string,
        bicsw: string,
        vatRate: 0,
        approver: Approvers,
        email: string){

            this.id=id,
            this.name=name,
            this.bankAccount=bankAccount,
            this.isDeleted=isDeleted,
            this.isStaff=isStaff,
            this.vatlegalEntity=vatlegalEntity,
            this.bicsw=bicsw,
            this.vatRate=vatRate,
            this.approver=approver,
            this.email=email
        }
}
