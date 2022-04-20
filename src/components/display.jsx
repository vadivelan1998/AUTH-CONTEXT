import { AuthContext } from "./contexts/AuthContext"
import { useContext } from "react"

const Display =()=>{
    const {isAuth,toggleAuth}=useContext(AuthContext)
    return (
        <div>
            <h1>Login Successfull </h1>
            <p>token:{isAuth}</p>
        </div>
    )
}
export {Display}