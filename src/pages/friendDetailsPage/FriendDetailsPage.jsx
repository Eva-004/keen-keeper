import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../components/hocks/useFriends';
import { RingLoader } from 'react-spinners';
import DetailsCard from '../../components/Cards/DetailsCard';
import { MdOutlineNotificationsPaused, MdOutlineTextsms } from 'react-icons/md';
import { GoArchive } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import SummaryCards from '../../components/Cards/SummaryCards';
import { BiPhoneCall } from 'react-icons/bi';
import { FriendsContext } from '../../context/FriendsContextProvider';
import { CiVideoOn } from 'react-icons/ci';
import { toast } from 'react-toastify';

const FriendDetailsPage = () => {
    console.log('details')
      const {id} = useParams();
       const {friends,loading}=useFriends();
        const expectedFriend = friends.find(friend => friend.id === Number(id));
        console.log(expectedFriend);
        const {timeLines,setTimeLines} = useContext(FriendsContext);
   const handleContact = (contact)=>{
    const title = expectedFriend.name;
    const type = contact;
    const currentDate = new Date().toISOString();
    setTimeLines([...timeLines,{title, type,currentDate}])
    toast.success(`Check-in by ${type} successfully!`)
   }
    return (
        <div className='bg-base-200 py-15'>
            {
                loading ? <div className='flex justify-center items-center'><RingLoader /></div> :
                <div className='w-11/12 mx-auto md:px-20 grid grid-cols-1 md:grid-cols-3 md:gap-6'>
                  <div className='col-span-1'> 
                    <DetailsCard expectedFriend={expectedFriend}></DetailsCard>
                   <div className='flex flex-col mt-4 space-y-2'>
                     <div className="btn bg-white"><MdOutlineNotificationsPaused /> Snooze 2 weeks</div>
                    <div className="btn bg-white"><GoArchive />Archive</div>
                    <div className="btn bg-white text-red-500"><RiDeleteBinLine />Delete</div>
                   </div>
                  </div>
                  <div className='col-span-2 space-y-6'>
                     <div className=' grid grid-cols-1 md:grid-cols-3 gap-4 '>
                        <SummaryCards title={'Days Since Contact'} count={expectedFriend.days_since_contact}></SummaryCards>
                        <SummaryCards title={'Goal (Days)'} count={expectedFriend.goal}></SummaryCards>
                        <SummaryCards title={'Next Due'} count={expectedFriend.next_due_date}></SummaryCards>
                     </div>
                     <div className='card card-body  shadow-sm bg-base-100'>
                         <div className='flex justify-between'>
                            <h2 className='text-xl font-medium text-[#244D3F]'>Relationship Goal</h2>
                            <div className="btn">Edit</div>
                         </div>
                         <p className='text-lg text-[#64748B]'>Connect every <span className='font-bold text-black'>{expectedFriend.goal} days</span></p>
                     </div>
                     <div className='card card-body shadow-sm bg-base-100'>
                      <h2 className='text-xl font-medium text-[#244D3F]'>Quick Check-In</h2>
                      <div className='flex justify-between flex-col sm:flex-row gap-4'>
                        <button onClick={()=>handleContact('Call')}  className="card card-body bg-base-200 shadow-sm text-center flex flex-col justify-center items-center space-y-2 text-lg cursor-pointer hover:bg-[#244D3F] hover:text-white">
                          <BiPhoneCall/>
                          <p >Call</p>
                        </button>
                        <button onClick={()=>handleContact('Text')} className="card card-body bg-base-200 shadow-sm text-center flex flex-col justify-center items-center space-y-2 text-lg cursor-pointer hover:bg-[#244D3F] hover:text-white">
                         <MdOutlineTextsms />
                          <p >Text</p>
                        </button>
                        <button onClick={()=>handleContact('Video')}  className="card card-body bg-base-200 shadow-sm text-center flex flex-col justify-center items-center space-y-2 text-lg cursor-pointer hover:bg-[#244D3F] hover:text-white">
                          <CiVideoOn />
                          <p >Video</p>
                        </button>
                      </div>
                     </div>
                  </div>
                </div>
            }
        </div>

    );
};

export default FriendDetailsPage;