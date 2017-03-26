angular.module('invoice1', ['finance3'])

.controller('InvoiceController', ['YahooFinance', function InvoiceController(YahooFinance) {

  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = YahooFinance.currencies;

  this.total = function total(outCurr) {
    return YahooFinance.convert(this.qty * this.cost, this.inCurr, outCurr);
  };

  this.pay = function pay() {
    window.alert('Thanks, your payment was successfull!');
  };

}]);