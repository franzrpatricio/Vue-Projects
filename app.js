const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Dope',
            githubLink: 'https://github.com/franzrpatricio',
            rawURL: '<a href="https://github.com/franzrpatricio" target="_blank">Check my GitHub!</a>',
            followers: 0
        }
    },
    methods:{
        addFollower(){
            this.followers++;
        },
        passDataWithEvents(msg, event){
            // event.preventDefault() //no need since we are using event modifier (.prevent)
            // console.log(msg)
            this.lastName = event.target.value
        },
        keyModifierEvent(event){
            this.middleName = event.target.value
        }
        // always use regular functions 
        // not arrow functions because of proxying(not using 'this')
        // pag walang this, hindi mag didisplay sa html
    },
    computed: {
        fullName(){
            console.log('Full name computed property was called.')
            return `${this.firstName.toUpperCase()} ${this.middleName.toUpperCase()} ${this.lastName.toUpperCase()}`
        }
        // this saves performance and execution time; pag hindi nilagay sa computed property lahat mag uupdate
    },
    watch: {
        followers(newVal, oldVal){
            setTimeout(() => {
                this.followers = 0
            }, 3000);
        }
    }
}).mount('#app')

/* 
PROPERTIES
data = store single values (objects, arrays)
methods = store functions (can make requests, update elements, etc.)(expects return)
computed = store functions that calculates a value
watchers (watch) = watch data for changes; can run functions to exec additional logic; good for asnyc tasks
*/

// setTimeout(() => {
//     vm.firstName = 'Jane'
// }, 2000);