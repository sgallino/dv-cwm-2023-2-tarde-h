// Este servicio va a ofrecer las funciones para manejar la data del chat.
import { db } from "./firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const refChat = collection(db, 'chat');

export function chatSaveMessage(data) {
    /*
    Para grabar, usamos la función addDoc(), que crea un nuevo
    documento con un id autogenerado.
    Recibe como primer argumento la referencia a la collection,
    y como segundo el objeto que queremos grabar.
    Retorna una promesa que se resuelve cuando la grabación se
    completó.
    */
    return addDoc(refChat, data);
}

export function chatSubscribeToMessages(callback) {
    /**** Leyendo de Firestore ****/
    /*
    Con getDocs nosotros podíamos leer el contenido completo de una
    collection, pero solo una vez.
    ¿Qué pasa si queremos poder obtener updates en tiempo real de los 
    datos de la collection? Es decir, si queremos que se nos informe 
    cada vez que algo cambie.
    Es bastante simple, tenemos que hacer 2 cambios.
    El primero, es la función. En vez de usar getDocs() vamos a usar
    otra función que se llama onSnapshot().
    Lo segundo, es que esta función no retorna una promesa, sino que
    necesita que le pasemos como segundo parámetro un callback con lo
    que queremos que haga cada vez que lleguen nuevos datos.
    */
    
    // Vamos a escuchar los mensajes para transformarlos en un array de objetos que contengan solamente la data del mensaje de chat.
    // Una vez creado ese array, se lo vamos a pasar a la función del callback que recibimos como argumento.
    onSnapshot(refChat, snapshot => {
        // console.log(snapshot.docs);
        const messages = snapshot.docs.map(doc => {
            return {
                user: doc.data().user,
                message: doc.data().message,
            }
        });
        // console.log("Mensajes transformados: ", messages);
        callback(messages);
    });
}