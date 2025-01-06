

E-Commerce BookHub Website 📚🛒
    Welcome to the E-Commerce BookHub Website! A modern, interactive, and user-friendly platform for book lovers to browse, purchase, and manage their favorite books online. 
    Built using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB, this app features secure authentication, shopping cart functionality, and an intuitive book management system.

Features 🌟

    User Registration & Login 🔐: Secure user authentication with JWT for seamless login.
    
    Book Listing 📚: Browse and view a variety of books available for purchase.
    
    Shopping Cart 🛒: Add and manage books in your cart with ease.
    
    JWT Authentication 🔑: Secure authentication using token-based JWT for protected routes.
    
    Node.js & Express Backend ⚙️: Robust API for user and product management.
    
    MongoDB 🗄️: NoSQL database for efficient data storage and management.
    

Technologies Used 💻
  Frontend:
  
    React ⚛️: Dynamic and interactive user interface components.
    
    HTML5 & CSS3 🖋️: Structure and style of the website.
    
    JavaScript ✨: Client-side scripting for rich interactivity.
    
  Backend:
  
    Node.js & Express 🖧: Powerful server-side runtime and routing.
    
    MongoDB 🗃️: Database for storing user and product data.
    
    JWT (JSON Web Token) 🔑: Secure token-based authentication.
    
    bcryptjs 🔐: For password hashing and secure authentication.

    
Installation Guide 📥
Follow these steps to set up the project locally.


  1. Clone the Repository 📂
     
     git clone https://github.com/your-username/E-Commerce-BookHub-Website-main.git
     cd E-Commerce-BookHub-Website-main
     
  2. Install Backend Dependencies 🛠️
     
      Navigate to the backend directory and install required dependencies:
     
      cd backend
     
      npm install
     
  3. Set Up Environment Variables ⚙️
      Create a .env file in the backend folder with the following variables:

      JWT_SECRET=your_jwt_secret_key
     
      JWT_EXPIRATION=1h
     
      MONGO_URI=mongodb://localhost/ecommerce
     
      JWT_SECRET: The secret key used for signing JWTs.
     
      MONGO_URI: Your MongoDB connection string.
     
     
  4. Install Frontend Dependencies ⚡
     
      Navigate to the frontend directory and install required packages:
  
      cd frontend
     
      npm install
     
  5. Run the Application 🚀
     
      Start both the backend server and frontend application:

      Backend:
        cd backend
        npm run dev
      Frontend:
        cd frontend
        npm start
     
Your app will be live at http://localhost:3000 for the frontend and the backend will be available at http://localhost:5000.

API Routes 📡

Here are the key API routes for interacting with the system:

    POST /api/register - Register a new user.
    
    POST /api/login - Log in and get a JWT token.
    
    POST /api/cart - Add a product to the cart.
    
    GET /api/cart - Get the current user's cart.
    
    DELETE /api/cart/:productId - Remove a product from the cart.
    
Contributing 🤝
We welcome contributions! If you'd like to improve the project or fix bugs, feel free to fork the repository and submit a pull request.



Additional Notes 🌱
Environment: Node.js and MongoDB must be installed locally to run this project.
If you encounter any issues or have suggestions, feel free to open an issue on GitHub.
