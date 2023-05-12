<template>
        <div class="container1">
            <div class="forms-container">
                <div class="signin-signup">
                    <form class="sign-in-form form1" @submit.prevent="login">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" name ="email" placeholder="Email" v-model="email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" name = "password" placeholder="Password" id="password" v-model="password"  />
                        </div>
                        <input type="submit" value="Login" class="btn1 solid" />
    
    
                    </form>
    
                </div>
            </div>
    
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content fontthi">
                        <h1>ระบบระบุตำแหน่งภายในอาคาร</h1>
                        <p style="font-size: 15px;">
                            ระบบระบุตำแหน่งภายในอาคารโดยใช้เทคโนโลยี อัลตร้าไลท์แบน มาประยุกต์ใช้งาน
                        </p>
    
                    </div>
                    <img src="../../src/assets/images/undraw_internet_on_the_go_re_vben.svg" class="image" alt="" />
                </div>
    
            </div>
        </div>

    <!-- <div>
        <form @submit.prevent="login">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
        </form>

        <p v-if="status">{{ status }}</p>
    </div> -->
</template>

<script>

import firebase from '../firebase/firebase'
import 'firebase/compat/auth'
import { useRouter } from 'vue-router'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Define your routes here
    ]
})


export default {
    data() {
        return {
            email: '',
            password: '',
            status: '',
        }
    },
    methods: {
        async login() {
            try {
                const auth = firebase.auth()
                const userCredential = await auth.signInWithEmailAndPassword(
                    this.email,
                    this.password
                )
                // User is logged in
                this.status = 'Login Successful'
                
                router.push('/Home') // Redirect to index page
                 setTimeout(() => {
                    this.$router.go(0); // Refresh page
                }, 50);
            

                
            } catch (error) {
                // Handle errors
                this.status = 'Login Failed: ' + error.message
                console.error(error)
            }
        },
    },
}
</script>