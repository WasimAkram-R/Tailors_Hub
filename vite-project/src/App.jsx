import './App.css'
import ResponsiveNavbar from './Components/Navbar/Navbar'

import Home from './Components/Home/Home'
import Tailors from './Components/Tailors/Tailors'
import Customers from './Components/Customers/Customers'
// import Showcase from './Components/Showcase/Showcase'
import Contact from './Components/Contact/Contact'

import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {

  return (
    <>
  

      
      <BrowserRouter>

      <ResponsiveNavbar/>
      
      {/* <div className="container-fluid"> */}
      <Routes>
         <Route  path="/" element={<Home/>}/>
         <Route  path="/tailors" element={<Tailors/>}/>
         <Route  path="/customers" element={<Customers/>}/>
         {/* <Route  path="/showcase" element={<Showcase/>}/> */}
         <Route  path="/contact" element={<Contact/>}/>
      </Routes>
      {/* </div> */}

      </BrowserRouter>
    


      {/* <div className="">
         <div className="" style={{width:"100%",height:"600px"}}>

             <h1 className='text-center'>Color Name  : calm and Nature-Inspired</h1>

             <h2 style={{color:"#16a34a"}}>Primary color</h2>
             <h4 style={{color:"#22d3ee"}}>Secondary color</h4>
             <p style={{color:"#334155"}}>Text color</p>
             <button style={{backgroundColor:"#14b8a6"}} className='border-0 rounded py-2 px-4'>Button</button>

         </div>
      </div> */}


      {/* Footer */}

         <div className="container-fluid">
         <div className="container">
           <div className="row row-gap-5">
             <div className="col-lg-4 col-md-6">
                <h2 className='pb-3'>CONTACT</h2>
                <p>Connecting talented tailors and customers seeking custom-fit designs.</p>
                <div>
                    
                </div>
                <p>@2024. All rights reserved.</p>
             </div>
             
             <div className="col-lg-4 col-md-6">
               <h5 className='pb-3'>FOR TAILORS</h5>
              {/* //   <form action="#" className='appform'>
              //      <input required type="text" placeholder='Enter your email address ' className='w-75 p-1 appinput'/>
              //      <input required type="tel" placeholder='Enter your Number ' className='w-75 p-1 appinput mt-3 '/>
              //  </form>  */}
            
              <p>[Owner Email]</p>
              <p>[Owner Number]</p>

               <button className='border-0 py-2 px-4 rounded-5' style={{fontSize:"12px"}}>Join as a Tailor</button>
             </div>
             

             <div className="col-lg-4 col-md-6">
               <h5 className='pb-3'>FOR CUSTOMERS</h5>
               <form action="" className='appform'>
                   <input required type="text" placeholder='Enter your email address ' className='w-75 p-1 appinput'/>
                   <input required type="tel" placeholder='Enter your Number ' className='w-75 p-1 appinput mt-3'/>
               </form>
               <button className='border-0 py-2 px-4 rounded-5 mt-3' style={{fontSize:"12px"}}>Find a Tailor</button> 
             </div>
       

             
           </div>
         </div>
      </div>   


    </>
  )
}

export default App
