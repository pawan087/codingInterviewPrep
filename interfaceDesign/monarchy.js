// see 'monarchy.jpg'

new Monarchy("Jake");

birth("Catherine", "Jake");
birth("Jane", "Catherine");
birth("Farah", "Jane");
birth("Tom", "Jake");
birth("Celine", "Jake");
birth("Mark", "Catherine");
birth("Peter", "Celine");

getOrderOfSuccession(); // => ["Jake", "Catherine", "Jane", "Farah", "Mark", "Tom", "Celine", "Peter"];

death("Jake");
death("Jane");

getOrderOfSuccession(); // => ["Catherine", "Farah", "Mark", "Tom", "Celine", "Peter"];
