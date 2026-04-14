import React from 'react';

const DetailsCard = ({expectedFriend}) => {
    return (
        <div>
           <div className="card bg-base-100 p-6 shadow-sm">
                <figure className="px-10">
                    <img
                        src={expectedFriend.picture}
                        alt={expectedFriend.name}
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-[#1F2937]">{expectedFriend.name}</h2>
                    
                    <div className='flex gap-2 justify-center'>
                        {
                        expectedFriend.tags.map((tag,ind)=> <div key={ind} className="badge  bg-[#CBFADB] font-medium text-[#244D3F]">{tag}</div>)
                    }
                    </div>
                    <div className={`badge rounded-full text-white ${expectedFriend.status === 'on-track' ? 'bg-[#244D3F]' : expectedFriend.status === 'overdue' ? 'bg-[#EF4444]' : 'bg-[#EFAD44]'}`}>
                        {expectedFriend.status}
                    </div>
                    <p className='text-[#64748B]'>{expectedFriend.bio}</p>
                </div>
            </div> 
        </div>
    );
};

export default DetailsCard;