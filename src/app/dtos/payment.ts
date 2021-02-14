export interface PaymentI{
    /*
Credit Card Number (mandatory, string)
b. Card Holder (mandatory, string)
c. Expiration Date (mandatory, Date, >CurrentDate)
d. Security Code - CCV (optional, string, 3 digits)
e. Amount (mandatory, number, > 0)

    */
   number: string;
   name: string;
   expDate: string;
   cvv: string;
   amount: number;

}