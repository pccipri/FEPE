import { User } from '@/interfaces/user';
import { RequestMethod } from '@/interfaces/request_method';
import { API_BASE_URL, API_ROUTES } from '@/utils/routes';

export default async function userRequestHandler(requestMethod: RequestMethod, id?: string, updatedUser?: User) {

  switch(requestMethod) { 
    case "GET": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.USERS);
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error fetching users:', error);
          }
       break; 
    } 
    case "GET_BY_ID": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.USERS}/${id}`);
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
          }
       break; 
    }
    case "POST": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.USERS, {
              method: 'POST',
              headers: {    
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedUser),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error creating user:', error);
          }
        break; 
     }
     case "PUT": { 
        try {
           const response = await fetch(`${API_BASE_URL + API_ROUTES.USERS}/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedUser),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error replacing user with ID ${id}:`, error);
          }
        break; 
     }
     case "DELETE": { 
        try {
            await fetch(`${API_BASE_URL + API_ROUTES.USERS}/${id}`, {
              method: 'DELETE',
            });
            return "User deleted successfully";
          } catch (error) {
            console.error(`Error deleting user with ID ${id}:`, error);
          }
        break; 
     }      
    default: { 
       //statements; 
       break; 
    } 
 } 
}