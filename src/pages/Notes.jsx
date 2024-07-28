import { useEffect } from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router"



const Notes =  ()=>{
    const navigate = useNavigate()

    useEffect(()=>{
const token = localStorage.getItem('token')
if(!token){
    navigate("/login")
}
    },[localStorage])
    
    return (
    <>
    <Header/>
    <h1>this is notes page</h1>
    </>
    )
}

export default Notes