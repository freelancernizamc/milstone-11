import '../components/index';
import nizam from '../assets/nizam.png';
const Module70 = () => {
    return (
        <div>
            <div className='flex justify-around items-center'>
                <div>
                    <h1 className='text-3xl'>Welcome to Milstone 11:Module 70</h1>
                    <h1 className='text-9xl font-bold text-yellow-600'>I am Nizam</h1>
                    <p className='text-3xl font-bold'>Student of Programming Hero</p>
                    <p className='text-2xl font-bold'>Batch 7</p>
                </div>
                <div>
                    <img id="fotter-img" src={nizam} alt='Nizam' />
                </div>
            </div>
            <h1 className='text-5xl text-[#d420dd] font-bold text-center mt-10 bg-[#2b124b]'>
                Milstone-11 Module-70 Practice Section</h1><br />
        </div>
    );
};

export default Module70;