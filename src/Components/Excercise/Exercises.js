const Exercises = (props) => {
    const handleExerciseTime = props.handleExerciseTime;
    const { img, exerciseTitle, details, age, time } = props.data;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{exerciseTitle}</h2>
                    <p>{details.length > 150 ? details.slice(0, 150) : details}</p>
                    <p>For Age: {age}</p>
                    <p>Time Required: {time} min</p>
                    <div className="card-actions">
                        <button onClick={()=> handleExerciseTime(time)} className="btn btn-primary">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercises;