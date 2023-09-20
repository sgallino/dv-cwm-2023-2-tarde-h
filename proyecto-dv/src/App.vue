<script>
import { chatSaveMessage, chatSubscribeToMessages } from './services/chat.js';

export default {
    name: 'App',
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
    <h1>Intro a Firestore, ahora leyendo en tiempo real</h1>

    <form 
        action="#" 
        @submit.prevent="sendMessage"
    >
        <div>
            <label for="user">Usuario</label>
            <input
                type="text"
                id="user"
                v-model="newMessage.user"
            >
        </div>
        <div>
            <label for="message">Mensaje</label>
            <textarea 
                id="message"
                v-model="newMessage.message"
            ></textarea>
        </div>
        <button type="submit">Enviar</button>
    </form>

    <div>
        <div v-for="message in messages">
            <div><b>Usuario:</b> {{ message.user }}</div>
            <div><b>Mensaje:</b> {{ message.message }}</div>
        </div>
    </div>
</template>