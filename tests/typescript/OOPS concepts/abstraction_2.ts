import test from "@playwright/test";
import { SBIbank } from "./abstraction";

test('Implementation of SBI',async()=>{
    const bank = new SBIbank()

    bank.auditTranx()
    bank.depositMoney()
    console.log(bank.interestRatePolicy())
    bank.openAccount()
    bank.withdrawMoney()
    bank.activateDebitCard()

})