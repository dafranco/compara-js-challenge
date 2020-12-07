const expect = require('chai').expect;
const sinon = require('sinon');
const coTest = require('../src/coTest');
const { FullCoverageCalculator, MegaCoverageCalculator, SpecialFullCoverageCalculator, SuperSaleCalculator, BaseCalculator } = require('../src/priceCalculators');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("CarInsurance", function() {

  describe("#getCalculator", function(){
    var product, carInsurance = new CarInsurance();
    it("return FullCoverageCalculator for Full Coverage product", function() {
      product = new Product('Full Coverage', 1, 1);
      expect(carInsurance.getCalculator(product)).to.be.instanceOf(FullCoverageCalculator)
    });

    it("return MegaCoverageCalculator for Mega Coverage product", function() {
      product = new Product('Mega Coverage', 1, 1);
      expect(carInsurance.getCalculator(product)).to.be.instanceOf(MegaCoverageCalculator)
    });

    it("return SpecialFullCoverageCalculator for Mega Coverage product", function() {
      product = new Product('Special Full Coverage', 1, 1);
      expect(carInsurance.getCalculator(product)).to.be.instanceOf(SpecialFullCoverageCalculator)
    });

    it("return SuperSaleCalculator for Mega Coverage product", function() {
      product = new Product('Super Sale', 1, 1);
      expect(carInsurance.getCalculator(product)).to.be.instanceOf(SuperSaleCalculator)
    });

    it("returns BaseCalculator for any other product",function(){
      product = new Product('This is a test', 1, 1);
      expect(carInsurance.getCalculator(product)).to.be.instanceOf(BaseCalculator)
    })
  })

  describe("#updatePrice",function(){
    var product, carInsurance;
    it('should call getCalculator for getting the right calculator', function(){
      product = new Product('Test', 2,2);
      carInsurance = new CarInsurance([product]);
      sinon.spy(carInsurance, 'getCalculator');

      carInsurance.updatePrice()

      expect(carInsurance.getCalculator.firstCall.calledWith(product)).equal(true)
      expect(carInsurance.getCalculator.calledOnce).equal(true)
    })

    it('Should call updatePrice() and updateSellIn() on the received calculators', function(){
      product = new Product('Test', 2,2);
      carInsurance = new CarInsurance([product]);
      var fake_calculator = new BaseCalculator(product);
      sinon.spy(fake_calculator, 'updatePrice')
      sinon.spy(fake_calculator, 'updateSellIn')
      sinon.stub(carInsurance, 'getCalculator').returns(fake_calculator)

      carInsurance.updatePrice()

      expect(fake_calculator.updatePrice.calledOnce).equal(true)
      expect(fake_calculator.updateSellIn.calledOnce).equal(true)
    })
  })

});
