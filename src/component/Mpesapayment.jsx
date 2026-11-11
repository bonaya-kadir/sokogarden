import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
const Mpesapayment = () => {
    const {singleproduct}=useLocation().state || {}
  const imagepath ="https://abdulmodcom.alwaysdata.net/static/images/"

  // declare 3 states for posting data 
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const [error,setError]=useState("")
  const[phone,setPhone]=useState("")

  // function for Mpesapayment
  const handlesubmit =async(e)=>{
    e.preventDefault()
    setLoading("please wait...")
    // create digital empty envelope
    const envelope=new FormData()
    envelope.append("phone",phone)
    envelope.append("amount",singleproduct.product_cost)
    try {
      const response=await axios.post("https://abdulmodcom.alwaysdata.net/mpesa_payment",envelope)
      
        setSuccess(response.data.message)
        setLoading("")
    } catch (error) {
      
    }
  }

  return (
   <section className="justify-content-center row">
    <div className="col-md-6 p-4 card shadow">
        <img src= {imagepath+singleproduct.product_photo}alt=""  height={180}/>
        <h1>{singleproduct.product_name}</h1>
        <p>{singleproduct.product_description}</p>
        <b className='text-warning'>Ksh {singleproduct.product_cost}</b>
        <br />
        <span className='badge btn btn-success text-start'>{singleproduct.product_category}
        </span><br />
        {/* bind the states here */}
        <h1 className='text-info'>{loading}</h1>
        <h1 className='text-success'>{success}</h1>
        <h1 className='text-danger'>{error}</h1>
        <form action="" onSubmit={handlesubmit}>

        <input type='number' className='form-control' placeholder='Enter Phone 254*********' onChange={(e)=>setPhone(e.target.value)}/>
        <br />
        <button type='submit' className='btn btn-primary text-center'>Make payment</button>
        </form>

    </div>

   </section>

  )
}

export default Mpesapayment