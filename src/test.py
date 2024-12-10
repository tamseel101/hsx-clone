import sqlite3

# Create the database in memory
conn = sqlite3.connect(":memory:")
cursor = conn.cursor()

# Create Customers table
cursor.execute("""
CREATE TABLE Customers (
    CustomerID INTEGER PRIMARY KEY,
    CustomerName TEXT NOT NULL,
    CustomerEmail TEXT NOT NULL
);
""")

# Create Products table
cursor.execute("""
CREATE TABLE Products (
    ProductID INTEGER PRIMARY KEY,
    ProductName TEXT NOT NULL,
    Category TEXT NOT NULL
);
""")

# Create Orders table
cursor.execute("""
CREATE TABLE Orders (
    OrderID INTEGER PRIMARY KEY,
    CustomerID INTEGER NOT NULL,
    ProductID INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    OrderDate TEXT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
""")

# Insert data into Customers
cursor.executemany("""
INSERT INTO Customers (CustomerID, CustomerName, CustomerEmail)
VALUES (?, ?, ?);
""", [
    (1, "John Smith", "john@example.com"),
    (2, "Jane Doe", "jane@example.com"),
    (3, "Mike Johnson", "mike@example.com"),
    (4, "Lisa Brown", "lisa@example.com")
])

# Insert data into Products
cursor.executemany("""
INSERT INTO Products (ProductID, ProductName, Category)
VALUES (?, ?, ?);
""", [
    (1001, "Laptop", "Electronics"),
    (1002, "Smartphone", "Electronics"),
    (1003, "T-Shirt", "Clothing")
])

# Insert data into Orders
cursor.executemany("""
INSERT INTO Orders (OrderID, CustomerID, ProductID, Quantity, OrderDate)
VALUES (?, ?, ?, ?, ?);
""", [
    (1, 1, 1001, 2, "2022-05-10"),
    (2, 2, 1002, 1, "2022-06-15"),
    (3, 3, 1003, 3, "2022-07-20"),
    (4, 4, 1002, 2, "2022-08-05")
])

# Query: Total quantity of products ordered in the Electronics category
query = """
SELECT SUM(o.Quantity) AS TotalElectronicsQuantity
FROM Orders o
JOIN Products p ON o.ProductID = p.ProductID
WHERE p.Category = 'Electronics';
"""

cursor.execute(query)
result = cursor.fetchone()
print("Total Electronics Quantity:", result[0])

# Close the connection
conn.close()
