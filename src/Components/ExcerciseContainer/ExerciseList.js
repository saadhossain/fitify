import React, { useEffect, useState } from 'react';
import ExerciseSingle from '../ExerciseSingle/ExerciseSingle';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 my-3">
                {
                    exercises.map(exercise => <ExerciseSingle data={exercise} key={exercise.id}></ExerciseSingle>)
                }
            </div>
        </div>
    );
};

export default ExerciseList;