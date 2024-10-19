

type User = {
   firstName: string
   lastName: string
   address: string
   mobile: number
}


// Partial type
let partialUser: Partial<User> = {
   firstName: "Mrinal"
}


// Omit type

let ommitedUser: Omit<User, "lastName" | "mobile"> = {
   firstName: "",
   address: ""
}