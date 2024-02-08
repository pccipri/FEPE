const BASE_ROUTE = "/api/v1";

export const API_ROUTES = {
    "CATEGORIES": BASE_ROUTE + "/categories",
    "MESSAGES": BASE_ROUTE + "/messages",
    "ORDERS":  BASE_ROUTE + "/orders",
    "ORDERED_PRODUCT":  BASE_ROUTE + "/orderedProduct",
    "PRODUCTS":  BASE_ROUTE + "/products",
    "USERS":  BASE_ROUTE + "/users",
    "USERS_TYPE": BASE_ROUTE + "/userType",
}

export const API_AUTH_ROUTES = {
    "REGISTER": BASE_ROUTE + "/register",
    "LOGIN": BASE_ROUTE + "/login",
    "AUTH_VERIFICATION": BASE_ROUTE + "verify-token"
}

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL