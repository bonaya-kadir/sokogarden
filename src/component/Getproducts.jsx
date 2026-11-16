import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'

const Getproducts = () => {
  // define 3 states for getting product 
  const [loading,setLoading]=useState("")
  const[products,setProducts]=useState([])
  const[error,setError]=useState("")
  const[search,setSearch]=useState("")

  // category button currently selected 
  const [selectedCategory,setSelectedCategory]=useState("All")
  // products visible right now 
  const [visibleCount, setVisibleCount]=useState(8)

  let navigate =useNavigate()

  // function to get products 
  const fetchallproducts=async()=>{
    setLoading("Fetching products...")
    try {
      const response=await axios.get("https://abdulmodcom.alwaysdata.net/getproducts")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }
  // call the function 
  useEffect(()=>{
    fetchallproducts()

  },[])
  console.log(products)
  // unique list of categories 
  const categories=[...new Set(products.map((item)=>item.product_category))]

  const filteredproducts=products.filter((item) =>

    item.product_name.toLowerCase().includes(search.toLowerCase())&&
  selectedCategory==="All" || item.product_category===selectedCategory)

  // first visibleCount of the products of the filtered list 
  const visibleProducts = filteredproducts.slice(0, visibleCount)
  const imagepath ="https://abdulmodcom.alwaysdata.net/static/images/"
  return (
    <div className=''>
      {/* carousel goes here  */}
      <Carousel />
      <section className='row'>
        <h1 className='text-center text-success'>Available products</h1> 

        {/* search box    */}
        <div className='row justify-content-center mb-3'>
          <div className='col-md-6'>
            <input 
            type="text" 
            className='form-control' 
            placeholder='Search products...' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} />

          </div>
          {/* category button  */}
          <div className='row justify-content-center mb-3'>
            <div className='col-md-6 text-center'>
              <button 
              className={selectedCategory==="All" ? "btn btn-info m-1": "btn btn-outline-info m-1"}
              onClick={()=>setSelectedCategory("All")}
              >
                All
                </button>
                  {categories.map((cat)=>(
                <button
                  key={cat}
                  className={selectedCategory==="All" ? "btn btn-info m-1": "btn btn-outline-info m-1"}
                  onClick={()=>setSelectedCategory(cat)}
                  >
                  {cat}
                </button>))}

            </div>

          </div>

        </div>
        {visibleProducts.map(singleproduct=>(
          <div className='col-md-3 mb-2'>
            <div className="card shadow h-100">
              <img src= {imagepath+singleproduct.product_photo}alt=""  height={180}/>
              <div className="card-body">
                <h3>{singleproduct.product_name}</h3>
                <p>{singleproduct.product_description}</p>
                <span className='badge bg-primary'>{singleproduct.product_category}</span><br />
                <b className='text-danger text-center'>ksh {singleproduct.product_cost}</b><br /><br />
                <button className='btn btn-primary text-center' onClick={()=>navigate("/mpesapayment",{state:{singleproduct}})}>
                  Purchase Now
                </button>
              </div>
            </div>

          </div>
        ))}
        {/* load more buttons  */}
        {visibleCount<filteredproducts.length &&(
        <div className='text-center mb-4'>
          <button className='btn btn-info px-5'
          onClick={()=>setVisibleCount(visibleCount+8)}
          >
            Load More 
            
          </button>
        </div>
        )}

        {filteredproducts.length=== 0 &&(
          <p className='text-center text-danger'>No products found</p>
        )}

      </section>

    </div>
  )
}

export default Getproducts