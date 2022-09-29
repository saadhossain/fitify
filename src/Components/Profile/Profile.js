import React, { useState } from 'react';
import userImage from '/public/profile.png';

const Profile = (props) => {
    const time = props.data;
    const totalTime = time.reduce((prev, current) => prev + current, 0);

    const [breakTime, setBreakTime] = useState(0);

    const handleBreakTime = (time) => {
        setBreakTime(time);
        localStorage.setItem('breakTime', JSON.stringify(time));
    }

    return (
        <div className='sticky top-0'>
            {/* Username and Image */}
            <div className='flex items-center gap-4 py-4'>
                <img src={userImage} alt="" />
                <div>
                    <h2 className='text-xl'>Saad Hossain</h2>
                    <h5>Dhaka, Bangladesh</h5>
                </div>
            </div>
            {/* User Data */}
            <div className='flex items-center justify-between bg-[#F2F4FA] p-3 rounded text-black'>
                <span className='text-center'>
                    <h3 className="text-xl">64 KG</h3>
                    <h5>Weight</h5>
                </span>
                <span className='text-center'>
                    <h3 className="text-xl">5.6 Inch</h3>
                    <h5>Height</h5>
                </span>
                <span className='text-center'>
                    <h3 className="text-xl">23 yrs</h3>
                    <h5>Age</h5>
                </span>
            </div>
            {/* Break Data */}
            <div className='my-5'>
                <h2 className='text-2xl'>Add a Break</h2>
                <div className='flex items-center justify-between bg-[#F2F4FA] p-2 my-4 rounded'>
                    <h4 onClick={() => handleBreakTime(10)} className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black cursor-pointer">10s</h4>
                    <h4 onClick={() => handleBreakTime(20)} className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black cursor-pointer">20s</h4>
                    <h4 onClick={() => handleBreakTime(30)} className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black cursor-pointer">30s</h4>
                    <h4 onClick={() => handleBreakTime(40)} className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black cursor-pointer">40s</h4>
                </div>
            </div>
            {/* Exercise Data */}
            <div className='my-5'>
                <h2 className='text-2xl'>Exercise Details</h2>
                <div className='bg-[#F2F4FA] p-2 my-4 rounded'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl text-black'>Exercise Time</h3>
                        <p>{totalTime} Minutes</p>
                    </div>
                </div>
                <div className='bg-[#F2F4FA] p-2 my-4 rounded'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl text-black'>Break Time</h3>
                        <p>{breakTime} Seconds</p>
                    </div>
                </div>
            </div>
            <button className='bg-blue-600 py-2 px-4 text-white w-full rounded'>Activity Completed</button>
        </div>
    );
};

export default Profile;