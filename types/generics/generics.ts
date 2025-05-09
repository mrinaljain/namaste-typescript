// Code reusablity

function genericFunction<genericType>(array: genericType[]){

   return {
      name: "Mrinal",
      age: 31,
      place: "New York"
   }
 }


 let result = genericFunction<number>([1,2,3,4,5,6]);
 let result2 = genericFunction<string>(["lolo", "hoho"]);


// Example 2
// Yaha hum sure nhi hai data type kya hoga to T de diya taki automatically infer kr le vo
function printItem<T>(item: T) {
   console.log(item);
}

printItem("Hello"); // T = string
printItem<number>(123);  