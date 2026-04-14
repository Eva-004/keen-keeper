import React from 'react';

const FriendCards = ({friend}) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-[#1F2937]">{friend.name}</h2>
                    <p className='text-[#64748B]'>{friend.days_since_contact} ago</p>
                    <div className='flex gap-2 justify-center'>
                        {
                        friend.tags.map((tag,ind)=> <div key={ind} className="badge  bg-[#CBFADB] font-medium text-[#244D3F]">{tag}</div>)
                    }
                    </div>
                    <div className={`badge rounded-full text-white ${friend.status === 'on-track' ? 'bg-[#244D3F]' : friend.status === 'overdue' ? 'bg-[#EF4444]' : 'bg-[#EFAD44]'}`}>
                        {friend.status}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendCards;