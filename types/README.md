# Datatypes


## Custom Datatype
Khudka custom type bana sakte hai jiska naam bhi hum hi de sakte hai
optional parameter define kr sakte hai

```
type [dataTypeName] = {
   firstName:string
   .
   .
   .
   more params..
}
```
## Literal Datatype

Literal datatype means when the value itself is the type of the variable
***For Example:***
```
const rollNumber = 083122145;
```

*In above example since the variable is declared as a const ,so the typescripet is smart enough and knows that value of rollNumber can not be changed so it will assifne rollnumber type as **:083122145** (value itself) and not :number*
const rollNumber: 083122145;