import banner from '../assets/milstone11.png'
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Milstone-11 | Home</title>
            </Helmet>
            <div className='text-center bg-[#010A1B]'>

                <img className='ml-20' src={banner} />
                <div>
                    <h1 className='text-5xl text-[#d420dd] font-bold text-center mt-10 bg-[#2b124b]'>
                        মাইলস্টোন-১১ এর টেনটেটিভ আউটলাইন</h1><br />
                    <p className='text-3xl text-white font-bold mt-5'>
                        মে ০৫: মডিউল ৬৬: Getting Started with Node, Express and Api<br />
                        মে ০৬: মডিউল ৬৭:(Theoretical) Know about Server, NodeJS, ExpressJS<br />
                        মে ০৭: মডিউল ৬৮:CRUD with Espresso Emporium using MongoDB Compass without wifi<br />
                        মে ০৮: মডিউল ৬৮.৫: প্র্যাক্টিস ডে<br />
                        মে ০৮: রাত ৯.০০: কন্সেপচুয়াল সেশন<br />
                        মে ০৯: মডিউল ৬৯: Mongodb, database integration, CRUD<br />
                        মে ১০: মডিউল ৭০: Genius Car Node Mongo CRUD Recap<br />
                        মে ১১: মডিউল ৭০.৫: CRUD Update and Product Management Practice<br />
                        মে ১১: রাত ৯.০০: কন্সেপচুয়াল সেশন<br />
                        মে ১২: মডিউল ৭১: Genius Car Node Mongo CRUD , Private Route and Dot Env<br />
                        মে ১৩: মডিউল ৭২: Pagination and Load Data by filter<br />
                        মে ১৪: মডিউল ৭৩: Introduction to JWT and Secure API using JWT<br />
                        মে ১৫: মডিউল ৭৩.৫: Deploy to Vercel and Practice Problem<br />
                        মে ১৫: রাত ৯.০০: কন্সেপচুয়াল সেশন<br />
                        মে ১৬: মডিউল ৭৩.৬: Practice Problem<br />
                        মে ১৭: নো মডিউল (এক্সট্রা প্র্যাক্টিস ডে)<br />
                        মে ১৮: মডিউল ৭৪: এসাইনমেন্ট ১১(৬০ মার্ক্স এর ১ম দিন শুরু)<br />
                        মে ১৯: (৬০ মার্ক্স এর ২য় দিন শুরু)<br />
                        মে ২০: (৬০ মার্ক্স এর ৩য় দিন শুরু অর্থাৎ ২১ তারিখ রাত ১১.৫৯ পর্যন্ত ৬০ মার্ক্স এর সময় থাকবে )<br />
                        মে ২১ : মডিউল ৭৪.৫: Sorting, Filtering and Mongodb Operators(বোনাস ভিডিও)(৫০ মার্ক্স এর ডেডলাইন শুরু এবং ২২ তারিখ রাত ১১.৫৯ পর্যন্ত ৫০ মার্ক্স এর সময় থাকবে )<br />
                        মে ২২: মাইলস্টোন -১২(Final Project-Complete Website)
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;