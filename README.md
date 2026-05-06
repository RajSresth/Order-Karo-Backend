# Order Karo - Backend

A comprehensive Node.js/Express backend for a food delivery platform (similar to Zomato/Swiggy).

## Features

✅ **Authentication & Authorization**

- User registration and login
- JWT-based authentication
- Google OAuth support
- OTP-based password reset
- Role-based access control (User, Owner, Rider, Admin)

✅ **Shop Management**

- Shop creation and management by owners
- Shop search and filtering by city
- Shop details with items list
- Image upload via Cloudinary

✅ **Item Management**

- Item creation with food categories and types
- Edit and delete items
- Search and filter by category and food type
- Multiple images per item

✅ **Order Management**

- Complete order lifecycle (pending → confirmed → preparing → ready → picked → delivered)
- Payment status tracking
- Order history and tracking
- Rider assignment
- Order cancellation

✅ **User Roles**

- **User**: Browse shops, place orders, rate shops
- **Owner**: Manage shops and items, view orders
- **Rider**: View assigned orders, update delivery status
- **Admin**: Dashboard stats, user management, order management

✅ **Reviews & Ratings**

- Shop reviews and ratings
- Average rating calculation
- Review management (create, update, delete)

✅ **Admin Dashboard**

- Statistics (total users, shops, items, orders)
- User management and role assignment
- Shop approval system
- Order monitoring

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + Cloudinary
- **Email**: Nodemailer
- **Validation**: Validator.js
- **Password Hashing**: Bcrypt
- **Rate Limiting**: Express Rate Limit

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)
- Gmail account (for OTP emails)

## Installation

### 1. Clone the repository

```bash
git clone <repo-url>
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```
MONGODB_URI=mongodb://localhost:27017/order-karo
PORT=3000
JWT_SECRET=your_jwt_secret_key_here

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_APIKEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_app_password_here

FRONTEND_URL=http://localhost:5173
```

### 4. Start MongoDB

```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (update MONGODB_URI in .env)
```

### 5. Start the server

```bash
npm start
```

Server will run on `http://localhost:3000`

## Project Structure

```
backend/
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   ├── auth.controller.js    # Auth logic
│   ├── user.controller.js    # User management
│   ├── shop.controller.js    # Shop management
│   ├── item.controller.js    # Item management
│   ├── order.controller.js   # Order management
│   ├── admin.controller.js   # Admin functions
│   └── review.controller.js  # Reviews & ratings
├── middleware/
│   ├── auth.js              # JWT verification
│   └── multer.js            # File upload
├── model/
│   ├── user.model.js        # User schema
│   ├── shop.model.js        # Shop schema
│   ├── item.model.js        # Item schema
│   ├── order.model.js       # Order schema
│   └── review.model.js      # Review schema
├── routes/
│   ├── auth.routes.js       # Auth endpoints
│   ├── user.routes.js       # User endpoints
│   ├── shop.routes.js       # Shop endpoints
│   ├── item.routes.js       # Item endpoints
│   ├── order.routes.js      # Order endpoints
│   ├── admin.routes.js      # Admin endpoints
│   └── review.routes.js     # Review endpoints
├── utils/
│   ├── cloudinary.js        # Image upload
│   ├── jwt.utils.js         # JWT utilities
│   ├── mail.js              # Email sending
│   └── validate.js          # Input validation
├── public/                   # Uploaded files
├── .env                      # Environment variables
├── .env.example             # Environment template
├── package.json
├── index.js                 # Entry point
└── API_DOCUMENTATION.md     # API docs
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/logout` - Logout user
- `POST /api/auth/send-otp` - Send password reset OTP
- `POST /api/auth/verify-otp` - Verify OTP
- `POST /api/auth/reset-password` - Reset password
- `POST /api/auth/google-auth-signup` - Google signup
- `POST /api/auth/google-auth-login` - Google login

### Users

- `GET /api/user/current` - Get current user
- `GET /api/user/all-users` - Get all users (with filters)
- `GET /api/user/:userId` - Get user by ID
- `PUT /api/user/:userId` - Update user profile
- `GET /api/user/stats` - Get dashboard statistics

### Shops

- `POST /api/shop/create-shop` - Create shop
- `PUT /api/shop/edit-shop/:shopId` - Edit shop
- `GET /api/shop/get-my-shop` - Get user's shops
- `DELETE /api/shop/remove-shop/:shopId` - Delete shop
- `GET /api/shop/all-shops` - Get all shops with filters
- `GET /api/shop/:shopId` - Get shop details

### Items

- `POST /api/item/create-item` - Create item
- `PUT /api/item/edit-item/:itemId` - Edit item
- `DELETE /api/item/remove-item/:itemId` - Delete item
- `GET /api/item/all-items` - Get all items with filters
- `GET /api/item/:itemId` - Get item details
- `GET /api/item/shop/:shopId` - Get items by shop

### Orders

