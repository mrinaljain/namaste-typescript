# Array

Array can be declared using typescript syntax in many diffrent ways

- Array of automatic inference
```
let arr: string[] = ["ram", "rohan"]; 
```
- Array of type string
```
let arr: string[] = ["ram", "rohan"]; 
```
- Array which can hold any datatype
```
let arr: any[] = [2,5,4,"rohan", true];
```

-  Array which can handle string or number (**UNION**)
```
let arr: (string | number)[] = [5,4,"rohan"];
```

- Tuple : Fixed schema , position, length Array
```
le arr : [string , number, boolean] = ["rohan", 5 , true];
```
- Modern way of defining array
```
let arr Array<number> = [2,5,4,88,4,5];
```