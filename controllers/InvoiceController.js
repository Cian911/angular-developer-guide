angular.module('invoice1', [])

.controller('InvoiceController', function() {

  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'GBP'];
  this.usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    GBP: 1.30
  };

  this.total = function( outCurr ) {
    return this.covertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };

  this.covertCurrency = function( amount, inCurr, outCurr ) {
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };

  this.pay = function() {
    window.alert('Thanks, payment was successful!');
  };

});