<script>
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';
import { login } from '../services/auth.js';

export default {
    name: 'LoginForm',
    components: { BaseButton, BaseLabel },
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        handleLogin() {
            console.log("Ejecutando el login con estos datos: ", this.form);
            
            login({
                ...this.form,
                // email: this.form.email,
                // password: this.form.password,
            })
                .then(user => {
                    
                });
        }
    }
}
</script>

<template>
    <form 
        action="#"
        @submit.prevent="handleLogin"
    >
        <div class="mb-3">
            <BaseLabel for="email">Email</BaseLabel>
            <input
                class="w-full py-1.5 px-2 border border-gray-400 rounded"
                type="email"
                id="email"
                v-model="form.email"
            >
        </div>
        <div class="mb-3">
            <BaseLabel for="password">Contraseña</BaseLabel>
            <input 
                class="w-full py-1.5 px-2 border border-gray-400 rounded"
                type="password" 
                id="password"
                v-model="form.password"
            >
        </div>
        <BaseButton>Ingresar</BaseButton>
    </form>
</template>