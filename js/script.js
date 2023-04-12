
// destruttoro loggetto Vue prendendo il metodo createApp
const {createApp} = Vue;


createApp({

  // inizializzo i dati ossia le "variabili"
  data(){
    // le proprità del return di data sono le nostre variaili
    return{
      messaggio: 'Ciao Vue',
      newMessage: '',
      messaggio2: 'Buongiorno v-text',
      messaggio3: '<strong>Buongiorno v-html</strong>',
      nome: 'Ugo',
      cognome: 'De Ughi',
      coloreTesto: 'rosso',
      modificaTesto: 'sottolineato',
      arrayClass: ['rosso', 'sottolineato'],
      multipleClassi: 'rosso sottolineato',
      active: false,
      counter: 0,
    }
  },

  // methods è un oggetto che contine le funzioni
  methods: {

    // questa è la sitassi più comoda per le funzioni
    funzioneAlClick(){
      console.log('Mi hai cliccato');
    },
    
    funzioneEstesa: function(){
      console.log('Mi hai cliccato funzioneEstesa');
      
    },
    
    funzioneArrow: () => {
      console.log('Mi hai cliccato funzioneArrow');
    },
    
    funzioneCompatta() {
      console.log('Mi hai cliccato funzioneCompatta');
    },

    funzioneParametri(saluto){
      // per accedere a un data devo sempre farlo precedere da this
      // this è l'oggetto vue
      console.log(saluto, this.nome);
    },

    addToCounter(){
      this.counter++;
    },

    toggleRosso(){
      this.active = !this.active
    },

    handleKeyUp(evento){
      if(evento.key === 'Enter'){
        console.log('Ho schiacciato enter');
      }
      if(evento.key === 'a'){

        console.log('Ho schiacciato a');
      }
    },

    // keyup.enter
    handleInvio(){
      // sostituisco il vecchio messaggio con quello nuovo
      this.messaggio = this.newMessage;
    }

  }

}).mount('#app') // fa riferimento all'id del tag dedicato a Vue