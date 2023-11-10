import React, { useEffect, useState } from 'react'
import './home.css'; 
import Footer from '../footer/Footer';


 const Contact=()=> {
    const [name,setName]=useState([]);
    const [email,setEmail]=useState([]);
    const [number,setNumber]=useState([]);
    const [message,setMessage]=useState([]);
 
    
    const handleForm=( )=>{
      console.log(name,email,number,message)

    
    }
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <img src="https://www.esikkimtourism.in/ladakh-tour-packages/wp-content/uploads/2023/01/image-28.jpg" height="450px" width="550px" />
            </div>
            <div className='col-lg-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54066.34008535359!2d76.49947535081132!3d32.11935222538099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b3e0d1e63ac9%3A0x11046afda32dfd59!2sPalampur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1699553426514!5m2!1sen!2sin" width="600" height="600" style={{height:450}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
      <div className='signup'>
        <h2>Contact Us</h2>
      
      <input className="input_type" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter the name here...' />
      <input className="input_type" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='enter the email here...' />
      <input className="input_type" value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placeholder="enter the number here..." />
      <input className="input_type" value={message} onChange={(e)=>setMessage(e.target.value)} type="message" placeholder='enter the message here...' />
      <input className="button" onClick={handleForm} type="submit" />
    </div>
    <br></br>
    <Footer />
    </div>
   
  )
}
export default Contact
