import { Category } from '@/interfaces/category';
import { RequestMethod } from '@/interfaces/request_method';
import { API_BASE_URL, API_ROUTES } from '@/utils/routes';

export default async function categoryRequestHandler(requestMethod: RequestMethod, id?: string, updatedCategory?: Category) {

  switch(requestMethod) { 
    case "GET": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.CATEGORIES);
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
       break; 
    } 
    case "GET_BY_ID": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.CATEGORIES}/${id}`);
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error fetching category with ID ${id}:`, error);
          }
       break; 
    }
    case "POST": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.CATEGORIES, {
              method: 'POST',
              headers: {    
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedCategory),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error creating category:', error);
          }
        break; 
     }
     case "PUT": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.CATEGORIES}/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedCategory),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error replacing category with ID ${id}:`, error);
          }
        break; 
     }
     case "DELETE": { 
        try {
            await fetch(`${API_BASE_URL + API_ROUTES.CATEGORIES}/${id}`, {
              method: 'DELETE',
            });
            return "Category deleted successfully";
          } catch (error) {
            console.error(`Error deleting category with ID ${id}:`, error);
          }
        break; 
     }      
    default: { 
       //statements; 
       break; 
    } 
 } 
}