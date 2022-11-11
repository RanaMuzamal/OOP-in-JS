class BankAccount
{
    #accountId;
    #accountTitle;
    #balance;
    #emailId;
    setDetails(accountId, accountTitle, balance, emailId)
    {
        this.#accountId = accountId;
        this.#accountTitle = accountTitle;
        this.#balance = balance;
        this.#emailId = emailId;
    }
    withdrawAmount(amount)
    {
        if(amount > this.#balance)
        {
            console.log("You don't have enough balance.");
        }
        else
        {
            this.#balance = this.#balance - amount;
            console.log(`${amount} has been withdrawn and remaining balance is ${this.#balance}`);
        }
    }
    depositAmount(amount)
    {
        this.#balance = this.#balance + amount;
        console.log(`Current balanc is ${this.#balance}`);
    }
    getDetails()
    {
        console.log(`Account ID: ${this.#accountId}`);
        console.log(`Account Title: ${this.#accountTitle}`);
        console.log(`E-mail ID: ${this.#emailId}`);
        console.log(`Account Balance: ${this.#balance}`);
    }

}

const account1 = new BankAccount();
account1.setDetails(1, 'Debit Account', 200000, 'mubeenbaig30gb@gmail.com');
account1.getDetails();
