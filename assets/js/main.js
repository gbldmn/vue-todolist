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
                const input = {
                    text: this.input,
                    done: false
                }
                this.todos.push( input );
                this.input = ''
            }    
      
        },
        cancellazione(i){
            this.todos.splice( i, 1 )
        },
        inVerti(i){
           if(this.todos[i].done == false) {
            this.todos[i].done = true
           } else if (this.todos[i].done == true) {
             this.todos[i].done = false
           }
        }
            
           
        
    
    }
}).mount('#app')



