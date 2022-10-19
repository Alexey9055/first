/*

const icon = {
    data() {
        return{
            iconIn: true,
            iconOut: false
        }
    }
}

Vue.createApp(icon).mount('#icon')

*/

const modalin = Vue.createApp({
    components: {
        modalin
      },
      data() {
        return {
          showModal: false
        }
      }
   
  })

modalin.mount('#app')