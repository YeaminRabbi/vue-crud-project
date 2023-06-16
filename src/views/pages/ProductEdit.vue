<template>
    <div class="container">
      <h1 class>Edit Product</h1>
      <div>
        <form @submit.prevent="updateProduct">
          <div class="form-group">
            <label class="text-left">Product Name</label>
            <input type="text" v-model="productName" class="form-control" required>
          </div>
  
          <div class="form-group">
            <label>Product Price</label>
            <input type="number" v-model="productPrice" class="form-control" required>
          </div>
  
          <button type="submit" class="btn btn-primary">Update</button> &nbsp;
          <router-link :to="`/products/`" class="btn btn-dark">Go Back</router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productId: '', 
        productName: '',
        productPrice: '',
        BASE_URL: window.config.BASE_URL,
        // BASE_URL: 'http://127.0.0.1:8000/api',
        // BASE_URL: 'http://192.168.1.117:8000/api',
      };
    },
    created() {
      // Retrieve the product ID from the route params
      this.productId = this.$route.params.id;
      
      // Fetch the product data using the product ID
      this.fetchProduct();
    },
    methods: {
      fetchProduct() {
        axios.get(`${this.BASE_URL}/products/${this.productId}`)
          .then(response => {
            const product = response.data.product;
            // Update the component's data with the fetched product
            this.productName = product.name;
            this.productPrice = product.price;
          })
          .catch(error => {
            console.error('Error fetching product:', error);
          });
      },
      updateProduct() {
        const productData = {
          name: this.productName,
          price: this.productPrice
        };
        
        axios.put(`${this.BASE_URL}/products/${this.productId}`, productData)
          .then(response => {
            console.log(response.data);
            // Redirect or perform other actions after successful update
          })
          .catch(error => {
            console.error('Error updating product:', error);
          });
      }
    }
  };
  </script>
  