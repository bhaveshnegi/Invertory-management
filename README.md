# E-Commerce System and Inventory Management Solution

## Overview

This project consists of three parts:

1. **System Design:** A simplified e-commerce system handling users, products, orders, and payments.
2. **Business Logic Implementation:** An inventory management system that tracks stock levels and manages restocking.
3. **Database Query Writing:** SQL queries for an online bookstore to handle customers, books, and orders.

---

## Part 1: System Design

### Description

This system manages:

- **Users:** Who can create and manage orders.
- **Orders:** Contain multiple products and track order status.
- **Products:** Information on products available for sale.
- **Payments:** Linked to orders and track payment status.

### How to Run

1. Open `system-design.js` to review class stubs for `User`, `Product`, `Order`, and `Payment`.
2. Simulate user actions like creating orders or updating order status.

### Assumptions

- Each Order contains multiple products, and every Order is linked to one Payment.
- Statuses include "pending," "completed," and "shipped."

---

## Part 2: Business Logic Implementation

### Description

The inventory management system includes two main functions:

- **processOrders():** Takes a list of incoming sales orders and updates stock levels.
- **restockItems():** Restocks products that fall below a threshold.

### How to Run

1. Open `inventory-management.js`.
2. Adjust the inventory and order data as needed.
3. Run the file to see stock level updates, restock alerts, and restocking logic in action.

### Assumptions

- Products have a stock level and a restock threshold.
- If stock falls below the threshold, a restock alert is triggered.
- Error handling is included for invalid product names and insufficient stock.

---

## Part 3: Database Query Writing

### Description

This part focuses on SQL queries for an online bookstore with the following tables: `Customers`, `Books`, `Orders`, and `OrderDetails`.

### SQL Queries

1. **Top 5 Customers:** Retrieves the top 5 customers based on the number of books purchased in the last year.
2. **Revenue by Author:** Calculates the total revenue generated from book sales by each author.
3. **Books Ordered More Than 10 Times:** Finds books that have been ordered more than 10 times.

---

