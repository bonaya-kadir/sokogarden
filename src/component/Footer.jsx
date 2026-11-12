import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5'>
        <section className="row bg-warning p-3">
            <div className="col-md-4">
                <h2>About us</h2>
                <p>Welcome to [Swahili Hotel], where comfort meets luxury and hospitality comes first.
We offer beautiful rooms, delicious meals, and excellent customer service.
Our friendly staff are dedicated to making every guest feel at home.
Whether for business or relaxation, we make every stay memorable.
At [Hotel Name], your comfort and satisfaction are our top priorities.</p>
            </div>
            <div className="col-md-4">
                <h2>Contact us </h2>
                <input type="email" className="form-control" placeholder='enter your email' /><br />
                <textarea name="" id="" className="form-control" placeholder='Leave a comment'></textarea><br />
                <button className='btn btn-success w-100'>Send message</button>

            </div>
            <div className="col-md-4">
                <h2>Stay connected</h2>
                <a href="https://facebook.com" className='m-2'>
                    <img src="public/images/images.png" width={100} alt="" />
                </a>
                <a href="https://instagram.com" className='m-2'>
                    <img src="public/images/images (32).jpeg" width={100} alt="" />
                </a>
                <a href="https://x.com">
                    <img src="public/images/images (1).png" width={100} alt="" />
                </a>
            </div>
    

        </section>
        <footer className='bg-success p-3 text-center'>
            <b>Developed by Abdul 2026</b>
        </footer>

    </div>
  )
}

export default Footer