//encasulacion: este es un ejemplo de encasulacion ya que podemos usar el metodo
// pero no podemos ver el cidigo que hay detras de el, de esa manera ocualta la informacion
// irrelevante para usar en nuestro codigo = const privateProperties = new WeakMap();

const privateProperties = new WeakMap();

class Comic {
  constructor(tittle, ilustrator, age, price) {
    const properties = {
      _tittle: tittle,
      _ilustrator: ilustrator,
      _age: age,
      _price: price
    };
    privateProperties.set(this, { properties });
  }

  // Obtiene la informacon de la propiedad
  get tittle() {
    return privateProperties.get(this).properties["_tittle"];
  }
  get ilustrator() {
    return privateProperties.get(this).properties["_ilustrator"];
  }
  get age() {
    return privateProperties.get(this).properties["_age"];
  }
  get price() {
    return privateProperties.get(this).properties["_price"];
  }

  // setea/modifica la informacion de la propiedad
  set tittle(newTittle) {
    return (privateProperties.get(this).properties["_tittle"] = newTittle);
  }
  set ilustrator(newIsustrator) {
    return (privateProperties.get(this).properties[
      "_ilustrator"
    ] = newIsustrator);
  }
  set age(newAge) {
    return (privateProperties.get(this).properties["_age"] = newAge);
  }
  set price(newPrice) {
    return (privateProperties.get(this).properties["_price"] = newPrice);
  }
}

// Herencia: esta habla de obtener o heredar desde otra clasa los atributos
// que esta ya poseeia pero tambien puede tener sus propios atributos

class DcComic extends Comic {
  constructor(tittle, ilustrator, age, price, characters) {
    //super es usado para llamar los atributos de la clase padre
    super(tittle, ilustrator, age, price);

    this.characters = characters;
  }
}
//Herencia en varios niveles: se puede ver que una tercera clase puede herdar
// de una clase que ya heredo del padre y al mismo tiempo heredar de esta misma

class VertigoDcComic extends DcComic {
  constructor(tittle, ilustrator, age, price, characters, clasification = []) {
    super(tittle, ilustrator, age, price, characters);

    this.clasification = clasification;
  }
  // las calses tambien puede tener metodos con los cuales realizar una tarea especificada
  // mediante este metodo

  assignClassification(newClasification) {
    this.clasification.push(newClasification.toString());
  }
}

const batman = new DcComic(
  "The Killing Joke",
  "Alan Moore",
  "1988",
  "29.81 $",
  [
    "The Joker",
    " batman",
    " Barbara Gordon",
    " James Gordon",
    " Batgirl"
  ].toString()
);

const lucifer = new VertigoDcComic(
  "Lucifer",
  "Scott Hampton",
  "2013",
  "117.99 $",
  ["sadman", "lucifer"].toString(),
  "R"
);

console.log(batman.tittle);
console.log(batman.ilustrator);
console.log(batman.age);
console.log(batman.price);
console.log(batman.characters);
console.log("\n");
console.log(lucifer.tittle);
console.log(lucifer.ilustrator);
console.log(lucifer.age);
console.log(lucifer.price);
console.log(lucifer.characters);
console.log(lucifer.clasification);
