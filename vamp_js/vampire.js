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
  
  
   /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
    vampireWithName(name) {
    if (name === this.name){
       return this;
    }

    for (let vamp of this.offspring) {
     let search = vamp.vampireWithName(name);

     if(search){
       return search;
     }
    }

    return null; 
  }

  // Returns the total number of vampires that exist(Brings the spot light on them..... they HATE it!)
  get totalDescendents() {
    let vampSum = 0;

    for (let vamp of this.offspring) {
      vampSum += vamp.totalDescendents + 1;
    }

    return vampSum;
  }

 // Returns an array of all the vampires that were converted after 1980( The best possible Vamps out there!)
  get allMillennialVampires() {
    let millenialVamps = []; // 1

    if (this.yearConverted > 1980 && this.yearConverted < 1997) {
      millenialVamps.push(this); // 2
    }

    for (let vamp of this.offspring) {
      millenialVamps = millenialVamps.concat(vamp.allMillennialVampires);
    }

    return millenialVamps;
  }
}



module.exports = Vampire
