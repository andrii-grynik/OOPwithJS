
class Pasta {
  constructor (type, sauce) {
    this.type = type
    this.sauce = sauce
    this.toppings = []
    this.proteins = []
  }

  addTopping (topping) {
    this.toppings.push(topping)
  }

  addProtein (protein) {
    this.proteins.push(protein)
  }

  setSize (size) {
    if (size === 'S' || size === 'M' || size === 'L') {
      this.size = size
    } else {
      this.size = 'Please choose  S , M  or L'
    }
  }

  getPrice () {
    const basePrice = 10
    const toppingPrice = 2
    return basePrice + this.toppings.length * toppingPrice;
  }

  getSize () {
    return this.size
  }
}

const pasta1 = new Pasta('Spaghetti', 'Tomato')
pasta1.addTopping('mushrooms')
pasta1.addTopping('peppers')
pasta1.addProtein('sausage')
pasta1.setSize('L')
pasta1.getPrice()
console.log(pasta1)
