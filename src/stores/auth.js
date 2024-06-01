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
    logout() {
      this.isAuthenticated = false;
      this.user = {};
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
    },
    checkAuth() {
      const token = localStorage.getItem('authToken');
      const userName = localStorage.getItem('userName');
      const userEmail = localStorage.getItem('userEmail');

      if (token) {
        this.isAuthenticated = true;
        this.user = { name: userName, email: userEmail };
      } else {
        this.isAuthenticated = false;
        this.user = {};
      }
    }
  }
});
