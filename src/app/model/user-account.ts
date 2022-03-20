import { AccountOperation } from "./account-operation";

export class UserAccount {
    reference: string;
    balance: number;
    name: string;
    operations : AccountOperation[] = [];
}