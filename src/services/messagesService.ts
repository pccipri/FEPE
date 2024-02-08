import { Message } from '@/interfaces/message';
import { RequestMethod } from '@/interfaces/request_method';
import { API_BASE_URL, API_ROUTES } from '@/utils/routes';

export default async function messageRequestHandler(requestMethod: RequestMethod, id?: string, updatedMessage?: Message) {

  switch(requestMethod) { 
    case "GET": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.MESSAGES);
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error fetching messages:', error);
          }
       break; 
    } 
    case "GET_BY_ID": { 
        try {
            const response = await fetch(`${API_BASE_URL + API_ROUTES.MESSAGES}/${id}`);
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error fetching message with ID ${id}:`, error);
          }
       break; 
    }
    case "POST": { 
        try {
            const response = await fetch(API_BASE_URL + API_ROUTES.MESSAGES, {
              method: 'POST',
              headers: {    
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedMessage),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error('Error creating message:', error);
          }
        break; 
     }
     case "PUT": { 
        try {          
            const response = await fetch(`${API_BASE_URL + API_ROUTES.MESSAGES}/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedMessage),
            });
            const data = await response.json();
            return data
          } catch (error) {
            console.error(`Error replacing message with ID ${id}:`, error);
          }
        break; 
     }
     case "DELETE": { 
        try {
            await fetch(`${API_BASE_URL + API_ROUTES.MESSAGES}/${id}`, {
              method: 'DELETE',
            });
            return "Message deleted successfully";
          } catch (error) {
            console.error(`Error deleting message with ID ${id}:`, error);
          }
        break; 
     }      
    default: { 
       //statements; 
       break; 
    } 
 } 
}