import { Item } from "../constants/item";
// import { format } from 'date-fns';

// export interface Order {
//   id: number;
//   status: string;
//   totalPrice: number;
//   items: Item[];
//   address: string;
//   date: Date;
// }

export default class Order {
  id: number;
  status: string;
  totalPrice: number;
  items: Item[];
  address: string;
  date: string;

  constructor(id: number, status: string, totalPrice: number, items: Item[], address: string) {
    this.id = id;
    this.status = status;
    this.totalPrice = totalPrice;
    this.items = items;
    this.address = address;
    // this.date = new Date().toISOString();
    this.date = "hello";
  }
}