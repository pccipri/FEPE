import { Product } from '@/interfaces/product';
import { RequestMethod } from '@/interfaces/request_method';
import { API_BASE_URL, API_ROUTES } from '@/utils/routes';

export default async function productRequestHandler(requestMethod: RequestMethod, id?: string, updatedProduct?: Product) {

  switch(requestMethod) { 
    case "GET": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.PRODUCTS);
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error fetching products:', error);
          }
       break; 
    } 
    case "GET_BY_ID": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.PRODUCTS}/${id}`);
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
          }
       break; 
    }
    case "POST": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.PRODUCTS, {
              method: 'POST',
              headers: {    
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedProduct),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error creating product:', error);
          }
        break; 
     }
     case "PUT": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.PRODUCTS}/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedProduct),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error replacing product with ID ${id}:`, error);
          }
        break; 
     }
     case "DELETE": { 
        try {
            await fetch(`${API_BASE_URL + API_ROUTES.PRODUCTS}/${id}`, {
              method: 'DELETE',
            });
            return "Product deleted successfully";
          } catch (error) {
            console.error(`Error deleting product with ID ${id}:`, error);
          }
        break; 
     }      
    default: { 
       //statements; 
       break; 
    } 
 } 
}