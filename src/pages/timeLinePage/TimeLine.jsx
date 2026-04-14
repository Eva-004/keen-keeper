import React, { useContext } from 'react';
import TimeLineCards from '../../components/Cards/TimeLineCards';
import { FriendsContext } from '../../context/FriendsContextProvider';

const TimeLine = () => {
   const {timeLines} = useContext(FriendsContext);
    return (
        <div className='bg-base-200 py-18'>
            <div className='w-11/12 mx-auto px-20 space-y-6'>
                <h2 className='font-bold text-5xl'>Timeline </h2>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 text-lg text-[#64748B]">Filter timeline  ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                   {
                    timeLines.map((item,ind)=><TimeLineCards key={ind} item={item}></TimeLineCards>)
                   }
                </div>
            </div>
        </div>
    );
};

export default TimeLine;