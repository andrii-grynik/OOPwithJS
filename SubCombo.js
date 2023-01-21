class Sub {
  constructor (bread, cheese) {
    this.bread = bread
    this.chesse = cheese
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

class Combo extends Sub {
  items (drink, chips) {
    this.drink = drink
    this.chips = chips
  }
}


const sub1 = new Sub('White', 'Pepper Jack')
sub1.addTopping('peppers')
sub1.addTopping('olives')
sub1.addProtein('Chicken')
console.log(sub1)


const sub2 = new Combo('Wheat', 'Havarti')
sub2.addTopping('mushrooms')
sub2.addTopping('peppers')
sub2.addProtein('sausage')
sub2.items('Coke','salt and Vinegar(THE Nasty Ones!)')
console.log(sub2)
