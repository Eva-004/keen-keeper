import React from 'react';
import { BsChatTextFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { ImVideoCamera } from 'react-icons/im';

const TimeLineCards = ({item}) => {
    console.log(item);
    return (
        <div className='card card-body shadow-sm bg-base-100 p-6'>
            <div className='flex gap-6 items-center'>
                <div className='font-medium text-3xl'>
                {
                    item.type === 'Call' ? <FiPhoneCall /> : item.type==='Text' ? <BsChatTextFill /> : <ImVideoCamera />
                }
                </div>
                <div>
                    <p ><span className='font-medium text-xl text-[#244D3F]'>{item.type}</span> <span className='text[#64748B] text-lg'>with {item.title}</span></p>
                    <p className='text[#64748B] font-medium'>{item.currentDate}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeLineCards;