import Image from 'next/image';
import NavBar from '../components/navigation_bar'; // ../ means parent directory, ./ means current directory
import pythonImage from '../../../public/python_image.jpeg';
import discreteMath from '../../../public/Rectangle 31.png';
import bizAnalytics from '../../../public/bizAnalytics.jpeg';
import calculusImg from '../../../public/calculus_img.jpg';
import dataScienceImg from '../../../public/datascienceImg.jpeg';
import linearAlgebraImg from '../../../public/linearAlgebra.jpeg';
import productManagementImg from '../../../public/productManagementImg.jpeg';
import Layout from '../components/layout';
import cryptoImg from '../../../public/cryptoImg.png'

export default function Courses() {
  return (
    <Layout>
      <div className="absolute top-36 -right-full w-96 h-96 bg-purple-950 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <h1 className="text-6xl font-bold flex justify-center mt-8">Courses</h1>
      <div className="flex flex-col items-center" style={{ zIndex: 4 }}>
          <div className="grid course-grid grid-cols-4 w-100 h-100 grid-rows-2 gap-2 mx-16 mt-10 place-items-center">
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={pythonImage}
                alt="python"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Python   101
                </h2>
                <p className="p-2 text-xs">
                Python is a general-purpose, versatile, and powerful programming language. 
                </p>
              </div>
            </button>
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={discreteMath}
                alt="discrete math"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Discrete Math
                </h2>
                <p className="p-2 text-xs font-">
                Discrete math is a math to learn about the various wonders of the world! 
                </p>
              </div>
            </button>
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={bizAnalytics}
                alt="python"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Business Analytics
                </h2>
                <p className="p-2 text-xs">
                Business analytics is a great career path with multiple online courses.
                </p>
              </div>
            </button>
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={calculusImg}
                alt="python"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Calculus 2
                </h2>
                <p className="p-2 text-xs">
                Expands on calculus fundamentals, diving into techniques like integration by parts, sequences, and series.
                </p>
              </div>
            </button>
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={dataScienceImg}
                alt="python"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Data Science
                </h2>
                <p className="p-2 text-xs">
                A highly growing field, learn all about Big Data and its friends!
                </p>
              </div>
            </button>

            
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={linearAlgebraImg}
                alt="python"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Linear Algebra
                </h2>
                <p className="p-2 text-xs">
                Used for projecting a three-dimensional view into a two-dimensional plane, handled by linear maps.
                </p>
              </div>
            </button>
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={productManagementImg}
                alt="python"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Project Management
                </h2>
                <p className="p-2 text-xs">
                Organizing and planning goals in order to best complete a project.
                </p>
              </div>
            </button>
            <button className="hover:scale-110 transition-transform border border-slate-300 bg-slate-50  shadow-2xl inline-block box-shadow" style={{ width: '252px', height: '230px', borderRadius: '40px'}}>
              <div className="flex flex-col items-center">
                <Image 
                src={cryptoImg}
                alt="python"
                className="course-img"
                />
                <h2 className="font-semibold">
                  Crypto
                </h2>
                <p className="p-2 text-xs">
                Crypto is a newly formed currency capable of anything, learn all about it!
                </p>
              </div>
            </button>
          </div>
        </div>
    </Layout>
  );
}
