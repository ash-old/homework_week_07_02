import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      euroAmount: null
    },
    computed: {
      calculateExchange: function(){
        return this.euroAmount + this.selectedCurrency
      }
    },
    mounted(){
      this.getCurrencies()
    },
    methods:{
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(currencies => this.currencies = currencies.rates)
      },
    }
  })
})
