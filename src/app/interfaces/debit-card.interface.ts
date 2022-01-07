export interface DebitCard {
  id: string;
  cardNo: string;
  balance: string | number;
  currency: string;
  cvv: string;
  cardHolder: string;
  address: string;
  zipCode: number;
  logo: string;
  expiry: string;
}
