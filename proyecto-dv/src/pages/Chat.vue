<script>
import { chatSaveMessage, chatSubscribeToMessages } from './../services/chat.js';
import { formatDate } from '../helpers/date.js';
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';

export default {
    name: 'Chat',
    components: { BaseButton, BaseLabel },
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
        },

        dateToString(date) {
            return formatDate(date);
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
                <div class="text-right">{{ dateToString(message.created_at) }}</div>
            </div>
        </div>

        <form 
            class="w-2/6"
            action="#" 
            @submit.prevent="sendMessage"
        >
            <div class="mb-3">
                <BaseLabel 
                    for="user"
                >Usuario</BaseLabel>
                <input
                    class="w-full py-1.5 px-2 border border-gray-400 rounded"
                    type="text"
                    id="user"
                    v-model="newMessage.user"
                >
            </div>
            <div class="mb-3">
                <BaseLabel for="message">Mensaje</BaseLabel>
                <textarea 
                    class="w-full py-1.5 px-2 border border-gray-400 rounded"
                    id="message"
                    v-model="newMessage.message"
                ></textarea>
            </div>
            <BaseButton />
            <!-- <button
                type="submit"
                class="w-full p-2 rounded bg-blue-600 text-white"
            >Enviar</button> -->
        </form>
    </div>
</template>