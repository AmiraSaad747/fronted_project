"# fronted_project
# Clothing Shopping - Product Module

## 1. Entity Chosen and Why

I chose **Product** as the entity for this module because my graduation project is an online clothing shopping application.

The Product entity is important because it represents the clothes that users can browse and purchase.

Each product contains information such as:

* Name
* Description
* Price
* Category
* Size
* Stock
* Image URL

## 2. Routes Summary

| Method | Route           | Description          |
| ------ | --------------- | -------------------- |
| POST   | `/products`     | Create a new product |
| GET    | `/products`     | Get all products     |
| GET    | `/products/:id` | Get a product by ID  |
| PATCH  | `/products/:id` | Update a product     |
| DELETE | `/products/:id` | Delete a product     |

## 3. How to Run the Code Locally

### Step 1: Install the dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

### Step 2: Configure the environment variables

Create a `.env` file in the project root:

```env
PORT=5000

MONGODB_URI=mongodb+srv://clothingUser:Clothing123456@cluster0.ovie2ox.mongodb.net/?appName=Cluster0

DB_NAME=clothingDB
```

### Step 3: Start the server

Run:

```bash
npm start
```

The server will run on:

```text
http://localhost:5000
```

### Step 4: Test the API

Use Postman to test the following routes:

```text
POST   /products
GET    /products
GET    /products/:id
PATCH  /products/:id
DELETE /products/:id


The project uses **Express.js**, **Mongoose**, and **MongoDB Atlas** to implement the Product CRUD operations.



5. API Usage Examples
Create Product

Send a POST request to /products using multipart/form-data.

Provide the product information such as name, description, price, category, size, and stock. An image can be uploaded using the image field.

Get All Products

Send a GET request to /products to retrieve all products stored in the database.

Get Product by ID

Send a GET request to /products/:id and replace :id with the product ID to retrieve one product.

Update Product

Send a PATCH request to /products/:id to update product information. A new image can also be uploaded using the image field.

Delete Product

Send a DELETE request to /products/:id to remove a product from the database.

6. Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Multer
dotenv
Postman
```

" 
