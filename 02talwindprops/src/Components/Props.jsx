function Props(props) {
    // Destructuring properties from the props object
    let uname = props.user.name;
    let age = props.user.age;
    let gender = props.user.sex;

    // JSX to render
    return (
        <>
            <h1 className="text-blue-400">Hi {uname}, Welcome to React Props </h1>
            <h1>Your Age is {age} years</h1>
            <h1>Your Gender is {gender}</h1>
        </>
    );
}

export default Props;