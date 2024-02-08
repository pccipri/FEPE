import { LoginRequest } from '@/interfaces/loginRequest';
import { RegisterRequest } from '@/interfaces/registerRequest';
import { TokenVerificationRequest } from '@/interfaces/tokenVerificationRequest';
import { API_AUTH_ROUTES, API_BASE_URL, API_ROUTES } from '@/utils/routes';

export const registerUser = async (requestData: RegisterRequest) => {
    try {
        const response = await fetch(API_BASE_URL + API_AUTH_ROUTES.REGISTER, {
            method: 'POST',
            headers: {    
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
          const data = await response.json();
        return data
      } catch (error) {
        console.error('Error in the registration process:', error);
      }
}  

export const loginUser = async (requestData: LoginRequest) => {
    try {
        const response = await fetch(API_BASE_URL + API_AUTH_ROUTES.LOGIN, {
            method: 'POST',
            headers: {    
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
          const data = await response.json();
        return data
      } catch (error) {
        console.error('Error in the login process:', error);
      }
}

export const verifyToken = async (requestData: TokenVerificationRequest) => {
    try {
        const response = await fetch(API_BASE_URL + API_AUTH_ROUTES.AUTH_VERIFICATION, {
            method: 'POST',
            headers: {    
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
          const data = await response.json();
        return data
      } catch (error) {
        console.error('The token is invalid:', error);
      }
}
