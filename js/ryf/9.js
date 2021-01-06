function Animal() {
    //call apply
    //prototype new Animal()
    //this.species='动物'
 }
 Animal.prototype.species='动物'
 function Cat(name,color) {
    this.name=name;
    this.color=color;
}

Cat.prototype=Animal.prototype;
Cat.prototype.constructor=Cat;
//  console.log(Cat.prototype.constructor==Animal)