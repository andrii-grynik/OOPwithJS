class Person {
  constructor (name, age, address, affiliation) {
    this.name = name
    this.age = age
    this.address = address
    this.affiliation = affiliation
  }

  bio () {
    return `My name is ${this.name} and I am 
    ${this.age} years old. I attend classes from ${this.address} and I am a 
    ${this.affiliation} here`
  }
}

// Subclass
class Mentor extends Person {
  // Completely re-define the bio method since it has more to say
  bio () {
    return `Hello from Lighthouse Labs. ${super.bio()}`
  }
}

class Student extends Person {
  bio () {
    return `Greetings from The Space! ${super.bio()}`
  }
}

// The Student class doesn't need to define bio since it can just use the one from Person

// DRIVER CODE

const bob = new Mentor('Bob Ross', '32', 'LHL main building', 'mentor')
console.log(bob.bio())

const jack = new Student('Jack Montana', '26', 'ISS station', 'student')
console.log(jack.bio())
