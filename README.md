# Overview

This project is the frontend for the **Pharma Ease** application. It connects to a backend API through the `NEXT_PUBLIC_API_URL` environment variable and includes pages for shopping, authentication, cart and checkout flows, contact/messages, and admin-style data management.

## Tech Stack

The project uses the following technologies:

- **Next.js** 14.1.1
- **React** 18
- **TypeScript** 5
- **Bootstrap** 5.3.2
- **Redux Toolkit**
- **React Redux**

## Features

### Customer Features

- Browse products on the shop page
- Filter products by category
- Register a new account
- Log in to an existing account
- View the shopping cart
- Continue to checkout
- See the order confirmation flow
- Access contact-related functionality

The shop page fetches products and categories and filters products by the selected category. The login and register pages implement account flows in the UI. The cart page and related route structure also show that the purchase flow pages are present.

### Admin Features

- Database overview page
- Users management page
- Products management page
- Categories management page
- Orders management page
- Messages management page
- Create and edit flows for several entities

The `src/app` route list includes admin-oriented pages such as `database`, `users`, `products`, `categories`, `orders`, `messages`, `create-category`, `create-product`, `create-user`, and multiple edit pages.

## Authentication

Authentication is handled through an auth context on the frontend. Session data is stored in `sessionStorage`, and the context tracks login state, token data, and expiration checks.

## API Integration

The frontend is configured to use a backend API through an environment variable.

### Required Environment Variable

- `NEXT_PUBLIC_API_URL`

The repository's `.env.example` instructs you to create an environment file with `NEXT_PUBLIC_API_URL` set to your API URL.

## Main Routes

### Public and Customer-Facing Routes

- `/`
- `/shop`
- `/login`
- `/register`
- `/cart`
- `/checkout`
- `/confirmation`
- `/contact`
- `/account`

### Admin and Management Routes

- `/database`
- `/users`
- `/products`
- `/categories`
- `/orders`
- `/messages`
- `/create-category`
- `/create-product`
- `/create-user`
- `/edit-category/[id]`
- `/edit-messages`
- `/edit-order`
- `/edit-orders`
- `/edit-order-products`
- `/edit-product`
- `/edit-user`
- `/order-products`

These route folders appear in the `src/app` directory on the `dev` branch.

## Project Structure

Main folders and files in the repository include:

- `public`
- `src`
- `.env.example`
- `next.config.js`
- `package.json`
- `tsconfig.json`

Within `src`, the app router lives under `src/app`, and the repository also contains a `src/services` directory and an auth context under `src/contexts/AuthContext.tsx`.

## Getting Started

### 1. Clone the repository
- git clone https://github.com/pccipri/FEPE.git
- cd FEPE
### 2. Install dependencies
- npm install
### 3. Configure environment variables
- Create a local environment file and set NEXT_PUBLIC_API_URL variable
- The repository includes a .env.example file that documents this variable.
### 4. Run the development server
- npm run dev
### 5. Open the app
- http://localhost:3000
