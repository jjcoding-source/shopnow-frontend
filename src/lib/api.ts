import axios from 'axios';
import { toast } from 'sonner';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request Interceptor 
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor 
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'Something went wrong';
    
    if (error.response?.status === 401) {
      toast.error("Session expired. Please login again.");
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (error.response?.status === 403) {
      toast.error("You don't have permission to perform this action.");
    } else {
      toast.error(message);
    }
    
    return Promise.reject(error);
  }
);

export default api;

export const productApi = {
  getAll: (params?: any) => api.get('/products', { params }),
  getById: (id: number) => api.get(`/products/${id}`),
  getFeatured: () => api.get('/products/featured'),
};

export const authApi = {
  login: (credentials: { email: string; password: string }) => 
    api.post('/auth/login', credentials),
  register: (userData: any) => api.post('/auth/register', userData),
};

export const cartApi = {
  getCart: () => api.get('/cart'),
  addToCart: (productId: number, quantity: number = 1) => 
    api.post('/cart/add', { productId, quantity }),
};