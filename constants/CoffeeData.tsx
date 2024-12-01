import coffeeImages from '@/constants/images';

export interface CoffeeType {
    id: number;
    name: string;
    image: string;
    point: number;
    price: number;
    }

export const COFFEE_DATA: CoffeeType[] = [
    {
        id: 1,
        name: 'Americano',
        image: coffeeImages.americano,
        point: 10,
        price: 3.99,
    },
    {
        id: 2,
        name: 'Cappuccino',
        image: coffeeImages.cappuccino,
        point: 15,
        price: 4.99,
    },
    {
        id: 3,
        name: 'Mocha',
        image: coffeeImages.mocha,
        point: 20,
        price: 5.99,
    },
    {
        id: 4,
        name: 'Flat White',
        image: coffeeImages.flatWhite,
        point: 25,
        price: 6.99,
    },
];
