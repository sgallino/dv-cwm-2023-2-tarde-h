import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Chat from '../pages/Chat.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Definimos la lista de rutas.
const routes = [
    // Cada ruta para Vue Router debe ser un objeto que tenga, al menos, 2
    // propiedades: path y component.
    { path: '/',                component: Home, },
    { path: '/quienes-somos',   component: About, },
    { path: '/chat',            component: Chat, },
    { path: '/iniciar-sesion',  component: Login, },
    { path: '/registro',        component: Register, },
];

// Creamos el router usando la función createRouter(), la cual recibe un
// objeto con 2 propiedades:
// - routes: la lista de rutas.
// - history: el tipo de navegación para la historia del browser.
const router = createRouter({
    routes,
    // Pedimos usar un sistema de hashes para la navegación.
    history: createWebHashHistory(),
});

export default router;