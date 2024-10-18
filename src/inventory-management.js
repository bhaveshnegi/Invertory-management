// Inventory management system
const inventory = {
    ProductA: { stock: 50, restockThreshold: 10 },
    ProductB: { stock: 20, restockThreshold: 10 },
    ProductC: { stock: 5, restockThreshold: 10 }
};

// Function to process orders
function processOrders(inventory, orders) {
    const restockAlerts = [];

    orders.forEach(order => {
        const { productName, quantity } = order;

        if (!inventory[productName]) {
            console.error(`Error: ${productName} does not exist in inventory.`);
            return;
        }

        const product = inventory[productName];

        // Check stock availability
        if (product.stock >= quantity) {
            product.stock -= quantity;
            console.log(`${productName} stock updated. New stock: ${product.stock}`);
        } else {
            console.error(`Error: Insufficient stock for ${productName}.`);
        }

        // Restock alert if stock below threshold
        if (product.stock < product.restockThreshold) {
            restockAlerts.push(productName);
        }
    });

    if (restockAlerts.length > 0) {
        console.log('Restock alert for:', restockAlerts.join(', '));
    }
}

// Function to restock items
function restockItems(inventory, restocks) {
    restocks.forEach(restock => {
        const { productName, quantity } = restock;

        if (!inventory[productName]) {
            console.error(`Error: ${productName} does not exist in inventory.`);
            return;
        }

        inventory[productName].stock += quantity;
        console.log(`${productName} restocked. New stock: ${inventory[productName].stock}`);
    });
}

// Example usage
const orders = [
    { productName: 'ProductA', quantity: 45 },
    { productName: 'ProductB', quantity: 5 },
    { productName: 'ProductC', quantity: 3 }
];

processOrders(inventory, orders);

const restocks = [
    { productName: 'ProductA', quantity: 50 },
    { productName: 'ProductC', quantity: 20 }
];

restockItems(inventory, restocks);
