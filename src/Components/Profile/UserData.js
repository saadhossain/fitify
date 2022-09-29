import React from 'react';

const UserData = () => {
    return (
        <div>
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
        </div>
    );
};

export default UserData;