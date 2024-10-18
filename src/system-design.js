// User Class
class User {
    constructor(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.orders = [];
    }

    createOrder(products) {
        const newOrder = new Order(this.userId, products);
        this.orders.push(newOrder);
        return newOrder;
    }

    viewOrders() {
        return this.orders;
    }
}

// Product Class
class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }
}

// Order Class
class Order {
    constructor(userId, products) {
        this.orderId = Date.now();
        this.userId = userId;
        this.products = products;
        this.status = 'pending';
        this.date = new Date();
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

// Payment Class
class Payment {
    constructor(orderId, amount) {
        this.paymentId = Date.now();
        this.orderId = orderId;
        this.amount = amount;
        this.paymentStatus = 'pending';
    }

    completePayment() {
        this.paymentStatus = 'completed';
    }
}
