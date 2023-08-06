import { Helmet } from "react-helmet-async";
import nizam from '../assets/nizam.png';
const Module68 = () => {

    return (
        <div>
            <Helmet>
                <title>
                    Milstone-11 | Module-68
                </title>
            </Helmet>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">

                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={nizam}
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Assalamualaikum!
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            WELCOME TO MODULE-68 PRACTICE SECTION
                            <br className="hidden md:block" />
                            I am Nizam{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Student of Batch 07
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            This projects created by React, Tailwind CSS, Daisyui.
                        </p>
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-pink-700 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Contact Me
                            </a>
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <marquee className='text-5xl text-center bg-[#010A1B] text-[#d420dd] font-extrabold'>Welcome to Milstone-11 Module-68 Practice Section</marquee><br />
                <h2 className='text-3xl text-center text-blue-700 font-bold'>Video 68-1 Module overview and create basic server and client</h2>
                <h2 className='text-3xl text-center text-pink-700 font-bold'>Video 68-2 Client Side router and Connect MongoDB database</h2>
                <h2 className='text-3xl text-center text-green-700 font-bold'>Video 68-3 Server Side hide database User and Password using dotenv config</h2>
                <h2 className='text-3xl text-center text-rose-700 font-bold'>Video 68-4 Create Add coffee from Client Side and get data</h2>
                <h2 className='text-3xl text-center text-indigo-700 font-bold'>Video 68-5 Send Coffee data to the server and store in the mongodb database</h2>
                <h2 className='text-3xl text-center text-purple-700 font-bold'>Video 68-6 View all coffee and create coffee card</h2>
                <h2 className='text-3xl text-center text-pink-700 font-bold'>Video 68-7 Delete a coffee and fetch coffee for udpate</h2>
                <h2 className='text-3xl text-center text-green-700 font-bold'>Video 68-8 Update single coffee information</h2>
                <h2 className='text-3xl text-center text-indigo-700 font-bold'>Video 68-9 Module Summary and Rest API endpoints naming convention</h2>
                <h1 className='text-5xl text-center bg-[#010A1B] text-[#d420dd] font-extrabold my-10'>Module-68.5</h1>
                <h2 className='text-3xl text-center text-purple-700 font-bold'>68_5-1 Practice Chocolate CRUD or Users management CRUD</h2>
                <h2 className='text-3xl text-center text-indigo-900 font-bold'>68_5-2 High level overview of Mongodb Operators</h2>
            </div>
            <h1 className='text-5xl text-center bg-[#010A1B] text-[#d420dd] font-extrabold my-10'>QUIZ</h1>
            <h2 className='text-3xl text-center text-green-700 font-bold'>Q1: What is MongoDB Compass?<br />
                Ans: A GUI tool for managing MongoDB</h2>
            <h2 className='text-3xl text-center text-pink-700 font-bold'>Q2: What is a middleware in Express.js?<br />
                Ans: A way to handle HTTP requests and response</h2>
            <h2 className='text-3xl text-center text-blue-700 font-bold'>Q3: Which of the following is a way to define a middleware in Express.js?<br />
                Ans: Using the app.use() method</h2>
            <h2 className='text-3xl text-center text-indigo-950 font-bold'>Q4: What are the possible values for the acknowledged property in the JSON response after an insert operation in MongoDB?<br />
                Ans: true or false</h2>
            <h2 className='text-3xl text-center text-rose-700 font-bold'>Q5: What is an HTTP status code?<br />
                Ans: A code that indicates the success or failure of a request made to a server using the HTTP protocol</h2>
            <h2 className='text-3xl text-center text-green-700 font-bold'>Q6: What is the HTTP status code for a successful GET request in a RESTful API?<br />
                Ans: 200</h2>
            <h2 className='text-3xl text-center text-pink-700 font-bold'>Q7: What is the purpose of a RESTful APIs response headers?<br />
                Ans: To provide additional information about the response data</h2>
            <h2 className='text-3xl text-center text-blue-800 font-bold'>Q8: Which MongoDB operator is commonly used to update a single document in a RESTful API?<br />
                Ans: $set</h2>
            <h2 className='text-3xl text-center text-rose-800 font-bold'>Q9: What is a common data format used in REST APIs?<br />
                Ans: JSON</h2>
            <h2 className='text-3xl text-center text-rose-800 font-bold mb-5'>Q10: Which of the following is the syntax for the find() method in MongoDB?<br />
                Ans: db.collection.find(query,projection, option)</h2>
        </div>

    );
};

export default Module68;