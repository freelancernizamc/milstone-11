import nizam from '../assets/nizam.png';
import { Helmet } from "react-helmet-async";


const Module69 = () => {
    return (
        <>
            <Helmet><title>Milstone-11 | Module-69</title></Helmet>
            <div className='bg-[#090311] text-white'>
                <div className="flex justify-around items-center">
                    <div>
                        <h2 className="text-3xl font-bold">Welcome to Milstone-11 Module-69</h2>
                        <h1 className='text-9xl font-bold text-yellow-600'>I am Nizam</h1>
                        <p className='text-3xl font-bold'>Student of Programming Hero</p>
                        <p className='text-2xl font-bold'>Batch 7</p>
                    </div>
                    <div>
                        <img className='rounded-full' src={nizam} alt="Nizam" />
                    </div>
                </div>
                <h1 className='text-5xl text-[#d420dd] font-bold text-center mt-10 bg-[#2b124b]'>
                    Milstone-11 Module-69 Practice Section</h1><br />
            </div>
        </>
    );
};

export default Module69;