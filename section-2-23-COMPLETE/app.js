let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!'
        },
        {
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!'
        }
      ]
    }
  },
  methods: {
    move() {
      const first = this.people.shift() //shift = remove item/s in the beginning of an array & return removed item/s

      this.people.push(first) //push = adds new item/s to the end of an array & pass 'first' variable to re-add the removed item
    }
  }
}).mount('#app')
