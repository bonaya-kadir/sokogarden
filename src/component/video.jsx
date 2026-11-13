import React from 'react'

const video = () => {
  return (
    <div className='container mt-5'>
        {/* section 1 */}
        <h2 className='text-center text-success mb-4'>Fruits salad</h2>
        <section className="row">
            {/* child 1  */}
            <div className='col-md-4 mb-4'>
                <video className='w-100 rounded-1 shadow'
                    style={{height:"220px",objectFit:"cover"}}
                    controls
                    >
                        <source src='public/videos/fruits.mp4' type='video/mp4' />
                </video>
                <h4 text-warning text-center>Fruits salad</h4>
                <p>Fruit salad is a delicious and healthy mixture of fresh fruits such as mangoes, bananas, pineapples, watermelons, apples, grapes, and pawpaw. The fruits are washed, peeled, chopped into small pieces, and mixed together. It is served fresh and chilled as a refreshing dessert, rich in vitamins and nutrients.</p>
            </div>

             {/* child 2  */}
            <div className='col-md-4 mb-4'>
                <video className='w-100 rounded-1 shadow'
                    style={{height:"220px",objectFit:"cover"}}
                    controls
                    >
                        <source src='public/videos/video.mp4' type='video/mp4' />
                </video>
                <h4 text-warning text-center>Fruits mix</h4>
                <p>Fruit salad is a delicious and healthy mixture of fresh fruits such as mangoes, bananas, pineapples, watermelons, apples, grapes, and pawpaw. The fruits are washed, peeled, chopped into small pieces, and mixed together. It is served fresh and chilled as a refreshing dessert, rich in vitamins and nutrients.</p>
            </div>
            
        </section>

    </div>
  )
}

export default video