import React from 'react';
import { GoPlus } from 'react-icons/go';
import SummaryCards from '../../Cards/SummaryCards';

const Banner = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto md:px-20'>
                <div className='text-center space-y-4'>
                    <h2 className='font-bold text-4xl text-[#1F2937]'>Friends to keep close in your life</h2>
                    <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
                    relationships that matter most.</p>
                    <div className="btn font-semibold bg-[#244D3F] text-white"><GoPlus />Add a Friend</div>
                </div>
                <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <SummaryCards title={'Total Friends'} count={10}></SummaryCards>
                    <SummaryCards title={'On Track'} count={4}></SummaryCards>
                    <SummaryCards title={'Need Attention'} count={6}></SummaryCards>
                    <SummaryCards title={'Interactions This Month'} count={12}></SummaryCards>
                </div>
                <div className="divider my-10"></div>
            </div>
        </div>
    );
};

export default Banner;