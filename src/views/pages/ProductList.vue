<template>
    <div class="container">
      <h1 class="text-center">Product List</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product,index) in this.products" :key="product">
            <td>{{ index+1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
                <router-link :to="`/product/edit/${product.id}`" class="btn btn-primary">Edit</router-link> &nbsp;
                <button @click="ProductDelete(product.id)" class="btn btn-danger">Delete</button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [],
        // BASE_URL: 'http://127.0.0.1:8000/api',
        BASE_URL: 'http://192.168.1.117:8000/api',
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        axios
          .get(`${this.BASE_URL}/products/`)
          .then(response => {
            // Handle the successful response
            console.log(response.data);
            // Update the component's data with the fetched products
            this.products = response.data.products;
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
      },

      ProductDelete(productId)
      {
        axios
          .delete(`${this.BASE_URL}/products/${productId}`)
          .then(response => {
            // Handle the successful response
            console.log(response.data);
            // Update the component's data with the fetched products

            // this.fetchProducts();
            this.products= response.data.products;
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
      }
    },
  };
  </script>
  