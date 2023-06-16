<template>

    <div class="container">
        <h1 class="">Add Product</h1>
        <div>
            <form @submit.prevent="addProduct">
                <div class="form-group">
                    <label class="text-left">Product Name</label>
                    <input type="text" v-model="productName" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Product Price</label>
                    <input type="number" v-model="productPrice" class="form-control" required>
                </div>
            
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productName: '',
      productPrice: '',
      BASE_URL: window.config.BASE_URL,
      // BASE_URL: 'http://127.0.0.1:8000/api',
      // BASE_URL: 'http://192.168.1.117:8000/api',
    };
  },
  methods: {
    addProduct() {
      const productData = {
        name: this.productName,
        price: this.productPrice
      };
      
      axios.post(`${this.BASE_URL}/products`, productData)
        .then(response => {
          // Handle the successful response
          console.log(response.data);
          // Reset the form fields
          this.productName = '';
          this.productPrice = '';
        })
        .catch(error => {
          // Handle any errors
          console.error('Error adding product:', error);
        });
    }
  }
};
</script>