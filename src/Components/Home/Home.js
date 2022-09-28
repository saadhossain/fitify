import React from 'react';
import logo from '/public/fitify.png';
const Home = () => {
    return (
        <div className='w-10/12 mx-auto my-3'>
            {/* Exercise Packages list */}
            <div>
                {/* Logo area */}
                <div className='flex items-center'>
                    <img src={logo} alt="Fitify Logo" />
                    <h2 className='text-5xl'>Fitify</h2>
                </div>
            </div>
            {/* Profile Area */}
            <div>

            </div>
        </div>
    );
};

export default Home;