export interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  status: string;
  currency: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}
