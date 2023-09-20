<script>
export default {
    name: 'BaseButton',

    props: {
        color: {
            type: String,
            default: 'blue',
        },
    },

    computed: {
        bgColors() {
            switch(this.color) {
                case 'green':
                    return 'bg-green-600 text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-700';
                    break;
                
                case 'red':
                    return 'bg-red-600 text-white hover:bg-red-500 focus:bg-red-500 active:bg-red-700';
                    break;
                
                default:
                    return 'bg-blue-600 text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700';
                    break;
            }
        }
    },
}
</script>

<template>
    <button
        type="submit"
        :class="`transition w-full p-2 rounded ${bgColors}`"
    >
        <slot>Enviar</slot>
    </button>
</template>