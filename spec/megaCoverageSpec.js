const expect = require('chai').expect;

const { MegaCoverageCalculator } = require('../src/priceCalculators');
const {Product} = require('../src/coTest');

describe("MegaCoverageCalculator", function() {
  var product,calculator;
  const SELL_IN = 0
  const PRICE = 80
  beforeEach(function(){
    product = new Product('Mega Coverage', SELL_IN, PRICE);
    calculator = new MegaCoverageCalculator(product)
  })

  describe("#updateSellIn()", function(){
    it("should not update sellIn value of the product", function(){
      calculator.updateSellIn()
      expect(product.sellIn).equal(SELL_IN)
    })
  })

  describe("#price", function(){
    it("should not update product price", function(){
      calculator.updateAmount()
      expect(product.price).equal(PRICE)
    })
  })
});
