import { Item } from "./item";

export interface OrderSchema {
  id: number;
  status: string;
  total: number;
  items: Item[];
  address: string;
  date: Date;
}