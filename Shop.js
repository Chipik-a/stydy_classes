export class Shop {
    #orders = new Map();

    static generateOrderId() {
        return Math.floor(Math.random() * 10000);
    }

    addOrder(order) {
        this.#orders.set(order.id, order);
    }

    getOrderById(id) {
        return this.#orders.get(id);
    }

    getAllOrders() {
        return Array.from(this.#orders.values());
    }
}