import { createContext,useState } from "react";

import axios from "axios";
export const AuthContext = createContext();

 export const  AuthContextProvider = ({children})=>{

     const [isAuth,setisAuth]=useState(false)
     const toggleAuth=async()=>{
         if(isAuth==false)
         {
            fetch("https://reqres.in/api",{})
            axios
              .post("https://reqres.in/api/login", {
                email: "eve.holt@reqres.in",
                password: "cityslicka",
              })
              .then(function (response) {
                console.log(response);
                setisAuth(response.data.token)
              })
              .catch(function (error) {
                console.log(error);
              });
         }
         else
         {
             setisAuth(()=>{
                 return false
             })
         }
     }
    return (<AuthContext.Provider value={{isAuth,toggleAuth}} >{children}</AuthContext.Provider>)
}


