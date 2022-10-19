/*Vue.createApp({
  data() {
    return {
      checkedNames: []
    }
  }
}).mount('#v-model-multiple-checkboxes').component('my-pr')*/

const two = Vue.createApp({
  data() {
    return {
        checkedNames: [ ]
    }
  },
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

two.mount('#v-model-multiple-checkboxes')
two.component('my-na')

