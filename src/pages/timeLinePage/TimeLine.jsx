import React, { useContext, useState } from 'react';
import TimeLineCards from '../../components/Cards/TimeLineCards';
import { FriendsContext } from '../../context/FriendsContextProvider';

const TimeLine = () => {
   const {timeLines} = useContext(FriendsContext);
   const [filteredTimeLines, setFilteredTimeLines] = useState(timeLines);
   
   const handleFilter =(type)=>{
    const filteredData = timeLines.filter(item => item.type === type);
    setFilteredTimeLines(filteredData);
   }
    return (
        <div className='bg-base-200 py-18'>
            <div className='w-11/12 mx-auto md:px-20 space-y-6'>
                <h2 className='font-bold text-5xl'>Timeline </h2>
                <div className="dropdown dropdown-bottom flex justify-end">
                    <div tabIndex={0} role="button" className="btn m-1 text-lg text-[#64748B]">Filter timeline  ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> handleFilter('Call')}><a>Call</a></li>
                        <li onClick={()=> handleFilter('Text')}><a>Text</a></li>
                        <li onClick={()=> handleFilter('Video')}><a>Video</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                   {
                    filteredTimeLines.map((item,ind)=><TimeLineCards key={ind} item={item}></TimeLineCards>)
                   }
                </div>
            </div>
        </div>
    );
};

export default TimeLine;