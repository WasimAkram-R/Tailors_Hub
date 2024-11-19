// import React from 'react'
// import Tailoring from './Tailoring.mp4'

// const Home = () => {
//   return (
//     <>
      
  

//          <h1 className=''>Home</h1>

//          <video width="100%" loop autoPlay controls style={{filter:"brightness(50%)"}} > 
//            <source src={Tailoring} type="video/mp4" />
//          </video>
      
//         <div>
//            <h1>Tailor Connect</h1>
//            <p>Connecting skilled tailors with customers who value quality, style, and convenience.</p>
//            <button>Join Now</button>
//         </div>

    

      
//     </>
//   )
// }

// export default Home






import React, { useEffect, useState } from 'react';
import './Home.css'
import Tailoring from './Tailoring.mp4';
import {Button } from 'react-bootstrap';

import Heroimage1 from './HeroImages/Hero_Image1.jpg'
import Heroimage2 from './HeroImages/Hero_Image2.jpg'
import Heroimage3 from './HeroImages/Hero_Image3.jpg'
import Heroimage4 from './HeroImages/Hero_Image4.jpg'
import Heroimage5 from './HeroImages/Hero_Image5.png'
import Heroimage6 from './HeroImages/Hero_Image6.png'

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // To trigger when video is loaded and remove controls
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>


      <div style={{ position: 'relative', width: '100%', height: 'auto' }} className='' >

        <video
          width="100%"
          loop
          autoPlay
          muted
          onCanPlay={handleVideoLoad} // Trigger when video is ready to play
          style={{
             filter: 'brightness(100%)', width: '100%', height: 'auto' }}
         
        >
          <source src={Tailoring} type="video/mp4" />
        </video>

        {/* Overlay div on top of video */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: isVideoLoaded ? 'flex' : 'none', 
            // Only show overlay once video is loaded
            // justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            // textAlign: 'center',
            // fontSize: '2rem',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            
          }}
        >
          <div className='container'>
            <h1 className='tailorsh1'>Tailors Connect</h1>
            <p className='tailorsp'>Connecting skilled tailors with customers who value quality, style, and convenience.</p>
            {/* <button className='px-sm-4 py-sm-2  px-3 py-1 rounded-5 bg-transparent border-2 border-danger text-white fw-light'>Join Now</button><br /> */}
            <Button variant="outline-danger"
             href="#register"
             className='px-sm-4 py-sm-2  px-3 py-1 rounded-5 text-white fw-light'
             >
              Join Now
            </Button>

          </div>

        </div>


      </div>



     <div className="container-fluid">
        <div className="container">
             
         
         <div className="row row-gap-5 py-5">
             
            <div className="text-center ">
              <h2>Tailor-Made Connections, Seamlessly</h2>
            </div>

            <div className="col-md-6">
                <h5 className='pb-2'>Your Stitching Needs Met</h5>
                 <p>Bridging the gap between talented tailors and customers seeking custom-fit designs.</p>
                 <img src={Heroimage1} alt="" className='img-fluid rounded-4 heroimage' />
            </div>
             <div className="col-md-6">
               <h5 className='pb-2'>Discover Local Tailoring Talent</h5>
               <p>Tailors can display their expertise, while customers can easily find the perfect match for their unique stitching requirements.</p>
               <img src={Heroimage2} alt="" className='img-fluid rounded-4 heroimage' />
             </div>
         </div>

         {/* <div className="row row-gap-4 ">
            <div className="col-md-6">
               <img src={Heroimage1} alt="" className='img-fluid rounded-4 heroimage' />
            </div>

            <div className="col-md-6">
            <img src={Heroimage2} alt="" className='img-fluid rounded-4 heroimage' />
            </div>
         </div> */}
         

         <div className="row py-5 row-gap-5">
             
             <div className="text-center">
               <h2>Who We Are</h2>
             </div>
 
             <div className="col-md-6">
                  <h5 className='pb-2'>Connecting Tailors To Customers</h5>
                  <p>We are dedicated to connecting skilled tailors with customers looking for bespoke clothing solutions.</p>
                  <img src={Heroimage3} alt="" className='img-fluid rounded-4 heroimage' />
             </div>
              <div className="col-md-6">
                <h5 className='pb-2'>Connecting Customers To Tailors</h5>
                <p>Our platform makes it easy for customers to find local tailors and for tailors to grow their business.</p>
                <img src={Heroimage4} alt="" className='img-fluid rounded-4 heroimage' />
              </div>
          </div>


          <div className="row py-5">
             
             <div className="text-center pb-5">
               <h2>How It Works</h2>
             </div>
 
             <div className="col-md-6">
                 <h6 className='pb-2'>
                   Steps for Customers:
                </h6>
                <ul>
                  <li><span>Search for Tailors</span>: Filter By location, specialty, or ratings.</li>
                  <li className='py-2'><span>Connect & Discuss</span>: Share your design ideas and preferences.</li>
                  <li><span>Get Your Fit</span>: Receive high-quality, custom-made clothing.</li>
                </ul>
                 <div className='d-flex justify-content-center'>
                 <img src={Heroimage5} alt="" className="img-fluid" />
                 </div>
             </div>

             <div className="col-md-6">
                 <h6 className='pb-2'>
                    Steps for Tailors:
                 </h6>
                 <ul>
                  <li><span>Create Your Profile</span>: Showcase your skills, services and portfolio.</li>
                  <li className='py-2'><span>Receive Requests</span>: Connect with customers seeking your expertise.</li>
                  <li><span>Grow Your Business</span>: Build trust and expand your client base.</li>
                </ul>
                <div className='d-flex justify-content-center'>
                 <img src={Heroimage6} alt="" className="img-fluid" />
                 </div>
              </div>
          
          </div>


        </div>
     </div>


    </>
  );
};

export default Home;
