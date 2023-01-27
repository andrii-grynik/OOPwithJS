class Vampire {
  constructor (name, yearConverted) {
    this.name = name
    this.yearConverted = yearConverted
    this.offspring = []
    this.creator = null
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring (vampire) {
    vampire.creator = this
    this.offspring.push(vampire)
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring () {
    const vampFamSize = this.offspring.length
    if (vampFamSize === undefined || vampFamSize === null) {
      return 0
    }
    return vampFamSize
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal () {
    let vampIndex = 0
    let vampCursor = this.creator

    while (vampCursor) {
      vampIndex++
      if (vampCursor.creator) { vampCursor = vampCursor.creator } else { return vampIndex }
    }

    return vampIndex
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan (vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
  }

  // Returns the closest common ancestor of two vampires
  closestCommonAncestor (vampire) {
    let curr = this
    let other = vampire
    let currNumFromCreator = this.numberOfVampiresFromOriginal
    let otherNumFromCreator = vampire.numberOfVampiresFromOriginal

    if (!curr.creator || !other.creator) {
      return !curr.creator ? curr : other
    }
    while (currNumFromCreator > otherNumFromCreator) {
      currNumFromCreator -= 1
      curr = curr.creator
    }
    while (otherNumFromCreator > currNumFromCreator) {
      otherNumFromCreator -= 1
      other = other.creator
    }
    if (curr.name === other.name) {
      return curr
    }
    while (curr.creator.name !== other.creator.name) {
      curr = curr.creator
      other = other.creator
    }
    return curr.creator
  }
}

module.exports = Vampire
