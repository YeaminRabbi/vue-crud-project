<template>

    <div class="container">
        <h1 class="">Welcome to Jelly Store</h1>
        <div>

            <div class="alert alert-primary" role="alert" v-if="notificationStatus">
                {{ notification }}
            </div>

            <form @submit.prevent="authenticate">
                <div class="form-group">
                    <label class="text-left">Email</label>
                    <input type="text" v-model="useremail" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>password</label>
                    <input type="password" v-model="userpassword" class="form-control" required>
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
        useremail: '',
        userpassword: '',
        BASE_URL: window.config.BASE_URL,   
        
        notification : '',
        notificationStatus: false,
    };
  },
  methods: {
    authenticate(){
        const authData = {
            email: this.useremail,
            password: this.userpassword
        };
        
        axios.post(`${this.BASE_URL}/login`, authData)
            .then(response => {
                // Handle the successful response
   
                console.log(response.data);
   
                // Reset the form fields
                this.useremail = '';
                this.userpassword = '';

                //notification message
                this.notification = response.data.message;
                this.notificationStatus = true;
                this.notificationDelay();

            })
            .catch(error => {
            // Handle any errors
                console.error('Error adding product:', error);
            });
    },

    notificationDelay() {
      setTimeout(() => {
        this.notificationStatus = false;
    }, 3000); 
    }

    
  }
};
</script>