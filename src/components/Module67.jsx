import nizam from '../assets/nizam.png'

const Module67 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={nizam} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-[500px]'>
                        <h1 className="text-5xl font-bold">Assalamualaikum!</h1>
                        <h2 className="py-6 text-3xl">Welcome to Module-67 Practice Section.</h2>
                        <button className="btn btn-warning">Login</button>
                    </div>
                </div>
            </div>
            <h1 className='text-5xl text-center bg-[#010A1B] text-yellow-600'>Milstone-11 Module-67 Practice</h1><br />
            <div>
                <h2 className='text-3xl text-center text-blue-700 font-bold'>Video 67_1 Create mongodb atlas account for simple Crud server</h2>
                <h2 className='text-3xl text-center text-rose-700 font-bold'>Video 67_2 Async Await, Try Catch and Connect to database</h2>
                <h2 className='text-3xl text-center text-indigo-700 font-bold'>Video 67_3 Create client side post and Insert single user data</h2>
                <h2 className='text-3xl text-center text-purple-700 font-bold'>Video 67_4 Read Data Find find multiple user data and display on UI</h2>
            </div>
        </div>
    );
};

export default Module67;