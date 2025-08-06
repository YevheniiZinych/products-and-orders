export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification?: string;
  guarantee: { start: string; end: string };
  price: Array<{ value: number; symbol: string; isDefault: boolean }>;
  date: string;
}

export interface IOrder {
  id: number;
  title: string;
  date: string;
  description?: string;
  products: IProduct[];
}
