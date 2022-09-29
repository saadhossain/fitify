import React from 'react';
import BreakData from './BreakData';
import ExerciseData from './ExerciseData';
import UserData from './UserData';
import userImage from '/public/profile.png';
const ProfileContainer = () => {
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
            <UserData></UserData>
            <BreakData></BreakData>
            <ExerciseData></ExerciseData>
        </div>
    );
};

export default ProfileContainer;