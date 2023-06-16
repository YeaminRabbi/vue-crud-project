// store/productStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
        products: [],
        BASE_URL: window.config.BASE_URL,
  }),
  actions: {
    async fetchProducts() {
      try {
            const response = await axios.get(this.BASE_URL+'/products');
            this.products = response.data.products;
        } catch (error) {
            console.error(error);
        }
      },
      
    async addProduct(product) {
        try {
            const response = await axios.post(this.BASE_URL+'/products', product);
            this.products.push(response.data.product);
            console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    },

    async deleteProduct(id) {
        try {
            const response = await axios.delete(this.BASE_URL+'/products/'+id);
            this.products = this.products.filter(product => product.id !== id);
            console.log(response.data);
            
        } catch (error) {
          console.error(error);
        }
      }
   

    //   async updateProduct(product) {
    //     try {
    //       const response = await axios.put(this.BASE_URL+'/products/'+product.id, product);
    //       const index = this.products.findIndex(item => item.id === product.id);
    //       this.products[index] = response.data.product;
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   },

    //   async fetchProduct(id) {
    //     try {
    //       const response = await axios.get(this.BASE_URL+'/products/'+id);
    //       return response.data.product;
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   },




  },
});
