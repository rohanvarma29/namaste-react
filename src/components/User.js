
const User = (props)=>{
    return(
        <div className="user-card">
            <h2>name: {props.name}</h2>
            <h3>location: Hyderabad</h3>
            <h3>contact: rohangaddam95@gmail.com</h3>
        </div>
    );
};

export default User;