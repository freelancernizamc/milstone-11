import { useEffect, useState } from 'react';
import nizam from '../assets/nizam.png';
const Module68 = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://car-doctors-server-gray.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user);
        fetch('https://car-doctors-server-gray.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newUsers = [...users, data]
                setUsers(newUsers);
                form.reset();
            })
    }
    return (
        <div>
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
                <h1 className='text-5xl text-center bg-[#010A1B] text-yellow-600'>Milstone-11 Module-68 Practice</h1><br />
                <h2 className='text-3xl text-center text-blue-700 font-bold'>Video 66_0 Milestone Overview</h2>
                <h2 className='text-3xl text-center text-pink-700 font-bold'>Video 66-1 Module Introduction and What is Server</h2>
                <h2 className='text-3xl text-center text-green-700 font-bold'>Video 66-2 Client and Server Connection with Request and response</h2>
                <h2 className='text-3xl text-center text-rose-700 font-bold'>Video 66-3 Node vs other languages. How does node js work</h2>
                <h2 className='text-3xl text-center text-indigo-700 font-bold'>Video 66-4 What is node js and Express js and why use them</h2>
                <h2 className='text-3xl text-center text-purple-700 font-bold'>Video 66-5 What is Database, DBMS, MongoDB, NoSQL vs SQL</h2>
                <h2 className='text-3xl text-center text-pink-700 font-bold'>Video 66-6 (Recap) install node-express and use fetch to load data</h2>
                <h2 className='text-3xl text-center text-green-700 font-bold'>Video 66-7 Create React form and Post API and send data to the server</h2>
                <h2 className='text-3xl text-center text-indigo-700 font-bold'>Video 66-8 Send Client data to the server and display data on the client</h2>
                <h2 className='text-3xl text-center text-rose-700 font-bold'>Video 66-9 module summary</h2>
                <div className='text-center'>
                    <h1 className='text-3xl'>Users Management System</h1>
                    <h2 className='text-1xl'>Numbers of Users: {users.length}</h2>
                    <form onSubmit={handleAddUser}>
                        <input className='border' type="text" name="name" id="" />
                        <br />
                        <input className='border' type="email" name="email" id="" />
                        <br />
                        <input className='btn' type="submit" value="Add User" />
                    </form>
                    <div>
                        {
                            users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Module68;