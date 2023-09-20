<script>
export default {
    name: 'App',
}
</script>

<template>
    <header class="flex gap-8 items-center p-4 bg-slate-100">
        <p class="text-xl">DV Chat</p>

        <nav>
            <ul class="flex gap-4">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/quienes-somos">Quiénes Somos</router-link>
                </li>
                <li>
                    <router-link to="/chat">Chat</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container p-4 m-auto">
        <!-- router-view es donde se van a cargar los componentes que corresponden a la ruta indicada en el router. -->
        <router-view></router-view>
    </div>
</template>