<!-- src/components/ProductList.vue -->
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
                <tr v-for="(product, index) in products" :key="product.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td> 
                    <td>
                        <router-link :to="`/product/edit/${product.id}`" class="btn btn-primary">Edit</router-link> &nbsp;
                        <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useProductStore } from '@/store/productStore.js';

export default defineComponent({
    name: 'ProductList',
    setup() {
        const productStore = useProductStore();

        onMounted(() => {
            productStore.fetchProducts();
            productStore.products.data;
        });

        const deleteProduct = async (productId) => {
            await productStore.deleteProduct(productId);
            // await productStore.fetchProducts();
            // productStore.products.data;
        };


        return {
            products: productStore.products,
            deleteProduct,
        };
    },

     
});
</script>
