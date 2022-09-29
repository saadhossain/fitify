import React from 'react';

const BreakData = () => {
    return (
        <div>
            {/* Break Data */}
            <div className='my-5'>
                <h2 className='text-2xl'>Add a Break</h2>
                <div className='flex items-center justify-between bg-[#F2F4FA] p-2 my-4 rounded'>
                    <h4 className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black">10s</h4>
                    <h4 className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black">20s</h4>
                    <h4 className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black">30s</h4>
                    <h4 className="text-md bg-white hover:bg-blue-600 hover:text-white rounded-3xl p-3 text-black">40s</h4>
                </div>
            </div>
        </div>
    );
};

export default BreakData;