type line = string;
type Address = {
   street: string
   city: string
   country: string
}
type Person = {
   name: line
   age: number
   isStudent: boolean
   address?: Address
}


let personOne: Person = {
   name: "mohan",
   age: 22,
   isStudent: true,
   address: {
      street: "14 Azad Road",
      city: "Sanawad",
      country: "IN"
   }
}

let personTwo: Person = {
   name: "mohan",
   age: 22,
   isStudent: true,

}


function displayInfo(person: Person) {
   console.log(`${person.name} lives at ${person.address?.street} in ${person.address?.city}`);
}

displayInfo(personTwo);