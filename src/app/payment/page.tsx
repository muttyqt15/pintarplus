import Image from 'next/image'
import NavBar from '../components/navigation_bar'
import Layout from '../components/layout'
import Link from 'next/link'
import React from 'react';

export default function Payment() {
  return (
    <>
      <div className="flex flex-col" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
        <nav className="w-full h-20 bg-transparent border-slate-300 flex items-center justify-between text-blue-600 font-bold ">
          <h2 className="text-2xl m-6">
            PINTERPLUS
          </h2>
          <div className="text-2xl m-6 space-x-2">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/courses/" className="nav-link">Courses</Link>
            <Link href="/payment/" className="nav-link">Payment</Link>
          </div>
        </nav>
      </div>
      <main className='flex min-h-screen flex-col items-center'>
        <div className='mb-60 '>
          <div className='w-96 h-96 rounded-full bg-orange-300 filter blur-3xl absolute -left-0 -top-32' style={{ zIndex: -10 }}></div>
          <div className='w-96 h-96 rounded-full bg-red-300 filter blur-3xl absolute -right-32'style={{zIndex:-20}}> </div>
          <div className='mr-52'></div>
          <div className='absolute -bottom-40 -left-28 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'> </div>
        </div>
        <div className="max-w-[800px] mt-[-200px] w-full h-screen mx-auto text-center flex flex-col" >
          <p className='text-3xl text-black' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Explore our cool learning packages !</p>
          <div className='flex mt-[100px] items-center felx-col' >
            <div className='grid course-grid grid-cols place-items-center gap-3'>
                <div className='border border-slate-200 bg-red-300 shadow-2xl ' style={{width:'280px',height:'400px',borderRadius:'40px'}} >
                    <h2 className='mt-[20px] text-[30px] text-black' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Basic</h2>
                    <h3 className='text-[100px] text-black' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>$20</h3>
                    <h4 className='text-[20px] text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>5 courses</h4>
                    <h5 className='pl-3 pr-3 text-center text-[17px] text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>Embark your journey to discover your true talents and interests with our basic package!</h5>
                    <div className='mt-3'>
                        <button className='text-black border border-slate-200 bg-slate-50 hover:bg-slate-500 rounded-md ' style={{fontFamily : 'Poppins, sans-serif', fontWeight: 'bold',width:'200px', height:'40px',borderRadius:'5px'}}>PURCHASE NOW!</button>
                    </div>
                </div>
                <div className='border border-slate-200 bg-orange-300 shadow-2xl ' style={{width:'280px',height:'400px',borderRadius:'40px'}}>
                    <h2 className='mt-[20px] text-[30px] text-black ' style={{fontFamily : 'Poppins, sans-serif',fontWeight: 'bold'}} >Intermediate</h2>
                    <h3 className='text-[100px] text-black' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>$35</h3>
                    <h4 className='text-[20px] text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>10 courses</h4>
                    <h5 className='pl-3 pr-3 text-center text-[17px] text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>Dive deep into the ocean of knowledge with our Intermediate Package!</h5>
                    <div className='mt-3'>
                        <button className='text-black border border-slate-200 bg-slate-50  hover:bg-slate-500 rounded-md' style={{fontFamily : 'Poppins, sans-serif', fontWeight: 'bold',width:'200px', height:'40px',borderRadius:'5px'}}>PURCHASE NOW!</button>
                    </div>
                </div>
                <div className='border border-slate-200 bg-blue-400 shadow-2xl ' style={{width:'280px',height:'400px',borderRadius:'40px'}}>
                    <h2 className='mt-[20px] text-[30px] text-black' style={{fontFamily : 'Poppins, sans-serif',fontWeight: 'bold'}} >Advanced</h2>
                    <h3 className='text-[100px] text-black' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>$50</h3>
                    <h4 className='text-[20px] text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>15 courses</h4>
                    <h5 className='pl-3 pr-3 text-center text-[17px] text-black' style={{ fontFamily: 'Poppins, sans-serif' }}>Push the boundaries of knowledge and skill with our Advance Package!</h5>
                    <div className='mt-3'>
                        <button className='text-black border border-slate-200 bg-slate-50  hover:bg-slate-500 rounded-md' style={{fontFamily : 'Poppins, sans-serif', fontWeight: 'bold',width:'200px', height:'40px',borderRadius:'5px'}}>PURCHASE NOW!</button>
                    </div>
                </div>
            </div>


          </div>
        </div>
      </main>
    </>
  );
}