const { MegaCoverageCalculator, FullCoverageCalculator, SpecialFullCoverageCalculator, SuperSaleCalculator, BaseCalculator } = require('./priceCalculators');

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      var calculator = this.getCalculator(this.products[i])
      calculator.updatePrice()
      calculator.updateSellIn()
    }

    return this.products;
  }

  getCalculator(product) {
    switch(product.name) {
      case 'Full Coverage':
        return new FullCoverageCalculator(product);
        break;
      case 'Mega Coverage':
        return new MegaCoverageCalculator(product);
        break;
      case 'Special Full Coverage':
        return new SpecialFullCoverageCalculator(product);
        break;
      case 'Super Sale':
        return new SuperSaleCalculator(product);
        break;
      default:
        return new BaseCalculator(product);
        break;
    }
  }
}

module.exports = {
  Product,
  CarInsurance
}
