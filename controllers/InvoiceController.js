angular.module('invoice1', ['finance2'])

.controller('InvoiceController', ['Converter', function InvoiceController(Converter) {

  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = Converter.currencies;

  this.total = function total(outCurr) {
    return Converter.convert(this.qty * this.cost, this.inCurr, outCurr);
  };

  this.pay = function pay() {
    window.alert('Thanks, your payment was successfull!');
  };

}]);