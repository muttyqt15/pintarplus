import Image from 'next/image';
import NavBar from '../components/navigation_bar'; // ../ means parent directory, ./ means current directory
import pythonImage from '../../../public/python_image.jpeg';
import Layout from '../components/layout';


export default function Courses() {
  return (
    <Layout>
      <h1 className="text-6xl font-bold flex justify-center mt-16">Courses</h1>
      <div className="flex flex-col items-center" style={{ zIndex: 4 }}>
          <div className="grid course-grid grid-cols-4 w-100 h-100 grid-rows-2 gap-4 mx-16 mt-20 place-items-center">
            <button className="border border-slate-300 bg-slate-50 rounded-3xl shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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
            <button className="border border-slate-300 rounded-3xl bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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
            <button className="border border-slate-300 rounded-3xl bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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
            <button className="border border-slate-300 rounded-3xl bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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
            <button className="border border-slate-300 rounded-3xl bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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

            
            <button className="border border-slate-300 rounded-3xl bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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
            <button className="border border-slate-300 rounded-3xl bg-slate-50 shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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
            <button className="border border-slate-300 rounded-3xl bg-slate-50  shadow-2xl inline-block box-shadow" style={{ width: '200px', height: '280px' }}>
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
        </div>
    </Layout>
  );
}
