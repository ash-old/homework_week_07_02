import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      euroAmount: null,
      convertToEuro: null,
      toEuroAmount: null
    },
    computed: {
      calculateExchange: function(){
        const result = this.euroAmount * this.selectedCurrency
        return result.toFixed(2)
      },
      toEuro: function(){
        const result = this.convertToEuro / this.toEuroAmount
        return result.toFixed(2)
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
