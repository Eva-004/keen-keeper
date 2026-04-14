import React from 'react';
import useFriends from '../../hocks/useFriends';
import FriendCards from '../../Cards/FriendCards';
import { RingLoader } from 'react-spinners';

const AllFriends = () => {
    const {friends,loading}=useFriends();
    return (
        <div className='w-11/12 mx-auto px-20'>
            <h2 className='text-2xl font-semibold text-[#1F2937] mb-4'>Your Friends</h2>
            <div>
                {
                    loading ? <div className='flex justify-center items-center'><RingLoader /></div> : 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            friends.map((friend,ind)=> <FriendCards key={ind} friend={friend}></FriendCards>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default AllFriends;