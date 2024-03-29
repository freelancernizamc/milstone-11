import nizam from '../assets/nizam2.png';
import { Helmet } from "react-helmet-async";

const Module71 = () => {
    return (
        <div>
            <Helmet><title>Milstone-11 | Module-71</title></Helmet>
            <div className='flex justify-around items-center bg-[#0d041a]'>
                <div>
                    <h1 className='text-3xl text-yellow-500'>Welcome to Milstone 11:Module 71</h1>
                    <h1 className='text-9xl font-bold text-[#d420dd]'>I am Nizam</h1>
                    <p className='text-3xl font-bold text-yellow-600'>Student of Programming Hero</p>
                    <p className='text-2xl font-bold text-yellow-400'>Batch 7</p>
                </div>
                <div>
                    <img id="fotter-img" className='rounded-full' src={nizam} alt='Nizam' />
                </div>
            </div>
            <h1 className='text-5xl text-[#d420dd] font-bold text-center mt-10 bg-[#09030f]'>
                Milstone-11 Module-71 Practice Section</h1><br />
        </div>
    );
};

export default Module71;