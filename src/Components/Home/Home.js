import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Exercises from '../Excercise/Exercises';
import Profile from '../Profile/Profile.js';
import logo from '/public/fitify.png';
const Home = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const [exerciseTime, setExerciseTime] = useState([]);
    const handleExerciseTime = (time) => {
        const newTime = [...exerciseTime, time];
        setExerciseTime(newTime);
    }
    return (
        <div className='w-11/12 mx-auto my-3 flex flex-col md:flex-row gap-5'>
            {/* Exercise Packages list */}
            <div className='w-full md:w-[65%] lg:w-[80%]'>
                {/* Logo area */}
                <div className='flex items-center'>
                    <img src={logo} alt="Fitify Logo" />
                    <h2 className='text-5xl'>Fitify</h2>
                </div>
                <h2 className='text-2xl'>Select Today's Exercise</h2>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
                        {
                            exercises.map(exercise => <Exercises data={exercise} key={exercise.id}
                                handleExerciseTime={handleExerciseTime}
                            ></Exercises>)
                        }
                    </div>
                </div>
                {/* Blog Section */}
                <Blog></Blog>
            </div>
            {/* Profile Area */}
            <div className='w-full md:w-[35%] lg:w-[20%] mt-4'>
                <Profile data={exerciseTime}></Profile>
            </div>
        </div>
    );
};

export default Home;