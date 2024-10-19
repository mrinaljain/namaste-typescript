# UNION

Union is used to add multi type support to our typescript variable declerations

```
let userId : (string | number) = 1201;
```


Defining type using Union
```
type Apistatus = "success" | "failure";  //defining type using union

let status:Apistatus = "success";

```

Union in function parameters
```
function getPizzaDetail ( identifier:( string | number ) ) {
    .
    .
    .
}

```