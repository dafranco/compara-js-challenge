const expect = require('chai').expect;
const sinon = require('sinon');
const { BaseCalculator } = require('../src/priceCalculators');
const { Product } = require('../src/coTest');


describe("BaseCalculator",function() {
  var product, calculator;
  const INITIAL_SELL_IN = 30;
  const INITIAL_PRICE = 60;

  describe("#getNewPrice", function() {
    beforeEach(function() {
      product = new Product('I\'m a test product', INITIAL_SELL_IN, INITIAL_PRICE)
      calculator = new BaseCalculator(product);
    })
    it('should reduce price by 1 if sell in > 0 ', function(){
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE - 1);
    })
    it('should reduce price by 1 if sell in is 0 ', function(){
      product.sellIn = 0;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE - 1);
    })
    it('should reduce price by 2 if sell in < 0', function(){
      product.sellIn = -1;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE - 2);
    })

  })

  describe("#updatePrice",function() {
    beforeEach(function() {
      product = new Product('I\'m a test product', INITIAL_SELL_IN, INITIAL_PRICE)
      calculator = new BaseCalculator(product);
    })

    it('should set up min price with received price is under min', function(){
      sinon.stub(calculator, 'getNewPrice').returns(calculator.getMinPrice() - 100)
      calculator.updatePrice();
      expect(product.price).equal(calculator.getMinPrice());
    })

    it('should set up max price with received price is above max', function(){
      sinon.stub(calculator, 'getNewPrice').returns(calculator.getMaxPrice() + 100)
      calculator.updatePrice();
      expect(product.price).equal(calculator.getMaxPrice());
    })

    it('should set up received price if it\'s between thresholds', function(){
      var fake_price = (calculator.getMaxPrice() - calculator.getMinPrice()) / 2
      sinon.stub(calculator, 'getNewPrice').returns(fake_price)
      calculator.updatePrice();
      expect(product.price).equal(fake_price);
    })
  })

  describe("#updateSellIn", function(){
    var product, calculator;
    before(function(){
      product = new Product('I\'m a test product', INITIAL_SELL_IN, INITIAL_PRICE)
      calculator = new BaseCalculator(product);
    })
    it('should decrease product sellIn by 1', function(){
      calculator.updateSellIn()
      expect(product.sellIn).equal(INITIAL_SELL_IN - 1)
    })
  })

})

