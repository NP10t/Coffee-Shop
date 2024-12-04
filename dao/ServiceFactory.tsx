import { MockDao } from "./data-access/MockDao";

export class ServiceFactory {
    static getMockDao() {
        return MockDao.getInstance();
    }
}