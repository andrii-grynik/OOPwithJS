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
}

const pasta1 = new Pasta('Spaghetti', 'Tomato')
pasta1.addTopping('mushrooms')
pasta1.addTopping('peppers')
pasta1.addProtein('sausage')
console.log(pasta1)

const pasta2 = new Pasta('Penne', 'Alfredo')
pasta2.addTopping('brocolli')
pasta2.addTopping('cheddar')
pasta2.addTopping('onion')
pasta2.addTopping('light parmesan')
pasta2.addProtein('chicken')
console.log(pasta2)

const pasta3 = new Pasta('Linguine', 'al A Vodka')
pasta3.addTopping('asparagus')
pasta3.addTopping('havarti')
pasta3.addTopping('chives')
pasta3.addTopping('chilli flakes')
pasta3.addProtein('sausage')
pasta3.addProtein('shrimp')
console.log(pasta3)
