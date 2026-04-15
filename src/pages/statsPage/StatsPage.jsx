import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContextProvider';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = ({ isAnimationActive = true }) => {
    const { timeLines } = useContext(FriendsContext);
    const call = timeLines.filter((item) => item.type ==='Call' );
    const text = timeLines.filter((item) => item.type ==='Text' );
    const video = timeLines.filter((item) => item.type ==='Video' );
    console.log(call.length,text.length,video.length)
    const data =[
         { name: 'Call', value: call.length, fill: '#0088FE' },
  { name: 'Text', value: text.length, fill: '#00C49F' },
  { name: 'Video', value: video.length, fill: '#FFBB28' }
    ]
    return (
        <div className='bg-base-200 py-20'>
            <div className='w-11/12 mx-auto px-20'>
                <h2 className='text-4xl font-bold text-[#1F2937]'>Friendship Analytics</h2>
                <div className='mt-6 card card-body bg-white shadow-sm space-y-6'>
                    <p className='font-medium text-xl text-[#244D3F] mb-6'>By Interaction Type</p>
                   <div className='flex justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={isAnimationActive}
                        />
                         <Legend/>
                           <Tooltip/>
                    </PieChart>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;