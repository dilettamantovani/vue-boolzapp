const {createApp} = Vue

createApp ({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020', 
                            time: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020',
                            time: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020',
                            time: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            time: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            chatIndex: 0,

            search: '', 

            myText: '',

            filteredList: '',
        
            timestamp: '',
        }

    },
  
    methods: {

        // list filter
        filterContacts() {
            this.contacts.filter(element => {
                if(element.name.toLowerCase().includes(this.search.toLowerCase())) {
                    element.visible = true;
                }else{
                    element.visible=false;
                }
                console.log(element.visible)
            });
        },
    
        selectChat(i) {
            this.chatIndex = i;
        },

        autoReply() {
            let reply = { 
                date: 'un secondo fa', //ricava data con newDate
                message: 'Ok!', 
                status: 'received'};
            this.contacts[this.chatIndex].messages.push(reply); //fallo comparire nella stessa chat

        },
        
        sendMessage() {
            let newText = { 
                date: 'un secondo fa', //ricava data con newDate
                message: this.myText, 
                status: 'sent'};
            this.contacts[this.chatIndex].messages.push(newText);
            this.myText = '';
            setTimeout(this.autoReply, 1000);
        },

        //DA CAPIRE COME INSERIRLA DURANTE IL WEEKEND
        // getNow: function() {
        //     const today = new Date();
        //     const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        //     const time = today.getHours() + ":" + today.getMinutes();
        //     const dateTime = date +' alle '+ time;
        //     this.timestamp = dateTime;
        // }
    },
    
    mounted() {

        this.contacts[0].messages.forEach(message => {
            console.log(message);
        });
    },
    

}).mount("#app")