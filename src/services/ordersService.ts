import { Order } from '@/interfaces/order';
import { RequestMethod } from '@/interfaces/request_method';
import { API_BASE_URL, API_ROUTES } from '@/utils/routes';

export default async function orderRequestHandler(requestMethod: RequestMethod, id?: string, updatedOrder?: Order) {

  switch(requestMethod) { 
    case "GET": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.ORDERS);
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error fetching orders:', error);
          }
       break; 
    } 
    case "GET_BY_ID": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.ORDERS}/${id}`);
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error fetching order with ID ${id}:`, error);
          }
       break; 
    }
    case "POST": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.ORDERS, {
              method: 'POST',
              headers: {    
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedOrder),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error creating order:', error);
          }
        break; 
     }
     case "PUT": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.ORDERS}/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedOrder),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error replacing order with ID ${id}:`, error);
          }
        break; 
     }
     case "DELETE": { 
        try {
            await fetch(`${API_BASE_URL + API_ROUTES.ORDERS}/${id}`, {
              method: 'DELETE',
            });
            return "Order deleted successfully";
          } catch (error) {
            console.error(`Error deleting order with ID ${id}:`, error);
          }
        break; 
     }      
    default: { 
       //statements; 
       break; 
    } 
 } 
}