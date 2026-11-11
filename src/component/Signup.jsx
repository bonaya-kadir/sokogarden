import axios from "axios"
import { useState } from "react"

const Signup =()=>{
    // declare your states here 
    const [username,setUsername]=useState("mike")
    const [email,setEmail]=useState("mike@gmail.com")
    const[password,setPassword]=useState("akb123")
    const[phone,setPhone]=useState("0712345678")
    // declare 3 states for posting data 
    const [loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    // function to post data 
    const handlesubmit=async(e)=>{
       e.preventDefault()
       setLoading("please wait...")
    //    create empty digital envelope 
    const formdata=new FormData()
    formdata.append("username",username)
    formdata.append("email",email)
    formdata.append("phone",phone)
    formdata.append("password",password)
    formdata.append("role","user")

    try {
        const response =await axios.post("https://abdulmodcom.alwaysdata.net/signup",formdata)
        setSuccess(response.data.message)
        setLoading("")
    } catch (error) {
        setError("something went wrong")
        setLoading("")
    }


    }
    return(
        <div className="justify-content-center row">
            <div className="col-md-6 p-4 card shadow text-center">
                <h1 className="text-secondary">Signup🧑🏽‍🦲</h1>
                {/* bind the variables here  */}
                <h1 className="text-info"> {loading}</h1>
                <h1 className="text-success">{success}</h1>
                <h1 className="text-danger">{error}</h1>
                <form action="" onSubmit={handlesubmit}>

                {/* username goes here  */}
                <input type="text" required className="form-control" placeholder=" 🧑🏼‍🦲Enter username" onChange={(e)=>setUsername(e.target.value)}/><br />
                {/* email goes here */}
                <input type="email" required className="form-control" placeholder=" ✉️Enter email" onChange={(e)=>setEmail(e.target.value)}/><br />
                {/* password goes here */}
                <input type="password" required className="form-control" placeholder=" 🔐Enter password" onChange={(e)=>setPassword(e.target.value)}/><br />
                {/* phone goes here */}
                <input type="tel" required className="form-control" placeholder=" 📱Enter phone" onChange={(e)=>setPhone(e.target.value)}/><br />
                <button type="submit" className="btn btn-primary w-100">Signup🧑🏽</button>
                </form>
            </div>
        </div>
    )
}
export default Signup
