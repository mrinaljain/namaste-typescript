let pesronName: string = "Mrinal";


let truth: boolean = false;


let names: string[] = ["mrinal", "jain", "is", "developer"];


let details: object[] = [{ name: "mrinal" }, {}]
// array with any value type
let mixedArray: any[] = [];

// union type decleration
let multiTypeArray: (string | number)[] = [2, 3, "jain"];

// union with leteral
let literalTypeArray: (string | number | "lol")[] = [2, 3, "jain", "lol"];


// automatic inference of types
let person = ['Danny', 1, true];


// Tuple [strict array]
let human: [string, number, boolean] = ['Danny', 1, true];

// another way to define array
let mobileNo: Array<number> = [4545, 55, 44, 55, 66,]