const { createApp } = Vue

createApp({
    data() {
        return {
             input: '',
             todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
            ]
        }
    },
    methods: {
        creaElemento(){

            if( this.input != ''){
                this.todos.push(this.input)
            }
        },
        cancellazione(i){
            this.todos.splice( i, 1 )
        }
            
           
        
    
    }
}).mount('#app')