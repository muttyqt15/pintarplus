import Image from 'next/image';
import NavBar from '../components/navigation_bar'; // ../ means parent directory, ./ means current directory
import pythonImage from '../../../public/python_image.jpeg';


export default function Courses() {
  return (
    <>
      <NavBar link1="/" link2="/courses/" link3="/payment/"></NavBar>
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center backdrop-blur-md"></div>
      <h1 className="flex flex-col items-center text-6xl font-bold mt-8">Courses</h1>
      <div className="grid grid-cols-4 w-100 h-100 grid-rows-2 gap-4 mx-16 mt-8 place-items-center">
        <button className="border border-slate-300 rounded-3xl shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
          <div className="flex flex-col items-center">
            <Image 
            src={pythonImage}
            alt="python"
            className="course-img"
            />
            <h2>
              Python 101
            </h2>
            <p className="p-2 text-xs">
            Python is a general-purpose, versatile, and powerful programming language. It's a great first language because Python code is concise and easy to read.
            </p>
          </div>
        </button>
        <button className="border border-slate-300 rounded-3xl shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
          <div className="flex flex-col items-center">
            <Image 
            src={pythonImage}
            alt="python"
            className="course-img"
            />
            <h2>
              Python 101
            </h2>
            <p className="p-2 text-xs">
            Python is a general-purpose, versatile, and powerful programming language. It's a great first language because Python code is concise and easy to read.
            </p>
          </div>
        </button>
      </div>
    </>
  );
}
