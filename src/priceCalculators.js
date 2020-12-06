class BaseCalculator {
  constructor(product){
    this.product = product
  }

  getMinPrice(){
    return 0
  }

  getMaxPrice(){
    return 50
  }

  getNewPrice() {
    if (this.product.sellIn < 0) {
      return this.product.price - 2
    } else{
      return this.product.price - 1
    }
  }

  updatePrice() {
    var new_price = this.getNewPrice();
    if (new_price < this.getMinPrice()) {
      this.product.price = this.getMinPrice()
    } else if (new_price > this.getMaxPrice()){
      this.product.price = this.getMaxPrice()
    } else{
      this.product.price = new_price
    }
  }

  updateSellIn() {
    this.product.sellIn--
  }
}

class MegaCoverageCalculator extends BaseCalculator {
  updatePrice() {}

  updateSellIn() {}
}


class FullCoverageCalculator extends BaseCalculator {
  getNewPrice() {
    if (this.product.sellIn < 0) {
      return this.product.price + 2
    } else{
      return this.product.price + 1
    }
  }
}

module.exports = {
  BaseCalculator,
  MegaCoverageCalculator,
  FullCoverageCalculator
}