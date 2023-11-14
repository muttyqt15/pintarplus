import Image from 'next/image'
import NavBar from './components/navigation_bar'
import Link from 'next/link';

export default function Home() {
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
      <main className="flex min-h-screen flex-col items-center">
      <div className="mb-60">
       <div className="w-96 h-96 rounded-full bg-orange-300 filter blur-3xl absolute -left-0 -top-32" style={{zIndex: -10}}></div>
      </div>

      <div className="flex">
        <ul className="text-center mb-10">
        <li className="font-extrabold text-6xl">Welcome To</li>
        <li className="font-extrabold text-6xl">PINTERPLUS</li>
        <li className="text-gray-600 font-bold text-xl">Unlocking Potential, Inspiring Excellence</li>
        <button className=" bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded my-5">ClICK HERE TO GET STARTED</button>
        </ul>
        <div className=" w-96 h-96 rounded-full bg-red-300 filter blur-3xl absolute -right-32"></div>
      </div>
      
      <div className=" mr-52 ">
      <div className=" w-96 h-96 rounded-full bg-blue-300 filter blur-3xl mr-96"></div>
      </div>
    </main>
    </>
  );
}
