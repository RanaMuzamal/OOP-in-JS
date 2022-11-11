class Payment
{
    constructor(paymentAmount)
    {
        this.paymentAmount = paymentAmount;
    }
    paymentDetails()
    {
        console.log(`Amount of the payment is ${this.paymentAmount}`);
    }
}
class CashPayment extends Payment
{
    constructor(paymentAmount)
    {
        super(paymentAmount);
    }
    paymentDetails()
    {
        console.log(`Payment ${this.paymentAmount} is in cash`);
    }
}
class CardPayment extends Payment
{
    constructor(paymentAmount, cardNumber)
    {
        super(paymentAmount);
        this.cardNumber = cardNumber;
    }
    paymentDetails()
    {
        console.log(`Payment ${this.paymentAmount} is paid using card number ${this.cardNumber}`);
    }
}
class CreditCards extends CardPayment
{
    constructor(paymentAmount, cardNumber, cardName, expirationDate)
    {
        super(paymentAmount, cardNumber);
        this.cardName = cardName;
        this.expirationDate = expirationDate;        
    }
    paymentDetails()
    {
        console.log(`Payment ${this.paymentAmount} is paid using card number ${this.cardNumber}. Card holder's name is ${this.cardName}. Expiration date of card is ${this.expirationDate}`);
    }
}
const p1 = new CreditCards(4000, 23423434, "Mubeen Baig", "11-11-2030");
p1.paymentDetails();