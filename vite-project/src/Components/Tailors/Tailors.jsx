import React from 'react'
import './Tailors.css'
import card from './Card.png'


const Tailors = () => {




  return (
    <>
      
      {/* <div className="container py-5">

      <h2 className='text-center'>Tailors Showcase</h2>

      <p className='pt-3 text-center'>Tailoring Elegance, One Stitch at a Time.</p>

      <p className='text-center'>Custom design that fit your style and personality.</p>

      </div> */}

     <div className="container-fluid">

      <div className="container py-5">


        <h1 className='pb-3'>Expand Your Reach: Connect Your Tailoring Business with TailorsHub.</h1>

        <p>Grow Your Tailoring Business with a Powerful Online Presence!</p>

        <p>Connecting Tailors to Website Owners for Custom Digital Solutions.</p>



        <div className="row pt-3 row-gap-4">
           {/* <div className="col-md-6"> */}
           <h2 className='pb-2'>About TailorsHub</h2>
           <p>   Are you a tailor looking to showcase your skills to a wider audience? At TailorsHub, we offer an exclusive platform for talented tailors like you to connect with potential clients online. Our website helps you create a strong online presence and attract more customers.</p>
           {/* </div> */}

           {/* <div className="col-md-6">
             <img src={card} alt="" className='img-fluid rounded-4 '/>
           </div> */}
        </div>

        <div className="row py-4">

           <h2 className='pb-2'>Benefits For Tailors:</h2>
            <div className="col">
            <ul>
            <li><span className='fw-bold'>Showcase Your Design:</span> Display your best designs and creations to a growing audience.</li>
            <li className='my-1'><span className='fw-bold'>Gain Visibility:</span> Reach Customers in your locality and beyond.</li>
            <li><span className='fw-bold'>Easy Communication:</span> Receive inquiries and collaborate with clients effortlessly.</li>
            <li className='my-1'><span className='fw-bold'>Business Growth:</span> Increase your customer base and grow your revenue.</li>
            <li><span className='fw-bold'>Custom Websites:</span> Designed specifically to highlight your skills and services.</li>
           </ul>
            </div>
        </div>

        <div className="row">
           <h2 className='pb-2'>Why Partner With Us?</h2>

           <div className="col">
           <ul>
            <li><span className='fw-bold'>User-Friendly Interface:</span> An easy-to-use platform tailored to your needs.</li>
            <li className='my-1'><span className='fw-bold'>Marketing Support:</span> Promote your services through targeted campaigns.</li>
            <li ><span className='fw-bold'>Tailor-First Focus:</span> Dedicated features for tailor showcase and customer reviews.</li>
            <li className='mt-1'><span className='fw-bold'>Take Orders:</span> Get a professional platform to display your work and take orders.</li>
           </ul>
           </div>
        </div>


        <div className="row py-4">
           <h2 className='pb-2'>How It Works:</h2>

          <div className="col">
          <ul>
            <li><span className='fw-bold'>Tailors Profiles:</span> Tailors login and share their needs for an online presence to tailorshub platform.</li>
            <li className='my-1'><span className='fw-bold'>Website Owners:</span>  Explore tailor profiles and pitch your services.</li>
            <li><span className='fw-bold'>Collaborate:</span> Create custom websites that align with the tailor's vision and business goals.</li>
            <li className='mt-1'><span className='fw-bold'>Gain Visibility:</span> Reach Customers in your locality and beyond and take orders.</li>
           </ul>
          </div>
        </div>
        
         <div className="row row-gap-5 ">
         <div className="col-md-6">
           <h2 className='pb-2'>Contact Us</h2>
           <h6 className='pb-2'>Ready to collaborate with TailorsHub?</h6>
           <button className='px-4 py-2 border-0 rounded-5'>Get Started</button>
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

      
      </div>

   


      
      
    </>
  )
}

export default Tailors