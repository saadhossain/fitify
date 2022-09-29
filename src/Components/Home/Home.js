import React from 'react';
import ExerciseList from '../ExcerciseContainer/ExerciseList';
import Profile from '../Profile/ProfileContainer.js';
import logo from '/public/fitify.png';
const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-3 flex gap-5'>
            {/* Exercise Packages list */}
            <div className='w-[80%]'>
                {/* Logo area */}
                <div className='flex items-center'>
                    <img src={logo} alt="Fitify Logo" />
                    <h2 className='text-5xl'>Fitify</h2>
                </div>
                <h2 className='text-2xl'>Select Today's Exercise</h2>
                <ExerciseList></ExerciseList>
            </div>
            {/* Profile Area */}
            <div className='w-[20%] mt-4'>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Home;