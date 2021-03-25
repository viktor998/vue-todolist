var app = new Vue({
    el: '#root',
    data:{
        inputUser: '',
        todos:[
            {
                title: 'Hello World 1',
                status: 'todo'
            },
            {
                title: 'Hello World 2',
                status: 'todo'
            },
            {
                title: 'Hello World 3',
                status: 'todo'
            },
            {
                title: 'Hello World 4',
                status: 'todo'
            }
        ]
    }, 
    computed:{
        todosCompute: function(){
            let done = this.todos.filter((todo)=> todo.status == 'done');
            let todo = this.todos.filter((todo)=> todo.status == 'todo');

            return [...todo, ...done]
        }
    },
    methods:{
        add: function(){
            if(this.inputUser != ''){
                let obj = {
                    title: this.inputUser,
                    status: 'todo'
                }
    
                this.todos.push(obj);
                this.inputUser = '';
            }
            
        },
        doneCheck: function(todo){
            let index = this.todos.indexOf(todo);
           this.todos[index].status = 'done'
        },
        remove: function(todo){
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1)
        },
        txt: function(todo, i){
            
            this.inputUser = todo.title
            this.todos.splice(i, 1)
        }
    }
})