// export interface Coffee {
//     id: number;
//     name: string;
//     image: string;
//     point: number;
//     price: number;
//     }


export default class Coffee {
    id: number;
    name: string;
    image: string;
    point: number;
    price: number;

    constructor(id: number, name: string, image: string, point: number, price: number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.point = point;
        this.price = price;
    }

    
}
