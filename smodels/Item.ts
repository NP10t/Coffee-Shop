// export interface Item {
//     id: number;
//     typeID: number;
//     name: string;
//     price: number;
//     quantity: number;
//     selected: boolean;
//     details: string;
//     image: string;
//     }

export class Details {
    shot: string;
    selection: string;
    size: string;
    ice: boolean;

    constructor(shot: string, selection: string, size: string, ice: boolean) {
        this.shot = shot;
        this.selection = selection;
        this.size = size;
        this.ice = ice;
    }

    to_string() {
        return `${this.shot} | ${this.selection} | ${this.size} | ${this.ice ? "Ice" : "Hot"}`;
    }
}

export default class Item {
    id: number;
    typeID: number;
    name: string;
    price: number;
    quantity: number;
    selected: boolean;
    details: Details;
    image: string;

    constructor(id: number, typeID: number, name: string, price: number, quantity: number, selected: boolean, details: Details, image: string) {
        this.id = id;
        this.typeID = typeID;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.selected = selected;
        this.details = details;
        this.image = image;
    }

    calculatePrice = () => {
        let basePrice = Number(this.price); // Base price for an Americano
        basePrice += this.details.shot === "Double" ? 1 : 0;
        basePrice += this.details.size === "Large" ? 1.5 : this.details.size === "Small" ? -0.5 : 0;
        return (basePrice * this.quantity).toFixed(2);
      };

    }