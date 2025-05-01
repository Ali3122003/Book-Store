# Book Store 

## Overview
The **Book Store** is a full-featured **MERN stack** web application that allows users to browse, search, purchase books online, and manage their accounts. This project includes advanced functionalities such as **authentication, payment integration, email notifications, cloud storage for images, and interactive UI enhancements.**

## Features
### 🛍️ **E-Commerce Functionalities**
- Browse and search books
- Add books to cart and wishlist
- Secure checkout using **Stripe**
- Order history & tracking

### 🔑 **Authentication & Authorization**
- User login/register with **JWT authentication**
- Role-based access control (Admin/User)
- Admin dashboard for managing books, orders, and users

### 📧 **Email Notifications**
- Order confirmation emails using **Nodemailer**
- Password reset functionality

### 📦 **Cloud Storage**
- Upload and manage book images via **Cloudinary**

### 💳 **Payments**
- Secure payment processing with **Stripe**
- Test mode available for sandbox transactions

### 🎉 **User-Friendly UI**
- **React-Toastify** for real-time notifications
- Mobile responsive UI using **Tailwind CSS**

## Tech Stack
### Frontend:
- **React.js** (Hooks, Context API, Redux)
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React-Toastify** for notifications

### Backend:
- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose** for database
- **JWT Authentication** for user management
- **Nodemailer** for email notifications
- **Cloudinary** for image storage
- **Stripe API** for payments

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ali3122003/Book-Store.git
cd Book-Store
```


### 2️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
NODE_ENV=""
STRIPE_SECRET_KEY=""
EMAIL_ADDRESS=""
PASSWORD=""
```
### 3️⃣ To Run Project
```
docker-compose up -d
```
### 4️⃣ To Stop Project
```
docker-compose down
```
