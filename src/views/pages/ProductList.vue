<template>
  <ProductList />    
</template>
  
  <script>
  import ProductList from '@/components/ProductList.vue';

  export default {

    components: {
        ProductList,
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
  