- `POST /api/order/create-order` - Create order
- `GET /api/order/my-orders` - Get user's orders
- `GET /api/order/:orderId` - Get order details
- `PUT /api/order/update-status/:orderId` - Update order status
- `PUT /api/order/assign-rider` - Assign rider (Admin)
- `GET /api/order/shop-orders` - Get shop's orders
- `GET /api/order/rider-orders` - Get rider's orders
- `PUT /api/order/payment-status` - Update payment status
- `DELETE /api/order/cancel-order/:orderId` - Cancel order

### Reviews

- `POST /api/review/create-review` - Create review
- `GET /api/review/shop/:shopId` - Get shop reviews
- `GET /api/review/my-reviews` - Get user's reviews
- `PUT /api/review/:reviewId` - Update review
- `DELETE /api/review/:reviewId` - Delete review

### Admin

- `PUT /api/admin/approve-shop/:shopId` - Approve/reject shop
- `PUT /api/admin/update-user-role/:userId` - Update user role
- `GET /api/admin/all-orders` - Get all orders
- `GET /api/admin/all-shops` - Get all shops
- `DELETE /api/admin/delete-user/:userId` - Delete user
- `DELETE /api/admin/delete-shop/:shopId` - Delete shop

## Authentication

Most endpoints require JWT authentication. The token is sent in cookies with each request.

**How to authenticate:**

1. Register or login to get a JWT token
2. Token is automatically stored in cookies
3. Make requests with `credentials: 'include'` in fetch/axios

## Models

### User

```javascript
{
  fullname: String,
  mobile: String,
  email: String (unique),
  password: String (hashed),
  role: String (user|owner|rider|admin),
  otp: String,
  otpExpiresAt: Date,
  isOtpVerified: Boolean
}
```

### Shop

```javascript
{
  name: String,
  image: String,
  owner: ObjectId (User),
  city: String,
  state: String,
  address: String,
  items: [ObjectId] (Item)
}
```

### Item

```javascript
{
  name: String,
  image: String,
  shop: ObjectId (Shop),
  category: String,
  price: Number,
  foodType: String (veg|non veg)
}
```

### Order

```javascript
{
  user: ObjectId (User),
  shop: ObjectId (Shop),
  items: [{
    item: ObjectId (Item),
    quantity: Number,
    price: Number
  }],
  totalPrice: Number,
  deliveryAddress: String,
  status: String,
  rider: ObjectId (User),
  paymentMethod: String,
  paymentStatus: String,
  orderNote: String
}
```

### Review

```javascript
{
  user: ObjectId (User),
  shop: ObjectId (Shop),
  order: ObjectId (Order),
  rating: Number (1-5),
  comment: String
}
```

## Error Handling

All errors are returned in a consistent format:

```json
{
  "message": "Error description",
  "error": {
    /* error details */
  }
}
```

**Status Codes:**

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

## Security Features

✅ JWT-based authentication
✅ Password hashing with Bcrypt
✅ Role-based access control
✅ Rate limiting (100 requests per 15 minutes)
✅ CORS protection
✅ Input validation
✅ MongoDB injection prevention with Mongoose

## Environment Variables

| Variable                | Description               | Example                                |
| ----------------------- | ------------------------- | -------------------------------------- |
| `MONGODB_URI`           | MongoDB connection string | `mongodb://localhost:27017/order-karo` |
| `PORT`                  | Server port               | `3000`                                 |
| `JWT_SECRET`            | JWT signing secret        | `your_secret_key`                      |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name     | `your_cloud_name`                      |
| `CLOUDINARY_APIKEY`     | Cloudinary API key        | `your_api_key`                         |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret     | `your_api_secret`                      |
| `GMAIL_USER`            | Gmail address for OTP     | `your_email@gmail.com`                 |
| `GMAIL_PASS`            | Gmail app password        | `your_app_password`                    |
| `FRONTEND_URL`          | Frontend URL for CORS     | `http://localhost:5173`                |

## Testing the APIs

### Using Postman

1. Import the API collection
2. Set up environment variables (base_url, etc.)
3. Use pre-built requests to test endpoints

### Using cURL

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": "John Doe",
    "mobile": "+919876543210",
    "email": "john@example.com",
    "password": "StrongPass@123",
    "role": "user"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "StrongPass@123",
    "role": "user"
  }'
```

## Troubleshooting

**MongoDB Connection Error:**

- Ensure MongoDB is running: `mongod`
- Check MONGODB_URI in .env

**Cloudinary Upload Error:**

- Verify Cloudinary credentials
- Check public folder permissions

**Email Not Sending:**

- Enable "Less secure apps" or use App Password for Gmail
- Check GMAIL_USER and GMAIL_PASS in .env

**JWT Token Error:**

- Clear cookies and login again
- Ensure token is sent in requests

## License

ISC

## Author

Shresth Rajput

## Support

For issues and questions, please create an issue in the repository.
