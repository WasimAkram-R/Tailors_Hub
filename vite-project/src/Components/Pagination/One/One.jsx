import React from 'react'
import './One.css'
import Carousel from 'react-bootstrap/Carousel';
import tailorimage1 from './Tailor_Image1.jpg'
import tailorimage2 from './Tailor_Image2.jpg'
import tailorimage3 from './Tailor_Image3.jpg'

import tailorimage4 from './Tailor_Image4.jpg'

import tailorimage5 from './Tailor_Image5.jpg'
import tailorimage6 from './Tailor_Image6.jpg'


const One = () => {
  return (
    <>


     <div className="row row-gap-4 pt-5">
     <div className="col-md-6">
       <h2>Find Tailors</h2>
       <p className='py-3'>Connect with us and Start your journey towards perfectly tailored clothing today!</p>

       <h6>Location</h6>
       <p>Chennai</p>
       
       <h6>Address</h6>
       <p>[Customer Address]</p>

       <h6>Timings</h6>
       <p>10AM - 8PM</p>
     </div>
     <div className="col-md-6">
         
     <div className='w-100'>
       <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Chennai+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
       </div>
     
     </div>
     </div>
    

     <div className="row py-5 row-gap-4">

       <div className="col-md-6 ">
       <h5>About Us</h5>
       <p className='pt-2'>Welcome to [Tailor Name/Brand], where passion meets craftsmanship. With over [X years]
        of experience, we specialize in creating bespoke clothing that embodies elegance and individuality. Every piece is made with precision and care to ensure a perfect fit for every occasion. 
       </p>
    </div>
    <div className="col-md-6">
      <h5>Services</h5>
      <ul className='pt-1'>
         <li><span className='fw-bold'>Bespoke Tailoring:</span> Custom-fit suits, dresses, traditional wear, wedding and party wear and modern and casual wear etc.</li>
         <li className='py-1'><span className='fw-bold'>Alternations:</span > Perfect adjustments for your existing wardrobe.</li>
         <li ><span className='fw-bold'>Fabric Consulting:</span> Helping you select the perfect fabric for your outfit.</li>
      </ul>
    </div>

    </div>
   
    
    <div className="row row-gap-4">
        <h2 className='text-center pb-5'>Gallery</h2>
        <h5>Traditional outfits:</h5>

        <div className="col-md-4">
           <img src={tailorimage2} alt=""  className='img-fluid h-100 rounded-4'/>
        </div>
        <div className="col-md-4">
        <img src={tailorimage1} alt=""  className='img-fluid rounded-4'/>
        </div>
        <div className="col-md-4">
        <img src={tailorimage3} alt=""  className='img-fluid rounded-4'/>
        </div>
    </div>
    
    <div className="row row-gap-4 py-5">
        <h5>Wedding and party wear:</h5>

        <div className="col-md-4">
        <img src={tailorimage5} alt=""  className='img-fluid rounded-4'/>
        </div>
        <div className="col-md-4">
        <img src={tailorimage5} alt=""  className='img-fluid rounded-4' />
        </div>
        <div className="col-md-4">
        <img src={tailorimage5} alt=""  className='img-fluid rounded-4'/>
        </div>
    </div>


    <div className="row row-gap-4">
        <h5>Modern and casual wear:</h5>

        <div className="col-md-4">
        <img src={tailorimage3} alt=""  className='img-fluid rounded-4'/>
        </div>
        <div className="col-md-4">
        <img src={tailorimage3} alt=""  className='img-fluid rounded-4'/>
        </div>
        <div className="col-md-4">
        <img src={tailorimage3} alt=""  className='img-fluid rounded-4'/>
        </div>
    </div>



    <div className="row py-5">
        
       <h2 className='text-center'>Testimonals</h2> 

       <Carousel className='pt-5'>

<Carousel.Item interval={1000}>
<div className="d-flex justify-content-center">
   <img
         className="d-block w-25 rounded-circle"
         src="https://via.placeholder.com/100"
         alt=""
         style={{ maxWidth: '100px', marginRight: '20px' }}
       />
   <div>
   <p style={{fontSize:"15px"}}>I found the perfect wedding outfit here. The fit and finish were impeccable!.</p>
   <h6>[Customer Name]</h6>
   </div>

</div>
</Carousel.Item>

<Carousel.Item interval={1000}>
<div className="d-flex justify-content-center">
   <img
         className="d-block w-25 rounded-circle"
         src="https://via.placeholder.com/100"
         alt=""
         style={{ maxWidth: '100px', marginRight: '20px' }}
       />
   <div>
   <p style={{fontSize:"15px"}}>The custom shirts I ordered are amazing! They were made with precision and care. I will definitely be returning for more.</p>
   <h6>[Customer Name]</h6>
   </div>

</div>
</Carousel.Item>

<Carousel.Item interval={1000}>
<div className="d-flex justify-content-center">
   <img
         className="d-block w-25 rounded-circle"
         src="https://via.placeholder.com/100"
         alt=""
         style={{ maxWidth: '100px', marginRight: '20px' }}
       />
   <div>
   <p style={{fontSize:"15px"}}>I had a wonderful experience with this tailor. The suit fit perfectly, and the attention to detail was impeccable! Highly recommend.</p>
   <h6>[Customer Name]</h6>
   </div>

</div>
</Carousel.Item>
</Carousel>

    </div>

    <div className="container py-5">
       <div className="row row-gap-5">
         <div className="col-md-6">
           <h1>Contact Us</h1>
           <p>Connect with us and Start your journey towards perfectly tailored clothing today!</p>
           <button className='px-4 py-2 border-0 rounded-5'>Submit Your Inquiry</button>
         </div>

         <div className="col-md-6">
           <form action="" className='tailorsform'>
             
             <div>
             <input type="text" placeholder='Enter Your Name'className='w-100 p-1 tailorsinput' />
             </div>

             <div className='my-3'>
             <input type="email" placeholder='Enter Your Email' className='w-100 p-1 tailorsinput'/>
             </div>
             
             <div>
             <input type="tel" placeholder='Enter Your Number'className='w-100 p-1 tailorsinput' />
             </div>

             <textarea name="" id=""
             placeholder='Type Your Message/Inquiry Here'
             className='w-100 mt-3 tailorsinput tailorstextarea' rows={5}/>

           </form>
         </div>
      </div>
    </div> 


    </>
  )
}

export default One