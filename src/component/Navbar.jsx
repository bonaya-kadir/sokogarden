import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary mb-2 sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img src="public/images/30cacbc1-6dfb-4af0-a9be-b7e9c82881c7.png" alt="" width={100}/>
    Swahili dishes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-light active" aria-current="page" href="/">Get products</a>
        <a class="nav-link text-light" href="/addproducts">Addproducts</a>
        <a class="nav-link text-light" href="/signin">Signin</a>
        <a class="nav-link text-light" href="/signup">Signup</a>

        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar