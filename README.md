

Type Narrowing
: Typescript is very smart . In any function which includes 2 types of data and within if else condition  Typecript can easily detect that which data type will come in elce condition based on what condition we have put in if clause

```
function getPizzaDetail(identifier: string | number) {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else {
        return menu.find(pizza => pizza.id === identifier)
    }
}
```