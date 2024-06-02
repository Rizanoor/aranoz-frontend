import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: {}
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.user = user;
    },
    register(user) {
      this.isAuthenticated = true;
      this.user = user;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = {};
      localStorage.removeItem('authToken');
      localStorage.removeItem('token_type');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('products');
    },
    checkAuth() {
      const token = localStorage.getItem('authToken');
      const token_type = localStorage.getItem('token_type');
      const userName = localStorage.getItem('userName');
      const userEmail = localStorage.getItem('userEmail');

      if (token) {
        this.isAuthenticated = true;
        this.user = { name: userName, email: userEmail, token_type: token_type };
      } else {
        this.isAuthenticated = false;
        this.user = {};
      }
    }
  }
});
