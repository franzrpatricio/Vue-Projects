let vm = Vue.createApp({
    data(){
        return{
            isPurple: false,
            selectedColor: '',
            size: 150, // initial value in css circle(class)
            position: 
        }
    },
    computed:{
        circleClasses(){
            return{purple: this.isPurple}
            // example of class binding; purple is class name
            // vue will take care of changes (swap classes whenever data changes) 
        }//,
        // circleStyles(){
        //     return{
        //         width: size + 'px',
        //         height: size + 'px',
        //         'line-height': size + 'px'
        //     }
        //     // style binding; returns css properties in c/o Vue
        // }
    }
}).mount('#app')