// see 'monarchy.jpg'

class Person {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.alive = true;
  }
}

class Monarchy {
  constructor(king) {
    this.king = new Person(king);
    this.persons = {
      [this.king.name]: this.king,
    };
  }

  birth(childName, parentName) {
    let parent = this.persons[parentName];
    let newChild = new Person(childName);

    parent.children.push(newChild);
    this.persons[childName] = newChild;
  }

  death(name) {
    let person = this.persons[name];

    if (person === undefined) return `${name} does not exist`;

    person.alive = false;
  }

  getOrderOfSuccession() {
    let order = [];

    this.dfs(this.king, order);

    console.log(JSON.stringify(order));
    return order;
  }

  dfs(curPerson, order) {
    if (curPerson.alive === true) {
      order.push(curPerson.name);
    }

    for (let child of curPerson.children) {
      this.dfs(child, order);
    }

    return;
  }
}

let x = new Monarchy("Jake");

x.birth("Catherine", "Jake");
x.birth("Jane", "Catherine");
x.birth("Farah", "Jane");
x.birth("Tom", "Jake");
x.birth("Celine", "Jake");
x.birth("Mark", "Catherine");
x.birth("Peter", "Celine");

console.log(x);

x.getOrderOfSuccession(); // => ["Jake", "Catherine", "Jane", "Farah", "Mark", "Tom", "Celine", "Peter"];

x.death("Jake");
x.death("Jane");

x.getOrderOfSuccession(); // => ["Catherine", "Farah", "Mark", "Tom", "Celine", "Peter"];
