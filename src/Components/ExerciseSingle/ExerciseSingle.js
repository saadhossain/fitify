
const ExerciseSingle = (props) => {
    let exerciseTime = 0;
    const {img,exerciseTitle,details, age, time} = props.data;
    const handleExerciseTime = (props) =>{
        exerciseTime = props.time;
        console.log(exerciseTime);
        
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{exerciseTitle}</h2>
                    <p>{details.length>150? details.slice(0, 150) : details}</p>
                    <p>For Age: {age}</p>
                    <p>Time Required: {time} min</p>
                    <div className="card-actions">
                        <button onClick={handleExerciseTime} time={time} className="btn btn-primary">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseSingle;