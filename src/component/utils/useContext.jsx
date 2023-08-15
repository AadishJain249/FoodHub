import { createContext } from "react";
const userContext=createContext({
    user:{
        name:"dummy",
        email:"dummy@gmail.com"
    }
})
export default userContext