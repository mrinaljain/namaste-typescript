interface Janwar {
   name: string;
   location: string;
   isDangerous: boolean;
   // old school way
   makeSound(name: string): string;
   // ES6 way
   sayBye: (name: string) => string;
}

let snake: Janwar = {
   name: "cobra",
   location: "jungle",
   isDangerous: true,
   makeSound: function () {
      return "name making sound";
   },
   sayBye: () => "name making sound"

}