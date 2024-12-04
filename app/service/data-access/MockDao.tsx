// import coffeeImages from '@/constants/images';
import Coffee from '@/model/Coffee';
import images from '@/constants/images';
import coffeeData from '@/constants/coffeeData.json';
import OnGoingData from '@/constants/onGoingData.json';
import Order from '@/model/Order';

export class MockDao {
    private static instance: MockDao;

    private constructor() {}

    static getInstance(): MockDao {
        if (!MockDao.instance) {
            MockDao.instance = new MockDao();
        }
        return MockDao.instance;
    }

    getProfile() {
        return {
            name: 'Do Phu Qui',
            email: 'PickleBall@ggay.com',
            phone: '0123456789',
            address: 'Hanoi, Vietnam',
            avatar: images.avatar
          }
    };

    getCoffees() {
        const coffees: Coffee[] = coffeeData.map(coffee => {
            const image = images[coffee.image]; // Lấy ảnh từ images
            if (!image) {
                throw new Error(`Image for "${coffee.image}" not found in images.`); // Báo lỗi nếu không tìm thấy ảnh
            }
    
            // Tạo đối tượng Coffee
            return new Coffee(coffee.id, coffee.name, image, coffee.point, coffee.price);
        });

        return coffees;
    }

    getOnGoingOrders() {
        const onGoingOrders: Order[] = OnGoingData.map(order => {

            
            return new Order(order.id, order.status, order.totalPrice, order.items, order.address, order.date);
        });

        return onGoingOrders;
    }
};