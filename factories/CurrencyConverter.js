angular.module('finance2', [])

.factory('Converter', function() {

  var currencies = ['EUR', 'USD', 'GBP'];

  var usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    GBP: 1.30
  };

  var convert = function( amount, inCurr, outCurr ) {
    return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
  };

  return {
    currencies: currencies,
    convert: convert
  };

});