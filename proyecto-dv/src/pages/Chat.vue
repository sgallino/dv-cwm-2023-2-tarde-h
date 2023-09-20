<script>
import { chatSaveMessage, chatSubscribeToMessages } from './../services/chat.js';

// TODO: Ordenar los mensajes por fecha :D

export default {
    name: 'Chat',
    data() {
        return {
            messages: [],
            newMessage: {
                user: '',
                message: '',
            }
        }
    },

    methods: {
        sendMessage() {
            chatSaveMessage({
                user: this.newMessage.user,
                message: this.newMessage.message,
            })
                .then(() => {
                    this.newMessage.message = '';
                });
        }
    },

    // Cargamos los mensajes iniciales.
    mounted() {
        chatSubscribeToMessages(messages => {
            this.messages = messages;
        });
    }
}
</script>

<template>
    <h1 class="mb-4 text-3xl">Intro a Firestore, ahora leyendo en tiempo real</h1>

    <div class="flex justify-between gap-4">
        <div class="w-4/6">
            <div 
                v-for="message in messages"
                class="mb-2"
            >
                <div><b>Usuario:</b> {{ message.user }}</div>
                <div><b>Mensaje:</b> {{ message.message }}</div>
            </div>
        </div>

        <form 
            class="w-2/6"
            action="#" 
            @submit.prevent="sendMessage"
        >
            <div class="mb-3">
                <label 
                    for="user"
                    class="block mb-1"
                >Usuario</label>
                <input
                    class="w-full py-1.5 px-2 border border-gray-400 rounded"
                    type="text"
                    id="user"
                    v-model="newMessage.user"
                >
            </div>
            <div class="mb-3">
                <label 
                    for="message"
                    class="block mb-1"
                >Mensaje</label>
                <textarea 
                    class="w-full py-1.5 px-2 border border-gray-400 rounded"
                    id="message"
                    v-model="newMessage.message"
                ></textarea>
            </div>
            <button
                type="submit"
                class="w-full p-2 rounded bg-blue-600 text-white"
            >Enviar</button>
        </form>
    </div>
</template>