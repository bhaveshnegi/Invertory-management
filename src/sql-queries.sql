-- Top 5 Customers by Total Quantity Purchased

SELECT c.customer_id, c.name, SUM(od.quantity) AS total_books
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN OrderDetails od ON o.order_id = od.order_id
WHERE o.order_date >= CURDATE() - INTERVAL 1 YEAR
GROUP BY c.customer_id
ORDER BY total_books DESC
LIMIT 5;

-- Total Revenue by Each Author

SELECT b.author, SUM(od.quantity * b.price) AS total_revenue
FROM Books b
JOIN OrderDetails od ON b.book_id = od.book_id
GROUP BY b.author
ORDER BY total_revenue DESC;

-- Books Ordered More Than 10 Times

SELECT b.title, SUM(od.quantity) AS total_quantity_ordered
FROM Books b
JOIN OrderDetails od ON b.book_id = od.book_id
GROUP BY b.book_id
HAVING total_quantity_ordered > 10;

