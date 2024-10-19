# Utility Types

[More Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
Defination
: Typescript provides severel utility types, to  transform normal types into something else.

- **Partial**
   this utility makes all the parameters optional
   ```
   type Pizza = {
      name: string
      cost: number
      inStock: boolean
   }

  let partialPizza: Partial<Pizza> ={
      name:mrinal
      cost : 20
  } 
   ```
- **Omit**

Defination
: Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). 
```
Omit<Type, Keys>
```
Omit takes in  two parameters , 1 is the type on which operation needs to be done and other is the string values of the properties which needs to be omitted(needs to become optional)
Example

```
type User = {
   firstName: string
   lastName: string
   address: string
   mobile: number
}
// lastname , mobile are optional
let ommitedUser: Omit< User , "lastName" | "mobile"> = {
   firstName: "",
   address: ""
}
```