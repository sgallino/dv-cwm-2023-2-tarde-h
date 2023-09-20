<script>
import BaseButton from '../components/BaseButton.vue';

export default {
    name: 'Register',
    components: { BaseButton },
}
</script>

<template>
    <h1 class="mb-4 text-3xl">Registro</h1>

    <form action="#">
        <div class="mb-3">
            <label for="email" class="block mb-1">Email</label>
            <input
                class="w-full py-1.5 px-2 border border-gray-400 rounded"
                type="email"
                id="email"
            >
        </div>
        <div class="mb-3">
            <label for="password" class="block mb-1">Contraseña</label>
            <input 
                class="w-full py-1.5 px-2 border border-gray-400 rounded"
                type="password" 
                id="password"
            >
        </div>
        <BaseButton>Crear Cuenta</BaseButton>
        <!-- <button
            type="submit"
            class="w-full p-2 rounded bg-blue-600 text-white"
        >Crear Cuenta</button> -->
    </form>
</template>