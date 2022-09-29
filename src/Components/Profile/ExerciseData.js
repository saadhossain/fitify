import React from 'react';

const ExerciseData = () => {
    return (
        <div>
            {/* Exercise Data */}
            <div className='my-5'>
                <h2 className='text-2xl'>Exercise Details</h2>
                <div className='bg-[#F2F4FA] p-2 my-4 rounded'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl text-black'>Exercise Time</h3>
                        <p>200 Sec</p>
                    </div>
                </div>
                <div className='bg-[#F2F4FA] p-2 my-4 rounded'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl text-black'>Break Time</h3>
                        <p>15 Sec</p>
                    </div>
                </div>
            </div>
            <button className='bg-blue-600 py-2 px-4 text-white w-full rounded'>Activity Completed</button>
        </div>
    );
};

export default ExerciseData;