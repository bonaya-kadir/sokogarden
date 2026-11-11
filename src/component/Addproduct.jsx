import axios from "axios"
import { useState } from "react"

const Addproducts =()=>{
    // declare your products here 
    const[productname,setProductname]=useState("milk")
    const[Productdescription,setProductdescription]=useState("white")
    const[Productcategory,setProductcategory]=useState("drink")
    const[productcost,setProductncost]=useState("75")
     const[Productimage,setProductimage]=useState("")

    //  declare the states of posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    // function to post data 
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setLoading("just a moment...")
        
        // create digital envelope 
        const envelope=new FormData()
        envelope.append("product_name",productname)
        envelope.append("product_description",Productdescription)
        envelope.append("product_category",Productcategory)
        envelope.append("product_cost",productcost)
        envelope.append("product_photo",Productimage)
        try {
            const response=await axios.post("https://abdulmodcom.alwaysdata.net/addproduct",envelope)
            setSuccess(response.data.message) 
               setLoading("")
            
        } catch (error) {setError(error.message)
            setLoading("")
            
        }


    }
    return(
        <div className="justify-content-center row">
            <div className="col-md-6 p-4 card shadow">
                 <h1 className="text-center">Addproduct</h1>
                 {/* bind the variable goes here  */}
                  <h1 className="text-info"> {loading}</h1>
                <h1 className="text-success">{success}</h1>
                <h1 className="text-danger">{error}</h1>
                <form action="" onSubmit={handlesubmit}>

                 {/* product name goes here  */}
                 <input type="text" required className="form-control" placeholder=" 📛Enter Product name" onChange={(e)=>setProductname(e.target.value)}/><br />
                 {/* product description goes here */}
                 <input type="text" required className="form-control" placeholder="🆘Describe your product" onChange={(e)=>setProductdescription(e.target.value)}/><br />
                 {/* product category goes here  */}
                 <input type="text" required className="form-control" placeholder="📊Enter product category" onChange={(e)=>setProductcategory(e.target.value)}/><br />
                 {/* product cost goes here  */}
                 <input type="cost" required className="form-control" placeholder="💰Enter product cost" onChange={(e)=>setProductncost(e.target.value)}/><br />
                 <h5>Browse/Upload product Image</h5>
                 <input type="file" required className="form-control" placeholder="🗂️Choose File" onChange={(e)=>setProductimage(e.target.files[0])}/><br />

                 <button className="btn btn-success w-100">Add Product</button>
                </form>


            </div>
        </div>
    )
}
export default Addproducts
