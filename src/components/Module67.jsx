import nizam from '../assets/nizam.png'

const Module67 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#22293D] text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={nizam} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-[500px]'>
                        <h1 className="text-5xl font-bold">Assalamualaikum!</h1>
                        <h2 className="py-6 text-3xl">Welcome to Module-67 Practice Section.</h2>
                        <button className="btn btn-warning">Login</button>
                    </div>
                </div>
            </div>
            <marquee className='text-5xl text-center bg-[#010A1B] text-[#d420dd] font-extrabold'>Welcome to Milstone-11 Module-67 Practice Section</marquee><br />
            <div>
                <h2 className='text-3xl text-center text-blue-700 font-bold'>Video 67_1 Create mongodb atlas account for simple Crud server</h2>
                <h2 className='text-3xl text-center text-rose-700 font-bold'>Video 67_2 Async Await, Try Catch and Connect to database</h2>
                <h2 className='text-3xl text-center text-indigo-700 font-bold'>Video 67_3 Create client side post and Insert single user data</h2>
                <h2 className='text-3xl text-center text-purple-700 font-bold'>Video 67_4 Read Data Find find multiple user data and display on UI</h2>
                <h2 className='text-3xl text-center text-green-700 font-bold'>Video 67_5 Delete A User From the Database using UI click button</h2>
                <h2 className='text-3xl text-center text-rose-700 font-bold'>Video 67_6 (Recap) Create Read and delete And Show Remaining Users</h2>
                <h2 className='text-3xl text-center text-indigo-950 font-bold'>Video 67_7 Load Single Item By Id And create Update route</h2>
                <h2 className='text-3xl text-center text-blue-600 font-bold'>Video 67_8 Explore Put And Patch And Update User To Database</h2>
                <h2 className='text-3xl text-center text-pink-900 font-bold'>Video 67_9 Module Summary and Mango Treat for you</h2>
                <h2 className='text-3xl text-center text-green-900 font-bold'>Video 67_10 (optional) Use mongodb locally without internet</h2>
            </div>
            <h1 className='text-5xl text-[#d420dd] font-bold text-center mt-10 bg-[#2b124b] animate-pulse'>
                QUIZ</h1><br />
            <h3 className='text-3xl text-center text-rose-700 font-bold'>Q1: What is the purpose of express.json() in an Express.js application?<br />
                Ans: To enable parsing of JSON request bodies</h3>
            <h3 className='text-3xl text-center text-green-700 font-bold'>Q2: What is the purpose of the POST method in an Express.js application?<br />
                Ans: To Insert data in to the database</h3>
            <h3 className='text-3xl text-center text-indigo-900 font-bold'>Q3: Which of the following options is used to handle POST requests in an Express.js application?<br />
                Ans: app.post()</h3>
            <h3 className='text-3xl text-center text-pink-500 font-bold'>Q4: How do you access the data submitted in a POST request in an Express.js application?<br />
                Ans: Using the request.body object</h3>
            <h3 className='text-3xl text-center text-blue-500 font-bold'>Q5: What is the purpose of the GET method in MongoDB?<br />
                Ans: To retrive data from the database</h3>
            <h3 className='text-3xl text-center text-purple-900 font-bold'>Q6: Which of the following is a valid way to use the GET method to retrieve all documents from a collection in MongoDB?<br />
                Ans: db.collection.find( &#123;  &#125;)</h3>
            <h3 className='text-3xl text-center text-green-900 font-bold'>Q7: What is a MongoDB URI?<br />
                Ans: A connection string that specifies the location of a MongoDB database.</h3>
            <h3 className='text-3xl text-center text-rose-900 font-bold'>Q8: Which of the following components are typically included in a MongoDB URI?<br />
                Ans: The server name, the port number, and the authentication credentials.</h3>
            <h3 className='text-3xl text-center text-indigo-900 font-bold'>Q9: What happens if the upsert option is set to false in the updateOne() method in MongoDB?<br />
                Ans: If no documents match the filter criteria, the method does not perform any update operation.</h3>
            <h3 className='text-3xl text-center text-pink-900 font-bold'>Q10: Which of the following is true about using try-catch blocks in an Express.js application?<br />
                Ans: Try-catch blocks should be used to handle errors in asynchronous code.</h3>
            <h1 className='text-5xl text-[#d420dd] font-bold text-center mt-10 my-2 bg-[#2b124b]'>
                THE END</h1>

        </div>
    );
};

export default Module67;